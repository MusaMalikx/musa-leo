import React from 'react';
import { motion } from 'framer-motion';

const HeaderLayout = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.8 }}
    >
      <div className="md:max-w-xl max-w-xs sm:max-w-lg transition-all ease-in-out mx-auto space-y-6">
        <div
          className="flex flex-row flex-nowrap items-center my-8"
        >
          <span
            className="flex-grow block border-t h-1 dark:border-primary-dark border-primary-light"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
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
    </motion.div>
  );
};

export default HeaderLayout;
