import { motion } from "framer-motion";

const DivMotion = ({ children, onMouseEnter, onMouseLeave, className }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default DivMotion;
