[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / recalculateSummary

# Function: recalculateSummary()

> **recalculateSummary**(`tests`, `existingSummary?`): [`Summary`](../interfaces/Summary.md)

Defined in: [src/reference/summary.ts:111](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/summary.ts#L111)

Recalculate summary from tests, preserving extra metadata.

## Parameters

### tests

[`Test`](../interfaces/Test.md)[]

Array of test results

### existingSummary?

[`Summary`](../interfaces/Summary.md)

Existing summary to preserve extra from

## Returns

[`Summary`](../interfaces/Summary.md)

New summary with recalculated stats
