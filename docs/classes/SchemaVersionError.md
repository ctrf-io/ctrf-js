[**CTRF**](../README.md)

***

[CTRF](../README.md) / SchemaVersionError

# Class: SchemaVersionError

Defined in: [errors.ts:53](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L53)

Error thrown when an unsupported CTRF specification version is encountered.

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new SchemaVersionError**(`version`, `supportedVersions`): `SchemaVersionError`

Defined in: [errors.ts:59](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L59)

#### Parameters

##### version

`string`

##### supportedVersions

`string`[]

#### Returns

`SchemaVersionError`

#### Overrides

[`CTRFError`](CTRFError.md).[`constructor`](CTRFError.md#constructor)

## Properties

### supportedVersions

> `readonly` **supportedVersions**: `string`[]

Defined in: [errors.ts:57](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L57)

Supported versions

***

### version

> `readonly` **version**: `string`

Defined in: [errors.ts:55](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L55)

The unsupported version
