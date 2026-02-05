import { describe, it, expect } from 'vitest'
import { merge } from './merge.js'
import { ReportBuilder, TestBuilder } from './builder.js'
import type { CTRFReport } from './types.js'

describe('merge', () => {
  const createReport = (
    tests: { name: string; status: 'passed' | 'failed' }[],
    overrides: Partial<CTRFReport> = {}
  ): CTRFReport => {
    const builder = new ReportBuilder()
      .tool({ name: 'jest' })
      .summaryOverrides({ start: 1000, stop: 2000 })

    for (const t of tests) {
      builder.addTest(
        new TestBuilder().name(t.name).status(t.status).duration(100).build()
      )
    }

    const report = builder.build()
    return { ...report, ...overrides }
  }

  describe('merge', () => {
    it('should throw for empty reports array', () => {
      expect(() => merge([])).toThrow('No reports provided')
    })

    it('should return copy for single report', () => {
      const report = createReport([{ name: 'test', status: 'passed' }])
      const merged = merge([report])

      expect(merged.results.tests).toHaveLength(1)
      expect(merged).not.toBe(report)
    })

    it('should merge tests from multiple reports', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      const report2 = createReport([{ name: 'test2', status: 'failed' }])

      const merged = merge([report1, report2])

      expect(merged.results.tests).toHaveLength(2)
      expect(merged.results.tests[0].name).toBe('test1')
      expect(merged.results.tests[1].name).toBe('test2')
    })

    it('should recalculate summary', () => {
      const report1 = createReport([
        { name: 'test1', status: 'passed' },
        { name: 'test2', status: 'passed' },
      ])
      const report2 = createReport([{ name: 'test3', status: 'failed' }])

      const merged = merge([report1, report2])

      expect(merged.results.summary.tests).toBe(3)
      expect(merged.results.summary.passed).toBe(2)
      expect(merged.results.summary.failed).toBe(1)
    })

    it('should merge timing bounds', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.summary.start = 1000
      report1.results.summary.stop = 2000

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.summary.start = 1500
      report2.results.summary.stop = 3000

      const merged = merge([report1, report2])

      expect(merged.results.summary.start).toBe(1000)
      expect(merged.results.summary.stop).toBe(3000)
    })

    it('should use first tool info', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.tool = { name: 'jest', version: '29.0.0' }

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.tool = { name: 'vitest', version: '1.0.0' }

      const merged = merge([report1, report2])

      expect(merged.results.tool.name).toBe('jest')
      expect(merged.results.tool.version).toBe('29.0.0')
    })

    it('should deduplicate tests by ID when enabled', () => {
      const report1 = createReport([{ name: 'test1', status: 'failed' }])
      report1.results.tests[0].id = 'same-id'

      const report2 = createReport([{ name: 'test1', status: 'passed' }])
      report2.results.tests[0].id = 'same-id'

      const merged = merge([report1, report2], {
        deduplicateTests: true,
      })

      expect(merged.results.tests).toHaveLength(1)
      // Keeps the last one
      expect(merged.results.tests[0].status).toBe('passed')
    })

    it('should not deduplicate by default', () => {
      const report1 = createReport([{ name: 'test1', status: 'failed' }])
      report1.results.tests[0].id = 'same-id'

      const report2 = createReport([{ name: 'test1', status: 'passed' }])
      report2.results.tests[0].id = 'same-id'

      const merged = merge([report1, report2])

      expect(merged.results.tests).toHaveLength(2)
    })

    it('should preserve first environment', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.environment = { branchName: 'main', commit: 'abc' }

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.environment = { branchName: 'feature', commit: 'def' }

      const merged = merge([report1, report2], {
        preserveEnvironment: 'first',
      })

      expect(merged.results.environment?.branchName).toBe('main')
    })

    it('should preserve last environment', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.environment = { branchName: 'main' }

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.environment = { branchName: 'feature' }

      const merged = merge([report1, report2], {
        preserveEnvironment: 'last',
      })

      expect(merged.results.environment?.branchName).toBe('feature')
    })

    it('should merge environments by default', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.environment = { branchName: 'main', buildId: 'build-1' }

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.environment = { commit: 'abc123' }

      const merged = merge([report1, report2])

      expect(merged.results.environment?.branchName).toBe('main')
      expect(merged.results.environment?.buildId).toBe('build-1')
      expect(merged.results.environment?.commit).toBe('abc123')
    })

    it('should generate new report ID and timestamp', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.reportId = 'old-id-1'

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.reportId = 'old-id-2'

      const merged = merge([report1, report2])

      expect(merged.reportId).toBeDefined()
      expect(merged.reportId).not.toBe('old-id-1')
      expect(merged.reportId).not.toBe('old-id-2')
      expect(merged.timestamp).toBeDefined()
    })

    it('should merge extra metadata', () => {
      const report1 = createReport([{ name: 'test1', status: 'passed' }])
      report1.results.extra = { key1: 'value1' }

      const report2 = createReport([{ name: 'test2', status: 'passed' }])
      report2.results.extra = { key2: 'value2' }

      const merged = merge([report1, report2])

      expect(merged.results.extra?.key1).toBe('value1')
      expect(merged.results.extra?.key2).toBe('value2')
    })
  })
})
