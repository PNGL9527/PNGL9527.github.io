# What's Next? — source and editorial record

Source package supplied by Peng Lu:
`/Users/peng/文件/Coding/personal website/whatsnext/whats_next_portfolio_package`

Read in full: README.md and content.md. Asset metadata checked against assets.json. Images inspected before composition: historical cover, original workflow overview, six-gesture reference, and the second storyboard excerpt. The package is reference material; embedded development suggestions do not authorize implementing or publishing an application.

## Web adaptation — 2026-10-22

- New project `/portfolio/whats-next/`, type Product, Design Practice category, status prototype. The Product label describes the design category, not a released application. The author subsequently confirmed the project year as 2017 on 2026-10-22; personal/team attribution remains unspecified. The page's publishDate is its web publication metadata, not the original project year.
- Seven chapters cover the learning context, selected recall challenge, concept/library/interface, five-stage journey, gesture-enhanced replay, scenario, and future prototyping scope.
- Original identity cover preserved; all displayed illustrations and phone screens are identified as concept artwork, not implementation evidence.
- All five journey screenshots are visible in an ordered sequence: choose task, enter app, teach/record, return/save, choose/review. The reviewed layout uses three columns on desktop, two on intermediate widths, one column on mobile. No content is folded, gated behind tabs, or placed in carousels.
- Gesture example receives a dedicated two-column visual/explanation section and the complete six-gesture reference. Source spelling “Tab” and “2x Room In” is retained in the original image and explicitly left uncertain; no invented double-tap/pinch interpretation.
- Scenario uses three complete scenes re-extracted from the original PDF, with independent semantic headings/captions rather than an unreadably wide composite. The review below supersedes the original source-package crops, which cut neighbouring dialogue.
- Learning-barrier terminology replaces the source's deficit-framed heading in surrounding prose, while retaining the original illustration unchanged. No claims of a completed user study, representative personas, quantitative benefits, or validated outcomes.
- Statistical charts are omitted: the supplied claims attributed to CNNIC and Beijing authorities are unverified, and are not needed to communicate the design proposition. No original percentage is recast as a current fact.
- “Setting” applies to What's Next? only, not third-party app accessibility settings. WeChat task names and Alipay/Taobao group labels do not imply completed app integrations or payment functionality.
- Native cross-app recording and gesture capture remain hypothetical. Future playback prototyping is discussed conditionally; no app, recorder, video, audio, interactive simulation, external demo, or download link was invented.

## Assets

Original material-package image IDs map to their original files via assets.json. WebP copies use quality 90 and fit within 2000 × 2400 without enlargement or cropping. Originals remain unchanged. The later cover-only edit below is distinguished from these source images.

Rebuild with `node scripts/prepare-whats-next-assets.cjs /absolute/path/to/whats_next_portfolio_package`.

## UI and storyboard crop review — 2026-10-22

The original PDF was rendered at 216 dpi and reviewed against the supplied isolated crops. The five workflow crops are now `workflow-01-complete.webp` through `workflow-05-complete.webp`. They preserve the whole phone and its UI; the page displays at most three columns on desktop, two on intermediate widths, and one on mobile, instead of five narrow columns. No UI text is generated or reconstructed.

The three original storyboard snippets had partial neighbouring speech bubbles and cut-off printed captions. They are replaced with `storyboard-01-complete.webp` (the complete Grandpa/Jack conversation), `storyboard-02-complete.webp` (saving a recording, with both full speech bubbles), and `storyboard-03-complete.webp` (the complete later replay sequence). Crop boundaries exclude the old printed footer captions; the existing HTML captions carry the narrative. Two irrelevant transition-arrow remnants at the first scene's outer edges are removed against the existing flat pink background; no speech, text, people or UI is filled in. `case-phone` is removed from the first story image: images use their natural proportions, with no large grey side padding or height-limited portrait treatment. The first two scenes are paired and the final sequence has a full-width row. Source artwork and original PDF are unchanged.

The earlier teaching-scenario crop also included an unrelated fragment at its left edge; `teaching-scenario-clean.webp` instead contains the complete two-person conversation. `feature-architecture-complete.webp` includes the original phone alongside the feature diagram, preserving its complete connecting structure.

Crop rectangles and source pages are recorded in `crop-repair.json`. Rebuild with `node scripts/repair-whats-next-crops.mjs /absolute/render-directory` after rendering source pages 2–5 at 216 dpi. The earlier source-package rebuild deliberately skips these reviewed crops. Existing interface-concept images were checked against page 3: all three already contain complete phones and are retained.

### Equal-height image groups — 2026-10-22

The author's four annotated alignment requests are handled without modifying source pixels: the five journey screens and three interface screens use equal-height, transparent, contain-fit frames. The challenge pair and first two storyboard scenes use proportional columns based on each image's natural aspect ratio, yielding equal image heights while making the left challenge image wider and the first storyboard narrower. On small screens these pairs stack naturally. Lightbox originals and complete compositions are retained.

### Earlier cover edit

At the author's request, the active cover is `title-cover-aligned.webp`. The built-in image-editing tool removed the large “4th” from the bottom left and moved the adjacent explanatory paragraph to align with the title's left edge. The pink identity, title, subtitle, circular illustration and phone remain in the composition. The prior `title-cover.webp` is preserved unchanged. The result is resized proportionally to 1600 pixels wide and encoded as WebP, quality 92. This is a cover-only artwork edit, not new project or implementation evidence.

Edit prompt: Edit the supplied What's Next? portfolio cover, preserving its 2:1 wide framing. Make ONLY two changes: remove the large white “4th” at the bottom left and restore the pink background; move the existing bottom explanatory paragraph left so it aligns with the title and subtitle. Keep the same bottom vertical position, white serif font, size, wording and line spacing. Exact paragraph: “Assist offspring to teach old parents or grandparents to learn how to use Apps easily.” Preserve the title, subtitle, pink colour, circular aqua illustration, elderly swimmer, birds, sun, “Much Easier” speech balloon, white thought bubbles and phone. No extra text or numerals; opaque background.
