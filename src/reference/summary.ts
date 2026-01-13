/**
 * CTRF Summary Calculation
 */

import type { Test, Summary, SummaryOptions, TestStatus } from './types.js'

/**
 * Calculate summary statistics from an array of tests.
 *
 * @param tests - Array of test results
 * @param options - Optional timing information
 * @returns Calculated summary object
 *
 * @example
 * ```typescript
 * const summary = calculateSummary(tests);
 *
 * // With timing
 * const summary = calculateSummary(tests, {
 *   start: 1704067200000,
 *   stop: 1704067260000
 * });
 * ```
 */
export function calculateSummary(
  tests: Test[],
  options: SummaryOptions = {}
): Summary {
  const statusCounts: Record<TestStatus, number> = {
    passed: 0,
    failed: 0,
    skipped: 0,
    pending: 0,
    other: 0,
  }

  let flakyCount = 0
  const suites = new Set<string>()
  let totalDuration = 0
  let minStart = options.start ?? Number.MAX_SAFE_INTEGER
  let maxStop = options.stop ?? 0

  for (const test of tests) {
    // Count by status
    statusCounts[test.status]++

    // Count flaky tests
    if (test.flaky) {
      flakyCount++
    }

    // Collect unique suites
    if (test.suite) {
      // Add all suite levels as individual suites
      for (let i = 1; i <= test.suite.length; i++) {
        suites.add(test.suite.slice(0, i).join('/'))
      }
    }

    // Accumulate duration
    totalDuration += test.duration

    // Track timing bounds
    if (test.start !== undefined) {
      minStart = Math.min(minStart, test.start)
    }
    if (test.stop !== undefined) {
      maxStop = Math.max(maxStop, test.stop)
    }
  }

  // Use provided times or calculated bounds
  const start =
    options.start ?? (minStart === Number.MAX_SAFE_INTEGER ? 0 : minStart)
  const stop = options.stop ?? maxStop

  const summary: Summary = {
    tests: tests.length,
    passed: statusCounts.passed,
    failed: statusCounts.failed,
    skipped: statusCounts.skipped,
    pending: statusCounts.pending,
    other: statusCounts.other,
    start,
    stop,
  }

  // Only add optional fields if they have meaningful values
  if (flakyCount > 0) {
    summary.flaky = flakyCount
  }

  if (suites.size > 0) {
    summary.suites = suites.size
  }

  if (totalDuration > 0 || tests.length > 0) {
    summary.duration = totalDuration
  }

  return summary
}

/**
 * Recalculate summary from tests, preserving extra metadata.
 *
 * @param tests - Array of test results
 * @param existingSummary - Existing summary to preserve extra from
 * @returns New summary with recalculated stats
 */
export function recalculateSummary(
  tests: Test[],
  existingSummary?: Summary
): Summary {
  const newSummary = calculateSummary(tests, {
    start: existingSummary?.start,
    stop: existingSummary?.stop,
  })

  // Preserve extra metadata if present
  if (existingSummary?.extra) {
    newSummary.extra = { ...existingSummary.extra }
  }

  return newSummary
}
