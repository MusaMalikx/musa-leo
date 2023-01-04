import React from "react";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const TechBadge = ({ tailwind, redux }) => {
  return (
    <>
      {tailwind && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-700 text-tailwind rounded-l text-xs sm:text-base">
            <SiTailwindcss />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 rounded-r bg-tailwind text-dark-border font-bold font-family-poppins">
            Tailwind
          </div>
        </div>
      )}
      {tailwind && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-300 text-redux rounded-l text-xs sm:text-base">
            <SiRedux />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-200 rounded-r bg-redux font-bold font-family-poppins">
            Redux
          </div>
        </div>
      )}
    </>
  );
};

export default TechBadge;
