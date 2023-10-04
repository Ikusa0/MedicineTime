import {
  type HttpGetClient,
  type HttpGetParams,
  type HttpPostClient,
  type HttpPostParams,
  type HttpResponse
} from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any>, HttpGetClient<any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body, { validateStatus: () => true })
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }

  async get (params: HttpGetParams): Promise<HttpResponse<any>> {
    const httpResponse = await axios.get(params.url, { validateStatus: () => true })
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
