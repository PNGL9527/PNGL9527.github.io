# MuSynk — portfolio sources and editorial record

## Author-supplied material

Package: `/Users/peng/文件/Coding/personal website/MuSynk/musynk-portfolio-website`

Read README.md, copy.md and screenshots.md in full. Metadata follows the supplied solo-designer/developer attribution, August 2026 start, daily personal use, closed-source/non-distributed status, and Mac App Store plan without a release date.

Original cover selected explicitly by the author earlier in the conversation (replaced by the editorial screenshot cover below):
`assets/MuSynk 跨设备音乐同步娱乐国际.png`.
This product illustration is distinguished from screenshots of running applications. The portrait `hero.jpg` is not used as the website cover.

## Read-only implementation checks

Android project: `/Users/peng/文件/Coding/MusicSync`. Read its AGENTS.md, product vision, architecture, roadmap, Last.fm intelligence, macOS context, Android documentation and 2026-08-20 development summary. Checked selected source paths only:

- `app/build.gradle.kts`: Android baseline/version (not presented as a user benefit).
- `app/src/main/java/com/peng/musicsync/ListeningHistoryRepository.kt`: history retrieval and cache operations.
- `app/src/main/java/com/peng/musicsync/MainActivity.kt`: recent-played 24-hour retrieval, recommendation detail wiring, `buildLocalRediscoveryTracks`, `buildRecommendationPlaylistIdeas`.

No app code, sync state, media library, credentials, or app build outputs were changed. No native sync, Music.app write-back, or device test was run for this website task. Mac behaviour is grounded in supplied screenshots and cross-platform docs, not an independent end-to-end Mac test.

## Editorial corrections

- Replaced the old Co-Driving duplicate in MuSynk.mdx with the independent music system at the user's explicit request. The former source remains in `docs/archive/musynk-legacy-co-driving.md`, outside the content collection.
- Seven chapters progress from the cross-device problem to local listening, contextual controls, history, early discovery, visible synchronization, and product boundaries. No folded galleries or unprovided demo/download links.
- A semantic HTML/CSS system diagram separates library sync from optional Last.fm history. It does not present planned playlist generation as an existing connection.
- Removed “instant/no spinner” and universal reliability claims; no measured speed or broad user results were supplied.
- Corrected rediscovery: current source filters favourited or rating >= 4 with playedCount <= 2, limited to 24 results. It is not a recency-aware “not played in a while” algorithm. The page describes the mechanism without exposing an unnecessary implementation listing.
- Recently added uses local file modification times as a proxy, not an authoritative Mac-sync timestamp. Recent played uses Last.fm history from the last 24 hours.
- History-informed cards are not external recommendation API results; candidate playlist ideas do not yet generate or sync new playlists.
- `m02-sync-options.png` actually shows selected-items review. Captioned accordingly; the supplied filename is retained for traceability.
- Bidirectional standard-playlist creation/membership is described as project manual-test evidence, not a new test performed here or a guarantee about smart-playlist rules.
- High-resolution ALAC is qualified as a device-test result; no universal Android audio guarantee.
- “Sync never deletes” is replaced with visible-plan/receipt and safe-repair principles. The source does not justify an absolute promise against every deletion.
- Did not publish the unconfirmed personal reflection or interview script. Future Mac playback and Mac App Store availability remain clearly planned.

## Images and privacy

Four Mac screenshots and ten Android screenshots plus the selected cover are used (15 assets). Each displayed screenshot was inspected. No account/settings screenshot is included; `a17-settings` is omitted to avoid publishing an account identifier. Remaining screenshots show music titles, artwork, counts, and app UI; no private account credentials or home-directory paths are shown. Album artwork is credited to respective owners. No music/audio files are copied.

WebP copies preserve source proportions and pixels' content (quality 90, maximum 2000 × 2400, no enlargement/cropping). Screenshot captions follow what the image actually shows. No screenshot or app interaction was generated. Rebuild using `node scripts/prepare-musynk-assets.cjs /absolute/material-package`.

## Title icon and project link — 2026-10-22

- `title-icon-foreground.png` is copied unchanged from `MusicSync/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png`, the app's existing transparent pink ribbon-S foreground. The shared titleIcon field reserves 1em before the heading, as on ZenTex; a MuSynk-only CSS scale of 2.1 compensates for Android's adaptive-icon safe-area padding so the visible mark is close to text height. No bitmap pixels were edited, and ZenTex's icon styling is unchanged.
- Added the author-supplied `https://github.com/PNGL9527/MuSynk` as a final project button. This is not an assertion of open-source licensing, store availability, or a release download.

## Editorial screenshot cover — 2026-10-22

At the author's request to reduce the generated-illustration appearance, the active cover is now `screens-cover.webp`, with editable `screens-cover.svg`. It combines the existing app icon (`title-icon-foreground.png`), real Mac library screenshot (`m01-main-window.webp`), and real Android player screenshot (`a09-now-playing.webp`). No new app interface, artwork, or people were generated. The Mac screenshot's black outside-window border is excluded through an SVG viewport; the application itself is unchanged. The Android image retains its complete framing within a simple device outline. Album artwork remains the property of its respective owners.

The cover is a flat editorial layout, not a single captured screen or evidence of concurrent device operation. Only the short title, “Your library, in sync.” and “macOS ↔ Android” are added. The original illustrated `cover.webp` is retained unchanged but is not referenced by the page. Both portfolio-card and hero references use the new 2:1 image.

Rebuild the new editable SVG and its 1600 × 800 WebP export (quality 92) with `node scripts/prepare-editorial-covers.mjs`. `prepare-musynk-assets.cjs` continues to prepare the source screenshots only; it does not overwrite the editorial cover.

## Author-supplied media-sync cover — latest revision, 2026-10-22

The active thumbnail and hero are now `media-sync-cover.webp`, from `/Users/peng/Downloads/MuSynk 跨设备媒体同步展示.png`, explicitly selected by the author. The original composition is retained without cropping or visual alteration, proportionally resized to 1600 pixels wide and encoded as WebP at quality 92. The hero follows the source 1672:941 aspect ratio; the shared portfolio grid retains its standard 2:1 frame. This is a product concept illustration, not a real app screenshot; the page's image notes and cover metadata have been updated accordingly. All body screenshots are unchanged. Previous covers are retained but no longer active.
