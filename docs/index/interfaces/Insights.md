[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / Insights

# Interface: Insights

Defined in: [src/reference/types.ts:268](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L268)

Run-level insights computed from historical data

## Properties

### averageRunDuration?

> `optional` **averageRunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:276](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L276)

Average run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:280](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L280)

Average test duration metric

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:284](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L284)

Custom metadata

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:272](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L272)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:274](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L274)

Flaky rate metric

***

### p95RunDuration?

> `optional` **p95RunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:278](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L278)

95th percentile run duration metric

***

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [src/reference/types.ts:270](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L270)

Pass rate metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed**: `number`

Defined in: [src/reference/types.ts:282](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L282)

Number of historical runs analyzed
