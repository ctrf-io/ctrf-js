[**CTRF**](README.md)

***

# CTRF

CTRF TypeScript SDK - Reference Implementation

A complete TypeScript implementation for working with CTRF (Common Test Report Format) reports.

## Core Operations

- [validate](functions/validate.md)

## Core Types

- [CTRFReport](interfaces/CTRFReport.md)
- [Results](interfaces/Results.md)
- [Tool](interfaces/Tool.md)
- [Summary](interfaces/Summary.md)
- [Test](interfaces/Test.md)
- [TestStatus](type-aliases/TestStatus.md)
- [RetryAttempt](interfaces/RetryAttempt.md)
- [Attachment](interfaces/Attachment.md)
- [Step](interfaces/Step.md)
- [Environment](interfaces/Environment.md)
- [Baseline](interfaces/Baseline.md)

## Insights

- [Insights](interfaces/Insights.md)
- [TestInsights](interfaces/TestInsights.md)
- [MetricDelta](interfaces/MetricDelta.md)

## Core Options

- [SummaryOptions](interfaces/SummaryOptions.md)
- [ParseOptions](interfaces/ParseOptions.md)
- [StringifyOptions](interfaces/StringifyOptions.md)

## Builder Options

- [ReportBuilderOptions](interfaces/ReportBuilderOptions.md)
- [TestBuilderOptions](interfaces/TestBuilderOptions.md)

## Query & Filter Options

- [FilterCriteria](interfaces/FilterCriteria.md)

## Insights Options

- [InsightsOptions](interfaces/InsightsOptions.md)

## Merge Options

- [MergeOptions](interfaces/MergeOptions.md)

## Validation Options

- [ValidationResult](interfaces/ValidationResult.md)
- [ValidationErrorDetail](interfaces/ValidationErrorDetail.md)
- [ValidateOptions](interfaces/ValidateOptions.md)

## Builders
Fluent builder for constructing CTRF reports.

- [ReportBuilder](classes/ReportBuilder.md)

## Builders
Fluent builder for constructing Test objects.

- [TestBuilder](classes/TestBuilder.md)

## Core Operations
Calculate summary statistics from an array of tests.

- [calculateSummary](functions/calculateSummary.md)

## Core Operations
Check if a report is valid (type guard).

- [isValid](functions/isValid.md)

## Core Operations
Parse a JSON string into a CTRFReport.

- [parse](functions/parse.md)

## Core Operations
Serialize a CTRFReport to a JSON string.

- [stringify](functions/stringify.md)

## Core Operations
Validate a report and throw if invalid (assertion).

- [validateStrict](functions/validateStrict.md)

## Errors
Base error class for all CTRF errors.
All CTRF-specific errors extend this class.

- [CTRFError](classes/CTRFError.md)

## Errors
Error thrown when JSON parsing fails.

- [ParseError](classes/ParseError.md)

## Errors
Error thrown when a file read or write operation fails.

- [FileError](classes/FileError.md)

## Errors
Error thrown when an unsupported CTRF specification version is encountered.

- [SchemaVersionError](classes/SchemaVersionError.md)

## Errors
Error thrown when building a report or test fails due to missing required fields.

- [BuilderError](classes/BuilderError.md)

## Errors
Error thrown when schema validation fails.
Contains detailed error information for each validation issue.

- [ValidationError](classes/ValidationError.md)

## ID Generation
Generate a deterministic UUID v5 for a test based on its properties.
The same inputs will always produce the same UUID, enabling
cross-run analysis and test identification.

- [generateTestId](functions/generateTestId.md)

## ID Generation
Generate a random UUID v4 for report identification.

- [generateReportId](functions/generateReportId.md)

## Insights
Add insights to a CTRF report using historical data.

Computes run-level and test-level insights according to the CTRF specification,
including pass rate, fail rate, flaky rate, and duration metrics.

- [addInsights](functions/addInsights.md)

## Insights
Determines if a test is flaky based on the CTRF specification.

A test is considered flaky if:
- The `flaky` field is explicitly set to `true`, OR
- The test has retries > 0 AND final status is 'passed'

- [isTestFlaky](functions/isTestFlaky.md)

## Merge
Merge multiple CTRF reports into a single report.
Useful for combining results from parallel or sharded test runs.

- [merge](functions/merge.md)

## Query & Filter
Filter tests in a report by criteria.

- [filterTests](functions/filterTests.md)

## Query & Filter
Find a single test in a report.

- [findTest](functions/findTest.md)

## Schema & Versioning
Get all supported spec versions.

- [getSupportedSpecVersions](functions/getSupportedSpecVersions.md)

## Schema & Versioning
Get the JSON Schema for a specific CTRF spec version.

- [getSchema](functions/getSchema.md)

## Schema & Versioning
Get the current spec version.

- [getCurrentSpecVersion](functions/getCurrentSpecVersion.md)

## Schema & Versioning
The current version CTRF JSON Schema object.

- [schema](variables/schema.md)

## Type Guards
Check if a report has insights.

- [hasInsights](functions/hasInsights.md)

## Type Guards
Checks if an object has the basic structure of a CTRF report.
This is a quick, lightweight check that doesn't validate against the full schema.

- [isCTRFReport](functions/isCTRFReport.md)

## Type Guards
Type guard for RetryAttempt objects.

- [isRetryAttempt](functions/isRetryAttempt.md)

## Type Guards
Type guard for Test objects.

- [isTest](functions/isTest.md)

## Type Guards
Type guard for TestStatus values.

- [isTestStatus](functions/isTestStatus.md)

## Variables

- [REPORT\_FORMAT](variables/REPORT_FORMAT.md)
- [CURRENT\_SPEC\_VERSION](variables/CURRENT_SPEC_VERSION.md)
- [TEST\_STATUSES](variables/TEST_STATUSES.md)
- [SUPPORTED\_SPEC\_VERSIONS](variables/SUPPORTED_SPEC_VERSIONS.md)
- [CTRF\_NAMESPACE](variables/CTRF_NAMESPACE.md)
