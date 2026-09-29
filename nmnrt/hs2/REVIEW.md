# NMNRT 2.4 — HS2 HK1 source comparison and selected additions
29 September 2026

## Result

The uploaded `Đề cương HS2HK1.docx` contains **123 actual items**, despite numbering up to 130 and a “Page … of 5” footer spanning 20 rendered pages. There are 88 A–D items, 16 true/false blocks (64 statements), and 19 short/essay items. Numbers **89, 91, 104, 107, 109, 110 and 111** are absent; no questions were invented for those numbers.

Comparison covered the three questionbank HTML pages and all 2,893 effective records in their linked `nganhangdesinh10/11/12.js` files, plus the 732 reviewed NMNRT questions in v2.3. Scripts were parsed as data, not executed. The comparison does not claim a new scientific audit of all 2,893 records.

| Comparison layer | Result |
|---|---:|
| Same full question or minor wording/typographic variant in original banks | 101 |
| Close equivalent request in original bank, not a textual duplicate | 1 (Q117) |
| Same complete question not located in the checked original-bank snapshots | 21 |
| Existing NMNRT questions linked into this study collection | 65 |
| New concise, explicit MCQs added to NMNRT | 54 |
| Unique practice questions in the HS2 study collection | 119 |
| Full original document items available in the comparison/answer guide | 123 |
| Total NMNRT bank / teaching points after update | 786 / 786 |

The 101 source matches are all in the Grade 11 bank. “Already in an original bank” does not mean that the item was previously available in NMNRT. Conversely, an absent full essay may have several already-covered concepts. These are different comparison layers and their counts are not interchangeable.

The 119 practice questions cover selected concepts linked to the document; they are not 119 verbatim originals or a promise that every subpart is a separate scored exercise. Full true/false statements, essays, original keys and reviewed answers are retained in the companion guide. Conceptual reuse, split questions and rewritten conditions are labelled explicitly.

**Addition:** Grade 11 gains 54 questions (295 → 349). Grade 9 remains 12, Grade 10 remains 181, Grade 12 remains 244. New ideas are placed under “Đề cương HS2 HK1 · Câu bổ sung đã đối chiếu” in the relevant Grade 11 lessons. Existing Grade 10 background questions may be linked rather than duplicated or relabelled as Grade 11.

## What is preserved

All 732 prior question objects, all 732 prior teaching-point objects and all old lesson-section objects remain byte-equivalent at canonical JSON-object level. The same `bankId` and `nmnrt.v21.*` quiz storage namespace are retained. Existing reading progress remains separate. No old question ID is reassigned to a new meaning.

No original questionbank HTML/JS, homepage, theme controller, icon, font, archive or root file is changed by this NMNRT-only patch. The source DOCX is unchanged. The patch appends new reviewed content; it does not silently overwrite the source author's answer keys.

## Matching method

1. Extract the DOCX paragraphs and image relationships from OOXML to avoid the garbled Vietnamese glyph order in its rendered text layer.
2. Preserve the document number, printed code, full prompt, alternatives/statements, original answer and image bytes.
3. Parse the three `questionBank` data objects, respecting JavaScript last-property-wins behavior for duplicate keys. Keep source file hashes, group names, level labels and array indices.
4. Compare normalized question text together with alternatives/statements. Check non-identical matches manually. A same code is never sufficient.
5. Map reviewed concepts to existing NMNRT IDs; add explicitly authored questions where a useful reviewed variant is missing. Each new question has four chosen alternatives, one stable choice key, a short reason, an editorial note and references.

**Important collisions:** Q49 and Q59 share `MB-QHOTV-L2-001` but are different experiments. The close-looking magnesium record was not counted as a match for calcium Q42. Document duplicate pairs Q41/Q46, Q67/Q73, Q71/Q78 and Q79/Q81 share relevant practice IDs instead of multiplying copies. Original A–D order may differ in a pair.

