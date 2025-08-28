import { help } from '@/constants/data'
import React from 'react'

function HelpHeader() {
  return (
    <div className='hidden md:flex text-green-500 border-b border-b-green-500 font-mono text-sm gap-3 p-2 overflow-auto'>
      {
        help.map((c, index) => {
            return (
                <div key={Date.now() + Math.round(Math.random() * 1e9)} className='flex gap-3'>
                    <span>{c.command}</span>
                    { index != help?.length - 1 ? <span>|</span> : null}
                </div>
            )
        })
      }
      
    </div>
  )
}

export default HelpHeader
