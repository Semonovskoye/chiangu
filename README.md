# chiangu - nh**7r1's evil twin

https://chiangu.dpdns.org

## Why am I doing this?

1. I think the teaching methods used in a certain website are not effective.
2. I believe information (some of it) should be free.

That is why Chiangu exists: to make the study material and revision workflow less painful.

## Project layout

- `index.html` — main Chiangu page.
- `styles.css` — main-page layout and component styling.
- `script.js` — main-page behavior (copy buttons, tabs, archive expansion, grade tabs, Vanta setup).
- `theme.js` — single shared Light / Dark / System theme controller.
- `theme.css` — shared theme tokens plus the common toolbar/back button used by root utility pages.
- `questionbank10.html`, `questionbank11.html`, `questionbank12.html` — question-bank pages.
- `DecryptorHW.html`, `DecryptorTEST.html`, `CertificateMaker.html` — root utility pages.
- `nmnrt/` — NMNRT revision tool. Rice branding stays inside NMNRT; Chiangu keeps Mambo.

## Theme behavior

The selected theme is stored once under `chiangu-theme` and shared across pages. Legacy theme keys are migrated automatically. The main page uses its existing gear widget; NMNRT uses its existing theme selector; root utility pages use the compact selector beside the shared back button.

## Branding

- Chiangu favicon / mascot: `images/mambo.png`
- NMNRT favicon / identity: `nmnrt/assets/rice.*`

`nmnrt/bridge.js` no longer replaces Chiangu's favicon.

NOTICE: Yes, this project DOES have AI assistance.