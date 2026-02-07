/**
 * CTRF TypeScript SDK - Reference Implementation
 *
 * A complete TypeScript implementation for working with CTRF (Common Test Report Format) reports.
 *
 * @packageDocumentation
 */

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
} from './types.js'

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
// Summary Calculation
// ============================================================================

export { calculateSummary } from './summary.js'

// ============================================================================
// Builders
// ============================================================================

export { ReportBuilder, TestBuilder } from './builder.js'

// ============================================================================
// ID Generation
// ============================================================================

export { generateTestId, generateReportId } from './id.js'

// ============================================================================
// Parsing & Serialization
// ============================================================================

export { parse, stringify } from './parse.js'

// ============================================================================
// Merging
// ============================================================================

export { merge } from './merge.js'

// ============================================================================
// Filtering & Querying
// ============================================================================

export { filterTests, findTest } from './filter.js'

// ============================================================================
// Insights
// ============================================================================

export { addInsights, isTestFlaky } from './insights.js'

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
