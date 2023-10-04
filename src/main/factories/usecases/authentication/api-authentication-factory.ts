import { APIAuthentication } from '@/data/usecases/authentication/api-authentication'
import { type Authentication } from '@/domain/usecases/authentication'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'

export const makeApiAuthentication = (): Authentication => {
  return new APIAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}
