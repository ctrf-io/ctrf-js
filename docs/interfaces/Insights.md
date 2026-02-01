[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Insights

# Interface: Insights

Defined in: [types.ts:290](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L290)

Run-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:292](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L292)

Pass rate metric

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:294](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L294)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:296](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L296)

Flaky rate metric

***

### averageRunDuration?

> `optional` **averageRunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:298](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L298)

Average run duration metric

***

### p95RunDuration?

> `optional` **p95RunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:300](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L300)

95th percentile run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:302](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L302)

Average test duration metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed**: `number`

Defined in: [types.ts:304](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L304)

Number of historical runs analyzed

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:306](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L306)

Custom metadata
