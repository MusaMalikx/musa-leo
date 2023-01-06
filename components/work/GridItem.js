import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";
import useWindowSize from "../../utils/screen";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/features/postReducer";

const GridItem = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.5 },
      }}
      whileFocus={{ scale: 0.8 }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 bg-primary-dark/60  p-5 rounded-lg overflow-hidden"
      >
        <div className="flex justify-end mt-10 md:mt-0 flex-col pb-10 md:pb-0 mr-5 space-y-4">
          <p className="font-bold text-2xl md:text-4xl">{data.title}</p>
          <p className="text-sm md:text-base">
            Description Vivamus dui dui, imperdiet non facilisis eget, commodo a
            enim. Nulla viverra sem dui.
          </p>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              router.push(`/work/${data.title.toLowerCase()}`);
              dispatch(setData(data));
            }}
            className="hover:bg-light/30 cursor-pointer flex items-center justify-center bg-light/20 dark:bg-dark/20 hover:dark:bg-dark/30 px-3 py-2 rounded-md focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark ring-offset-2 ring-offset-light dark:ring-offset-dark "
          >
            Learn more
          </motion.div>
        </div>
        <motion.div
          whileHover={{
            transition: {
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            },
          }}
          className="my-auto"
        >
          <Image
            src={data.image}
            placeholder="blur"
            width={1920}
            height={1080}
            blurDataURL="/blur.jpg"
            alt="image"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridItem;
