import { RefreshCcw } from 'lucide-react'
import React from 'react'

const SeverityDetails = () => {

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='h-[18px] w-[1px] bg-slate-500 dark:bg-[#262626]'/>
        <span className='text-[12px] text-slate-500 font-normal'>Org: <span className='text-[14px] font-medium text-black'>Project X</span></span>
        <div className='flex items-center gap-2'>
          <RefreshCcw className='w-4 h-4 text-[#0AA49C]' strokeWidth={2.5} />
          <h1 className='text-[12px] text-slate-500 font-normal'>10 mins ago</h1>
        </div>
      </div>
    </div>
  )
}

export default SeverityDetails
