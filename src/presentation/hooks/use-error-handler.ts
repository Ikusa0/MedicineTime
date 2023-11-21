import { AccessDeniedError } from '@/domain/errors'
import { AuthContext } from '@/presentation/contexts'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

type CallbackType = (error?: Error) => void
type ResultType = (error: Error) => void

export const useErrorHandler = (callback: CallbackType): ResultType => {
  const { updateCurrentAccount } = useContext(AuthContext)!
  const navigate = useNavigate()

  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      updateCurrentAccount()
      navigate('/login')
    } else {
      callback(error)
    }
  }
}
