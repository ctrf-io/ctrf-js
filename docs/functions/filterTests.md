[**CTRF**](../README.md)

***

[CTRF](../globals.md) / filterTests

# Function: filterTests()

> **filterTests**(`report`, `criteria`): [`Test`](../interfaces/Test.md)[]

Defined in: [filter.ts:29](https://github.com/ctrf-io/ctrf-js/blob/main/src/filter.ts#L29)

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The CTRF report containing tests to filter

### criteria

[`FilterCriteria`](../interfaces/FilterCriteria.md)

Filter criteria (status, tags, suite, flaky, browser, device)

## Returns

[`Test`](../interfaces/Test.md)[]

Array of tests matching all specified criteria

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
