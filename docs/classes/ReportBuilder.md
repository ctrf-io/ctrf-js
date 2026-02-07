[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ReportBuilder

# Class: ReportBuilder

Defined in: [builder.ts:49](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L49)

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

> **new ReportBuilder**(`options`): `ReportBuilder`

Defined in: [builder.ts:62](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L62)

#### Parameters

##### options

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### specVersion()

> **specVersion**(`version`): `this`

Defined in: [builder.ts:74](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L74)

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: [builder.ts:83](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L83)

Set or generate the report ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate

#### Returns

`this`

***

### timestamp()

> **timestamp**(`date?`): `this`

Defined in: [builder.ts:92](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L92)

Set the timestamp.

#### Parameters

##### date?

Date to use, or undefined for current time

`string` | `Date`

#### Returns

`this`

***

### generatedBy()

> **generatedBy**(`name`): `this`

Defined in: [builder.ts:106](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L106)

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### tool()

> **tool**(`tool`): `this`

Defined in: [builder.ts:114](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L114)

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`

***

### environment()

> **environment**(`env`): `this`

Defined in: [builder.ts:122](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L122)

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### addTest()

> **addTest**(`test`): `this`

Defined in: [builder.ts:130](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L130)

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: [builder.ts:138](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L138)

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [builder.ts:146](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L146)

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: [builder.ts:154](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L154)

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [builder.ts:162](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L162)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: [builder.ts:171](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L171)

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

Defined in: [builder.ts:180](https://github.com/ctrf-io/ctrf-js/blob/main/src/builder.ts#L180)

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing
