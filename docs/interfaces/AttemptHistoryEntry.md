[**CTRF**](../README.md)

***

[CTRF](../globals.md) / AttemptHistoryEntry

# Interface: AttemptHistoryEntry

Defined in: [types.ts:257](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L257)

An attempt completed before the final attempt represented by the test object.
Despite the `retryAttempts` field name, the history includes the initial
attempt when a retry occurred and excludes the final attempt.

## Properties

### attempt

> **attempt**: `number`

Defined in: [types.ts:259](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L259)

Original sequence number for this attempt (1 = initial execution)

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:261](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L261)

Identifier for this individual attempt

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:263](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L263)

Status of this attempt

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:265](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L265)

Duration of this attempt in milliseconds

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:267](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L267)

Error message

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:269](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L269)

Stack trace

***

### assertionFailures?

> `optional` **assertionFailures?**: [`AssertionFailure`](AssertionFailure.md)[]

Defined in: [types.ts:271](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L271)

Assertion failures attributable to this attempt

***

### threadId?

> `optional` **threadId?**: `string`

Defined in: [types.ts:273](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L273)

Thread or worker that executed this attempt; qualify across processes or hosts

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:275](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L275)

Line number

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:277](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L277)

Code snippet

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:279](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L279)

Standard output

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:281](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L281)

Standard error

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:283](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L283)

Start timestamp

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:285](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L285)

Stop timestamp

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:287](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L287)

Attachments for this attempt

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:289](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L289)

Custom metadata
