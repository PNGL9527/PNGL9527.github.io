# Pathway Redesign Tool — sources and scope

## Page content

The author supplied `pathway/Healthcare_Pathway_Website_Handoff_Package/Web_Copy_EN.md`, `Healthcare_Pathway_Website_Handoff_Brief.md`, and `Source_Asset_Map.csv`. These are editorial reference documents, not independent evidence of clinical outcomes. Their six-section long-form draft was condensed into four chapters in accordance with the user's request to keep the tool page short and focused on ideas and uses.

The thesis PDF referred to by those documents was not present in the supplied pathway folder or found among the personal website project's files. No thesis figures, page citations, graduation year, or thesis download link have been fabricated. The iteration narrative and supervisor credit are attributed to the supplied brief, not a fresh reading of the thesis.

The user explicitly provided the real online tool URL, superseding the older brief's assumption that no online version exists: https://www.penglu.work/PathwayRedesign_Online/

## Real screenshots

Captured directly from the live English web prototype on 2026-10-21 using its built-in Acute chest pain example. No uploaded records or new patient data were used. All screenshots retain the actual UI; the page captions identify the example as illustrative and historical, not current medical guidance.

- workspace.png: Pathway workspace, showing experience design, shared pathway, and clinical-managerial perspectives. Retained in the case-study body after the cover redesign.
- evidence-matrix.png: Evidence matrix tab with sample records and intentionally blank records.
- setup-together.png: Set up together tab, dimensions and weights configuration area.

The thesis's proposed dialogic direction and the later web implementation are explicitly distinguished. Screenshots are not presented as original thesis figures. Original workbook icon credit names recorded on the prototype workbook's Notes sheet include Freepik, monkik, Eucalyp, Pixel perfect, Smashicons, and surang. These are interface screenshots, not a newly licensed icon pack or standalone redistribution of the workbook artwork.

## Read-only workbook verification

Both XLSX files were opened read-only; neither was modified or copied into the public website.

`Peng Lu - Pathway Redesign Tool Example.xlsx`:

- Ranking Version - example: A1:Y80, 368 populated cells, 39 formulas, 26 embedded images. Shared, Experience Design, Clinical Pathway, and Clinical Managerial areas. Acute chest pain example and weighted grading formulas. Some formula references appear mismatched (e.g. E4 references K4 while the visible location factor is J4); no clinical validity is implied.
- Legends: A1:Y8, 25 populated cells, 58 images.
- ` Flowchart Example` (leading space): A1:Z47, 2 populated cells, 1 image.
- Legend Stickers and the referen: A1:V24, 1 populated cell, 12 images.

`Pathway Redesign Data Visualization Tool Prototype.xlsx`:

- The Timeline Mode: A1:Y51, 132 populated cells, 0 formulas, 29 images.
- The Flow chart Mode: A1:U60, 179 populated cells, 0 formulas, 32 images.
- Notes: A1:AE7, 16 populated cells, icon credits and source reference.
- Ranking Version: A1:X49, 188 populated cells, 4 formulas, 27 images.
- Ranking Version - example: A1:X36, 195 populated cells, 11 formulas, 60 images; inpatient-falls example, distinct from the other workbook's chest-pain example.

The sheets verify that timeline, flowchart, and ranking structures exist. They do not establish an exact thesis-version identity or hospital deployment. The website therefore uses the existing public interface instead of publishing raw workbook records, embedded clinical flowcharts, or workbooks for download. Workbook formulas were not repaired, recalibrated, or represented as validated measures.

## Conceptual cover — 2026-10-22

`boundary-object-cover.webp` is an AI-generated conceptual illustration, created with the built-in image-generation tool using `workspace.png` as a style and palette reference. It does not depict tested collaboration, a hospital deployment, or an actual application screen. Red experience-design and blue clinical perspectives both connect to a shared yellow pathway. The simplified blank flowchart contains no clinical recommendations. The original screenshot is unchanged and remains in the body of the page.

The generated PNG was resized without cropping to 1600 × 800 and encoded as WebP, quality 90. The source generation brief is retained in `COVER-BRIEF.md`.

## Simplified editorial cover — later revision, 2026-10-22

At the author's request, `boundary-object-cover.webp` is now a visible, enlargeable conceptual illustration immediately below “One pathway, different perspectives”, before its opening prose. It is no longer the thumbnail or hero image. The original workspace screenshot remains below the perspective comparison table.

The new `shared-pathway-cover.svg` is an authored vector composition: four red/blue observation and measurement notes connect to one yellow branching pathway. It uses only three short labels, no people, and no generated imagery. The blank flowchart is conceptual, not medical advice. `shared-pathway-cover.webp` is a 1600 × 800 export at quality 92. Rebuild the editable SVG and web export with `node scripts/prepare-editorial-covers.mjs`.

## Author-supplied tricolour cover — latest revision, 2026-10-22

The active portfolio thumbnail and hero are now `tricolour-cover.webp`, from the author's supplied `/Users/peng/Downloads/红黄蓝三栏创意图标横幅.png`. The full red/yellow/blue banner with pencil, pathway and medical cross is retained without cropping or visual alteration, resized proportionally to 1600 × 800 and encoded as WebP at quality 92. The source PNG is unchanged. Earlier cover files are retained but are no longer the active thumbnail. The conceptual illustration immediately below “One pathway, different perspectives” and all other body images remain unchanged.
