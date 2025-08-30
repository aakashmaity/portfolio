import { contact } from "@/constants/data";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="mt-3 md:mt-4 space-y-4">
      <p className=" mb-4 md:mb-8">📬 Get in touch:</p>

      <div className="space-y-1">
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>
          GitHub:{" "}
          <Link href={contact.github} className=" text-blue-500 cursor-pointer">
            {contact.github}
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href={contact.linkedin}
            className=" text-blue-500 cursor-pointer"
          >
            {contact.linkedin}
          </Link>
        </p>
      </div>

      <p className=" mb-4">Feel free to reach out!</p>
    </div>
  );
}

export default Contact;
