/** The last section to cross the reading line remains active until the next one. */
export function activeSectionIndex(tops: number[], readingLine: number): number {
  if (!tops.length) return -1;
  let active = 0;
  tops.forEach((top, index) => { if (top <= readingLine) active = index; });
  return active;
}
