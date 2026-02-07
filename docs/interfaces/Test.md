[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Test

# Interface: Test

Defined in: [types.ts:105](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L105)

Individual test result

## Properties

### id?

> `optional` **id**: `string`

Defined in: [types.ts:107](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L107)

Unique test identifier (UUID)

***

### name

> **name**: `string`

Defined in: [types.ts:109](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L109)

Test name

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:111](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L111)

Test execution status

***

### duration

> **duration**: `number`

Defined in: [types.ts:113](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L113)

Test duration in milliseconds

***

### start?

> `optional` **start**: `number`

Defined in: [types.ts:115](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L115)

Start timestamp (Unix epoch milliseconds)

***

### stop?

> `optional` **stop**: `number`

Defined in: [types.ts:117](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L117)

Stop timestamp (Unix epoch milliseconds)

***

### suite?

> `optional` **suite**: `string`[]

Defined in: [types.ts:119](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L119)

Test suite hierarchy

***

### message?

> `optional` **message**: `string`

Defined in: [types.ts:121](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L121)

Error message (for failed tests)

***

### trace?

> `optional` **trace**: `string`

Defined in: [types.ts:123](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L123)

Stack trace (for failed tests)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: [types.ts:125](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L125)

Code snippet where failure occurred

***

### ai?

> `optional` **ai**: `string`

Defined in: [types.ts:127](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L127)

AI-generated analysis or suggestion

***

### line?

> `optional` **line**: `number`

Defined in: [types.ts:129](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L129)

Line number where test is defined or failed

***

### rawStatus?

> `optional` **rawStatus**: `string`

Defined in: [types.ts:131](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L131)

Original status from the test framework

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [types.ts:133](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L133)

Tags for categorization

***

### type?

> `optional` **type**: `string`

Defined in: [types.ts:135](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L135)

Test type (e.g., 'unit', 'integration', 'e2e')

***

### filePath?

> `optional` **filePath**: `string`

Defined in: [types.ts:137](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L137)

Path to the test file

***

### retries?

> `optional` **retries**: `number`

Defined in: [types.ts:139](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L139)

Number of retry attempts

***

### retryAttempts?

> `optional` **retryAttempts**: [`RetryAttempt`](RetryAttempt.md)[]

Defined in: [types.ts:141](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L141)

Details of each retry attempt

***

### flaky?

> `optional` **flaky**: `boolean`

Defined in: [types.ts:143](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L143)

Whether the test is flaky

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: [types.ts:145](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L145)

Standard output captured during test

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: [types.ts:147](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L147)

Standard error captured during test

***

### threadId?

> `optional` **threadId**: `string`

Defined in: [types.ts:149](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L149)

Thread/worker ID that ran this test

***

### browser?

> `optional` **browser**: `string`

Defined in: [types.ts:151](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L151)

Browser name (for browser tests)

***

### device?

> `optional` **device**: `string`

Defined in: [types.ts:153](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L153)

Device name (for device tests)

***

### screenshot?

> `optional` **screenshot**: `string`

Defined in: [types.ts:155](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L155)

Base64 encoded screenshot

***

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:157](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L157)

File attachments

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:159](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L159)

Test parameters (for parameterized tests)

***

### steps?

> `optional` **steps**: [`Step`](Step.md)[]

Defined in: [types.ts:161](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L161)

Test steps

***

### insights?

> `optional` **insights**: [`TestInsights`](TestInsights.md)

Defined in: [types.ts:163](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L163)

Test-level insights

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:165](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L165)

Custom metadata
