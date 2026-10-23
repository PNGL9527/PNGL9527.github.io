import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { publications } from '../data/publications';

const page = readFileSync(new URL('../pages/research.astro', import.meta.url), 'utf8');

describe('Research page follows the research statement', () => {
  it('emphasizes only Peng Lu in author lists without changing the underlying citations', () => {
    expect(page).toContain('publication.authors.split(/(\\bPeng Lu\\b)/)');
    expect(page).toContain("authorPart === 'Peng Lu'");
    expect(page).toContain('<strong class="font-semibold">{authorPart}</strong>');
    expect(page).not.toContain('set:html');
    for (const publication of publications) {
      expect(publication.authors).toContain('Peng Lu');
      expect(publication.authors).not.toContain('<strong');
    }
  });
  it('states the research identity and covers all four contribution/current inquiry areas', () => {
    for (const phrase of [
      'postphenomenology and design research', 'technological mediation theory',
      'more-than-human design', 'phenomenological interviews',
      'Co-driving pleasure in context', 'Making mediation visible and discussable',
      'Service, systems & human factors', 'Creative practice & research methods',
      'Thing-sona', 'mediation granularity', 'AI-assisted programming',
      '12 participants', '10 additional participants', 'nine automotive practitioners',
    ]) expect(page).toContain(phrase);
    expect(page).not.toMatch(/25\s+participant drivers|forthcoming NordiCHI|Bentley/);
  });

  it('keeps future interviews and participatory work distinct from completed evidence', () => {
    expect(page).toContain('Planned');
    expect(page).toContain('These are proposed inquiries');
    expect(page).toContain('new empirical cases will examine their value and limitations');
    expect(page).toContain('empirical, philosophical, and design inquiry');
    expect(page).toContain('postphenomenological understanding');
  });

  it('places Publications as the final main-content section without losing the supplied links', () => {
    const lastSection = page.slice(page.lastIndexOf('<section '));
    expect(lastSection).toContain('id="publications"');
    expect(lastSection).toContain('publications.map');
    expect(page.indexOf('id="future-research"')).toBeLessThan(page.indexOf('id="publications"'));
    for (const url of ['https://hdl.handle.net/10589/238659', 'https://doi.org/10.21606/servdes2020.8', 'https://hdl.handle.net/11311/1261905']) {
      expect(publications.some(publication => publication.url === url)).toBe(true);
    }
  });
});
