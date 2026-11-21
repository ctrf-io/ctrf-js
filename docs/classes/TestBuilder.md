[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestBuilder

# Class: TestBuilder

Defined in: [builder.ts:288](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L288)

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

Defined in: [builder.ts:326](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L326)

#### Parameters

##### options?

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:332](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L332)

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

Defined in: [builder.ts:340](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L340)

Set the stable logical test case ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### executionId()

> **executionId**(`id`): `this`

Defined in: [builder.ts:348](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L348)

Set the identifier for this specific test execution.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### attemptId()

> **attemptId**(`id`): `this`

Defined in: [builder.ts:356](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L356)

Set the attempt ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:367](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L367)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### description()

> **description**(`description`): `this`

Defined in: [builder.ts:375](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L375)

Set the human-readable test-case description.

#### Parameters

##### description

`string`

#### Returns

`this`

***

### addAssertionFailure()

> **addAssertionFailure**(`failure`): `this`

Defined in: [builder.ts:383](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L383)

Add an assertion failure attributable to the final attempt.

#### Parameters

##### failure

[`AssertionFailure`](../interfaces/AssertionFailure.md)

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:391](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L391)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:399](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L399)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:407](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L407)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:415](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L415)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:423](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L423)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:431](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L431)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:439](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L439)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:447](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L447)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:455](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L455)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:463](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L463)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:471](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L471)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:479](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L479)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### labels()

> **labels**(`labels`): `this`

Defined in: [builder.ts:487](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L487)

Set structured labels.

#### Parameters

##### labels

`Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:495](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L495)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:503](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L503)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:511](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L511)

Set the number of times the test was re-executed after its initial attempt.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### addAttemptHistoryEntry()

> **addAttemptHistoryEntry**(`attempt`): `this`

Defined in: [builder.ts:523](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L523)

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

Defined in: [builder.ts:536](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L536)

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

Defined in: [builder.ts:543](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L543)

Mark as flaky.

#### Parameters

##### isFlaky?

`boolean` = `true`

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:551](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L551)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:559](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L559)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:567](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L567)

Set the thread or worker that executed the final attempt.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:575](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L575)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:583](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L583)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:591](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L591)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:599](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L599)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:610](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L610)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:618](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L618)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:629](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L629)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:637](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L637)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:646](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L646)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing
