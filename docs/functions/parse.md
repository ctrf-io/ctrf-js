[**CTRF**](../README.md)

***

[CTRF](../globals.md) / parse

# Function: parse()

> **parse**(`json`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [parse.ts:33](https://github.com/ctrf-io/ctrf-js/blob/main/src/parse.ts#L33)

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
