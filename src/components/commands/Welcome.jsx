import { welcome } from "@/constants/data";
import React from "react";

function Welcome() {
  return (
    <div className="space-y-1 mt-4">
      <p>{welcome.intro}</p>
      <p>{welcome.description}</p>

      <p className="my-6">
        Type 'help' to see available commands!
      </p>
    </div>
  );
}

export default Welcome;
