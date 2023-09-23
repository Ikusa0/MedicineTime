import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/login',
    element: makeLogin({})
  }
])

export default Router
