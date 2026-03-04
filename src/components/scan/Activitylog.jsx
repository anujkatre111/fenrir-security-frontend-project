import React, { useState } from 'react'

const activityEntries = [
  {
    time: '09:00:00',
    text: "I'll begin a systematic penetration test on ",
    highlights: [
      { text: 'helpdesk.democorp.com', type: 'green' },
      { text: '. Let me start with reconnaissance and enumeration', type: 'none' },
    ],
  },
  {
    time: '09:01:00',
    text: "Good! target is online. Now let me perform port scanning to identify running services",
  },
  {
    time: '09:02:00',
    text: 'Excellent reconnaissance results\n- ',
    highlights: [
      { text: 'helpdesk.democorp.com', type: 'green' },
      { text: ': Apache httpd 2.4.65 on port 80 (web server)', type: 'none' },
    ],
    suffix: "\nLet me probe the web server on target first to understand its structure",
  },
  {
    time: '09:03:00',
    text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"",
    highlights: [
      { text: 'TODO: Delete the testing account (test:test)', type: 'amber' },
      { text: ')\". Let me test this credential. The login redirects to ', type: 'none' },
      { text: '/password/test', type: 'teal' },
      { text: '. Let me follow that path and explore it', type: 'none' },
    ],
  },
  {
    time: '09:04:00',
    text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach",
  },
  {
    time: '09:05:00',
    text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ",
    highlights: [
      { text: 'test:test', type: 'green' },
      { text: ' password directly on other endpoints', type: 'none' },
    ],
  },
  {
    time: '09:06:00',
    text: "Great! I can access the dashboard using the '",
    highlights: [
      { text: 'X-UserId: 10032', type: 'blue' },
      { text: "' header. The dashboard shows \"Welcome, John Doe\". This suggests an ", type: 'none' },
      { text: 'IDOR vulnerability', type: 'bold' },
      { text: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..", type: 'none' },
    ],
  },
]

const Activitylog = ({ part = 'full', activeTab, onTabChange }) => {
  const [internalTab, setInternalTab] = useState('activity')
  const tab = activeTab ?? internalTab
  const setTab = onTabChange ?? setInternalTab

  if (part === 'tabs') {
    return (
      <div className='flex gap-6 -mb-px' role="tablist" aria-label="Console tabs">
        <button
          onClick={() => setTab('activity')}
          role="tab"
          aria-selected={tab === 'activity'}
          aria-controls="activity-panel"
          id="activity-tab"
          className={`pb-3 text-sm font-medium transition-colors ${
            tab === 'activity'
              ? 'text-[#0AA49C] border-b-2 border-[#0AA49C]'
              : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-700 dark:hover:text-[#fafafa]'
          }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setTab('verification')}
          role="tab"
          aria-selected={tab === 'verification'}
          aria-controls="verification-panel"
          id="verification-tab"
          className={`pb-3 text-sm font-medium transition-colors ${
            tab === 'verification'
              ? 'text-[#0AA49C] border-b-2 border-[#0AA49C]'
              : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-700 dark:hover:text-[#fafafa]'
          }`}
        >
          Verification Loops
        </button>
      </div>
    )
  }

  if (part === 'content') {
    return (
      <div className='flex flex-col h-full'>
        <div className='flex-1 overflow-y-auto space-y-4 font-mono text-sm'>
        {tab === 'activity' &&
          activityEntries.map((entry) => (
            <div key={entry.time} className='leading-relaxed'>
              <span className='text-gray-400 dark:text-[#737373] mr-2'>
                [{entry.time}]
              </span>
              <span className='text-slate-700 dark:text-[#fafafa] whitespace-pre-line'>
                {entry.text}
                {entry.highlights?.map((h, i) => {
                  if (h.type === 'green' || h.type === 'teal')
                    return (
                      <span key={i} className='text-[#0AA49C] font-medium'>
                        {h.text}
                      </span>
                    )
                  if (h.type === 'amber')
                    return (
                      <span key={i} className='text-[#0d4d47] dark:text-[#0d9488] font-medium'>
                        {h.text}
                      </span>
                    )
                  if (h.type === 'dark')
                    return (
                      <span
                        key={i}
                        className='bg-slate-700 dark:bg-[#262626] text-white px-1.5 py-0.5 rounded mx-0.5'
                      >
                        {h.text}
                      </span>
                    )
                  if (h.type === 'blue')
                    return (
                      <span
                        key={i}
                        className='bg-green-600 text-white px-1.5 py-0.5 rounded mx-0.5 font-medium'
                      >
                        {h.text}
                      </span>
                    )
                  if (h.type === 'bold')
                    return (
                      <span
                        key={i}
                        className='text-red-600 dark:text-red-500 font-semibold'
                      >
                        {h.text}
                      </span>
                    )
                  return <span key={i}>{h.text}</span>
                })}
                {entry.suffix}
              </span>
            </div>
          ))}
        {tab === 'verification' && (
          <p className='text-gray-500 dark:text-[#a3a3a3] text-sm'>No verification loops yet.</p>
        )}
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='flex gap-6 border-b border-gray-200 dark:border-[#262626] mb-4' role="tablist" aria-label="Console tabs">
        <button
          onClick={() => setTab('activity')}
          role="tab"
          aria-selected={tab === 'activity'}
          className={`pb-3 text-sm font-medium transition-colors ${
            tab === 'activity'
              ? 'text-[#0AA49C] border-b-2 border-[#0AA49C]'
              : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-700 dark:hover:text-[#fafafa]'
          }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setTab('verification')}
          role="tab"
          aria-selected={tab === 'verification'}
          className={`pb-3 text-sm font-medium transition-colors ${
            tab === 'verification'
              ? 'text-[#0AA49C] border-b-2 border-[#0AA49C]'
              : 'text-gray-500 dark:text-[#a3a3a3] hover:text-gray-700 dark:hover:text-[#fafafa]'
          }`}
        >
          Verification Loops
        </button>
      </div>

      <div className='flex-1 overflow-y-auto space-y-4 font-mono text-sm'>
        {tab === 'activity' &&
          activityEntries.map((entry) => (
            <div key={entry.time} className='leading-relaxed'>
              <span className='text-gray-400 dark:text-[#737373] mr-2'>
                [{entry.time}]
              </span>
              <span className='text-slate-700 dark:text-[#fafafa] whitespace-pre-line'>
                {entry.text}
                {entry.highlights?.map((h, i) => {
                  if (h.type === 'green' || h.type === 'teal')
                    return (
                      <span key={i} className='text-[#0AA49C] font-medium'>
                        {h.text}
                      </span>
                    )
                  if (h.type === 'amber')
                    return (
                      <span key={i} className='text-[#0d4d47] dark:text-[#0d9488] font-medium'>
                        {h.text}
                      </span>
                    )
                  if (h.type === 'dark')
                    return (
                      <span
                        key={i}
                        className='bg-slate-700 dark:bg-[#262626] text-white px-1.5 py-0.5 rounded mx-0.5'
                      >
                        {h.text}
                      </span>
                    )
                  if (h.type === 'blue')
                    return (
                      <span
                        key={i}
                        className='bg-green-600 text-white px-1.5 py-0.5 rounded mx-0.5 font-medium'
                      >
                        {h.text}
                      </span>
                    )
                  if (h.type === 'bold')
                    return (
                      <span
                        key={i}
                        className='text-red-600 dark:text-red-500 font-semibold'
                      >
                        {h.text}
                      </span>
                    )
                  return <span key={i}>{h.text}</span>
                })}
                {entry.suffix}
              </span>
            </div>
          ))}
        {tab === 'verification' && (
          <p className='text-gray-500 dark:text-[#a3a3a3] text-sm'>No verification loops yet.</p>
        )}
      </div>
    </div>
  )
}

export default Activitylog
