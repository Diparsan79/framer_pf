import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MobileNavigation } from './MobileNavigation';

interface NavigationProps {
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

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(14, 14, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(42, 42, 47, 0.5)'
      }}
    >
      <div className="container">
        <div 
          className="flex justify-between items-center"
          style={{ padding: '1rem 0' }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            style={{ cursor: 'pointer' }}
          >
            <span
              className="text-gradient"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}
            >
              FLAMExGOD
            </span>
          </motion.div>



          {/* Desktop Navigation Links */}
          <div 
            className="desktop-nav"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <div 
              className="flex items-center"
              style={{ gap: '2rem' }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#6C63FF' : '#B4B4B8',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  className={activeSection === item.id ? 'nav-active' : ''}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
                        borderRadius: '1px'
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation activeSection={activeSection} />
        </div>
      </div>
    </motion.nav>
  );
};