import { motion } from 'framer-motion';

const ScrollRightMotion = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ ease: 'easeOut', duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRightMotion;
