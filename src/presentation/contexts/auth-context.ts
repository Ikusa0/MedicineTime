import { type AccountModel } from '@/domain/models'
import { createContext } from 'react'

type AuthContextTypes = {
  updateCurrentAccount: (account: AccountModel) => void
}

export const AuthContext = createContext<AuthContextTypes | null>(null)
