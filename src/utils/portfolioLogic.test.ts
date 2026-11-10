import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  calculateProfileCompleteness,
  sanitizeExternalUrl,
} from './portfolioLogic';
import { ProjectItem } from '../types/portfolio';

const mockProjects: ProjectItem[] = [
  {
    id: 'p1',
    titleEn: 'Excel Modeling',
    titleHi: 'एक्सेल मॉडलिंग',
    category: 'financial_analytics',
    categoryLabelEn: 'Analytics',
    categoryLabelHi: 'एनालिटिक्स',
    descriptionEn: 'Desc',
    descriptionHi: 'विवरण',
    methodologyEn: 'Meth',
    methodologyHi: 'विधि',
    tools: ['Excel'],
    keyOutcomesEn: ['Out 1'],
    keyOutcomesHi: ['परिणाम 1'],
    status: 'completed',
  },
  {
    id: 'p2',
    titleEn: 'Tally Accounting',
    titleHi: 'टैली अकाउंटिंग',
    category: 'accounting_tally',
    categoryLabelEn: 'Accounting',
    categoryLabelHi: 'अकाउंटिंग',
    descriptionEn: 'Desc 2',
    descriptionHi: 'विवरण 2',
    methodologyEn: 'Meth 2',
    methodologyHi: 'विधि 2',
    tools: ['Tally'],
    keyOutcomesEn: ['Out 2'],
    keyOutcomesHi: ['परिणाम 2'],
    status: 'completed',
  },
  {
    id: 'p3',
    titleEn: 'IBM AI Workflows',
    titleHi: 'आईबीएम एआई',
    category: 'ai_technology',
    categoryLabelEn: 'AI',
    categoryLabelHi: 'एआई',
    descriptionEn: 'Desc 3',
    descriptionHi: 'विवरण 3',
    methodologyEn: 'Meth 3',
    methodologyHi: 'विधि 3',
    tools: ['IBM SkillsBuild'],
    keyOutcomesEn: ['Out 3'],
    keyOutcomesHi: ['परिणाम 3'],
    status: 'completed',
  },
];

test('filterProjects returns all projects when category is "all"', () => {
  const result = filterProjects(mockProjects, 'all');
  assert.equal(result.length, 3);
});

test('filterProjects filters accurately by category', () => {
  const analytics = filterProjects(mockProjects, 'financial_analytics');
  assert.equal(analytics.length, 1);
  assert.equal(analytics[0].id, 'p1');

  const tally = filterProjects(mockProjects, 'accounting_tally');
  assert.equal(tally.length, 1);
  assert.equal(tally[0].id, 'p2');

  const nonExistent = filterProjects(mockProjects, 'unknown_cat');
  assert.equal(nonExistent.length, 0);
});

test('calculateProfileCompleteness scores 100% when all requirements met', () => {
  const result = calculateProfileCompleteness({
    name: 'Aditya Yadav',
    hasPhoto: true,
    hasResume: true,
    hasPhone: true,
    hasEmail: true,
    hasLinkedIn: true,
    projectsCount: 4,
    credentialsCount: 6,
    skillsCount: 14,
  });

  assert.equal(result.percentage, 100);
  assert.equal(result.pendingItems.length, 0);
  assert.equal(result.completedItems.length, 9);
});

test('calculateProfileCompleteness detects pending requirements', () => {
  const result = calculateProfileCompleteness({
    name: '',
    hasPhoto: false,
    hasResume: true,
    hasPhone: true,
    hasEmail: true,
    hasLinkedIn: false,
    projectsCount: 1,
    credentialsCount: 2,
    skillsCount: 4,
  });

  assert.ok(result.percentage < 60);
  assert.ok(result.pendingItems.includes('Full Name'));
  assert.ok(result.pendingItems.includes('Executive Portrait'));
  assert.ok(result.pendingItems.includes('LinkedIn Profile'));
});

test('sanitizeExternalUrl handles protocols correctly', () => {
  assert.equal(sanitizeExternalUrl('https://linkedin.com/in/aditya'), 'https://linkedin.com/in/aditya');
  assert.equal(sanitizeExternalUrl('http://example.com'), 'http://example.com');
  assert.equal(sanitizeExternalUrl('linkedin.com/in/aditya'), 'https://linkedin.com/in/aditya');
  assert.equal(sanitizeExternalUrl('mailto:test@test.com'), 'mailto:test@test.com');
  assert.equal(sanitizeExternalUrl(''), '#');
});
