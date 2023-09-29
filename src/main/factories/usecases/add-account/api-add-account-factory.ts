import { APIAddAccount } from '@/data/usecases/add-account/api-add-account'
import { type AddAccount } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpPostClient } from '@/main/factories/http/axios-http-post-client-factory'

export const makeAPIAddAccount = (): AddAccount => {
  return new APIAddAccount(makeApiUrl('/register'), makeAxiosHttpPostClient())
}
