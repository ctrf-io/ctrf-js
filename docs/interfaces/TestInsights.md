[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestInsights

# Interface: TestInsights

Defined in: [types.ts:393](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L393)

Test-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:395](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L395)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:397](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L397)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:399](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L399)

Flaky rate metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:401](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L401)

Average test duration metric

***

### p95TestDuration?

> `optional` **p95TestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:403](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L403)

95th percentile test duration metric

***

### executedInRuns?

> `optional` **executedInRuns?**: `number`

Defined in: [types.ts:405](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L405)

Number of runs this test was executed in

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:407](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L407)

Custom metadata
