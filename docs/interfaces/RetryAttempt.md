[**CTRF**](../README.md)

***

[CTRF](../README.md) / RetryAttempt

# Interface: RetryAttempt

Defined in: types.ts:166

Details of a test retry attempt

## Properties

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: types.ts:190

Attachments for this attempt

***

### attempt

> **attempt**: `number`

Defined in: types.ts:168

Attempt number (1-indexed)

***

### duration?

> `optional` **duration**: `number`

Defined in: types.ts:172

Duration of this attempt in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:192

Custom metadata

***

### line?

> `optional` **line**: `number`

Defined in: types.ts:178

Line number

***

### message?

> `optional` **message**: `string`

Defined in: types.ts:174

Error message

***

### snippet?

> `optional` **snippet**: `string`

Defined in: types.ts:180

Code snippet

***

### start?

> `optional` **start**: `number`

Defined in: types.ts:186

Start timestamp

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: types.ts:170

Status of this attempt

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: types.ts:184

Standard error

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: types.ts:182

Standard output

***

### stop?

> `optional` **stop**: `number`

Defined in: types.ts:188

Stop timestamp

***

### trace?

> `optional` **trace**: `string`

Defined in: types.ts:176

Stack trace
