import { describe, expect, it } from 'vitest';
import { activeSectionIndex } from './toc';

describe('floating table of contents reading position', () => {
  it('handles pages without sections', () => expect(activeSectionIndex([], 150)).toBe(-1));
  it('starts at the first section above the article', () => expect(activeSectionIndex([900, 1800], 150)).toBe(0));
  it('activates a section crossing the reading line', () => expect(activeSectionIndex([-500, 150, 900], 150)).toBe(1));
  it('keeps the previous section during a long section', () => expect(activeSectionIndex([-900, 300, 900], 150)).toBe(0));
  it('keeps the final section at the end', () => expect(activeSectionIndex([-1500, -700, -20], 150)).toBe(2));
});
