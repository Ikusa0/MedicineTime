import { makeLocalSaveAccessToken } from '@/main/factories/usecases/cache/local-save-access-token-factory'
import { Register } from '@/presentation/pages'
import React from 'react'
import { makeAPIAddAccount } from '../../usecases/add-account/api-add-account-factory'
import { makeRegisterValidation } from './register-validation-factory'

export const makeRegister: React.FC = () => {
  return (
    <Register
      addAccount={makeAPIAddAccount()}
      validation={makeRegisterValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
