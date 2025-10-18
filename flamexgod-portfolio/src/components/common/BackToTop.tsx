import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 25px rgba(108, 99, 255, 0.5)'
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Back to top"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};