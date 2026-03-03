import React from 'react'
import SeverityTag from '../ui/SeverityTag'

const findings = [
  {
    severity: 'critical',
    title: 'SQL Injection in Authentication Endpoint',
    endpoint: '/api/users/profile',
    description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    timestamp: '10:45:23',
  },
  {
    severity: 'high',
    title: 'Unauthorized Access to User Metadata',
    endpoint: '/api/auth/login',
    description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    timestamp: '10:45:23',
  },
  {
    severity: 'medium',
    title: 'Broken Authentication Rate Limiting',
    endpoint: '/api/search',
    description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    timestamp: '10:45:23',
  },
]

const FindingLogCards = () => {
  return (
    <div className='flex flex-col gap-4 text-sm'>
      {findings.map((finding) => (
        <div
          key={finding.title}
          className='rounded-[16px] bg-white dark:bg-[#181B22] p-4 shadow-sm dark:shadow-none border border-slate-100 dark:border-[#404040]'
        >
          <div className='flex justify-between items-start gap-4 mb-3'>
            <SeverityTag severity={finding.severity} />
            <span className='text-gray-400 dark:text-[#a3a3a3] text-xs font-mono font-medium shrink-0'>
              {finding.timestamp}
            </span>
          </div>
          <h3 className='text-slate-900 dark:text-white font-semibold text-base mb-1'>
            {finding.title}
          </h3>
          <p className='text-[#2dd4bf] text-sm font-medium mb-2'>
            {finding.endpoint}
          </p>
          <p className='text-gray-500 dark:text-[#d4d4d4] text-sm leading-relaxed'>
            {finding.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default FindingLogCards
