import { type ValidationOptions } from '@/presentation/protocols'
import { InvalidFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class EmailValidator implements FieldValidation {
  constructor (readonly field: string) {}

  validate (options: ValidationOptions): Error | null {
    return validator.isEmail(options.value) || validator.isEmpty(options.value)
      ? null
      : new InvalidFieldError(this.field)
  }
}
