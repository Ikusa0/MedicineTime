import { type Validation } from '@/presentation/protocols'
import { type FieldValidation } from '../protocols'

type ValidatorsType = Record<string, FieldValidation[]>

export class ValidationComposite implements Validation {
  constructor (private readonly validators: ValidatorsType) {}

  validate (field: string, value: string): string | null {
    const validators = this.validators[field]
    for (const validator of validators) {
      const error = validator.validate(value)
      if (error) {
        return error.message
      }
    }
    return null
  }
}
