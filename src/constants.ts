/**
 * CTRF Constants
 */

/** The CTRF report format identifier */
export const REPORT_FORMAT = "CTRF" as const;

/** Current spec version */
export const CURRENT_SPEC_VERSION = "0.1.0";

/** All valid test statuses */
export const TEST_STATUSES = [
	"passed",
	"failed",
	"skipped",
	"pending",
	"other",
] as const;

/** Supported specification versions */
export const SUPPORTED_SPEC_VERSIONS = [
	"0.0.1",
	"0.0.2",
	"0.0.3",
	"0.0.4",
	"0.1.0",
] as const;

/** A published CTRF specification version supported by this package */
export type SupportedSpecVersion = (typeof SUPPORTED_SPEC_VERSIONS)[number];

/** A published CTRF specification version or the current-version alias */
export type SchemaSelector = SupportedSpecVersion | "latest";

/** CTRF namespace UUID for deterministic ID generation */
export const CTRF_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
