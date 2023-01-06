import lottie1 from "../../assets/animations/63487-programming-computer.json";
import lottie4 from "../../assets/animations/53345-red-circle.json";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import useWindowSize from "../../utils/screen";
import Lottie from "react-lottie-player";

const Banner = () => {
  const { width } = useWindowSize();

  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Musa Malik",
      "Guy who loves coffee",
      "But loves to code more",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <section id="top">
      <div className="flex items-center justify-center relative">
        <div className="hidden md:flex w-full items-center justify-center">
          <Lottie
            loop
            animationData={lottie4}
            play={width > 768 ? true : false}
            style={{ width: 600, height: 600 }}
            // options={{
            //   loop: true,
            //   autoplay: true,
            //   animationData: lottie4,
            //   rendererSettings: {
            //     preserveAspectRatio: "xMidYMid slice",
            //   },
            // }}
            // isClickToPauseDisabled
            // height={600}
            // width={600}
          />
        </div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="md:absolute w-full"
        >
          <div className="flex flex-col text-nowwrap">
            <div className="overflow-hidden flex w-full items-center justify-center">
              <Lottie
                loop
                animationData={lottie1}
                play={width > 768 ? true : false}
                style={{
                  width: width > 768 ? 600 : 500,
                  height: width > 768 ? 600 : 500,
                }}
                className="m-0"
              />
            </div>
            <p className="text-center font-thin text-xs md:text-base mb-4 font-family-montserrat uppercase">
              ( Developer / Designer / Artist )
            </p>
            <p className="uppercase tracking-wider flex items-center justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center px-6 space-x-3">
              <span className="text-primary-light dark:text-primary-dark">
                &lt;
              </span>
              <span className="font-family-stencil">{text}</span>
              <span className="text-primary-light">
                <Cursor />
              </span>
              <span className="text-primary-light dark:text-primary-dark">
                /&gt;
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
