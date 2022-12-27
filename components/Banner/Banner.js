import React from "react";
import Lottie from "react-lottie";
import lottie1 from "../../assets/animations/63487-programming-computer.json";
import lottie2 from "../../assets/animations/74499-circle.json";
import lottie3 from "../../assets/animations/86594-dots-red.json";
import lottie4 from "../../assets/animations/53345-red-circle.json";
import { motion } from "framer-motion";
import LeftMotion from "../Layout/Motions/LeftMotion";
import RightMotion from "../Layout/Motions/RightMotion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import screen from "../../utils/screen";
import useWindowDimensions from "../../utils/screen";

const Banner = () => {

  const { height, width } = useWindowDimensions();

  const [
    text,
    //, helper
  ] = useTypewriter({
    words: [
      "Hi, The Name's Musa Malik",
      "Guy who loves coffee",
      "But loves to code more",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="flex items-center justify-center relative">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: lottie4,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        speed={0.5}
        height={600}
        width={600}
      />
      {/* <div>
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
          height={400}
          width={400}
        />
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className=" font-family-poppins tracking-wide text-justify">
            Welcome to my personal portfolio web. My name is Musa and I am a
            passionate developer. I am working as a freelancer. I give myself a
            mission to produce creative websites and applications with
            beautifull details. I enrich the design with my own illustrations
            and designs that are created with precision and based on your
            desire.
          </div>
        </motion.div>
      </div> */}
      {/* <div className="relative">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie3,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          speed={0.5}
          height={500}
          width={500}
        />
        <p className="uppercase tracking-wider text-lg md:text-3xl text-center font-family-montserrat font-semibold px-6 space-x-4 absolute top-[50%]">
          <span className="text-primary-light dark:text-primary-dark">
            &lt;
          </span>
          <span>{text}</span>
          <span className="text-primary-light">
            <Cursor />
          </span>
          <span className="text-primary-light dark:text-primary-dark">
            /&gt;
          </span>
        </p>
      </div> */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -40, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="absolute "
      >
        {/* md:left-[5%] lg:left-[24%] top-[5%] */}
        <div className="flex flex-col flex-grow text-nowwrap">
          <div className="">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottie1,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              speed={0.5}
              height={width > 768 ? 500 : 400}
              width={width > 768 ? 500 : 400}
            />
          </div>
          {/* <div className="md:hidden">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottie1,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              speed={0.5}
              height={400}
              width={400}
            />
          </div> */}
          <p className="text-center font-thin text-xs md:text-base mb-2 font-family-montserrat uppercase">
            ( Developer / Designer / Artist )
          </p>
          <p className="uppercase tracking-wider text-base sm:text-lg md:text-3xl text-center font-family-montserrat font-semibold px-6 space-x-3">
            <span className="text-primary-light dark:text-primary-dark">
              &lt;
            </span>
            <span>{text}</span>
            <span className="text-primary-light">
              <Cursor />
            </span>
            <span className="text-primary-light dark:text-primary-dark">
              /&gt;
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
