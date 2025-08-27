"use client"
import HelpHeader from './Helpheader'
import CommandForm from './CommandForm'
import Logs from './Logs'
import { useState } from 'react'

function RightSidebar() {

    const [logs, setLogs] = useState([])
    const [input, setInput] = useState('')


    return (
        <div className="flex flex-col h-full w-full overflow-hidden">

            <HelpHeader />

            <div className="flex-1 overflow-y-auto font-mono text-sm p-2">
                <div className="space-y-2">
                    <Logs logs={logs} setLogs={setLogs}/>
                    <div className='flex mt-5'>
                        <p className="text-gray-300 mr-3">$ <span className="text-green-400">whoami</span></p>
                        <CommandForm input={input} setInput={setInput} logs={logs} setLogs={setLogs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar