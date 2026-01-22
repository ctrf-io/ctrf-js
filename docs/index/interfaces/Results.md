[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / Results

# Interface: Results

Defined in: [src/reference/types.ts:37](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L37)

Container for test results

## Properties

### environment?

> `optional` **environment**: [`Environment`](Environment.md)

Defined in: [src/reference/types.ts:45](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L45)

Environment information

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:47](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L47)

Custom metadata

***

### summary

> **summary**: [`Summary`](Summary.md)

Defined in: [src/reference/types.ts:41](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L41)

Aggregated test statistics

***

### tests

> **tests**: [`Test`](Test.md)[]

Defined in: [src/reference/types.ts:43](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L43)

Array of individual test results

***

### tool

> **tool**: [`Tool`](Tool.md)

Defined in: [src/reference/types.ts:39](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L39)

Information about the test tool
