[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / SchemaVersionError

# Class: SchemaVersionError

Defined in: [src/reference/errors.ts:51](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L51)

Error thrown when an unsupported schema version is encountered

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new SchemaVersionError**(`version`, `supportedVersions`): `SchemaVersionError`

Defined in: [src/reference/errors.ts:57](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L57)

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

Defined in: [src/reference/errors.ts:55](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L55)

Supported versions

***

### version

> `readonly` **version**: `string`

Defined in: [src/reference/errors.ts:53](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L53)

The unsupported version
