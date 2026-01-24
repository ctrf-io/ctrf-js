import { describe, it, expect } from 'vitest'
import {
  schema,
  getSchema,
  getCurrentSpecVersion,
  getSupportedSpecVersions,
} from './schema.js'
import { SchemaVersionError } from './errors.js'
import { CURRENT_SPEC_VERSION, SUPPORTED_SPEC_VERSIONS } from './constants.js'

describe('schema', () => {
  describe('schema', () => {
    it('should be a valid JSON Schema object', () => {
      expect(schema).toBeDefined()
      expect(typeof schema).toBe('object')
      expect((schema as Record<string, unknown>).$schema).toBe(
        'http://json-schema.org/draft-07/schema#'
      )
    })

    it('should define required CTRF properties', () => {
      const s = schema as Record<string, unknown>
      const required = s.required as string[]

      expect(required).toContain('reportFormat')
      expect(required).toContain('specVersion')
      expect(required).toContain('results')
    })
  })

  describe('getSchema', () => {
    it('should return schema for supported version', () => {
      const result = getSchema(CURRENT_SPEC_VERSION)

      expect(result).toBeDefined()
      expect(typeof result).toBe('object')
    })

    it('should throw SchemaVersionError for unsupported version', () => {
      expect(() => getSchema('99.0.0')).toThrow(SchemaVersionError)
    })

    it('should include supported versions in error', () => {
      try {
        getSchema('99.0.0')
        expect.fail('Should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(SchemaVersionError)
        expect((error as SchemaVersionError).version).toBe('99.0.0')
        expect((error as SchemaVersionError).supportedVersions).toEqual([
          ...SUPPORTED_SPEC_VERSIONS,
        ])
      }
    })
  })

  describe('getCurrentSpecVersion', () => {
    it('should return current spec version', () => {
      expect(getCurrentSpecVersion()).toBe(CURRENT_SPEC_VERSION)
    })
  })

  describe('getSupportedSpecVersions', () => {
    it('should return array of supported versions', () => {
      const versions = getSupportedSpecVersions()

      expect(Array.isArray(versions)).toBe(true)
      expect(versions.length).toBeGreaterThan(0)
    })

    it('should include current version', () => {
      const versions = getSupportedSpecVersions()

      expect(versions).toContain(CURRENT_SPEC_VERSION)
    })
  })
})
