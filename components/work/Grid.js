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

  return (
    <div className="mx-10 space-y-10">
      {data.map((data, i) => (
        <GridItem key={i} data={data} />
      ))}
    </div>
  );
};

const data = [
  {
    image: "/main/umn_main.png",
    title: "UMN",
  },
  {
    image: "/main/krauv_main.png",
    title: "KRAUV",
  },
  {
    image: "/main/port_main_2.png",
    title: "PORTFOLIO 2.0",
  },
  {
    image: "/main/netflix_main.png",
    title: "NETFLIX",
  },
  {
    image: "/main/nilami_main.png",
    title: "NILAMI",
  },
  {
    image: "/main/dehaat_main.png",
    title: "DEHAAT",
  },
  {
    image: "/main/ieee_main.png",
    title: "IEEE",
  },
  {
    image: "/main/amazon_main.png",
    title: "AMAZON",
  },
  {
    image: "/main/hulu_main.png",
    title: "HULU",
  },
  {
    image: "/main/port_main_1.png",
    title: "PORTFOLIO 1.0",
  },
];

export default Grids;
