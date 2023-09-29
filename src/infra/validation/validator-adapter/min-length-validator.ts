import { type ValidationOptions } from '@/presentation/protocols'
import { InvalidFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class MinLengthValidator implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly minLength: number
  ) {}

  validate (options: ValidationOptions): Error | null {
    return validator.isLength(options.value, { min: this.minLength })
      ? null
      : new InvalidFieldError(this.field)
  }
}
