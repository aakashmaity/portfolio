import React from 'react'

function Logs({ logs, setLogs}) {
  return (
    <div>
        {logs?.map((log) => {
            return (
                <span key={log}>{log}</span>
            )
        })}
    </div>
  )
}

export default Logs