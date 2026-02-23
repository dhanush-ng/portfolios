import { Code2, Database, Brain, Wrench, User } from 'lucide-react';
import { Project, SkillGroup, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation using Multi-Agent Framework',
    description: [
      'Designed an AI automation system to generate and validate aptitude questions using a multi-agent architecture.',
      'Implemented rule-based logic to control question type, structure, and difficulty level before generation.',
      'Integrated Large Language Model (LLM) APIs for scalable question generation.',
      'Developed multiple AI solver agents to independently solve and cross-verify generated questions.',
      'Reduced manual validation effort through automated dual-solver verification mechanism.'
    ],
    tags: ['AI', 'Multi-Agent Systems', 'LLM', 'Python']
  },
  {
    id: 'loan-prediction',
    title: 'Loan Eligibility Prediction',
    description: [
      'Built and trained a machine learning model to predict loan eligibility.',
      'Saved trained model and deployed using a separate prediction script for inference.',
      'Ensured preprocessing consistency between training and deployment pipelines.'
    ],
    tags: ['Machine Learning', 'Python', 'Pandas', 'Scikit-Learn']
  },
  {
    id: 'food-ordering',
    title: 'Online Food Ordering System',
    description: [
      'Developed a responsive food ordering system with authentication and cart functionality.',
      'Implemented admin dashboard for order management and menu updates.'
    ],
    tags: ['React JS', 'Web Development', 'JavaScript', 'CSS']
  },
  {
    id: 'spare-parts',
    title: 'Automobiles Spare Parts Booking',
    description: [
      'Created a responsive spare parts website connecting users with nearby shops.',
      'Designed user-friendly interface displaying product details and pricing.'
    ],
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript']
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'C', 'Python'],
    icon: Code2
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React JS'],
    icon: User
  },
  {
    category: 'Database',
    skills: ['MySQL'],
    icon: Database
  },
  {
    category: 'AI & ML',
    skills: ['LLM APIs', 'Multi-Agent Systems', 'Model Deployment', 'Pandas'],
    icon: Brain
  },
  {
    category: 'Developer Tools',
    skills: ['VS Code', 'Git', 'GitHub'],
    icon: Wrench
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Siddaganga Institute of Technology',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Dec 2024 – Present',
    location: 'Tumakuru, India',
    cgpa: '7.5'
  },
  {
    institution: 'Sree Siddaganga College of Arts, Science and Commerce',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2020 – 2023',
    location: 'Tumakuru, India',
    cgpa: '7.1'
  }
];
