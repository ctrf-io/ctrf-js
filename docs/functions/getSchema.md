[**CTRF**](../README.md)

***

[CTRF](../README.md) / getSchema

# Function: getSchema()

> **getSchema**(`version`): `object`

Defined in: [schema.ts:65](https://github.com/ctrf-io/ctrf-js/blob/main/src/schema.ts#L65)

Get the JSON Schema for a specific CTRF spec version.

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
