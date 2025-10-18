import { useState, useEffect, Suspense } from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { IntroAnimation } from './components/sections/IntroAnimation';
import { Navigation } from './components/layout/Navigation';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';
import { BackToTop } from './components/common/BackToTop';
import { FloatingElements } from './components/common/FloatingElements';
import { useActiveSection } from './hooks/useActiveSection';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { createSkipLink } from './utils/accessibility';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const activeSection = useActiveSection();

  // Monitor performance in development
  usePerformanceMonitor();

  useEffect(() => {
    // Add skip link for accessibility
    const skipLink = createSkipLink('hero', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearTimeout(timer);
      // Cleanup skip link
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (!isLoaded) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="App">
        {/* Intro Animation */}
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}

        {/* Main Content */}
        {!showIntro && (
          <>
            {/* Background Elements */}
            <FloatingElements />
            
            {/* Navigation */}
            <Navigation activeSection={activeSection} />
            
            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Main Content */}
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
              </Suspense>
            </main>

            {/* Utility Components */}
            <BackToTop />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
