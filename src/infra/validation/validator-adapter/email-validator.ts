import { InvalidFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class EmailValidator implements FieldValidation {
  constructor (readonly field: string) { }

  validate (value: string): Error | null {
    return (validator.isEmail(value) || validator.isEmpty(value)) ? null : new InvalidFieldError(this.field)
  }
}
