import { AuthContext } from '@/presentation/contexts'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes: React.FC = () => {
  const account = useContext(AuthContext)?.getCurrentAccount()
  const isUserAuthenticated = account?.accessToken && account?.user

  return isUserAuthenticated ? <Navigate to="/" replace /> : <Outlet />
}

export default AuthRoutes
