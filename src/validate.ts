/**
 * CTRF Validation
 */

import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { schema, getSchema } from './schema.js'
import { ValidationError } from './errors.js'
import type {
  CTRFReport,
  ValidationResult,
  ValidationErrorDetail,
  ValidateOptions,
} from './types.js'
import { REPORT_FORMAT, TEST_STATUSES } from './constants.js'

/**
 * Validate a CTRF report against the JSON schema.
 *
 * @group Core Operations
 * @param report - The object to validate
 * @param options - Validation options (e.g., specific spec version)
 * @returns Validation result containing `valid` boolean and `errors` array
 *
 * @example
 * ```typescript
 * const result = validate(report);
 * if (!result.valid) {
 *   console.log(result.errors);
 * }
 *
 * // Validate against specific version
 * const result = validate(report, { specVersion: '1.0.0' });
 * ```
 */
export function validate(
  report: unknown,
  options: ValidateOptions = {}
): ValidationResult {
  const ajv = new Ajv({ allErrors: true })
  addFormats(ajv)

  const schemaToUse = options.specVersion
    ? getSchema(options.specVersion)
    : schema

  const validateFn = ajv.compile(schemaToUse)
  const valid = validateFn(report)

  if (valid) {
    return { valid: true, errors: [] }
  }

  const errors: ValidationErrorDetail[] =
    validateFn.errors?.map(error => ({
      message: error.message || 'Unknown validation error',
      path: error.instancePath || '/',
      keyword: error.keyword,
    })) || []

  return { valid: false, errors }
}

/**
 *
 * @group Core Operations
 * Check if a report is valid (type guard).
 *
 * @param report - The object to validate
 * @returns true if the report is a valid CTRFReport
 *
 * @example
 * ```typescript
 * if (isValid(report)) {
 *   // TypeScript now knows report is CTRFReport
 *   console.log(report.results.summary.passed);
 * }
 * ```
 */
export function isValid(report: unknown): report is CTRFReport {
  const result = validate(report)
  return result.valid
}

/**
 *
 * @group Core Operations
 * Validate a report and throw if invalid (assertion).
 *
 * @param report - The object to validate
 * @throws ValidationError if the report is invalid
 *
 * @example
 * ```typescript
 * try {
 *   validateStrict(report);
 *   // TypeScript now knows report is CTRFReport
 * } catch (e) {
 *   if (e instanceof ValidationError) {
 *     console.log(e.errors);
 *   }
 * }
 * ```
 */
export function validateStrict(report: unknown): asserts report is CTRFReport {
  const result = validate(report)

  if (!result.valid) {
    const errorMessages = result.errors
      .map(e => `${e.path}: ${e.message}`)
      .join('\n')
    throw new ValidationError(
      `CTRF validation failed:\n${errorMessages}`,
      result.errors
    )
  }
}

/**
 *
 * @group Type Guards
 * Checks if an object has the basic structure of a CTRF report.
 * This is a quick, lightweight check that doesn't validate against the full schema.
 *
 * @param report - The object to check
 * @returns true if the object appears to be a CTRF report
 *
 * @example
 * ```typescript
 * if (isCTRFReport(data)) {
 *   // data has reportFormat: 'CTRF'
 * }
 * ```
 */
export function isCTRFReport(
  report: unknown
): report is { reportFormat: 'CTRF' } {
  return (
    typeof report === 'object' &&
    report !== null &&
    'reportFormat' in report &&
    (report as Record<string, unknown>).reportFormat === REPORT_FORMAT
  )
}

/**
 *
 * @group Type Guards
 * Type guard for Test objects.
 *
 * @param obj - Object to check
 * @returns true if the object is a Test
 */
export function isTest(
  obj: unknown
): obj is { name: string; status: string; duration: number } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    typeof (obj as Record<string, unknown>).name === 'string' &&
    'status' in obj &&
    typeof (obj as Record<string, unknown>).status === 'string' &&
    'duration' in obj &&
    typeof (obj as Record<string, unknown>).duration === 'number'
  )
}

/**
 *
 * @group Type Guards
 * Type guard for TestStatus values.
 *
 * @param value - Value to check
 * @returns true if the value is a valid TestStatus
 */
export function isTestStatus(
  value: unknown
): value is (typeof TEST_STATUSES)[number] {
  return (
    typeof value === 'string' &&
    TEST_STATUSES.includes(value as (typeof TEST_STATUSES)[number])
  )
}

/**
 *
 * @group Type Guards
 * Type guard for RetryAttempt objects.
 *
 * @param obj - Object to check
 * @returns true if the object is a RetryAttempt
 */
export function isRetryAttempt(
  obj: unknown
): obj is { attempt: number; status: string } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'attempt' in obj &&
    typeof (obj as Record<string, unknown>).attempt === 'number' &&
    'status' in obj &&
    typeof (obj as Record<string, unknown>).status === 'string'
  )
}

/**
 *
 * @group Type Guards
 * Check if a report has insights.
 *
 * @param report - The report to check
 * @returns true if the report has insights
 */
export function hasInsights(report: CTRFReport): boolean {
  return (
    report.insights !== undefined && Object.keys(report.insights).length > 0
  )
}
