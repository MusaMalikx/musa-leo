import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

const Parallax = ({ children, baseVelocity = 10 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden tracking-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="scroller font-family-plaster text-3xl md:text-6xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <div className="block mr-8">{children} </div>
        <div className="block mr-8">{children} </div>
        <div className="block mr-8">{children} </div>
        <div className="block mr-8">{children} </div>
      </motion.div>
    </div>
  );
};

export default Parallax;
