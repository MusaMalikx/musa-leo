import { motion } from "framer-motion";

const LeftMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 40, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftMotion;
