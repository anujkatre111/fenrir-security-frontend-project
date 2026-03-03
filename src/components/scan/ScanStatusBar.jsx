import React from 'react'

const ScanStatusBar = ({
  subAgents = 0,
  parallelExecutions = 2,
  operations = 1,
  critical = 0,
  high = 0,
  medium = 0,
  low = 0,
}) => {
  return (
    <div className='flex items-center justify-between px-6 py-3 border-t border-slate-200 dark:border-[#262626] bg-slate-50 dark:bg-[#0C0F13] text-xs text-slate-700 dark:text-[#a3a3a3]'>
      <div className='flex items-center gap-x-6 gap-y-1 flex-wrap'>
        <div className='flex items-center gap-2'>
          <span className='w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-[#0AA49C] shrink-0' />
          <span>Sub-Agents: {subAgents}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-[#0AA49C] shrink-0' />
          <span>Parallel Executions: {parallelExecutions}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-[#0AA49C] shrink-0' />
          <span>Operations: {operations}</span>
        </div>
      </div>
      <div className='flex items-center gap-x-6 gap-y-1 flex-wrap'>
        <span className='text-red-500 font-medium'>Critical: {critical}</span>
        <span className='text-orange-500 font-medium'>High: {high}</span>
        <span className='text-amber-500 font-medium'>Medium: {medium}</span>
        <span className='text-green-500 font-medium'>Low: {low}</span>
      </div>
    </div>
  )
}

export default ScanStatusBar
