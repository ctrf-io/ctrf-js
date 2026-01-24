[**CTRF**](../README.md)

***

[CTRF](../README.md) / findTest

# Function: findTest()

> **findTest**(`report`, `criteria`): `undefined` \| [`Test`](../interfaces/Test.md)

Defined in: [filter.ts:53](https://github.com/ctrf-io/ctrf-js/blob/main/src/filter.ts#L53)

Find a single test in a report.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The CTRF report to search

### criteria

[`FilterCriteria`](../interfaces/FilterCriteria.md)

Filter criteria including id, name, status, tags, etc.

## Returns

`undefined` \| [`Test`](../interfaces/Test.md)

The first matching test, or undefined if not found

## Example

```typescript
// Find by ID
const test = findTest(report, { id: 'uuid' });

// Find by name
const test = findTest(report, { name: 'should login' });

// Find by multiple criteria
const test = findTest(report, { status: 'failed', flaky: true });
```
