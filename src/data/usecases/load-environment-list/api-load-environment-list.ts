import { HttpStatusCode, type HttpGetClient } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { type EnvironmentModel } from '@/domain/models'
import { type LoadEnvironmentList } from '@/domain/usecases'

export class APILoadEnvironmentList implements LoadEnvironmentList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<EnvironmentModel[]>
  ) {}

  async load (): Promise<EnvironmentModel[]> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body ?? []
      case HttpStatusCode.noContent:
        return []
      default:
        throw new UnexpectedError()
    }
  }
}
