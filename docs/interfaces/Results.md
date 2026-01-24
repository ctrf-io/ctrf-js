[**CTRF**](../README.md)

***

[CTRF](../README.md) / Results

# Interface: Results

Defined in: [types.ts:37](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L37)

Container for test results

## Properties

### environment?

> `optional` **environment**: [`Environment`](Environment.md)

Defined in: [types.ts:45](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L45)

Environment information

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:47](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L47)

Custom metadata

***

### summary

> **summary**: [`Summary`](Summary.md)

Defined in: [types.ts:41](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L41)

Aggregated test statistics

***

### tests

> **tests**: [`Test`](Test.md)[]

Defined in: [types.ts:43](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L43)

Array of individual test results

***

### tool

> **tool**: [`Tool`](Tool.md)

Defined in: [types.ts:39](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L39)

Information about the test tool
