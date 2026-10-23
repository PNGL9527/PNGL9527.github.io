export interface RelatedProject {
  id: string;
  data: {
    type?: string | undefined;
    section?: string | undefined;
    year?: string | undefined;
    draft?: boolean | undefined;
  };
}

/** Use the real project period, never the date it was added to the website. */
function projectPeriod(year?: string): [number, number] | null {
  const years = year?.match(/\b(?:19|20)\d{2}\b/g)?.map(Number);
  return years?.length ? [Math.min(...years), Math.max(...years)] : null;
}

export function selectRelatedProjects<T extends RelatedProject>(
  current: T,
  projects: readonly T[],
  limit = 2,
): T[] {
  const { section, type } = current.data;
  const currentPeriod = projectPeriod(current.data.year);
  const candidates = projects.filter(project =>
    project.id !== current.id && !project.data.draft &&
    // Keep recommendations inside the same portfolio category. If an older
    // entry has no category, only its exact type is a safe fallback.
    (section ? project.data.section === section : Boolean(type && project.data.type === type)),
  );
  const pool = [...new Map(candidates.map(project => [project.id, project])).values()];

  const proximity = (project: T): [number, number] => {
    const period = projectPeriod(project.data.year);
    if (!currentPeriod || !period) return [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    // Overlapping multi-year projects have zero distance. The midpoint is a
    // secondary tie-breaker so a broad date range does not win every tie.
    return [
      Math.max(0, currentPeriod[0] - period[1], period[0] - currentPeriod[1]),
      Math.abs((currentPeriod[0] + currentPeriod[1]) / 2 - (period[0] + period[1]) / 2),
    ];
  };

  return pool.sort((a, b) => {
    const typeDifference = Number(Boolean(type && b.data.type === type)) - Number(Boolean(type && a.data.type === type));
    if (typeDifference) return typeDifference;
    const aPeriod = proximity(a);
    const bPeriod = proximity(b);
    return aPeriod[0] - bPeriod[0] || aPeriod[1] - bPeriod[1] || a.id.localeCompare(b.id, 'en');
  }).slice(0, Math.max(0, Math.floor(limit)));
}
