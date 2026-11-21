[**CTRF**](../README.md)

***

[CTRF](../globals.md) / Test

# Interface: Test

Defined in: [types.ts:129](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L129)

Individual test result

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [types.ts:131](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L131)

Deprecated test-case identifier (UUID), scheduled for removal in CTRF 1.0.0; prefer optional testId

***

### testId?

> `optional` **testId?**: `string`

Defined in: [types.ts:133](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L133)

Stable test-case identifier across runs within the producer's documented scope

***

### executionId?

> `optional` **executionId?**: `string`

Defined in: [types.ts:135](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L135)

Identifier for one test-case execution lifecycle within a run, including coordinated retries

***

### attemptId?

> `optional` **attemptId?**: `string`

Defined in: [types.ts:137](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L137)

Identifier for this individual attempt

***

### name

> **name**: `string`

Defined in: [types.ts:139](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L139)

Test name

***

### description?

> `optional` **description?**: `string`

Defined in: [types.ts:141](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L141)

Human-readable description of the test case

***

### status

> **status**: [`TestStatus`](../type-aliases/TestStatus.md)

Defined in: [types.ts:143](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L143)

Test execution status

***

### duration

> **duration**: `number`

Defined in: [types.ts:145](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L145)

Duration of the final attempt in milliseconds, excluding earlier attempts

***

### start?

> `optional` **start?**: `number`

Defined in: [types.ts:147](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L147)

Start timestamp (Unix epoch milliseconds)

***

### stop?

> `optional` **stop?**: `number`

Defined in: [types.ts:149](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L149)

Stop timestamp (Unix epoch milliseconds)

***

### suite?

> `optional` **suite?**: `string`[]

Defined in: [types.ts:151](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L151)

Test suite hierarchy

***

### message?

> `optional` **message?**: `string`

Defined in: [types.ts:153](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L153)

Error message (for failed tests)

***

### trace?

> `optional` **trace?**: `string`

Defined in: [types.ts:155](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L155)

Stack trace (for failed tests)

***

### assertionFailures?

> `optional` **assertionFailures?**: [`AssertionFailure`](AssertionFailure.md)[]

Defined in: [types.ts:157](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L157)

Assertion failures attributable to the final attempt

***

### snippet?

> `optional` **snippet?**: `string`

Defined in: [types.ts:159](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L159)

Code snippet where failure occurred

***

### ai?

> `optional` **ai?**: `string`

Defined in: [types.ts:161](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L161)

AI-generated analysis or suggestion

***

### line?

> `optional` **line?**: `number`

Defined in: [types.ts:163](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L163)

Line number where test is defined or failed

***

### rawStatus?

> `optional` **rawStatus?**: `string`

Defined in: [types.ts:165](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L165)

Original status from the test framework

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [types.ts:167](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L167)

Tags for categorization

***

### labels?

> `optional` **labels?**: `Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

Defined in: [types.ts:169](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L169)

Structured key-value metadata; values may be scalar or multi-valued

***

### type?

> `optional` **type?**: `string`

Defined in: [types.ts:171](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L171)

Test type (e.g., 'unit', 'integration', 'e2e')

***

### filePath?

> `optional` **filePath?**: `string`

Defined in: [types.ts:173](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L173)

Path to the test file

***

### retries?

> `optional` **retries?**: `number`

Defined in: [types.ts:175](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L175)

Number of times the test was re-executed after its initial attempt

***

### retryAttempts?

> `optional` **retryAttempts?**: [`AttemptHistoryEntry`](AttemptHistoryEntry.md)[]

Defined in: [types.ts:177](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L177)

Ordered history of attempts completed before the final attempt

***

### flaky?

> `optional` **flaky?**: `boolean`

Defined in: [types.ts:179](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L179)

Whether the test is flaky

***

### stdout?

> `optional` **stdout?**: `string`[]

Defined in: [types.ts:181](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L181)

Standard output captured during test

***

### stderr?

> `optional` **stderr?**: `string`[]

Defined in: [types.ts:183](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L183)

Standard error captured during test

***

### threadId?

> `optional` **threadId?**: `string`

Defined in: [types.ts:185](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L185)

Thread or worker that executed the final attempt; qualify across processes or hosts

***

### browser?

> `optional` **browser?**: `string`

Defined in: [types.ts:187](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L187)

Browser name (for browser tests)

***

### device?

> `optional` **device?**: `string`

Defined in: [types.ts:189](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L189)

Device name (for device tests)

***

### screenshot?

> `optional` **screenshot?**: `string`

Defined in: [types.ts:191](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L191)

Base64 encoded screenshot

***

### attachments?

> `optional` **attachments?**: [`Attachment`](Attachment.md)[]

Defined in: [types.ts:193](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L193)

File attachments

***

### parameters?

> `optional` **parameters?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:195](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L195)

Test parameters (for parameterized tests)

***

### steps?

> `optional` **steps?**: [`Step`](Step.md)[]

Defined in: [types.ts:197](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L197)

Test steps

***

### insights?

> `optional` **insights?**: [`TestInsights`](TestInsights.md)

Defined in: [types.ts:199](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L199)

Test-level insights

***

### extra?

> `optional` **extra?**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:201](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L201)

Custom metadata
