[**CTRF**](../README.md)

***

[CTRF](../README.md) / isTestFlaky

# Function: isTestFlaky()

> **isTestFlaky**(`test`): `boolean`

Defined in: insights.ts:78

Determines if a test is flaky based on the CTRF specification.

A test is considered flaky if:
- The `flaky` field is explicitly set to `true`, OR
- The test has retries > 0 AND final status is 'passed'

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
