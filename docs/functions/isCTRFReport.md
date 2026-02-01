[**CTRF**](../README.md)

***

[CTRF](../globals.md) / isCTRFReport

# Function: isCTRFReport()

> **isCTRFReport**(`report`): `report is { reportFormat: "CTRF" }`

Defined in: [validate.ts:135](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L135)

## Parameters

### report

`unknown`

The object to check

## Returns

`report is { reportFormat: "CTRF" }`

true if the object appears to be a CTRF report

## Example

```typescript
if (isCTRFReport(data)) {
  // data has reportFormat: 'CTRF'
}
```
