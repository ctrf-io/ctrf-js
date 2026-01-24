[**CTRF**](../README.md)

***

[CTRF](../README.md) / TestInsights

# Interface: TestInsights

Defined in: types.ts:290

Test-level insights computed from historical data

## Properties

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:298

Average test duration metric

***

### executedInRuns?

> `optional` **executedInRuns**: `number`

Defined in: types.ts:302

Number of runs this test was executed in

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:304

Custom metadata

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:294

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:296

Flaky rate metric

***

### p95TestDuration?

> `optional` **p95TestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:300

95th percentile test duration metric

***

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:292

Pass rate metric
