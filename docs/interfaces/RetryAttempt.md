[**CTRF**](../README.md)

***

[CTRF](../globals.md) / RetryAttempt

# Interface: RetryAttempt

Defined in: [types.ts:194](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L194)

Details of a test retry attempt

## Properties

### attempt

> **attempt**: `number`

Defined in: [types.ts:196](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L196)

Attempt number (1-indexed)

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:198](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L198)

Identifier for this individual attempt

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:200](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L200)

Status of this attempt

***

### duration?

> `optional` **duration?**: `number`

Defined in: [types.ts:202](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L202)

Duration of this attempt in milliseconds

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:204](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L204)

Error message

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:206](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L206)

Stack trace

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:208](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L208)

Line number

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:210](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L210)

Code snippet

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:212](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L212)

Standard output

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:214](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L214)

Standard error

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:216](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L216)

Start timestamp

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:218](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L218)

Stop timestamp

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:220](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L220)

Attachments for this attempt

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:222](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L222)

Custom metadata
