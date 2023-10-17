import { AuthContext } from '@/presentation/contexts'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes: React.FC = () => {
  const account = useContext(AuthContext)?.getCurrentAccount()
  const isUserAuthenticated = account?.accessToken && account?.user

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoutes
