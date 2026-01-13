[**CTRF v0.0.18-next.1**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / ParseError

# Class: ParseError

Defined in: [src/reference/errors.ts:36](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L36)

Error thrown when parsing fails

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ParseError**(`message`, `cause?`): `ParseError`

Defined in: [src/reference/errors.ts:40](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L40)

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

Defined in: [src/reference/errors.ts:38](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L38)

The original error that caused the parse failure

#### Overrides

`CTRFError.cause`
