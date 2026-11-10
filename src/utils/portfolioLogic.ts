import { ProjectItem } from '../types/portfolio';

export interface ProfileCompletenessInput {
  name: string;
  hasPhoto: boolean;
  hasResume: boolean;
  hasPhone: boolean;
  hasEmail: boolean;
  hasLinkedIn: boolean;
  projectsCount: number;
  credentialsCount: number;
  skillsCount: number;
}

export function filterProjects(
  projects: ProjectItem[],
  selectedCategory: string
): ProjectItem[] {
  if (!selectedCategory || selectedCategory === 'all') {
    return projects;
  }
  return projects.filter((p) => p.category === selectedCategory);
}

export function calculateProfileCompleteness(input: ProfileCompletenessInput): {
  percentage: number;
  completedItems: string[];
  pendingItems: string[];
} {
  const checks = [
    { label: 'Full Name', passed: Boolean(input.name && input.name.trim().length > 0) },
    { label: 'Executive Portrait', passed: input.hasPhoto },
    { label: 'Verified Resume PDF', passed: input.hasResume },
    { label: 'Direct Phone Contact', passed: Boolean(input.hasPhone) },
    { label: 'Direct Email Contact', passed: Boolean(input.hasEmail) },
    { label: 'LinkedIn Profile', passed: Boolean(input.hasLinkedIn) },
    { label: 'Practical Projects (at least 2)', passed: input.projectsCount >= 2 },
    { label: 'Formal Credentials (at least 3)', passed: input.credentialsCount >= 3 },
    { label: 'Skills & Capabilities (at least 5)', passed: input.skillsCount >= 5 },
  ];

  const passedCount = checks.filter((c) => c.passed).length;
  const percentage = Math.round((passedCount / checks.length) * 100);

  return {
    percentage,
    completedItems: checks.filter((c) => c.passed).map((c) => c.label),
    pendingItems: checks.filter((c) => !c.passed).map((c) => c.label),
  };
}

export function sanitizeExternalUrl(url?: string): string {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    return url;
  }
  return `https://${url}`;
}

export function getCategoryBadgeClass(category: string): { bg: string; text: string; border: string } {
  switch (category) {
    case 'financial_analytics':
      return { bg: 'bg-[#B69A68]/10', text: 'text-[#B69A68]', border: 'border-[#B69A68]/30' };
    case 'accounting_tally':
      return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' };
    case 'ai_technology':
      return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' };
    case 'business_fintech':
      return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' };
    default:
      return { bg: 'bg-stone-500/10', text: 'text-stone-300', border: 'border-stone-500/30' };
  }
}
