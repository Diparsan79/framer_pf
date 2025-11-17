import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavigationProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' }
];

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="mobile-nav-container">
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'none',
          border: 'none',
          color: '#B4B4B8',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1002
        }}
        aria-label="Toggle mobile menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(14, 14, 18, 0.8)',
                backdropFilter: 'blur(5px)',
                zIndex: 1000
              }}
            />

            {/* Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                position: 'fixed',
                top: '80px',
                left: '1rem',
                right: '1rem',
                background: 'rgba(26, 26, 31, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(42, 42, 47, 0.8)',
                borderRadius: '12px',
                padding: '1.5rem',
                zIndex: 1001,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: activeSection === item.id 
                        ? 'rgba(108, 99, 255, 0.2)' 
                        : 'transparent',
                      border: activeSection === item.id 
                        ? '1px solid rgba(108, 99, 255, 0.3)' 
                        : '1px solid transparent',
                      color: activeSection === item.id ? '#6C63FF' : '#B4B4B8',
                      padding: '1rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      width: '100%'
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Quick Actions */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(42, 42, 47, 0.8)',
                  display: 'flex',
                  gap: '1rem'
                }}
              >
                <motion.a
                  href="https://github.com/Diparsan79"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <span>🧠</span>
                  GitHub
                </motion.a>

                <motion.a
                  href="mailto:diparsanpathak0@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'rgba(26, 26, 31, 0.8)',
                    border: '1px solid var(--color-border)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <span>📧</span>
                  Email
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};