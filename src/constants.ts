import { Code2, Database, Brain, Wrench, Layout, ShieldCheck, MapPin } from 'lucide-react';
import { Project, SkillGroup, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation using Multi-Agent Framework for Aptitude Question Generation and Validation',
    description: [
      'Designed an AI automation system to generate and validate aptitude questions using a multi-agent architecture.',
      'Implemented rule-based logic to control question type, structure, and difficulty level.',
      'Developed multiple AI solver agents to independently solve and cross-verify generated questions.',
      'Integrated LLM APIs for scalable question generation and automated dual-solver verification.'
    ],
    tags: ['AI', 'Multi-Agent Systems', 'Python', 'LLM'],
    link: 'https://github.com/dhanushng'
  },
  {
    id: 'loan-eligibility-prediction',
    title: 'Loan Eligibility Prediction Using Machine Learning',
    description: [
      'Built and trained a machine learning model to predict loan eligibility based on applicant data.',
      'Performed data preprocessing including encoding, scaling, and handling missing values.',
      'Saved and deployed the trained model using a separate prediction pipeline for inference.',
      'Ensured consistency between training and deployment preprocessing workflows.'
    ],
    tags: ['Python', 'Machine Learning', 'Pandas', 'Model Deployment'],
    link: 'https://github.com/dhanushng'
  },
  {
    id: 'online-food-ordering',
    title: 'Online Food Ordering System',
    description: [
      'Developed a responsive web-based food ordering platform with authentication and cart functionality.',
      'Implemented dynamic menu browsing and secure order placement features.',
      'Built an admin dashboard for order management and menu updates.',
      'Integrated frontend with backend database for real-time data processing.'
    ],
    tags: ['React JS', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://github.com/dhanushng'
  },
  {
    id: 'automobiles-spare-parts-booking',
    title: 'Automobiles Spare Parts Booking System',
    description: [
      'Created a responsive web application connecting users with nearby spare parts shops.',
      'Designed a user-friendly interface displaying product details, pricing, and availability.',
      'Implemented booking functionality for streamlined spare parts reservation.',
      'Optimized layout for mobile and desktop responsiveness.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    link: 'https://github.com/dhanushng'
  }

];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
    icon: Layout
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js'],
    icon: Database
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL'],
    icon: Database
  },
  {
    category: 'AI/ML',
    skills: ['Python', 'Machine Learning Basics', 'LLM APIs', 'Multi-Agent Systems'],
    icon: Brain
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'n8n'],
    icon: Wrench
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Siddaganga Institute of Technology',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024 – 2026',
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
