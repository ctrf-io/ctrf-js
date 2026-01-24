import { describe, it, expect } from 'vitest'
import {
  filterTests,
  findTest,
  groupBy,
  getTestsByStatus,
  getFailedTests,
  getPassedTests,
  getSkippedTests,
  getFlakyTests,
  getTestsByTag,
  getTestsBySuite,
  getUniqueSuites,
  getUniqueTags,
} from './filter.js'
import { ReportBuilder, TestBuilder } from './builder.js'
import type { CTRFReport, Test } from './types.js'

describe('filter', () => {
  const createReport = (tests: Partial<Test>[]): CTRFReport => {
    const builder = new ReportBuilder().tool({ name: 'jest' })

    for (const t of tests) {
      const testBuilder = new TestBuilder()
        .name(t.name || 'test')
        .status(t.status || 'passed')
        .duration(t.duration || 100)

      if (t.id) testBuilder.id(t.id)
      if (t.tags) testBuilder.tags(t.tags)
      if (t.suite) testBuilder.suite(t.suite)
      if (t.flaky !== undefined) testBuilder.flaky(t.flaky)
      if (t.browser) testBuilder.browser(t.browser)
      if (t.device) testBuilder.device(t.device)

      builder.addTest(testBuilder.build())
    }

    return builder.build()
  }

  describe('filterTests', () => {
    it('should filter by single status', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'failed' },
        { name: 'test3', status: 'passed' },
      ])

      const result = filterTests(report, { status: 'passed' })

      expect(result).toHaveLength(2)
      expect(result.every(t => t.status === 'passed')).toBe(true)
    })

    it('should filter by multiple statuses', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'failed' },
        { name: 'test3', status: 'skipped' },
      ])

      const result = filterTests(report, { status: ['failed', 'skipped'] })

      expect(result).toHaveLength(2)
    })

    it('should filter by single tag', () => {
      const report = createReport([
        { name: 'test1', tags: ['smoke', 'fast'] },
        { name: 'test2', tags: ['slow'] },
        { name: 'test3', tags: ['smoke'] },
      ])

      const result = filterTests(report, { tags: 'smoke' })

      expect(result).toHaveLength(2)
    })

    it('should filter by multiple tags (any match)', () => {
      const report = createReport([
        { name: 'test1', tags: ['smoke'] },
        { name: 'test2', tags: ['critical'] },
        { name: 'test3', tags: ['other'] },
      ])

      const result = filterTests(report, { tags: ['smoke', 'critical'] })

      expect(result).toHaveLength(2)
    })

    it('should filter by suite', () => {
      const report = createReport([
        { name: 'test1', suite: ['unit', 'auth'] },
        { name: 'test2', suite: ['unit', 'api'] },
        { name: 'test3', suite: ['integration'] },
      ])

      const result = filterTests(report, { suite: 'auth' })

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test1')
    })

    it('should filter by flaky', () => {
      const report = createReport([
        { name: 'test1', flaky: true },
        { name: 'test2', flaky: false },
        { name: 'test3' },
      ])

      const result = filterTests(report, { flaky: true })

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test1')
    })

    it('should filter by browser', () => {
      const report = createReport([
        { name: 'test1', browser: 'chrome' },
        { name: 'test2', browser: 'firefox' },
      ])

      const result = filterTests(report, { browser: 'chrome' })

      expect(result).toHaveLength(1)
    })

    it('should filter by device', () => {
      const report = createReport([
        { name: 'test1', device: 'mobile' },
        { name: 'test2', device: 'desktop' },
      ])

      const result = filterTests(report, { device: 'mobile' })

      expect(result).toHaveLength(1)
    })

    it('should combine multiple criteria', () => {
      const report = createReport([
        { name: 'test1', status: 'failed', tags: ['smoke'], flaky: true },
        { name: 'test2', status: 'failed', tags: ['smoke'], flaky: false },
        { name: 'test3', status: 'passed', tags: ['smoke'], flaky: true },
      ])

      const result = filterTests(report, {
        status: 'failed',
        tags: 'smoke',
        flaky: true,
      })

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test1')
    })
  })

  describe('findTest', () => {
    it('should find test by id', () => {
      const report = createReport([
        { name: 'test1', id: 'id-1' },
        { name: 'test2', id: 'id-2' },
      ])

      const result = findTest(report, { id: 'id-2' })

      expect(result?.name).toBe('test2')
    })

    it('should find test by name', () => {
      const report = createReport([{ name: 'test1' }, { name: 'test2' }])

      const result = findTest(report, { name: 'test1' })

      expect(result?.name).toBe('test1')
    })

    it('should return undefined for non-existent test', () => {
      const report = createReport([{ name: 'test1' }])

      const result = findTest(report, { id: 'non-existent' })

      expect(result).toBeUndefined()
    })

    it('should combine id/name with filter criteria', () => {
      const report = createReport([
        { name: 'test', status: 'passed', tags: ['smoke'] },
        { name: 'test', status: 'failed', tags: ['smoke'] },
      ])

      const result = findTest(report, { name: 'test', status: 'failed' })

      expect(result?.status).toBe('failed')
    })
  })

  describe('groupBy', () => {
    it('should group by status', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'passed' },
        { name: 'test3', status: 'failed' },
      ])

      const groups = groupBy(report.results.tests, 'status')

      expect(groups['passed']).toHaveLength(2)
      expect(groups['failed']).toHaveLength(1)
    })

    it('should group by first suite level', () => {
      const report = createReport([
        { name: 'test1', suite: ['unit', 'auth'] },
        { name: 'test2', suite: ['unit', 'api'] },
        { name: 'test3', suite: ['integration'] },
        { name: 'test4' },
      ])

      const groups = groupBy(report.results.tests, 'suite')

      expect(groups['unit']).toHaveLength(2)
      expect(groups['integration']).toHaveLength(1)
      expect(groups['root']).toHaveLength(1)
    })

    it('should group by tags (tests may appear in multiple groups)', () => {
      const report = createReport([
        { name: 'test1', tags: ['smoke', 'fast'] },
        { name: 'test2', tags: ['smoke'] },
        { name: 'test3', tags: ['slow'] },
      ])

      const groups = groupBy(report.results.tests, 'tags')

      expect(groups['smoke']).toHaveLength(2)
      expect(groups['fast']).toHaveLength(1)
      expect(groups['slow']).toHaveLength(1)
    })
  })

  describe('getTestsByStatus', () => {
    it('should return tests with given status', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'failed' },
      ])

      const result = getTestsByStatus(report, 'failed')

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test2')
    })
  })

  describe('getFailedTests', () => {
    it('should return only failed tests', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'failed' },
      ])

      expect(getFailedTests(report)).toHaveLength(1)
    })
  })

  describe('getPassedTests', () => {
    it('should return only passed tests', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'failed' },
      ])

      expect(getPassedTests(report)).toHaveLength(1)
    })
  })

  describe('getSkippedTests', () => {
    it('should return only skipped tests', () => {
      const report = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'skipped' },
      ])

      expect(getSkippedTests(report)).toHaveLength(1)
    })
  })

  describe('getFlakyTests', () => {
    it('should return only flaky tests', () => {
      const report = createReport([
        { name: 'test1', flaky: true },
        { name: 'test2', flaky: false },
        { name: 'test3' },
      ])

      expect(getFlakyTests(report)).toHaveLength(1)
    })
  })

  describe('getTestsByTag', () => {
    it('should return tests with given tag', () => {
      const report = createReport([
        { name: 'test1', tags: ['smoke', 'fast'] },
        { name: 'test2', tags: ['slow'] },
      ])

      const result = getTestsByTag(report, 'smoke')

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test1')
    })
  })

  describe('getTestsBySuite', () => {
    it('should return tests in given suite', () => {
      const report = createReport([
        { name: 'test1', suite: ['unit', 'auth'] },
        { name: 'test2', suite: ['integration'] },
      ])

      const result = getTestsBySuite(report, 'unit')

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('test1')
    })
  })

  describe('getUniqueSuites', () => {
    it('should return all unique suite names', () => {
      const report = createReport([
        { name: 'test1', suite: ['unit', 'auth'] },
        { name: 'test2', suite: ['unit', 'api'] },
        { name: 'test3', suite: ['integration'] },
      ])

      const suites = getUniqueSuites(report)

      expect(suites).toContain('unit')
      expect(suites).toContain('auth')
      expect(suites).toContain('api')
      expect(suites).toContain('integration')
    })
  })

  describe('getUniqueTags', () => {
    it('should return all unique tags', () => {
      const report = createReport([
        { name: 'test1', tags: ['smoke', 'fast'] },
        { name: 'test2', tags: ['smoke', 'slow'] },
      ])

      const tags = getUniqueTags(report)

      expect(tags).toContain('smoke')
      expect(tags).toContain('fast')
      expect(tags).toContain('slow')
      expect(tags).toHaveLength(3)
    })
  })
})
