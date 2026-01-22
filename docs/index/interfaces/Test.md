[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / Test

# Interface: Test

Defined in: [src/reference/types.ts:95](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L95)

Individual test result

## Properties

### ai?

> `optional` **ai**: `string`

Defined in: [src/reference/types.ts:117](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L117)

AI-generated analysis or suggestion

***

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: [src/reference/types.ts:147](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L147)

File attachments

***

### browser?

> `optional` **browser**: `string`

Defined in: [src/reference/types.ts:141](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L141)

Browser name (for browser tests)

***

### device?

> `optional` **device**: `string`

Defined in: [src/reference/types.ts:143](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L143)

Device name (for device tests)

***

### duration

> **duration**: `number`

Defined in: [src/reference/types.ts:103](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L103)

Test duration in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:155](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L155)

Custom metadata

***

### filePath?

> `optional` **filePath**: `string`

Defined in: [src/reference/types.ts:127](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L127)

Path to the test file

***

### flaky?

> `optional` **flaky**: `boolean`

Defined in: [src/reference/types.ts:133](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L133)

Whether the test is flaky

***

### id?

> `optional` **id**: `string`

Defined in: [src/reference/types.ts:97](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L97)

Unique test identifier (UUID)

***

### insights?

> `optional` **insights**: [`TestInsights`](TestInsights.md)

Defined in: [src/reference/types.ts:153](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L153)

Test-level insights

***

### line?

> `optional` **line**: `number`

Defined in: [src/reference/types.ts:119](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L119)

Line number where test is defined or failed

***

### message?

> `optional` **message**: `string`

Defined in: [src/reference/types.ts:111](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L111)

Error message (for failed tests)

***

### name

> **name**: `string`

Defined in: [src/reference/types.ts:99](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L99)

Test name

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:149](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L149)

Test parameters (for parameterized tests)

***

### rawStatus?

> `optional` **rawStatus**: `string`

Defined in: [src/reference/types.ts:121](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L121)

Original status from the test framework

***

### retries?

> `optional` **retries**: `number`

Defined in: [src/reference/types.ts:129](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L129)

Number of retry attempts

***

### retryAttempts?

> `optional` **retryAttempts**: [`RetryAttempt`](RetryAttempt.md)[]

Defined in: [src/reference/types.ts:131](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L131)

Details of each retry attempt

***

### screenshot?

> `optional` **screenshot**: `string`

Defined in: [src/reference/types.ts:145](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L145)

Base64 encoded screenshot

***

### snippet?

> `optional` **snippet**: `string`

Defined in: [src/reference/types.ts:115](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L115)

Code snippet where failure occurred

***

### start?

> `optional` **start**: `number`

Defined in: [src/reference/types.ts:105](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L105)

Start timestamp (Unix epoch milliseconds)

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [src/reference/types.ts:101](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L101)

Test execution status

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: [src/reference/types.ts:137](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L137)

Standard error captured during test

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: [src/reference/types.ts:135](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L135)

Standard output captured during test

***

### steps?

> `optional` **steps**: [`Step`](Step.md)[]

Defined in: [src/reference/types.ts:151](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L151)

Test steps

***

### stop?

> `optional` **stop**: `number`

Defined in: [src/reference/types.ts:107](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L107)

Stop timestamp (Unix epoch milliseconds)

***

### suite?

> `optional` **suite**: `string`[]

Defined in: [src/reference/types.ts:109](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L109)

Test suite hierarchy

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [src/reference/types.ts:123](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L123)

Tags for categorization

***

### threadId?

> `optional` **threadId**: `string`

Defined in: [src/reference/types.ts:139](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L139)

Thread/worker ID that ran this test

***

### trace?

> `optional` **trace**: `string`

Defined in: [src/reference/types.ts:113](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L113)

Stack trace (for failed tests)

***

### type?

> `optional` **type**: `string`

Defined in: [src/reference/types.ts:125](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L125)

Test type (e.g., 'unit', 'integration', 'e2e')
