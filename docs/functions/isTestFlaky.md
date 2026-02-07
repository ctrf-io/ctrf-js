[**CTRF**](../README.md)

***

[CTRF](../globals.md) / isTestFlaky

# Function: isTestFlaky()

> **isTestFlaky**(`test`): `boolean`

Defined in: [insights.ts:80](https://github.com/ctrf-io/ctrf-js/blob/main/src/insights.ts#L80)

## Parameters

### test

[`Test`](../interfaces/Test.md)

The test to check

## Returns

`boolean`

true if the test is flaky

## Example

```typescript
if (isTestFlaky(test)) {
  console.log('Test is flaky:', test.name);
}
```
