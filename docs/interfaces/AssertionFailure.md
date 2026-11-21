[**CTRF**](../README.md)

***

[CTRF](../globals.md) / AssertionFailure

# Interface: AssertionFailure

Defined in: [types.ts:209](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L209)

Details of an individual assertion failure. At least one property is required.

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:211](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L211)

Message associated with this assertion failure

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:213](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L213)

Stack trace associated with this assertion failure

***

### expected?

> `optional` **expected?**: `string`

Defined in: [types.ts:215](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L215)

String representation of the expected value

***

### actual?

> `optional` **actual?**: `string`

Defined in: [types.ts:217](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L217)

String representation of the actual value

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:219](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L219)

Arbitrary metadata
