import React from 'react'

const Skeleton = ({ className = '' }) => (
  <div
    className={`animate-pulse rounded bg-slate-200 dark:bg-[#404040] ${className}`}
    aria-hidden="true"
  />
)

export const SeverityDetailsSkeleton = () => (
  <div className='rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#181B22] shadow-md dark:shadow-none p-6'>
    <div className='flex flex-col gap-8'>
      <div className='flex flex-wrap items-center gap-4'>
        <Skeleton className='h-5 w-24' />
        <Skeleton className='h-5 w-28' />
        <Skeleton className='h-5 w-24' />
        <Skeleton className='h-5 w-20' />
        <Skeleton className='h-5 w-16' />
      </div>
      <div className='flex flex-wrap items-center justify-between gap-6'>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className='flex flex-col gap-2'>
            <Skeleton className='h-5 w-28' />
            <Skeleton className='h-8 w-12' />
            <Skeleton className='h-4 w-36' />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const ScanTableSkeleton = () => (
  <div className='rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#181B22] shadow-md dark:shadow-none overflow-hidden'>
    <div className='flex items-center justify-between gap-4 p-4 border-b border-slate-200 dark:border-[#404040]'>
      <Skeleton className='h-10 flex-1 max-w-md' />
      <div className='flex gap-2'>
        <Skeleton className='h-10 w-20' />
        <Skeleton className='h-10 w-24' />
        <Skeleton className='h-10 w-28' />
      </div>
    </div>
    <div className='p-4'>
      <div className='space-y-3'>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Skeleton key={i} className='h-12 w-full' />
        ))}
      </div>
    </div>
    <div className='flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-[#404040]'>
      <Skeleton className='h-4 w-32' />
      <div className='flex gap-1'>
        <Skeleton className='h-9 w-9' />
        <Skeleton className='h-9 w-9' />
      </div>
    </div>
  </div>
)

export const ProgressDetailSkeleton = () => (
  <div className='flex items-center gap-6 rounded-lg border border-slate-200 dark:border-[#404040] bg-white dark:bg-[#181B22] p-6'>
    <Skeleton className='h-24 w-24 rounded-full shrink-0' />
    <div className='flex-1 space-y-4'>
      <div className='flex gap-4'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className='h-10 w-10 rounded-full' />
        ))}
      </div>
      <div className='flex flex-wrap gap-4'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className='h-5 w-24' />
        ))}
      </div>
    </div>
  </div>
)

export const LiveConsoleSkeleton = () => (
  <div className='rounded-lg border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#0C0F13] overflow-hidden min-h-[300px]'>
    <div className='flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-[#262626]'>
      <div className='flex gap-2'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-32' />
        <Skeleton className='h-6 w-20 rounded-full' />
      </div>
    </div>
    <div className='grid grid-cols-[1fr_1px_1fr] min-h-[250px]'>
      <div className='p-4 space-y-3'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className='h-4 w-full' />
        ))}
      </div>
      <div className='bg-slate-200 dark:bg-[#262626]' />
      <div className='p-4 space-y-4'>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className='h-20 w-full rounded' />
        ))}
      </div>
    </div>
  </div>
)
