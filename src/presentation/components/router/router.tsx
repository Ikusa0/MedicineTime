import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }
])

export default Router
