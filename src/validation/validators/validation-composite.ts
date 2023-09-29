import { type Validation, type ValidationOptions } from '@/presentation/protocols'
import { type FieldValidation } from '../protocols'

type ValidatorsType = Record<string, FieldValidation[]>

export class ValidationComposite implements Validation {
  private constructor (private readonly validators: ValidatorsType) {}

  static build (validators: ValidatorsType): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (field: string, options: ValidationOptions): string | null {
    const validators = this.validators[field]
    for (const validator of validators) {
      const error = validator.validate(options)
      if (error) {
        return error.message
      }
    }
    return null
  }
}
