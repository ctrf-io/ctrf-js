[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / CTRFReport

# Interface: CTRFReport

Defined in: [src/reference/types.ts:13](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L13)

The root CTRF report object

## Properties

### baseline?

> `optional` **baseline**: [`Baseline`](Baseline.md)

Defined in: [src/reference/types.ts:29](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L29)

Reference to a baseline report for comparison

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [src/reference/types.ts:31](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L31)

Custom metadata

***

### generatedBy?

> `optional` **generatedBy**: `string`

Defined in: [src/reference/types.ts:23](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L23)

Name of the tool/library that generated this report

***

### insights?

> `optional` **insights**: [`Insights`](Insights.md)

Defined in: [src/reference/types.ts:27](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L27)

Run-level insights computed from historical data

***

### reportFormat

> **reportFormat**: `"CTRF"`

Defined in: [src/reference/types.ts:15](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L15)

Must be 'CTRF'

***

### reportId?

> `optional` **reportId**: `string`

Defined in: [src/reference/types.ts:19](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L19)

Unique identifier for this report (UUID v4)

***

### results

> **results**: [`Results`](Results.md)

Defined in: [src/reference/types.ts:25](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L25)

The test results

***

### specVersion

> **specVersion**: `string`

Defined in: [src/reference/types.ts:17](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L17)

Semantic version of the CTRF specification

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: [src/reference/types.ts:21](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/types.ts#L21)

ISO 8601 timestamp when the report was generated
