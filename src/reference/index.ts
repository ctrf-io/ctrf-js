/**
 * CTRF TypeScript SDK - Reference Implementation
 *
 * A complete TypeScript implementation for working with CTRF (Common Test Report Format) reports.
 *
 * @packageDocumentation
 */

// ============================================================================
// Types
// ============================================================================

export type {
  // Core document types
  CTRFReport,
  Results,

  // Object types
  Tool,
  Summary,
  Test,
  Environment,
  RetryAttempt,
  Attachment,
  Step,

  // Insights types
  Insights,
  TestInsights,
  MetricDelta,
  Baseline,

  // Status type
  TestStatus,

  // Utility types
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
} from './types.js'

// ============================================================================
// Constants
// ============================================================================

export {
  REPORT_FORMAT,
  CURRENT_SPEC_VERSION,
  TEST_STATUSES,
  SUPPORTED_SPEC_VERSIONS,
  CTRF_NAMESPACE,
} from './constants.js'

// ============================================================================
// Validation
// ============================================================================

export {
  validate,
  isValid,
  validateStrict,
  isCTRFReport,
  isTest,
  isTestStatus,
  isRetryAttempt,
  hasInsights,
} from './validate.js'

// ============================================================================
// Builders
// ============================================================================

export { ReportBuilder, TestBuilder } from './builder.js'

// ============================================================================
// Summary
// ============================================================================

export { calculateSummary, recalculateSummary } from './summary.js'

// ============================================================================
// ID Generation
// ============================================================================

export { generateTestId, generateReportId } from './id.js'

// ============================================================================
// Parsing & Serialization
// ============================================================================

export {
  parse,
  stringify,
  readReport,
  readReportSync,
  writeReport,
  writeReportSync,
} from './parse.js'

// ============================================================================
// Merging
// ============================================================================

export { mergeReports } from './merge.js'

// ============================================================================
// Filtering & Querying
// ============================================================================

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
} from './filter.js'

// ============================================================================
// Insights
// ============================================================================

export {
  calculateInsights,
  calculateTestInsights,
  calculateMetricDelta,
  enrichReportWithInsights,
  // Utility functions
  isTestFlaky,
  formatAsPercentage,
  formatMetricDeltaAsPercentage,
  calculatePercentChange,
} from './insights.js'

// ============================================================================
// Schema
// ============================================================================

export {
  schema,
  getSchema,
  getCurrentSpecVersion,
  getSupportedSpecVersions,
} from './schema.js'

// ============================================================================
// Errors
// ============================================================================

export {
  CTRFError,
  ValidationError,
  ParseError,
  SchemaVersionError,
  FileError,
  BuilderError,
} from './errors.js'
