import React from 'react'
import FindingLogCards from './FindingLogCards'

const Findinglog = ({ contentOnly = false }) => {
  if (contentOnly) {
    return (
      <div className='flex flex-col h-full font-mono'>
        <div className='flex-1 overflow-y-auto'>
          <FindingLogCards />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full font-mono'>
      <h2 className='text-slate-900 font-semibold text-base mb-4'>Finding Log</h2>
      <div className='flex-1 overflow-y-auto'>
        <FindingLogCards />
      </div>
    </div>
  )
}

export default Findinglog
