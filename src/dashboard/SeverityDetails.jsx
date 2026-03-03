import { ArrowDown, ArrowUp, Ban, RefreshCcw, Search, TriangleAlert } from 'lucide-react'
import React from 'react'

const SeverityDetails = () => {

  return (
    <div className='rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#181B22] shadow-md dark:shadow-none p-6'>
      <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black dark:text-white'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Owner: <span className='text-[14px] font-medium text-black dark:text-white'>Nammagiri</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Total Scans: <span className='text-[14px] font-medium text-black dark:text-white'>100</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Scheduled: <span className='text-[14px] font-medium text-black dark:text-white'>1000</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Rescans: <span className='text-[14px] font-medium text-black dark:text-white'>100</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] tracking-tight text-slate-500 font-normal'>Failed Scans: <span className='text-[14px] font-medium text-black dark:text-white'>100</span></span>
        <div className='flex items-center gap-2'>
          <RefreshCcw className='w-4 h-4 text-[#0AA49C]' strokeWidth={2.5} />
          <h1 className='text-[12px] tracking-tight text-slate-500 font-normal'>10 mins ago</h1>
        </div>
      </div>

<div className='flex items-center justify-between gap-6'>
      <div className='flex flex-col w-fit'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] font-medium text-gray-500 dark:text-gray-400'>Critical Severity</h1>
          <div className='flex w-fit h-fit p-2 rounded items-center bg-pink-100 dark:bg-pink-900/30'>
            <Ban className='w-4 h-4 text-pink-600 dark:text-pink-400' strokeWidth={3.5} />
          </div>
        </div>
        <div className='flex gap-2'>
          <h1 className='text-[24px] font-medium'>86</h1>
          <span className='flex items-center text-[10px] text-red-500 font-medium'><ArrowUp className='w-4 h-4' strokeWidth={2.5} />+2% increase than yesterday</span>
        </div>
      </div>

      <div className='flex flex-col w-fit'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] font-medium text-gray-500 dark:text-gray-400'>High Severity</h1>
          <div className='flex w-fit h-fit p-2 rounded items-center bg-orange-100 dark:bg-orange-900/30'>
            <TriangleAlert className='w-4 h-4 text-orange-600 dark:text-orange-400' strokeWidth={3.5} />
          </div>
        </div>
        <div className='flex gap-2'>
          <h1 className='text-[24px] font-medium'>16</h1>
          <span className='flex items-center text-[10px] text-orange-500 font-medium'><ArrowUp className='w-4 h-4' strokeWidth={2.5} />+0.9% increase than yesterday</span>
        </div>
      </div>

      <div className='flex flex-col w-fit'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] font-medium text-gray-500 dark:text-gray-400'>Medium Severity</h1>
          <div className='flex w-fit h-fit p-2 rounded items-center bg-amber-100 dark:bg-amber-900/30'>
            <TriangleAlert className='w-4 h-4 text-amber-600 dark:text-amber-400' strokeWidth={3.5} />
          </div>
        </div>
        <div className='flex gap-2'>
          <h1 className='text-[24px] font-medium'>26</h1>
          <span className='flex items-center text-[10px] text-green-500 font-medium'><ArrowDown className='w-4 h-4' strokeWidth={2.5} />0.9% decrease than yesterday</span>
        </div>
      </div>

      <div className='flex flex-col w-fit'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[20px] font-medium text-gray-500 dark:text-gray-400'>Low Severity</h1>
          <div className='flex w-fit h-fit p-2 rounded items-center bg-sky-100 dark:bg-sky-900/30'>
            <Search className='w-4 h-4 text-sky-600 dark:text-sky-400' strokeWidth={3.5} />
          </div>
        </div>
        <div className='flex gap-2'>
          <h1 className='text-[24px] font-medium'>16</h1>
          <span className='flex items-center text-[10px] text-red-500 font-medium'><ArrowUp className='w-4 h-4' strokeWidth={2.5} />+0.9% increase than yesterday</span>
        </div>
      </div>
</div>

      </div>
    </div>
  )
}

export default SeverityDetails
