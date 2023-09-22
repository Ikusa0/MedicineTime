export interface Validation {
  validate: (field: string, value: string) => string | null
}

export interface FieldValidation {
  field: string
  validate: (value: string) => Error | null
}
