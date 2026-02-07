[**CTRF**](../README.md)

***

[CTRF](../globals.md) / generateTestId

# Function: generateTestId()

> **generateTestId**(`properties`): `string`

Defined in: [id.ts:31](https://github.com/ctrf-io/ctrf-js/blob/main/src/id.ts#L31)

## Parameters

### properties

Test properties to generate ID from

#### name

`string`

Test name (required)

#### suite?

`string`[]

Suite hierarchy (optional)

#### filePath?

`string`

File path (optional)

## Returns

`string`

A deterministic UUID v5 string

## Example

```typescript
const id = generateTestId({
  name: 'should add numbers',
  suite: ['math', 'addition'],
  filePath: 'tests/math.test.ts'
});
// Always returns the same UUID for these inputs
```
