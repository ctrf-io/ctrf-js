[**CTRF**](../README.md)

***

[CTRF](../globals.md) / CTRFReport

# Interface: CTRFReport

Defined in: [types.ts:15](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L15)

The root CTRF report object

## Properties

### reportFormat

> **reportFormat**: `"CTRF"`

Defined in: [types.ts:17](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L17)

Must be 'CTRF'

***

### specVersion

> **specVersion**: `string`

Defined in: [types.ts:19](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L19)

Semantic version of the CTRF specification

***

### reportId?

> `optional` **reportId**: `string`

Defined in: [types.ts:21](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L21)

Unique identifier for this report (UUID v4)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: [types.ts:23](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L23)

ISO 8601 timestamp when the report was generated

***

### generatedBy?

> `optional` **generatedBy**: `string`

Defined in: [types.ts:25](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L25)

Name of the tool/library that generated this report

***

### results

> **results**: [`Results`](Results.md)

Defined in: [types.ts:27](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L27)

The test results

***

### insights?

> `optional` **insights**: [`Insights`](Insights.md)

Defined in: [types.ts:29](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L29)

Run-level insights computed from historical data

***

### baseline?

> `optional` **baseline**: [`Baseline`](Baseline.md)

Defined in: [types.ts:31](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L31)

Reference to a baseline report for comparison

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: [types.ts:33](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L33)

Custom metadata
