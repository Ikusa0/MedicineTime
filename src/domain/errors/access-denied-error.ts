export class AccessDeniedError extends Error {
  constructor () {
    super('Você não tem permissão para acessar este conteúdo!')
    this.name = 'AccessDeniedError'
  }
}
