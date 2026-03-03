import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Filter, LayoutGrid, Plus, Search } from 'lucide-react'
import StatusChip from './components/StatusChip'
import ProgressBar from './components/ProgressBar'
import VulnerabilityBadges from './components/VulnerabilityBadges'

const mockScans = [
  {
    id: 1,
    name: 'Production API Scan',
    type: 'Grey Box',
    status: 'completed',
    progress: 100,
    failed: false,
    critical: 5,
    high: 12,
    medium: 23,
    low: 18,
    lastScan: '2 hours ago',
  },
  {
    id: 2,
    name: 'Staging Environment',
    type: 'Black Box',
    status: 'scheduled',
    progress: 0,
    failed: false,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    lastScan: 'Yesterday',
  },
  {
    id: 3,
    name: 'Auth Service Scan',
    type: 'Grey Box',
    status: 'failed',
    progress: 10,
    failed: true,
    critical: 2,
    high: 4,
    medium: 8,
    low: 1,
    lastScan: '5 hours ago',
  },
  {
    id: 4,
    name: 'User Portal Scan',
    type: 'White Box',
    status: 'completed',
    progress: 100,
    failed: false,
    critical: 1,
    high: 3,
    medium: 15,
    low: 22,
    lastScan: '1 day ago',
  },
  {
    id: 5,
    name: 'Payment Gateway',
    type: 'Grey Box',
    status: 'completed',
    progress: 100,
    failed: false,
    critical: 0,
    high: 2,
    medium: 11,
    low: 9,
    lastScan: '3 hours ago',
  },
]

const ScanTable = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filteredScans = mockScans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(search.toLowerCase()) ||
      scan.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#181B22] shadow-md dark:shadow-none overflow-hidden'>
      {/* Toolbar */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 border-b border-slate-200 dark:border-[#404040]'>
        <div className='relative flex-1 max-w-md'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
          <input
            type='text'
            placeholder='Search scans by name or type...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-[#404040] bg-slate-50 dark:bg-[#0C0F13] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0AA49C]/50'
          />
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <button
            type='button'
            className='flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#0C0F13] text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#262626] transition'
          >
            <Filter className='w-4 h-4' />
            Filter
          </button>
          <button
            type='button'
            className='flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#0C0F13] text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#262626] transition'
          >
            <LayoutGrid className='w-4 h-4' />
            Column
          </button>
          <button
            type='button'
            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0AA49C] text-white text-sm font-medium hover:bg-[#089b8a] transition shadow-sm'
          >
            <Plus className='w-4 h-4' />
            New scan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[600px]'>
          <thead>
            <tr className='border-b border-slate-200 dark:border-[#404040]'>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Scan Name
              </th>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Type
              </th>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Status
              </th>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Progress
              </th>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Vulnerability
              </th>
              <th className='text-left py-3 px-4 text-xs font-medium text-slate-500 dark:text-slate-400'>
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredScans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate('/scans')}
                className='border-b border-slate-100 dark:border-[#404040] hover:bg-slate-50 dark:hover:bg-[#262626]/50 cursor-pointer transition'
              >
                <td className='py-3 px-4 text-sm text-slate-700 dark:text-slate-200'>
                  {scan.name}
                </td>
                <td className='py-3 px-4 text-sm text-slate-600 dark:text-slate-300'>
                  {scan.type}
                </td>
                <td className='py-3 px-4'>
                  <StatusChip status={scan.status} />
                </td>
                <td className='py-3 px-4'>
                  <ProgressBar value={scan.progress} failed={scan.failed} />
                </td>
                <td className='py-3 px-4'>
                  <VulnerabilityBadges
                    critical={scan.critical}
                    high={scan.high}
                    medium={scan.medium}
                    low={scan.low}
                  />
                </td>
                <td className='py-3 px-4 text-sm text-slate-600 dark:text-slate-300'>
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-4 py-3 border-t border-slate-200 dark:border-[#404040]'>
        <span className='text-sm text-slate-500 dark:text-slate-400'>
          Showing {filteredScans.length} of 100 Scans
        </span>
        <div className='flex items-center gap-1'>
          <button
            type='button'
            className='p-2 rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#0C0F13] text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#262626] transition disabled:opacity-50'
            disabled
          >
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button
            type='button'
            className='p-2 rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#0C0F13] text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#262626] transition'
          >
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScanTable
