/**
 * CTRF Filtering and Querying
 */

import type { CTRFReport, Test, FilterCriteria, TestStatus } from './types.js'

/**
 * Filter tests in a report by criteria.
 *
 * @param report - The report to filter
 * @param criteria - Filter criteria
 * @returns Array of tests matching the criteria
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
 * Find a single test in a report.
 *
 * @param report - The report to search
 * @param criteria - Search criteria (id, name, or filter criteria)
 * @returns The first matching test, or undefined
 *
 * @example
 * ```typescript
 * // Find by ID
 * const test = findTest(report, { id: 'uuid' });
 *
 * // Find by name
 * const test = findTest(report, { name: 'should login' });
 * ```
 */
export function findTest(
  report: CTRFReport,
  criteria: { id?: string; name?: string } & FilterCriteria
): Test | undefined {
  const { id, name, ...filterCriteria } = criteria

  return report.results.tests.find(test => {
    // Match by ID if provided
    if (id !== undefined && test.id !== id) {
      return false
    }

    // Match by name if provided
    if (name !== undefined && test.name !== name) {
      return false
    }

    // Apply additional filter criteria
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
      // For suite, use the first level or 'root'
      key = test.suite?.[0] ?? 'root'
    } else if (field === 'tags') {
      // For tags, group by each tag (test may appear in multiple groups)
      const tags = test.tags ?? ['untagged']
      for (const tag of tags) {
        if (!groups[tag]) {
          groups[tag] = []
        }
        groups[tag].push(test)
      }
      continue
    } else {
      // For other fields, convert to string
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
  // Check status
  if (criteria.status !== undefined) {
    const statuses = Array.isArray(criteria.status)
      ? criteria.status
      : [criteria.status]
    if (!statuses.includes(test.status)) {
      return false
    }
  }

  // Check tags (test must have at least one matching tag)
  if (criteria.tags !== undefined) {
    const requiredTags = Array.isArray(criteria.tags)
      ? criteria.tags
      : [criteria.tags]
    if (!test.tags || !requiredTags.some(tag => test.tags!.includes(tag))) {
      return false
    }
  }

  // Check suite (test must be in at least one matching suite)
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

  // Check flaky
  if (criteria.flaky !== undefined && test.flaky !== criteria.flaky) {
    return false
  }

  // Check browser
  if (criteria.browser !== undefined && test.browser !== criteria.browser) {
    return false
  }

  // Check device
  if (criteria.device !== undefined && test.device !== criteria.device) {
    return false
  }

  return true
}
