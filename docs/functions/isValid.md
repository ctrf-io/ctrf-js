[**CTRF**](../README.md)

***

[CTRF](../globals.md) / isValid

# Function: isValid()

> **isValid**(`report`, `options?`): `report is CTRFReport`

Defined in: [validate.ts:164](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L164)

## Parameters

### report

`unknown`

The object to validate

### options?

[`ValidateOptions`](../interfaces/ValidateOptions.md) = `{}`

Validation options (e.g., a specific spec version or `latest`)

## Returns

`report is CTRFReport`

true if the report is a valid CTRFReport

## Example

```typescript
if (isValid(report)) {
  // TypeScript now knows report is CTRFReport
  console.log(report.results.summary.passed);
}
```
