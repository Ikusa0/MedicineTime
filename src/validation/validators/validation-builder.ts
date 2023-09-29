import {
  EmailValidator,
  MinLengthValidator,
  RequiredFieldValidator
} from '@/infra/validation/validator-adapter'
import { type FieldValidation } from '../protocols'
import { CompareFieldsValidator } from './compare-fields-validator'

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

  equals (fieldToCompare: string): ValidationBuilder {
    this.validations.push(new CompareFieldsValidator(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
