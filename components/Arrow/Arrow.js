import React, { useEffect, useState } from "react";
import useWindowSize from "../../utils/screen";
import { FaAngleDoubleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Arrow = () => {
  const [scrollY, setScrollY] = useState(0);
  const { height } = useWindowSize();

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollY, h);

  return (
    <>
      {scrollY > height / 2 && (
        <motion.div
          initial={{ x: 40, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          whileTap={{ scale: 1.5 }}
          exit="exit"
          className="bg-primary-dark fixed bottom-10 right-10 cursor-pointer z-50 rounded-full"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <FaAngleDoubleUp className="m-2 text-dark-border text-3xl md:text-5xl" />
        </motion.div>
      )}
    </>
  );
};

export default Arrow;
