
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(42, 42, 47, 0.3)',
        zIndex: 1001,
        transformOrigin: '0%'
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #6C63FF, #A855F7)',
          scaleX,
          transformOrigin: '0%'
        }}
      />
    </motion.div>
  );
};