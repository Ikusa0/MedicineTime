import { type FieldValidation } from '@/presentation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (value: string): Error | null {
    return value ? null : new RequiredFieldError()
  }
}
