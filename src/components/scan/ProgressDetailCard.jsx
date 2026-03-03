import { Earth, Map, TestTube, CheckCircle, FileText } from 'lucide-react'
import React from 'react'

const steps = [
  { label: 'Spidering', icon: Earth, active: true },
  { label: 'Mapping', icon: Map, active: false },
  { label: 'Testing', icon: TestTube, active: false },
  { label: 'Validating', icon: CheckCircle, active: false },
  { label: 'Reporting', icon: FileText, active: false },
]

const ProgressDetailCard = () => {
  return (
    <div className='flex justify-center items-center gap-6 shadow-md border border-slate-200 rounded-lg px-6 py-8'>
      <div className='flex flex-col items-center justify-center shrink-0 w-24 h-24 rounded-full bg-gray-900'>
        <span className='text-[#0CC8A8] text-2xl font-semibold'>0%</span>
        <span className='text-gray-400 text-sm font-medium'>In Progress</span>
      </div>
      <div className='h-[125px] w-[1px] bg-gray-200 shrink-0'></div>
      <div className='flex-1 flex flex-col gap-6'>
        <div className='relative flex items-start justify-between w-full pt-2 pb-1'>
          <div className='absolute left-0 right-0 top-[30px] h-0.5 bg-gray-200' />
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.label} className='relative z-10 flex flex-col items-center gap-3 shrink-0 text-gray-400'>
                <div className={`rounded-full p-3 border ${step.active ? 'bg-[#0CC8A8] text-white border-[#0CC8A8] shadow-[0_0_0_10px_rgba(12,200,168,0.5)]' : 'bg-white border-gray-200'}`}>
                  <Icon className='w-5 h-5' />
                </div>
                <span className='text-sm font-medium'>{step.label}</span>
              </div>
            )
          })}
        </div>
        <div className='h-px w-full bg-gray-200 shrink-0'></div>
        <div className='flex justify-between gap-x-6 gap-y-1 text-base'>
          <div className='flex flex-col gap-1'>
              <h1 className='text-gray-500 text-[12px] font-medium'>Scan Type</h1><h1 className='text-slate-900 text-[14px] font-semibold'>Grey Box</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-gray-500 text-[12px] font-medium'>Targets</h1><h1 className='text-slate-900 text-[14px] font-semibold'>google.com</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-gray-500 text-[12px] font-medium'>Started At</h1><h1 className='text-slate-900 text-[14px] font-semibold'>2026-03-03 10:00:00</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-gray-500 text-[12px] font-medium'>Credentials</h1><h1 className='text-slate-900 text-[14px] font-semibold'>2 Active</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-gray-500 text-[12px] font-medium'>Files</h1><h1 className='text-slate-900 text-[14px] font-semibold'>Control.pdf</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-gray-500 text-[12px] font-medium'>Checklist</h1><h1 className='text-slate-900 text-[14px] font-semibold'>40/350</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressDetailCard
