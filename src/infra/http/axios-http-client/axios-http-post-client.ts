import {
  type HttpResponse,
  type HttpPostParams,
  type HttpPostClient
} from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttPostClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(
      params.url,
      params.body,
      { validateStatus: () => true }
    )
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
