[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / isValid

# Function: isValid()

> **isValid**(`report`): `report is CTRFReport`

Defined in: [src/reference/validate.ts:76](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/validate.ts#L76)

Quick check if a report is valid.

## Parameters

### report

`unknown`

The report to validate

## Returns

`report is CTRFReport`

true if valid, false otherwise

## Example

```typescript
if (isValid(report)) {
  // Process report
}
```
