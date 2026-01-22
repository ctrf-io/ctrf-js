[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / mergeReportsV2

# Function: mergeReportsV2()

> **mergeReportsV2**(`reports`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [src/reference/merge.ts:35](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/merge.ts#L35)

Merge multiple CTRF reports into a single report.
Useful for combining results from parallel/sharded test runs.

## Parameters

### reports

[`CTRFReport`](../interfaces/CTRFReport.md)[]

Array of reports to merge

### options

[`MergeOptions`](../interfaces/MergeOptions.md) = `{}`

Merge options

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

Merged report

## Example

```typescript
const merged = mergeReports([report1, report2, report3]);

// With deduplication
const merged = mergeReports(reports, { deduplicateTests: true });

// Keep first environment only
const merged = mergeReports(reports, { preserveEnvironment: 'first' });
```
