[**CTRF**](../README.md)

***

[CTRF](../globals.md) / RetryAttempt

# Interface: RetryAttempt

Defined in: [types.ts:180](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L180)

Details of a test retry attempt

## Properties

### attempt

> **attempt**: `number`

Defined in: [types.ts:182](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L182)

Attempt number (1-indexed)

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:184](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L184)

Status of this attempt

***

### duration?

> `optional` **duration**: `number`

Defined in: [types.ts:186](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L186)

Duration of this attempt in milliseconds

***

### message?

> `optional` **message**: `string`

Defined in: [types.ts:188](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L188)

Error message

***

### trace?

> `optional` **trace**: `string`

Defined in: [types.ts:190](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L190)

Stack trace

***

### line?

> `optional` **line**: `number`

Defined in: [types.ts:192](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L192)

Line number

***

### snippet?

> `optional` **snippet**: `string`

Defined in: [types.ts:194](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L194)

Code snippet

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: [types.ts:196](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L196)

Standard output

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: [types.ts:198](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L198)

Standard error

***

### start?

> `optional` **start**: `number`

Defined in: [types.ts:200](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L200)

Start timestamp

***

### stop?

> `optional` **stop**: `number`

Defined in: [types.ts:202](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L202)

Stop timestamp

***

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:204](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L204)

Attachments for this attempt

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:206](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L206)

Custom metadata
