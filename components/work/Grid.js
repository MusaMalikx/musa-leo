import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import useWindowSize from "../../utils/screen";
import GridItem from "./GridItem";
// import Amazon from "../../assets/works/amazon_main.png";
// import Krauv from "../../assets/works/krauv_main.png";
// import Netflix from "../../assets/works/netflix_main.png";
// import Hulu from "../../assets/works/hulu_main.png";
// import Nilami from "../../assets/works/nilami_main.png";
// import Umn from "../../assets/works/umn_main.png";
// import Ieee from "../../assets/works/ieee_main.png";
// import Dehaat from "../../assets/works/dehaat_main.png";
// import Port1 from "../../assets/works";
// import Port2 from "../../assets/works/dehaat_main.png";

const Grids = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const { theme } = useTheme();
  //   console.log(theme);
  const ref = useRef();
  //   const toggle = () => setClick(!click);

  // const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

  const data = [
    {
      image: "/main/umn_main.png",
    },
    {
      image: "/main/krauv_main.png",
    },
    {
      image: "/main/netflix_main.png",
    },
    {
      image: "/main/nilami_main.png",
    },
    {
      image: "/main/dehaat_main.png",
    },
    {
      image: "/main/ieee_main.png",
    },
    {
      image: "/main/amazon_main.png",
    },
    {
      image: "/main/hulu_main.png",
    },
  ];

  // const data = [
  //   {
  //     image: "/main/umn_main.png",
  //   },
  //   {
  //     image: Krauv,
  //   },
  //   {
  //     image: Netflix,
  //   },
  //   {
  //     image: Nilami,
  //   },
  //   {
  //     image: Dehaat,
  //   },
  //   {
  //     image: Ieee,
  //   },
  //   {
  //     image: Amazon,
  //   },
  //   {
  //     image: Hulu,
  //   },
  // ];

  return (
    <div className="mx-10 space-y-10">
      {/* <GridItem />
      <GridItem />
      <GridItem />
      <GridItem /> */}
      {data.map((data, i) => (
        <GridItem key={i} image={data.image} />
      ))}
      {/* <div className="grid grid-cols-2 bg-primary-dark/40  p-5 rounded-lg overflow-hidden">
        <div className="flex justify-end flex-col pb-10 space-y-4">
          <h1 className="font-bold text-4xl">Collection App</h1>
          <p>
            Vivamus dui dui, imperdiet non facilisis eget, commodo a enim. Nulla
            viverra sem dui.
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            // onClick={() => router.push("/work")}
            className="hover:bg-light/30 hover:dark:bg-dark/30 px-3 py-2 rounded-md focus:ring-2 focus:ring-primary-light focus:dark:ring-primary-dark ring-offset-2 ring-offset-light dark:ring-offset-dark "
          >
            Learn more
          </motion.button>
        </div>
        <div className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            placeholder="blur"
            width={1920}
            height={1080}
            blurDataURL="/blur.jpg"
            className="rounded-lg h-96 relative -right-10 -bottom-10 overflow-hidden"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Grids;
