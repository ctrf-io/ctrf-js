[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / parse

# Function: parse()

> **parse**(`json`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [src/reference/parse.ts:31](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/parse.ts#L31)

Parse a JSON string to a CTRFReport.

## Parameters

### json

`string`

JSON string to parse

### options

[`ParseOptions`](../interfaces/ParseOptions.md) = `{}`

Parse options

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

Parsed CTRFReport

## Throws

ParseError if JSON is invalid

## Throws

ValidationError if validation is enabled and fails

## Example

```typescript
const report = parse(jsonString);

// With validation
const report = parse(jsonString, { validate: true });
```
