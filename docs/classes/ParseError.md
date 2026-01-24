[**CTRF**](../README.md)

***

[CTRF](../README.md) / ParseError

# Class: ParseError

Defined in: [errors.ts:38](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L38)

Error thrown when JSON parsing fails.

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ParseError**(`message`, `cause?`): `ParseError`

Defined in: [errors.ts:42](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L42)

#### Parameters

##### message

`string`

##### cause?

`Error`

#### Returns

`ParseError`

#### Overrides

[`CTRFError`](CTRFError.md).[`constructor`](CTRFError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [errors.ts:40](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L40)

The original error that caused the parse failure

#### Overrides

`CTRFError.cause`
