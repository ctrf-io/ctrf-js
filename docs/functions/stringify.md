[**CTRF**](../README.md)

***

[CTRF](../globals.md) / stringify

# Function: stringify()

> **stringify**(`report`, `options`): `string`

Defined in: [parse.ts:72](https://github.com/ctrf-io/ctrf-js/blob/main/src/parse.ts#L72)

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
