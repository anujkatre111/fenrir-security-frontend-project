import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import SeverityDetails from '../dashboard/SeverityDetails'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen ml-[200px]'>
        <Header />
        <main className='flex-1 p-6 bg-gray-50 dark:bg-[#0C0F13]'>
          <SeverityDetails />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
