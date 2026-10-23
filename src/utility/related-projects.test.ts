import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { selectRelatedProjects, type RelatedProject } from './related-projects';

const make = (id: string, year?: string, type = 'Product', section = 'teaching-experiments'): RelatedProject => ({ id, data: { year, type, section } });
const ids = (projects: RelatedProject[]) => projects.map(project => project.id);

describe('Continue exploring recommendations', () => {
  it('keeps both recommendations in the same category, even when another category has the same type', () => {
    const current = make('current', '2026');
    const projects = [current, make('other-category', '2026', 'Product', 'design-practice'), make('same-type', '2025'), make('same-category', '2023', 'Teaching')];
    expect(ids(selectRelatedProjects(current, projects))).toEqual(['same-type', 'same-category']);
  });

  it('prefers exact types before using a different type in the same category', () => {
    const current = make('current', '2026');
    expect(ids(selectRelatedProjects(current, [make('different-type', '2026', 'Teaching'), make('same-type', '2021'), make('same-type-near', '2025')]))).toEqual(['same-type-near', 'same-type']);
  });

  it('ranks by actual project years rather than featured order or website publication date', () => {
    const current = make('current', '2026');
    const old = { ...make('old', '2017'), data: { ...make('old', '2017').data, featuredOrder: 1, publishDate: '2026-10-22' } };
    const near = { ...make('near', '2025'), data: { ...make('near', '2025').data, featuredOrder: 999, publishDate: '2020-01-01' } };
    expect(ids(selectRelatedProjects(current, [old, near, make('same-year', 'September 2026')]))).toEqual(['same-year', 'near']);
  });

  it('recognizes overlapping multi-year periods and either side of the current period', () => {
    const current = make('current', '2022–2023');
    expect(ids(selectRelatedProjects(current, [make('distant', '2017'), make('overlap', '2021–2025'), make('near', '2024')]))).toEqual(['overlap', 'near']);
  });

  it('uses midpoint distance to break ties between overlapping periods', () => {
    const current = make('current', '2026');
    expect(ids(selectRelatedProjects(current, [make('broad', '2015–2026'), make('exact', '2026'), make('recent', '2025–2026')]))).toEqual(['exact', 'recent']);
  });

  it('puts undated candidates behind dated candidates without substituting a website date', () => {
    const current = make('current', '2026');
    expect(ids(selectRelatedProjects(current, [make('undated'), make('dated', '2020')]))).toEqual(['dated', 'undated']);
  });

  it('stays deterministic when years are missing or equal, regardless of collection order', () => {
    const current = make('current');
    const projects = [make('c', '2026'), make('a', '2017'), make('b')];
    expect(ids(selectRelatedProjects(current, projects))).toEqual(['a', 'b']);
    expect(ids(selectRelatedProjects(current, [...projects].reverse()))).toEqual(['a', 'b']);
  });

  it('excludes the current project, drafts and duplicate candidates without mutating the collection', () => {
    const current = make('current', '2026');
    const peer = make('peer', '2026');
    const projects = [current, { ...make('draft', '2026'), data: { ...current.data, draft: true } }, peer, peer];
    const before = [...projects];
    expect(ids(selectRelatedProjects(current, projects))).toEqual(['peer']);
    expect(projects).toEqual(before);
  });

  it('does not fill an undersized category with unrelated projects', () => {
    const current = make('current', '2026');
    expect(ids(selectRelatedProjects(current, [make('peer', '2026'), make('unrelated', '2026', 'Product', 'design-practice')]))).toEqual(['peer']);
    expect(selectRelatedProjects(current, [make('unrelated', '2026', 'Product', 'design-practice')])).toEqual([]);
  });

  it('only uses the exact type for legacy entries without a category', () => {
    const current: RelatedProject = { id: 'current', data: { type: 'Tool', year: '2026' } };
    expect(ids(selectRelatedProjects(current, [make('peer', '2025', 'Tool'), make('other', '2026')]))).toEqual(['peer']);
    expect(selectRelatedProjects({ id: 'unknown', data: {} }, [make('other', '2026')])).toEqual([]);
  });
});

describe('Recommendations for the actual portfolio', () => {
  const folder = new URL('../content/project/en/', import.meta.url);
  const projects: RelatedProject[] = readdirSync(folder).filter(name => name.endsWith('.mdx')).map(name => {
    const source = readFileSync(new URL(name, folder), 'utf8').split('---')[1] ?? '';
    const field = (key: string) => source.match(new RegExp(`^${key}:\\s*["']?([^\\n"']+)`, 'm'))?.[1]?.trim();
    return { id: name.replace(/\.mdx$/, '').toLowerCase(), data: { type: field('type'), section: field('section') ?? 'design-practice', year: field('year'), draft: field('draft') === 'true' } };
  }).filter(project => !project.data.draft);

  it('has two category-matched recommendations for every current public project', () => {
    for (const current of projects) {
      const related = selectRelatedProjects(current, projects);
      expect(related, current.id).toHaveLength(2);
      expect(related.every(project => project.data.section === current.data.section), current.id).toBe(true);
      const exactPeers = projects.filter(project => project.id !== current.id && project.data.type === current.data.type && project.data.section === current.data.section);
      if (exactPeers.length >= 2) expect(related.every(project => project.data.type === current.data.type), current.id).toBe(true);
    }
  });

  it('recommends MuSynk and ZenTex for PDFclip, not older product proposals', () => {
    const pdfclip = projects.find(project => project.id === 'pdfclip')!;
    expect(ids(selectRelatedProjects(pdfclip, projects))).toEqual(['musynk', 'zentex']);
  });

  it('wires the detail page to the tested selection helper', () => {
    const page = readFileSync(new URL('../pages/portfolio/[slug].astro', import.meta.url), 'utf8');
    expect(page).toContain('selectRelatedProjects(project, projects)');
    expect(page).not.toContain('sameType.sort(byPriority)');
  });
});
