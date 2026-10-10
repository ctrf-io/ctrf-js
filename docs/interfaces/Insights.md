[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Insights

# Interface: Insights

Defined in: [types.ts:326](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L326)

Run-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:328](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L328)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:330](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L330)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:332](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L332)

Flaky rate metric

***

### averageRunDuration?

> `optional` **averageRunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:334](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L334)

Average run duration metric

***

### p95RunDuration?

> `optional` **p95RunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:336](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L336)

95th percentile run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:338](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L338)

Average test duration metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed?**: `number`

Defined in: [types.ts:340](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L340)

Number of historical runs analyzed

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:342](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L342)

Custom metadata
