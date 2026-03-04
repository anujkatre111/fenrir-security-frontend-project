import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className='flex items-center justify-between px-6 py-4 bg-white dark:bg-[#0C0F13] border-b border-gray-200 dark:border-[#262626]'>
      <nav className='flex items-center gap-2 text-sm'>
        <span className='font-semibold text-gray-900 dark:text-white'>Scan</span>
        <Home className='w-4 h-4 text-gray-400 dark:text-[#a3a3a3]' />
        <span className='text-gray-400 dark:text-[#a3a3a3]'>/</span>
        <Link to='#' className='text-gray-500 dark:text-[#a3a3a3] hover:text-gray-700 dark:hover:text-white'>Private Assets</Link>
        <span className='text-gray-400 dark:text-slate-400'>/</span>
        <span className='text-[#0AA49C] font-medium'>New Scan</span>
      </nav>
      <div className='flex items-center gap-3'>
        <button
          onClick={toggleTheme}
          className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#262626] transition'
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? <Sun className='w-4 h-4 text-slate-600 dark:text-[#a3a3a3]' /> : <Moon className='w-4 h-4 text-slate-600' />}
        </button>
        <button type='button' className='px-4 py-2 rounded-lg border border-gray-300 dark:border-[#262626] bg-white dark:bg-[#262626] text-slate-900 dark:text-white text-[14px] font-normal hover:bg-gray-50 dark:hover:bg-[#404040] transition'>
          Export Report
        </button>
        <button type='button' className='px-4 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 text-rose-600 dark:text-rose-400 text-[14px] font-normal hover:bg-rose-100 dark:hover:bg-rose-950/50 transition'>
          Stop Scan
        </button>
      </div>
    </header>
  )
}

export default Header
