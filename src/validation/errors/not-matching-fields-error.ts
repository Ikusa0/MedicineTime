import { capitalize } from '@/utils'

export class NotMatchingFieldsError extends Error {
  constructor (field: string, fieldCompared: string) {
    super(`/*${capitalize(field)}*/: Não está igual ao /*${capitalize(fieldCompared)}*/.`)
    this.name = 'NotMatchingFieldsError'
  }
}
