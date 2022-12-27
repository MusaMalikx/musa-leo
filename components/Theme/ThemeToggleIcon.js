import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useTransition } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { GiSun, GiMoon } from "react-icons/gi";

const ThemeIcon = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const RenderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <GiSun
          className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <GiMoon
          className="w-8 sm:w-10 h-8 sm:h-10 text-purple-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div>
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      <motion.div
        whileTap={{ scale: 0.8, transition: { duration: 0.2 }, rotate: 90 }}
      >
        <RenderThemeChanger />
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default ThemeIcon;
