import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/custom/Header' // ✅ Correct import
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'

const Layout = () => (
  <>
    <Header />  {/* ✅ Correct JSX syntax */}
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />, // ✅ Layout ensures Header is shown on all pages
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/create-trip',
        element: <CreateTrip />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>     
    <Toaster />  {/* ✅ Toaster is placed correctly */}
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
)
