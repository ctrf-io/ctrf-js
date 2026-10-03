[**CTRF**](../README.md)

***

[CTRF](../globals.md) / MergeOptions

# Interface: MergeOptions

Defined in: [types.ts:438](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L438)

Options for merging reports

## Properties

### deduplicateTests?

> `optional` **deduplicateTests?**: `boolean`

Defined in: [types.ts:440](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L440)

Remove duplicate tests by executionId, testId, or legacy id

***

### mergeSummary?

> `optional` **mergeSummary?**: `boolean`

Defined in: [types.ts:442](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L442)

Recalculate summary from merged tests

***

### preserveEnvironment?

> `optional` **preserveEnvironment?**: `"first"` \| `"last"` \| `"merge"`

Defined in: [types.ts:444](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L444)

Strategy for handling environments
