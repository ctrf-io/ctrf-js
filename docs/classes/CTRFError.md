[**CTRF**](../README.md)

***

[CTRF](../README.md) / CTRFError

# Class: CTRFError

Defined in: errors.ts:11

Base error class for all CTRF errors.
All CTRF-specific errors extend this class.

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

Defined in: errors.ts:12

#### Parameters

##### message

`string`

#### Returns

`CTRFError`

#### Overrides

`Error.constructor`
