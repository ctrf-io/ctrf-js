import { describe, it, expect } from 'vitest'
import {
  validate,
  isValid,
  validateStrict,
  isCTRFReport,
  isTest,
  isTestStatus,
  isRetryAttempt,
  hasInsights,
} from './validate.js'
import { ValidationError } from './errors.js'
import type { CTRFReport } from './types.js'

describe('validate', () => {
  const validReport: CTRFReport = {
    reportFormat: 'CTRF',
    specVersion: '1.0.0',
    results: {
      tool: { name: 'jest' },
      summary: {
        tests: 1,
        passed: 1,
        failed: 0,
        skipped: 0,
        pending: 0,
        other: 0,
        start: Date.now(),
        stop: Date.now() + 1000,
      },
      tests: [
        {
          name: 'test1',
          status: 'passed',
          duration: 100,
        },
      ],
    },
  }

  describe('validate', () => {
    it('should return valid for a valid report', () => {
      const result = validate(validReport)

      expect(result.valid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('should return errors for invalid report', () => {
      const invalid = {
        reportFormat: 'INVALID',
        specVersion: '1.0.0',
        results: {},
      }

      const result = validate(invalid)

      expect(result.valid).toBe(false)
      expect(result.errors.length).toBeGreaterThan(0)
    })

    it('should validate missing required fields', () => {
      const missing = {
        reportFormat: 'CTRF',
        specVersion: '1.0.0',
      }

      const result = validate(missing)

      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.message.includes('results'))).toBe(true)
    })

    it('should validate invalid status', () => {
      const invalidStatus = {
        ...validReport,
        results: {
          ...validReport.results,
          tests: [{ name: 'test', status: 'invalid', duration: 100 }],
        },
      }

      const result = validate(invalidStatus)

      expect(result.valid).toBe(false)
    })
  })

  describe('isValid', () => {
    it('should return true for valid report', () => {
      expect(isValid(validReport)).toBe(true)
    })

    it('should return false for invalid report', () => {
      expect(isValid({ invalid: true })).toBe(false)
    })

    it('should return false for null', () => {
      expect(isValid(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isValid(undefined)).toBe(false)
    })
  })

  describe('validateStrict', () => {
    it('should not throw for valid report', () => {
      expect(() => validateStrict(validReport)).not.toThrow()
    })

    it('should throw ValidationError for invalid report', () => {
      expect(() => validateStrict({ invalid: true })).toThrow(ValidationError)
    })

    it('should include error details in exception', () => {
      try {
        validateStrict({ invalid: true })
        expect.fail('Should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError)
        expect((error as ValidationError).errors.length).toBeGreaterThan(0)
      }
    })
  })

  describe('isCTRFReport', () => {
    it('should return true for object with CTRF reportFormat', () => {
      expect(isCTRFReport({ reportFormat: 'CTRF' })).toBe(true)
    })

    it('should return false for wrong reportFormat', () => {
      expect(isCTRFReport({ reportFormat: 'OTHER' })).toBe(false)
    })

    it('should return false for missing reportFormat', () => {
      expect(isCTRFReport({ other: 'field' })).toBe(false)
    })

    it('should return false for null', () => {
      expect(isCTRFReport(null)).toBe(false)
    })

    it('should return false for primitives', () => {
      expect(isCTRFReport('string')).toBe(false)
      expect(isCTRFReport(123)).toBe(false)
    })
  })

  describe('isTest', () => {
    it('should return true for valid test object', () => {
      expect(isTest({ name: 'test', status: 'passed', duration: 100 })).toBe(
        true
      )
    })

    it('should return false for missing name', () => {
      expect(isTest({ status: 'passed', duration: 100 })).toBe(false)
    })

    it('should return false for missing status', () => {
      expect(isTest({ name: 'test', duration: 100 })).toBe(false)
    })

    it('should return false for missing duration', () => {
      expect(isTest({ name: 'test', status: 'passed' })).toBe(false)
    })

    it('should return false for null', () => {
      expect(isTest(null)).toBe(false)
    })
  })

  describe('isTestStatus', () => {
    it('should return true for valid statuses', () => {
      expect(isTestStatus('passed')).toBe(true)
      expect(isTestStatus('failed')).toBe(true)
      expect(isTestStatus('skipped')).toBe(true)
      expect(isTestStatus('pending')).toBe(true)
      expect(isTestStatus('other')).toBe(true)
    })

    it('should return false for invalid status', () => {
      expect(isTestStatus('invalid')).toBe(false)
      expect(isTestStatus('PASSED')).toBe(false)
    })

    it('should return false for non-strings', () => {
      expect(isTestStatus(123)).toBe(false)
      expect(isTestStatus(null)).toBe(false)
    })
  })

  describe('isRetryAttempt', () => {
    it('should return true for valid retry attempt', () => {
      expect(isRetryAttempt({ attempt: 1, status: 'failed' })).toBe(true)
    })

    it('should return false for missing attempt', () => {
      expect(isRetryAttempt({ status: 'failed' })).toBe(false)
    })

    it('should return false for missing status', () => {
      expect(isRetryAttempt({ attempt: 1 })).toBe(false)
    })
  })

  describe('hasInsights', () => {
    it('should return true if report has insights', () => {
      const withInsights: CTRFReport = {
        ...validReport,
        insights: { runsAnalyzed: 10 },
      }
      expect(hasInsights(withInsights)).toBe(true)
    })

    it('should return false if report has no insights', () => {
      expect(hasInsights(validReport)).toBe(false)
    })

    it('should return false for empty insights object', () => {
      const emptyInsights: CTRFReport = {
        ...validReport,
        insights: {},
      }
      expect(hasInsights(emptyInsights)).toBe(false)
    })
  })
})
