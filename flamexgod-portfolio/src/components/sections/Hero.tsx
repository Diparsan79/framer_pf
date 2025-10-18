import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(108, 99, 255, 0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />

      {/* Floating Particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Main Name */}
          <motion.h1
            variants={itemVariants}
            className="text-gradient"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 800,
              margin: 0,
              letterSpacing: '0.02em',
              lineHeight: 1.1
            }}
          >
            DIPARSAN PATHAK
          </motion.h1>

          {/* Alias */}
          <motion.div
            variants={itemVariants}
            style={{ margin: '1rem 0 2rem 0' }}
          >
            <span
              style={{
                fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
                color: '#A855F7',
                fontWeight: 600,
                letterSpacing: '0.05em'
              }}
            >
              aka FLAMExGOD
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.8rem)',
              color: '#B4B4B8',
              fontWeight: 400,
              margin: '0 0 2rem 0',
              letterSpacing: '0.02em'
            }}
          >
            Beginner Coder & Python Learner
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
              color: '#FFFFFF',
              fontStyle: 'italic',
              margin: '0 0 3rem 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6
            }}
          >
            "I just give prompts to AIs and chatbots — and learn from what they answer."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              margin: '0 0 4rem 0'
            }}
          >
            <motion.button
              onClick={() => scrollToNext()}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              Explore My Journey
            </motion.button>

            <motion.a
              href="https://github.com/Diparsan79"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'rgba(26, 26, 31, 0.8)',
                border: '1px solid var(--color-border)',
                color: '#FFFFFF',
                textDecoration: 'none'
              }}
            >
              View GitHub
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            onClick={scrollToNext}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span
              style={{
                fontSize: '0.9rem',
                color: '#B4B4B8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                width: '2px',
                height: '30px',
                background: 'linear-gradient(180deg, #6C63FF, transparent)',
                borderRadius: '1px'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};