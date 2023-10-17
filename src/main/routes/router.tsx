import { makeEnvironmentList } from '@/main/factories/pages/environment-list/environment-list-factory'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeRegister } from '@/main/factories/pages/register/register-factory'
import { AuthRoutes, PrivateRoutes } from '@/presentation/components'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    children: [
      {
        path: '/login',
        element: makeLogin({})
      },
      {
        path: '/register',
        element: makeRegister({})
      }
    ]
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: makeEnvironmentList({})
      }
    ]
  }
])

export default Router
