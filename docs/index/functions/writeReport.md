[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / writeReport

# Function: writeReport()

> **writeReport**(`path`, `report`, `options`): `Promise`\<`void`\>

Defined in: [src/reference/parse.ts:163](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L163)

Write a CTRF report to a file (async).

## Parameters

### path

`string`

Path to write the report

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

Report to write

### options

[`StringifyOptions`](../interfaces/StringifyOptions.md) = `...`

Stringify options

## Returns

`Promise`\<`void`\>

## Throws

FileError if file cannot be written

## Example

```typescript
await writeReport('ctrf-report.json', report);

// Pretty print
await writeReport('ctrf-report.json', report, { pretty: true });
```
