import { api } from '@/trpc/server'
import { DeleteTimestamp } from './delete-timestamp'

export async function Timestamps() {
  const thisMonth = await api.timestamp.listByMonth.query({
    month: new Date().getMonth().toString(),
  })

  function formatDateTime(timestamp: (typeof thisMonth)[0]) {
    const date = new Date(timestamp.date).toLocaleDateString()
    const time = new Date(timestamp.date).toLocaleTimeString()

    return `${date} - ${time}`
  }

  return (
    <div className='mt-10'>
      <p>This month</p>
      {thisMonth.map((timestamp) => (
        <div
          key={timestamp.id}
          className='flex h-8 items-center justify-between gap-2 bg-white'
        >
          {formatDateTime(timestamp)}

          <div className='flex gap-1'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#888888'
                  d='M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z'
                ></path>
              </svg>
            </button>

            <DeleteTimestamp id={timestamp.id} />
          </div>
        </div>
      ))}
    </div>
  )
}
