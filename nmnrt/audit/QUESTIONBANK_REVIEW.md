# NMNRT 2.2 — Questionbank consultation and selected additions
29 September 2026

## Result

The three HTML pages were consulted together with their linked data files. The HTML is mainly the matrix/configuration interface; the questions are in the JavaScript `questionBank` objects. The source scripts were parsed as data, not executed. No source HTML or question-bank JavaScript file was modified by this patch.

| Grade | Effective source records | Multiple choice | True/false blocks | Short/essay records | Added MCQs | NMNRT total |
|---|---:|---:|---:|---:|---:|---:|
| 9 | — | — | — | — | 0 | 12 |
| 10 | 1,425 | 648 | 92 | 685 | 42 | 181 |
| 11 | 599 | 399 | 90 | 110 | 24 | 295 |
| 12 | 869 | 460 | 102 | 307 | 30 | 244 |
| **Total** | **2,893** | **1,507** | **284** | **1,102** | **96** | **732** |

**The inventory counts include placeholders and repeated records. They are not counts of usable, unique, verified questions.** A true/false block counts once, not once per statement. JavaScript duplicate keys were resolved using the last property's value, as the original page would.

## What was reviewed and what was not

All 2,893 effective records were inventoried and structurally screened. The 96 selected additions were individually rewritten and reviewed for a clear learning target, four explicit alternatives, a single intended key under the stated conditions, and a concise explanation. Selected arithmetic/genetics answers were independently recomputed; topic-level external references are supplied.

This does **not** claim scientific review of every unselected record or a full audit of all original banks. Unselected entries are marked `not-imported-not-fully-reviewed`, except documented problem examples marked for review. Some prompts overlap existing concepts but add a useful distinction, condition or application; this is not a claim of 732 entirely non-overlapping biological concepts.

The 636 v2.1 question objects are unchanged. This release does not certify those 636 again or silently assign old progress to revised meanings.

## Coverage added

**Grade 10 — 42:** organelles and their functions; water, membrane transport and osmotic effects; cell-cycle checkpoints and chromosome counting; meiosis; tissue culture and stem-cell properties; microbial growth; virus structure/attachment.

**Grade 11 — 24:** applied water transport and mineral nutrition; growth and plant hormones; learned behavior and synapses; vegetative/sexual reproduction and reproductive hormones.

**Grade 12 — 30:** Mendelian crosses and linkage; clearly specified genotype/gamete counts; ABO and pleiotropy; allele frequencies, Hardy–Weinberg and self-fertilization; population/community distinctions and ecological relationships.

Grade 9 remains unchanged. No Grade 10–12 material has been silently reassigned to Grade 9.

## Provenance and editorial boundaries

Every addition records the original HTML page, linked JavaScript filename and checksum, object-group key, level label, zero-based array index, original prompt/options and original answer key. The stable source ID looks like `qb12:mcc2:level2:0`; it avoids relying on printed question codes, which are not consistently unique.

The original `level1`, `level2`, `level3` labels are retained as source labels (Biết/Hiểu/Vận dụng), not independently standardized difficulty ratings. New cards use separate `-qb22` sections in the appropriate NMNRT lesson. They are not mixed into unchanged original lesson notes.

**The concise explanations are NMNRT editorial additions, not verbatim source-bank explanations.** Changed assumptions, corrections and new illustrations are identified in `editorialNote`. External references support biological principles; they do not imply that the rewritten question appears verbatim in a textbook.

Use **Ghi chú & nguồn đối chiếu → Câu gốc và phần đã biên tập** to compare a question with its original record. In **Nguồn & dữ liệu → Sổ kiểm tra toàn bộ**, choose **Bổ sung từ questionbank** to see the 96 additions. The original key is labelled as an original key and is never used as the rewritten answer automatically.

## Concrete issues found

Two selected examples have explicit source-key corrections:

1. `qb12:mcc2:level2:0`: the original key chooses unequal A/a gamete ratios for Aa. The edited question specifies normal segregation without segregation distortion; the key is equal proportions, 1/2 A and 1/2 a.
2. `qb12:mcc3:level3:4`: the source key selects 2,048 genotypes. The edited question explicitly specifies a diploid species and counts linkage phase. Three linked loci with 2, 3 and 4 alleles give 24 haplotypes; unordered pairs with repetition give 24 × 25 / 2 = 300. The calculation is reproduced in `math-results.json`.

Other held examples include a carbon-percentage key, a decimal-place issue in a saline concentration, a G1/M checkpoint label, an anaphase-I/II chromosome distinction, plant-hormone and runner examples, and a question whose alternatives do not answer its stem. These are review flags, not silently corrected source records. See their exact IDs and reasons in `questionbank-consultation.json`.

There is also a duplicated top-level `tfKQTDCCHNL` property in the Grade 11 bank: the later definition overwrites the earlier one. Grade 12 contains a repeated `image` property in one object. Both are documented, and the original files remain untouched.

## Automated structural flags

- Image attached / possible image dependency: 213.
- Repeated prompt after normalization: 65.
- Empty or placeholder prompt: 82.
- Options equal after normalization: 20.
- Possible missing figure context: 4.
- Invalid MCQ answer index: 6.

These flags overlap. They are screening heuristics, not proof that a question is wrong. In particular, normalization can flag case-sensitive genetic notation, and an image attachment does not always mean the image is essential. No image-dependent source item was automatically turned into a stand-alone selected question without review.

## Progress and installation

This is an additive update for v2.1. The `bankId`, `nmnrt.v21.*` storage namespace, all 636 existing question IDs and objects, and original lesson sections are retained. A v2.1 progress export and unfinished session remain compatible; the 96 new IDs start without history. Data from before v2.1 remains separate as in the previous release.

