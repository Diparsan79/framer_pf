import { motion, easeOut, easeInOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '../../data/timeline';

export const Timeline: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 2, ease: easeInOut, delay: 0.5 }
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'project':
        return '🚀';
      case 'milestone':
        return '⭐';
      default:
        return '📍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return '#6C63FF';
      case 'project':
        return '#A855F7';
      case 'milestone':
        return '#00D4AA';
      default:
        return '#B4B4B8';
    }
  };

  return (
    <section
      id="timeline"
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
            My Coding Journey
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
            From first lines of code to continuous learning - here's my story
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

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Timeline Line */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '2rem',
              top: '2rem',
              bottom: '2rem',
              width: '2px',
              background: 'rgba(42, 42, 47, 0.8)',
              borderRadius: '1px'
            }}
          >
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #6C63FF, #A855F7, #00D4AA)',
                borderRadius: '1px'
              }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}
          >
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.id}
                variants={itemVariants}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  position: 'relative'
                }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${getTypeColor(entry.type)}, ${getTypeColor(entry.type)}aa)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    border: '3px solid var(--color-bg-primary)',
                    boxShadow: `0 0 20px ${getTypeColor(entry.type)}40`,
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {getTypeIcon(entry.type)}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="card"
                  style={{
                    flex: 1,
                    padding: '2rem',
                    background: 'rgba(26, 26, 31, 0.8)',
                    border: `1px solid ${getTypeColor(entry.type)}40`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${getTypeColor(entry.type)}, transparent)`,
                      pointerEvents: 'none'
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + 1 }}
                      style={{
                        display: 'inline-block',
                        background: getTypeColor(entry.type),
                        color: '#FFFFFF',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {entry.year}
                    </motion.div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        margin: '0 0 1rem 0'
                      }}
                    >
                      {entry.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#B4B4B8',
                        lineHeight: 1.6,
                        margin: 0
                      }}
                    >
                      {entry.description}
                    </p>

                    {/* Type Badge */}
                    <div
                      style={{
                        marginTop: '1rem',
                        display: 'inline-block'
                      }}
                    >
                      <span
                        style={{
                          background: `${getTypeColor(entry.type)}20`,
                          color: getTypeColor(entry.type),
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          textTransform: 'capitalize',
                          border: `1px solid ${getTypeColor(entry.type)}40`
                        }}
                      >
                        {entry.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Future Goals Section */}
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
              background: 'rgba(0, 212, 170, 0.05)',
              border: '1px solid rgba(0, 212, 170, 0.2)'
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}
            >
              🚀
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#00D4AA',
                margin: '0 0 1rem 0',
                fontWeight: 600
              }}
            >
              What's Next?
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#B4B4B8',
                margin: 0,
                lineHeight: 1.6
              }}
            >
              I'm excited to continue learning, building more complex projects, 
              contributing to open-source, and exploring the fascinating world of machine learning!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};