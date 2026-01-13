[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / Summary

# Interface: Summary

Defined in: [src/reference/types.ts:65](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L65)

Aggregated test statistics

## Properties

### duration?

> `optional` **duration**: `number`

Defined in: [src/reference/types.ts:87](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L87)

Total duration in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:89](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L89)

Custom metadata

***

### failed

> **failed**: `number`

Defined in: [src/reference/types.ts:71](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L71)

Number of failed tests

***

### flaky?

> `optional` **flaky**: `number`

Defined in: [src/reference/types.ts:79](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L79)

Number of flaky tests

***

### other

> **other**: `number`

Defined in: [src/reference/types.ts:77](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L77)

Number of tests with other status

***

### passed

> **passed**: `number`

Defined in: [src/reference/types.ts:69](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L69)

Number of passed tests

***

### pending

> **pending**: `number`

Defined in: [src/reference/types.ts:75](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L75)

Number of pending tests

***

### skipped

> **skipped**: `number`

Defined in: [src/reference/types.ts:73](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L73)

Number of skipped tests

***

### start

> **start**: `number`

Defined in: [src/reference/types.ts:83](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L83)

Start timestamp (Unix epoch milliseconds)

***

### stop

> **stop**: `number`

Defined in: [src/reference/types.ts:85](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L85)

Stop timestamp (Unix epoch milliseconds)

***

### suites?

> `optional` **suites**: `number`

Defined in: [src/reference/types.ts:81](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L81)

Number of test suites

***

### tests

> **tests**: `number`

Defined in: [src/reference/types.ts:67](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L67)

Total number of tests
