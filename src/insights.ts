/**
 * CTRF Insights Calculation
 *
 * This module replicates the functionality of the existing run-insights.ts
 * while using the reference implementation's type system and API signatures.
 */

import type {
  CTRFReport,
  Test,
  Insights,
  TestInsights,
  MetricDelta,
  InsightsOptions,
} from './types.js'

// ============================================================================
// Helper Types (Internal)
// ============================================================================

interface SimplifiedTestData {
  name: string
  suite?: string[]
  filePath?: string
}

/**
 * Base run-level metrics aggregated across multiple reports.
 * Key distinction: "Attempts" include retries, "Results" are final test outcomes only.
 */
interface AggregatedRunMetrics {
  // ATTEMPT METRICS (includes retries)
  totalAttempts: number
  totalAttemptsFailed: number
  totalAttemptsFlaky: number

  // RESULT METRICS (final test outcomes only, no retries counted)
  totalResults: number
  totalResultsFailed: number
  totalResultsPassed: number
  totalResultsSkipped: number
  totalResultsFlaky: number

  // OTHER METRICS
  totalResultsDuration: number
  reportsAnalyzed: number
}

/**
 * Aggregated run metrics for a single test across multiple reports.
 */
interface AggregatedTestMetrics extends AggregatedRunMetrics {
  appearsInRuns: number
  durations: number[]
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 *
 * @group Insights
 * Determines if a test is flaky based on the CTRF specification.
 *
 * A test is considered flaky if:
 * - The `flaky` field is explicitly set to `true`, OR
 * - The test has retries > 0 AND final status is 'passed'
 *
 * @param test - The test to check
 * @returns true if the test is flaky
 *
 * @example
 * ```typescript
 * if (isTestFlaky(test)) {
 *   console.log('Test is flaky:', test.name);
 * }
 * ```
 */
export function isTestFlaky(test: Test): boolean {
  return (
    test.flaky === true ||
    (test.retries !== undefined && test.retries > 0 && test.status === 'passed')
  )
}

/**
 * Utility function that formats a ratio (0-1) as a percentage string for display.
 */
export function formatAsPercentage(
  ratio: number,
  decimals: number = 2
): string {
  return `${(ratio * 100).toFixed(decimals)}%`
}

/**
 * Utility function that formats a MetricDelta as percentage strings for display.
 */
export function formatMetricDeltaAsPercentage(
  metric: MetricDelta,
  decimals: number = 2
): { current: string; baseline: string; change: string } {
  return {
    current: formatAsPercentage(metric.current ?? 0, decimals),
    baseline: formatAsPercentage(metric.baseline ?? 0, decimals),
    change: `${(metric.change ?? 0) >= 0 ? '+' : ''}${formatAsPercentage(metric.change ?? 0, decimals)}`,
  }
}

/**
 * Utility function that calculates percent fractional change between current and baseline values.
 */
export function calculatePercentChange(
  current: number,
  baseline: number,
  decimals: number = 4
): number {
  if (baseline === 0) {
    return 0
  }
  return Number(((current - baseline) / baseline).toFixed(decimals))
}

/**
 * Calculates the 95th percentile from an array of numbers.
 */
function calculateP95(values: number[]): number {
  if (values.length === 0) return 0

  const sorted = [...values].sort((a, b) => a - b)
  const index = Math.ceil(sorted.length * 0.95) - 1

  return Number(sorted[Math.max(0, index)].toFixed(2))
}

/**
 * Helper function to validate that reports have the necessary data for insights calculation.
 */
function validateReportForInsights(report: CTRFReport): boolean {
  return !!(report?.results?.tests && Array.isArray(report.results.tests))
}

/**
 * Sort reports by timestamp (newest first).
 */
function sortReportsByTimestamp(reports: CTRFReport[]): CTRFReport[] {
  return [...reports].sort((a, b) => {
    const aStart = a.results?.summary?.start ?? 0
    const bStart = b.results?.summary?.start ?? 0
    return bStart - aStart
  })
}

// ============================================================================
// Metrics Aggregation Functions
// ============================================================================

/**
 * Aggregates test metrics across multiple reports.
 */
function aggregateTestMetricsAcrossReports(
  reports: CTRFReport[]
): Map<string, AggregatedTestMetrics> {
  const metricsMap = new Map<string, AggregatedTestMetrics>()

  for (const report of reports) {
    if (!validateReportForInsights(report)) continue

    for (const test of report.results.tests) {
      const isPassed = test.status === 'passed'
      const isFailed = test.status === 'failed'
      const isSkipped = test.status === 'skipped'
      const isPending = test.status === 'pending'
      const isOther = test.status === 'other'

      const testName = test.name

      if (!metricsMap.has(testName)) {
        metricsMap.set(testName, {
          totalAttempts: 0,
          totalAttemptsFailed: 0,
          totalResults: 0,
          totalResultsFailed: 0,
          totalResultsPassed: 0,
          totalResultsSkipped: 0,
          totalResultsFlaky: 0,
          totalAttemptsFlaky: 0,
          totalResultsDuration: 0,
          appearsInRuns: 0,
          reportsAnalyzed: 0,
          durations: [],
        })
      }

      const metrics = metricsMap.get(testName)!

      metrics.totalResults += 1
      metrics.totalAttempts += 1 + (test.retries || 0)
      metrics.totalAttemptsFailed += test.retries || 0

      if (isFailed) {
        metrics.totalResultsFailed += 1
        metrics.totalAttemptsFailed += 1 + (test.retries || 0)
      } else if (isPassed) {
        metrics.totalResultsPassed += 1
      } else if (isSkipped || isPending || isOther) {
        metrics.totalResultsSkipped += 1
      }

      if (isTestFlaky(test)) {
        metrics.totalResultsFlaky += 1
        metrics.totalAttemptsFlaky += test.retries || 0
      }

      metrics.totalResultsDuration += test.duration || 0
      metrics.durations.push(test.duration || 0)
    }

    const testsInThisReport = new Set<string>()
    for (const test of report.results.tests) {
      testsInThisReport.add(test.name)
    }
    for (const testName of testsInThisReport) {
      const metrics = metricsMap.get(testName)!
      metrics.appearsInRuns += 1
    }
  }

  return metricsMap
}

/**
 * Consolidates all test-level metrics into overall run-level metrics.
 */
function consolidateTestMetricsToRunMetrics(
  metricsMap: Map<string, AggregatedTestMetrics>
): AggregatedRunMetrics {
  let totalAttempts = 0
  let totalAttemptsFailed = 0
  let totalResults = 0
  let totalResultsFailed = 0
  let totalResultsPassed = 0
  let totalResultsSkipped = 0
  let totalResultsFlaky = 0
  let totalAttemptsFlaky = 0
  let totalResultsDuration = 0

  for (const metrics of metricsMap.values()) {
    totalAttempts += metrics.totalAttempts
    totalAttemptsFailed += metrics.totalAttemptsFailed
    totalResults += metrics.totalResults
    totalResultsFailed += metrics.totalResultsFailed
    totalResultsPassed += metrics.totalResultsPassed
    totalResultsSkipped += metrics.totalResultsSkipped
    totalResultsFlaky += metrics.totalResultsFlaky
    totalAttemptsFlaky += metrics.totalAttemptsFlaky
    totalResultsDuration += metrics.totalResultsDuration
  }

  return {
    totalAttempts,
    totalAttemptsFailed,
    totalResults,
    totalResultsFailed,
    totalResultsPassed,
    totalResultsSkipped,
    totalResultsFlaky,
    totalAttemptsFlaky,
    totalResultsDuration,
    reportsAnalyzed: metricsMap.size,
  }
}

// ============================================================================
// Rate Calculation Functions
// ============================================================================

function calculateFlakyRateFromMetrics(
  runMetrics: AggregatedRunMetrics
): number {
  if (runMetrics.totalAttempts === 0) {
    return 0
  }
  return Number(
    (
      runMetrics.totalAttemptsFlaky /
      (runMetrics.totalResults + runMetrics.totalAttemptsFlaky)
    ).toFixed(4)
  )
}

function calculateFailRateFromMetrics(
  runMetrics: AggregatedRunMetrics
): number {
  if (runMetrics.totalResults === 0) {
    return 0
  }
  return Number(
    (runMetrics.totalResultsFailed / runMetrics.totalResults).toFixed(4)
  )
}

function calculatePassRateFromMetrics(
  runMetrics: AggregatedRunMetrics
): number {
  if (runMetrics.totalResults === 0) {
    return 0
  }
  return Number(
    (runMetrics.totalResultsPassed / runMetrics.totalResults).toFixed(4)
  )
}

function calculateAverageTestDurationFromMetrics(
  runMetrics: AggregatedRunMetrics
): number {
  if (runMetrics.totalResults === 0) {
    return 0
  }
  return Number(
    (runMetrics.totalResultsDuration / runMetrics.totalResults).toFixed(2)
  )
}

function calculateAverageRunDurationFromMetrics(
  runMetrics: AggregatedRunMetrics
): number {
  if (runMetrics.reportsAnalyzed === 0) {
    return 0
  }
  return Number(
    (runMetrics.totalResultsDuration / runMetrics.reportsAnalyzed).toFixed(2)
  )
}

function calculateP95RunDurationFromReports(reports: CTRFReport[]): number {
  const runDurations: number[] = []

  for (const report of reports) {
    if (validateReportForInsights(report) && report.results?.summary) {
      const { start, stop } = report.results.summary
      if (start && stop && stop > start) {
        const runDuration = stop - start
        runDurations.push(runDuration)
      }
    }
  }

  return calculateP95(runDurations)
}

// ============================================================================
// Insights Calculation Functions
// ============================================================================

/**
 * Internal helper function that recursively calculates insights for each report.
 */
function calculateRunInsights(
  reports: CTRFReport[],
  index: number = 0
): CTRFReport[] {
  if (index >= reports.length) {
    return reports
  }

  const currentReport = reports[index]
  const previousReports = reports.slice(index + 1)

  const allReportsUpToThisPoint = [currentReport, ...previousReports]
  const testMetrics = aggregateTestMetricsAcrossReports(allReportsUpToThisPoint)
  const runMetrics = consolidateTestMetricsToRunMetrics(testMetrics)

  const { ...relevantMetrics } = runMetrics

  currentReport.insights = {
    passRate: {
      current: calculatePassRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    flakyRate: {
      current: calculateFlakyRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    failRate: {
      current: calculateFailRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    averageTestDuration: {
      current: calculateAverageTestDurationFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    averageRunDuration: {
      current: calculateAverageRunDurationFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    p95RunDuration: {
      current: calculateP95RunDurationFromReports(allReportsUpToThisPoint),
      baseline: 0,
      change: 0,
    },
    runsAnalyzed: allReportsUpToThisPoint.length,
    extra: relevantMetrics,
  }

  return calculateRunInsights(reports, index + 1)
}

/**
 * Calculates test-level insights with baseline comparison for a specific test.
 */
function calculateTestInsightsWithBaseline(
  currentTestMetrics: AggregatedTestMetrics,
  baselineTestMetrics?: AggregatedTestMetrics
): TestInsights {
  const currentPassRate =
    currentTestMetrics.totalResults === 0
      ? 0
      : Number(
          (
            currentTestMetrics.totalResultsPassed /
            currentTestMetrics.totalResults
          ).toFixed(4)
        )
  const currentFlakyRate =
    currentTestMetrics.totalAttempts === 0
      ? 0
      : Number(
          (
            currentTestMetrics.totalAttemptsFlaky /
            (currentTestMetrics.totalResults +
              currentTestMetrics.totalAttemptsFlaky)
          ).toFixed(4)
        )
  const currentFailRate =
    currentTestMetrics.totalResults === 0
      ? 0
      : Number(
          (
            currentTestMetrics.totalResultsFailed /
            currentTestMetrics.totalResults
          ).toFixed(4)
        )
  const currentAverageDuration =
    currentTestMetrics.totalResults === 0
      ? 0
      : Number(
          (
            currentTestMetrics.totalResultsDuration /
            currentTestMetrics.totalResults
          ).toFixed(2)
        )
  const currentP95Duration = calculateP95(currentTestMetrics.durations)

  let baselinePassRate = 0
  let baselineFlakyRate = 0
  let baselineFailRate = 0
  let baselineAverageDuration = 0
  let baselineP95Duration = 0

  if (baselineTestMetrics) {
    baselinePassRate =
      baselineTestMetrics.totalResults === 0
        ? 0
        : Number(
            (
              baselineTestMetrics.totalResultsPassed /
              baselineTestMetrics.totalResults
            ).toFixed(4)
          )
    baselineFlakyRate =
      baselineTestMetrics.totalAttempts === 0
        ? 0
        : Number(
            (
              baselineTestMetrics.totalAttemptsFlaky /
              baselineTestMetrics.totalAttempts
            ).toFixed(4)
          )
    baselineFailRate =
      baselineTestMetrics.totalResults === 0
        ? 0
        : Number(
            (
              baselineTestMetrics.totalResultsFailed /
              baselineTestMetrics.totalResults
            ).toFixed(4)
          )
    baselineAverageDuration =
      baselineTestMetrics.totalResults === 0
        ? 0
        : Number(
            (
              baselineTestMetrics.totalResultsDuration /
              baselineTestMetrics.totalResults
            ).toFixed(2)
          )
    baselineP95Duration = calculateP95(baselineTestMetrics.durations)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { durations: _durations, ...relevantMetrics } = currentTestMetrics

  return {
    passRate: {
      current: currentPassRate,
      baseline: baselinePassRate,
      change: Number((currentPassRate - baselinePassRate).toFixed(4)),
    },
    flakyRate: {
      current: currentFlakyRate,
      baseline: baselineFlakyRate,
      change: Number((currentFlakyRate - baselineFlakyRate).toFixed(4)),
    },
    failRate: {
      current: currentFailRate,
      baseline: baselineFailRate,
      change: Number((currentFailRate - baselineFailRate).toFixed(4)),
    },
    averageTestDuration: {
      current: currentAverageDuration,
      baseline: baselineAverageDuration,
      change: currentAverageDuration - baselineAverageDuration,
    },
    p95TestDuration: {
      current: currentP95Duration,
      baseline: baselineP95Duration,
      change: currentP95Duration - baselineP95Duration,
    },
    executedInRuns: currentTestMetrics.appearsInRuns,
    extra: relevantMetrics,
  }
}

/**
 * Internal helper function that adds test-level insights with baseline comparison to all tests.
 */
function addTestInsightsWithBaselineToCurrentReport(
  currentReport: CTRFReport,
  previousReports: CTRFReport[],
  baselineReport?: CTRFReport
): CTRFReport {
  if (!validateReportForInsights(currentReport)) {
    return currentReport
  }

  const allReports = [currentReport, ...previousReports]
  const currentTestMetrics = aggregateTestMetricsAcrossReports(allReports)

  let baselineTestMetrics: Map<string, AggregatedTestMetrics> | undefined
  if (baselineReport && validateReportForInsights(baselineReport)) {
    const baselineIndex = previousReports.findIndex(
      report =>
        report.results?.summary?.start ===
        baselineReport.results?.summary?.start
    )

    if (baselineIndex >= 0) {
      const reportsUpToBaseline = previousReports.slice(baselineIndex)
      baselineTestMetrics =
        aggregateTestMetricsAcrossReports(reportsUpToBaseline)
    }
  }

  const reportWithInsights: CTRFReport = {
    ...currentReport,
    results: {
      ...currentReport.results,
      tests: currentReport.results.tests.map(test => {
        const testName = test.name
        const currentMetrics = currentTestMetrics.get(testName)

        if (currentMetrics) {
          const baselineMetrics = baselineTestMetrics?.get(testName)
          const testInsights = calculateTestInsightsWithBaseline(
            currentMetrics,
            baselineMetrics
          )
          return {
            ...test,
            insights: testInsights,
          }
        }

        return test
      }),
    },
  }

  return reportWithInsights
}

/**
 * Internal helper function that calculates baseline report-level insights.
 */
function calculateReportInsightsBaseline(
  currentReport: CTRFReport,
  baselineReport: CTRFReport
): Insights {
  const currentInsights = currentReport.insights
  const previousInsights = baselineReport.insights

  if (!currentInsights || !previousInsights) {
    console.log('Both reports must have insights populated')
    return currentReport.insights as Insights
  }

  return {
    passRate: {
      current: currentInsights?.passRate?.current ?? 0,
      baseline: previousInsights?.passRate?.current ?? 0,
      change: Number(
        (
          (currentInsights?.passRate?.current ?? 0) -
          (previousInsights?.passRate?.current ?? 0)
        ).toFixed(4)
      ),
    },
    flakyRate: {
      current: currentInsights?.flakyRate?.current ?? 0,
      baseline: previousInsights?.flakyRate?.current ?? 0,
      change: Number(
        (
          (currentInsights?.flakyRate?.current ?? 0) -
          (previousInsights?.flakyRate?.current ?? 0)
        ).toFixed(4)
      ),
    },
    failRate: {
      current: currentInsights?.failRate?.current ?? 0,
      baseline: previousInsights?.failRate?.current ?? 0,
      change: Number(
        (
          (currentInsights?.failRate?.current ?? 0) -
          (previousInsights?.failRate?.current ?? 0)
        ).toFixed(4)
      ),
    },
    averageTestDuration: {
      current: currentInsights?.averageTestDuration?.current ?? 0,
      baseline: previousInsights?.averageTestDuration?.current ?? 0,
      change:
        (currentInsights?.averageTestDuration?.current ?? 0) -
        (previousInsights?.averageTestDuration?.current ?? 0),
    },
    averageRunDuration: {
      current: currentInsights?.averageRunDuration?.current ?? 0,
      baseline: previousInsights?.averageRunDuration?.current ?? 0,
      change:
        (currentInsights?.averageRunDuration?.current ?? 0) -
        (previousInsights?.averageRunDuration?.current ?? 0),
    },
    p95RunDuration: {
      current: currentInsights?.p95RunDuration?.current ?? 0,
      baseline: previousInsights?.p95RunDuration?.current ?? 0,
      change:
        (currentInsights?.p95RunDuration?.current ?? 0) -
        (previousInsights?.p95RunDuration?.current ?? 0),
    },
    runsAnalyzed: currentInsights?.runsAnalyzed ?? 0,
    extra: currentInsights.extra,
  }
}

/**
 * Gets test details for tests that have been removed since the baseline report.
 */
function getTestsRemovedSinceBaseline(
  currentReport: CTRFReport,
  baselineReport: CTRFReport
): SimplifiedTestData[] {
  if (
    !validateReportForInsights(currentReport) ||
    !validateReportForInsights(baselineReport)
  ) {
    return []
  }

  const currentTestNames = new Set(
    currentReport.results.tests.map(test => test.name)
  )
  const removedTests = baselineReport.results.tests.filter(
    test => !currentTestNames.has(test.name)
  )

  return removedTests.map(test => ({
    name: test.name,
    suite: test.suite,
    filePath: test.filePath,
  }))
}

/**
 * Gets test details for tests that have been added since the baseline report.
 */
function getTestsAddedSinceBaseline(
  currentReport: CTRFReport,
  baselineReport: CTRFReport
): SimplifiedTestData[] {
  if (
    !validateReportForInsights(currentReport) ||
    !validateReportForInsights(baselineReport)
  ) {
    return []
  }

  const baselineTestNames = new Set(
    baselineReport.results.tests.map(test => test.name)
  )
  const addedTests = currentReport.results.tests.filter(
    test => !baselineTestNames.has(test.name)
  )

  return addedTests.map(test => ({
    name: test.name,
    suite: test.suite,
    filePath: test.filePath,
  }))
}

/**
 * Sets the removed tests array to insights.extra.testsRemoved.
 */
function setTestsRemovedToInsights(
  insights: Insights,
  currentReport: CTRFReport,
  baselineReport: CTRFReport
): Insights {
  const removedTests = getTestsRemovedSinceBaseline(
    currentReport,
    baselineReport
  )

  return {
    ...insights,
    extra: {
      ...insights.extra,
      testsRemoved: removedTests,
    },
  }
}

/**
 * Sets the added tests array to insights.extra.testsAdded.
 */
function setTestsAddedToInsights(
  insights: Insights,
  currentReport: CTRFReport,
  baselineReport: CTRFReport
): Insights {
  const addedTests = getTestsAddedSinceBaseline(currentReport, baselineReport)

  return {
    ...insights,
    extra: {
      ...insights.extra,
      testsAdded: addedTests,
    },
  }
}

// ============================================================================
// Main Public API
// ============================================================================

/**
 * Calculate run-level insights from multiple historical reports.
 *
 * This is a simplified API for getting insights from an array of reports.
 * For the full enrichment workflow, use `addInsights`.
 *
 * @param reports - Array of historical reports (most recent last)
 * @param options - Insights options
 * @returns Calculated insights
 *
 * @example
 * ```typescript
 * const insights = calculateInsights(historicalReports);
 *
 * // With baseline
 * const insights = calculateInsights(reports, { baseline: baselineReport });
 *
 * // With limited window
 * const insights = calculateInsights(reports, { window: 10 });
 * ```
 */
export function calculateInsights(
  reports: CTRFReport[],
  options: InsightsOptions = {}
): Insights {
  const { baseline, window } = options

  // Apply window limit if specified
  const reportsToAnalyze =
    window && window < reports.length ? reports.slice(-window) : reports

  if (reportsToAnalyze.length === 0) {
    return { runsAnalyzed: 0 }
  }

  const testMetrics = aggregateTestMetricsAcrossReports(reportsToAnalyze)
  const runMetrics = consolidateTestMetricsToRunMetrics(testMetrics)

  const currentInsights: Insights = {
    passRate: {
      current: calculatePassRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    failRate: {
      current: calculateFailRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    flakyRate: {
      current: calculateFlakyRateFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    averageTestDuration: {
      current: calculateAverageTestDurationFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    averageRunDuration: {
      current: calculateAverageRunDurationFromMetrics(runMetrics),
      baseline: 0,
      change: 0,
    },
    p95RunDuration: {
      current: calculateP95RunDurationFromReports(reportsToAnalyze),
      baseline: 0,
      change: 0,
    },
    runsAnalyzed: reportsToAnalyze.length,
    extra: runMetrics as unknown as Record<string, unknown>,
  }

  // If baseline provided, calculate baseline metrics and changes
  if (baseline && validateReportForInsights(baseline)) {
    const baselineTestMetrics = aggregateTestMetricsAcrossReports([baseline])
    const baselineRunMetrics =
      consolidateTestMetricsToRunMetrics(baselineTestMetrics)

    const baselinePassRate = calculatePassRateFromMetrics(baselineRunMetrics)
    const baselineFailRate = calculateFailRateFromMetrics(baselineRunMetrics)
    const baselineFlakyRate = calculateFlakyRateFromMetrics(baselineRunMetrics)
    const baselineAvgTestDuration =
      calculateAverageTestDurationFromMetrics(baselineRunMetrics)
    const baselineAvgRunDuration =
      calculateAverageRunDurationFromMetrics(baselineRunMetrics)
    const baselineP95RunDuration = calculateP95RunDurationFromReports([
      baseline,
    ])

    currentInsights.passRate!.baseline = baselinePassRate
    currentInsights.passRate!.change = Number(
      ((currentInsights.passRate!.current ?? 0) - baselinePassRate).toFixed(4)
    )

    currentInsights.failRate!.baseline = baselineFailRate
    currentInsights.failRate!.change = Number(
      ((currentInsights.failRate!.current ?? 0) - baselineFailRate).toFixed(4)
    )

    currentInsights.flakyRate!.baseline = baselineFlakyRate
    currentInsights.flakyRate!.change = Number(
      ((currentInsights.flakyRate!.current ?? 0) - baselineFlakyRate).toFixed(4)
    )

    currentInsights.averageTestDuration!.baseline = baselineAvgTestDuration
    currentInsights.averageTestDuration!.change =
      (currentInsights.averageTestDuration!.current ?? 0) -
      baselineAvgTestDuration

    currentInsights.averageRunDuration!.baseline = baselineAvgRunDuration
    currentInsights.averageRunDuration!.change =
      (currentInsights.averageRunDuration!.current ?? 0) -
      baselineAvgRunDuration

    currentInsights.p95RunDuration!.baseline = baselineP95RunDuration
    currentInsights.p95RunDuration!.change =
      (currentInsights.p95RunDuration!.current ?? 0) - baselineP95RunDuration
  }

  return currentInsights
}

/**
 * Calculate insights for a specific test across multiple reports.
 *
 * @param reports - Array of historical reports
 * @param testId - The test ID to calculate insights for
 * @returns Calculated test insights
 *
 * @example
 * ```typescript
 * const insights = calculateTestInsights(reports, 'test-uuid');
 * ```
 */
export function calculateTestInsights(
  reports: CTRFReport[],
  testId: string
): TestInsights {
  // Collect all instances of this test across reports by ID
  const testInstances: Test[] = []
  let executedCount = 0

  for (const report of reports) {
    const test = report.results.tests.find(t => t.id === testId)
    if (test) {
      testInstances.push(test)
      executedCount++
    }
  }

  if (testInstances.length === 0) {
    return { executedInRuns: 0 }
  }

  // Build aggregated metrics for this single test
  const metrics: AggregatedTestMetrics = {
    totalAttempts: 0,
    totalAttemptsFailed: 0,
    totalResults: 0,
    totalResultsFailed: 0,
    totalResultsPassed: 0,
    totalResultsSkipped: 0,
    totalResultsFlaky: 0,
    totalAttemptsFlaky: 0,
    totalResultsDuration: 0,
    appearsInRuns: executedCount,
    reportsAnalyzed: executedCount,
    durations: [],
  }

  for (const test of testInstances) {
    metrics.totalResults += 1
    metrics.totalAttempts += 1 + (test.retries || 0)
    metrics.totalAttemptsFailed += test.retries || 0

    if (test.status === 'failed') {
      metrics.totalResultsFailed += 1
      metrics.totalAttemptsFailed += 1 + (test.retries || 0)
    } else if (test.status === 'passed') {
      metrics.totalResultsPassed += 1
    } else {
      metrics.totalResultsSkipped += 1
    }

    if (isTestFlaky(test)) {
      metrics.totalResultsFlaky += 1
      metrics.totalAttemptsFlaky += test.retries || 0
    }

    metrics.totalResultsDuration += test.duration || 0
    metrics.durations.push(test.duration || 0)
  }

  return calculateTestInsightsWithBaseline(metrics, undefined)
}

/**
 * Calculate the metric delta between current and baseline values.
 *
 * @param current - Current value
 * @param baseline - Baseline value
 * @returns MetricDelta object
 */
export function calculateMetricDelta(
  current: number,
  baseline: number
): MetricDelta {
  return {
    current,
    baseline,
    change: current - baseline,
  }
}

/**
 *
 * @group Insights
 * Add insights to a CTRF report using historical data.
 *
 * Computes run-level and test-level insights according to the CTRF specification,
 * including pass rate, fail rate, flaky rate, and duration metrics.
 *
 * @param report - The current report to enrich with insights
 * @param historicalReports - Array of previous reports for trend analysis
 * @param options - Options including baseline for comparison
 * @returns A new report with insights populated
 *
 * @example
 * ```typescript
 * // Basic usage
 * const reportWithInsights = addInsights(currentReport, previousReports);
 *
 * // With baseline comparison
 * const reportWithInsights = addInsights(currentReport, previousReports, {
 *   baseline: baselineReport
 * });
 * ```
 */
export function addInsights(
  report: CTRFReport,
  historicalReports: CTRFReport[] = [],
  options: InsightsOptions = {}
): CTRFReport {
  if (!validateReportForInsights(report)) {
    console.warn('Current report is not valid for insights calculation')
    return report
  }

  const baseline = options.baseline

  const sortedPreviousReports = sortReportsByTimestamp(historicalReports)

  const allReports = [report, ...sortedPreviousReports]
  const reportsWithRunInsights = calculateRunInsights([...allReports])

  const currentReportWithRunInsights = reportsWithRunInsights[0]
  const currentReportWithTestInsights =
    addTestInsightsWithBaselineToCurrentReport(
      currentReportWithRunInsights,
      sortedPreviousReports,
      baseline
    )

  if (!baseline) {
    return currentReportWithTestInsights
  }

  let baselineInsights = calculateReportInsightsBaseline(
    currentReportWithTestInsights,
    baseline
  )

  baselineInsights = setTestsAddedToInsights(
    baselineInsights,
    currentReportWithTestInsights,
    baseline
  )

  baselineInsights = setTestsRemovedToInsights(
    baselineInsights,
    currentReportWithTestInsights,
    baseline
  )

  // Remove testsAdded and testsRemoved as they're not part of the official schema yet
  if (baselineInsights.extra?.testsAdded) {
    delete baselineInsights.extra.testsAdded
  }
  if (baselineInsights.extra?.testsRemoved) {
    delete baselineInsights.extra.testsRemoved
  }

  return {
    ...currentReportWithTestInsights,
    insights: baselineInsights,
  }
}
