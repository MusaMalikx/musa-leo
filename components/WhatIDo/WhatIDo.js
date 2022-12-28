import React from "react";
import HeaderLayout from "../Layout/HeaderLayout";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import lottie from "../../assets/animations/119356-development.json";
import useWindowSize from "../../utils/screen";

const WhatIDo = () => {
  const { width } = useWindowSize();
  return (
    <div className="mt-20">
      <HeaderLayout text="What I Do" />
      <div className="flex flex-col md:grid grid-cols-2 justify-center items-center mt-24">
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="space-y-4"
        >
          <div
            className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2"
            data-aos="fade-right"
          >
            <span className="text-primary-dark">&gt;</span>
            <div className="space-y-1">
              <strong className="uppercase font-family-montserrat">
                Design
              </strong>
              <p className=" font-family-montserrat text-sm">
                Designing a product is my favourite activity. I like to explore
                and get inspired, but the final result of my work is a
                connection between inspiration and my ideas and imagination.
              </p>
            </div>
          </div>
          <div
            className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2"
            data-aos="fade-right"
          >
            <span className="text-primary-dark">&gt;</span>
            <div className="space-y-1">
              <strong className="uppercase font-family-montserrat">
                Development
              </strong>
              <p className=" font-family-montserrat text-sm">
                When developing a product, it is especially important to create
                a reusable components which results in clarity and easier
                understanding of the code. The source that I use for this
                purpose is REACT.
              </p>
            </div>
          </div>
          <div
            className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2"
            data-aos="fade-right"
          >
            <span className="text-primary-dark">&gt;</span>
            <div className="space-y-1">
              <strong className="uppercase font-family-montserrat">
                E-commerce
              </strong>
              <p className=" font-family-montserrat text-sm">
                For me, creating ecommerce applications is a kind of an
                extension of the presentation. However, not a presentation of a
                person in the form of a website, but a product where I combine
                design , functionality and the ability to interact with the
                content of the application.
              </p>
            </div>
          </div>
          <div
            className="font-family-poppins tracking-wide text-justify mx-10 flex space-x-2"
            data-aos="fade-right"
          >
            <span className="text-primary-dark">&gt;</span>
            <div className="space-y-1">
              <strong className="uppercase font-family-montserrat">
                App / Portfolio
              </strong>
              <p className=" font-family-montserrat text-sm">
                My development beginnings lie in the creation of web portfolios.
                A portfolio website is the quickest and easiest way of
                showcasing your work as a designer or freelancer. Building on
                apps has become both challenge and joy. The diversity of
                application development mainly helps me to build up on my
                functional skills.
              </p>
            </div>
          </div>
        </motion.div>
        <div
          className="flex justify-center items-center my-5"
          data-aos="fade-left"
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: lottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled
            speed={0.8}
            height={width > 768 ? 400 : 300}
            width={width > 768 ? 400 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
