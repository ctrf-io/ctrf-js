[**CTRF**](../README.md)

***

[CTRF](../globals.md) / GlobalError

# Interface: GlobalError

Defined in: [types.ts:228](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L228)

Error associated with the run rather than an individual test result.
At least one property is required. Global errors do not add test results.

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:230](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L230)

Message associated with this global error

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:232](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L232)

Stack trace associated with this global error

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:234](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L234)

Arbitrary metadata
