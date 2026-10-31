[**CTRF**](../README.md)

***

[CTRF](../globals.md) / AttemptHistoryEntry

# Interface: AttemptHistoryEntry

Defined in: [types.ts:239](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L239)

An attempt completed before the final attempt represented by the test object.
Despite the `retryAttempts` field name, the history includes the initial
attempt when a retry occurred and excludes the final attempt.

## Properties

### attempt

> **attempt**: `number`

Defined in: [types.ts:241](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L241)

Original sequence number for this attempt (1 = initial execution)

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:243](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L243)

Identifier for this individual attempt

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:245](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L245)

Status of this attempt

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:247](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L247)

Duration of this attempt in milliseconds

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:249](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L249)

Error message

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:251](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L251)

Stack trace

***

### assertionFailures?

> `optional` **assertionFailures?**: [`AssertionFailure`](AssertionFailure.md)[]

Defined in: [types.ts:253](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L253)

Assertion failures attributable to this attempt

***

### threadId?

> `optional` **threadId?**: `string`

Defined in: [types.ts:255](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L255)

Thread or worker that executed this attempt; qualify across processes or hosts

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:257](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L257)

Line number

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:259](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L259)

Code snippet

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:261](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L261)

Standard output

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:263](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L263)

Standard error

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:265](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L265)

Start timestamp

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:267](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L267)

Stop timestamp

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:269](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L269)

Attachments for this attempt

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:271](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L271)

Custom metadata
