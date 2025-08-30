import { skills } from "@/constants/data";
import React from "react";

function Skills() {
  return (
    <div className="mt-3 md:mt-4 space-y-5">
      <p className="mb-4 md:mb-8">👩🏻‍💻 Technical Skills:</p>

      <div>
        <p>Programming Languages:</p>
        <div>
          {skills.languages.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)}>- {val}</p>
          ))}
        </div>
      </div>

      <div>
        <p>Frontend:</p>
        <div>
          {skills.frontend.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)}>- {val}</p>
          ))}
        </div>
      </div>

      <div>
        <p>Backend:</p>
        <div>
          {skills.backend.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)}>- {val}</p>
          ))}
        </div>
      </div>

      <div>
        <p>Cloud and DevOps Technology:</p>
        <div>
          {skills.cloud.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)}>- {val}</p>
          ))}
        </div>
      </div>

      <div>
        <p>Tools:</p>
        <div>
          {skills.tools.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)}>- {val}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
