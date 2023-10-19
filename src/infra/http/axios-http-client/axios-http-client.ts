import {
  type HttpGetClient,
  type HttpGetParams,
  type HttpPostClient,
  type HttpPostParams,
  type HttpResponse
} from '@/data/protocols/http'
import axios, { type AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any>, HttpGetClient<any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const axiosResponse = await axios.post(params.url, params.body, { validateStatus: () => true })
    return this.adapt(axiosResponse)
  }

  async get (params: HttpGetParams): Promise<HttpResponse<any>> {
    const axiosResponse = await axios.get(params.url, {
      headers: params.headers,
      validateStatus: () => true
    })
    return this.adapt(axiosResponse)
  }

  private adapt (axiosResponse: AxiosResponse): HttpResponse<any> {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
