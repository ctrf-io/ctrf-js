[**CTRF**](../README.md)

***

[CTRF](../globals.md) / SchemaVersionError

# Class: SchemaVersionError

Defined in: [errors.ts:61](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L61)

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new SchemaVersionError**(`version`, `supportedVersions`): `SchemaVersionError`

Defined in: [errors.ts:67](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L67)

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

### version

> `readonly` **version**: `string`

Defined in: [errors.ts:63](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L63)

The unsupported version

***

### supportedVersions

> `readonly` **supportedVersions**: `string`[]

Defined in: [errors.ts:65](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L65)

Supported versions
