[**CTRF v0.0.18-next.2**](../README.md)

***

[CTRF](../README.md) / index

# index

## Reference Implementation

### ctrf

Renames and re-exports [reference](../reference/README.md)

## Schema

- [~~InsightsMetric~~](interfaces/InsightsMetric.md)
- [~~Report~~](interfaces/Report.md)
- [~~RootInsights~~](interfaces/RootInsights.md)

## File Operations

- [~~readReportFromFile~~](functions/readReportFromFile.md)
- [~~readReportsFromDirectory~~](functions/readReportsFromDirectory.md)
- [~~readReportsFromGlobPattern~~](functions/readReportsFromGlobPattern.md)

## Report Processing

- [~~enrichReportWithInsights~~](functions/enrichReportWithInsights.md)
- [~~mergeReports~~](functions/mergeReports.md)
- [~~sortReportsByTimestamp~~](functions/sortReportsByTimestamp.md)
- [~~storePreviousResults~~](functions/storePreviousResults.md)

## Validation

- [~~isValidCtrfReport~~](functions/isValidCtrfReport.md)
- [~~validateReport~~](functions/validateReport.md)
- [~~validateReportStrict~~](functions/validateReportStrict.md)

## Tree Operations

- [~~findSuiteByName~~](functions/findSuiteByName.md)
- [~~findTestByName~~](functions/findTestByName.md)
- [~~flattenTree~~](functions/flattenTree.md)
- [~~getAllTests~~](functions/getAllTests.md)
- [~~getSuiteStats~~](functions/getSuiteStats.md)
- [~~organizeTestsBySuite~~](functions/organizeTestsBySuite.md)
- [~~traverseTree~~](functions/traverseTree.md)

## Test Operations

- [~~findTestById~~](functions/findTestById.md)
- [~~generateTestIdFromProperties~~](functions/generateTestIdFromProperties.md)
- [~~getTestId~~](functions/getTestId.md)
- [~~setTestId~~](functions/setTestId.md)
- [~~setTestIdsForReport~~](functions/setTestIdsForReport.md)

## Classes

- [BuilderError](classes/BuilderError.md)
- [CTRFError](classes/CTRFError.md)
- [FileError](classes/FileError.md)
- [ParseError](classes/ParseError.md)
- [ReportBuilder](classes/ReportBuilder.md)
- [SchemaVersionError](classes/SchemaVersionError.md)
- [TestBuilder](classes/TestBuilder.md)
- [ValidationError](classes/ValidationError.md)

## Enumerations

- [SortOrder](enumerations/SortOrder.md)

## Functions

- [calculateInsights](functions/calculateInsights.md)
- [calculateMetricDelta](functions/calculateMetricDelta.md)
- [calculatePercentChange](functions/calculatePercentChange.md)
- [calculateSummary](functions/calculateSummary.md)
- [calculateTestInsights](functions/calculateTestInsights.md)
- [enrichReportWithInsightsV2](functions/enrichReportWithInsightsV2.md)
- [filterTests](functions/filterTests.md)
- [findTest](functions/findTest.md)
- [formatAsPercentage](functions/formatAsPercentage.md)
- [formatMetricDeltaAsPercentage](functions/formatMetricDeltaAsPercentage.md)
- [generateReportId](functions/generateReportId.md)
- [generateTestId](functions/generateTestId.md)
- [getCurrentSpecVersion](functions/getCurrentSpecVersion.md)
- [getFailedTests](functions/getFailedTests.md)
- [getFlakyTests](functions/getFlakyTests.md)
- [getPassedTests](functions/getPassedTests.md)
- [getSchema](functions/getSchema.md)
- [getSkippedTests](functions/getSkippedTests.md)
- [getSupportedSpecVersions](functions/getSupportedSpecVersions.md)
- [getTestsByStatus](functions/getTestsByStatus.md)
- [getTestsBySuite](functions/getTestsBySuite.md)
- [getTestsByTag](functions/getTestsByTag.md)
- [getUniqueSuites](functions/getUniqueSuites.md)
- [getUniqueTags](functions/getUniqueTags.md)
- [groupBy](functions/groupBy.md)
- [hasInsights](functions/hasInsights.md)
- [isCTRFReport](functions/isCTRFReport.md)
- [isRetryAttempt](functions/isRetryAttempt.md)
- [isTest](functions/isTest.md)
- [isTestFlaky](functions/isTestFlaky.md)
- [isTestStatus](functions/isTestStatus.md)
- [isValid](functions/isValid.md)
- [mergeReportsV2](functions/mergeReportsV2.md)
- [parse](functions/parse.md)
- [readReport](functions/readReport.md)
- [readReportSync](functions/readReportSync.md)
- [recalculateSummary](functions/recalculateSummary.md)
- [stringify](functions/stringify.md)
- [validate](functions/validate.md)
- [validateStrict](functions/validateStrict.md)
- [writeReport](functions/writeReport.md)
- [writeReportSync](functions/writeReportSync.md)

## Interfaces

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
- [TestTree](interfaces/TestTree.md)
- [Tool](interfaces/Tool.md)
- [TreeNode](interfaces/TreeNode.md)
- [TreeOptions](interfaces/TreeOptions.md)
- [ValidateOptions](interfaces/ValidateOptions.md)
- [ValidationErrorDetail](interfaces/ValidationErrorDetail.md)
- [ValidationResult](interfaces/ValidationResult.md)

## Type Aliases

- [TestStatus](type-aliases/TestStatus.md)
- [TreeTest](type-aliases/TreeTest.md)

## Variables

- [CTRF\_NAMESPACE](variables/CTRF_NAMESPACE.md)
- [CURRENT\_SPEC\_VERSION](variables/CURRENT_SPEC_VERSION.md)
- [REPORT\_FORMAT](variables/REPORT_FORMAT.md)
- [schema](variables/schema.md)
- [SUPPORTED\_SPEC\_VERSIONS](variables/SUPPORTED_SPEC_VERSIONS.md)
- [TEST\_STATUSES](variables/TEST_STATUSES.md)
