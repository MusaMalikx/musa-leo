import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = ({ images }) => {

  return (
    <div className="">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showIndicators
        showStatus
        showThumbs={false}
        dynamicHeight={false}
        interval={2000}
        swipeable
        className="max-w-3xl mx-auto"
      >
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            height={1080}
            width={1920}
            alt="image"
            className="rounded-lg"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
