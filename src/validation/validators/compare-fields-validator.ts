import { type ValidationOptions } from '@/presentation/protocols'
import { NotMatchingFieldsError } from '@/validation/errors'
import { type FieldValidation } from '@/validation/protocols'

export class CompareFieldsValidator implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate (options: ValidationOptions): Error | null {
    return options.value === options.equals
      ? null
      : new NotMatchingFieldsError(this.field, this.fieldToCompare)
  }
}
