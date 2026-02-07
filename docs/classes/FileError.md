[**CTRF**](../README.md)

***

[CTRF](../globals.md) / FileError

# Class: FileError

Defined in: [errors.ts:83](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L83)

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new FileError**(`message`, `filePath`, `cause?`): `FileError`

Defined in: [errors.ts:89](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L89)

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

### filePath

> `readonly` **filePath**: `string`

Defined in: [errors.ts:85](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L85)

The file path that caused the error

***

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [errors.ts:87](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L87)

The original error

#### Overrides

`CTRFError.cause`
