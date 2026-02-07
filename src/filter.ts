/**
 * CTRF Filtering and Querying
 */

import type { CTRFReport, Test, FilterCriteria, TestStatus } from './types.js'

/**
 *
 * @group Query & Filter
 * Filter tests in a report by criteria.
 *
 * @param report - The CTRF report containing tests to filter
 * @param criteria - Filter criteria (status, tags, suite, flaky, browser, device)
 * @returns Array of tests matching all specified criteria
 *
 * @example
 * ```typescript
 * // Filter by status
 * const failed = filterTests(report, { status: 'failed' });
 *
 * // Filter by multiple criteria
 * const filtered = filterTests(report, {
 *   status: ['failed', 'skipped'],
 *   tags: ['smoke'],
 *   flaky: true
 * });
 * ```
 */
export function filterTests(
  report: CTRFReport,
  criteria: FilterCriteria
): Test[] {
  return report.results.tests.filter(test => matchesCriteria(test, criteria))
}

/**
 *
 * @group Query & Filter
 * Find a single test in a report.
 *
 * @param report - The CTRF report to search
 * @param criteria - Filter criteria including id, name, status, tags, etc.
 * @returns The first matching test, or undefined if not found
 *
 * @example
 * ```typescript
 * // Find by ID
 * const test = findTest(report, { id: 'uuid' });
 *
 * // Find by name
 * const test = findTest(report, { name: 'should login' });
 *
 * // Find by multiple criteria
 * const test = findTest(report, { status: 'failed', flaky: true });
 * ```
 */
export function findTest(
  report: CTRFReport,
  criteria: FilterCriteria
): Test | undefined {
  const { id, name, ...filterCriteria } = criteria

  return report.results.tests.find(test => {
    if (id !== undefined && test.id !== id) {
      return false
    }

    if (name !== undefined && test.name !== name) {
      return false
    }

    return matchesCriteria(test, filterCriteria)
  })
}

/**
 * Group tests by a field.
 *
 * @param tests - Array of tests to group
 * @param field - Field to group by
 * @returns Object with field values as keys and arrays of tests as values
 *
 * @example
 * ```typescript
 * const byStatus = groupBy(report.results.tests, 'status');
 * // => { passed: [...], failed: [...], ... }
 *
 * const bySuite = groupBy(report.results.tests, 'suite');
 * // Groups by first suite level
 * ```
 */
export function groupBy<K extends keyof Test>(
  tests: Test[],
  field: K
): Record<string, Test[]> {
  const groups: Record<string, Test[]> = {}

  for (const test of tests) {
    let key: string

    if (field === 'suite') {
      key = test.suite?.[0] ?? 'root'
    } else if (field === 'tags') {
      const tags = test.tags ?? ['untagged']
      for (const tag of tags) {
        if (!groups[tag]) {
          groups[tag] = []
        }
        groups[tag].push(test)
      }
      continue
    } else {
      const value = test[field]
      key = value !== undefined ? String(value) : 'undefined'
    }

    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(test)
  }

  return groups
}

/**
 * Get tests by status.
 *
 * @param report - The report to query
 * @param status - The status to filter by
 * @returns Array of tests with the given status
 */
export function getTestsByStatus(
  report: CTRFReport,
  status: TestStatus
): Test[] {
  return report.results.tests.filter(test => test.status === status)
}

/**
 * Get all failed tests.
 *
 * @param report - The report to query
 * @returns Array of failed tests
 */
export function getFailedTests(report: CTRFReport): Test[] {
  return getTestsByStatus(report, 'failed')
}

/**
 * Get all passed tests.
 *
 * @param report - The report to query
 * @returns Array of passed tests
 */
export function getPassedTests(report: CTRFReport): Test[] {
  return getTestsByStatus(report, 'passed')
}

/**
 * Get all skipped tests.
 *
 * @param report - The report to query
 * @returns Array of skipped tests
 */
export function getSkippedTests(report: CTRFReport): Test[] {
  return getTestsByStatus(report, 'skipped')
}

/**
 * Get all flaky tests.
 *
 * @param report - The report to query
 * @returns Array of flaky tests
 */
export function getFlakyTests(report: CTRFReport): Test[] {
  return report.results.tests.filter(test => test.flaky === true)
}

/**
 * Get tests by tag.
 *
 * @param report - The report to query
 * @param tag - The tag to filter by
 * @returns Array of tests with the given tag
 */
export function getTestsByTag(report: CTRFReport, tag: string): Test[] {
  return report.results.tests.filter(test => test.tags?.includes(tag))
}

/**
 * Get tests by suite.
 *
 * @param report - The report to query
 * @param suiteName - The suite name to filter by (can be any level in the hierarchy)
 * @returns Array of tests in the given suite
 */
export function getTestsBySuite(report: CTRFReport, suiteName: string): Test[] {
  return report.results.tests.filter(test => test.suite?.includes(suiteName))
}

/**
 * Get unique suite names from a report.
 *
 * @param report - The report to query
 * @returns Array of unique suite names
 */
export function getUniqueSuites(report: CTRFReport): string[] {
  const suites = new Set<string>()

  for (const test of report.results.tests) {
    if (test.suite) {
      for (const suite of test.suite) {
        suites.add(suite)
      }
    }
  }

  return Array.from(suites)
}

/**
 * Get unique tags from a report.
 *
 * @param report - The report to query
 * @returns Array of unique tags
 */
export function getUniqueTags(report: CTRFReport): string[] {
  const tags = new Set<string>()

  for (const test of report.results.tests) {
    if (test.tags) {
      for (const tag of test.tags) {
        tags.add(tag)
      }
    }
  }

  return Array.from(tags)
}

/**
 * Check if a test matches the given criteria.
 */
function matchesCriteria(test: Test, criteria: FilterCriteria): boolean {
  if (criteria.status !== undefined) {
    const statuses = Array.isArray(criteria.status)
      ? criteria.status
      : [criteria.status]
    if (!statuses.includes(test.status)) {
      return false
    }
  }

  if (criteria.tags !== undefined) {
    const requiredTags = Array.isArray(criteria.tags)
      ? criteria.tags
      : [criteria.tags]
    if (!test.tags || !requiredTags.some(tag => test.tags!.includes(tag))) {
      return false
    }
  }

  if (criteria.suite !== undefined) {
    const requiredSuites = Array.isArray(criteria.suite)
      ? criteria.suite
      : [criteria.suite]
    if (
      !test.suite ||
      !requiredSuites.some(suite => test.suite!.includes(suite))
    ) {
      return false
    }
  }

  if (criteria.flaky !== undefined && test.flaky !== criteria.flaky) {
    return false
  }

  if (criteria.browser !== undefined && test.browser !== criteria.browser) {
    return false
  }

  if (criteria.device !== undefined && test.device !== criteria.device) {
    return false
  }

  return true
}
