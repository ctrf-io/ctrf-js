import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { writeFileSync, unlinkSync, mkdirSync, rmSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import {
  parse,
  stringify,
  readReport,
  readReportSync,
  writeReport,
  writeReportSync,
} from './parse.js'
import { ParseError, FileError, ValidationError } from './errors.js'
import type { CTRFReport } from './types.js'

describe('parse', () => {
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
        start: 1000,
        stop: 2000,
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

  let tempDir: string

  beforeEach(() => {
    tempDir = join(tmpdir(), `ctrf-test-${Date.now()}`)
    mkdirSync(tempDir, { recursive: true })
  })

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true })
  })

  describe('parse', () => {
    it('should parse valid JSON', () => {
      const json = JSON.stringify(validReport)
      const result = parse(json)

      expect(result.reportFormat).toBe('CTRF')
      expect(result.results.tests).toHaveLength(1)
    })

    it('should throw ParseError for invalid JSON', () => {
      expect(() => parse('not valid json')).toThrow(ParseError)
    })

    it('should validate when option is true', () => {
      const json = JSON.stringify(validReport)
      const result = parse(json, { validate: true })

      expect(result.reportFormat).toBe('CTRF')
    })

    it('should throw ValidationError when validation fails', () => {
      const invalid = JSON.stringify({ invalid: true })

      expect(() => parse(invalid, { validate: true })).toThrow(ValidationError)
    })
  })

  describe('stringify', () => {
    it('should stringify report', () => {
      const json = stringify(validReport)

      expect(json).toBe(JSON.stringify(validReport))
    })

    it('should pretty print when option is true', () => {
      const json = stringify(validReport, { pretty: true })

      expect(json).toBe(JSON.stringify(validReport, null, 2))
    })

    it('should use custom indent', () => {
      const json = stringify(validReport, { pretty: true, indent: 4 })

      expect(json).toBe(JSON.stringify(validReport, null, 4))
    })
  })

  describe('readReport', () => {
    it('should read report from file', async () => {
      const filePath = join(tempDir, 'report.json')
      writeFileSync(filePath, JSON.stringify(validReport))

      const result = await readReport(filePath)

      expect(result.reportFormat).toBe('CTRF')
    })

    it('should throw FileError for non-existent file', async () => {
      await expect(readReport('/non/existent/file.json')).rejects.toThrow(
        FileError
      )
    })

    it('should validate when option is true', async () => {
      const filePath = join(tempDir, 'report.json')
      writeFileSync(filePath, JSON.stringify(validReport))

      const result = await readReport(filePath, { validate: true })

      expect(result.reportFormat).toBe('CTRF')
    })
  })

  describe('readReportSync', () => {
    it('should read report from file synchronously', () => {
      const filePath = join(tempDir, 'report.json')
      writeFileSync(filePath, JSON.stringify(validReport))

      const result = readReportSync(filePath)

      expect(result.reportFormat).toBe('CTRF')
    })

    it('should throw FileError for non-existent file', () => {
      expect(() => readReportSync('/non/existent/file.json')).toThrow(FileError)
    })
  })

  describe('writeReport', () => {
    it('should write report to file', async () => {
      const filePath = join(tempDir, 'output.json')

      await writeReport(filePath, validReport)

      const result = readReportSync(filePath)
      expect(result.reportFormat).toBe('CTRF')
    })

    it('should pretty print by default', async () => {
      const filePath = join(tempDir, 'output.json')

      await writeReport(filePath, validReport)

      const content = require('fs').readFileSync(filePath, 'utf8')
      expect(content).toBe(JSON.stringify(validReport, null, 2))
    })

    it('should throw FileError for invalid path', async () => {
      await expect(
        writeReport('/invalid/path/report.json', validReport)
      ).rejects.toThrow(FileError)
    })
  })

  describe('writeReportSync', () => {
    it('should write report to file synchronously', () => {
      const filePath = join(tempDir, 'output.json')

      writeReportSync(filePath, validReport)

      const result = readReportSync(filePath)
      expect(result.reportFormat).toBe('CTRF')
    })

    it('should throw FileError for invalid path', () => {
      expect(() =>
        writeReportSync('/invalid/path/report.json', validReport)
      ).toThrow(FileError)
    })
  })
})
