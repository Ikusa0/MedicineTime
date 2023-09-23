import {
  EmailValidator,
  RequiredFieldValidator,
  MinLengthValidator
} from '@/infra/validation/validator-adapter'
import { type FieldValidation } from '../protocols'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[] = []
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName)
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidator(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidator(this.fieldName))
    return this
  }

  min (minLength: number): ValidationBuilder {
    this.validations.push(new MinLengthValidator(this.fieldName, minLength))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
