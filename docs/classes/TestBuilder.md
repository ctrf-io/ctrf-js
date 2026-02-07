[**CTRF**](../README.md)

***

[CTRF](../globals.md) / TestBuilder

# Class: TestBuilder

Defined in: [builder.ts:251](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L251)

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

> **new TestBuilder**(`options`): `TestBuilder`

Defined in: [builder.ts:283](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L283)

#### Parameters

##### options

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:289](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L289)

Set or generate the test ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate based on properties

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:297](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L297)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:305](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L305)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:313](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L313)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:321](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L321)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:329](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L329)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:337](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L337)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:345](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L345)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:353](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L353)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:361](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L361)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:369](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L369)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:377](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L377)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:385](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L385)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:393](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L393)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:401](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L401)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:409](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L409)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:417](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L417)

Set retry count.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### addRetryAttempt()

> **addRetryAttempt**(`attempt`): `this`

Defined in: [builder.ts:425](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L425)

Add a retry attempt.

#### Parameters

##### attempt

[`RetryAttempt`](../interfaces/RetryAttempt.md)

#### Returns

`this`

***

### flaky()

> **flaky**(`isFlaky`): `this`

Defined in: [builder.ts:436](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L436)

Mark as flaky.

#### Parameters

##### isFlaky

`boolean` = `true`

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:444](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L444)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:452](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L452)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:460](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L460)

Set thread ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:468](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L468)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:476](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L476)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:484](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L484)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:492](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L492)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:503](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L503)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:511](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L511)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:522](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L522)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:530](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L530)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:539](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L539)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing
