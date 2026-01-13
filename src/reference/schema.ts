/**
 * CTRF Schema Access
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CURRENT_SPEC_VERSION, SUPPORTED_SPEC_VERSIONS } from './constants.js'
import { SchemaVersionError } from './errors.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load schema once at module initialization
const schemaPath = path.resolve(__dirname, 'ctrf-schema.json')
let _schema: object | null = null

function loadSchema(): object {
  if (_schema === null) {
    _schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) as object
  }
  return _schema as object
}

/**
 * The current version CTRF JSON Schema object.
 *
 * @example
 * ```typescript
 * import { schema } from 'ctrf';
 * console.log(schema.$schema);
 * ```
 */
export const schema: object = loadSchema()

/**
 * Get the JSON Schema for a specific CTRF spec version.
 *
 * @param version - The spec version to get the schema for
 * @returns The JSON Schema object
 * @throws SchemaVersionError if version is not supported
 *
 * @example
 * ```typescript
 * const v1Schema = getSchema('1.0.0');
 * ```
 */
export function getSchema(version: string): object {
  // Currently we only have one schema version
  // In the future, this could load different schema files based on version
  if (
    !SUPPORTED_SPEC_VERSIONS.includes(
      version as (typeof SUPPORTED_SPEC_VERSIONS)[number]
    )
  ) {
    throw new SchemaVersionError(version, [...SUPPORTED_SPEC_VERSIONS])
  }

  // For now, return the current schema for all supported versions
  return loadSchema()
}

/**
 * Get the current spec version.
 *
 * @returns The current spec version string
 */
export function getCurrentSpecVersion(): string {
  return CURRENT_SPEC_VERSION
}

/**
 * Get all supported spec versions.
 *
 * @returns Array of supported version strings
 */
export function getSupportedSpecVersions(): readonly string[] {
  return SUPPORTED_SPEC_VERSIONS
}
