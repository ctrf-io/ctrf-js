[**CTRF**](../README.md)

***

[CTRF](../globals.md) / isValid

# Function: isValid()

> **isValid**(`report`): `report is CTRFReport`

Defined in: [validate.ts:80](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L80)

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
