[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / RetryAttempt

# Interface: RetryAttempt

Defined in: [src/reference/types.ts:166](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L166)

Details of a test retry attempt

## Properties

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: [src/reference/types.ts:190](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L190)

Attachments for this attempt

***

### attempt

> **attempt**: `number`

Defined in: [src/reference/types.ts:168](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L168)

Attempt number (1-indexed)

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/reference/types.ts:172](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L172)

Duration of this attempt in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:192](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L192)

Custom metadata

***

### line?

> `optional` **line**: `number`

Defined in: [src/reference/types.ts:178](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L178)

Line number

***

### message?

> `optional` **message**: `string`

Defined in: [src/reference/types.ts:174](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L174)

Error message

***

### snippet?

> `optional` **snippet**: `string`

Defined in: [src/reference/types.ts:180](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L180)

Code snippet

***

### start?

> `optional` **start**: `number`

Defined in: [src/reference/types.ts:186](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L186)

Start timestamp

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [src/reference/types.ts:170](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L170)

Status of this attempt

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: [src/reference/types.ts:184](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L184)

Standard error

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: [src/reference/types.ts:182](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L182)

Standard output

***

### stop?

> `optional` **stop**: `number`

Defined in: [src/reference/types.ts:188](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L188)

Stop timestamp

***

### trace?

> `optional` **trace**: `string`

Defined in: [src/reference/types.ts:176](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L176)

Stack trace