The ZIP is a cumulative **NMNRT-only patch**, not a whole repository replacement. Merge the included `nmnrt/` files into the existing directory. Keep `styles.css`, `assets/`, `homepage.css`, `bridge.js`, the site root and the existing fonts.

## Testing scope

See `TEST_REPORT.md`, `unit-results.json`, `math-results.json` and `browser-results.json`. Automated correctness here means the programmed key is followed consistently; it is not a proof of every biological claim. AI review and textbook cross-checking are not independent teacher certification.

## Reference register

The complete register is in `review.json` and attached to each question in `questions.json`/`data.js`. Original-bank links identify provenance. External references identify corroborating principles. Main additions were checked against OpenStax Biology 2e, OpenStax Microbiology and NIH Stem Cell Basics; there are no remotely generated questions at runtime.

- OpenStax · Water: https://openstax.org/books/biology-2e/pages/2-2-water
- OpenStax · Carbon: https://openstax.org/books/biology-2e/pages/2-3-carbon
- OpenStax · The endomembrane system and proteins: https://openstax.org/books/biology-2e/pages/4-4-the-endomembrane-system-and-proteins
- OpenStax · Eukaryotic cells: https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells
- OpenStax · The cytoskeleton: https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton
- OpenStax · Membrane components and structure: https://openstax.org/books/biology-2e/pages/5-1-components-and-structure
- OpenStax · Passive transport: https://openstax.org/books/biology-2e/pages/5-2-passive-transport
- OpenStax · Active transport: https://openstax.org/books/biology-2e/pages/5-3-active-transport
- OpenStax · Bulk transport: https://openstax.org/books/biology-2e/pages/5-4-bulk-transport
- OpenStax · The cell cycle: https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle
- OpenStax · Control of the cell cycle: https://openstax.org/books/biology-2e/pages/10-3-control-of-the-cell-cycle
- OpenStax · The process of meiosis: https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis
- OpenStax · Asexual reproduction and micropropagation: https://openstax.org/books/biology-2e/pages/32-3-asexual-reproduction
- OpenStax · Viral structure: https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification
- OpenStax · Virus infections and hosts: https://openstax.org/books/biology-2e/pages/21-2-virus-infections-and-hosts
- OpenStax · Transport of water and solutes in plants: https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants
- OpenStax · Nutritional requirements of plants: https://openstax.org/books/biology-2e/pages/31-1-nutritional-requirements-of-plants
- OpenStax · Nutritional adaptations of plants: https://openstax.org/books/biology-2e/pages/31-3-nutritional-adaptations-of-plants
- OpenStax · Stems: growth and modifications: https://openstax.org/books/biology-2e/pages/30-2-stems
- OpenStax · Plant sensory systems and responses: https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses
- OpenStax · Behavioral biology: https://openstax.org/books/biology-2e/pages/45-7-behavioral-biology-proximate-and-ultimate-causes-of-behavior
- OpenStax · How neurons communicate: https://openstax.org/books/biology-2e/pages/35-2-how-neurons-communicate
- OpenStax · Seedless vascular plants: https://openstax.org/books/biology-2e/pages/25-4-seedless-vascular-plants
- OpenStax · Reproduction methods: https://openstax.org/books/biology-2e/pages/43-1-reproduction-methods
- OpenStax · Endocrine glands: https://openstax.org/books/biology-2e/pages/37-5-endocrine-glands
- OpenStax · Hormonal control of reproduction: https://openstax.org/books/biology-2e/pages/43-4-hormonal-control-of-human-reproduction
- OpenStax · Laws of inheritance: https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance
- OpenStax · Characteristics and traits: https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits
- OpenStax · Dominance, ABO and pleiotropy: https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits
- OpenStax · Chromosomal theory and genetic linkage: https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage
- OpenStax · Allele frequencies and Hardy–Weinberg: https://openstax.org/books/biology-2e/pages/19-1-population-evolution
- OpenStax · Community ecology: https://openstax.org/books/biology-2e/pages/45-6-community-ecology
- OpenStax · Population demography: https://openstax.org/books/biology-2e/pages/45-1-population-demography
- OpenStax · Environmental limits to population growth: https://openstax.org/books/biology-2e/pages/45-3-environmental-limits-to-population-growth
- OpenStax · Digestive systems: ruminants: https://openstax.org/books/biology-2e/pages/34-1-digestive-systems
- OpenStax · How microbes grow: https://openstax.org/books/microbiology/pages/9-1-how-microbes-grow
- OpenStax · Temperature and microbial growth: https://openstax.org/books/microbiology/pages/9-4-temperature-and-microbial-growth
- NIH · Stem Cell Basics: https://stemcells.nih.gov/node/16
- OpenStax · Nutritional requirements and growth factors: https://openstax.org/books/microbiology/pages/9-6-media-used-for-bacterial-growth

## Source snapshots

- Grade 10: `NGÂN HÀNG CÂU HỎI_files/nganhangdesinh10.js` — SHA-256 `a2e6081bb3bedbfc63677ef1c490517d30e95096e74575acefdabc6c2906e000`.
- Grade 11: `NGÂN HÀNG CÂU HỎI_files/nganhangdesinh11.js` — SHA-256 `5711f2233fa6d92501607fcc14ac4dfd8e1bfd073e7b21dcee08620000a5e738`.
- Grade 12: `NGÂN HÀNG CÂU HỎI_files/nganhangdesinh12.js` — SHA-256 `4ed785e14099e01c71cdb51cb868eaf9cc3ec8d189923a1dfc1470b6f1500dec`.
