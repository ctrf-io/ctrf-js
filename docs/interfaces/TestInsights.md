[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestInsights

# Interface: TestInsights

Defined in: [types.ts:411](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L411)

Test-level insights computed from historical data

## Properties

### passRate?

> `optional` **passRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:413](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L413)

Pass rate metric

***

### failRate?

> `optional` **failRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:415](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L415)

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:417](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L417)

Flaky rate metric

***

### averageTestDuration?

> `optional` **averageTestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:419](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L419)

Average test duration metric

***

### p95TestDuration?

> `optional` **p95TestDuration?**: [`MetricDelta`](MetricDelta.md)

Defined in: [types.ts:421](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L421)

95th percentile test duration metric

***

### executedInRuns?

> `optional` **executedInRuns?**: `number`

Defined in: [types.ts:423](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L423)

Number of runs this test was executed in

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:425](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L425)

Custom metadata
