import commands from '@/lib/commands'
import React from 'react'

function Helpheader() {
  return (
    <div className='flex text-green-500 border-b-1 border-b-green-500 font-mono text-sm gap-3 p-2'>
      {
        commands.map((c) => {
            return (
                <div key={c.command} className='flex gap-3'>
                    <span>{c.command}</span>
                    <span>|</span>
                </div>
            )
        })
      }
      
    </div>
  )
}

export default Helpheader
