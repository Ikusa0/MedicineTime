import { type GetStorage } from '@/data/protocols/cache'
import { type HttpGetClient, type HttpGetParams, type HttpResponse } from '@/data/protocols/http'
import { type AccountModel } from '@/domain/models'

export class AuthorizeHttpGetClientDecorator implements HttpGetClient<any> {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpGetClient: HttpGetClient<any>
  ) {}

  async get (params: HttpGetParams): Promise<HttpResponse<any>> {
    const account: AccountModel = this.getStorage.get('account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: { ...params.headers, 'x-access-token': account.accessToken }
      })
    }
    return await this.httpGetClient.get(params)
  }
}
