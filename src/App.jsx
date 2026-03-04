import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ScanDetail from './pages/ScanDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <SidebarProvider>
        <Dashboard />
      </SidebarProvider>
    ),
  },
  {
    path: '/scans',
    element: (
      <SidebarProvider>
        <ScanDetail />
      </SidebarProvider>
    ),
  },
])

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
