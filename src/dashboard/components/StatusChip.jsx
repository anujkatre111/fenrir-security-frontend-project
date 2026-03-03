import React from 'react'

const statusStyles = {
  completed:
    'bg-[#E6F4EA] dark:bg-[#E6F4EA]/90 text-[#2E7D32] border border-[#A5D6A7] dark:border-[#81C784]',
  scheduled:
    'bg-[#ECEFF1] dark:bg-[#ECEFF1]/90 text-[#607D8B] border border-[#B0BEC5] dark:border-[#90A4AE]',
  failed:
    'bg-[#FFEBEE] dark:bg-[#FFEBEE]/90 text-[#D32F2F] border border-[#EF9A9A] dark:border-[#E57373]',
}

const StatusChip = ({ status = 'scheduled' }) => {
  const style = statusStyles[status.toLowerCase()] ?? statusStyles.scheduled
  const label = status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${style}`}
    >
      {label}
    </span>
  )
}

export default StatusChip
