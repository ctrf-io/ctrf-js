[**CTRF**](../README.md)

***

[CTRF](../README.md) / TestBuilder

# Class: TestBuilder

Defined in: [builder.ts:247](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L247)

Fluent builder for constructing Test objects.

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

Defined in: [builder.ts:279](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L279)

#### Parameters

##### options

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:488](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L488)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### addRetryAttempt()

> **addRetryAttempt**(`attempt`): `this`

Defined in: [builder.ts:421](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L421)

Add a retry attempt.

#### Parameters

##### attempt

[`RetryAttempt`](../interfaces/RetryAttempt.md)

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:507](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L507)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:365](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L365)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:464](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L464)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:535](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L535)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:472](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L472)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:309](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L309)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:526](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L526)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:405](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L405)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### flaky()

> **flaky**(`isFlaky`): `this`

Defined in: [builder.ts:432](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L432)

Mark as flaky.

#### Parameters

##### isFlaky

`boolean` = `true`

#### Returns

`this`

***

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:285](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L285)

Set or generate the test ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate based on properties

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:518](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L518)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:373](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L373)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:341](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L341)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:293](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L293)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:499](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L499)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:381](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L381)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:413](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L413)

Set retry count.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:480](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L480)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:357](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L357)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:317](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L317)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:301](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L301)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:448](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L448)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:440](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L440)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:325](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L325)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:333](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L333)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:389](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L389)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:456](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L456)

Set thread ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:349](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L349)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:397](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L397)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`
