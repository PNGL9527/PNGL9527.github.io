# Yaogongmiao — source and editorial record

Source package supplied by Peng Lu:
`/Users/peng/文件/Coding/personal website/yaogongmiao/yaogongmiao_portfolio_package`

Read in full: README.md and content.md. Asset identities, filenames, dimensions and descriptions were cross-checked with assets.json. Original board 2, the aerial image, a commercial study and the combined living studies were inspected visually before composition.

## Web adaptation — 2026-10-22

- Project title uses the supplied Hefei wording consistently; type Research, section Research & Tools, study year 2017.
- Nine chapters retain context/history, methods, surrounding infrastructure, functional mapping, five public nodes, six storefront cases, three dwelling studies, and reflection.
- All eleven infrastructure layers, five functional maps, five nodes, six storefront cases, and three dwellings are directly visible, with click-to-enlarge. No content is collapsed or hidden behind tabs/carousels.
- Three historic photographs are a timeline-style three-column comparison. The original icon symbols are retained without inventing a legend.
- The full fieldwork collage is shown once, rather than repeating it as eight separate crops. The Google-search placeholder and decorative process graphic are replaced by readable method text.
- Formation logic and resident groups are semantic HTML. No source diagram is redrawn with invented information.
- Six commercial cases are presented as six studies, resolving the brief's four-pattern/six-case mismatch without inventing grouping. The descriptive titles come from the supplied brief, not claimed original case names.
- The three dwelling drawings are not assigned to resident groups; the package supplies no correspondence.
- Nodes and storefronts document existing conditions, not an implemented redesign. No author role, team, institution, sample sizes, or measured impact has been invented.
- Cover: supplied Google Earth aerial image, explicitly dated 2024; not a 2017 fieldwork image. The site and infrastructure maps describe the 2017 investigation, not current conditions.
- Historical photographs and other maps/photographs retain the supplied provenance limitations. Further source/photographer credits can be added when the author supplies them.

## Asset processing

38 selected source images are resized without enlargement (maximum 2000 × 2400, aspect ratio preserved) and encoded as WebP quality 88. No AI imagery, content editing, cropping, or map-legend reconstruction. Originals are untouched in the supplied package. Low-resolution infrastructure maps and photographs are not upscaled. The site retains accessible captions and image enlargement.

Reproduce with `node scripts/prepare-yaogongmiao-assets.cjs /absolute/path/to/yaogongmiao_portfolio_package`.
The script derives selected IDs from the page's asset references and resolves each original through the supplied assets.json.

## Layout refinement — 2026-10-22

- Added a project-scoped layout wrapper; other case studies and the shared image component are unchanged.
- The three historical source images retain their original proportions, with image bottoms and caption starts aligned through shared grid rows.
- Storefront sequence is A/B, full-width C, D/E, and left-aligned F at one column's width (updated at the author's request). Mobile remains a single column in A–F order.
- Enlarge hints are hidden by default and revealed on image hover or keyboard-visible focus. Image buttons, accessible labels, and lightbox behaviour remain intact.
- The same baseline alignment now applies to the three living-pattern drawings, retaining their equal column widths and original image proportions.
