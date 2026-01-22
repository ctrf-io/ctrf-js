[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / stringify

# Function: stringify()

> **stringify**(`report`, `options`): `string`

Defined in: [src/reference/parse.ts:68](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L68)

Serialize a CTRFReport to a JSON string.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

Report to serialize

### options

[`StringifyOptions`](../interfaces/StringifyOptions.md) = `{}`

Stringify options

## Returns

`string`

JSON string

## Example

```typescript
const json = stringify(report);

// Pretty print
const json = stringify(report, { pretty: true });

// Custom indent
const json = stringify(report, { pretty: true, indent: 4 });
```
