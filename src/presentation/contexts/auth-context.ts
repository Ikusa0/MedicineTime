import { type AccountModel } from '@/domain/models'
import { createContext } from 'react'

type AuthContextTypes = {
  updateCurrentAccount: (account?: AccountModel) => void
  getCurrentAccount: () => AccountModel
}

export const AuthContext = createContext<AuthContextTypes | null>(null)
