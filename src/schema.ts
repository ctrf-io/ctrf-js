/**
 * CTRF Schema Access
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
	CURRENT_SPEC_VERSION,
	SUPPORTED_SPEC_VERSIONS,
	type SchemaSelector,
	type SupportedSpecVersion,
} from "./constants.js";
import { SchemaVersionError } from "./errors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const _schemas = new Map<string, object>();

/**
 * Load a schema file for a specific version.
 * Files are named: ctrf-schema-{major}.{minor}.{patch}.json
 */
function loadSchemaForVersion(version: SupportedSpecVersion): object {
	if (_schemas.has(version)) {
		return _schemas.get(version) as object;
	}

	const schemaPath = path.resolve(__dirname, `ctrf-schema-${version}.json`);
	if (!fs.existsSync(schemaPath)) {
		throw new SchemaVersionError(version, [...SUPPORTED_SPEC_VERSIONS]);
	}

	const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8")) as object;
	_schemas.set(version, schema);
	return schema;
}

function resolveSchemaSelector(selector: SchemaSelector): SupportedSpecVersion {
	if (selector === "latest") return CURRENT_SPEC_VERSION;

	if (
		!SUPPORTED_SPEC_VERSIONS.includes(
			selector as (typeof SUPPORTED_SPEC_VERSIONS)[number],
		)
	) {
		throw new SchemaVersionError(selector, [...SUPPORTED_SPEC_VERSIONS]);
	}

	return selector;
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
export const schema: object = loadSchemaForVersion(CURRENT_SPEC_VERSION);

/**
 *
 * @group Schema & Versioning
 * Get the JSON Schema for a specific CTRF spec version.
 *
 * @param version - A supported spec version or `latest`
 * @returns The JSON Schema object for that version
 * @throws SchemaVersionError if the version is not supported
 *
 * @example
 * ```typescript
 * const historicalSchema = getSchema('0.0.2');
 * const latestSchema = getSchema('latest');
 * ```
 */
export function getSchema(version: SchemaSelector): object {
	return loadSchemaForVersion(resolveSchemaSelector(version));
}

/**
 *
 * @group Schema & Versioning
 * Get the current spec version.
 *
 * @returns The current spec version string
 */
export function getCurrentSpecVersion(): string {
	return CURRENT_SPEC_VERSION;
}

/**
 *
 * @group Schema & Versioning
 * Get all supported spec versions.
 *
 * @returns Array of supported version strings
 */
export function getSupportedSpecVersions(): readonly string[] {
	return SUPPORTED_SPEC_VERSIONS;
}
