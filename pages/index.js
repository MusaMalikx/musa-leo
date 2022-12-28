import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeIcon from "../components/Theme/ThemeToggleIcon";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import WhatIOffer from "../components/WhatIOffer/WhatIOffer";
import { motion, useScroll } from "framer-motion";


const Home = () => {

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div
        className="progress-bar fixed top-[98px] left-0 right-0 h-1 bg-primary-light dark:bg-primary-dark rounded-r-lg z-20 origin-left"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <div className="min-h-screen font-family-montserrat">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat&family=Noto+Serif+SC&family=Poppins&display=swap" />
        </Head>

        <Navbar />
        <Banner />
        <main className="container mx-auto py-7">
          <About />
          <WhatIDo />
          <WhatIOffer />
        </main>

        {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
      </div>
    </>
  );
};

export default Home;
