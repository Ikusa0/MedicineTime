export type ValidationOptions = {
  value: any
  equals?: any
}

export interface Validation {
  validate: (field: string, options: ValidationOptions) => string | null
}
