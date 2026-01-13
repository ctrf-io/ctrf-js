[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / FileError

# Class: FileError

Defined in: [src/reference/errors.ts:71](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L71)

Error thrown when a file operation fails

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new FileError**(`message`, `filePath`, `cause?`): `FileError`

Defined in: [src/reference/errors.ts:77](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L77)

#### Parameters

##### message

`string`

##### filePath

`string`

##### cause?

`Error`

#### Returns

`FileError`

#### Overrides

[`CTRFError`](CTRFError.md).[`constructor`](CTRFError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [src/reference/errors.ts:75](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L75)

The original error

#### Overrides

`CTRFError.cause`

***

### filePath

> `readonly` **filePath**: `string`

Defined in: [src/reference/errors.ts:73](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L73)

The file path that caused the error
