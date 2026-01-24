[**CTRF**](../README.md)

***

[CTRF](../README.md) / FileError

# Class: FileError

Defined in: errors.ts:73

Error thrown when a file read or write operation fails.

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new FileError**(`message`, `filePath`, `cause?`): `FileError`

Defined in: errors.ts:79

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

Defined in: errors.ts:77

The original error

#### Overrides

`CTRFError.cause`

***

### filePath

> `readonly` **filePath**: `string`

Defined in: errors.ts:75

The file path that caused the error
