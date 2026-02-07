[**CTRF**](../README.md)

***

[CTRF](../globals.md) / addInsights

# Function: addInsights()

> **addInsights**(`report`, `historicalReports`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [insights.ts:1011](https://github.com/ctrf-io/ctrf-js/blob/main/src/insights.ts#L1011)

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The current report to enrich with insights

### historicalReports

[`CTRFReport`](../interfaces/CTRFReport.md)[] = `[]`

Array of previous reports for trend analysis

### options

[`InsightsOptions`](../interfaces/InsightsOptions.md) = `{}`

Options including baseline for comparison

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

A new report with insights populated

## Example

```typescript
// Basic usage
const reportWithInsights = addInsights(currentReport, previousReports);

// With baseline comparison
const reportWithInsights = addInsights(currentReport, previousReports, {
  baseline: baselineReport
});
```
