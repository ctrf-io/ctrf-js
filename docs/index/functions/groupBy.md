[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / groupBy

# Function: groupBy()

> **groupBy**\<`K`\>(`tests`, `field`): `Record`\<`string`, [`Test`](../interfaces/Test.md)[]\>

Defined in: [src/reference/filter.ts:88](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/filter.ts#L88)

Group tests by a field.

## Type Parameters

### K

`K` *extends* keyof [`Test`](../interfaces/Test.md)

## Parameters

### tests

[`Test`](../interfaces/Test.md)[]

Array of tests to group

### field

`K`

Field to group by

## Returns

`Record`\<`string`, [`Test`](../interfaces/Test.md)[]\>

Object with field values as keys and arrays of tests as values

## Example

```typescript
const byStatus = groupBy(report.results.tests, 'status');
// => { passed: [...], failed: [...], ... }

const bySuite = groupBy(report.results.tests, 'suite');
// Groups by first suite level
```
