import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, X } from 'lucide-react'
import Activitylog from './Activitylog'
import Findinglog from './Findinglog'

const LiveScanConsole = () => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState('activity')

  if (isMinimized) {
    return (
      <div className='rounded-lg border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#0C0F13] shadow-sm dark:shadow-none'>
        <div className='flex items-center justify-between px-4 py-3'>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-green-500' />
            <span className='text-sm font-medium text-slate-900 dark:text-[#fafafa]'>
              Live Scan Console
            </span>
            <button type='button' className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-medium'>
              <Clock className='w-3.5 h-3.5' />
              Running..
            </button>
          </div>
          <div className='flex items-center gap-1'>
            <button
              onClick={() => setIsMinimized(false)}
              className='p-1.5 rounded hover:bg-gray-100 dark:hover:bg-[#262626] text-gray-500 dark:text-[#a3a3a3]'
            >
              <ChevronUp className='w-4 h-4' />
            </button>
            <button className='p-1.5 rounded hover:bg-gray-100 dark:hover:bg-[#262626] text-gray-500 dark:text-[#a3a3a3]'>
              <X className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='rounded-lg border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#0C0F13] shadow-sm dark:shadow-none overflow-hidden'>
      <div className='grid grid-cols-[6fr_1px_4fr] grid-rows-[auto_auto_1fr] min-h-[400px]'>
        <div className='col-span-3 flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-[#262626] bg-slate-50 dark:bg-[#181B22]'>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            <span className='text-sm font-medium text-slate-900 dark:text-[#fafafa]'>
              Live Scan Console
            </span>
            <button type='button' className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-medium'>
              <Clock className='w-3.5 h-3.5' />
              Running..
            </button>
          </div>
          <div className='flex items-center gap-1'>
            <button
              onClick={() => setIsMinimized(true)}
              className='p-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#262626] text-gray-500 dark:text-[#a3a3a3] transition-colors'
            >
              <ChevronDown className='w-4 h-4' />
            </button>
            <button className='p-1.5 rounded hover:bg-gray-200 dark:hover:bg-[#262626] text-gray-500 dark:text-[#a3a3a3] transition-colors'>
              <X className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className='col-span-3 flex flex-col border-b border-slate-200 dark:border-[#262626]'>
          <div className='grid grid-cols-[6fr_1px_4fr]'>
            <div className='flex flex-col min-w-0'>
              <div className='px-4 pt-3 pb-0'>
                <Activitylog part='tabs' activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
            </div>
            <div className='bg-slate-200 dark:bg-[#262626] min-h-0' />
            <div className='flex flex-col min-w-0 bg-slate-50 dark:bg-[#0C0F13]'>
              <div className='px-4 pt-3 pb-0 flex items-center bg-slate-50 dark:bg-[#0C0F13]'>
                <h2 className='text-slate-900 dark:text-[#fafafa] font-semibold text-base'>Finding Log</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col min-w-0 bg-white dark:bg-[#0C0F13]'>
          <div className='flex-1 p-4 overflow-hidden min-h-0'>
            <Activitylog part='content' activeTab={activeTab} />
          </div>
        </div>
        <div className='bg-slate-200 dark:bg-[#262626] min-h-0' />
        <div className='flex flex-col min-w-0 bg-slate-50 dark:bg-[#0C0F13]'>
          <div className='flex-1 p-4 overflow-hidden min-h-0 bg-slate-50 dark:bg-[#0C0F13]'>
            <Findinglog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveScanConsole
