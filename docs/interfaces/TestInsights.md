[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestInsights

# Interface: TestInsights

Defined in: [types.ts:348](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L348)

Test-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:350](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L350)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:352](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L352)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:354](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L354)

Flaky rate metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:356](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L356)

Average test duration metric

***

### p95TestDuration?

> `optional` **p95TestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:358](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L358)

95th percentile test duration metric

***

### executedInRuns?

> `optional` **executedInRuns?**: `number`

Defined in: [types.ts:360](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L360)

Number of runs this test was executed in

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:362](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L362)

Custom metadata
