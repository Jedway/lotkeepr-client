import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ManagerDash from './app/ManagerDash.tsx'
import OwnerDash from './app/OwnerDash.tsx'
import TenantDash from './app/TenantDash.tsx'
import Donate from './Donate.tsx'
import RootLayout from './components/layouts/RootLayout.tsx'

const router = createBrowserRouter([
  // All routes that use RootLayout (public routes)
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
  
  // Dashboard routes
  {
    path: "/manager",
    element: <ManagerDash />,
  },
  {
    path: "/owner",
    element: <OwnerDash />,
  },
  {
    path: "/tenant",
    element: <TenantDash />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)