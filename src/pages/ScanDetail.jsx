import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import ProgressDetailCard from '../components/scan/ProgressDetailCard'
import LiveScanConsole from '../components/scan/LiveScanConsole'
import ScanStatusBar from '../components/scan/ScanStatusBar'

const ScanDetail = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen ml-[200px]'>
        <Header />
        <main className='flex-1 p-6 flex flex-col gap-6 bg-gray-50 dark:bg-[#0C0F13]'>
          <ProgressDetailCard />
          <LiveScanConsole />
        </main>
        <ScanStatusBar
          subAgents={0}
          parallelExecutions={2}
          operations={1}
          critical={1}
          high={1}
          medium={1}
          low={0}
        />
      </div>
    </div>
  )
}

export default ScanDetail
