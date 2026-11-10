export type Language = 'en' | 'hi';

export type Theme = 'dark' | 'light';

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'all' | 'financial_analytics' | 'accounting_tally' | 'ai_technology' | 'business_fintech';
  categoryLabelEn: string;
  categoryLabelHi: string;
  descriptionEn: string;
  descriptionHi: string;
  methodologyEn: string;
  methodologyHi: string;
  tools: string[];
  keyOutcomesEn: string[];
  keyOutcomesHi: string[];
  demoUrl?: string;
  repoUrl?: string;
  status: 'completed' | 'in_progress' | 'case_study';
}

export interface SkillCategory {
  id: string;
  nameEn: string;
  nameHi: string;
  skills: {
    name: string;
    descriptionEn: string;
    descriptionHi: string;
    categoryTag: string;
  }[];
}

export interface AchievementItem {
  id: string;
  titleEn: string;
  titleHi: string;
  organization: string;
  date: string;
  descriptionEn: string;
  descriptionHi: string;
  highlightsEn: string[];
  highlightsHi: string[];
  category: 'industrial_exposure' | 'certification' | 'academic';
}

export interface CredentialItem {
  id: string;
  nameEn: string;
  nameHi: string;
  institution: string;
  date: string;
  status: 'completed' | 'pursuing' | 'ongoing';
  statusLabelEn: string;
  statusLabelHi: string;
  descriptionEn: string;
  descriptionHi: string;
  credentialUrl?: string;
}

export interface CareerItem {
  id: string;
  period: string;
  roleEn: string;
  roleHi: string;
  organization: string;
  location: string;
  summaryEn: string;
  summaryHi: string;
  bulletPointsEn: string[];
  bulletPointsHi: string[];
}
