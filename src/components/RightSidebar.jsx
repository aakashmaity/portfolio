"use client";
import HelpHeader from "./HelpHeader";
import CommandForm from "./CommandForm";
import Logs from "./Logs";
import { useEffect, useRef, useState, useCallback } from "react";

// Custom hook for auto-scrolling logs
function useAutoScroll(deps) {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollToBottom = () => {
      const el = scrollRef.current;
      if (!el) return;
      
      el.scrollTo({ 
        top: el.scrollHeight, 
        behavior: "smooth" 
      });
    };
    
    scrollToBottom();
  }, deps);
  
  return scrollRef;
}

// Custom hook for input focus management
function useInputFocus() {
  const focusInput = useCallback(() => {
    const focusAndScroll = () => {
      const input = document.getElementById('terminal');
      if (input) {
        input.focus();
        input.scrollIntoView({ 
          block: 'start' 
        });
      }
    };
    
    // Small delay to ensure logs are rendered
    setTimeout(focusAndScroll, 100);
  }, []);
  
  return focusInput;
}

function RightSidebar() {
  const [logs, setLogs] = useState([{ command: "welcome" }]);
  const [input, setInput] = useState("");
  
  // Use custom hooks for cleaner logic
  const scrollRef = useAutoScroll([logs]);
  const focusInput = useInputFocus();

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <HelpHeader />

      {/* Scrollable logs area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto text-[15px] md:text-[17px] pr-1"
      >
        <div className="space-y-2">
          <Logs logs={logs} />
        </div>
        <div id="terminal" className="flex items-center my-3">
          <p className="text-blue-400 mr-2">maity@portfolio:~$</p>
          <CommandForm
            input={input}
            setInput={setInput}
            logs={logs}
            setLogs={setLogs}
            onCommandSubmit={focusInput}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
