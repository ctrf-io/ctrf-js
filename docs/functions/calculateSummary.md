[**CTRF**](../README.md)

***

[CTRF](../globals.md) / calculateSummary

# Function: calculateSummary()

> **calculateSummary**(`tests`, `options`): [`Summary`](../interfaces/Summary.md)

Defined in: [summary.ts:27](https://github.com/ctrf-io/ctrf-js/blob/main/src/summary.ts#L27)

## Parameters

### tests

[`Test`](../interfaces/Test.md)[]

Array of test results

### options

[`SummaryOptions`](../interfaces/SummaryOptions.md) = `{}`

Optional timing information

## Returns

[`Summary`](../interfaces/Summary.md)

Calculated summary object

## Example

```typescript
const summary = calculateSummary(tests);

// With timing
const summary = calculateSummary(tests, {
  start: 1704067200000,
  stop: 1704067260000
});
```
