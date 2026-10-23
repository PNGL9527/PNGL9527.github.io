import { readFileSync, existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { publications } from '../../data/publications';

const projects = ['thing-sona', 'bookhero', 'awear', 'co-driving-pleasure', 'mediation-composition-diagram', 'jinzhai-revolution-museum', 'tree-and-house', 'zentex', 'yaogongmiao', 'whats-next', 'MuSynk', 'miss-delivery', 'future-mobility-workshop', 'medicall', 'drawing-and-making', 'pdfclip'];
const readProject = (slug: string) => readFileSync(new URL(`./en/${slug}.mdx`, import.meta.url), 'utf8');

describe('Portfolio process and imagery stay visible', () => {
  it('PDFclip uses the supplied month, real screenshots and a reading-first narrative', () => {
    const source = readProject('pdfclip');
    expect(source).toContain('year: "September 2026"');
    expect(source).toContain('publishDate: 2026-09-01');
    expect(source).toContain('type: Product');
    expect(source).toContain('status: ongoing');
    expect(source).toContain('titleIcon: /assets/projects/pdfclip/title-icon.png');
    expect(source).toContain('WorkBuddy');
    expect(source).toContain('title: "PDFclip 2"');
    expect(source).toContain('based on an open-source PDF reader');
    expect(source).toContain('a second version from scratch');
    expect(source).toContain('has not been publicly released');
    expect(source.match(/^## /gm)).toHaveLength(5);
    expect(source.match(/<LightboxImage /g)).toHaveLength(8);
    const manifest = JSON.parse(readFileSync(new URL('../../../public/assets/projects/pdfclip/asset-manifest.json', import.meta.url), 'utf8'));
    expect(manifest.images).toHaveLength(8);
    for (const image of manifest.images) {
      expect(image.size[0]).toBeLessThanOrEqual(2400);
      expect(image.size[0] / image.size[1]).toBeCloseTo(image.original[0] / image.original[1], 2);
    }
    expect(existsSync(new URL('../../../public/assets/projects/pdfclip/cover.webp', import.meta.url))).toBe(true);
    expect(existsSync(new URL('../../../public/assets/projects/pdfclip/title-icon.png', import.meta.url))).toBe(true);
  });
  it('MCD visual grammar uses the complete original diagram rather than a cropped poster panel', () => {
    const source = readProject('mediation-composition-diagram');
    expect(source).toContain('coverAspectRatio: 2');
    expect(source).toContain('thumbnail: /assets/projects/mcd/cover-wide.webp');
    expect(existsSync(new URL('../../../public/assets/projects/mcd/cover-wide.webp', import.meta.url))).toBe(true);
    expect(source).toContain('/assets/projects/mcd/grammar-diagram.svg');
    expect(source).not.toContain('/assets/projects/mcd/visual_grammar.png');
    const svg = readFileSync(new URL('../../../public/assets/projects/mcd/grammar-diagram.svg', import.meta.url), 'utf8');
    expect(svg).toContain('viewBox="-32 -32 1116 1116"');
    expect(svg).toContain('stroke-dasharray');
    expect(svg).not.toContain('<!DOCTYPE');
    const figure = readFileSync(new URL('../../components/MCDGrammarFigure.astro', import.meta.url), 'utf8');
    for (const label of ['Embodiment', 'Hermeneutic', 'Background', 'Alterity', 'forefronting', 'transparency', 'relative impact', 'field composition', 'situational horizon']) {
      expect(figure).toContain(label);
    }
    expect(figure).toContain('aria-label="MCD visual grammar legend"');
    expect(figure).toContain('viewBox="0 0 20 20"');
    expect(source).not.toContain('| Element | Analytical meaning |');
    expect(source.match(/background="white"/g)).toHaveLength(2);
  });
  it('The doctoral thesis is listed once in Publications and linked at the end of Co-Driving Pleasure', () => {
    const url = 'https://hdl.handle.net/10589/238659';
    const theses = publications.filter(publication => publication.url === url);
    expect(theses).toHaveLength(1);
    expect(theses[0]).toMatchObject({
      title: 'Feeling together with the car: towards theorizing co-driving pleasure from a technological mediation perspective',
      authors: 'Peng Lu',
      year: '2025',
      type: 'Doctoral thesis',
      venue: 'Doctoral dissertation, Politecnico di Milano',
    });
    const source = readProject('co-driving-pleasure');
    const ending = source.slice(source.indexOf('## Contribution and continuing questions'));
    expect(ending).toContain(`href="${url}"`);
    expect(ending).toContain('Read the doctoral thesis');
    expect(ending).toContain(theses[0]?.title);
  });
  it('Drawing & Making is a visible undergraduate gallery without invented assignment dates or roles', () => {
    const source = readProject('drawing-and-making');
    expect(source).toContain('type: Experiment');
    expect(source).toContain('section: design-practice');
    expect(source).toContain('Selected undergraduate coursework');
    expect(source.match(/^## /gm)).toHaveLength(4);
    expect(source.match(/<LightboxImage /g)).toHaveLength(15);
    expect(source).not.toMatch(/^year:|^contribution:|^role:|<details|Citroën|Citroen/gm);
    expect(existsSync(new URL('../../../public/assets/projects/drawing-and-making/cover.webp', import.meta.url))).toBe(true);
    for (const name of ['painting-foliage', 'painting-window', 'timber-open-roof', 'section-model-front', 'ensemble-plan']) {
      expect(source).toContain(`${name}.webp`);
    }
  });
  it('MediCall stays concise and distinguishes the 2018 workshop proposal from a deployed healthcare service', () => {
    const source = readProject('medicall');
    expect(source).toContain('year: "2018"');
    expect(source).toContain('type: Strategy');
    expect(source).toContain('section: design-practice');
    expect(source).toContain('One-week sustainable business design workshop');
    expect(source).toContain('/assets/projects/medicall/context-01-02.webp');
    expect(source).toContain('Youth4SDG Asia Leadership Program 2018');
    expect(source).toContain('Yunus Centre, Yunus Social Business and The Youthink Center');
    expect(source).toContain('not partnerships secured by the project');
    expect(source).toContain('not validated through an operational pilot');
    expect(source.match(/^## /gm)).toHaveLength(3);
    expect(source.split(/\s+/).length).toBeLessThan(900);
    expect(source).not.toMatch(/22 [Mm]illion|21 months|^contribution:|\[TBD\]/m);
    expect(existsSync(new URL('../../../public/assets/projects/medicall/cover.webp', import.meta.url))).toBe(true);
  });
  it('Future Mobility is a teaching case with scoped cohort evidence and student authorship', () => {
    const source = readProject('future-mobility-workshop');
    expect(source).toContain('type: Teaching');
    expect(source).toContain('section: teaching-experiments');
    expect(source).toContain('year: "2022–2023"');
    expect(source).toContain('status: completed');
    expect(source).toContain('Teaching Assistant / Workshop Co-facilitator');
    expect(source).toContain('Documented 2022 cohort: 28 students across six teams');
    expect(source).toContain('not a combined headcount');
    expect(source).toContain('rather than sole course instructor');
    expect(source).toContain('Student work · Interior Group B');
    expect(source).toContain('Student work · Station Group A');
    expect(source).toContain('Student work · Station Group B');
    expect(source).toContain('alternative explorations, not successive versions');
    expect(source).toContain('not evidence of a measured learning gain');
    expect(source).toContain('https://doi.org/10.3390/su15065497');
    expect(source).toContain('https://doi.org/10.3390/app132111767');
    const publications = source.slice(source.indexOf('### Related publications'));
    expect(publications).not.toMatch(/case-actions|btn-pill|Read the .* design study/);
    for (const doi of ['10.3390/su15065497', '10.3390/app132111767']) {
      expect(publications).toContain(`[https://doi.org/${doi}](https://doi.org/${doi})`);
    }
    expect(source).toContain('https://creativecommons.org/licenses/by/4.0/');
    expect(source.match(/^## /gm)).toHaveLength(8);
    for (const image of ['teaching-process', 'role-exploration', 'interior-stakeholder-map', 'interior-concept-library', 'station-ecosystem', 'station-design-development', 'station-design-proposal', 'station-future-storyboard', 'station-hmi-scenarios']) {
      expect(source).toContain(`${image}.webp`);
    }
    expect(existsSync(new URL('../../../public/assets/projects/future-mobility-workshop/cover.webp', import.meta.url))).toBe(true);
    expect(source).not.toMatch(/\[TBD\]|<iframe/);
  });
  it('Miss Delivery is a 2019 business proposal with visible service and business logic, not claimed launch results', () => {
    const source = readProject('miss-delivery');
    expect(source).toContain('type: Strategy');
    expect(source).toContain('section: design-practice');
    expect(source).toContain('year: "2019"');
    expect(source).toContain('status: prototype');
    expect(source).toContain('draft: false');
    expect(source).toContain('not a launched or validated service');
    expect(source).toContain('Team leadership and design synthesis');
    expect(source).toContain('design scenarios, not participants');
    expect(source).toContain('double routing');
    expect(source).toContain('exploratory 2019 estimate, not realised revenue');
    expect(source.match(/^## /gm)).toHaveLength(8);
    for (const name of ['customer-journey', 'fast-tracking', 'find-a-helper', 'helper-availability', 'helper-request', 'shared-order', 'mutual-ratings', 'business-model-canvas']) {
      expect(source).toContain(`${name}.webp`);
    }
    const cover = source.match(/^thumbnail: (.+)$/m)?.[1];
    expect(cover).toBe('/assets/projects/miss-delivery/cover.webp');
    expect(existsSync(new URL(`../../../public${cover}`, import.meta.url))).toBe(true);
    expect(source).not.toMatch(/\[TBD\]|75[,.]?414|<iframe/);
  });
  it('MuSynk is the working personal music system, not the former duplicate research draft', () => {
    const source = readProject('MuSynk');
    expect(source).toContain('title: "MuSynk"');
    expect(source).toContain('titleIcon: /assets/projects/musynk/title-icon-foreground.png');
    expect(existsSync(new URL('../../../public/assets/projects/musynk/title-icon-foreground.png', import.meta.url))).toBe(true);
    expect(source).toContain('href="https://github.com/PNGL9527/MuSynk"');
    expect(source).toContain('draft: false');
    expect(source).toContain('year: "2026"');
    expect(source).toContain('MuSynk A');
    expect(source).toContain('MuSynk M');
    expect(source).toContain('<MuSynkSystem />');
    expect(source).toContain('low recorded play counts');
    expect(source).toContain('remains future work');
    expect(source).toContain('closed-source and not publicly distributed');
    expect(source).not.toMatch(/Co-Driving|phenomenolog|\[CONFIRM\]|sourceCodeUrl:|caseUrl:/i);
    expect(source).toContain('thumbnail: /assets/projects/musynk/media-sync-cover.webp');
    expect(source).toContain('Product concept illustration; body screenshots show the running applications');
    expect(existsSync(new URL('../../../public/assets/projects/musynk/media-sync-cover.webp', import.meta.url))).toBe(true);
    expect(source.match(/^## /gm)).toHaveLength(7);
    for (const id of ['m01-main-window', 'm02-sync-options', 'm03-sync-preview', 'm04-sync-completed', 'a14-trail-overview', 'a02-recommend-home']) {
      expect(source).toContain(`${id}.webp`);
    }
  });
  it('a.wear presents the local video before the service copy and removes unavailable ProtoPie links', () => {
    const source = readProject('awear');
    const section = source.slice(source.indexOf('## A service connecting garment, app, and brand'));
    expect(section.indexOf('<video')).toBeLessThan(section.indexOf('The team developed'));
    expect(source).toContain('controls playsInline preload="metadata"');
    expect(source).not.toMatch(/Try the prototypes|cloud\.protopie\.io|<iframe/);
    expect(existsSync(new URL('../../../public/assets/projects/awear/service-concept-video.mp4', import.meta.url))).toBe(true);
    expect(readProject('yaogongmiao')).toContain('case-grid-three case-living');
  });
  it('Yaogongmiao isolates the image baseline, storefront spans and hover hints to its own layout', () => {
    const source = readProject('yaogongmiao');
    const layout = readFileSync(new URL('../../components/YaogongmiaoLayout.astro', import.meta.url), 'utf8');
    expect(source).toContain('<YaogongmiaoLayout>');
    expect(source).toContain('case-grid-three case-history');
    expect(source).toMatch(/<section className="storefront-wide">\s*<h3>C ·/);
    expect(source).toMatch(/<section className="storefront-centered">\s*<h3>F ·/);
    expect(layout).toContain('grid-template-rows: subgrid');
    expect(layout).toContain('align-self: end');
    expect(layout).toContain('width: calc((100% - 1.5rem) / 2)');
    expect(layout).toContain('justify-self: start');
    expect(layout).toContain('.image-trigger:hover .image-hint');
    expect(layout).toContain('.image-trigger:focus-visible .image-hint');
    expect(layout).toContain('opacity: 0');
  });
  it('Whats Next presents the original concept, five-stage journey and hypothetical gesture mechanism', () => {
    const source = readProject('whats-next');
    expect(source).toContain('thumbnail: /assets/projects/whats-next/title-cover-aligned.webp');
    expect(existsSync(new URL('../../../public/assets/projects/whats-next/title-cover-aligned.webp', import.meta.url))).toBe(true);
    expect(source).toContain('section: design-practice');
    expect(source).toContain('status: prototype');
    expect(source).toContain('Hypothetical Technology');
    expect(source).toContain('not a released application');
    expect(source).toContain('manually authored, synchronised gesture cues');
    expect(source).not.toMatch(/^contribution:|\[TBD\]|52\.0|82\.1/gm);
    expect(source).toContain('year: "2017"');
    for (const image of ['workflow-01-complete', 'workflow-02-complete', 'workflow-03-complete', 'workflow-04-complete', 'workflow-05-complete', 'gesture-replay-example', 'gesture-reference-six', 'storyboard-01-complete', 'storyboard-02-complete', 'storyboard-03-complete']) {
      expect(source).toContain(`${image}.webp`);
    }
    expect(source).toContain('“Tab” and “2x Room In” are ambiguous source labels');
    expect(source.match(/^## /gm)).toHaveLength(7);
    expect(source).not.toContain('className="case-phone"');
    const journey = readFileSync(new URL('../../components/WhatsNextJourney.astro', import.meta.url), 'utf8');
    expect(journey).toContain('repeat(3, minmax(0, 1fr))');
    expect(journey).not.toContain('repeat(5, minmax(0, 1fr))');
    const groups = readFileSync(new URL('../../components/WhatsNextImageGroup.astro', import.meta.url), 'utf8');
    for (const layout of [journey, groups]) {
      expect(layout).toContain('aspect-ratio: .53');
      expect(layout).toContain('object-fit: contain');
      expect(layout).not.toContain('object-fit: cover');
    }
    expect(source).toContain('<WhatsNextImageGroup phones>');
    expect(source).toContain('ratios="1.312217fr 1.171598fr"');
    expect(source).toContain('ratios=".911950fr 1.144654fr"');
  });
  it('Yaogongmiao preserves the multi-scale investigation without inventing role or typology assignments', () => {
    const source = readProject('yaogongmiao');
    expect(source).toContain('type: Research');
    expect(source).toContain('year: "2017"');
    expect(source).toContain('Google Earth, 2024');
    expect(source).not.toMatch(/^contribution:|\[TBD\]|<details/gm);
    expect(source).toContain('not five new architectural proposals');
    expect(source).toContain('does not assign these three dwelling types');
    for (const name of ['pattern-A-', 'pattern-B-', 'pattern-C-', 'pattern-D-', 'pattern-E-', 'pattern-F-', 'living-pattern-1', 'living-pattern-2', 'living-pattern-3', 'node-5-edge-service']) {
      expect(source).toContain(name);
    }
    expect([...source.matchAll(/<LightboxImage\s+src="[^"]+\/infra-/g)]).toHaveLength(11);
    expect(source.match(/^## /gm)).toHaveLength(9);
  });
  for (const slug of projects) {
    it(`${slug} has no collapsed content and references existing images`, () => {
      const source = readProject(slug);
      expect(source).not.toMatch(/<\s*(details|summary)\b/i);
      const images = [...source.matchAll(/<LightboxImage\s+src="([^"]+)"/g)];
      expect(images.length).toBeGreaterThanOrEqual(5);
      for (const [, path] of images) {
        expect(existsSync(new URL(`../../../public${path}`, import.meta.url)), path).toBe(true);
      }
    });
  }

  it('BookHero includes all three persona portraits inside its comparison table', () => {
    const table = readProject('bookhero').match(/<table className="case-persona-table">[\s\S]*?<\/table>/)?.[0];
    expect(table).toBeTruthy();
    for (const name of ['persona_lukas.png', 'persona_jane.png', 'persona_bruno_detail.png']) {
      expect(table).toContain(name);
    }
  });

  it('Thing-sona retains the participant process photograph', () => {
    const source = readProject('thing-sona');
    expect(source).toContain('/assets/projects/thing-sona/who-deck-complete.webp');
    expect(source).toContain('/assets/projects/thing-sona/how-deck-complete.webp');
    expect(source.indexOf('who-deck-complete.webp')).toBeLessThan(source.indexOf('how-deck-complete.webp'));
    expect(source).not.toContain('/assets/projects/thing-sona/physical-decks.jpg');
    expect(source).toContain('/assets/projects/thing-sona/context-board-clean.webp');
    expect(source).not.toContain('/assets/projects/thing-sona/context-board.jpg');
    expect(readProject('thing-sona')).toContain('/assets/projects/thing-sona/card-creation.jpeg');
  });

  it('The architecture graduation design is design practice and an unbuilt proposal', () => {
    const source = readProject('jinzhai-revolution-museum');
    expect(source).toContain('type: Spatial');
    expect(source).toContain('section: design-practice');
    expect(source).toContain('Academic design proposal, not a built project');
    expect(source).toContain('ground-floor.jpg');
    expect(source).toContain('massing-evolution.jpg');
    expect(source).toContain('accessible-route.jpg');
    expect(source).not.toContain('ChatGPT');
  });

  it('The museum uses the replacement renders and displays the courtyard close-up', () => {
    const source = readProject('jinzhai-revolution-museum');
    expect(source).toContain('thumbnail: /assets/projects/jinzhai-revolution-museum/aerial-render.png');
    for (const image of ['aerial-render.png', 'hillside-render.png', 'arrival-render.png', 'courtyard-detail.png']) {
      expect(source).toContain(image);
      expect(existsSync(new URL(`../../../public/assets/projects/jinzhai-revolution-museum/${image}`, import.meta.url))).toBe(true);
    }
    expect(source).not.toMatch(/Original thesis (bird|visualization)|landscape-profile-[ab]\.jpg/);
  });

  it('Pathway is a concise tool page linking to the real online prototype', () => {
    const source = readProject('pathway-redesign');
    expect(source).toContain('thumbnail: /assets/projects/pathway-redesign/tricolour-cover.webp');
    expect(source).toMatch(/## One pathway, different perspectives\s+<LightboxImage src="\/assets\/projects\/pathway-redesign\/boundary-object-cover.webp"/);
    expect(existsSync(new URL('../../../public/assets/projects/pathway-redesign/tricolour-cover.webp', import.meta.url))).toBe(true);
    expect(existsSync(new URL('../../../public/assets/projects/pathway-redesign/boundary-object-cover.webp', import.meta.url))).toBe(true);
    expect(source).toContain('type: Tool');
    expect(source).toContain('section: research-tools');
    expect(source).toContain('https://www.penglu.work/PathwayRedesign_Online/');
    expect(source.match(/^## /gm)).toHaveLength(4);
    expect(source).not.toMatch(/<\s*(details|summary)\b|\.xlsx["')]/i);
    expect(source).toContain('later web version');
    expect(source).toContain('not an implemented or longitudinally validated fourth thesis prototype');
    for (const image of ['workspace.png', 'evidence-matrix.png', 'setup-together.png']) {
      expect(source).toContain(image);
      expect(existsSync(new URL(`../../../public/assets/projects/pathway-redesign/${image}`, import.meta.url))).toBe(true);
    }
  });

  it('Tree and House preserves the eight-part architectural narrative and all plan levels', () => {
    const source = readProject('tree-and-house');
    expect(source).toContain('type: Spatial');
    expect(source).toContain('section: design-practice');
    expect(source).toContain('Design proposal, not a built project');
    expect(source.match(/^## /gm)).toHaveLength(8);
    for (const image of ['tree-evolution.jpg', 'house-facade.jpg', 'structure-exploded.jpg', 'ground-floor.jpg', 'first-floor-upper.jpg', 'second-floor.jpg', 'circulation.jpg', 'section-1-1.jpg', 'section-2-2.jpg', 'courtyard.jpg']) {
      expect(source).toContain(image);
    }
    expect(source).toContain('not presented as current statistics');
    expect(source).toContain('without a fixed on-screen scale');
  });

  it('ZenTex presents the writing experience and credits AI assistance without a fake release', () => {
    const source = readProject('zentex');
    expect(source).toContain('type: Product');
    expect(source).toContain('Workbuddy');
    expect(source).toContain('titleIcon: /assets/projects/zentex/title-icon.png');
    expect(existsSync(new URL('../../../public/assets/projects/zentex/title-icon.png', import.meta.url))).toBe(true);
    expect(source).toContain('https://github.com/morluto/rea');
    expect(source).toContain('https://www.texifier.com/');
    expect(source).toContain('Zotero library exported through Better BibTeX');
    expect(source).toContain('automatically copies the corresponding bibliography entry');
    expect(source.indexOf('zen-mode-updated.png')).toBeLessThan(source.indexOf('settings.png'));
    expect(source).toContain('coverAspectRatio: 1.6666666667');
    expect(source).toContain('href="https://github.com/PNGL9527/ZenTex"');
    expect(source).toContain('View ZenTex on GitHub');
    expect(source).toContain('Overleaf subscription expired');
    expect(source.match(/^## /gm)).toHaveLength(5);
    expect(source).not.toMatch(/npm run|\b(?:667|871|237)\b|sourceCodeUrl:|link:\s*\n/);
    for (const image of ['source.png', 'preview.png', 'math-updated.png', 'table.png', 'completion-updated.png', 'todo.png', 'zen-mode-updated.png', 'settings.png', 'split.png']) {
      expect(source).toContain(image);
    }
  });
});
