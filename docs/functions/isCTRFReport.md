[**CTRF**](../README.md)

***

[CTRF](../README.md) / isCTRFReport

# Function: isCTRFReport()

> **isCTRFReport**(`report`): `report is { reportFormat: "CTRF" }`

Defined in: [validate.ts:128](https://github.com/ctrf-io/ctrf-js/blob/main/src/validate.ts#L128)

Checks if an object has the basic structure of a CTRF report.
This is a quick, lightweight check that doesn't validate against the full schema.

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
