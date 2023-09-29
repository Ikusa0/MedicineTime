import { type ValidationOptions } from '@/presentation/protocols'
import { RequiredFieldError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'
import validator from 'validator'

export class RequiredFieldValidator implements FieldValidation {
  constructor (readonly field: string) {}

  validate (options: ValidationOptions): Error | null {
    return validator.isEmpty(options.value) ? new RequiredFieldError(this.field) : null
  }
}
