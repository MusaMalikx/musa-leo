import ThemeIcon from "../Theme/ThemeToggleIcon";
import { motion, useScroll, useSpring } from "framer-motion";
import DivMotion from "../Layout/Motions/DivMotion";
import { FramerMotionNavbar } from "./FramerMotionNavbar";
import { useState } from "react";
import useWindowSize from "../../utils/screen";
import { useRouter } from "next/router";

const Navbar = ({ bool }) => {
  const router = useRouter();
  const [name, setName] = useState(true);
  const { width } = useWindowSize();
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
        className="progress-bar absolute top-[144px] sm:top-[96px] left-0 right-0 h-0.5 bg-primary-light dark:bg-primary-dark rounded-r-lg z-10 origin-left"
        style={{ scaleX: width > 768 ? scaleX : scrollYProgress }}
      />
      <div className="flex items-center justify-between pt-7 pb-5 sm:py-7 ">
        {bool && (
          <div className="relative">
            <FramerMotionNavbar />
            <div className="w-20" />
          </div>
        )}
        <div className={`sm:flex space-x-1.5 ${!bool && "ml-8"} hidden`}>
          <p className="text-xl sm:text-3xl">&lt; </p>
          <div className="text-2xl sm:text-4xl font-thin font-family-noto-serif-sc tracking-widest cursor-none transition-all ease-in-out">
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
                className="font-family-montserrat whitespace-nowrap"
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
          <p className="text-xl sm:text-3xl mt-1"> &gt; </p>
        </div>
        <DivMotion className="flex flex-grow sm:flex-grow-0">
          <div className="mr-8 flex flex-grow sm:flex-grow-0 justify-between gap-4">
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={() => router.push("/work")}
              className="hover:bg-primary-dark/30 px-3 py-2 ml-8 rounded-md focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark ring-offset-2 ring-offset-light dark:ring-offset-dark "
            >
              Work
            </motion.button>
            {/* <AwesomeButton type="danger" className="bg-primary-dark">
              Work
            </AwesomeButton> */}
            <ThemeIcon />
          </div>
        </DivMotion>
      </div>
      <div className="flex items-center justify-center text-2xl sm:hidden pb-5">
        <DivMotion
          className="font-family-montserrat whitespace-nowrap"
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
      </div>
    </div>
  );
};

export default Navbar;
