[**CTRF**](../README.md)

***

[CTRF](../README.md) / Insights

# Interface: Insights

Defined in: types.ts:268

Run-level insights computed from historical data

## Properties

### averageRunDuration?

> `optional` **averageRunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:276

Average run duration metric

***

### averageTestDuration?

> `optional` **averageTestDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:280

Average test duration metric

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:284

Custom metadata

***

### failRate?

> `optional` **failRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:272

Fail rate metric

***

### flakyRate?

> `optional` **flakyRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:274

Flaky rate metric

***

### p95RunDuration?

> `optional` **p95RunDuration**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:278

95th percentile run duration metric

***

### passRate?

> `optional` **passRate**: [`MetricDelta`](MetricDelta.md)

Defined in: types.ts:270

Pass rate metric

***

### runsAnalyzed?

> `optional` **runsAnalyzed**: `number`

Defined in: types.ts:282

Number of historical runs analyzed
