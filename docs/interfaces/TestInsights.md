[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestInsights

# Interface: TestInsights

Defined in: [types.ts:334](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L334)

Test-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:336](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L336)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:338](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L338)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:340](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L340)

Flaky rate metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:342](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L342)

Average test duration metric

***

### p95TestDuration?

> `optional` **p95TestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:344](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L344)

95th percentile test duration metric

***

### executedInRuns?

> `optional` **executedInRuns?**: `number`

Defined in: [types.ts:346](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L346)

Number of runs this test was executed in

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:348](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L348)

Custom metadata
