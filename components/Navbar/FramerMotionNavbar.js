import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../utils/useDimensions";
import { SiKnowledgebase, SiTodoist } from "react-icons/si";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 60px 53px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const FramerMotionNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      {/* <FramerMotionNavbarBg toggleOpen={() => toggleOpen()} isOpen={isOpen} /> */}
      <motion.nav
        className="absolute top-0 left-0 bottom-0 w-[300px] z-20"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="background fixed top-0 left-0 bottom-0 w-[300px] bg-light-border dark:bg-dark-border border-r-2 border-primary-light dark:border-primary-dark h-screen"
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

//--------
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({ text }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 mb-5 flex items-center cursor-pointer"
    >
      <div className="icon-placeholder flex items-center justify-center w-10 h-10 mr-5 rounded-[50%] flex-[40px 0] border-2 dark:border-primary-dark text-border-light border-primary-light">
        {text.icon}
      </div>
      <a
        href={text.id}
        className="text-placeholder rounded text-center flex-1 border-2 dark:border-primary-dark border-primary-light"
      >
        {text.text}
      </a>
    </motion.li>
  );
};

//-------------
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--primary-dark)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer fixed w-12 h-12 outline-0 border-0 top-[25px] sm:top-[30px] left-[36px] rounded-[50%] flex items-center justify-center"
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);
//-------------
const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul className="m-0 p-6 absolute w-56 top-[100px]" variants={variants2}>
    {itemIds.map((text, i) => (
      <MenuItem i={i} key={i} text={text} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    text: "About me",
    id: "#about",
    icon: <SiKnowledgebase />,
  },
  {
    text: "What I Do",
    id: "#whatIDo",
    icon: <SiTodoist />,
  },
  {
    text: "What I Offer",
    id: "#whatIOffer",
    icon: <TfiLayoutSliderAlt />,
  },
  {
    text: "Skills",
    id: "#skills",
    icon: <GiSkills />,
  },
];
