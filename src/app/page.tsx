import { CurrentTime } from './_components/current-time'
import { CheckIn } from './_components/check-in'
import { Timestamps } from './_components/timestamp'

export default async function Home() {
  return (
    <main className='gradient flex h-screen w-full flex-col justify-center'>
      <div className='flex h-80 w-full items-center justify-center'>
        <CurrentTime />
      </div>

      <div className='items-top relative flex h-full w-full justify-center rounded-t-3xl bg-white'>
        <CheckIn />
        <Timestamps />
      </div>
    </main>
  )
}
