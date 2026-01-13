[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / filterTests

# Function: filterTests()

> **filterTests**(`report`, `criteria`): [`Test`](../interfaces/Test.md)[]

Defined in: [src/reference/filter.ts:27](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/filter.ts#L27)

Filter tests in a report by criteria.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The report to filter

### criteria

[`FilterCriteria`](../interfaces/FilterCriteria.md)

Filter criteria

## Returns

[`Test`](../interfaces/Test.md)[]

Array of tests matching the criteria

## Example

```typescript
// Filter by status
const failed = filterTests(report, { status: 'failed' });

// Filter by multiple criteria
const filtered = filterTests(report, {
  status: ['failed', 'skipped'],
  tags: ['smoke'],
  flaky: true
});
```
