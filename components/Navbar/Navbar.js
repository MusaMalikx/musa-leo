import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import { GhostNavbar } from "react-hamburger-menus";
import ThemeIcon from "../Theme/ThemeToggleIcon";
import GreaterImg from "../../assets/images/greater-than-sign-icon.ico";
import LesserImg from "../../assets/images/less-than-sign-icon.ico";
import { motion } from "framer-motion";
import DivMotion from "../Layout/Motions/DivMotion";

const Navbar = () => {
  const [name, setName] = useState(true);

  const toggleName = () => setName(!name);

  return (
    <div className="flex items-center justify-between sticky top-0 z-50 py-7 pl-5 sm:pl-10 backdrop-blur-md shadow-md bg-light/40 dark:bg-dark/40">
      <div className="flex items-center space-x-2">
        {/* <Image src={LesserImg} /> */}
        <p className="text-xl sm:text-3xl mt-1.5">&lt; </p>
        <div className="text-2xl sm:text-4xl font-thin font-family-noto-serif-sc tracking-widest mt-2.5 cursor-none">
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
        <p className="text-xl sm:text-3xl mt-1.5"> &gt; </p>
        {/* <Image src={GreaterImg} /> */}
        {/* <span>{" />"}</span> */}
      </div>
      <DivMotion className="flex pr-20">
        <div className="mt-1.5 mr-3 md:mr-5">
          <ThemeIcon />
        </div>
        <Hamburger />
      </DivMotion>
    </div>
  );
};

const Hamburger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <GhostNavbar
      //   styles={{
      //     floatButtonSize: 1.3,
      //     floatButtonX: 85,
      //     floatButtonY: 4,
      //   }}
      styles={{
        // fontColor: "#fff",
        // fontHoverColor: "black",
        // listHoverColor: ["transparent", "#fff"],
        // floatButtonX: 87,
        floatButtonY: 0,
        navigationButton: {
          //   borderRadius: "5px",
          width: "3.125rem",
          height: "3.125rem",
          //   backgroundColor: "black",
        },
        navigationBackground: {
          backgroundColor: "var(--primary-dark)",
        },
        // iconColor: "#fff",
      }}
    >
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>ELEMENTS</li>
        <li>CONTACT</li>
      </ul>
    </GhostNavbar>
  );
};

export default Navbar;
