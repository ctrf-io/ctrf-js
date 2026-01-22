[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / validate

# Function: validate()

> **validate**(`report`, `options`): [`ValidationResult`](../interfaces/ValidationResult.md)

Defined in: [src/reference/validate.ts:35](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/validate.ts#L35)

Validates a CTRF report against the JSON schema.

## Parameters

### report

`unknown`

The report to validate

### options

[`ValidateOptions`](../interfaces/ValidateOptions.md) = `{}`

Validation options

## Returns

[`ValidationResult`](../interfaces/ValidationResult.md)

Validation result with errors if invalid

## Example

```typescript
const result = validate(report);
if (!result.valid) {
  console.log(result.errors);
}

// Validate against specific version
const result = validate(report, { specVersion: '1.0.0' });
```
