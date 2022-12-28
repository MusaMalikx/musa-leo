import React from "react";

const HeaderLayout = ({ text }) => {
  return (
    <div>
      <div className="md:max-w-xl max-w-xs sm:max-w-lg transition-all ease-in-out mx-auto space-y-6">
        <div
          data-aos="zoom-in"
          className="flex flex-row flex-nowrap items-center my-8"
        >
          <span
            className="flex-grow block border-t h-1 dark:border-primary-dark border-primary-light"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
            data-aos="zoom-in"
            className="flex-none block mx-4 border-2 border-dotted dark:border-primary-light border-primary-dark rounded-md text-xl md:text-4xl px-8 py-3 font-family-montserrat"
          >
            {text}
          </span>
          <span
            className="flex-grow block border-t h-1 dark:border-primary-dark border-primary-light"
            aria-hidden="true"
            role="presentation"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
