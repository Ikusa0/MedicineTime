export class InvalidFieldError extends Error {
  constructor () {
    super('Campo Inválido')
    this.name = 'InvalidFieldError'
  }
}
