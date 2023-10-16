import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeApiAuthentication } from '@/main/factories/usecases/authentication/api-authentication-factory'
import { Login } from '@/presentation/pages'
import React from 'react'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeApiAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
