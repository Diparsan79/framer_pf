import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DIPARSAN_ASCII = `
██████  ██ ██████   █████  ██████  ███████  █████  ███    ██
██   ██ ██ ██   ██ ██   ██ ██   ██ ██      ██   ██ ████   ██
██   ██ ██ ██████  ███████ ██████  ███████ ███████ ██ ██  ██
██   ██ ██ ██      ██   ██ ██   ██      ██ ██   ██ ██  ██ ██
██████  ██ ██      ██   ██ ██   ██ ███████ ██   ██ ██   ████
`;

// Simplified mobile version for better readability on small screens
const DIPARSAN_ASCII_MOBILE = `
D I P A R S A N
P A T H A K
`;

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Select appropriate ASCII based on screen size
  const asciiLines = isMobile 
    ? DIPARSAN_ASCII_MOBILE.trim().split('\n').filter(line => line.trim() !== '')
    : DIPARSAN_ASCII.trim().split('\n').filter(line => line.trim() !== '');

  useEffect(() => {
    // Animate ASCII art line by line
    const asciiTimer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= asciiLines.length - 1) {
          clearInterval(asciiTimer);
          // Show name after ASCII is complete
          setTimeout(() => setShowName(true), 300);
          return prev;
        }
        return prev + 1;
      });
    }, isMobile ? 200 : 150); // Slower animation on mobile for better readability

    return () => clearInterval(asciiTimer);
  }, [asciiLines.length, isMobile]);

  useEffect(() => {
    if (showName) {
      // Show tagline after name appears
      const nameTimer = setTimeout(() => setShowTagline(true), 600);
      return () => clearTimeout(nameTimer);
    }
  }, [showName]);

  useEffect(() => {
    if (showTagline) {
      // Complete intro sequence
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [showTagline, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="intro-animation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0E0E12 0%, #1A1A1F 50%, #0E0E12 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflow: 'hidden',
            padding: '1rem'
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="background-gradient"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(108, 99, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(108, 99, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.6
            }}
          />

          {/* ASCII Art Container */}
          <div className="ascii-container" style={{ position: 'relative', zIndex: 1, maxWidth: '100%' }}>
            <pre
              className="text-mono"
              style={{
                fontSize: isMobile 
                  ? 'clamp(0.3rem, 2.5vw, 0.5rem)' 
                  : 'clamp(0.5rem, 2vw, 1rem)',
                lineHeight: isMobile ? 1.1 : 1.2,
                color: '#6C63FF',
                textAlign: 'center',
                margin: 0,
                fontWeight: 600,
                textShadow: '0 0 10px rgba(108, 99, 255, 0.5)',
                overflow: 'hidden',
                maxWidth: '100%',
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                padding: '0 1rem'
              }}
            >
              {asciiLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
          </div>

          {/* Name Display */}
          <AnimatePresence>
            {showName && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  marginTop: '2rem',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <h1
                  className="text-gradient"
                  style={{
                    fontSize: isMobile 
                      ? 'clamp(1.2rem, 5vw, 2rem)' 
                      : 'clamp(1.5rem, 4vw, 3rem)',
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: '0.05em'
                  }}
                >
                  DIPARSAN PATHAK
                </h1>
                <p
                  style={{
                    fontSize: isMobile 
                      ? 'clamp(0.8rem, 3vw, 1.2rem)' 
                      : 'clamp(1rem, 2.5vw, 1.8rem)',
                    color: '#A855F7',
                    margin: '0.5rem 0 0 0',
                    fontWeight: 500
                  }}
                >
                  aka FLAMExGOD
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tagline */}
          <AnimatePresence>
            {showTagline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                style={{
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <p
                  style={{
                    fontSize: isMobile 
                      ? 'clamp(0.7rem, 2.5vw, 1rem)' 
                      : 'clamp(0.9rem, 2vw, 1.3rem)',
                    color: '#B4B4B8',
                    margin: 0,
                    fontStyle: 'italic',
                    letterSpacing: '0.02em'
                  }}
                >
                  "Learning. Building. Asking. Improving."
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showTagline ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6C63FF, #A855F7)'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};