# CTRF Reference Implementation TypeScript

The reference implementation in TypeScript for the [Common Test Report Format (CTRF)](https://github.com/ctrf-io/ctrf) specification.

## Open Standard

[CTRF](https://github.com/ctrf-io/ctrf) is an open standard built and shaped by community contributions.

Your feedback and contributions are essential to the project's success:

- [Contribute](CONTRIBUTING.md)
- [Discuss](https://github.com/orgs/ctrf-io/discussions)

## Support

You can support the project by giving this repository a star ⭐

## Installation

```sh
npm install ctrf@0.0.18-next-1
```

## Quick Start

```typescript
import { ReportBuilder, TestBuilder, validateStrict } from 'ctrf'

// Build a report using the fluent API
const report = new ReportBuilder()
  .tool({ name: 'jest', version: '29.0.0' })
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

// Validate the report
validateStrict(report)
```

## API Reference

> 📚 **Full API Documentation:** [API Reference](/docs/README.md)

### Types

Full TypeScript types are provided for all CTRF entities.

```typescript
import type { CTRFReport, Test } from 'ctrf'

const report: CTRFReport = { /* ... */ }
const test: Test = { /* ... */ }
```

### Validation

```typescript
import { isValid, validate, validateStrict, isCTRFReport, ValidationError } from 'ctrf'

// Quick validation (returns boolean)
if (isValid(report)) {
  console.log('Report is valid')
}

// Detailed validation (returns ValidationResult)
const result = validate(report)
if (!result.valid) {
  result.errors?.forEach(err => console.error(err.message))
}

// Strict validation (throws on invalid)
try {
  validateStrict(report)
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Invalid report:', error.errors)
  }
}

// Type guards
if (isCTRFReport(data)) {
  // data is typed as CTRFReport
}
```

### Building Reports

```typescript
import { ReportBuilder, TestBuilder } from 'ctrf'

// ReportBuilder - fluent API for constructing reports
const report = new ReportBuilder()
  .tool({ name: 'vitest', version: '1.0.0' })
  .environment({ os: 'linux', arch: 'x64' })
  .addTest(/* ... */)
  .build()

// TestBuilder - fluent API for constructing tests
const test = new TestBuilder()
  .name('User login test')
  .status('passed')
  .duration(1500)
  .suite(['Authentication', 'Login'])
  .tags(['smoke', 'critical'])
  .filePath('tests/auth/login.test.ts')
  .browser('chrome')
  .build()
```

### Parsing Reports

```typescript
import { parse, stringify } from 'ctrf'

// Parse from string
const parsed = parse(jsonString)

// Stringify with formatting
const json = stringify(report, { pretty: true, indent: 2 })
```

### Filtering & Querying

```typescript
import { filterTests, findTest } from 'ctrf'

// Filter by criteria
const filtered = filterTests(report, {
  status: 'failed',
  suite: 'Authentication',
  tags: ['smoke'],
})

// Find specific test
const test = findTest(report, { name: 'login test' })
const testById = findTest(report, { id: 'test-uuid' })
```

### Merging Reports

```typescript
import { mergeReports } from 'ctrf'

// Merge multiple reports into one
const merged = mergeReports([report1, report2, report3], {
  deduplicateTests: true,  // Remove duplicate tests by ID
})
```

### ID Generation

```typescript
import { generateTestId, generateReportId } from 'ctrf'

// Generate deterministic test ID from properties
const testId = generateTestId({
  name: 'should add numbers',
  suite: ['Math', 'Addition'],
  filePath: 'tests/math.test.ts',
})

// Generate random report ID
const reportId = generateReportId()
```

### Insights & Analytics

```typescript
import { addInsights, isTestFlaky } from 'ctrf'

// Enrich a report with insights from historical data
const enriched = addInsights(
  currentReport,
  historicalReports,
  { baseline: baselineReport }
)

// Access insights
console.log(enriched.insights?.passRate)    // { current: 0.95, baseline: 0.90, change: 0.05 }
console.log(enriched.insights?.flakyRate)   // { current: 0.02, baseline: 0.05, change: -0.03 }

// Check if a test is flaky
const isFlaky = isTestFlaky(test)
```

### Summary Calculation

```typescript
import { calculateSummary } from 'ctrf'

// Calculate summary from tests
const summary = calculateSummary(tests)
// { tests: 10, passed: 8, failed: 1, skipped: 1, pending: 0, other: 0, ... }
```

### Constants

```typescript
import {
  REPORT_FORMAT,
  CURRENT_SPEC_VERSION,
  SUPPORTED_SPEC_VERSIONS,
  TEST_STATUSES,
  CTRF_NAMESPACE,
} from 'ctrf'

REPORT_FORMAT           // 'CTRF'
CURRENT_SPEC_VERSION    // '0.0.0'
SUPPORTED_SPEC_VERSIONS // ['0.0.0']
TEST_STATUSES           // ['passed', 'failed', 'skipped', 'pending', 'other']
CTRF_NAMESPACE          // UUID namespace for deterministic IDs
```

### Error Handling

```typescript
import { validateStrict, ValidationError, ParseError } from 'ctrf'

try {
  validateStrict(report)
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Schema validation failed:', error.errors)
  }
}

try {
  const parsed = parse(jsonString)
} catch (error) {
  if (error instanceof ParseError) {
    console.error('Invalid JSON:', error.message)
  }
}
```

### Schema Access

```typescript
import { schema, getSchema, getCurrentSpecVersion, getSupportedSpecVersions } from 'ctrf'

// Get the current JSON Schema
console.log(schema)

// Get schema for specific version
const v0_0Schema = getSchema('0.0.0')

// Get version info
const version = getCurrentSpecVersion()      // '0.0.0'
const supported = getSupportedSpecVersions() // ['0.0.0']
```
