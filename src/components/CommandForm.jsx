"use client"

import { useState } from "react";

function CommandForm({ input, setInput, logs, setLogs, onCommandSubmit }) {

    const [historyIndex, setHistoryIndex] = useState(-1);


    const handleSubmit = (e) => {
        e.preventDefault();
        

        const newLog = {
            command: input.trim().toLowerCase(),
        }

        if (newLog.command === 'clear') {
            setLogs([]);
            return;
        }
        setLogs([...logs, newLog])
        setHistoryIndex(-1)
        setInput('')

        // Call the callback to focus input after command submission
        if (onCommandSubmit) {
            onCommandSubmit();
        }
    }

    
    const handleKeyUpDown = (e) => {
        // console.log(historyIndex)
        // if (e?.key === "ArrowUp" && logs.length > 0) {
        //     const newIndex = historyIndex === -1 ? logs.length - 1 : Math.max(historyIndex - 1, 0);
        //     setHistoryIndex(newIndex);
        //     setInput(logs[historyIndex].command || "");
        // }

        // if (e?.key === "ArrowDown" && logs.length > 0) {
        //     if(logs.length > 0 && historyIndex !== -1){
        //         const newIndex = historyIndex + 1;
        //         if(newIndex >= logs.length){
        //             setHistoryIndex(-1);
        //             setInput("")
        //         } else {
        //             setHistoryIndex(newIndex);
        //             setInput(logs[historyIndex].command || "");
        //         }
        //     }
        // }
    }


    return (
        <div className="flex-1 w-full">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center w-full">
                    <span>{input}</span>
                    <span
                        className={`inline-block w-2 h-5 align-middle animate-caret-blink bg-green-500 cursor-alias`}
                        style={{ animation: "caret-blink 0.95s ease-out infinite" }}
                    ></span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value || "")}
                        onKeyDown={handleKeyUpDown}
                        className="opacity-0"
                        autoFocus
                    />
                </div>
            </form>
        </div>
    )
}

export default CommandForm