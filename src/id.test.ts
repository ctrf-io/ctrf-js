import { describe, it, expect } from 'vitest'
import { generateTestId, generateReportId } from './id.js'
import { CTRF_NAMESPACE } from './constants.js'

describe('id', () => {
  describe('generateTestId', () => {
    it('should generate a deterministic UUID v5', () => {
      const id1 = generateTestId({
        name: 'should add numbers',
        suite: ['math', 'addition'],
        filePath: 'tests/math.test.ts',
      })

      const id2 = generateTestId({
        name: 'should add numbers',
        suite: ['math', 'addition'],
        filePath: 'tests/math.test.ts',
      })

      expect(id1).toBe(id2)
    })

    it('should generate different IDs for different inputs', () => {
      const id1 = generateTestId({ name: 'test 1' })
      const id2 = generateTestId({ name: 'test 2' })

      expect(id1).not.toBe(id2)
    })

    it('should generate valid UUID v5 format', () => {
      const id = generateTestId({ name: 'test' })

      // UUID v5 format: xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx
      // where y is 8, 9, a, or b
      expect(id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      )
    })

    it('should handle missing suite', () => {
      const id = generateTestId({
        name: 'test',
        filePath: 'test.ts',
      })

      expect(id).toBeDefined()
    })

    it('should handle missing filePath', () => {
      const id = generateTestId({
        name: 'test',
        suite: ['unit'],
      })

      expect(id).toBeDefined()
    })

    it('should handle only name', () => {
      const id = generateTestId({ name: 'test' })

      expect(id).toBeDefined()
    })

    it('should include suite in hash', () => {
      const withoutSuite = generateTestId({ name: 'test' })
      const withSuite = generateTestId({ name: 'test', suite: ['unit'] })

      expect(withoutSuite).not.toBe(withSuite)
    })

    it('should include filePath in hash', () => {
      const withoutPath = generateTestId({ name: 'test' })
      const withPath = generateTestId({ name: 'test', filePath: 'test.ts' })

      expect(withoutPath).not.toBe(withPath)
    })
  })

  describe('generateReportId', () => {
    it('should generate a valid UUID v4', () => {
      const id = generateReportId()

      // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
      expect(id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      )
    })

    it('should generate unique IDs', () => {
      const ids = new Set<string>()

      for (let i = 0; i < 100; i++) {
        ids.add(generateReportId())
      }

      expect(ids.size).toBe(100)
    })
  })
})
