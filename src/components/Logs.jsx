import React from "react";
import Project from "./commands/Project";
import About from "./commands/About";
import Contact from "./commands/Contact";
import Education from "./commands/Education";
import Skills from "./commands/Skills";
import Certification from "./commands/Certification";
import Help from "./commands/Help";
import Experience from "./commands/Experience";
import Welcome from "./commands/Welcome";
import Invalid from "./commands/Invalid";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


function Logs({ logs }) {

  const renderComponent = (cmd) => {
    switch (cmd) {
      case 'welcome':
        return <Welcome />
      case 'about':
        return <About />
      case 'education':
        return <Education />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Project />
      case 'skills':
        return <Skills />
      case 'certifications':
        return <Certification/>
      case 'help':
        return <Help />
      case 'contact':
        return <Contact />
      default:
        return <Invalid command={cmd}/>
    }
  }

  return (
    <div>
      {logs.map((log) => {
        return (
          <div key={Date.now() + Math.round(Math.random() * 1e9)}>
            <div className='flex items-center mt-1 md:mt-3'>
              <p className="text-blue-400 mr-2">maity@portfolio:~$</p>
              <p className="text-green-500 w-auto min-w-full">{log.command}</p>
            </div>
            <div className="">
              {
                renderComponent(log.command)
              }
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Logs;
