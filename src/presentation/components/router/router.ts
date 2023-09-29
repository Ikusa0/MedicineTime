import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeRegister } from '@/main/factories/pages/register/register-factory'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/login',
    element: makeLogin({})
  },
  {
    path: '/register',
    element: makeRegister({})
  }
])

export default Router