Q117 is a conceptual equivalent of `qb11:saTDNVK:level4:1`; its Hyperion wording is not present in that record. No up-to-date tree-height record was verified or reused as a scored fact.

## Editorial issues that should not be memorized blindly

- **Q9:** sunlight is energy, not a material taken up from the environment. The supplied A is not a sound answer to the wording. Existing clear water/CO₂ questions are linked instead.
- **Q28, Q30, Q31, Q45:** overlapping terms/options or overbroad wording prevent an unambiguous original single-answer question. In particular, phloem is source-to-sink, not invariably downward. Reviewed variants state their conditions.
- **Q43:** the document key is A. The most direct answer about the benefit to plant roots is **C: aeration supports root respiration**. A can describe a secondary soil-biota benefit; the original key and this distinction are shown separately.
- **Q56/Q61:** distinguish the chlorophyll pigment group from chlorophyll a in reaction centers; say green light is less strongly absorbed rather than universally not absorbed.
- **Q68, Q77, Q80:** a school-level productivity percentage, one maximum temperature, or a blanket ranking of whole organs must not be generalized beyond their context. No unconditional universal claim was added.
- **Q85/Q88:** preserve the source's older 36–38 / 34 ATP convention. New questions state the P/O coefficients explicitly: 10×2.5 + 2×1.5 + 4 = 32 total model ATP, or 28 from oxidative phosphorylation alone. Real yields and shuttles vary. These are declared modelling conventions, not a silent change of an answer letter.
- **Q90a/Q92/Q93/Q96:** generalized true/false statements need stated scope. A single-celled organism does not need specialized organs; root hairs are epidermal extensions; temperature effects are not linear across the entire viable range.
- **Q98c:** organic nitrogen in dead organisms generally requires decomposition/mineralization before plant use as ammonium/nitrate. The direct-use reading of the original needs correction.
- **Q105d:** “photorespiration only occurs in C₃ plants” is too absolute; C₄ maize can also photorespire at lower rates.
- **Q106:** NaOH, not Na(OH)₂; absorbing CO₂ is not the same as producing the CaCO₃ cloudiness used by a limewater test.
- **Q117/Q125/Q127/Q128:** avoid making root pressure the sufficient cause for water reaching very tall canopies; avoid calling heartwood useless; avoid “clean/dirty” and fixed low/high volume descriptions of root pathways; do not turn routine wound painting into a default tree-care recommendation.
- **Q126: HOLD THE ORIGINAL FROM AUTOMATIC GRADING.** The supplied graph has no legend identifying white/brown as water uptake/loss. If white=uptake, only III has uptake≥loss (1 plant); the reverse legend gives I, II and IV (3). The source key “1” is preserved, but not used to invent the missing legend. The graph is displayed in the guide and no guessed auto-graded copy is added.

All other explanations, refinements and answer decisions are displayed per number in `hs2/index.html`. For a teacher-scored assessment, resolve flagged source-key differences and counting conventions with the teacher rather than treating either an old key or an AI review as infallible.

## Where to use it

- NMNRT's revision screen: **Đề cương HS2 HK1** card → original document/answer guide or 5/10 related ideas.
- Sidebar bottom and Sources: link to the HS2 guide.
- `nmnrt/hs2/index.html`: search by document number, code or words; filter missing bank matches, corrections, old/new practice links; retain full original figures and keys.
- Per-question notes: links back to every relevant original document number.
- Học nhanh: all 54 additions have authored teaching points; original 732 teaching points remain unchanged.

The full guide keeps all 123 originals, not just missing items. **72 document items link to at least one new practice question; 50 reuse only old practice questions; 1 is held without a guessed practice copy.** These counts are per document item, not per unique practice question. They deliberately preserve overlapping references.

## Original-bank snapshots

