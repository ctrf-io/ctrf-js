[**CTRF**](../README.md)

***

[CTRF](../globals.md) / getSchema

# Function: getSchema()

> **getSchema**(`version`): `object`

Defined in: [schema.ts:82](https://github.com/ctrf-io/ctrf-js/blob/main/src/schema.ts#L82)

## Parameters

### version

[`SchemaSelector`](../type-aliases/SchemaSelector.md)

A supported spec version or `latest`

## Returns

`object`

The JSON Schema object for that version

## Throws

SchemaVersionError if the version is not supported

## Example

```typescript
const historicalSchema = getSchema('0.0.2');
const latestSchema = getSchema('latest');
```
