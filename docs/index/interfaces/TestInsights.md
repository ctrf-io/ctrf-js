[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / TestInsights

# Interface: TestInsights

Defined in: [src/reference/types.ts:290](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L290)

Test-level insights computed from historical data

## Properties

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:298](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L298)

Average test duration metric

***

### executedInRuns?

> `optional` **executedInRuns**: `number`

Defined in: [src/reference/types.ts:302](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L302)

Number of runs this test was executed in

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:304](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L304)

Custom metadata

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:294](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L294)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:296](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L296)

Flaky rate metric

***

### p95TestDuration?

> `optional` **p95TestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:300](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L300)

95th percentile test duration metric

***

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:292](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L292)

Pass rate metric
