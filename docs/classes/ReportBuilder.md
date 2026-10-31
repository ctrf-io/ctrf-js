[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ReportBuilder

# Class: ReportBuilder

Defined in: [builder.ts:52](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L52)

## Example

```typescript
const report = new ReportBuilder()
  .specVersion('0.1.0')
  .tool({ name: 'jest', version: '29.0.0' })
  .environment({ branchName: 'main' })
  .addTest(
    new TestBuilder()
      .name('should add numbers')
      .status('passed')
      .duration(150)
      .build()
  )
  .build();
```

## Constructors

### Constructor

> **new ReportBuilder**(`options?`): `ReportBuilder`

Defined in: [builder.ts:67](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L67)

#### Parameters

##### options?

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### specVersion()

> **specVersion**(`version`): `this`

Defined in: [builder.ts:79](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L79)

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: [builder.ts:88](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L88)

Set or generate the report ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate

#### Returns

`this`

***

### runId()

> **runId**(`id`): `this`

Defined in: [builder.ts:96](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L96)

Set the logical test run ID shared across related CTRF documents.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### timestamp()

> **timestamp**(`date?`): `this`

Defined in: [builder.ts:105](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L105)

Set the timestamp.

#### Parameters

##### date?

`string` \| `Date`

Date to use, or undefined for current time

#### Returns

`this`

***

### generatedBy()

> **generatedBy**(`name`): `this`

Defined in: [builder.ts:119](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L119)

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### tool()

> **tool**(`tool`): `this`

Defined in: [builder.ts:127](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L127)

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`

***

### environment()

> **environment**(`env`): `this`

Defined in: [builder.ts:135](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L135)

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### addTest()

> **addTest**(`test`): `this`

Defined in: [builder.ts:143](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L143)

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: [builder.ts:151](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L151)

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### addError()

> **addError**(`error`): `this`

Defined in: [builder.ts:159](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L159)

Add a global error without changing test counts.

#### Parameters

##### error

[`GlobalError`](../interfaces/GlobalError.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:167](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L167)

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: [builder.ts:175](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L175)

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:183](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L183)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: [builder.ts:192](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L192)

Override specific summary fields.
Useful when you want to set specific timing or counts.

#### Parameters

##### overrides

`Partial`\<[`Summary`](../interfaces/Summary.md)\>

#### Returns

`this`

***

### build()

> **build**(): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [builder.ts:201](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L201)

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing
