[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ReportBuilder

# Class: ReportBuilder

Defined in: [builder.ts:50](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L50)

## Example

```typescript
const report = new ReportBuilder()
  .specVersion('1.0.0')
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

Defined in: [builder.ts:64](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L64)

#### Parameters

##### options?

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### specVersion()

> **specVersion**(`version`): `this`

Defined in: [builder.ts:76](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L76)

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: [builder.ts:85](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L85)

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

Defined in: [builder.ts:93](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L93)

Set the logical test run ID shared across related CTRF documents.

#### Parameters

##### id

`string`

#### Returns

`this`

***

### timestamp()

> **timestamp**(`date?`): `this`

Defined in: [builder.ts:102](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L102)

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

Defined in: [builder.ts:116](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L116)

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### tool()

> **tool**(`tool`): `this`

Defined in: [builder.ts:124](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L124)

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`

***

### environment()

> **environment**(`env`): `this`

Defined in: [builder.ts:132](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L132)

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### addTest()

> **addTest**(`test`): `this`

Defined in: [builder.ts:140](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L140)

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: [builder.ts:148](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L148)

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:156](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L156)

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: [builder.ts:164](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L164)

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:172](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L172)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: [builder.ts:181](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L181)

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

Defined in: [builder.ts:190](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L190)

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing
