[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ReportBuilder

# Class: ReportBuilder

Defined in: [builder.ts:53](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L53)

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

Defined in: [builder.ts:69](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L69)

#### Parameters

##### options?

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### specVersion()

> **specVersion**(`version`): `this`

Defined in: [builder.ts:81](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L81)

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: [builder.ts:90](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L90)

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

Defined in: [builder.ts:98](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L98)

Set the logical test run ID shared across related CTRF documents.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### timestamp()

> **timestamp**(`date?`): `this`

Defined in: [builder.ts:107](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L107)

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

Defined in: [builder.ts:121](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L121)

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### tool()

> **tool**(`tool`): `this`

Defined in: [builder.ts:129](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L129)

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`

***

### environment()

> **environment**(`env`): `this`

Defined in: [builder.ts:137](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L137)

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### addTest()

> **addTest**(`test`): `this`

Defined in: [builder.ts:145](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L145)

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: [builder.ts:153](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L153)

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### addError()

> **addError**(`error`): `this`

Defined in: [builder.ts:161](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L161)

Add a global error without changing test counts.

#### Parameters

##### error

[`GlobalError`](../interfaces/GlobalError.md)

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:169](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L169)

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: [builder.ts:177](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L177)

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### provenance()

> **provenance**(`provenance`): `this`

Defined in: [builder.ts:183](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L183)

Set direct report provenance.

#### Parameters

##### provenance

[`Provenance`](../interfaces/Provenance.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:191](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L191)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: [builder.ts:200](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L200)

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

Defined in: [builder.ts:209](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L209)

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing
