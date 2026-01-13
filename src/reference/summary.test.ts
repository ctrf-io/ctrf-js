import { describe, it, expect } from 'vitest'
import { calculateSummary, recalculateSummary } from './summary.js'
import type { Test, Summary } from './types.js'

describe('summary', () => {
  const createTest = (overrides: Partial<Test> = {}): Test => ({
    name: 'test',
    status: 'passed',
    duration: 100,
    ...overrides,
  })

  describe('calculateSummary', () => {
    it('should calculate counts by status', () => {
      const tests: Test[] = [
        createTest({ status: 'passed' }),
        createTest({ status: 'passed' }),
        createTest({ status: 'failed' }),
        createTest({ status: 'skipped' }),
        createTest({ status: 'pending' }),
        createTest({ status: 'other' }),
      ]

      const summary = calculateSummary(tests)

      expect(summary.tests).toBe(6)
      expect(summary.passed).toBe(2)
      expect(summary.failed).toBe(1)
      expect(summary.skipped).toBe(1)
      expect(summary.pending).toBe(1)
      expect(summary.other).toBe(1)
    })

    it('should count flaky tests', () => {
      const tests: Test[] = [
        createTest({ flaky: true }),
        createTest({ flaky: true }),
        createTest({ flaky: false }),
        createTest(),
      ]

      const summary = calculateSummary(tests)

      expect(summary.flaky).toBe(2)
    })

    it('should not include flaky if no tests are flaky', () => {
      const tests: Test[] = [createTest(), createTest()]

      const summary = calculateSummary(tests)

      expect(summary.flaky).toBeUndefined()
    })

    it('should count unique suites', () => {
      const tests: Test[] = [
        createTest({ suite: ['unit', 'auth'] }),
        createTest({ suite: ['unit', 'auth'] }),
        createTest({ suite: ['unit', 'api'] }),
        createTest({ suite: ['integration'] }),
      ]

      const summary = calculateSummary(tests)

      // Counts: unit, unit/auth, unit/api, integration = 4 unique suite paths
      expect(summary.suites).toBe(4)
    })

    it('should calculate total duration', () => {
      const tests: Test[] = [
        createTest({ duration: 100 }),
        createTest({ duration: 200 }),
        createTest({ duration: 300 }),
      ]

      const summary = calculateSummary(tests)

      expect(summary.duration).toBe(600)
    })

    it('should use provided start/stop times', () => {
      const tests: Test[] = [createTest()]

      const summary = calculateSummary(tests, {
        start: 1000,
        stop: 2000,
      })

      expect(summary.start).toBe(1000)
      expect(summary.stop).toBe(2000)
    })

    it('should calculate start/stop from test times', () => {
      const tests: Test[] = [
        createTest({ start: 1000, stop: 1100 }),
        createTest({ start: 1050, stop: 1200 }),
        createTest({ start: 1100, stop: 1300 }),
      ]

      const summary = calculateSummary(tests)

      expect(summary.start).toBe(1000)
      expect(summary.stop).toBe(1300)
    })

    it('should handle empty tests array', () => {
      const summary = calculateSummary([])

      expect(summary.tests).toBe(0)
      expect(summary.passed).toBe(0)
      expect(summary.failed).toBe(0)
      expect(summary.skipped).toBe(0)
      expect(summary.pending).toBe(0)
      expect(summary.other).toBe(0)
      expect(summary.start).toBe(0)
      expect(summary.stop).toBe(0)
    })
  })

  describe('recalculateSummary', () => {
    it('should recalculate from tests', () => {
      const tests: Test[] = [
        createTest({ status: 'passed' }),
        createTest({ status: 'failed' }),
      ]

      const summary = recalculateSummary(tests)

      expect(summary.tests).toBe(2)
      expect(summary.passed).toBe(1)
      expect(summary.failed).toBe(1)
    })

    it('should preserve extra metadata from existing summary', () => {
      const tests: Test[] = [createTest()]
      const existingSummary: Summary = {
        tests: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        pending: 0,
        other: 0,
        start: 0,
        stop: 0,
        extra: { custom: 'data' },
      }

      const summary = recalculateSummary(tests, existingSummary)

      expect(summary.extra).toEqual({ custom: 'data' })
    })

    it('should use existing start/stop if provided', () => {
      const tests: Test[] = [createTest()]
      const existingSummary: Summary = {
        tests: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        pending: 0,
        other: 0,
        start: 1000,
        stop: 2000,
      }

      const summary = recalculateSummary(tests, existingSummary)

      expect(summary.start).toBe(1000)
      expect(summary.stop).toBe(2000)
    })
  })
})
