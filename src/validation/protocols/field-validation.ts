import { type ValidationOptions } from '@/presentation/protocols'

export interface FieldValidation {
  field: string
  validate: (options: ValidationOptions) => Error | null
}
