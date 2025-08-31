"use client"

import { useEffect, useState } from 'react'

function Footer() {

  const [time, setTime] = useState(null)
  
  useEffect(() => {
    const interval = setTimeout(() => {
      setTime(new Date().toLocaleString());
    }, 1000)

    return () => clearInterval(interval);
  },[time])

  return (
    <div className='flex flex-row justify-between md:p-3 p-2 border-t border-t-green-500'>
        <span className=' text-green-500 text-sm'>maity@portfolio:~$</span>
        <span className=' text-green-500 text-sm'>{ time }</span>
    </div>
  )
}

export default Footer