- Grade 10: `nganhangdesinh10.js`, 1425 effective records. SHA-256 `a2e6081bb3bedbfc63677ef1c490517d30e95096e74575acefdabc6c2906e000`.
- Grade 11: `nganhangdesinh11.js`, 599 effective records. SHA-256 `5711f2233fa6d92501607fcc14ac4dfd8e1bfd073e7b21dcee08620000a5e738`.
- Grade 12: `nganhangdesinh12.js`, 869 effective records. SHA-256 `4ed785e14099e01c71cdb51cb868eaf9cc3ec8d189923a1dfc1470b6f1500dec`.

Document SHA-256: `5ad84f95adf1caa45e994726f6ea21095ee452ffc253c1aa4d3233e569ffeb8c`.

Full-question absence list: 49, 92, 94, 102, 105, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 127, 128, 129.

## All-item decision ledger

Use the HTML guide for full prompt/options, original key, reviewed answer and references. “Expanded” can mean a focused replacement rather than a verbatim scored original.

| Q | Original-bank match | NMNRT disposition | Review | Original key | Reviewed answer |
|---:|---|---|---|---|---|
| 1 | matched | expanded | clarified | C | C |
| 2 | matched | reused | agrees | A | A |
| 3 | matched | reused | agrees | B | B |
| 4 | matched | expanded | agrees | A | A |
| 5 | matched | reused | clarified | B | B |
| 6 | matched | expanded | agrees | D | D |
| 7 | matched | expanded | agrees | C | C |
| 8 | matched | reused | agrees | A | A |
| 9 | matched | reused | ambiguous | A | Không có đáp án chuẩn diễn đạt rõ trong các lựa chọn gốc |
| 10 | matched | reused | clarified | A | A |
| 11 | matched | expanded | agrees | A | A |
| 12 | matched | expanded | agrees | C | C |
| 13 | matched | reused | agrees | B | B |
| 14 | matched | reused | clarified | A | A |
| 15 | matched | expanded | clarified | D | D |
| 16 | matched | reused | clarified | D | D là phương án dự kiến; lí do cần bổ sung |
| 17 | matched | reused | clarified | C | C theo chuỗi chuyển hóa được hỏi |
| 18 | matched | reused | agrees | D | D |
| 19 | matched | reused | agrees | C | C |
| 20 | matched | expanded | agrees | A | A |
| 21 | matched | expanded | clarified | C | C (70% làm tròn) |
| 22 | matched | expanded | agrees | C | C |
| 23 | matched | reused | clarified | A | A trong phạm vi nitrogen khoáng |
| 24 | matched | expanded | clarified | A | A nếu nói về các phần tử dẫn trưởng thành |
| 25 | matched | expanded | agrees | D | D |
| 26 | matched | expanded | agrees | D | D |
| 27 | matched | reused | agrees | B | B |
| 28 | matched | reused | ambiguous | C | C là ý định của đề; C/D chồng lấn |
| 29 | matched | expanded | clarified | A | A |
| 30 | matched | reused | ambiguous | D | Không có lựa chọn hoàn toàn đúng khi hiểu như quy luật chung |
| 31 | matched | expanded | ambiguous | B | Cần sửa câu hỏi; không thể giữ khóa B như một kết luận chắc chắn |
| 32 | matched | reused | clarified | B | B theo phạm vi thoát nước qua cuticle |
| 33 | matched | expanded | clarified | B | B là cách nói giản lược |
| 34 | matched | expanded | agrees | A | A |
| 35 | matched | reused | clarified | A | A |
| 36 | matched | reused | clarified | D | D nếu giữ các điều kiện khác tương đương |
| 37 | matched | expanded | clarified | D | D trong cách so sánh thông thường của đề |
| 38 | matched | expanded | clarified | B | B khi mục đích là ủ ấm trong rét |
| 39 | matched | reused | needs-context | C | C là đáp án dự kiến; không phải quy luật cấy luôn nhanh hơn gieo thẳng |
| 40 | matched | reused | agrees | C | C |
| 41 | matched | expanded | clarified | C | C theo giả thiết vận chuyển trong đề |
| 42 | matched | expanded | clarified | A | A là phương án phù hợp |
| 43 | matched | reused | corrected | A | C — sửa khóa A của tài liệu |
| 44 | matched | reused | agrees | C | C |
| 45 | matched | expanded | ambiguous | A | A/C chồng lấn; cần sửa để chỉ có một đáp án |
| 46 | matched | expanded | clarified | C | C; trùng mục tiêu và thí nghiệm với câu 41 |
| 47 | matched | expanded | clarified | D | D là nhóm ví dụ phù hợp, nhưng mô tả sa mạc quá hẹp |
| 48 | matched | expanded | agrees | B | B |
| 49 | not-found | reused | clarified | B | B |
| 50 | matched | expanded | clarified | A | A trong mô hình lá hai mặt |
| 51 | matched | reused | agrees | B | B |
| 52 | matched | expanded | agrees | B | B |
| 53 | matched | expanded | agrees | C | C |
| 54 | matched | expanded | clarified | C | C |
| 55 | matched | reused | agrees | B | B |
| 56 | matched | expanded | clarified | D | D khi hỏi nhóm chlorophyll |
| 57 | matched | reused | agrees | A | A |
| 58 | matched | reused | agrees | A | A |
| 59 | matched | expanded | clarified | A | A (ống 1) theo bố trí hình |
| 60 | matched | reused | agrees | C | C |
| 61 | matched | reused | corrected | D | D là ý định của đề nhưng phải sửa “không hấp thụ” thành “hấp thụ ít hơn” |
| 62 | matched | reused | agrees | C | C |
| 63 | matched | reused | agrees | B | B |
| 64 | matched | reused | agrees | C | C |
| 65 | matched | reused | agrees | A | A |
| 66 | matched | expanded | clarified | C | C trong giai đoạn ngay sau tắt sáng |
| 67 | matched | expanded | agrees | A | A |
| 68 | matched | reused | convention | A | A theo quy ước kiến thức phổ thông của đề |
| 69 | matched | reused | agrees | C | C |
| 70 | matched | expanded | clarified | B | B |
| 71 | matched | expanded | clarified | C | C |
| 72 | matched | expanded | agrees | C | C |
| 73 | matched | expanded | agrees | D | D; cùng ý với câu 67 |
| 74 | matched | expanded | agrees | C | C |
| 75 | matched | reused | agrees | A | A |
| 76 | matched | reused | clarified | A | A nếu nói hô hấp hiếu khí hoàn toàn |
| 77 | matched | reused | needs-context | B | Không xác định duy nhất cho mọi thực vật |
| 78 | matched | expanded | agrees | D | D; cùng thứ tự với câu 71 |
| 79 | matched | expanded | agrees | C | C |
| 80 | matched | expanded | needs-context | A | Cần nêu loài, mô và giai đoạn; không có cơ sở chọn rễ luôn cao nhất |
| 81 | matched | expanded | agrees | C | C; lặp mục tiêu của câu 79 |
| 82 | matched | expanded | agrees | B | B |
| 83 | matched | reused | agrees | C | C (điểm 4, điểm 5) |
| 84 | matched | reused | agrees | A | A |
| 85 | matched | expanded | convention | D | D theo quy ước cũ; không có đáp án hiện đại phù hợp trong bốn lựa chọn |
| 86 | matched | expanded | clarified | B | B trong hai con đường lên men được học |
| 87 | matched | reused | agrees | D | D |
| 88 | matched | expanded | convention | B | B theo quy đổi cũ; đề còn thiếu đơn vị cơ chất và quy ước |
| 90 | matched | expanded | ambiguous | a. Đ, b. S, c. S, d. S | a: cần giới hạn phạm vi; b: S; c: S; d: S |
| 92 | not-found | expanded | ambiguous | a. S, b. S, c. Đ, d. Đ | a: Đ nếu chỉ biểu bì rễ; b: S; c: diễn đạt chưa rõ; d: Đ theo mô hình nước đất của bài |
| 93 | matched | expanded | ambiguous | a. Đ, b. Đ, c. Đ, d. S | a: Đ; b: Đ với nghĩa yếu tố quan trọng; c: Đ theo ý môi trường vận chuyển; d: cần làm rõ |
| 94 | not-found | expanded | agrees | a. S, b. S, c. Đ, d. Đ | a: S; b: S; c: Đ; d: Đ |
| 95 | matched | reused | agrees | a. Đ, b. S, c. Đ, d. Đ | a: Đ; b: S; c: Đ; d: Đ |
| 96 | matched | reused | ambiguous | a. Đ, b. S, c. S, d. S | a: cần sửa phạm vi; b: S; c: S; d: S |
| 97 | matched | expanded | agrees | a. Đ, b. Đ, c. Đ, d. Đ | a: Đ; b: Đ; c: Đ; d: Đ |
| 98 | matched | reused | corrected | a. S, b. S, c. Đ, d. Đ | a: S; b: S; c: S nếu hiểu xác hữu cơ được dùng trực tiếp; d: Đ |
| 99 | matched | reused | agrees | a. S, b. Đ, c. Đ, d. S | a: S; b: Đ trong điều kiện tương đương; c: Đ; d: S |
| 100 | matched | expanded | clarified | a. Đ, b. S, c. Đ, d. Đ | a: Đ; b: S theo vai trò đặc trưng được hỏi; c: Đ; d: Đ |
| 101 | matched | reused | clarified | a. Đ, b. Đ, c. Đ, d. Đ | a: Đ; b: Đ; c: Đ; d: Đ |
| 102 | not-found | expanded | clarified | a. Đ, b. Đ, c. S, d. S | a: Đ theo mô hình thí nghiệm; b: Đ có điều kiện kiểm soát; c: S; d: S |
| 103 | matched | reused | agrees | a. Đ, b. S, c. Đ, d. S | a: Đ; b: S; c: Đ; d: S |
| 105 | not-found | expanded | corrected | a. S, b. Đ, c. Đ, d. Đ | a: S; b: Đ; c: Đ; d: S khi đọc đúng chữ “chỉ” |
| 106 | matched | expanded | clarified | a. S, b. Đ, c. S, d. S | a: S; b: Đ; c: S; d: S |
| 108 | matched | expanded | clarified | a. Đ, b. Đ, c. S, d. Đ | a: Đ trong bối cảnh tiêu hao chất dự trữ; b: Đ theo bố trí; c: S; d: cần sửa cơ chế |
| 112 | not-found | expanded | agrees | Áp suất thẩm thấu của dịch đất; pH của đất; Độ thoáng của… | Thế nước/nồng độ muối của đất; pH; độ thoáng/O₂; nhiệt độ; tình trạng rễ |
| 113 | not-found | expanded | clarified | Con đường qua tế bào sống (symplast) và con đường qua thà… | Đường gian bào (apoplast) và đường tế bào chất liên thông (symplast) |
| 114 | not-found | expanded | agrees | Đai Caspari như một đập chắn nước, làm chuyển hướng dòng … | Chặn dòng apoplast ở nội bì, buộc nước/chất tan đi qua màng theo lộ trình thích hợp trước khi vào trụ giữa |
| 115 | not-found | reused | clarified | - Cây hút được nước tự do và liên kết không chặt. / - Cây… | Nước vào rễ chủ yếu bằng thẩm thấu theo gradient thế nước |
| 116 | not-found | expanded | agrees | - Nước điều hòa nhiệt độ cơ thể. / Nước là dung môi hòa t… | Nước là thành phần tế bào, dung môi và môi trường phản ứng; tham gia phản ứng, vận chuyển, duy trì sức trương và điều hòa nhiệt |
| 117 | equivalent | expanded | corrected | Động lực dưới do lực đẩy áp suất rễ; Động lực trung gian … | Chủ yếu lực hút do thoát hơi nước phối hợp tính liên tục của cột nước (liên kết–lực căng) |
| 118 | not-found | expanded | clarified | Không bào trong tế bào lông hút ở các loài cây chịu mặn, … | Điều chỉnh thẩm thấu hạ thế nước tế bào và kiểm soát muối |
| 119 | not-found | expanded | clarified | Đẩm bảo dòng nước liên tục, duy trì sự liên kết giữa các … | Hạn chế khí lọt vào mạch gỗ, giúp duy trì tiếp xúc liên tục với nước |
| 120 | not-found | expanded | clarified | - Xới đất là công việc làm cho lớp đất trên mặt luống và … | Xới nhẹ làm đất thoáng, giúp rễ hô hấp và phát triển; quản lí nước, khoáng và vùng rễ phù hợp |
| 121 | not-found | expanded | clarified | + Áp suất thẩm thấu của dịch đất: Nếu áp suất thẩm thấu c… | Phân tích theo thế nước đất, pH, O₂ và nhiệt độ |
| 122 | not-found | expanded | clarified | An đúng khi cho rằng mặn gây hại nghiêm trọng, nhưng kết … | Giải pháp của Minh hợp lí khi có nước ngọt và đường thoát; không bảo đảm cứu được mọi cây |
| 123 | not-found | expanded | agrees | Lực đẩy áp suất rễ. | Áp suất rễ có thể đẩy dịch mạch gỗ ra vết cắt |
| 124 | not-found | expanded | clarified | Khi ta trồng cây trong chậu, khoảng đất rất hẹp, rễ của c… | Nếu chậu quá nhỏ hoặc điều kiện kém: hạn chế rễ, nước và dinh dưỡng |
| 125 | not-found | expanded | corrected | Thân cây mỗi năm một to ra, chất gỗ ở giữa thân do ngày c… | Mạch gỗ hoạt động ở gỗ dác và mạch rây phía ngoài vẫn còn liên tục |
| 126 | matched | held | missing-context | 1 | Chưa thể xác định duy nhất: hình thiếu chú giải cột |
| 127 | not-found | expanded | corrected | - Con đường qua tế bào sống: lọc sạch, vận chuyển ít nước… | Apoplast: thành/khe gian bào; symplast: tế bào chất nối qua cầu sinh chất; khác điểm qua màng và kiểm soát |
| 128 | not-found | expanded | corrected | Cây có thể chết do mạch rây bị cắt đứt, không vận chuyển … | Làm tổn thương mạch rây/tầng sinh mạch, cản phân phối chất hữu cơ và tăng nguy cơ nhiễm bệnh |
| 129 | not-found | reused | clarified | - Chuẩn bị hai cành hoa hồng trắng và hai cốc nước, một c… | So sánh cành hoa trắng trong nước màu và nước không màu; quan sát thuốc nhuộm trong mạch gỗ |
| 130 | matched | expanded | clarified | 4 | 4 theo cách hiểu “khoai” là loài C₃ như khoai tây |

