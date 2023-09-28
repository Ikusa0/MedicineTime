import { HttpStatusCode, type HttpPostClient } from '@/data/protocols/http'
import { EmailInUseError, NotFoundError, UnexpectedError } from '@/domain/errors'
import { type AccountModel } from '@/domain/models/account-model'
import { type AddAccountParams, type AddAccount } from '@/domain/usecases'

export class APIAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body!
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
