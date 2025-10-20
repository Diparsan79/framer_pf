import { motion, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { contacts } from '../../data/contacts';

export const Contact: React.FC = () => {
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

  const handleContactClick = (contact: typeof contacts[0]) => {
    if (contact.url === '#') {
      // For placeholder links, show a message
      alert(`${contact.platform} coming soon! Stay tuned for updates.`);
      return;
    }

    // For real links, open them
    if (contact.platform === 'Email') {
      window.location.href = contact.url;
    } else {
      window.open(contact.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
        paddingBottom: '6rem'
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
            Let's Connect
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
            I'm always excited to connect with fellow learners, developers, and anyone interested in coding!
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

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="contact-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem auto'
          }}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleContactClick(contact)}
              className="card glow"
              style={{
                padding: '2rem',
                cursor: contact.url === '#' ? 'default' : 'pointer',
                background: 'rgba(26, 26, 31, 0.8)',
                border: '1px solid rgba(42, 42, 47, 0.8)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                opacity: contact.url === '#' ? 0.7 : 1
              }}
            >
              {/* Background Gradient Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: contact.url === '#' ? 0 : 0.1 }}
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

              {/* Coming Soon Badge */}
              {contact.url === '#' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(180, 180, 184, 0.2)',
                    color: '#B4B4B8',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Soon
                </motion.div>
              )}

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}
                >
                  {contact.icon}
                </motion.div>

                {/* Platform Name */}
                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: '0 0 0.5rem 0'
                  }}
                >
                  {contact.platform}
                </h3>

                {/* Label */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: contact.url === '#' ? '#B4B4B8' : '#6C63FF',
                    margin: '0 0 1rem 0',
                    wordBreak: 'break-all'
                  }}
                >
                  {contact.label}
                </p>

                {/* Action Text */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#B4B4B8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500
                  }}
                >
                  {contact.url === '#' ? 'Coming Soon' : 'Click to Connect'}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            textAlign: 'center'
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '3rem',
              background: 'rgba(108, 99, 255, 0.05)',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem'
              }}
            >
              💬
            </motion.div>

            <h3
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: '#6C63FF',
                margin: '0 0 1rem 0',
                fontWeight: 600
              }}
            >
              Let's Learn Together!
            </h3>

            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                color: '#B4B4B8',
                margin: '0 0 2rem 0',
                lineHeight: 1.6
              }}
            >
              Whether you're a fellow beginner, an experienced developer, or someone curious about coding, 
              I'd love to connect! I'm always open to learning opportunities, collaboration, 
              or just chatting about the exciting world of programming.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.a
                href="mailto:diparsanpathak0@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  padding: '1rem 2rem'
                }}
              >
                <span>📧</span>
                Send Email
              </motion.a>

              <motion.a
                href="https://github.com/Diparsan79"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  background: 'rgba(26, 26, 31, 0.8)',
                  border: '1px solid var(--color-border)',
                  color: '#FFFFFF'
                }}
              >
                <span>🧠</span>
                Follow GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(42, 42, 47, 0.5)'
          }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              color: '#B4B4B8',
              margin: 0
            }}
          >
            Built with ❤️ by <span className="text-gradient" style={{ fontWeight: 600 }}>Diparsan Pathak</span> (FLAMExGOD)
          </p>
          <p
            style={{
              fontSize: '0.8rem',
              color: '#666',
              margin: '0.5rem 0 0 0'
            }}
          >
            Made with React, TypeScript, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};