import { capitalize } from '@/utils'

export class InvalidFieldError extends Error {
  constructor (field: string) {
    super(`/*${capitalize(field)}*/: Campo inválido.`)
    this.name = 'InvalidFieldError'
  }
}
