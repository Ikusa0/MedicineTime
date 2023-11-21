import { AccessDeniedError } from '@/domain/errors'
import { useLogoff } from '@/presentation/hooks/use-logoff'

type CallbackType = (error?: Error) => void
type ResultType = (error: Error) => void

export const useErrorHandler = (callback: CallbackType): ResultType => {
  const logoff = useLogoff()

  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      logoff()
    } else {
      callback(error)
    }
  }
}
