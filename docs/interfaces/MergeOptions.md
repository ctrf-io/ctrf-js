[**CTRF**](../README.md)

***

[CTRF](../globals.md) / MergeOptions

# Interface: MergeOptions

Defined in: [types.ts:501](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L501)

Options for merging reports

## Properties

### deduplicateTests?

> `optional` **deduplicateTests?**: `boolean`

Defined in: [types.ts:503](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L503)

Remove duplicate tests by executionId, testId, or legacy id

***

### mergeSummary?

> `optional` **mergeSummary?**: `boolean`

Defined in: [types.ts:505](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L505)

Recalculate summary from merged tests

***

### preserveEnvironment?

> `optional` **preserveEnvironment?**: `"first"` \| `"last"` \| `"merge"`

Defined in: [types.ts:507](https://github.com/ctrf-io/ctrf-js/blob/main/src/types.ts#L507)

Strategy for handling environments
