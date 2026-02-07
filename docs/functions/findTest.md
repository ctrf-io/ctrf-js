[**CTRF**](../README.md)

***

[CTRF](../globals.md) / findTest

# Function: findTest()

> **findTest**(`report`, `criteria`): `undefined` \| [`Test`](../interfaces/Test.md)

Defined in: [filter.ts:57](https://github.com/ctrf-io/ctrf-js/blob/main/src/filter.ts#L57)

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
