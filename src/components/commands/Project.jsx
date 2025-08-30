import { projects } from "@/constants/data";
import Link from "next/link";
import React from "react";

function Project() {
  return (
    <div className="mt-3 md:mt-4">
      <p className=" mb-4 md:mb-8">🚀 Projects:</p>
      <div>
        {projects.map((p) => {
          return (
            <div
              key={Date.now() + Math.round(Math.random() * 1e9)}
              className="pb-4 space-y-1"
            >
              <p className=" pb-2">
                {p.id}. {p.name}
              </p>
              <p className=" pl-6">{p.description}</p>

              <p className=" pl-6">Technologies: {p.technology}</p>
              <p className=" pl-6">
                GitHub:{" "}
                <Link href={p.github} className=" text-blue-600 cursor-pointer">
                  Link
                </Link>
              </p>
              <p className=" pl-6">
                Link:{" "}
                <Link href={p.link} className=" text-blue-600 cursor-pointer">
                  Live
                </Link>
              </p>
            </div>
          );
        })}
      </div>
      <p className=" mb-4">Type 'contact' to discuss collaborations!</p>
    </div>
  );
}

export default Project;
