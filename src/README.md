# CTRF TypeScript SDK

The official TypeScript SDK for the Common Test Report Format (CTRF) specification. This implementation serves as the canonical reference for implementing CTRF in other programming languages.

## Installation

```sh
npm install ctrf
```

## Quick Start

```typescript
import { ctrf } from 'ctrf'

// Build a report using the fluent API
const report = new ctrf.ReportBuilder()
  .tool({ name: 'jest', version: '29.0.0' })
  .addTest(
    new ctrf.TestBuilder()
      .name('should add numbers')
      .status('passed')
      .duration(150)
      .build()
  )
  .addTest(
    new ctrf.TestBuilder()
      .name('should handle errors')
      .status('failed')
      .duration(200)
      .message('Expected 5 but got 4')
      .build()
  )
  .build()

// Validate the report
const result = ctrf.validateStrict(report)
if (!result.valid) {
  console.error('Validation errors:', result.errors)
}

// Write to file
await ctrf.writeReport(report, './ctrf-report.json')
```

## API Reference

> 📚 **Full API Documentation:** [TypeDoc Reference](../docs/README.md)

### Core Types

| Type | Description |
|------|-------------|
| `CTRFReport` | The root report document containing results and metadata |
| `Results` | Test results including summary, tests, and optional environment |
| `Test` | Individual test case with status, duration, and metadata |
| `Summary` | Aggregated test counts and timing information |
| `Tool` | Information about the test framework/tool |
| `Environment` | Optional environment metadata (OS, browser, etc.) |

### Validation

```typescript
import { ctrf } from 'ctrf'

// Quick validation (returns boolean)
if (ctrf.isValid(report)) {
  console.log('Report is valid')
}

// Detailed validation (returns ValidationResult)
const result = ctrf.validate(report)
if (!result.valid) {
  result.errors?.forEach(err => console.error(err.message))
}

// Strict validation (throws on invalid)
try {
  ctrf.validateStrict(report)
} catch (error) {
  if (error instanceof ctrf.ValidationError) {
    console.error('Invalid report:', error.errors)
  }
}

// Type guards
if (ctrf.isCTRFReport(data)) {
  // data is typed as CTRFReport
}
```

### Building Reports

```typescript
import { ctrf } from 'ctrf'

// ReportBuilder - fluent API for constructing reports
const report = new ctrf.ReportBuilder()
  .tool({ name: 'vitest', version: '1.0.0' })
  .environment({ os: 'linux', arch: 'x64' })
  .addTest(/* ... */)
  .build()

// TestBuilder - fluent API for constructing tests
const test = new ctrf.TestBuilder()
  .name('User login test')
  .status('passed')
  .duration(1500)
  .suite(['Authentication', 'Login'])
  .tags(['smoke', 'critical'])
  .filePath('tests/auth/login.test.ts')
  .browser('chrome')
  .build()
```

### Reading & Writing Reports

```typescript
import { ctrf } from 'ctrf'

// Async file operations
const report = await ctrf.readReport('./ctrf-report.json')
await ctrf.writeReport(report, './output.json')

// Sync file operations
const reportSync = ctrf.readReportSync('./ctrf-report.json')
ctrf.writeReportSync(report, './output.json')

// Parse from string
const parsed = ctrf.parse(jsonString)

// Stringify with formatting
const json = ctrf.stringify(report, { pretty: true, indent: 2 })
```

### Filtering & Querying

```typescript
import { ctrf } from 'ctrf'

// Get tests by status
const failed = ctrf.getFailedTests(report)
const passed = ctrf.getPassedTests(report)
const skipped = ctrf.getSkippedTests(report)
const flaky = ctrf.getFlakyTests(report)

// Filter by criteria
const filtered = ctrf.filterTests(report, {
  status: 'failed',
  suite: 'Authentication',
  tags: ['smoke'],
})

// Find specific test
const test = ctrf.findTest(report, { name: 'login test' })
const testById = ctrf.findTest(report, { id: 'test-uuid' })

// Group tests
const bySuite = ctrf.groupBy(report.results.tests, 'suite')
const byStatus = ctrf.groupBy(report.results.tests, 'status')

// Get unique values
const suites = ctrf.getUniqueSuites(report)
const tags = ctrf.getUniqueTags(report)
```

### Merging Reports

```typescript
import { ctrf } from 'ctrf'

// Merge multiple reports into one
const merged = ctrf.merge([report1, report2, report3], {
  deduplicateTests: true,  // Remove duplicate tests by ID
})
```

### ID Generation

```typescript
import { ctrf } from 'ctrf'

// Generate deterministic test ID from properties
const testId = ctrf.generateTestId({
  name: 'should add numbers',
  suite: ['Math', 'Addition'],
  filePath: 'tests/math.test.ts',
})

// Generate random report ID
const reportId = ctrf.generateReportId()
```

### Insights & Analytics

```typescript
import { ctrf } from 'ctrf'

// Enrich a report with insights from historical data
const enriched = ctrf.enrichReportWithInsights(
  currentReport,
  historicalReports,
  { baseline: baselineReport }
)

// Access insights
console.log(enriched.insights?.passRate)    // { current: 0.95, baseline: 0.90, change: 0.05 }
console.log(enriched.insights?.flakyRate)   // { current: 0.02, baseline: 0.05, change: -0.03 }

// Calculate insights separately
const insights = ctrf.calculateInsights(reports, { window: 10 })

// Check if a test is flaky
const isFlaky = ctrf.isTestFlaky(test)
```

### Summary Calculation

```typescript
import { ctrf } from 'ctrf'

// Calculate summary from tests
const summary = ctrf.calculateSummary(tests)
// { tests: 10, passed: 8, failed: 1, skipped: 1, pending: 0, other: 0, ... }

// Recalculate summary for existing report
const updated = ctrf.recalculateSummary(report)
```

### Constants

```typescript
import { ctrf } from 'ctrf'

ctrf.REPORT_FORMAT          // 'ctrf'
ctrf.CURRENT_SPEC_VERSION   // '1.0.0'
ctrf.SUPPORTED_SPEC_VERSIONS // ['1.0.0']
ctrf.TEST_STATUSES          // ['passed', 'failed', 'skipped', 'pending', 'other']
ctrf.CTRF_NAMESPACE         // UUID namespace for deterministic IDs
```

### Error Handling

```typescript
import { ctrf } from 'ctrf'

try {
  const report = await ctrf.readReport('./missing.json')
} catch (error) {
  if (error instanceof ctrf.FileError) {
    console.error('File not found:', error.path)
  } else if (error instanceof ctrf.ParseError) {
    console.error('Invalid JSON:', error.message)
  } else if (error instanceof ctrf.ValidationError) {
    console.error('Schema validation failed:', error.errors)
  }
}
```

### Schema Access

```typescript
import { ctrf } from 'ctrf'

// Get the JSON Schema
const schema = ctrf.getSchema()

// Get version info
const version = ctrf.getCurrentSpecVersion()      // '1.0.0'
const supported = ctrf.getSupportedSpecVersions() // ['1.0.0']
```

## Design Principles

This SDK follows these principles for standards compliance:

This reference implementation follows these principles for standards body quality:

1. **Spec-Compliant Only** - Only uses officially specified fields, no extensions
2. **Self-Documenting** - Code is clear enough to serve as specification
3. **Language-Agnostic** - Easy to translate to any programming language
4. **Immutable Operations** - Functions don't mutate input data
5. **Comprehensive Validation** - Strict schema validation with detailed errors
6. **Deterministic** - Same inputs always produce same outputs

## License

MIT
