import { RequiredFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class RequiredFieldValidator implements FieldValidation {
  constructor (readonly field: string) { }

  validate (value: string): Error | null {
    return validator.isEmpty(value) ? null : new RequiredFieldError()
  }
}
