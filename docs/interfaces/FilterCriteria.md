[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:497](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L497)

Criteria for filtering and finding tests.

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:499](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L499)

Filter by legacy test ID (UUID)

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:501](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L501)

Filter by stable logical test case ID

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:503](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L503)

Filter by a specific test execution ID

***

### name?

> `optional` **name?**: `string`

Defined in: [types.ts:505](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L505)

Filter by test name

***

### status?

> `optional` **status?**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:507](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L507)

Filter by status

***

### tags?

> `optional` **tags?**: `string` \| `string`[]

Defined in: [types.ts:509](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L509)

Filter by tags

***

### suite?

> `optional` **suite?**: `string` \| `string`[]

Defined in: [types.ts:511](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L511)

Filter by suite

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:513](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L513)

Filter by flaky flag

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:515](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L515)

Filter by browser

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:517](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L517)

Filter by device
