/**
 * CTRF Report and Test Builders
 * Fluent API for constructing CTRF reports
 */

import type {
  CTRFReport,
  Results,
  Tool,
  Summary,
  Test,
  Environment,
  Insights,
  TestInsights,
  Baseline,
  Attachment,
  RetryAttempt,
  Step,
  TestStatus,
  ReportBuilderOptions,
  TestBuilderOptions,
} from './types.js'
import { REPORT_FORMAT, CURRENT_SPEC_VERSION } from './constants.js'
import { generateReportId, generateTestId } from './id.js'
import { calculateSummary } from './summary.js'
import { BuilderError } from './errors.js'

/**
 * Fluent builder for constructing CTRF reports.
 *
 * @example
 * ```typescript
 * const report = new ReportBuilder()
 *   .specVersion('1.0.0')
 *   .tool({ name: 'jest', version: '29.0.0' })
 *   .environment({ branchName: 'main' })
 *   .addTest(
 *     new TestBuilder()
 *       .name('should add numbers')
 *       .status('passed')
 *       .duration(150)
 *       .build()
 *   )
 *   .build();
 * ```
 */
export class ReportBuilder {
  private _specVersion: string = CURRENT_SPEC_VERSION
  private _reportId?: string
  private _timestamp?: string
  private _generatedBy?: string
  private _tool?: Tool
  private _environment?: Environment
  private _tests: Test[] = []
  private _insights?: Insights
  private _baseline?: Baseline
  private _extra?: Record<string, unknown>
  private _summaryOverrides?: Partial<Summary>

  constructor(private options: ReportBuilderOptions = {}) {
    if (options.autoGenerateId) {
      this._reportId = generateReportId()
    }
    if (options.autoTimestamp) {
      this._timestamp = new Date().toISOString()
    }
  }

  /**
   * Set the spec version.
   */
  specVersion(version: string): this {
    this._specVersion = version
    return this
  }

  /**
   * Set or generate the report ID.
   * @param uuid - UUID to use, or undefined to auto-generate
   */
  reportId(uuid?: string): this {
    this._reportId = uuid ?? generateReportId()
    return this
  }

  /**
   * Set the timestamp.
   * @param date - Date to use, or undefined for current time
   */
  timestamp(date?: Date | string): this {
    if (date instanceof Date) {
      this._timestamp = date.toISOString()
    } else if (typeof date === 'string') {
      this._timestamp = date
    } else {
      this._timestamp = new Date().toISOString()
    }
    return this
  }

  /**
   * Set the generator name.
   */
  generatedBy(name: string): this {
    this._generatedBy = name
    return this
  }

  /**
   * Set the tool information.
   */
  tool(tool: Tool): this {
    this._tool = tool
    return this
  }

  /**
   * Set the environment information.
   */
  environment(env: Environment): this {
    this._environment = env
    return this
  }

  /**
   * Add a single test.
   */
  addTest(test: Test): this {
    this._tests.push(test)
    return this
  }

  /**
   * Add multiple tests.
   */
  addTests(tests: Test[]): this {
    this._tests.push(...tests)
    return this
  }

  /**
   * Set run-level insights.
   */
  insights(insights: Insights): this {
    this._insights = insights
    return this
  }

  /**
   * Set the baseline reference.
   */
  baseline(baseline: Baseline): this {
    this._baseline = baseline
    return this
  }

  /**
   * Set extra metadata.
   */
  extra(data: Record<string, unknown>): this {
    this._extra = data
    return this
  }

  /**
   * Override specific summary fields.
   * Useful when you want to set specific timing or counts.
   */
  summaryOverrides(overrides: Partial<Summary>): this {
    this._summaryOverrides = overrides
    return this
  }

