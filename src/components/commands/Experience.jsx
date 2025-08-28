import { experiences } from "@/constants/data";
import React from "react";

function Experience() {
  return (
    <div className="md:mt-4 space-y-10">
      <p className=" mb-4 md:mb-8">💼 Experience:</p>
      <div>
        {experiences.map((exp) => {
          return (
            <div
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className="space-y-1"
            >
              <div>
                <span className="">{exp.role} | </span>
                <span className="">{exp.company} </span>
                <span className="">
                  ({exp.from} - {exp.to})
                </span>
              </div>
              <div className="space-y-1">
                {exp.tasks.map((val) => (
                  <p key={Date.now() + Math.round(Math.random() * 1e9)}>
                    - {val}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className=" mb-4">Type 'projects' to see my project work.</p>
    </div>
  );
}

export default Experience;
