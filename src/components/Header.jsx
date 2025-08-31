import React from 'react'

function Header() {
  return (
    <div className='flex md:justify-start justify-center md:p-3 p-2 border-b border-b-green-500'>
        <div className='flex flex-col mb-2'>
            <span className=' text-green-400 font-bold text-2xl font-mono'>Akash Maity</span>
            <span className=' text-gray-400 font-mono'>Software engineer</span>
        </div>
    </div>
  )
}

export default Header