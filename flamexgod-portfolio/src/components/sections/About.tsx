import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="about"
      className="section"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 50%, var(--color-bg-primary) 100%)'
      }}
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2
              className="text-gradient"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                margin: '0 0 1rem 0',
                letterSpacing: '0.02em'
              }}
            >
              About Me
            </h2>
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

          {/* Main Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <div
                className="card"
                style={{
                  padding: '3rem',
                  textAlign: 'center'
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    lineHeight: 1.8,
                    color: '#FFFFFF',
                    margin: '0 0 2rem 0'
                  }}
                >
                  Hey, I'm <span className="text-gradient" style={{ fontWeight: 600 }}>Diparsan Pathak</span>, 
                  a student who got hooked on programming back in 2023. I started out with Python — just experimenting, 
                  breaking things, fixing them again — and somehow ended up really enjoying it.
                </p>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                    lineHeight: 1.7,
                    color: '#B4B4B8',
                    margin: '0 0 2rem 0'
                  }}
                >
                  I tried CS50 for a bit, but what stuck with me was learning through my own curiosity. Most of my 
                  learning happens online now — YouTube tutorials, random docs, and AI chats that help me untangle 
                  stuff when I get stuck.
                </p>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                    lineHeight: 1.7,
                    color: '#B4B4B8',
                    margin: '0 0 2rem 0'
                  }}
                >
                  I've been slowly getting better, focusing on building good coding habits and understanding how 
                  things actually work under the hood. Lately, I've been exploring machine learning and thinking 
                  about how code can make ideas real.
                </p>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                    lineHeight: 1.7,
                    color: '#B4B4B8',
                    margin: '0 0 2rem 0'
                  }}
                >
                  I don't know exactly where this will take me yet, but I'm excited to keep learning, experimenting, 
                  and building along the way.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'rgba(108, 99, 255, 0.1)',
                    border: '1px solid rgba(108, 99, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    margin: '2rem 0'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      color: '#FFFFFF',
                      margin: 0,
                      fontStyle: 'italic'
                    }}
                  >
                    "Learning isn't just about consuming information—it's about asking the right questions 
                    and building understanding through curiosity and experimentation."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Resume Preview */}
            <motion.div variants={itemVariants}>
              <div
                className="card"
                style={{
                  padding: '2rem',
                  background: 'rgba(26, 26, 31, 0.6)',
                  border: '1px solid rgba(108, 99, 255, 0.2)'
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                    color: '#6C63FF',
                    margin: '0 0 1.5rem 0',
                    textAlign: 'center',
                    fontWeight: 600
                  }}
                >
                  Quick Facts
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      👾
                    </div>
                    <h4
                      style={{
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 600
                      }}
                    >
                      Primary Language
                    </h4>
                    <p
                      style={{
                        color: '#B4B4B8',
                        fontSize: '0.9rem',
                        margin: 0
                      }}
                    >
                      Python
                    </p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      🎓
                    </div>
                    <h4
                      style={{
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 600
                      }}
                    >
                      Current Focus
                    </h4>
                    <p
                      style={{
                        color: '#B4B4B8',
                        fontSize: '0.9rem',
                        margin: 0
                      }}
                    >
                      Machine Learning
                    </p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      🤖
                    </div>
                    <h4
                      style={{
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 600
                      }}
                    >
                      Learning Method
                    </h4>
                    <p
                      style={{
                        color: '#B4B4B8',
                        fontSize: '0.9rem',
                        margin: 0
                      }}
                    >
                      AI-Assisted
                    </p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      🚀
                    </div>
                    <h4
                      style={{
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 600
                      }}
                    >
                      Club Member
                    </h4>
                    <p
                      style={{
                        color: '#B4B4B8',
                        fontSize: '0.9rem',
                        margin: 0
                      }}
                    >
                      Robotics & Math
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
