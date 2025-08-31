import { additionalLearnings, education, help } from "@/constants/data";
import React from "react";

function Help() {
  return (
    <div className="mt-3 md:mt-4 space-y-10">
      <p className=" mb-4 md:mb-8">Available commands:</p>
      <div>
        {help.map((h) => {
          return (
            <div
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className="flex space-y-1 items-center"
            >
              <span className="pr-3 md:w-[150px]">{h.command}</span>
              <span className="pr-2  md:w-[50px] content-center">-</span>
              <span className="">{h.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Help;
