import { describe, it, expect } from 'vitest'
import { ReportBuilder, TestBuilder } from './builder.js'
import { BuilderError } from './errors.js'
import { REPORT_FORMAT, CURRENT_SPEC_VERSION } from './constants.js'

describe('builder', () => {
  describe('ReportBuilder', () => {
    it('should build a minimal valid report', () => {
      const report = new ReportBuilder().tool({ name: 'jest' }).build()

      expect(report.reportFormat).toBe(REPORT_FORMAT)
      expect(report.specVersion).toBe(CURRENT_SPEC_VERSION)
      expect(report.results.tool.name).toBe('jest')
      expect(report.results.tests).toEqual([])
    })

    it('should set spec version', () => {
      const report = new ReportBuilder()
        .specVersion('0.1.0')
        .tool({ name: 'jest' })
        .build()

      expect(report.specVersion).toBe('0.1.0')
    })

    it('should set report ID', () => {
      const report = new ReportBuilder()
        .reportId('custom-id')
        .tool({ name: 'jest' })
        .build()

      expect(report.reportId).toBe('custom-id')
    })

    it('should auto-generate report ID', () => {
      const report = new ReportBuilder()
        .reportId()
        .tool({ name: 'jest' })
        .build()

      expect(report.reportId).toBeDefined()
      expect(report.reportId).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      )
    })

    it('should set timestamp', () => {
      const date = new Date('2024-01-01T00:00:00Z')
      const report = new ReportBuilder()
        .timestamp(date)
        .tool({ name: 'jest' })
        .build()

      expect(report.timestamp).toBe('2024-01-01T00:00:00.000Z')
    })

    it('should set timestamp from string', () => {
      const report = new ReportBuilder()
        .timestamp('2024-01-01T00:00:00Z')
        .tool({ name: 'jest' })
        .build()

      expect(report.timestamp).toBe('2024-01-01T00:00:00Z')
    })

    it('should auto-set timestamp to now', () => {
      const before = new Date().toISOString()
      const report = new ReportBuilder()
        .timestamp()
        .tool({ name: 'jest' })
        .build()
      const after = new Date().toISOString()

      expect(report.timestamp).toBeDefined()
      expect(report.timestamp! >= before).toBe(true)
      expect(report.timestamp! <= after).toBe(true)
    })

    it('should set generatedBy', () => {
      const report = new ReportBuilder()
        .generatedBy('my-reporter')
        .tool({ name: 'jest' })
        .build()

      expect(report.generatedBy).toBe('my-reporter')
    })

    it('should set environment', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .environment({ branchName: 'main', commit: 'abc123' })
        .build()

      expect(report.results.environment?.branchName).toBe('main')
      expect(report.results.environment?.commit).toBe('abc123')
    })

    it('should add tests', () => {
      const test1 = new TestBuilder()
        .name('test 1')
        .status('passed')
        .duration(100)
        .build()

      const test2 = new TestBuilder()
        .name('test 2')
        .status('failed')
        .duration(200)
        .build()

      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .addTest(test1)
        .addTest(test2)
        .build()

      expect(report.results.tests).toHaveLength(2)
      expect(report.results.tests[0].name).toBe('test 1')
      expect(report.results.tests[1].name).toBe('test 2')
    })

    it('should add multiple tests at once', () => {
      const tests = [
        new TestBuilder().name('test 1').status('passed').duration(100).build(),
        new TestBuilder().name('test 2').status('failed').duration(200).build(),
      ]

      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .addTests(tests)
        .build()

      expect(report.results.tests).toHaveLength(2)
    })

    it('should calculate summary automatically', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .addTest(
          new TestBuilder().name('t1').status('passed').duration(100).build()
        )
        .addTest(
          new TestBuilder().name('t2').status('passed').duration(100).build()
        )
        .addTest(
          new TestBuilder().name('t3').status('failed').duration(100).build()
        )
        .addTest(
          new TestBuilder().name('t4').status('skipped').duration(0).build()
        )
        .build()

      expect(report.results.summary.tests).toBe(4)
      expect(report.results.summary.passed).toBe(2)
      expect(report.results.summary.failed).toBe(1)
      expect(report.results.summary.skipped).toBe(1)
    })

    it('should allow summary overrides', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .summaryOverrides({ start: 1000, stop: 2000 })
        .build()

      expect(report.results.summary.start).toBe(1000)
      expect(report.results.summary.stop).toBe(2000)
    })

    it('should set insights', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .insights({ runsAnalyzed: 10 })
        .build()

      expect(report.insights?.runsAnalyzed).toBe(10)
    })

    it('should set baseline', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .baseline({ reportId: 'baseline-id', source: 'main' })
        .build()

      expect(report.baseline?.reportId).toBe('baseline-id')
      expect(report.baseline?.source).toBe('main')
    })

    it('should set extra metadata', () => {
      const report = new ReportBuilder()
        .tool({ name: 'jest' })
        .extra({ custom: 'data' })
        .build()

      expect(report.extra?.custom).toBe('data')
    })

    it('should throw if tool is not set', () => {
      expect(() => new ReportBuilder().build()).toThrow(BuilderError)
    })

    it('should support auto-generate options', () => {
      const report = new ReportBuilder({
        autoGenerateId: true,
        autoTimestamp: true,
      })
        .tool({ name: 'jest' })
        .build()

      expect(report.reportId).toBeDefined()
      expect(report.timestamp).toBeDefined()
    })
  })

  describe('TestBuilder', () => {
    it('should build a minimal valid test', () => {
      const test = new TestBuilder()
        .name('should work')
        .status('passed')
        .duration(100)
        .build()

      expect(test.name).toBe('should work')
      expect(test.status).toBe('passed')
      expect(test.duration).toBe(100)
    })

    it('should throw if name is missing', () => {
      expect(() =>
        new TestBuilder().status('passed').duration(100).build()
      ).toThrow(BuilderError)
    })

    it('should throw if status is missing', () => {
      expect(() =>
        new TestBuilder().name('test').duration(100).build()
      ).toThrow(BuilderError)
    })

    it('should throw if duration is missing', () => {
      expect(() =>
        new TestBuilder().name('test').status('passed').build()
      ).toThrow(BuilderError)
    })

    it('should set all optional fields', () => {
      const test = new TestBuilder()
        .id('test-id')
        .name('test')
        .status('failed')
        .duration(100)
        .start(1000)
        .stop(1100)
        .suite(['unit', 'auth'])
        .message('Error message')
        .trace('Stack trace')
        .snippet('expect(true).toBe(false)')
        .ai('AI analysis')
        .line(42)
        .rawStatus('FAILED')
        .tags(['smoke', 'critical'])
        .type('e2e')
        .filePath('test/auth.test.ts')
        .retries(2)
        .flaky(true)
        .stdout(['output'])
        .stderr(['error'])
        .threadId('worker-1')
        .browser('chrome')
        .device('desktop')
        .screenshot('base64data')
        .parameters({ user: 'test' })
        .extra({ custom: 'data' })
        .build()

      expect(test.id).toBe('test-id')
      expect(test.start).toBe(1000)
      expect(test.stop).toBe(1100)
      expect(test.suite).toEqual(['unit', 'auth'])
      expect(test.message).toBe('Error message')
      expect(test.trace).toBe('Stack trace')
      expect(test.snippet).toBe('expect(true).toBe(false)')
      expect(test.ai).toBe('AI analysis')
      expect(test.line).toBe(42)
      expect(test.rawStatus).toBe('FAILED')
      expect(test.tags).toEqual(['smoke', 'critical'])
      expect(test.type).toBe('e2e')
      expect(test.filePath).toBe('test/auth.test.ts')
      expect(test.retries).toBe(2)
      expect(test.flaky).toBe(true)
      expect(test.stdout).toEqual(['output'])
      expect(test.stderr).toEqual(['error'])
      expect(test.threadId).toBe('worker-1')
      expect(test.browser).toBe('chrome')
      expect(test.device).toBe('desktop')
      expect(test.screenshot).toBe('base64data')
      expect(test.parameters).toEqual({ user: 'test' })
      expect(test.extra).toEqual({ custom: 'data' })
    })

    it('should add retry attempts', () => {
      const test = new TestBuilder()
        .name('test')
        .status('passed')
        .duration(100)
        .addRetryAttempt({ attempt: 1, status: 'failed', duration: 50 })
        .addRetryAttempt({ attempt: 2, status: 'passed', duration: 100 })
        .build()

      expect(test.retryAttempts).toHaveLength(2)
      expect(test.retryAttempts![0].attempt).toBe(1)
      expect(test.retryAttempts![1].attempt).toBe(2)
    })

    it('should add attachments', () => {
      const test = new TestBuilder()
        .name('test')
        .status('failed')
        .duration(100)
        .addAttachment({
          name: 'screenshot.png',
          contentType: 'image/png',
          path: '/tmp/screenshot.png',
        })
        .build()

      expect(test.attachments).toHaveLength(1)
      expect(test.attachments![0].name).toBe('screenshot.png')
    })

    it('should add steps', () => {
      const test = new TestBuilder()
        .name('test')
        .status('failed')
        .duration(100)
        .addStep({ name: 'Step 1', status: 'passed' })
        .addStep({ name: 'Step 2', status: 'failed' })
        .build()

      expect(test.steps).toHaveLength(2)
      expect(test.steps![0].name).toBe('Step 1')
      expect(test.steps![1].status).toBe('failed')
    })

    it('should set insights', () => {
      const test = new TestBuilder()
        .name('test')
        .status('passed')
        .duration(100)
        .insights({ executedInRuns: 10 })
        .build()

      expect(test.insights?.executedInRuns).toBe(10)
    })

    it('should auto-generate ID when option enabled', () => {
      const test = new TestBuilder({ autoGenerateId: true })
        .name('test')
        .status('passed')
        .duration(100)
        .suite(['unit'])
        .filePath('test.ts')
        .build()

      expect(test.id).toBeDefined()
      expect(test.id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      )
    })
  })
})
