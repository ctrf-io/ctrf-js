[**CTRF**](../README.md)

***

[CTRF](../globals.md) / merge

# Function: merge()

> **merge**(`reports`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [merge.ts:38](https://github.com/ctrf-io/ctrf-js/blob/main/src/merge.ts#L38)

## Parameters

### reports

[`CTRFReport`](../interfaces/CTRFReport.md)[]

Array of CTRF reports to merge

### options

[`MergeOptions`](../interfaces/MergeOptions.md) = `{}`

Merge options (deduplication, environment handling)

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

A new merged CTRFReport

## Throws

Error if no reports are provided

## Example

```typescript
const merged = merge([report1, report2, report3]);

// With deduplication by test ID
const merged = merge(reports, { deduplicateTests: true });

// Keep first environment only
const merged = merge(reports, { preserveEnvironment: 'first' });
```
