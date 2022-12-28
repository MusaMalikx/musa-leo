import Lottie from "react-lottie";
import lottie1 from "../../assets/animations/16771-heading-rectangle.json";
import lottie2 from "../../assets/animations/46147-background2.json";
import { motion } from "framer-motion";
import Image from "next/image";
import user from "../../assets/images/mr.jpg";
// import screen from "../../utils/screen";
import { useEffect, useState } from "react";
// import useWindowDimensions from "../../utils/screen";
import useWindowSize from "../../utils/screen";
import HeaderLayout from "../Layout/HeaderLayout";
import ScrollRightMotion from "../Layout/Motions/ScrollRightMotion";
import ScrollLeftMotion from "../Layout/Motions/ScrollLeftMotion";

const About = () => {
  // const { width } = useWindowDimensions();
  const { width } = useWindowSize();

  return (
    <>
      <div className="mt-20">
        {/* <p
          data-aos="zoom-in"
          className="border-2 border-dotted border-primary-dark rounded-md text-4xl px-8 py-3 font-family-dancing-script"
        >
          About
        </p> */}
        <HeaderLayout text="About Me" />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 justify-center items-center">
        <ScrollLeftMotion className="relative flex justify-center items-center">
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
              isClickToPauseDisabled
              speed={0.8}
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
        </ScrollLeftMotion>
        <ScrollRightMotion className="font-family-montserrat tracking-wide text-justify lg:text-xl mx-10">
          Welcome to my personal portfolio web. My name is Musa and I am a
          passionate developer. I am working as a freelancer. I give myself a
          mission to produce creative websites and applications with beautifull
          details. I enrich the design with my own illustrations and designs
          that are created with precision and based on your desire.
        </ScrollRightMotion>
      </div>
    </>
  );
};

export default About;
