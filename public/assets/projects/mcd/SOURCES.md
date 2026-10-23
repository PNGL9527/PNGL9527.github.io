# MCD visual grammar source

## Comparison figure backgrounds — 2026-10-23

Both driving comparison figures explicitly use white image-trigger backgrounds rather than the lightbox component's default grey. Original SVGs, yellow field-composition regions, node encodings and lightbox behavior are unchanged. The component's optional background setting does not alter other images unless explicitly supplied.

## Expanded horizontal cover — 2026-10-23

Superseding the earlier 6:5 framing, the cover now uses `cover-wide.webp`, a 2000 × 1000 (2:1) banner. Both the portfolio listing and detail-page cover use this same wide asset with matching aspect ratios. The original `cover.png` remains unchanged. The built-in image-editing tool expanded the warm paper backdrop left and right around the complete illustration; no new analytical content or text was requested. This is illustrative cover art, not an empirical MCD configuration. The result was visually checked against the original and encoded as WebP quality 94 with contain-fit sizing, not cropping.

Generated source: `/Users/peng/.codex/generated_images/01a15d51-e238-7261-af63-4f48eda4765e/exec-9ee79291-f40e-40d4-bc82-ec2d18a19572.png`.

Final asset: `public/assets/projects/mcd/cover-wide.webp`. Re-encode with `node scripts/prepare-mcd-wide-cover.mjs /absolute/path/to/reviewed-wide-cover.png`.

Exact built-in edit prompt:

> Use case: precise-object-edit. Asset type: existing portfolio cover reframed as an exact 2:1 horizontal banner. Image 1 is the EDIT TARGET, not a loose style reference. Extend only the subtle warm white paper background to the LEFT AND RIGHT. Keep the ENTIRE existing central diagram visible, including all outer grey dashed horizons at top and bottom, every node, every arrow, and all translucent grey, red-orange and yellow fields. Do not crop any part of the diagram, redraw it, invent nodes, remove arrows, add text, or alter its colors or proportions. Center the unchanged diagram in the wide banner; let the complete diagram occupy roughly 60% of banner width and 85–90% of its height, with calm paper negative space on the left and right. The large empty portrait margins are not part of the subject; preserve the subject in full while fitting the new wide composition. Maintain original restrained watercolor/printed paper texture. No title, labels, logos, new objects or decorative marks. Output a clean 2:1 wide image, suitable for the same image file to be shown uncropped as a project card and detail-page cover.

## Complete diagram replacement — 2026-10-23

The visual-grammar section previously displayed `visual_grammar.png`, a poster-panel crop with redundant paragraph text and a truncated diagram. It now uses `grammar-diagram.svg`, derived directly from the author's independent `MCD/MCP.svg`.

Only the SVG viewport and background are adjusted: a 32-unit white margin preserves the complete dashed boundary even with the site's rounded image corners. Original relation positions, sizes, opacities, outlined lettering and embedded diffuse-field artwork are unchanged. The semantic legend remains accessible HTML below the image. The caption no longer implies that this schematic itself contains all four relation shapes.

The original SVG and full poster were visually checked against one another. No AI reconstruction, invented nodes, relabeling, or new analytical mapping is introduced. The old PNG remains available but is no longer referenced by this section.

Rebuild: `node scripts/prepare-mcd-grammar.mjs /absolute/path/to/MCP.svg`.

## Detail-page cover framing — 2026-10-23

The 1102 × 1427 portrait cover contains substantial top and bottom whitespace. Its detail-page frame is changed from the default 2:1 to 6:5 (`coverAspectRatio: 1.2`), retaining the complete central composition rather than clipping the upper field and nodes. The original image, portfolio listing card proportions and other projects are unchanged.

## Restored side-by-side visual legend — 2026-10-23

At the author's follow-up request, the standalone centered diagram is now paired with the poster's visual legend on its left. The legend is typeset as accessible HTML with four inline SVG shape symbols, preserving the original circle/embodiment, square/hermeneutic, diamond/background, triangle/alterity mappings, five visual-variable mappings, and descriptive-not-metric qualifier. Blue headings and magenta explanatory accents follow the original poster. The complete author-supplied diagram remains on the right; narrow screens stack the two without hiding either. The duplicate plain table is removed.
