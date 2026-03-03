import React from 'react'
import FindingLogCards from './FindingLogCards'

const Findinglog = () => {
  return (
    <div className='flex flex-col h-full bg-slate-50 dark:bg-[#0C0F13]'>
      <div className='flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0C0F13]'>
        <FindingLogCards />
      </div>
    </div>
  )
}

export default Findinglog
