[**CTRF**](../README.md)

***

[CTRF](../README.md) / parse

# Function: parse()

> **parse**(`json`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: parse.ts:31

Parse a JSON string into a CTRFReport.

## Parameters

### json

`string`

JSON string to parse

### options

[`ParseOptions`](../interfaces/ParseOptions.md) = `{}`

Parse options (e.g., enable validation)

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

Parsed CTRFReport object

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
