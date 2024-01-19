'use client'

import { useState, useEffect } from 'react'

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
      setCurrentDate(new Date())
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='mb-4 flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-white border-opacity-50 text-white shadow-circle-sm'>
      <p className='text-2xl font-medium' suppressHydrationWarning>
        {currentTime.toLocaleTimeString()}
      </p>

      <p className='text-sm font-thin' suppressHydrationWarning>
        {currentDate.toLocaleDateString()}
      </p>
    </div>
  )
}
