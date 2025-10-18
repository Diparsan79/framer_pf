import React, { lazy } from 'react';

// Lazy load components with error handling
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) => {
  return lazy(async () => {
    try {
      return await importFunc();
    } catch (error) {
      console.error('Failed to load component:', error);
      // Return a fallback component if loading fails
      if (fallback) {
        return { default: fallback };
      }
      // Return a simple error component
      return {
        default: () => {
          return React.createElement('div', {
            style: { 
              padding: '2rem', 
              textAlign: 'center', 
              color: '#FF6363' 
            }
          }, 'Failed to load component. Please refresh the page.');
        }
      };
    }
  });
};

// Preload components for better performance
export const preloadComponent = (importFunc: () => Promise<any>) => {
  const componentImport = importFunc();
  return componentImport;
};

// Image lazy loading utility
export const createImageLoader = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};