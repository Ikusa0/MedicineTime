import { type Validation } from '@/presentation/protocols'
import { type FieldValidation } from './protocols'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) { }

  validate (field: string, value: string): string | null {
    const validators = this.validators.filter(val => val.field === field)
    for (const validator of validators) {
      const error = validator.validate(value)
      if (error) {
        return error.message
      }
    }
    return null
  }
}
