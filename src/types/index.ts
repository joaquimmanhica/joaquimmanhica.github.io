export type Theme = 'light' | 'dark';
export type Language = 'en' | 'pt';

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    downloadCV: string;
    viewProjects: string;
    stats: {
      downloads: string;
      apps: string;
      experience: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    summary: string;
    highlights: {
      title: string;
      items: string[];
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewApp: string;
    technologies: string;
    features: string;
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    responsibilities: string;
    achievements: string;
  };
  skills: {
    title: string;
    subtitle: string;
    mobile: string;
    backend: string;
    tools: string;
    other: string;
  };
  education: {
    title: string;
    subtitle: string;
    degree: string;
    minor: string;
    university: string;
    period: string;
    location: string;
  };
  languages: {
    title: string;
    portuguese: string;
    english: string;
    fluent: string;
    native: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    availability: string;
  };
  footer: {
    rights: string;
    built: string;
    description: string;
  };
}

export interface Translations {
  en: Translation;
  pt: Translation;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  downloads?: string;
  rating?: string;
  features: string[];
  link: string;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  t: Translation;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface Stat {
  value: string;
  label: string;
}
