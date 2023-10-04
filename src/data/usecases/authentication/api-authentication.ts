import { HttpStatusCode, type HttpPostClient } from '@/data/protocols/http'
import { InvalidCredentialsError, NotFoundError, UnexpectedError } from '@/domain/errors'
import { type AccountModel } from '@/domain/models/account-model'
import { type Authentication, type AuthenticationParams } from '@/domain/usecases/authentication'

export class APIAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.notFound:
        throw new NotFoundError()
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
