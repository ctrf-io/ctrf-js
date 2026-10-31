[**CTRF**](../README.md)

***

[CTRF](../globals.md) / AssertionFailure

# Interface: AssertionFailure

Defined in: [types.ts:191](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L191)

Details of an individual assertion failure. At least one property is required.

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:193](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L193)

Message associated with this assertion failure

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:195](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L195)

Stack trace associated with this assertion failure

***

### expected?

> `optional` **expected?**: `string`

Defined in: [types.ts:197](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L197)

String representation of the expected value

***

### actual?

> `optional` **actual?**: `string`

Defined in: [types.ts:199](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L199)

String representation of the actual value

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:201](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L201)

Arbitrary metadata
