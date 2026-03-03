import { Bell, Calendar, HomeIcon, ListCheck, Scan, Settings, HelpCircle, ChevronRight } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const sidebarItems1 = [
  { label: 'Dashboard', icon: <HomeIcon className='w-[14px] h-[14px]' />, path: '/dashboard' },
  { label: 'Projects', icon: <ListCheck className='w-[14px] h-[14px]' />, path: '/projects' },
  { label: 'Scans', icon: <Scan className='w-[14px] h-[14px]' />, path: '/scans' },
  { label: 'Schedule', icon: <Calendar className='w-[14px] h-[14px]' />, path: '/schedule' }
  ]
const sidebarItems2 = [
  { label: 'Notifications', icon: <Bell className='w-[14px] h-[14px]' />, path: '/notifications' },
  { label: 'Settings', icon: <Settings className='w-[14px] h-[14px]' />, path: '/settings' },
  { label: 'Support', icon: <HelpCircle className='w-[14px] h-[14px]' />, path: '/support' },
]

const Sidebar = () => {
  return (
    <aside className='fixed left-0 top-0 z-40 flex flex-col justify-between w-[200px] h-screen shadow-md border-r border-slate-200 bg-white'>
      <div>
      <div className='flex items-center gap-2 px-4 py-6'>
      <svg className='inline-block mr-[8px]' width="24" height="24" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="80" fill="#0AA49C"/>
      <circle cx="80" cy="80" r="30" fill="white"/>
      </svg>
      <span className='text-[#0AA49C] text-[18px]'>aps</span>
      </div>
        <div className='flex flex-col gap-1 px-4 py-6'>
          {sidebarItems1.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 w-full px-3 py-2 rounded-[24px] text-[14px] font-normal transition
                 ${isActive
                   ? 'bg-[#0CC8A8]/20 text-[#03927a]'
                   : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                 }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
        <hr className='w-full border-slate-200' />
        <div className='flex flex-col gap-1 px-4 py-6'>
          {sidebarItems2.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 w-full px-3 py-2 rounded-[24px] text-[14px] font-normal transition
                 ${isActive
                   ? 'bg-[#0CC8A8]/20 text-[#03927a]'
                   : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                 }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className='px-4 pb-4'>
        <button type="button" className='flex items-center gap-2 w-full px-2 py-2 rounded-lg hover:bg-slate-100 transition text-left'>
        <div className='w-8 h-8 rounded-full bg-[#0CC8A8]/30 flex items-center justify-center shrink-0'>
          <span className='text-xs font-medium text-[#0CC8A8]'>JD</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className='text-[10px] text-slate-400 truncate'>admin@edu.co</span>
          <span className='text-[12px] text-slate-600 font-medium truncate'>John Doe</span>
        </div>
        <ChevronRight className='w-4 h-4 text-slate-400 shrink-0' />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
