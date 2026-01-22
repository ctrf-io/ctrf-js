[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / enrichReportWithInsightsV2

# Function: enrichReportWithInsightsV2()

> **enrichReportWithInsightsV2**(`report`, `historicalReports`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [src/reference/insights.ts:993](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/insights.ts#L993)

Enrich a report with insights calculated from historical reports.

This is the main API that replicates the functionality of the existing
`enrichReportWithInsights` from run-insights.ts.

## Parameters

### report

[`CTRFReport`](../interfaces/CTRFReport.md)

The current report to enrich

### historicalReports

[`CTRFReport`](../interfaces/CTRFReport.md)[] = `[]`

Array of historical reports for comparison

### options

[`InsightsOptions`](../interfaces/InsightsOptions.md) = `{}`

Insights options (baseline is the baseline report)

## Returns

[`CTRFReport`](../interfaces/CTRFReport.md)

The report with insights added

## Example

```typescript
// Basic usage
const enrichedReport = enrichReportWithInsights(currentReport, previousReports);

// With baseline comparison
const enrichedReport = enrichReportWithInsights(currentReport, previousReports, {
  baseline: baselineReport
});
```