## Reference register for this review

References identify supporting principles, not an official answer key from the school. The short explanations are editorial writing, not verbatim publisher extracts. Contextual anecdotes or historic news counts in the document were not reverified.

- OpenStax Biology 2e · Energy and metabolism: https://openstax.org/books/biology-2e/pages/6-1-energy-and-metabolism
- OpenStax Biology 2e · Overview of photosynthesis: https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis
- OpenStax Biology 2e · Energy flow through ecosystems: https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems
- OpenStax Biology 2e · Transport of water and solutes in plants: https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants
- OpenStax Biology 2e · Nutritional requirements of plants: https://openstax.org/books/biology-2e/pages/31-1-nutritional-requirements-of-plants
- OpenStax Biology 2e · Stems and secondary growth: https://openstax.org/books/biology-2e/pages/30-2-stems
- OpenStax Biology 2e · Water: https://openstax.org/books/biology-2e/pages/2-2-water
- OpenStax Biology 2e · Nutritional adaptations of plants: https://openstax.org/books/biology-2e/pages/31-3-nutritional-adaptations-of-plants
- OpenStax Biology 2e · Passive transport: https://openstax.org/books/biology-2e/pages/5-2-passive-transport
- OpenStax Biology 2e · Leaves: https://openstax.org/books/biology-2e/pages/30-4-leaves
- OpenStax Biology 2e · C₃, C₄ and CAM: https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules
- OpenStax Biology 2e · Light-dependent reactions: https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis
- OpenStax Biology 2e · Calvin cycle: https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules
- OpenStax Biology 2e · Glycolysis: https://openstax.org/books/biology-2e/pages/7-2-glycolysis
- OpenStax Biology 2e · Pyruvate oxidation and citric acid cycle: https://openstax.org/books/biology-2e/pages/7-3-oxidation-of-pyruvate-and-the-citric-acid-cycle
- OpenStax Biology 2e · Oxidative phosphorylation and variable yield: https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation
- OpenStax Biology 2e · Metabolism without oxygen: https://openstax.org/books/biology-2e/pages/7-5-metabolism-without-oxygen
- OpenStax Biology 2e · Energy and metabolism: https://openstax.org/books/biology-2e/pages/6-1-energy-and-metabolism
- OpenStax Biology 2e · The soil: https://openstax.org/books/biology-2e/pages/31-2-the-soil
- OpenStax Biology 2e · Roots and endodermal barriers: https://openstax.org/books/biology-2e/pages/30-3-roots
- OpenStax Biology 2e · Casparian strip and transport: https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants
- USGS · How much water is there on Earth?: https://www.usgs.gov/water-science-school/science/how-much-water-there-earth
- OpenStax · Beneficial prokaryotes: oxygen-sensitive nitrogenase: https://openstax.org/books/biology/pages/22-5-beneficial-prokaryotes
- University of Minnesota Extension · Straw mulch and winter protection: https://extension.umn.edu/agriculture/specialty-crops/commercial-fruit-production/strawberry-farming/adding-and-removing-straw-mulch-for-strawberries
- de Veau & Burris (1989) · Photorespiratory rates in wheat and maize: https://pubmed.ncbi.nlm.nih.gov/16666799/
- Pearson · ATP yield: modern and traditional P/O conventions: https://www.pearson.com/channels/calculators/atp-cellular-respiration-calculator
- Royal Society of Chemistry · Calcium carbonate and the limewater test: https://edu.rsc.org/experiments/thermal-decomposition-of-calcium-carbonate/704.article
- Osmotic and hydraulic adjustment of mangrove saplings to extreme salinity (2016): https://pubmed.ncbi.nlm.nih.gov/27591440/
- Iowa State Extension · Harvesting, conditioning and caring for cut flowers: https://yardandgarden.extension.iastate.edu/how-to/how-harvest-condition-and-care-cut-flowers
- University of Maryland Extension · Watering plants and leaching soluble salts: https://extension.umd.edu/resource/watering-indoor-plants
- Poorter et al. (2012) · Pot size matters: meta-analysis of rooting volume: https://pubmed.ncbi.nlm.nih.gov/32480834/
- Purdue Extension · Pruning ornamental trees and shrubs; wound dressings: https://ag.purdue.edu/department/hla/extension/extension-publications-library/ext-pubs/ho-4-w.html
- IRRI · Seedling preparation and transplanting shock: https://www.knowledgebank.irri.org/step-by-step-production/growth/planting/how-to-prepare-the-seedlings-for-transplanting
- Ming et al. (2015) · Pineapple genome and CAM photosynthesis: https://www.nature.com/articles/ng.3435
- Burgess et al. (2024) · C₃ rice and C₄ sorghum cell-identity networks: https://www.nature.com/articles/s41586-024-08204-3

## Tests and limitations

See `TEST_REPORT.md` and reproducible test inputs/results. Automated tests verify programmed keys, ordering, references and state compatibility; they are not proof that every biological statement is correct. This is AI-reviewed with cited checks, not independent teacher certification.
