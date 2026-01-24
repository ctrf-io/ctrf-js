[**CTRF**](../README.md)

***

[CTRF](../README.md) / generateTestId

# Function: generateTestId()

> **generateTestId**(`properties`): `string`

Defined in: [id.ts:29](https://github.com/ctrf-io/ctrf-js/blob/main/src/id.ts#L29)

Generate a deterministic UUID v5 for a test based on its properties.
The same inputs will always produce the same UUID, enabling
cross-run analysis and test identification.

## Parameters

### properties

Test properties to generate ID from

#### filePath?

`string`

File path (optional)

#### name

`string`

Test name (required)

#### suite?

`string`[]

Suite hierarchy (optional)

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
