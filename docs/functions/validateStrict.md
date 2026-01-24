[**CTRF**](../README.md)

***

[CTRF](../README.md) / validateStrict

# Function: validateStrict()

> **validateStrict**(`report`): `asserts report is CTRFReport`

Defined in: validate.ts:100

Validate a report and throw if invalid (assertion).

## Parameters

### report

`unknown`

The object to validate

## Returns

`asserts report is CTRFReport`

## Throws

ValidationError if the report is invalid

## Example

```typescript
try {
  validateStrict(report);
  // TypeScript now knows report is CTRFReport
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.errors);
  }
}
```
