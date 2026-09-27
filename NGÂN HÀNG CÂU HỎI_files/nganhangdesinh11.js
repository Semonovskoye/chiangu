// Ngân hàng câu hỏi
const questionBank = {
    mcKQTDCCHNL: {
        level1: [
            {
                question: "MB-KQCHVCNL-L1-001. Trao đổi chất và chuyển hóa năng lượng giúp gì cho sinh vật?",
                options: ["A. Giúp sinh vật mất năng lượng.",
                    "B. Giúp sinh vật tồn tại và phát triển.",
                    "C. Giúp sinh vật sống gần nhau hơn.",
                    "D. Giúp sinh vật sống xa nhau hơn."],
                answer: 1
            },
            {
                question: "MB-KQCHVCNL-L1-002. Sinh vật có thể tồn tại, sinh trưởng, phát triển và thích nghi với môi trường sống nhờ có",
                options: ["A. Trao đổi chất và sinh sản.", "B. Chuyển hóa năng lượng.", "C.  Trao đổi chất và chuyển hóa năng lượng.", "D. Trao đổi chất và cảm ứng."],
                answer: 2
            },
            {
                question: "MB-KQCHVCNL-L1-003. Mọi cơ thể sống đều không ngừng trao đổi chất và chuyển hóa năng lượng với môi trường, khi quá trình này dừng lại thì",
                options: ["A. Sinh vật sẽ sinh trưởng.", "B. Sinh vật sẽ phát triển.", "C. Sinh vật sẽ chết.", "D. Sinh vật sẽ vận động và sinh sản."],
                answer: 2
            },
            {
                question: "MB-KQCHVCNL-L1-004. Ví dụ về việc thu nhận các chất từ môi trường là",
                options: ["A. Lá cây hấp thụ ánh sáng.", "B. Chuyển hóa tinh bột thành glucose.", "C. Quá trình quang hợp.", "D. Các chất không sử dụng được sẽ bị đào thải khỏi cơ thể."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L1-005. Các chất không được tế bào và cơ thể sử dụng sẽ được",
                options: ["Tái hấp thu.", "B. Đào thải.", "C. Điều hòa.", "D. Tích lũy để sử dụng."],
                answer: 1
            },
            {
                question: "MB-KQCHVCNL-L1-006. Từ quá trình chuyển hóa vật chất và năng lượng trong sinh giới",
                options: ["A. Một phần năng lượng được các sinh vật dự trữ, một phần sử dung cho các hoạt động sống, còn lại được thải vào môi trường ở dạng nhiệt.", "B.   Hai phần năng lượng được các sinh vật dự trữ, một phần sử dung cho các hoạt động sống, còn lại được chuyển thành cơ năng.", "C. Một phần năng lượng được các sinh vật dự trữ, hai phần sử dung cho các hoạt động sống, còn lại được thải vào môi trường ở dạng nhiệt.", "D. Một phần năng lượng được các sinh vật dự trữ, một phần sử dung cho các hoạt động sống, còn lại được chuyển thành cơ năng."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L1-007. Quá trình trao đổi chất và chuyển hóa năng lượng luôn có sự … mật thiết với nhau.",
                options: ["A. Gắn bó.", "B. Độc lập.", "C. Tách rời.", "D. Liên kết một phần."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L1-008. Sinh vật tự dưỡng gồm",
                options: ["A. Quang tự dưỡng và hóa tự dưỡng.", "B. Nhiệt tự dưỡng và ánh sáng tự dưỡng.", "C. Tiêu thụ và phân giải.", "D. Ánh sáng tự dưỡng và quang tự dưỡng."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L1-009. Sinh vật nào dưới đây có khả năng tự dưỡng?",
                options: ["A.  Bò.", "B. Gà.", "C. Vi khuẩn lam.", "D. Hổ."],
                answer: 2
            },
            {
                question: "MB-KQCHVCNL-L1-010. Dị dưỡng là sinh vật",
                options: ["A. Có khả năng tổng hợp chất vô cơ thành chất hữu cơ.", "B. Có khả năng tổng hợp chất hữu cơ từ những chất hữu cơ có sẵn.", "C. Có khả năng tổng hợp chất dinh dưỡng thông qua quang hợp.", "D. Không có khả năng tổng hợp chất hữu cơ từ chất hữu cơ có sẵn."],
                answer: 1
            },
            {
                question: "MB-KQCHVCNL-L1-011. Ở thực vật và động vật đều có chung quá trình nào sau đây để tạo ra năng lượng?",
                options: ["A. Hô hấp.",
                    "B. Quang hợp.",
                    "C. Dị dưỡng.",
                    "D. Tự dưỡng."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L1-012. Nguồn năng lượng chủ yếu cung cấp cho sinh giới là?",
                options: ["A. ATP.",
                    "B. Nhiệt năng.",
                    "C. Động năng.",
                    "D. Quang năng."],
                answer: 3
            },
            // Thêm các câu hỏi MC KQ về TĐC và CHNL level 1 khác...
        ],
        level2: [
            {
                question: "MB-KQCHVCNL-L2-001. Điền vào chỗ trống: Các chất dinh dưỡng đã thu nhận được vận chuyển đến từng … thông qua hệ mạch ở thực vật và … ở động vật.",

                options: ["A. Ti thể - hệ tuần hoàn.", "B. Tế bào chất – hệ tuần hoàn.", "C. Tế bào – ti thể.", "D. Tế bào – hệ tuần hoàn."],
                answer: 3
            },
            {
                question: "MB-KQCHVCNL-L2-002. Cơ thể người lấy từ môi trường oxygen, nước và thức ăn để chuyển hóa thành năng lượng tích lũy ở dạng",

                options: ["A. ATP.", "B. ADP.", "C. Vô cơ.", "D. Nhiệt."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L2-003. Tất cả các cơ thể sống đều là hệ thống mở, luôn diễn ra … quá trình trao đổi chất và năng lượng với môi trường.",

                options: ["A. Sau.", "B. Trước.", "C. Đồng thời.", "D. Chậm hơn."],
                answer: 2
            },
            {
                question: "MB-KQCHVCNL-L2-004. Sinh vật dị dưỡng thường được phân thành",

                options: ["A.  Sinh vật tiêu thụ và sinh vật phân giải.", "B. Sinh vật hóa tổng hợp và sinh vật quang tổng hợp.", "C. Thực vật và động vật.", "D. Sinh vật ăn thực vật và sinh vật ăn động vật."],
                answer: 0
            },
            {
                question: "MB-KQCHVCNL-L2-005. Sinh vật tự dưỡng đóng vai trò",

                options: ["A. Là sinh vật sản xuất, chế biến nguyên liệu và năng lượng cho các sinh vật khác.", "B. Là sinh vật sản xuất, cung cấp nguyên liệu và năng lượng cho các sinh vật khác.", "C. Là sinh vật tiêu thụ, chế biến nguyên liệu và năng lượng cho các sinh vật khác.", "D. Là sinh vật tiêu thụ, cung cấp nguyên liệu và năng lượng cho các sinh vật khác."],
                answer: 1
            },


            // Thêm các câu hỏi MC KQ về TĐC và CHNL level 2 khác...
        ],
        level3: [

            {
                question: "MB-KQCHVCNL-L3-001. Sinh vật không cần trao đổi chất mà vẫn có thể sống được, ví dụ như lá cây, nó không cần ăn thịt mà vẫn có thể sống”. Điều này đúng hay sai?",
                options: ["A. Không kết luận được điều gì.",
                    "B. Điều này đúng.",
                    "C. Sai, vì lá cây không sống.",
                    "D. Sai, vì lá cây có chất dinh dưỡng từ cây nuôi."],
                answer: 3
            },


            // Thêm các câu hỏi MC KQ về TĐC và CHNL level 3 khác...
        ]
    },
    mcTDNVK: {
        level1: [
            {
                question: "MB-TĐNVK-L1-001. Thực vật trên cạn hấp thu nước và khoáng từ đất chủ yếu qua rễ nhờ các",
                options: ["A. tế bào biểu bì của hầu hết các cơ quan.", "B. rễ phụ.", "C. vòi hút.", "D. lông hút."],
                answer: 3
            },
            {
                question: "MB-TĐNVK-L1-002. Nước được vận chuyển ở thân chủ yếu",
                options: ["A. Qua mạch rây theo chiều từ trên xuống.", "B. Từ mạch gỗ sang mạch rây.", "C. Từ mạch rây sang mạch gỗ.", "D. Qua mạch gỗ."],
                answer: 3
            },
            {
                question: "MB-TĐNVK-L1-003. Cơ quan thoát hơi nước chủ yếu ở cây là",
                options: ["A. rễ.", "B. thân.", "C. lá.", "D. cành."],
                answer: 2
            },
            {
                "question": "MB-TĐNVK-L1-004. Rễ cây trên cạn hấp thụ nước và ion khoáng chủ yếu qua thành phần cấu tạo nào của rễ?",
                "options": [
                    "A. Đỉnh sinh trưởng.",
                    "B. Miền lông hút.",
                    "C. Miền sinh trưởng.",
                    "D. Rễ chính."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-005. Bộ phận giúp thực hiện quá trình thoát hơi nước ở lá là",
                "options": [
                    "A. Tế bào lông hút. ",
                    "B. Khí khổng. ",
                    "C. Xylem. ",
                    "D. Phloem."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-006. Bộ phận giúp thực hiện quá trình vận chuyển nước trong thân là",
                "options": [
                    "A. Tế bào lông hút.",
                    "B. Khí khổng.",
                    "C. Mạch dẫn.",
                    "D. Cuticle."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-007. Bộ phận giúp thực hiện quá trình vận chuyển nước và muối khoáng từ rễ lên lá là",
                "options": [
                    "A. Tế bào lông hút. ",
                    "B. Xylem. ",
                    "C. Phloem. ",
                    "D. Cuticle."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-008. Bộ phận giúp thực hiện quá trình vận chuyển nước và chất hữu cơ từ lá xuống các bộ phận khác của cây là",
                "options": [
                    "A. Tế bào lông hút. ",
                    "B. Xylem. ",
                    "C. Phloem. ",
                    "D. Cuticle."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-009. Nước trong cây có dạng chính là",
                "options": [
                    "A. nước liên kết.",
                    "B. nước tự do.",
                    "C. nước liên kết và tự do.",
                    "D. nước cứng."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-010. Nước tồn tại ở những trạng thái nào?",
                "options": [
                    "A. Thể rắn và thể lỏng.",
                    "B. Thể rắn và thể khí.",
                    "C. Thể lỏng và thể khí.",
                    "D. Thể rắn, thể lỏng và thể khí."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-011. Nước trên Trái Đất chiếm khoảng",
                "options": [
                    "A. 30% diện tích bề mặt.",
                    "B. 50% diện tích bề mặt.",
                    "C. 70% diện tích bề mặt.",
                    "D. 90% diện tích bề mặt."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-012. Nước liên kết có vai trò",
                "options": [
                    "A. làm tăng quá trình trao đổi chất diễn ra trong cơ thể.",
                    "B. làm giảm nhiệt độ của cơ thể khi thoát hơi nước.",
                    "C. làm tăng độ nhớt của chất nguyên sinh.",
                    "D. đảm bảo độ bền vững của hệ thống keo trong chất nguyên sinh của tế bào."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-013. Lông hút có vai trò chủ yếu là",
                "options": [
                    "A. lách vào bề mặt đất hút nước và muối khoáng cho cây.",
                    "B. bám vào kẽ đất làm cho cây đứng vững chắc. ",
                    "C. lách vào kẽ đất hở giúp cho rễ lấy được oxygen để hô hấp.",
                    "D. tế bào kéo dài thành lông, lách vào nhiều kẽ đất làm cho bộ rễ lan rộng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-014. Vòng đai Caspari có vai trò",
                "options": [
                    "A. điều chỉnh dòng vận chuyển vào trung trụ.",
                    "B. điều chỉnh sự đóng mở của khí khổng.",
                    "C. điều chỉnh quá trình quang hợp của cây.",
                    "D. điều chỉnh hoạt động hô hấp của rễ."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-015. Thực vật lấy nước chủ yếu bằng cơ chế",
                "options": [
                    "A. hoạt tải.",
                    "B. thẩm thấu.",
                    "C. khuếch tán.",
                    "D. ẩm bào."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-016. Sự xâm nhập của nước vào tế bào lông hút theo cơ chế",
                "options": [
                    "A. chủ động.",
                    "B. thẩm thấu.",
                    "C. tốn năng lượng.",
                    "D. nhờ các bơm ion."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-017. Nước được vận chuyển từ tế bào lông hút vào bó mạch gỗ của rễ theo con đường nào?",
                "options": [
                    "A. Qua các tế bào sống.",
                    "B. Qua gian bào và qua các tế bào sống.",
                    "C. Qua chất nguyên sinh và không bào.",
                    "D. Qua gian bào và thành tế bào."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-018. Quá trình hấp thụ các ion khoáng ở rễ theo các hình thức cơ bản nào?",
                "options": [
                    "A. Khuếch tán và thẩm thấu.",
                    "B. Bị động và chủ động.",
                    "C. Cùng chiều và ngược chiều nồng độ.",
                    "D. Điện li và hút bám trao đổi."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-019. Tế bào mạch gỗ của cây gồm",
                "options": [
                    "A. quản bào và tế bào nội bì.",
                    "B. quản bào và tế bào lông hút.",
                    "C. quản bào và mạch ống.",
                    "D. quản bào và tế bào biểu bì."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-020. Khác với mạch rây, mạch gỗ có cấu tạo",
                "options": [
                    "A. gồm các tế bào chết.",
                    "B. gồm các tế bào sống nối thông với nhau.",
                    "C. gồm các tế bào sống và các tế bào chết.",
                    "D. gồm nhiều lớp tế bào có vách dày."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-021. Thành phần chủ yếu của dịch mạch gỗ là",
                "options": [
                    "A. glucose và tinh bột.",
                    "B. các chất dự trữ.",
                    "C. nước và tinh bột.",
                    "D. nước và ion khoáng."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-022. Các tế bào ở mạch rây là",
                "options": [
                    "A. các tế bào sống.",
                    "B. các tế bào chết.",
                    "C. các tế bào non.",
                    "D. các tế bào già."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-023. Chất tan được vận chuyển chủ yếu trong hệ mạch rây là",
                "options": [
                    "A. fructose.",
                    "B. glucose.",
                    "C. saccharose.",
                    "D. ion khoáng."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-024. Động lực chủ yếu của sự vận chuyển các chất trong mạch libe (mạch rây) là",
                "options": [
                    "A. sức hút của trọng lực.",
                    "B. sự chênh lệch áp suất thẩm thấu giữa các tế bào sản xuất và tiêu thụ saccharose.",
                    "C. sự chênh lệch nồng độ giữa các tế bào phần vỏ và phần ruột.",
                    "D. lực liên kết giữa dòng chất lỏng với thành mạch."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-025. Vai trò quan trọng nhất của thoát hơi nước là",
                "options": [
                    "A. giảm nhiệt độ bề mặt lá.",
                    "B. để mở khí khổng.",
                    "C. để hút khoáng.",
                    "D. để có động lực hút nước."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-026. Thoát hơi nước qua lá theo những con đường nào?",
                "options": [
                    "A. Qua khí khổng là chủ yếu và qua cuticle là thứ yếu.",
                    "B. Qua khí khổng là thứ yếu và qua cuticle là chủ yếu.",
                    "C. Qua mạch gỗ là chủ yếu và qua mạch rây là thứ yếu.",
                    "D. Qua mạch gỗ là thứ yếu và qua mạch rây là chủ yếu."
                ],
                "answer": 0,
                "image": null
            },
            {
                question: "MB-TĐNVK-L1-027. Dinh dưỡng ở thực vật là quá trình",

                options: ["A. hấp thụ nước, chất khoáng và dị hóa chúng thành chất sống của cơ thể thực vật.", "B. hấp thụ nước, chất khoáng và đồng hóa chúng thành chất sống của cơ thể thực vật.", "C. đào thải thụ nước, chất khoáng và dị hóa chúng thành chất sống của cơ thể thực vật.", "D. đào thải nước, chất khoáng và đồng hóa chúng thành chất sống của cơ thể thực vật."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L1-028. Nguyên tố nào sau đây là nguyên tố đa lượng?",

                options: ["A. Ca.", "B. Cl.", "C. Fe.", "D. Mo."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L1-029. Nguyên tố nào sau đây là nguyên tố vi lượng?",

                options: ["A. Zn.", "B. Mg.", "C. K.", "D. S."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L1-030. Quá trình trao đổi nước và khoáng ở thực vật diễn ra theo các giai đoạn nào?",

                options: ["A. Hấp thụ nước ở rễ → thoát hơi nước ở lá → vận chuyển nước ở thân.", "B. Hấp thụ nước ở rễ → vận chuyển nước ở thân → thoát hơi nước ở lá.", "C. Vận chuyển nước ở thân → thoát hơi nước ở lá → hấp thụ nước ở rễ.", "D. Vận chuyển nước ở thân → hấp thụ nước ở rễ → thoát hơi nước ở lá"],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L1-031. Rễ hấp thu khoáng ở tế bào lông hút theo cơ chế:",
                options: ["A. thẩm thấu.", "B. chủ động.", "C. thụ động.", "D. chủ động và thụ động."],
                answer: 3
            },
            {
                question: "MB-TĐNVK-L1-032. Thực vật hấp thụ Nitơ dưới dạng nào?",
                options: ["A. N<sub>2</sub>", "B. NO<sub>3</sub><sup>-</sup>", "C. NO<sub>3</sub><sup>-</sup> và NH<sub>4</sub><sup>+</sup>", "D. NO<sub>3</sub><sup>-</sup> và N<sub>2</sub>"],
                answer: 2
            },
            {
                "question": "MB-TĐNVK-L1-033. Quá trình khử nitrate sẽ tạo ra ion khoáng nào?",
                "options": [
                    "A. Amonium.",
                    "B. Sulfate.",
                    "C. Sulfide.",
                    "D. Phosphate."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-034. Có bao nhiêu điều kiện dưới đây để quá trình có định nitrogen khi quyển có thể xảy ra? </br>1. Có các lục khử mạnh.</br>2. Được cung cấp năng lượng ATP.</br>3. Có sự tham gia của enzyme nitrogenase.</br>4. Thực hiện trong điều kiện kị khí.",
                "options": [
                    "A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-035. Cây cấn dùng nitrogen nào để hình thành các amino acid?",
                "options": [
                    "A. NO<sup>-</sup>.",
                    "B. NH<sub>4</sub><sup>+</sup>.",
                    "C. NO<sub>2</sub><sup>-</sup>.",
                    "D. N<sub>2</sub>."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-036. Xác động, thực vật phải trải qua quá trình biến đổi nào cây mới sử dụng được nguồn nitrogen?",
                "options": [
                    "A. Quá trình nitrate hóa và phản nitrate hóa.",
                    "B. Quá trình amonium hóa và phản nitrate hóa.",
                    "C. Quá trình amonium hóa và nitrate hóa.",
                    "D. Quá trình có định nitrogen."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-037. Thực vật chỉ hấp thu dưỡng chất dạng nitrogen trong đất bằng hệ rễ là",
                "options": [
                    "A. Nitrogen nitrate (NO3-), nitrogen amonium (NH<sub>4</sub><sup>+</sup>).",
                    "B. Nitrogen nitrate (NO<sub>3</sub><sup>-</sup>.).",
                    "C. Dạng nitrogen tự do trong khí quyển (N<sub>2</sub>).",
                    "D. Nitrogen nitrite (NO<sub>2</sub><sup>-</sup>.)."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-038. Hấp thụ nước theo cơ chế thụ động của rễ là",
                "options": [
                    "A. hấp thụ sử dụng rất ít nguồn năng lượng ATP.",
                    "B. hấp thụ nước nhưng không hấp thụ ion khoáng.",
                    "C. hấp thụ không phụ thuộc vào áp suất thẩm thấu.",
                    "D. hấp thụ với các chất di chuyển theo thang nồng độ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-039. Tham gia trực tiếp vào quá trình trao đổi chất, thiếu nó cây sẽ chết và nó không thể thay thế bởi bất kì nguyên tố nào khác. Đó là những mô tả về nguyên tố",
                "options": [
                    "A. vi lượng.",
                    "B. đa lượng.",
                    "C. phát sinh hữu cơ.",
                    "D. dinh dưỡng thiết yếu."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-040. Cố định nitrogen khí quyển là quá trình",
                "options": [
                    "A. biến nitrogen phân tử trong không khí thành các hợp chất giống đạm vô cơ.",
                    "B. biến nitrogen phân tử trong không khí thành đạm dễ tiêu trong đất, nhờ can thiệp của con người.",
                    "C. biến nitrogen phân tử trong không khí thành nitrogen tự do trong đất, nhờ tia lửa điện.",
                    "D. biến nitrogen trong không khí thành đạm dễ tiêu trong đất nhờ các loại vi khuẩn cố định đạm."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-041. Cân bằng nước là",
                "options": [
                    "A. tương quan giữa lượng nước cây hấp thụ vào so với lượng nước thoát ra của cây.",
                    "B. tương quan giữa lượng nước tưới vào cho đất so với lượng nước thoát ra của cây.",
                    "C. tương quan giữa lượng nước thoát ra so với lượng nước hút vào.",
                    "D. tương quan giữa lượng nước làm sản phẩm so với lượng nước thải ra qua quang hợp."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-042. Bón phân hợp lí là",
                "options": [
                    "A. sau khi thu hoạch phải bổ sung lượng phân cần thiết cho đất.",
                    "B. bón đúng lúc, đúng loại, đúng cách và đúng liều lượng.",
                    "C. phải bón đủ cho cây ba loại nguyên tố quan trọng là N, P, K.",
                    "D. phải bón thường xuyên cho cây."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L1-043 [THPTQG2025]. Quá trình khử nitrate trong cơ thể thực vật là quá trình biến đổi",
                "options": [
                    "A. NO<sub>3</sub><sup>-</sup> thành NH<sub>4</sub><sup>+</sup>.",
                    "B. NO<sub>3</sub><sup>-</sup> thành N<sub>2</sub>.",
                    "C. N<sub>2</sub> thành NO<sub>3</sub><sup>-</sup>.",
                    "D. NH<sub>4</sub><sup>+</sup> thành NO<sub>3</sub><sup>-</sup>."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MC TĐNVK level 1 khác...
        ],
        level2: [
            {
                question: "MB-TĐNVK-L2-001. Khi nói về quá trình vận chuyển các chất trong cây, phát biểu nào sau đây là đúng?",

                options: ["A.  Vận chuyển trong mạch gỗ là chủ động, còn mạch rây là bị động.", "B.  Dòng mạch gỗ luôn vận chuyển các chất vô cơ, dòng mạch rây luôn vận chuyển các chất hữu cơ.", "C.  Mạch gỗ vận chuyển glucose, còn mạch rây vận chuyển các chất hữu cơ khác.", "D. Mạch gỗ vận chuyển các chất từ rễ lên lá, mạch rây vận chuyển các chất từ lá xuống rễ."],
                answer: 3
            },
            {
                question: "MB-TĐNVK-L2-002. Trong mạch rây, dịch mạch rây có thể di chuyển:",

                options: ["A. chỉ theo 1 hướng.", "B. theo 2 hướng.", "C. theo 3 hướng.", "D. theo 4 hướng."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L2-003. Lượng nước thoát qua bề mặt lá phụ thuộc vào",

                options: ["A. Độ dày tầng cutin và lượng nước rễ hút vào.", "B. Độ dày tầng cutin và diện tích lá.", "C. Lượng nước rễ hút vào và diện tích lá.", "D. Số lượng chất diệp lục có trong lá."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L2-004. Khi tế bào mất nước sẽ có hiện tượng gì ở tế bào khí khổng?",

                options: ["A. thành mỏng hết căng ra làm cho thành dày duỗi thẳng, khí khổng đóng lại.", "B. thành dày căng ra làm cho thành mỏng cong theo, khí khổng đóng lại.", "C. thành dày căng ra làm cho thành mỏng co lại, khí khổng đóng lại.", "D. thành mỏng căng ra làm cho thành dày duỗi thẳng, khí khổng khép lại."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L2-005. Điền vào chỗ trống: Cân bằng nước trong cơ thể thực vật đạt được khi lượng nước cây hấp thu vào … lượng nước thoát ra.",

                options: ["A. bằng.", "B. bằng hoặc nhỏ hơn.", "C. bằng hoặc lớn hơn.", "D. lớn hơn hoặc nhỏ hơn."],
                answer: 2
            },
            {
                question: "MB-TĐNVK-L2-006. Hiện tượng mất cân bằng nước xảy ra biểu hiện bằng triệu chứng nào ở cây?",

                options: ["A. Héo ở lá và thân non.", "B. Thay đổi màu lá và thân non.", "C. Lá căng bóng.", "D. Rễ cây bị đứt đoạn."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L2-007. Trong các thí nghiệm sau đây, thí nghiệm nào sau đây chứng minh quá trình thoát hơi nước ở lá?",
                image: "https://nhantri.top/media/Grade11/Thoathoinuocola.png",
                options: ["A. Thí nghiệm 1.", "B. Thí nghiệm 3.", "C.Thí nghiệm 4.", "D.Thí nghiệm 2."],
                answer: 2
            },
            {
                "question": "MB-TĐNVK-L2-008. Điều nào sau đây là đúng khi nói về các loại rễ của cây?",
                "options": [
                    "A. Rễ cọc và rễ chùm đều có một rễ chính to, khỏe.",
                    "B. Rễ cọc và rễ chùm đều có nhiều rễ phụ mọc ra từ gốc thân. ",
                    "C. Rễ cọc có một rễ chính và nhiều rễ phụ, rễ chùm chỉ có các rễ nhỏ mọc ra từ gốc thân.",
                    "D. Rễ chùm có một rễ chính và nhiều rễ phụ, rễ cọc chỉ có các rễ nhỏ mọc ra từ gốc thân."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-009. Đặc điểm nào là đúng khi nói về quá trình trao đổi nước?",
                "options": [
                    "A. Quãng đường hấp thụ nước ở rễ là ngắn, vận chuyển nước ở thân là dài còn thoát hơi nước ở lá là rất ngắn.",
                    "B. Nước chỉ có thể đi từ đất vào rễ, từ rễ qua thân lên lá và từ lá đi rao ngoài không khí. ",
                    "C. Quá trình hấp thụ nước, vận chuyển nước và thoát hơi nước đều thực hiện với hai thành phần là nước và muối khoáng.",
                    "D. Cây sẽ phát triển tươi tốt nếu lượng nước lấy vào ít hơn lượng nước thoát ra."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-010. Sự xâm nhập của nước vào tế bào lông hút theo cơ chế",
                "options": [
                    "A. Thẩm thấu.",
                    "B. Chủ động. ",
                    "C. Nhờ các bơm ion.",
                    "D. Biến dạng màng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-011. Sự hấp thụ ion khoáng thụ động của tế bào rễ cây phụ thuộc vào",
                "options": [
                    "A. hoạt động trao đổi chất.",
                    "B. chênh lệch nồng độ ion.",
                    "C. cung cấp năng lượng.",
                    "D. kích thước của rễ."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-012. Điều nào sau đây <b>không</b> đúng với vai trò của dạng nước tự do?",
                "options": [
                    "A. Tham gia vào quá trình trao đổi chất.",
                    "B. Làm giảm độ nhớt của chất nguyên sinh.",
                    "C. Giúp cho quá trình trao đổi chất diễn ra bình thường trong cơ thể.",
                    "D. Làm dung môi giúp giảm nhiệt độ khi thoát hơi nước."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB-TĐNVK-L2-013. Trong các bộ phận của rễ, bộ phận nào quan trọng trong việc thực hiện chức năng hút nước nhất?",
                "options": [
                    "A. Miền lông hút vì chúng hút nước và muối khoáng cho cây.",
                    "B. Miền sinh trưởng làm cho rễ dài ra.",
                    "C. Chóp rễ giúp che chở cho rễ.",
                    "D. Miền trưởng thành bao gồm các tế bào rễ đã già."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-014. Đặc điểm cấu tạo của tế bào lông hút ở rễ cây phù hợp với chức năng hấp thụ nước là",
                "options": [
                    "A. thành tế bào dày, có thấm cuticle, chỉ có một không bào trung tâm lớn.",
                    "B. thành tế bào dày, không thấm cuticle, chỉ có một không bào trung tâm lớn.",
                    "C. thành tế bào mỏng, không thấm cuticle, chỉ có một không bào trung tâm nhỏ.",
                    "D. thành tế bào mỏng, không thấm cuticle, chỉ có một không bào trung tâm lớn."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-015. Khi nói về đặc điểm của tế bào lông hút liên quan đến quá trình hấp thụ nước ở rễ, phát biểu nào sau đây là không đúng?",
                "options": [
                    "A. Chỉ có một không bào trung tâm lớn.",
                    "B. Thành tế bào mỏng, không thấm cuticle.",
                    "C. Có nhiều không bào lớn.",
                    "D. Áp suất thẩm thấu rất cao do rễ hô hấp mạnh."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-016. Nhiều loài thực vật không có lông hút thì hấp thụ nước và các chất bằng cách nào?",
                "options": [
                    "A. Cây thủy sinh hấp thụ các chất bằng toàn bộ bề mặt của cơ thể.",
                    "B. Một số thực vật cạn hấp thụ các chất nhờ nấm rễ.",
                    "C. Nhờ rễ chính.",
                    "D. Cây thủy sinh hấp thụ các chất bằng toàn bộ cơ thể còn một số cây trên cạn hấp thụ nhờ nấm rễ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-017. Một số loài cây gỗ lớn (thông, sồi) rễ không có lông hút nhưng chúng vẫn lấy được nước và muối khoáng nhờ",
                "options": [
                    "A. hấp thu trực tiếp qua biểu bì của rễ.",
                    "B. hình thành rễ phụ.",
                    "C. hệ lá hấp thụ nước trực tiếp.",
                    "D. chúng cộng sinh với một loại nấm hình thành nấm rễ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-018. Trước khi vào mạch gỗ, nước và chất khoáng hòa tan trong đất phải đi qua tế bào nào đầu tiên?",
                "options": [
                    "A. Khí khổng.",
                    "B. Tế bào nội bì.",
                    "C. Tế bào lông hút.",
                    "D. Tế bào biểu bì."
                ],
                "answer": 2,
                "image": null
            },



            {
                "question": "MB-TĐNVK-L2-019. Áp suất rễ được thể hiện qua hiện tượng",
                "options": [
                    "A. rỉ nhựa và ứ giọt.",
                    "B. rỉ nhựa.",
                    "C. thoát hơi nước.",
                    "D. ứ giọt."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB-TĐNVK-L2-020. Đặc điểm cấu tạo nào của tế bào khí khổng giúp khí khổng đóng mở thuận lợi?",
                "options": [
                    "A. Vách trong của tế bào dày, mép ngoài mỏng.",
                    "B. Vách trong và vách ngoài của tế bào đều rất dày.",
                    "C. Vách trong và vách ngoài của tế bào đều rất mỏng.",
                    "D. Vách trong của tế bào rất mỏng, vách ngoài dày."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-021. Khi tế bào khí khổng no nước thì",
                "options": [
                    "A. thành mỏng hết căng ra làm cho thành dày duỗi thẳng, khí khổng mở ra.",
                    "B. thành dày căng ra làm cho thành mỏng cong theo, khí khổng mở ra.",
                    "C. thành dày căng ra làm cho thành mỏng co lại, khí khổng mở ra.",
                    "D. thành mỏng căng ra làm cho thành dày căng theo, khí khổng mở ra."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-022. Con đường thoát hơi nước qua khí khổng có đặc điểm là",
                "options": [
                    "A. vận tốc lớn, được điều chỉnh bằng việc đóng mở khí khổng.",
                    "B. vận tốc nhỏ, được điều chỉnh bằng việc đóng mở khí khổng.",
                    "C. vận tốc lớn, không được điều chỉnh bằng việc đóng mở khí khổng.",
                    "D. vận tốc nhỏ, không được điều chỉnh bằng việc đóng mở khí khổng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-023. Vai trò nào sau đây không phải là vai trò của quá trình thoát hơi nước?",
                "options": [
                    "A. Kích thích quá trình quang hợp và hô hấp diễn ra với tốc độ bình thường.",
                    "B. Tạo ra trạng thái hơi thiếu nước của mô, tạo điều kiện cho quá trình trao đổi chất diễn ra mạnh mẽ.",
                    "C. Là động lực bên trên của quá trình hút và vận chuyển nước.",
                    "D. Tránh sự đốt nóng lá cây bởi ánh sáng mặt trời."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-024. Con đường thoát hơi nước qua bề mặt lá (qua cuticle) có đặc điểm",
                "options": [
                    "A. tổng lượng nước lớn, không được điều chỉnh bằng việc đóng mở khí khổng.",
                    "B. tổng lượng nước nhỏ, không được điều chỉnh bằng việc đóng mở khí khổng.",
                    "C. tổng lượng nước lớn, được điều chỉnh bằng việc đóng mở khí khổng.",
                    "D. tổng lượng nước nhỏ, được điều chỉnh bằng việc đóng mở khí khổng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-025. Phát biểu nào dưới đây là đúng về hiện tượng ứ giọt ở thực vật?",
                "options": [
                    "A. Ứ giọt xuất hiện ở mọi loài thực vật.",
                    "B. Rễ hấp thụ nhiều nước và thoát hơi nước kém gây ra hiện tượng ứ giọt.",
                    "C. Ứ giọt xảy ra khi nhiệt độ không khí tương đối thấp.",
                    "D. Chất lỏng hình thành từ hiện tượng ứ giọt là nhựa cây."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-026. Độ ẩm không khí càng thấp thì sự thoát hơi nước sẽ",
                "options": [
                    "A. không thay đổi.",
                    "B. càng yếu.",
                    "C. ngừng hẳn.",
                    "D. càng mạnh."
                ],
                "answer": 3,
                "image": null
            },
            {
                question: "MB-TĐNVK-L2-027. Phát biểu nào sau đây là sai khi nói về nguyên tố khoáng?",

                options: ["A. Trong thành phần cấu tạo của thực vật có hơn 50 nguyên tố, nhưng chỉ có khoảng 17 nguyên tố được xem là thiết yếu đối với cây.", "B. Khi thiếu nguyên tố khoáng thiết yếu, cây vẫn hoàn thành được chu kì sống của mình.", "C. Có hai loại nguyên tố khoáng là nguyên tố đa lượng và nguyên tố vi lượng.", "D. Nguyên tố khoáng có 2 vai trò chính là cấu trúc nên các thành phần của tế bào và điều tiết quá trình sinh lí."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L2-028. Mô tả nào sau đây là đúng về cơ chế hấp thụ khoáng thụ động ở rễ?",

                options: ["A. Chất khoáng hòa tan trong đất khuếch tán từ đất (nơi có nồng độ chất khoáng cao) vào rễ (nơi có nồng độ chất khoáng thấp).", "B. Chất khoáng được vận chuyển từ đất vào rễ ngược chiều gradient nồng độ, nhờ các chất mang được hoạt hóa bằng năng lượng.", "C. Chất khoáng được vận chuyển từ rễ vào đất ngược chiều gradient nồng độ, nhờ các chất mang được hoạt hóa bằng năng lượng.", "D. Chất khoáng hòa tan trong đất khuếch tán từ đất (nơi có nồng độ chất khoáng thấp) vào rễ (nơi có nồng độ chất khoáng cao)."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L2-029. Mô tả nào sau đây là đúng về cơ chế hấp thụ khoáng chủ động ở rễ?",

                options: ["A. Chất khoáng hòa tan trong đất khuếch tán từ đất (nơi có nồng độ chất khoáng cao) vào rễ (nơi có nồng độ chất khoáng thấp).", "B. Chất khoáng được vận chuyển từ đất vào rễ ngược chiều gradient nồng độ, nhờ các chất mang được hoạt hóa bằng năng lượng.", "C. Chất khoáng được vận chuyển từ rễ vào đất ngược chiều gradient nồng độ, nhờ các chất mang được hoạt hóa bằng năng lượng.", "D. Chất khoáng hòa tan trong đất khuếch tán từ đất (nơi có nồng độ chất khoáng thấp) vào rễ (nơi có nồng độ chất khoáng cao)."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L2-030. Chọn phát biểu sai khi nói về sự ảnh hưởng của ánh sáng đến hoạt động trao đổi nước và dinh dưỡng khoáng ở thực vật.",

                options: ["A. Ánh sáng thúc đẩy khí khổng đóng.", "B. Ánh sáng làm tăng tốc độ thoát hơi nước ở lá.", "C. Ánh sáng tạo động lực cho quá trình hấp thụ, vận chuyển nước ở rễ và thân.", "D. Ánh sáng tạo động lực cho quá trình hấp thụ, vận chuyển chất khoáng ở rễ và thân."],
                answer: 0
            },
            {
                "question": "MB-TĐNVK-L2-031. Điều kiện nào sau đây giúp quá trình có định nitrogen khí quyển để được xây ra là sai?",
                "options": [
                    "A. Môi trường giàu oxygen.",
                    "B. Sự có mật độ của enzyme nitrogenase.",
                    "C. Nguồn năng lượng ATP.",
                    "D. Có các lực khử mạnh."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-032. Vi khuẩn phản nitrate hóa tham gia vào quá trình nào dưới đây?",
                "options": [
                    "A. Chuyển hóa nitrate thành nitrite.",
                    "B. Chuyển hóa nitrate thành nitrogen phân tử.",
                    "C. Chuyển hóa nitrate thành amonium.",
                    "D. Chuyển hóa nitrate thành amide."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-033. Ý nào dưới đây không đúng với sự hấp thụ thụ động các ion khoáng ở rễ?",
                "options": [
                    "A. Các ion khoáng hòa tan trong nước và vào rễ theo dòng nước.",
                    "B. Các ion khoáng hút bám trao đổi trên bề mặt của keo đất và trên bề mặt rễ trao đổi với nhau khi có sự tiếp xúc giữa rễ và dung dịch đất (hút bám trao đổi).",
                    "C. Các ion khoáng thẩm thấu theo sự chênh lệch nồng độ từ thấp đến cao.",
                    "D. Các ion khoáng khuếch tán theo sự chênh lệch nồng độ từ cao đến thấp."
                ],
                "answer": 2,
                "image": null
            },

            {
                "question": "MB-TĐNVK-L2-034. Ý nào sau đây không phải là hấp thụ bị động chất khoáng?",
                "options": [
                    "A. Nhờ có tính thấm chọn lọc, chất khoáng đi từ nơi có nồng độ thấp ở đất sang nơi có nồng độ cao.",
                    "B. Các ion khoáng khuếch tán từ nơi có nồng độ cao ở đất sang rễ có nồng độ dịch bào thấp hơn.",
                    "C. Các ion khoáng hòa tan trong nước đi vào rễ theo dòng nước.",
                    "D. Hút bám trao đổi giữa tế bào rễ với keo đất."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-035. Quá trình hấp thụ chủ động ion khoáng có đặc điểm nào?",
                "options": [
                    "A. Chất tan đi từ nơi có nồng độ thấp của đất vào môi trường có nồng độ cao của rễ, cần năng lượng.",
                    "B. Chất tan đi từ nơi có nồng độ thấp của đất vào tế bào rễ có nồng độ cao, không cần năng lượng.",
                    "C. Chất tan đi từ nơi có nồng độ cao sang môi trường có nồng độ thấp là tế bào rễ.",
                    "D. Dù môi trường đất có nồng độ cao hay thấp so với tế bào lông hút nhưng nếu là ion cần thiết đều được tế bào lông hút lấy vào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-036. Sự xâm nhập chất khoáng chủ động sẽ không diễn ra nếu không có",
                "options": [
                    "A. gradient nồng độ chất tan.",
                    "B. hiệu điện thế màng.",
                    "C. năng lượng.",
                    "D. trao đổi chất của tế bào."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-037. Quá trình hút khoáng phụ thuộc chặt chẽ vào quá trình hô hấp vì",
                "options": [
                    "A. hô hấp tạo ra nước để thoát hơi nước.",
                    "B. hô hấp cung cấp năng lượng cho sự hút khoáng chủ động.",
                    "C. sản phẩm trung gian của quá trình hô hấp làm tăng nồng độ dịch bào.",
                    "D. hô hấp thải CO<sub>2</sub> giúp tế bào không bị đầu độc."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-038. Nồng độ K<sup>+</sup> trong cây là 0,1%, trong đất là 0,3%. Cây sẽ nhận K<sup>+</sup> bằng cách nào?",
                "options": [
                    "A. Hấp thụ chủ động.",
                    "B. Hấp thụ thụ động.",
                    "C. Thẩm thấu.",
                    "D. Khuếch tán."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-039. Thành phần nào của tế bào thực vật hạn chế sự hút nước theo cơ chế thẩm thấu?",
                "options": [
                    "A. Thành tế bào.",
                    "B. Không bào.",
                    "C. Keo nguyên sinh.",
                    "D. Lưới nội chất."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-040. Các nguyên tố vi lượng cần cho cây với một lượng nhỏ, nhưng có vai trò quan trọng vì",
                "options": [
                    "A. chúng hoạt hóa các enzyme.",
                    "B. chúng được tích lũy trong hạt.",
                    "C. chúng cần cho một số pha sinh trưởng.",
                    "D. chúng có trong cấu trúc của tất cả các bào quan."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L2-041. Để xác định vai trò của Mg với sinh trưởng và phát triển của cây ngô, người ta trồng cây trong",
                "options": [
                    "A. chậu đất và bổ sung chất dinh dưỡng có Mg.",
                    "A. chậu đất và bổ sung chất dinh dưỡng có Mg.",
                    "C. dung dịch dinh dưỡng nhưng không có Mg.",
                    "D. dung dịch thiếu dinh dưỡng nhưng có Mg."
                ],
                "answer": 2,
                "image": null
            },


            {
                "question": "MB-TĐNVK-L2-042. Xác động, thực vật phải trải qua quá trình biến đổi nào thì cây mới sử dụng được?",
                "options": [
                    "A. Quá trình nitrate hóa và phản nitrate hóa.",
                    "B. Quá trình amon hóa và phản nitrate hóa.",
                    "C. Quá trình amon hóa và nitrate hóa.",
                    "D. Quá trình cố định đạm."
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi MC TĐNVK level 2 khác...
        ],
        level3: [
            {
                question: "MB-TĐNVK-L3-001. Vì sao rễ hấp thụ được nước từ trong đất?",
                options: ["A. Do dịch tế bào biểu bì lông hút của rễ có nồng độ chất tan cao hơn so với dịch trong đất, nghĩa là ưu trương hơn so với dịch trong đất, nên nước sẽ di chuyển từ đất vào tế bào lông hút.", "B. Do dịch tế bào biểu bì lông hút của rễ có nồng độ chất tan thấp hơn so với dịch trong đất, nghĩa là nhược trương hơn so với dịch trong đất, nên nước sẽ di chuyển từ đất vào tế bào lông hút.", "C. Do dịch tế bào biểu bì lông hút của rễ có nồng độ chất tan thấp hơn so với dịch trong đất, nghĩa là ưu trương hơn so với dịch trong đất, nên nước sẽ di chuyển từ đất vào tế bào lông hút.", "D. Do dịch tế bào biểu bì lông hút của rễ có nồng độ chất tan cao hơn so với dịch trong đất, nghĩa là nhược trương hơn so với dịch trong đất, nên nước sẽ di chuyển từ đất vào tế bào lông hút."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L3-002. Trong một thí nghiệm chứng minh dòng mạch gỗ và dòng mạch rây, người ta tiến hành tiêm vào mạch rây thuộc phần giữa thân của một cây đang phát triển mạnh một dung dịch màu đỏ; đồng thời, một dung dịch màu vàng được tiêm vào mạch gỗ của thân ở cùng độ cao. Hiện tượng nào dưới đây có xu hướng xảy ra sau khoảng một ngày?",
                options: ["A. Ngọn cây (phần xa mặt đất nhất) chỉ có thuốc nhuộm đỏ, còn chóp rễ (phần sâu nhất dưới đất) chỉ có thuốc nhuộm vàng.", "B. Ngọn cây chỉ có thuốc nhuộm vàng; chóp rễ chỉ có thuốc nhuộm đỏ.", "C. Ngọn cây có cả thuốc nhuộm đỏ và vàng; chóp rễ chỉ có thuốc nhuộm đỏ.", "D. Ngọn cây chỉ có thuốc nhuộm đỏ; chóp rễ có cả thuốc nhuộm đỏ và vàng."],
                answer: 2
            },
            {
                question: "MB-TĐNVK-L3-003. Trong sản xuất, người ta thường ủ ấm gốc cây bằng rơm rạ. Mục đích của việc làm này là gì?",
                image: "https://nhantri.top/media/Grade11/urom.png",
                options: ["A. Để hạn chế ảnh hưởng của nhiệt độ cao đến khả năng hút nước và chất khoáng của hệ rễ.", "B. Để hạn chế ảnh hưởng của nhiệt độ thấp đến khả năng hút nước và chất khoáng của hệ rễ.", "C. Để hạn chế ảnh hưởng của lượng nước đến khả năng hút chất khoáng của hệ rễ.", "D. Để hạn chế ảnh hưởng của lượng chất khoáng đến khả năng hút nước của hệ rễ."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L3-004. Phản ứng nào sau đây không phải là phản ứng của thực vật để chống chịu với điều kiện bất lợi gây ra trạng thái mất cân bằng nước?",

                options: ["A. Lá biến thành gai.", "B. Lá có lớp lông phủ trên bề mặt.", "C. Khí khổng nằm sâu dưới biểu bì lá.", "D. Tăng số lượng khí khổng trên bề mặt lá."],
                answer: 3
            },
            {
                "question": "MB-TĐNVK-L3-005. Dịch tế bào lông hút của rễ ưu trương hơn so với dung dịch đất do",
                "options": [
                    "A. quá trình thoát hơi nước ở lá và nồng độ chất tan trong lông hút cao.",
                    "B. quá trình thoát hơi nước ở lá và nồng độ chất tan trong lông hút thấp.",
                    "C. nồng độ chất tan trong lông hút cao hơn nồng độ chất tan trong dung dịch đất.",
                    "D. nồng độ chất tan trong dung dịch đất cao hơn nồng độ chất tan trong lông hút."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-006. Chúng ta nên tưới nước cho cây vào thời điểm nào?",
                "options": [
                    "A. Tưới buổi trưa khi trời mát. ",
                    "B. Tưới buổi sáng hoặc buổi chiều khi trời mát. ",
                    "C. Tưới buổi trưa khi trời nắng nóng. ",
                    "D. Tưới buổi sáng hoặc buổi chiều khi trời nắng nóng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-007. Tác dụng chính của kĩ thuật nhổ cây con đem cấy là gì?",
                "options": [
                    "A. Bố trí thời gian thích hợp để cấy.",
                    "B. Tận dụng được đất gieo khi ruộng cấy chưa chuẩn bị kịp.",
                    "C. Không phải tỉa bỏ bớt cây con sẽ tiết kiệm được giống.",
                    "D. Làm đứt chóp rễ và miền sinh trưởng kích thích sự ra rễ con để hút nhiều nước và muối khoáng."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-008. Trong nghề trồng lúa nước, việc nhổ cây mạ đem cấy sẽ giúp cây mạ phát triển nhanh hơn so với việc gieo thẳng. Nguyên nhân là vì",
                "options": [
                    "A. tận dụng đất khi chưa gieo cấy.",
                    "B. bố trí được thời gian thích hợp để cấy.",
                    "C. kích thích ra rễ con, tăng cường hấp thu nước và muối khoáng.",
                    "D. tiết kiệm được cây giống vì không phải bỏ bớt cây con."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-009. Trong một thí nghiệm chứng minh dòng mạch gỗ và dòng mạch rây, người ta tiêm vào mạch rây thuộc phần giữa thân của một cây đang phát triển mạnh một dung dịch màu đỏ. Đồng thời, một dung dịch màu vàng được tiêm vào mạch gỗ của thân ở cùng độ cao. Hiện tượng nào dưới đây có xu hướng xảy ra sau khoảng thời gian một ngày?\n ",
                "options": [
                    "A. Ngọn cây chỉ có thuốc nhuộm đỏ còn chóp rễ chỉ có thuốc nhuộm vàng.",
                    "B. Ngọn cây chỉ có thuốc nhuộm vàng còn chóp rễ chỉ có thuốc nhuộm đỏ.",
                    "C. Ngọn cây có cả thuốc nhuộm đỏ và vàng còn chóp rễ chỉ có thuốc nhuộm đỏ.",
                    "D. Ngọn cây chỉ có thuốc nhuộm đỏ còn chóp rễ có cả thuốc nhuộm đỏ và vàng."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-010. Một lá cây có khối lượng 0,15g. Sau 15 phút thoát hơi nước, khối lượng lá giảm mất 0,08g. Xác định cường độ thoát hơi nước của lá cây biết rằng diện tích lá là 0,5 dm<sup>2</sup>.",
                "options": [
                    "A. 0,009 g/ dm<sup>2</sup>/ giờ.",
                    "B. 0,56 g/ dm<sup>2</sup>/ giờ.",
                    "C. 0,64 g/ dm<sup>2</sup>/ giờ.",
                    "D. 0,01 g/ dm<sup>2</sup>/ giờ."
                ],
                "answer": 2,
                "image": null
            },
            {
                question: "MB-TĐNVK-L3-011. Phát biểu nào sau đây là đúng về vai trò của Magnesium (Mg) đối với thực vật?",
                options: ["A. Thành phần của thành tế bào, hoạt hóa enzyme thủy phân ATP và phospholipid.", "B. Thành phần của diệp lục, tham gia hoạt hóa enzyme liên quan đến sự vận chuyển gốc phosphate.", "C. Thành phần của nucleic acid, phospholipid, ATP và một số coenzyme.", "D. Thành phần của cytochrome, hoạt hóa enzyme của quá trình tổng hợp diệp lục."],
                answer: 1
            },
            {
                question: "MB-TĐNVK-L3-012. Phát biểu nào sau đây là đúng về vai trò của Calcium (CA. đối với thực vật?",
                options: ["A. Thành phần của thành tế bào, hoạt hóa enzyme thủy phân ATP và phospholipid.", "B.  Thành phần của diệp lục, tham gia hoạt hóa enzyme liên quan đến sự vận chuyển gốc phosphate.", "C. Thành phần của nucleic acid, phospholipid, ATP và một số coenzyme.", "D. Thành phần của cytochrome, hoạt hóa enzyme của quá trình tổng hợp diệp lục."],
                answer: 0
            },
            {
                question: "MB-TĐNVK-L3-013. Phát biểu nào sau đây là đúng về vai trò của Phosphorus (P) đối với thực vật?",
                options: ["A. Thành phần của thành tế bào, hoạt hóa enzyme thủy phân ATP và phospholipid.", "B. Thành phần của diệp lục, tham gia hoạt hóa enzyme liên quan đến sự vận chuyển gốc phosphate.", "C. Thành phần của nucleic acid, phospholipid, ATP và một số coenzyme.", "D. Thành phần của cytochrome, hoạt hóa enzyme của quá trình tổng hợp diệp lục."],
                answer: 2
            },
            {
                question: "MB-TĐNVK-L3-014. Vì sao trao đổi khoáng đi kèm với trao đổi nước?",
                options: ["A. Vì nguyên tố khoáng không tan trong nước.", "B.  Vì nguyên tố khoáng vận chuyển theo con đường khác cùng chiều với vận chuyển nước.", "C. Vì nguyên tố khoáng hòa tan trong nước.", "D. Vì nguyên tố khoáng vận chuyển theo con đường khác ngược chiều với vận chuyển nước."],
                answer: 2
            },
            {
                "question": "MB-TĐNVK-L3-015. Bón phân quá liều lượng sẽ làm cho cây chết vì",
                "options": [
                    "A. làm cho cây nóng và héo lá.",
                    "B. các nguyên tố khoáng vào tế bào nhiều làm mất ổn định thành phần chất nguyên sinh.",
                    "C. nồng độ dịch đất cao hơn dịch bào nên tế bào lông hút không hút được nước bằng cách thẩm thấu.",
                    "D. Thành phần khoáng chất làm mất ổn định tính chất lí hóa của hệ thống keo."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-016. Vì sao khi trồng cây người ta lại thường xuyên xới đất ở gốc cây cho tơi xốp?",
                "options": [
                    "A. Tạo điều kiện cho sinh vật đất hoạt động.",
                    "B. Giúp cây lấy nước dễ dàng hơn.",
                    "C. Tạo độ thoáng giúp rễ cây hô hấp tốt.",
                    "D. Giảm sự xói mòn và rửa trôi đất."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-017. Một trong các biện pháp hữu hiệu nhất để hạn chế xảy ra quá trình chuyển hóa nitrate thành nitrogen phân tử (NO<sub>3</sub> thành N<sub>2</sub>) là",
                "options": [
                    "A. làm đất kĩ, tơi xốp và thoáng khí.",
                    "B. bón phân vi lượng thích hợp.",
                    "C. giữ độ ẩm vừa phải và thường xuyên cho đất.",
                    "D. khử chua cho đất."
                ],
                "answer": 0,
                "image": null
            },


            {
                "question": "MB-TĐNVK-L3-018. Cách nhận biết rõ rệt nhất thời điểm cần bón phân là",
                "options": [
                    "A. căn cứ vào dấu hiệu bên ngoài của quả mới ra.",
                    "B. căn cứ vào dấu hiệu bên ngoài của gốc cây.",
                    "C. căn cứ vào dấu hiệu bên ngoài của vỏ cây.",
                    "D. căn cứ vào dấu hiệu bên ngoài của lá cây."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-TĐNVK-L3-019. Khi thấy cây có hiện tượng vàng lá do thiếu chất dinh dưỡng, ta nên phun hay bón chất nào sau đây để lá xanh trở lại?",
                "options": [
                    "A. Ca<sub>2</sub><sup>+</sup>.",
                    "B. Fe<sub>3</sub><sup>+</sup>.",
                    "C. Mg<sub>2</sub><sup>+</sup>.",
                    "D. Cu<sub>2</sub><sup>+</sup>."
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi MC TĐNVK level 3 khác...
        ]
    },
    // Quang hợp ở thực vật
    mcQHOTV: {
        level1: [
            {
                "question": "MB-QHOTV-L1-001. Nhóm diệp lục (diệp lục a và B. hấp thụ ánh sáng chủ yếu ở vùng",
                "options": [
                    "A. đỏ cam.",
                    "B. xanh lục.",
                    "C. vàng cam.",
                    "D. xanh tím."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-002. Bảo quan thực hiện chức năng quang hợp là",
                "options": [
                    "A. diệp lục.",
                    "B. lục lạp.",
                    "C. thylakoid.",
                    "D. lá cây."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-003. Đặc điểm của nhóm thực vật CAM là",
                "options": [
                    "A. thực vật thủy sinh như rong đuôi chó, sen, súng,...",
                    "B. thực vật sống ở vùng khí hậu ôn hòa như các loài rau, đậu, lúa, khoai,...",
                    "C. các thực vật có rễ khí sinh như đước, sanh,...",
                    "D. thực vật ưa hạn sống ở sa mạc như dứa, xương rồng, thuốc bỏng, cây mọng nước,..."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-004. Mô giậu có đặc điểm",
                "options": [
                    "A. bao gồm các tế bào xếp dãn cách nhau, không chứa lục lạp.",
                    "B. bao gồm các tế bào xếp sát nhau, chứa nhiều lục lạp.",
                    "C. bao gồm các tế bào xếp sát nhau, chứa ít lục lạp.",
                    "D. bao gồm các tế bào xếp dãn cách nhau, chứa nhiều lục lạp."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-005. Phần thịt lá nằm liền sát lớp biểu bì trên gồm các",
                "options": [
                    "A. tế bào mô giậu.",
                    "B. khí khổng.",
                    "C. tầng cuticle.",
                    "D. tế bào bao bó mạch."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-006. Bào quan thực hiện quá trình quang hợp ở cây xanh là",
                "options": [
                    "A. không bào.",
                    "B. ribosome.",
                    "C. lục lạp.",
                    "D. ti thể."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-007. Sắc tố nào sau đây thuộc nhóm sắc tố chính?",
                "options": [
                    "D. Chlorophyll và carotenoid.",
                    "C. Chlorophyll a và phicobilin.",
                    "B. Chlorophyll a và xanthophyll.",
                    "A. Chlorophyll a và chlorophyll b."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-008. Pha tối xảy ra tại cấu trúc nào của lục lạp?",
                "options": [
                    "A. Màng lục lạp.",
                    "B. Stroma.",
                    "C. Grana.",
                    "D. Thylakoid."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-009. Nhóm thực vật C3 được phân bố ở",
                "options": [
                    "A. hầu khắp mọi nơi trên Trái Đất.",
                    "B. ở vùng ôn đới và á nhiệt đới.",
                    "C. ở vùng nhiệt đới.",
                    "D. ở vùng sa mạc."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-010. Chu trình C3 diễn ra ở các loài cây",
                "options": [
                    "A. xương rồng, thanh long, dứa.",
                    "B. mía, ngô, rau dền, kê.",
                    "C. lúa, khoai, sắn, đậu.",
                    "D. xương rồng, mía, cam."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-011. Chu trình C3 diễn ra thuận lợi trong những điều kiện nào?",
                "options": [
                    "A. cường độ ánh sáng, nhiệt độ, oxygen bình thường, nồng độ carbonic cao.",
                    "B. cường độ ánh sáng, nhiệt độ, nồng độ carbonic, oxygen bình thường.",
                    "C. cường độ ánh sáng, nhiệt độ, oxygen cao.",
                    "D. cường độ ánh sáng, nhiệt độ, nồng độ carbonic, oxygen thấp."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-012. Nhóm thực vật C4 được phân bố như thế nào?",
                "options": [
                    "A. Sống ở vùng sa mạc.",
                    "B. Sống ở vùng nhiệt đới.",
                    "C. Chỉ sống ở vùng ôn đới và á nhiệt đới.",
                    "D. Chủ yếu sống ở vùng nhiệt đới và cận nhiệt đới."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-013. Nhóm thực vật C4 bao gồm các cây",
                "options": [
                    "A. xương rồng, thanh long, dừa.",
                    "B. mía, ngô, rau dền.",
                    "C. cam, bưởi, nhãn.",
                    "D. xương rồng, mía, cam."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-QHOTV-L1-014. Những cây thuộc nhóm thực vật CAM là",
                "options": [
                    "A. lúa, khoai, sắn, đậu.",
                    "B. ngô, mía, cỏ lồng vực, cỏ gấu.",
                    "C. dứa, xương rồng, thuốc bỏng.",
                    "D. lúa, ngô, khoai, sắn, dứa, xương rồng, thuốc bỏng."
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi Quang hợp ở thực vật level 1 khác...
        ],
        level2: [
            {
                question: "MB-QHOTV-L2-001. Một thí nghiệm sử dụng rong đuôi chồn được bố trí như hình dưới đây. Ống 1 và ống 2 có chiếu sáng; ống 3 và ống 4 đặt trong tối; các điều kiện thí nghiệm khác là như nhau. Ở ống nghiệm nào bọt khí oxygen được tạo ra nhiều nhất?",
                image: "https://nhantri.top/media/Grade11/rongduoichon.png",
                options: ["A. 1.", "B. 2.", "C. 3.", "D. 4."],
                answer: 0
            },
            {
                question: "MB-QHOTV-L2-002. Có một loại khí được thải ra từ quá trình quang hợp, là một khí rất cần thiết cho việc hô hấp của tế bào.Khí đó là gì?",

                options: ["A. Khí oxygen.", "B. khí hidrogen.", "C. khí cacbon dioxide.", "D. khí nitrogen."],
                answer: 0
            },
            {
                "question": "MB-QHOTV-L2-003. Chất được tách ra khỏi chu trình Calvin để khỏi đầu tổng hợp glucose là",
                "options": [
                    "A. RuDP (ribulose - 1,5 - diphosphate).",
                    "B. APG (acid phosphoglyceriC..",
                    "C. ALPG (aldehyde phosphoglyceriC..",
                    "D. AM (acid maliC.."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-QHOTV-L2-004. Vì sao lá cây có màu xanh lục?",
                "options": [
                    "A. Vì diệp lục a hấp thụ ánh sáng màu xanh lục.",
                    "B. Vì diệp lục b không hấp thụ ánh sáng màu xanh lục.",
                    "C. Vì nhóm sắc tố phụ hấp thụ ánh sáng màu xanh lục.",
                    "D. Vì hệ sắc tố không hấp thụ ánh sáng màu xanh lục."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB-QHOTV-L2-005. Hệ sắc tố quang hợp phân bố ở",
                "options": [
                    "A. chất nền stroma.",
                    "B. xoang thylakoid.",
                    "C. màng thylakoid.",
                    "D. ti thể."
                ],
                "answer": 2,
                "image": null
            },

            {
                "question": "MB-QHOTV-L2-006. Pha sáng của quang hợp là pha chuyển hóa năng lượng của ánh sáng",
                "options": [
                    "A. đã được diệp lục hấp thụ thành năng lượng trong các liên kết hóa học trong ATP.",
                    "B. đã được diệp lục hấp thụ thành năng lượng trong các liên kết hóa học trong ATP và NADPH.",
                    "C. đã được diệp lục hấp thụ thành năng lượng trong các liên kết hóa học trong NADPH.",
                    "D. thành năng lượng trong các liên kết hóa học trong ATP."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB-QHOTV-L2-007. Những hợp chất mang năng lượng ánh sáng vào pha tối để đồng hóa CO<sub>2</sub> thành carbohydrate là",
                "options": [
                    "A. ATP và NADPH. ",
                    "B. NADPH và O<sub>2</sub>. ",
                    "C. H<sub>2</sub>O và ATP.",
                    "D. ATP, ADP, ánh sáng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-QHOTV-L2-008. Sản phẩm đầu tiên trong pha tối của nhóm thực vật C3 là",
                "options": [
                    "A. Aldehyl phospho glyceric (AlPG).",
                    "B. Ribulose 1,5 diphosphate.",
                    "C. Phosphoglyceric acid (APG).",
                    "D. Oxalo acetic acid (AOA.."
                ],
                "answer": 2,
                "image": null
            },

            {
                "question": "MB-QHOTV-L2-009. Sản phẩm đầu tiên trong pha tối của nhóm thực vật C4 là",
                "options": [
                    "A. oxalo acetic acid.",
                    "B. phospho gliceric acid.",
                    "C. ribulose 1 phosphate.",
                    "D. ribulose 1-5 diphosphate."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB-QHOTV-L2-010. Do nguyên nhân nào nhóm thực vật CAM phải cố định CO<sub>2</sub> vào ban đêm?",
                "options": [
                    "A. Vì ban đêm môi trường mới đủ lượng nước cung cấp cho quá trình đồng hóa CO<sub>2</sub>.",
                    "B. Vì ban đêm khi trời mát, nhiệt độ hạ thấp thuận lợi cho hoạt động của nhóm thực vật này.",
                    "C. Vì mọi thực vật đều thực hiện pha tối vào ban đêm.",
                    "D. Vì ban đêm, khí khổng mới mở ra, ban ngày khí khổng đóng để tiết kiệm nước."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-QHOTV-L2-011. Cây đang được chiếu sáng để quang hợp đến khi tắt ánh sáng, nồng độ chất nào sẽ tăng trong chu trình Calvin?",
                "options": [
                    "A. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.",
                    "B. AlPG.",
                    "C. APG.",
                    "D. RiDP."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-QHOTV-L2-012[THPTQG2025]. Chất nào sau đây là một trong những nguyên liệu đầu tiên được sử dụng trong chu trình Calvin của quá trình quang hợp ở thực vật C3?",
                "options": [
                    "A. NADP<sup>+</sup>.",
                    "B. NAD<sup>+</sup>.",
                    "C. CO<sub>2</sub>.",
                    "D. O<sub>2</sub>."
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi Quang hợp ở thực vật level 2 khác...
        ],
        level3: [
            {
                "question": "TB-QHOTV-L3-001. Quang hợp quyết định bao nhiêu phần trăm số năng suất cây trồng?",
                "options": [
                    "A. Quang hợp quyết định 90 - 95% năng suất của cây trồng.",
                    "B. Quang hợp quyết định 80 - 85% năng suất của cây trồng.",
                    "C. Quang hợp quyết định 60 - 65% năng suất của cây trồng.",
                    "D. Quang hợp quyết định 70 - 75% năng suất của cây trồng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "TB-QHOTV-L3-002. Ở thực vật, phương trình tổng quát của quá trình quang hợp được viết như thế nào?",
                "options": [
                    "A. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + Q.",
                    "B. 6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O.",
                    "C. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 CO<sub>2</sub> → 6 O<sub>2</sub> + 6 H<sub>2</sub>O + Q.",
                    "D. 6 O<sub>2</sub> + 6 H<sub>2</sub>O + Q → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 CO<sub>2</sub>."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "TB-QHOTV-L3-003. Quá trình hô hấp sáng là quá trình",
                "options": [
                    "A. hấp thụ O<sub>2</sub> và giải phóng CO<sub>2</sub> ngoài sáng.",
                    "B. hấp thụ CO<sub>2</sub> và giải phóng O<sub>2</sub> trong bóng tối.",
                    "C. hấp thụ CO<sub>2</sub> và giải phóng O<sub>2</sub> ngoài sáng.",
                    "D. hấp thụ O<sub>2</sub> và giải phóng CO<sub>2</sub> trong bóng tối."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-QHOTV-L3-004. Sự hấp thụ carbonic và độ đóng mở khí không trong một ngày đêm ở một loài thực vật được biểu hiện ở trong đồ thị. Loài thực vật này thuộc nhóm nào?",
                "options": [
                    "A. Thực vật C3.",
                    "B. Thực vật C4.",
                    "C. Thực vật CAM.",
                    "D. Thực vật sống ở vùng cực."
                ],
                "answer": 2,
                image: "https://nhantri.top/media/Grade11/hapthucarbonic.png",
            },

            // Thêm các câu hỏi Quang hợp ở thực vật level 3 khác...
        ]
    },
    // Hô hấp ở thực vật
    mcHHOTV: {
        level1: [
            {
                "question": "MB-HHOTV-L1-001. Có bao nhiêu phản tử CO<sub>2</sub> được tạo thành khi 2 acetyl CoA tham gia vào chu trình Krebs?",
                "options": [
                    "A. 2.",
                    "B. 3.",
                    "C. 4.",
                    "D. 6."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-002. Các giai đoạn của hô hấp tế bào diễn ra theo trật tự nào?",
                "options": [
                    "A. Chuỗi truyền electron hô hấp → chu trình Krebs → đường phân.",
                    "B. Đường phân → chuỗi truyền electron hô hấp → chu trình Krebs.",
                    "C. Chu trình Krebs → đường phân → chuỗi truyền electron hô hấp.",
                    "D. Đường phân → chu trình Krebs → chuỗi truyền electron hô hấp."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-003. Sản phẩm của quá trình lên men rượu là",
                "options": [
                    "A. Lactic acid.",
                    "B. Acetic acid.",
                    "C. Ethanol.",
                    "D. Nucleic acid."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-004. Hô hấp là quá trình",
                "options": [
                    "A. Oxy hóa các hợp chất hữu cơ thành CO<sub>2</sub> và H<sub>2</sub>O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.",
                    "B. Oxy hóa các hợp chất hữu cơ thành O<sub>2</sub> và H<sub>2</sub>O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.",
                    "C. Khử hóa các hợp chất hữu cơ thành CO<sub>2</sub> và H<sub>2</sub>O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.",
                    "D. Khử các hợp chất hữu cơ thành CO<sub>2</sub> và H<sub>2</sub>O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-005. Các giai đoạn của hô hấp tế bào diễn ra theo trật tự nào?",
                "options": [
                    "A. Chu trình Krebs → Đường phân → Chuối truyền electron hô hấp.",
                    "B. Đường phân → Chuỗi truyền electron hô hấp → Chu trình Krebs.",
                    "C. Đường phân → Chu trình Krebs → Chuỗi truyền electron hô hấp.",
                    "D. Chuỗi truyền electron hô hấp → Chu trình Krebs → Đường phân."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-006. Nhiệt độ tối đa cho hô hấp ở trong khoảng",
                "options": [
                    "A. 35<sup>o</sup>C - 40<sup>o</sup>C.",
                    "B. 40<sup>o</sup>C - 45<sup>o</sup>C.",
                    "C. 30<sup>o</sup>C - 35<sup>o</sup>C.",
                    "D. 45<sup>o</sup>C - 50<sup>o</sup>C."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-HHOTV-L1-007. Vai trò quan trọng nhất của hô hấp đối với cây trồng là gì?",
                "options": [
                    "A. Cung cấp năng lượng cho cây.",
                    "B. Tăng khả năng chống chịu.",
                    "C. Tạo ra các sản phẩm trung gian.",
                    "D. Miễn dịch cho cây."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB-HHOTV-L1-008. Quá trình hô hấp sáng là quá trình",
                "options": [
                    "A. Hấp thụ CO<sub>2</sub> và giải phóng O<sub>2</sub> trong bóng tối.",
                    "B. Hấp thụ CO<sub>2</sub> và giải phóng O<sub>2</sub> ngoài sáng.",
                    "C. Hấp thụ O<sub>2</sub> và giải phóng CO<sub>2</sub> trong bóng tối.",
                    "D. Hấp thụ O<sub>2</sub> và giải phóng CO<sub>2</sub> ngoài sáng."
                ],
                "answer": 3,
                "image": null
            },

            // Thêm các câu hỏi Hô hấp ở thực vật level 1 khác...
        ],
        level2: [
            {
                "question": "MB-HHOTV-L2-001. Trong quá trình hô hấp ở thực vật, chuỗi chuyển electron xảy ra ở đâu?",
                "options": [
                    "A. Màng ngoài của ti thể.",
                    "B. Màng trong của ti thể.",
                    "C. Tế bào chất.",
                    "D. Màng sinh chất."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-HHOTV-L2-002. Giai đoạn nào chung cho quá trình lên men và hô hấp hiếu khí?",
                "options": [
                    "A. Chu trình Krebs.",
                    "B. Chuỗi chuyển điện tử (electron).",
                    "C. Đường phân.",
                    "D. Tổng hợp acetyl CoA."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-HHOTV-L2-003. Nơi diễn ra sự hô hấp mạnh nhất ở thực vật là",
                "options": [
                    "A. Rễ.",
                    "B. Thân.",
                    "C. Lá.",
                    "D. Quả."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB-HHOTV-L2-004. Giai đoạn nào chung cho quá trình lên men và hô hấp hiếu khí?",
                "options": [
                    "A. Chu trình Krebs.",
                    "B. Chuỗi chuyền điện tử electron.",
                    "C. Đường phân.",
                    "D. Tổng hợp acetyl – CoA."
                ],
                "answer": 2,
                "image": null
            },


            // Thêm các câu hỏi Hô hấp ở thực vật level 2 khác...
        ],
        level3: [
            {
                "question": "MB-HHOTV-L3-001. Có bao nhiêu phân tử acid pyruvic được hình thành từ 1 phân tử glucose bị phân giải trong đường phân?",
                "options": [
                    "A. 4 phân tử",
                    "B. 6 phân tử",
                    "C. 1 phân tử",
                    "D. 2 phân tử"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-HHOTV-L3-002. Có bao nhiêu phân tử ATP được hình thành từ 1 phân tử glucozo bị phân giải trong quá trình hô hấp hiếu khí?",
                "options": [
                    "A. 2 phân tử.",
                    "B. 14 phân tử.",
                    "C. 26 phân tử.",
                    "D. 36 - 38 phân tử."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-HHOTV-L3-003. Chuỗi truyền electron tạo ra",
                "options": [
                    "A. 32 ATP.",
                    "B. 34 ATP.",
                    "C. 36 ATP.",
                    "D. 38 ATP."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB-HHOTV-L3-004. Phân giải kị khí (lên men) từ acid pyruvic tạo ra",
                "options": [
                    "A. chỉ rượu ethylic.",
                    "B. rượu ethylic hoặc acid lactic.",
                    "C. chỉ acid lactic.",
                    "D. đồng thời rượu ethylic và acid lactic."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-HHOTV-L3-005. Đồ thị mô tả ảnh hưởng của cường độ ánh sáng đến cường độ hô hấp và cường độ quang hợp của một loài thực vật. Trên đồ thị, điểm bù ánh sáng và điểm bão hòa ánh sáng lần lượt là",
                "options": [
                    "A. Điểm 2, 3.",
                    "B. Điểm 1, 5.",
                    "C. Điểm 4, 5.",
                    "D. Điểm 3, 4."
                ],
                "answer": 2,
                image: "https://nhantri.top/media/Grade11/bubaohoaas.png",
            },
            {
                "question": "MB-HHOTV-L3-006. Cây cà chua trồng trên cạn khi bị ngập úng lâu ngày sẽ chết, nguyên nhân chủ yếu dẫn tới hiện tượng này là do",
                "options": [
                    "A. rễ cây thiếu oxygen, tế bào rễ chuyển sang phân giải kị khí, tích tụ chất độc hại gây chết tế bào.",
                    "B. rễ cây thừa oxygen, quá trình hô hấp hiểu khí trong tế bào diễn ra mạnh gây mất năng lượng.",
                    "C. rễ cây hút quá nhiều nước, quá trình thoát hơi nước không kịp dẫ tới cây bị thừa nước.",
                    "D. rễ cây hút quá nhiều khoáng gây mất cân bằng áp suất thẩm thấu dẫn tới làm chết tế bào."
                ],
                "answer": 0,
              
            },
            // Thêm các câu hỏi Hô hấp ở thực vật level 3 khác...
        ]
    },
    // Dinh dưỡng và tiêu hóa ở động vật
    mcDDVTHDV: {
        level1: [
            {
                "question": "MB-DDVTHOĐV-L1-001. Tiêu hóa là quá trình",
                "options": [
                    "A. làm biến đổi thức ăn thành các chất hữu cơ.",
                    "B. biến đổi các chất đơn giản thành các chất phức tạp đặc trưng cho cơ thể.",
                    "C. biến đổi thức ăn thành các chất dinh dưỡng và tạo ra năng lượng ATP.",
                    "D. biến đổi các chất dinh dưỡng trong thức ăn thành những chất đơn giản cơ thể hấp thụ được."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB-DDVTHOĐV-L1-002. Dịch mật có vai trò quan trọng trong tiêu hóa và hấp thụ chất nào sau đây?",
                "options": [
                    "A. Protein.",
                    "B. Tinh bột chín.",
                    "C. Lipid.",
                    "D. Tinh bột sống."
                ],
                "answer": 2,
                "image": null
            },


            {
                "question": "MB-DDVTHOĐV-L1-003. Diều ở các động vật được hình thành từ bộ phận nào của ống tiêu hóa?",
                "options": [
                    "A. Tuyến nước bọt.",
                    "B. Khoang miệng.",
                    "C. Dạ dày.",
                    "D. Thực quản."
                ],
                "answer": 3,
                "image": null
            },



            {
                "question": "MB-DDVTHOĐV-L1-004. Sự tiến hóa của các hình thức tiêu hóa diễn ra như thế nào?",
                "options": [
                    "A. Tiêu hóa nội bào → Tiêu hóa nội bào kết hợp với ngoại bào → Tiêu hóa ngoại bào.",
                    "B. Tiêu hóa nội bào → Tiêu hóa nội bào kết hợp với ngoại bào → Tiêu hóa nội bào.",
                    "C. Tiêu hóa nội bào → Tiêu hóa ngoại bào → Tiêu hóa nội bào kết hợp với ngoại bào.",
                    "D. Tiêu hóa nội bào kết hợp với ngoại bào → Tiêu hóa nội bào → Tiêu hóa ngoại bào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-005. Ở động vật đơn bào, thức ăn được tiêu hóa bằng hình thức",
                "options": [
                    "A. tiêu hóa nội bào.",
                    "B. tiêu hóa ngoại bào.",
                    "C. tiêu hóa ngoại bào và nội bào.",
                    "D. túi tiêu hóa."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-006. Ở tiêu hóa nội bào, thức ăn được tiêu hóa trong",
                "options": [
                    "A. không bào tiêu hóa.",
                    "B. túi tiêu hóa.",
                    "C. ống tiêu hóa.",
                    "D. không bao tiêu hóa sau đó đến túi tiêu hóa."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-007. Trong ống tiêu hóa của người, các cơ quan tiêu hóa được sắp theo thứ tự",
                "options": [
                    "A. miệng → ruột non → dạ dày → hầu → ruột già → hậu môn.",
                    "B. miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn.",
                    "C. miệng → ruột non → thực quản → dạ dày → ruột già → hậu môn.",
                    "D. miệng → dạ dày → ruột non → thực quản → ruột già → hậu môn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-008. Dịch mật có vai trò quan trọng trong việc tiêu hóa và hấp thụ chất nào sau đây?",
                "options": [
                    "A. Protein.",
                    "B. Tinh bột chín.",
                    "C. Lipid.",
                    "D. Tinh bột sống."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-009. Những động vật nào sau đây dạ dày có 4 ngăn?",
                "options": [
                    "A. Trâu, dê, cừu.",
                    "B. Ngựa, thỏ, chuột, trâu.",
                    "C. Ngựa, thỏ, chuột.",
                    "D. Ngựa, thỏ, chuột, cừu, trâu."
                ],
                "answer": 0,
                "image": null
            },



            {
                "question": "MB-DDVTHOĐV-L1-010. Ở động vật chưa có cơ quan tiêu hóa thì",
                "options": [
                    "A. thức ăn được tiêu hóa ngoại bào.",
                    "B. thức ăn được tiêu hóa nội bào.",
                    "C. thức ăn được tiêu hóa ngoại bào và tiêu hóa nội bào.",
                    "D. một số thức ăn tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-011. Ở động vật có ống tiêu hóa",
                "options": [
                    "A. thức ăn được tiêu hóa ngoại bào.",
                    "B. thức ăn được tiêu hóa nội bào.",
                    "C. thức ăn được tiêu hóa ngoại bào và tiêu hóa nội bào.",
                    "D. một số thức ăn tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-012. Ở động vật có túi tiêu hóa, thức ăn được tiêu hóa",
                "options": [
                    "A. nội bào nhờ enzyme thủy phân những chất dinh dưỡng phức tạp thành những chất đơn giản mà cơ thể hấp thụ được.",
                    "B. ngoại bào, nhờ sự co bóp của lòng túi mà những chất dinh dưỡng phức tạp được chuyển hóa thành những chất đơn giản.",
                    "C. ngoại bào (nhờ enzyme thủy phân chất dinh dưỡng phức tạp trong lòng túi) và nội bào.",
                    "D. ngoại bào nhờ enzyme thủy phân chất dinh dưỡng phức tạp trong lòng túi."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L1-013. Động vật nào sau đây có manh tràng phát triển?",
                "options": [
                    "A. Ngựa.",
                    "B. Chó.",
                    "C. Lợn.",
                    "D. Hổ."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi Dinh dưỡng và tiêu hóa ở động vật level 1 khác...
        ],
        level2: [
            {
                "question": "MB-DDVTHOĐV-L2-001. Trong mề gà, thường có những hạt sỏi nhỏ. Tác dụng của các viên sỏi nay là",
                "options": [
                    "A. cung cấp một số nguyên tố vi lượng cho gà.",
                    "B. tăng hiệu quả tiêu hóa hóa học.",
                    "C. tăng hiệu quả tiêu hóa cơ học.",
                    "D. giảm hiệu quả tiêu hóa hóa học."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L2-002. Các lông ruột và các lông cực nhỏ nằm trên các nếp gấp của niêm mạc ruột có tác dụng",
                "options": [
                    "A. làm tăng nhu động ruột.",
                    "B. làm tăng bề mặt hấp thụ.",
                    "C. tạo điều kiện thuận lợi cho tiêu hóa hóa học.",
                    "D. tạo điều kiện cho tiêu hóa cơ học."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L2-003. Điều không đúng với ưu thế của ống tiêu hóa so với túi tiêu hóa là",
                "options": [
                    "A. dịch tiêu hóa không bị hòa loãng.",
                    "B. dịch tiêu hóa được hòa loãng.",
                    "C. ống tiêu hóa phân hóa thành các bộ phận khác nhau tạo cho sự chuyên hóa về chức năng.",
                    "D. có sự kết hợp giữa tiêu hóa hóa học và tiêu hóa cơ học."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB-DDVTHOĐV-L2-004. Các bộ phận tiêu hóa ở người vừa diễn ra tiêu hóa cơ học, vừa diễn ra tiêu hóa hóa học là",
                "options": [
                    "A. miệng, dạ dày, ruột non.",
                    "B. miệng, thực quản, dạ dày.",
                    "C. thực quản, dạ dày, ruột non.",
                    "D. dạ dày, ruột non, ruột già."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L2-005. Đặc điểm tiêu hóa ở thú ăn thịt là",
                "options": [
                    "A. vừa nhai vừa xé nhỏ thức ăn.",
                    "B. dùng răng cắt, xé nhỏ thức ăn và nuốt.",
                    "C. nhai thức ăn trước khi nuốt.",
                    "D. chỉ nuốt thức ăn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DDVTHOĐV-L2-006. Các nếp gấp của niêm mạc ruột, trên đó có các lông ruột và các lông cực nhỏ có tác dụng",
                "options": [
                    "A. làm tăng nhu động ruột.",
                    "B. làm tăng bề mặt hấp thụ.",
                    "C. tạo điều kiện thuận lợi cho tiêu hóa hóa học.",
                    "D. tạo điều kiện cho tiêu hóa cơ học."
                ],
                "answer": 1,
                "image": null
            },



            // Thêm các câu hỏi Dinh dưỡng và tiêu hóa ở động vật level 2 khác...
        ],
        level3: [
            {
                "question": "MB-DDVTHOĐV-L3-001. Điểm khác nhau về bộ hàm và độ dài ruột ở thú ăn thịt so với thú ăn thực vật là răng nanh và răng hàm trước",
                "options": [
                    "A. không sắc nhọn bằng; ruột dài hơn.",
                    "B. sắc nhọn hơn; ruột ngắn hơn.",
                    "C. không sắc nhọn bằng; ruột ngắn hơn.",
                    "D. sắc nhọn hơn; ruột dài hơn."
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi Dinh dưỡng và tiêu hóa ở động vật level 3 khác...
        ]
    },
    // Hô hấp ở động vật
    mcHHODV: {
        level1: [
            {
                question: "MB-HHOĐV-L1-001. Động vật trao đổi khí vừa qua phổi vừa qua da là",

                options: ["A. Ếch đồng.", "B. Cá sấu.", "C. Châu chấu.", "D. Lươn."],
                answer: 0
            },
            {
                "question": "MB-HHOĐV-L1-002. Động vật đơn bào hay đa bào có tổ chức thấp (ruột khoang, giun tròn, giun dẹp) có hình thức hô hấp như thế nào?",
                "options": [
                    "A. Hô hấp bằng mang.",
                    "B. Hô hấp bằng phổi.",
                    "C. Hô hấp bằng hệ thống ống khí.",
                    "D. Hô hấp qua bề mặt cơ thể."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB-HHOĐV-L1-003. Côn trùng có hình thức hô hấp nào?",
                "options": [
                    "A. Hô hấp bằng hệ thống ống khí.",
                    "B. Hô hấp bằng mang.",
                    "C. Hô hấp bằng phổi.",
                    "D. Hô hấp qua bề mặt cơ thể."
                ],
                "answer": 0,
                "image": null
            },



            {
                "question": "MB-HHOĐV-L1-004. Các loại thân mềm (trai, ốC. và giáp xác (tôm, cuA. sống trong nước có hình thức hô hấp như thế nào?",
                "options": [
                    "A. Hô hấp bằng phổi.",
                    "B. Hô hấp bằng hệ thống ống khí.",
                    "C. Hô hấp qua bề mặt cơ thể.",
                    "D. Hô hấp bằng mang."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB-HHOĐV-L1-005. Nhóm động vật nào sau đây trao đổi khí qua cả phổi và da?",
                "options": [
                    "A. Giun đất.",
                    "B. Lưỡng cư.",
                    "C. Bò sát.",
                    "D. Côn trùng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-HHOĐV-L1-006. Nội dung nào sau đây không có trong các nội dung của thông điệp “5K” của Bộ Y tế giúp phòng tránh dịch viêm đường hô hấp cấp do virus Corona chủng mới (COVID-19) gây ra?",
                "options": [
                    "A. Không tụ tập.",
                    "B. Khẩu trang.",
                    "C. Không hút thuốc lá.",
                    "D. Khử khuẩn."
                ],
                "answer": 0,
                "image": null
            },

            // Thêm các câu hỏi Hô hấp ở động vật level 1 khác...
        ],
        level2: [
            {
                "question": "MB-HHOĐV-L2-001. Vì sao nồng độ O<sub>2</sub> khi thở ra thấp hơn so với hít vào phổi?",
                "options": [
                    "A. Vì một lượng O<sub>2</sub> còn lưu giữ trong phế nang.",
                    "B. Vì một lượng O<sub>2</sub> còn lưu giữ trong phế quản. ",
                    "C. Vì một lượng O<sub>2</sub> đã oxy hoá các chất trong cơ thể.",
                    "D. Vì một lượng O<sub>2</sub> đã khuếch tán vào máu trước khi ra khỏi phổi."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-HHOĐV-L2-002. Nếu bắt giun đất để lên mặt đất khô ráo giun sẽ nhanh chết vì",
                "options": [
                    "A. Thay đổi môi trường sống, giun là động vật đa bào bậc thấp không thích nghi được.",
                    "B. Khi sống ở mặt đất khô ráo da giun bị ánh nắng chiếu vào hơi nước trong cơ thể giun thoát ra ngoài → giun nhanh chết vì thiếu nước.",
                    "C. Khi da giun đất bị khô thì O2 và CO2 không khuếch tán qua da được.",
                    "D. Ở mặt đất khô nồng độ O2 ở cạn cao hơn ở nước nên giun không hô hấp được."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-HHOĐV-L2-003. Phổi của chim có cấu tạo khác với phổi của thú ở đặc điểm nào?",
                "options": [
                    "A. Phế quản phân nhánh nhiều.",
                    "B. Khí quản dài.",
                    "C. Có nhiều phế nang.",
                    "D. Có nhiều túi khí."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB-HHOĐV-L2-004. Đặc điểm thích nghi nào giúp cho bề mặt trao đổi khí của động vật ở cạn không bị khô?",
                "options": [
                    "A. Chúng có nhiều mao mạch.",
                    "B. Cơ quan hô hấp thường nằm sâu trong khoang cơ thể.",
                    "C. Chúng chỉ sống ở nơi ấm ướt.",
                    "D. Có bề mặt mỏng."
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi Hô hấp ở động vật level 2 khác...
        ],
        level3: [
            {
                "question": "MB-HHOĐV-L3-001. Vì sao động vật có phổi không hô hấp dưới nước được?",
                "options": [
                    "A. Vì phổi không hấp thu được O<sub>2</sub> trong nước.",
                    "B. Vì phổi không thải được CO<sub>2</sub> trong nước.",
                    "C. Vì nước tràn vào đường dẫn khí cản trở lưu thông khí.",
                    "D. Vì cấu tạo phổi không phù hợp với việc hô hấp trong nước."
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi Hô hấp ở động vật level 3 khác...
        ]
    },
    mcTHODV: {
        level1: [
            {
                "question": "MB-THOĐV-L1-001. Ở hệ tuần hoàn kín, máu được phân phối trong cơ thể như thế nào?",
                "options": [
                    "A. máu điều hòa và phân phối nhanh đến các cơ quan.",
                    "B. máu không được điều hòa và được phân phối nhanh đến các cơ quan.",
                    "C. máu được điều hòa và được phân phối chậm đến các cơ quan.",
                    "D. máu không được điều hòa và được phân phối chậm đến các cơ quan."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-002. Trật tự đúng về đường đi của máu trong hệ tuần hoàn hở là",
                "options": [
                    "A. Tìm → Động mạch → khoang cơ thể → trao đổi chất với tế bào → hỗn hợp máu - dịch mô → tĩnh mạch → tim.",
                    "B. Tim → động mạch → trao đổi chất với tế bào → hỗn hợp máu → dịch mô → khoang cơ thể → tĩnh mạch → tim.",
                    "C. Tim → động mạch → hỗn hợp máu - dịch mô → khoang cơ thể → trao đổi chất với tế bào → tĩnh mạch → tim.",
                    "D. tim → động mạch → quang cơ thể → hỗn hợp máu - dịch mô → tĩnh mạch → tim."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-003. Trong hệ tuần hoàn mở, máu chảy trong động mạch dưới áp lực",
                "options": [
                    "A. cao, Tốc độ máu chảy nhanh.",
                    "B. thấp, tốc độ máu chảy chậm.",
                    "C. thấp, tốc độ máu chảy nhanh.",
                    "D. cao, tốc độ máu chạy chậm."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-004. Trật tự đúng về đường đi của máu trong hệ tuần hoàn kín là",
                "options": [
                    "A. Tim → Động mạch → tĩnh mạch → mao mạch → tim.",
                    "B. Tim → động mạch → mao mạch → tĩnh mạch → tim.",
                    "C. Tim → mao mạch → động mạch → tĩnh mạch → tim.",
                    "D. Tim → động mạch → mao mạch → động mạch → tim."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-005. Máu trao đổi chất với tế bào qua thành",
                "options": [
                    "A. tĩnh mạch và mao mạch.",
                    "B. mao mạch.",
                    "C. động mạch và mao mạch.",
                    "D. động mạch và tĩnh mạch."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-006. Hệ tuần hoàn kép chỉ có ở",
                "options": [
                    "A. lưỡng cư và bò sát.",
                    "B. lưỡng cư, bò sát, chim và thú.",
                    "C. mực ống, bạch tuộc, giun đốt và chân đầu.",
                    "D. mực ống, bạch tuộc, giun đốt, chân đầu và cá."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-007. Đường đi của máu trong vòng tuần hoàn nhỏ diễn ra theo trật tự:",
                "options": [
                    "A. Tim → Động mạch giàu O<sub>2</sub> → mao mạch → tĩnh mạch giàu CO<sub>2</sub> → tim.",
                    "C. Tim → động mạch ít O<sub>2</sub> → mao mạch→ tĩnh mạch có ít CO<sub>2</sub> → tim.",
                    "B. Tim → động mạch giàu CO<sub>2</sub> → mao mạch→ tĩnh mạch giàu O<sub>2</sub> → tim. ",
                    "D. Tim → động mạch giàu O<sub>2</sub> → mao mạch→ tĩnh mạch có ít CO<sub>2</sub> → tim."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-008. Trong hệ tuần hoàn kín",
                "options": [
                    "A. máu lưu thông liên tục trong mạch kín.",
                    "B. tốc độ máu chạy chậm, máu không đi xa được.",
                    "C. máu chảy trong động mạch với áp lực thấp hoặc trung bình.",
                    "D. màu đến các cơ quan chậm nên đáp ứng được nhu cầu trao đổi khí và trao đổi chất."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB-THOĐV-L1-009. Ở người trưởng thành, nhịp tim thường vào khoảng",
                "options": [
                    "A. 95 lần/phút.",
                    "B. 85 lần/phút.",
                    "C. 75 lần/phút.",
                    "D. 65 lần/phút."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-010. Trong hệ mạch, huyết áp giảm dần từ",
                "options": [
                    "A. Động mạch → tiểu động mạch → mao mạch → tiểu tĩnh mạch → tĩnh mạch.",
                    "B. Tĩnh mạch → tiểu tĩnh mạch → mao mạch → tiểu động mạch → động mạch.",
                    "C. Động mạch → tiểu tĩnh mạch → mao mạch → tiểu động mạch → tĩnh mạch.",
                    "D. Mao mạch → tiểu động mạch → động mạch → tĩnh mạch → tiểu tĩnh mạch."
                ],
                "answer": 0,
                "image": null
            },


            {
                "question": "MB-THOĐV-L1-011. Ở người trưởng thành, mỗi chu kì tim kéo dài",
                "options": [
                    "A. 0,1 giây; trong đó tâm nhĩ co 0,2 giây, tâm thất co 0,3 giây, thời gian dãn chung là 0,5 giây.",
                    "B. 0,8 giây; trong đó tâm nhĩ co 0,1 giây, tâm thất co 0,3 giây, thời gian dãn chung là 0,4 giây.",
                    "C. 0,12 giây; trong đó tâm nhĩ co 0,2 giây, tâm thất co 0,4 giây, thời gian dãn chung là 0,6 giây.",
                    "D. 0,6 giây; trong đó tâm nhĩ co 0,1 giây, tâm thất co 0,2 giây, thời gian dãn chung là 0,6 giây."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-012. Động vật nào sau đây có tim 2 ngăn?",
                "options": [
                    "A. Thỏ.",
                    "B. Mèo.",
                    "C. Ếch đồng.",
                    "D. Cá chép."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-013. Động vật nào sau đây có tim 3 ngăn?",
                "options": [
                    "A. Thỏ.",
                    "B. Mèo.",
                    "C. Ếch đồng.",
                    "D. Cá chép."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L1-014. Thói quen nào sau đây có lợi cho người bị huyết áp cao?",
                "options": [
                    "A. Thường xuyên ăn thức ăn có nhiều dầu mỡ.",
                    "B. Thường xuyên ăn thức ăn có nồng độ NaCl cao.",
                    "C. Thường xuyên tập thể dục một cách khoa học.",
                    "D. Thường xuyên thức khuya và làm việc căng thẳng."
                ],
                "answer": 2,
                "image": null
            },


            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                "question": "MB-THOĐV-L2-001. Trong thí nghiệm mổ lộ tim ếch, người ta nhỏ dung dịch Adrenalin 1/100000 và dung dịch acetylcholin nhằm mục đích",
                "options": [
                    "A. Duy trì hoạt động của tim ếch.",
                    "B. Làm thay đổi nhịp tim và sức co tim.",
                    "C. Tim hoạt động đều đặn hơn.",
                    "D. Làm tăng tính ma sát của bề mặt tim với kẹp tim để dễ dàng đo điện tim đồ."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-THOĐV-L2-002. Khi nói về mối liên hệ giữa nhịp tim và khối lượng cơ thể, phát biểu nào sau đây là đúng?",
                "options": [
                    "A. Động vật càng lớn nhịp tim càng nhanh và ngược lại.",
                    "B. Động vật càng lớn nhịp tim càng ổn định.",
                    "C. Động vật càng nhỏ nhịp tim càng nhanh và ngược lại.",
                    "D. Động vật càng nhỏ nhịp tim càng chậm và ngược lại."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L2-003. Bệnh nhân bị hở van nhĩ thất (van nối giữa tâm nhĩ với tâm thất) sẽ dễ bị suy tim. Nguyên nhân chính là do",
                "options": [
                    "A. Khi tâm thất co sẽ đẩy một phần máu chảy ngược lên tâm nhĩ, làm cho lượng máu chảy vào động mạch vành giảm nên lượng máu nuôi tim giảm.",
                    "B. Khi bị hở van tim thì sẽ dẫn tới làm tăng nhịp tim rút ngắn thời gian nghỉ của tim.",
                    "C. Khi tâm thất co sẽ đẩy một phần máu chảy ngược lên tâm nhĩ làm cho máu cung cấp trực tiếp cho thành tâm thất giảm, nên tâm thất bị thiếu dinh dưỡng và oxygen.",
                    "D. Khi tâm thất co sẽ đẩy một phần máu chảy ngược lên tâm nhĩ ngăn cản tâm nhĩ nhận máu từ tĩnh mạch về phổi làm cho tim thiếu oxygen để hoạt động."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB-THOĐV-L2-004. Cơ tim hoạt động theo quy luật “tất cả hoặc không có gì” có nghĩa là, khi kích thích ở cường độ dưới ngưỡng",
                "options": [
                    "A. cơ tim không co bóp nhưng khi kích thích với cường độ tới ngưỡng, cơ tim co tối đa.",
                    "B. cơ tim co bóp nhẹ nhưng khi kích thích với cường độ tới ngưỡng, cơ tim co tối đa.",
                    "C. cơ tim không co bóp nhưng khi kích thích với cường độ tới ngưỡng, cơ tim co bóp bình thường.",
                    "D. cơ tim không co bóp nhưng khi kích thích với cường độ trên ngưỡng, cơ tim không co bóp."
                ],
                "answer": 0,
                "image": null
            },




            {
                "question": "MB-THOĐV-L2-005. Ở mao mạch, máu chảy chậm hơn ở động mạch vì",
                "options": [
                    "A. Tổng tiết diện của mao mạch lớn.",
                    "B. Mao mạch thường ở gần tim.",
                    "C. Số lượng mao mạch ít hơn.",
                    "D. Áp lực co bóp của tim tăng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-THOĐV-L2-006. Trong một chu kì tim, tâm thất luôn co sau tâm nhĩ. Nguyên nhân là vì",
                "options": [
                    "A. Đợi máu từ tâm nhĩ đổ xuống để tống máu vào động mạch.",
                    "B. Thành tâm thất dày hơn nên co chậm hơn.",
                    "C. Hoạt động của hệ dẫn truyền tim.",
                    "D. Các tĩnh mạch đổ máu về tâm nhĩ gây co tâm nhĩ trước sau đó mới đến co tâm thất."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L2-007. Phát biểu nào sau đây đúng khi nói về hệ tuần hoàn của người?",
                "options": [
                    "A. Khi máu từ tim đến các cơ quan, máu sẽ đi ra từ tâm thất trái.",
                    "B. Trong hệ dẫn truyền tim, bó His có khả năng tự phát ra xung điện.",
                    "C. Tĩnh mạch giàu ôxi cung cấp cho các tế bào hô hấp.",
                    "D. Trong hệ mạch, huyết áp thấp nhất ở mao mạch."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                "question": "MB-THOĐV-L3-001. Một người sống ở vùng núi cao và một người sống ở đồng bằng cùng thi đấu thể thao ở vùng đồng bằng. Khi nói về hoạt động của tim, phổi của người này khi đang thi đấu, phát biểu nào sau đây là đúng?",
                "options": [
                    "A. Hoạt động của tim, phổi hai người này đều tăng mạnh.",
                    "B. Hoạt động của tim, phổi của hai người đều giảm mạnh.",
                    "C. Người sống ở vùng cao có nhịp tim và tần số hô hấp thấp hơn người sống ở vùng đồng bằng.",
                    "D. Người sống ở vùng đồng bằng có nhịp tim và tần số hô hấp thấp hơn người sống ở vùng cao."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L3-002. Ở một người bình thường không bị bệnh về tim, hàm lượng oxygen trong máu động mạch chủ là 19ml/ 100ml máu và trong tĩnh mạch chủ là 14ml/ 100ml máu. Trong 1 phút, người này tiêu thụ 250 ml oxygen nếu nhịp tim 80 lần /phút thì năng suất tim (thể tích máu tống đi trong 1 lần co tim) của người này là bao nhiêu?\n ",
                "options": [
                    "A. 16,4 ml.",
                    "B. 75 ml.",
                    "C. 62,5 ml.",
                    "D. 22,3 ml."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-THOĐV-L3-003. Ở người già, khi huyết áp cao dễ bị xuất huyết não vì",
                "options": [
                    "A. Mạch bị xơ cứng, máu bị ứ đọng, đặc biệt các mạch ở não, khi huyết áp cao dễ làm vỡ mạch.",
                    "B. Mạch bị xơ cứng, tính đàn hồi kém, đặc biệt ở não, khi huyết áp cao dễ làm vỡ mạch.",
                    "C. Mạch bị xơ cứng nên không co bóp được, đặc biệt ở não, khi huyết áp cao dễ làm vỡ mạch.",
                    "D. Thành mạch dày lên, tính đàn hồi kém, đặc biệt là ở não, khi huyết áp cao dễ làm vỡ mạch."
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    mcMDONDV: {
        level1: [
            {
                question: "MB-MDOĐV-L1-001. Miễn dịch là",

                options: ["A. cơ thể phản ứng một cách kịch liệt với môi trường xung quanh.",
                    "B. khả năng cơ thể chống lại các tác nhân gây bệnh, đảm bảo cho cơ thể khỏe mạnh, không mắc bệnh.",
                    "C. khả năng tự miễn nhiễm với mọi bệnh tật của cơ thể.",
                    "D. khả năng của cơ thể cần được bổ sung các chất để chống lại tác nhân gây hại."],
                answer: 1
            },
            {
                question: "MB-MDOĐV-L1-002. Hệ miễn dịch gồm:",

                options: ["A. miễn dịch hoàn toàn và bán hoàn toàn.",
                    "B. miễn dịch đặc hiệu và không đặc hiệu.",
                    "C. miễn dịch tự phát và miễn dịch nhân tạo.",
                    "D. miễn dịch cơ thể và miễn dịch môi trường."],
                answer: 1
            },
            {
                question: "MB-MDOĐV-L1-003. Kháng nguyên là",

                options: ["A. phần tử cơ thể sinh ra gây ra đáp ứng miễn dịch không đặc hiệu.",
                    "B. phần tử ngoại lai gây ra đáp ứng miễn dịch không đặc hiệu.",
                    "C. phần tử cơ thể sinh ra gây ra đáp ứng miễn dịch đặc hiệu.",
                    "D. phần tử ngoại lai gây ra đáp ứng miễn dịch đặc hiệu."],
                answer: 3
            },
            // Thêm các câu hỏi MDONDV level 1 khác...
        ],
        level2: [
            {
                question: "MB-MDOĐV-L2-001. Hàng rào bảo vệ vật lí và hóa học, thực bào, viêm, sốt, … là phương thức bảo vệ cơ thể của miễn dịch loại nào?",

                options: ["A. Miễn dịch đặc hiệu.",
                    "B. Miễn dịch không đặc hiệu.",
                    "C. Miễn dịch bán bảo toàn.",
                    "D. Miễn dịch môi trường."],
                answer: 1
            },
            {
                question: "MB-MDOĐV-L2-002. Tiêm chủng Vaccine chủ động tạo ra",

                options: ["A. đáp ứng miễn dịch.",
                    "B. thụ động miễn dịch.",
                    "C. phản ứng sốc phản vệ.",
                    "D. kháng nguyên cho cơ thể."],
                answer: 0
            },
            {
                question: "MB-MDOĐV-L2-003. Sốc phản vệ xảy ra khi nào?",

                options: ["A. Khi các đại thực bào đang tiêu diệt các kháng nguyên.",
                    "B. Khi kháng nguyên bắt đầu đi vào cơ thể.",
                    "C. Khi dị nguyên gây giải phóng lượng lớn histamin trên diện rộng.",
                    "D. Khi các kháng thể đang ngăn chặn các kháng nguyên xâm nhập."],
                answer: 2
            },
            {
                question: "MB-MDOĐV-L2-004. Điều nào sau đây đúng về hệ thống miễn dịch?",

                options: ["A. Viêm khớp là một bệnh tự miễn dịch.",
                    "B. Dị ứng có thể được chữa khỏi bằng thuốc kháng sinh.",
                    "C. Bệnh đa xơ cứng là do dị ứng.",
                    "D. Vaccin có thể chữa một số bệnh nhiễm virus thông thường."],
                answer: 0
            },
            // Thêm các câu hỏi MDONDV level 2 khác...
        ],
        level3: [
            {
                question: "MB-MDOĐV-L3-001. Một bệnh nhân nam 19 tuổi và mẹ của anh ấy đến phòng cấp cứu, cả hai với buồn nôn, nôn và rối loạn thị giác. Các bác sĩ ghi chú lịch sử của họ rằng họ cả hai đều có đậu xanh đóng hộp có vị lạ. Khả năng nào sau đây nên được bác sĩ xem xét?",
                options: ["A. Loạn dưỡng cơ Duchenne.",
                    "B. Bệnh xơ cứng teo cơ bên.",
                    "C. Ngộ độc thịt.",
                    "D. Bệnh nhược cơ."],
                answer: 2
            },
            // Thêm các câu hỏi MDONDV level 3 khác...
        ]
    },
    mcBTVCBNM: {
        level1: [
            {
                question: "MB-BTVCBNM-L1-001. Cơ qaun bài tiết ra nước tiểu là",

                options: ["A. Hệ tiêu hóa.", "B. Da.", "C. Phổi.", "D. Thận."],
                answer: 3
            },
            {
                question: "MB-BTVCBNM-L1-002. Bài tiết là",

                options: ["A. quá trình mà thận hoạt động đơn lẻ để bài tiết nước tiểu.",
                    "B. quá trình loại bỏ ra khỏi cơ thể các chất sinh ra từ quá trình chuyển hóa mà cơ thể không sử dụng, các chất độc hại, các chất dư thừa.",
                    "C. là khả năng của cơ thể đẩy chất độc ra ngoài.",
                    "D. là quá trình mà cơ thể tiếp nhận thức ăn đầu vào và thải ra chất cặn bã."],
                answer: 1
            },

            {
                question: "MB-BTVCBNM-L1-003. Cơ quan bài tiết ra mồ hôi là",

                options: ["A. Da.", "B. Hệ tuần hoàn.", "C. Thận.", "D. Phổi."],
                answer: 0
            },
            {
                question: "MB-BTVCBNM-L1-004. Sản phẩm bài tiết chính của phổi là",

                options: ["A. Oxygen.", "B. Urea.", "C. Bilirubin.", "D. Carbonic."],
                answer: 3
            },
            {
                question: "MB-BTVCBNM-L1-005. Nội môi là",

                options: ["A. môi trường bên ngoài cơ thể được tạo bởi huyết tương, huyết thanh và hồng cầu.",
                    "B. môi trường bên trong cơ thể được tạo ra bởi máu, bạch huyết và dịch mô.",
                    "C. môi trường bên trong cơ thể được tạo ra bởi mao mạch, động mạch, tĩnh mạch.",
                    "D. môi trường bên ngoài cơ thể được tạo bởi huyết tương, bạch cầu và hồng cầu."],
                answer: 1
            },
            {
                question: "MB-BTVCBNM-L1-006. Cân bằng nội môi là",

                options: ["A. môi trường bên ngoài cơ thể được tạo bởi huyết tương, huyết thanh và hồng cầu.",
                    "B. môi trường bên trong cơ thể được tạo ra bởi máu, bạch huyết và dịch mô.",
                    "C. môi trường bên trong cơ thể được tạo ra bởi mao mạch, động mạch, tĩnh mạch.",
                    "D. môi trường bên ngoài cơ thể được tạo bởi huyết tương, bạch cầu và hồng cầu."],
                answer: 1
            },
            {
                question: "MB-BTVCBNM-L1-007. Môi trường trong cơ thể tác động ngược đến bộ phận tiếp nhận kích thích và truyền đến bộ phận điều khiển được gọi là",

                options: ["A. Liên hệ ngược.",
                    "B. Vòng tuần hoàn.",
                    "C. Hệ nội tiết.",
                    "D. Môi trường nội môi."],
                answer: 0
            },
            {
                question: "MB-BTVCBNM-L1-008. Cân bằng nội môi là duy trì sự ổn định của môi trường trong:",

                options: ["A. tế bào.",
                    "B. mô.",
                    "C. cơ thể.",
                    "D. cơ quan."],
                answer: 2
            },


            // Thêm các câu hỏi BTVCBNM level 1 khác...
        ],
        level2: [
            {
                question: "MB-BTVCBNM-L2-001. Phát biểu nào sau đây đúng về cân bằng nội môi ở người?",

                options: ["A. trạng thái cân bằng tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.",
                    "B. trạng thái cân bằng động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.",
                    "C. trạng thái cân bằng tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị.",
                    "D. trạng thái cân bằng động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị."],
                answer: 1
            },
            {
                question: "MB-BTVCBNM-L2-002. Dị ứng là",

                options: ["A. phản ứng đồng điệu của cơ thể đối với kháng nguyên thể định (cơ thể quá mẫn cảm với kháng thể).",
                    "B. phản ứng đồng điệu của cơ thể đối với kháng nguyên nhất định (cơ thể quá mẫn cảm với kháng nguyên).",
                    "C. phản ứng quá mức của cơ thể đối với kháng thể nhất định (cơ thể quá mẫn cảm với kháng thể).",
                    "D. phản ứng quá mức của cơ thể đối với kháng nguyên nhất định (cơ thể quá mẫn cảm với kháng nguyên)."],
                answer: 3
            },
            {
                question: "MB-BTVCBNM-L2-003. Những bênh liên quan trực tiếp đến thân là",

                options: ["A. xơ vữa động mạch.",
                    "B. sỏi thận, sa thận, suy thận.",
                    "C. ung thư tuyến giáp.",
                    "D. đột quỵ."],
                answer: 1
            },
            {
                question: "MB-BTVCBNM-L2-004. Cơ chế duy trì cân bằng nội môi diễn ra theo trật tự nào?",

                options: ["A. Bộ phận tiếp nhận kích thích → Bộ phận điều khiển → Bộ phận thực hiện → Bộ phận trả lời kích thích.",
                    "B. Bộ phận điều khiển → Bộ phận tiếp nhận kích thích → Bộ phận thực hiện → Bộ phận trả lời kích thích.",
                    "C. Bộ phận tiếp nhận kích thích → Bộ phận thực hiện → Bộ phận điều khiển → Bộ phận trả lời kích thích.",
                    "D. Bộ phận thực hiện → Bộ phận tiếp nhận kích thích → Bộ phận điều khiển → Bộ phận trả lời kích thích."],
                answer: 0
            },
            {
                question: "MB-BTVCBNM-L2-005. Vai trò chính của quá trình bài tiết là",

                options: ["A. làm cho môi trường trong cơ thể ổn định.",
                    "B. thanh lọc cơ thê, loại bỏ chất dinh dưỡng dư thừa.",
                    "C. đảm bảo các chất dinh dưỡng trong cơ thể luôn được đổi mới.",
                    "D. giúp giảm cân."],
                answer: 0
            },
            {
                question: "MB-BTVCBNM-L2-006. Chất nào sau đây ít có khả năng được tìm thấy nhất trong dịch lọc cầu thận?",

                options: ["A. nước.",
                    "B. glucose và amino acid.",
                    "C. protein huyết tương.",
                    "D. urea."],
                answer: 2
            },
            {
                question: "MB-BTVCBNM-L2-007. Bộ phận tiếp nhận kich thích trong cơ chế duy trì cân bằng nội môi là",

                options: ["A. Trung ương thần kinh hoặc tuyến nội tiết.",
                    "B. các cơ quan dinh dưỡng như: thận, gan, tim, mạch máu.",
                    "C. thụ thể hoặc cơ quan thụ cảm.",
                    "D. cơ quan sinh sản."],
                answer: 2
            },
            {
                question: "MB-BTVCBNM-L2-008. Trật tự đúng về cơ chế duy trì huyết áp là",

                options: ["A. huyết áp bình thường → thụ thể áp lực mạch máu → trung khu điều hòa tim mạch ở hành não → tim giảm nhịp và giảm lực co bóp, mạch máu dãn → huyết áp tăng cao → thụ thể áp lực ở mạch máu.",
                    "B. huyết áp tăng cao → trung khu điều hòa tim mạch ở hành não → thụ thể áp lực mạch máu → tim giảm nhịp và giảm lực co bóp, mạch máu dãn → huyết áp bình thường → thụ thể áp lực ở mạch máu.",
                    "C. huyết áp tăng cao → thụ thể áp lực mạch máu → trung khu điều hòa tim mạch ở hành não → tim giảm nhịp và giảm lực co bóp, mạch máu dãn → huyết áp bình thường→ thụ thể áp lực ở mạch máu.",
                    "D. huyết áp tăng cao → thụ thể áp lực mạch máu → trung khu điều hòa tim mạch ở hành não → thụ thể áp lực ở mạch máu→ tim giảm nhịp và giảm lực co bóp, mạch máu dãn → huyết áp bình thường."],
                answer: 2
            },
            {
                question: "MB-BTVCBNM-L2-009. Cơ quan nào dưới đây không tham gia vào hoạt động bài tiết?",

                options: ["A. Ruột già.",
                    "B. Phổi.",
                    "C. Thận.",
                    "D. Da."],
                answer: 0
            },

            // Thêm các câu hỏi BTVCBNM level 2 khác...
        ],
        level3: [
            {
                question: "MB-BTVCBNM-L3-001. Khi hàm lượng glucose trong máu tăng, cơ chế điều hòa diễn ra theo trật tự",

                options: ["A. tuyến tụy → insulin → gan và tế bào cơ thể → glucose trong máu giảm.",
                    "B. gan → insulin → tuyến tụy và tế bào cơ thể → glucose trong máu giảm.",
                    "C. gan → tuyến tụy và tế bào cơ thể → insulin → glucose trong máu giảm.",
                    "D. tuyến tụy → insulin → gan → tế bào cơ thể → glucose trong máu giảm."],
                answer: 0
            },
            {
                question: "MB-BTVCBNM-L3-002. Khi hàm lượng glucose trong máu tăng, cơ chế điều hòa diễn ra theo trật tự",

                options: ["A. tuyến tụy → insulin → gan và tế bào cơ thể → glucose trong máu giảm.",
                    "B. gan → insulin → tuyến tụy và tế bào cơ thể → glucose trong máu giảm.",
                    "C. gan → tuyến tụy và tế bào cơ thể → insulin → glucose trong máu giảm.",
                    "D. tuyến tụy → insulin → gan → tế bào cơ thể → glucose trong máu giảm."],
                answer: 0
            },

            // Thêm các câu hỏi BTVCBNM level 3 khác...
        ]
    },
    mcKQCUOSV: {
        level1: [
            {
                "question": "MB_KQCUOSV_L1_001. Cảm ứng ở động vật và thực vật ở loài nào nhanh hơn?",
                "options": ["A. Thực vật.",
                    "B. Động vật.",
                    "C. Như nhau.",
                    "D. Không so sánh được."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_002. Cây nắp ấm bắt mồi giống với hiện tượng nào sau đây?",
                "options": ["A. Cây trinh nữ cụp lá.",
                    "B. Con mèo chơi với một con mèo khác.",
                    "C. Con hổ nhìn thấy con mồi và đuổi theo.",
                    "D. Cây đào bị gió thổi bay hết hoa."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_003. Đâu là một ví dụ về cảm ứng ở thực vật?",
                "options": ["A. Cây xương rồng biến lá thành gai để giảm thoát hơi nước.",
                    "B. Chạm tây vào cây trinh nữ (cây xấu hổ), lá sẽ cụp xuống.",
                    "C. Cây hoa mộc bị gió thổi bay hoa.",
                    "D. Cây phong lan có thể sống trên thân cây cau."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_004. Bộ phận nào tham gia cảm ứng ở động vật?",
                "options": ["A. Tất cả những bộ phận có dây thần kinh và cung phản xạ.",
                    "B. Chân, tay, mặt.",
                    "C. Chỉ chân và tay.",
                    "D. Mọi bộ phận."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_005. Đâu là ví dụ về cảm ứng của động vật?",
                "options": ["A. Buổi sáng con chó thức dậy.",
                    "B. Khi chạm tay vào con giun nó sẽ co và xoắn mình lại.",
                    "C. Buổi chiều tà con gà khó nhìn thấy vật xung quanh.",
                    "D. Con mèo thích ngồi gần đống lửa vào mùa đông."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_006. Cảm ứng ở động vật có đặc điểm:",
                "options": ["A. diễn ra nhanh, dễ nhận ra.",
                    "B. diễn ra nhanh, khó nhận ra.",
                    "C. diễn ra chậm, khó nhận ra.",
                    "D. diễn ra chậm, dễ nhận ra."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_007. Các tác nhân của môi trường tác động đến cơ thể sinh vật được gọi là",
                "options": ["A. các hoạt động cảm ứng.",
                    "B. các kích thích.",
                    "C. các điều kiện thích nghi.",
                    "D. các phản ứng chuỗi."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB_KQCUOSV_L1_008. Cảm ứng ở thực vật có đặc điểm:",
                "options": ["A. diễn ra chậm, khó nhận ra.",
                    "B. diễn ra chậm, dễ nhận ra.",
                    "C. diễn ra nhanh, dễ nhận ra.",
                    "D. diễn ra nhanh, khó nhận ra."],
                "answer": 0,
                "type": "recognition"
            },

            // Thêm các câu hỏi KQCUOSV level 1 khác...
        ],
        level2: [
            {
                "question": "MB_KQCUOSV_L2_001. Cơ chết của cảm ứng có các giai đoạn nào?",
                "options": ["A. Thu nhận kích thích → dẫn truyền kích thích → lưu trữ thông tin → trả lời kích thích.",
                    "B. Thu nhận kích thích → dẫn truyền kích thích → nhân đôi thông tin → trả lời kích thích.",
                    "C. Thu nhận kích thích → dẫn truyền kích thích → xử lý thông tin → trả lời kích thích.",
                    "D. Thu nhận kích thích → bảo quản kích thích → xử lý thông tin → trả lời kích thích."],
                "answer": 2,
                "type": "understanding"
            },

            // Thêm các câu hỏi KQCUOSV level 2 khác...
        ],

        level3: [
            {
                "question": "MB_KQCUOSV_L3_001. Chuột nhìn thấy mèo thì bỏ chạy. Ở đây, kích thích chính là gì?",
                "options": ["A. Mèo.",
                    "B. Sợ hãi.",
                    "C. Âm thanh.",
                    "D. Mùi cơ thể."],
                "answer": 0,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_002. Vào mùa đông, cây bàng rụng lá. Phản ứng ở đây là",
                "options": ["A. Nhiệt độ.",
                    "B. Cây bàng.",
                    "C. Rụng lá.",
                    "D. Mùa đông."],
                "answer": 2,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_003. Đâu là phản ứng của việc chó vẫy đuôi khi nghe tiếng chân người quen là",
                "options": ["A. Con chó.",
                    "B. Âm thanh.",
                    "C. Tiếng gọi.",
                    "D. Chó vẫy đuôi."],
                "answer": 3,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_004. Kích thích chính của việc khi tham gia giao thông, nhìn thấy tín hiệu đèn đỏ thì người tham gia giao thông dừng xe lại là",
                "options": ["A. lòng đường.",
                    "B. đèn giao thông chuyển màu đỏ.",
                    "C. phương tiện giao thông.",
                    "D. cái đèn."],
                "answer": 1,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_005. Hiện tượng cảm ứng những con vịt bỏ chạy khi bị người xua đuổi thuộc loại kích thích nào?",
                "options": ["A. Ánh sáng.",
                    "B. Con người.",
                    "C. Âm thanh.",
                    "D. Giá đỡ."],
                "answer": 2,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_006. Hiện tượng cảm ứng những con vịt bỏ chạy khi bị người xua đuổi thuộc loại kích thích nào?",
                "options": ["A. Ánh sáng.",
                    "B. Con người.",
                    "C. Âm thanh.",
                    "D. Giá đỡ."],
                "answer": 3,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_007. Phản ứng nào sau đây thuộc loại kích thích ánh sáng?",
                "options": ["A. Khi chạy nhảy thì toát mồ hôi.",
                    "B. Thân cây bám vào giá thể.",
                    "C. Rễ cây tìm nước có trong đất.",
                    "D. Ngọn cây hướng về phía có ánh sáng."],
                "answer": 3,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_008. Biết rằng, hiện tượng khép lá ở cây xấu hổ (cây trinh nữ) khi có tác động cơ học từ môi trường và hiện tượng khép lá ở cây me vào ban đêm. Ý kiến thứ nhất cho rằng hiện tượng khép lá ở hai loài cây này là giống nhau, ý kiến thứ hai lại cho rằng hiện tượng khép lá ở hai loài cây có bản chất khác nhau. Hãy giải thích về tác nhân kích thích của hiện tượng này?",
                "options": ["A. Ở cây xấu hổ: Tiếp xúc cơ học; Ở cây me: Độ ẩm.",
                    "B. Ở cây xấu hổ: Tiếp xúc cơ học; Ở cây me: Nhiệt độ, ánh sáng.",
                    "C. Ở cây xấu hổ: Nhiệt độ, ánh sáng; Ở cây me: Tiếp xúc cơ học.",
                    "D. Ở cây xấu hổ: Độ ẩm; Ở cây me: Tiếp xúc cơ học."],
                "answer": 1,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_009. Ý nghĩa của viếc trả lời kích thích cây bàng rụng lá vào mùa đông là",
                "options": ["A. giúp cây bàng hạn chế diện tiếp tiếp xúc với nhiệt độ cao, tăng sự thoát hơi nước, … từ đó giúp bảo vệ cây trước tác động xấu của nhiệt độ thấp.",
                    "B. giúp cây bàng hạn chế diện tiếp tiếp xúc với nhiệt độ thấp, tăng sự thoát hơi nước, … từ đó giúp bảo vệ cây trước tác động xấu của nhiệt độ thấp.",
                    "C. giúp cây bàng hạn chế diện tiếp tiếp xúc với nhiệt độ thấp, hạn chế sự thoát hơi nước, … từ đó giúp bảo vệ cây trước tác động xấu của nhiệt độ thấp.",
                    "D. giúp cây bàng hạn chế diện tiếp tiếp xúc với nhiệt độ cao, hạn chế sự thoát hơi nước, … từ đó giúp bảo vệ cây trước tác động xấu của nhiệt độ thấp."],
                "answer": 2,
                "type": "application"
            },
            {
                "question": "MB_KQCUOSV_L3_010. Người thực vật – tức là mất khả năng đáp ứng và nhận thức do rối loạn quá mức chức năng của các bán cầu não nhưng không rối loạn chức năng của gian não và thân não. Vậy những người như vậy còn phản xạ được không?",
                "options": ["A. Có, nhưng chỉ phản xạ qua suy nghĩ.",
                    "B. Không phản ứng được.",
                    "C. Không thể kết luận.",
                    "D. Có, ví dụ như chớp mắt và phản ứng khác."],
                "answer": 3,
                "type": "application"
            },
            // Thêm các câu hỏi KQCUOSV level 3 khác...
        ]
    },
    mcCUOTV: {
        level1: [
            {
                "question": "MB-CUOTV-L1-001. Khả năng của thực vật phản ứng đối với kích thích gọi là",
                "options": ["A. tính cảm ứng.", "B. tính hướng sáng.", "C. tính hướng động.", "D. tính thích nghi."],
                "answer": 0,
                "type": "application"
            },
            { "question": "MB-CUOTV-L1-002. Hướng động là hình thức phản ứng của cơ quan thực vật đối với:", "options": ["A. tác nhân kích thích từ một hướng.", "B. tác nhân kích thích từ hai hướng.", "C. tác nhân kích thích từ ba hướng.", "D. tác nhân kích thích không định hướng."], "answer": 0, "type": "application" },
            { "question": "MB-CUOTV-L1-003. Ứng động là hình thức phản ứng của thực vật trước:", "options": ["A. một tác nhân kích thích có định hướng.", "B. các tác nhân kích thích.", "C. một tác nhân kích thích không định hướng.", "D. các tác nhân kích thích có định hướng."], "answer": 2, "type": "recognition" },
            { "question": "MB-CUOTV-L1-004. Hiện tượng rễ cây đam sâu vào lòng đất là do tác động chủ yếu của:", "options": ["A. nguồn nước.", "B. trọng lực.", "C. ánh sáng.", "D. hóa chất."], "answer": 1, "type": "recognition" },
            {
                "question": "MB-CUOTV-L1-005. Cảm ứng ở thực vật là gì?",
                "options": ["A. Là sự tiếp nhận của thực vật đối với các kích thích từ môi trường.",
                    "B. Là sự tiếp nhận và phản ứng của thực vật đối với các kích thích từ môi trường.",
                    "C. Là sự phản ứng của thực vật đối với các kích thích từ môi trường.",
                    "D. Là sự tiếp nhận của thực vật đối với các kích thích trong cơ thể."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-006. Trong cây, bộ phận có nhiều kiểu hướng động là",
                "options": ["A. hoa.",
                    "B. thân.",
                    "C. lá.",
                    "D. rễ."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-007. Đâu là vai trò của cảm ứng đối với thực vật?",
                "options": ["A. Làm cho chúng đột biến.",
                    "B. làm cho chúng tiến hóa ngược.",
                    "C. làm cho chúng tiến hóa vượt bậc.",
                    "D. tự vệ cho chính chúng."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-008. Sự đóng mở của khí khổng là ứng động",
                "options": ["A. sinh trưởng.",
                    "B. không sinh trưởng.",
                    "C. ứng động tổn thương.",
                    "D. tiếp xúc."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-009. Các kiểu hướng động âm ở rễ là",
                "options": ["A. hướng đất, hướng sáng.",
                    "B. hướng sáng, hướng hoá.",
                    "C. hướng sáng, hướng nước.",
                    "D. hướng nước, hướng hoá."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-010. Có các hình thức cảm ứng nào ở thực vật?",
                "options": ["A. Vận động cảm ứng; Vận động định hướng.",
                    "B. Vận động cảm ứng; Vận động không gian.",
                    "C. Vận động định hướng; Vận động thời gian.",
                    "D. Vận động không gian; Vận động thời gian."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-011. Các dây leo cuốn quanh cây gỗ là nhờ kiểu hướng động nào?",
                "options": ["A. Hướng sáng.",
                    "B. Hướng đất.",
                    "C. Hướng nước.",
                    "D. Hướng tiếp xúc."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-012. Loại hướng động nào sau đây là hướng động âm?",
                "options": ["A. Hướng sáng của thân.",
                    "B. Hướng sáng của rễ.",
                    "C. Hướng trọng lực của rễ.",
                    "D. Hướng nước của rễ."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-013. Hai kiểu hướng động chính là",
                "options": ["A. hướng động dương (sinh trưởng hướng tới nguồn kích thích) và hương động âm (sinh trưởng tránh xa nguồn kích thích).",
                    "B. hướng động dương (sinh trưởng tránh xa nguồn kích thích) và hương động âm (sinh trưởng hướng tới nguồn kích thích).",
                    "C. hướng động dương (sinh trưởng hướng về phía có ánh sáng) và hương động âm (sinh trưởng về trọng lực).",
                    "D. hướng động dương (sinh trưởng hướng tới nước) và hương động âm (sinh trưởng hướng tới đất)."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-014. Hiện tượng rễ cây sinh trưởng về phía có nguồn dinh dưỡng thuộc hình thức hướng động nào?",
                "options": ["A. Tính hướng tiếp xúc.",
                    "B. Tính hướng sáng.",
                    "C. Tính hướng hoá.",
                    "D. Tính hướng nước."],
                "answer": 2,
                "type": "recognition"
            },
            
            // Thêm các câu hỏi CUOTV level 1 khác...
        ],
        level2: [

            {
                "question": "MB-CUOTV-L2-001. Ứng động và hướng động ở thực vật giống nhau ở đặc điểm nào dưới đây?",
                "options": ["A. Đều phản ứng lại những kích thích về hướng.",
                    "B. Đều phản ứng lại những kích thích từ một hướng.",
                    "C. Chủ yếu liên quan đến sức trương nước của tế bào.",
                    "D. Đều là phản ứng thích nghi để tồn tại và phát triển."],
                "answer": 3,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-002. Thân cây uốn cong về phía nguồn sáng là ví dụ về",
                "options": ["A. tính hướng sáng.",
                    "B. tính hướng đất.",
                    "C.tính hướng nước.",
                    "D. tính hướng hóa."],
                "answer": 0,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-003. Rễ cây luôn hướng về nguồn nước là vì dụ về",
                "options": ["A. tính hướng sáng.",
                    "B. tính hướng đất.",
                    "C. tính hướng nước.",
                    "D. tính hướng hóa."],
                "answer": 2,
                "type": "understanding"
            },

            {
                "question": "MB-CUOTV-L2-004. Ở thực vật không tồn tại dạng ứng động sau đây?",
                "options": ["A. Hướng hóa âm.",
                    "B. Hướng trọng lực âm.",
                    "C. Hướng sáng dương.",
                    "D. Hướng nước âm."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L2-005. Hiện tượng nào sau đây là ứng động sinh trưởng?",
                "options": ["A. Khí khổng đóng mở.",
                    "B. Hoa mười giờ nở vào buổi sáng.",
                    "C. Cây bàng rụng lá vào mùa đông.",
                    "D. Lá cây trinh nữ cụp lại khi va chạm."],
                "answer": 1,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-006. Ứng động là hình thức phản ứng của cây trước",
                "options": ["A. nhiều tác nhân kích thích.",
                    "B. tác nhân kích thích lúc có hướng, khi vô hướng.",
                    "C. tác nhân kích thích không ổn định.",
                    "D. tác nhân kích thích không định hướng."],
                "answer": 3,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-007. Hướng động là hình thức phản ứng của cơ quan thực vật đối với",
                "options": ["A. tác nhân kích thích từ một hướng.",
                    "B. sự phân giải sắc tố.",
                    "C. đóng khí khổng.",
                    "D. sự thay đổi hàm lượng nucleic acid."],
                "answer": 0,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-008. Vào rừng nhiệt đới ta gặp rất nhiều dây leo quấn quanh những cây gỗ lớn để vươn lên cao, đó là kết quả của",
                "options": ["A. hướng sáng.",
                    "B. hướng trọng lực âm.",
                    "C. hướng tiếp xúc.",
                    "D. hướng trọng lực dương."],
                "answer": 2,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-009. Sự vận động bắt mồi của cây gọng vó là kết hợp của:",
                "options": ["A. ứng động tiếp xúc và hóa ứng động.",
                    "B. quang ứng động và điện ứng động.",
                    "C. nhiệt ứng động và thủy ứng động.",
                    "D. ứng động tổn thương."],
                "answer": 0,
                "type": "understanding"
            },
            {
                "question": "MB-CUOTV-L2-010. Sự uốn cong ở cây là do sự sinh trưởng:",
                "options": ["A. không đều của hai phía cơ quan, trong đó các tế bào tại phía được tiếp xúc sinh trưởng nhanh hơn làm cho cơ quan uốn cong về phía tiếp xúc.",
                    "B. đều của hai phía cơ quan, trong đó các tế bào tại phía không được tiếp xúc sinh trưởng nhanh hơn làm cho cơ quan uốn cong về phía tiếp xúc.",
                    "C. không đều của hai phía cơ quan, trong đó các tế bào tại phái không được tiếp xúc sinh trưởng nhanh hơn làm cho cơ quan uốn cong về phía tiếp xúc.",
                    "D. không đều của hai phía cơ quan, trong đó các tế bào tại phía không được tiếp xúc sinh trưởng chậm hơn làm cho cơ quan uốn cong về phía tiếp xúc."],
                "answer": 2,
                "type": "understanding"
            },
            
            // Thêm các câu hỏi CUOTV level 2 khác...
        ],
        level3: [

            {
                "question": "MB-CUOTV-L3-001. Dạng ứng động nào dưới đây sẽ làm thay đổi hướng phát triển của tế bào thân cây và ngọn cây?",
                "options": ["A. Hướng nước.",
                    "B. Hướng sáng.",
                    "C. Hướng hóa.",
                    "D. Hướng tiếp xúc."],
                "answer": 1,
                "type": "applycation"
            },
            {
                "question": "MB-CUOTV-L3-002. Bạn Minh trồng một số hạt nảy mầm trong chậu. Minh đặt cái chậu vào một hộp các-tông được mở từ một phía. Minh giữ chiếc hộp theo cách mà mặt mở của chiếc hộp đối diện với ánh sáng mặt trời gần cửa sổ của anh ta. Sau 2-3 ngày, Minh quan sát thấy chồi uốn cong về phía ánh sáng. Đây là ví dụ của kiểu hướng động nào?",
                "options": ["A. Hướng sáng.",
                    "B. Hướng hóa.",
                    "C. Hướng tối.",
                    "D. Hướng nước."],
                "answer": 0,
                "type": "applycation"
            },
            {
                "question": "MB-CUOTV-L3-003. Hoa của cây bồ công anh nở ra lúc sáng và cụp lại lúc chạng vạng tối, là ví dụ về",
                "options": ["A. hướng sáng dương dưới tác động của ánh sáng.",
                    "B. ứng động không sinh trưởng dưới tác động của ánh sáng.",
                    "C. ứng động sinh trưởng dưới tác động của nhiệt độ.",
                    "D. ứng động sinh trưởng dưới tác động của ánh sáng."],
                "answer": 3,
                "type": "applycation"
            },
            {
                "question": "MB-CUOTV-L3-004. Nghiên cứu ảnh hướng của ảnh sáng đối với sự sinh trưởng của thực vật, người ta làm thi nghiệm: Gieo một số hạt thóc vào chậu và đặt hên cạnh một bóng điện sáng. Sau vài ngày có hiện tượng cây mọc cong về phía nguồn sáng. Phân tích tế bào thì thấy lượng auxin ở phía không được chiếu sáng cao hơn phía đổi diện. Có thể giải thích",
                "options": ["A. auxin kìm hãm sự sinh trưởng của tế bào.",
                    "B. auxin được tổng hợp đã tập trung nhiều hơn ở phía thiếu ánh sáng và kích thích các tế bào dài ra.",
                    "C. ở phía được chiếu sáng, cây quang hợp mạnh nên sinh trưởng nhanh hơn.",
                    "D. auxin có tính hướng sáng âm nên tập trung ở phía tối."],
                "answer": 1,
                "type": "applycation"
            },

            // Thêm các câu hỏi CUOTV level 3 khác...
        ]
    },
    mcCUODV: {
        level1: [
            {
                "question": "MB-CUOĐV-L1-001. Phản xạ là cảm ứng có ở",
                "options": ["A. tất cả các động vật.", "B. động vật có hệ thần kinh.", "C. động vật đơn bào.", "D. động vật không xương sống."], "answer": 1, "type": "recognition"
            },
            {
                "question": "MB-CUOĐV-L1-002. Hai thành phần chính của bao myelin là",
                "options": ["A. protein và nucleic acid.",
                    "B. protein và lipid.",
                    "C. protein và glucide.",
                    "D. glucide và lipid."],
                "answer": 1,
                "type": "recognition"
            },

            {
                "question": "MB-CUOĐV-L1-003. Tập tính có ý nghĩa",
                "options": ["A. giúp động vật khoẻ mạnh hơn.",
                    "B. giúp động vật kiếm thức ăn dễ hơn.",
                    "C. giúp động vật sinh trưởng.",
                    "D. giúp động vật thích nghi hơn với điều kiện sống."],
                "answer": 3, "type": "recognition"
            },


            {
                "question": "MB-CUOĐV-L1-004. Ở tế bào thần kinh, bào quan nào dưới đây đóng vai trò đặc biệt quan trọng trong truyền tin qua synapse?",
                "options": ["A. Không bào", "B. Nhân xám.", "C. Ti thể.", "D. Bộ máy Golgi."], "answer": 2, "type": "recognition"
            },
            {
                "question": "MB-CUOĐV-L1-005. Đặc điểm nào dưới đây <b>không</b> phải là đặc điểm của tập tính bẩm sinh?",
                "options": ["A. Sinh ra đã có.",
                    "B. Di truyền qua các thế hệ.",
                    "C. Bao gồm các phản xạ không điều kiện.",
                    "D. Mang tính cá thể."],
                "answer": 3,
                "type": "application"
            },
            {
                "question": "MB-CUOTV-L1-006. Động vật có hệ thần kinh dạng lưới khi bị kích thích thì",
                "options": ["A. di chuyển đi chỗ khác.",
                    "B. co ở phần cơ thể bị kích thích.",
                    "C. duỗi thẳng cơ thể.",
                    "D. co toàn bộ cơ thể."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-007. Tế bào thần kinh còn được gọi là",
                "options": ["A. synapse.",
                    "B. neuron.",
                    "C. myelin.",
                    "D. ranvier."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-008. Với ngành chân khớp, hạch ở phần nào phát triển hơn so với các hạch khác và chi phối các hoạt động phức tạp của cơ thể?",
                "options": ["A. Hạch ở lưng.",
                    "B. Hạch ở bụng.",
                    "C. Hạch đầu.",
                    "D. Hạch ở các chi."],
                "answer": 2,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-009. Chất mà động vật tiết ra ngoài môi trường và ảnh hưởng đến hành vi của những cá thể khác cùng loài là",
                "options": ["A. hormone.",
                    "B. pheromone.",
                    "C. chất dẫn truyền thần kinh.",
                    "D. enzyme."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-010. Các đoạn nhỏ trên sợi trục không được bao myelin bao bọc gọi là các",
                "options": ["A. synapse.",
                    "B. chùy synapse.",
                    "C. sợi nhánh.",
                    "D. eo Ranvier."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-011. Chức năng của neuron là",
                "options": ["A. tiếp nhận kích thích, tạo ra xung thần kinh và truyền xung thần kinh ra toàn cơ thể.",
                    "B. tiếp nhận kích thích, tạo ra xung thần kinh và truyền xung thần kinh đến neuron khác hoặc tế bào khác.",
                    "C. tiếp nhận xung thần kinh, tạo các kích thích và dẫn truyền đến neuron khác hoặc tế bào khác.",
                    "D. tiếp nhận xung thần kinh, tạo các kích thích và dẫn truyền ra toàn cơ thể."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-012. Điện thế hoạt động được hình thành qua các giai đoạn theo trình tự",
                "options": ["A. điện thế nghỉ → khử cực → đảo cực.",
                    "B. khử cực → đảo cực → tái phân cực.",
                    "C. đảo cực → khử cực → tái phân cực.",
                    "D. khử cực → đảo cực → điện thế nghỉ."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-013. Trên sợi trục thần kinh, khoảng cách giữa các bao myelin được gọi là",
                "options": ["A. synapse.",
                    "B. chuỳ synapse.",
                    "C. eo Ranvier.",
                    "D. thụ thể."],
                "answer": 2,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-014. Synapse là",
                "options": ["A. đơn vị cấu tạo và chức năng của hệ thần kinh.",
                    "B. một loại chất chuyển giao thần kinh.",
                    "C. đơn vị liên kết giữa tế bào thần kinh với tế bào thần kinh hoặc giữa tế bào thần kinh với tế bào khác.",
                    "D. diện tiếp xúc giữa tế bào thần kinh với tế bào thần kinh hoặc giữa tế bào thần kinh với tế bào khác."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-015. Loại synapse nào phổ biến ở động vật trong các loại synapse dưới đây?",
                "options": ["A. synapse xung thần kinh.",
                    "B. synapse sinh học.",
                    "C. synapse hóa học.",
                    "D. synapse điện."],
                "answer": 2,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-016. Thụ thể tiếp nhận chất trung gian hóa học nằm ở",
                "options": ["A. màng trước synapse",
                    "B. khe synapse.",
                    "C. chùy synapse.",
                    "D. màng sau synapse."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-017. Tập tính là",
                "options": ["A. những động tác của động vật trả lời lại các kích thích.",
                    "B. chuỗi các hoạt động của động vật trả lời lại các kích thích.",
                    "C. những suy nghĩ của động vật trả lời lại các kích thích.",
                    "D. những biểu hiện của động vật trả lời lại các kích thích."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-018. Tập tính của động vật không có vai trò nào sau đây?",
                "options": ["A. Tăng khả năng sinh tồn của động vật.",
                    "B. Đảm bảo cho sự thành công sinh sản.",
                    "C. Đảm bảo cho động vật phát triển.",
                    "D. Tăng số lượng con trong mỗi lần sinh sản."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-019. Tập tính ở động vật được chia thành các loại",
                "options": ["A. bẩm sinh, học được, hỗn hợp.",
                    "B. bẩm sinh, hỗn hợp.",
                    "C. học được, hỗn hợp.",
                    "D. tự nhiên, nhân tạo."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-020. Tập tính bẩm sinh có đặc điểm là",
                "options": ["A. sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài.",
                    "B. sinh ra vài tháng sau mới có, di truyền từ bố mẹ, đặc trưng cho loài.",
                    "C. sinh ra đã có, không di truyền từ bố mẹ, không đặc trưng cho loài.",
                    "D. là tập tính học được từ bố mẹ."],
                "answer": 0,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-021. Tập tính học được là",
                "options": ["A. sinh ra sau vài ngày là có, học hỏi từ bố mẹ.",
                    "B. hình thành trong quá trình sống của cá thể, thông qua học tập và rút kinh nghiệm.",
                    "C. không phải là một hành động hay chuỗi hành động được quyết định bởi quá trình điều kiện hóa.",
                    "D. luôn có thể phân biệt rạch ròi được với tập tính bẩm sinh."],
                "answer": 1,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-022. Tập tính học được ở động vật có chung các đặc điểm",
                "options": ["A. suốt đời không đổi.",
                    "B. sinh ra đã có.",
                    "C. được truyền từ đời trước sang đời sau.",
                    "D. phải học trong đời sống mới có được."],
                "answer": 3,
                "type": "recognition"
            },
            {
                "question": "MB-CUOTV-L1-023. Cơ sở của tập tính là",
                "options": ["A. phản xạ.",
                    "B. cơ quan cảm thụ.",
                    "C. thần kinh cảm giác.",
                    "D. thần kinh vận động."],
                "answer": 3,
                "type": "recognition"
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                "question": "MB-CUOĐV-L2-001. Phản xạ nào dưới đây là phân xạ không điều kiện?",
                "options": ["A. Chảy nước miếng khi nhận thấy qủa me.",
                    "B. Nghe thấy tiếng sấm thì bịt lấy hai tai.",
                    "C. Môi tím tái khi trời giá rét.",
                    "D. Khép cửa sổ khi thấy gió lùa."],
                "answer": 2,
                "type": "understanding"
            },
            { "question": "MB-CUOĐV-L2-002. Ở thú, loại ion nào dưới đây tham gia vào cơ chế hình thành điện thế nghỉ?", "options": ["A. K<sup>+</sup>.", "B. H<sup>+</sup>.", "C. Ba<sub>2+</sub>.", "D. Pb<sub>2+</sub>."], "answer": 0, "type": "understanding" },
            {
                "question": "MB-CUOĐV-L2-003. Phát biểu nào dưới đây về điện thế hoạt động là đúng?",
                "options": ["A. Chỉ xuất hiện ở trang thai nghỉ ngơi.",
                    "B. Chỉ xuất hiện khi có kích thích.",
                    "C. Xuất hiện không phụ thuộc vào sự có mất của tác nhân kích thích.",
                    "D. Luôn tồn tại trong các tế bào ở mọi thời điểm."],
                "answer": 1,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-004. Mức độ chính xác của cảm ứng ở động vật đa bào phụ thuộc vào",
                "options": ["A. số lượng tế bào trong cơ thể.",
                    "B. mức độ tiến hóa của tổ chức thần kinh.",
                    "C. khối lượng cơ thể.",
                    "D. kích thước cơ thể."],
                "answer": 1,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-005. Cảm ứng ở động vật nhanh và chính xác là nhờ",
                "options": ["A. động vật có hệ thần kinh và sống di động.",
                    "B. động vật có khả năng di chuyển.",
                    "C. động vật có kích thước lớn.",
                    "D. chúng thuộc nhóm động vật bậc cao."],
                "answer": 0,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-006. Cảm ứng ở động vật khác cảm ứng ở thực vật là",
                "options": ["A. cảm ứng ở động vật nhanh hơn, dễ nhận thấy hơn.",
                    "B. cảm ứng ở động vật chậm hơn, khó nhận thấy hơn.",
                    "C. hình thức phản ứng ở động vật kém đa dạng hơn.",
                    "D. mức độ phản ứng ở động vật kém chính xác hơn."],
                "answer": 0,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-007. Ở một số loài chim, chim đực đậu trên cành cây cao và cất tiếng hót thông báo cho các con chim đực khác cùng loài biết khu vực này đã có chủ. Hiện tượng này minh hoạ cho loại tập tính nào ở động vật?",
                "options": ["A. Tập tính kiếm ăn.",
                    "B. Tập tính bảo vệ lãnh thổ.",
                    "C. Tập tính xã hội.",
                    "D. Tập tính di cư."],
                "answer": 1,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-008. Khi học tập trải nghiệm tại trung tâm bảo tồn rùa tại vườn quốc gia Cúc Phương, một học sinh đã thả một hòn đá nhỏ vào cạnh con rùa, rùa sẽ rụt đầu và chân vào mai. Lặp lại hành động thả đá nhiều lần thì rùa không rụt đầu và chân vào mai nữa. Hình thức học tập nào của động vật được mô tả trong ví dụ trên?",
                "options": ["A. Bắt chước.",
                    "B. Quen nhờn.",
                    "C. Học nhận biết không gian.",
                    "D. Học liên hệ."],
                "answer": 1,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-009. Phương án nào dưới đây mô tả tập tính học được?",
                "options": ["A. Nhện giăng tơ.",
                    "B. Ong bắp cày đẻ trứng vào rệp.",
                    "C. Em bé bú mẹ.",
                    "D. Đứa trẻ tập bơi."],
                "answer": 3,
                "type": "understanding"
            },
            {
                "question": "MB-CUOĐV-L2-010. Điều kiện hoá hành động là kiểu liên kết.",
                "options": ["A. các hành vi và các kích thích sau đó động vật chủ động lặp lại các hành vi này.",
                    "B. một hành vi của động vật với một phần thưởng hoặc phạt, sau đó động vật chủ động lặp lại.",
                    "C. một hành vi và một kích thích sau đó động vật chủ động lặp lại các hành vi này.",
                    "D. hai hành vi với nhau mà sau đó động vật chủ động lặp lại các hành vi này."],
                "answer": 1,
                "type": "understanding"
            },
            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                "question": "MB-CUOĐV-L3-001. Quá trình truyền tin qua synapse được thể hiện qua sơ đồ nào sau đây?",
                "options": ["A. Khe synapse → Màng trước synapse → Chùy synapse → Màng sau synapse",
                    "B. Màng trước synapse → Chùy synapse → Khe synapse → Màng sau synapse.",
                    "C. Màng trước synapse → Khe synapse → Chùy synapse → Màng sau synapse",
                    "D. Chùy synapse → Màng trước synapse → Khe synapse → Màng sau synapse"],
                "answer": 3,
                "type": "applycation"
            },


            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    mcKQSTVPT: {
        level1: [
            {
                "question": "MB-KQVSTVPT-L1-001. Một thí nghiệm được thực hiện theo các bước dưới đây: <br/>Bước 1: Trồng vài đậu xanh đang nảy mầm vào chậu chứa đất ẩm.<br?>Bước 2: Để nơi có ánh sáng và tưới hằng ngày.<br/>Bước 3: Theo dõi và dùng thước đo chiều dài thân cây sau 3 ngày, 6 ngày, 9 ngày.<br/>Bước 4: Nhận xét kết quả và rút ra kết luận.<br/>Thí nghiệm được thực hiện nhằm mục đích gì?",
                "options": ["A. Chứng minh cây có sự sinh sản.",
                    "B. Chứng minh cây có sự sinh trưởng.",
                    "C. Chứng minh cây có sự phát triển.",
                    "D. Chứng minh cây có sự cảm ứng."],
                "answer": 1,
            },


            // Thêm các câu hỏi KQ về ST và PT level 1 khác...
        ],
        level2: [
            {
                "question": "MB-KQVSTVPT-L2-001. Trong vòng đời của cây cam, các giai đoạn được liệt kê theo đúng thứ tự là",
                "options": ["A. Hạt nảy mầm → Cây con → Cây trưởng thành → Ra hoa kết quả.",
                    "B. Hạt nảy mầm → Ra hoa kết quả → Cây con → Cây trưởng thành.",
                    "C. Ra hoa kết quả → Cây con → Cây trưởng thành → Cây trưởng thành.",
                    "D. Hạt nảy mầm → Cây con → Ra hoa kết quả → Cây trưởng thành."],
                "answer": 0,
            },


            // Thêm các câu hỏi KQ về ST và PT level 2 khác...
        ],
        level3: [
            {
                "question": "MB-KQVSTVPT-L3-001. Khi trời rét, động vật biến nhiệt trưởng thành và phát triển chậm vì thân nhiệt giảm làm cho sự chuyển hóa trong cơ thể",
                "options": ["A. giảm dẫn tới hạn chế tiêu thụ năng lượng.",
                    "B. tăng tạo nhiều năng lượng để chống rét.",
                    "C. giảm để quá trình sinh sản tăng.",
                    "D. tăng để quá trình sinh sản giảm."],
                "answer": 3,
            },


            // Thêm các câu hỏi KQ về ST và PT level 3 khác...
        ],
    },
    mcSTPTOTV: {
        level1: [
            { "question": "MB-STPTOTV-L1-001. Trong cơ thể thực vật, hormone nào dưới đây thuộc nhóm hormone ức chế sinh trưởng?", "options": ["A. Cytokinin.", "B. Auxin.", "C. Gibberellin.", "D. Acid abscisic."], "answer": 3 },
            { "question": "MB-STPTOTV-L1-002. Nhóm nào dưới đây gồm những hormone kích thích sinh trưởng?", "options": ["A. Auxin, Gibberellin, Cytokinin.", "B. Auxin, acid abscisic, Cytokinin.", "C. Auxin, Gibberellin, Ethylene.", "D. Ethylene, Gibberellin, acid abscisic."], "answer": 0 },
            { "question": "MB-STPTOTV-L1-003. Ở thực vật, hormone nào dưới đây có vai trò làm đóng mở khí khổng?", "options": ["A. Acid abscisic", "B. Auxin", "C. Ethylene", "D. Cytokinin"], "answer": 0 },
            { "question": "MB-STPTOTV-L1-004. Ở thực vật, hormone nào dưới đây tác động đến tính hướng sáng và hướng trọng lực?", "options": ["A. Acid abscisic", "B. Auxin", "C. Ethylene", "D. Cytokinin"], "answer": 1 },
            { "question": "MB-STPTOTV-L1-005. Loại hormone thực vật nào thường được sử dụng trong công nghiệp sản xuất rượu bia nhằm tăng nhanh quá trình phân giải tinh bột thành mạch nha?", "options": ["A. Acid abscisic", "B. Auxin", "C. Gibberellin", "D. Cytokinin"], "answer": 3 },

            // Thêm các câu hỏi STPTOTV level 1 khác...
        ],
        level2: [
            { "question": "MB-STPTOTV-L2-001. Đối với chồi bên, cặp hormone nào dưới đây có tác dụng sinh lí trái ngược nhau?", "options": ["A. Auxin và Gibberellin", "B. Auxin và Cytokinin", "C. Gibberellin và Cytokinin", "D. Ethylene và Acid abscisic"], "answer": 1 },
            { "question": "MB-STPTOTV-L2-002. Loại hormone thực vật nào có tác dụng ức chế sự rụng của quả và lá?", "options": ["A. Gibberellin", "B. Cytokinin", "C. Auxin", "D. Ethylene"], "answer": 2 },
            { "question": "MB-STPTOTV-L2-003. Hormone nào dưới đây được sản sinh nhiều trong thời gian rụng lá, khi hoa già?", "options": ["A. Auxin", "B. Gibberellin", "C. Ethylene", "D. Cytokinin"], "answer": 2 },
            { "question": "MB-STPTOTV-L2-004. Kết quả của quá trình sinh trưởng ở thực vật là làm cho:", "options": ["A. cây ra hoa và tạo quả.", "B. cây lớn lên.", "C. cây ngừng sinh trưởng.", "D. cây ngừng phát triển."], "answer": 1 },

            // Thêm các câu hỏi STPTOTV level 2 khác...
        ],
        level3: [
            { "question": "MB-STPTOTV-L3-001. Để thúc hạt này mầm sớm, người ta sử dụng loại hormone nào sau đây?", "options": ["A. Gibberellin", "B. Auxin", "C. Cytokinin", "D. Acid abscisic"], "answer": 0 },
            { "question": "MB-STPTOTV-L3-002. Tác động sinh lí của nhóm hormone nào dưới đây góp phần tạo quả không hạt?", "options": ["A. Auxin và Gibberellin.", "B. Auxin, Cytokinin.", "C. Auxin, Ethylene.", "D. Gibberellin, acid abscisic."], "answer": 0 },
            { "question": "MB-STPTOTV-L3-003. Kết quả của sinh trưởng sơ cấp ở cây là", "options": ["A. tăng đường kính thân.", "B. tăng chiều dài thân và rễ.", "C. tăng chiều dài thân.", "D. tăng kích thước của lá."], "answer": 1 },
            {
                "question": "MB-STPTOTV-L3-004. Trong quá trình sinh trưởng ở các loài thực vật như lúa, ngô, tre, ... đường kính thân của chúng hầu như không có sự gia tăng kích thước bề ngang. Hiện tượng trên là do nguyên nhân nào sau đây?",
                "options": ["A. Các loài thực vật trên không có quá trình sinh trưởng sơ cấp.",
                    "B. Các loài thực vật trên chỉ có mô phân sinh lóng, không có mô phân sinh đình.",
                    "C. Các loài thực vật trên không có mô phân sinh bên.",
                    "D. Các loài thực vật trên có mô phân sinh bên hoạt động mạnh hơn mô phân sinh lóng."],
                "answer": 2
            },

            // Thêm các câu hỏi STPTOTV level 3 khác...
        ]
    },

    mcSTPTDV: {
        level1: [
            { "question": "MB-STVPTOĐV-L1-001. Ở các synapse hóa học của thú, chất trung gian hoá học phổ biến nhất là", "options": ["A. acetylcholine và noradrenaline.", "B. adrenaline và noradrenaline.", "C. dopamine và serotonin.", "D. serotonin và adrenaline."], "answer": 0 },
            { "question": "MB-STVPTOĐV-L1-002. Bao myelin có bản chất là", "options": ["A. phospholipid.", "B. nucleic acid.", "C. steroid.", "D. glycoprotein."], "answer": 0 },
            { "question": "MB-STVPTOĐV-L1-003. Loại ion nào dưới đây đóng vai trò đặc biệt quan trọng trong quá trình hình thành điện thế hoạt động trên màng tế bào?", "options": ["A. Mg<sub>2</sub><sup>+</sup>", "B. K<sup>+</sup>", "C. Al<sub>3</sub><sup>+</sup>", "D. Hg<sub>2</sub><sup>+</sup>"], "answer": 1 },

            // Thêm các câu hỏi ST và PT ở ĐV level 1 khác...
        ],
        level2: [
            { "question": "MB-STVPTOĐV-L2-001. Ở người, hormone sinh trưởng (GH) được tiết ra từ", "options": ["A. tuyến tụy.", "B. tuyến trên thận.", "C. tuyến giáp.", "D. tuyến yên."], "answer": 3 },

            { "question": "MB-STVPTOĐV-L2-002. Hai loại hormone quan trọng nhất trong sự điều hòa sinh trưởng ở người là", "options": ["A. LH và tyrosine.", "B. LH và FSH.", "C. GH và tyrosine.", "D. TSH và GH."], "answer": 2 },

            { "question": "MB-STVPTOĐV-L2-003. Ở nam giới, hormone nào dưới đây làm tăng mạnh quá trình tổng hợp protein, giúp phát triển cơ bắp?", "options": ["A. Oestrogen", "B. Testosterol", "C. Progesterol", "D. Insullin"], "answer": 1 },
            { "question": "MB-STVPTOĐV-L2-004. Trong giai đoạn dậy thì ở người, hormone nào dưới đây không có vai trò thúc đẩy sự phát triển của xương?", "options": ["A. Insullin", "B. Oestrogen", "C. Testosterol", "D. GH"], "answer": 0 },
            { "question": "MB-STVPTOĐV-L2-005. Thiếu loại vitamin nào dưới đây sẽ gây bệnh còi xương, chậm lớn ở động vật và người?", "options": ["A. Vitamin A", "B. Vitamin E", "C. Vitamin D", "D. Vitamin K"], "answer": 2 },
            { "question": "MB-STVPTOĐV-L2-006. Hormone nào dưới đây vừa tăng tổng hợp protein, vừa kích thích phát triển xương?", "options": ["A. Testosterol", "B. Oestrogen", "C. Insullin", "D. Calcitonin "], "answer": 0 },
            {
                "question": "MB-STVPTOĐV-L2-007. Cho các thông tin sau:<br/>(1)	các tế bào của phôi phân hóa tạo thành các cơ quan của sâu bướm.<br/>(2)	hợp tử phân chia nhiều lần để tạo phôi.<br/>(3)	ấu trùng trải qua nhiều lần lột xác trở thành con trưởng thành.<br/>(4)	ấu trùng có hình thái, cấu tạo và sinh lí rất khác với con trưởng thành.<br/>(5)	sự khác biệt về hình thái và cấu tạo của ấu trùng giữa các lần lột xác là rất nhiều.<br/>(6)	các tế bào của phôi phân hóa tạo thành các cơ quan của ấu trùng.<br/>Thông tin đúng về biến thái hoàn toàn và biến thái không hoàn toàn là:",
                "options": ["A. biến thái hoàn toàn: (1), (3), (4); Biến thái không hoàn toàn: (1), (2), (5), (6).",
                    "B. biến thái hoàn toàn: (1), (2), (4); Biến thái không hoàn toàn: (2), (3), (5), (6).",
                    "C. biến thái hoàn toàn: (1), (5), (6); Biến thái không hoàn toàn: (1), (2), (3), (5).",
                    "D. biến thái hoàn toàn: (2), (4), (5); Biến thái không hoàn toàn: (1), (3), (4), (6)."],
                "answer": 1,
            },


            // Thêm các câu hỏi ST và PT ở ĐV level 2 khác...
        ],
        level3: [
            {
                "question": "MB-STVPTOĐV-L3-001. Sinh trưởng là",
                "options": ["A. quá trình tăng lên về số lượng và khối lượng tế bào.",
                    "B. quá trình tăng lên về khối lượng và kích thước tế bào.",
                    "C. quá trình tăng lên về kích thước tế bào.",
                    "D. quá trình tăng lên về số lượng, khối lượng và kích thước tế bào."],
                "answer": 3
            },
            {
                "question": "MB-STVPTOĐV-L3-002. Ở động vật, thiếu vitamin D sẽ",
                "options": ["A. làm giảm sự tạo máu ở tủy xương.",
                    "B. làm giảm sự phát triển của xương.",
                    "C. làm chậm lớn và gây yếu.",
                    "D. ảnh hưởng đến phân hóa giới tính."],
                "answer": 1
            },
            {
                "question": "MB-STVPTOĐV-L3-003. Oestrogen là một trong những:",
                "options": ["A. hormone sinh dục cái.",
                    "B. hormone sinh dục đực.",
                    "C. hormone sinh trưởng.",
                    "D. hormone tuyến giáp."], "answer": 0
            },
            {
                "question": "MB-STVPTOĐV-L3-004. Testosterol là một trong những:",
                "options": ["A. hormone sinh dục cái.",
                    "B. hormone sinh dục đực.",
                    "C. hormone sinh trưởng.",
                    "D. hormone tuyến yên."],
                "answer": 1
            },
            {
                "question": "MB-STVPTOĐV-L3-005. Sinh trưởng và phát triến ở động vật gồm:",
                "options": ["A. sinh trưởng và phát triến không qua biến thái.",
                    "B. sinh trưởng và phát triến qua biến thái.",
                    "C. sinh trưởng và sinh sản vô tính.",
                    "D. sinh trưởng, phát triến không qua biến thái và qua biến thái."],
                "answer": 3
            },


            // Thêm các câu hỏi ST và PT ở ĐV level 3 khác...
        ]
    },
    mcKQSSSV: {
        level1: [
            { "question": "MB-SSOSV-L1-001. Sinh sản là", "options": ["A. quá trình tạo ra những cá thể mới.", "B. quá trình cơ thể lớn lên và sinh sản.", "C. quá trình tạo ra những sinh vật mới.", "D. quá trình phân chia tế bào."], "answer": 0 },
            { "question": "MB-SSOSV-L1-002. Thụ tinh là quá trình:", "options": ["A. hợp nhất hai giao tử đơn bội đực và cái.", "B. hợp nhất con đực với con cái.", "C. hình thành giao tử đực và cái.", "D. phát triển của phôi thai."], "answer": 0 },
            { "question": "MB-SSOSV-L1-003. Sinh sản gồm các hình thức:", "options": ["A. sinh sản sinh dưỡng và sinh sản phân đôi.", "B. sinh sản phân đôi và sinh sản hữu tính.", "C. sinh sản vô tính và trinh sản.", "D. sinh sản hữu tính và sinh sản vô tính."], "answer": 3, "image": null },
            { "question": "MB-SSOSV-L1-004. Sinh sản hữu tính gồm:", "options": ["A. quá trình giảm phân và nguyên phân.", "B. quá trình nhân đôi vả phân li.", "C. quá trình giảm phân và thụ tinh", "D. quá trình nguyên phân và thụ tinh."], "answer": 2, "image": null },
            { "question": "MB-SSOSV-L1-005. Sinh sản hữu tính là hình thức sinh sản:", "options": ["A. chỉ cần một cá thể.", "B. cần có hai cá thể trở lên.", "C. có sự kết hợp giữa giao tử đực và giao tử cái.", "D. không có sự kết hợp giữa giao tử đực và giao tử cái."], "answer": 2, "image": null },
            { "question": " MB-SSOSV-L1-006. Thụ tinh gồm các hình thức:", "options": ["A. thụ tinh ngoài và thụ tinh trong.", "B. thụ tinh chéo và tự thụ tinh.", "C. thụ tinh trong và thụ tinh chéo.", "D. tự thụ tinh và thụ tinh ngoài."], "answer": 0 },


            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 1 khác...
        ],
        level2: [
            { "question": "MB-SSOSV-L2-001. Tinh trùng (giao tử đực thường có bộ nhiễm sắc thể:", "options": ["A. đơn bội (n).", "B. lưỡng bội (2n).", "C. tam bội (3n).", "D. tứ bội (4n)."], "answer": 1 },
            { "question": "MB-SSOSV-L2-002. Trứng (giao tử cái) thường có bộ nhiễm sắc thể:", "options": ["A. đơn bội (n).", "B. lưỡng bội (2n).", "C. tam bội (3n).", "D. tứ bội (4n)."], "answer": 1 },
            { "question": "MB-SSOSV-L2-003. Hợp tử thường có bộ nhiễm sắc thể:", "options": ["A. đơn bội (n).", "B. lưỡng bội (2n).", "C. tam bội (3n).", "D. tứ bội (4n)."], "answer": 1 },


            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 2 khác...
        ],
        level3: [
            {
                question: "...",
                options: ["A. dự đoán được quần xã tiên phong và quần xã cuối cùng.",
                    "B. nắm được lịch sử phát triển của quần xã.",
                    "C. xây dựng kế hoạch bảo vệ và khai thác hợp lí nguồn tài nguyên, khắc phục những biến đổi bất lợi của môi trường.",
                    "D. đề ra các biện pháp kĩ thuật trong trồng trọt và chăn nuôi."],
                answer: 2
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 3 khác...
        ]
    },
    mcSSOTV: {
        level1: [
            {
                question: "...",

                options: ["A. Đảm bảo giữ ấm cho các sinh vật.",
                    "B. Dòng năng lượng qua hệ sinh thái theo một chiều và cuối cùng bị tiêu biến ở dạng nhiệt.",
                    "C. Giúp loại bỏ chất độc ra khỏi hệ sinh thái.",
                    "D. Chất dinh dưỡng và các phân tử duy trì sự sống có nguồn cung cấp hạn chế nên cần được tái tạo lại liên tục."],
                answer: 3
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 1 khác...
        ],
        level2: [
            { "question": "MB-SSOTV-L2-001. Các loài thực vật có hình thức sinh sản sinh dưỡng giống nhau là", "options": ["A. Khoai tây, khoai lang.", "B. Trường sinh, cỏ gấu.", "C. Gừng, dong riềng.", "D. Thuốc bỏng, rau má."], "answer": 2 },
            { "question": "MB-SSOTV-L2-002. Dâu tây sinh sản sinh dưỡng bằng:", "options": ["A. rễ củ.", "B. thân rễ.", "C. thân bò.", "D. thân củ."], "answer": 2 },
            { "question": "MB-SSOTV-L2-003. Nhóm nào dưới đây gồm những loài thực vật sinh sinh sản bằng thân rễ?", "options": ["A. Chuối, cam, khoai tây.", "B. Gừng, sen, cỏ tranh.", "C. Dưa hấu, cà chua, vừng.", "D. Khoai lang, bưởi, tía tô."], "answer": 1 },
            { "question": "MB-SSOTV-L2-004. Nhóm nào dưới đây gồm những loài thực vật sinh sinh sản bằng thân củ?", "options": ["A. Chuối, khoai tây.", "B. Khoai lang, khoai môn.", "C. Dưa hấu, bí đỏ.", "D. Cà rốt, cải củ."], "answer": 0 },
            { "question": "MB-SSOTV-L2-005. Phương pháp phân giống vô tính nào dưới đây có hiệu quả đối với mọi loài thực vật?", "options": ["A. Nuôi cây tế bào và mô thực vật.", "B. Chiết cành.", "C. Ghép cành.", "D. Giâm cành."], "answer": 0 },
            { "question": "MB-SSOTV-L2-006. Cây nào dưới đây sinh sinh bằng bào tử?", "options": ["A. Thông.", "B. Lim.", "C. Vàng tâm.", "D. Dương xỉ."], "answer": 3 },
            { "question": "MB-SSOTV-L2-007. Nhóm nào dưới đây gồm những loài thực vật sinh sinh sản bằng thân bò?", "options": ["A. Khoai tây.", "B. Cỏ gấu.", "C. Rau má.", "D. Thuốc bỏng."], "answer": 0 },



            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 2 khác...
        ],
        level3: [
            { "question": "MB-SSOTV-L3-001. Sinh sản có nghĩa như thế nào đối với sống thực vật?", "options": ["A. Làm tăng số lượng cá thể của loài.", "B. Giúp hình thành ở con cái những đặc điểm tiến bộ hơn bố mẹ.", "C. Đảm bảo sự phát triển liên tục của loài.", "D. Làm tăng số lượng cá thể, đảm bảo sự phát triển liên tục của loài."], "answer": 3, "image": null },
            { "question": "MB-SSOTV-L3-002. Sinh sản vô tính ở thực vật có ý nghĩa như thế nào đối với đời sống của nó?", "options": ["A. Giúp duy trì sự tồn tại và phát triển của loài.", "B. Giúp hạn chế sâu bệnh ở cây non.", "C. Giúp tạo ra giống cây trồng mới.", "D. Giúp tăng tuổi thọ cho cây."], "answer": 0, "image": null },
            { "question": "MB-SSOTV-L3-003. Ở thực vật, phương pháp phân giống nào góp phần tạo nhanh giống mới, sạch bệnh, có hiệu quả kinh tế cao?", "options": ["A. Ghép cành.", "B. Nuôi cấy mô.", "C. Giâm cành.", "D. Chiết cành."], "answer": 1 },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 3 khác...
        ]
    },
    mcSSODV: {
        level1: [
            { "question": "MB-SSOĐV-L2-001. Ở nữ giới, hormone FSH có vai trò gì?", "options": ["A. Kích thích nang trứng phát triển và tiết ra hormone oestrogen.", "B. Làm trứng chín, rụng và tạo thể vàng.", "C. Kích thích tuyến yên tiết ra hormone LH.", "D. Kích thích vùng dưới đồi tiết ra hormone insullin."], "answer": 0, "image": null },
            { "question": "MB-SSOĐV-L2-002. Ở nam giới, hormone nào trực tiếp kích thích quá trình sinh tinh trùng?", "options": ["A. Testosterol và LH.", "B. Testosterol và FSH.", "C. FSH và LH.", "D. Insulin và glucagon."], "answer": 1, "image": null },
            { "question": "MB-SSOĐV-L2-003. Ở động vật, điều hòa sinh sản chủ yếu là", "options": ["A. điều hòa sinh tinh.", "B. điều hòa sinh trứng.", "C. điều hòa tiết hormone.", "D. điều hòa sinh tinh và sinh trứng."], "answer": 3, "image": null },
            { "question": "MB-SSOĐV-L2-004. Ở động vật, hệ cơ quan nào sau đây đóng vai trò chủ yếu trong quá trình điều hòa sinh tinh và sinh trứng?:", "options": ["A. Hệ tuần hoàn.", "B. Hệ nội tiết.", "C. Hệ tiêu hóa.", "D. Hệ thần kinh."], "answer": 1, "image": null },
            { "question": "MB-SSOĐV-L2-005. Ở động vật, quá trình sinh sản được điều hòa bởi các yếu tố:", "options": ["A. hormone.", "B. phytohormone.", "C. auxin", "D. cytokinin"], "answer": 0, "image": null },
            { "question": "MB-SSOĐV-L2-006. Ở người, hormone GnRH có vai trò gì?", "options": ["A. Kích thích tuyến yên tiết hormone FSH và LH.", "B. Kích thích nang trứng phát triển và tiết ra oestrogen.", "C. Làm nang trứng chín, rụng và tạo thể vàng.", "D. Kích thích quá trình chuyển hóa glucose thành glycogen."], "answer": 0 },


            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 1 khác...
        ],
        level2: [
            { "question": "MB-SSOĐV-L2-001. Ở nữ giới, hormone nào có tác dụng làm trứng chín, rụng và tạo thể vàng?", "options": ["A. FSH.", "B. LH.", "C. GnRH.", "D. TSH."], "answer": 1 },
            { "question": "MB-SSOĐV-L2-002. Ở người, thể vàng tiết ra hormone sinh dục nào?", "options": ["A. Testosterol.", "B. Glucagon.", "C. Progesterol.", "D. Insullin."], "answer": 2 },
            { "question": "MB-SSOĐV-L2-003. Tuyến yên tiết ra nhiều loại hormone, trong đó có 2 loại hormone đóng vai trò quan trọng trong điều hòa sinh sản là", "options": ["A. FSH và LH.", "B. Progesterol và FSH.", "C. Oestrogen và LH.", "D. Cytokinin và oestrogen."], "answer": 0 },
            { "question": "MB-SSOĐV-L2-004. Bộ phận nào của não bộ tham gia trực tiếp vào cơ chế điều hòa sinh tinh và sinh trứng ở người?", "options": ["A. Vùng đồi.", "B. Cuống não.", "C. Củ não sinh tư.", "D. Vùng dưới đồi."], "answer": 3 },



            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 2 khác...
        ],
        level3: [
            {
                question: "...",
                options: ["A. dự đoán được quần xã tiên phong và quần xã cuối cùng.",
                    "B. nắm được lịch sử phát triển của quần xã.",
                    "C. xây dựng kế hoạch bảo vệ và khai thác hợp lí nguồn tài nguyên, khắc phục những biến đổi bất lợi của môi trường.",
                    "D. đề ra các biện pháp kĩ thuật trong trồng trọt và chăn nuôi."],
                answer: 2
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 3 khác...
        ]
    },
    tfKQTDCCHNL: {
        level1: [

            {
                question: "...",
                statements: [
                    { text: "Sinh vật nhân sơ có gene phân mảnh, gene được cấu tạo bởi các đoạn intron xen kẽ với đoạn exon.", correct: false },
                    {
                        text: "Sinh vật nhân sơ có các gene thường phân bố thành cụm gene có chung một cơ chế điều hòa.", correct: true
                    },
                    {
                        text: "Sinh vật nhân sơ có các gene thường có vùng mã hóa liên tục theo chiều từ 3' đến 5'.", correct: true
                    },
                    { text: "Sinh vật nhân sơ có các gene thường phân bố thành cụm có chung một cơ chế điều hòa, phiên mã chỉ tạo ra một mRNA.", correct: true }
                ]
            },


        ],
        level2: [
            {
                question: "...",
                statements: [
                    {
                        text: "Nhiệt độ cần để tách rời hai mạch của bốn gene là như nhau vì chiều dài bằng nhau.", correct: false
                    },
                    {
                        text: "Gene 1 có số liên kết hydrogen lớn nhất nên có nhiệt độ nóng chảy cao nhất.", correct: true
                    },
                    {
                        text: "Trật tự sắp xếp nhiệt độ nóng chảy từ thấp đến cao là gene 4 → gene 3 → gene 2 → gene 1.", correct: true
                    },
                    { text: "Gene 4 có số liên kết hydrogen của cặp A- T bằng cặp G - C.", correct: false }
                ]
            },

        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/Timtrom.png",
                statements: [
                    {
                        text: "Băng điện di 1 không có tác dụng trong cuộc điều tra này.", correct: true
                    },
                    {
                        text: "Băng điện di 2 cho thấy một trong hai người M2 và M3 là thủ phạm.", correct: true
                    },
                    {
                        text: "Khả năng B là con của M1 cao hơn khả năng B là con của M2.", correct: false
                    },
                    { text: "Băng điện di 7 và 10 cho thấy M2 là thủ phạm.", correct: false }
                ]
            },

        ]
    },
    mcMQHCQT: {
        level1: [
            {
                question: "...",

                options: ["A. Đảm bảo giữ ấm cho các sinh vật.",
                    "B. Dòng năng lượng qua hệ sinh thái theo một chiều và cuối cùng bị tiêu biến ở dạng nhiệt.",
                    "C. Giúp loại bỏ chất độc ra khỏi hệ sinh thái.",
                    "D. Chất dinh dưỡng và các phân tử duy trì sự sống có nguồn cung cấp hạn chế nên cần được tái tạo lại liên tục."],
                answer: 3
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 1 khác...
        ],
        level2: [
            {
                question: "...",

                options: ["A. Quần xã sinh vật có độ đa dạng càng cao thì lưới thức ăn trong quần xã càng phức tạp.",
                    "B. Trong lưới thức ăn, một loài sinh vật có thể là mắt xích của nhiều chuỗi thức ăn.",
                    "C. Lưới thức ăn của quần xã rừng mưa nhiệt đới thường phức tạp hơn lưới thức ăn của quần xã thảo nguyên.",
                    "D. Trong chuỗi thức ăn, bậc dinh dưỡng cao nhất luôn có sinh khối lớn nhất."],
                answer: 3
            },


            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 2 khác...
        ],
        level3: [
            {
                question: "...",
                options: ["A. dự đoán được quần xã tiên phong và quần xã cuối cùng.",
                    "B. nắm được lịch sử phát triển của quần xã.",
                    "C. xây dựng kế hoạch bảo vệ và khai thác hợp lí nguồn tài nguyên, khắc phục những biến đổi bất lợi của môi trường.",
                    "D. đề ra các biện pháp kĩ thuật trong trồng trọt và chăn nuôi."],
                answer: 2
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 3 khác...
        ]
    },
    tfKQTDCCHNL: {
        level1: [
            {
                question: "...",
                
                statements: [
                    {
                        text: "Điều hòa hoạt động của gene chính là điều hòa lượng sản phẩm của gene được tạo ra.", correct: true
                    },
                    {
                        text: "Đối với operon Lac ở E.coli thì tín hiệu giúp gene cấu trúc hoạt động là đường lactose.", correct: true
                    },
                    {
                        text: "Gene điều hòa (lacI) là vị trí tiếp xúc với enzyme RNA polymerase để xúc tác quá trình phiên mã của gene cấu trúc.", correct: false
                    },
                    { text: "Số lần phiên mã của gene lacI bằng số lần phiên mã của ba gene cấu trúc trong bất kì môi trường nào.", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "MB-KQTDCCHNL-L2-001. Lựa chọn các phương án đúng hay sai, khi nói về các dấu hiệu đặc trưng của quá trình trao đổi chất và chuyển hóa năng lượng ở sinh vật:",

                statements: [
                    {
                        text: "Các chất dinh dưỡng và năng lượng từ môi trường sẽ được thu nhận nhờ các cơ quan chuyên biệt.", correct: true
                    },
                    {
                        text: "Chất dinh dưỡng qua hấp thụ sẽ được sử dụng hoàn toàn trực tiếp.", correct: false
                    },
                    {
                        text: "Tế bào không sử dụng các nguyên liệu nhận được để tổng hợp chất hữu cơ tham gia kiến tạo cơ thể và dự trữ năng lượng.", correct: false
                    },
                    { text: "Các chất không được tế bào sử dụng sẽ được tái hấp thu.", correct: false }
                ]
            },

        ],
        level3: [
            {
                question: "...",
              
                statements: [
                    {
                        text: "Lượng mRNA do gene Z quy định được biểu thị ở đường (2).", correct: false
                    },
                    {
                        text: "Lượng chất được biểu thị ở đường(1) quy định lượng chất được biểu thị ở đường (2).", correct: true
                    },
                    {
                        text: "Từ phút thứ 10, đường (1) đi xuống là do cạn kiệt lactose và sản phẩm của gene Z được biểu thị bởi đường này bị phân giải.", correct: true
                    },
                    {
                        text: "Từ phút thứ 15 trở đi, lượng chất biểu thị ở đường(2) duy trì ổn định.", correct: false
                    }
                ]
            },
        ]
    },
    tfTDNVK: {
        level1: [
            {
                question: "DB-TĐNVMK-L1-001. Nhận định dưới đây là đúng hay sai về vai trò của nước đối với thực vật?",
                statements: [
                    { text: "Nước chiếm một phần rất lớn trong sinh khối tươi của thực vật.", correct: true },
                    {
                        text: "Nước quyết định sự phân bố của thực vật trên Trái Đất.", correct: true
                    },
                    {
                        text: "Thành phần quan trọng của tế bào, tạo môi trường liên kết các cơ quan với nhau.", correct: true
                    },
                    { text: "Nước là thành phần màng tế bào, hoạt hóa enzyme và truyền tín hiệu.", correct: false }
                ]
            },
            {
                question: "DB-TĐNVMK-L1-002. Các phát biểu sau đây là đúng hay sai khi nói về các nguyên tắc bón phân cho cây?",
                image: null,
                statements: [
                    {
                        text: "Cần bón đúng loại phân bón.", correct: true
                    },
                    {
                        text: "Bón phân với liều lượng càng nhiều càng tốt.", correct: false
                    },
                    {
                        text: "Bón phân cần bón đúng thời điểm.", correct: true
                    },
                    { text: "Cần bón phân đúng phương pháp.", correct: true }
                ]
            },

        ],
        level2: [
            {
                question: "MB-TĐNVMK-L2-001. Lựa chọn các phương án đúng hay sai, khi nói về quá trình trao đổi nước ở thực vật?",

                statements: [
                    {
                        text: "Trong giới hạn sinh thái về nhiệt độ, tốc độ hấp thụ nước tỉ lệ thuận với sự tăng nhiệt độ.", correct: true
                    },
                    {
                        text: "Trong giới hạn sinh thái về nhiệt độ, tốc độ hấp thụ khoáng tỉ lệ nghịch với sự tăng nhiệt độ.", correct: false
                    },
                    {
                        text: "Trong giới hạn sinh thái về nhiệt độ, tốc độ hấp thụ nước tỉ lệ nghịch với sự tăng nhiệt độ.", correct: false
                    },
                    { text: "Ở mọi nhiệt độ, tốc độ hấp thụ nước và khoáng tỉ lệ thuận với sự tăng nhiệt độ.", correct: false }
                ]
            },
            {
                question: "MB-TĐNVMK-L2-002. Các phát biểu sau về vai trò của nước là đúng hay sai?",

                statements: [
                    {
                        text: "Nước là thành phần cấu tạo của tế bào.", correct: true
                    },
                    {
                        text: "Nước là dung môi hòa tan các chất, tham gia vào quá trình vận chuyển vật chất trong cây.", correct: true
                    },
                    {
                        text: "Nước điều hòa nhiệt độ của cơ thể thực vật.", correct: true
                    },
                    { text: "Nước là nguyên liệu, môi trường của các phản ứng sinh hóa.", correct: true }
                ]

            },
            {
                question: "MB-TĐNVMK-L2-003. Các phát biểu sau về sự thoát hơi nước ở lá là đúng hay sai?",

                statements: [
                    {
                        text: "Thoát hơi nước qua lớp cuticle là con đường chủ yếu.", correct: false
                    },
                    {
                        text: "Lớp cuticle càng dày thì sự thoát hơi nước càng kém và ngược lại.", correct: true
                    },
                    {
                        text: "Có hai con đường thoát hơi nước qua lá: qua lớp cutin và qua khí khổng.", correct: true
                    },
                    { text: "Khí khổng là một bào quan có hình hạt đậu và tốc độ thoát hơi nước qua khí khổng phụ thuộc độ dày của khí khổng.", correct: false }
                ]

            },
            {
                question: "DB-TĐNVMK-L2-004. Các phát biểu sau về vai trò của nitrogen đối với thực vật là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Tham gia cấu tạo nên các phân tử protein.", correct: true
                    },
                    {
                        text: "Hoạt hóa enzyme và đóng mở khí khổng.", correct: false
                    },
                    {
                        text: "Tham gia cấu tạo nên nucleic acid.", correct: true
                    },
                    { text: "Tham gia cấu tạo nên các phân tử diệp lục.", correct: true }
                ]
            },
            {
                question: "MB-TĐNVMK-L2-005. Các phát biểu sau về nguồn cung cấp nitrogen cho cây dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Không khí chứa 78% thể tích là nitrogen, là nguồn cung cấp trực tiếp nitrogen cho cây.", correct: false
                    },
                    {
                        text: "Mặt trời chứa lượng lớn nitrogen cung cấp cho cây.", correct: false
                    },
                    {
                        text: "Xác động thực vật và muối khoáng trong đất là nguồn nitrogen mà cây dễ dàng có thể sử dụng được.", correct: true
                    },
                    { text: "Các vi sinh vật có thể biến đổi nitrogen trong không khí thành các dạng nitrogen mà cây có thể sử dụng được.", correct: true }
                ]

            },
        ],
        level3: [
            {
                question: "DB-TĐNVMK-L3-001. Biểu đồ sau đây nói về mối quan hệ giữ phân bón và năng suất cây trồng. Dựa vào biểu đồ trên, các phát biểu sau đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/phanbonns.png",
                statements: [
                    {
                        text: "Nếu bón phân lượng quá ít, không đáp ứng đủ nhu cầu dinh dưỡng của cây, gây giảm năng suất cây trồng.", correct: true
                    },
                    {
                        text: "Nếu bón phân với lượng dư thừa có thể tiêu diệt các sinh vật có lợi trong đất và gây ô nhiễm môi trường.", correct: true
                    },
                    {
                        text: "Nếu bón phân lượng cao quá mức có thể gây độc cho cây và làm giảm năng suất cây trồng.", correct: true
                    },
                    { text: "Để nâng cao năng suất cần phải bón phân với liều lượng tối ưu.", correct: true }
                ]
            },
        ]
    },
    tfQHOTV: {
        level1: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "...", correct: true
                    },
                    {
                        text: "...", correct: true
                    },
                    {
                        text: "...", correct: true
                    },
                    { text: "...", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "DB-QHOTV-L2-001. Dựa trên hình vẽ minh họa về hai pha của quang hợp, mỗi nhận định sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/psvptquanghop.png",
                statements: [
                    {
                        text: "Chú thích (I) là oxygen được tạo ra từ quang phân li nước, chú thích (II) là NADPH được tạo ra từ pha sáng của quang hợp.", correct: true
                    },
                    {
                        text: "Chú thích (III) là pha tối của quang hợp.", correct: false
                    },
                    {
                        text: "Sản phẩm được tạo ra là ATP và NADPH của pha sáng được sử dụng cho pha tối.", correct: true
                    },
                    {
                        text: "Chú thích (IV) là pha sáng của quang hợp.", correct: false }
                ]
            },
        ],
        level3: [
            {
                question: "DB-QHOTV-L3-001. ...",
                image: null,
                statements: [
                    {
                        text: "...", correct: true
                    },
                    {
                        text: "...", correct: true
                    },
                    {
                        text: "...", correct: false
                    },
                    { text: "...", correct: true }
                ]
            },
        ]
    },
    tfHHOTV: {
        level1: [
            {
                question: "DB-HHOTV-L1-001. Để tìm hiểu về quá trình hô hấp ở thực vật, một bạn học sinh đã bố trí thí nghiệm như trong hình vẽ. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/thaicarbonic.png",
                statements: [
                    {
                        text: "Thay nước vôi trong ống nghiệm bằng dung dịch Na(OH)<sub>2<sub/> thì kết quả thí nghiệm vẫn không thay đổi.", correct: false
                    },
                    {
                        text: "Thí nghiệm chứng minh quá trình hô hấp ở thực vật thải CO<sub>2<sub/>.", correct: true
                    },
                    {
                        text: "Thí nghiệm chứng minh oxygen là nguyên liệu của hô hấp.", correct: false
                    },
                    {
                        text: "Thí nghiệm chứng minh nước là sản phẩm và là nguyên liệu của hô hấp.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB-HHOTV-L2-001. Để phát hiện hô hấp ở thực vật, bạn Toàn đã thực hiện thí nghiệm như sau. Đặt 2 cốc nước vôi trong vào bình thủy tinh kín. Sau khoảng hai giờ, bạn Toàn thấy một trong 2 cốc thủy tinh (2) có lớp váng trắng đục trên bề mặt. Nhưng bạn Toàn lại quên mất 2 cốc được lấy từ những chuông nào nên đành đánh số thứ tự 1 và 2. Dựa vào kiến thức về hô hấp, mỗi phát biểu sau đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/bttvoitrong.png",
                statements: [
                    {
                        text: "Oxygen làm nước vôi trong ở cốc [2] xuất hiện váng đục.", correct: false
                    },
                    {
                        text: "Lớp váng đục trong cốc [2] là CaCO₃ kết tủa.", correct: true
                    },
                    {
                        text: "Cốc [1] được lấy từ chuông [A], cốc [2] được lấy từ chuông [B].", correct: false
                    },
                    {
                        text: "Độ ẩm và nhiệt độ chuông [A] cao hơn chuông [B].", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-HHOTV-L3-001. Người ta giữ khoai tây một tuần trong không khí sạch, sau đó giữ một tuần trong nitrogen sạch, rồi lại giữ một tuần trong không khí sạch. Lượng CO<sub>2</sub> giải phóng ra trong thí nghiệm được biểu diễn ở đồ thị bên. Giải thích kết quả và cho biết mỗi nhận định sau đây đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/hhhieukikhi.png",
                statements: [
                    {
                        text: "Quá trình hô hấp làm chất lượng nông sản bị giảm.", correct: true
                    },
                    {
                        text: "Ở tuần 1 quá trình hô hấp hiếu khí bình thường.", correct: true
                    },
                    {
                        text: "Ở tuần 2 xảy ra giai đoạn đầu hô hấp kị khí, giai đoạn sau chỉ xảy ra hô hấp hiếu khí.", correct: false
                    },
                    {
                        text: "Ở tuần 3, giai đoạn đầu, các mô có oxygen sẽ đẩy mạnh oxy hóa glucose chuyển thành acid pyruvic tham gia vào chu trình Krebs → có sự tăng cao hàm lượng CO<sub>2</sub> thải ra, sau đó quá trình hô hấp hiếu khí bình thường → lượng CO < sub > 2</sub > ổn định trở lại.", correct: true }
                ]
            },

        ]
    },
    tfDDVTHDV: {
        level1: [
            {
                question: "DB-DDVTHOĐV-L1-001. Mỗi phát biểu dưới đây là đúng hay sai khi nói về dạ dày của thú ăn thực vật?",
                
                statements: [
                    {
                        text: "Dạ cỏ của trâu, bò bé hơn thú ăn thịt.", correct: false
                    },
                    {
                        text: "Dạ cỏ là nơi biến đổi hóa học chính của dạ dày của động vật ăn thực vật nhai lại.", correct: false
                    },
                    {
                        text: "Dạ dày trâu, bò, hươu, nai, dê, cừu là dạ dày 4 ngăn.", correct: true
                    },
                    {
                        text: "Đường đi của thức ăn trong ống tiêu hóa: Miệng → thực quản → dạ cỏ → dạ tổ ong → thực quản → miệng(nhai kĩ) → thực quản → dạ lá sách → dạ múi khế.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-DDVTHOĐV-L2-001. Khi nói về cấu trúc ruột non để giúp hấp thụ chất dinh dưỡng, mỗi nhận định sau đây đúng hay sai?",
               
                statements: [
                    {
                        text: "Cấu trúc biểu mô ruột non có chứa các ống dẫn dinh dưỡng để dẫn chất dinh dưỡng sau khi đã được tiêu hóa đi vào máu.", correct: true
                    },
                    {
                        text: "Bên dưới lớp tế bào biểu mô là các lớp cơ giúp co bóp mạnh để đẩy thức ăn trở lại dạ dày.", correct: false
                    },
                    {
                        text: "Các nhung mao của ruột non giúp trộn thức ăn với dịch tụy, dịch mật và dịch ruột để tiêu hóa diễn ra dễ dàng hơn.", correct: true
                    },
                    {
                        text: "Bề mặt ruột non có nhiều nếp gấp giúp tăng diện tích hấp thụ chất dinh dưỡng.", correct: true }
                ]
            },

        ],
        level3: [
            {
                question: "DB-DDVTHOĐV-L3-001. Hình ảnh mô tả các tế bào trong niêm mạc dạ dày và cơ chế của hội chứng Zollinger - Elisson thường biểu hiện bệnh lí loét dạ dày tá tràng với các ổ loét ở vị trí bất thường. Người ta phát hiện ra các u tiết gastrin khu trú ở tụy và thành tá tràng của các bệnh nhân mắc hội chứng này. Mỗi nhận định sau đây đúng hay sai?",
                
                image: "https://nhantri.top/media/Grade11/zollingerelisson.png",
                statements: [
                    {
                        text: "Tế bào tiết nhầy: Tiết chất nhầy bôi trơn và lót trong, bảo vệ dạ dày, tế bào chính sản xuất pepsinogen rồi biến đổi thành pepsin là một enzyme có vai trò tiêu hóa carbohydrate.", correct: false
                    },
                    {
                        text: "Tế bào thành sản xuất ra yếu tố nội tại và acid HCl. Yếu tố nội tại giúp hấp thu vitamin B12 ở ruột, tế bào nội tiết (Tế bào G) ở đáy của tuyến dạ dày, tiết ra hormon gastrin có tác dụng kích thích tế bào thành sản xuất HCl.", correct: true
                    },
                    {
                        text: "U tiết Gastrin tiết ra nhiều hoocmon gastrin, gastrin được vận chuyển trong máu đến các tế bào thành dạ dày được tiếp nhận bởi thụ thể gastrin, đồng thời gastrin kích thích các tế bào biểu mô nông sinh ra Histamin.", correct: true
                    },
                    {
                        text: "Gastrin cùng với Histamin và Acetyl- cholin đã hoạt hóa protein kinase → kích hoạt bơm H<sup>+</sup>/K<sup>+</sup> - ATP syntase trên màng tế bào thành → tăng cường tiết HCl vào xoang dạ dày khi nồng độ HCl trong dạ dày cao là một trong những nguyên nhân chính gây loét dạ dày tá tràng.", correct: true
                    }
                ]
            },


        ]
    },

    tfHHODV: {
        level1: [
            {
                question: "DB-HHOĐV-L1-001. Hình ảnh mô tả quá trình trao đổi khí ở Ruồi. Hãy cho biết có mỗi mệnh đề sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/ruoitho.png",
                statements: [
                    {
                        text: "[4] là luồng khí giàu CO<sub>2</sub> từ ống khí tận đến tế bào.", correct: false
                    },
                    {
                        text: "[3] là luồng khí giàu O<sub>2</sub> từ tế bào đến ống khí tận.", correct: false
                    },
                    {
                        text: "[2] là luồng khí giàu CO<sub>2</sub> từ ống khí lớn ra ngoài môi trường.", correct: true
                    },
                    {
                        text: "[1] là luồng khí giàu O<sub>2</sub> từ môi trường vào ống khí lớn.", correct: true }
                ]
            },


        ],
        level2: [
            {
                question: "DB-HHOĐV-L2-001. Mỗi nhận định sau là đúng hay sai khi nói về sự hô hấp ở cá chép?",
                image: null,
                statements: [
                    {
                        text: "Các cung mang, các phiên mang xoè ra khi có lực đẩy của nước.", correct: true
                    },
                    {
                        text: "Miệng và nắp mang cùng tham gia vào hoạt động hô hấp.", correct: true
                    },
                    {
                        text: "Cách sắp xếp của các mao mạch trên mang giúp dòng nước qua mang chảy song song cùng chiều với dòng máu.", correct: false
                    },
                    {
                        text: "Hoạt động của miệng và nắp mang làm cho một lượng nước được đẩy qua đẩy lại tiếp xúc với mang nhiều lần giúp cá có thể lấy được 80% lượng oxygen trong nước.", correct: false
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-HHOĐV-L3-001. Trong thí nghiệm nghiên cứu về ảnh hưởng của các khí O<sub>2</sub>, CO<sub>2</sub>, CO đến nhịp tim của chuột, một số bước sau đã được thực hiện:</br>- Bước 1: Xác định vật liệu, phương pháp, bố trí thí nghiệm, kết quả dự kiến.</br>- Bước 2: Chọn các con chuột được 10 tuần tuổi khỏe mạnh, đồng đều về kích thước, khối lượng.Chuẩn bị bốn thí nghiệm có áp suất mỗi loại khí(mmHg) khác nhau được thể hiện ở bảng dưới đây.Trong đó, buồng I chứa không khí tiêu chuẩn (đối chứng).</br>- Bước 3: Đo nhịp tim của chuột bằng thiết bị cảm biến.</br>- Bước 4: Chọn 40 con chuột có nhịp tim tương đương nhau và chia đều thành 4 nhóm.Đưa mỗi nhóm chuột vào từng buồng thí nghiệm.</br>- Bước 5: Sau 15 phút, đo nhịp tim của chuột trong mỗi buồng thí nghiệm.",
                image: "https://nhantri.top/media/Grade11/TNchuot.png",
                statements: [
                    {
                        text: "Bước 1 thể hiện việc lập kế hoạch nghiên cứu.", correct: true
                    },
                    {
                        text: "Để xác định ảnh hưởng của khí CO, cần tiến hành bước tiếp theo là so sánh kết quả đo nhịp tim của chuột ở buồng II và buồng IV.", correct: false
                    },
                    {
                        text: "Chuột ở buồng III sẽ không có sự sai khác về nhịp tim đo được ở bước 3 và bước 5.", correct: false
                    },
                    {
                        text: "Nếu sử dụng chuột bị hỏng thụ thể hóa học ở cung động mạch chủ và xoang động mạch cảnh làm đối tượng thí nghiệm thì nhịp tim của chuột trong buồng I và buồng II sẽ không có sự sai khác.", correct: true
                    }
                ]
            },
            {
                question: "DB-HHOĐV-L3-002. Hình ảnh sau đây mô tả quá trình trao đổi khí ở chim. Phát biểu nào đúng, phát biểu nào sai?",
                image: "https://nhantri.top/media/Grade11/chimtho.png",
                statements: [
                    {
                        text: "Khi hít vào và thở ra, các túi khí đều đầy không khí.", correct: false
                    },
                    {
                        text: "Khi thở ra, không khí giàu O<sub>2</sub> từ túi khí sau lên phổi.", correct: true
                    },
                    {
                        text: "Hình [A] là hoạt động thở ra, [B] là hoạt động hít vào.", correct: true
                    },
                    {
                        text: "Khi hít vào, không khí giàu O<sub>2</sub> vào phổi và túi khí trước.", correct: false
                    }
                ]
            },

        ]
    },
    tfTHODV: {
        level1: [
            {
                question: "DB-THOĐV-L1-001. Mỗi phát biểu dưới đây khi nói về tuần hoàn máu là Đúng hay Sai?",
                image: null,
                statements: [
                    {
                        text: "Tim co dãn tự động theo chu kì là do hoạt động của hệ dẫn truyền tim.", correct: true
                    },
                    {
                        text: "Hệ dẫn truyền tim ở người bao gồm các thành phần sau: Nút xoang nhĩ, nút nhĩ thất, bó His và mạng lưới Purkinje.", correct: true
                    },
                    {
                        text: "Một bệnh nhân bị bệnh tim được lắp máy trợ tim có chức năng phát xung điện cho tim.Máy trợ tim này có chức năng tương tự cấu trúc nút nhĩ thất trong hệ dẫn truyền tim.", correct: false
                    },
                    {
                        text: "Khi nồng độ CO<sup>2</sup> trong máu tăng, tim sẽ đập nhanh và mạnh, mạch giãn ra làm huyết áp tăng và tăng quá trình vận chuyển máu trong mạch.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB-THOĐV-L2-001. Trong một nghiên cứu về sự đáp ứng của hệ tim mạch với sự luyện tập thể dục, một người phụ nữ đáp ứng các tiêu chí nghiên cứu (từ 25 đến 40 tuổi, không dùng thuốc, cân nặng bình thường về chiều cao, huyết áp bình thường) được chọn để nghiên cứu. Các thông số đối chứng (trước luyện tập thể dục) về huyết áp, nhịp tim và Po<sub>2</sub> động mạch và tĩnh mạch; thể tích tâm thu của cô ta được xác định. Sau đó người phụ nữ này đi trên một máy chạy bộ trong thời gian 30 phút với vận tốc 3 dặm/giờ. Huyết áp và nhịp tim của cô được theo dõi liên tục, và Po<sub>2</sub> động mạch và tĩnh mạch của cô được đo vào cuối giai đoạn tập thể dục (Bảng dưới đây). Mỗi nhận định sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/huyetapcactam.png",
                statements: [
                    {
                        text: "Khi tập luyện thể dục, huyết áp tâm thu của người này được tăng lên và huyết áp tâm trương giảm đi.", correct: false
                    },
                    {
                        text: "Bởi vì cơ thể hoạt động, tim cần gia tăng nhịp để đẩy các chất cần thiết đến với các tế bào nên nhịp tim tăng khi tập luyện thể dục.", correct: false
                    },
                    {
                        text: "Áp suất oxygen ở tĩnh mạch giảm vì tế bào đã sử dụng ít oxygen hơn.", correct: false
                    },
                    {
                        text: "Tập luyện thể dục có thể khiến khoảng huyết áp rộng hơn khiến cho người này dễ đột quỵ.", correct: true
                    }
                ]
            },
            {
                question: "DB-THOĐV-L2-002. Mỗi nhận định sau về hệ tuần hoàn là đúng hay sai?",
                
                statements: [
                    {
                        text: "Ở thú, máu động mạch luôn giàu O<sub>2</sub>.", correct: false
                    },
                    {
                        text: "Ở tim của người, tâm thất trái co tạo áp lực lớn hơn so với tâm thất phải co.", correct: true
                    },
                    {
                        text: "Trong hệ mạch của người, mao mạch có huyết áp nhỏ nhất.", correct: false
                    },
                    {
                        text: "Ở tôm, máu hòa trộn với dịch mô và tiếp xúc trực tiếp với tế bào.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-THOĐV-L3-001. Hình sau đây mô tả thời gan thực hiện các pha của một chu kì tim, ô màu sẫm thể hiện thời gian co. Phát biều nào đúng, phát biểu nào sai?",
                image: "https://nhantri.top/media/Grade11/cacphacktim.png",
                statements: [
                    {
                        text: "Trong một chu kì tim, thời gian nghĩ của tâm thất nhiều hơn tâm nhĩ.", correct: false
                    },
                    {
                        text: "Trong một chu kì tim, tâm nhĩ có thời gian làm việc/thời gian nghỉ là 3/5.", correct: false
                    },
                    {
                        text: "Trong một chu kì tim, thời gian tim nghĩ bằng thời gian hoạt động của tim.", correct: true
                    },
                    {
                        text: "Trong một chu kì tim, tổng thời gian nghĩ và làm việc của tâm nhĩ bằng chu kì tim.", correct: true }
                ]
            },
            {
                question: "DB-THOĐV-L3-002. Điện tâm đồ (Electrocardiogram, ECG) là đồ thị ghi những thay đổi dòng điện tim. ECG gồm các sóng P, Q, R, S, T và các khoảng, đoạn tương ứng với hoạt động của tim. Hình vẽ thể hiện ECG ở trạng thái bình thường của động vật có vú. Một nhà khoa học đã tiến hành thí nghiệm tìm hiểu tác động của thân nhiệt lên ECG của một loài động vật có vú. Kết quả nghiên cứu về khoảng thời gian RR và QT của loài này ở các thân nhiệt khác nhau được thể hiện ở bảng bên dưới. Mỗi nhận định sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/dientamdo.png",
                statements: [
                    {
                        text: "Thân nhiệt tỉ lệ thuận với khoảng thời gian RR.", correct: true
                    },
                    {
                        text: "Thân nhiệt tỉ lệ nghịch với khoảng thời gian QT.", correct: true
                    },
                    {
                        text: "Khi thân nhiệt tăng lên, cả RR với QT đều có xu hướng giảm.", correct: true
                    },
                    {
                        text: "Điều đó chứng minh, khi thân nhiệt càng tăng thì số nhịp tim ít hơn so với khi thân nhiệt bình thường.", correct: false
                    }
                ]
            },
        ]
    },
    tfMDONDV: {
        level1: [
            {
                question: "DB-MDOĐV-L1-001. Ở người và động vật có nhiều cơ chế bảo vệ của cơ thể. Hệ miễn dịch hoạt động hiệu quả với các hàng rào bảo vệ như da, niêm mạc và các tế bào miễn dịch giúp ngăn chặn mầm bệnh. Ngoài ra, nhiều tác nhân gây bệnh không thể tồn tại lâu trong môi trường do điều kiện khắc nghiệt. Bên cạnh đó, hệ vi sinh vật có lợi trên cơ thể cạnh tranh với mầm bệnh, hạn chế cơ hội xâm nhiễm, giúp duy trì sự cân bằng sinh học. Mỗi nhận định sau là đúng hay sai khi nói về nguyên nhân làm cho xác suất xâm nhiễm và gây bệnh của các tác nhân gây bệnh tồn tại trong môi trường tự nhiên trên người và động vật là rất nhỏ?",
                image: null,
                statements: [
                    {
                        text: "Do các tác nhân gây bệnh trong môi trường tự nhiên không có khả năng thích nghi cao.", correct: false
                    },
                    {
                        text: "Do cơ thể người và động vật có khả năng miễn dịch chống lại sự xâm nhiễm và gây bệnh của các tác nhân gây bệnh.", correct: true
                    },
                    {
                        text: "Do cơ thể người và động vật không phù hợp với con đường gây bệnh của các tác nhân gây bệnh trong môi trường tự nhiên.", correct: false
                    },
                    {
                        text: "Do các tác nhân gây bệnh trong môi trường tự nhiên không đủ số lượng (chưa đạt ngưỡng vượt tầm kiểm soát của cơ thể).", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "DB-MDOĐV-L2-001. Sơ đồ mô tả cơ chế diễn ra miễn dịch đặc hiệu. Mỗi mệnh đề sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/mddichthetebao.png",
                statements: [
                    {
                        text: "Đây là giai đoạn đáp ứng thứ phát của miễn dịch đặc hiệu.", correct: false
                    },
                    {
                        text: "[A] là tế bào trình diện kháng nguyên, [D] là tế bào T hỗ trợ.", correct: true
                    },
                    {
                        text: "[B] là tế bào B, [F] là tế bào B nhớ, [E] là tương bào.", correct: true
                    },
                    {
                        text: "[C] là tế bào T nhớ, [G] là tế bào T.", correct: false }
                ]
            },
        ],
        level3: [
            {
                question: "DB-MDOĐV-L3-001. ",
                image: "https://nhantri.top/media/Grade11/testcovid.png",
                statements: [
                    {
                        text: "Cặp vợ chồng này có thể sinh con bình thường không mắc bệnh Down.", correct: true
                    },
                    {
                        text: "Nếu cặp vợ chồng trong lần mang thai tiếp theo không bị sảy thai, thì chắc chắn sẽ bình thường về mặt kiểu hình.", correct: false
                    },
                    {
                        text: "Giao tử (2) tham gia thụ tinh với giao tử bình thường thì sẽ sinh ra người con mang bất thường về cấu trúc NST dạng cân bằng.", correct: true
                    },
                    {
                        text: "Giao tử (4) và (6) nếu tham gia thụ tinh với giao tử bình thường thì sinh ra người con mắc hội chứng Down còn sống.", correct: false
                    }
                ]
            },

        ]
    },


    tfBTVCBNM: {
        level1: [
            {
                question: "DB-BTVCBNM-L1-001. Mỗi nhận định sau đây là đúng hay sai khi nói về vai trò của hệ bài tiết?",
                image: null,
                statements: [
                    {
                        text: "Giúp loại thải các chất dư thừa làm chúng không chuyển hóa được thành các chất độc hại.", correct: true
                    },
                    {
                        text: "Giúp cơ thể tiếp nhận và tích lũy các chất cần thiết từ môi trường ngoài.", correct: false
                    },
                    {
                        text: "Giúp duy trì nồng độ các chất trong cơ thể ở mức ổn định.", correct: true
                    },
                    {
                        text: "Giúp đào thải các chất độc ra khỏi cơ thể.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L1-002. Việt Nam hiện có khoảng 5 triệu bệnh nhân suy thận. Trong đó, có khoảng 26 000 người suy thận mãn tính giai đoạn cuối. Ngoài ra, mỗi năm có thêm gần 8 000 ca bệnh mắc mới với số người suy thận giai đoạn cuối cần phải chạy thận nhân tạo là khoảng 800 000 người. Khi nói về bệnh suy thận, mỗi phương án dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Suy thận làm ứ đọng các chất thải trong máu.", correct: true
                    },
                    {
                        text: "Tiểu đường là nguyên nhân gây ra bệnh suy thận.", correct: true
                    },
                    {
                        text: "Suy thận là tình trạng suy giảm chức năng thận.", correct: true
                    },
                    {
                        text: "Nếu suy thận nặng phải chạy thận hoặc ghép thận.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L1-003. Các phương án dưới đây là đúng hay sai khi nói về nguyên nhân của bệnh suy thận?",
                image: null,
                statements: [
                    {
                        text: "Suy thận do sỏi thận, phì tuyến tiền liệt.", correct: true
                    },
                    {
                        text: "Suy thận do đái tháo đường, lạm dụng bia rượu.", correct: true
                    },
                    {
                        text: "Suy thận do thức khuya, sinh hoạt không khoa học.", correct: true
                    },
                    {
                        text: "Suy thận do béo phì, mỡ máu cao, lạm dụng thuốc.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L1-004. Việt Nam hiện nằm trong vùng có tỉ lệ mắc bệnh sỏi thận và sỏi tiết niệu cao, hay còn gọi là vùng sỏi thế giới. Tỉ lệ mắc sỏi tiết niệu ở Việt Nam từ 2-12%, trong đó riêng sỏi thận chiếm 40%. Với số liệu này, Việt Nam thuộc nhóm nước có tỉ lệ mắc bệnh sỏi thận cao nhất thế giới. Khi nói về bệnh sỏi thận, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Sỏi thận gây cản trở đường lưu thông nước tiểu, gây ngộ độc, đau đớn.", correct: true
                    },
                    {
                        text: "Sỏi có thể xuất hiện ở thận, bàng quang, niệu quản và niệu đạo.", correct: true
                    },
                    {
                        text: "Sỏi có thể do chất thải trong nước tiểu lắng đọng lâu ngày tạo thành.", correct: true
                    },
                    {
                        text: "Sỏi thận rất dễ dẫn tới nhiễm trùng đường tiết niệu.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L1-005. Mỗi nhận định sau đây là đúng hay sai khi nói về biện pháp bảo vệ thận?",
                image: null,
                statements: [
                    {
                        text: "Phải giữ gìn vệ sinh cơ thể và hệ bài tiết.", correct: true
                    },
                    {
                        text: "Không uống quá nhiều rượu bia.", correct: true
                    },
                    {
                        text: "Không lạm dụng các loại thuốc.", correct: true
                    },
                    {
                        text: "Có chế độ ăn hợp lí và uống đủ nước.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L1-006. Mỗi nhận định sau là đúng hay sai khi nói về vai trò của cầu thận?",
                image: null,
                statements: [
                    {
                        text: "Cấu trúc cầu thận hình cầu, không cho bất kì chất nào đi qua.", correct: false
                    },
                    {
                        text: "Ở cầu thận có hệ thống mao mạch dày đặc, thành mỏng dễ trao đổi chất.", correct: true
                    },
                    {
                        text: "Ở cầu thận có động mạch đến lớn còn động mạch đi nhỏ.", correct: true
                    },
                    {
                        text: "Quá trình lọc ở cầu thận giúp duy trì cân bằng nội môi.", correct: true
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB-BTVCBNM-L2-001. Hình dưới đây mô tả cơ chế điều hòa cân bằng nội môi. Khi nói về sơ đồ này, phát biểu nào Đúng, phát biểu nào Sai?",
                image: "https://nhantri.top/media/Grade11/ccdhcbnm.png",
                statements: [
                    {
                        text: "Quá trình điều khiển được điều khiển bởi trung ương thần kinh hoặc tuyến nội tiết.", correct: true
                    },
                    {
                        text: "(1) là bộ phận điều khiển, (2) là bộ phận tiếp nhận, (3) là bộ phận thực hiện.", correct: false
                    },
                    {
                        text: "Tín hiệu được truyền từ(2) truyền đến(3) dưới dạng xung thần kinh.", correct: true
                    },
                    {
                        text: "(5) là quá trình đáp ứng ngược đến bộ phận tiếp nhận kích thích.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-002. Mỗi nhận định dưới đây là đúng hay sai khi nói về quá trình điều hòa áp suất thẩm thấu ở thận?",

                statements: [
                    {
                        text: "Hormone ADH do vùng dưới đồi sản xuất và được dự trữ ở tuyến yên.", correct: true
                    },
                    {
                        text: "Khi áp suất thẩm thấu của máu tăng, kích thích trung khu điều hòa trao đổi nước gây ra cảm giác khát.", correct: true
                    },
                    {
                        text: "Khi áp suất thẩm thấu của máu tăng, thận tăng cường tái hấp thu nước giúp cân bằng áp suất thẩm thấu.", correct: true
                    },
                    {
                        text: "Khi áp suất thẩm thấu trong máu tăng, ADH tác động lên thận làm tăng đào thải nước ra khỏi máu.", correct: false
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-003. Khi nói về cơ chế điều hòa lượng đường trong máu, các phát biểu dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Trong sự điều hòa nồng độ glucose trong máu có sự tham gia của hormone insulin và glucagon do gan tiết ra.", correct: false
                    },
                    {
                        text: "Khi lượng glucose trong máu tăng cao, phần glucose thừa sẽ được chuyển hóa thành lipid dự trữ trong các mô mỡ.", correct: true
                    },
                    {
                        text: "Gan là cơ quan chủ yếu tham gia điều hòa lượng đường trong máu, qua đó duy trì áp suất thẩm thấu của máu.", correct: true
                    },
                    {
                        text: "Hormone insulin làm giảm lượng đường trong máu, hormone glucagon làm tăng lượng đường trong máu.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-004. Lượng đường trong máu của một người mắc bệnh đái tháo đường và một người không mắc bệnh có cùng khối lượng cơ thể được theo dõi trong khoảng thời gian 12 giờ. Cả hai người đều ăn một bữa giống hệt nhau và thực hiện 1 giờ tập thể dục với cường độ giống nhau. Sử dụng dữ liệu được cung cấp, hãy cho biết các nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/btieuduong.png",
                statements: [
                    {
                        text: "A là người bệnh, B là người bình thường.", correct: false
                    },
                    {
                        text: "Hormone X là insulin.", correct: true
                    },
                    {
                        text: "Thời điểm W, cả A và B đều dùng bữa, lượng đường trong máu tăng đột biến ở cả hai người.Thời điểm Y, cả A và B đều bắt đầu tập thể dục nên lượng đường trong mãu giảm.", correct: true
                    },
                    {
                        text: "Hormone mà người B có thể đã nhận được vào thời điểm Z là glucagon.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-005. Mỗi nhận định dưới đây là đúng hay sai khi nói về mục đích của việc xét nghiệm sinh hóa máu?",

                statements: [
                    {
                        text: "Xét nghiệm có thể đưa ra những cảnh báo, tư vấn sớm về sức khỏe.", correct: true
                    },
                    {
                        text: "Xét nghiệm có thể đánh giá hoạt động của các cơ quan.", correct: true
                    },
                    {
                        text: "Xét nghiệm có thể kiểm tra các bệnh lí của cơ thể.", correct: true
                    },
                    {
                        text: "Xét nghiệm có thể phát hiện sớm tình trạng mất cân bằng nội môi.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-006. Hình dưới là sơ đồ của nephron từ thận của ba loài động vật có vú khác nhau, mỗi nhận định sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "D là quai Henle.", correct: true
                    },
                    {
                        text: "Loài X sống trong nước, do vậy không phải đối phó với tình trạng thiếu nước.Quai Henle ngắn nên khả năng cô đặc nước tiểu giảm, nước tiểu thải ra nhiều.", correct: false
                    },
                    {
                        text: "Loài Y sống trên cạn nên có quai Henle ngắn hơn Z và dài hơn Y.", correct: true
                    },
                    {
                        text: "Loài Z sống ở sa mạc, nơi khan hiếm nước, có quai Henle rất dài, giúp tăng hiệu quả hấp thụ nước, nước tiểu thải ra ít và cô đặc.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-007. Lạc đà có thể sống được ở sa mạc, mỗi nhận định sau là đúng hay sai khi nói về đặc điểm giúp lạc đà có thể thích nghi?",

                statements: [
                    {
                        text: "Mỗi lần lạc đà có thể uống được một lượng nước rất lớn.", correct: true
                    },
                    {
                        text: "Lạc đà thường ăn các loại thức ăn tươi, giàu dinh dưỡng, chứa nhiều nước.", correct: false
                    },
                    {
                        text: "Quai Henle và ống góp trong thận lạc đà dài hơn rất nhiều so với ở các loài động vật có vú khác.", correct: true
                    },
                    {
                        text: "Sự hấp thụ nước từ ống tiêu hóa diễn ra rất nhanh giúp hấp thu nước cung cấp cho cơ thể.", correct: false
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-008. Khi nói về hệ thống điều hòa cân bằng nội môi, mỗi ý sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Khi áp suất thẩm thấu của máu tăng, vùng dưới đồi kích thích giảm tiết nước bọt.", correct: true
                    },
                    {
                        text: "Renin do thận tiết ra trực tiếp gây co mạch đến thận, làm giảm áp lực lọc máu ở thận.", correct: false
                    },
                    {
                        text: "ADH do tuyến yên tiết ra có tác dụng kích thích ống lượng xa và ống góp tái hấp thu nước.", correct: false
                    },
                    {
                        text: "Andosteron do tuyến thượng thận tiết ra làm tăng tái hấp thu Na+ kèm theo nước ở ống lượn xa và ống góp.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L2-009. Mỗi nhận định sau là đúng hay sai khi nói về cơ chế giúp điều hòa ổn định nội môi khi cơ thể bị nôn nhiều?",

                statements: [
                    {
                        text: "Gây co các mạch máu đến thận để giảm bài xuất nước.", correct: true
                    },
                    {
                        text: "Tuyến yên tăng cường tiết andosteron và ADH.", correct: true
                    },
                    {
                        text: "Hệ hô hấp giúp duy trì ổn định độ pH bằng cách làm giảm nhịp hô hấp.", correct: true
                    },
                    {
                        text: "Hệ tuần hoàn giúp duy trì huyết áp qua tăng cường hoạt động của tim và huy động máu từ các cơ quan dự trữ.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-BTVCBNM-L3-001. Mỗi nhận định dưới đây là đúng hay sai khi nói về cân bằng nội môi?",
                image: null,
                statements: [
                    {
                        text: "Khi các giá trị nội môi được cân bằng thì bộ phận tiếp nhận kích thích sẽ không còn nhận được tín hiệu nào khác nữa.", correct: false
                    },
                    {
                        text: "Khi một bộ phận của hệ thống điều hòa cân bằng nội môi hoạt động không bình thường sẽ sinh ra các bệnh lí khác nhau.", correct: true
                    },
                    {
                        text: "Cân bằng nội môi là trạng thái cân bằng tĩnh vì các chỉ số luôn không đổi.", correct: false
                    },
                    {
                        text: "Ở người khi nhịn thở thì pH máu sẽ giảm và nhịp tim sẽ tăng.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-002. Hình dưới đây mô tả quá trình điều hòa áp suất thẩm thấu của thận. Khi nói về quá trình này, mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/ccdhastt.png",
                statements: [
                    {
                        text: "(B) là hormone ADH được tiết bởi tuyến tụy(A).", correct: false
                    },
                    {
                        text: "(C) là sự tăng thải nước ở ống thận và ống góp.", correct: false
                    },
                    {
                        text: "Thận tham gia điều hòa áp suất thẩm thấu bằng cách tăng thải hoặc hấp thụ nước.", correct: true
                    },
                    {
                        text: "Khi áp suất thẩm thấu máu tăng, trung khu điều hòa trao đổi nước gây cảm giác khát.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-003. Glucose là nguồn năng lượng chính của các tế bào, được sản sinh ra từ những loại thực phẩm mà chúng ta tiêu thụ mỗi ngày. Tình trạng thiếu hụt hay dư thừa glucose đều có thể gây ra nhưng vấn đề gây ảnh hưởng nghiêm trọng đến sức khỏe. Chỉ số glucose trong máu hay còn gọi là chỉ số đường huyết. Hàm lượng đường trong máu được xác định thông qua xét nghiệm lượng glucose có trong máu thông qua xét nghiệm trước và sau bữa ăn. Bữa ăn được tính bắt đầu từ thời điểm 0, các nhà khoa học đã lập được đồ thị theo dõi lượng đường glucose máu và các loại hormone được biểu diễn trong hình dưới đây. Mỗi nhận định về kết quả thu được là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/dieuhoaglumau.png",
                statements: [
                    {
                        text: "Đường I biểu diễn đồ thị xét nghiệm khi ăn bữa ăn giàu carbohydrate và đường II biểu diễn đồ thị xét nghiệm khi ăn bữa ăn giàu protein.", correct: true
                    },
                    {
                        text: "Hormone A là glucagon, hormone B là insulin.", correct: false
                    },
                    {
                        text: "Tại thời điểm phút 60 sau khi ăn, nồng độ hormone A và B đều tăng ở đường II vì glucagon được tiết ra để đáp ứng nhu cầu năng lượng của cơ quan khác.", correct: true
                    },
                    {
                        text: "Ở trường hợp I, nồng độ hormone B tỉ lệ nghịch với nồng độ glucose trong máu.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-004. Bệnh đái tháo đường hay còn gọi là tiểu đường là bệnh rối loạn chuyển hóa đặc trưng với biểu hiện lượng đường ở trong máu luôn ở mức cao hơn so với bình thường. Bệnh sẽ kéo theo hàng loạt bệnh lí khác nhau và là một trong những bệnh lí phổ biến ở Việt Nam. Khi nói về bệnh tiểu đường, mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/dieuhoaglumau.png",
                statements: [
                    {
                        text: "Bệnh tiểu đường là bệnh lâu năm có thể dẫn đến suy thận.", correct: true
                    },
                    {
                        text: "Tiểu đường có thể gây cao huyết áp, xơ vữa động mạch.", correct: true
                    },
                    {
                        text: "Bệnh tiểu đường do hormone insulin được tiết ra quá nhiều.", correct: false
                    },
                    {
                        text: "Người bệnh tiểu đường khó phẫu thuật do vết thương lâu lành.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-005. Hormone ADH của thùy sau tuyến yên và hệ RAA (hệ thống Renin-Angiotensin-Aldosterone) có vai trò trong điều hòa cân bằng điện giải, thể tích máu và huyết áp, có vai trò quan trọng trong điều hòa cân bằng nước và muối của cơ thể. Hình dưới đây thể hiện nồng độ ADH, renin và aldosterone trong máu ở người bình thường (BT) và trong một số trạng thái sinh lí khác nhau ở 4 người A, B, C, D. Cho biết. (1) Hormone ADH hay hormone chống bài niệu được sản xuất ở vùng dưới đồi và được dự trữ ở thùy sau tuyến yên. Hormone ADH điều khiển lượng nước được tái hấp thu ở gan. (2) Renin là một loại hormone quan trọng đảm nhận vai trò kiểm soát huyết áp trong cơ thể. (3) Hormone aldosterone là một trong những loại hormone được sản xuất tại tuyến thượng thận, giữ chức năng duy trì nồng độ sodium và postasium trong máu ở mức độ bình thường nhằm tạo nên sự cân bằng về thể tích máu cũng như huyết áp động mạch. Các nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/hormonetietnieu.png",
                statements: [
                    {
                        text: "Người B là người thường xuyên uống nhiều rượu.", correct: true
                    },
                    {
                        text: "Người C là trẻ đi tháo(ỉa chảy).", correct: true
                    },
                    {
                        text: "Người A là người lao động nặng ngoài trời liên tục.", correct: true
                    },
                    {
                        text: "Người D là bệnh nhân có khối u ở vỏ tuyến thượng thận.", correct: false
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-006. Trong thí nghiệm về chức năng thận, các học sinh được chia thành hai nhóm A và B. Trước thời điểm thí nghiệm khoảng 1 giờ, một nhóm học sinh được uống một lượng nước như nhau, trong khi nhóm còn lại uống ít hơn một phần ba lượng nước so với nhóm kia. Tại thời điểm bắt đầu thí nghiệm (t = 0 phút), các học sinh ở cả hai nhóm đều uống 500 ml nước. Số liệu đo được thể hiện ở hình dưới đây. Biết rằng, hormone aldosterone là một trong những loại hormone được sản xuất tại tuyến thượng thận, giữ chức năng duy trì nồng độ sodium và potasium trong máu ở mức độ bình thường nhằm tạo nên sự cân bằng về thể tích máu cũng như huyết áp động mạch. Các nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/cnthan.png",
                statements: [
                    {
                        text: "Nồng độ aldosteron trong máu hai nhóm học sinh cao nhất ở thời điểm t = 0.", correct: true
                    },
                    {
                        text: "Nhóm A đã uống nhiều nước hơn trước thời điểm thí nghiệm.", correct: false
                    },
                    {
                        text: "Nồng độ aldosterone tỉ lệ nghịch với thể tích của máu.", correct: true
                    },
                    {
                        text: "Từ thời điểm t = 0 đến t = 80, nồng độ Chlor trong máu của nhóm A luôn cao hơn nhóm B.", correct: true
                    }
                ]
            },
            {
                question: "DB-BTVCBNM-L3-007. Khi bệnh nhân được tiêm hormone tuyến cận giáp (PTH: Para Thyroid Hormone) làm một số chỉ số hóa sinh của máu bị thay đổi trong đó tiêu biểu nhất là nồng độ hai ion A và B (mmol/L) như được thể hiện ở biểu đồ dưới đây. Các nhận định là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/pth.png",
                statements: [
                    {
                        text: "A là ion calcium, B là phosphate vì PTH làm tăng nồng độ calcium máu, đồng thời làm tăng sự thải ion phosphate ở thận.", correct: true
                    },
                    {
                        text: "Người có chế độ ăn giàu vitamin D liên tục trong thời gian dài có nồng độ PTH trong máu giảm.", correct: true
                    },
                    {
                        text: "Giai đoạn sớm, bệnh nhân không biểu hiện triệu chứng lâm sàng, chỉ khi xét nghiệm máu mới cho thấy tăng PTH và calcium.", correct: true
                    },
                    {
                        text: "Nồng độ calcium, PTH máu cao trong thời gian dài sẽ gây tổn thương lên nhiều cơ quan khác nhau.Tổn thương thận lâu ngày dẫn tới viêm thận, suy thận.Xương bị tiêu dần gây gãy xương bệnh lí, mất vận động.", correct: true
                    }
                ]
            },
        ]
    },

    tfKQCUOSV: {
        level1: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "...", correct: true
                    },
                    {
                        text: "...", correct: false
                    },
                    {
                        text: "...", correct: true
                    },
                    { text: "...", correct: true }
                ]
            },

        ],
        level2: [
            {
                question: "DB-KQVCUOSV-L2-001. Cảm ứng ở sinh vật là khả năng phản ứng với các kích thích từ môi trường để thích nghi và tồn tại. Ở động vật, cảm ứng diễn ra qua hệ thần kinh và hormone, giúp phản xạ nhanh hoặc điều chỉnh sinh lý. Ở thực vật, cảm ứng thể hiện qua hướng động (cây mọc về phía sáng) và ứng động (cây trinh nữ khép lá khi chạm vào). Cơ chế này giúp sinh vật sinh tồn, tìm thức ăn, tránh nguy hiểm và duy trì cân bằng nội môi. Mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Cảm ứng là sự tiếp nhận và phản ứng của sinh vật đối với những thay đổi của môi trường(trong và ngoài), đảm bảo cho sinh vật thích ứng với môi trường sống.", correct: true
                    },
                    {
                        text: "Cảm ứng của thực vật thường diễn ra nhanh, dễ nhận thấy.", correct: false
                    },
                    {
                        text: "Cảm ứng ở động vật diễn ra với tốc độ nhanh và đa dạng.", correct: true
                    },
                    {
                        text: "Mức độ, tính chính xác, hình thức cảm ứng ở động vật thay đổi tuỳ thuộc vào thụ thể tiếp nhận kích thích.", correct: false }
                ]
            },
        ],
        level3: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "Allele A và A1 có thể có số lượng nucleotide bằng nhau hoặc hơn kém nhau một nucleotide.", correct: true
                    },
                    {
                        text: "Nếu phân tử protein do allele A1 mã hóa có chức năng bị thay đổi thì có thể mang allele A1 là thể đột biến.", correct: true
                    },
                    {
                        text: "Nếu allele A và A1 có số nucleotide bằng nhau thì chuỗi polypeptide do hai allele này mã hóa có thể có số amino acid khác nhau.", correct: true
                    },
                    { text: "Nếu allele A1 là gene trội so với allele A thì thể đột biến có kiểu gene AA.", correct: false }
                ]
            },
        ]
    },
    tfCUOTV: {
        level1: [
            {
                question: "DB-CUOTV-L1-001. Vận động cảm ứng ở sinh vật gồm ba hình thức chính: hướng động, ứng động, và phản xạ. Hướng động là sự sinh trưởng theo hướng tác nhân kích thích, như rễ cây mọc xuống đất theo hướng trọng lực hay thân cây vươn về phía ánh sáng. Ứng động là phản ứng không định hướng, như cây trinh nữ khép lá khi bị chạm vào hoặc hoa tulip nở khi nhiệt độ tăng. Ở động vật, phản xạ là phản ứng nhanh qua hệ thần kinh, giúp cơ thể đáp ứng kịp thời với các kích thích từ môi trường, đảm bảo sinh tồn. Mỗi nhận định sau đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Cảm ứng làm cho thực vật khó tận dụng tối đa nguồn sống như nước, ánh sáng, dinh dưỡng khoáng.", correct: false
                    },
                    {
                        text: "Cảm ứng giúp thực vật tự vệ khi gặp kích thích thích bất lợi.", correct: true
                    },
                    {
                        text: "Cảm ứng ở thực vật thường diễn ra nhanh và khó nhận biết bằng mắt thường trong thời gian ngắn.", correct: false
                    },
                    {
                        text: "Cảm ứng giúp thực vật thích ứng tốt hơn với những biến đổi thường xuyên của môi trường sống, tạo điều kiện cho cây sinh trưởng và phát triển bình thường.", correct: true
                    }
                ]
            },
            {
                question: "DB-CUOTV-L1-002. Tính hướng hóa ở thực vật là phản ứng sinh trưởng của cây trước tác nhân hóa học trong môi trường. Rễ cây thường có hướng hóa dương, mọc về phía nguồn dinh dưỡng hoặc nước có ion khoáng. Ngược lại, một số rễ có thể hướng hóa âm, tránh xa chất độc hại. Cơ chế này giúp cây tối ưu hóa việc hấp thụ chất dinh dưỡng, thích nghi với môi trường sống. Mỗi phát biểu sau đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Hướng hóa là phản ứng sinh trưởng của cây đối với các chất hóa học.", correct: true
                    },
                    {
                        text: "Tác nhân kích thích gây hướng hóa có thể là acid, kiềm, muối khoáng.", correct: true
                    },
                    {
                        text: "Hướng hóa âm là khi cơ quan của cây sinh trưởng hướng tới nguồn hóa chất.", correct: false
                    },
                    {
                        text: "Hướng hóa dương khi phản ứng sinh trưởng của cây tránh xa hóa chất.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-CUOTV-L2-001. Khi nói đến tính hướng trọng lực ở thực vật: Tính trọng lực ở thực vật là khả năng phản ứng sinh trưởng theo hướng của trọng lực, còn gọi là hướng trọng lực. Rễ cây có hướng trọng lực dương, mọc xuống đất để hút nước và khoáng, trong khi thân và cành có hướng trọng lực âm, mọc lên trên để tiếp nhận ánh sáng. Cơ chế này do auxin phân bố không đều, làm tế bào ở mặt dưới sinh trưởng chậm hơn ở rễ nhưng nhanh hơn ở thân, giúp cây thích nghi với môi trường. Mỗi phát biểu sau đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Hướng trọng lực là phản ứng của cây đối với trọng lực.", correct: true
                    },
                    {
                        text: "Đỉnh rễ hướng trọng lực dương, đỉnh thân hướng trọng lực âm.", correct: true
                    },
                    {
                        text: "Rễ cây hướng trọng lực dương, đâm sâu xuống đất giúp cây đứng vững.", correct: true
                    },
                    {
                        text: "Tế bào rễ cây mặt sáng ít auxin hơn tế bào mặt tối của rễ, mà nồng độ auxin tế bào rễ cao làm ức chế, nên tế bào phía tối sinh trưởng kéo dài tế bào nhanh hơn phía sáng.", correct: false }
                ]
            },
        ],
        level3: [
            {
                question: "DB-CUOTV-L3-001. Người ta tiến hành một thí nghiệm như sau: <br/>Cây mầm 1: chiếu sáng từ một phía lên bao lá mầm. <br/>Cây mầm 2: cắt bỏ đỉnh ngọn, rồi chiếu sáng từ một phía. <br/>Cây mầm 3: che tối phần bao lá mầm, chiếu sáng từ một phía. <br/>Sau đó, để các cây sinh trưởng bình thường và quan sát hiện tượng. Mỗi nhận định sau đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Cây 1 ngọn cây cong về phía ánh sáng do tính hướng sáng.", correct: true
                    },
                    {
                        text: "Cây 2 ngọn cây vẫn mọc thẳng.", correct: true
                    },
                    {
                        text: "Cây 3 ngọn cây cong về phía ánh sáng do tính hướng sáng.", correct: false
                    },
                    {
                        text: "Đỉnh ngọn là nơi tiếp nhận kích thích ánh sáng gây phản ứng hướng sáng ở ngọn cây.", correct: true }
                ]
            },
        ]
    },
    tfCUODV: {
        level1: [
            {
                question: "DB-CUOĐV-L1-001. Hình sau mô tả quá trình truyền tin qua synapse thần kinh, mỗi nhận định sau đây là đúng hay sai về hình này?",
                image: "https://nhantri.top/media/Grade11/cacbuocttqsn.png",
                statements: [
                    {
                        text: "Giai đoạn (1) là giai đoạn ion Ca<sub>2</sub><sup>+</sup> đi qua kênh protein vào phần hậu synapse.", correct: false
                    },
                    {
                        text: "Số (2) là mô tả các túi synapse có chất trung gian hóa học có thể là acetylcholin.", correct: true
                    },
                    {
                        text: "Giai đoạn (3) mô tả chất trung gian hóa học được phóng thích qua khe synapse.", correct: true
                    },
                    {
                        text: "Giai đoạn (4) nếu không xảy ra thì tín hiệu thần kinh không thể truyền từ neuron này qua neuron khác.", correct: true
                    }
                ]
            },
            {
                question: "DB-CUOĐV-L1-002. Người ta làm thí nghiệm nuôi các chim non trong một vùng rộng lớn mà không có chim bố mẹ. Đến khi trưởng thành, các chim con cũng tha rác và cỏ về một chỗ nhưng chúng không làm được tổ. Mỗi phát biểu sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Sự chăm sóc của con người đã làm mất bản năng làm tổ ở chim.", correct: false
                    },
                    {
                        text: "Tập tính làm tổ được hình thành qua quá trình học tập.", correct: false
                    },
                    {
                        text: "Tập tính làm tổ vừa mang tính bẩm sinh, vừa phải học tập.", correct: true
                    },
                    {
                        text: "Chỉ những cá thể đã qua sinh sản mới biết làm tổ.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-CUOĐV-L2-001. Khi bị kim châm vào ngón tay, ngón tay sẽ co lại. Hiện tượng này được mô tả là một cung phản xạ tự vệ, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Bộ phận tiếp nhận là các tế bào thụ quan ở cơ.", correct: false
                    },
                    {
                        text: "Sợi cảm giác truyền từ bộ phận thụ quan đến các da ở ngón tay.", correct: false
                    },
                    {
                        text: "Bộ phận xử lí thông tin và quyết định hình thức và mức độ phản ứng là trung ương thần kinh, tủy sống.", correct: true
                    },
                    {
                        text: "Sợi vận động truyền từ tủy sống đến các cơ ở ngón tay.", correct: true
                    }
                ]
            },
            {
                question: "DB-CUOĐV-L2-002. Khi nói về tập tính sinh sản: Tập tính sinh sản là những hành vi giúp sinh vật tìm bạn đời, giao phối, bảo vệ trứng hoặc con non để duy trì nòi giống. Ở động vật, tập tính này có thể bao gồm ve vãn, xây tổ, chăm sóc con non hoặc di cư theo mùa để sinh sản. Ví dụ, chim công xòe đuôi thu hút bạn tình, cá hồi bơi ngược dòng đẻ trứng, hay sư tử bảo vệ con non khỏi kẻ săn mồi. Những tập tính này giúp tăng khả năng sống sót của thế hệ sau. Phát biểu nào sau đây đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Phần lớn là tập tính này là bẩm sinh, mang tính bản năng.", correct: true
                    },
                    {
                        text: "Tập tính này thường thể hiện dưới dạng một phản xạ.", correct: false
                    },
                    {
                        text: "Phản xạ khởi đầu là do kích thích của môi trường bên ngoài: thời tiết, ánh sáng, âm thanh, ...tác động vào các giác quan.", correct: true
                    },
                    {
                        text: "Phản xạ khởi đầu là do tác động của các hormone sinh dục gây nên hiện tượng chín sinh dục và chuẩn bị cho sự sinh sản.", correct: true
                    }
                ]
            },
            {
                question: "DB-CUOĐV-L2-003. Giẻ cùi lam <em>(Cyanocitta cristata)</em> là một loài chim thuộc họ quạ, là loài bản địa của Bắc Mỹ. Chúng sống ở khắp miền Đông và Trung Hoa Kỳ và miền Nam Canada, những cá thể sống ở miền Tây có thể di cư. Loài này sinh sản trong các khu rừng rụng lá và rừng tùng bách, và thường gần các khu dân cư. Loài này thường nôn mửa ngay lập tức sau khi ăn phải các con bướm chúa có màu sắc rực rỡ. Sau những kinh nghiệm như vậy, giẻ cùi lam tránh tấn công bướm chúa và những con đom đóm trông tương tự với bướm. Mỗi nhận định sau là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Hình thức học tập quen nhờn ở động vật đã được mô tả trong ví dụ trên.", correct: false
                    },
                    {
                        text: "Có sự liên kết giữa thị giác, vị giác trong hình thức học tập này ở chim giẻ cùi lam.", correct: false
                    },
                    {
                        text: "Hành vi này ở động vật gọi là tập tính in vết.", correct: false
                    },
                    {
                        text: "Hình thức học tập này chỉ có ở động vật có hệ thần kinh phát triển.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-CUOĐV-L3-001. Hình ảnh mô tả hệ cung phản xạ của người khi tay chạm vào cây xương rồng, mỗi mệnh đề sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/chamgaixr.png",
                statements: [
                    {
                        text: "Các số lần lượt là (1) Thụ quan đau ở da; (2) neuron cảm giác, (3) tủy sống, (4) neuron vận động.", correct: true
                    },
                    {
                        text: "Hệ thần kinh trung ương là não bộ, và các dây thần kinh là nơi xử lí thông tin, đưa ra quyết định trả lời kích thích, lưu giữ thông tin.", correct: false
                    },
                    {
                        text: "Hiện tượng co rút tay lại là phản xạ không điều kiện.", correct: true
                    },
                    {
                        text: "Tín hiệu thần kinh được dẫn truyền từ dây thân kinh ngoại biên đến cơ vân bằng synapse nhờ đó tay mới co rút lại.", correct: true
                    }
                ]
            },
            {
                question: "DB-CUOĐV-L3-002. Sự phân loại theo hình thức học tập của động vật ở các nhận định dưới đây là đúng hay sai?",
                
                statements: [
                    {
                        text: "Quen nhờn là hình thức học tập đơn giản nhất, thường gặp ở động vật có hệ thần kinh chưa phát triển.", correct: true
                    },
                    {
                        text: "In vết là hình thức học tập chỉ xảy ra ở động vật có vú trong giai đoạn trưởng thành.", correct: false
                    },
                    {
                        text: "Một con cá vàng thường không phản ứng khi có tiếng gõ vào thành bể.Sau một thời gian được cho ăn mỗi lần kèm theo tiếng gõ, cá bắt đầu bơi lên mặt nước ngay khi nghe tiếng gõ, dù chưa thấy thức ăn.Trong tình huống này, con cá vàng có hình thức học tập theo kiểu điều kiện hoá đáp ứng.", correct: true
                    },
                    {
                        text: "Một con khỉ con quan sát khỉ mẹ sử dụng đá để đập vỡ quả cứng lấy hạt ăn.Sau vài lần, khỉ con bắt chước hành vi tương tự để lấy thức ăn.Trong tình huống này, khỉ con có hình thức học tập theo kiểu thử sai.", correct: false
                    }
                ]
            },
        ]
    },
    tfKQSTVPT: {
        level1: [
            {
                question: "DB-KQSTVPTOSV-L1-001. Phát biểu về sự sinh trưởng ở cây cam, mỗi nhận định dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Từ hạt nảy mầm biến đổi thành cây con.", correct: true
                    },
                    {
                        text: "Từ một quả cam thành hai quả cam.", correct: false
                    },
                    {
                        text: "Từ một cây con ban đầu thành cây trưởng thành.", correct: true
                    },
                    {
                        text: "Từ hạt thành hạt nảy mầm.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-KQSTVPTOSV-L2-001. Hình ảnh mô tả hai loài thực vật, mỗi nhận định sau là đúng hay sai khi nói về sự sinh trưởng của hai loài này?",
                image: "https://nhantri.top/media/Grade11/trego.png",
                statements: [
                    {
                        text: "Cây 1 là cây một lá mầm có sinh trưởng thứ cấp.", correct: false
                    },
                    {
                        text: "Cây 2 là cây hai lá mầm vừa sinh trưởng thứ cấp, vừa có sinh trưởng sơ cấp.", correct: true
                    },
                    {
                        text: "Sinh trưởng thứ cấp ở cây 2 tham gia vào quá trình tạo ra mạch rây và mạch gỗ.", correct: false
                    },
                    {
                        text: "Cây 2 có ba loại mô phân sinh đỉnh gồm: chồi ngọn, chồi bên và rễ.", correct: true
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-KQSTVPTOSV-L3-001. Khi nói về sinh trưởng và phát triển của cây rừng: Sinh trưởng và phát triển của cây rừng là quá trình cây tăng kích thước, phân hóa mô và hoàn thiện cơ quan để thích nghi với môi trường. Sinh trưởng gồm sinh trưởng sơ cấp (tăng chiều dài nhờ mô phân sinh đỉnh) và sinh trưởng thứ cấp (tăng đường kính nhờ mô phân sinh bên). Phát triển gồm các giai đoạn từ nảy mầm, sinh trưởng, ra hoa, tạo quả đến lão hóa. Yếu tố ảnh hưởng đến quá trình này gồm ánh sáng, nước, dinh dưỡng, nhiệt độ và các chất điều hòa sinh trưởng. Mỗi phát biểu nào sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Sinh trưởng thường diễn ra vào ban ngày, phát triển thường diễn ra vào ban đêm.", correct: false
                    },
                    {
                        text: "Phát triển diễn ra chủ yếu ở giai đoạn cây còn non.", correct: false
                    },
                    {
                        text: "Sinh trưởng tích luỹ vật chất làm điều kiện để cây phát triển.", correct: true
                    },
                    {
                        text: "Phát triển là những biểu hiện cụ thể của quá trình sinh trưởng.", correct: false
                    }
                ]
            },
        ]
    },
    tfSTPTOTV: {
        level1: [
            {
                question: "DB-STVPTOTV-L1-001. Hình dưới mô tả sinh trưởng sơ cấp của cây thân gỗ. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/ssscthango.png",
                statements: [
                    {
                        text: "(1) là biểu bì, (2) là vỏ.", correct: true
                    },
                    {
                        text: "(3) là mạch gỗ sơ cấp.", correct: false
                    },
                    {
                        text: "(5) là lõi.", correct: true
                    },
                    {
                        text: "(4) là mạch rây sơ cấp.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-STVPTOTV-L2-001. Hình ảnh mô tả cấu tạo hóa học của gibberillin (GA), khi nói về GA mỗi nhận định sau đây đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/gibberellin.png",
                statements: [
                    {
                        text: "Tác dụng kích thích hay kìm hãm không phụ thuộc vào nồng độ.", correct: false
                    },
                    {
                        text: "Kích thích sinh trưởng theo chiều dài.", correct: true
                    },
                    {
                        text: "Là một trong hai thành phần của hormone ra hoa - florigen.", correct: true
                    },
                    {
                        text: "Trong phân tử có chứa nguyên tố nitrogen.", correct: false
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-STVPTOTV-L3-001. Để nghiên cứu ảnh hưởng của hormone thực vật ảnh hưởng đến sự hình thành chồi ở mô sẹo trong nuôi cấy mô thực vật, người ta tiến hành nuôi mẫu cấy ống số (1) trên môi trường thạch dinh dưỡng có bổ sung hormone auxin và cytokinin, các ống nghiệm (2), (3), (4), (5) lần lượt là các kết quả khác nhau khi thay đổi hàm lượng giữa hai hormone auxin và cytokinin, mỗi nhận định sau đây là đúng hay sai khi nói về thí nghiệm này?",
                image: "https://nhantri.top/media/Grade11/ncmtebao.png",
                statements: [
                    {
                        text: "Ở ống (2) tỉ lệ auxin lớn hơn cytokinin dẫn đến xuất hiện mô sẹo.", correct: true
                    },
                    {
                        text: "Ở ống (3) cytokinin có lệ cao hơn auxin làm kích thích sự phát triển của rễ.", correct: true
                    },
                    {
                        text: "Ở ống (4) auxin có tỉ lệ cao hơn cytokinin kích thích sự phát triển của chồi bên và tạo sự phân hóa chồi.", correct: false
                    },
                    {
                        text: "Ở ống (5) không có mặt auxin và có một lượng nhỏ cytokinin dẫn đến không sinh trưởng.", correct: true
                    }
                ]
            },
            {
                question: "DB-STVPTOTV-L3-002. Xác định tính đúng, sai của các phát biểu dưới đây về sinh trưởng và phát triển ở thực vật.",
                
                statements: [
                    {
                        text: "Sinh trưởng của thực vật là quá trình tăng về kích thước, khối lượng cơ thể do tăng số lượng và kích thước tế bào.", correct: true
                    },
                    {
                        text: "Phát triển ở thực vật chỉ xảy ra khi có sự phân hóa tế bào và không liên quan đến sinh trưởng.", correct: false
                    },
                    {
                        text: "Một người trồng cây cảnh cắt ngọn cây dâm bụt để tạo dáng thấp và tán xòe rộng.Sau một thời gian, từ các nách lá mọc ra nhiều chồi bên phát triển thành cành mới.Hiện tượng này phản ánh: việc cắt ngọn kích thích mô phân sinh bên ở chồi nách hoạt động, tạo ra cành mới.", correct: true
                    },
                    {
                        text: "Một nông dân trồng hoa cúc quanh năm để bán.Vào mùa hè, ông sử dụng lưới đen che bớt ánh sáng mỗi ngày để hoa ra đúng dịp lễ.Hiện tượng này liên quan đến: quang chu kỳ – dùng tương quan độ dài thời gian chiếu sáng và trong tối để điều khiển thời gian ra hoa.", correct: true
                    }
                ]
            },
        ]
    },

    tfSTPTDV: {
        level1: [
            {
                question: "DB-STVPTOĐV-L1-001. Hình trên minh họa sơ đồ phát triển ở châu chấu, mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/vdchauchau.png",
                statements: [
                    {
                        text: "Vòng đời của châu chấu là biến thái hoàn toàn.", correct: false
                    },
                    {
                        text: "Đây là kiểu phát triển gặp ở đa số các loài côn trùng như: châu chấu, cào cào, gián, tôm, ...", correct: true
                    },
                    {
                        text: "Sự khác biệt về cấu tạo và hình thái của ấu trùng giữa các lần lột xác kế tiếp nhau là không lớn.", correct: true
                    },
                    {
                        text: "Ấu trùng và châu chấu trưởng thành, trong ống tiêu hóa có đầy đủ các enzyme tiêu hóa protein, lipid, carbohydrate nhưng thức ăn của chúng lại không giống nhau.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-STVPTOĐV-L2-001. Thiếu acid folic (vitamin B9) gây ảnh hưởng đến con người như sau: Acid folic (vitamin B9) rất quan trọng đối với con người, đặc biệt trong quá trình tạo máu, tổng hợp DNA và phát triển hệ thần kinh. Thiếu hụt có thể gây thiếu máu hồng cầu khổng lồ, mệt mỏi, giảm trí nhớ, đặc biệt nguy hiểm với phụ nữ mang thai vì có thể gây dị tật ống thần kinh ở thai nhi. Ngược lại, dư thừa có thể che giấu triệu chứng thiếu vitamin B12, gây tổn thương thần kinh. Mỗi nhận định sau là đúng hay sai?",

                statements: [
                    {
                        text: "Tăng nguy cơ xảy thai.", correct: false
                    },
                    {
                        text: "Tăng nguy cơ mắc dị tật bẩm sinh liên quan đến tim mạch.", correct: false
                    },
                    {
                        text: "Tăng nguy cơ khuyết tật về ống thần kinh, nứt đốt sống, thiếu máu não.", correct: true
                    },
                    {
                        text: "Tăng nguy cơ mắc dị tật bẩm sinh liên quan đến não và tủy sống của thai nhi.", correct: true
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-STVPTOĐV-L3-001. Hai đồ thị sau đây mô tả sự biến động các hormone sinh dục ở trong máu của 2 người phụ nữ trưởng thành không bị mắc các bệnh về nội tiết (người A và người B). Hãy cho biết mỗi nhận định sau đây đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/hormonethaiki.png",
                statements: [
                    {
                        text: "Đường (I) hormone estrogen, Đường (II) hormone progesterone.", correct: true
                    },
                    {
                        text: "Ở người A nồng độ 2 hormone tăng lên cao từ đầu cho đến đến cuối chu kì rụng trứng. Nguyên nhân là do uống thuốc tránh thai có chứa hormone estrogen và progesterone (loại 1 viên khẩn cấp).", correct: false
                    },
                    {
                        text: "Người B: là người mang thai nên nồng độ hai hormone estrogen và progesterone tăng dần từ đầu thai kì và đạt nồng độ cao ở cuối thai kì.", correct: true
                    },
                    {
                        text: "Khi nồng độ hai hormone tăng cao gây ức chế vùng dưới đồi và tuyến yên làm giảm tiết FSH, LH.", correct: true
                    }
                ]
            },
        ]
    },
    tfKQSSSV: {
        level1: [
            {
                question: "DB-KQSSSV-L1-001. Khi nói về sinh sản hữu tính: Sinh sản hữu tính là hình thức sinh sản có sự kết hợp giữa giao tử đực và giao tử cái để tạo ra hợp tử, phát triển thành cơ thể mới. Quá trình này gồm ba giai đoạn: hình thành giao tử, thụ tinh và phát triển hợp tử. Nhờ sự tái tổ hợp di truyền, sinh sản hữu tính giúp tạo ra thế hệ con có đa dạng di truyền, tăng khả năng thích nghi với môi trường và thúc đẩy tiến hóa của loài. Phát biểu nào đúng, phát biểu nào sai?",

                statements: [
                    {
                        text: "Sinh sản hữu tính cần sự kết hợp giữa giao tử đực và giao tử cái.", correct: true
                    },
                    {
                        text: "Sinh sản hữu tính không tạo ra tổ hợp gen mới.", correct: false
                    },
                    {
                        text: "Sinh sản hữu tính giúp sinh vật thích nghi với sự thay đổi của môi trường sống.", correct: true
                    },
                    {
                        text: "Sinh sản hữu tính không phổ biến bằng sinh sản vô tính.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-KQSSSV-L2-001. Khi nói về sinh sản vô tính ở thực vật: Sinh sản vô tính ở thực vật là hình thức sinh sản không có sự kết hợp giữa giao tử, con cái được tạo ra từ một phần cơ thể mẹ. Quá trình này diễn ra qua bào tử (rêu, dương xỉ) hoặc sinh sản sinh dưỡng (giâm, chiết, ghép, củ, thân rễ). Sinh sản vô tính giúp cây con giữ nguyên đặc tính di truyền của cây mẹ, phát triển nhanh và thích nghi tốt với môi trường ổn định. Phát biểu nào đúng, phát biểu nào sai?",

                statements: [
                    {
                        text: "Diễn ra thông qua các bộ phận như lá, thân, rễ.", correct: true
                    },
                    {
                        text: "Không cần sự thụ phấn hoặc thụ tinh.", correct: true
                    },
                    {
                        text: "Tạo ra các cá thể giống hệt nhau về mặt di truyền.", correct: true
                    },
                    {
                        text: "Luôn tạo ra các cá thể khác biệt hoàn toàn.", correct: false
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-KQSSSV-L3-001. Khi nói về vai trò của sinh sản hữu tính: Sinh sản hữu tính giúp tạo ra sự đa dạng di truyền, tăng khả năng thích nghi với môi trường, góp phần vào tiến hóa của loài. Ngoài ra, nó còn giúp duy trì sự ổn định và phát triển quần thể, tạo ra thế hệ mới có đặc điểm tốt hơn, giúp loài tồn tại lâu dài. Phát biểu nào đúng, phát biểu nào sai?",

                statements: [
                    {
                        text: "Tạo ra tổ hợp gen đa dạng giúp thích nghi với môi trường.", correct: true
                    },
                    {
                        text: "Là hình thức sinh sản phổ biến ở tất cả các sinh vật.", correct: false
                    },
                    {
                        text: "Tạo ra các thế hệ con cháu mang đặc điểm của loài.", correct: true
                    },
                    {
                        text: "Không ảnh hưởng đến sự đa dạng sinh học.", correct: false
                    }
                ]
            },
        ]
    },
    tfSSOTV: {
        level1: [
            {
                question: "DB-KQSSSV-L1-001. Khi nói về quá trình sinh sản ở thực vật: Quá trình sinh sản ở thực vật gồm sinh sản vô tính và sinh sản hữu tính. Sinh sản vô tính tạo cây con từ một phần cơ thể mẹ mà không cần giao tử, phổ biến qua bào tử, sinh dưỡng hoặc nuôi cấy mô. Sinh sản hữu tính diễn ra qua thụ phấn, thụ tinh và hình thành hạt, giúp duy trì nòi giống và tạo ra sự đa dạng di truyền, đặc biệt ở thực vật có hoa. Mỗi nhận định sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Quả được hình thành từ đầu nhị.", correct: false
                    },
                    {
                        text: "Sinh sản bào tử tạo ra thế hệ mới từ bào tử được phát sinh do nguyên phân ở những thực vật có xen kẽ thế hệ thể bào tử thể và giao tử thể.", correct: false
                    },
                    {
                        text: "Tự thụ phấn là sự thụ phấn giữa hạt phấn với nhụy của cùng một hoa hay khác hoa cùng một cây.", correct: true
                    },
                    {
                        text: "Thụ phấn là quá trình vận chuyển hạt phấn từ nhị đến núm nhụy.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-KQSSSV-L2-001. Tomato giống cây lai giữa cà chua và khoai tây có thể được trồng ở ngoài vườn hay trong chậu vào mùa xuân và bắt đầu nhận được những trái cà chua đầu tiên trong thời gian gần đây. Cây gốc khoai tây, ngọn cà chua cho khoảng 500 trái nhờ gốc cây khỏe khoắn. Khi hết mùa, đào cây lên thì người trồng sẽ thu hoạch được những củ khoai tây tròn căng. Tomtato được tạo ra do Paul Hansord, Giám đốc công ty Thompson & Morgan (Anh) thực hiện. Cây Tomtato đã được tạo ra bằng một kĩ thuật trong nhân giống vô tính ở thực vật. Sử dụng dữ liệu trên hãy cho biết mỗi nhận định dưới đây đúng hay sai?",

                statements: [
                    {
                        text: "Kĩ thuật nhân giống vô tính của Paul Hansord là kĩ thuật giâm cành.", correct: true
                    },
                    {
                        text: "Cà chua và khoai tây cùng một họ có tên khoa học là Solanaceae nên rất tương thích cho việc ứng dụng kĩ thuật nhân bản vô tính.", correct: true
                    },
                    {
                        text: "Cây cà chua là cây lấy năng suất vì cho năng suất cao, trong khi đó khoai tây có hệ rễ khỏe, chống chịu điều kiện môi trường tốt.", correct: true
                    },
                    {
                        text: "Cây Tomato này không có sinh sản hữu tính.", correct: false
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-KQSSSV-L3-001. Hình dưới mô tả kĩ thuật nhân giống vô tính của thực vật, mỗi nhận định sau đây là đúng hay sai khi nói về kĩ thuật này?",
                image: "https://nhantri.top/media/Grade11/ghepcay.png",
                statements: [
                    {
                        text: "Hình A mô tả kĩ thuật ghép cành, Hình B mô tả kĩ thuật ghép mắt.", correct: false
                    },
                    {
                        text: "Cây cho cành ghép và cây cho mắt ghép thường là cây có các tính trạng tốt, năng suất cao, chống chịu tốt với môi trường.", correct: true
                    },
                    {
                        text: "Nếu tiếp tục lấy cây 1 và cây 2 làm giống cho các lần ghép tiếp theo thì các cây con vẫn tiếp tục giữ được các tính trạng tốt của cây mẹ ban đầu.", correct: false
                    },
                    {
                        text: "Các bệnh trên cây mẹ, nhất là do virus có thể lây qua cây con qua nhiều thế hệ.", correct: true
                    }
                ]
            },
        ]
    },
    tfSSODV: {
        level1: [
            {
                question: "DB-SSOĐV-L1-001. ...",

                statements: [
                    {
                        text: "Ở lô Y, giai đoạn I có sinh khối thực vật lớn nhất và lượng khoáng thất thoát hằng năm là nhỏ nhất.", correct: true
                    },
                    {
                        text: "Ở lô Y, giai đoạn II có lượng khoáng thất thoát hằng năm tăng làm lượng khoáng trong đất giảm dần.", correct: true
                    },
                    {
                        text: "Ở lô Y, giai đoạn III xảy ra diễn thế nguyên sinh với sinh khối thực vật tăng dần.", correct: false
                    },
                    { text: "Nghiên cứu này cho thấy chặt phá rừng là có thể làm giảm sự thất thoát lượng khoáng trong đất.", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "DB-SSOĐV-L2-001. Một nữ thanh niên bị bệnh phải cắt bỏ hai buồng trứng. Việc cắt bỏ buồng trứng có thể sẽ gây ra ảnh hưởng, ảnh hưởng nào sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Mất khả năng sinh con.", correct: true
                    },
                    {
                        text: "Chu kì kinh nguyệt không diễn ra.", correct: true
                    },
                    {
                        text: "Xương xốp dễ gây mắc bệnh loãng xương.", correct: true
                    },
                    {
                        text: "Các hormone CinRH, FSH, LH giảm mạnh.", correct: false
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-SSOĐV-L3-001. Thuốc tránh thai khẩn cấp được sử dụng cho phụ nữ sau quan hệ tình dục không bảo vệ hoặc gặp sự cố trong việc sử dụng các biện pháp tránh thai khác. Bằng cách sử dụng thuốc tránh thai khẩn cấp trong vòng 3 ngày kể từ ngày quan hệ, bạn có thể giảm đáng kể khả năng có thai. Thuốc tránh thai có 2 loại: Thuốc tránh thai kết hợp: Là thuốc chứa dạng tổng hợp của 2 loại hormone estrogen và progestin; Thuốc tránh thai chỉ chứa progestin: Thuốc chỉ chứa hormone progestin mà không chứa estrogen, còn được gọi là minipill. Thuốc này có thể hữu dụng với trường hợp phụ nữ không thể sử dụng estrogen vì lí do sức khỏe hoặc nguyên nhân khác. Hình mô tả hiệu quả của thuốc tránh thai với thời gian sử dụng trong vòng 72h. Sử dụng dữ liệu trên hãy cho biết mỗi nhận định sau đây đúng hay sai?",
                image: "https://nhantri.top/media/Grade11/thuoctranhthai.png",
                statements: [
                    {
                        text: "Thời gian vàng hiệu quả khi sử dụng thuốc tránh thai khẩn cấp là trong vòng 24h sau khi quan hệ tình dục không an toàn.", correct: true
                    },
                    {
                        text: "Thuốc tránh thai khẩn cấp có chứa các hormone với liều lượng nhiều hơn thuốc tránh thai hằng ngày.", correct: true
                    },
                    {
                        text: "Cơ chế thuốc tránh thai khẩn cấp đó là sự ức chế liên hệ ngược.", correct: true
                    },
                    {
                        text: "Thuốc tránh thai khẩn cấp chỉ có hiệu quả khi trứng đã thụ tinh, nên khuyến cáo sử dụng thêm các biện pháp an toàn khác trong quan hệ tình dục như bao cao su.", correct: false
                    }
                ]
            },
        ]
    },
    tfMQHCQT: {
        level1: [
            {
                question: "DB-MSNNMQH-L1-001. Sinh học cơ thể nghiên cứu các đặc điểm hình thái, sinh lý và tập tính của sinh vật, giúp ứng dụng vào nhiều lĩnh vực. Trong lâm nghiệp, hiểu biết về đặc điểm sinh học của thực vật rừng giúp nghiên cứu viên bảo vệ và phát triển rừng bền vững. Trong chăn nuôi, sinh học cơ thể giúp kiểm soát dịch bệnh, nâng cao năng suất vật nuôi và tối ưu hóa chế độ dinh dưỡng. Ngoài ra, men vi sinh trong nuôi trồng thủy sản hỗ trợ tiêu hóa, tăng cường miễn dịch và cải thiện chất lượng nước. Mỗi nhận định nào đúng hay sai?",

                statements: [
                    {
                        text: "Nghiên cứu viên lâm nghiệp không cần hiểu biết về đặc điểm sinh học của thực vật rừng.", correct: false
                    },
                    {
                        text: "Sinh học cơ thể giúp con người kiểm soát dịch bệnh trong chăn nuôi.", correct: true
                    },
                    {
                        text: "Kĩ sư chăn nuôi cần áp dụng sinh học cơ thể để tối ưu hóa năng suất vật nuôi.", correct: true
                    },
                    {
                        text: "Sử dụng men vi sinh trong thủy sản là một ví dụ về ứng dụng sinh học cơ thể.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-MSNNMQH-L2-001. Sinh học cơ thể nghiên cứu về cấu trúc, chức năng và hoạt động sống của sinh vật, giúp ứng dụng trong nông nghiệp, y học, bảo tồn sinh vật và nuôi trồng thủy sản. Công nghệ sinh học có vai trò quan trọng trong cải tạo giống cây trồng, tạo ra các giống năng suất cao, chống chịu tốt. Ngoài ra, bảo vệ động vật quý hiếm là một phần của sinh học cơ thể, giúp bảo tồn đa dạng sinh học. Trong y học, các kỹ thuật viên sẽ thực hiện chẩn đoán, điều trị và nghiên cứu y khoa. Mỗi nhận định sau là đúng hay sai?",

                statements: [
                    {
                        text: "Công nghệ sinh học không liên quan đến việc cải tạo giống cây trồng.", correct: false
                    },
                    {
                        text: "Bảo vệ động vật quý hiếm là một ứng dụng của sinh học cơ thể.", correct: true
                    },
                    {
                        text: "Sinh học cơ thể không có ứng dụng trong ngành nuôi trồng thủy sản.", correct: false
                    },
                    {
                        text: "Kĩ thuật viên y học cần sử dụng kiến thức về sinh học cơ thể trong công việc.", correct: true
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB-MSNNMQH-L3-001. Để tăng năng suất cây trồng và vật nuôi, cần áp dụng kỹ thuật chọn giống, cải thiện điều kiện sống và sử dụng công nghệ tiên tiến. Đối với cây trồng, cần bón phân hợp lý, tưới tiêu khoa học, phòng trừ sâu bệnh và chọn giống có năng suất cao. Với vật nuôi, cần cung cấp dinh dưỡng đầy đủ, chăm sóc tốt, phòng bệnh và ứng dụng công nghệ chăn nuôi hiện đại. Mỗi nhận định sau là đúng hay sai?",

                statements: [
                    {
                        text: "Để tăng năng suất cho cây trồng cần áp dụng các biện pháp kĩ thuật(bón phân, tưới nước, điều chỉnh nhiệt độ thích hợp, ...).", correct: true
                    },
                    {
                        text: "Để tăng năng suất cho vật nuôi cần học hỏi từ những người có vật nuôi đạt năng suất cao.", correct: true
                    },
                    {
                        text: "Công nghệ chế tạo cơ quan nhân tạo như tim, phổi, thận, da, xương, ... gọi là công nghệ nano.", correct: false
                    },
                    {
                        text: "Cải tiến trong quá trình nuôi trồng thủy sản nhờ áp dụng sinh học cơ thể là dùng mem vi sinh cho ao nuôi.", correct: false
                    }
                ]
            },
        ]
    },
    saKQTDCCHNL: {
        level1: [
            {
                question: "...",
                answer: "2"
            },


           
        ],
        level2: [
            {
                question: "...",
                answer: "3000"
            },


          
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade11/chutrinhtitrogen.png",
                answer: "36"
            },

           
        ],
        level4: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade11/chutrinhtitrogen.png",
                answer: "..."
            },


        ],
    },

    saTDNVK: {
        level1: [
            {
                question: "...",
                answer: "2"
            },

            // Thêm các câu hỏi SA level 1 khác...
        ],
        level2: [
            {
                question: "TB-TĐNVMK-L2-001. Khi đo lượng nước thoát ra và lượng nước hút vào của 4 cây cà chua trong cùng một đơn vị thời gian thu được kết quả thể hiện trong biểu đồ. Theo lí thuyết, có mấy cây không bị héo?",
                image: "https://nhantri.top/media/Grade11/bdthoatnuoc.png",
                answer: "1"
            },
            
           
        ],
        level3: [
            {
                question: "TB-TĐNVMK-L3-001. ...",
                answer: "..."
            },

           
        ],
        level4: [
            {
                question: "TB-TĐNVMK-L4-001. Giải thích tại sao khi bón nhiều phân hóa học thì cây bị héo.",
                answer: "Bón nhiều phân hóa học làm tăng nồng độ chất tan trong đất dẫn tới làm giảm thế nước của đất. Khi thế nước của đất thấp hơn thế nước của tế bào rễ thì rễ cây không hút được nước. Quá trình thoát hơi nước ở lá vẫn diễn ra trong khi quá trình hút nước ở rễ bị giảm hoặc rễ không hút được nước, làm cho cây bị mất nước dẫn tới cây héo."
            },
            {
                question: "TB-TĐNVMK-L4-002. Động lực nào giúp dòng nước và các ion khoáng di chuyển được từ rễ lên lá ở những cây gỗ cao lớn hàng chục mét?",

                answer: "Áp suất rễ - động lực đầu dưới. Lực hút do sự thoát hơi nước ở lá - động lực đầu trên. Lực liên kết giữa các phân tử nước với nhau và giữa phân tử nước với vách mạch gỗ."
            },
            {
                question: "TB-TĐNVMK-L4-003. Vì sao hiện tượng ứ giọt chỉ xảy ra ở những cây bụi thấp và ở những cây thân thảo?",

                answer: "Hiện tượng ứ giọt chỉ xảy ra ở cây thân bụi thấp và ở những cây thân thảo vì những cây này thân thấp nên: áp suất rễ đủ mạnh để đẩy nước từ rễ lên lá gây ra hiện tượng ứ giọt. Ở khoảng cách gần mặt đất, không khí dễ bị bão hòa hơi nước → ức chế sự bay hơi của nước từ lá ra môi trường → nước dễ bị ứ đọng trên lá. Ngoài ra ở lá cây thân thảo có thủy khổng → giữ giọt nước trên đầu lá."
            },
            {
                question: "TB-TĐNVMK-L4-004*. Cây xanh đã thích ứng như thế nào giúp giảm bớt sự mất nước do quá trình thoát hơi nước?",

                answer: "Cây xanh đã có những đặc điểm thích ứng giúp giảm bớt sự mất nước do quá trình thoát hơi nước như sau:<br/>- Cây trong môi trường khô hạn có lá nhỏ, cutin dày, khí khổng ít và tập trung ở mặt dưới lá tránh ánh nắng trực tiếp. <br/>- Rụng lá vào mùa khô hoặc thân làm nhiệm vụ quang hợp. <br/>- Khí khổng đóng vào ban ngày và mở vào ban đêm. <br/>- Các khí khổng của lá ở vùng khô hạn được giấu kín và che phủ bằng lông tơ mịn tạo thành các túi chống lại sự bốc hơi nước tăng nhanh khi không khí chuyển động."
            },
            {
                question: "TB-TĐNVMK-L4-005*. Một tế bào nhân tạo có màng thấm chọn lọc đựng 0.03M saccharose và 0,02M glucose đặt vào  trong 1 cốc đựng các dung dịch khác nhau: 0,01M saccharose; 0,01M glucose và 0,01M fructose. Điều gì sẽ xảy ra?<br/>a.Chất tan nào khuếch tán vào trong tế bào?<br/>b.Chất tan nào khuếch tán ra ngoài tế bào?<br/>c.Dung dịch nào là ưu trương so với dung dịch kia?<br/>d.Nước sẽ di chuyển theo hướng nào?<br/>e.Sau khi đặt tế bào vào cốc, tế bào nhân tạo có thay đổi kích thước không?",

                answer: "a. Fructozo khuếch tán vào trong. <br/>b.Glucozo khuếch tán ra ngoài.<br/>c. [dịch bào] là ưu trương so với môi trường.<br/>d.Nước di chuyển từ ngoài vào trong tế bào.<br/>e.Tế bào nhân tạo trương căng lên."
            },
            {
                question: "TB-TĐNVMK-L4-006*. Một  tế bào thực vật có áp suất thẩm thấu 1,9 atm và áp suất trương nước 0,7 atm đem ngâm vào các dung dịch đường có áp suất thẩm thấu (atm): 0,6; 0,8; 1,0; 1,2; 1,4; 1,6; Nêu những hiện tượng vận chuyển nước đối với tế bào trong các dung dịch nêu trên?",

                answer: "Sức hút nước của tế bào thực vật : S = P - T = 1,9 - 0,7 = 1, 2 atm. Vì vậy, Xảy ra 3 trường hợp:<br/>- TH 1: dung dịch đường có áp suất thẩm thấu = 1, 2: tế bào không hút nước, thể tích không thay đổi.<br/>- TH 2: dung dịch đường có áp suất thẩm thấu<1, 2: tế bào hút nước, thể tích tăng.<br/>- TH 3: dung dịch có áp suất thẩm thấu > 1, 2: tế bào mất nước, co lại."
            },
            {
                question: "TB-TĐNVMK-L4-007*. Giải thích vì sao các loài cây trên cạn bị ngập úng lâu sẽ chết?",

                answer: "Cây trên cạn khi bị ngập úng, rễ thiếu oxygen, hô hấp kị khí sinh ra các sản phẩm độc hại làm tế bào lông hút chết và không hình thành được lông hút mới nên không hấp thụ được nước, cân bằng nước trong cây bị phá vỡ và cây chết."
            },
            {
                question: "TB-TĐNVMK-L4-008*. Nếu 1 ống mạch gỗ bị tắc, dòng nhựa nguyên trong ống đó có thể tiếp tục đi lên được không? Vì sao hiện tượng ứ giọt chỉ xảy ra ở cây thân bụi và thân thảo?",

                answer: "Nước vẫn tiếp tục đi lên được bằng cách chuyển ngang qua các lỗ bên vào ống bên cạnh và tiếp tục đi lên trên.<br/>Hiện tượng ứ giọt xảy ra khi nước được đẩy từ rễ lên lá, nhưng do không khí bị bão hòa, nước từ lá không thoát ra ngoài không khí nên ứ đọng thành giọt tại các mép lá.<br/Hiện tượng này chỉ xảy ở các cây bụi thấp hoăc cây thân thảo do các cây này thấp, không khí gần mặt đất thường bị bão hòa, mặt khác áp suất rễ đủ mạnh đẩy nước từ rễ lên lá, ứ thành giọt tại các mép lá."
            },
            {
                question: "TB-TĐNVMK-L4-009*. Trong điều kiện đồng ruộng, trên cùng một loại đất, người ta trồng lanh và lúa mì. Đã xác định: lanh bị héo khi đất có độ ẩm 15%, lúa mì là 18%. Sự khác nhau này có liên quan đến đặc điểm gì của cây?",

                answer: "Phụ thuộc vào khả năng hút nước của cây. Có thể cây lanh có khả năng thoát hơi nước tốt hơn, có bộ rễ lớn hơn, do đó có khả năng hấp thụ nước tốt hơn cây lúa mì."
            },
            {
                question: "TB-TĐNVMK-L4-010*. Người ta trồng cây trong 1 hộp kim loại. Khi cây lớn, người ta không tưới nước. Mặt trên hộp đậy nắp kín để nước không bị bốc hơi. Vậy khi nào cây héo? Lấy 5,16g đất trong hộp sấy khô ở 1000C còn được 4,8g. Xác định hệ số héo?",

                answer: "<br/>- Cây sẽ héo khi không lấy được nước từ đất mặc dù nước trong đất vẫn còn, do nước liên kết với các phân tử keo đất và chủ yếu là do cây không thoát được nước nên động lực trên bằng không. Đây là hiện tượng hạn sinh lí.<br/>- Hệ số héo chính là lượng nước còn lại trong đất khi cây bị héo.Hệ số héo = 5, 16 - 4, 8 = 0, 36 (g)."
            },
            {
                question: "TB-TĐNVMK-L4-011*. Khi xác định hệ số héo, hình như tất cả thực vật cùng trồng trên 1 loại đất cho 1 kết quả như nhau, chúng không phụ thuộc vào giai đoạn phát triển của cây. Vậy giải thích điều này như thế nào?",

                answer: "Cây cần nước liên tục trong suốt quá trình sống của nó. Vấn đề là khả năng hút nước của cây có thắng được lực liên kết của nước trong đất hay không. Vì vậy, hệ số héo ít phụ thuộc vào loại cây mà phụ thuộc chủ yếu vào loại đất."
            },
            {
                question: "TB-TĐNVMK-L4-012*. Trong canh tác, để cây hút nước được dễ dàng cần chú ý những biện pháp kĩ thuật gì? Tại sao không nên tưới nước cho cây vào buổi trưa?",

                answer: "Hút nước chủ động của rễ cần tiêu thụ ATP. Sự tổng hợp và tiêu thụ ATP liên quan đến các quá trình sinh lí, đặc biệt là quá trình hô hấp. Nên có các biện pháp:<br/>-  Xới đất: đất thoáng khí, rễ hô hấp tốt hơn sẽ cung cấp nhiều năng lượng.<br/>- Làm cỏ: giảm sự cạnh tranh của cỏ.<br/>- Sục bùn: phá vỡ tầng oxy hóa khử của đất, hạn chế sự mất đạm của đất.<br/>Không nên tưới nước cho cây vào buổi trưa vì: <br/>- Buổi trưa, ánh sáng và nhiệt độ cao làm cây hô hấp mạnh và cần nhiều oxygen.Nếu tưới nước làm đất sẽ bị nén chặt nên cây không lấy được oxygen nên phải hô hấp kị khí, năng lượng giảm, đông thời sinhh ra các sản phẩm độc làm cây không hút được nước trong khi lá cây vẫn thoát nước mạnh.<br/>- Mặt khác, những giọt nước đọng lại trên lá như một thấu kính hấp thụ ánh sáng đốt nóng cây làm cây héo.<br/>- Nhiệt độ cao trên mặt đất làm nước tưới bốc thành hơi nóng làm héo lá."
            },
            {
                question: "TB-TĐNVMK-L4-013*. Sau cơn mưa dầm, quá trình thoát hơi nước của cây biến đổi như thế nào? Các cơ chế nào đã làm biến đổi quá trình thoát hơi nước của cây trong điều kiện trên?",

                answer: "Sau cơn mưa dầm, quá trình thoát hơi nước của cây giảm do:<br/>- Sau cơn mưa nhiệt độ giảm, độ ẩm không khí tăng lên.<br/>- Các tế bào biểu bì xung quanh khí khổng trương nước, tăng thể tích, ép lên các tế bào làm khe khí khổng khép lại bị động(phản ứng đóng thủy bị động)."
            },
            {
                question: "TB-TĐNVMK-L4-014*. Hai bình có thể tích như nhau, một bình chứa cát, một bình chứa đất sét có khối lượng như nhau. Cả hai bình đều rót nước cho đến khi bão hòa. Hỏi:<br/>a.Bình nào sẽ cung cấp cho cây nhiều nước hơn?<br/>b.Bình nào có nước dự trữ nhiều hơn?",

                answer: "<br/>a. Dựa theo hệ số héo, bình chứa cát cung cấp nước cho cây nhiều hơn vì khả năng giữ nước của cát kém, rất ít nước liên kết trong bình này.<br/>b.Bình chứa đất sét có nước dự trữ nhiều hơn vì nước liên kết với các keo đất lớn hơn nhưng nước này cây không sử dụng được."
            },
            {
                question: "TB-TĐNVMK-L4-015*. Khi nghiên cứu về cân bằng nước và vấn đề tưới nước hợp lí cho cây trồng.<br/>a.Người ta căn cứ vào áp suất thẩm thấu (P) để xác định cây chịu hạn và cây kém chịu hạn. Hãy nêu nguyên tắc xác định P.<br/>b.Thử nêu một vài phương pháp xác định khả năng thoát hơi nước của cây.<br/>c.Thử nêu một vài phương pháp xác định mật độ khí khổng ở hai mặt lá.",

                answer: "<br/>a. Áp suất thẩm thấu được xác định bằng công thức: P = R.T.C.i. Như vậy, để tính P ta phải xác định C. Đó là nồng độ dịch tế bào. Nguyên tắc xác định P chính là nguyên tắc xác định nồng độ dich tế bào. Nguyên tắc đó là: Không thể xác định trực tiếp nồng độ dịch tế bào mà phải xác định gián tiếp bằng cách so sánh nó với một dung dich đã biết nồng độ. Thường người ta dùng phương pháp co nguyên sinh và phương pháp tỉ trọng dung dịch.<br/>b.Có thể xác định khả năng thoát hơi nước của cây bằng phương pháp cân nhanh hoặc bằng phương pháp sử dụng giấy tẩm CoCl<sub>2</sub>.Giấy tẩm CoCl < sub > 2</sub > khi ướt có màu hồng, khi khô có màu xanh.Như vậy, khi giấy khô áp vào lá cây, theo thời gian, giấy sẽ chuyển màu hồng.Căn cứ vào thời gian chuyển từ màu xanh sang màu hồng của giấy, có thể xác định khả năng thoát hơi nước của cây.<br/>c.Có thể nêu hai phương pháp xác định mật độ khí khổng ở hai mặt lá:<br/>- Dùng một loại keo nhớt trong suốt phủ lên hai mặt lá một lớp mỏng.Khi lớp keo khô, bóc lớp màng keo ra khỏi lá, soi dưới kính hiển vi, ta sẽ thấy hình của các khí khổng in rõ trên lớp màng keo và có thể xác định được mật độ khí khổng ở mặt trên và mặt dưới lá, thậm chí có thể tính được số lượng khí khổng / mm < sup > 2</sup >.<br/>- Dùng phương pháp áp giấy CoCl < sub > 2</sub > vào mặt trên và mặt dưới lá, rồi tính thời gian làm hồng giấy, ta có thể xác định gián tiếp mật độ khí khổng.Bởi vì thoát hơi nước chủ yếu bằng con đường khí khổng."
            },
            {
                question: "TB-TĐNVMK-L4-016*. Khi nghiên cứu về cân bằng nước và vấn đề tưới nước hợp lí cho cây trồng.<br/>a.Người ta căn cứ vào áp suất thẩm thấu (P) để xác định cây chịu hạn và cây kém chịu hạn. Hãy nêu nguyên tắc xác định P.<br/>b.Thử nêu một vài phương pháp xác định khả năng thoát hơi nước của cây.<br/>c.Thử nêu một vài phương pháp xác định mật độ khí khổng ở hai mặt lá.",

                answer: "<br/>a. Khi tế bào bắt đầu hút nước thì sức căng T xuất hiện, tế bào tiếp tục hút nước thì T tăng dần.<br/>b.Tmax khi tế bào bão hòa nước và khi đó T=P.<br/>c.Khi tế bào mất nước à T giảm, T giảm đến 0 khi tế bào bắt đầu co nguyên sinh.<br/>d.Có, khi đó S = P + T tức S > P nên khi xảy ra hiện tượng xitori: tế bào mất nước một cách đột ngột, không bào co lại nhưng nguyên sinh chất không kịp tách rời khỏi thành tế bào làm thành tế bào lõm vào trong và T xuất hiện với chiều ngược lại, mang dấu âm.<br/>e. T chỉ có thể tăng khi tế bào nhận nước mà không thoát được nước nên T tăng trong các trường hợp sau:<br/>- Đưa cây vào trong bóng tối.<br/>- Bão hòa hơi nước trong không gian trồng cây.<br/>- Tăng hàm lượng AAB làm khí khổng đóng."
            },
            {
                question: "TB-TĐNVMK-L4-017*. Khi nghiên cứu áp suất thẩm thấu của dịch tế bào của một số loài cây người ta thu được số liệu sau:<br/>Rong đuôi chó: 3, 14 atm; Bèo hoa dâu: 3, 49 atm; Cây đậu leo: 10, 23 atm; Cây bí ngô: 9, 63 atm; Phi lao: 19, 68 atm; Cây sơn: 24,08 atm.<br/>a.Em có thể rút ra kết luận gì? Giải thích?<br/>b.Có thể sắp xếp các cây vào các nhóm sinh thái khác nhau như thế nào, tại sao có sự sắp xếp đó?",

                answer: "<br/>a. Kết luận:<br/>+ Áp suất thẩm thấu là một đại lượng biến đổi.<br/>+ Những nhóm cây sinh thái khác nhau thì có P khác nhau.<br/>+ Cây mọc ở đất khô cằn thì có áp suất thẩm thấu của dịch bào lớn, cây thủy sinh thì có áp suất thẩm thấu nhỏ.<br/>- Giải thích: ở những môi trường sinh thái khác nhau, thế nước trong đất khác nhau, cây muốn hút được nước thì phải tạo ra một tiềm năng thẩm thấu lớn hơn tiềm năng thẩm thấu trong đất (P dịch bào > P dịch đất). Vì ở môi trường nước, P môi trường nhỏ nên P dịch bào thấp, còn ở môi trường đất khô cằn, P dịch đất lớn nên P dịch bào lớn.<br/>b. Sắp xếp vào các nhóm sinh thái khác nhau:<br/>- Nhóm cây ẩm sinh: rong đuôi chó, bèo hoa dâu. <br/>- Nhóm cây trung sinh: bí ngô, đậu leo.<br/>- Nhóm cây hạn sinh: phi lao, sơn."
            },
            {
                question: "TB-TĐNVMK-L4-018*. Một cây thuộc loài thực vật ẩm sinh mọc trong đất có nồng độ muối cao, mặc dù đã được tưới nước nhưng cây vẫn bị héo.<br/>a.Cho biết 3 giá trị đo được về thế nước của cây trên là: - 5 atm, - 1 atm, - 8 atm. Hãy sắp xếp các giá trị trên tương ứng với thế nước ở lá, rễ và thân?<br/>b. Để cây không bị héo có thể sử dụng phương pháp nào trong các phương pháp sau là hiệu quả nhất ? Giải thích tại sao? Tăng độ ẩm không khí; Tưới nước tiếp tục cho cây; Phủ một lớp sáp trên bề mặt lá; Đưa cây vào bóng râm.",

                answer: "<br/>a. Nước đi từ nơi có thế nước cao đến nơi có thế nước thấp, cây đang bị héo nên thế nước ở rễ, thân và lá lần lượt là: -8; -5; -1.<br/>b.Sử dụng phương pháp tiếp tục tưới nước cho cây để tăng thế nước cho đất, rửa mặn."
            },
            {
                question: "TB-TĐNVMK-L4-019*. Vì sao khi khí khổng mở thì hơi nước liên tục thoát ra ngoài, còn carbon dioxide đi từ ngoài vào lá. Nêu phương pháp xác định cường độ thoát hơi nước bằng phương pháp cân nhanh.",

                answer: "<br/> Khi khí khổng mở, hơi nước liên tục thoát ra do chênh lệch nồng độ hơi nước trong buồng khí cao (bão hòa) với không khí có nồng độ hơi nước thấp (do ánh sáng, nhiệt độ, gió); CO2 buồng dưới khí khổng trực tiếp cung cấp cho quang hợp nên nồng độ thấp hơn so với bên ngoài àCO2 từ ngoài vào.<br/>- Xác định cường độ thoát hơi nước bằng phương pháp cân  nhanh:<br/>I = (P1 - P2).60/T.S (mg/h/dm2)"
            },
            {
                question: "TB-TĐNVMK-L4-020*. Trong các chất hữu cơ do quá trình quang hợp tạo ra, chất nào có vai trò chủ yếu và được xem là chất có hoạt tính thẩm thấu làm tăng áp suất thẩm thấu của tế bào hình hạt đậu? Nêu những biến đổi của tế bào hình hạt đậu khi ở ngoài sáng và khi lá thiếu nước?",

                answer: "<br/> - Ở ngoài sáng, CO2 được sử dụng cho quá trình quang hợp àCO2 giảm àpH tăng xúc tác enzim phosphorinase phân giải tinh bột thành đường làm tăng áp suất thẩm thấu nên tế bào hút nước và khí khổng mở.<br/>- Khi lá thiếu nước, AAB được tích lũy lại trong tế bào khí khổng làm ức chế tổng hợp amylase, ngừng thủy phân tinh bột thành đường nên giảm áp suất thẩm thấu, vì vậy khí khổng đóng lại."
            },
            {
                question: "TB-TĐNVMK-L4-021*. Giấy tẩm clorua coban khi ướt có màu hồng, khi khô có màu xanh sáng. Người ta ép giấy tẩm cloruacoban vào 2 mặt lá khoai lang, sau 15p thấy mặt dưới lá có màu hồng, trong khi mặt trên lá phải sau 3h mới có màu hồng. Giải thích kết quả thí nghiệm trên.",

                answer: "Khí khổng lá khoai lang phân bố chủ yếu ở mặt dưới, do đó quá trình thoát hơi nước ở mặt dưới lá mạnh hơn mặt trên lá rất nhiều."
            },
            {
                question: "TB-TĐNVMK-L4-022*. Một cây sống ở vùng đất mặn có áp suất thẩm thấu 10 atm. Để hút được nước đảm bảo cây sống bình thường trong điều kiện đất mặn vào mùa hè nhiệt độ 300C và vào mùa đông 150C, cây phải duy trì nồng độ dịch bào tối thiểu là bao nhiêu?",

                answer: "P = R.T.C.i > 10, từ đó tính C trong điều kiện nhiệt độ khác nhau. Trong đó, Hằng số tuyệt đối R = 0,082 (L.atm/mol.K); Nhiệt độ T (K); Nồng độ dung dịch C (mol/L); Hệ số điện li/Vant Hoff (glucose = 1; NaCl = 2)"
            },
           
        ],
    },
    saQHOTV: {
        level1: [
            {
                question: "TB-QHOTV-L1-001. Trong số các loài thực vật sau: Lúa, cao lương, ngô, khoai, sắn, mía, xương rồng, dứa, đậu, thanh long. Có bao nhiêu loài thực vật C3.",
                answer: "4"
            },
            // Thêm các câu hỏi SA Quang hợp ở thực vật level 1 khác...
        ],
        level2: [
            {
                question: "TB-QHOTV-L2-001. ...",
                answer: "..."
            },



            // Thêm các câu hỏi SA Quang hợp ở thực vật level 2...
        ],
        level3: [
            {
                question: "TB-QHOTV-L3-001. ...",
                answer: "..."
            },
           
            // Thêm các câu hỏi SA Quang hợp ở thực vật level 3...
        ],
        level4: [
            {
                question: "TB-QHOTV-L4-001. Giải thích tại sao thực vật C4 có năng suất cao hơn thực vật C3 và CAM.",
                answer: "Sơ với TV C4: TV C4 không có hô hấp sáng, C3 có hô hấp sáng còn → TV C3 bị tiêu hao sản phẩm quang hợp → năng suất giảm khoảng 50% so với TV C4. Ngoài ra, TV C4 có điểm bão hòa ánh sáng cao hơn, hiệu quả quang hợp tốt hơn C3. So với TV CAM: mặc dù TV CAM cũng không có hô hấp sáng nhưng khí khổng chỉ mở vào ban đêm (để hạn chế thoát nước), nên lượng CO<sub>2</sub> đi vào khí khổng cung cấp cho quang hợp cũng bị hạn chế → Khả năng đồng hóa CO<sub>2</sub> ở thực vật CAM yếu hơn so với thực vật C3 và C4 nên tốc độ sinh trưởng của cây rất chậm."
            },
            {
                question: "TB-QHOTV-L4-002. Phân biệt pha tối ở thực vật C3 và C4 về: chất nhận CO<sub>2</sub> đầu tiên, sản phẩm ổn định đầu tiên, tiến trình, số loại tế bào tham gia cố định CO<sub>2</sub>, năng suất sinh học.",
                answer: "Con đường C3: Chất nhận CO<sub>2</sub> đầu tiên là Ribulose-1,5-biphosphate; Sản phẩm ổn định đầu tiên là chất 3C (3-PG); Tiến trình có một giai đoạn là chu trình Calvin; Số loại tế bào tham gia cố định CO<sub>2</sub> là 1 loại (TB mô giậu). Năng suất sinh học: Thấp hơn. Con đường C4: Chất nhận CO<sub>2</sub> đầu tiên là PEP; Sản phẩm ổn định đầu tiên là chất 4C (Oxaloacetate); Tiến trình gồm 2 giai đoạn (chu trình C4 và chu trình Calvin); Số loại tế bào tham gia cố định CO<sub>2</sub> là 2 loại (TB mô giậu; TB bao bó mạch); Năng suất sinh học cao hơn."
            },
            {
                question: "TB-QHOTV-L4-003. Sử dụng nguồn <sup>14</sup>CO<sub>2</sub> để theo dõi sự xuất hiện của <sup>14</sup>C trong các hợp chất hữu cơ trong quá trình quang hợp xảy ra ở cây mía. Kết quả được thể hiện ở đồ thị dưới đây. Hãy xác định các đường 1, 2, 3, 4 trong đồ thị đã cho ứng với các hợp chất nào trong số các hợp chất sau: acid malic, tinh bột, saccharose, 3-Phosphoglycerate? Giải thích.",
                image: "https://nhantri.top/media/Grade11/chutrinhcayc4.png",
                answer: "1 là acid malic; 2 – 3 là Phosphoglycerate, 3 là saccharose, 4 là tinh bột. Mía là thực vật C4 do đó quá trình cố định CO2 trải qua hai giai đoạn: giai đoạn thứ nhất, chất nhận CO2 đầu tiên là PEP nhờ sự xúc tác của enzyme PEP – cacboxylase tạo thành oxaloacetate sau đó chuyển thành acid malic. Từ acid malic, chất này lại phân giải tạo ra CO2 trong tế bào bao bó mạch để CO2 kết hợp với Ribulose-1,5-biphosphate tạo thành hợp chất bền là 3-phosphoglycerate. Từ 3-Phosphoglycerate chất này tiếp tục được chuyển thành AlPG và tạo thành đường saccarose, sau đó được chuyển đến các cơ quan tích trữ dưới dạng tinh bột."
            },
        ]

    },
    saHHOTV: {
        level1: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/lienketkt.png",
                answer: "..."
            },
            // Thêm các câu hỏi SA Hô hấp ở thực vật level 1 khác...
        ],
        level2: [
            {
                question: "...",
                answer: "..."
            },

          
        ],
        level3: [
            {
                question: "TB-QHOTV-L3-001. ...",
                image: "https://nhantri.top/media/Grade11/hohaphieukhicgd.png",
                answer: "..."
            },
           
            
        ],
        level4: [
            {
                question: "TB-QHOTV-L4-001. Hình dưới đây mô tả quá trình hô hấp nội bào khi môi trường có đủ oxygen. Hãy cho biết tên các cấu trúc từ 1 đến 4, các quá trình A, B, C.",
                image: "https://nhantri.top/media/Grade11/hohaphieukhicgd.png",
                answer: "A: Đường phân; B: Chu trình Krebs; C: Chuỗi chuyền điện tử hô hấp; 1: Glucose; 2: acid pyruvic; 3: NAPH; 4: FADH<sub>2</sub>"
            },
            {
                question: "TB-QHOTV-L4-002. Trong các trường hợp không có oxygen hoặc màng ti thể bị thủng lỗ, hãy cho biết ATP có được tạo ra trong ti thể không? Giải thích.",

                answer: "Không có O<sub>2</sub>, ATP sẽ không được tạo ra trong ti thể do không có O<sub>2</sub> là chất nhận electron cuối cùng ở chuỗi chuyền electron nên NADH và FADH2 sẽ không bị khử để cung cấp electron cho chuỗi chuyền electron → H+ không được bơm qua các phức hệ protein để ra xoang gian màng → cơ chế hóa thẩm không xảy ra → không sinh ra ATP theo cơ chế phosphoryl hóa oxygen hóa. NADH và FADH2 không bị khử sẽ không tạo thành NAD+ và FAD → không có nguyên liệu cho chu trình Krebs → không thể sinh ATP theo cơ chế phosphoryl cơ chất ở chất nền ti thể."
            },
        ],
    },
    saDDVTHDV: {
        level1: [
            {
                question: "TB-DDVTHOĐV-L1-001. ...",
                answer: "..."
            },
           
        ],
        level2: [
            {
                question: "...",
                answer: "..."
            },
           

        ],
        level3: [
            {
                question: "...",
                answer: "..."
            },

           
        ],
        level4: [
            {
                question: "TB-DDVTHOĐV-L4-001. Trình bày cấu tạo của ruột non phù hợp với chức năng.",
                answer: "Ruột non là đoạn dài nhất của ống tiêu hóa, ở người ruột non dài 2,6 – 3m, rộng 4 cm gấp từ 2 lần chiều cao cơ thể → Diện tích bề mặt lớn → tăng hiệu quả tiêu hóa và hấp thụ chất dinh dưỡng. Thành ruột non được cấu tạo từ 2 lớp cơ trơn (cơ vòng và cơ dọc) → Có khả năng cử động (nhu động; phản nhu động; làn sóng,..) → giúp thức ăn thấm đều dịch tiêu hóa. Lớp niêm mạc của ruột non có các nếp gấp với các lông ruột (khoảng 2500 lông ruột/cm<sup>2</sup>) và lông cực nhỏ → Tổng diện tích bề mặt trong của ruột non đạt tới 250 – 300 m<sup>2</sup>.  Lớp niêm mạc ruột có các tế bào tiết dịch ruột: gồm đầy đủ các loại enzyme tiêu hóa tất cả các loại thức ăn → Tăng hiệu quả tiêu hóa thức ăn (tiêu hóa hóa học). Màng TB là màng bán thấm chọn lọc → Giúp cơ thể hấp thụ chất dinh dưỡng cần thiết. Có hệ thống thần kinh, mạch máu và mạch bạch huyết dày đặc, phân bố tới từng lông ruột → Tăng hiệu quả hấp thụ các chất dinh dưỡng; Có cơ chế điều hòa hấp thụ chất dinh dưỡng chặt chẽ."
            },
        ]
    },
    saHHODV: {
        level1: [
            {
                question: "...",
                answer: "..."
            },
          
        ],
        level2: [
            {
                question: "TB-HHOĐV-L2-001. ...",
                answer: "..."
            },

        ],
        level3: [
            {
                question: "TB-HHOĐV-L3-001. ...",
                answer: "..."
            },
           
        ],
        level4: [
            {
                question: "TB-HHOĐV-L4-001. Bề mặt trao đổi khí ở động vật có những đặc điểm gì giúp quá trình trao đổi khí đạt hiệu quả cao?",
                answer: "Diện tích bề mặt lớn, có nhiều mao mạch → Tăng S bề mặt tiếp xúc với không khí; Bề mặt mỏng và ẩm ướt → Giúp O<sub>2</sub> và CO<sub>2</sub> dễ dàng khuếch tán; Máu có sắc tố hô hấp (Hb); Có sự lưu thông khí."
            },
            {
                question: "TB-HHOĐV-L4-002. Vì sao khi bắt giun đất để trên mặt đất khô ráo thì giun sẽ nhanh chết.",
                answer: "Giun đất trao đổi khí với môi trường qua da nên da của giun đất cần ẩm ướt để các khí O<sub>2</sub>, CO<sub>2</sub> có thể hòa tan và khuếch tán qua da được dễ dàng. Nếu bắt giun đất để trên bề mặt đất khô ráo, da sẽ bị khô nên giun không hô hấp được → sẽ bị chết."
            },
            {
                question: "TB-HHOĐV-L4-003. Vì sao khi hít phải khí CO với nồng độ cao có thể gây tử vong ở người.",
                answer: "Hb có ái lực rất cao với CO (cao gấp hàng trăm lần ái lực với O<sub>2</sub>) → khi hít phải CO ở nồng độ cao → CO chiếm chỗ của O<sub>2</sub> trong hồng cầu → cơ thể thiếu Oxygen (đặc biệt là não) → có thể gây ngất, thậm chí có thể tử vong."
            },
            {
                question: "TB-HHOĐV-L4-004. Vì sao người nghiện thuốc lá có thể bị cao huyết áp.",
                answer: "Trong khói thuốc lá có nhiều chất độc hại: Nicotin, CO,…; Nicotin gây co mạch (do kích thích tiết Adrenaline) → tăng huyết áp. CO chiếm chỗ của O<sub>2</sub> trong hồng cầu → cơ thể thiếu Oxygen → kích thích thụ quan hóa học ở cung động mạch chủ và xoang động mạch cảnh → truyền xung TK đến trung khu điều tim mạch → gây tăng nhịp tim → tăng huyết áp."
            },
        ],
    },
    saTHODV: {
        level1: [
            {
                question: "TB-THOĐV-L1-001. ...",
                answer: "..."
            },

            // Thêm các câu hỏi SA Tiêu hóa ở động vật level 1 khác...
        ],
        level2: [
            {
                question: "TB-THOĐV-L2-001. ...",
                answer: "..."
            },
            
            // Thêm các câu hỏi SA Tiêu hóa ở động vật level 2...
        ],
        level3: [
            {
                question: "TB-THOĐV-L3-001. Cho biết tâm thất trái mỗi lần co bóp đẩy máu đi 70 ml máu và trong một ngày đêm đẩy đi được 7560 l máu. Tính số nhịp đập của tim trong một phút.",
                answer: "75"
            },
            {
                question: "TB-THOĐV-L3-002. Cho biết tâm thất trái mỗi lần co bóp đẩy máu đi 70 ml máu và trong một ngày đêm đẩy đi được 7560 l máu. Xác định thời gian của một chu kì tim là bao nhiêu giây?",
                answer: "0.8"
            },
           
        ],
        level4: [
            {
                question: "TB-THOĐV-L4-001. Phân tích những hạn chế của hệ tuần hoàn hở so với hệ tuần hoàn kín.",
                answer: "Hạn chế của hệ tuần hoàn hở so với hệ tuần hoàn kín: Tim đơn giản, lực tim yếu, áp lực máu chảy trong động mạch thấp. Tốc độ máu chảy, khả năng điều hòa và phân phối máu đến các cơ quan chậm nên không thể đáp ứng được nhu cầu cao về O2, dinh dưỡng và thải nhanh CO<sub>2</sub>, các chất thải."
            },
            {
                question: "TB-THOĐV-L4-002. Giải thích tại sao khi bị thương, huyết áp có thể bị giảm.",
                answer: "Mô tổn thương giải phóng histamin → gây dãn mạch, tăng tính thấm của mao mạch → giảm huyết áp."
            },
            {
                question: "TB-THOĐV-L4-003. Giải thích tại sao côn trùng có hệ tuần hoàn hở kém tiến hóa hơn hệ tuần hoàn kín nhưng lại là động vật hoạt động tích cực.",
                answer: "Côn trùng không sử dụng hệ tuần hoàn hở để cung cấp O<sub>2</sub> cho tế bào mà cơ thể trao đổi khí qua hệ thống ống khí. Điều này làm cho sự trao đổi khí diễn ra nhanh. Kích thước côn trùng nhỏ nên vòng tuần hoàn ngắn, vì thế dù tốc độ máu chảy chậm nhưng vẫn đảm bảo cung cấp dinh dưỡng, O<sub>2</sub>, ... đáp ứng được nhu cầu của cơ thể. Mặt khác, côn trùng có cơ thể xốp, nhẹ vì vậy ít tiêu tốn năng lượng cho việc vận động hơn so với các động vật khác cùng kích thước."
            },
            {
                question: "TB-THOĐV-L4-004. Giải thích tại sao người bị bệnh đái tháo đường có huyết áp cao hơn so với người bình thường?",
                answer: "Người bị bệnh đái tháo đường có hàm lượng đường trong máu tăng → tăng độ nhớt của máu → tăng huyết áp."
            },
        ],
    },

    saMDONDV: {
        level1: [
            {
                question: "...",
                answer: "..."
            },
        
        ],
        level2: [
            {
                question: "TB-BTVCBNM-L2-001. ...",
                answer: "..."
            },

          
        ],
        level3: [
            {
                question: "...",
                answer: "..."
            },
           
        ],
        level4: [
            {
                question: "TB-BTVCBNM-L4-001. Nêu nguyên nhân, hậu quả, cách khắc phục sỏi thận, sỏi bàng quang.",
                answer: "Nguyên nhân sỏi thận, sỏi bàng quang: do nước tiểu cô đặc, chứa nhiều chất khoáng (vì uống ít nước; nhịn tiểu, ăn mặn, thay đổi pH môi trường trong cơ thể,…) → kết tinh các ion Ca<sup>2+</sup>; (PO<sub>4</sub>)<sup>3-</sup>,...  tạo thành sỏi và ứ đọng lại ở thận, bàng quang. Hậu quả sỏi thận, sỏi bàng quang: Đường dẫn nước tiểu sẽ bị cản trở gây tắc → người bệnh có thể khó đi tiểu, gây đau; Sỏi trong thận, bàng quang lâu ngày có thể tạo môi trường tốt cho vi khuẩn phát triển, làm nhiễm trùng thận, bàng quang; Sỏi thận có thể gây tổn thương mô thận → giảm chức năng thận. Cách khắc phục sỏi thận, sỏi bàng quang: Uống nhiều nước; Hạn chế ăn thực phẩm chứa nhiều muối (giảm ăn mặn); Không nhịn tiểu; Hạn chế ăn đồ ăn, đồ uống quá chua,…"
            },
        ]
    },
    saBTVCBNM: {
        level1: [
            {
                question: "...",
                answer: "..."
            },
          
        ],
        level2: [
            {
                question: "...",
                answer: "..."
            },

           
        ],
        level3: [
            {
                question: "...",
                answer: "..."
            },
           
        ],
        level4: [
            {
                question: "...",
                answer: "..."
            },
          
        ]
    },
    saKQCUOSV: {
        level1: [
            {
                question: "...",
                answer: "..."
            },
          
        ],
        level2: [
            {
                question: "...",
                answer: "..."
            },

          
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "..."
            },
          
        ],
        level4: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "..."
            },

        ],
    },
    saCUOTV: {
        level1: [
            {
                question: "...",
                answer: "..."
            },
          
        ],
        level2: [
            {
                question: "TB-CƯOTV-L2-001. ...",
                answer: "..."
            },

        
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "..."
            },
          
        ],
        level4: [
            {
                question: "TB-CƯOTV-L4-001. Hãy giải thích hiện tượng cụp lá của cây trinh nữ khi có kích thích. Nêu vai trò của hướng động và ứng động đối với đời sống thực vật.",
                answer: "Khi có kích thích làm nước ở các tế bào thể gối (chỗ phình cuống lá) di chuyển vào các mô lân cận → sức căng trương nước của các tế bào thể gối giảm → lá cây cụp xuống. Vai trò của ứng động và hướng động: Giúp cây thích nghi đa dạng với những biến đổi của môi trường đảm bảo cho cây tồn tại và phát triển theo thời gian."
            },
        ]
    },
    saCUODV: {
        level1: [
            {
                question: "TB-CƯOĐV-L1-001. ...",
                answer: "..."
            },
           
          
        ],
        level2: [
            {
                question: "...",
                answer: ".."
            },

          
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "..."
            },
          
        ],
        level4: [
            {
                question: "TB-CƯOĐV-L4-001. Cho biết ưu điểm của hoạt động cảm ứng ở động vật có hệ thần kinh dạng ống so với động vật có hệ thần kinh dạng lưới và chuỗi hạch.",
                answer: "Phản ứng nhanh, chính xác (hiệu quả cao); Tiết kiệm năng lượng; Có sự phối hợp nhiều phản xạ → giúp sinh vật thích nghi tốt với điều kiện môi trường."
            },
            {
                question: "TB-CƯOĐV-L4-002. Cho biết trung khu điều khiển của phản xạ không điều kiện và có điều kiện.",
                answer: "Trung khu điều khiển của phản xạ không điều kiện là tủy sống và trụ não còn của phản xạ có điều kiện là não bộ (đặc biệt là vỏ não)."
            },
            {
                question: "TB-CƯOĐV-L4-003. Cho biết tính chất của phản xạ không điều kiện và có điều kiện.",
                answer: "Tính chất của phản xạ không điều kiện là bẩm sinh, bền vững, di truyền còn của phản xạ có điều kiện là hình thành trong đời sống cá thể; dễ thay đổi, không di truyền."
            },
            {
                question: "TB-CƯOĐV-L4-003. Cho biết ý nghĩa của phản xạ không điều kiện và có điều kiện.",
                answer: "Ý nghĩa của phản xạ không điều kiện là cơ sở hình thành tập tính bẩm sinh còn của phản xạ có điều kiện là cơ sở hình thành tập tính học được."
            },

        ],
    },
    saKQSTVPT: {
        level1: [
            {
                question: "TB-KQSTVPT-L1-001. Có bao nhiêu phát biểu sau đây đúng về sinh trưởng, phát triển của sinh vật?<br/>(1)	Sinh trưởng và phát triển có liên quan mật thiết với nhau, nối tiếp, xen kẽ nhau.<br/>(2) Phát triển là cơ sở cho sinh trưởng, sinh trưởng làm thay đổi cơ thể, thúc đẩy phát triển.<br/>(3) Cây ra lá là sự phát triển của thực vật.<br/>(4) Con gà tăng từ 1, 2 kg đến 3 kg là sự sinh trưởng của động vật.",
                answer: "3"
            },
          
        ],
        level2: [
            {
                question: "...",
                answer: "..."
            },

          
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/bangmdct.png",
                answer: "..."
            },
        
        ],
        level4: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/bangmdct.png",
                answer: "..."
            },

        ]
    },
    saSTPTOTV: {
        level1: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/consagiong.png",
                answer: "0,56"
            },
         
        ],
        level2: [
            {
                question: "...",
                answer: "6"
            },

         
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "4,47"
            },
           
        ],
        level4: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "..."
            },

        ],
    },

    saSTPTDV: {
        level1: [
            {
                question: "TB-STVPTOĐV-L1-001. Có bao nhiêu dấu hiệu biểu hiện sự sinh trưởng của động vật?<br/>(1) Con bò tăng khối lượng từ 50 kg đến 100 kg.<br/>(2) Con gà trống mọc mào.<br/>(3)	Con gà mái đẻ trứng.<br/>(4) Con rắn tăng chiều dài cơ thể thêm 20 cm.",
                answer: "2"
            },

        ],
        level2: [
            {
                question: "TB-STVPTOĐV-L2-001. Trong các hiện tượng sau, có bao nhiêu hiện tượng thể hiện sinh trưởng và phát triển có liên quan chặt chẽ ở thực vật?<br/>(1)	Cây cà chua sau khi đủ lá mới bắt đầu ra hoa.<br/>(2) Tế bào mô phân sinh ngọn phân chia tạo các tế bào mới nhưng không kèm theo sự phân hoá và phát sinh hình thái.<br/>(3) Sau khi ngâm ủ, hạt ngô nảy mầm, gặp điều kiện thuận lợi, rễ và thân dài ra rất nhanh.<br/>(4)	Cây ăn quả ra hoa, kết quả sau thời kì sinh trưởng mạnh.",
                answer: "3"
            },

        ],
        level3: [
            {
                question: "TB-STVPTOĐV-L3-001. Có bao nhiêu phát biểu đúng khi nói về ứng dụng sinh trưởng và phát triển ở thực vật?<br/>(1) Điều chỉnh trạng thái ngủ nghỉ của hạt giống, củ giống.<br/>(2) Điều khiển sự ra hoa của thực vật dựa trên các hiểu biết về quang chu kì, sự xuân hoá, tương quan dinh dưỡng hay vai trò của các loại hormone.<br/>(3) Xác định tuổi thọ của cây thông qua đếm vòng gỗ.<br/>(4) Lai tạo để tạo các giống cây trồng có năng suất cao.",
                
                answer: "3"
            },
             
          
        ],
        level4: [
            {
                question: "TB-STVPTOĐV-L4-002. Sâu xám là một loại sâu thường gây hại giai đoạn cây con trên tất cả các loại rau. Loài sâu này thường cắn đứt các thân và cành non kéo xuống đất để ăn. Bướm có màu xanh đen, cánh trước màu nâu nhạt hoặc nâu đen, cánh sau trắng có một đường màu đen ở cuối. Bướm hoạt động giao phối và đẻ trứng ban đêm, thích mùi chua ngọt. Bướm có thể đẻ 1200 trứng thành ổ ở trong đất hoặc dưới lá, trên thân, trên cỏ và trên tàn dư trong ruộng gần gốc cây chủ. Sau 4 đến 11 ngày, trứng nở thành sâu non. Sâu non màu xám đen hoặc màu nâu xám dọc theo hai bên thân có một dãy đen mờ.  Sâu non khi bị chạm vào chúng sẽ cuộn lại giả chết. Ban ngày, sâu non ẩn núp ở dưới bề mặt đất hoặc dưới lá. Ban đêm sâu non bò lên mặt đất và ăn ngang thân cây sát mặt đất, làm thân cây bị khuyết hoặc bị cắn đứt. Sâu non có thể gây hại nặng cho cây giống và cây con trên ruộng. Sau 22 đến 34 ngày, sâu hoá nhộng màu xám xanh đến nâu đỏ, có 2 gai ở phía sau.  Sau đó, nhộng phát triển thành bướm trưởng thành và lặp lại vòng đời. <br/>[Nguồn tham khảo: https://chicucttbvtvhcm.gov.vn/cay-rau/sau-xam-465.html] <br/>a. Viết sơ đồ vòng đời của sâu xám hại rau. Sâu xám hại rau có hình thức phát triển nào (không biến thái, biến thái hoàn toàn hay biến thái không hoàn toàn)? Giải thích nhận định của em. <br/>b. Đề xuất ít nhất 4 biện pháp phòng trừ sâu xám hại rau.",

                answer: "a. Trứng --> ấu trùng --> nhộng --> bướm; Sâu xám hại rau có hình thức phát triển qua biến thái hoàn toàn vì ấu trùng (Sâu non) có hình thái và cấu tạo rất khác con trưởng thành (Bướm)<br/>b. Bắt sâu; bẫy đèn; sử dụng thuốc trừ sâu; dùng vợt."
            },
        ]
    },
    saKQSSSV: {
        level1: [
            {
                question: "TB-KQSSSV-L1-001. Khi đi học tập trải nghiệm trong rừng của Vườn quốc gia Cúc Phương, các học sinh được quan sát một số hiện tượng sinh sản của động, thực vật. Có bao nhiêu nhận định nói về đặc điểm của hình thức sinh sản vô tính?<br/>(1) Cá thể sống độc lập, đơn lẻ vẫn có thể tạo ra con cháu.<br/>(2) Đến mùa sinh sản, bướm cái tiết pheromone dẫn dụ bướm đực bay thành đàn.Bướm đực thụ tinh cho bướm cái và đẻ trứng ở mặt dưới của lá cây.< br />(3) Một số loài cây chỉ có thể thích nghi tốt với môi trường sống ổn định, ít biến động.< br />(4) Một số loài động, thực vật được sinh ra rất nhanh, có kiểu hình giống nhau và giống cá thể mẹ về các đặc điểm di truyền.< br />(5) Động, thực vật trong rừng rất đa dạng và phong phú do có sự đa dạng về di truyền.",
                answer: "3"
            },

            // Thêm các câu hỏi SA KQSSSV level 1 khác...
        ],
        level2: [
            {
                question: "TB-KQSSSV-L2-001. ...",
                answer: "..."
            },

            // Thêm các câu hỏi SA KQSSSV level 2...
        ],
        level3: [
            {
                question: "TB-KQSSSV-L3-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },

         
        ],
        level4: [
            {
                question: "TB-KQSSSV-L4-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },


        ],
    },
    saSSOTV: {
        level1: [
            {
                question: "TB-SSOTV-L1-001.  Có rất nhiều loài thực vật có hoa ở trong rừng nguyên sinh. Trong các cấu trúc sau: quả chứa hạt, cây mầm, hạt nảy mầm, cây con, cây trưởng thành. Có bao nhiêu câu trúc có mặt trong vòng đời ở thực vật có hoa?",
                answer: "5"
            },

            // Thêm các câu hỏi SA SSOTV level 1 khác...
        ],
        level2: [
            {
                question: "TB-SSOTV-L2-001. ...",
                answer: "0,12"
            },

            // Thêm các câu hỏi SA SSOTV level 2...
        ],
        level3: [
            {
                question: "TB-SSOTV-L3-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },

         
        ],
        level4: [
            {
                question: "TB-SSOTV-L4-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },


        ],
    },
    saSSODV: {
        level1: [
            {
                question: "TB-KQSSSV-L1-001. ...",
                answer: "4"
            },

            // Thêm các câu hỏi SA KQSSSV level 1 khác...
        ],
        level2: [
            {
                question: "TB-KQSSSV-L2-001. ...",
                answer: "0,12"
            },

        ],
        level3: [
            {
                question: "TB-KQSSSV-L3-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "2,31"
            },

           
        ],
        level4: [
            {
                question: "TB-KQSSSV-L4-001. ...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },

        ]
    },
    saMQHCQT: {
        level1: [
            {
                question: "TB_MQHGCQTSL_L1_001. Có bao nhiêu phát biểu dưới đây là đúng khi nói về Vườn quốc gia Cúc Phương?<br/>(1) Vườn quốc gia Cúc Phương là rừng nguyên sinh, có đa dạng sinh học cao.<br/>(2) Trong Vườn quốc gia Cúc Phương, các loài thực vật duy trì các thế hệ nhờ sinh sản vô tính còn các loài động vật duy trì thế hệ nhờ sinh sản hữu tính.<br/>(3) Các trung tâm bảo tồn của Vườn quốc gia Cúc Phương có vai trò nhân bản vô tính các loài động vật trong điều kiện nuôi nhốt.<br/>(4) Trong Vườn quốc gia Cúc Phương có thể tìm thấy cây Chò chỉ, là loại cây hai lá mầm, chúng có hai kiểu sinh trưởng là sơ cấp và thứ cấp.",
                answer: "2"
            },

        ],
        level2: [
            {
                question: "...",
                answer: "0,12"
            },

        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "2,31"
            },

        ],
        level4: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "..."
            },

        ],
    },
};

// Cập nhật tổng số câu hỏi
function updateTotal() {
    let total = 0;
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        total += parseInt(input.value) || 0;
    });
    document.getElementById('total-questions').textContent = total;

    const errorMessage = document.getElementById('error-message');
    if (total > 40) {
        errorMessage.textContent = 'Tổng số câu hỏi không được vượt quá 40!';
    } else {
        errorMessage.textContent = '';
    }
}

// Thêm sự kiện cho các input
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateTotal);
});

// Lấy câu hỏi ngẫu nhiên
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Tạo đề kiểm tra
function generateExam() {
    const total = parseInt(document.getElementById('total-questions').textContent);
    if (total > 40) {
        alert('Tổng số câu hỏi không được vượt quá 40!');
        return;
    }

    const examContent = document.getElementById('exam-content');
    const answersContent = document.getElementById('answers-content');
    let examHtml = '<h2>ĐỀ KIỂM TRA</h2>';
    let answersHtml = '<h2>ĐÁP ÁN</h2>';
    let questionNumber = 1;

    // Generate MC KQTDCCHNL questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQTDCCHNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQTDCCHNL[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                                        <div class="mcKQTDCCHNL-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcKQTDCCHNL-option" data-index="${idx}">

                                                                    <div class="mcKQTDCCHNL-option-text">${opt}</div>
                                                                </div>
                                                            `).join('')}
                                                        </div>
                                                    </div>
                                                `;
            answersHtml += `
                                                    <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                                                `;
            questionNumber++;
        });
    });
    // Generate MC TDNVK questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTDNVK-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTDNVK[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                                        <div class="mcTDNVK-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcTDNVK-option" data-index="${idx}">

                                                                    <div class="mcTDNVK-option-text">${opt}</div>
                                                                </div>
                                                            `).join('')}
                                                        </div>
                                                    </div>
                                                `;
            answersHtml += `
                                                    <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                                                `;
            questionNumber++;
        });
    });
    // Generate Di truyền Mendel questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcQHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcQHOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                          <div class="question">
                                              <div>
                                                  <span>Câu ${questionNumber}:</span> ${q.question}
                                              </div>
                                              ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                              <div class="mcQHOTV-options">
                                                  ${q.options.map((opt, idx) => `
                                                      <div class="mcQHOTV-option" data-index="${idx}">

                                                          <div class="mcQHOTV-option-text">${opt}</div>
                                                      </div>
                                                  `).join('')}
                                              </div>
                                          </div>
                                      `;
            answersHtml += `
                                          <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                                      `;
            questionNumber++;
        });
    });
    // Generate MC Di truyền Morgan questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcHHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcHHOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcHHOTV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcHHOTV-option" data-index="${idx}">

                                              <div class="mcHHOTV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Di truyền Bổ sung Mendel
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcDDVTHDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDDVTHDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDDVTHDV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDDVTHDV-option" data-index="${idx}">

                                              <div class="mcDDVTHDV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Đột biến gene questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcHHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcHHODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcHHODV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcHHODV-option" data-index="${idx}">

                                              <div class="mcHHODV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Đột biến NST questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTHODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTHODV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTHODV-option" data-index="${idx}">

                                              <div class="mcTHODV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Di truyền học người và ứng dụng DTH questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcMDONDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcMDONDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcMDONDV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcMDONDV-option" data-index="${idx}">

                                              <div class="mcMDONDV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC DT quần thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcBTVCBNM-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcBTVCBNM[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcBTVCBNM-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcBTVCBNM-option" data-index="${idx}">

                                              <div class="mcBTVCBNM-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC KQCUOSV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQCUOSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQCUOSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcKQCUOSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcKQCUOSV-option" data-index="${idx}">

                                              <div class="mcKQCUOSV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC CUOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCUOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCUOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcCUOTV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcCUOTV-option" data-index="${idx}">

                                              <div class="mcCUOTV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC CUODV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCUODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCUODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcCUODV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcCUODV-option" data-index="${idx}">

                                              <div class="mcCUODV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC KQSTVPT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQSTVPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQSTVPT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcKQSTVPT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcKQSTVPT-option" data-index="${idx}">

                                              <div class="mcKQSTVPT-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC STPTOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTPTOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTPTOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTPTOTV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTPTOTV-option" data-index="${idx}">

                                              <div class="mcSTPTOTV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });

    // Generate MC Hệ sinh thái, sinh quyển và bảo vệ môi trường questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTPTDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTPTDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTPTDV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTPTDV-option" data-index="${idx}">

                                              <div class="mcSTPTDV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Hệ sinh thái, sinh quyển và bảo vệ môi trường questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQSSSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQSSSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcKQSSSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcKQSSSV-option" data-index="${idx}">

                                              <div class="mcKQSSSV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Hệ sinh thái, sinh quyển và bảo vệ môi trường questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSSOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSSOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSSOTV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSSOTV-option" data-index="${idx}">

                                              <div class="mcSSOTV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC Hệ sinh thái, sinh quyển và bảo vệ môi trường questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSSODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSSODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSSODV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSSODV-option" data-index="${idx}">

                                              <div class="mcSSODV-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate MC MQHCQT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcMQHCQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcMQHCQT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcMQHCQT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcMQHCQT-option" data-index="${idx}">

                                              <div class="mcMQHCQT-option-text">${opt}</div>
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                          `;
            answersHtml += `
                              <p>Câu ${questionNumber}: ${String.fromCharCode(65 + q.answer)}</p>
                          `;
            questionNumber++;
        });
    });
    // Generate TF KQTDCCHNL questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQTDCCHNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQTDCCHNL[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF TDNVK questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTDNVK-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTDNVK[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF QHOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfQHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfQHOTV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF HHOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfHHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfHHOTV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Bổ sung Mendel questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfDDVTHDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDDVTHDV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Đột biến gene questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfHHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfHHODV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Đột biến NST questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTHODV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF MDONDV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfMDONDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfMDONDV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Di truyền quần thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfBTVCBNM-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfBTVCBNM[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF KQCUOSV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQCUOSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQCUOSV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF CUOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCUOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCUOTV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF CUODV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCUODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCUODV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF KQSTVPT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQSTVPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQSTVPT[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF STPTOTV questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTPTOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTPTOTV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });

    // Generate TF Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTPTDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTPTDV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQSSSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQSSSV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSSOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSSOTV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate TF Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSSODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSSODV[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate MQHCQT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfMQHCQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfMQHCQT[`level${level}`], count);
        questions.forEach(q => {
            examHtml += `
            <div class="question">
                <p>Câu ${questionNumber}: ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                <ol type="a" style="list-style-type: lower-alpha;">
                    ${q.statements.map(s => `<li>${s.text}</li>`).join('')}
                </ol>
            </div>
        `;
            answersHtml += `
            <p>Câu ${questionNumber}: ${q.statements.map((s, i) =>
                `${String.fromCharCode(97 + i)}. ${s.correct ? 'Đ' : 'S'}`).join(', ')}</p>
        `;
            questionNumber++;
        });
    });
    // Generate SA KQTDCCHNL questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQTDCCHNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQTDCCHNL[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA TDNVK questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTDNVK-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTDNVK[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA QHOTV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saQHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saQHOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA HHOTV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saHHOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saHHOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA BS Mendel questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saDDVTHDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDDVTHDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });

    // Generate SA ĐBG questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saHHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saHHODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA ĐBNST questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTHODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTHODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA MDONDV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saMDONDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saMDONDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA Di truyền quần thể questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saBTVCBNM-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saBTVCBNM[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });

    // Generate SA KQCUOSV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQCUOSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQCUOSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA Sự phát sinh chủng loại questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCUOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCUOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA CUODV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCUODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCUODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA KQSTVPT questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQSTVPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQSTVPT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });

    // Generate SA STPTOTV questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTPTOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTPTOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });

    // Generate SA Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTPTDV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTPTDV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA Sinh trưởng và phát triển ở động vật questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQSSSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQSSSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saSSOTV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSSOTV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saSSODV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSSODV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    // Generate SA MQHCQT questions
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saMQHCQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saMQHCQT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                            <div class="question">
                                                                <p>Câu ${questionNumber}: ${q.question}</p>
                                                                ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}

                                                            </div>
                                                        `;
            answersHtml += `
                                                            <p>Câu ${questionNumber}: ${q.answer}</p>
                                                        `;
            questionNumber++;
        });
    });
    examContent.innerHTML = examHtml;
    answersContent.innerHTML = answersHtml;
}

// Xuất file Word
async function exportToWord() {
    const examContent = document.getElementById('exam-content').innerHTML;
    const answersContent = document.getElementById('answers-content').innerHTML;

    // Chức năng chuyển đổi hình ảnh sang base64
    const convertImagesToBase64 = async () => {
        const images = document.querySelectorAll('#exam-content img');
        const promises = Array.from(images).map(img =>
            new Promise((resolve) => {
                if (img.complete) {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    ctx.drawImage(img, 0, 0);
                    const dataUrl = canvas.toDataURL('image/png');
                    resolve(dataUrl);
                } else {
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                        ctx.drawImage(img, 0, 0);
                        const dataUrl = canvas.toDataURL('image/png');
                        resolve(dataUrl);
                    };
                }
            })
        );
        return Promise.all(promises);
    };

    const base64Images = await convertImagesToBase64();

    // Thay thế các hình ảnh trong examContent với base64
    let modifiedContent = examContent;
    let imgIndex = 0;
    modifiedContent = modifiedContent.replace(/<img[^>]*src="([^"]+)"[^>]*>/g, () => {
        return `<img src="${base64Images[imgIndex++]}" style="max-width: 100%; height: auto;" />`;
    });

    const html = `
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <style>
                            body {
                                font-family: Cambria, sans-serif;
                                padding: 40px;
                                text-align:justify;
                            }
                            .question {
                                margin-bottom: 30px;
                                page-break-inside: avoid;
                            }
                            @page {
                                margin: 2cm;
                            }
                        </style>
                    </head>
                    <body>
                    
                        ${modifiedContent}
                        <div class="answers">
                            ${answersContent}
                        </div>
                    </body>
                </html>
            `;

    // Create a Blob and download the Word document
    const blob = new Blob([html], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'de_kiem_tra.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}
function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (có thể thay thế bằng kiểm tra với dữ liệu thực)
    if (username === "Nguyễn Quang Huy" && password === "123456") {
        // Ẩn lớp phủ và hiển thị nội dung chính khi đăng nhập thành công
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        // Hiển thị thông báo lỗi nếu đăng nhập sai
        const errorElement = document.getElementById('error');
        errorElement.style.display = 'block';
        errorElement.textContent = "Sai tên hoặc mật khẩu";
    }
}
