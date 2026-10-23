import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { comparePortfolioItems, projectEndYear } from './portfolio-sort';

describe('Portfolio ordering', () => {
  it('reads real project years and uses the end of a range', () => {
    expect(projectEndYear('2019')).toBe(2019);
    expect(projectEndYear('2025–2026')).toBe(2026);
    expect(projectEndYear('2021-2025')).toBe(2025);
    expect(projectEndYear(undefined)).toBeNull();
    expect(projectEndYear('')).toBeNull();
  });
  it('groups by project type and retains editorial priority within each type', () => {
    const items = [
      { id: 'a', type: 'Service', order: 1 },
      { id: 'b', type: 'Tool', order: 999 },
      { id: 'c', type: 'Research', order: 7 },
      { id: 'd', type: 'Research', order: 1 },
    ];
    expect(items.sort((a, b) => comparePortfolioItems(a, b, 'type')).map(i => i.id)).toEqual(['d', 'c', 'b', 'a']);
  });
  it('sorts newest first regardless of editorial order, leaving unknown years last', () => {
    const items = [
      { id: 'old', year: '2017', order: 1 },
      { id: 'unknown', order: 0 },
      { id: 'range', year: '2025–2026', order: 999 },
      { id: 'recent', year: '2021–2025', order: 2 },
    ];
    expect(items.sort((a, b) => comparePortfolioItems(a, b, 'date')).map(i => i.id)).toEqual(['range', 'recent', 'old', 'unknown']);
  });
  it('includes the eight project years supplied directly by the author', () => {
    const years: Record<string, string> = {
      cdc: '2019', bookhero: '2017', awear: '2018', 'thing-sona': '2025–2026',
      'pathway-redesign': '2021', 'jinzhai-revolution-museum': '2018',
      'tree-and-house': '2015', 'whats-next': '2017',
    };
    for (const [slug, year] of Object.entries(years)) {
      const content = readFileSync(new URL(`../content/project/en/${slug}.mdx`, import.meta.url), 'utf8');
      expect(content).toContain(`year: "${year}"`);
    }
  });
});

describe('Shared portfolio presentation', () => {
  it('links Publications to the existing Scholar profile', () => {
    const nav = readFileSync(new URL('../components/Navbar.astro', import.meta.url), 'utf8');
    expect(nav).toContain("url: 'https://scholar.google.com/citations?user=KaqQ8gIAAAAJ', name: t('Navbar-Publications')");
    expect(nav).not.toContain("url: '/research#publications'");
  });
  it('provides a description fallback in related cards', () => {
    const card = readFileSync(new URL('../components/ProjectCard.astro', import.meta.url), 'utf8');
    expect(card).toContain('project.data.contribution || project.data.description');
    expect(card).toContain('{summary}');
  });
  it('reveals shared lightbox hints on hover and keyboard focus only', () => {
    const component = readFileSync(new URL('../components/LightboxImage.astro', import.meta.url), 'utf8');
    expect(component).toContain('opacity: 0');
    expect(component).toContain('.image-trigger:hover .image-hint');
    expect(component).toContain('.image-trigger:focus-visible .image-hint');
  });
  it('aligns BookHero concept illustrations and supplies CDC tags', () => {
    const book = readFileSync(new URL('../content/project/en/bookhero.mdx', import.meta.url), 'utf8');
    expect(book).toContain('case-grid-three case-align-bottom');
    const cdc = readFileSync(new URL('../content/project/en/cdc.mdx', import.meta.url), 'utf8');
    expect(cdc).toContain('tags:\n  - Service Design\n  - Co-creation');
  });
});
