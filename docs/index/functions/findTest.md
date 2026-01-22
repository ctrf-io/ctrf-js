[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / findTest

# Function: findTest()

> **findTest**(`report`, `criteria`): `undefined` \| [`Test`](../interfaces/Test.md)

Defined in: [src/reference/filter.ts:50](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/filter.ts#L50)

Find a single test in a report.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The report to search

### criteria

`object` & [`FilterCriteria`](../interfaces/FilterCriteria.md)

Search criteria (id, name, or filter criteria)

## Returns

`undefined` \| [`Test`](../interfaces/Test.md)

The first matching test, or undefined

## Example

```typescript
// Find by ID
const test = findTest(report, { id: 'uuid' });

// Find by name
const test = findTest(report, { name: 'should login' });
```
