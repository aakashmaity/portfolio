import { additionalLearnings, education } from "@/constants/data";
import React from "react";

function Education() {
  return (
    <div className="mt-3 md:mt-4 space-y-10">
      <p className=" mb-4 md:mb-8">🎓 Education:</p>
      <div>
        {education.map((edu) => {
          return (
            <div
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className="space-y-1"
            >
              <p className="">{edu.info}</p>
              <p className="">- {edu.goal}</p>
              <p className="">- Relevant courseword: {edu.coursework}</p>
            </div>
          );
        })}
      </div>

      <div className=" space-y-1">
        <p>Additional Learnings:</p>
        <div className="space-y-1">
          {additionalLearnings.map((val) => (
            <p key={Date.now() + Math.round(Math.random() * 1e9)} className="">
              - {val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
