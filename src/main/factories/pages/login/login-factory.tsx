import React from 'react'
import { Login } from '@/presentation/pages'
import { makeApiAuthentication } from '@/main/factories/usecases/authentication/api-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeApiAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
