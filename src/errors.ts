/**
 * CTRF Error Classes
 */

import type { ValidationErrorDetail } from './types.js'

/**
 *
 * @group Errors
 * Base error class for all CTRF errors.
 * All CTRF-specific errors extend this class.
 */
export class CTRFError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CTRFError'
    Object.setPrototypeOf(this, CTRFError.prototype)
  }
}

/**
 *
 * @group Errors
 * Error thrown when schema validation fails.
 * Contains detailed error information for each validation issue.
 */
export class ValidationError extends CTRFError {
  /** Detailed validation errors */
  public readonly errors: ValidationErrorDetail[]

  constructor(message: string, errors: ValidationErrorDetail[] = []) {
    super(message)
    this.name = 'ValidationError'
    this.errors = errors
    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

/**
 *
 * @group Errors
 * Error thrown when JSON parsing fails.
 */
export class ParseError extends CTRFError {
  /** The original error that caused the parse failure */
  public readonly cause?: Error

  constructor(message: string, cause?: Error) {
    super(message)
    this.name = 'ParseError'
    this.cause = cause
    Object.setPrototypeOf(this, ParseError.prototype)
  }
}

/**
 *
 * @group Errors
 * Error thrown when an unsupported CTRF specification version is encountered.
 */
export class SchemaVersionError extends CTRFError {
  /** The unsupported version */
  public readonly version: string
  /** Supported versions */
  public readonly supportedVersions: string[]

  constructor(version: string, supportedVersions: string[]) {
    super(
      `Unsupported schema version: ${version}. Supported versions: ${supportedVersions.join(', ')}`
    )
    this.name = 'SchemaVersionError'
    this.version = version
    this.supportedVersions = supportedVersions
    Object.setPrototypeOf(this, SchemaVersionError.prototype)
  }
}

/**
 *
 * @group Errors
 * Error thrown when a file read or write operation fails.
 */
export class FileError extends CTRFError {
  /** The file path that caused the error */
  public readonly filePath: string
  /** The original error */
  public readonly cause?: Error

  constructor(message: string, filePath: string, cause?: Error) {
    super(message)
    this.name = 'FileError'
    this.filePath = filePath
    this.cause = cause
    Object.setPrototypeOf(this, FileError.prototype)
  }
}

/**
 *
 * @group Errors
 * Error thrown when building a report or test fails due to missing required fields.
 */
export class BuilderError extends CTRFError {
  constructor(message: string) {
    super(message)
    this.name = 'BuilderError'
    Object.setPrototypeOf(this, BuilderError.prototype)
  }
}
