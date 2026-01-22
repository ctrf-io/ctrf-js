[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / isTestStatus

# Function: isTestStatus()

> **isTestStatus**(`value`): value is "skipped" \| "failed" \| "other" \| "pending" \| "passed"

Defined in: [src/reference/validate.ts:165](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/validate.ts#L165)

Type guard for TestStatus values.

## Parameters

### value

`unknown`

Value to check

## Returns

value is "skipped" \| "failed" \| "other" \| "pending" \| "passed"

true if the value is a valid TestStatus
