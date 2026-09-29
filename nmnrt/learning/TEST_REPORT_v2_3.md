# NMNRT 2.4 — HS2 test report
29 September 2026

## Data and scoring

- **25 test groups passed.**
- 786 questions pass schema validation; each has four unique alternatives, one stable correct-choice ID and matching answer text.
- **75,456 choice/order checks passed:** 786 × 24 permutations × four selections. This tests consistency against programmed keys, not independent scientific correctness.
- All 123 actual document prompts, image references and original keys remain intact in the guide.
- Count split: 88 MCQs, 16 full true/false blocks (64 statements), 19 essays. Missing numbering is not filled in.
- The 101 textual/edited source matches, one conceptual equivalent and 21 absent same-question records are separate from the NMNRT mapping decisions.
- Q49/Q59 retain distinct identities despite their duplicated printed code. Q42 is not falsely matched to magnesium. Duplicate document pairs reuse practice IDs.
- Every new MCQ and reference resolves; all 786 MCQs have learning points.
- Q126 retains its original unlabelled graph and supplied key but has no guessed scored copy.
- Old sessions in all four modes and existing progress/reading records validate in the expanded bank.

## No reassignment of old meanings

The canonical SHA-256 of the 732 original question objects is unchanged:
`51aec02bed3f72446b5d316453195236557de98097bd76658e3cbaba6ede138f`

The canonical SHA-256 of the 732 original teaching points is unchanged:
`b6a2367bc2a9797aac484a19a3e76909e1ea952f81e3f30b80265ec0744b12bb`

All original lesson-section objects are also unchanged; new sections are appended. The existing bankId and quiz namespace remain unchanged.

## Arithmetic

**11 arithmetic checks passed**, using exact fractions where appropriate: transpiration 0.64 g/(dm²·h); Krebs CO₂; explicit modern and historical ATP conventions; glucose-to-pyruvate count; C₃-list count; and both conditional interpretations of the unlabelled Q126 graph. Checking both graph interpretations does not resolve the missing legend.

## Browser checks

**45 offline Chromium checks passed**, including guide pagination/search, preserving original versus reviewed keys, source-code collision, full true/false/essay counts, Q126 guard, short sessions scoped to the HS2 collection, correct/wrong/skipped feedback, unfinished-session cancellation, simulated restoration, learning integration, audit filtering, themes and horizontal overflow at 1440/390 px. No uncaught JavaScript errors occurred in this offline harness.

Real local navigation was attempted first and failed with **ERR_BLOCKED_BY_ADMINISTRATOR** at `http://127.0.0.1`. Tests therefore used `page.set_content` with actual scripts/styles; images and fonts were inlined for the private test only. Browser storage was mocked; reload was simulated with serialized data. These checks **do not establish live-site loading, real persistent storage, actual navigation/deep-link behavior, cross-tab behavior, Safari/Firefox compatibility or deployment**. Deep-link URLs are separately inspected as strings/static references, not claimed as browser end-to-end navigation tests.

Screenshots are real renders. No font bytes or font files are distributed in this patch. The illustrative browser harness uses the recorded workspace paths and is included for transparency, not as a one-command portable CI package.

## Boundaries

The root website, themes, icons, archive, original DOCX and original questionbank files were not edited. The output is a cumulative **NMNRT-only patch**. No deployment was made. AI editorial checks and references are not independent teacher certification; the guide visibly flags ambiguous or disputed source keys instead of forcing answers.
