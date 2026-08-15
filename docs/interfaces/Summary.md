[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Summary

# Interface: Summary

Defined in: [types.ts:75](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L75)

Aggregated test statistics

## Properties

### tests

> **tests**: `number`

Defined in: [types.ts:77](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L77)

Total number of tests

***

### passed

> **passed**: `number`

Defined in: [types.ts:79](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L79)

Number of passed tests

***

### failed

> **failed**: `number`

Defined in: [types.ts:81](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L81)

Number of failed tests

***

### skipped

> **skipped**: `number`

Defined in: [types.ts:83](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L83)

Number of skipped tests

***

### pending

> **pending**: `number`

Defined in: [types.ts:85](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L85)

Number of pending tests

***

### other

> **other**: `number`

Defined in: [types.ts:87](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L87)

Number of tests with other status

***

### flaky?

> `optional` **flaky?**: `number`

Defined in: [types.ts:89](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L89)

Number of flaky tests

***

### suites?

> `optional` **suites?**: `number`

Defined in: [types.ts:91](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L91)

Number of test suites

***

### start

> **start**: `number`

Defined in: [types.ts:93](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L93)

Start timestamp (Unix epoch milliseconds)

***

### stop

> **stop**: `number`

Defined in: [types.ts:95](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L95)

Stop timestamp (Unix epoch milliseconds)

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:97](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L97)

Total duration in milliseconds

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:99](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L99)

Custom metadata
