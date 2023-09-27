import React from 'react'
import { Login } from '@/presentation/pages'
import { makeApiAuthentication } from '@/main/factories/usecases/authentication/api-authentication-factory'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/cache/local-save-access-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeApiAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
