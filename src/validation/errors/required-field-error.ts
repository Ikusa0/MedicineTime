import { capitalize } from '@/utils'

export class RequiredFieldError extends Error {
  constructor (field: string) {
    super(`${capitalize(field)}: Campo obrigatório.`)
    this.name = 'RequiredFieldError'
  }
}
