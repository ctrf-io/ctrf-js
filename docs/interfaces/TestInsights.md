[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestInsights

# Interface: TestInsights

Defined in: [types.ts:314](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L314)

Test-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:316](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L316)

Pass rate metric

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:318](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L318)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:320](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L320)

Flaky rate metric

***

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:322](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L322)

Average test duration metric

***

### p95TestDuration?

> `optional` **p95TestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:324](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L324)

95th percentile test duration metric

***

### executedInRuns?

> `optional` **executedInRuns**: `number`

Defined in: [types.ts:326](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L326)

Number of runs this test was executed in

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:328](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L328)

Custom metadata
