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

const _schemas = new Map<string, object>()

/**
 * Load a schema file for a specific version.
 * Files should be named: ctrf-schema-{major}.{minor}.json
 */
function loadSchemaForVersion(version: string): object {
  const versionParts = version.split('.')
  if (versionParts.length < 2) {
    throw new SchemaVersionError(version, [...SUPPORTED_SPEC_VERSIONS])
  }
  const majorMinor = `${versionParts[0]}.${versionParts[1]}`

  if (_schemas.has(majorMinor)) {
    return _schemas.get(majorMinor) as object
  }

  const schemaPath = path.resolve(__dirname, `ctrf-schema-${majorMinor}.json`)
  if (!fs.existsSync(schemaPath)) {
    throw new SchemaVersionError(version, [...SUPPORTED_SPEC_VERSIONS])
  }

  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) as object
  _schemas.set(majorMinor, schema)
  return schema
}

/**
 *
 * @group Schema & Versioning
 * The current version CTRF JSON Schema object.
 *
 * @example
 * ```typescript
 * import { schema } from 'ctrf';
 * console.log(schema.$schema);
 * ```
 */
export const schema: object = loadSchemaForVersion(CURRENT_SPEC_VERSION)

/**
 *
 * @group Schema & Versioning
 * Get the JSON Schema for a specific CTRF spec version.
 *
 * @param version - The spec version (MAJOR.MINOR.PATCH) to get the schema for
 * @returns The JSON Schema object for that version
 * @throws SchemaVersionError if the version is not supported
 *
 * @example
 * ```typescript
 * const v0_0Schema = getSchema('0.0.0');
 * const v1_0Schema = getSchema('1.0.0');
 * ```
 */
export function getSchema(version: string): object {
  if (
    !SUPPORTED_SPEC_VERSIONS.includes(
      version as (typeof SUPPORTED_SPEC_VERSIONS)[number]
    )
  ) {
    throw new SchemaVersionError(version, [...SUPPORTED_SPEC_VERSIONS])
  }

  return loadSchemaForVersion(version)
}

/**
 *
 * @group Schema & Versioning
 * Get the current spec version.
 *
 * @returns The current spec version string
 */
export function getCurrentSpecVersion(): string {
  return CURRENT_SPEC_VERSION
}

/**
 *
 * @group Schema & Versioning
 * Get all supported spec versions.
 *
 * @returns Array of supported version strings
 */
export function getSupportedSpecVersions(): readonly string[] {
  return SUPPORTED_SPEC_VERSIONS
}
