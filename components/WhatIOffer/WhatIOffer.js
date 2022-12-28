import React from "react";
import Lottie from "react-lottie";
import HeaderLayout from "../Layout/HeaderLayout";
import lottie from "../../assets/animations/17391-responsive-morphing-infographics.json";
import useWindowSize from "../../utils/screen";
import ScrollLeftMotion from "../Layout/Motions/ScrollLeftMotion";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiAffinitydesigner, SiMaterialdesign } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import ScrollRightMotion from "../Layout/Motions/ScrollRightMotion";

const WhatIOffer = () => {
  const { width } = useWindowSize();
  return (
    <div className="mt-20">
      <HeaderLayout text="What I Offer" />
      <div className="flex flex-col md:flex-row items-center justify-between md:max-w-3xl mx-auto mt-20 space-y-5 md:space-y-0">
        <ScrollLeftMotion className="flex flex-col items-center md:items-start">
          <AiOutlineAntDesign
            className="mb-6"
            color="var(--primary-dark)"
            size={width > 768 ? 100 : 70}
          />
          <p className="uppercase md:text-xl">Design</p>
        </ScrollLeftMotion>
        <ScrollRightMotion className="flex flex-col items-center md:items-end">
          <SiAffinitydesigner
            className="mb-6"
            color="var(--primary-dark)"
            size={width > 768 ? 100 : 70}
          />
          <p className="uppercase md:text-xl">Portfolio development</p>
        </ScrollRightMotion>
      </div>
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
        height={width > 768 ? 400 : 300}
        width={width > 768 ? 400 : 300}
      />
      <div className="flex flex-col md:flex-row items-center justify-between md:max-w-3xl mx-auto space-y-5 md:space-y-0">
        <ScrollLeftMotion className="flex flex-col items-center md:items-start">
          <CgIfDesign
            className="mb-6"
            color="var(--primary-dark)"
            size={width > 768 ? 100 : 70}
          />
          <p className="uppercase md:text-xl">Ecommerce Development</p>
        </ScrollLeftMotion>
        <ScrollRightMotion className="flex flex-col items-center md:items-end">
          <SiMaterialdesign
            className="mb-6"
            color="var(--primary-dark)"
            size={width > 768 ? 100 : 70}
          />
          <p className="uppercase md:text-xl">Application development</p>
        </ScrollRightMotion>
      </div>
    </div>
  );
};

export default WhatIOffer;
