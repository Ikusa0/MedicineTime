import { APILoadEnvironmentList } from '@/data/usecases/load-environment-list/api-load-environment-list'
import { type LoadEnvironmentList } from '@/domain/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators/authorize-http-get-client-decorator-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeAPILoadEnvironmentList = (): LoadEnvironmentList => {
  return new APILoadEnvironmentList(
    makeApiUrl(`/environments`),
    makeAuthorizeHttpGetClientDecorator()
  )
}
