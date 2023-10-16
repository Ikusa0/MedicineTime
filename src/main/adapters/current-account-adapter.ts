import { UnexpectedError } from '@/domain/errors'
import { type AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '../factories/usecases/cache/local-storage-adapter-factory'

export const updateCurrentAccountAdapter = (account: AccountModel): void => {
  if (!account.accessToken || !account.user) {
    throw new UnexpectedError()
  }

  makeLocalStorageAdapter().set('account', account)
}