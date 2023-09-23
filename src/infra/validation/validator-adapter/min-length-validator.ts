import { InvalidFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class MinLengthValidator implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) { }

  validate (value: string): Error | null {
    return validator.isLength(value, { min: this.minLength }) ? null : new InvalidFieldError(this.field)
  }
}