  /**
   * Build and return the CTRF report.
   * @throws BuilderError if required fields are missing
   */
  build(): CTRFReport {
    if (!this._tool) {
      throw new BuilderError('Tool is required. Call .tool() before .build()')
    }

    // Calculate summary from tests
    const calculatedSummary = calculateSummary(this._tests)
    const summary: Summary = {
      ...calculatedSummary,
      ...this._summaryOverrides,
    }

    const results: Results = {
      tool: this._tool,
      summary,
      tests: this._tests,
    }

    if (this._environment) {
      results.environment = this._environment
    }

    const report: CTRFReport = {
      reportFormat: REPORT_FORMAT,
      specVersion: this._specVersion,
      results,
    }

    if (this._reportId) {
      report.reportId = this._reportId
    }

    if (this._timestamp) {
      report.timestamp = this._timestamp
    }

    if (this._generatedBy) {
      report.generatedBy = this._generatedBy
    }

    if (this._insights) {
      report.insights = this._insights
    }

    if (this._baseline) {
      report.baseline = this._baseline
    }

    if (this._extra) {
      report.extra = this._extra
    }

    return report
  }
}

/**
 * Fluent builder for constructing Test objects.
 *
 * @example
 * ```typescript
 * const test = new TestBuilder()
 *   .name('should add numbers')
 *   .status('passed')
 *   .duration(150)
 *   .suite(['math', 'addition'])
 *   .build();
 * ```
 */
export class TestBuilder {
  private _id?: string
  private _name?: string
  private _status?: TestStatus
  private _duration?: number
  private _start?: number
  private _stop?: number
  private _suite?: string[]
  private _message?: string
  private _trace?: string
  private _snippet?: string
  private _ai?: string
  private _line?: number
  private _rawStatus?: string
  private _tags?: string[]
  private _type?: string
  private _filePath?: string
  private _retries?: number
  private _retryAttempts?: RetryAttempt[]
  private _flaky?: boolean
  private _stdout?: string[]
  private _stderr?: string[]
  private _threadId?: string
  private _browser?: string
  private _device?: string
  private _screenshot?: string
  private _attachments?: Attachment[]
  private _parameters?: Record<string, unknown>
  private _steps?: Step[]
  private _insights?: TestInsights
  private _extra?: Record<string, unknown>

  constructor(private options: TestBuilderOptions = {}) {}

  /**
   * Set or generate the test ID.
   * @param uuid - UUID to use, or undefined to auto-generate based on properties
   */
  id(uuid?: string): this {
    this._id = uuid
    return this
  }

  /**
   * Set the test name.
   */
  name(name: string): this {
    this._name = name
    return this
  }

  /**
   * Set the test status.
   */
  status(status: TestStatus): this {
    this._status = status
    return this
  }

  /**
   * Set the duration in milliseconds.
   */
  duration(ms: number): this {
    this._duration = ms
    return this
  }

  /**
   * Set the start timestamp.
   */
  start(timestamp: number): this {
    this._start = timestamp
    return this
  }

  /**
   * Set the stop timestamp.
   */
  stop(timestamp: number): this {
    this._stop = timestamp
    return this
  }

  /**
   * Set the suite hierarchy.
   */
  suite(suites: string[]): this {
    this._suite = suites
    return this
  }

  /**
   * Set the error message.
   */
  message(msg: string): this {
    this._message = msg
    return this
  }

  /**
   * Set the stack trace.
   */
  trace(trace: string): this {
    this._trace = trace
    return this
  }

  /**
   * Set the code snippet.
   */
  snippet(code: string): this {
    this._snippet = code
    return this
  }

  /**
   * Set AI-generated analysis.
   */
  ai(analysis: string): this {
    this._ai = analysis
    return this
  }

  /**
   * Set the line number.
   */
  line(num: number): this {
    this._line = num
    return this
  }

  /**
   * Set the raw status from the test framework.
   */
  rawStatus(status: string): this {
    this._rawStatus = status
    return this
  }

  /**
   * Set tags.
   */
  tags(tags: string[]): this {
    this._tags = tags
    return this
  }

  /**
   * Set test type.
   */
  type(type: string): this {
    this._type = type
    return this
  }

  /**
   * Set file path.
   */
  filePath(path: string): this {
    this._filePath = path
    return this
  }

  /**
   * Set retry count.
   */
  retries(count: number): this {
    this._retries = count
    return this
  }

