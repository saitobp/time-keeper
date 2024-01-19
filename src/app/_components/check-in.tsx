'use client'

import { api } from '@/trpc/react'
import { useRouter } from 'next/navigation'

export function CheckIn() {
  const router = useRouter()

  const checkIn = api.timestamp.create.useMutation({
    onSuccess: () => {
      router.refresh()
    },
  })

  function sendCheckIn() {
    checkIn.mutate({ date: new Date().toISOString() })
  }

  return (
    <button
      className='gradient-btn border-1 active: absolute -top-6 h-12 rounded-3xl border-2 border-opacity-50 px-4 text-white shadow-xl'
      onClick={sendCheckIn}
    >
      {checkIn.isLoading ? 'Loading...' : 'Check in'}
    </button>
  )
}
