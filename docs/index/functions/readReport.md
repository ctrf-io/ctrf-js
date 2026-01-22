[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / readReport

# Function: readReport()

> **readReport**(`path`, `options`): `Promise`\<[`CTRFReport`](../interfaces/CTRFReport.md)\>

Defined in: [src/reference/parse.ts:95](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L95)

Read a CTRF report from a file (async).

## Parameters

### path

`string`

Path to the report file

### options

[`ParseOptions`](../interfaces/ParseOptions.md) = `{}`

Parse options

## Returns

`Promise`\<[`CTRFReport`](../interfaces/CTRFReport.md)\>

Promise resolving to the parsed report

## Throws

FileError if file cannot be read

## Throws

ParseError if JSON is invalid

## Example

```typescript
const report = await readReport('ctrf-report.json');
```
