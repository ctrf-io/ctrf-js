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

Defined in: [builder.ts:300](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L300)

#### Parameters

##### options?

[`TestBuilderOptions`](../interfaces/TestBuilderOptions.md) = `{}`

#### Returns

`TestBuilder`

## Methods

### id()

> **id**(`uuid?`): `this`

Defined in: [builder.ts:306](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L306)

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

Defined in: [builder.ts:314](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L314)

Set the stable logical test case ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### executionId()

> **executionId**(`id`): `this`

Defined in: [builder.ts:322](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L322)

Set the identifier for this specific test execution.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### name()

> **name**(`name`): `this`

Defined in: [builder.ts:330](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L330)

Set the test name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### status()

> **status**(`status`): `this`

Defined in: [builder.ts:338](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L338)

Set the test status.

#### Parameters

##### status

[`TestStatus`](../type-aliases/TestStatus.md)

#### Returns

`this`

***

### duration()

> **duration**(`ms`): `this`

Defined in: [builder.ts:346](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L346)

Set the duration in milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

***

### start()

> **start**(`timestamp`): `this`

Defined in: [builder.ts:354](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L354)

Set the start timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### stop()

> **stop**(`timestamp`): `this`

Defined in: [builder.ts:362](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L362)

Set the stop timestamp.

#### Parameters

##### timestamp

`number`

#### Returns

`this`

***

### suite()

> **suite**(`suites`): `this`

Defined in: [builder.ts:370](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L370)

Set the suite hierarchy.

#### Parameters

##### suites

`string`[]

#### Returns

`this`

***

### message()

> **message**(`msg`): `this`

Defined in: [builder.ts:378](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L378)

Set the error message.

#### Parameters

##### msg

`string`

#### Returns

`this`

***

### trace()

> **trace**(`trace`): `this`

Defined in: [builder.ts:386](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L386)

Set the stack trace.

#### Parameters

##### trace

`string`

#### Returns

`this`

***

### snippet()

> **snippet**(`code`): `this`

Defined in: [builder.ts:394](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L394)

Set the code snippet.

#### Parameters

##### code

`string`

#### Returns

`this`

***

### ai()

> **ai**(`analysis`): `this`

Defined in: [builder.ts:402](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L402)

Set AI-generated analysis.

#### Parameters

##### analysis

`string`

#### Returns

`this`

***

### line()

> **line**(`num`): `this`

Defined in: [builder.ts:410](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L410)

Set the line number.

#### Parameters

##### num

`number`

#### Returns

`this`

***

### rawStatus()

> **rawStatus**(`status`): `this`

Defined in: [builder.ts:418](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L418)

Set the raw status from the test framework.

#### Parameters

##### status

`string`

#### Returns

`this`

***

### tags()

> **tags**(`tags`): `this`

Defined in: [builder.ts:426](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L426)

Set tags.

#### Parameters

##### tags

`string`[]

#### Returns

`this`

***

### labels()

> **labels**(`labels`): `this`

Defined in: [builder.ts:434](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L434)

Set structured labels.

#### Parameters

##### labels

`Record`\<`string`, [`LabelValue`](../type-aliases/LabelValue.md)\>

#### Returns

`this`

***

### type()

> **type**(`type`): `this`

Defined in: [builder.ts:442](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L442)

Set test type.

#### Parameters

##### type

`string`

#### Returns

`this`

***

### filePath()

> **filePath**(`path`): `this`

Defined in: [builder.ts:450](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L450)

Set file path.

#### Parameters

##### path

`string`

#### Returns

`this`

***

### retries()

> **retries**(`count`): `this`

Defined in: [builder.ts:458](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L458)

Set retry count.

#### Parameters

##### count

`number`

#### Returns

`this`

***

### addRetryAttempt()

> **addRetryAttempt**(`attempt`): `this`

Defined in: [builder.ts:466](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L466)

Add a retry attempt.

#### Parameters

##### attempt

[`RetryAttempt`](../interfaces/RetryAttempt.md)

#### Returns

`this`

***

### flaky()

> **flaky**(`isFlaky?`): `this`

Defined in: [builder.ts:477](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L477)

Mark as flaky.

#### Parameters

##### isFlaky?

`boolean` = `true`

#### Returns

`this`

***

### stdout()

> **stdout**(`lines`): `this`

Defined in: [builder.ts:485](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L485)

Set stdout.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### stderr()

> **stderr**(`lines`): `this`

Defined in: [builder.ts:493](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L493)

Set stderr.

#### Parameters

##### lines

`string`[]

#### Returns

`this`

***

### threadId()

> **threadId**(`id`): `this`

Defined in: [builder.ts:501](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L501)

Set thread ID.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### browser()

> **browser**(`name`): `this`

Defined in: [builder.ts:509](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L509)

Set browser name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### device()

> **device**(`name`): `this`

Defined in: [builder.ts:517](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L517)

Set device name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### screenshot()

> **screenshot**(`base64`): `this`

Defined in: [builder.ts:525](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L525)

Set screenshot (base64).

#### Parameters

##### base64

`string`

#### Returns

`this`

***

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: [builder.ts:533](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L533)

Add an attachment.

#### Parameters

##### attachment

[`Attachment`](../interfaces/Attachment.md)

#### Returns

`this`

***

### parameters()

> **parameters**(`params`): `this`

Defined in: [builder.ts:544](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L544)

Set parameters.

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### addStep()

> **addStep**(`step`): `this`

Defined in: [builder.ts:552](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L552)

Add a step.

#### Parameters

##### step

[`Step`](../interfaces/Step.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:563](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L563)

Set test-level insights.

#### Parameters

##### insights

[`TestInsights`](../interfaces/TestInsights.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:571](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L571)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### build()

> **build**(): [`Test`](../interfaces/Test.md)

Defined in: [builder.ts:580](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L580)

Build and return the Test object.

#### Returns

[`Test`](../interfaces/Test.md)

#### Throws

BuilderError if required fields are missing
