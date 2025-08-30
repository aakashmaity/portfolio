import { about } from "@/constants/data";
import React from "react";

function About() {
  return (
    <div className="mt-3 space-y-7 md:mt-4">
      <p className="mb-4 md:mb-8">{about.intro}</p>
      <p>{about.description}</p>
      <div>
        <p className="mb-2">Background:</p>
        <div className="pb-4 space-y-1">
          {about.background.map((val) => (
            <p
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className=" whitespace-pre-wrap"
            >
              - {val}
            </p>
          ))}
        </div>
      </div>

      <p className="mb-4">
        Feel free to explore more using the 'projects', 'skills', or 'contact' commands!
      </p>
    </div>
  );
}

export default About;
