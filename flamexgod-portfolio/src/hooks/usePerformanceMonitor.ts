import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation Timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstPaint: navEntry.responseEnd - navEntry.requestStart
          });
        }

        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`LCP: ${entry.startTime}ms`);
        }

        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          console.log(`FID: ${fidEntry.processingStart - fidEntry.startTime}ms`);
        }

        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            console.log(`CLS: ${clsEntry.value}`);
          }
        }
      });
    });

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      observer.observe({ entryTypes: ['first-input'] });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Monitor memory usage (if available)
    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        });
      }
    };

    // Check memory usage every 30 seconds in development
    let memoryInterval: number;
    if (import.meta.env.DEV) {
      memoryInterval = setInterval(checkMemoryUsage, 30000);
    }

    return () => {
      observer.disconnect();
      if (memoryInterval) {
        clearInterval(memoryInterval);
      }
    };
  }, []);
};