[**CTRF**](../README.md)

***

[CTRF](../globals.md) / AttemptHistoryEntry

# Interface: AttemptHistoryEntry

Defined in: [types.ts:198](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L198)

An attempt completed before the final attempt represented by the test object.
Despite the `retryAttempts` field name, the history includes the initial
attempt when a retry occurred and excludes the final attempt.

## Properties

### attempt

> **attempt**: `number`

Defined in: [types.ts:200](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L200)

Original sequence number for this attempt (1 = initial execution)

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:202](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L202)

Identifier for this individual attempt

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:204](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L204)

Status of this attempt

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:206](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L206)

Duration of this attempt in milliseconds

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:208](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L208)

Error message

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:210](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L210)

Stack trace

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:212](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L212)

Line number

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:214](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L214)

Code snippet

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:216](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L216)

Standard output

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:218](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L218)

Standard error

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:220](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L220)

Start timestamp

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:222](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L222)

Stop timestamp

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:224](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L224)

Attachments for this attempt

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:226](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L226)

Custom metadata
