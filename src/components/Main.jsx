import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

function Main() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full min-h-0">
      
      <div className="w-full md:w-2/5 h-1/2 md:h-full p-3 border-b md:border-b-0 md:border-r border-green-500 min-h-0">
        <LeftSidebar />
      </div>

      <div className="hidden md:block w-px bg-green-500" />
      
      <div className="w-full md:w-3/5 h-1/2 md:h-full p-3 min-h-0">
        <RightSidebar />
      </div>

    </div>
  )
}

export default Main