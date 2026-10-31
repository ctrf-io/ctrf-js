[**CTRF**](../README.md)

***

[CTRF](../globals.md) / GlobalError

# Interface: GlobalError

Defined in: [types.ts:210](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L210)

Error associated with the run rather than an individual test result.
At least one property is required. Global errors do not add test results.

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:212](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L212)

Message associated with this global error

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:214](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L214)

Stack trace associated with this global error

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:216](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L216)

Arbitrary metadata
