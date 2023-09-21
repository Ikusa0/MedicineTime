export class NotFoundError extends Error {
  constructor () {
    super('Infelizmente não conseguimos encontrar o que você está procurando.')
    this.name = 'NotFoundError'
  }
}
