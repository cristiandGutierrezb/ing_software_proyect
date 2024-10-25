import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Login, Account, Register, GoogleClon } from './pages'

import './main.css'

import App from './App.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/account", element: <Account /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/clon", element: <GoogleClon /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
