<!-- This file is used as the landing page for TypeDoc-generated API documentation.
     It's referenced in typedoc.json and manually maintained.
     When adding new public exports, add them to the appropriate section below. -->

# CTRF TypeScript Reference Implementation

A complete TypeScript implementation for working with CTRF (Common Test Report Format) reports.

## Quick Start

### Core Operations

The core functions for working with CTRF reports:

- **[validate](functions/validate.md)** - Validate a report against the JSON schema
- **[isValid](functions/isValid.md)** - Type guard to check if a report is valid
- **[validateStrict](functions/validateStrict.md)** - Validate and throw on invalid reports
- **[parse](functions/parse.md)** - Parse JSON string into a CTRFReport
- **[stringify](functions/stringify.md)** - Serialize a CTRFReport to JSON
- **[calculateSummary](functions/calculateSummary.md)** - Calculate test statistics

### Building Reports

Fluent API for constructing CTRF reports programmatically:

- **[ReportBuilder](classes/ReportBuilder.md)** - Build complete CTRF reports
- **[TestBuilder](classes/TestBuilder.md)** - Build individual test objects

### CTRF Report Types

The core schema types that define CTRF structure (what consumers import):

**Primary Types:**

- **[CTRFReport](interfaces/CTRFReport.md)** - Root report object
- **[Test](interfaces/Test.md)** - Individual test result
- **[Results](interfaces/Results.md)** - Container for test results
- **[Summary](interfaces/Summary.md)** - Aggregated statistics
- **[Tool](interfaces/Tool.md)** - Test tool information
- **[Environment](interfaces/Environment.md)** - Environment metadata

**Supporting Types:**

- [Attachment](interfaces/Attachment.md) - Files/data attached to tests
- [Step](interfaces/Step.md) - Individual test execution steps
- [RetryAttempt](interfaces/RetryAttempt.md) - Test retry information
- [Insights](interfaces/Insights.md) - Historical run insights
- [TestInsights](interfaces/TestInsights.md) - Historical test insights
- [Baseline](interfaces/Baseline.md) - Baseline comparison metrics
- [MetricDelta](interfaces/MetricDelta.md) - Metric change tracking
- [TestStatus](type-aliases/TestStatus.md) - Valid test status values

## API Reference by Category

### Query & Filter

- [filterTests](functions/filterTests.md) - Filter tests by criteria
- [findTest](functions/findTest.md) - Find a single test

### Insights

- [addInsights](functions/addInsights.md) - Add historical insights to reports
- [isTestFlaky](functions/isTestFlaky.md) - Detect flaky tests

### Merge

- [merge](functions/merge.md) - Combine multiple reports

### Schema & Versioning

- [getSchema](functions/getSchema.md) - Get JSON Schema for a spec version
- [getCurrentSpecVersion](functions/getCurrentSpecVersion.md) - Get current version
- [getSupportedSpecVersions](functions/getSupportedSpecVersions.md) - List supported versions
- [schema](variables/schema.md) - Current schema object

### Type Guards

Runtime type checking functions:

- [isCTRFReport](functions/isCTRFReport.md) - Check if object is a CTRF report
- [isTest](functions/isTest.md) - Check if object is a Test
- [isTestStatus](functions/isTestStatus.md) - Check if value is a valid status
- [isRetryAttempt](functions/isRetryAttempt.md) - Check if object is a retry attempt
- [hasInsights](functions/hasInsights.md) - Check if report has insights

### ID Generation

- [generateTestId](functions/generateTestId.md) - Generate deterministic test UUID
- [generateReportId](functions/generateReportId.md) - Generate random report UUID

### Constants

- [REPORT_FORMAT](variables/REPORT_FORMAT.md) - CTRF format identifier
- [CURRENT_SPEC_VERSION](variables/CURRENT_SPEC_VERSION.md) - Current spec version
- [TEST_STATUSES](variables/TEST_STATUSES.md) - Valid test statuses
- [SUPPORTED_SPEC_VERSIONS](variables/SUPPORTED_SPEC_VERSIONS.md) - Supported versions
- [CTRF_NAMESPACE](variables/CTRF_NAMESPACE.md) - UUID namespace

### Error Classes

- [CTRFError](classes/CTRFError.md) - Base error class
- [ValidationError](classes/ValidationError.md) - Schema validation errors
- [ParseError](classes/ParseError.md) - JSON parsing errors
- [SchemaVersionError](classes/SchemaVersionError.md) - Unsupported version errors
- [FileError](classes/FileError.md) - File operation errors
- [BuilderError](classes/BuilderError.md) - Builder validation errors

### Library Types

Helper types for using this library's utilities (not part of CTRF schema):

