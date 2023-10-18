import { APILoadEnvironmentList } from '@/data/usecases/load-environment-list/api-load-environment-list'
import { type LoadEnvironmentList } from '@/domain/usecases'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeAPILoadEnvironmentList = (): LoadEnvironmentList => {
  return new APILoadEnvironmentList(makeApiUrl(`/environments`), makeAxiosHttpClient())
}
