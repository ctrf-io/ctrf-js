[**CTRF**](../README.md)

***

[CTRF](../globals.md) / getSchema

# Function: getSchema()

> **getSchema**(`version`): `object`

Defined in: [schema.ts:69](https://github.com/ctrf-io/ctrf-js/blob/main/src/schema.ts#L69)

## Parameters

### version

`string`

The spec version (MAJOR.MINOR.PATCH) to get the schema for

## Returns

`object`

The JSON Schema object for that version

## Throws

SchemaVersionError if the version is not supported

## Example

```typescript
const v0_0Schema = getSchema('0.0.0');
const v1_0Schema = getSchema('1.0.0');
```
