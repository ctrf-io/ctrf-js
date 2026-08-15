[**CTRF**](../README.md)

***

[CTRF](../globals.md) / MergeOptions

# Interface: MergeOptions

Defined in: [types.ts:424](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L424)

Options for merging reports

## Properties

### deduplicateTests?

> `optional` **deduplicateTests?**: `boolean`

Defined in: [types.ts:426](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L426)

Remove duplicate tests by executionId, testId, or legacy id

***

### mergeSummary?

> `optional` **mergeSummary?**: `boolean`

Defined in: [types.ts:428](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L428)

Recalculate summary from merged tests

***

### preserveEnvironment?

> `optional` **preserveEnvironment?**: `"first"` \| `"last"` \| `"merge"`

Defined in: [types.ts:430](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L430)

Strategy for handling environments
