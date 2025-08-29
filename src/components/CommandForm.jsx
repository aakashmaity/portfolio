"use client"

import { useState, useEffect } from "react";

function CommandForm({ input, setInput, logs, setLogs, onCommandSubmit }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('')

        const newLog = {
            command: input.trim().toLowerCase(),
        }

        if (newLog.command === 'clear') {
            setLogs([]);
            return;
        }
        setLogs([...logs, newLog])

        // Call the callback to focus input after command submission
        if (onCommandSubmit) {
            onCommandSubmit();
        }
    }
    return (
        <div className="flex-1">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <span>{input}</span>
                    <span
                        className={`inline-block w-2 h-5 align-middle animate-caret-blink bg-green-500`}
                        style={{ animation: "caret-blink 0.95s ease-out infinite"}}
                    ></span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="opacity-0"
                        autoFocus
                    />
                </div>
            </form>
        </div>
    )
}

export default CommandForm