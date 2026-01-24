import { describe, it, expect } from 'vitest'
import {
  calculateInsights,
  calculateTestInsights,
  calculateMetricDelta,
  addInsights,
  isTestFlaky,
  formatAsPercentage,
  formatMetricDeltaAsPercentage,
  calculatePercentChange,
} from './insights.js'
import { ReportBuilder, TestBuilder } from './builder.js'
import type { CTRFReport } from './types.js'

describe('insights', () => {
  const createReport = (
    tests: {
      name: string
      status: 'passed' | 'failed' | 'skipped'
      duration?: number
      flaky?: boolean
      retries?: number
      id?: string
    }[],
    timing?: { start: number; stop: number }
  ): CTRFReport => {
    const builder = new ReportBuilder().tool({ name: 'jest' })

    if (timing) {
      builder.summaryOverrides(timing)
    }

    for (const t of tests) {
      const testBuilder = new TestBuilder()
        .name(t.name)
        .status(t.status)
        .duration(t.duration || 100)

      if (t.id) testBuilder.id(t.id)
      if (t.flaky !== undefined) testBuilder.flaky(t.flaky)
      if (t.retries !== undefined) testBuilder.retries(t.retries)

      builder.addTest(testBuilder.build())
    }

    return builder.build()
  }

  describe('isTestFlaky', () => {
    it('should return true when flaky flag is true', () => {
      const test = new TestBuilder()
        .name('test')
        .status('passed')
        .duration(100)
        .flaky(true)
        .build()

      expect(isTestFlaky(test)).toBe(true)
    })

    it('should return true when test passed with retries', () => {
      const test = new TestBuilder()
        .name('test')
        .status('passed')
        .duration(100)
        .retries(2)
        .build()

      expect(isTestFlaky(test)).toBe(true)
    })

    it('should return false when test failed with retries', () => {
      const test = new TestBuilder()
        .name('test')
        .status('failed')
        .duration(100)
        .retries(2)
        .build()

      expect(isTestFlaky(test)).toBe(false)
    })

    it('should return false for normal passing test', () => {
      const test = new TestBuilder()
        .name('test')
        .status('passed')
        .duration(100)
        .build()

      expect(isTestFlaky(test)).toBe(false)
    })
  })

  describe('formatAsPercentage', () => {
    it('should format ratio as percentage', () => {
      expect(formatAsPercentage(0.5)).toBe('50.00%')
      expect(formatAsPercentage(1)).toBe('100.00%')
      expect(formatAsPercentage(0)).toBe('0.00%')
    })

    it('should respect decimal places', () => {
      expect(formatAsPercentage(0.5555, 1)).toBe('55.5%')
      expect(formatAsPercentage(0.5555, 0)).toBe('56%')
    })
  })

  describe('formatMetricDeltaAsPercentage', () => {
    it('should format metric delta as percentages', () => {
      const result = formatMetricDeltaAsPercentage({
        current: 0.8,
        baseline: 0.6,
        change: 0.2,
      })

      expect(result.current).toBe('80.00%')
      expect(result.baseline).toBe('60.00%')
      expect(result.change).toBe('+20.00%')
    })

    it('should handle negative change', () => {
      const result = formatMetricDeltaAsPercentage({
        current: 0.5,
        baseline: 0.8,
        change: -0.3,
      })

      expect(result.change).toBe('-30.00%')
    })
  })

  describe('calculatePercentChange', () => {
    it('should calculate percent change', () => {
      expect(calculatePercentChange(120, 100)).toBe(0.2)
      expect(calculatePercentChange(80, 100)).toBe(-0.2)
    })

    it('should return 0 when baseline is 0', () => {
      expect(calculatePercentChange(100, 0)).toBe(0)
    })
  })

  describe('calculateInsights', () => {
    it('should return empty insights for empty reports', () => {
      const insights = calculateInsights([])

      expect(insights.runsAnalyzed).toBe(0)
    })

    it('should calculate pass rate', () => {
      const reports = [
        createReport([
          { name: 'test1', status: 'passed' },
          { name: 'test2', status: 'failed' },
        ]),
      ]

      const insights = calculateInsights(reports)

      expect(insights.passRate?.current).toBe(0.5)
    })

    it('should calculate fail rate', () => {
      const reports = [
        createReport([
          { name: 'test1', status: 'passed' },
          { name: 'test2', status: 'failed' },
        ]),
      ]

      const insights = calculateInsights(reports)

      expect(insights.failRate?.current).toBe(0.5)
    })

    it('should calculate flaky rate from retries', () => {
      // Flaky rate is calculated as: totalAttemptsFlaky / (totalResults + totalAttemptsFlaky)
      // A test with flaky: true and retries: 2 contributes 2 to totalAttemptsFlaky
      const reports = [
        createReport([
          { name: 'test1', status: 'passed', flaky: true, retries: 2 },
          { name: 'test2', status: 'passed' },
        ]),
      ]

      const insights = calculateInsights(reports)

      // totalAttemptsFlaky = 2 (from retries), totalResults = 2
      // flakyRate = 2 / (2 + 2) = 0.5
      expect(insights.flakyRate?.current).toBe(0.5)
    })

    it('should track runs analyzed', () => {
      const reports = [
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
      ]

      const insights = calculateInsights(reports)

      expect(insights.runsAnalyzed).toBe(3)
    })

    it('should use explicit baseline when provided', () => {
      const explicitBaseline = createReport([
        { name: 'test1', status: 'failed' },
      ])

      const reports = [
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
      ]

      const insights = calculateInsights(reports, {
        baseline: explicitBaseline,
      })

      expect(insights.passRate?.baseline).toBe(0) // Explicit baseline had 0% pass
      expect(insights.passRate?.current).toBe(1)
    })

    it('should respect window option', () => {
      const reports = [
        createReport([{ name: 'test1', status: 'failed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
        createReport([{ name: 'test1', status: 'passed' }]),
      ]

      const insights = calculateInsights(reports, { window: 2 })

      expect(insights.runsAnalyzed).toBe(2)
    })

    it('should calculate average test duration', () => {
      const reports = [
        createReport([
          { name: 'test1', status: 'passed', duration: 100 },
          { name: 'test2', status: 'passed', duration: 200 },
        ]),
      ]

      const insights = calculateInsights(reports)

      expect(insights.averageTestDuration?.current).toBe(150)
    })
  })

  describe('calculateTestInsights', () => {
    it('should return empty insights for test not found', () => {
      const reports = [
        createReport([{ name: 'test1', status: 'passed', id: 'id-1' }]),
      ]

      const insights = calculateTestInsights(reports, 'non-existent')

      expect(insights.executedInRuns).toBe(0)
    })

    it('should calculate pass rate for specific test', () => {
      const reports = [
        createReport([{ name: 'test1', status: 'passed', id: 'id-1' }]),
        createReport([{ name: 'test1', status: 'passed', id: 'id-1' }]),
        createReport([{ name: 'test1', status: 'failed', id: 'id-1' }]),
      ]

      const insights = calculateTestInsights(reports, 'id-1')

      expect(insights.passRate?.current).toBeCloseTo(0.67, 1)
      expect(insights.executedInRuns).toBe(3)
    })

    it('should track flaky rate for specific test with retries', () => {
      // Flaky rate requires retries to count
      const reports = [
        createReport([
          {
            name: 'test1',
            status: 'passed',
            id: 'id-1',
            flaky: true,
            retries: 1,
          },
        ]),
        createReport([
          { name: 'test1', status: 'passed', id: 'id-1', flaky: false },
        ]),
      ]

      const insights = calculateTestInsights(reports, 'id-1')

      // totalAttemptsFlaky = 1, totalResults = 2
      // flakyRate = 1 / (2 + 1) = 0.3333
      expect(insights.flakyRate?.current).toBeCloseTo(0.33, 1)
    })

    it('should calculate average duration for specific test', () => {
      const reports = [
        createReport([
          { name: 'test1', status: 'passed', id: 'id-1', duration: 100 },
        ]),
        createReport([
          { name: 'test1', status: 'passed', id: 'id-1', duration: 200 },
        ]),
        createReport([
          { name: 'test1', status: 'passed', id: 'id-1', duration: 300 },
        ]),
      ]

      const insights = calculateTestInsights(reports, 'id-1')

      expect(insights.averageTestDuration?.current).toBe(200)
    })
  })

  describe('calculateMetricDelta', () => {
    it('should calculate delta correctly', () => {
      const delta = calculateMetricDelta(0.8, 0.6)

      expect(delta.current).toBe(0.8)
      expect(delta.baseline).toBe(0.6)
      expect(delta.change).toBeCloseTo(0.2)
    })

    it('should handle negative change', () => {
      const delta = calculateMetricDelta(0.5, 0.8)

      expect(delta.change).toBeCloseTo(-0.3)
    })
  })

  describe('addInsights', () => {
    it('should add run-level insights to report', () => {
      const historical = [createReport([{ name: 'test1', status: 'passed' }])]

      const current = createReport([{ name: 'test1', status: 'passed' }])

      const enriched = addInsights(current, historical)

      expect(enriched.insights).toBeDefined()
      expect(enriched.insights?.runsAnalyzed).toBe(2)
    })

    it('should add test-level insights to tests', () => {
      const historical = [
        createReport([{ name: 'test1', status: 'passed', id: 'id-1' }]),
        createReport([{ name: 'test1', status: 'failed', id: 'id-1' }]),
      ]

      const current = createReport([
        { name: 'test1', status: 'passed', id: 'id-1' },
      ])

      const enriched = addInsights(current, historical)

      // Tests get insights based on test name aggregation
      expect(enriched.results.tests[0].insights).toBeDefined()
    })

    it('should handle empty historical reports', () => {
      const current = createReport([{ name: 'test1', status: 'passed' }])

      const enriched = addInsights(current, [])

      expect(enriched.insights).toBeDefined()
      expect(enriched.insights?.runsAnalyzed).toBe(1)
    })

    it('should use baseline for comparison when provided', () => {
      const baseline = createReport([{ name: 'test1', status: 'failed' }])
      const historical = [createReport([{ name: 'test1', status: 'passed' }])]
      const current = createReport([{ name: 'test1', status: 'passed' }])

      const enriched = addInsights(current, historical, {
        baseline,
      })

      expect(enriched.insights).toBeDefined()
    })
  })
})
