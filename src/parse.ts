/**
 * CTRF Parsing and Serialization
 */

import fs from 'fs'
import { promisify } from 'util'
import type { CTRFReport, ParseOptions, StringifyOptions } from './types.js'
import { ParseError, FileError } from './errors.js'
import { validateStrict } from './validate.js'

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

/**
 *
 * @group Core Operations
 * Parse a JSON string into a CTRFReport.
 *
 * @param json - JSON string to parse
 * @param options - Parse options (e.g., enable validation)
 * @returns Parsed CTRFReport object
 * @throws ParseError if JSON is invalid
 * @throws ValidationError if validation is enabled and fails
 *
 * @example
 * ```typescript
 * const report = parse(jsonString);
 *
 * // With validation
 * const report = parse(jsonString, { validate: true });
 * ```
 */
export function parse(json: string, options: ParseOptions = {}): CTRFReport {
  let parsed: unknown

  try {
    parsed = JSON.parse(json)
  } catch (error) {
    throw new ParseError(
      `Failed to parse JSON: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error instanceof Error ? error : undefined
    )
  }

  if (options.validate) {
    validateStrict(parsed)
  }

  return parsed as CTRFReport
}

/**
 *
 * @group Core Operations
 * Serialize a CTRFReport to a JSON string.
 *
 * @param report - The CTRF report to serialize
 * @param options - Stringify options (pretty print, indent)
 * @returns JSON string representation
 *
 * @example
 * ```typescript
 * const json = stringify(report);
 *
 * // Pretty print
 * const json = stringify(report, { pretty: true });
 *
 * // Custom indent
 * const json = stringify(report, { pretty: true, indent: 4 });
 * ```
 */
export function stringify(
  report: CTRFReport,
  options: StringifyOptions = {}
): string {
  const { pretty = false, indent = 2 } = options

  if (pretty) {
    return JSON.stringify(report, null, indent)
  }

  return JSON.stringify(report)
}

/**
 * Read a CTRF report from a file (async).
 *
 * @param path - Path to the report file
 * @param options - Parse options
 * @returns Promise resolving to the parsed report
 * @throws FileError if file cannot be read
 * @throws ParseError if JSON is invalid
 *
 * @example
 * ```typescript
 * const report = await readReport('ctrf-report.json');
 * ```
 */
export async function readReport(
  path: string,
  options: ParseOptions = {}
): Promise<CTRFReport> {
  let content: string

  try {
    content = await readFileAsync(path, 'utf8')
  } catch (error) {
    throw new FileError(
      `Failed to read file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      path,
      error instanceof Error ? error : undefined
    )
  }

  return parse(content, options)
}

/**
 * Read a CTRF report from a file (sync).
 *
 * @param path - Path to the report file
 * @param options - Parse options
 * @returns The parsed report
 * @throws FileError if file cannot be read
 * @throws ParseError if JSON is invalid
 *
 * @example
 * ```typescript
 * const report = readReportSync('ctrf-report.json');
 * ```
 */
export function readReportSync(
  path: string,
  options: ParseOptions = {}
): CTRFReport {
  let content: string

  try {
    content = fs.readFileSync(path, 'utf8')
  } catch (error) {
    throw new FileError(
      `Failed to read file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      path,
      error instanceof Error ? error : undefined
    )
  }

  return parse(content, options)
}

/**
 * Write a CTRF report to a file (async).
 *
 * @param path - Path to write the report
 * @param report - Report to write
 * @param options - Stringify options
 * @throws FileError if file cannot be written
 *
 * @example
 * ```typescript
 * await writeReport('ctrf-report.json', report);
 *
 * // Pretty print
 * await writeReport('ctrf-report.json', report, { pretty: true });
 * ```
 */
export async function writeReport(
  path: string,
  report: CTRFReport,
  options: StringifyOptions = { pretty: true }
): Promise<void> {
  const json = stringify(report, options)

  try {
    await writeFileAsync(path, json, 'utf8')
  } catch (error) {
    throw new FileError(
      `Failed to write file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      path,
      error instanceof Error ? error : undefined
    )
  }
}

/**
 * Write a CTRF report to a file (sync).
 *
 * @param path - Path to write the report
 * @param report - Report to write
 * @param options - Stringify options
 * @throws FileError if file cannot be written
 *
 * @example
 * ```typescript
 * writeReportSync('ctrf-report.json', report);
 * ```
 */
export function writeReportSync(
  path: string,
  report: CTRFReport,
  options: StringifyOptions = { pretty: true }
): void {
  const json = stringify(report, options)

  try {
    fs.writeFileSync(path, json, 'utf8')
  } catch (error) {
    throw new FileError(
      `Failed to write file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      path,
      error instanceof Error ? error : undefined
    )
  }
}
