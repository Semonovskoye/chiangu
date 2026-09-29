# NMNRT 2.1 test report

## Data and scoring

- 636 explicit questions validated.
- 61,056 choice evaluations: four options in all 24 permutations of each question.
- 683 accepted-answer variant checks.
- 136,009 total automated assertions in the data/core suite.
- All 1,036 old IDs represented in the decision ledger; four retired.
- Original section summary/task/prompt/media fields match the baseline exactly.
- Ten numerical examples independently recalculated in the test script.
- Core/app/viewer syntax checked by Node.

These are structural and logical checks, not proof of biological correctness. Biology review is described separately in review.json.

## Browser interface

52 checks passed in Chromium using Playwright:

- four grades
- natural stoma prompt
- correct choice actually correct
- selected label visible
- reloading answered question does not score twice
- correct feedback survives resume
- correct summary
- wrong feedback
- wrong chosen label
- correct reveal explicitly labelled
- skip is not wrong label
- skip no fake selected wrong option
- skip resumes accurately
- skip summary separate
- exam no answer before submit
- exam selection survives reload
- exam score 1 of 3
- exam categories
- keyboard maps displayed option to stable ID
- enter next
- short accepted numeric alias
- reason not just filled source sentence
- four self-assessment ratings
- recall self-assessment distinct
- lazy 1 questions
- lazy 1 excludes advanced
- lazy 3 questions
- lazy 3 excludes advanced
- lazy 5 questions
- lazy 5 excludes advanced
- lazy 10 questions
- lazy 10 excludes advanced
- lazy respects selected section
- notes dialog opens
- reviewed facts present
- original uncorrected text collapsed
- reference links in notes
- old records untouched
- old session untouched
- expired exam auto-submitted
- expired session cleared
- grade 9 list
- grade 10 list
- grade 11 list
- grade 12 list
- no page errors: []
- mobile no horizontal overflow
- mobile light no overflow
- audit pagination
- audit search
- old-to-new ID lookup
- no errors including audit: []

### Browser test limitation

Environment blocks URL navigation. Local files were inlined with set_content; Web Storage and local audit fetch were emulated. Save/load serialization was tested, not network deployment or native storage permissions.

Desktop 1440px and phone 390px screenshots were inspected in light and dark modes. The test did not verify the live hosted site, native browser download permission, native localStorage permission, other browser engines or every question's screen rendering. The 61,056 permutation checks were pure scoring tests, not 61,056 browser screenshots.

## Patch isolation

The only modified existing files relative to the supplied 27 September build are:

- nmnrt/data.js
- nmnrt/index.html
- nmnrt/app.js
- nmnrt/core.js

Added files are scoped to NMNRT audit styling/data/viewer. No root page, shared theme controller, image, font, homepage bridge or existing stylesheet is replaced.

## Remaining review limits

AI authorship and review, with topic-level textbook references and more specific sources for identified errors. No independent educator sign-off. This is a section-level redesign; the decision ledger is not a one-to-one semantic mapping of old questions. New IDs intentionally start with new mastery records.
