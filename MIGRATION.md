# Migration Guide: v0.0.17 → v0.1.0

This guide helps you migrate from ctrf-js v0.0.17 to v0.1.0, which represents a complete rewrite as the **official CTRF reference implementation**.

## Overview

Version 0.1.0 is a complete architectural redesign to establish ctrf-js as the **canonical reference implementation** of the CTRF specification. This serves as the authoritative guide for implementing CTRF in other languages and ecosystems.

### Why a Reference Implementation?

As CTRF grows across languages (JavaScript, .NET, Go, Java, etc.), we need a gold standard that:

- **Defines best practices** for working with CTRF reports
- **Demonstrates idiomatic patterns** that other implementations should follow
- **Ensures consistency** across the entire CTRF ecosystem
- **Provides a learning resource** for developers and implementers
- **Validates the specification** through real-world usage

This rewrite prioritizes clarity, consistency, and correctness over backward compatibility to serve as that foundation.

### Key Changes in v0.1.0

Version 0.1.0 introduces significant breaking changes focused on:
- **Improved API design** with consistent naming conventions
- **Builder pattern** for creating reports and tests
- **Enhanced type safety** with better TypeScript support
- **Better error handling** with specific error classes
- **Removed file I/O operations** (use dedicated tools instead)
- **Simplified API surface** focusing on core CTRF operations
- **Comprehensive validation** aligned with the CTRF schema

## Quick Migration Checklist

- [ ] Update imports for renamed validation functions
- [ ] Replace file I/O operations with alternative solutions
- [ ] Update test ID generation calls
- [ ] Migrate insight enrichment code
- [ ] Update type imports (Report → CTRFReport)
- [ ] Remove tree/suite organization code (if used)
- [ ] Test thoroughly with the new API

---

## Breaking Changes by Category

### 1. Validation Functions (RENAMED)

```typescript
// ❌ OLD (v0.0.17)
import { 
  validateReport, 
  validateReportStrict, 
  isValidCtrfReport 
} from 'ctrf'

const result = validateReport(report)
validateReportStrict(report)
if (isValidCtrfReport(data)) { }

// ✅ NEW (v0.1.0)
import { 
  validate, 
  validateStrict, 
  isValid 
} from 'ctrf'

const result = validate(report)
validateStrict(report)
if (isValid(data)) { }
```

### 2. File Operations (REMOVED)

File I/O operations have been removed. Use file system libraries directly or dedicated CLI tools instead.

```typescript
// ❌ OLD (v0.0.17)
import { 
  readReportFromFile,
  readReportsFromDirectory,
  readReportsFromGlobPattern 
} from 'ctrf'

const report = await readReportFromFile('ctrf-report.json')
const reports = await readReportsFromDirectory('./reports')
const reports = await readReportsFromGlobPattern('**/*.json')

// ✅ NEW (v0.1.0) - Use Node.js fs and parse()
import { parse } from 'ctrf'
import { readFileSync, readdirSync } from 'fs'
import { glob } from 'glob'

const report = parse(readFileSync('ctrf-report.json', 'utf8'))

// For multiple files
const files = readdirSync('./reports').filter(f => f.endsWith('.json'))
const reports = files.map(f => parse(readFileSync(`./reports/${f}`, 'utf8')))

// With glob
const matches = glob.sync('**/*.json')
const reports = matches.map(f => parse(readFileSync(f, 'utf8')))
```

