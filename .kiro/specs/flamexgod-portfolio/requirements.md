# Requirements Document

## Introduction

This document outlines the requirements for creating a modern personal portfolio website for Diparsan Pathak (aka FLAMExGOD), a beginner coder and Python learner. The portfolio will be a dark, minimal, and futuristic React + TypeScript application with smooth animations, an ASCII intro, and a focus on showcasing his learning journey. The site will be frontend-only, fully responsive, and deployable on Vercel.

## Requirements

### Requirement 1

**User Story:** As a visitor, I want to see an engaging ASCII intro animation when I first visit the site, so that I get an immediate sense of Diparsan's personality and technical interests.

#### Acceptance Criteria

1. WHEN the site loads THEN the system SHALL display an ASCII art animation of "DIPARSAN"
2. WHEN the ASCII animation completes THEN the system SHALL fade in "DIPARSAN PATHAK aka FLAMExGOD"
3. WHEN the name appears THEN the system SHALL display the tagline "Learning. Building. Asking. Improving."
4. WHEN the intro sequence completes after ~1.5 seconds THEN the system SHALL smoothly transition to the Hero section
5. WHEN the intro is playing THEN the system SHALL show animated gradient motion in the background

### Requirement 2

**User Story:** As a visitor, I want to navigate through a visually appealing dark-themed portfolio with smooth animations, so that I can learn about Diparsan's skills and projects in an engaging way.

#### Acceptance Criteria