  /**
   * Add a retry attempt.
   */
  addRetryAttempt(attempt: RetryAttempt): this {
    if (!this._retryAttempts) {
      this._retryAttempts = []
    }
    this._retryAttempts.push(attempt)
    return this
  }

  /**
   * Mark as flaky.
   */
  flaky(isFlaky: boolean = true): this {
    this._flaky = isFlaky
    return this
  }

  /**
   * Set stdout.
   */
  stdout(lines: string[]): this {
    this._stdout = lines
    return this
  }

  /**
   * Set stderr.
   */
  stderr(lines: string[]): this {
    this._stderr = lines
    return this
  }

  /**
   * Set thread ID.
   */
  threadId(id: string): this {
    this._threadId = id
    return this
  }

  /**
   * Set browser name.
   */
  browser(name: string): this {
    this._browser = name
    return this
  }

  /**
   * Set device name.
   */
  device(name: string): this {
    this._device = name
    return this
  }

  /**
   * Set screenshot (base64).
   */
  screenshot(base64: string): this {
    this._screenshot = base64
    return this
  }

  /**
   * Add an attachment.
   */
  addAttachment(attachment: Attachment): this {
    if (!this._attachments) {
      this._attachments = []
    }
    this._attachments.push(attachment)
    return this
  }

  /**
   * Set parameters.
   */
  parameters(params: Record<string, unknown>): this {
    this._parameters = params
    return this
  }

  /**
   * Add a step.
   */
  addStep(step: Step): this {
    if (!this._steps) {
      this._steps = []
    }
    this._steps.push(step)
    return this
  }

  /**
   * Set test-level insights.
   */
  insights(insights: TestInsights): this {
    this._insights = insights
    return this
  }

  /**
   * Set extra metadata.
   */
  extra(data: Record<string, unknown>): this {
    this._extra = data
    return this
  }

  /**
   * Build and return the Test object.
   * @throws BuilderError if required fields are missing
   */
  build(): Test {
    if (!this._name) {
      throw new BuilderError(
        'Test name is required. Call .name() before .build()'
      )
    }

    if (!this._status) {
      throw new BuilderError(
        'Test status is required. Call .status() before .build()'
      )
    }

    if (this._duration === undefined) {
      throw new BuilderError(
        'Test duration is required. Call .duration() before .build()'
      )
    }

    const test: Test = {
      name: this._name,
      status: this._status,
      duration: this._duration,
    }

    // Generate ID if auto-generate is enabled or if id() was called without a value
    if (this.options.autoGenerateId && !this._id) {
      test.id = generateTestId({
        name: this._name,
        suite: this._suite,
        filePath: this._filePath,
      })
    } else if (this._id) {
      test.id = this._id
    }

    // Add optional fields only if set
    if (this._start !== undefined) test.start = this._start
    if (this._stop !== undefined) test.stop = this._stop
    if (this._suite) test.suite = this._suite
    if (this._message) test.message = this._message
    if (this._trace) test.trace = this._trace
    if (this._snippet) test.snippet = this._snippet
    if (this._ai) test.ai = this._ai
    if (this._line !== undefined) test.line = this._line
    if (this._rawStatus) test.rawStatus = this._rawStatus
    if (this._tags) test.tags = this._tags
    if (this._type) test.type = this._type
    if (this._filePath) test.filePath = this._filePath
    if (this._retries !== undefined) test.retries = this._retries
    if (this._retryAttempts) test.retryAttempts = this._retryAttempts
    if (this._flaky !== undefined) test.flaky = this._flaky
    if (this._stdout) test.stdout = this._stdout
    if (this._stderr) test.stderr = this._stderr
    if (this._threadId) test.threadId = this._threadId
    if (this._browser) test.browser = this._browser
    if (this._device) test.device = this._device
    if (this._screenshot) test.screenshot = this._screenshot
    if (this._attachments) test.attachments = this._attachments
    if (this._parameters) test.parameters = this._parameters
    if (this._steps) test.steps = this._steps
    if (this._insights) test.insights = this._insights
    if (this._extra) test.extra = this._extra

    return test
  }
}
