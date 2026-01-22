[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / getSchema

# Function: getSchema()

> **getSchema**(`version`): `object`

Defined in: [src/reference/schema.ts:48](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/schema.ts#L48)

Get the JSON Schema for a specific CTRF spec version.

## Parameters

### version

`string`

The spec version to get the schema for

## Returns

`object`

The JSON Schema object

## Throws

SchemaVersionError if version is not supported

## Example

```typescript
const v1Schema = getSchema('1.0.0');
```
