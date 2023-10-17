import {
  getCurrentAccountAdapter,
  updateCurrentAccountAdapter
} from '@/main/adapters/current-account-adapter'
import Router from '@/main/routes/router'
import { AuthContext } from '@/presentation/contexts'
import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('main') as Element).render(
  <React.StrictMode>
    <AuthContext.Provider
      value={{
        updateCurrentAccount: updateCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}
    >
      <RouterProvider router={Router} />
    </AuthContext.Provider>
  </React.StrictMode>
)
