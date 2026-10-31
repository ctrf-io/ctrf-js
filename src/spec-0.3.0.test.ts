import { describe, expect, it } from "vitest";
import {
	ReportBuilder,
	TestBuilder,
	addInsights,
	filterTests,
	merge,
	parse,
	stringify,
	validate,
	validateStrict,
	type AssertionFailure,
	type GlobalError,
} from "./index.js";

function reportWithDiagnostics() {
	const assertion: AssertionFailure = { expected: "200", actual: "500" };
	const error: GlobalError = { message: "Worker initialization failed" };
	return new ReportBuilder()
		.tool({ name: "runner" })
		.addError(error)
		.addTest(
			new TestBuilder()
				.name("checkout")
				.description("")
				.status("failed")
				.duration(100)
				.threadId("")
				.stdout([])
				.stderr([])
				.addAssertionFailure(assertion)
				.addAttemptHistoryEntry({
					attempt: 1,
					status: "failed",
					threadId: "host-a/worker-1",
					assertionFailures: [{ message: "Request timed out" }],
				})
				.build(),
		)
		.build();
}

describe("specification 0.3.0", () => {
	it("builds final/history diagnostics without inflating counts", () => {
		const report = reportWithDiagnostics();
		expect(report.specVersion).toBe("0.3.0");
		expect(report.results.summary).toMatchObject({ tests: 1, failed: 1 });
		expect(report.results.tests[0]).toMatchObject({
			description: "",
			threadId: "",
			stdout: [],
			stderr: [],
			retries: 1,
			assertionFailures: [{ expected: "200", actual: "500" }],
			retryAttempts: [{ threadId: "host-a/worker-1" }],
		});
		expect(() => validateStrict(report)).not.toThrow();
	});

	it("omits optional collections when no diagnostics were added", () => {
		const report = new ReportBuilder()
			.tool({ name: "runner" })
			.addTest(
				new TestBuilder().name("ok").status("passed").duration(0).build(),
			)
			.build();
		expect(report.results).not.toHaveProperty("errors");
		expect(report.results.tests[0]).not.toHaveProperty("assertionFailures");
		expect(report.results.tests[0]).not.toHaveProperty("description");
		expect(validate(report).valid).toBe(true);
	});

	it("supports global errors with zero reported tests", () => {
		const report = new ReportBuilder()
			.tool({ name: "runner" })
			.addError({ trace: "InitializationError" })
			.build();
		expect(report.results.summary.tests).toBe(0);
		expect(validate(report).valid).toBe(true);
	});

	it("preserves diagnostics through serialization, filtering and enrichment", () => {
		const report = reportWithDiagnostics();
		const parsed = parse(stringify(report), { validate: true });
		expect(parsed).toEqual(report);
		expect(filterTests(parsed, { status: "failed" })).toEqual(
			report.results.tests,
		);
		for (const result of [addInsights(parsed, [])]) {
			expect(result.results.errors).toEqual(report.results.errors);
			expect(result.results.tests[0]).toMatchObject(report.results.tests[0]);
			expect(validate(result).valid).toBe(true);
		}
	});

	it.each([true, false])(
		"retains all global errors when mergeSummary=%s",
		(mergeSummary) => {
			const first = reportWithDiagnostics();
			const second = reportWithDiagnostics();
			second.results.errors = [{ message: "Second worker failed" }];
			const merged = merge([first, second], { mergeSummary });
			expect(merged.results.errors).toEqual([
				{ message: "Worker initialization failed" },
				{ message: "Second worker failed" },
			]);
			expect(merged.results.summary).toMatchObject({ tests: 2, failed: 2 });
			expect(merged.results.tests).toEqual([
				first.results.tests[0],
				second.results.tests[0],
			]);
			expect(validate(merged).valid).toBe(true);
			expect(first.results.errors).toHaveLength(1);
		},
	);

	it("keeps arbitrary extension values opaque", () => {
		const report = reportWithDiagnostics();
		report.extra = {
			"vendor.data": [null, 1, "value"],
			"ctrf.example": { extensionVersion: "99.0.0" },
		};
		expect(validate(report).valid).toBe(true);
		expect(parse(stringify(report)).extra).toEqual(report.extra);
	});

	for (const location of ["final", "history", "global"] as const) {
		const setDiagnostics = (
			report: ReturnType<typeof reportWithDiagnostics>,
			value: unknown,
		) => {
			if (location === "global") report.results.errors = value as GlobalError[];
			else if (location === "final")
				report.results.tests[0].assertionFailures = value as AssertionFailure[];
			else
				(report.results.tests[0].retryAttempts ?? [])[0].assertionFailures =
					value as AssertionFailure[];
		};

		it.each(
			[
				[],
				[{}],
				[null],
				[{ message: 1 }],
				[{ trace: false }],
				[{ unknown: "value" }],
				[{ extra: [] }],
			].map((value) => [value]),
		)(`rejects invalid ${location} diagnostic collection %j`, (value) => {
			const report = reportWithDiagnostics();
			setDiagnostics(report, value);
			expect(validate(report).valid).toBe(false);
		});
		it.each(
			[[{ message: "" }], [{ trace: "" }], [{ extra: {} }]].map((value) => [
				value,
			]),
		)(`accepts populated ${location} entries with empty values %j`, (value) => {
			const report = reportWithDiagnostics();
			setDiagnostics(report, value);
			expect(validate(report).valid).toBe(true);
		});
	}

	it.each([123, null, false, {}, []].map((value) => [value]))(
		"rejects non-string history threadId %j",
		(value) => {
			const report = reportWithDiagnostics();
			(report.results.tests[0].retryAttempts ?? [])[0].threadId =
				value as never;
			expect(validate(report).valid).toBe(false);
		},
	);

	it.each([123, null, false, {}, []].map((value) => [value]))(
		"rejects non-string description %j",
		(value) => {
			const report = reportWithDiagnostics();
			report.results.tests[0].description = value as never;
			expect(validate(report).valid).toBe(false);
		},
	);

	it.each(["expected", "actual"] as const)(
		"requires string assertion %s",
		(key) => {
			const report = reportWithDiagnostics();
			(report.results.tests[0].assertionFailures ?? [])[0][key] = 123 as never;
			expect(validate(report).valid).toBe(false);
			(report.results.tests[0].assertionFailures ?? [])[0][key] = "";
			expect(validate(report).valid).toBe(true);
		},
	);

	it("continues enforcing retry count and sequence semantics", () => {
		const report = reportWithDiagnostics();
		report.results.tests[0].retries = 2;
		expect(validate(report).errors).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ keyword: "retryHistory" }),
			]),
		);
		report.results.tests[0].retries = 1;
		(report.results.tests[0].retryAttempts ?? [])[0].attempt = 2;
		expect(validate(report).valid).toBe(false);
	});

	it("does not relabel legacy reports or implicitly convert mixed versions", () => {
		const legacy = new ReportBuilder()
			.specVersion("0.0.3")
			.tool({ name: "runner" })
			.addTest({ name: "legacy", status: "passed", duration: 0, retries: 1 })
			.build();
		expect(validate(legacy, { specVersion: "0.0.3" }).valid).toBe(true);
		const result = merge([legacy, structuredClone(legacy)]);
		expect(result.specVersion).toBe("0.0.3");
		expect(validate(result, { specVersion: "0.0.3" }).valid).toBe(true);
		expect(() => merge([legacy, reportWithDiagnostics()])).toThrow(
			"different specification versions",
		);
	});

	it("keeps 0.3.0 additions out of historical schemas", () => {
		expect(
			validate(reportWithDiagnostics(), { specVersion: "0.2.0" }).valid,
		).toBe(false);
	});
});
