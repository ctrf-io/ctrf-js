[**CTRF**](../README.md)

***

[CTRF](../README.md) / CTRFReport

# Interface: CTRFReport

Defined in: types.ts:13

The root CTRF report object

## Properties

### baseline?

> `optional` **baseline**: [`Baseline`](Baseline.md)

Defined in: types.ts:29

Reference to a baseline report for comparison

***

### extra?

> `optional` **extra**: `Record`\<`string`, `unknown`\>

Defined in: types.ts:31

Custom metadata

***

### generatedBy?

> `optional` **generatedBy**: `string`

Defined in: types.ts:23

Name of the tool/library that generated this report

***

### insights?

> `optional` **insights**: [`Insights`](Insights.md)

Defined in: types.ts:27

Run-level insights computed from historical data

***

### reportFormat

> **reportFormat**: `"CTRF"`

Defined in: types.ts:15

Must be 'CTRF'

***

### reportId?

> `optional` **reportId**: `string`

Defined in: types.ts:19

Unique identifier for this report (UUID v4)

***

### results

> **results**: [`Results`](Results.md)

Defined in: types.ts:25

The test results

***

### specVersion

> **specVersion**: `string`

Defined in: types.ts:17

Semantic version of the CTRF specification

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: types.ts:21

ISO 8601 timestamp when the report was generated
