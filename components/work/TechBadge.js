import React from "react";
import {
  SiChakraui,
  SiFirebase,
  SiFramer,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const TechBadge = ({
  tailwind,
  redux,
  firebase,
  react,
  next,
  nest,
  chakra,
  framer,
}) => {
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
      {redux && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-300 text-redux rounded-l text-xs sm:text-base">
            <SiRedux />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-200 rounded-r bg-redux font-bold font-family-poppins">
            Redux
          </div>
        </div>
      )}
      {firebase && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-700 text-firebase rounded-l text-xs sm:text-base">
            <SiFirebase />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-700 rounded-r bg-firebase font-bold font-family-poppins">
            Firebase
          </div>
        </div>
      )}
      {react && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-700 text-react rounded-l text-xs sm:text-base">
            <SiReact />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-700 rounded-r bg-react font-bold font-family-poppins">
            React Js
          </div>
        </div>
      )}
      {next && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-300 text-black rounded-l text-xs sm:text-base">
            <SiNextdotjs />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-200 rounded-r bg-gray-800 font-bold font-family-poppins">
            Next Js
          </div>
        </div>
      )}
      {nest && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-200 text-nest rounded-l text-xs sm:text-base">
            <SiNestjs />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-200 rounded-r bg-nest font-bold font-family-poppins">
            Nest Js
          </div>
        </div>
      )}
      {chakra && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-700 text-chakra rounded-l text-xs sm:text-base">
            <SiChakraui />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-700 rounded-r bg-chakra font-bold font-family-poppins">
            Chakra UI
          </div>
        </div>
      )}
      {framer && (
        <div className="flex items-center">
          <div className="px-2 py-1 bg-gray-300 text-black rounded-l text-xs sm:text-base">
            <SiFramer />
          </div>
          <div className="text-xs sm:text-sm px-2 py-0.5 text-gray-200 rounded-r bg-gray-800 font-bold font-family-poppins">
            Framer Motion
          </div>
        </div>
      )}
    </>
  );
};

export default TechBadge;
