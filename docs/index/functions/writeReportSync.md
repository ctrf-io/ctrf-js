[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / writeReportSync

# Function: writeReportSync()

> **writeReportSync**(`path`, `report`, `options`): `void`

Defined in: [src/reference/parse.ts:194](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L194)

Write a CTRF report to a file (sync).

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

`void`

## Throws

FileError if file cannot be written

## Example

```typescript
writeReportSync('ctrf-report.json', report);
```
