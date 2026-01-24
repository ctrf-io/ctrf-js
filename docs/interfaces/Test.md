[**CTRF**](../README.md)

***

[CTRF](../README.md) / Test

# Interface: Test

Defined in: types.ts:95

Individual test result

## Properties

### ai?

> `optional` **ai**: `string`

Defined in: types.ts:117

AI-generated analysis or suggestion

***

### attachments?

> `optional` **attachments**: [`Attachment`](Attachment.md)[]

Defined in: types.ts:147

File attachments

***

### browser?

> `optional` **browser**: `string`

Defined in: types.ts:141

Browser name (for browser tests)

***

### device?

> `optional` **device**: `string`

Defined in: types.ts:143

Device name (for device tests)

***

### duration

> **duration**: `number`

Defined in: types.ts:103

Test duration in milliseconds

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:155

Custom metadata

***

### filePath?

> `optional` **filePath**: `string`

Defined in: types.ts:127

Path to the test file

***

### flaky?

> `optional` **flaky**: `boolean`

Defined in: types.ts:133

Whether the test is flaky

***

### id?

> `optional` **id**: `string`

Defined in: types.ts:97

Unique test identifier (UUID)

***

### insights?

> `optional` **insights**: [`TestInsights`](TestInsights.md)

Defined in: types.ts:153

Test-level insights

***

### line?

> `optional` **line**: `number`

Defined in: types.ts:119

Line number where test is defined or failed

***

### message?

> `optional` **message**: `string`

Defined in: types.ts:111

Error message (for failed tests)

***

### name

> **name**: `string`

Defined in: types.ts:99

Test name

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:149

Test parameters (for parameterized tests)

***

### rawStatus?

> `optional` **rawStatus**: `string`

Defined in: types.ts:121

Original status from the test framework

***

### retries?

> `optional` **retries**: `number`

Defined in: types.ts:129

Number of retry attempts

***

### retryAttempts?

> `optional` **retryAttempts**: [`RetryAttempt`](RetryAttempt.md)[]

Defined in: types.ts:131

Details of each retry attempt

***

### screenshot?

> `optional` **screenshot**: `string`

Defined in: types.ts:145

Base64 encoded screenshot

***

### snippet?

> `optional` **snippet**: `string`

Defined in: types.ts:115

Code snippet where failure occurred

***

### start?

> `optional` **start**: `number`

Defined in: types.ts:105

Start timestamp (Unix epoch milliseconds)

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: types.ts:101

Test execution status

***

### stderr?

> `optional` **stderr**: `string`[]

Defined in: types.ts:137

Standard error captured during test

***

### stdout?

> `optional` **stdout**: `string`[]

Defined in: types.ts:135

Standard output captured during test

***

### steps?

> `optional` **steps**: [`Step`](Step.md)[]

Defined in: types.ts:151

Test steps

***

### stop?

> `optional` **stop**: `number`

Defined in: types.ts:107

Stop timestamp (Unix epoch milliseconds)

***

### suite?

> `optional` **suite**: `string`[]

Defined in: types.ts:109

Test suite hierarchy

***

### tags?

> `optional` **tags**: `string`[]

Defined in: types.ts:123

Tags for categorization

***

### threadId?

> `optional` **threadId**: `string`

Defined in: types.ts:139

Thread/worker ID that ran this test

***

### trace?

> `optional` **trace**: `string`

Defined in: types.ts:113

Stack trace (for failed tests)

***

### type?

> `optional` **type**: `string`

Defined in: types.ts:125

Test type (e.g., 'unit', 'integration', 'e2e')