**Alternative:** Use the [ctrf-cli](https://github.com/ctrf-io/ctrf-cli) tool for file operations.

### 3. Test ID Generation (RENAMED)

```typescript
// ❌ OLD (v0.0.17)
import { 
  generateTestIdFromProperties,
  setTestId,
  getTestId,
  setTestIdsForReport,
  findTestById 
} from 'ctrf'

const id = generateTestIdFromProperties({
  name: 'should work',
  suite: ['unit'],
  filePath: 'test.js'
})
setTestId(test, id)
const existingId = getTestId(test)
setTestIdsForReport(report)
const test = findTestById(report, 'test-123')

// ✅ NEW (v0.1.0)
import { generateTestId, findTest } from 'ctrf'

const id = generateTestId({
  name: 'should work',
  suite: ['unit'],
  filePath: 'test.js'
})
test.id = id  // Direct assignment
const existingId = test.id  // Direct access

// Generate IDs for all tests
report.results.tests.forEach(test => {
  if (!test.id) {
    test.id = generateTestId(test)
  }
})

const test = findTest(report, { id: 'test-123' })
```

### 4. Finding Tests (CONSOLIDATED)

```typescript
// ❌ OLD (v0.0.17)
import { findTestById, findTestByName } from 'ctrf'

const testById = findTestById(report, 'test-123')
const testByName = findTestByName(report, 'should work')

// ✅ NEW (v0.1.0) - Single function with criteria
import { findTest } from 'ctrf'

const testById = findTest(report, { id: 'test-123' })
const testByName = findTest(report, { name: 'should work' })
const testBySuite = findTest(report, { suite: ['unit'] })
const failedTest = findTest(report, { status: 'failed' })
```

### 5. Insights (RENAMED)

```typescript
// ❌ OLD (v0.0.17)
import { enrichReportWithInsights } from 'ctrf'

enrichReportWithInsights(report, historicalReports)
// Mutates report in place

// ✅ NEW (v0.1.0) - Returns new enriched report
import { addInsights } from 'ctrf'

const enriched = addInsights(report, historicalReports, {
  baseline: baselineReport  // Optional
})

// Access insights
console.log(enriched.insights?.passRate)
console.log(enriched.insights?.flakyRate)
```

### 6. Tree/Suite Operations (REMOVED)

Tree and suite organization functions have been removed. If you need hierarchical organization, implement it in your own codebase.

```typescript
// ❌ OLD (v0.0.17)
import { 
  organizeTestsBySuite,
  traverseTree,
  findSuiteByName,
  flattenTree,
  getAllTests,
  getSuiteStats 
} from 'ctrf'

const tree = organizeTestsBySuite(report)
traverseTree(tree, (node) => { /* ... */ })
const suite = findSuiteByName(tree, 'unit')
const tests = getAllTests(tree)

// ✅ NEW (v0.1.0) - Use filter and custom logic
import { filterTests } from 'ctrf'

// Get tests by suite
const unitTests = filterTests(report, { suite: ['unit'] })

// Group tests by suite manually
const testsBySuite = report.results.tests.reduce((acc, test) => {
  const suiteKey = test.suite?.join('/') || 'root'
  if (!acc[suiteKey]) acc[suiteKey] = []
  acc[suiteKey].push(test)
  return acc
}, {} as Record<string, Test[]>)
```

### 7. Report Sorting (REMOVED)

```typescript
// ❌ OLD (v0.0.17)
import { sortReportsByTimestamp, SortOrder } from 'ctrf'

const sorted = sortReportsByTimestamp(reports, SortOrder.DESC)

// ✅ NEW (v0.1.0) - Use JavaScript sort
const sorted = [...reports].sort((a, b) => {
  const timeA = a.results.summary.start || 0
  const timeB = b.results.summary.start || 0
  return timeB - timeA  // DESC
})
```

### 8. Previous Results Storage (REMOVED)

```typescript
// ❌ OLD (v0.0.17)
import { storePreviousResults } from 'ctrf'

await storePreviousResults(report, './history')

// ✅ NEW (v0.1.0) - Implement your own storage
import { stringify } from 'ctrf'
import { writeFileSync } from 'fs'

const timestamp = Date.now()
writeFileSync(
  `./history/report-${timestamp}.json`,
  stringify(report, { pretty: true })
)
```

### 9. Type Changes

```typescript
// ❌ OLD (v0.0.17)
import type { 
  Report,
  RootInsights,
  InsightsMetric,
  TreeNode,
  TreeTest,
  TestTree 
} from 'ctrf'

// ✅ NEW (v0.1.0)
import type { 
  CTRFReport,    // Was: Report
  Insights,      // Was: RootInsights
  MetricDelta,   // Was: InsightsMetric
  // TreeNode, TreeTest, TestTree - REMOVED
} from 'ctrf'
```

---

## New Features in v0.1.0

### 1. Builder Pattern

Create reports and tests with a fluent, type-safe API:

```typescript
import { ReportBuilder, TestBuilder } from 'ctrf'

const report = new ReportBuilder()
  .tool({ name: 'vitest', version: '1.0.0' })
  .environment({ os: 'linux', arch: 'x64' })
  .addTest(
    new TestBuilder()
      .name('User login test')
      .status('passed')
      .duration(1500)
      .suite(['Authentication', 'Login'])
      .tags(['smoke', 'critical'])
      .browser('chrome')
      .build()
  )
  .addTests([test1, test2, test3])  // Batch add
  .build()
```

### 2. Enhanced Filtering

```typescript
import { filterTests } from 'ctrf'

// Complex filtering
const filtered = filterTests(report, {
  status: 'failed',
  suite: ['unit', 'integration'],
  tags: ['critical'],
  browser: 'chrome',
  filePath: 'auth',  // Partial match
})
```

### 3. Parse & Stringify

```typescript
import { parse, stringify } from 'ctrf'

// Parse with validation
const report = parse(jsonString, { validate: true })

// Pretty print
const json = stringify(report, { pretty: true, indent: 2 })
```

### 4. Error Classes

```typescript
import { 
  ValidationError, 
  ParseError, 
  SchemaVersionError,
  BuilderError 
} from 'ctrf'

try {
  validateStrict(report)
} catch (error) {
  if (error instanceof ValidationError) {
    error.errors.forEach(err => {
      console.error(`${err.path}: ${err.message}`)
    })
  }
}
```

### 5. Type Guards

```typescript
import { 
  isCTRFReport, 
  isTest, 
  isTestStatus,
  isRetryAttempt,
  hasInsights 
} from 'ctrf'

if (isCTRFReport(data)) {
  // data is typed as CTRFReport
}

if (hasInsights(report)) {
  console.log(report.insights?.passRate)
}
```

### 6. Schema Access

```typescript
import { 
  schema,
  getSchema, 
  getCurrentSpecVersion,
  getSupportedSpecVersions 
} from 'ctrf'

console.log(schema)  // Current version schema
const oldSchema = getSchema('0.0.0')
console.log(getCurrentSpecVersion())  // '0.0'
console.log(getSupportedSpecVersions())  // ['0.0']
```

### 7. Summary Calculation

```typescript
import { calculateSummary } from 'ctrf'

// Auto-calculate summary from tests
const summary = calculateSummary(tests, {
  includeOther: true  // Include 'other' status in counts
})

report.results.summary = summary
```

---

## Complete Migration Example

### Before (v0.0.17)

```typescript
import { 
  readReportsFromDirectory,
  validateReportStrict,
  enrichReportWithInsights,
  mergeReports,
  findTestById,
  setTestIdsForReport,
  organizeTestsBySuite
} from 'ctrf'

// Read reports
const reports = await readReportsFromDirectory('./reports')

// Validate
reports.forEach(report => validateReportStrict(report))

// Add IDs
reports.forEach(report => setTestIdsForReport(report))

// Merge
const merged = mergeReports(reports)

// Enrich
enrichReportWithInsights(merged, reports.slice(0, -1))

// Find test
const test = findTestById(merged, 'test-123')

// Organize
const tree = organizeTestsBySuite(merged)
```

### After (v0.1.0)

```typescript
import { 
  parse,
  validateStrict,
  addInsights,
  mergeReports,
  findTest,
  generateTestId
} from 'ctrf'
import { readdirSync, readFileSync } from 'fs'

// Read reports
const files = readdirSync('./reports').filter(f => f.endsWith('.json'))
const reports = files.map(f => 
  parse(readFileSync(`./reports/${f}`, 'utf8'))
)

// Validate
reports.forEach(report => validateStrict(report))

// Add IDs
reports.forEach(report => {
  report.results.tests.forEach(test => {
    if (!test.id) {
      test.id = generateTestId(test)
    }
  })
})

// Merge
const merged = mergeReports(reports, { deduplicateTests: true })

// Enrich
const historical = reports.slice(0, -1)
const enriched = addInsights(merged, historical)

// Find test
const test = findTest(enriched, { id: 'test-123' })

// Group by suite (custom logic)
const testsBySuite = enriched.results.tests.reduce((acc, test) => {
  const suiteKey = test.suite?.join('/') || 'root'
  if (!acc[suiteKey]) acc[suiteKey] = []
  acc[suiteKey].push(test)
  return acc
}, {} as Record<string, typeof enriched.results.tests[0][]>)
```

---

## Testing Your Migration

1. **Update your package.json:**
   ```json
   {
     "dependencies": {
       "ctrf": "^0.1.0"
     }
   }
   ```

2. **Run your tests:**
   ```bash
   npm install
   npm test
   ```

3. **Check for TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

4. **Validate generated reports:**
   ```bash
   npx ctrf validate ./ctrf-report.json
   ```

---

## Getting Help

- **Documentation:** [Full API Reference](./docs/README.md)
- **Discussions:** [GitHub Discussions](https://github.com/orgs/ctrf-io/discussions)
- **Issues:** [Report Issues](https://github.com/ctrf-io/ctrf-js/issues)
- **Examples:** Check the [/src](./src) folder for comprehensive tests

---

## Migration Support Timeline

- **v0.0.17:** ⚠️ Deprecated (use for legacy projects only)
- **v0.1.0:** ✅ Current reference implementation (API may evolve)
- **v1.0.0:** 🔜 Planned stable release with long-term API guarantees

We recommend migrating to v0.1.0 as soon as possible to benefit from improved API design, better error handling, and active maintenance. The API is stable but may receive minor refinements before v1.0.0.

### For CTRF Implementers

If you're implementing CTRF in another language or framework, **v0.1.0 serves as the canonical reference** for:

- **API design patterns** - How to structure your CTRF library
- **Function naming** - Consistent conventions across languages (validate, parse, merge, etc.)
- **Error handling** - Standard error types and validation approaches
- **Builder patterns** - Fluent APIs for constructing CTRF objects
- **Type definitions** - The source of truth for CTRF types

Implementations in Go, .NET, Java, and other languages should align with the patterns established here while remaining idiomatic to their respective ecosystems.
