"use client"

import { useEffect, useState } from "react";

function CommandForm({ input, setInput, logs, setLogs, onCommandSubmit }) {

    const [historyIndex, setHistoryIndex] = useState(-1);


    useEffect(() => {
        console.log(historyIndex);
        if(historyIndex === -1){
            setInput("");
        } else {
            setInput(logs[historyIndex].command)
        }
    }, [historyIndex])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted")


        const newLog = {
            command: input?.trim()?.toLowerCase(),
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


    const handleKeyUpDown = async (e) => {
        if (e?.key?.toLowerCase() === "enter") {
            handleSubmit(e);
        }

        if (e?.key?.toLowerCase() === "arrowup") {
            e.preventDefault();
            setHistoryIndex((prev) => prev === -1 ? logs.length - 1 : Math.max(prev - 1, 0));
        }

        if (e?.key?.toLowerCase() === "arrowdown") {
            e.preventDefault();
            setHistoryIndex((prev) => Math.min(prev + 1, logs.length - 1));
        }
    }


    return (
        <div className="flex-1 w-full">
            <form>
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
                        className="opacity-0 w-full"
                        autoFocus
                    />
                </div>
            </form>
        </div>
    )
}

export default CommandForm