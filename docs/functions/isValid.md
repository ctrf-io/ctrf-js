[**CTRF**](../README.md)

***

[CTRF](../README.md) / isValid

# Function: isValid()

> **isValid**(`report`): `report is CTRFReport`

Defined in: validate.ts:77

Check if a report is valid (type guard).

## Parameters

### report

`unknown`

The object to validate

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
