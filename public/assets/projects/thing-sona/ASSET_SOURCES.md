# Thing-sona asset provenance

## Clean context-board extraction — 2026-10-23

`context-board-clean.webp` replaces the loosely cropped board excerpt. It is extracted directly from the same supplied full 1880 × 1681 toolkit image at x=326, y=739, w=1266, h=897. These bounds follow the white paper interior, excluding the teal surround, grey border and partial card sheets above it. All headings, context fields, four pairing areas, note lines, page number and credit remain unchanged. The original source and old excerpt remain available; no AI reconstruction or text editing is involved. The page uses a white background and natural image proportions.

The existing `prepare-thing-sona-decks.mjs` script also reproduces this extraction.

## Complete deck sheets — 2026-10-23

The old `physical-decks.jpg` was an already-truncated 1880 × 505 source-package crop. It is no longer used. `who-deck-complete.webp` and `how-deck-complete.webp` are extracted from the supplied full 1880 × 1681 `03_dual_decks_and_context_board.jpeg`: Who uses x=0, y=46, w=897, h=637; How uses x=982, y=46, w=898, h=637. Each preserves both rows of three cards, source wording, descriptions, print guides and credit lines. The page places Who above How at natural proportions, with no fixed-height clipping. Source files and the other project images are unchanged.

Rebuild with `node scripts/prepare-thing-sona-decks.mjs /absolute/path/to/03_dual_decks_and_context_board.jpeg`.

- cover.png: original HTML/CSS composition rendered from cover-source.html; inspired by the user-provided prototype landing-page reference.
- dependable.png and helper.png: original assets observed in the public Thing-sona v0.3.10 landing page, downloaded from https://www.penglu.work/Thing-sona_Online/assets/ on 2026-10-21. Noto Emoji artwork.
- physical-pair.jpeg, card-creation.jpeg, physical-decks.jpg and context-board.jpg: supplied by Peng Lu in Thing_sona_Website_Handoff_Package_v2/assets. Original card words and research contexts are preserved.
- prototype-workspace.png: real browser screenshot of https://www.penglu.work/Thing-sona_Online/#boards using the built-in illustrative AI-writing example.
- prototype-custom-card.png: real browser screenshot of the prototype's blank custom-card dialog. No custom card was submitted.
- No generated AI imagery or simulated software screenshot is used.

## Attribution

Original Thing-sona toolkit: Peng Lu; supplied physical cards state Apache-2.0.
Card illustration artwork: Google Noto Emoji, Apache License 2.0.
Noto Emoji project: https://github.com/googlefonts/noto-emoji
Apache License text: https://www.apache.org/licenses/LICENSE-2.0

## Verification scope

The current interface was opened in a real browser. The built-in example was loaded, showing Dependable Helper and Opinionated Substitute pairings. The custom-card dialog was opened and its text/image inputs inspected. The prototype also exposes search, relation-side selection, JSON export/import, printing, and browser-save status. Import/export round trips and printing were not exercised as part of this portfolio change. The displayed examples are not research participant records.

