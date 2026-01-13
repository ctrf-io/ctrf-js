[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / readReportSync

# Function: readReportSync()

> **readReportSync**(`path`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [src/reference/parse.ts:128](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L128)

Read a CTRF report from a file (sync).

## Parameters

### path

`string`

Path to the report file

### options

[`ParseOptions`](../interfaces/ParseOptions.md) = `{}`

Parse options

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

The parsed report

## Throws

FileError if file cannot be read

## Throws

ParseError if JSON is invalid

## Example

```typescript
const report = readReportSync('ctrf-report.json');
```
