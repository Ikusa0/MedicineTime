export class EmailInUseError extends Error {
  constructor () {
    super('Esse E-mail já está em uso!')
    this.name = 'EmailInUseError'
  }
}
