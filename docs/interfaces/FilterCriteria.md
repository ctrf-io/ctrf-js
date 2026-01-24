[**CTRF**](../README.md)

***

[CTRF](../README.md) / FilterCriteria

# Interface: FilterCriteria

Defined in: [types.ts:382](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L382)

Criteria for filtering and finding tests.

## Properties

### browser?

> `optional` **browser**: `string`

Defined in: [types.ts:396](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L396)

Filter by browser

***

### device?

> `optional` **device**: `string`

Defined in: [types.ts:398](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L398)

Filter by device

***

### flaky?

> `optional` **flaky**: `boolean`

Defined in: [types.ts:394](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L394)

Filter by flaky flag

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:384](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L384)

Filter by test ID (UUID)

***

### name?

> `optional` **name**: `string`

Defined in: [types.ts:386](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L386)

Filter by test name

***

### status?

> `optional` **status**: [`TestStatus`](../type-aliases/TestStatus.md) \| [`TestStatus`](../type-aliases/TestStatus.md)[]

Defined in: [types.ts:388](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L388)

Filter by status

***

### suite?

> `optional` **suite**: `string` \| `string`[]

Defined in: [types.ts:392](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L392)

Filter by suite

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [types.ts:390](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L390)

Filter by tags
