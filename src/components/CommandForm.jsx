"use client"
import { useState } from 'react'


function CommandForm({ input, setInput, logs, setLogs }) {

    const handleSubmit = (e) => {
        alert(input)
        input = ''
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-green-400"
                    autoFocus
                />
            </form>
        </div>
    )
}

export default CommandForm