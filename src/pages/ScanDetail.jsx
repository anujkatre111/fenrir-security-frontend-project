import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import ProgressDetailCard from '../components/scan/ProgressDetailCard'

const ScanDetail = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 p-6'>
          <ProgressDetailCard />
        </main>
      </div>
    </div>
  )
}

export default ScanDetail
