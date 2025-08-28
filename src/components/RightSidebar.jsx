"use client";
import HelpHeader from "./HelpHeader";
import CommandForm from "./CommandForm";
import Logs from "./Logs";
import { useEffect, useRef, useState } from "react";
import getCommandResponse from "@/helper/getCommandResponse";

function RightSidebar() {
  const [logs, setLogs] = useState([{ command: "welcome" }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto-scroll to bottom whenever logs change
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [logs]);

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
        <div className="flex items-center my-3">
          <p className="text-blue-400 mr-2">maity@portfolio:~$</p>
          <CommandForm
            input={input}
            setInput={setInput}
            logs={logs}
            setLogs={setLogs}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
