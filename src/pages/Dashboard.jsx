import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen ml-[200px]'>
        <Header />
        <main className='flex-1 p-6'>
          {/* Dashboard content goes here */}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
