import { additionalLearnings, education, help } from "@/constants/data";
import React from "react";

function Help() {
  return (
    <div className="md:mt-4 space-y-10">
      <p className=" mb-4 md:mb-8">Available commands:</p>
      <div>
        {help.map((h) => {
          return (
            <div
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className="flex space-y-1"
            >
              <p className="">{h.command}</p>
              <p className="md:mx-4">-</p>
              <p className="">{h.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Help;
