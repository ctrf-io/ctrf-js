[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Insights

# Interface: Insights

Defined in: [types.ts:369](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L369)

Run-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:371](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L371)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:373](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L373)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:375](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L375)

Flaky rate metric

***

### averageRunDuration?

> `optional` **averageRunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:377](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L377)

Average run duration metric

***

### p95RunDuration?

> `optional` **p95RunDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:379](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L379)

95th percentile run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:381](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L381)

Average test duration metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed?**: `number`

Defined in: [types.ts:383](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L383)

Number of historical runs analyzed

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:385](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L385)

Custom metadata
