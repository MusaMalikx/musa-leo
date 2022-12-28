import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import ThemeIcon from "../Theme/ThemeToggleIcon";
import GreaterImg from "../../assets/images/greater-than-sign-icon.ico";
import LesserImg from "../../assets/images/less-than-sign-icon.ico";
import { motion, useScroll, useSpring } from "framer-motion";
import DivMotion from "../Layout/Motions/DivMotion";
import { FramerMotionNavbar } from "./FramerMotionNavbar";

const Navbar = () => {
  const [name, setName] = useState(true);
  const toggleName = () => setName(!name);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="sticky top-0 backdrop-blur-md shadow-md bg-light/40 dark:bg-dark/40 z-10">
      <motion.div
        className="progress-bar absolute top-[98px] left-0 right-0 h-0.5 bg-primary-light dark:bg-primary-dark rounded-r-lg z-10 origin-left"
        style={{ scaleX }}
      />
      <div className="flex items-center justify-between py-7 pl-5 sm:pl-10 ">
        <div className="flex items-center space-x-2 relative pl-14">
          {/* <Image src={LesserImg} /> */}
          <FramerMotionNavbar />
          {/* <FramerMotionNavbarBg /> */}
          <p className="text-3xl mt-1.5">&lt; </p>
          <div className="text-4xl font-thin font-family-noto-serif-sc tracking-widest cursor-none">
            {name && (
              <DivMotion onMouseEnter={toggleName}>
                <strong className="text-primary-light dark:text-primary-dark">
                  穆
                </strong>
                萨
                <strong className="text-primary-light dark:text-primary-dark">
                  马
                </strong>
                利克
              </DivMotion>
            )}
            {!name && (
              <DivMotion
                className=" font-family-montserrat"
                onMouseLeave={toggleName}
              >
                <strong className="text-primary-light dark:text-primary-dark">
                  M
                </strong>
                usa{" "}
                <strong className="text-primary-light dark:text-primary-dark">
                  M
                </strong>
                alik
              </DivMotion>
            )}
          </div>
          <p className="text-3xl mt-1.5"> &gt; </p>
          {/* <Image src={GreaterImg} /> */}
          {/* <span>{" />"}</span> */}
        </div>
        <DivMotion className="flex">
          <div className="mr-8">
            <ThemeIcon />
          </div>
          {/* <Hamburger /> */}
        </DivMotion>
      </div>
      {/* <div className="">
          <motion.div
            className="progress-bar absolute z-10 h-0.5 bg-primary-light dark:bg-primary-dark rounded-r-lg origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div> */}
    </div>
  );
};

export default Navbar;
