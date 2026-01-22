[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / validateStrict

# Function: validateStrict()

> **validateStrict**(`report`): `asserts report is CTRFReport`

Defined in: [src/reference/validate.ts:99](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/validate.ts#L99)

Validates a report and throws if invalid.

## Parameters

### report

`unknown`

The report to validate

## Returns

`asserts report is CTRFReport`

## Throws

ValidationError if the report is invalid

## Example

```typescript
try {
  validateStrict(report);
  // Report is valid
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.errors);
  }
}
```
