[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / generateTestId

# Function: generateTestId()

> **generateTestId**(`properties`): `string`

Defined in: [src/reference/id.ts:24](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/id.ts#L24)

Generates a deterministic UUID v5 based on test properties.
The same inputs will always produce the same UUID.

## Parameters

### properties

Object containing name, suite, and filePath

#### filePath?

`string`

#### name

`string`

#### suite?

`string`[]

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
```
