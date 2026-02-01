[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:418](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L418)

Criteria for filtering and finding tests.

## Properties

### id?

> `optional` **id**: `string`

Defined in: [types.ts:420](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L420)

Filter by test ID (UUID)

***

### name?

> `optional` **name**: `string`

Defined in: [types.ts:422](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L422)

Filter by test name

***

### status?

> `optional` **status**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:424](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L424)

Filter by status

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [types.ts:426](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L426)

Filter by tags

***

### suite?

> `optional` **suite**: `string` \| `string`[]

Defined in: [types.ts:428](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L428)

Filter by suite

***

### flaky?

> `optional` **flaky**: `boolean`

Defined in: [types.ts:430](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L430)

Filter by flaky flag

***

### browser?

> `optional` **browser**: `string`

Defined in: [types.ts:432](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L432)

Filter by browser

***

### device?

> `optional` **device**: `string`

Defined in: [types.ts:434](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L434)

Filter by device
