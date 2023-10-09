import Image from 'next/image'
import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Button, setButton] = useState(0)
  return (
    <div className='flex flex-col w-full'>
      <label>
        {Button}
      </label>
      <div className='flex gap-2'>
        <button className='py-2 px-4 rounded-lg bg-[#ffacac]' onClick={()=>setButton(Button - 1)}>
          minus
        </button>
        <button className='py-2 px-4 rounded-lg bg-[#ffacac]' onClick={()=>setButton(Button + 1)}>
          plus
        </button>
      </div>
    </div>

  )
}
