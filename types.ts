
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  contact: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  whatsapp: string;
  portfolioUrl: string;
  summary: string;
  experience: ExperienceItem[];
  skills: {
    tech: string[];
    design: string[];
    platforms: string[];
    tools: string[];
  };
  education: EducationItem[];
  languages: string[];
  references: ReferenceItem[];
}

export enum AppView {
  PORTFOLIO = 'PORTFOLIO',
  CV = 'CV'
}

export enum Language {
  EN = 'EN',
  ES = 'ES'
}

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}
