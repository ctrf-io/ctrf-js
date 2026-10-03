[**CTRF**](../README.md)

***

[CTRF](../globals.md) / validate

# Function: validate()

> **validate**(`report`, `options?`): [`ValidationResult`](../interfaces/ValidationResult.md)

Defined in: [validate.ts:110](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L110)

Validate a CTRF report against the JSON schema and normative cross-field
rules that JSON Schema cannot express.

## Parameters

### report

`unknown`

The object to validate

### options?

[`ValidateOptions`](../interfaces/ValidateOptions.md) = `{}`

Validation options (e.g., a specific spec version or `latest`)

## Returns

[`ValidationResult`](../interfaces/ValidationResult.md)

Validation result containing `valid` boolean and `errors` array

## Example

```typescript
const result = validate(report);
if (!result.valid) {
  console.log(result.errors);
}

// Validate against specific version
const result = validate(report, { specVersion: '0.0.2' });
```
