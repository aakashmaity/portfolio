import React from 'react'

function Invalid({ command }) {

  if(command === ''){
    return null;
  }

  return (
    <div className='mt-3 md:mt-4 space-y-8 '>
      <p className=' text-red-800'>bash: {command}: command not found</p>

      <p>I can only provide information about Akash Maity from his portfolio.</p>
    </div>
  )
}

export default Invalid