1. WHEN I view any page THEN the system SHALL use a dark theme with #0E0E12 base background
2. WHEN I interact with elements THEN the system SHALL apply gradient accents using linear-gradient(135deg, #6C63FF, #A855F7)
3. WHEN I scroll through sections THEN the system SHALL provide smooth scroll behavior with no page reloads
4. WHEN I navigate between sections THEN the system SHALL show fade and slide transitions using Framer Motion
5. WHEN I hover over interactive elements THEN the system SHALL display subtle glow effects and smooth motion
6. WHEN I scroll down the page THEN the system SHALL show a gradient progress bar at the top indicating scroll position

### Requirement 3

**User Story:** As a visitor, I want to see Diparsan's personal information and background in a Hero and About section, so that I can understand who he is and his coding journey.

#### Acceptance Criteria

1. WHEN I view the Hero section THEN the system SHALL display "DIPARSAN PATHAK" and "aka FLAMExGOD" prominently centered
2. WHEN I view the Hero section THEN the system SHALL show the subtitle "Beginner Coder & Python Learner"
3. WHEN I view the Hero section THEN the system SHALL display the tagline "I just give prompts to AIs and chatbots — and learn from what they answer."
4. WHEN I view the Hero section THEN the system SHALL show an animated gradient background with optional particle effects
5. WHEN I view the About section THEN the system SHALL display a paragraph introducing him as a beginner programmer learning Python
6. WHEN I view the About section THEN the system SHALL include an embedded resume preview without download functionality
7. WHEN I scroll to the About section THEN the system SHALL fade in the content smoothly

### Requirement 4

**User Story:** As a visitor, I want to see Diparsan's current skills displayed in an organized grid, so that I can understand his technical capabilities and learning focus.

#### Acceptance Criteria

1. WHEN I view the Skills section THEN the system SHALL display skills in a responsive grid layout
2. WHEN I view the Skills section THEN the system SHALL show skills including Python (Beginner), HTML/CSS, Git & GitHub, VSCode, and Typing & Prompt Crafting
3. WHEN I hover over skill items THEN the system SHALL apply soft glow or lift motion effects
4. WHEN the Skills section loads THEN the system SHALL read skill data from /data/skills.ts file
5. WHEN I view skills on mobile THEN the system SHALL adapt the grid layout for smaller screens

### Requirement 5

**User Story:** As a visitor, I want to browse through Diparsan's projects in a clean card layout, so that I can see examples of his work and learning progress.

#### Acceptance Criteria

1. WHEN I view the Projects section THEN the system SHALL display projects in a grid layout with minimalist cards
2. WHEN I view project cards THEN the system SHALL show title, short description, and optional GitHub link for each project
3. WHEN I view the Projects section THEN the system SHALL include placeholder projects like "Sample Python Script", "Mini Calculator", and "Basic To-Do App"
4. WHEN the Projects section loads THEN the system SHALL read project data from /data/projects.ts file
5. WHEN I hover over project cards THEN the system SHALL apply subtle hover effects with gradient accents

### Requirement 6

**User Story:** As a visitor, I want to see Diparsan's coding journey displayed as a timeline, so that I can understand his learning progression and milestones.

#### Acceptance Criteria

1. WHEN I view the Timeline section THEN the system SHALL display a clean vertical or horizontal timeline
2. WHEN I view the Timeline THEN the system SHALL show entries for 2023 (Started Python, tried CS50), 2024 (YouTube tutorials), 2025 (ML exploration), and 2025 Aug (Robotics & Math Club)
3. WHEN I scroll through the Timeline THEN the system SHALL animate the timeline line progressively
4. WHEN the Timeline section loads THEN the system SHALL read timeline data from /data/timeline.ts file
5. WHEN timeline entries come into view THEN the system SHALL fade them in with smooth animations

### Requirement 7

**User Story:** As a visitor, I want to easily find Diparsan's contact information and social links, so that I can connect with him professionally or personally.

#### Acceptance Criteria

1. WHEN I view the Contact section THEN the system SHALL display contact information in a minimal card or icon grid layout
2. WHEN I view the Contact section THEN the system SHALL show email (diparsanpathak0@gmail.com), LinkedIn, and GitHub links
3. WHEN I hover over contact icons THEN the system SHALL apply light hover motion or gradient glow effects
4. WHEN I click on contact links THEN the system SHALL open them in appropriate applications or new tabs
5. WHEN I view the Contact section THEN the system SHALL include placeholders for future Discord or other social links

### Requirement 8

**User Story:** As a visitor, I want consistent navigation and UI elements throughout the site, so that I can easily move between sections and track my progress.

#### Acceptance Criteria

1. WHEN I view any page THEN the system SHALL display a sticky navigation bar with transparent, blurred background
2. WHEN I scroll through the site THEN the system SHALL show a thin gradient progress bar at the top
3. WHEN I need to return to top THEN the system SHALL provide a small floating back-to-top button
4. WHEN I navigate between sections THEN the system SHALL use smooth scroll behavior for internal links
5. WHEN I view the site THEN the system SHALL include subtle parallax or floating background elements for depth

### Requirement 9

**User Story:** As Diparsan (site owner), I want the site content to be easily editable through data files, so that I can update projects, skills, and timeline without modifying core components.

#### Acceptance Criteria

1. WHEN I need to update skills THEN the system SHALL allow editing through /data/skills.ts file
2. WHEN I need to update projects THEN the system SHALL allow editing through /data/projects.ts file  
3. WHEN I need to update timeline THEN the system SHALL allow editing through /data/timeline.ts file
4. WHEN I modify data files THEN the system SHALL automatically reflect changes in the UI components
5. WHEN I deploy the site THEN the system SHALL maintain the modular data-driven structure

### Requirement 10

**User Story:** As a visitor on any device, I want the portfolio to work seamlessly across desktop, tablet, and mobile, so that I can view Diparsan's work regardless of my device.

#### Acceptance Criteria

1. WHEN I view the site on mobile devices THEN the system SHALL adapt all layouts to smaller screens
2. WHEN I view the site on tablets THEN the system SHALL provide optimized layouts for medium screens  
3. WHEN I interact with the site on touch devices THEN the system SHALL support touch gestures and interactions
4. WHEN I view the site on any device THEN the system SHALL maintain performance and smooth animations
5. WHEN the site loads on any device THEN the system SHALL be fully functional and accessible