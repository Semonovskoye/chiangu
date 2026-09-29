# NMNRT 2.2 — test report
29 September 2026

## Bank and regression tests

- **20 test groups passed.**
- All **732** cards passed schema validation, including four unique choice IDs and text alternatives, one matching answer key and accepted short-answer aliases.
- **70,272 choice-scoring cases passed:** 732 questions × 24 option orders × 4 selected options. This includes **9,216 cases for the 96 additions**.
- Correct/incorrect/skipped outcomes are separate. Invalid choices are rejected.
- Every new source ID resolves to an extracted original record; original question/options/key are retained.
- Every new lesson, section and reference ID resolves.
- Existing v2.1 `bankId`, the 636 original question objects and all original lesson sections remain unchanged.
- v2.1 progress import and sessions in all four modes still validate. Mixed old/new sessions serialize and validate.
- All new prompts are at most 200 characters, explanations at most 240 and options at most 100. Character limits are safeguards, not the only editorial review.

Baseline card-object SHA-256: `d74ec99fd83c1b6ea39111dc15557e890c92cc30e1c7bfe4702fcee2a0fb82a6`
Retained card-object SHA-256: `d74ec99fd83c1b6ea39111dc15557e890c92cc30e1c7bfe4702fcee2a0fb82a6`

## Arithmetic/genetics checks

**23 checks passed**, using exact rational arithmetic and explicit enumeration where appropriate. Covered microbial doubling, transpiration units, chromosomes/chromatids, gamete combinations, Punnett outcomes, linked haplotype pairs, allele frequencies, Hardy–Weinberg and iterative self-fertilization. Results and methods are recorded in `math-results.json`.

## Browser-interface checks

**71 offline Chromium checks passed**, at 1440-pixel and 390-pixel viewport widths. Covered release/count labels, shared theme selector, all four grades, new-section selection, lazy shortcuts, correct/wrong/skipped feedback, one-attempt recording, source disclosures and source-link resolution, short answers, recall self-assessment, mixed exams and simulated session restoration. The audit filter returns exactly 96 additions and can search stable original source IDs. Existing old-ID lookup still works with the local JSON fixture.

**Important environment limitation:** navigation to `http://127.0.0.1` failed with `ERR_BLOCKED_BY_ADMINISTRATOR`. Tests therefore used `page.set_content` with the actual scripts and CSS; local images/fonts were inlined for the test only. `localStorage` and the old-ID JSON fetch were mocked. Reload was simulated from serialized storage. This does not establish real browser persistence, cross-tab behavior, network loading, deployment, or Safari/Firefox compatibility.

No uncaught JavaScript errors occurred in the offline harness. The zero failed-response result reflects inlined assets, not a network availability test. Static local file references are checked separately against the merged site tree.

The screenshots contain the real rendered CSS and app data, not generated artwork. Test-only embedded font bytes are not distributed in the patch.

## Scientific-review scope

The 96 additions were editorially reviewed with original records, stated conditions, short explanations and topic-level references. The 2,893-record inventory is **not** a scientific audit of every source question. Automated scoring tests establish key/order consistency, not independent biological correctness. No teacher certification or guarantee of zero remaining errors is claimed.

## Boundaries

- `core.js` is unchanged from v2.1; it is included for cumulative installation.
- Root/homepage/theme/mascot/font/questionbank files are not changed.
- No site deployment was performed.
- The earlier release report is retained as `TEST_REPORT_v2_1.md` and does not describe these additions.

## Static reference check

29 local HTML references resolved in the merged site. This is a filesystem check, not a live HTTP check.
