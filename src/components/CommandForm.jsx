function CommandForm({ input, setInput, logs, setLogs }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('')
        
        const newLog = {
            command: input.trim().toLowerCase(),
        }
        
        if(newLog.command === 'clear'){
            setLogs([]);
            return;
        }
        setLogs([...logs, newLog])
    }
    return (
        <div className="flex-1">
            <form onSubmit={handleSubmit}>
                <input
                    id="terminalInput"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    size={Math.max(1, input?.length || 0)}
                    className="bg-transparent outline-none text-green-500 w-auto min-w-full"
                    aria-label="Command input"
                    autoFocus
                />
            </form>
        </div>
    )
}

export default CommandForm