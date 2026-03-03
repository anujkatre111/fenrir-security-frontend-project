import React from 'react'

const ProgressBar = ({ value = 0, failed = false }) => {
  const fillColor = failed ? 'bg-red-500' : 'bg-[#0AA49C]'
  const trackColor = 'bg-slate-200 dark:bg-slate-600'

  return (
    <div className='flex items-center gap-2 min-w-[100px]'>
      <div className='flex-1 h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-600'>
        <div
          className={`h-full rounded-full transition-all ${fillColor}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      <span className='text-xs font-medium text-slate-700 dark:text-slate-300 w-8 text-right shrink-0'>
        {value}%
      </span>
    </div>
  )
}

export default ProgressBar
