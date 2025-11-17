import { motion, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../../data/projects';

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

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

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 50%, var(--color-bg-primary) 100%)'
      }}
    >
      <div className="container">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
          style={{ marginBottom: '3rem' }}
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
            My Projects
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: '#B4B4B8',
              margin: '0 0 2rem 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            A collection of projects I've built while learning to code
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
              margin: '0 auto 2rem auto',
              borderRadius: '2px'
            }}
          />

          {/* Filter Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <motion.button
              onClick={() => setFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid',
                borderColor: filter === 'all' ? '#6C63FF' : 'var(--color-border)',
                background: filter === 'all' ? 'rgba(108, 99, 255, 0.2)' : 'transparent',
                color: filter === 'all' ? '#6C63FF' : '#B4B4B8',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              All Projects ({projects.length})
            </motion.button>
            <motion.button
              onClick={() => setFilter('featured')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid',
                borderColor: filter === 'featured' ? '#6C63FF' : 'var(--color-border)',
                background: filter === 'featured' ? 'rgba(108, 99, 255, 0.2)' : 'transparent',
                color: filter === 'featured' ? '#6C63FF' : '#B4B4B8',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Featured ({projects.filter(p => p.featured).length})
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid-responsive"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8
              }}
              className="card glow"
              style={{
                padding: '2rem',
                background: 'rgba(26, 26, 31, 0.8)',
                border: '1px solid rgba(42, 42, 47, 0.8)',
                position: 'relative',
                overflow: 'hidden',
                height: 'fit-content'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Featured
                </motion.div>
              )}

              {/* Background Gradient Effect */}
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
                  background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Project Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: '0 0 1rem 0',
                    paddingRight: project.featured ? '4rem' : '0'
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#B4B4B8',
                    lineHeight: 1.6,
                    margin: '0 0 1.5rem 0'
                  }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem'
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3 }}
                      style={{
                        background: 'rgba(108, 99, 255, 0.2)',
                        color: '#6C63FF',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        border: '1px solid rgba(108, 99, 255, 0.3)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span>🧠</span>
                      View Code
                    </motion.a>
                  )}

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        background: 'rgba(26, 26, 31, 0.8)',
                        border: '1px solid var(--color-border)',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span>🚀</span>
                      Live Demo
                    </motion.a>
                  )}

                  {!project.githubUrl && !project.liveUrl && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        background: 'rgba(42, 42, 47, 0.5)',
                        color: '#B4B4B8',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontStyle: 'italic'
                      }}
                    >
                      <span>🔨</span>
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
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
              More Projects Coming Soon!
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#B4B4B8',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.6
              }}
            >
              I'm constantly working on new projects and learning new technologies. 
              Check back regularly or follow my GitHub for updates!
            </p>
            <motion.a
              href="https://github.com/Diparsan79"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <span>🧠</span>
              Follow on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};