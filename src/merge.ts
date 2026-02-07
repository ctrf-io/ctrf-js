/**
 * CTRF Report Merging
 */

import type {
  CTRFReport,
  Test,
  Summary,
  Environment,
  MergeOptions,
} from './types.js'
import { REPORT_FORMAT, CURRENT_SPEC_VERSION } from './constants.js'
import { calculateSummary } from './summary.js'
import { generateReportId } from './id.js'

/**
 *
 * @group Merge
 * Merge multiple CTRF reports into a single report.
 * Useful for combining results from parallel or sharded test runs.
 *
 * @param reports - Array of CTRF reports to merge
 * @param options - Merge options (deduplication, environment handling)
 * @returns A new merged CTRFReport
 * @throws Error if no reports are provided
 *
 * @example
 * ```typescript
 * const merged = merge([report1, report2, report3]);
 *
 * // With deduplication by test ID
 * const merged = merge(reports, { deduplicateTests: true });
 *
 * // Keep first environment only
 * const merged = merge(reports, { preserveEnvironment: 'first' });
 * ```
 */
export function merge(
  reports: CTRFReport[],
  options: MergeOptions = {}
): CTRFReport {
  if (!reports || reports.length === 0) {
    throw new Error('No reports provided for merging')
  }

  if (reports.length === 1) {
    return { ...reports[0] }
  }

  const {
    deduplicateTests = false,
    mergeSummary = true,
    preserveEnvironment = 'merge',
  } = options

  let allTests: Test[] = []
  for (const report of reports) {
    allTests.push(...report.results.tests)
  }

  if (deduplicateTests) {
    const seen = new Map<string, Test>()
    for (const test of allTests) {
      if (test.id) {
        seen.set(test.id, test)
      } else {
        seen.set(`no-id-${seen.size}`, test)
      }
    }
    allTests = Array.from(seen.values())
  }

  let summary: Summary
  if (mergeSummary) {
    summary = calculateSummary(allTests)
    let minStart = Number.MAX_SAFE_INTEGER
    let maxStop = 0
    for (const report of reports) {
      minStart = Math.min(minStart, report.results.summary.start)
      maxStop = Math.max(maxStop, report.results.summary.stop)
    }
    summary.start = minStart === Number.MAX_SAFE_INTEGER ? 0 : minStart
    summary.stop = maxStop
    summary.duration = summary.stop - summary.start
  } else {
    summary = sumSummaries(reports.map(r => r.results.summary))
  }
  let environment: Environment | undefined
  switch (preserveEnvironment) {
    case 'first':
      environment = reports[0].results.environment
      break
    case 'last':
      environment = reports[reports.length - 1].results.environment
      break
    case 'merge':
    default:
      environment = mergeEnvironments(
        reports.map(r => r.results.environment).filter(Boolean) as Environment[]
      )
      break
  }

  const tool = reports[0].results.tool
  const merged: CTRFReport = {
    reportFormat: REPORT_FORMAT,
    specVersion: CURRENT_SPEC_VERSION,
    reportId: generateReportId(),
    timestamp: new Date().toISOString(),
    results: {
      tool,
      summary,
      tests: allTests,
    },
  }

  if (environment && Object.keys(environment).length > 0) {
    merged.results.environment = environment
  }

  // Merge extra metadata from results
  const mergedResultsExtra = mergeExtras(
    reports.map(r => r.results.extra).filter(Boolean) as Record<
      string,
      unknown
    >[]
  )
  if (mergedResultsExtra && Object.keys(mergedResultsExtra).length > 0) {
    merged.results.extra = mergedResultsExtra
  }

  // Merge report-level extra
  const mergedReportExtra = mergeExtras(
    reports.map(r => r.extra).filter(Boolean) as Record<string, unknown>[]
  )
  if (mergedReportExtra && Object.keys(mergedReportExtra).length > 0) {
    merged.extra = mergedReportExtra
  }

  return merged
}

/**
 * Sum multiple summaries together.
 */
function sumSummaries(summaries: Summary[]): Summary {
  const result: Summary = {
    tests: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    pending: 0,
    other: 0,
    start: Number.MAX_SAFE_INTEGER,
    stop: 0,
  }

  let totalFlaky = 0
  let totalSuites = 0
  let totalDuration = 0
  let hasFlaky = false
  let hasSuites = false
  let hasDuration = false

  for (const summary of summaries) {
    result.tests += summary.tests
    result.passed += summary.passed
    result.failed += summary.failed
    result.skipped += summary.skipped
    result.pending += summary.pending
    result.other += summary.other
    result.start = Math.min(result.start, summary.start)
    result.stop = Math.max(result.stop, summary.stop)

    if (summary.flaky !== undefined) {
      hasFlaky = true
      totalFlaky += summary.flaky
    }
    if (summary.suites !== undefined) {
      hasSuites = true
      totalSuites += summary.suites
    }
    if (summary.duration !== undefined) {
      hasDuration = true
      totalDuration += summary.duration
    }
  }

  if (result.start === Number.MAX_SAFE_INTEGER) {
    result.start = 0
  }

  if (hasFlaky) result.flaky = totalFlaky
  if (hasSuites) result.suites = totalSuites
  if (hasDuration) result.duration = totalDuration

  return result
}

/**
 * Merge multiple environments into one.
 */
function mergeEnvironments(environments: Environment[]): Environment {
  const merged: Environment = {}

  for (const env of environments) {
    for (const [key, value] of Object.entries(env)) {
      if (
        value !== undefined &&
        merged[key as keyof Environment] === undefined
      ) {
        ;(merged as Record<string, unknown>)[key] = value
      }
    }
  }

  return merged
}

/**
 * Merge multiple extra objects.
 */
function mergeExtras(
  extras: Record<string, unknown>[]
): Record<string, unknown> | undefined {
  if (extras.length === 0) {
    return undefined
  }

  const merged: Record<string, unknown> = {}

  for (const extra of extras) {
    for (const [key, value] of Object.entries(extra)) {
      if (merged[key] === undefined) {
        merged[key] = value
      }
    }
  }

  return Object.keys(merged).length > 0 ? merged : undefined
}
