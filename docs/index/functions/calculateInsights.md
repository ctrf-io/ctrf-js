[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / calculateInsights

# Function: calculateInsights()

> **calculateInsights**(`reports`, `options`): [`Insights`](../interfaces/Insights.md)

Defined in: [src/reference/insights.ts:777](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/insights.ts#L777)

Calculate run-level insights from multiple historical reports.

This is a simplified API for getting insights from an array of reports.
For the full enrichment workflow, use `enrichReportWithInsights`.

## Parameters

### reports

[`CTRFReport`](../interfaces/CTRFReport.md)[]

Array of historical reports (most recent last)

### options

[`InsightsOptions`](../interfaces/InsightsOptions.md) = `{}`

Insights options

## Returns

[`Insights`](../interfaces/Insights.md)

Calculated insights

## Example

```typescript
const insights = calculateInsights(historicalReports);

// With baseline
const insights = calculateInsights(reports, { baseline: baselineReport });

// With limited window
const insights = calculateInsights(reports, { window: 10 });
```
