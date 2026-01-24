[**CTRF**](../README.md)

***

[CTRF](../README.md) / stringify

# Function: stringify()

> **stringify**(`report`, `options`): `string`

Defined in: [parse.ts:68](https://github.com/ctrf-io/ctrf-js/blob/main/src/parse.ts#L68)

Serialize a CTRFReport to a JSON string.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The CTRF report to serialize

### options

[`StringifyOptions`](../interfaces/StringifyOptions.md) = `{}`

Stringify options (pretty print, indent)

## Returns

`string`

JSON string representation

## Example

```typescript
const json = stringify(report);

// Pretty print
const json = stringify(report, { pretty: true });

// Custom indent
const json = stringify(report, { pretty: true, indent: 4 });
```
