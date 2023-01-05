import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = ({ image }) => {
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
  });

  return (
    <div className="">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showIndicators
        showStatus
        // showThumbs
        dynamicHeight={false}
        interval={2000}
        swipeable
        className="max-w-3xl mx-auto"
        // {...getConfigurableProps()}
        // centerMode
        // centerSlidePercentage={80}
        // {...getConfigurableProps()}
      >
        {/* <div className="bg-banner1 h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] bg-cover bg-center" /> */}
        {/* <div> */}
        {/* <img className="h-96 bg-primary-dark" src="assets/1.jpeg" /> */}
        {/* <div className="px-5"> */}
        <Image src={image} height={1080} width={1920} className="rounded-lg" />
        {/* </div> */}
        {/* <div className="px-5"> */}
        <Image src={image} height={1080} width={1920} className="rounded-lg" />
        {/* </div> */}
        {/* <p className="legend">Legend 1</p> */}
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Slider;
