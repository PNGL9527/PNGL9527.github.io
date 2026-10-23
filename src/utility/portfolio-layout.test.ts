import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const source = readFileSync(new URL('../pages/portfolio/index.astro', import.meta.url), 'utf8');

describe('Compact portfolio grid', () => {
  it('reuses optional app title icons in listings, detail headings and related cards', () => {
    const title = readFileSync(new URL('../components/ProjectTitle.astro', import.meta.url), 'utf8');
    const card = readFileSync(new URL('../components/ProjectCard.astro', import.meta.url), 'utf8');
    const detail = readFileSync(new URL('../pages/portfolio/[slug].astro', import.meta.url), 'utf8');
    for (const surface of [source, card, detail]) expect(surface).toContain('<ProjectTitle project={project} />');
    expect(title).toContain('titleIcon ?');
    expect(title).toContain('width: 1em; height: 1em');
    expect(title).toContain('aria-hidden="true"');
    expect(title).toContain('object-fit: contain');
  });
  it('uses two desktop columns and a flatter image above each title', () => {
    expect(source).toMatch(/<ul data-projects class="[^"]*grid-cols-1[^"]*sm:grid-cols-2/);
    expect(source).toContain('aspect-[2/1]');
    expect(source.indexOf('aspect-[2/1]')).toBeLessThan(source.indexOf('<h2'));
  });

  it('keeps project links, tags and filters without listing descriptions or contributions', () => {
    expect(source).not.toContain('View project');
    expect(source).not.toContain('btn-pill');
    expect(source).toContain('visibleTags.map');
    expect(source).toContain('data-section-filter');
    expect(source).toContain('data-project-section');
    expect(source).not.toContain('project.data.description');
    expect(source).not.toContain('project.data.contribution');
    expect(source).toContain('data-portfolio-sort');
    expect(source).toContain('data-project-sort="type"');
    expect(source).toContain('data-project-sort="date"');
  });
});
