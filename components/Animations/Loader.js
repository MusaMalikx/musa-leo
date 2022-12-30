import React from "react";
import Lottie from "react-lottie";
import lottie from "../../assets/animations/71486-rounding-lines-red.json";
import useWindowSize from "../../utils/screen";

const Loader = () => {
  const { width } = useWindowSize();
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-light-border/50 dark:bg-dark-border/50 backdrop-blur-xl z-50 overflow-hidden">
      <div className="flex items-center justify-center h-full">
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
          height={width > 768 ? 300 : 200}
          width={width > 768 ? 300 : 200}
        />
      </div>
    </div>
  );
};

export default Loader;
