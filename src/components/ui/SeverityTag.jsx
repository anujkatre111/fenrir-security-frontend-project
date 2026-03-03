import React from 'react'

const severityStyles = {
  critical: 'bg-red-500 text-white',
  high: 'bg-orange-500 text-white',
  medium: 'bg-amber-400 text-white',
  low: 'bg-green-400 text-white',
}

const SeverityTag = ({ severity = 'medium' }) => {
  const style = severityStyles[severity.toLowerCase()] ?? severityStyles.medium
  const label = severity.charAt(0).toUpperCase() + severity.slice(1)

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full tracking-tight text-xs font-thin ${style}`}
    >
      {label}
    </span>
  )
}

export default SeverityTag
