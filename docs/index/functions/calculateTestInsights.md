[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / calculateTestInsights

# Function: calculateTestInsights()

> **calculateTestInsights**(`reports`, `testId`): [`TestInsights`](../interfaces/TestInsights.md)

Defined in: [src/reference/insights.ts:891](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/insights.ts#L891)

Calculate insights for a specific test across multiple reports.

## Parameters

### reports

[`CTRFReport`](../interfaces/CTRFReport.md)[]

Array of historical reports

### testId

`string`

The test ID to calculate insights for

## Returns

[`TestInsights`](../interfaces/TestInsights.md)

Calculated test insights

## Example

```typescript
const insights = calculateTestInsights(reports, 'test-uuid');
```
