[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ParseError

# Class: ParseError

Defined in: [errors.ts:44](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L44)

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ParseError**(`message`, `cause?`): `ParseError`

Defined in: [errors.ts:48](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L48)

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

Defined in: [errors.ts:46](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L46)

The original error that caused the parse failure

#### Overrides

`CTRFError.cause`
