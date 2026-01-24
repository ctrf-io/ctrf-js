import { describe, it, expect } from 'vitest'
import {
  CTRFError,
  ValidationError,
  ParseError,
  SchemaVersionError,
  FileError,
  BuilderError,
} from './errors.js'

describe('errors', () => {
  describe('CTRFError', () => {
    it('should create error with message', () => {
      const error = new CTRFError('test error')
      expect(error.message).toBe('test error')
      expect(error.name).toBe('CTRFError')
      expect(error).toBeInstanceOf(Error)
      expect(error).toBeInstanceOf(CTRFError)
    })
  })

  describe('ValidationError', () => {
    it('should create error with message and errors array', () => {
      const details = [
        {
          message: 'Invalid status',
          path: '/results/tests/0/status',
          keyword: 'enum',
        },
      ]
      const error = new ValidationError('Validation failed', details)

      expect(error.message).toBe('Validation failed')
      expect(error.name).toBe('ValidationError')
      expect(error.errors).toEqual(details)
      expect(error).toBeInstanceOf(CTRFError)
    })

    it('should default to empty errors array', () => {
      const error = new ValidationError('Validation failed')
      expect(error.errors).toEqual([])
    })
  })

  describe('ParseError', () => {
    it('should create error with message and cause', () => {
      const cause = new Error('JSON syntax error')
      const error = new ParseError('Failed to parse', cause)

      expect(error.message).toBe('Failed to parse')
      expect(error.name).toBe('ParseError')
      expect(error.cause).toBe(cause)
      expect(error).toBeInstanceOf(CTRFError)
    })
  })

  describe('SchemaVersionError', () => {
    it('should create error with version info', () => {
      const error = new SchemaVersionError('2.0.0', ['0.0.0', '1.0.0'])

      expect(error.message).toContain('2.0.0')
      expect(error.message).toContain('0.0.0')
      expect(error.message).toContain('1.0.0')
      expect(error.name).toBe('SchemaVersionError')
      expect(error.version).toBe('2.0.0')
      expect(error.supportedVersions).toEqual(['0.0.0', '1.0.0'])
      expect(error).toBeInstanceOf(CTRFError)
    })
  })

  describe('FileError', () => {
    it('should create error with file path and cause', () => {
      const cause = new Error('ENOENT')
      const error = new FileError('File not found', '/path/to/file.json', cause)

      expect(error.message).toBe('File not found')
      expect(error.name).toBe('FileError')
      expect(error.filePath).toBe('/path/to/file.json')
      expect(error.cause).toBe(cause)
      expect(error).toBeInstanceOf(CTRFError)
    })
  })

  describe('BuilderError', () => {
    it('should create error with message', () => {
      const error = new BuilderError('Missing required field')

      expect(error.message).toBe('Missing required field')
      expect(error.name).toBe('BuilderError')
      expect(error).toBeInstanceOf(CTRFError)
    })
  })
})
