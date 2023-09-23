import { APIAuthentication } from '@/data/usecases/authentication/api-authentication'
import { AxiosHttPostClient } from '@/infra/http/axios-http-client/axios-http-post-client'
import { Login } from '@/presentation/pages'
import {
  ValidationBuilder,
  ValidationComposite
} from '@/validation/validators'
import React from 'react'

export const makeLogin: React.FC = () => {
  const url = ''
  const axios = new AxiosHttPostClient()
  const apiAuthentication = new APIAuthentication(url, axios)
  const validationComposite = ValidationComposite.build({
    email: ValidationBuilder.field('email').required().email().build(),
    password: ValidationBuilder.field('password').required().min(6).build()
  })
  return (
    <Login
      authentication={apiAuthentication}
      validation={validationComposite}
    />
  )
}
