[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Insights

# Interface: Insights

Defined in: [types.ts:387](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L387)

Run-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:389](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L389)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:391](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L391)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:393](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L393)

Flaky rate metric

***

### averageRunDuration?

> `optional` **averageRunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:395](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L395)

Average run duration metric

***

### p95RunDuration?

> `optional` **p95RunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:397](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L397)

95th percentile run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:399](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L399)

Average test duration metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed?**: `number`

Defined in: [types.ts:401](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L401)

Number of historical runs analyzed

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:403](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L403)

Custom metadata
