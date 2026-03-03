import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200'>
      <nav className='flex items-center gap-2 text-sm'>
        <span className='font-semibold text-gray-900'>Scan</span>
        <Home className='w-4 h-4 text-gray-400' />
        <span className='text-gray-400'>/</span>
        <Link to='#' className='text-gray-500 hover:text-gray-700'>Private Assets</Link>
        <span className='text-gray-400'>/</span>
        <span className='text-[#0CC8A8] font-medium'>New Scan</span>
      </nav>
      <div className='flex gap-3'>
        <button type='button' className='px-4 py-2 rounded-lg border border-gray-300 bg-white text-slate-900 text-[14px] font-normal hover:bg-gray-50 transition'>
          Export Report
        </button>
        <button type='button' className='px-4 py-2 rounded-lg bg-red-100 border border-red-200 text-red-500 text-[14px] font-normal hover:bg-red-600 transition'>
          Stop Scan
        </button>
      </div>
    </header>
  )
}

export default Header
