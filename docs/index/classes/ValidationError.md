[**CTRF v0.0.18-next.2**](../../README.md)

***

[CTRF](../../README.md) / [index](../README.md) / ValidationError

# Class: ValidationError

Defined in: [src/reference/errors.ts:21](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L21)

Error thrown when validation fails

## Extends

- [`CTRFError`](CTRFError.md)

## Constructors

### Constructor

> **new ValidationError**(`message`, `errors`): `ValidationError`

Defined in: [src/reference/errors.ts:25](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L25)

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

Defined in: [src/reference/errors.ts:23](https://github.com/ctrf-io/ctrf-core-js/blob/main/src/reference/errors.ts#L23)

Detailed validation errors
