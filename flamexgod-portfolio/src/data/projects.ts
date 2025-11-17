import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'python-script',
    title: 'Sample Python Script',
    description: 'A beginner-friendly Python script exploring basic programming concepts and syntax. Built while learning Python fundamentals.',
    technologies: ['Python', 'Basic Programming'],
    githubUrl: 'https://github.com/Diparsan79',
    featured: true
  },
  {
    id: 'mini-calculator',
    title: 'Mini Calculator',
    description: 'Simple calculator application demonstrating basic arithmetic operations and user input handling in Python.',
    technologies: ['Python', 'Math Operations'],
    githubUrl: 'https://github.com/Diparsan79',
    featured: true
  },
  {
    id: 'todo-app',
    title: 'Basic To-Do App',
    description: 'A simple task management application to practice data structures, user interaction, and basic CRUD operations.',
    technologies: ['Python', 'Data Structures'],
    githubUrl: 'https://github.com/Diparsan79',
    featured: false
  },
  {
    id: 'learning-tracker',
    title: 'Learning Progress Tracker',
    description: 'Personal project to track coding learning milestones and daily progress. Helps maintain consistency in learning.',
    technologies: ['Python', 'File Handling'],
    githubUrl: 'https://github.com/Diparsan79',
    featured: false
  },
  {
    id: 'ai-prompt-collection',
    title: 'AI Prompt Collection',
    description: 'Curated collection of effective prompts for learning programming concepts through AI assistance.',
    technologies: ['Documentation', 'AI Interaction'],
    featured: false
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'This very website! Built with React and TypeScript to showcase my learning journey and projects.',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/Diparsan79',
    liveUrl: 'https://flamexgod-portfolio.vercel.app',
    featured: true
  }
];