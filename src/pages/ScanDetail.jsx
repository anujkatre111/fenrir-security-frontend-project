import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import ProgressDetailCard from '../components/scan/ProgressDetailCard'
import LiveScanConsole from '../components/scan/LiveScanConsole'

const ScanDetail = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen ml-[200px]'>
        <Header />
        <main className='flex-1 p-6 flex flex-col gap-6'>
          <ProgressDetailCard />
          <LiveScanConsole />
        </main>
      </div>
    </div>
  )
}

export default ScanDetail
