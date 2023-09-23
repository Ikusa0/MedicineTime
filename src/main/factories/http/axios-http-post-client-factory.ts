import { AxiosHttPostClient } from '@/infra/http/axios-http-client/axios-http-post-client'

export const makeAxiosHttpPostClient = (): AxiosHttPostClient => {
  return new AxiosHttPostClient()
}
