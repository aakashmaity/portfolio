import { certifications } from "@/constants/data";
import Link from "next/link";
import React from "react";

function Certification() {
  return (
    <div className="md:mt-4">
      <p className=" mb-4 md:mb-8">🥇 Certifications:</p>
      <div>
        <p>Technical Certifications: </p>
        <div className="space-y-1">
          {certifications.map((c) => {
            return (
              <div
                key={Date.now() + Math.round(Math.random() * 1e9)}
                className="pb-4 space-y-1"
              >
                <p>
                  - {c.name}{" "}
                  <Link href={c.link} className=" text-blue-500 cursor-pointer">
                    Link
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <p className=" mb-4">Visit my LinkedIn profile - 'contact' - for a complete list of certifications.</p>
    </div>
  );
}

export default Certification;
