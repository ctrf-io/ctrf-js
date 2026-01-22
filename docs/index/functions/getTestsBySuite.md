[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / getTestsBySuite

# Function: getTestsBySuite()

> **getTestsBySuite**(`report`, `suiteName`): [`Test`](../interfaces/Test.md)[]

Defined in: [src/reference/filter.ts:197](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/filter.ts#L197)

Get tests by suite.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The report to query

### suiteName

`string`

The suite name to filter by (can be any level in the hierarchy)

## Returns

[`Test`](../interfaces/Test.md)[]

Array of tests in the given suite
