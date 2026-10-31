[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestBuilder

# Class: TestBuilder

Defined in: [builder.ts:278](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L278)

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

Defined in: [builder.ts:316](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L316)

#### Parameters

##### options?

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:322](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L322)

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

Defined in: [builder.ts:330](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L330)

Set the stable logical test case ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### executionId()

> **executionId**(`id`): `this`

Defined in: [builder.ts:338](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L338)

Set the identifier for this specific test execution.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### attemptId()

> **attemptId**(`id`): `this`

Defined in: [builder.ts:346](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L346)

Set the attempt ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:357](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L357)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### description()

> **description**(`description`): `this`

Defined in: [builder.ts:365](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L365)

Set the human-readable test-case description.

#### Parameters

##### description

`string`

#### Returns

`this`

***

### addAssertionFailure()

> **addAssertionFailure**(`failure`): `this`

Defined in: [builder.ts:373](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L373)

Add an assertion failure attributable to the final attempt.

#### Parameters

##### failure

[`AssertionFailure`](../interfaces/AssertionFailure.md)

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:381](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L381)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:389](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L389)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:397](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L397)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:405](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L405)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:413](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L413)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:421](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L421)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:429](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L429)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:437](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L437)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:445](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L445)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:453](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L453)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:461](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L461)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:469](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L469)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### labels()

> **labels**(`labels`): `this`

Defined in: [builder.ts:477](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L477)

Set structured labels.

#### Parameters

##### labels

`Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:485](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L485)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:493](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L493)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:501](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L501)

Set the number of times the test was re-executed after its initial attempt.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### addAttemptHistoryEntry()

> **addAttemptHistoryEntry**(`attempt`): `this`

Defined in: [builder.ts:513](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L513)

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

Defined in: [builder.ts:526](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L526)

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

Defined in: [builder.ts:533](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L533)

Mark as flaky.

#### Parameters

##### isFlaky?

`boolean` = `true`

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:541](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L541)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:549](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L549)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:557](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L557)

Set the thread or worker that executed the final attempt.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:565](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L565)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:573](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L573)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:581](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L581)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:589](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L589)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:600](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L600)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:608](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L608)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:619](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L619)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:627](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L627)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:636](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L636)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing
