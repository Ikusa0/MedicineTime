import { AuthContext } from '@/presentation/contexts'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

type ResultType = () => void

export const useLogoff = (): ResultType => {
  const { updateCurrentAccount } = useContext(AuthContext)!
  const navigate = useNavigate()

  return (): void => {
    updateCurrentAccount(undefined)
    navigate('/login')
  }
}
