[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / ReportBuilder

# Class: ReportBuilder

Defined in: [src/reference/builder.ts:47](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L47)

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

Defined in: [src/reference/builder.ts:60](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L60)

#### Parameters

##### options

[`ReportBuilderOptions`](../interfaces/ReportBuilderOptions.md) = `{}`

#### Returns

`ReportBuilder`

## Methods

### addTest()

> **addTest**(`test`): `this`

Defined in: [src/reference/builder.ts:128](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L128)

Add a single test.

#### Parameters

##### test

[`Test`](../interfaces/Test.md)

#### Returns

`this`

***

### addTests()

> **addTests**(`tests`): `this`

Defined in: [src/reference/builder.ts:136](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L136)

Add multiple tests.

#### Parameters

##### tests

[`Test`](../interfaces/Test.md)[]

#### Returns

`this`

***

### baseline()

> **baseline**(`baseline`): `this`

Defined in: [src/reference/builder.ts:152](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L152)

Set the baseline reference.

#### Parameters

##### baseline

[`Baseline`](../interfaces/Baseline.md)

#### Returns

`this`

***

### build()

> **build**(): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [src/reference/builder.ts:178](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L178)

Build and return the CTRF report.

#### Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

#### Throws

BuilderError if required fields are missing

***

### environment()

> **environment**(`env`): `this`

Defined in: [src/reference/builder.ts:120](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L120)

Set the environment information.

#### Parameters

##### env

[`Environment`](../interfaces/Environment.md)

#### Returns

`this`

***

### extra()

> **extra**(`data`): `this`

Defined in: [src/reference/builder.ts:160](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L160)

Set extra metadata.

#### Parameters

##### data

`Record`\<`string`, `unknown`\>

#### Returns

`this`

***

### generatedBy()

> **generatedBy**(`name`): `this`

Defined in: [src/reference/builder.ts:104](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L104)

Set the generator name.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### insights()

> **insights**(`insights`): `this`

Defined in: [src/reference/builder.ts:144](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L144)

Set run-level insights.

#### Parameters

##### insights

[`Insights`](../interfaces/Insights.md)

#### Returns

`this`

***

### reportId()

> **reportId**(`uuid?`): `this`

Defined in: [src/reference/builder.ts:81](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L81)

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

Defined in: [src/reference/builder.ts:72](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L72)

Set the spec version.

#### Parameters

##### version

`string`

#### Returns

`this`

***

### summaryOverrides()

> **summaryOverrides**(`overrides`): `this`

Defined in: [src/reference/builder.ts:169](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L169)

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

Defined in: [src/reference/builder.ts:90](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L90)

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

Defined in: [src/reference/builder.ts:112](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/builder.ts#L112)

Set the tool information.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`this`
