[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:438](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L438)

Criteria for filtering and finding tests.

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:440](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L440)

Filter by legacy test ID (UUID)

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:442](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L442)

Filter by stable logical test case ID

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:444](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L444)

Filter by a specific test execution ID

***

### name?

> `optional` **name?**: `string`

Defined in: [types.ts:446](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L446)

Filter by test name

***

### status?

> `optional` **status?**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:448](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L448)

Filter by status

***

### tags?

> `optional` **tags?**: `string` \| `string`[]

Defined in: [types.ts:450](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L450)

Filter by tags

***

### suite?

> `optional` **suite?**: `string` \| `string`[]

Defined in: [types.ts:452](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L452)

Filter by suite

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:454](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L454)

Filter by flaky flag

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:456](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L456)

Filter by browser

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:458](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L458)

Filter by device
