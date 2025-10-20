import { motion, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../data/skills';

export const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return '#6C63FF';
      case 'Intermediate':
        return '#A855F7';
      case 'Beginner':
        return '#B4B4B8';
      default:
        return '#B4B4B8';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced':
        return '90%';
      case 'Intermediate':
        return '65%';
      case 'Beginner':
        return '40%';
      default:
        return '40%';
    }
  };

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{
        background: 'var(--color-bg-primary)'
      }}
    >
      <div className="container">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2
            className="text-gradient section-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              margin: '0 0 1rem 0',
              letterSpacing: '0.02em'
            }}
          >
            Skills & Technologies
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: '#B4B4B8',
              margin: '0 0 1rem 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Technologies I'm learning and tools I use in my coding journey
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid-responsive"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
              className="card glow"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                background: 'rgba(26, 26, 31, 0.8)',
                border: '1px solid rgba(42, 42, 47, 0.8)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Gradient Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${getLevelColor(skill.level)}, transparent)`,
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Skill Icon */}
                <div
                  style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    margin: '0 0 0.5rem 0'
                  }}
                >
                  {skill.name}
                </h3>

                {/* Skill Level */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: getLevelColor(skill.level),
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(42, 42, 47, 0.8)',
                    borderRadius: '2px',
                    marginBottom: '1rem',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: getLevelWidth(skill.level) } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}aa)`,
                      borderRadius: '2px'
                    }}
                  />
                </div>

                {/* Description */}
                {skill.description && (
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#B4B4B8',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: 1.5
                    }}
                  >
                    {skill.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: '2rem',
              background: 'rgba(108, 99, 255, 0.05)',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#6C63FF',
                margin: '0 0 1rem 0',
                fontWeight: 600
              }}
            >
              Always Learning
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#B4B4B8',
                margin: 0,
                lineHeight: 1.6
              }}
            >
              I'm constantly expanding my skill set through YouTube tutorials, AI-assisted learning, 
              and hands-on practice. Each project teaches me something new!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};