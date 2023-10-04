import { type HttpResponse } from '.'

export type HttpGetParams = {
  url: string
}
export interface HttpGetClient<ResponseType> {
  get: (params: HttpGetParams) => Promise<HttpResponse<ResponseType>>
}
