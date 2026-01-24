[**CTRF**](../README.md)

***

[CTRF](../README.md) / addInsights

# Function: addInsights()

> **addInsights**(`report`, `historicalReports`, `options`): [`CTRFReport`](../interfaces/CTRFReport.md)

Defined in: [insights.ts:1007](https://github.com/ctrf-io/ctrf-js/blob/main/src/insights.ts#L1007)

Add insights to a CTRF report using historical data.

Computes run-level and test-level insights according to the CTRF specification,
including pass rate, fail rate, flaky rate, and duration metrics.

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
