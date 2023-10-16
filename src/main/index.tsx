import Router from '@/main/routes/router'
import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('main') as Element).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