- [FilterCriteria](interfaces/FilterCriteria.md) - Options for filtering tests
- [ReportBuilderOptions](interfaces/ReportBuilderOptions.md) - Report builder configuration
- [TestBuilderOptions](interfaces/TestBuilderOptions.md) - Test builder configuration
- [ParseOptions](interfaces/ParseOptions.md) - JSON parsing options
- [ValidateOptions](interfaces/ValidateOptions.md) - Validation options
- [ValidationResult](interfaces/ValidationResult.md) - Validation result details
- [ValidationErrorDetail](interfaces/ValidationErrorDetail.md) - Validation error information
- [MergeOptions](interfaces/MergeOptions.md) - Report merge options
- [InsightsOptions](interfaces/InsightsOptions.md) - Insights configuration
- [StringifyOptions](interfaces/StringifyOptions.md) - JSON serialization options
- [SummaryOptions](interfaces/SummaryOptions.md) - Summary calculation options

## Complete API Index

<details>
<summary>All Classes</summary>

- [BuilderError](classes/BuilderError.md)
- [CTRFError](classes/CTRFError.md)
- [FileError](classes/FileError.md)
- [ParseError](classes/ParseError.md)
- [ReportBuilder](classes/ReportBuilder.md)
- [SchemaVersionError](classes/SchemaVersionError.md)
- [TestBuilder](classes/TestBuilder.md)
- [ValidationError](classes/ValidationError.md)

</details>

<details>
<summary>All Functions</summary>

- [addInsights](functions/addInsights.md)
- [calculateSummary](functions/calculateSummary.md)
- [filterTests](functions/filterTests.md)
- [findTest](functions/findTest.md)
- [generateReportId](functions/generateReportId.md)
- [generateTestId](functions/generateTestId.md)
- [getCurrentSpecVersion](functions/getCurrentSpecVersion.md)
- [getSchema](functions/getSchema.md)
- [getSupportedSpecVersions](functions/getSupportedSpecVersions.md)
- [hasInsights](functions/hasInsights.md)
- [isCTRFReport](functions/isCTRFReport.md)
- [isRetryAttempt](functions/isRetryAttempt.md)
- [isTest](functions/isTest.md)
- [isTestFlaky](functions/isTestFlaky.md)
- [isTestStatus](functions/isTestStatus.md)
- [isValid](functions/isValid.md)
- [merge](functions/merge.md)
- [parse](functions/parse.md)
- [stringify](functions/stringify.md)
- [validate](functions/validate.md)
- [validateStrict](functions/validateStrict.md)

</details>

<details>
<summary>All Interfaces</summary>

- [Attachment](interfaces/Attachment.md)
- [Baseline](interfaces/Baseline.md)
- [CTRFReport](interfaces/CTRFReport.md)
- [Environment](interfaces/Environment.md)
- [FilterCriteria](interfaces/FilterCriteria.md)
- [Insights](interfaces/Insights.md)
- [InsightsOptions](interfaces/InsightsOptions.md)
- [MergeOptions](interfaces/MergeOptions.md)
- [MetricDelta](interfaces/MetricDelta.md)
- [ParseOptions](interfaces/ParseOptions.md)
- [ReportBuilderOptions](interfaces/ReportBuilderOptions.md)
- [Results](interfaces/Results.md)
- [RetryAttempt](interfaces/RetryAttempt.md)
- [Step](interfaces/Step.md)
- [StringifyOptions](interfaces/StringifyOptions.md)
- [Summary](interfaces/Summary.md)
- [SummaryOptions](interfaces/SummaryOptions.md)
- [Test](interfaces/Test.md)
- [TestBuilderOptions](interfaces/TestBuilderOptions.md)
- [TestInsights](interfaces/TestInsights.md)
- [Tool](interfaces/Tool.md)
- [ValidateOptions](interfaces/ValidateOptions.md)
- [ValidationErrorDetail](interfaces/ValidationErrorDetail.md)
- [ValidationResult](interfaces/ValidationResult.md)

</details>

<details>
<summary>All Type Aliases</summary>

- [TestStatus](type-aliases/TestStatus.md)

</details>

<details>
<summary>All Variables</summary>

- [CTRF_NAMESPACE](variables/CTRF_NAMESPACE.md)
- [CURRENT_SPEC_VERSION](variables/CURRENT_SPEC_VERSION.md)
- [REPORT_FORMAT](variables/REPORT_FORMAT.md)
- [schema](variables/schema.md)
- [SUPPORTED_SPEC_VERSIONS](variables/SUPPORTED_SPEC_VERSIONS.md)
- [TEST_STATUSES](variables/TEST_STATUSES.md)

</details>
