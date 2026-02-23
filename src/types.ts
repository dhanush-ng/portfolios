import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string[];
  tags: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
}
