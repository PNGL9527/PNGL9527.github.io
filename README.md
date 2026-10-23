# Peng Lu — Portfolio and Research Website

An English-only portfolio and research website built with Astro, Tailwind CSS, and MDX. It presents Peng Lu's work across design research, tools, service and spatial design, teaching, and computational experiments.

Live repository: <https://github.com/PNGL9527/PNGL9527.github.io>

## Main routes

- `/` — landing page
- `/portfolio/` — selected work
- `/portfolio/[slug]/` — project detail pages
- `/research/` — research interests and publications

## Local development

Requirements: Node.js 20 and pnpm 10.6.2.

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm exec vitest run
ASTRO_TELEMETRY_DISABLED=1 pnpm exec astro check
ASTRO_TELEMETRY_DISABLED=1 pnpm build
```

The production output is generated in `dist/`.

## Adding a portfolio project

1. Add a new MDX file under `src/content/project/en/` using a lowercase kebab-case filename.
2. Add its media under `public/assets/projects/<project-slug>/`.
3. Follow the frontmatter schema defined in `src/content.config.ts`.
4. Set `draft: true` until the content, credits, and media have been reviewed.
5. Run the validation commands above before publishing.

Portfolio sections are:

- `research-tools`
- `design-practice`
- `teaching-experiments`

## Editing research and publications

- Page copy and layout: `src/pages/research.astro`
- Publication records and profile links: `src/data/publications.ts`

## Deployment

Pushing to the `main` branch triggers the GitHub Pages workflow in `.github/workflows/pages.yml`. The workflow installs dependencies, builds the static site, and deploys `dist/`.

## Agent handoff

Agents should read these files before editing:

1. `AGENTS.md` — repository rules and validation requirements.
2. `MEMORY.md` — durable product and technical decisions.
3. `HANDOFF.md` — current implementation status and next work.

## License

Source code is covered by the repository's MIT license. Portfolio text, research content, project images, and other authored media remain the copyright of their respective owners.

