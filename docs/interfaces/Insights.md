[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Insights

# Interface: Insights

Defined in: [types.ts:310](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L310)

Run-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:312](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L312)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:314](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L314)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:316](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L316)

Flaky rate metric

***

### averageRunDuration?

> `optional` **averageRunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:318](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L318)

Average run duration metric

***

### p95RunDuration?

> `optional` **p95RunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:320](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L320)

95th percentile run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:322](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L322)

Average test duration metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed?**: `number`

Defined in: [types.ts:324](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L324)

Number of historical runs analyzed

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:326](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L326)

Custom metadata
