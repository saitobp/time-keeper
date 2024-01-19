'use client'

import { api } from '@/trpc/react'
import { useRouter } from 'next/navigation'

type DeleteTimestampProps = {
  id: string
}

export function DeleteTimestamp(props: DeleteTimestampProps) {
  const router = useRouter()

  const deleteTimestamp = api.timestamp.delete.useMutation({
    onSuccess: () => {
      router.refresh()
    },
  })

  function sendDeleteTimestamp() {
    deleteTimestamp.mutate({ id: props.id })
  }

  if (deleteTimestamp.isLoading) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
      >
        <path
          fill='#888888'
          d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'
        >
          <animateTransform
            attributeName='transform'
            dur='0.75s'
            repeatCount='indefinite'
            type='rotate'
            values='0 12 12;360 12 12'
          />
        </path>
      </svg>
    )
  }

  return (
    <button onClick={sendDeleteTimestamp}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
      >
        <path
          fill='#888888'
          d='M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z'
        />
      </svg>
    </button>
  )
}
