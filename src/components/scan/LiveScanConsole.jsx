import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, X } from 'lucide-react'
import Activitylog from './Activitylog'
import Findinglog from './Findinglog'

const LiveScanConsole = () => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState('activity')

  if (isMinimized) {
    return (
      <div className='rounded-lg border border-slate-200 bg-white shadow-sm'>
        <div className='flex items-center justify-between px-4 py-3'>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-green-500' />
            <span className='text-sm font-medium text-slate-900'>
              Live Scan Console
            </span>
            <span className='flex items-center gap-1 text-gray-500 text-xs'>
              <Clock className='w-3.5 h-3.5' />
              Running..
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <button
              onClick={() => setIsMinimized(false)}
              className='p-1.5 rounded hover:bg-gray-100 text-gray-500'
            >
              <ChevronUp className='w-4 h-4' />
            </button>
            <button className='p-1.5 rounded hover:bg-gray-100 text-gray-500'>
              <X className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden'>
      <div className='grid grid-cols-[6fr_1px_4fr] grid-rows-[auto_auto_auto_1fr_auto] min-h-[400px]'>
        <div className='col-span-3 flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50'>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            <span className='text-sm font-medium text-slate-900'>
              Live Scan Console
            </span>
            <span className='flex items-center gap-1.5 text-gray-500 text-xs'>
              <Clock className='w-3.5 h-3.5' />
              Running..
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <button
              onClick={() => setIsMinimized(true)}
              className='p-1.5 rounded hover:bg-gray-200 text-gray-500 transition-colors'
            >
              <ChevronDown className='w-4 h-4' />
            </button>
            <button className='p-1.5 rounded hover:bg-gray-200 text-gray-500 transition-colors'>
              <X className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className='flex flex-col min-w-0'>
          <div className='px-4 py-3'>
            <Activitylog part='tabs' activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
        <div className='bg-slate-200 min-h-0' />
        <div className='flex flex-col min-w-0'>
          <div className='px-4 py-3 flex items-center'>
            <h2 className='text-slate-900 font-semibold text-base'>Finding Log</h2>
          </div>
        </div>

        <div className='col-span-3'>
          <hr className='border-0 border-t border-slate-200' />
        </div>

        <div className='flex flex-col min-w-0'>
          <div className='flex-1 p-4 overflow-hidden min-h-0'>
            <Activitylog part='content' activeTab={activeTab} />
          </div>
        </div>
        <div className='bg-slate-200 min-h-0' />
        <div className='flex flex-col min-w-0'>
          <div className='flex-1 p-4 overflow-hidden min-h-0'>
            <Findinglog contentOnly />
          </div>
        </div>

        <div className='col-span-3 px-4 py-2 border-t border-slate-200 bg-slate-50 text-xs text-gray-500 flex flex-wrap gap-x-6 gap-y-1'>
        <span>Sub-agents:</span>
        <span>Parallel Executions:</span>
        <span>Operations:</span>
        <span>Critical:</span>
        <span>High:</span>
        <span>Medium:</span>
        <span>Low:</span>
        </div>
      </div>
    </div>
  )
}

export default LiveScanConsole
