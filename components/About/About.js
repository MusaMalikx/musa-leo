import Lottie from "react-lottie";
import lottie1 from "../../assets/animations/16771-heading-rectangle.json";
import lottie2 from "../../assets/animations/46147-background2.json";
import { motion } from "framer-motion";
import Image from "next/image";
import user from "../../assets/images/mr.jpg";
// import screen from "../../utils/screen";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/screen";

const About = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div className="mt-20">
        {/* <p
          data-aos="zoom-in"
          className="border-2 border-dotted border-primary-dark rounded-md text-4xl px-8 py-3 font-family-dancing-script"
        >
          About
        </p> */}
        <div class="md:max-w-xl max-w-xs sm:max-w-lg transition-all ease-in-out mx-auto space-y-6">
          <div class="flex flex-row flex-nowrap items-center my-8">
            <span
              class="flex-grow block border-t h-1 dark:border-primary-dark border-primary-light"
              aria-hidden="true"
              role="presentation"
            ></span>
            <span class="flex-none block mx-4 border-2 border-dotted dark:border-primary-light border-primary-dark rounded-md text-xl md:text-4xl px-8 py-3 font-family-dancing-script">
              About
            </span>
            <span
              class="flex-grow block border-t h-1 dark:border-primary-dark border-primary-light"
              aria-hidden="true"
              role="presentation"
            ></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 justify-center items-center">
        <div className="relative flex justify-center items-center">
          <div className="z-10">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottie2,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              speed={0.5}
              height={width > 768 ? 600 : 400}
              width={width > 768 ? 600 : 400}
            />
          </div>
          <div className="absolute z-0">
            <Image
              className="rounded-full"
              src={user}
              width={width > 768 ? 300 : 200}
              height={width > 768 ? 300 : 200}
            />
          </div>
        </div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="font-family-poppins tracking-wide text-justify lg:text-xl mx-10">
            Welcome to my personal portfolio web. My name is Musa and I am a
            passionate developer. I am working as a freelancer. I give myself a
            mission to produce creative websites and applications with
            beautifull details. I enrich the design with my own illustrations
            and designs that are created with precision and based on your
            desire.
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
