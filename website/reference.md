---
title: TypeScript Reference
sidebar_label: TypeScript Reference
description: Complete API reference for the CTRF TypeScript reference implementation
---

# TypeScript Reference

The official TypeScript reference implementation for working with [CTRF (Common Test Report Format)](https://ctrf.io) reports.

## Installation

```bash
npm install ctrf
```

## Quick Start

```typescript
import {
  validate,
  parse,
  ReportBuilder,
  TestBuilder,
  filterTests,
  merge,
} from 'ctrf'

// Validate a report
const result = validate(report)
if (result.valid) {
  console.log('Report is valid!')
}

// Parse JSON
const report = parse(jsonString, { validate: true })

// Build reports programmatically
const report = new ReportBuilder()
  .tool({ name: 'jest', version: '29.0.0' })
  .addTest(
    new TestBuilder()
      .name('should add numbers')
      .status('passed')
      .duration(150)
      .build()
  )
  .build()
```

---

## Core Functions

### validate

Validate a CTRF report against the JSON schema.

```typescript
function validate(report: unknown, options?: ValidateOptions): ValidationResult
```

**Parameters:**

- `report` - The object to validate
- `options.specVersion` - Specific spec version to validate against

**Returns:** `ValidationResult` with `valid` boolean and `errors` array

**Example:**

```typescript
import { validate } from 'ctrf'

const result = validate(report)
if (!result.valid) {
  console.log('Validation errors:', result.errors)
}

// Validate against specific version
const result = validate(report, { specVersion: '0.0.0' })
```

### isValid

Type guard to check if a report is valid.

```typescript
function isValid(report: unknown): report is CTRFReport
```

**Example:**

```typescript
import { isValid } from 'ctrf'

if (isValid(report)) {
  // TypeScript knows report is CTRFReport
  console.log(report.results.summary.passed)
}
```

### validateStrict

Validate and throw if invalid.

```typescript
function validateStrict(report: unknown): asserts report is CTRFReport
```

**Throws:** `ValidationError` if the report is invalid

**Example:**

```typescript
import { validateStrict, ValidationError } from 'ctrf'

try {
  validateStrict(report)
  // TypeScript knows report is CTRFReport
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.errors)
  }
}
```

### parse

Parse a JSON string into a CTRFReport.

```typescript
function parse(json: string, options?: ParseOptions): CTRFReport
```

**Parameters:**

- `json` - JSON string to parse
- `options.validate` - Enable schema validation (default: false)

**Throws:** `ParseError` if JSON is invalid, `ValidationError` if validation fails

**Example:**

```typescript
import { parse } from 'ctrf'

const report = parse(jsonString)

// With validation
const report = parse(jsonString, { validate: true })
```

### stringify

Serialize a CTRFReport to JSON.

```typescript
function stringify(report: CTRFReport, options?: StringifyOptions): string
```

**Parameters:**

- `report` - The CTRF report to serialize
- `options.pretty` - Enable pretty printing (default: false)
- `options.indent` - Indentation size (default: 2)

**Example:**

```typescript
import { stringify } from 'ctrf'

const json = stringify(report)

// Pretty print
const json = stringify(report, { pretty: true })

// Custom indent
const json = stringify(report, { pretty: true, indent: 4 })
```

### calculateSummary

Calculate summary statistics from an array of tests.

```typescript
function calculateSummary(tests: Test[], options?: SummaryOptions): Summary
```

**Parameters:**

- `tests` - Array of test results
- `options.start` - Override start timestamp
- `options.stop` - Override stop timestamp

**Example:**

```typescript
import { calculateSummary } from 'ctrf'

const summary = calculateSummary(tests)

// With timing overrides
const summary = calculateSummary(tests, {
  start: 1704067200000,
  stop: 1704067260000,
})
```

---

## Builders

### ReportBuilder

Fluent builder for constructing CTRF reports.

```typescript
class ReportBuilder {
  constructor(options?: ReportBuilderOptions)

  specVersion(version: string): this
  reportId(uuid?: string): this
  timestamp(date?: Date | string): this
  generatedBy(name: string): this
  tool(tool: Tool): this
  environment(env: Environment): this
  addTest(test: Test): this
  addTests(tests: Test[]): this
  insights(insights: Insights): this
  baseline(baseline: Baseline): this
  extra(data: Record<string, unknown>): this
  summaryOverrides(overrides: Partial<Summary>): this
  build(): CTRFReport
}
```

**Options:**

- `autoGenerateId` - Auto-generate report UUID
- `autoTimestamp` - Auto-set current timestamp

**Example:**

```typescript
import { ReportBuilder, TestBuilder } from 'ctrf'

const report = new ReportBuilder({ autoGenerateId: true, autoTimestamp: true })
  .specVersion('0.0.0')
  .tool({ name: 'jest', version: '29.0.0' })
  .environment({ branchName: 'main', commit: 'abc123' })
  .addTest(
    new TestBuilder()
      .name('should add numbers')
      .status('passed')
      .duration(150)
      .build()
  )
  .addTest(
    new TestBuilder()
      .name('should handle errors')
      .status('failed')
      .duration(200)
      .message('Expected 5 but got 4')
      .build()
  )
  .build()
```

### TestBuilder

Fluent builder for constructing Test objects.

```typescript
class TestBuilder {
  constructor(options?: TestBuilderOptions)

  id(uuid?: string): this
  name(name: string): this
  status(status: TestStatus): this
  duration(ms: number): this
  start(timestamp: number): this
  stop(timestamp: number): this
  suite(suite: string[]): this
  message(message: string): this
  trace(trace: string): this
  snippet(snippet: string): this
  ai(ai: string): this
  line(line: number): this
  rawStatus(rawStatus: string): this
  tags(tags: string[]): this
  type(type: string): this
  filePath(filePath: string): this
  retries(retries: number): this
  addRetryAttempt(attempt: RetryAttempt): this
  flaky(flaky: boolean): this
  stdout(stdout: string[]): this
  stderr(stderr: string[]): this
  threadId(threadId: string): this
  browser(browser: string): this
  device(device: string): this
  screenshot(screenshot: string): this
  parameters(params: Record<string, unknown>): this
  addStep(step: Step): this
  addAttachment(attachment: Attachment): this
  extra(data: Record<string, unknown>): this
  build(): Test
}
```

**Options:**

- `autoGenerateId` - Auto-generate test UUID based on name/suite/filePath

**Example:**

```typescript
import { TestBuilder } from 'ctrf'

const test = new TestBuilder({ autoGenerateId: true })
  .name('should validate user input')
  .suite(['Authentication', 'Login'])
  .status('passed')
  .duration(245)
  .filePath('tests/auth/login.test.ts')
  .tags(['smoke', 'auth'])
  .type('integration')
  .build()
```

---

## Query & Filter

### filterTests

Filter tests in a report by criteria.

```typescript
function filterTests(report: CTRFReport, criteria: FilterCriteria): Test[]
```

**FilterCriteria:**

- `status` - Single status or array of statuses
- `tags` - Tags to match (test must have all)
- `suite` - Suite name to match
- `flaky` - Filter by flaky status
- `browser` - Browser name to match
- `device` - Device name to match

**Example:**

```typescript
import { filterTests } from 'ctrf'

// Filter by status
const failed = filterTests(report, { status: 'failed' })

// Multiple statuses
const notPassed = filterTests(report, {
  status: ['failed', 'skipped'],
})

// Multiple criteria
const filtered = filterTests(report, {
  status: 'failed',
  tags: ['smoke'],
  flaky: true,
})
```

### findTest

Find a single test in a report.

```typescript
function findTest(
  report: CTRFReport,
  criteria: FilterCriteria
): Test | undefined
```

**Additional FilterCriteria for findTest:**

- `id` - Test UUID
- `name` - Exact test name

**Example:**

```typescript
import { findTest } from 'ctrf'

// Find by ID
const test = findTest(report, { id: 'test-uuid' })

// Find by name
const test = findTest(report, { name: 'should login successfully' })

// Find by criteria
const test = findTest(report, { status: 'failed', flaky: true })
```

---

## Merge

### merge

Merge multiple CTRF reports into a single report.

```typescript
function merge(reports: CTRFReport[], options?: MergeOptions): CTRFReport
```

**MergeOptions:**

- `deduplicateTests` - Remove duplicate tests by ID (default: false)
- `mergeSummary` - Recalculate summary (default: true)
- `preserveEnvironment` - How to handle environments: `'first'`, `'last'`, `'merge'` (default: `'merge'`)

**Example:**

```typescript
import { merge } from 'ctrf'

// Basic merge
const merged = merge([report1, report2, report3])

// With deduplication
const merged = merge(reports, {
  deduplicateTests: true,
})

// Keep first environment only
const merged = merge(reports, {
  preserveEnvironment: 'first',
})
```

---

## Insights

### addInsights

Add historical insights to a report by analyzing previous reports.

```typescript
function addInsights(
  report: CTRFReport,
  historicalReports?: CTRFReport[],
  options?: InsightsOptions
): CTRFReport
```

**InsightsOptions:**

- `baseline` - Baseline report for comparison

**Example:**

```typescript
import { addInsights } from 'ctrf'

// Add insights from historical data
const reportWithInsights = addInsights(currentReport, previousReports)

// With baseline comparison
const reportWithInsights = addInsights(currentReport, previousReports, {
  baseline: baselineReport,
})
```

### isTestFlaky

Determine if a test is flaky based on CTRF specification.

```typescript
function isTestFlaky(test: Test): boolean
```

A test is flaky if:

- `flaky` field is explicitly `true`, OR
- Test has `retries > 0` AND final status is `'passed'`

**Example:**

```typescript
import { isTestFlaky } from 'ctrf'

if (isTestFlaky(test)) {
  console.log('Test is flaky:', test.name)
}
```

---

## ID Generation

### generateTestId

Generate a deterministic UUID v5 for a test based on its properties.

```typescript
function generateTestId(properties: {
  name: string
  suite?: string[]
  filePath?: string
}): string
```

The same inputs always produce the same UUID, enabling cross-run analysis.

**Example:**

```typescript
import { generateTestId } from 'ctrf'

const id = generateTestId({
  name: 'should add numbers',
  suite: ['math', 'addition'],
  filePath: 'tests/math.test.ts',
})
// Always returns the same UUID for these inputs
```

### generateReportId

Generate a random UUID v4 for report identification.

```typescript
function generateReportId(): string
```

**Example:**

```typescript
import { generateReportId } from 'ctrf'

const reportId = generateReportId()
// => 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```

---

## Schema & Versioning

### getSchema

Get the JSON Schema for a specific CTRF spec version.

```typescript
function getSchema(version: string): object
```

**Throws:** `SchemaVersionError` if version is not supported

**Example:**

```typescript
import { getSchema } from 'ctrf'

const schema = getSchema('0.0.0')
```

### getCurrentSpecVersion

Get the current spec version.

```typescript
function getCurrentSpecVersion(): string
```

### getSupportedSpecVersions

Get all supported spec versions.

```typescript
function getSupportedSpecVersions(): readonly string[]
```

### schema

The current version CTRF JSON Schema object.

```typescript
import { schema } from 'ctrf'
console.log(schema.$schema)
```

---

## Type Guards

Runtime type checking functions.

### isCTRFReport

Quick check if an object has CTRF report structure.

```typescript
function isCTRFReport(report: unknown): report is { reportFormat: 'CTRF' }
```

**Example:**

```typescript
import { isCTRFReport } from 'ctrf'

if (isCTRFReport(data)) {
  // data.reportFormat is 'CTRF'
}
```

### isTest

Type guard for Test objects.

```typescript
function isTest(test: unknown): test is Test
```

### isTestStatus

Type guard for valid test statuses.

```typescript
function isTestStatus(status: unknown): status is TestStatus
```

### isRetryAttempt

Type guard for RetryAttempt objects.

```typescript
function isRetryAttempt(attempt: unknown): attempt is RetryAttempt
```

### hasInsights

Check if a report has insights data.

```typescript
function hasInsights(report: CTRFReport): boolean
```

---

## Constants

```typescript
import {
  REPORT_FORMAT, // 'CTRF'
  CURRENT_SPEC_VERSION, // '0.0.0'
  TEST_STATUSES, // ['passed', 'failed', 'skipped', 'pending', 'other']
  SUPPORTED_SPEC_VERSIONS, // ['0.0.0']
  CTRF_NAMESPACE, // UUID namespace for deterministic IDs
} from 'ctrf'
```

---

## Error Classes

All errors extend `CTRFError`.

### CTRFError

Base error class for all CTRF errors.

```typescript
class CTRFError extends Error {
  name: 'CTRFError'
}
```

### ValidationError

Thrown when schema validation fails.

```typescript
class ValidationError extends CTRFError {
  errors: ValidationErrorDetail[]
}

interface ValidationErrorDetail {
  message: string
  path: string
  keyword?: string
}
```

### ParseError

Thrown when JSON parsing fails.

```typescript
class ParseError extends CTRFError {
  cause?: Error
}
```

### SchemaVersionError

Thrown when an unsupported spec version is encountered.

```typescript
class SchemaVersionError extends CTRFError {
  version: string
  supportedVersions: string[]
}
```

### FileError

Thrown when file operations fail.

```typescript
class FileError extends CTRFError {
  filePath: string
  cause?: Error
}
```

### BuilderError

Thrown when builder validation fails.

```typescript
class BuilderError extends CTRFError {}
```

---

## CTRF Report Types

These are the core schema types that define the CTRF structure. Import these to type your own reports.

### CTRFReport

The root report object.

```typescript
interface CTRFReport {
  reportFormat: 'CTRF'
  specVersion: string
  reportId?: string
  timestamp?: string
  generatedBy?: string
  results: Results
  insights?: Insights
  baseline?: Baseline
  extra?: Record<string, unknown>
}
```

### Test

Individual test result.

```typescript
interface Test {
  id?: string
  name: string
  status: TestStatus
  duration: number
  start?: number
  stop?: number
  suite?: string[]
  message?: string
  trace?: string
  snippet?: string
  ai?: string
  line?: number
  rawStatus?: string
  tags?: string[]
  type?: string
  filePath?: string
  retries?: number
  retryAttempts?: RetryAttempt[]
  flaky?: boolean
  stdout?: string[]
  stderr?: string[]
  threadId?: string
  browser?: string
  device?: string
  screenshot?: string
  parameters?: Record<string, unknown>
  steps?: Step[]
  attachments?: Attachment[]
  extra?: Record<string, unknown>
}
```

### Results

Container for test results.

```typescript
interface Results {
  tool: Tool
  summary: Summary
  tests: Test[]
  environment?: Environment
  extra?: Record<string, unknown>
}
```

### Summary

Aggregated test statistics.

```typescript
interface Summary {
  tests: number
  passed: number
  failed: number
  skipped: number
  pending: number
  other: number
  flaky?: number
  suites?: number
  start: number
  stop: number
  duration?: number
  extra?: Record<string, unknown>
}
```

### Tool

Test tool information.

```typescript
interface Tool {
  name: string
  version?: string
  extra?: Record<string, unknown>
}
```

### Environment

Environment metadata.

```typescript
interface Environment {
  appName?: string
  appVersion?: string
  buildName?: string
  buildNumber?: string
  buildUrl?: string
  repositoryName?: string
  repositoryUrl?: string
  commit?: string
  branchName?: string
  osPlatform?: string
  osRelease?: string
  osVersion?: string
  testEnvironment?: string
  extra?: Record<string, unknown>
}
```

### TestStatus

Valid test status values.

```typescript
type TestStatus = 'passed' | 'failed' | 'skipped' | 'pending' | 'other'
```

### Supporting Types

```typescript
interface Attachment {
  name: string
  path?: string
  contentType?: string
  content?: string
}

interface Step {
  name: string
  status: TestStatus
  duration?: number
  start?: number
  stop?: number
  message?: string
}

interface RetryAttempt {
  attempt: number
  status: TestStatus
  duration?: number
  message?: string
  trace?: string
}

interface Insights {
  flakiness?: MetricDelta
  failRate?: MetricDelta
  newFailures?: number
  extra?: Record<string, unknown>
}

interface TestInsights {
  flakiness?: MetricDelta
  failRate?: MetricDelta
  averageDuration?: MetricDelta
  p95Duration?: MetricDelta
  extra?: Record<string, unknown>
}

interface MetricDelta {
  current?: number
  baseline?: number
  change?: number
}

interface Baseline {
  reportId?: string
  timestamp?: string
  summary?: Summary
}
```

---

## Complete Example

```typescript
import {
  ReportBuilder,
  TestBuilder,
  validate,
  stringify,
  filterTests,
  addInsights,
  merge,
  type CTRFReport,
  type Test,
} from 'ctrf'

// Build a report
const report = new ReportBuilder({ autoGenerateId: true, autoTimestamp: true })
  .tool({ name: 'vitest', version: '1.0.0' })
  .environment({
    branchName: 'main',
    commit: 'abc123',
    buildNumber: '42',
  })
  .addTest(
    new TestBuilder({ autoGenerateId: true })
      .name('should create user')
      .suite(['API', 'Users'])
      .status('passed')
      .duration(120)
      .filePath('tests/api/users.test.ts')
      .tags(['api', 'smoke'])
      .build()
  )
  .addTest(
    new TestBuilder({ autoGenerateId: true })
      .name('should delete user')
      .suite(['API', 'Users'])
      .status('failed')
      .duration(85)
      .message('User not found')
      .trace('Error: User not found\n    at deleteUser (users.ts:42)')
      .filePath('tests/api/users.test.ts')
      .build()
  )
  .build()

// Validate
const result = validate(report)
console.log('Valid:', result.valid)

// Filter failed tests
const failed = filterTests(report, { status: 'failed' })
console.log('Failed tests:', failed.length)

// Serialize
const json = stringify(report, { pretty: true })

// Add insights from history
const reportWithInsights = addInsights(report, previousReports)

// Merge parallel runs
const merged = merge([shard1, shard2, shard3], {
  deduplicateTests: true,
})
```
