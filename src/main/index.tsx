import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/presentation/styles/global.scss'
import { RouterProvider } from 'react-router-dom'
import { Router } from '@/presentation/components'

ReactDOM.createRoot(document.getElementById('main') as Element).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
