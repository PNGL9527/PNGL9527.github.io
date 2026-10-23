export type PortfolioSortMode = 'type' | 'date';
export interface PortfolioSortItem {
  id: string;
  type?: string | undefined;
  year?: string | undefined;
  order: number;
}

const typeOrder = ['Research', 'Tool', 'Service', 'Product', 'Spatial', 'Strategy', 'Prototype', 'Teaching', 'Experiment'];
export function projectEndYear(year?: string): number | null {
  const years = year?.match(/\b(?:19|20)\d{2}\b/g);
  return years?.length ? Number(years[years.length - 1]) : null;
}

/** Never substitute website publishDate for the actual project year. */
export function comparePortfolioItems(a: PortfolioSortItem, b: PortfolioSortItem, mode: PortfolioSortMode, selectedSection = 'all'): number {
  // Lead with teaching when this category is explicitly selected, without
  // changing the global list or the order of the remaining projects.
  const pinnedId = selectedSection === 'teaching-experiments' ? 'en/future-mobility-workshop' : undefined;
  const pinDifference = Number(b.id === pinnedId) - Number(a.id === pinnedId);
  if (pinDifference) return pinDifference;
  if (mode === 'date') {
    const difference = (projectEndYear(b.year) ?? -1) - (projectEndYear(a.year) ?? -1);
    if (difference) return difference;
  } else {
    const rank = (type?: string) => type && typeOrder.includes(type) ? typeOrder.indexOf(type) : typeOrder.length;
    const difference = rank(a.type) - rank(b.type);
    if (difference) return difference;
  }
  return a.order - b.order || a.id.localeCompare(b.id);
}
