import { type UserModel } from '@/domain/models/user-model'

export type AccountModel = {
  accessToken: string
  user: UserModel
}
