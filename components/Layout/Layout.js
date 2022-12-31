import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Animations/Loader";
// import { ScrollerMotion } from 'scroller-motion';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { motion, MotionConfig } from "framer-motion";

const Layout = ({ children, router, bool }) => {
  //   console.log(router.asPath);

  //   const variants = {
  //     hidden: { opacity: 0, x: 0, y: 20 },
  //     enter: { opacity: 1, x: 0, y: 0 },
  //     exit: { opacity: 0, x: 0, y: 20 },
  //   };

  return (
    <div>
      {/* <MotionConfig reducedMotion="always"> */}
        {/* <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        //   variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
        className="min-h-screen"
      > */}
        <Navbar bool={bool} />
        {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Musa Malik - Homepage</title>
      </Head> */}

        {children}
        {/* </motion.div> */}
      {/* </MotionConfig> */}
    </div>
  );
};

export default Layout;
