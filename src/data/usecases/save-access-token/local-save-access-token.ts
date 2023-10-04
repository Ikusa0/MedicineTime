import { type SetStorage } from '@/data/protocols/cache/set-storage'
import { UnexpectedError } from '@/domain/errors'
import { type SaveAccessToken } from '@/domain/usecases'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorage: SetStorage) { }

  save (accessToken: string): void {
    if (!accessToken) {
      throw new UnexpectedError()
    }
    this.setStorage.set('access_token', accessToken)
  }
}
