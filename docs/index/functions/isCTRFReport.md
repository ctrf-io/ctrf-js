[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / isCTRFReport

# Function: isCTRFReport()

> **isCTRFReport**(`report`): `report is { reportFormat: "CTRF" }`

Defined in: [src/reference/validate.ts:127](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/validate.ts#L127)

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
