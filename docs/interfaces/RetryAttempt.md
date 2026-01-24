[**CTRF**](../README.md)

***

[CTRF](../README.md) / RetryAttempt

# Interface: RetryAttempt

Defined in: [types.ts:166](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L166)

Details of a test retry attempt

## Properties

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:190](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L190)

Attachments for this attempt

***

### attempt

> **attempt**: `number`

Defined in: [types.ts:168](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L168)

Attempt number (1-indexed)

***

### duration?

> `optional` **duration**: `number`

Defined in: [types.ts:172](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L172)

Duration of this attempt in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:192](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L192)

Custom metadata

***

### line?

> `optional` **line**: `number`

Defined in: [types.ts:178](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L178)

Line number

***

### message?

> `optional` **message**: `string`

Defined in: [types.ts:174](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L174)

Error message

***

### snippet?

> `optional` **snippet**: `string`

Defined in: [types.ts:180](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L180)

Code snippet

***

### start?

> `optional` **start**: `number`

Defined in: [types.ts:186](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L186)

Start timestamp

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:170](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L170)

Status of this attempt

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: [types.ts:184](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L184)

Standard error

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: [types.ts:182](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L182)

Standard output

***

### stop?

> `optional` **stop**: `number`

Defined in: [types.ts:188](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L188)

Stop timestamp

***

### trace?

> `optional` **trace**: `string`

Defined in: [types.ts:176](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L176)

Stack trace
