/**
 * CTRF TypeScript Types
 * Generated from the CTRF JSON Schema specification
 */

// ============================================================================
// Core Types
// ============================================================================

/**
 * The root CTRF report object
 *
 * @group Core Types
 */
export interface CTRFReport {
  /** Must be 'CTRF' */
  reportFormat: 'CTRF'
  /** Semantic version of the CTRF specification */
  specVersion: string
  /** Unique identifier for this report (UUID v4) */
  reportId?: string
  /** ISO 8601 timestamp when the report was generated */
  timestamp?: string
  /** Name of the tool/library that generated this report */
  generatedBy?: string
  /** The test results */
  results: Results
  /** Run-level insights computed from historical data */
  insights?: Insights
  /** Reference to a baseline report for comparison */
  baseline?: Baseline
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Container for test results
 *
 * @group Core Types
 */
export interface Results {
  /** Information about the test tool */
  tool: Tool
  /** Aggregated test statistics */
  summary: Summary
  /** Array of individual test results */
  tests: Test[]
  /** Environment information */
  environment?: Environment
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Test tool information
 *
 * @group Core Types
 */
export interface Tool {
  /** Name of the test tool (e.g., 'jest', 'playwright') */
  name: string
  /** Version of the test tool */
  version?: string
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Aggregated test statistics
 *
 * @group Core Types
 */
export interface Summary {
  /** Total number of tests */
  tests: number
  /** Number of passed tests */
  passed: number
  /** Number of failed tests */
  failed: number
  /** Number of skipped tests */
  skipped: number
  /** Number of pending tests */
  pending: number
  /** Number of tests with other status */
  other: number
  /** Number of flaky tests */
  flaky?: number
  /** Number of test suites */
  suites?: number
  /** Start timestamp (Unix epoch milliseconds) */
  start: number
  /** Stop timestamp (Unix epoch milliseconds) */
  stop: number
  /** Total duration in milliseconds */
  duration?: number
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Individual test result
 *
 * @group Core Types
 */
export interface Test {
  /** Unique test identifier (UUID) */
  id?: string
  /** Test name */
  name: string
  /** Test execution status */
  status: TestStatus
  /** Test duration in milliseconds */
  duration: number
  /** Start timestamp (Unix epoch milliseconds) */
  start?: number
  /** Stop timestamp (Unix epoch milliseconds) */
  stop?: number
  /** Test suite hierarchy */
  suite?: string[]
  /** Error message (for failed tests) */
  message?: string
  /** Stack trace (for failed tests) */
  trace?: string
  /** Code snippet where failure occurred */
  snippet?: string
  /** AI-generated analysis or suggestion */
  ai?: string
  /** Line number where test is defined or failed */
  line?: number
  /** Original status from the test framework */
  rawStatus?: string
  /** Tags for categorization */
  tags?: string[]
  /** Test type (e.g., 'unit', 'integration', 'e2e') */
  type?: string
  /** Path to the test file */
  filePath?: string
  /** Number of retry attempts */
  retries?: number
  /** Details of each retry attempt */
  retryAttempts?: RetryAttempt[]
  /** Whether the test is flaky */
  flaky?: boolean
  /** Standard output captured during test */
  stdout?: string[]
  /** Standard error captured during test */
  stderr?: string[]
  /** Thread/worker ID that ran this test */
  threadId?: string
  /** Browser name (for browser tests) */
  browser?: string
  /** Device name (for device tests) */
  device?: string
  /** Base64 encoded screenshot */
  screenshot?: string
  /** File attachments */
  attachments?: Attachment[]
  /** Test parameters (for parameterized tests) */
  parameters?: Record<string, unknown>
  /** Test steps */
  steps?: Step[]
  /** Test-level insights */
  insights?: TestInsights
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Test status enum
 *
 * @group Core Types
 */
export type TestStatus = 'passed' | 'failed' | 'skipped' | 'pending' | 'other'

/**
 * Details of a test retry attempt
 *
 * @group Core Types
 */
export interface RetryAttempt {
  /** Attempt number (1-indexed) */
  attempt: number
  /** Status of this attempt */
  status: TestStatus
  /** Duration of this attempt in milliseconds */
  duration?: number
  /** Error message */
  message?: string
  /** Stack trace */
  trace?: string
  /** Line number */
  line?: number
  /** Code snippet */
  snippet?: string
  /** Standard output */
  stdout?: string[]
  /** Standard error */
  stderr?: string[]
  /** Start timestamp */
  start?: number
  /** Stop timestamp */
  stop?: number
  /** Attachments for this attempt */
  attachments?: Attachment[]
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * File attachment
 *
 * @group Core Types
 */
export interface Attachment {
  /** Attachment name */
  name: string
  /** MIME content type */
  contentType: string
  /** Path to the attachment file */
  path: string
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Test step
 *
 * @group Core Types
 */
export interface Step {
  /** Step name */
  name: string
  /** Step status */
  status: TestStatus
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Environment information
 *
 * @group Core Types
 */
export interface Environment {
  /** Custom report name */
  reportName?: string
  /** Application name */
  appName?: string
  /** Application version */
  appVersion?: string
  /** Build identifier */
  buildId?: string
  /** Build name */
  buildName?: string
  /** Build number */
  buildNumber?: number
  /** Build URL */
  buildUrl?: string
  /** Repository name */
  repositoryName?: string
  /** Repository URL */
  repositoryUrl?: string
  /** Git commit SHA */
  commit?: string
  /** Git branch name */
  branchName?: string
  /** Operating system platform */
  osPlatform?: string
  /** Operating system release */
  osRelease?: string
  /** Operating system version */
  osVersion?: string
  /** Test environment name */
  testEnvironment?: string
  /** Whether the environment is healthy */
  healthy?: boolean
  /** Custom metadata */
  extra?: Record<string, unknown>
}

// ============================================================================
// Insights Types
// ============================================================================

/**
 * Run-level insights computed from historical data
 *
 * @group Insights
 */
export interface Insights {
  /** Pass rate metric */
  passRate?: MetricDelta
  /** Fail rate metric */
  failRate?: MetricDelta
  /** Flaky rate metric */
  flakyRate?: MetricDelta
  /** Average run duration metric */
  averageRunDuration?: MetricDelta
  /** 95th percentile run duration metric */
  p95RunDuration?: MetricDelta
  /** Average test duration metric */
  averageTestDuration?: MetricDelta
  /** Number of historical runs analyzed */
  runsAnalyzed?: number
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Test-level insights computed from historical data
 *
 * @group Insights
 */
export interface TestInsights {
  /** Pass rate metric */
  passRate?: MetricDelta
  /** Fail rate metric */
  failRate?: MetricDelta
  /** Flaky rate metric */
  flakyRate?: MetricDelta
  /** Average test duration metric */
  averageTestDuration?: MetricDelta
  /** 95th percentile test duration metric */
  p95TestDuration?: MetricDelta
  /** Number of runs this test was executed in */
  executedInRuns?: number
  /** Custom metadata */
  extra?: Record<string, unknown>
}

/**
 * Metric with current value, baseline, and change
 *
 * @group Insights
 */
export interface MetricDelta {
  /** Current value */
  current?: number
  /** Baseline value for comparison */
  baseline?: number
  /** Change from baseline (current - baseline) */
  change?: number
}

/**
 * Reference to a baseline report
 *
 * @group Core Types
 */
export interface Baseline {
  /** Report ID of the baseline report */
  reportId: string
  /** Timestamp of the baseline report */
  timestamp?: string
  /** Source description (e.g., 'main-branch', 'previous-run') */
  source?: string
  /** Build number of the baseline */
  buildNumber?: number
  /** Build name of the baseline */
  buildName?: string
  /** Build URL of the baseline */
  buildUrl?: string
  /** Git commit of the baseline */
  commit?: string
  /** Custom metadata */
  extra?: Record<string, unknown>
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Result of schema validation
 *
 * @group Validation Options
 */
export interface ValidationResult {
  /** Whether the report is valid */
  valid: boolean
  /** Array of validation errors */
  errors: ValidationErrorDetail[]
}

/**
 * Details of a validation error
 *
 * @group Validation Options
 */
export interface ValidationErrorDetail {
  /** Human-readable error message */
  message: string
  /** JSON path to the error location */
  path: string
  /** JSON Schema keyword that failed */
  keyword: string
}

/**
 * Options for merging reports
 *
 * @group Merge Options
 */
export interface MergeOptions {
  /** Remove duplicate tests by ID */
  deduplicateTests?: boolean
  /** Recalculate summary from merged tests */
  mergeSummary?: boolean
  /** Strategy for handling environments */
  preserveEnvironment?: 'first' | 'last' | 'merge'
}

/**
 * Criteria for filtering and finding tests.
 *
 * @group Query & Filter Options
 */
export interface FilterCriteria {
  /** Filter by test ID (UUID) */
  id?: string
  /** Filter by test name */
  name?: string
  /** Filter by status */
  status?: TestStatus | TestStatus[]
  /** Filter by tags */
  tags?: string | string[]
  /** Filter by suite */
  suite?: string | string[]
  /** Filter by flaky flag */
  flaky?: boolean
  /** Filter by browser */
  browser?: string
  /** Filter by device */
  device?: string
}

/**
 * Options for insights calculation
 *
 * @group Insights Options
 */
export interface InsightsOptions {
  /** Baseline report for comparison */
  baseline?: CTRFReport
  /** Number of historical reports to analyze */
  window?: number
}

/**
 * Options for ReportBuilder
 *
 * @group Builder Options
 */
export interface ReportBuilderOptions {
  /** Automatically generate report ID */
  autoGenerateId?: boolean
  /** Automatically set timestamp */
  autoTimestamp?: boolean
}

/**
 * Options for TestBuilder
 *
 * @group Builder Options
 */
export interface TestBuilderOptions {
  /** Automatically generate test ID */
  autoGenerateId?: boolean
}

/**
 * Options for calculating summary
 *
 * @group Core Options
 */
export interface SummaryOptions {
  /** Start timestamp */
  start?: number
  /** Stop timestamp */
  stop?: number
}

/**
 * Options for parsing JSON
 *
 * @group Core Options
 */
export interface ParseOptions {
  /** Validate after parsing */
  validate?: boolean
}

/**
 * Options for stringifying to JSON
 *
 * @group Core Options
 */
export interface StringifyOptions {
  /** Pretty print with indentation */
  pretty?: boolean
  /** Number of spaces for indentation (default: 2) */
  indent?: number
}

/**
 * Options for validation
 *
 * @group Validation Options
 */
export interface ValidateOptions {
  /** Specific spec version to validate against */
  specVersion?: string
}
