# Design Document

## Overview

The FLAMExGOD portfolio is a modern, dark-themed React + TypeScript single-page application that showcases Diparsan Pathak's coding journey through an engaging, animated interface. The design emphasizes smooth user experience with Framer Motion animations, a unique ASCII intro sequence, and a modular data-driven architecture that allows easy content updates.

## Architecture

### Technology Stack
- **Frontend Framework**: React 18+ with TypeScript
- **Routing**: React Router v6 for client-side navigation
- **Animation Library**: Framer Motion for transitions and scroll animations
- **Styling**: CSS Modules or Styled Components with CSS custom properties
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel with automatic deployments from Git

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page section components
├── pages/               # Main page components
├── data/                # Content data files
│   ├── skills.ts
│   ├── projects.ts
│   └── timeline.ts
├── assets/              # Static assets (fonts, icons)
├── styles/              # Global styles and theme
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

## Components and Interfaces

### Core Components

#### 1. IntroAnimation Component
- **Purpose**: Displays ASCII art animation and intro sequence
- **Features**: 
  - ASCII art rendering with typewriter effect
  - Fade transitions between intro elements
  - Background gradient animation
  - Automatic progression to main content

#### 2. Navigation Component
- **Purpose**: Sticky navigation with scroll progress
- **Features**:
  - Transparent background with blur effect
  - Smooth scroll to sections
  - Active section highlighting
  - Gradient progress bar integration

#### 3. ScrollProgress Component
- **Purpose**: Visual scroll indicator
- **Features**:
  - Thin gradient bar at viewport top
  - Real-time scroll position tracking
  - Smooth fill animation

#### 4. Section Components
Each major section (Hero, About, Skills, Projects, Timeline, Contact) will be individual components with:
- Scroll-triggered animations using Framer Motion
- Responsive layouts with CSS Grid/Flexbox
- Consistent spacing and typography
- Hover effects and micro-interactions

#### 5. BackToTop Component
- **Purpose**: Floating scroll-to-top button
- **Features**:
  - Appears after scrolling threshold
  - Smooth scroll animation to top
  - Gradient styling with hover effects

### Animation System

#### Framer Motion Integration
- **Page Transitions**: Fade and slide effects between route changes
- **Scroll Animations**: `useInView` hook for triggering animations on scroll
- **Hover Effects**: Scale, glow, and color transitions
- **Timeline Animation**: Progressive line drawing as user scrolls

#### Animation Variants
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

## Data Models

### Skills Data Structure
```typescript
interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon?: string;
  description?: string;
}
```

### Projects Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

### Timeline Data Structure
```typescript
interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'milestone';
}
```

### Contact Data Structure
```typescript
interface ContactLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  label: string;
}
```

## Design System

### Color Palette
- **Primary Background**: `#0E0E12`
- **Secondary Background**: `#1A1A1F`
- **Accent Gradient**: `linear-gradient(135deg, #6C63FF, #A855F7)`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B4B4B8`
- **Border**: `#2A2A2F`

### Typography
- **Primary Font**: Inter (headings and body text)
- **Monospace Font**: JetBrains Mono (code and ASCII art)
- **Font Sizes**: Fluid typography using clamp() for responsive scaling

### Spacing System
- **Base Unit**: 8px
- **Spacing Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Container Max Width**: 1200px
- **Section Padding**: 96px vertical, 24px horizontal (mobile-responsive)

### Component Styling Patterns
- **Cards**: Subtle border, backdrop blur, hover lift effect
- **Buttons**: Gradient backgrounds, smooth transitions
- **Icons**: Consistent sizing (24px default), hover glow effects
- **Grid Layouts**: CSS Grid with auto-fit columns, responsive gaps

## Error Handling

### Loading States
- **Initial Load**: Intro animation serves as loading indicator
- **Data Loading**: Skeleton components for dynamic content
- **Image Loading**: Lazy loading with fade-in transitions

### Error Boundaries
- **Component-Level**: Error boundaries for each major section
- **Fallback UI**: Minimal error messages with retry options
- **Development**: Detailed error information in development mode

### Accessibility Considerations
- **Reduced Motion**: Respect `prefers-reduced-motion` media query
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Ensure WCAG AA compliance for all text

## Testing Strategy

### Component Testing
- **Unit Tests**: Jest + React Testing Library for component logic
- **Visual Testing**: Storybook for component documentation and visual regression
- **Accessibility Testing**: axe-core integration for automated a11y checks

### Integration Testing
- **User Flows**: Test complete user journeys through the portfolio
- **Animation Testing**: Verify smooth transitions and performance
- **Responsive Testing**: Cross-device and viewport testing

### Performance Testing
- **Bundle Analysis**: Webpack Bundle Analyzer for optimization
- **Lighthouse Audits**: Regular performance, accessibility, and SEO audits
- **Core Web Vitals**: Monitor LCP, FID, and CLS metrics

## Implementation Phases

### Phase 1: Core Structure
- Project setup with Vite + React + TypeScript
- Basic routing and layout components
- Design system implementation (colors, typography, spacing)

### Phase 2: Intro & Navigation
- ASCII animation component
- Sticky navigation with scroll progress
- Smooth scroll implementation

### Phase 3: Content Sections
- Hero and About sections with animations
- Skills grid with hover effects
- Projects showcase with card layouts

### Phase 4: Interactive Features
- Timeline with scroll animations
- Contact section with social links
- Back-to-top functionality

### Phase 5: Polish & Optimization
- Performance optimization
- Accessibility improvements
- Cross-browser testing and fixes
- Deployment configuration

## Deployment Configuration

### Vercel Setup
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: None required for static site
- **Custom Domain**: Optional custom domain configuration

### Performance Optimizations
- **Code Splitting**: Route-based code splitting with React.lazy()
- **Asset Optimization**: Image compression and WebP format support
- **Caching**: Proper cache headers for static assets
- **Bundle Size**: Tree shaking and dependency optimization