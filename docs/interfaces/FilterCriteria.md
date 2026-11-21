[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:515](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L515)

Criteria for filtering and finding tests.

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:517](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L517)

Filter by legacy test ID (UUID)

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:519](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L519)

Filter by stable logical test case ID

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:521](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L521)

Filter by a specific test execution ID

***

### name?

> `optional` **name?**: `string`

Defined in: [types.ts:523](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L523)

Filter by test name

***

### status?

> `optional` **status?**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:525](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L525)

Filter by status

***

### tags?

> `optional` **tags?**: `string` \| `string`[]

Defined in: [types.ts:527](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L527)

Filter by tags

***

### suite?

> `optional` **suite?**: `string` \| `string`[]

Defined in: [types.ts:529](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L529)

Filter by suite

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:531](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L531)

Filter by flaky flag

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:533](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L533)

Filter by browser

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:535](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L535)

Filter by device
