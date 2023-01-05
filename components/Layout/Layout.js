import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Animations/Loader";
// import { ScrollerMotion } from 'scroller-motion';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion, MotionConfig } from "framer-motion";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import ScrollRightMotion from "./Motions/ScrollRightMotion";
import useWindowSize from "../../utils/screen";
import Arrow from "../Arrow/Arrow";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, router, bool }) => {
  //   console.log(router.asPath);

  const { height } = useWindowSize();

  // useEffect(() => {
  //   console.log(window.screenY);
  // });

  return (
    <div>
      {/* <MotionConfig reducedMotion="always"> */}
      <Navbar bool={bool} />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        //   variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
        className="min-h-screen font-family-montserrat flex-grow"
      >
        {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Musa Malik - Homepage</title>
      </Head> */}

        {children}
      </motion.div>
      <Footer />
      <Arrow />
      {/* </MotionConfig> */}
    </div>
  );
};

export default Layout;
