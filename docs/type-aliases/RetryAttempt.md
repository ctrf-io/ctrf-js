[**CTRF**](../README.md)

***

[CTRF](../globals.md) / RetryAttempt

# ~~Type Alias: RetryAttempt~~

> **RetryAttempt** = [`AttemptHistoryEntry`](../interfaces/AttemptHistoryEntry.md)

Defined in: [types.ts:235](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L235)

Backward-compatible name for an attempt history entry.

## Deprecated

Use [AttemptHistoryEntry](../interfaces/AttemptHistoryEntry.md). The CTRF field remains named
`retryAttempts`, but its entries include the initial attempt and exclude the
final attempt.
