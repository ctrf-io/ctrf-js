[**CTRF**](../README.md)

***

[CTRF](../README.md) / ReportBuilder

# Class: ReportBuilder

Defined in: builder.ts:47

Fluent builder for constructing CTRF reports.

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

Defined in: builder.ts:60

#### Parameters

##### options

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### addTest()

> **addTest**(`test`): `this`

Defined in: builder.ts:128

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: builder.ts:136

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: builder.ts:152

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### build()

> **build**(): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: builder.ts:178

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing

***

### environment()

> **environment**(`env`): `this`

Defined in: builder.ts:120

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: builder.ts:160

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### generatedBy()

> **generatedBy**(`name`): `this`

Defined in: builder.ts:104

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: builder.ts:144

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: builder.ts:81

Set or generate the report ID.

#### Parameters

##### uuid?

`string`

UUID to use, or undefined to auto-generate

#### Returns

`this`

***

### specVersion()

> **specVersion**(`version`): `this`

Defined in: builder.ts:72

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: builder.ts:169

Override specific summary fields.
Useful when you want to set specific timing or counts.

#### Parameters

##### overrides

`Partial`\<[`Summary`](../interfaces/Summary.md)\>

#### Returns

`this`

***

### timestamp()

> **timestamp**(`date?`): `this`

Defined in: builder.ts:90

Set the timestamp.

#### Parameters

##### date?

Date to use, or undefined for current time

`string` | `Date`

#### Returns

`this`

***

### tool()

> **tool**(`tool`): `this`

Defined in: builder.ts:112

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`
