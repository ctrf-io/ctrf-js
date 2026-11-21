[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Results

# Interface: Results

Defined in: [types.ts:63](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L63)

Container for test results

## Properties

### tool

> **tool**: [`Tool`](Tool.md)

Defined in: [types.ts:65](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L65)

Information about the test tool

***

### summary

> **summary**: [`Summary`](Summary.md)

Defined in: [types.ts:67](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L67)

Aggregated test statistics

***

### tests

> **tests**: [`Test`](Test.md)[]

Defined in: [types.ts:69](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L69)

Array of individual test results

***

### errors?

> `optional` **errors?**: [`GlobalError`](GlobalError.md)[]

Defined in: [types.ts:71](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L71)

Global errors, separate from test results and summary counts

***

### environment?

> `optional` **environment?**: [`Environment`](Environment.md)

Defined in: [types.ts:73](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L73)

Environment information

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:75](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L75)

Custom metadata
