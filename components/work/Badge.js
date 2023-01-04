import Link from "next/link";
import React from "react";
import { BsLink,BsGithub } from "react-icons/bs";

const Badge = ({ text, link, linkText, source, sourceText }) => {
  return (
    <div className="flex items-center text-xs sm:text-base">
      <div className="dark:bg-primary-dark/50 font-bold w-fit rounded bg-primary-light/50 px-2 py-0.5 mr-2">
        {text}
      </div>
      {link && (
        <Link
          target="_blank"
          href="https://www.youtube.com/"
          className="hover:underline hover:underline-offset-2 hover:dark:text-primary-dark hover:text-primary-light"
        >
          <div className="flex space-x-1 items-center">
            <BsLink />
            <p>hellox</p>
          </div>
        </Link>
      )}
      {source && (
        <Link
          target="_blank"
          href="https://www.youtube.com/"
          className="hover:underline hover:underline-offset-2 hover:dark:text-primary-dark hover:text-primary-light"
        >
          <div className="flex space-x-1 items-center">
            <BsGithub />
            <p>hellox</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Badge;
