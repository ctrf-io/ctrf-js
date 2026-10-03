[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:450](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L450)

Criteria for filtering and finding tests.

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:452](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L452)

Filter by legacy test ID (UUID)

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:454](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L454)

Filter by stable logical test case ID

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:456](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L456)

Filter by a specific test execution ID

***

### name?

> `optional` **name?**: `string`

Defined in: [types.ts:458](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L458)

Filter by test name

***

### status?

> `optional` **status?**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:460](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L460)

Filter by status

***

### tags?

> `optional` **tags?**: `string` \| `string`[]

Defined in: [types.ts:462](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L462)

Filter by tags

***

### suite?

> `optional` **suite?**: `string` \| `string`[]

Defined in: [types.ts:464](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L464)

Filter by suite

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:466](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L466)

Filter by flaky flag

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:468](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L468)

Filter by browser

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:470](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L470)

Filter by device
