[**CTRF**](../README.md)

***

[CTRF](../globals.md) / validateStrict

# Function: validateStrict()

> **validateStrict**(`report`): `asserts report is CTRFReport`

Defined in: [validate.ts:105](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L105)

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
