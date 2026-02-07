[**CTRF**](../README.md)

***

[CTRF](../globals.md) / ValidationError

# Class: ValidationError

Defined in: [errors.ts:27](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L27)

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ValidationError**(`message`, `errors`): `ValidationError`

Defined in: [errors.ts:31](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L31)

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

Defined in: [errors.ts:29](https://github.com/ctrf-io/ctrf-js/blob/main/src/errors.ts#L29)

Detailed validation errors
