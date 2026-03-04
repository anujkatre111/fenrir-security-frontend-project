import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import AnimatedPage from './components/AnimatedPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ScanDetail from './pages/ScanDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AnimatedPage>
        <Login />
      </AnimatedPage>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <SidebarProvider>
        <AnimatedPage>
          <Dashboard />
        </AnimatedPage>
      </SidebarProvider>
    ),
  },
  {
    path: '/scans',
    element: (
      <SidebarProvider>
        <AnimatedPage>
          <ScanDetail />
        </AnimatedPage>
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
