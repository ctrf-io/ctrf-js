[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Summary

# Interface: Summary

Defined in: [types.ts:97](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L97)

Aggregated test statistics

## Properties

### tests

> **tests**: `number`

Defined in: [types.ts:99](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L99)

Total number of tests

***

### passed

> **passed**: `number`

Defined in: [types.ts:101](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L101)

Number of passed tests

***

### failed

> **failed**: `number`

Defined in: [types.ts:103](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L103)

Number of failed tests

***

### skipped

> **skipped**: `number`

Defined in: [types.ts:105](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L105)

Number of skipped tests

***

### pending

> **pending**: `number`

Defined in: [types.ts:107](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L107)

Number of pending tests

***

### other

> **other**: `number`

Defined in: [types.ts:109](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L109)

Number of tests with other status

***

### flaky?

> `optional` **flaky?**: `number`

Defined in: [types.ts:111](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L111)

Number of flaky tests

***

### suites?

> `optional` **suites?**: `number`

Defined in: [types.ts:113](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L113)

Number of test suites

***

### start

> **start**: `number`

Defined in: [types.ts:115](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L115)

Start timestamp (Unix epoch milliseconds)

***

### stop

> **stop**: `number`

Defined in: [types.ts:117](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L117)

Stop timestamp (Unix epoch milliseconds)

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:119](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L119)

Total duration in milliseconds

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:121](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L121)

Custom metadata
