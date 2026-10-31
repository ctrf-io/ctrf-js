[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Test

# Interface: Test

Defined in: [types.ts:111](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L111)

Individual test result

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:113](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L113)

Deprecated test-case identifier (UUID), scheduled for removal in CTRF 1.0.0; prefer optional testId

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:115](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L115)

Stable test-case identifier across runs within the producer's documented scope

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:117](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L117)

Identifier for one test-case execution lifecycle within a run, including coordinated retries

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:119](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L119)

Identifier for this individual attempt

***

### name

> **name**: `string`

Defined in: [types.ts:121](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L121)

Test name

***

### description?

> `optional` **description?**: `string`

Defined in: [types.ts:123](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L123)

Human-readable description of the test case

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:125](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L125)

Test execution status

***

### duration

> **duration**: `number`

Defined in: [types.ts:127](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L127)

Duration of the final attempt in milliseconds, excluding earlier attempts

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:129](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L129)

Start timestamp (Unix epoch milliseconds)

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:131](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L131)

Stop timestamp (Unix epoch milliseconds)

***

### suite?

> `optional` **suite?**: `string`[]

Defined in: [types.ts:133](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L133)

Test suite hierarchy

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:135](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L135)

Error message (for failed tests)

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:137](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L137)

Stack trace (for failed tests)

***

### assertionFailures?

> `optional` **assertionFailures?**: [`AssertionFailure`](AssertionFailure.md)[]

Defined in: [types.ts:139](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L139)

Assertion failures attributable to the final attempt

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:141](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L141)

Code snippet where failure occurred

***

### ai?

> `optional` **ai?**: `string`

Defined in: [types.ts:143](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L143)

AI-generated analysis or suggestion

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:145](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L145)

Line number where test is defined or failed

***

### rawStatus?

> `optional` **rawStatus?**: `string`

Defined in: [types.ts:147](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L147)

Original status from the test framework

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [types.ts:149](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L149)

Tags for categorization

***

### labels?

> `optional` **labels?**: `Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

Defined in: [types.ts:151](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L151)

Structured key-value metadata; values may be scalar or multi-valued

***

### type?

> `optional` **type?**: `string`

Defined in: [types.ts:153](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L153)

Test type (e.g., 'unit', 'integration', 'e2e')

***

### filePath?

> `optional` **filePath?**: `string`

Defined in: [types.ts:155](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L155)

Path to the test file

***

### retries?

> `optional` **retries?**: `number`

Defined in: [types.ts:157](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L157)

Number of times the test was re-executed after its initial attempt

***

### retryAttempts?

> `optional` **retryAttempts?**: [`AttemptHistoryEntry`](AttemptHistoryEntry.md)[]

Defined in: [types.ts:159](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L159)

Ordered history of attempts completed before the final attempt

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:161](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L161)

Whether the test is flaky

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:163](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L163)

Standard output captured during test

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:165](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L165)

Standard error captured during test

***

### threadId?

> `optional` **threadId?**: `string`

Defined in: [types.ts:167](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L167)

Thread or worker that executed the final attempt; qualify across processes or hosts

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:169](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L169)

Browser name (for browser tests)

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:171](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L171)

Device name (for device tests)

***

### screenshot?

> `optional` **screenshot?**: `string`

Defined in: [types.ts:173](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L173)

Base64 encoded screenshot

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:175](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L175)

File attachments

***

### parameters?

> `optional` **parameters?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:177](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L177)

Test parameters (for parameterized tests)

***

### steps?

> `optional` **steps?**: [`Step`](Step.md)[]

Defined in: [types.ts:179](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L179)

Test steps

***

### insights?

> `optional` **insights?**: [`TestInsights`](TestInsights.md)

Defined in: [types.ts:181](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L181)

Test-level insights

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:183](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L183)

Custom metadata
