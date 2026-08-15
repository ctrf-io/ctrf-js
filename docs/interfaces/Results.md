[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Results

# Interface: Results

Defined in: [types.ts:43](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L43)

Container for test results

## Properties

### tool

> **tool**: [`Tool`](Tool.md)

Defined in: [types.ts:45](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L45)

Information about the test tool

***

### summary

> **summary**: [`Summary`](Summary.md)

Defined in: [types.ts:47](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L47)

Aggregated test statistics

***

### tests

> **tests**: [`Test`](Test.md)[]

Defined in: [types.ts:49](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L49)

Array of individual test results

***

### environment?

> `optional` **environment?**: [`Environment`](Environment.md)

Defined in: [types.ts:51](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L51)

Environment information

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:53](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L53)

Custom metadata
