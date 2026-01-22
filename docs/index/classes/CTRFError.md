[**CTRF v1.0.0**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / CTRFError

# Class: CTRFError

Defined in: [src/reference/errors.ts:10](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L10)

Base error class for all CTRF errors

## Extends

- `Error`

## Extended by

- [`ValidationError`](ValidationError.md)
- [`ParseError`](ParseError.md)
- [`SchemaVersionError`](SchemaVersionError.md)
- [`FileError`](FileError.md)
- [`BuilderError`](BuilderError.md)

## Constructors

### Constructor

> **new CTRFError**(`message`): `CTRFError`

Defined in: [src/reference/errors.ts:11](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L11)

#### Parameters

##### message

`string`

#### Returns

`CTRFError`

#### Overrides

`Error.constructor`
