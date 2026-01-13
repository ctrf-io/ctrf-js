/**
 * @group Report Processing
 * @deprecated Use `ctrf.mergeReports` from the reference implementation instead. Will be removed in v1.
 */
export { mergeReports } from './methods/merge-reports.js'
/**
 * @group File Operations
 * @deprecated Use `ctrf.readReport` or `ctrf.readReportSync` from the reference implementation instead. Will be removed in v1.
 */
export { readReportFromFile } from './methods/read-reports.js'
/**
 * @group File Operations
 * @deprecated Use `ctrf.readReport` with glob patterns from the reference implementation instead. Will be removed in v1.
 */
export { readReportsFromDirectory } from './methods/read-reports.js'
/**
 * @group File Operations
 * @deprecated Use `ctrf.readReport` with glob patterns from the reference implementation instead. Will be removed in v1.
 */
export { readReportsFromGlobPattern } from './methods/read-reports.js'
/**
 * @group Report Processing
 * @deprecated Use `ctrf.enrichReportWithInsights` from the reference implementation instead. Will be removed in v1.
 */
export { enrichReportWithInsights } from './methods/run-insights.js'
/**
 * @group Report Processing
 * @deprecated Use sorting utilities from the reference implementation instead. Will be removed in v1.
 */
export {
  sortReportsByTimestamp,
  SortOrder,
} from './methods/utilities/sort-reports.js'
/**
 * @group Report Processing
 * @deprecated Will be removed in v1.
 */
export { storePreviousResults } from './methods/store-previous-results.js'
/**
 * @group Validation
 * @deprecated Use `ctrf.validate` or `ctrf.validateStrict` from the reference implementation instead. Will be removed in v1.
 */
export {
  validateReport,
  validateReportStrict,
  isValidCtrfReport,
} from './methods/validate-schema.js'
/**
 * @group Tree Operations
 * @deprecated Use `ctrf.filterTests` and related utilities from the reference implementation instead. Will be removed in v1.
 */
export {
  organizeTestsBySuite,
  traverseTree,
  findSuiteByName,
  findTestByName,
  flattenTree,
  getAllTests,
  getSuiteStats,
} from './methods/tree-hierarchical-structure.js'
/**
 * @group Test Operations
 * @deprecated Use `ctrf.generateTestId` or `ctrf.setTestId` from the reference implementation instead. Will be removed in v1.
 */
export {
  setTestId,
  getTestId,
  setTestIdsForReport,
  findTestById,
  generateTestIdFromProperties,
} from './methods/test-id.js'

/**
 * @group Schema
 * @deprecated Use types from `ctrf` namespace (e.g., `ctrf.CTRFReport`, `ctrf.Test`) or direct imports instead. Will be removed in v1.
 */
export type { Report, RootInsights, InsightsMetric } from '../types/ctrf.js'

/**
 * @group Utility Types
 * @deprecated Use types from `ctrf` namespace instead. Will be removed in v1.
 */
export type {
  TreeNode,
  TreeTest,
  TreeOptions,
  TestTree,
} from './methods/tree-hierarchical-structure.js'

// =============================================================================
// Reference Implementation (v2 API)
// =============================================================================

/**
 * Reference Implementation - Modern CTRF SDK API
 *
 * Import the new API via the `ctrf` namespace or use direct imports:
 * ```typescript
 * // Option 1: Namespace (current - avoids conflicts with deprecated types)
 * import { ctrf } from 'ctrf';
 * const report = new ctrf.ReportBuilder()
 *   .tool({ name: 'jest' })
 *   .addTest(new ctrf.TestBuilder().name('test').status('passed').duration(100).build())
 *   .build();
 * ctrf.validateStrict(report);
 *
 * // Option 2: Direct imports (preferred for v1+ when old types are removed)
 * import { CTRFReport, validate, ReportBuilder } from 'ctrf';
 * const report: CTRFReport = new ReportBuilder().tool({ name: 'jest' }).build();
 * validate(report);
 * ```
 *
 * @group Reference Implementation
 */
export * as ctrf from './reference/index.js'

// Re-export reference implementation for direct access
// These will become the primary exports in v1 when deprecated methods are removed
export type {
  CTRFReport,
  Results,
  Tool,
  Summary,
  Test,
  Environment,
  RetryAttempt,
  Attachment,
  Step,
  Insights,
  TestInsights,
  MetricDelta,
  Baseline,
  TestStatus,
  ValidationResult,
  ValidationErrorDetail,
  MergeOptions,
  FilterCriteria,
  InsightsOptions,
  ReportBuilderOptions,
  TestBuilderOptions,
  SummaryOptions,
  ParseOptions,
  StringifyOptions,
  ValidateOptions,
} from './reference/types.js'

export {
  REPORT_FORMAT,
  CURRENT_SPEC_VERSION,
  TEST_STATUSES,
  SUPPORTED_SPEC_VERSIONS,
  CTRF_NAMESPACE,
} from './reference/constants.js'

export {
  validate,
  isValid,
  validateStrict,
  isCTRFReport,
  isTest,
  isTestStatus,
  isRetryAttempt,
  hasInsights,
} from './reference/validate.js'

export { ReportBuilder, TestBuilder } from './reference/builder.js'

export { calculateSummary, recalculateSummary } from './reference/summary.js'

export { generateTestId, generateReportId } from './reference/id.js'

export {
  parse,
  stringify,
  readReport,
  readReportSync,
  writeReport,
  writeReportSync,
} from './reference/parse.js'

export { mergeReports as mergeReportsV2 } from './reference/merge.js'

export {
  filterTests,
  findTest,
  groupBy,
  getTestsByStatus,
  getFailedTests,
  getPassedTests,
  getSkippedTests,
  getFlakyTests,
  getTestsByTag,
  getTestsBySuite,
  getUniqueSuites,
  getUniqueTags,
} from './reference/filter.js'

export {
  calculateInsights,
  calculateTestInsights,
  calculateMetricDelta,
  enrichReportWithInsights as enrichReportWithInsightsV2,
  isTestFlaky,
  formatAsPercentage,
  formatMetricDeltaAsPercentage,
  calculatePercentChange,
} from './reference/insights.js'

export {
  schema,
  getSchema,
  getCurrentSpecVersion,
  getSupportedSpecVersions,
} from './reference/schema.js'

export {
  CTRFError,
  ValidationError,
  ParseError,
  SchemaVersionError,
  FileError,
  BuilderError,
} from './reference/errors.js'
