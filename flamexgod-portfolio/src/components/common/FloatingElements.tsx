import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const elements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2, // 2-8px
    left: Math.random() * 100, // 0-100%
    top: Math.random() * 100, // 0-100%
    duration: Math.random() * 10 + 15, // 15-25s
    delay: Math.random() * 5, // 0-5s
  }));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(element.id) * 50, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.delay
          }}
          style={{
            position: 'absolute',
            left: `${element.left}%`,
            top: `${element.top}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            borderRadius: '50%',
            background: element.id % 2 === 0 
              ? 'linear-gradient(135deg, #6C63FF, #A855F7)'
              : 'linear-gradient(135deg, #A855F7, #6C63FF)',
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Larger floating shapes */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`large-${i}`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#6C63FF' : '#A855F7'}20, transparent)`,
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
};