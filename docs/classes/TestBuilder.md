[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestBuilder

# Class: TestBuilder

Defined in: [builder.ts:265](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L265)

## Example

```typescript
const test = new TestBuilder()
  .name('should add numbers')
  .status('passed')
  .duration(150)
  .suite(['math', 'addition'])
  .build();
```

## Constructors

### Constructor

> **new TestBuilder**(`options?`): `TestBuilder`

Defined in: [builder.ts:301](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L301)

#### Parameters

##### options?

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:307](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L307)

Set or generate the test ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate based on properties

#### Returns

`this`

***

### testId()

> **testId**(`id`): `this`

Defined in: [builder.ts:315](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L315)

Set the stable logical test case ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### executionId()

> **executionId**(`id`): `this`

Defined in: [builder.ts:323](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L323)

Set the identifier for this specific test execution.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### attemptId()

> **attemptId**(`id`): `this`

Defined in: [builder.ts:331](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L331)

Set the attempt ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:342](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L342)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:350](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L350)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:358](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L358)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:366](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L366)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:374](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L374)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:382](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L382)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:390](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L390)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:398](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L398)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:406](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L406)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:414](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L414)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:422](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L422)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:430](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L430)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:438](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L438)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### labels()

> **labels**(`labels`): `this`

Defined in: [builder.ts:446](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L446)

Set structured labels.

#### Parameters

##### labels

`Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:454](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L454)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:462](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L462)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:470](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L470)

Set the number of times the test was re-executed after its initial attempt.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### addAttemptHistoryEntry()

> **addAttemptHistoryEntry**(`attempt`): `this`

Defined in: [builder.ts:482](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L482)

Add an attempt completed before the final attempt.

Entries must be added in their original contiguous sequence, beginning at
attempt 1. When `.retries()` is omitted, the builder derives it from the
number of history entries.

#### Parameters

##### attempt

[`AttemptHistoryEntry`](../interfaces/AttemptHistoryEntry.md)

#### Returns

`this`

***

### ~~addRetryAttempt()~~

> **addRetryAttempt**(`attempt`): `this`

Defined in: [builder.ts:495](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L495)

Backward-compatible alias for [addAttemptHistoryEntry](#addattempthistoryentry).

#### Parameters

##### attempt

[`AttemptHistoryEntry`](../interfaces/AttemptHistoryEntry.md)

#### Returns

`this`

#### Deprecated

Use `addAttemptHistoryEntry()`.

***

### flaky()

> **flaky**(`isFlaky?`): `this`

Defined in: [builder.ts:502](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L502)

Mark as flaky.

#### Parameters

##### isFlaky?

`boolean` = `true`

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:510](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L510)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:518](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L518)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:526](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L526)

Set thread ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:534](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L534)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:542](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L542)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:550](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L550)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:558](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L558)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:569](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L569)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:577](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L577)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:588](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L588)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:596](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L596)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:605](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L605)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing
