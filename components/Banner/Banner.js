import Lottie from 'react-lottie';
import lottie1 from '../../assets/animations/63487-programming-computer.json';
import lottie4 from '../../assets/animations/53345-red-circle.json';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import useWindowSize from '../../utils/screen';

const Banner = () => {
  const { width } = useWindowSize();

  const [text] = useTypewriter({
    words: ["Hi, The Name's Musa Malik", 'Guy who loves coffee', 'But loves to code more'],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="flex items-center justify-center relative">
      <div className="hidden md:block">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie4,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          isClickToPauseDisabled
          height={600}
          width={600}
        />
      </div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -40, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        className="md:absolute "
      >
        <div className="flex flex-col flex-grow text-nowwrap">
          <div className="">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottie1,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              isClickToPauseDisabled
              height={width > 768 ? 500 : 400}
              width={width > 768 ? 500 : 400}
            />
          </div>
          <p className="text-center font-thin text-xs md:text-base mb-2 font-family-montserrat uppercase">
            ( Developer / Designer / Artist )
          </p>
          <p className="uppercase tracking-wider text-lg sm:text-xl md:text-3xl text-center font-family-montserrat font-semibold px-6 space-x-3">
            <span className="text-primary-light dark:text-primary-dark">&lt;</span>
            <span>{text}</span>
            <span className="text-primary-light">
              <Cursor />
            </span>
            <span className="text-primary-light dark:text-primary-dark">/&gt;</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
