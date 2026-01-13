/**
 * CTRF Test ID Generation
 */

import { createHash, randomUUID } from 'crypto'
import { CTRF_NAMESPACE } from './constants.js'

/**
 * Generates a deterministic UUID v5 based on test properties.
 * The same inputs will always produce the same UUID.
 *
 * @param properties - Object containing name, suite, and filePath
 * @returns A deterministic UUID v5 string
 *
 * @example
 * ```typescript
 * const id = generateTestId({
 *   name: 'should add numbers',
 *   suite: ['math', 'addition'],
 *   filePath: 'tests/math.test.ts'
 * });
 * ```
 */
export function generateTestId(properties: {
  name: string
  suite?: string[]
  filePath?: string
}): string {
  const { name, suite, filePath } = properties
  const suiteString = suite ? suite.join('/') : ''
  const identifier = `${name}|${suiteString}|${filePath || ''}`

  // Parse namespace UUID to bytes
  const namespaceBytes = CTRF_NAMESPACE.replace(/-/g, '')
    .match(/.{2}/g)!
    .map(byte => parseInt(byte, 16))

  // Create input buffer: namespace + identifier
  const input = Buffer.concat([
    Buffer.from(namespaceBytes),
    Buffer.from(identifier, 'utf8'),
  ])

  // Generate SHA-1 hash
  const hash = createHash('sha1').update(input).digest('hex')

  // Format as UUID v5
  const uuid = [
    hash.substring(0, 8),
    hash.substring(8, 12),
    '5' + hash.substring(13, 16), // Version 5
    ((parseInt(hash.substring(16, 17), 16) & 0x3) | 0x8).toString(16) +
      hash.substring(17, 20), // Variant bits
    hash.substring(20, 32),
  ].join('-')

  return uuid
}

/**
 * Generates a random UUID v4 for report IDs.
 *
 * @returns A random UUID v4 string
 *
 * @example
 * ```typescript
 * const reportId = generateReportId();
 * // => 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
 * ```
 */
export function generateReportId(): string {
  return randomUUID()
}
