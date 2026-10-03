import { describe, it, expect } from "vitest";
import {
	REPORT_FORMAT,
	CURRENT_SPEC_VERSION,
	TEST_STATUSES,
	SUPPORTED_SPEC_VERSIONS,
	CTRF_NAMESPACE,
} from "./constants.js";

describe("constants", () => {
	describe("REPORT_FORMAT", () => {
		it("should be CTRF", () => {
			expect(REPORT_FORMAT).toBe("CTRF");
		});
	});

	describe("CURRENT_SPEC_VERSION", () => {
		it("should be a valid semver string", () => {
			expect(CURRENT_SPEC_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
		});

		it("should identify the latest published specification", () => {
			expect(CURRENT_SPEC_VERSION).toBe("0.1.0");
		});
	});

	describe("TEST_STATUSES", () => {
		it("should contain all valid statuses", () => {
			expect(TEST_STATUSES).toContain("passed");
			expect(TEST_STATUSES).toContain("failed");
			expect(TEST_STATUSES).toContain("skipped");
			expect(TEST_STATUSES).toContain("pending");
			expect(TEST_STATUSES).toContain("other");
		});

		it("should have exactly 5 statuses", () => {
			expect(TEST_STATUSES).toHaveLength(5);
		});
	});

	describe("SUPPORTED_SPEC_VERSIONS", () => {
		it("should include the current version", () => {
			expect(SUPPORTED_SPEC_VERSIONS).toContain(CURRENT_SPEC_VERSION);
		});

		it("should contain every published CTRF specification version", () => {
			expect(SUPPORTED_SPEC_VERSIONS).toEqual([
				"0.0.1",
				"0.0.2",
				"0.0.3",
				"0.0.4",
				"0.1.0",
			]);
		});
	});

	describe("CTRF_NAMESPACE", () => {
		it("should be a valid UUID", () => {
			expect(CTRF_NAMESPACE).toMatch(
				/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
			);
		});
	});
});
