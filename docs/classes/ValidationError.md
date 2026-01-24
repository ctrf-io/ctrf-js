[**CTRF**](../README.md)

***

[CTRF](../README.md) / ValidationError

# Class: ValidationError

Defined in: errors.ts:23

Error thrown when schema validation fails.
Contains detailed error information for each validation issue.

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ValidationError**(`message`, `errors`): `ValidationError`

Defined in: errors.ts:27

#### Parameters

##### message

`string`

##### errors

[`ValidationErrorDetail`](../interfaces/ValidationErrorDetail.md)[] = `[]`

#### Returns

`ValidationError`

#### Overrides

[`CTRFError`](CTRFError.md).[`constructor`](CTRFError.md#constructor)

## Properties

### errors

> `readonly` **errors**: [`ValidationErrorDetail`](../interfaces/ValidationErrorDetail.md)[]

Defined in: errors.ts:25

Detailed validation errors
