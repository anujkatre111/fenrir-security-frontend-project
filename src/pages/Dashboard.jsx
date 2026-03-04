import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import SeverityDetails from '../dashboard/SeverityDetails'
import ScanTable from '../dashboard/ScanTable'
import { useMockLoad } from '../hooks/useMockLoad'
import { SeverityDetailsSkeleton, ScanTableSkeleton } from '../components/skeletons/DashboardSkeletons'

const Dashboard = () => {
  const loading = useMockLoad()

  return (
    <div className='flex'>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Sidebar />
      <div className='flex-1 flex flex-col min-h-screen ml-[200px]'>
        <Header />
        <main id="main-content" className='flex-1 p-6 bg-gray-50 dark:bg-[#0C0F13] space-y-6' aria-label="Dashboard content">
          {loading ? (
            <>
              <SeverityDetailsSkeleton />
              <ScanTableSkeleton />
            </>
          ) : (
            <>
              <SeverityDetails />
              <ScanTable />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
