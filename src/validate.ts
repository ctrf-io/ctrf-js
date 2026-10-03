/**
 * CTRF Validation
 */

import Ajv from "ajv";
import addFormats from "ajv-formats";
import { schema, getSchema } from "./schema.js";
import { ValidationError } from "./errors.js";
import type {
	CTRFReport,
	AttemptHistoryEntry,
	ValidationResult,
	ValidationErrorDetail,
	ValidateOptions,
} from "./types.js";
import { REPORT_FORMAT, TEST_STATUSES } from "./constants.js";

function validateRetryHistories(report: CTRFReport): ValidationErrorDetail[] {
	const errors: ValidationErrorDetail[] = [];

	for (const [testIndex, test] of report.results.tests.entries()) {
		const path = `/results/tests/${testIndex}`;
		const retries = test.retries;
		const history = test.retryAttempts;

		if (history !== undefined && retries === undefined) {
			errors.push({
				message: "must define retries when retryAttempts is present",
				path: `${path}/retries`,
				keyword: "retryHistory",
			});
			continue;
		}

		if (retries !== undefined && retries > 0 && history === undefined) {
			errors.push({
				message: "must define retryAttempts when retries is greater than 0",
				path: `${path}/retryAttempts`,
				keyword: "retryHistory",
			});
			continue;
		}

		if (retries === 0 && history !== undefined) {
			errors.push({
				message: "must not define retryAttempts when retries is 0",
				path: `${path}/retryAttempts`,
				keyword: "retryHistory",
			});
			continue;
		}

		if (history === undefined || retries === undefined) continue;

		if (history.length !== retries) {
			errors.push({
				message: "must contain exactly retries entries",
				path: `${path}/retryAttempts`,
				keyword: "retryHistory",
			});
		}

		for (const [historyIndex, attempt] of history.entries()) {
			if (attempt.attempt !== historyIndex + 1) {
				errors.push({
					message: "attempt numbers must be contiguous and begin at 1",
					path: `${path}/retryAttempts/${historyIndex}/attempt`,
					keyword: "retryHistory",
				});
			}
		}
	}

	return errors;
}

/**
 * Validate a CTRF report against the JSON schema and normative cross-field
 * rules that JSON Schema cannot express.
 *
 * @group Core Operations
 * @param report - The object to validate
 * @param options - Validation options (e.g., specific spec version)
 * @returns Validation result containing `valid` boolean and `errors` array
 *
 * @example
 * ```typescript
 * const result = validate(report);
 * if (!result.valid) {
 *   console.log(result.errors);
 * }
 *
 * // Validate against specific version
 * const result = validate(report, { specVersion: '1.0.0' });
 * ```
 */
export function validate(
	report: unknown,
	options: ValidateOptions = {},
): ValidationResult {
	const ajv = new Ajv({ allErrors: true });
	addFormats(ajv);

	const schemaToUse = options.specVersion
		? getSchema(options.specVersion)
		: schema;

	const validateFn = ajv.compile(schemaToUse);
	const valid = validateFn(report);

	const errors: ValidationErrorDetail[] =
		validateFn.errors?.map((error) => ({
			message: error.message || "Unknown validation error",
			path: error.instancePath || "/",
			keyword: error.keyword,
		})) || [];

	if (valid) {
		errors.push(...validateRetryHistories(report as CTRFReport));
	}

	return { valid: errors.length === 0, errors };
}

/**
 *
 * @group Core Operations
 * Check if a report is valid (type guard).
 *
 * @param report - The object to validate
 * @returns true if the report is a valid CTRFReport
 *
 * @example
 * ```typescript
 * if (isValid(report)) {
 *   // TypeScript now knows report is CTRFReport
 *   console.log(report.results.summary.passed);
 * }
 * ```
 */
export function isValid(report: unknown): report is CTRFReport {
	const result = validate(report);
	return result.valid;
}

/**
 *
 * @group Core Operations
 * Validate a report and throw if invalid (assertion).
 *
 * @param report - The object to validate
 * @throws ValidationError if the report is invalid
 *
 * @example
 * ```typescript
 * try {
 *   validateStrict(report);
 *   // TypeScript now knows report is CTRFReport
 * } catch (e) {
 *   if (e instanceof ValidationError) {
 *     console.log(e.errors);
 *   }
 * }
 * ```
 */
export function validateStrict(report: unknown): asserts report is CTRFReport {
	const result = validate(report);

	if (!result.valid) {
		const errorMessages = result.errors
			.map((e) => `${e.path}: ${e.message}`)
			.join("\n");
		throw new ValidationError(
			`CTRF validation failed:\n${errorMessages}`,
			result.errors,
		);
	}
}

/**
 *
 * @group Type Guards
 * Checks if an object has the basic structure of a CTRF report.
 * This is a quick, lightweight check that doesn't validate against the full schema.
 *
 * @param report - The object to check
 * @returns true if the object appears to be a CTRF report
 *
 * @example
 * ```typescript
 * if (isCTRFReport(data)) {
 *   // data has reportFormat: 'CTRF'
 * }
 * ```
 */
export function isCTRFReport(
	report: unknown,
): report is { reportFormat: "CTRF" } {
	return (
		typeof report === "object" &&
		report !== null &&
		"reportFormat" in report &&
		(report as Record<string, unknown>).reportFormat === REPORT_FORMAT
	);
}

/**
 *
 * @group Type Guards
 * Type guard for Test objects.
 *
 * @param obj - Object to check
 * @returns true if the object is a Test
 */
export function isTest(
	obj: unknown,
): obj is { name: string; status: string; duration: number } {
	return (
		typeof obj === "object" &&
		obj !== null &&
		"name" in obj &&
		typeof (obj as Record<string, unknown>).name === "string" &&
		"status" in obj &&
		typeof (obj as Record<string, unknown>).status === "string" &&
		"duration" in obj &&
		typeof (obj as Record<string, unknown>).duration === "number"
	);
}

/**
 *
 * @group Type Guards
 * Type guard for TestStatus values.
 *
 * @param value - Value to check
 * @returns true if the value is a valid TestStatus
 */
export function isTestStatus(
	value: unknown,
): value is (typeof TEST_STATUSES)[number] {
	return (
		typeof value === "string" &&
		TEST_STATUSES.includes(value as (typeof TEST_STATUSES)[number])
	);
}

/**
 *
 * @group Type Guards
 * Type guard for attempt history entry objects.
 *
 * @param obj - Object to check
 * @returns true if the object has the required attempt-history fields
 */
export function isAttemptHistoryEntry(
	obj: unknown,
): obj is AttemptHistoryEntry {
	if (typeof obj !== "object" || obj === null) return false;
	const candidate = obj as Record<string, unknown>;

	return (
		Number.isInteger(candidate.attempt) &&
		(candidate.attempt as number) >= 1 &&
		isTestStatus(candidate.status)
	);
}

/**
 * Backward-compatible alias for {@link isAttemptHistoryEntry}.
 *
 * @deprecated Use `isAttemptHistoryEntry()`.
 */
export function isRetryAttempt(obj: unknown): obj is AttemptHistoryEntry {
	return isAttemptHistoryEntry(obj);
}

/**
 *
 * @group Type Guards
 * Check if a report has insights.
 *
 * @param report - The report to check
 * @returns true if the report has insights
 */
export function hasInsights(report: CTRFReport): boolean {
	return (
		report.insights !== undefined && Object.keys(report.insights).length > 0
	);
}
