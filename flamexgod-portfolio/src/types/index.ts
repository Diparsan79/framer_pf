// TypeScript interfaces for portfolio data

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'milestone';
}

export interface ContactLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  label: string;
}