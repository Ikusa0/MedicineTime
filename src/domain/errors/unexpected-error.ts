export class UnexpectedError extends Error {
  constructor () {
    super('Algo não deu muito certo. Tente novamente em breve!')
    this.name = 'UnexpectedError'
  }
}
