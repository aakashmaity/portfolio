import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-between p-2 border-t border-t-green-500'>
        <span className=' text-green-500 text-sm font-mono'>maity@portfolio:~$</span>
        <span className=' text-green-500 text-sm font-mono'>{ new Date().toISOString()}</span>
    </div>
  )
}

export default Footer