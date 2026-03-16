// Mở đầu

const questionBank = {
    mcMD: {
        level1: [
            {
                "question": "MB_MĐ_L1_001. Sinh học là ngành khoa học nghiên cứu về",
                "options": [
                    "A. sự sống.",
                    "B. vật chất.",
                    "C. năng lượng.",
                    "D. không gian."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_002. Đối tượng chính của sinh học là",
                "options": [
                    "A. các sinh vật và cấp độ tổ chức của thế giới sống.",
                    "B. các phân tử hữu cơ.",
                    "C. các tế bào.",
                    "D. các loài động vật."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_003. Mục tiêu của sinh học là",
                "options": [
                    "A. tìm hiểu cấu trúc của sinh vật.",
                    "B. tìm hiểu cấu trúc và sự vận hành của các quá trình sống.",
                    "C. nghiên cứu về động vật.",
                    "D. nghiên cứu về thực vật."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB_MĐ_L1_004. Sinh học trong tương lai sẽ tập trung vào",
                "options": [
                    "A. y học cổ truyền.",
                    "B. sinh học hệ thống.",
                    "C. khoa học vật liệu.",
                    "D. khoa học máy tính."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_006. Theo định nghĩa của Ủy ban Môi trường và Phát triển Thế giới (WCED), phát triển bền vững là sự phát triển",
                "options": [
                    "A. giải quyết các vấn đề xã hội và môi trường.",
                    "B. đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.",
                    "C. đảm bảo tăng trưởng kinh tế và bảo vệ môi trường.",
                    "D. khai thác và sử dụng hiệu quả tài nguyên thiên nhiên."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_007. Một trong những ứng dụng của sinh học vào lĩnh vực kinh tế là",
                "options": [
                    "A. nghiên cứu về đạo đức sinh học.",
                    "B. phát triển tin sinh học.",
                    "C. tạo ra những giống vật nuôi, cây trồng có khả năng chống chịu tốt.",
                    "D. bảo vệ môi trường sinh thái."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_008. Các vấn đề xã hội liên quan tới sinh học bao gồm",
                "options": [
                    "A. môi trường, kinh tế và giáo dục.",
                    "B. công nghệ, đạo đức và kinh tế.",
                    "C. giáo dục, môi trường và công nghệ.",
                    "D. đạo đức, kinh tế và công nghệ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L1_009. Nghiên cứu sinh học góp phần cung cấp cơ sở khoa học để",
                "options": [
                    "A. bảo vệ môi trường.",
                    "B. phát triển bền vững và giải quyết các vấn đề xã hội.",
                    "C. phát triển công nghệ.",
                    "D. phát triển kinh tế."
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi MC level 1 khác...
        ],
        level2: [
            {
                "question": "MB_MĐ_L2_001. Việc nghiên cứu về vaccine mRNA có ý nghĩa gì trong y học?",
                "options": [
                    "A. Giúp sản xuất thuốc nhanh hơn.",
                    "B. Tạo ra kháng thể nhanh hơn.",
                    "C. Định hướng tế bào tự tạo protein kháng virus.",
                    "D. Tăng sức đề kháng tự nhiên."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_002. Trong nông nghiệp, sinh học giúp ích như thế nào?",
                "options": [
                    "A. Tạo ra máy móc hiện đại.",
                    "B. Tạo giống cây trồng kháng bệnh.",
                    "C. Sản xuất phân bón.",
                    "D. Xây dựng nhà kính."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_003. Vai trò của sinh học trong bảo vệ môi trường là gì?",
                "options": [
                    "A. Tạo ra năng lượng sạch.",
                    "B. Xử lí ô nhiễm bằng các phương pháp sinh học.",
                    "C. Sản xuất thực phẩm sạch.",
                    "D. Bảo tồn động vật."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_004. Sinh học và ngành y _ dược học có mối liên hệ như thế nào?",
                "options": [
                    "A. Sản xuất thuốc.",
                    "B. Chẩn đoán bệnh.",
                    "C. Điều trị bệnh.",
                    "D. Sản xuất thuốc, chẩn đoán và điều trị bệnh."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_005. Công nghệ di truyền trong nông nghiệp giúp:",
                "options": [
                    "A. Tăng năng suất cây trồng.",
                    "B. Tạo giống kháng bệnh.",
                    "C. Cải thiện chất lượng.",
                    "D. Tạo giống kháng bệnh, tăng năng suất và cải thiện chất lượng cây trồng."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_006. Vì sao việc áp dụng công nghệ sinh học vào thực tiễn có thể gây ra những vấn đề về đạo đức?",
                "options": [
                    "A. Vì làm thay đổi năng suất cây trồng.",
                    "B. Vì tác động đến môi trường tự nhiên.",
                    "C. Vì có thể tác động đến thông tin di truyền của sinh vật.",
                    "D. Vì ảnh hưởng đến kinh tế."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_007. Mối quan hệ giữa sinh học và phát triển bền vững được thể hiện qua:",
                "options": [
                    "A. Chỉ phát triển công nghệ sinh học.",
                    "B. Chỉ tập trung vào bảo vệ môi trường.",
                    "C. Chỉ phục vụ phát triển kinh tế.",
                    "D. Việc ứng dụng sinh học giúp bảo vệ môi trường và phát triển kinh tế xã hội."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_008. Tại sao nghiên cứu sinh học cần hướng tới sự phát triển bền vững?",
                "options": [
                    "A. Vì công nghệ đang phát triển nhanh.",
                    "B. Vì cần đảm bảo hài hòa giữa phát triển và bảo vệ các thế hệ tương lai.",
                    "C. Vì chỉ cần tập trung phát triển kinh tế.",
                    "D. Vì môi trường đang bị hủy hoại."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_009. Vai trò của sinh học trong việc bảo vệ môi trường là gì?",
                "options": [
                    "A. Chỉ tập trung vào phát triển kinh tế.",
                    "B. Tạo ra nhiều sản phẩm công nghệ.",
                    "C. Nghiên cứu về di truyền.",
                    "D. Nghiên cứu và đề xuất giải pháp giảm thiểu ô nhiễm và bảo tồn đa dạng sinh học."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_010. Ý nghĩa của việc nghiên cứu sinh học đối với vấn đề đạo đức là gì?",
                "options": [
                    "A. Chỉ phục vụ phát triển kinh tế.",
                    "B. Bảo vệ môi trường.",
                    "C. Giúp hiểu và giải quyết các vấn đề đạo đức trong ứng dụng sinh học.",
                    "D. Tạo ra nhiều sản phẩm mới."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_011. Vì sao cần phải tuân thủ quy tắc an toàn trong phòng thí nghiệm?",
                "options": [
                    "A. Để tránh tai nạn và bảo vệ sức khỏe.",
                    "B. Để tiết kiệm thời gian.",
                    "C. Để đạt kết quả thí nghiệm tốt hơn.",
                    "D. Để giữ gìn thiết bị."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_012. Tại sao <b>không</b> được ăn uống trong phòng thí nghiệm?",
                "options": [
                    "A. Để giữ vệ sinh phòng thí nghiệm.",
                    "B. Tránh nhiễm các hóa chất độc hại.",
                    "C. Không làm ảnh hưởng đến thí nghiệm.",
                    "D. Để không làm ảnh hưởng đến thí nghiệm, giữ vệ sinh và tránh nhiễm hóa chất độc hại."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_013. Quá trình nghiên cứu sinh học luôn bắt đầu từ:",
                "options": [
                    "A. Thực nghiệm.",
                    "B. Quan sát.",
                    "C. Đặt giả thuyết.",
                    "D. Kết luận."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_014. Việc ghi chép số liệu quan sát có thể thực hiện thông qua:",
                "options": [
                    "A. Chỉ bằng máy ghi hình.",
                    "B. Chỉ bằng ghi chép tay.",
                    "C. Bằng cách quan sát hoặc thiết bị ghi hình.",
                    "D. Chỉ bằng thiết bị chuyên dụng."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_015. Mục đích của việc đề xuất giả thuyết khoa học là",
                "options": [
                    "A. Để có câu trả lời ngay lập tức.",
                    "B. Để giải thích hiện tượng quan sát được.",
                    "C. Để kết thúc nghiên cứu.",
                    "D. Để bắt đầu quan sát."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_016. Tại sao tế bào được coi là đơn vị cơ bản của sự sống?",
                "options": [
                    "A. Vì tế bào là cấp độ nhỏ nhất.",
                    "B. Vì tế bào có đầy đủ các đặc điểm của sự sống.",
                    "C. Vì tế bào dễ quan sát.",
                    "D. Vì tế bào có trong mọi sinh vật."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_017. Khi nói các cấp độ tổ chức sống là những hệ mở, điều này có nghĩa là",
                "options": [
                    "A. Chúng luôn trao đổi vật chất với môi trường.",
                    "B. Chúng không bao giờ thay đổi.",
                    "C. Chúng hoàn toàn độc lập với môi trường.",
                    "D. Chúng không cần năng lượng để tồn tại."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_018. Mối quan hệ giữa các cấp độ tổ chức thể hiện rõ nhất qua:",
                "options": [
                    "A. Kích thước của chúng.",
                    "B. Màu sắc của chúng.",
                    "C. Sự chuyển hóa vật chất và năng lượng.",
                    "D. Vị trí của chúng trong không gian."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_019. Tính tự điều chỉnh của sinh vật được hiểu là",
                "options": [
                    "A. Khả năng thích nghi với môi trường mới.",
                    "B. Khả năng duy trì trạng thái ổn định bên trong.",
                    "C. Khả năng sinh sản.",
                    "D. Khả năng trao đổi chất."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L2_020. Các bào quan trong tế bào có mối quan hệ với nhau thông qua:",
                "options": [
                    "A. Vị trí trong tế bào.",
                    "B. Kích thước của chúng.",
                    "C. Quá trình trao đổi chất.",
                    "D. Màu sắc của chúng."
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi MC level 2 khác...

        ],
        level3: [
            {
                "question": "MB_MĐ_L3_001. Khi nghiên cứu về virus SARS_CoV_2, các nhà khoa học đã ứng dụng kiến thức nào sau đây?",
                "options": [
                    "A. Sinh học phân tử và di truyền học.",
                    "B. Sinh học tế bào và miễn dịch học.",
                    "C. Sinh học phân tử, sinh học tế bào, di truyền học và miễn dịch học.",
                    "D. Di truyền học và miễn dịch học."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_002. Trong việc xử lí ô nhiễm môi trường, vi khuẩn <em>Chlorella vulgaris</em> được ứng dụng để",
                "options": [
                    "A. Phân hủy rác thải.",
                    "B. Hấp thụ CO<sub>2</sub>.",
                    "C. Tạo năng lượng sinh học.",
                    "D. Làm sạch nước."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_003. Việc ứng dụng sinh học trong công nghệ thực phẩm giúp:",
                "options": [
                    "A. Kéo dài thời gian bảo quản.",
                    "B. Tăng giá trị dinh dưỡng.",
                    "C. Cải thiện mùi vị.",
                    "D. Tăng giá trị dinh dưỡng, cải thiện mùi vị và kéo dài thời gian bảo quản."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_004. Trong việc phát triển vaccine mRNA, các nhà khoa học đã sử dụng nguyên lí nào?",
                "options": [
                    "A. Tế bào tự tạo kháng thể.",
                    "B. Protein tự nhân bản.",
                    "C. Tế bào tự tổng hợp protein kháng virus.",
                    "D. Virus tự nhân bản."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_005. Khi áp dụng công nghệ sinh học trong nông nghiệp, việc nào sau đây là quan trọng nhất?",
                "options": [
                    "A. Đảm bảo an toàn sinh học.",
                    "B. Tăng năng suất.",
                    "C. Giảm chi phí sản xuất.",
                    "D. Tăng lợi nhuận."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_006. Khi áp dụng công nghệ sinh học để tạo ra giống cây trồng mới, vấn đề đạo đức nào cần được quan tâm?",
                "options": [
                    "A. Chi phí sản xuất cao.",
                    "B. Tác động đến đa dạng sinh học và an toàn sinh học.",
                    "C. Thời gian nghiên cứu lâu.",
                    "D. Khó khăn trong việc nhân giống."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_007. Trong tương lai, làm thế nào để đảm bảo sự phát triển bền vững khi ứng dụng sinh học vào thực tiễn?",
                "options": [
                    "A. Chú trọng vào sản xuất quy mô lớn.",
                    "B. Ưu tiên phát triển công nghệ mới.",
                    "C. Cân bằng giữa lợi ích kinh tế và bảo vệ môi trường, xem xét các vấn đề đạo đức.",
                    "D. Chỉ tập trung vào lợi ích kinh tế."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_008. Nếu phát hiện một gene có khả năng gây bệnh nguy hiểm ở người, các nhà khoa học nên:",
                "options": [
                    "A. Công bố ngay lập tức.",
                    "B. Giữ bí mật thông tin.",
                    "C. Chỉ thông báo cho một số người.",
                    "D. Nghiên cứu kĩ lưỡng và xem xét các vấn đề đạo đức trước khi công bố."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_009. Khi phát triển một loại thuốc mới từ thực vật, các nhà khoa học cần quan tâm đến yếu tố nào nhất?",
                "options": [
                    "A. Chi phí sản xuất thuốc.",
                    "B. Chỉ quan tâm đến hiệu quả điều trị.",
                    "C. Tác động đến môi trường, hiệu quả và tính an toàn của thuốc.",
                    "D. Thời gian nghiên cứu."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_010. Trong việc phát triển nông nghiệp bền vững, vai trò của sinh học thể hiện qua:",
                "options": [
                    "A. Chỉ quan tâm đến bảo vệ môi trường.",
                    "B. Tạo ra giống cây trồng vừa năng suất cao vừa thân thiện với môi trường.",
                    "C. Giảm chi phí sản xuất.",
                    "D. Chỉ tập trung tăng năng suất."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_011. Khi phân tích kết quả thí nghiệm về tác dụng của thuốc lá với phổi, cần phải:",
                "options": [
                    "A. Chỉ quan sát nhóm sử dụng thuốc.",
                    "B. So sánh giữa nhóm đối chứng và nhóm thực nghiệm.",
                    "C. Chỉ quan sát nhóm không sử dụng thuốc.",
                    "D. Không cần so sánh giữa các nhóm."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_012. Khi thực hiện một nghiên cứu về ảnh hưởng của ô nhiễm không khí đến sức khỏe cây trồng, phương pháp nào sau đây là phù hợp nhất?",
                "options": [
                    "A. Chỉ quan sát.",
                    "B. Chỉ thực nghiệm.",
                    "C. Kết hợp quan sát và thực nghiệm.",
                    "D. Chỉ dựa vào tài liệu có sẵn."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_013. Trong một nghiên cứu về tác động của nhiệt độ đến tốc độ nảy mầm của hạt giống, yếu tố nào cần được kiểm soát?",
                "options": [
                    "A. Chỉ nhiệt độ.",
                    "B. Nhiệt độ và độ ẩm.",
                    "C. Nhiệt độ, độ ẩm và ánh sáng.",
                    "D. Tất cả các yếu tố môi trường."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_014. Khi kết quả thí nghiệm <b>không</b> phù hợp với giả thuyết ban đầu, nhà nghiên cứu nên:",
                "options": [
                    "A. Bỏ qua kết quả đó.",
                    "B. Chỉ ghi nhận kết quả phù hợp.",
                    "C. Điều chỉnh lại giả thuyết và thiết kế thí nghiệm mới.",
                    "D. Dừng nghiên cứu."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_015. Để đảm bảo tính khách quan của một nghiên cứu về tác dụng của một loại thuốc mới, cần:",
                "options": [
                    "A. Chỉ test trên một nhóm đối tượng.",
                    "B. Thực hiện nhiều lần trên các nhóm đối tượng khác nhau.",
                    "C. Chỉ quan sát trong thời gian ngắn.",
                    "D. Không cần thiết kế nhóm đối chứng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_016. Khi một người bị sốt cao, bác sĩ thường khuyên dùng thuốc hạ sốt. Điều này liên quan đến đặc điểm nào của sinh vật?",
                "options": [
                    "A. Trao đổi chất.",
                    "B. Tự điều chỉnh.",
                    "C. Tiến hóa",
                    "D. Di truyền."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_017. Trong quá trình tiến hóa, vi khuẩn kháng thuốc xuất hiện ngày càng nhiều. Hiện tượng này thể hiện đặc điểm nào của sinh vật?",
                "options": [
                    "A. Tự điều chỉnh.",
                    "B. Trao đổi chất.",
                    "C. Tiến hóa thích nghi.",
                    "D. Sinh sản."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_018. Khi cơ thể thiếu vitamin D, canxi không được hấp thu tốt, dẫn đến loãng xương. Điều này cho thấy mối quan hệ giữa:",
                "options": [
                    "A. Các cơ quan trong cơ thể.",
                    "B. Các phân tử trong tế bào.",
                    "C. Các mô trong xương.",
                    "D. Các cấp độ tổ chức sống."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_019. Một loài thực vật sống ở vùng khô hạn có lá nhỏ, có gai và lớp sáp dày. Đặc điểm này thể hiện:",
                "options": [
                    "A. Khả năng sinh sản.",
                    "B. Khả năng thích nghi.",
                    "C. Khả năng trao đổi chất.",
                    "D. Khả năng vận động."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_MĐ_L3_020. Quá trình photphoryl hóa ở ti thể tạo ra ATP cung cấp năng lượng cho tế bào. Điều này thể hiện:",
                "options": [
                    "A. Mối quan hệ giữa các bào quan.",
                    "B. Sự tiến hóa của tế bào.",
                    "C. Khả năng sinh sản của tế bào.",
                    "D. Khả năng phân chia của tế bào."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MC level 3 khác...
        ]
    },
    mcPPNCHT: {
        level1: [
            {
                "question": "MB_PPNCHT_L1_001. Hình dưới đây minh họa về",
                "options": [
                    "A. cánh đồng lúa.",
                    "B. hệ thống thủy canh.",
                    "C. giống ngô biến đổi gene.",
                    "D. vườn rau sạch."
                ],
                "answer": 2,
                "image": "https://nhantri.top/media/Grade10/ngobdg.jpg",
            },
            {
                "question": "MB_PPNCHT_L1_002. Trong phương pháp quan sát trong môn Sinh học, đối tượng quan sát là gì?",
                "options": [
                    "A. Sinh vật và các qúa trình sống.",
                    "B. Các sinh vật.",
                    "C. Các quy trình sống.",
                    "D. Không có đối tượng cụ thể."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_003. Kính hiển vi quang học sử dụng nguồn sáng nào?",
                "options": [
                    "A. Tia X.",
                    "B. Ánh sáng mặt trời.",
                    "C. Tia cực tím.",
                    "D. Tia hồng ngoại."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_004. Độ phóng đại của kính hiển vi quang học có thể đạt tối đa:",
                "options": [
                    "A. 100 lần.",
                    "B. 200 lần.",
                    "C. 1500 lần.",
                    "D. 50 triệu lần."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_005. Máy li tâm được sử dụng để làm gì trong phòng thí nghiệm?",
                "options": [
                    "A. Tách các loại bào quan.",
                    "B. Quan sát tế bào.",
                    "C. Đo kích thước tế bào.",
                    "D. Nhuộm màu tế bào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_006. Trong phòng thí nghiệm, người nghiên cứu cần mặc:",
                "options": [
                    "A. áo blouse trắng.",
                    "B. quần áo thường ngày.",
                    "C. áo khoác dày.",
                    "D. đồng phục riêng."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_007. Tin sinh học (Bioinformatics) là ngành khoa học sử dụng công cụ nào để nghiên cứu sinh học?",
                "options": [
                    "A. Các phần mềm máy tính chuyên dụng.",
                    "B. Các dụng cụ thí nghiệm.",
                    "C. Các mô hình vật lí.",
                    "D. Các thiết bị điện tử."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_008. Một trong những ứng dụng quan trọng của tin sinh học là",
                "options": [
                    "A. thiết kế robot.",
                    "B. tìm kiếm các gene trong hệ gene và so sánh các hệ gene.",
                    "C. xây dựng phần mềm giải trí.",
                    "D. lập trình game."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_009. Việc ứng dụng trí tuệ nhân tạo trong nghiên cứu y sinh học đã giúp:",
                "options": [
                    "A. tạo ra các loại thuốc mới.",
                    "B. chẩn đoán bệnh nhân.",
                    "C. thiết kế thiết bị y tế.",
                    "D. tìm hiểu cách điều trị cho từng bệnh nhân."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB_PPNCHT_L1_010. Để đánh giá ảnh hưởng của ánh sáng đến sự phát triển của thân cây bước đầu tiên ta phải quan sát hai chậu cây …(1)… được đặt ở vị trí …(2)…",
                "options": [
                    "A. 1 – cùng loài; 2 – giống nhau.",
                    "B. 1 – cùng loài; 2 – khác nhau.",
                    "C. 1 – khác loài; 2 – giống nhau.",
                    "D. 1 – khác loài; 2 – khác nhau."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_011. …(1)… là công cụ hỗ trợ đắc lực cho ngành khoa học công nghệ …(2)…",
                "options": [
                    "A. 1 – Tin sinh học; 2 – sinh học.",
                    "B. 1 – Tin sinh học; 2 – thông tin.",
                    "C. 1 – Hóa tin học; 2 – sinh học.",
                    "D. 1 – Hóa tin học; 2 – thông tin."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_012. Nghiên cứu khoa học nói chung và sinh học nói riêng là",
                "options": [
                    "A. quá trình thu thập thông tin.",
                    "B. quá trình xử lí thông tin.",
                    "C. quá trình học tập kiến thức sinh học.",
                    "D. quá trình thu thập và xử lí thông tin."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_013. Đâu là phương pháp nghiên cứu sinh học?",
                "options": [
                    "A. Phương pháp quan sát.",
                    "B. Phương pháp phân tích.",
                    "C. Phương pháp tìm kiếm thông tin.",
                    "D. Phương pháp xử lí dữ liệu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_014. Phương pháp quan sát là",
                "options": [
                    "A. phương pháp sử dụng cảm giác để thu thập thông tin.",
                    "B. phương pháp sử dụng tri giác để thông thập thông tin về đối tượng quan sát.",
                    "C. phương pháp sử dụng tri giác để xử lí thông tin về đối tượng quan sát.",
                    "D. phương pháp sử dụng cảm giác để xử lí thông tin."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB_PPNCHT_L1_015. Thế nào là phương pháp thực nghiệm khoa học?",
                "options": [
                    "A. Phương pháp thực nghiệm khoa học là phương pháp khoa học dùng để phân minh giữa mô hình khoa học hay giả thuyết.",
                    "B. Phương pháp thực nghiệm khoa học được thực hiện bằng nhiều cách căn cứ vào tính chất riêng của các chỉ tiêu số lượng lượng: đo trực tiếp, phương pháp phân tích hóa trị, phương pháp tính toán,.",
                    "C. Phương pháp thực nghiệm khoa học là phương pháp chủ động tác động vào đối tượng nghiên cứu và những hoạt động của đối tượng đó nhằm kiểm soát sự phát triển của chúng một cách có chủ đích.",
                    "D. Phương pháp thực nghiệm khoa học là phương pháp nghiên cứu xuất phát từ sự quan sát khách quan từ các hiện tượng tự nhiên."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_016. Đâu không phải là dụng cụ dùng trong nghiên cứu và học tập môn Sinh học?",
                "options": [
                    "A. Ống nghe.",
                    "B. Micropipette.",
                    "C. Mô hình.",
                    "D. Kính hiển vi"
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB_PPNCHT_L1_017. Tin sinh học là gì?",
                "options": [
                    "A. Là một ngành khoa học chuyên nghiên cứu quá trình tự động hóa việc tổ chức, lưu trữ, xử lý và truyền dẫn thông tin của một hệ thống máy tính cụ thể hoặc trừu tượng.",
                    "B. Là ngành khoa học tìm kiếm, phát hiện mô phỏng quy luật vận động của thế giới sống.",
                    "C. Tin sinh học được con người xử lí dữ liệu.",
                    "D. Tin sinh học là công nghệ của tương lai."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_018. Tin sinh học là công cụ hỗ trợ đắc lực cho ngành khoa học công nghệ nào?",
                "options": [
                    "A. Công nghệ hóa học.",
                    "B. Công nghệ thông tin.",
                    "C. Công nghệ sinh học.",
                    "D. Công nghệ thực phẩm."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L1_019. Chức năng của kính hiển vi quang học là",
                "options": [
                    "A. dùng để quan sát cấu trúc của vật, vi sinh vật có kích thước nhỏ mắt thường không quan sát được.",
                    "B. dùng để đọc chữ, quan sát kĩ các bộ phận của các vật thể có kích thước nhỏ được dùng nhiều trong trường học hoặc các phòng thí nghiệm.",
                    "C. dụng cụ quang bổ trợ cho mắt, có tác dụng tạo ảnh có góc trông lớn đối với vật ở rất xa.",
                    "D. dùng chữa các tật khúc xạ của mắt như cận thị, loạn thị và viễn thị."
                ],
                "answer": 0,
                "image": null
            },



            // Thêm các câu hỏi Phương pháp nghiên cứu và học tập môn Sinh học level 1 khác...
        ],
        level2: [
            {
                "question": "MB_PPNCHT_L2_001. Có thể lưu giữ kết quả quan sát bằng nhiều hình thức, ngoại trừ",
                "options": [
                    "A. Ghi trên giấy.",
                    "B. Ghi âm, video.",
                    "C. Tự ghi nhớ.",
                    "D. Ghi trực tuyến."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_002. Tế bào có thể quan sát được bằng mắt thường hoặc kính lúp là tế bào",
                "options": [
                    "A. biểu bì lá cây.",
                    "B. niêm mạc miệng.",
                    "C. cơ bò.",
                    "D. trứng cá."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_003. Quan sát trong tiến trình nghiên cứu Sinh học để",
                "options": [
                    "A. trải nghiệm các sự vật hiện tượng theo nhiều khía cạnh nhằm thu thập dữ liệu.",
                    "B. đặt ra vấn đề cần nghiên cứu.",
                    "C. chứng minh cho giả thuyết về vấn đề nghiên cứu được đề ra.",
                    "D. công bố kết quả nghiên cứu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_004. Để chứng minh cho giả thuyết về vấn đề nghiên cứu cần phải làm gì?",
                "options": [
                    "A. Đặt ra câu hỏi nghiên cứu.",
                    "B. Xây dựng giả thuyết.",
                    "C. Thiết kế và tiến hành thực nghiệm.",
                    "D. Điều tra, khảo sát thực địa các thí nghiệm."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_005. Bước nào trong tiến trình nghiên cứu Sinh học đưa ra câu hỏi cần kiếm chứng để biết đúng sai?",
                "options": [
                    "A. Quan sát và đặt câu hỏi.",
                    "B. Thiết kế và tiến hành các thí nghiệm.",
                    "C. Xây dựng giả thuyết.",
                    "D. Làm báo cáo kết quả nghiên cứu."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_006. Nội dung nào cần được nêu rõ trong báo cáo kết quả nghiên cứu?",
                "options": [
                    "A. Mục đích nghiên cứu.",
                    "B. Thái độ của mọi người đối với vấn đề nghiên cứu.",
                    "C. Dụng cụ nghiên cứu.",
                    "D. Số liệu cụ thể từng thực nghiệm trong tiến trình nghiên cứu."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_007. Nếu bác bỏ giả thuyết trong tiến trình nghiên cứu Sinh học ta phải",
                "options": [
                    "A. đặt lại câu hỏi nghiên cứu.",
                    "B. hình thành giả thuyết mới.",
                    "C. quan sát lại đối tượng.",
                    "D. xác định lại dụng cụ quan sát."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L2_008. Để đánh giá ảnh hưởng của ánh sáng đến sự phát triển của thân cây bước đầu tiên ta phải",
                "options": [
                    "A. tiến hành trồng hai chậu cây cùng loài.",
                    "B. đưa ra giả thuyết Nếu đặt chậu cây ở một vị trí bất kì thì thân cây sẽ cong về hướng có ánh sáng.",
                    "C. đặt ra câu hỏi Hình thái của thân cây có liên quan đến vị trí đặt chậu cây không?.",
                    "D. quan sát hai chậu cây cùng loài được đặt ở 2 vị trí khác nhau."
                ],
                "answer": 3,
                "image": null
            },




            // Thêm các câu hỏi Phương pháp nghiên cứu và học tập môn Sinh học level 2 khác...

        ],
        level3: [
            {
                "question": "MB_PPNCHT_L3_001. Phương pháp sử dụng tri giác để thu thập thông tin về đối tượng quan sát là phương pháp",
                "options": [
                    "A. quan sát.",
                    "B. làm việc trong phòng thí nghiệm.",
                    "C. thực nghiệm khoa học.",
                    "D. kết hợp."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_002. Để quan sát cấu tạo một số sinh vật đơn bào (trùng roi, trùng giày,..) ta sử dụng phương pháp",
                "options": [
                    "A. quan sát.",
                    "B. làm việc trong phòng thí nghiệm.",
                    "C. phân tích.",
                    "D. thực nghiệm khoa học."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_003. Để phân loại thực vật theo đặc điểm cơ quan sinh dưỡng (rễ, thân, lá) và cơ quan sinh sản (hoa, quả, hạt) ta sử dụng phương pháp",
                "options": [
                    "A. thực nghiệm.",
                    "B. thí nghiệm.",
                    "C. báo cáo số liệu.",
                    "D. quan sát."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_004. Để đánh giá ảnh hưởng của nguồn nước đến sự phát triển rễ cây ta sử dụng phương pháp",
                "options": [
                    "A. làm việc trong phòng thí nghiệm.",
                    "B. thực nghiệm khoa học.",
                    "C. phân tích khoa học.",
                    "D. báo cáo số liệu."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_005. Để đánh giá ảnh hưởng của nhiệt độ đến sự nảy mầm của hạt ta có thể sử dụng phương pháp nghiên cứu nào?",
                "options": [
                    "A. Phương pháp làm việc trong phòng thí nghiệm.",
                    "B. Phương pháp thực nghiệm khoa học.",
                    "C. Phương pháp giải phẫu.",
                    "D. Phương pháp quan sát."
                ],
                "answer": 1,
                "image": null
            },

            {
                "question": "MB_PPNCHT_L3_006. Để nghiên cứu vấn đề thúc đẩy thanh long ra quả trái vụ ta sử dụng phương pháp",
                "options": [
                    "A. quan sát.",
                    "B. làm việc trong phong thí nghiệm.",
                    "C. thực nghiệm khoa học.",
                    "D. trồng trọt hiệu quả."
                ],
                "answer": 2,
                "image": null
            },

            {
                "question": "MB_PPNCHT_L3_007. Có nhiều nguyên nhân làm cho muối dưa cải bị hư hỏng, trong đó có hai nguyên nhân được đưa ra: (1) do đậy nắp hũ dưa không kín; (2) do không đảm bảo về điều kiện ánh sáng. Dựa vào phương pháp nào để xác định đâu là nguyên nhân làm cho dưa cải muối bị hỏng?",
                "options": [
                    "A. Phương pháp quan sát.",
                    "B. Phương pháp thí nghiệm.",
                    "C. Phương pháp thực nghiệm khoa học.",
                    "D. Phương pháp phân tích"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_008. Để tiến hành thực nghiệm nghiên cứu vấn đề thúc đẩy thanh long ra quả trái vụ ta cần phải thực hiện hoạt động gì?",
                "options": [
                    "A. Lựa chọn vườn thanh long để thực nghiệm.",
                    "B. Bón phân, chăm sóc vườn trước xử lý.",
                    "C. Ghi nhận thời gian ra hoa và mức độ phát triển của hoa.",
                    "D. Xử lí số liệu thu thập được và báo cáo kết quả."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_009. Xây dựng ngân hàng gene là ứng dụng của ngành khoa học nào?",
                "options": [
                    "A. Sinh học tiến hóa.",
                    "B. Sinh học tế bào.",
                    "C. Tin sinh học.",
                    "D. Hóa tin học."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_PPNCHT_L3_010. Quan sát và so sánh sự phát triển của 2 chậu cây trong thí nghiệm trồng 2 chậu cây ở 2 vị trí khác nhau. Từ đó đưa ra kết luận cho giả thuyết được đặt ra là đúng hay sai là nội dung của bước nào trong tiến trình nghiên cứu ảnh hướng của ánh sáng đến sự phát triển thân cây?",
                "options": [
                    "A. Quan sát và đặt câu hỏi nghiên cứu.",
                    "B. Xây dựng giả thuyết.",
                    "C. Thiết kế và tiến hành thực nghiệm.",
                    "D. Điều tra, khảo sát thực địa hay thí nghiệm."
                ],
                "answer": 0,
                "image": null
            },

            // Thêm các câu hỏi Phương pháp nghiên cứu và học tập môn Sinh học level 3 khác...
        ]
    },
    mcCCDTCS: {
        level1: [
            {
                "question": "MB_CCĐTCS_L1_001. Đặc tính quan trọng nhất đảm bảo tính bền vững và ổn định tương đối của tổ chức sống là",
                "options": [
                    "A. Trao đổi chất và năng lượng.",
                    "B. Sinh sản.",
                    "C. Sinh trưởng và phát triển.",
                    "D. Khả năng tự điều chỉnh và cân bằng nội môi."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_002. “Tổ chức sống cấp thấp hơn làm nền tảng để xây dựng nên tổ chức sống cấp cao hơn” giải thích cho nguyên tắc nào của thế giới sống?",
                "options": [
                    "A. Nguyên tắc thứ bậc.",
                    "B. Nguyên tắc mở.",
                    "C. Nguyên tắc tự điều chỉnh.",
                    "D. Nguyên tắc bổ sung."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_003. Đàn voi sống trong rừng thuộc cấp độ tổ chức sống nào dưới đây?",
                "options": [
                    "A. Cá thể.",
                    "B. Quần thể.",
                    "C. Quần xã.",
                    "D. Hệ sinh thái."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_004. Đơn vị tổ chức cơ sở của mọi sinh vật là",
                "options": [
                    "A. Các đại phân tử.",
                    "B. Mô.",
                    "C. Tế bào.",
                    "D. Cơ quan."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_005. Tập hợp các cá thể cùng loài, cùng sống trong một không gian nhất định vào một thời điểm xác định và có quan hệ sinh sản với nhau được gọi là",
                "options": [
                    "A. Quần xã.",
                    "B. Sinh quyển.",
                    "C. Quần thể.",
                    "D. Hệ sinh thái."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_006. Đơn vị tổ chức nhỏ nhất có đầy đủ các đặc điểm của sự sống là",
                "options": [
                    "A. Tế bào.",
                    "B. Mô.",
                    "C. Cơ quan.",
                    "D. Nguyên tử."
                ],
                "answer": 0,
                "image": null
            },

            {
                "question": "MB_CCĐTCS_L1_007. Thế giới sống được tổ chức theo nguyên tắc:",
                "options": [
                    "A. Từ đơn giản đến phức tạp.",
                    "B. Từ phức tạp đến đơn giản.",
                    "C. Không theo quy luật nào.",
                    "D. Ngẫu nhiên."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_008. Đặc điểm nào <b>không</b> phải là đặc điểm chung của thế giới sống?",
                "options": [
                    "A. Tự điều chỉnh.",
                    "B. Trao đổi chất.",
                    "C. Không thay đổi.",
                    "D. Tiến hóa."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_009. Mối quan hệ giữa các cấp độ tổ chức sống dựa trên:",
                "options": [
                    "A. Hoạt động trao đổi chất.",
                    "B. Sự vận động.",
                    "C. Sự chuyển hóa vật chất và năng lượng.",
                    "D. Sự phân chia tế bào."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_010. Mối quan hệ giữa các cấp độ tổ chức sống dựa trên:",
                "options": [
                    "A. Hoạt động trao đổi chất.",
                    "B. Sự vận động.",
                    "C. Sự chuyển hóa vật chất và năng lượng.",
                    "D. Sự phân chia tế bào."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_011. Thế nào là các cấp tổ chức của thế giới sống?",
                "options": [
                    "A. Là tập hợp các cấp tổ chức nhỏ nhất trong thế giới sống.",
                    "B. Là tập hợp các cấp tổ chức từ nhỏ nhất đến lớn nhất trong thế giới sống.",
                    "C. Là tập hợp các cấp tổ chức lớn nhất trong thế giới sống.",
                    "D. Là đơn vị tổ chức từ cấp nhỏ nhất đến lớn nhất trong thế giới sống."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_012. Cấp độ tổ chức nhỏ nhất trong cấp độ tổ chức sống là gì?",
                "options": [
                    "A. Nguyên tử.",
                    "B. Phân tử.",
                    "C. Tế bào.",
                    "D. Hợp tử."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_013. Trong các cấp độ sau đây, cấp độ nào là lớn nhất?",
                "options": [
                    "A. Tế bào.",
                    "B. Quần xã.",
                    "C. Quần thể.",
                    "D. Bào quan."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_014. Tổ chức sống nào sau đây là bào quan?",
                "options": [
                    "A. Tim.",
                    "B. Phổi.",
                    "C. Lục lạp.",
                    "D. Não."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_015. Đơn vị tổ chức cơ sở của mọi sinh vật là",
                "options": [
                    "A. các đại phân tử.",
                    "B. tế bào.",
                    "C. mô.",
                    "D. cơ quan."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_016. Căn cứ chủ yếu để coi tế bào là đơn vị cơ bản của sự sống là vì chúng",
                "options": [
                    "A. có cấu tạo phức tạp.",
                    "B. có cấu tạo đơn giản.",
                    "C. được cấu tạo bởi nhiều bào quan.",
                    "D. biểu hiện đầy đủ các đặc tính của sự sống."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_017. Cấp tổ chức sống nào dưới đây bao hàm các cấp tổ chức sống còn lại?",
                "options": [
                    "A. Cơ thể",
                    "B. Tế bào",
                    "C. Bào quan",
                    "D. Cơ quan"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_018. Cấp tổ chức sống nào dưới đây nhỏ hơn tế bào?",
                "options": [
                    "A. Cơ thể",
                    "B. Cơ quan",
                    "C. Bào quan",
                    "D. Mô"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_019. Tập hợp nhiều tế bào cùng loại và cùng thực hiện một chức năng nhất định tạo thành:",
                "options": [
                    "A. Hệ cơ quan",
                    "B. Mô",
                    "C. Cơ thể",
                    "D. Cơ quan"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_020. Tập hợp các cá thể cùng loài, cùng sống trong một không gian nhất định vào một thời điểm xác định và có quan hệ sinh sản với nhau được gọi là",
                "options": [
                    "A. quần thể.",
                    "B. nhóm quần thể.",
                    "C. quần xã.",
                    "D. hệ sinh thái."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_021. Tập hợp nhiều tế bào cùng loại và cùng thực hiện một chức năng nhất định tạo thành:",
                "options": [
                    "A. Hệ cơ quan.",
                    "B. Mô.",
                    "C. Cơ thể.",
                    "D. Cơ quan."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_022. Quần xã sinh vật là",
                "options": [
                    "A. Tập hợp nhiều quần thể của các loài khác nhau.",
                    "B. Tập hợp nhiều quần thể cùng loài.",
                    "C. Tập hợp các cá thể cùng loài.",
                    "D. Tập hợp cá thể của hai loài sống ở hai nơi."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_023. Đặc điểm nào sau đây không phải là đặc điểm chung của thế giới sống",
                "options": [
                    "A. Liên tục tiến hoá",
                    "B. Tổ chức theo nguyên tắc thứ bậc",
                    "C. Là một hệ thống kín",
                    "D. Có khả năng tự điều chỉnh"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_024. Đặc tính quan trọng nhất đảm bảo tính bền vững và ổn định của tổ chức sống là gì?",
                "options": [
                    "A. Trao đổi chất và năng lượng",
                    "B. Sinh sản",
                    "C. Sinh trưởng và phát triển",
                    "D. Khả năng tự điều chỉnh."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_025. Tự điều chỉnh ở cấp độ quần thể thông qua",
                "options": [
                    "A. điều chỉnh số lượng loài.",
                    "B. điều chỉnh số lượng quần xã.",
                    "C. điều chỉnh số lượng cá thể trong quần thể.",
                    "D. điều chỉnh số lượng cá thể mỗi loài."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_026. Tự điều chỉnh ở cấp độ quần xã thông qua",
                "options": [
                    "A. điều chỉnh số lượng loài trong quần xã.",
                    "B. điều chỉnh số lượng quần xã.",
                    "C. điều chỉnh số lượng quần thể.",
                    "D. điều chỉnh số lượng cơ quan trong cơ thể"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_027. Giới Nguyên sinh có tên khoa học là",
                "options": [
                    "A. Fungi.",
                    "B. Plantae.",
                    "C. Monera.",
                    "D. Protista."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_028. Đặc tính mà tổ chức sống cấp trên mà các cấp tổ chức sống cấp dưới không có gọi là",
                "options": [
                    "A. Tính nổi trội.",
                    "B. Hệ thống mở.",
                    "C. Nguyên tắc thứ bậc.",
                    "D. Nguyên tắc bổ sung."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L1_029. Thế nào là hệ sinh thái?",
                "options": [
                    "A. Là tập hợp các cá thể cùng loài sống trong một không gian nhất định.",
                    "B. Là tập hợp nhiều quần thể sống trong một không gian nhất định.",
                    "C. Là tập hợp các cá thể cùng loài sống ở những môi trường khác nhau.",
                    "D. Là sinh vật và môi trường sống của chúng tạo nên một thể thống nhất."
                ],
                "answer": 3,
                "image": null
            },
            // Thêm các câu hỏi MC level 1 khác...
        ],
        level2: [
            {
                "question": "MB_CCĐTCS_L2_001. Khi nói về nguyên tắc thứ bậc của các tổ chức sống, phát biểu nào sau đây đúng?",
                "options": [
                    "A. Các cơ thể còn non phải phục tùng các cơ thể trưởng thành.",
                    "B. Kích thước của các tổ chức sống được sắp xếp từ nhỏ đến lớn.",
                    "C. Cấp tổ chức nhỏ hơn làm nền tảng để xây dựng cấp tổ chức cao hơn.",
                    "D. Tất cả các cấp tổ chức sống được xây dựng từ cấp tế bào."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_002. Tất cả các tổ chức sống đều là hệ mở. Tại sao?",
                "options": [
                    "A. Vì thường xuyên trao đổi chất với môi trường.",
                    "B. Vì thường xuyên có khả năng tự điều chỉnh.",
                    "C. Vì thường xuyên biến đổi và liên tục tiến hóa.",
                    "D. Vì có khả năng sinh sản, cảm ứng và vận động."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_003. Tập hợp các sinh vật sống ở rừng Quốc gia Cúc Phương là",
                "options": [
                    "A. Cá thể sinh vật.",
                    "B. Quần thể sinh vật.",
                    "C. Quần xã sinh vật.",
                    "D. Cá thể và quần thể."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_004. Các cấp tổ chức của thế giới sống <b>không</b> bao gồm thành phần nào dưới đây?",
                "options": [
                    "A. Mô.",
                    "B. Bào quan.",
                    "C. Nguyên tử.",
                    "D. Phân tử."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_005. Căn cứ chủ yếu để coi tế bào là đơn vị cơ bản của sự sống là",
                "options": [
                    "A. Chúng có cấu tạo phức tạp.",
                    "B. Chúng được cấu tạo bởi nhiều bào quan.",
                    "C. Là một hệ thống kín.",
                    "D. Ở tế bào có các đặc điểm chủ yếu của sự sống."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_006. Những con rùa ở hồ Hoàn Kiếm là",
                "options": [
                    "A. quần thể sinh vật.",
                    "B. cá thể sinh vật.",
                    "C. cá thể và quần thể.",
                    "D. hệ sinh thái."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_007. Đàn voi sống trong rừng thuộc cấp độ tổ chức sống nào dưới đây?",
                "options": [
                    "A. Cá thể.",
                    "B. Quần thể.",
                    "C. Quần xã.",
                    "D. Hệ sinh thái."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_008. Tập hợp sinh vật nào sau đây không phải là quần thể?",
                "options": [
                    "A. Tập hợp các cây cọ trên một quả đồi ở Phú Thọ.",
                    "B. Tập hợp ốc bươu vàng trong một ruộng lúa.",
                    "C. Tập hợp cá trong Hồ Tây.",
                    "D. Tập hợp cá trắm cỏ trong một cái ao."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_009. Tổ chức sống cấp thấp hơn làm nền tảng để xây dựng nên tổ chức sống cấp cao hơn giải thích cho nguyên tắc nào của thế giới sống?",
                "options": [
                    "A. Nguyên tắc thứ bậc.",
                    "B. Nguyên tắc mở.",
                    "C. Nguyên tắc tự điều chỉnh.",
                    "D. Nguyên tắc bổ sung"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_010. Đặc tính nổi trội của tổ chức sống cấp cao hình thành do đâu?",
                "options": [
                    "A. Do sự tương thích của các thành phần cấu thành.",
                    "B. Do sự tương tác nội bộ một cấp bậc nhất định.",
                    "C. Do sự tương tác giữa các bộ phận cấu thành.",
                    "D. Do môi trường quyết định."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_011. Các cấp tổ chức của thế giới sống đều là những hệ mở vì",
                "options": [
                    "A. có khả năng thích nghi với môi trường",
                    "B. thường xuyên trao đổi chất với môi trường.",
                    "C. có khả năng sinh sản để duy trì nòi giống.",
                    "D. phát triển và tiến hoá không ngừng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_012. Ví dụ nào sau đây là minh chứng cho đặc điểm tổ chức sống là hệ mở?",
                "options": [
                    "A. Khi trời nóng thì người đổ mồ hôi.",
                    "B. Hệ thần kinh ở động vật được cấu tạo từ các noron.",
                    "C. Thực vật thực hiện quá trình hô hấp lấy khí O2 và thải khí CO2.",
                    "D. Sinh vật có hoạt động sinh sản khi đủ tuổi chín sinh lí."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_013. Ví dụ nào sau đây nói về khả năng tự điều chỉnh của tổ chức sống?",
                "options": [
                    "A. Cây xanh hút khí CO2, thải khí O2.",
                    "B. Nhiều cá thể cùng loài sống chung có quan hệ chặt chẽ với nhau tạo thành quần thể.",
                    "C. Quần thể có mật độ quá đông sẽ có hiện tượng tách đàn làm giảm số lượng cá thể.",
                    "D. Đến độ tuổi nhất định sinh vật có khả năng sinh sản."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_014. Sự sống được tiếp diễn liên tục là nhờ",
                "options": [
                    "A. khả năng cảm ứng đặc biệt của sinh vật.",
                    "B. khả năng tự điều chỉnh cân bằng nội môi.",
                    "C. khả năng tiến hoá thích nghi với môi trường.",
                    "D. sự truyền thông tin trên DNA giữa các tế bào, thế hệ."
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB_CCĐTCS_L2_015. Khi lượng đường trong máu giảm, cơ thể tiến hành phân giải glycogen dự trữ đưa lượng đường về mức ổn định. Đây là ví dụ về cơ chế nào của sinh vật?",
                "options": [
                    "A. Cơ chế mở.",
                    "B. Cơ chế tự điều chỉnh.",
                    "C. Cơ chế thích nghi.",
                    "D. Cơ chế duy trì sự sống."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_016. Thế giới sống không ngừng tiến hóa trên cơ sở nào?",
                "options": [
                    "A. Di truyền DNA qua các thế hệ.",
                    "B. Biến dị tổ hợp.",
                    "C. Phát sinh biến dị và chọn lọc tự nhiên.",
                    "D. Chọn lọc nhân tạo."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_017. Dựa vào đặc điểm chung, các loài sinh vật được chia thành bao nhiêu lãnh giới?",
                "options": [
                    "A. 1.",
                    "B. 4.",
                    "C. 2.",
                    "D. 3."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_018. Những lãnh giới phân chia các loài sinh vật không bao gồm",
                "options": [
                    "A. vi sinh vật cổ.",
                    "B. vi khuẩn.",
                    "C. vi khuẩn cổ.",
                    "D. nhân thực."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_019. Sự sống được tiếp nối qua nhiều thế hệ thông qua",
                "options": [
                    "A. phân bào.",
                    "B. giao phối.",
                    "C. nhân bản vô tính.",
                    "D. sinh sản."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_020. Quá trình nhân đôi DNA có tác dụng gì?",
                "options": [
                    "A. Duy trì ổn định một số đặc tính qua các thế hệ.",
                    "B. Tạo sự đa dạng di truyền.",
                    "C. Giúp sinh vật thích nghi với môi trương.",
                    "D. Giảm chọn lọc tự nhiên."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_021. Cơ chế nào góp phần tạo sự đa dạng về mặt di truyền?",
                "options": [
                    "A. Chọn lọc nhân tạo.",
                    "B. Phát sinh đột biến.",
                    "C. Chọn lọc tự nhiên.",
                    "D. Nhân đôi DNA."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_022. Tập hợp những con cá sống dưới ao thuộc cấp độ tổ chức sống nào dưới đây?",
                "options": [
                    "A. Cá thể.",
                    "B. Quần thể.",
                    "C. Quần xã",
                    "D. Hệ sinh thái"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_023. Tập hợp các sinh vật sống ở rừng Quốc gia Cúc Phương là",
                "options": [
                    "A. quần thể.",
                    "B. cơ thể.",
                    "C. cá thể và quần thể.",
                    "D. quần xã"
                ],
                "answer": 3,
                "image": null
            },

            {
                "question": "MB_CCĐTCS_L2_024. Các cấp tổ chức cơ bản theo thứ tự đúng là",
                "options": [
                    "A. tế bào, cơ thể, quần xã, quần thể, hệ sinh thái.",
                    "B. tế bào, quần thể, cơ thể, quần xã, hệ sinh thái.",
                    "C. tế bào, cơ thể, quần thể, quần xã, hệ sinh thái.",
                    "D. cơ thể, quần thể, quần xã, tế bào, hệ sinh thái."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L2_025. Cấp độ tổ chức sống cơ bản không bao gồm",
                "options": [
                    "A. tế bào.",
                    "B. cơ thể.",
                    "C. cơ quan.",
                    "D. quần thể."
                ],
                "answer": 2,
                "image": null
            },


        ],
        level3: [
            {
                "question": "MB_CCĐTCS_L3_001. Các cấp tổ chức sống <b>không</b> có đặc điểm nào sau đây?",
                "options": [
                    "A. Liên tục tiến hóa.",
                    "B. Tổ chức theo nguyên tắc thứ bậc.",
                    "C. Là một hệ thống kín.",
                    "D. Có khả năng tự điều chỉnh."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L3_002. Trong các cấp tổ chức sống dưới đây, cấp nào là lớn nhất?",
                "options": [
                    "A. Tế bào.",
                    "B. Bào quan.",
                    "C. Quần thể.",
                    "D. Quần xã."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L3_003. Tế bào nào sau đây là nhỏ nhất?",
                "options": [
                    "A. Vi khuẩn <em>Mycoplasma</em>.",
                    "B. Trứng đà điểu.",
                    "C. Trứng người.",
                    "D. Tế bào hồng cầu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L3_004. Trong cơ thể đa bào các tế bào được tổ chức hoạt động với nhau như thế nào?",
                "options": [
                    "A. Hoạt động độc lập sau đó tích lũy kết quả hoạt động lại cung cấp cho cơ thể.",
                    "B. Phối hợp hoạt động theo một số cấp tổ chức lớn trên cấp tế bào.",
                    "C. Phối hợp hoạt động theo từng nhóm tế bào cùng hình dạng.",
                    "D. Phối hợp hoạt động theo từng nhóm tế bào cùng kích thước."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L3_005. Thế giới sinh vật được phân loại thành các đơn vị theo trình tự nhỏ dần là",
                "options": [
                    "A. giới – ngành – lớp – bộ – chi – họ – loài.",
                    "B. giới – ngành – lớp – bộ – họ – chi – loài.",
                    "C. giới – ngành – bộ – lớp – họ – chi – loài.",
                    "D. giới – họ – lớp – ngành – họ – chi – loài."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CCĐTCS_L3_006. Quá trình ở hình sau mô tả đặc điểm nào của tổ chức sống?",
                "options": [
                    "A. Hệ thống mở.",
                    "B. Tự điều chỉnh.",
                    "C. Thế giới tiến hóa liên tục.",
                    "D. Tương tác với môi trường."
                ],
                "answer": 1,
                "image": "https://nhantri.top/media/Grade10/insulgu.png"
            },


            // Thêm các câu hỏi MC level 3 khác...
        ]
    },
    // Các nguyên tố hóa học và nước
    mcCNTHHVN: {
        level1: [
            {
                "question": "MB_CNTHHVN_L1_001. Khoảng 25 trong số 92 nguyên tổ trong tự nhiên được coi là cần thiết cho sự sống. Bốn nguyên tố nào trong số 25 nguyên tố này chiếm khoảng 96% khối lượng cơ thể?",
                "options": [
                    "A. Carbon (C), sodium (Na), calcium (Ca), nitrogen (N).",
                    "B. Carbon (C), cobalt (Co), phosphorus (P), hydrogen (H).",
                    "C. Oxygen (O), hydrogen (H), calcium (Ca), sodium (Na).",
                    "D. Carbon (C), hydrogen (H), nitrogen (N), oxygen (O)."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_002. Nguyên tố vi lượng có vai trò như thế nào đối với sự sống?",
                "options": [
                    "A. Cung cấp năng lượng cho các hoạt động sống của tế bào.",
                    "B. Chiếm thành phần chủ yếu trong mọi tế bào.",
                    "C. Dự trữ, cung cấp năng lượng cho tế bào.",
                    "D. Điều tiết quá trình trao đổi chất cho các hoạt động sống của tế bào."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_003. Nguyên tố quan trọng trong việc tạo nên sự đa dạng của vật chất hữu cơ là",
                "options": [
                    "A. Carbon.",
                    "B. Hydrogen.",
                    "C. Oxygen.",
                    "D. Nitrogen."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_004. Sinh vật nhân sơ bao gồm các nhóm:",
                "options": [
                    "A. vi khuẩn và động vật nguyên sinh.",
                    "B. vi khuẩn và virus.",
                    "C. vi khuẩn và cổ khuẩn.",
                    "D. vi khuẩn và nấm đơn bào."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_005. Học thuyết tế bào hiện đại được công bố vào năm nào?",
                "options": [
                    "A. 1830.",
                    "B. 1839.",
                    "C. 1845.",
                    "D. 1861."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_006. Tỉ lệ phần trăm của nguyên tố cacbon trong cơ thể người là",
                "options": [
                    "A. 96%.",
                    "B. 65%.",
                    "C. 35%.",
                    "D. 25%."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_007. Nước chiếm khoảng bao nhiêu phần trăm khối lượng cơ thể người?",
                "options": [
                    "A. 40%.",
                    "B. 55%.",
                    "C. 70%.",
                    "D. 95%."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_008. Nguyên tố đa lượng nào chiếm tỉ lệ cao nhất trong cơ thể sinh vật?",
                "options": [
                    "A. Carbon.",
                    "B. Hydrogen.",
                    "C. Oxygen.",
                    "D. Nitrogen."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L1_009. Phân tử nước được cấu tạo từ những nguyên tố nào?",
                "options": [
                    "A. H và O.",
                    "B. C và H.",
                    "C. O và N.",
                    "D. H và N."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MC level 1 khác...
        ],
        level2: [
            {
                "question": "MB_CNTHHVN_L2_001. Thiếu nguyên tố iodine có thể gây ra bệnh nào dưới đây?",
                "options": [
                    "A. Thiếu máu.",
                    "B. Còi xương.",
                    "C. Ung thư.",
                    "D. Bướu cổ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_002. Vai trò nào sau đây <b>không</b> phải là vai trò của nước đối với tế bào và cơ thể?",
                "options": [
                    "A. Là dung môi hòa tan nhiều hợp chất.",
                    "B. Tham gia trực tiếp vào nhiều phản ứng hóa học.",
                    "C. Cung cấp năng lượng cho toàn bộ hoạt động sống của tế bào.",
                    "D. Điều hòa nhiệt độ tế bào và cơ thể."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_003. Nhận định nào sau đây <b>không</b> đúng về các nguyên tố chủ yếu của sự sống (C, H, O, N)?",
                "options": [
                    "A. Là các nguyên tố phổ biến trong tự nhiên.",
                    "B. Có tính chất lí, hóa phù hợp với các tổ chức sống.",
                    "C. Có khả năng liên kết với nhau và với các nguyên tố khác.",
                    "D. Hợp chất của các nguyên tố này luôn hòa tan trong nước."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_004. Vì sao tế bào được xem là đơn vị cấu trúc và chức năng của cơ thể sống?",
                "options": [
                    "A. Vì tế bào là thành phần nhỏ nhất của cơ thể.",
                    "B. Vì tế bào có thể sinh sản.",
                    "C. Vì tế bào có đầy đủ các bào quan.",
                    "D. Vì tế bào là đơn vị nhỏ nhất thực hiện được các chức năng sống."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_005. Tại sao các phân tử có cùng số lượng nguyên tử cacbon nhưng lại có đặc tính hóa học khác nhau?",
                "options": [
                    "A. Do số lượng electron khác nhau.",
                    "B. Do cách sắp xếp các nguyên tử khác nhau.",
                    "C. Do khối lượng phân tử khác nhau.",
                    "D. Do nhiệt độ môi trường khác nhau."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_006. Nước có vai trò quan trọng trong tế bào vì",
                "options": [
                    "A. Là thành phần chiếm tỉ lệ cao nhất.",
                    "B. Là môi trường cho các phản ứng hóa học.",
                    "C. Là dung môi hòa tan nhiều chất.",
                    "D. Là thành phần chiếm tỉ lệ cao nhất, là môi trường cho các phản ứng hóa học và có thể hòa tan nhiều chất."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L2_007. Nguyên tố vi lượng đóng vai trò gì trong cơ thể sinh vật?",
                "options": [
                    "A. Tạo nên cấu trúc tế bào.",
                    "B. Cung cấp năng lượng.",
                    "C. Tham gia các enzyme và hormone.",
                    "D. Tạo nên màng tế bào."
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi CNTHH và nước level 2 khác...
        ],
        level3: [
            {
                question: "MB_CNTHHVN_L3_001. Khi thời tiết nóng hoặc tập thể dục, thể thao cơ thể chúng ta tiết ra nhiều mồ hôi. Phản ứng đó của cơ thể cho thấy vai trò gì của nước?",
                options: ["A. Là môi trường của các phản ứng hóa học.",
                    "B. Làm dung môi hòa tan các chất.",
                    "C. Cấu trúc tế bào của cơ thể.",
                    "D. Điều hòa nhiệt độ cơ thể."],
                answer: 3
            },
            {
                question: "MB_CNTHHVN_L3_002. Khi tìm kiếm sự sống ở các hành tinh khác trong vũ trụ, các nhà khoa học trước hết tìm kiếm xem ở đó có nước hay không vì",
                options: ["A. nước được cấu tạo từ các nguyên tố đa lượng.",
                    "B. nước chiếm thành phần chủ yếu trong mọi tế bào và cơ thể sống, giúp tế bào tiến hành chuyển hóa vật chất và duy trì sự sống.",
                    "C. nước là dung môi hòa tan nhiều chất cần thiết cho các hoạt động sống của tế bào.",
                    "D. nước là môi trường của các phản ứng sinh hóa trong tế bào."],
                answer: 1
            },
            {
                "question": "MB_CNTHHVN_L3_003. Một sinh vật sống trong môi trường nhiệt độ cao. Đặc điểm nào của nước giúp sinh vật này tồn tại?",
                "options": [
                    "A. Khả năng hòa tan các chất",
                    "B. Nhiệt dung cao",
                    "C. Tính phân cực",
                    "D. Khả năng tạo liên kết hydrogen"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L3_004. Khi nhiệt độ môi trường tăng cao, cơ thể người đổ mồ hôi. Hiện tượng này giúp:",
                "options": [
                    "A. Đào thải chất độc",
                    "B. Cân bằng nội môi",
                    "C. Làm mát cơ thể",
                    "D. Tăng tuần hoàn máu"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L3_005. Trong quá trình tiến hóa, vì sao cacbon trở thành nguyên tố trung tâm của các hợp chất hữu cơ?",
                "options": [
                    "A. Vì cacbon có số electron vừa đủ",
                    "B. Vì cacbon có khả năng liên kết đa dạng",
                    "C. Vì cacbon có nhiều trong tự nhiên",
                    "D. Vì cacbon dễ tham gia phản ứng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L3_006. Một tế bào thiếu enzyme phân hủy protein sẽ gặp vấn đề gì?",
                "options": [
                    "A. Không thể tổng hợp protein",
                    "B. Tích tụ protein không cần thiết",
                    "C. Không thể phân chia",
                    "D. Không thể hấp thu chất dinh dưỡng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CNTHHVN_L3_007. Nếu tế bào mất khả năng duy trì cân bằng nước, hậu quả nghiêm trọng nhất là",
                "options": [
                    "A. Mất khả năng tổng hợp protein",
                    "B. Rối loạn chức năng enzyme",
                    "C. Phá vỡ cấu trúc tế bào",
                    "D. Ngừng sản xuất năng lượng"
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi MĐ level 3 khác...
        ]
    },
    // Các đại phân tử hữu cơ
    mcCDPTHC: {
        level1: [
            {
                question: "MB_CĐPTHC_L1_001. Đặc điểm chung của các loại lipid là",

                options: ["A. có tính phân cực.", "B. cấu trúc theo nguyên tắc đa phân.", "C. có tính kị nước.", "D. có tính acid."],
                answer: 2
            },
            {
                "question": "MB_CĐPTHC_L1_002. Carbohydrate được cấu tạo từ mấy loại nguyên tố cơ bản?",
                "options": [
                    "A. 2 loại nguyên tố",
                    "B. 3 loại nguyên tố",
                    "C. 4 loại nguyên tố",
                    "D. 5 loại nguyên tố"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_003. Đường glucose có mấy nguyên tử carbon?",
                "options": [
                    "A. 5 nguyên tử",
                    "B. 6 nguyên tử",
                    "C. 7 nguyên tử",
                    "D. 8 nguyên tử"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_004. Các loại đường đơn chính bao gồm",
                "options": [
                    "A. Glucose, fructose, galactose",
                    "B. Glucose, sucrose, maltose",
                    "C. Fructose, lactose, maltose",
                    "D. Galactose, lactose, sucrose"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_005. Lipid là nhóm chất có đặc tính",
                "options": [
                    "A. Tan trong nước",
                    "B. Không tan trong nước",
                    "C. Tan trong dung môi phân cực",
                    "D. Tan trong các acid mạnh"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_006. Phospholipid được cấu tạo từ phân tử glycerol liên kết với:",
                "options": [
                    "A. Ba acid béo",
                    "B. Hai acid béo và một nhóm phosphate",
                    "C. Một acid béo và hai nhóm phosphate",
                    "D. Ba nhóm phosphate"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_007. Steroid là một loại lipid đặc biệt <b>không</b> chứa thành phần nào sau đây?",
                "options": [
                    "A. Acid béo",
                    "B. Các gốc cetol",
                    "C. Carbon",
                    "D. Liên kết đôi"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_008. Protein được cấu tạo từ các đơn vị cơ bản nào?",
                "options": [
                    "A. Glucose",
                    "B. Amino acid",
                    "C. Nucleotide",
                    "D. Acid béo"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_009. Có bao nhiêu loại amino acid không thay thế được trong cơ thể người?",
                "options": [
                    "A. 7",
                    "B. 8",
                    "C. 9",
                    "D. 10"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_010. Cholesterol là thành phần quan trọng của",
                "options": [
                    "A. Màng tế bào",
                    "B. Nhân tế bào",
                    "C. Ti thể",
                    "D. Lưới nội chất"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_011. Cấu trúc cơ bản của amino acid gồm các nhóm nào?",
                "options": [
                    "A. Amino và hydroxyl",
                    "B. Amino và carboxyl",
                    "C. Carboxyl và hydroxyl",
                    "D. Amino và phosphate"
                ],
                "answer": 1,
                "image": null
            }, {
                "question": "MB_CĐPTHC_L1_012. DNA có chức năng gì trong tế bào?",
                "options": [
                    "A. Bảo quản và truyền đạt thông tin di truyền",
                    "B. Tổng hợp protein",
                    "C. Vận chuyển amino acid",
                    "D. Tạo năng lượng cho tế bào"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_013. DNA được cấu tạo từ mấy chuỗi polynucleotide?",
                "options": [
                    "A. Một chuỗi",
                    "B. Hai chuỗi",
                    "C. Ba chuỗi",
                    "D. Bốn chuỗi"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_014. Ai là người đầu tiên công bố mô hình cấu trúc xoắn kép của DNA?",
                "options": [
                    "A. James Watson và Francis Crick",
                    "B. Rosalind Franklin",
                    "C. Frederick Sanger",
                    "D. Maurice Wilkins"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_015. RNA khác với DNA ở điểm nào?",
                "options": [
                    "A. Có một chuỗi polynucleotide",
                    "B. Có hai chuỗi polynucleotide",
                    "C. Không có nucleotide",
                    "D. Không có đường"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L1_016. Trong DNA, base adenine (A) luôn kết cặp với base nào?",
                "options": [
                    "A. Guanine",
                    "B. Cytosine",
                    "C. Thymine",
                    "D. Uracil"
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi Các đại phân tử hữu cơ level 1 khác...
        ],
        level2: [
            {
                "question": "MB_CĐPTHC_L2_001. Để nhận biết sự có mặt của glucose, ta có thể sử dụng hóa chất nào sau đây?",
                "options": [
                    "A. Iodine.",
                    "B. Benedict.",
                    "C. Biuret.",
                    "D. Cồn 90º."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_002. Chất nào sau đây <b>không</b> phải polymer?",
                "options": [
                    "A. Glycogen.",
                    "B. Tinh bột.",
                    "C. Celullose.",
                    "D. Glucose."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_003. Vì sao đường đôi được gọi là đường vận chuyển?",
                "options": [
                    "A. Vì nó vận chuyển năng lượng giữa các tế bào",
                    "B. Vì các sinh vật vận chuyển glucose đến các bộ phận khác nhau của cơ thể",
                    "C. Vì nó giúp vận chuyển chất dinh dưỡng",
                    "D. Vì nó chỉ có chức năng vận chuyển trong cơ thể"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_004. Tại sao con người <b>không</b> tiêu hóa được cellulose?",
                "options": [
                    "A. Vì cellulose quá cứng",
                    "B. Vì không có enzyme tiêu hóa cellulose",
                    "C. Vì cellulose không chứa dinh dưỡng",
                    "D. Vì cellulose có cấu trúc phức tạp"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_005. Đặc điểm nào sau đây <b>không</b> phải là của glycogen?",
                "options": [
                    "A. Được cấu tạo từ nhiều phân tử glucose",
                    "B. Không tan trong nước",
                    "C. Có cấu trúc phân nhánh",
                    "D. Được dự trữ lâu dài trong cơ thể"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_006. Vì sao cần phải hạn chế ăn quá nhiều dầu, mỡ?",
                "options": [
                    "A. Vì dầu mỡ không có giá trị dinh dưỡng",
                    "B. Vì dầu mỡ khó tiêu hóa",
                    "C. Vì có thể gây các bệnh béo phì, tim mạch",
                    "D. Vì dầu mỡ không cung cấp năng lượng"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_007. Phospholipid được xem là phân tử lưỡng cực vì",
                "options": [
                    "A. Có cả đầu ưa nước và đuôi kỵ nước",
                    "B. Có thể tan trong nước và dầu",
                    "C. Có cả tính acid và bazơ",
                    "D. Có khả năng phản ứng với nhiều chất"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_008. Tại sao LDL được gọi là cholesterol xấu?",
                "options": [
                    "A. Vì nó không tan trong máu",
                    "B. Vì nó làm tăng nguy cơ bệnh tim mạch",
                    "C. Vì nó không vận chuyển được cholesterol",
                    "D. Vì nó không được tạo ra trong cơ thể"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_009. Hai amino acid liên kết với nhau bằng liên kết nào?",
                "options": [
                    "A. Liên kết peptide",
                    "B. Liên kết hydrogen",
                    "C. Liên kết ion",
                    "D. Liên kết Van der Waals"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_010. Chức năng nào sau đây <b>không</b> phải là chức năng của protein?",
                "options": [
                    "A. Bảo vệ tế bào",
                    "B. Vận động",
                    "C. Tổng hợp lipid",
                    "D. Xúc tác enzyme"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_011. Carotenoid có vai trò gì trong cơ thể?",
                "options": [
                    "A. Tạo màu cho da",
                    "B. Là tiền chất tạo vitamin A",
                    "C. Tạo năng lượng",
                    "D. Tạo màu cho da và là tiền chất tạo vitamin A"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_012. Điều gì xảy ra khi cấu trúc không gian của protein bị thay đổi?",
                "options": [
                    "A. Protein tăng hoạt tính",
                    "B. Protein biến tính",
                    "C. Protein tăng độ bền",
                    "D. Không ảnh hưởng đến chức năng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_013. Quá trình tổng hợp protein diễn ra theo trình tự nào?",
                "options": [
                    "A. DNA → Protein → mRNA",
                    "B. mRNA → DNA → Protein",
                    "C. DNA → mRNA → Protein",
                    "D. Protein → mRNA → DNA"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_014. Dấu vân tay DNA được sử dụng trong trường hợp nào?",
                "options": [
                    "A. Xác định người có thể tích thiết kế trình tự ngẫu nhiên",
                    "B. Xác định mối quan hệ họ hàng",
                    "C. Xác định chiều dài DNA",
                    "D. Xác định số lượng gene"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_015. Tại sao RNA thường xuất hiện dưới dạng một mạch đơn?",
                "options": [
                    "A. Do không có các base bổ sung",
                    "B. Do cấu trúc đường ribose",
                    "C. Do chức năng vận chuyển thông tin",
                    "D. Do thiếu liên kết hydrogen"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_016. RNA ribosome (rRNA) có chức năng gì?",
                "options": [
                    "A. Vận chuyển amino acid",
                    "B. Tham gia cấu tạo nên ribosome",
                    "C. Truyền đạt thông tin di truyền",
                    "D. Điều hòa hoạt động của gene"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L2_017. Plasmid có đặc điểm gì đặc biệt?",
                "options": [
                    "A. Chỉ có trong nhân tế bào",
                    "B. Là DNA mạch kép vòng độc lập với nhiễm sắc thể",
                    "C. Không thể nhân đôi",
                    "D. Không mang gene"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi Các đại phân tử hữu cơ level 2 khác...
        ],
        level3: [
            {
                question: "MB_CĐPTHC_L3_001. Trong quá trình nấu canh cua, cua được làm sạch, xay nhỏ và hòa vào nước để thu nước lọc cua. Khi đun có hiện tượng thịt cua đóng lại từng mảng nối trên mặt nước canh. Phát biểu nào sau đây đúng về hiện tượng trên?",
                options: ["A. Các phân tử protein cua bị biến tính tạo thành các mảng nổi trên mặt nước canh.", "B. Nhiệt độ cao làm cho các chất hữu cơ trong nước cua biến đổi thành các chất vô cơ.", "C. Các phân tử tinh bột trong nước lọc cua bị biến đổi thành các phân tử glucose.", "D. Mảng nổi trên mặt nước canh là do các chất vô cơ kết hợp với nhau."],
                answer: 0
            },
            {
                question: "MB_CĐPTHC_L3_002. Nhóm thực phẩm nào dưới đây là nguồn cung cấp chất đường bột cho cơ thể?",
                options: ["A. Dừa, mỡ lợn, dầu hạt cải.",
                    "B. Tôm, thịt gà, trứng vịt.",
                    "C. Bắp cải, cà rốt, cam.",
                    "D. Gạo, ngô, khoai lang."],
                answer: 3
            },
            {
                "question": "MB_CĐPTHC_L3_003. Khi thiết kế chế độ ăn kiêng để giảm cân, vì sao <b>không</b> nên cắt bỏ hoàn toàn carbohydrate?",
                "options": [
                    "A. Vì carbohydrate giúp tạo hương vị thức ăn",
                    "B. Vì carbohydrate là nguồn năng lượng chính cho hoạt động sống",
                    "C. Vì thiếu carbohydrate sẽ gây bệnh",
                    "D. Vì carbohydrate giúp hấp thu vitamin"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_004. Một người ăn nhiều thực phẩm giàu cellulose sẽ có lợi cho sức khỏe vì",
                "options": [
                    "A. Cellulose cung cấp nhiều năng lượng",
                    "B. Cellulose giúp tăng cường hệ miễn dịch",
                    "C. Cellulose kích thích nhu động ruột và giúp đào thải chất thải",
                    "D. Cellulose giúp hấp thu chất dinh dưỡng tốt hơn"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_005. Trong việc bảo quản thực phẩm, đặc tính nào của lipid cần được chú ý nhất?",
                "options": [
                    "A. Dễ bị oxy hóa khi tiếp xúc với không khí",
                    "B. Tan trong nước",
                    "C. Khả năng tạo màu",
                    "D. Khả năng hòa tan vitamin"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_006. Phospholipid có vai trò quan trọng trong cấu trúc màng tế bào vì",
                "options": [
                    "A. Giúp tế bào có hình dạng ổn định",
                    "B. Tạo tính chọn lọc cho màng tế bào nhờ cấu trúc lưỡng cực",
                    "C. Cung cấp năng lượng cho tế bào",
                    "D. Bảo vệ tế bào khỏi các tác nhân gây hại"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_007. Khi vận động cường độ cao kéo dài, cơ thể ưu tiên sử dụng nguồn năng lượng nào?",
                "options": [
                    "A. Protein từ cơ",
                    "B. Glycogen dự trữ",
                    "C. Lipid dự trữ",
                    "D. Glucose trong máu"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_008. Nếu một người ăn nhiều thực phẩm giàu cholesterol, điều gì có thể xảy ra?",
                "options": [
                    "A. Tăng nguy cơ bệnh tim mạch",
                    "B. Giảm testosterone trong cơ thể",
                    "C. Tăng tổng hợp protein",
                    "D. Giảm hấp thu vitamin"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_009. Tại sao việc duy trì cấu trúc không gian của protein quan trọng trong chế biến thực phẩm?",
                "options": [
                    "A. Để tăng giá trị dinh dưỡng",
                    "B. Để bảo quản được lâu hơn",
                    "C. Để duy trì chức năng sinh học",
                    "D. Để tăng khả năng hấp thu"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_010. Khi nấu thịt ở nhiệt độ cao, hiện tượng nào sẽ xảy ra với protein?",
                "options": [
                    "A. Tăng giá trị dinh dưỡng",
                    "B. Biến tính protein",
                    "C. Tạo thêm amino acid",
                    "D. Tăng độ đàn hồi"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_011. Vì sao cơ thể <b>không</b> thể tự tổng hợp được một số amino acid?",
                "options": [
                    "A. Thiếu enzyme tổng hợp",
                    "B. Không có nguồn nguyên liệu",
                    "C. Tiêu tốn nhiều năng lượng",
                    "D. Không cần thiết cho cơ thể"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_012. Làm thế nào để giảm thiểu sự biến tính protein trong quá trình chế biến thực phẩm?",
                "options": [
                    "A. Nấu ở nhiệt độ cao nhanh",
                    "B. Nấu ở nhiệt độ thấp, thời gian dài",
                    "C. Không cần quan tâm đến nhiệt độ",
                    "D. Chỉ nấu bằng lò vi sóng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_013. Một bệnh nhân bị bệnh gout, nguyên nhân có thể là do:",
                "options": [
                    "A. Thiếu enzyme phân giải nucleic acid",
                    "B. Thừa enzyme phân giải nucleic acid",
                    "C. Thiếu nucleic acid",
                    "D. Thừa protein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_014. Trong kĩ thuật xác định dấu vân tay DNA, tại sao cần phải có mẫu đối chứng?",
                "options": [
                    "A. Để so sánh với mẫu cần xác định",
                    "B. Để kiểm tra độ chính xác của phương pháp",
                    "C. Để xác định chiều dài DNA",
                    "D. Để xác định số lượng nucleotide"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_015. Tại sao ribozyme được coi là bằng chứng cho giả thuyết 'Thế giới RNA'?",
                "options": [
                    "A. Vì chúng là RNA có chức năng xúc tác như enzyme",
                    "B. Vì chúng có trong tất cả các tế bào",
                    "C. Vì chúng tham gia tổng hợp protein",
                    "D. Vì chúng có cấu trúc đơn giản"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_016. Khi nghiên cứu về kháng sinh, tại sao các nhà khoa học thường quan tâm đến plasmid?",
                "options": [
                    "A. Vì plasmid chứa gene kháng thuốc kháng sinh",
                    "B. Vì plasmid tổng hợp kháng sinh",
                    "C. Vì plasmid phá hủy kháng sinh",
                    "D. Vì plasmid ngăn cản tác dụng của kháng sinh"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CĐPTHC_L3_017. Trong công nghệ DNA tái tổ hợp, việc sử dụng các enzyme cắt giới hạn có ý nghĩa gì?",
                "options": [
                    "A. Tạo các đầu dính để nối DNA",
                    "B. Phân hủy DNA",
                    "C. Tổng hợp DNA mới",
                    "D. Nhân bản DNA"
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi Các đại phân tử hữu cơ level 3 khác...
        ]
    },
    // Tế bào nhân sơ
    mcTBNS: {
        level1: [
            {
                question: "MB_TBNS_L1_001. Thành tế bào vi khuẩn được cấu tạo từ:",

                options: ["A. cellulose.", "B. peptidoglycan.", "C. carbohydrate.", "D. chitin."],
                answer: 1
            },
            {
                question: "MB_TBNS_L1_002. Các thành phần chính cấu tạo nên tế bào nhân sơ là",

                options: ["A. thành tế bào, nhân, tế bào chất, vỏ nhầy.", "B. màng tế bào, tế bào chất, vùng nhân.", "C. màng tế bào, vùng nhân, vỏ nhầy, tế bào chất.", "D. thành tế bào, tế bào chất, vùng nhân."],
                answer: 1
            },
            {
                question: "MB_TBNS_L1_003. Người ta dựa vào cấu trúc nào để chia vi khuẩn thành hai loại Gram âm và Gram dương?",

                options: ["A. Màng tế bào.", "B. Thành tế bào.", "C. Lông và roi.", "D. Vùng nhân."],
                answer: 1
            },
            {
                question: "MB_TBNS_L1_004. Plasmid có bản chất là một phân tử:",

                options: ["A. tRNA dạng vòng, nhỏ.", "B. rRNA dạng vòng nhỏ.", "C. DNA dạng vòng, nhỏ.", "D. DNA dạng mạch dài."],
                answer: 2
            },
            {
                "question": "MB_TBNS_L1_005. Kích thước của tế bào nhân sơ thường dao động trong khoảng:",
                "options": [
                    "A. 0.1_5 μm",
                    "B. 5_10 μm",
                    "C. 10_100 μm",
                    "D. 100_1000 μm"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNS_L1_006. Thành tế bào vi khuẩn có cấu tạo chủ yếu từ:",
                "options": [
                    "A. Phospholipid",
                    "B. Protein",
                    "C. Peptidoglycan",
                    "D. Lipopolysaccharide"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNS_L1_007. Loại vi khuẩn nào có màng ngoài chứa lipopolysaccharide?",
                "options": [
                    "A. Vi khuẩn Gram dương",
                    "B. Vi khuẩn Gram âm",
                    "C. Cả vi khuẩn Gram âm và dương",
                    "D. Không vi khuẩn nào có cấu trúc này"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNS_L1_008. Cấu trúc nào sau đây <b>không</b> có trong tế bào nhân sơ?",
                "options": [
                    "A. Vùng nhân",
                    "B. Màng sinh chất",
                    "C. Màng nhân",
                    "D. Ribosome"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNS_L1_009. Thành tế bào vi khuẩn có độ dày khoảng:",
                "options": [
                    "A. 10_20 nm",
                    "B. 20_80 nm",
                    "C. 80_100 nm",
                    "D. 100_200 nm"
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                "question": "MB_TBNS_L2_001. Tế bào vi khuẩn được gọi là nhân sơ do nguyên nhân nào sau đây?",
                "options": [
                    "A. Tế bào vi khuẩn xuất hiện rất sớm.",
                    "B. Tế bào vi khuẩn có cấu trúc đơn bào.",
                    "C. Tế bào vi khuẩn có cấu tạo đơn giản.",
                    "D. Tế bào vi khuẩn chưa có màng nhân."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_002. Tế bào vi khuẩn <b>không</b> có thành phần nào sau đây?",
                "options": [
                    "A. Thành tế bào.",
                    "B. Vùng nhân.",
                    "C. Màng sinh chất.",
                    "D. Ti thể."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_003. Đặc điểm nào sau đây <b>không</b> đúng với tế bào nhân sơ?",
                "options": [
                    "A. Có tỉ lệ S/ V lớn.",
                    "B. Có màng bao bọc vật chất di truyền.",
                    "C. Không có các bào quan có màng bao bọc.",
                    "D. Không có hệ thống nội màng trong tế bào chất."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_004. Kích thước nhỏ mang lại lợi ích gì cho tế bào nhân sơ?",
                "options": [
                    "A. giúp trao đổi chất với môi trường nhanh từ đó tăng tốc độ sinh trưởng, sinh sản.",
                    "B. giúp vi khuẩn dễ xâm nhập vào vật chủ.",
                    "C. giúp vi khuẩn di chuyển nhanh hơn và dễ kiếm ăn trong môi trường kí sinh.",
                    "D. Không giúp vi khuẩn dễ bám vào vật chủ."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_005. Thành phần nào sau đây có chức năng bảo vệ tế bào vi khuẩn khỏi sự tấn công của kháng sinh?",
                "options": [
                    "A. Màng sinh chất",
                    "B. Lớp peptidoglycan",
                    "C. Màng ngoài của vi khuẩn Gram âm",
                    "D. Vùng nhân"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_006. Vì sao vi khuẩn Gram âm khó bị tiêu diệt bởi kháng sinh hơn vi khuẩn Gram dương?",
                "options": [
                    "A. Do có vùng nhân lớn hơn",
                    "B. Do có nhiều ribosome hơn",
                    "C. Do có màng ngoài chứa lipopolysaccharide",
                    "D. Do có thành tế bào dày hơn"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_007. Plasmid trong tế bào vi khuẩn có ý nghĩa gì?",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Tạo năng lượng",
                    "C. Mang gene kháng thuốc",
                    "D. Tổng hợp thành tế bào"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_008. Đặc điểm nào phân biệt tế bào nhân sơ với tế bào nhân thực?",
                "options": [
                    "A. Có ribosome",
                    "B. Không có màng nhân",
                    "C. Có thành tế bào",
                    "D. Có màng sinh chất"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNS_L2_009. Tại sao vi khuẩn có thể phát triển nhanh trong môi trường thuận lợi?",
                "options": [
                    "A. Do có nhiều ribosome",
                    "B. Do cấu tạo đơn giản",
                    "C. Do có plasmid",
                    "D. Do có thành tế bào dày"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi Tế bào nhân sơ level 2 khác...
        ],
        level3: [
            {
                question: "MB_TBNS_L3_001. Việc phân chia vi khuẩn thành hai loại Gram âm và Gram dương có ý nghĩa:",
                options: ["A. để phân loại màu sắc vi khuẩn khi nhuộn Gram.",
                    "B. phân loại vi khuẩn gây bệnh để có phương án sử dụng kháng sinh hợp lí.",
                    "C. phân loại khả năng sinh sản, sinh trưởng và phát triển của vi khuẩn.",
                    "D. phân loại khả năng thích nghi với môi trường sống của vi khuẩn."],
                answer: 1
            },
            {
                "question": "MB_TBNS_L3_002. Khi điều trị bệnh nhiễm khuẩn, bác sĩ thường kê đơn phối hợp nhiều loại kháng sinh. Điều này nhằm mục đích:",
                "options": [
                    "A. Tăng khả năng tiêu diệt vi khuẩn",
                    "B. Ngăn ngừa sự phát triển kháng thuốc",
                    "C. Giảm tác dụng phụ của thuốc",
                    "D. Tăng khả năng tiêu diệt vi khuẩn và ngăn ngừa sự phát triển kháng thuốc"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNS_L3_003. Trong môi trường tự nhiên, vi khuẩn có thể truyền gene kháng thuốc cho nhau thông qua:",
                "options": [
                    "A. Trao đổi plasmid.",
                    "B. Phân chia tế bào.",
                    "C. Biến nạp gene.",
                    "D. Trao đổi plasmid, biến nạp gene và phân chia tế bào."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNS_L3_004. Một loại kháng sinh mới được phát hiện có khả năng phá vỡ màng ngoài của vi khuẩn. Loại vi khuẩn nào sẽ bị ảnh hưởng nhiều nhất?",
                "options": [
                    "A. Vi khuẩn Gram dương.",
                    "B. Vi khuẩn Gram âm.",
                    "C. Cả hai loại vi khuẩn.",
                    "D. Không vi khuẩn nào bị ảnh hưởng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNS_L3_005. Nếu một vi khuẩn mất khả năng tổng hợp peptidoglycan, điều gì sẽ xảy ra?",
                "options": [
                    "A. Vi khuẩn sẽ chết.",
                    "B. Vi khuẩn sẽ phát triển chậm hơn.",
                    "C. Vi khuẩn sẽ mất khả năng kháng thuốc.",
                    "D. Vi khuẩn sẽ phát triển nhanh hơn."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNS_L3_006. Tại sao việc sử dụng kháng sinh <b>không</b> đúng cách có thể gây hại cho cộng đồng?",
                "options": [
                    "A. Làm tăng chi phí điều trị",
                    "B. Tạo ra các chủng vi khuẩn kháng thuốc",
                    "C. Gây tác dụng phụ cho người bệnh",
                    "D. Cả B và C đúng"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi Tế bào nhân sơ level 3 khác...
        ]
    },
    //Tế bào nhân thực
    mcTBNT: {
        level1: [
            {
                "question": "MB_TBNT_L1_001. Trao đổi chất có chọn lọc với môi trường là một trong những chức năng của",
                "options": [
                    "A. ribosome.",
                    "B. trung thế.",
                    "C. màng sinh chất.",
                    "D. bộ máy Golgi."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_002. Bộ máy Golgi có cấu tạo gồm",
                "options": [
                    "A. hệ thống túi màng dẹp xếp chồng lên nhau (nhưng tách biệt nhau) theo hình vòng cung.",
                    "B. hệ thống túi màng dẹp xếp chồng lên nhau (nhưng thông với nhau) theo hình vòng cung.",
                    "C. hệ thống túi màng dẹp xếp chồng lên nhau (nhưng tách biệt nhau) theo hình vòng tròn.",
                    "D. hệ thống túi màng dẹp xếp chồng lên nhau (nhưng thông với nhau) theo hình vòng tròn."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_003. Thành tế bào thực vật cấu tạo chủ yếu từ",
                "options": [
                    "A. cholesterol.",
                    "B. cellulose.",
                    "C. peptidoglican.",
                    "D. phospholipid."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_004. Màng sinh chất của tế bào ở sinh vật nhân thực được cấu tạo bởi?",
                "options": [
                    "A. Các phân tử protein và nucleic acid.",
                    "B. Các phân tử phospholipid và nucleic acid.",
                    "C. Các phân tử protein và phospholipid.",
                    "D. Các phân tử protein."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_005. Thành phần hoá học của ribosome chứa bao nhiêu phần trăm RNA?",
                "options": [
                    "A. 70_80%",
                    "B. 80_90%",
                    "C. 90_95%",
                    "D. 95_100%"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_006. Bào quan nào được gọi là 'nhà máy' tổng hợp protein của tế bào?",
                "options": [
                    "A. Lysosome",
                    "B. Ribosome",
                    "C. Peroxisome",
                    "D. Ti thể"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_007. Lưới nội chất có mấy loại?",
                "options": [
                    "A. 1 loại",
                    "B. 2 loại",
                    "C. 3 loại",
                    "D. 4 loại"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_008. Bào quan nào có chức năng tái chế rác thải và chế biến thức ăn của tế bào?",
                "options": [
                    "A. Ribosome",
                    "B. Lysosome",
                    "C. Peroxisome",
                    "D. Bộ máy Golgi"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_009. Cấu trúc nào là trung tâm thông tin của tế bào?",
                "options": [
                    "A. Nhân",
                    "B. Ti thể",
                    "C. Lưới nội chất",
                    "D. Ribosome"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_010. Trong nhân tế bào có chứa chất di truyền nào?",
                "options": [
                    "A. RNA",
                    "B. DNA",
                    "C. Protein",
                    "D. Lipid"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_011. Bào quan nào <b>không</b> có màng bao bọc?",
                "options": [
                    "A. Ribosome",
                    "B. Lysosome",
                    "C. Ti thể",
                    "D. Peroxisome"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_012. Bộ máy Golgi có chức năng gì?",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Phân giải chất thải",
                    "C. Đóng gói và phân phối sản phẩm",
                    "D. Tổng hợp ATP"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_013. Peroxisome chứa enzyme phân giải chất nào?",
                "options": [
                    "A. H<sub>2</sub>O<sub>2</sub>",
                    "B. CO<sub>2</sub>",
                    "C. O<sub>2</sub>",
                    "D. H<sub>2</sub>O"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_014. Ti thể có mấy lớp màng?",
                "options": [
                    "A. 1 lớp",
                    "B. 2 lớp",
                    "C. 3 lớp",
                    "D. 4 lớp"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_015. Lục lạp là bào quan có khả năng thu nhận ánh sáng mặt trời thông qua:",
                "options": [
                    "A. Màng kép",
                    "B. Chất nền",
                    "C. Hệ thống màng thylakoid",
                    "D. Ribosome"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_016. Theo mô hình Singer và Nicolson (1972), màng tế bào được cấu tạo chủ yếu từ:",
                "options": [
                    "A. Carbohydrate và protein",
                    "B. Phospholipid và protein",
                    "C. Glycolipid và cholesterol",
                    "D. Protein và glycoprotein"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_017. Ti thể là nơi diễn ra quá trình:",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Phân giải carbohydrate",
                    "C. Quang hợp",
                    "D. Tổng hợp lipid"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_018. Trong cấu trúc của lục lạp, stroma là",
                "options": [
                    "A. Hệ thống màng trong",
                    "B. Chất nền",
                    "C. Màng ngoài",
                    "D. Hệ thống túi dẹt"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_019. Cấu trúc nào sau đây <b>không</b> có trong bộ khung xương tế bào?",
                "options": [
                    "A. Vi ống",
                    "B. Vi sợi",
                    "C. Sợi trung gian",
                    "D. Ribosome"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_020. Protein màng có các chức năng sau, NGOẠI TRỪ:",
                "options": [
                    "A. Vận chuyển các chất qua màng.",
                    "B. Tổng hợp ATP cho tế bào.",
                    "C. Xúc tác các phản ứng.",
                    "D. Truyền tin tế bào."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_021. Thành tế bào thực vật được cấu tạo từ chất nào?",
                "options": [
                    "A. Sợi cellulose",
                    "B. Sợi collagen",
                    "C. Protein màng",
                    "D. Glycoprotein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_022. Các tế bào liên kết với nhau thông qua:",
                "options": [
                    "A. Mối nối kín",
                    "B. Mối nối hở",
                    "C. Mối nối kín và mối nối hở",
                    "D. Ti thể"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_023. Chất nền ngoại bào được cấu tạo chủ yếu từ:",
                "options": [
                    "A. Sợi collagen",
                    "B. Protein màng",
                    "C. Lipid",
                    "D. Cellulose"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L1_024. Lông và roi là những cấu trúc:",
                "options": [
                    "A. Nằm trong tế bào",
                    "B. Đứng yên không chuyển động",
                    "C. Dạng sợi nhỏ và dài",
                    "D. Không liên quan đến vận động"
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi Tế bào nhân thực level 1 khác...
        ],
        level2: [
            {
                "question": "MB_TBNT_L2_001. Lưới nội chất hạt và lưới nội chất trơn khác nhau ở chỗ:",
                "options": [
                    "A. lưới nội chất hạt có hình túi còn lưới nội chất trơn có hình ống.",
                    "B. lưới nội chất hạt nối thông với khoang giữa của màng nhân còn lưới nội chất trơn thì là các túi dẹp xếp song song với nhau.",
                    "C. lưới nội chất hạt có đính ribosome còn lưới nội chất trơn thì không.",
                    "D. hai loại lưới nội chát đèu có ribosome nhưng bám ở vị trí khác nhau."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_002. Trong các loại tế bào sau, có nhiều lysosome nhất là tế bào:",
                "options": [
                    "A. hồng cầu.",
                    "B. bạch cầu.",
                    "C. thần kinh.",
                    "D. cơ."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_003. Hình dưới đây mô tả loại tế bào nào?",
                "options": [
                    "A. Vi khuẩn.",
                    "B. Nấm.",
                    "C. Thực vật.",
                    "D. Động vật."
                ],
                "answer": 0,
                "image": "https://nhantri.top/media/Grade10/tbaovk.png"
            },
            {
                "question": "MB_TBNT_L2_004. Bào quan nào sau đây trực tiếp tham gia quá trình tiêu hóa nội bào ở trùng giày?",
                "options": [
                    "A. Ribosome.",
                    "B. Nhân.",
                    "C. Lysosome.",
                    "D. Bộ máy Golgi"
                ],
                "answer": 2,

            },
            {
                "question": "MB_TBNT_L2_005. Các bào quan có màng kép bao bọc là",
                "options": [
                    "A. nhân, lưới nội chất, lysosome.",
                    "B. nhân, lục lạp, ti thể.",
                    "C. ti thể, bộ máy Golgi, lục lạp.",
                    "D. peroxisome, lysosome, ti thể."
                ],
                "answer": 1,

            },
            {
                "question": "MB_TBNT_L2_006. Vì sao nhân được coi là trung tâm điều khiển mọi hoạt động của tế bào?",
                "options": [
                    "A. Vì nhân chứa DNA _ thông tin di truyền",
                    "B. Vì nhân là bào quan lớn nhất",
                    "C. Vì nhân nằm ở trung tâm tế bào",
                    "D. Vì nhân có màng bao bọc"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_007. Điều gì xảy ra khi enzyme của lysosome bị rò rỉ ra ngoài?",
                "options": [
                    "A. Tế bào tổng hợp nhiều protein hơn",
                    "B. Tế bào sẽ bị phân hủy",
                    "C. Tế bào sản xuất nhiều ATP hơn",
                    "D. Không ảnh hưởng gì đến tế bào"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_008. Tại sao lưới nội chất được gọi là 'bến cảng' của tế bào?",
                "options": [
                    "A. Vì có hình dạng như cảng",
                    "B. Vì là nơi tập trung nhiều protein",
                    "C. Vì là hệ thống vận chuyển trong tế bào",
                    "D. Vì có màng bao bọc"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_009. Mối quan hệ giữa ribosome và lưới nội chất là gì?",
                "options": [
                    "A. Ribosome nằm trên lưới nội chất để tổng hợp protein",
                    "B. Lưới nội chất tạo ra ribosome",
                    "C. Ribosome vận chuyển chất qua lưới nội chất",
                    "D. Không có mối liên hệ"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_010. Vai trò của bộ máy Golgi trong quá trình tiết protein là gì?",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Phân giải protein",
                    "C. Đóng gói và vận chuyển protein",
                    "D. Lưu trữ protein"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_011. Tại sao peroxisome được gọi là bào quan giải độc?",
                "options": [
                    "A. Vì phân giải H<sub>2</sub>O<sub>2</sub> độc hại",
                    "B. Vì chứa nhiều enzyme",
                    "C. Vì có màng bao bọc",
                    "D. Vì nằm gần màng tế bào"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_012. Chức năng của không bào trong tế bào thực vật là gì?",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Dự trữ nước và muối khoáng",
                    "C. Tổng hợp ATP",
                    "D. Đóng gói protein"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_013. Sự khác biệt chính giữa tế bào động vật và thực vật là gì?",
                "options": [
                    "A. Sự có mặt của không bào",
                    "B. Số lượng ti thể",
                    "C. Kích thước nhân",
                    "D. Số lượng ribosome"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_014. Vai trò của màng nhân trong tế bào là gì?",
                "options": [
                    "A. Bảo vệ DNA khỏi các enzyme phân giải",
                    "B. Tổng hợp protein",
                    "C. Tạo năng lượng",
                    "D. Vận chuyển chất"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_015. Tại sao ti thể được gọi là 'nhà máy điện' của tế bào?",
                "options": [
                    "A. Vì có hình dạng như nhà máy",
                    "B. Vì tổng hợp ATP cung cấp năng lượng",
                    "C. Vì có màng kép",
                    "D. Vì chứa nhiều enzyme"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_016. Vai trò chính của bộ khung xương tế bào là",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Duy trì hình dạng tế bào",
                    "C. Quang hợp",
                    "D. Phân giải glucose"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_017. Tính chất nào sau đây <b>không</b> phải là đặc điểm của màng sinh học:",
                "options": [
                    "A. Có tính linh động",
                    "B. Có cấu trúc kép phospholipid",
                    "C. Có tính thấm chọn lọc",
                    "D. Có cấu trúc cứng, không thay đổi"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_018. Sự khác biệt cơ bản giữa tế bào chất và bộ khung xương tế bào là",
                "options": [
                    "A. Tế bào chất chứa các bào quan, còn bộ khung xương không có",
                    "B. Tế bào chất có khả năng sinh năng lượng, còn bộ khung xương không có",
                    "C. Tế bào chất là chất lỏng, còn bộ khung xương là cấu trúc rắn",
                    "D. Tế bào chất không có protein, còn bộ khung xương có nhiều protein"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_019. Trong cấu trúc màng tế bào, các protein màng có vai trò:",
                "options": [
                    "A. Chỉ tham gia vận chuyển chất",
                    "B. Chỉ tạo kênh thụ thể",
                    "C. Chỉ tạo liên kết giữa các tế bào",
                    "D. Đa dạng, bao gồm vận chuyển, thụ thể và liên kết"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_020. Vai trò của cholesterol trong màng tế bào là",
                "options": [
                    "A. Tăng độ linh động của màng",
                    "B. Điều chỉnh độ bền và tính thấm của màng",
                    "C. Tạo thụ thể cho màng",
                    "D. Vận chuyển chất qua màng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_021. Vì sao tế bào cần có các mối nối giữa chúng?",
                "options": [
                    "A. Để trao đổi chất.",
                    "B. Để truyền tin tế bào.",
                    "C. Để duy trì cấu trúc mô.",
                    "D. Để trao đổi chất, duy trì cấu trúc mô và truyền tin tế bào."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_022. Chức năng chính của protein màng là gì?",
                "options": [
                    "A. Chỉ vận chuyển chất",
                    "B. Chỉ xúc tác phản ứng",
                    "C. Chỉ truyền tin tế bào",
                    "D. Tham gia nhiều chức năng khác nhau"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_023. Vai trò của thành tế bào thực vật là",
                "options": [
                    "A. Bảo vệ tế bào",
                    "B. Định hình tế bào",
                    "C. Bảo vệ và định hình cho tế bào",
                    "D. Vận chuyển chất"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_024. Sự khác biệt giữa mối nối kín và mối nối hở là",
                "options": [
                    "A. Kích thước",
                    "B. Khả năng cho chất đi qua",
                    "C. Vị trí trong tế bào",
                    "D. Thành phần cấu tạo"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L2_025. Đặc điểm nào sau đây <b>không</b> đúng về lông và roi?",
                "options": [
                    "A. Đều là cấu trúc dạng sợi",
                    "B. Đều có chức năng vận động",
                    "C. Có cấu trúc hoàn toàn giống nhau",
                    "D. Đều được cấu tạo từ vi ống"
                ],
                "answer": 2,
                "image": null
            },
            // Thêm các câu hỏi Tế bào nhân thực level 2 khác...
        ],
        level3: [
            {
                "question": "MB_TBNT_L3_001. Trước khi chuyển thành ếch con, nòng nọc phải “cắt” chiếc đuôi của nó. Bào quan đã giúp\nnó thực hiện việc này là",
                "options": [
                    "A. Lưới nội chất.",
                    "B. Lysosome.",
                    "C. Ribosome.",
                    "D. Ti thể."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_002. Khi một tế bào bị nhiễm virus, bào quan nào sẽ đóng vai trò quan trọng nhất trong việc phân hủy các thành phần virus?",
                "options": [
                    "A. Ribosome",
                    "B. Lysosome",
                    "C. Bộ máy Golgi",
                    "D. Ti thể"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_003. Trong quá trình điều trị ung thư, các thuốc nhắm vào DNA của tế bào ung thư. Bào quan nào sẽ bị ảnh hưởng trực tiếp nhất?",
                "options": [
                    "A. Nhân tế bào",
                    "B. Lysosome",
                    "C. Peroxisome",
                    "D. Bộ máy Golgi"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_004. Khi tế bào tiếp xúc với chất độc hại như rượu, bào quan nào sẽ hoạt động tích cực nhất để giải độc?",
                "options": [
                    "A. Ti thể",
                    "B. Ribosome",
                    "C. Peroxisome",
                    "D. Bộ máy Golgi"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_005. Trong quá trình sản xuất insulin của tế bào tuyến tụy, các bào quan sẽ làm việc theo trình tự nào?",
                "options": [
                    "A. Nhân → Ribosome → Lưới nội chất → Bộ máy Golgi",
                    "B. Ribosome → Nhân → Bộ máy Golgi → Lưới nội chất",
                    "C. Bộ máy Golgi → Ribosome → Lưới nội chất → Nhân",
                    "D. Lưới nội chất → Nhân → Bộ máy Golgi → Ribosome"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_006. Khi tế bào thiếu năng lượng nghiêm trọng, điều gì sẽ xảy ra với các ti thể?",
                "options": [
                    "A. Ti thể sẽ ngừng hoạt động hoàn toàn",
                    "B. Ti thể sẽ tăng số lượng và kích thước",
                    "C. Ti thể sẽ phân hủy",
                    "D. Ti thể sẽ hợp nhất với lysosome"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_007. Khi tế bào tiếp xúc với môi trường có nồng độ muối cao, hiện tượng nào sau đây sẽ xảy ra:",
                "options": [
                    "A. Màng tế bào co lại do mất nước",
                    "B. Màng tế bào trương phồng",
                    "C. Lớp phospholipid bị phá vỡ",
                    "D. Các protein màng bị biến tính"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_008. Tại sao khi nhiệt độ môi trường tăng cao, màng tế bào có thể bị tổn thương:",
                "options": [
                    "A. Do protein màng bị biến tính",
                    "B. Do phospholipid bị phân hủy",
                    "C. Do cholesterol bị phá vỡ",
                    "D. Do đứt các liên kết glycoprotein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_009. Nếu một tế bào thiếu hệ thống vi ống và vi sợi, hậu quả nghiêm trọng nhất là",
                "options": [
                    "A. Tế bào không thể tổng hợp protein",
                    "B. Tế bào không thể phân chia",
                    "C. Tế bào không thể hô hấp",
                    "D. Tế bào không thể quang hợp"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_010. Trong quá trình quang hợp ở lục lạp, nước được phân ly tại:",
                "options": [
                    "A. Màng ngoài",
                    "B. Màng trong",
                    "C. Hệ thống thylakoid",
                    "D. Stroma"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_011. Một đột biến làm thay đổi cấu trúc phospholipid của màng tế bào sẽ ảnh hưởng trực tiếp đến:",
                "options": [
                    "A. Khả năng tổng hợp protein của tế bào",
                    "B. Tính thấm chọn lọc của màng",
                    "C. Khả năng tạo ATP của tế bào",
                    "D. Khả năng phân chia của tế bào"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_012. Khi một tế bào bị thiếu protein màng vận chuyển glucose, điều gì sẽ xảy ra?",
                "options": [
                    "A. Tế bào không thể tổng hợp ATP",
                    "B. Tế bào không thể nhận glucose từ môi trường",
                    "C. Tế bào sẽ chết ngay lập tức",
                    "D. Thành tế bào sẽ bị phá hủy"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_013. Trong quá trình phát triển của động vật có xương sống, sự thay đổi nào sau đây liên quan đến lông và roi?",
                "options": [
                    "A. Lông biến mất hoàn toàn",
                    "B. Roi tiếp tục tồn tại ở mọi tế bào",
                    "C. Một số tế bào chuyên biệt vẫn giữ được roi",
                    "D. Cả lông và roi đều biến mất"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_014. Tại sao các tế bào thần kinh cần có mối nối hở?",
                "options": [
                    "A. Để trao đổi chất dinh dưỡng",
                    "B. Để truyền tin thần kinh nhanh chóng",
                    "C. Để bảo vệ tế bào thần kinh",
                    "D. Để duy trì hình dạng tế bào"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_015. Khi thành tế bào thực vật bị tổn thương, hệ quả nào sau đây sẽ xảy ra?",
                "options": [
                    "A. Tế bào chết ngay lập tức",
                    "B. Tế bào mất khả năng trao đổi chất",
                    "C. Tế bao mất định hình và có thể bị vỡ",
                    "D. Không ảnh hưởng gì đến tế bào"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TBNT_L3_016. Trong môi trường có áp suất thẩm thấu cao, vai trò của thành tế bào thực vật là",
                "options": [
                    "A. Ngăn tế bào co lại quá mức.",
                    "B. Tăng khả năng hấp thu nước.",
                    "C. Điều chỉnh nồng độ chất tan.",
                    "D. Làm tăng áp suất thẩm thấu."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi Tế bào nhân thực level 3 khác...
        ]
    },
    //Vận chuyển các chất qua màng
    mcTDC: {
        level1: [
            {
                "question": "MB_VCCCQM_L1_001. Nếu môi trường bên ngoài có nồng độ của các chất tan lớn hơn nồng độ của các chất tan có trong tế bào thì môi trường đó được gọi là môi trường:",
                "options": [
                    "A. ưu trương.",
                    "B. đẳng trương.",
                    "C. nhược trương.",
                    "D. bão hòa."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_002. Nước được vận chuyển qua màng tế bào nhờ:",
                "options": [
                    "A. sự biến dạng của màng tế bào.",
                    "B. bơm protein và tiêu tốn ATP.",
                    "C. khuếch tán trực tiếp qua lớp phospholipid.",
                    "D. kênh protein đặc biệt gọi là “aquaporin”."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_003. Hiện tượng vận chuyển các chất từ nơi có nồng độ cao đến nơi có nồng độ thấp mà <b>không</b> cần tiêu tốn năng lượng được gọi là",
                "options": [
                    "A. Khuếch tán đơn giản.",
                    "B. Vận chuyển chủ động.",
                    "C. Thẩm thấu.",
                    "D. Xuất bào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_004. Sự khuếch tán của các chất qua lớp photpholipid được gọi là hiện tượng nào?",
                "options": [
                    "A. Khuếch tán tăng cường.",
                    "B. Khuếch tán đơn giản.",
                    "C. Thẩm thấu.",
                    "D. Vận chuyển chủ động."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_005. Protein xuyên màng có chức năng nào sau đây?",
                "options": [
                    "A. Vận chuyển các chất.",
                    "B. Tổng hợp protein.",
                    "C. Tạo năng lượng.",
                    "D. Phân giải protein."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_006. Khi tế bào ở môi trường nhược trương, hiện tượng gì sẽ xảy ra?",
                "options": [
                    "A. Tế bào trương.",
                    "B. Tế bào co.",
                    "C. Tế bào vỡ.",
                    "D. Tế bào không thay đổi."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_007. Các chất tan không phân cực có kích thước nhỏ vận chuyển qua màng theo cơ chế nào?",
                "options": [
                    "A. Khuếch tán đơn giản.",
                    "B. Khuếch tán qua kênh protein.",
                    "C. Vận chuyển chủ động.",
                    "D. Thẩm thấu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_008. Nước muối NaCl 0,09% được gọi là gì?",
                "options": [
                    "A. Nước muối sinh lí.",
                    "B. Dung dịch đẳng trương.",
                    "C. Dung dịch ưu trương.",
                    "D. Dung dịch nhược trương."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_009. Vận chuyển chủ động còn được gọi là gì?",
                "options": [
                    "A. Vận chuyển tích cực.",
                    "B. Vận chuyển thụ động.",
                    "C. Khuếch tán.",
                    "D. Thẩm thấu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_010. Vận chuyển chủ động là kiểu vận chuyển các chất từ nơi có nồng độ nào đến nơi có nồng độ nào?",
                "options": [
                    "A. Từ thấp đến cao",
                    "B. Từ cao đến thấp",
                    "C. Ngang bằng nhau",
                    "D. Không phụ thuộc nồng độ"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_011. Tế bào sử dụng nguồn năng lượng nào để thực hiện vận chuyển chủ động?",
                "options": [
                    "A. ATP",
                    "B. ADP",
                    "C. AMP",
                    "D. GTP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_012. Các phân tử nào sau đây <b>không</b> thể vận chuyển qua màng tế bào bằng cách thức vận chuyển đơn giản?",
                "options": [
                    "A. Protein và đường",
                    "B. DNA và protein",
                    "C. Nước và ion",
                    "D. Ion và glucose"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_013. Mọi tế bào đều",
                "options": [
                    "A. không có sự trao đổi chất",
                    "B. có sự biến đổi chất",
                    "C. có sự trao đổi chất",
                    "D. không có sự biến đổi chất"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_014. Trao đổi chất ở tế bào gồm các quá trình:",
                "options": [
                    "A. hấp thu các chất dinh dưỡng; tổng hợp các chất hữu cơ đặc trưng; phân giải các chất hữu cơ trong tế bào; đào thải các chất ra khỏi tế bào.",
                    "B. tổng hợp các chất hữu cơ đặc trưng; phân giải các chất hữu cơ trong tế bào; đào thải các chất ra khỏi tế bào.",
                    "C. hấp thu các chất dinh dưỡng; tổng hợp các chất hữu cơ đặc trưng; đào thải các chất ra khỏi tế bào.",
                    "D. hấp thu các chất dinh dưỡng; tổng hợp các chất hữu cơ đặc trưng; phân giải các chất hữu cơ trong tế bào.."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_015. Quá trình trao đổi chất ở tế bào luôn kèm theo quá trình:",
                "options": [
                    "A. Trao đổi năng lượng",
                    "B. Chuyển hóa vật chất",
                    "C. Chuyển hóa năng lượng",
                    "D. Tích lũy năng lượng"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_016. Vận chuyển chủ động là phương thức các chất được vận chuyển",
                "options": [
                    "A. qua màng tế bào từ nơi có nồng độ cao đến nơi có nồng độ thấp",
                    "B. qua màng tế bào từ nơi có nồng độ thấp đến nơi có nồng độ thấp",
                    "C. qua màng tế bào từ nơi có nồng độ cao đến nơi có nồng độ cao",
                    "D. qua màng tế bào từ nơi có nồng độ thấp đến nơi có nồng độ cao"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_017. Phương thức vận chuyển chủ động:",
                "options": [
                    "A. Tiêu tốn vật chất",
                    "B. Cần tiêu tốn năng lượng",
                    "C. Không cần tiêu tốn năng lượng",
                    "D. Không cần tiêu tốn vật chất"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_018. Nhập bào là phương thức vận chuyển các chất",
                "options": [
                    "A. từ môi trường trong vào trong tế bào nhờ sự biến dạng của màng sinh chất",
                    "B. từ môi trường ngoài vào trong cơ thể nhờ sự biến dạng của màng sinh chất",
                    "C. từ môi trường ngoài vào trong tế bào nhờ sự biến dạng của màng nhân",
                    "D. từ môi trường ngoài vào trong tế bào nhờ sự biến dạng của màng sinh chất"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_019. Nhập bào gồm các kiểu là:",
                "options": [
                    "A. Thực bào và ẩm bào",
                    "B. Thực bào và xuất bào",
                    "C. Xuất bào và ẩm bào",
                    "D. Thực bào, xuất bào và ẩm bào"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L1_020. Xuất bào là phương thức vận chuyển các chất:",
                "options": [
                    "A. Từ bên ngoài tế bào vào môi trường ngoài nhờ sự biến dạng của màng sinh chất",
                    "B. Từ bên trong tế bào ra môi trường ngoài nhờ sự biến dạng của màng nhân",
                    "C. Từ bên trong tế bào ra môi trường ngoài nhờ sự biến dạng của màng sinh chất",
                    "D. Từ bên trong tế bào ra môi trường ngoài nhờ sự ổn định của màng sinh chất"
                ],
                "answer": 2,
                "image": null
            }

            // Thêm các câu hỏi VCCCQM level 1 khác...
        ],
        level2: [
            {
                "question": "MB_VCCCQM_L2_001. Phân tử có đặc điểm nào sau đây có thể dễ dàng khuếch tán trực tiếp qua lớp phospholipid kép của màng sinh chất?",
                "options": [
                    "A. Lớn và kị nước.",
                    "B. Nhỏ và không phân cực.",
                    "C. Lớn và phân cực.",
                    "D. Nhỏ và phân cực."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_002. Các bào quan nào của tế bào nhân thực tham gia tổng hợp, vận chuyển protein xuất bào?",
                "options": [
                    "A. lưới nội chất hạt, bộ máy Golgi, túi tiết, màng tế bào.",
                    "B. lưới nội chất trơn, bộ máy Golgi, túi tiết, màng tế bào.",
                    "C.lưới nội chất trơn, bộ máy Golgi, không bào, màng tế bào.",
                    "D.lưới nội chất hạt, bộ máy Golgi, lysosome, màng tế bào."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_003. Khi một tế bào hồng cầu được đặt trong môi trường nhược trương, nó sẽ:",
                "options": [
                    "A. trải qua quá trình phá vỡ tế bào.",
                    "B. trải qua quá trình co nguyên sinh.",
                    "C. ở trạng thái cân bằng.",
                    "D. giảm kích thước."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_004. Các dung dịch trong hai nhánh của ống chữ U này được ngăn cách bởi một lớp màng bán thấm, có tính thấm nước nhưng không thấm glucose. Nhánh a của ống chứa dung dịch glucose 5%. Nhánh b của ống chứa dung dịch glucose 10%. Ban đầu, mức dung dịch ở cả hai bên ngang bằng như nhau.Sau khi hệ thống đạt đến trạng thái cân bằng, sự thay đổi nào dưới đây có thề quan sát được?",
                "options": [
                    "A. Nồng độ của dung dịch glucose ở nhánh a cao hơn so với nhánh b.",
                    "B. Mức dung dịch ở bên nhánh a cao hơn so với bên nhánh b.",
                    "C. Mức dung dịch ở hai nhánh không thay đổi.",
                    "D. Mức dung dịch ở bên nhánh b cao hơn so với bên nhánh a."
                ],
                "answer": 3,
                "image": "https://nhantri.top/media/Grade10/ongchuu.png"
            },
            {
                "question": "MB_VCCCQM_L2_005. Sự vận chuyển chủ động và xuất nhập bào luôn tiêu hao ATP vì",
                "options": [
                    "A. Tế bào chủ động lấy các chất nên phải mất năng lượng.",
                    "B. Vận chuyển ngược chiều nồng độ hoặc cần có sự biến dạng của màng sinh chất.",
                    "C. Phải sử dụng chất mang để tiến hành vận chuyển.",
                    "D. Các chất được vận chuyển có năng lượng lớn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_006. Tại sao các ion không thể đi qua màng tế bào bằng cơ chế khuếch tán đơn giản?",
                "options": [
                    "A. Vì ion có kích thước quá lớn",
                    "B. Vì ion không tan trong lipid",
                    "C. Vì ion có điện tích",
                    "D. Vì ion không có gradient nồng độ"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_007. Sự khác biệt giữa môi trường ưu trương và nhược trương là",
                "options": [
                    "A. Nồng độ chất tan bên trong và bên ngoài tế bào",
                    "B. Nhiệt độ môi trường",
                    "C. Áp suất không khí",
                    "D. pH môi trường"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_008. Protein kênh khác với protein chuyển tải ở điểm nào?",
                "options": [
                    "A. Protein kênh không thay đổi hình dạng khi vận chuyển chất",
                    "B. Protein kênh không cần năng lượng",
                    "C. Protein kênh chỉ vận chuyển một loại chất",
                    "D. Protein kênh có kích thước lớn hơn"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_009. Vì sao tế bào phải tiêu tốn năng lượng trong vận chuyển chủ động?",
                "options": [
                    "A. Để vận chuyển chất từ nơi có nồng độ thấp đến nơi có nồng độ cao",
                    "B. Để tạo ra protein vận chuyển",
                    "C. Để duy trì cấu trúc màng",
                    "D. Để tổng hợp ATP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_010. Hiện tượng co nguyên sinh xảy ra khi:",
                "options": [
                    "A. Tế bào ở môi trường ưu trương",
                    "B. Tế bào ở môi trường nhược trương",
                    "C. Tế bào ở môi trường đẳng trương",
                    "D. Tế bào thiếu năng lượng"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_011. Tại sao nước muối sinh lí được sử dụng để súc miệng?",
                "options": [
                    "A. Vì nó tiêu diệt vi khuẩn",
                    "B. Vì nó không ảnh hưởng đến các tế bào niêm mạc miệng",
                    "C. Vì nó làm sạch mảng bám",
                    "D. Vì nó có tác dụng làm trắng răng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_012. Vận chuyển chủ động các chất qua màng tế bào cần sử dụng bao nhiêu năng lượng ATP?",
                "options": [
                    "A. 10_30%",
                    "B. 20_30%",
                    "C. 30_40%",
                    "D. 40_50%"
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_013. Tại sao tế bào cần thực hiện vận chuyển chủ động?",
                "options": [
                    "A. Để tiết kiệm năng lượng",
                    "B. Để đưa chất từ nơi có nồng độ cao đến thấp",
                    "C. Để đưa chất từ nơi có nồng độ thấp đến cao",
                    "D. Để phân hủy các chất"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_014. Protein MDR có vai trò gì trong tế bào ung thư?",
                "options": [
                    "A. Giúp tế bào ung thư nhân đôi nhanh",
                    "B. Làm tế bào ung thư chết",
                    "C. Giúp tế bào ung thư kháng thuốc",
                    "D. Không liên quan đến tế bào ung thư"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L2_015. Các chất cần vận chuyển qua màng tế bào bằng thực bào gồm",
                "options": [
                    "A. Các phân tử nhỏ như glucose",
                    "B. Các phân tử có kích thước lớn",
                    "C. Các ion",
                    "D. Các phân tử không phân cực"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi VCCCQM level 2 khác...
        ],
        level3: [
            {
                "question": "MB_VCCCQM_L3_001. Quan sát hình và cho biết, nhận định nào đúng về quá trình được mô tả trong hình?",
                "options": [
                    "A. Hình trên mô tả hình thức vận chuyển chủ động ở tế bào, nhập bào.",
                    "B. Hình trên mô tả hình thức vận chuyển chủ động ở tế bào, xuất bào.",
                    "C. Hình trên mô tả hình thức vận chuyển thụ động ở tế bào, khuếch tán đơn giản.",
                    "D. Hình trên mô tả hình thức vận chuyển thụ động ở tế bào, khuếch tán tăng cường."
                ],
                "answer": 0,
                "image": "https://nhantri.top/media/Grade10/nhapbao.png"
            },
            {
                "question": "MB_VCCCQM_L3_002. Một tế bào động vật và một tế bào thực vật được đặt trong nước cất. Tế bào động vật to dần rồi vỡ còn tế bào thực vật trương lên nhưng không vỡ, sự khác nhau này là do:",
                "options": [
                    "A. tế bào động vật không có không bảo trung tâm.",
                    "B. tế bào động vật không có thành tế bào.",
                    "C. tế bào thực vật có màng bán thấm.",
                    "D. thành tế bào thực vật có tính thấm hoàn toàn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_003. Khi muối dưa cà, sản phẩm sau khi muối bị nhăn nheo, mất nước là do:",
                "options": [
                    "A. nước trong môi trường được vận chuyển vào tế bào làm tế bào trương không đều.",
                    "B. muối trong môi trường được vận chuyển vào tế bào làm tế bào trương không đều.",
                    "C. nước trong dưa cà được vận chuyển ra ngoài môi trường làm tế bào mất nước.",
                    "D. muối trong dưa cà được vận chuyển ra ngoài môi trường làm tế bào mất nước."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_004. Một tế bào thực vật được đặt trong dung dịch muối 10%. Sau một thời gian, quan sát thấy tế bào co nguyên sinh. Nếu chuyển tế bào này sang dung dịch muối 1%, hiện tượng gì sẽ xảy ra?",
                "options": [
                    "A. Tế bào sẽ trở về trạng thái ban đầu",
                    "B. Tế bào sẽ tiếp tục co nguyên sinh",
                    "C. Tế bào sẽ bị vỡ",
                    "D. Tế bào không thay đổi"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_005. Khi uống nước biển, con người dễ bị mất nước vì",
                "options": [
                    "A. Nước trong tế bào sẽ di chuyển ra ngoài do môi trường ưu trương",
                    "B. Nước biển có nhiều muối gây độc",
                    "C. Nước biển làm tổn thương màng tế bào",
                    "D. Protein vận chuyển nước bị ức chế"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_006. Trong điều trị bệnh, bác sĩ thường dùng dung dịch đẳng trương để truyền dịch vì",
                "options": [
                    "A. Tránh làm vỡ hoặc co nguyên sinh tế bào máu",
                    "B. Giúp tế bào hấp thu được nhiều chất",
                    "C. Tăng tốc độ vận chuyển thuốc",
                    "D. Tiết kiệm năng lượng cho tế bào"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_007. Một người bị ngộ độc thức ăn được điều trị bằng cách uống than hoạt tính. Cơ chế hấp thụ độc tố của than hoạt tính là",
                "options": [
                    "A. Khuếch tán đơn giản",
                    "B. Vận chuyển chủ động",
                    "C. Thẩm thấu",
                    "D. Khuếch tán qua kênh protein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_008. Khi tế bào thiếu ATP, quá trình nào sau đây sẽ bị ảnh hưởng nhiều nhất?",
                "options": [
                    "A. Vận chuyển chủ động",
                    "B. Khuếch tán đơn giản",
                    "C. Thẩm thấu",
                    "D. Khuếch tán qua kênh protein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_009. Nếu một tế bào thiếu ATP, điều gì sẽ xảy ra với quá trình vận chuyển chủ động?",
                "options": [
                    "A. Vẫn diễn ra bình thường",
                    "B. Diễn ra nhanh hơn",
                    "C. Ngừng hoạt động",
                    "D. Chuyển sang vận chuyển thụ động"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_010. Tại sao tế bào ung thư kháng thuốc thường có nhiều protein P_glycoprotein?",
                "options": [
                    "A. Để tăng khả năng phân chia",
                    "B. Để đẩy thuốc ra khỏi tế bào",
                    "C. Để tăng hấp thu thuốc",
                    "D. Để tăng tốc độ phát triển"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_011. Khi nồng độ muối trong dung dịch súc miệng cao hơn 0,09%, điều gì sẽ xảy ra với tế bào niêm mạc miệng?",
                "options": [
                    "A. Tế bào sẽ trương nở",
                    "B. Tế bào sẽ co lại",
                    "C. Tế bào không thay đổi",
                    "D. Tế bào sẽ chết"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_012. Trong quá trình xuất bào, điều gì xảy ra với màng của túi vận chuyển?",
                "options": [
                    "A. Được tái sử dụng",
                    "B. Hòa vào màng tế bào",
                    "C. Bị phân hủy",
                    "D. Tách ra khỏi tế bào"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_VCCCQM_L3_013. Tại sao tế bào cần ATP để thực hiện vận chuyển chủ động ngược chiều gradient nồng độ?",
                "options": [
                    "A. Để tạo ra protein vận chuyển",
                    "B. Để cung cấp năng lượng vượt qua lực cản tự nhiên",
                    "C. Để tạo ra màng tế bào mới",
                    "D. Để phân hủy các chất không cần thiết"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi VCCCQM người và ứng dụng level 3 khác...
        ]
    },
    //Truyền tin tế bào
    mcTTTB: {
        level1: [
            {
                "question": "MB_TTTB_L1_001. Truyền tin tế bào có thể thực hiện giữa:",
                "options": [
                    "A. Các tế bào của cùng một cơ thể.",
                    "B. Các tế bào của các cơ thể khác nhau.",
                    "C. Các tế bào với môi trường.",
                    "D. Các tế bào của cùng một cơ thể, giữa các cơ thể và tế bào với môi trường."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TTTB_L1_002. Synapse là",
                "options": [
                    "A. Vị trí tiếp xúc giữa các tế bào thần kinh",
                    "B. Nơi truyền tin giữa các tế bào cơ",
                    "C. Điểm kết nối giữa các mô",
                    "D. Vị trí tổng hợp protein"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_TTTB_L1_003. Các chất nào sau đây là tín hiệu hóa học trong truyền tin tế bào?",
                "options": [
                    "A. Amino acid và nucleotide",
                    "B. Hormone và enzyme",
                    "C. Peptide và protein",
                    "D. Amino acid, nucleotide, hormone, enzyme, peptide, protein."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_TTTB_L1_004. Truyền tin trong tế bào bao gồm mấy giai đoạn?",
                "options": [
                    "A. 2 giai đoạn.",
                    "B. 3 giai đoạn.",
                    "C. 4 giai đoạn.",
                    "D. 5 giai đoạn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L1_005. Tế bào tiếp nhận tín hiệu bằng:",
                "options": [
                    "A. Các protein thụ thể.",
                    "B. Các enzyme.",
                    "C. Các hormone.",
                    "D. Các nucleotide."
                ],
                "answer": 0,
                "image": null
            },


            // Thêm các câu hỏi TTTB level 1 khác...
        ],
        level2: [

            {
                "question": "MB_TTTB_L2_001. Trong quá trình truyền tin tế bào, protein thụ thể nằm ở đâu?",
                "options": [
                    "A. Trong nhân tế bào",
                    "B. Trong tế bào chất",
                    "C. Trên màng tế bào",
                    "D. Trong ti thể"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TTTB_L2_002. Vai trò của hormone aldosterone trong truyền tin tế bào là",
                "options": [
                    "A. Tổng hợp protein",
                    "B. Điều hòa cân bằng muối và nước",
                    "C. Phân giải glucose",
                    "D. Tạo năng lượng"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L2_003. Đặc điểm nào sau đây <b>không</b> phải là đặc điểm của truyền tin qua synapse?",
                "options": [
                    "A. Diễn ra một chiều",
                    "B. Có thể đảo chiều",
                    "C. Cần chất dẫn truyền thần kinh",
                    "D. Xảy ra giữa các tế bào thần kinh"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L2_004. Phân tử mRNA trong quá trình truyền tin tế bào có vai trò:",
                "options": [
                    "A. Là thụ thể tiếp nhận tín hiệu",
                    "B. Truyền thông tin di truyền",
                    "C. Tổng hợp enzyme",
                    "D. Điều hòa nồng độ hormone"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L2_005. Các tế bào thực vật có khả năng giao tiếp thông qua:",
                "options": [
                    "A. Chỉ qua các tín hiệu hóa học",
                    "B. Chỉ qua các tín hiệu điện",
                    "C. Cả tín hiệu hóa học và điện",
                    "D. Không có khả năng giao tiếp"
                ],
                "answer": 2,
                "image": null
            },


            // Thêm các câu hỏi TTTB level 2 khác...
        ],
        level3: [
            // Application Level Questions
            {
                "question": "MB_TTTB_L3_001. Khi một tế bào gan nhận được tín hiệu insulin, nó sẽ:",
                "options": [
                    "A. Tăng giải phóng glucose vào máu",
                    "B. Giảm hấp thu glucose từ máu",
                    "C. Tăng hấp thu glucose từ máu",
                    "D. Không thay đổi hấp thu glucose"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_TTTB_L3_002. Trong điều kiện stress, cơ thể tiết ra hormone adrenaline. Tại sao tim đập nhanh hơn?",
                "options": [
                    "A. Vì adrenaline trực tiếp tác động lên cơ tim",
                    "B. Vì các tế bào cơ tim có thụ thể tiếp nhận adrenaline",
                    "C. Vì adrenaline kích thích giải phóng glucose",
                    "D. Vì tim tự động tăng nhịp đập"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L3_003. Tại sao một số loại thuốc kháng sinh có thể ảnh hưởng đến quá trình truyền tin trong tế bào?",
                "options": [
                    "A. Vì chúng thay đổi cấu trúc màng tế bào",
                    "B. Vì chúng ức chế tổng hợp protein",
                    "C. Vì chúng làm biến đổi ADN",
                    "D. Vì chúng phá hủy ti thể"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L3_004. Khi một cây bị côn trùng tấn công, nó có thể truyền tín hiệu nguy hiểm cho các cây xung quanh. Điều này chứng tỏ:",
                "options": [
                    "A. Thực vật không có khả năng phòng vệ",
                    "B. Thực vật có hệ thống truyền tin phức tạp",
                    "C. Côn trùng không thể tấn công nhiều cây cùng lúc",
                    "D. Thực vật chỉ phản ứng thụ động"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_TTTB_L3_005. Trong quá trình tiến hóa, vì sao các tế bào phát triển khả năng truyền tin?",
                "options": [
                    "A. Để tăng kích thước tế bào",
                    "B. Để thích nghi với môi trường",
                    "C. Để tăng tốc độ phân chia",
                    "D. Để giảm tiêu hao năng lượng"
                ],
                "answer": 1,
                "image": null
            }

            // Thêm các câu hỏi TTTB level 3 khác...
        ]
    },
    // Khái quát về chuyển hóa vật chất và năng lượng trong tế bào
    mcKQCHVCVNL: {
        level1: [
            {
                "question": "MB_KQCHVCVNL_L1_001. Năng lượng trong tế bào tồn tại ở hai dạng chính là",
                "options": [
                    "A. Động năng và thế năng",
                    "B. Năng lượng hóa học và nhiệt năng",
                    "C. Năng lượng ánh sáng và nhiệt năng",
                    "D. ATP và ADP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_002. ATP là viết tắt của",
                "options": [
                    "A. Adenine diphosphate",
                    "B. Adenosine diphosphate",
                    "C. Adenosine triphosphate",
                    "D. Adenine triphosphate"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_003. Enzyme là chất xúc tác sinh học được tổng hợp từ",
                "options": [
                    "A. Các tế bào chết",
                    "B. Các tế bào sống",
                    "C. Môi trường bên ngoài",
                    "D. Phản ứng hóa học"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_004. Thành phần chính cấu tạo nên enzyme là",
                "options": [
                    "A. Protein",
                    "B. Lipid",
                    "C. Glucid",
                    "D. ATP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_005. Các cofactor của enzyme có thể là",
                "options": [
                    "A. Protein và lipid",
                    "B. Ion kim loại và vitamin",
                    "C. Glucid và ATP",
                    "D. ADP và AMP"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_006. Theo đồ thị ảnh hưởng của pH, enzyme pepsin hoạt động tốt nhất ở khoảng pH nào?",
                "options": [
                    "A. pH 2",
                    "B. pH 7",
                    "C. pH 8",
                    "D. pH 10"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_007. Khi nhiệt độ tăng cao, hoạt tính enzyme sẽ như thế nào?",
                "options": [
                    "A. Tăng dần",
                    "B. Giảm dần",
                    "C. Không đổi",
                    "D. Tăng đột ngột"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_008. Đối với enzyme luciferase, khi tăng nồng độ cơ chất thì hiệu suất phản ứng sẽ:",
                "options": [
                    "A. Tăng đến giới hạn rồi không đổi",
                    "B. Giảm dần",
                    "C. Tăng liên tục không giới hạn",
                    "D. Không thay đổi"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_009. Chất ức chế cạnh tranh với cơ chất để liên kết với trung tâm hoạt động của enzyme được gọi là",
                "options": [
                    "A. Chất hoạt hóa",
                    "B. Chất ức chế",
                    "C. Chất xúc tác",
                    "D. Chất điều hòa"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L1_010. Enzyme trypsin hoạt động tốt nhất ở khoảng pH nào?",
                "options": [
                    "A. pH 2",
                    "B. pH 5",
                    "C. pH 8",
                    "D. pH 10"
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                "question": "MB_KQCHVCVNL_L2_001. Vì sao ATP được gọi là 'đồng tiền' năng lượng của tế bào?",
                "options": [
                    "A. Vì ATP có giá trị như tiền",
                    "B. Vì ATP được sử dụng cho mọi hoạt động sống của tế bào",
                    "C. Vì ATP có thể tích trữ trong tế bào",
                    "D. Vì ATP có thể chuyển hóa thành ADP"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_002. Khi các liên kết phosphate của ATP bị phá vỡ, năng lượng được:",
                "options": [
                    "A. Giải phóng để tế bào sử dụng",
                    "B. Chuyển thành nhiệt",
                    "C. Mất đi hoàn toàn",
                    "D. Tích trữ trong ADP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_003. Điều nào sau đây <b>không</b> phải là yếu tố ảnh hưởng đến hoạt tính enzyme?",
                "options": [
                    "A. Nhiệt độ",
                    "B. pH",
                    "C. Áp suất không khí",
                    "D. Nồng độ cơ chất"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_004. Đặc điểm nào sau đây <b>không</b> đúng về enzyme?",
                "options": [
                    "A. Có tính đặc hiệu cao",
                    "B. Là chất xúc tác sinh học",
                    "C. Hoạt động tốt ở mọi nhiệt độ",
                    "D. Được tổng hợp từ tế bào sống"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_005. Trong tế bào, năng lượng tiềm ẩn được tìm thấy ở:",
                "options": [
                    "A. Các liên kết hóa học",
                    "B. Chỉ trong ATP",
                    "C. Chỉ trong các enzyme",
                    "D. Các không bào"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_006. Tại sao khi pH thay đổi có thể làm giảm hoặc mất hoạt tính enzyme?",
                "options": [
                    "A. Do pH làm thay đổi cấu trúc không gian của enzyme",
                    "B. Do pH làm thay đổi nhiệt độ môi trường",
                    "C. Do pH làm tăng nồng độ cơ chất",
                    "D. Do pH làm giảm nồng độ enzyme"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_007. Khi nồng độ enzyme không đổi và tăng nồng độ cơ chất thì hiện tượng gì sẽ xảy ra?",
                "options": [
                    "A. Hiệu suất phản ứng tăng không giới hạn",
                    "B. Hiệu suất phản ứng giảm dần",
                    "C. Hiệu suất phản ứng tăng đến giới hạn do số lượng enzyme có hạn",
                    "D. Hiệu suất phản ứng không thay đổi"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_008. Trong tế bào sống, enzyme thường được định vị ở đâu?",
                "options": [
                    "A. Phân bố ngẫu nhiên trong tế bào",
                    "B. Chỉ ở trong nhân tế bào",
                    "C. Ở những vùng có điều kiện thích hợp hoặc trong các bào quan",
                    "D. Chỉ ở màng tế bào"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_009. Tại sao enzyme trong lysosome cần môi trường pH thấp để hoạt động?",
                "options": [
                    "A. Để phân hủy các chất hiệu quả hơn",
                    "B. Để bảo vệ tế bào khỏi các enzyme phân hủy",
                    "C. Để tăng tốc độ phản ứng",
                    "D. Để tiết kiệm năng lượng"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L2_010. Quá trình chuyển hóa vật chất nhờ enzyme có đặc điểm gì?",
                "options": [
                    "A. Diễn ra chậm và không theo trình tự.",
                    "B. Diễn ra nhanh chóng và không bị ảnh hưởng bởi môi trường.",
                    "C. Diễn ra nhanh chóng và theo trình tự nhất định.",
                    "D. Diễn ra độc lập với điều kiện môi trường."
                ],
                "answer": 2,
                "image": null
            },

            // Thêm các câu hỏi KQCHVCVNL level 2 khác...
        ],
        level3: [
            {
                "question": "MB_KQCHVCVNL_L3_001. Khi một enzyme hoạt động ở nhiệt độ cao hơn nhiệt độ tối ưu, điều gì sẽ xảy ra?",
                "options": [
                    "A. Enzyme tăng hoạt tính",
                    "B. Enzyme bị biến tính và mất hoạt tính",
                    "C. Enzyme hoạt động bình thường",
                    "D. Enzyme tạo ra nhiều sản phẩm hơn"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_002. Trong quá trình chuyển hóa năng lượng trong tế bào, phát biểu nào sau đây là đúng?",
                "options": [
                    "A. Không có sự thất thoát năng lượng dưới dạng nhiệt.",
                    "B. Toàn bộ năng lượng được chuyển hóa thành ATP.",
                    "C. Một phần năng lượng bị thất thoát dưới dạng nhiệt.",
                    "D. Năng lượng không thể chuyển từ dạng này sang dạng khác."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_003. Nếu một tế bào thiếu enzyme cần thiết cho quá trình chuyển hóa glucose, điều gì có thể xảy ra?",
                "options": [
                    "A. Tế bào sẽ chết ngay lập tức.",
                    "B. Tế bào không thể tổng hợp ATP từ glucose.",
                    "C. Tế bào sẽ tự tạo ra enzyme mới.",
                    "D. Không ảnh hưởng gì đến tế bào."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_004. Tại sao enzyme được gọi là chất xúc tác sinh học đặc hiệu?",
                "options": [
                    "A. Vì chỉ có sinh vật mới tạo ra được enzyme",
                    "B. Vì mỗi enzyme chỉ xúc tác cho một hoặc một nhóm phản ứng nhất định",
                    "C. Vì enzyme chỉ hoạt động trong điều kiện sống",
                    "D. Vì enzyme được tạo ra từ protein"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_005. Khi nồng độ cơ chất tăng cao vượt quá khả năng xúc tác của enzyme, điều gì sẽ xảy ra?",
                "options": [
                    "A. Tốc độ phản ứng tiếp tục tăng.",
                    "B. Tốc độ phản ứng không đổi.",
                    "C. Enzyme bị biến tính.",
                    "D. Phản ứng ngừng hoàn toàn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_006. Trong quá trình bảo quản thực phẩm, để hạn chế sự phân hủy do enzyme, người ta thường:",
                "options": [
                    "A. Bảo quản ở nhiệt độ cao",
                    "B. Bảo quản ở nhiệt độ thấp và điều chỉnh pH",
                    "C. Tăng nồng độ cơ chất",
                    "D. Thêm chất hoạt hóa enzyme"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_007. Khi thiết kế quy trình sản xuất có sử dụng enzyme, yếu tố nào cần được kiểm soát chặt chẽ nhất?",
                "options": [
                    "A. Ánh sáng.",
                    "B. Áp suất.",
                    "C. pH và nhiệt độ.",
                    "D. Độ ẩm."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_008. Trong điều trị bệnh, việc sử dụng chất ức chế enzyme dựa trên nguyên tắc nào?",
                "options": [
                    "A. Làm tăng hoạt tính enzyme.",
                    "B. Cạnh tranh với cơ chất để kiểm soát phản ứng.",
                    "C. Tăng nồng độ cơ chất.",
                    "D. Thay đổi nhiệt độ môi trường."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_009. Trong quá trình tiêu hóa thức ăn, tại sao dạ dày tiết HCl?",
                "options": [
                    "A. Để tạo môi trường pH thích hợp cho pepsin hoạt động.",
                    "B. Để tiêu diệt vi khuẩn.",
                    "C. Để tăng nhiệt độ dạ dày.",
                    "D. Để làm mềm thức ăn."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_010. Để tối ưu hóa hiệu suất của một phản ứng enzyme trong công nghiệp, cần:",
                "options": [
                    "A. Chỉ tăng nhiệt độ môi trường.",
                    "B. Chỉ điều chỉnh pH.",
                    "C. Điều chỉnh đồng thời nhiều yếu tố như pH, nhiệt độ và nồng độ cơ chất.",
                    "D. Chỉ tăng nồng độ enzyme."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_KQCHVCVNL_L3_011. Khi bảo quản rau củ trong tủ lạnh, vì sao <b>không</b> nên để nhiệt độ quá thấp?",
                "options": [
                    "A. Để tiết kiệm điện năng.",
                    "B. Tránh đông đá làm vỡ tế bào.",
                    "C. Giữ được nhiều vitamin hơn.",
                    "D. Duy trì hoạt động hô hấp ở mức tối thiểu."
                ],
                "answer": 1,
                "image": null
            },

            // Thêm các câu hỏi KQ về CHVC và NL level 3 khác...
        ]
    },
    // Tổng hợp và phân giải các chất trong tế bào
    mcQTCHVCVNL: {
        level1: [

            {
                "question": "MB_CHVCVNL_L1_01. Trong quá trình hô hấp tế bào, phân tử glucose được phân giải hoàn toàn thành:",
                "options": [
                    "A. CO<sub>2</sub> và H<sub>2</sub>O",
                    "B. Pyruvate và NADH",
                    "C. Acetyl_CoA và CO<sub>2</sub>",
                    "D. FADH<sub>2</sub> và ATP"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_02. Sản phẩm cuối cùng của quá trình lên men lactate là",
                "options": [
                    "A. Ethanol",
                    "B. Acid lactic",
                    "C. Pyruvate",
                    "D. Acetaldehyde"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_03. Nhiệt độ thích hợp để làm lạnh bảo quản thực phẩm là",
                "options": [
                    "A. 0_2°C",
                    "B. 4_6°C",
                    "C. 8_10°C",
                    "D. 12_14°C"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_04. Trong chu trình Krebs, số phân tử CO<sub>2</sub> được giải phóng từ một phân tử pyruvate là",
                "options": [
                    "A. 1",
                    "B. 2",
                    "C. 3",
                    "D. 4"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_05. Phân tử glucose được phân giải thành bao nhiêu phân tử pyruvate trong giai đoạn đường phân?",
                "options": [
                    "A. 1",
                    "B. 2",
                    "C. 3",
                    "D. 4"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_06. Trong quá trình quang hợp, các photon ánh sáng đập vào các diệp lục làm điều gì?",
                "options": [
                    "A. Làm electron cao năng và chuyển qua chuỗi truyền electron",
                    "B. Tạo ra ATP trực tiếp",
                    "C. Phân giải nước",
                    "D. Tạo ra đường glucose"
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_07. Trong tế bào, các phân tử nucleic acid được hình thành từ",
                "options": [
                    "A. Các acid béo và glycerol",
                    "B. các nucleotide liên kết với nhau bằng liên kết phosphodiester.",
                    "C. Protein và carbohydrate",
                    "D. ATP và NADPH"
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_08. Phương trình tổng quát của quá trình quang hợp là",
                "options": [
                    "A. 6H<sub>2</sub>O + 6O<sub>2</sub> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6CO<sub>2</sub>",
                    "B. C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6H<sub>2</sub>O + 6CO<sub>2</sub>",
                    "C. 6CO<sub>2</sub> + 6H<sub>2</sub>O → 6O<sub>2</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
                    "D. O<sub>2</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → CO<sub>2</sub> + H<sub>2</sub>O"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_09. Trong tế bào, các đường đơn được tổng hợp từ:",
                "options": [
                    "A. Protein và lipid",
                    "B. Glucose và fructose",
                    "C. CO<sub>2</sub> và H<sub>2</sub>O",
                    "D. ATP và NADPH"
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L1_010. Sản phẩm của quá trình tổng hợp cung cấp nguyên liệu cho:",
                "options": [
                    "A. Quá trình hô hấp",
                    "B. Quá trình phân giải",
                    "C. Quá trình quang hợp",
                    "D. Quá trình tiêu hóa"
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [

            {
                "question": "MB_CHVCVNL_L2_01. Vì sao trong quá trình lên men, năng lượng thu được ít hơn so với hô hấp hiếu khí?",
                "options": [
                    "A. Vì không có sự tham gia của oxygen.",
                    "B. Vì pyruvate không được phân giải hoàn toàn.",
                    "C. Vì không có chuỗi truyền electron.",
                    "D. Vì không có oxygen, không có chuỗi truyền eletron và pyruvate không được phân giải hoàn toàn."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_02. Trong quá trình hô hấp tế bào, vai trò của NAD<sup>+</sup> là",
                "options": [
                    "A. Cung cấp năng lượng.",
                    "B. Vận chuyển electron.",
                    "C. Tạo ra ATP.",
                    "D. Phân giải glucose."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_03. Phương pháp sấy khô giúp bảo quản thực phẩm vì",
                "options": [
                    "A. Làm chết vi sinh vật.",
                    "B. Giảm hoạt tính enzyme.",
                    "C. Giảm hàm lượng nước trong thực phẩm.",
                    "D. Tăng nồng độ acid."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_04. Mối liên hệ giữa đường phân và chu trình Krebs là",
                "options": [
                    "A. Cùng tạo ra ATP.",
                    "B. Sản phẩm của đường phân là cơ chất của chu trình Krebs.",
                    "C. Đều cần O<sub>2</sub>.",
                    "D. Đều tạo ra CO<sub>2</sub>."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_05. Quá trình lên men khác với hô hấp hiếu khí ở điểm nào?",
                "options": [
                    "A. Không có giai đoạn đường phân.",
                    "B. Không sử dụng NAD<sup>+</sup>.",
                    "C. Không có chuỗi truyền electron.",
                    "D. Không tạo ra ATP."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_06. Vì sao quá trình quang khử ở vi khuẩn khác với quang hợp thực vật?",
                "options": [
                    "A. Vì vi khuẩn không sử dụng H<sub>2</sub>O làm nguồn cung cấp H<sup>+</sup>.",
                    "B. Vì vi khuẩn không có lục lạp.",
                    "C. Vì vi khuẩn không thực hiện chu trình Calvin.",
                    "D. Vì vi khuẩn không tạo ra ATP."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_07. Trong quá trình tổng hợp các chất, vai trò của ATP là gì?",
                "options": [
                    "A. Tạo ra glucose.",
                    "B. Phân giải nước.",
                    "C. Cung cấp năng lượng cho phản ứng tổng hợp.",
                    "D. Tạo ra oxygen."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_08. Tại sao ăn quá nhiều đường có thể gây ra bệnh béo phì?",
                "options": [
                    "A. Vì đường chuyển hóa thành chất béo dự trữ.",
                    "B. Vì đường không được tiêu hóa.",
                    "C. Vì đường tích tụ trong máu.",
                    "D. Vì đường làm tăng hormone insulin."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_09. Mối quan hệ giữa tổng hợp và phân giải trong tế bào là",
                "options": [
                    "A. Hai quá trình độc lập.",
                    "B. Hai quá trình đối nghịch.",
                    "C. Hai quá trình bổ trợ cho nhau.",
                    "D. Hai quá trình xảy ra đồng thời."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L2_010. Cholesterol cao trong máu có thể do",
                "options": [
                    "A. Ăn nhiều rau xanh.",
                    "B. Ăn nhiều đường và ít vận động.",
                    "C. Uống nhiều nước.",
                    "D. Tập thể dục thường xuyên."
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                "question": "MB_CHVCVNL_L3_001. Một tế bào tạo ra được 38 ATP từ một phân tử glucose. Điều này chứng tỏ:",
                "options": [
                    "A. Tế bào đang thực hiện lên men.",
                    "B. Tế bào đang hô hấp hiếu khí.",
                    "C. Chuỗi truyền electron hoạt động không hiệu quả.",
                    "D. Đường phân diễn ra không hoàn toàn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_002. Trong điều kiện thiếu oxy, tế bào cơ sẽ:",
                "options": [
                    "A. Ngừng hoạt động.",
                    "B. Thực hiện lên men rượu.",
                    "C. Thực hiện lên men lactic.",
                    "D. Tăng cường hô hấp hiếu khí."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_003. Khi bảo quản thực phẩm bằng phương pháp đóng hộp kín, nguyên tắc quan trọng nhất là",
                "options": [
                    "A. Loại bỏ hoàn toàn không khí.",
                    "B. Diệt khuẩn ở nhiệt độ cao.",
                    "C. Duy trì độ ẩm thích hợp.",
                    "D. Giảm pH môi trường."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_004. Vì sao khi tập thể dục cường độ cao, cơ bắp thường bị đau?",
                "options": [
                    "A. Do tích tụ acid lactic.",
                    "B. Do thiếu ATP.",
                    "C. Do tế bào cơ bị phá hủy.",
                    "D. Do tích tụ CO<sub>2</sub>."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_005. Khi một người ăn nhiều đường fructose nhưng không chịu sự điều tiết của hormone insulin, điều gì có thể xảy ra?",
                "options": [
                    "A. Không có tác động gì đến cơ thể.",
                    "B. Tăng nguy cơ mắc bệnh tiểu đường.",
                    "C. Giảm cholesterol trong máu.",
                    "D. Giảm cân nhanh chóng."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_006. Trong điều kiện thiếu ánh sáng, cây xanh vẫn sống được vì",
                "options": [
                    "A. Chuyển sang quang hợp vi khuẩn.",
                    "B. Sử dụng chất dự trữ từ quá trình phân giải.",
                    "C. Tăng cường hấp thu CO<sub>2</sub>.",
                    "D. Tạo ra nhiều ATP hơn."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_007. Nếu enzyme trong chu trình Calvin bị ức chế, điều gì sẽ xảy ra?",
                "options": [
                    "A. Tăng sản xuất glucose.",
                    "B. Giảm tổng hợp ATP.",
                    "C. Giảm khả năng cố định CO<sub>2</sub>.",
                    "D. Tăng quang hợp."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_008. Tại sao việc vận động thể thao có thể giúp giảm lượng cholesterol trong máu?",
                "options": [
                    "A. Vì vận động làm tăng tốc độ phân giải chất béo.",
                    "B. Vì vận động ngăn cản hấp thu cholesterol.",
                    "C. Vì vận động làm giảm hormone insulin.",
                    "D. Vì vận động làm tăng đường trong máu."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB_CHVCVNL_L3_009. Khi tế bào thiếu ATP, quá trình nào sẽ được ưu tiên xảy ra trước?",
                "options": [
                    "A. Tổng hợp protein.",
                    "B. Phân giải các chất dự trữ.",
                    "C. Tổng hợp lipid.",
                    "D. Tổng hợp nucleic acid."
                ],
                "answer": 1,
                "image": null
            },
            // Thêm các câu hỏi Tổng hợp và phân giải các chất trong tế bào level 3 khác...
        ]
    },
    // Chu kì tế bào và nguyên phân
    mcCKTBVNP: {
        level1: [
            {
                question: "MB_CKTBVNP_L1_001. Chu kì tế bào là khoảng thời gian từ khi tế bào",

                options: ["A. được sinh ra cho đến khi tế bào lão hóa và chết đi.",
                    "B. được sinh ra cho đến khi tế bào có khả năng phân chia để tạo tế bào con.",
                    "C. bắt đầu phân chia cho đến khi hình thành nên hai tế bào con.",
                    "D. được sinh ra, lớn lên và phân chia thành hai tế bào con."],
                answer: 3,
            },
            {
                question: "MB_CKTBVNP_L1_002. Chu kì tế bào bao gồm các pha theo trình tự là",

                options: ["A. G1, G2, S, nguyên phân.",
                    "B. G1, S, G2, nguyên phân.",
                    "C. S, G1, G2, nguyên phân.",
                    "D. G2, G1, S, nguyên phân."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_003. Hoạt động chủ yếu diễn ra ở pha S của kì trung gian là",

                options: ["A. tăng kích thước tế bào.",
                    "B. nhân đôi DNA và NST.",
                    "C. tổng hợp các bào quan.",
                    "D. tổng hợp và tích lũy các chất."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_004. Loại tế bào nào sau đây <b>không</b> thực hiện quá trình nguyên phân?",

                options: ["A. Tế bào ung thư.",
                    "B. Tế bào sinh dục chín.",
                    "C. Tế bào sinh dưỡng.",
                    "D. Tế bào sinh dục sơ khai."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_005. Đối với sinh vật đa bào sinh sản hữu tính, chu kì tế bào <b>không</b> có vai trò nào sau đây?",
                options: ["A. Truyền đạt thông tin di truyền qua các thế hệ tế bào.",
                    "B. Truyền đạt thông tin di truyền qua các thế hệ cơ thể.",
                    "C. Tạo ra các tế bào mới giúp cơ thể sinh trưởng, phát triển.",
                    "D. Tạo ra các tế bào mới thay thế cho các tế bào già hay bị tổn thương."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_006. Ở tế bào nhân thực, chu kì tế bào bao gồm 2 giai đoạn là",

                options: ["A. nguyên phân và giảm phân.",
                    "B. phân chia nhân và phân chia tế bào chất.",
                    "C. kì trung gian và phân chia tế bào (pha M).",
                    "D. giảm phân và hình thành giao tử."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L1_007. Trong chu kì tế bào, pha nào sau đây <b>không</b> thuộc kì trung gian?",

                options: ["A. Pha M.",
                    "B. Pha G1.",
                    "C. Pha S.",
                    "D. Pha G2."],
                answer: 0,
            },
            {
                question: "MB_CKTBVNP_L1_008. Sự nhân đôi DNA và NST diễn ra ở",

                options: ["A. Pha M.",
                    "B. Pha G1.",
                    "C. Pha S.",
                    "D. Pha G2."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L1_009. Pha M gồm 2 quá trình là",

                options: ["A. phân chia nhân và phân chia tế bào chất.",
                    "B. nhân đôi DNA và nhân đôi NST.",
                    "C. sinh trưởng tế bào và sinh sản tế bào.",
                    "D. phân chia nhân và phân chia bào quan."],
                answer: 0,
            },
            {
                question: "MB_CKTBVNP_L1_010. Trình tự các kì diễn ra trong pha phân chia tế bào (pha M) của chu kì tế bào là",

                options: ["A. kì sau → kì đầu → kì giữa → kì cuối.",
                    "B. kì giữa → kì đầu → kì sau → kì cuối.",
                    "C. kì đầu → kì giữa → kì sau → kì cuối.",
                    "D. kì đầu → kì sau → kì giữa → kì cuối."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L1_011. Hiện tượng các NST dãn xoắn trong nguyên phân có ý nghĩa nào sau đây?",

                options: ["A. Tạo thuận lợi cho sự phân li và tổ hợp NST.",
                    "B. Tạo thuận lợi cho sự nhân đôi DNA và NST.",
                    "C. Tạo thuận lợi cho sự tiếp hợp của NST.",
                    "D. Tạo thuận lợi cho sự trao đổi chéo của NST."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_012. Câu nào dưới đây nói về bệnh ung thư là đúng?",

                options: ["A. Bệnh ung thư là bệnh di truyền nên luôn được di truyền từ bố mẹ sang con.",
                    "B. Những tác nhân đột biến lí, hóa học có thể gây nên bệnh ung thư.",
                    "C. Bệnh ung thư là bệnh di truyền nên không thể chữa được.",
                    "D. Virus không thể gây bệnh ung thư."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L1_013. Ung thư là",

                options: ["A. một nhóm bệnh liên quan đến sự giảm sinh sản bất thường của tế bào nhưng không có khả năng di căn và xâm lấn sang các bộ phận khác của cơ thể.",
                    "B. một nhóm bệnh liên quan đến sự tăng sinh bất thường của tế bào nhưng không có khả năng di căn và xâm lấn sang các bộ phận khác của cơ thể.",
                    "C. một nhóm bệnh liên quan đến sự giảm sinh sản bất thường của tế bào với khả năng di căn và xâm lấn sang các bộ phận khác của cơ thể.",
                    "D. một nhóm bệnh liên quan đến sự tăng sinh bất thường của tế bào với khả năng di căn và xâm lấn sang các bộ phận khác của cơ thể."],
                answer: 3,
            },
            {
                question: "MB_CKTBVNP_L1_014. Sự tăng cường phân chia mất kiểm soát của một nhóm tế bào trong cơ thể dẫn tới.",

                options: ["A. bệnh đãng trí.",
                    "B. bệnh béo phì.",
                    "C. bệnh ung thư.",
                    "D. bệnh bạch tạng."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L1_015. Các bệnh ung thư phổ biến ở Việt Nam gồm",

                options: ["A. ung thư gan, ung thư phổi, ung thư vú, ung thư dạ dày, ung thư đại trực tràng.",
                    "B. ung thư tuyến nước bọt, ung thư phổi, ung thư vú, ung thư đại trực tràng.",
                    "C. ung thư tuyến nước bọt, ung thư phổi, ung thư vú, ung thư hậu môn.",
                    "D. ung thư dạ dày, ung thư đại trực tràng, ung thư tuyến nước bọt, ung thư phổi."],
                answer: 0,
            },
            {
                question: "MB_CKTBVNP_L1_016. Nguyên nhân nào sau đây <b>không</b> được sử dụng để giải thích cho hiện tượng tỉ lệ người mắc bệnh ung thư ngày càng gia tăng?",

                options: ["A. Tuổi thọ của con người ngày càng được gia tăng.",
                    "B. Ô nhiễm môi trường sống ngày càng nặng nề.",
                    "C. Công nghệ thông tin ngày càng phát triển mạnh.",
                    "D. Thói quen sinh hoạt không lành mạnh ngày càng phổ biến."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L1_017. Phương pháp nào sau đây <b>không</b> được sử dụng để chữa trị ung thư?",

                options: ["A. Phẫu thuật cắt bỏ khối u.",
                    "B. Chiếu xạ hoặc dùng hóa chất để tiêu diệt các tế bào khối u.",
                    "C. Sử dụng liệu pháp miễn dịch tăng cường khả năng đề kháng.",
                    "D. Sử dụng thuốc kháng sinh để tiêu diệt các tế bào khối u."],
                answer: 3,
            },
            // Thêm các câu hỏi CKTBVNP level 1 khác...
        ],
        level2: [
            {
                question: "MB_CKTBVNP_L2_001. Khối u lành tính khác với khối ác tính ở điểm là",

                options: ["A. có khả năng tăng sinh không giới hạn.",
                    "B. chỉ định vị ở một vị trí nhất định trong cơ thể.",
                    "C. có khả năng tách khỏi vị trí ban đầu và di chuyển đến vị trí mới.",
                    "D. có cơ chế kiểm soát chu kì tế bào không hoạt động hoặc hoạt động bất thường."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L2_002. Tại sao pha G1 được vừa được coi là pha sinh trưởng vừa được coi là pha kiểm soát của chu kì tế bào?",

                options: ["A. Pha G1 vừa diễn ra sự phân giải các chất trong tế bào vừa có điểm kiểm soát G1/S.",
                    "B. Pha G1 vừa diễn ra sự phân giải các chất trong tế bào vừa có điểm kiểm soát G1/M.",
                    "C. Pha G1 vừa diễn ra sự tổng hợp các chất trong tế bào vừa có điểm kiểm soát G1/S.",
                    "D. Pha G1 vừa diễn ra sự tổng hợp các chất trong tế bào vừa có điểm kiểm soát G1/M."],
                answer: 3,
            },
            {
                question: "MB_CKTBVNP_L2_003. Vai trò của các điểm kiểm soát trong chu kì tế bào là",

                options: ["A. rút ngắn thời gian của quá trình phân bào.",
                    "B. kéo dài thời gian của quá trình phân bào.",
                    "C. đảm bảo tính chính xác của quá trình phân bào.",
                    "D. đảm bảo tính đột biến của quá trình phân bào."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L2_004. Hoạt động nào sau đây <b>không</b> thể diễn ra nếu điểm kiểm soát G1 phát hiện các sai hỏng?",

                options: ["A. Chu kì tế bào bị dừng lại.",
                    "B. Tế bào tiến vào pha S.",
                    "C. Tế bào tiến vào pha G0.",
                    "D. Tế bào tiến thẳng vào pha M."],
                answer: 3,
            },
            {
                question: "MB_CKTBVNP_L2_005. Tại sao có thể quan sát hình dạng đặc trưng của NST rõ nhất ở kì giữa của quá trình nguyên phân?",

                options: ["A. Vì lúc này NST dãn xoắn tối đa.",
                    "B. Vì lúc này NST đóng xoắn tối đa.",
                    "C. Vì lúc này NST đã nhân đôi xong.",
                    "D. Vì lúc này NST đã phân li xong."],
                answer: 1,
            },
            {
                question: "MB_CKTBVNP_L2_006. Sự khác nhau trong quá trình phân chia tế bào chất ở tế bào động vật và thực vật là do",

                options: ["A. tế bào động vật có kích thước nhỏ.",
                    "B. tế bào động vật có nhiều lysosome.",
                    "C. tế bào thực vật có thành cellulose.",
                    "D. tế bào thực vật có không bào lớn."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L2_007. Vai trò của quá trình phân chia nhân trong pha M là",

                options: ["A. phân chia NST của tế bào mẹ thành 2 phần giống nhau cho 2 tế bào con.",
                    "B. phân chia NST của tế bào mẹ thành 2 phần khác nhau cho 2 tế bào con.",
                    "C. phân chia tế bào chất của tế bào mẹ thành 2 phần giống nhau cho 2 tế bào con.",
                    "D. phân chia tế bào chất của tế bào mẹ thành 2 phần khác nhau cho 2 tế bào con."],
                answer: 0,
            },
            {
                question: "MB_CKTBVNP_L2_008. Nguyên phân tạo ra các tế bào con có vật chất di truyền giống hệt nhau chủ yếu là nhờ",

                options: ["A. sự co xoắn cực đại của NST và sự biến mất của nhân con.",
                    "B. sự dãn xoắn cực đại của NST và sự biến mất của màng nhân.",
                    "C. sự nhân đôi chính xác DNA và sự phân li đồng đều của các NST.",
                    "D. sự nhân đôi chính xác DNA và sự biến mất của màng nhân."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L2_009. Các tế bào mới được tạo ra sau chu kì tế bào có đặc điểm như thế nào?",

                options: ["A. Các tế bào mới được tạo ra sau chu kì tế bào có vật chất di truyền trong nhân giống nhau.",
                    "B. Các tế bào mới được tạo ra sau chu kì tế bào có vật chất di truyền trong nhân khác nhau.",
                    "C. Các tế bào mới được tạo ra sau chu kì tế bào có cấu trúc tế bào phức tạp hơn.",
                    "D. Các tế bào mới được tạo ra sau chu kì tế bào có cấu trúc tế bào đơn giản hơn."],
                answer: 0,
            },

            {
                question: "MB_CKTBVNP_L2_010. Biện pháp nào sau đây <b>không</b> được sử dụng để phòng tránh bệnh ung thư?",

                options: ["A. Tránh tiếp xúc với tác nhân gây ung thư.",
                    "B. Sử dụng thực phẩm có nguồn gốc xuất xứ an toàn.",
                    "C. Tập luyện thể dục thể thao thường xuyên.",
                    "D. Chỉ đi khám sức khỏe khi có dấu hiệu của bệnh."],
                answer: 3,
            },


            // Thêm các câu hỏi CKTBVNP level 2 khác...
        ],
        level3: [
            {
                question: "MB_CKTBVNP_L3_001. Khi một tế bào nhận biết thấy sự nhân đôi DNA có nhiều sai sót thì tế bào sẽ dừng lại ở giai đoạn nào trong chu kì tế bào?",
                options: ["A.Kì trung gian.",
                    "B. Pha M.",
                    "C. Pha G1.",
                    "D. Pha G2."],
                answer: 3,
            },
            {
                question: "MB_CKTBVNP_L3_002. Khi một tế bào bình thường đang ở cuối pha G1, đã tổng hợp đầy đủ nguyên liệu để sẵn sàng nhân đôi DNA nhưng <b>không</b> nhận được tín hiệu thì tế bào đó sẽ?",
                options: ["A. Vẫn được chuyển qua pha S.",
                    "B. Được chuyển sang pha G2.",
                    "C. Bước vào trạng thái nghỉ ngơi G0.",
                    "D. Tiếp tục tổng tăng trưởng và tổng hợp nguyên liệu."],
                answer: 2,
            },
            {
                question: "MB_CKTBVNP_L3_003. Nếu tế bào đang phân chia được xử lí bởi hóa chất colchicine có chức năng ức chế sự hình thành vi ống trong hệ thống thoi phân bào thì hậu quả sẽ như thế nào?",
                options: ["A. Hình thành các tế bào lệch bội.",
                    "B. Hình thành các tế bào đa bội.",
                    "C. Các tế bào tạo ra hoàn toàn bình thường.",
                    "D. Hình thành nên các tế bào lệch bội và đa bội."],
                answer: 1,

            },
            {
                question: "MB_CKTBVNP_L3_004. Một học sinh quan sát tế bào đầu rễ củ hành tây dưới kính hiển vi và đếm số lượng tế bào trong mỗi pha của chu kì tế bào. Học sinh đã thu thập dữ liệu trong khi quan sát ba vị trí khác nhau của đầu rễ hành tây và ghi lại trong bảng dưới đây. Dựa vào số liệu của bảng có thể nhận thấy",
                options: ["A. Phần lớn các nhiễm sắc thể đang co ngắn.",
                    "B. Phần lớn các nhiễm sắc thể không phân biệt rõ được.",
                    "C. Phần lớn các nhiễm sắc thể xếp thẳng hàng ở mặt phẳng xích đạo.",
                    "D. Các sợi tơ vô sắc đang kéo các nhiễm sắc thể rời ra."],
                answer: 1,
                "image": "https://nhantri.top/media/Grade10/quansatnst.png",
            },
            {
                question: "MB_CKTBVNP_L3_005. Một tế bào sinh dưỡng của người có khối lượng DNA là 6,6.10<sup>-12</sup> gam và có 46 nhiễm sắc thể. Khối lượng và số lượng nhiễm sắc thể kép của tế bào ở giai đoạn pha G2 là?",
                options: ["A. 6,6.10<sup>-12</sup> và 46 nhiễm sắc thể.",
                    "B. 6,6.10<sup>-12</sup>  và 23 nhiễm sắc thể.",
                    "C. 13,2.10<sup>-12</sup> và 46 nhiễm sắc thể.",
                    "D. 13,2.10<sup>-12</sup> và 23 nhiễm sắc thể."],
                answer: 2,

            },
            {
                question: "MB_CKTBVNP_L3_006. Tại sao người ta lại nói ung thư là loại bệnh di truyền đặc biệt?",
                options: ["A. Được tích lũy do 1 hay 1 vài đột biến gây nên.",
                    "B. Được tích lũy do 1 đột biến gây nên.",
                    "C. Được tích lũy từ nhiều đột biến gây nên.",
                    "D. Không được tích lũy từ các đột biến gene."],
                answer: 2,

            },
            {
                question: "MB_CKTBVNP_L3_007. Tại sao ung thư là bệnh di truyền do các tế bào tích lũy nhiều đột biến nhưng hầu hết <b>không</b> được di truyền lại cho thế hệ sau?",
                options: ["A. Hầu hết các đột biến xảy ra và tích lũy trong tế bào soma.",
                    "B. Hầu hết các đột biến là đột biến với tần số cao.",
                    "C. Hầu hết các đột biến xảy ra và tích lũy trong tế bào sinh dục.",
                    "D. Hầu hết các đột biến là đột biến với tần số thấp."],
                answer: 0,

            },
            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    // Giảm phân
    mcQTGP: {
        level1: [
            {
                question: "MB_GP_L1_001. Quá trình giảm phân xảy ra ở loại tế bào nào sau đây?",

                options: ["A. Tế bào sinh dưỡng.", "B. Tế bào sinh dục sơ khai.", "C. Tế bào sinh dục chín.", "D. Tế bào giao tử."],
                answer: 2
            },
            {
                question: "MB_GP_L1_002. Số lượng NST ở tế bào con được sinh ra qua giảm phân là:",

                options: ["A. giống hệt tế bào mẹ (2n).", "B. giảm đi một nửa (n).", "C. gấp đôi tế bào mẹ (4n).", "D. gấp ba tế bào mẹ (6n)."],
                answer: 1
            },
            {
                question: "MB_GP_L1_003. Sự trao đổi chéo của các chromatid của các NST tương đồng xảy ra vào kì nào trong giảm phân?",

                options: ["A. Kì đầu II.",
                    "B. Kì giữa I.",
                    "C. Kì sau I.",
                    "D. Kì đầu I."],
                answer: 3
            },
            {
                question: "MB_GP_L1_004. Sự kiện nào sau đây <b>không</b> xảy ra tại kì đầu của lần giảm phân I?",

                options: ["A. NST kép trong cặp tương đồng có thể trao đổi chéo.",
                    "B. NST đơn tự nhân đôi thành NST kép.",
                    "C. Màng nhân và nhân con dần tiêu biến.",
                    "D. NST kép trong cặp tương đồng tiếp hợp."],
                answer: 1
            },
            {
                question: "MB_GP_L1_005. Trong giảm phân, các NST xếp trên mặt phẳng xích đạo của thoi phân bào ở",

                options: ["A. kì giữa I và kì sau I.",
                    "B. kì giữa II và kì sau II.",
                    "C. kì giữa I và kì giữa II.",
                    "D. kì đầu I và kì giữa II."],
                answer: 2
            },
            {
                question: "MB_GP_L1_006. Phát biểu nào dưới đây là đúng?",

                options: ["A. Kì giữa là kì dài nhất trong các kì của nguyên phân.",
                    "B. Ở kì giữa của giảm phân I, mỗi nhiễm sắc thể kép chỉ đính với vi ống ở một phía của tâm động.",
                    "C. Các nhiễm sắc thể tương đồng có thể trao đổi đoạn cho nhau (trao đổi chéo) tại kì giữa của giảm phân I.",
                    "D. Trong giảm phân, sau mỗi lần phân bào, nhiễm sắc thể đều phải nhân đôi."],
                answer: 1
            },
            {
                question: "MB_GP_L1_007. Phát biểu nào dưới đây về quá trình giảm phân là đúng?",

                options: ["A. Tất cả các sinh vật nhân thực đều có thể phân chia giảm phân.",
                    "B. Sự trao đổi chéo xảy ra trong kì đầu của giảm phân II.",
                    "C. Mỗi nhiễm sắc thể kép phân li về các cực của tế bào trong kì sau của giảm phân II.",
                    "D. Các cặp nhiễm sắc thể tương đồng tập trung thành hàng ở mặt phẳng xích đạo trong kì giữa của giảm phân I."],
                answer: 3
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                question: "MB_GP_L2_001. Giảm phân có thể tạo ra nhiều loại giao tử có kiểu gene khác nhau là do",

                options: ["A. sự trao đổi đoạn giữa các NST ở kì đầu I kết hợp với sự phân li và tổ hợp ngẫu nhiên của các NST ở kì sau II.",
                    "B. sự trao đổi đoạn giữa các NST ở kì đầu II kết hợp với sự phân li và tổ hợp ngẫu nhiên của các NST ở kì sau I.",
                    "C. sự trao đổi đoạn giữa các NST ở kì đầu I kết hợp với sự phân li và tổ hợp ngẫu nhiên của các NST ở kì sau I.",
                    "D. sự trao đổi đoạn giữa các NST ở kì đầu II kết hợp với sự phân li và tổ hợp ngẫu nhiên của các NST ở kì sau II."],
                answer: 2,
            },
            {
                question: "MB_GP_L2_002. Một tế bào của lợn có 2n = 38 trải qua quá trình giảm phân hình thành giao tử. Số NST và số chromatid ở kì sau I lần lượt là",

                options: ["A. 38 và 76.",
                    "B. 38 và 0.",
                    "C. 38 và 38.",
                    "D. 76 và 76."],
                answer: 0,
            },
            {
                question: "MB_GP_L2_003. Năm tế bào ruồi giấm (2n = 8) đang ở kì giữa giảm phân I. Số chromatid đếm được trong trường hợp này là",

                options: ["A. 40.",
                    "B. 80.",
                    "C. 120.",
                    "D. 160."],
                answer: 1,
            },
            {
                question: "MB_GP_L2_004. Cho các phát biểu sau về quá trình giảm phân: (1) Giảm phân có 2 lần nhân đôi NST; (2) Giảm phân có 2 lần phân chia NST; (3) Giảm phân I là giai đoạn thực chất làm giảm đi một nửa số lượng NST ở các tế bào con; (4) Giảm phân tạo ra các tế bào con có số lượng NST giảm đi một nửa so với tế bào mẹ. Số phát biểu đúng là",

                options: ["A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."],
                answer: 2,
            },
            {
                question: "MB_GP_L2_005. Cho các phát biểu sau về quá trình giảm phân: (1) Ở kì giữa I và kì giữa II, NST đều xếp thành 1 hàng trên mặt phẳng xích đạo của thoi phân bào; (2) Ở kì đầu II có sự tiếp hợp và trao đổi chéo giữa các NST trong cặp tương đồng; (3) NST kép tách nhau ra ở tâm động và di chuyển về 2 cực của tế bào diễn ra ở kì sau I; (4) Sau khi kết thúc giảm phân I, NST nhân đôi trong kì trung gian trước khi bước vào giảm phân II. Số phát biểu đúng là",

                options: ["A. 0.",
                    "B. 1.",
                    "C. 2.",
                    "D. 3."],
                answer: 0,
            },
            {
                question: "MB_GP_L2_006. Cây hoa giấy trồng trong điều kiện khô cằn ra hoa nhiều hơn cây cùng loại được tưới đủ nước.Trong ví dụ này, yếu tố ảnh hưởng đến giảm phân là",

                options: ["A. độ ẩm.",
                    "B. nhiệt độ.",
                    "C. ánh sáng.",
                    "D. tuổi cây."],
                answer: 0,
            },
            {
                question: "MB_GP_L2_007. Điểm khác biệt của giảm phân so với nguyên phân là",

                options: ["A. có thể xảy ra ở tất cả các loại tế bào.",
                    "B. có 1 lần nhân đôi NST.",
                    "C. có 2 lần phân chia NST.",
                    "D. có sự co xoắn cực đại của NST."],
                answer: 2,
            },
            {
                question: "MB_GP_L2_008. Đặc điểm nào sau đây có ở quá trình giảm phân mà <b>không</b> có ở quá trình nguyên phân?",

                options: ["A. Có sự tiếp hợp giữa các NST kép trong cặp tương đồng.",
                    "B. Có sự co xoắn và dãn xoắn của các NST.",
                    "C. Có sự phân li của các NST về hai cực của tế bào.",
                    "D. Có sự sắp xếp của các NST trên mặt phẳng xích đạo của thoi phân bào."],
                answer: 0,
            },
            {
                question: "MB_GP_L2_009. Kì giữa của giảm phân I và kì giữa của giảm phân II khác nhau ở sự",

                options: ["A. sắp xếp các NST trên mặt phẳng xích đạo.",
                    "B. tiếp hợp và trao đổi chéo.",
                    "C. phân li của các NST.",
                    "D. co xoắn của các NST."],
                answer: 0,
            },
            {
                question: "MB_GP_L2_010. Trong giảm phân, ở kì sau I và kì sau II có điểm giống nhau là",

                options: ["A. các NST đều ở trạng thái đơn.",
                    "B. các NST đều ở trạng thái kép.",
                    "C. có sự dãn xoắn của các NST.",
                    "D. có sự phân li các NST về 2 cực tế bào."],
                answer: 0,
            },

            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                question: "MB_GP_L3_001. Một loài (2n) giảm phân <b>không</b> có trao đổi chéo tối đa sẽ cho bao nhiêu loại giao tử?",
                options: ["A. 22n.",
                    "B. 2<sup>n</sup>.",
                    "C. 3<sup>n</sup>.",
                    "D. 2 × n."],
                answer: 1,
            },
            {
                question: "MB_GP_L3_002. Giảm phân không có ý nghĩa nào sau đây?",
                options: ["A. Tạo sự đa dạng về di truyền ở những loài sinh sản hữu tính.",
                    "B. Góp phần giải thích được cơ sở khoa học của biến dị tổ hợp.",
                    "C. Góp phần duy trì ổn định bộ NST qua các thế hệ cơ thể.",
                    "D. Giúp tăng nhanh số lượng tế bào để cơ thể sinh trưởng, phát triển."],
                answer: 3,
            },
            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    // Công nghệ tế bào
    mcCNTB: {
        level1: [
            {
                question: "MB_CNTB_L1_001. Công nghệ tế bào là quy trình",

                options: ["A. kĩ thuật ứng dụng phương pháp nuôi cấy tế bào hoặc nuôi cấy mô trên môi trường dinh dưỡng nhân tạo để tạo ra cơ quan hoặc cơ thể hoàn chỉnh.",
                    "B. chuyển gen từ tế bào của loài này sang tế bào của loài khác nhằm tạo ra giống mới có năng suất cao, chất lượng tốt.",
                    "C. tạo ra giống mới đáp ứng yêu cầu của sản xuất bằng cách gây đột biến các giống sẵn có.",
                    "D. tạo ra thế hệ con có năng suất, phẩm chất, sức chống chịu vượt trội hơn hẳn thế hệ bố mẹ."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_002. Công nghệ tế bào động vật là quy trình công nghệ nuôi cấy các loại tế bào động vật và tế bào người trong môi trường",

                options: ["A. nhân tạo để tạo ra một lượng lớn tế bào nhằm mục đích nghiên cứu và ứng dụng trong thực tế.",
                    "B. tự nhiên để tạo ra một lượng lớn tế bào nhằm mục đích nghiên cứu và ứng dụng trong thực tế.",
                    "C. nhân tạo để tạo ra một lượng lớn tế bào nhằm mục đích sản xuất hàng loạt các chế phẩm sinh học.",
                    "D. tự nhiên để tạo ra một lượng lớn tế bào nhằm mục đích sản xuất hàng loạt các chế phẩm sinh học."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_003. Phát biểu nào dưới đây là đúng?",

                options: ["A. Tế bào gốc là tế bào có thể phân chia tạo ra tế bào giống hệ nó và tế bào chuyên hóa.",
                    "B. Tế bào gốc phôi là loại tế bào gốc đa tiềm năng.",
                    "C. Tế bào gốc chỉ có thể phân lập được từ các phôi sớm.",
                    "D. Tế bào gốc có thể truyền từ người này sang người khác mà không bị hệ miễn dịch đào thải."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_004. Công nghệ nuôi cấy tế bào vi khuẩn được chuyển gene sản sinh protein của người được thực hiện nhằm mục đích chính là",

                options: ["A. tạo ra một lượng lớn protein của người.",
                    "B. tạo ra một loại vi khuẩn có đặc điểm mới lạ chưa từng có trong tự nhiên.",
                    "C. để nghiên cứu sự hoạt động của gene người trong tế bào vi khuẩn.",
                    "D. để biến vi khuẩn có hại thành vi khuẩn vô hại."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_005. Phương án nào dưới đây nói về nhân bản vô tính vật nuôi là đúng?",

                options: ["A. Nhân bản vật nuôi là hình thức sinh sản nhân tạo, không xảy ra trong tự nhiên.",
                    "B. Con vật được nhân bản giống hệt con vật cho nhân về mọi đặc điểm.",
                    "C. Nhân bản vô tính giúp tạo ra nhiều cá thể có cùng kiểu gene quý hiếm.",
                    "D. Con vật nhân bản thường có tuổi thọ cao hơn so với các con vật sinh sản hữu tính cùng loài."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_006. Phát biểu nào sau đây là đúng khi nói về cừu Dolly được tạo ra bằng phương pháp nhân bản vô tính?",

                options: ["A. Quá trình tạo ra cừu Dolly không thông qua sự giảm phân và thụ tinh.",
                    "B. Cừu Dolly chỉ mang vật chất di truyền của cừu cho nhân.",
                    "C. Cừu Dolly có tuổi thọ dài hơn những con cừu bình thường khác.",
                    "D. Cừu Dolly không trải qua giai đoạn phát triển trong tử cung của cừu cái."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_007. Công nghệ tế bào động vật gồm những kĩ thuật chính nào sau đây?",

                options: ["A. Nuôi cấy mô và cấy truyền phôi.",
                    "B. Nhân bản vô tính và cấy truyền phôi.",
                    "C. Dung hợp tế bào trần và cấy truyền phôi.",
                    "D. Nhân bản vô tính và dung hợp tế bào trần."],
                answer: 1
            },
            {
                question: "MB_CNTB_L1_008. Cừu Dolly được tạo ra bằng phương pháp nhân giống vô tính <b>không</b> có đặc điểm nào sau đây?",

                options: ["A. Có tuổi thọ ngắn hơn các cá thể cùng loài được sinh ra bằng phương pháp tự nhiên.",
                    "B. Được sinh ra từ tế bào soma, không cần có sự kết hợp của giao tử đực và giao tử cái.",
                    "C. Mang các đặc điểm di truyền giống hệt cá thể cừu mẹ đã mang thai và sinh ra nó.",
                    "D. Có giai đoạn phôi thai diễn ra trong tử cung của con cừu cái như các cá thể cùng loài."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_009. Nhân bản vô tính ở động vật <b>không</b> đem đến triển vọng nào sau đây?",

                options: ["A. Nhân nhanh nguồn gene động vật quý hiếm có nguy cơ tuyệt chủng.",
                    "B. Tạo nguồn cơ quan, nội tạng thay thế dùng trong chữa trị bệnh ở người.",
                    "C. Tạo ra các loài động vật biến đổi gene để sản xuất thuốc chữa bệnh.",
                    "D. Tạo ra những cá thể mới có bộ gene của cá thể gốc được chọn lựa."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_010. Cấy truyền phôi ở động vật là kĩ thuật chia cắt phôi động vật thành nhiều phôi rồi cấy các phôi này vào",

                options: ["A. cùng một loại môi trường nhân tạo để tạo ra nhiều cá thể có kiểu gene giống nhau.",
                    "B. tử cung của các con cái khác nhau để tạo ra nhiều cá thể có kiểu gene giống nhau.",
                    "C. các loại môi trường nhân tạo khác nhau để tạo ra nhiều cá thể có kiểu gene khác nhau.",
                    "D. tử cung của các con cái khác nhau để tạo ra nhiều cá thể có kiểu gene khác nhau."],
                answer: 1
            },
            {
                question: "MB_CNTB_L1_011. Ứng dụng nào sau đây <b>không</b> phải là ứng dụng của công nghệ tế bào gốc?",

                options: ["A. Tái tạo các mô để thay thế các mô, cơ quan bị tổn thương hoặc bị bệnh.",
                    "B. Mở ra phương pháp điều trị mới trong điều trị vô sinh và hiếm muộn.",
                    "C. Bảo tồn giống động vật quý hiếm, phục hồi các nhóm động vật đã bị tuyệt chủng.",
                    "D. Tạo ra những động vật có khả năng bất tử để sản xuất các chế phẩm sinh học."],
                answer: 3
            },
            {
                question: "MB_CNTB_L1_012. Các tế bào toàn năng có khả năng nào sau đây?",

                options: ["A. Biệt hóa và phản biệt hóa.",
                    "B. Nguyên phân liên tục.",
                    "C. Duy trì sự sống vĩnh viễn.",
                    "D. Giảm phân liên tục."],
                answer: 0
            },
            {
                question: "MB_CNTB_L1_013. Cơ sở khoa học của công nghệ tế bào thực vật là dùng môi trường dinh dưỡng có bổ sung các",

                options: ["A. hormone thực vật thích hợp tạo điều kiện để nuôi cấy các tế bào thực vật tái sinh thành mô thực vật.",
                    "B. khoáng chất thích hợp tạo điều kiện để nuôi cấy các tế bào thực vật tái sinh thành mô thực vật.",
                    "C. hormone thực vật thích hợp tạo điều kiện để nuôi cấy các tế bào thực vật tái sinh thành các cây.",
                    "D. khoáng chất thích hợp tạo điều kiện để nuôi cấy các tế bào thực vật tái sinh thành các cây."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_014. Kĩ thuật nào của công nghệ tế bào có thể tạo ra giống mới?",

                options: ["A. Nhân bản vô tính.",
                    "B. Nuôi cấy mô tế bào.",
                    "C. Lai tế bào sinh dưỡng.",
                    "D. Nuôi cấy hạt phấn chưa thụ tinh."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_015. Kĩ thuật nào của công nghệ tế bào thường được áp dụng nhằm nhân nhanh số lượng lớn cây ở những loài quý hiếm có thời gian sinh trưởng chậm?",

                options: ["A. Nhân bản vô tính.",
                    "B. Nuôi cấy mô tế bào.",
                    "C. Lai tế bào sinh dưỡng.",
                    "D. Nuôi cấy hạt phấn hoặc noãn chưa thụ tinh."],
                answer: 1
            },
            {
                question: "MB_CNTB_L1_016. Để tạo ra hàng loạt cây trồng từ một phần của cây mẹ mà vẫn giữ được các đặc tính di truyền thì cần sử dụng phương pháp nào sau đây?",

                options: ["A. Dung hợp tế bào trần.",
                    "B. Cấy truyền phôi.",
                    "C. Nuôi cấy mô tế bào.",
                    "D. Nuôi cấy hạt phấn."],
                answer: 2
            },
            {
                question: "MB_CNTB_L1_017. Cho các bước thực hiện sau đây: (1) Nuôi cấy tế bào trong môi trường dinh dưỡng thích hợp để tạo mô sẹo; (2) Chuyển các cây non ra trồng trong bầu đất hoặc vườn ươm; (3) Tách mô phân sinh từ đỉnh sinh trưởng hoặc từ các tế bào lá non; (4) Nuôi cấy mô sẹo trong môi trường dinh dưỡng thích hợp để tạo cây con. Trình tự thực hiện nuôi cấy mô tế bào ở thực vật là",

                options: ["A. (1) → (2) → (3) → (4).",
                    "B. (3) → (1) → (4) → (2).",
                    "C. (3) → (1) → (2) → (4).",
                    "D. (2) → (3) → (1) → (4)."],
                answer: 1
            },

            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                question: "MB_CNTB_L2_001. Bằng kĩ thuật chia cắt phôi động vật, từ một phôi bò ban đầu được chia cắt thành nhiều phôi rồi cấy các phôi này vào tử cung của các con bò mẹ khác nhau để phôi phát triển bình thường, sinh ra các bò con. Các bò con này",

                options: ["A. có kiểu gene giống nhau.",
                    "B. có kiểu hình giống hệt nhau cho dù được nuôi trong các môi trường khác nhau.",
                    "C. khi lớn lên có thể giao phối với nhau sinh ra đời con.",
                    "D. không thể sinh sản hữu tính."],
                answer: 0
            },
            {
                question: "MB_CNTB_L2_002. Điểm khác biệt của tế bào gốc phôi so với tế bào gốc trưởng thành là",

                options: ["A. có nguồn gốc từ các mô của cơ thể trưởng thành.",
                    "B. có nguồn gốc từ khối tế bào mầm phôi của phôi nang.",
                    "C. chỉ có thể biệt hóa thành một số loại tế bào nhất định của cơ thể.",
                    "D. chỉ có khả năng phân chia trong khoảng thời gian trước khi cơ thể trưởng thành."],
                answer: 1
            },
            {
                question: "MB_CNTB_L2_003. Việc sử dụng các tế bào gốc phôi để thay thế các mô bị tổn thương ở người thường gặp trở ngại sinh học nào dưới đây?",

                options: ["A. Tế bào phôi có thể không đến được đúng mô cần thay thế trong cơ thể người thường.",
                    "B. Hệ thống miễn dịch của người có phản ứng đào thải các tế bào ghép.",
                    "C. Khó có thể nhận đủ lượng tế bào phôi để thay thế mô bị tổn thương.",
                    "D. Có thể tế bào gốc phôi không biệt hóa đúng thành tế bào của mô phải thay."],
                answer: 1
            },
            {
                question: "MB_CNTB_L2_004. Liệu pháp tế bào gốc và liệu pháp gene đều có tiềm năng chung là",

                options: ["A. phát triển thịt nhân tạo làm thực phẩm cho con người.",
                    "B. sản xuất các chế phẩm sinh học làm thuốc chữa bệnh cho con người.",
                    "C. giúp làm tăng số lượng cá thể của những loài có nguy cơ tuyệt chủng.",
                    "D. điều trị các bệnh ở người vốn chưa có phương pháp chữa trị triệt để."],
                answer: 3
            },
            {
                question: "MB_CNTB_L2_005. Cho các đặc điểm sau: (1) Có kiểu gene đồng nhất; (2) Có kiểu hình hoàn toàn giống nhau; (3) Không thể giao phối với nhau; (4) Có kiểu gene thuần chủng. Các cá thể động vật được tạo ra bằng công nghệ cấy truyền phôi có các đặc điểm là",

                options: ["A. (1), (3).",
                    "B. (2), (3), (4).",
                    "C. C. (2), (4).",
                    "D. (1), (2), (3)."],
                answer: 0
            },
            {
                question: "MB_CNTB_L2_006. Nhân tố nào sau đây có vai trò quan trọng nhất trong điều khiển sự biệt hóa bằng thành phần môi trường?",

                options: ["A. Hàm lượng nitrogen.",
                    "B. Hormone sinh trưởng.",
                    "C. Enzyme chuyển hóa.",
                    "D. Hàm lượng carbohydrate."],
                answer: 1
            },
            {
                question: "MB_CNTB_L2_007. Ưu điểm của nuôi cấy mô tế bào thực vật so với các phương pháp nhân giống sinh dưỡng (giâm, chiết) là",

                options: ["A. giữ nguyên được phẩm chất của cây mẹ.",
                    "B. tạo được số lượng lớn cây giống từ một cây mẹ.",
                    "C. tạo được cây trồng kháng tất cả các loại bệnh.",
                    "D. rút ngắn được thời gian cho ra sản phẩm của cây."],
                answer: 1
            },
            {
                question: "MB_CNTB_L2_008. Kĩ thuật nào của công nghệ tế bào có thể tạo ra cây có kiểu gene đồng hợp tử về tất cả các gene?",

                options: ["A. Nhân bản vô tính.",
                    "B. Nuôi cấy mô tế bào.",
                    "C. Lai tế bào sinh dưỡng.",
                    "D. Nuôi cấy hạt phấn hoặc noãn chưa thụ tinh."],
                answer: 3
            },
            {
                question: "MB_CNTB_L2_009. So với phương pháp sinh sản hữu tính, phương pháp nuôi cấy mô tế bào thực vật có ưu điểm nào sau đây?",

                options: ["A. Tiến hành dễ dàng và tiết kiệm chi phí nhân giống.",
                    "B. Tiến hành trong môi trường tự nhiên, không tốn công sức.",
                    "C. Tạo ra số lượng lớn cây giống đồng nhất về mặt di truyền.",
                    "D. Tạo ra cây giống thích nghi với nhiều điều kiện môi trường."],
                answer: 2
            },
            {
                question: "MB_CNTB_L2_010. Cho các thành tựu sau đây: (1) Nhân nhanh nhiều giống cây trồng; (2) Tạo ra nhiều giống cây trồng biến đổi gene; (3) Tạo ra cây mang đặc điểm của cả 2 loài khác nhau khác nhau; (4) Bảo tồn nhiều loài thực vật quý hiếm, có nguy cơ tuyệt chủng. Trong các thành tựu trên, số thành tựu của công nghệ tế bào là",

                options: ["A. 2.",
                    "B. 3.",
                    "C. 4.",
                    "D. 1."],
                answer: 2
            },
            // Thêm các câu hỏi Công nghệ tế bào level 2 khác...
        ],
        level3: [
            {
                question: "...",
                options: ["A. F2 thu được tỉ lệ kiểu hình khác tỉ lệ kiểu gene.",
                    "B.Các cặp tính trạng di truyền phân li độc lập.",
                    "C.F2 thu được tỉ lệ kiểu hình giống tỉ lệ kiểu gene.",
                    "D.Kiểu gene của F1 là dị hợp tử đều."],
                answer: 2
            },

            // Thêm các câu hỏi Công nghệ tế bào level 3 khác...
        ]
    },
    // Đa dạng và phương pháp nghiên cứu vi sinh vật
    mcDDPPNCVSV: {
        level1: [
            {
                question: "MB_ĐD&PPNCVSV_L1_001. Sinh vật nào sau đây <b>không</b> thuộc nhóm vi sinh vật?",

                options: ["A. Nấm hương.",
                    "B. Vi khuẩn lactic.",
                    "C. Tảo silic.",
                    "D. Trùng roi."],
                answer: 0
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_002. Nhóm sinh vật nào sau đây <b>không</b> phải là vi sinh vật?",

                options: ["A. Vi khuẩn.",
                    "B. Vi nấm.",
                    "C. Động vật nguyên sinh.",
                    "D. Côn trùng."],
                answer: 3
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_003. Đặc điểm tiên quyết để xếp một loài sinh vật vào nhóm vi sinh vật là",

                options: ["A. kích thước nhỏ bé, thường chỉ quan sát được dưới kính hiển vi.",
                    "B. cấu tạo đơn giản, vật chất di truyền không được bao bọc bởi màng nhân.",
                    "C. tốc độ chuyển hóa vật chất và năng lượng, sinh trưởng và sinh sản nhanh.",
                    "D. khả năng thích nghi cao với mọi loại môi trường sống."],
                answer: 0
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_004. Đặc điểm nào sau đây <b>không</b> phải của vi sinh vật?",

                options: ["A. Kích thước cơ thể nhỏ bé, chỉ nhìn rõ dưới kính hiển vi.",
                    "B. Cơ thể đơn bào hoặc tập đoàn đơn bào nhân sơ.",
                    "C. Sinh trưởng, sinh sản rất nhanh.",
                    "D. Có nhiều kiểu chuyển hóa vật chất và năng lượng."],
                answer: 1
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_005. Số kiểu dinh dưỡng ở vi sinh vật là",

                options: ["A. 4 kiểu.",
                    "B. 3 kiểu.",
                    "C. 2 kiểu.",
                    "D. 5 kiểu."],
                answer: 0
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_006. Khi nói về các kiểu dinh dưỡng của các vi sinh vật, phát biểu nào sau đây <b>không</b> đúng?",

                options: ["A. Vi khuẩn lam dinh dưỡng theo kiểu quang tự dưỡng.",
                    "B. Vi khuẩn không lưu huỳnh màu lục và màu tía dinh dưỡng theo kiểu quang dị dưỡng.",
                    "C. Vi nấm dinh dưỡng theo kiểu hóa dị dưỡng.",
                    "D. Vi khuẩn nitrate hóa dinh dưỡng theo kiểu hóa dị dưỡng."],
                answer: 3
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_007. Một loại vi khuẩn chỉ cần amino acid loại methionine làm chất dinh dưỡng hữu cơ và sống trong hang động không có ánh sáng. Kiểu dinh dưỡng của loại vi khuẩn này là",

                options: ["A. quang tự dưỡng.",
                    "B. quang dị dưỡng.",
                    "C. hóa dị dưỡng.",
                    "D. hóa tự dưỡng."],
                answer: 2
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_008. Cho các kiểu dinh dưỡng sau: (1) Quang tự dưỡng; (2) Hóa tự dưỡng; (3) Quang dị dưỡng; (4) Hóa dị dưỡng. Trong các kiểu dinh dưỡng trên, số kiểu dinh dưỡng có ở vi sinh vật là",

                options: ["A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."],
                answer: 3
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_009. Phương pháp nhuộm Gram được sử dụng để phân biệt 2 loại vi sinh vật nào sau đây?",

                options: ["A. Vi sinh vật tự dưỡng và vi sinh vật dị dưỡng.",
                    "B. Vi khuẩn Gr<sup>_</sup> và vi khuẩn G<sup>+</sup>.",
                    "C. Vi khuẩn hóa dưỡng và vi khuẩn quang dưỡng.",
                    "D. Vi sinh vật nhân sơ và vi sinh vật nhân thực."],
                answer: 1
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_010. Khuẩn lạc là một tập hợp các tế bào được sinh ra từ",

                options: ["A. một tế bào ban đầu trên môi trường thạch và có thể quan sát được bằng mắt thường.",
                    "B. một tế bào ban đầu trên môi trường thạch và phải quan sát dưới kính hiển vi.",
                    "C. nhiều tế bào ban đầu trên môi trường thạch và có thể quan sát được bằng mắt thường.",
                    "D. nhiều tế bào ban đầu trên môi trường thạch và phải quan sát dưới kính hiển vi."],
                answer: 1
            },
            {
                question: "MB_ĐD&PPNCVSV_L1_011. Nhóm vi sinh vật nào sau đây có khả năng sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ từ các hợp chất vô cơ?",

                options: ["A. Vi sinh vật hóa tự dưỡng.",
                    "B. Vi sinh vật hóa dị dưỡng.",
                    "C. Vi sinh vật quang tự dưỡng.",
                    "D. Vi sinh vật quang dị dưỡng."],
                answer: 2
            },
        ],
        level2: [
            {
                question: "MB_ĐD&PPNCVSV_L2_001. Cho các nhóm sinh vật sau đây: (1) Vi khuẩn; (2) Động vật nguyên sinh; (3) Động vật không xương sống; (4) Vi nấm; (5) Vi tảo; (6) Rêu. Số nhóm sinh vật thuộc nhóm vi sinh vật là",

                options: ["A. 3.", "B. 4.", "C. 5.", "D. 6."],
                answer: 1
            },

            {
                question: "MB_ĐD&PPNCVSV_L2_002. Khi quan sát vi sinh vật thường phải làm tiêu bản rồi đem soi dưới kính hiển vi vì",

                options: ["A. vi sinh vật có kích thước nhỏ bé.",
                    "B. vi sinh vật có cấu tạo đơn giản.",
                    "C. vi sinh vật có khả năng sinh sản nhanh.",
                    "D. vi sinh vật có khả năng di chuyển nhanh."],
                answer: 0
            },


        ],
        level3: [
            {
                question: "MB_ĐD&PPNCVSV_L3_001. Phát biểu nào sau đây là đúng khi nói về sự khác nhau giữa quang tự dưỡng và hóa tự dưỡng?",

                options: ["A. Quang tự dưỡng sử dụng nguồn năng lượng là ánh sáng còn hóa tự dưỡng sử dụng nguồn năng lượng là các chất hữu cơ.",
                    "B. Quang tự dưỡng sử dụng nguồn năng lượng là ánh sáng còn hóa tự dưỡng sử dụng nguồn năng lượng là các chất vô cơ.",
                    "C. Quang tự dưỡng sử dụng nguồn carbon là CO<sub>2</sub> còn hóa tự dưỡng sử dụng nguồn carbon là các chất hữu cơ.",
                    "D. Quang tự dưỡng sử dụng nguồn carbon là chất hữu cơ còn hóa tự dưỡng sử dụng nguồn carbon là CO<sub>2</sub>."],
                answer: 1
            },


        ]
    },
    // Sinh trưởng và sinh sản vi sinh vật
    mcSTSSVSV: {
        level1: [

            {
                question: "MB_STVSSOVSV_L1_001. Sinh trưởng ở quần thể vi sinh vật là",

                options: ["A. sự tăng kích thước cơ thể.",
                    "B. sự tăng kích thước tế bào.",
                    "C. sự tăng số lượng tế bào.",
                    "D. sự tăng khối lượng tế bào."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L1_002. Sinh trưởng ở vi sinh vật là sự gia tăng",

                options: ["A. khối lượng cơ thể vi sinh vật.",
                    "B. kích thước cơ thể vi sinh vật.",
                    "C. về số lượng loài của quần thể vi sinh vật.",
                    "D. về số lượng cá thể của quần thể vi sinh vật."],
                answer: 3,
            },
            {
                question: "MB_STVSSOVSV_L1_003. Sự sinh trưởng của quần thể vi sinh vật được đánh giá thông qua",

                options: ["A. sự tăng lên về kích thước của từng tế bào trong quần thể.",
                    "B. sự tăng lên về số lượng tế bào của quần thể.",
                    "C. sự tăng lên về khối lượng của từng tế bào trong quần thể.",
                    "D. sự tăng lên về cả kích thước và khối lượng của từng tế bào trong quần thể."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L1_004. Môi trường nuôi cấy không liên tục là môi trường nuôi cấy",

                options: ["A. được bổ sung chất dinh dưỡng mới và được lấy đi các sản phẩm của quá trình nuôi cấy.",
                    "B. không được bổ sung chất dinh dưỡng mới nhưng được lấy đi các sản phẩm của quá trình nuôi cấy.",
                    "C. không được bổ sung chất dinh dưỡng mới cũng không được lấy đi các sản phẩm của quá trình nuôi cấy.",
                    "D. liên tục được bổ sung chất dinh dưỡng mới và liên tục được lấy đi các sản phẩm của quá trình nuôi cấy."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L1_005. Trình tự sắp xếp nào sau đây là đúng khi nói về các pha sinh trưởng của quần thể vi khuẩn trong nuôi cấy không liên tục?",

                options: ["A. Pha tiềm phát → Pha lũy thừa → Pha cân bằng → Pha suy vong.",
                    "B. Pha tiềm phát → Pha cân bằng → Pha lũy thừa → Pha suy vong.",
                    "C. Pha suy vong → Pha tiềm phát → Pha lũy thừa → Pha cân bằng.",
                    "D. Pha suy vong → Pha lũy thừa → Pha tiềm phát → Pha cân bằng."],
                answer: 0,
            },
            {
                question: "MB_STVSSOVSV_L1_006. Trong nuôi cấy không liên tục, pha có tốc độ phân chia của vi khuẩn đạt tối đa là",

                options: ["A. pha tiềm phát.",
                    "B. pha lũy thừa.",
                    "C. pha suy vong.",
                    "D. pha cân bằng."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L1_007. Pha nào sau đây chỉ có ở nuôi cấy vi khuẩn không liên tục?",

                options: ["A. Pha lũy thừa.",
                    "B. Pha tiềm phát.",
                    "C. Pha cân bằng.",
                    "D. Pha suy vong."],
                answer: 3,
            },
            {
                question: "MB_STVSSOVSV_L1_008. Trong nuôi cấy liên tục, không xảy ra pha suy vong vì thường xuyên được bổ sung chất",

                options: ["A. kích thích sinh trưởng và loại bỏ các sản phẩm trao đổi chất.",
                    "B. dinh dưỡng và loại bỏ các protein do vi sinh vật tổng hợp được.",
                    "C. kích thích sinh trưởng và loại bỏ các protein do vi sinh vật tổng hợp được.",
                    "D. dinh dưỡng và loại bỏ các sản phẩm trao đổi chất."],
                answer: 3,
            },
            {
                question: "MB_STVSSOVSV_L1_009. Vi khuẩn E. coli trong điều kiện nuôi cấy thích hợp cứ 20 phút lại phân đôi một lần. Số tế bào của quần thể vi khuẩn E.coli có được sau 3 giờ 20 phút từ một tế bào vi khuẩn ban đầu là",

                options: ["A. 1024.",
                    "B. 1240.",
                    "C. 1420.",
                    "D. 200."],
                answer: 0,
            },
            {
                question: "MB_STVSSOVSV_L1_010. Hoạt động nào của con người được gọi là nuôi cấy vi sinh vật theo hình thức liên tục?",

                options: ["A. Làm rượu.",
                    "B. Làm nấm.",
                    "C. Làm giấm.",
                    "D. Làm bánh mì."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L1_011. Nhân tố sinh trưởng của vi sinh vật là những chất cần cho sự sinh trưởng của vi sinh vật với hàm lượng rất",

                options: ["A. ít nhưng vi sinh vật không thể tự tổng hợp được.",
                    "B. nhiều nhưng vi sinh vật không thể tự tổng hợp được.",
                    "C. nhiều và vi sinh vật có thể tự tổng hợp được.",
                    "D. ít và vi sinh vật có thể tự tổng hợp được."],
                answer: 0,
            },
            {
                question: "MB_STVSSOVSV_L1_012. Nhân tố sinh trưởng của vi sinh vật có thể là chất hóa học nào sau đây?",

                options: ["A. protein, vitamin.",
                    "B. amino acid, vitamin.",
                    "C. lipid, chất khoáng.",
                    "D. carbohydrate, nucleic acid."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L1_013. Chất kháng sinh khác chất diệt khuẩn ở đặc điểm là",

                options: ["A. có khả năng tiêu diệt hoặc ức chế vi sinh vật một cách chọn lọc.",
                    "B. không làm tổn thương đến da và mô sống của cơ thể người.",
                    "C. có khả năng làm biến tính các protein, các loại màng tế bào.",
                    "D. có khả năng sinh oxygen nguyên tử có tác dụng oxi hóa mạnh."],
                answer: 0,
            },
            {
                question: "MB_STVSSOVSV_L1_014. Sinh sản vô tính ở vi sinh vật nhân thực gồm các hình thức nào sau đây? (1) Phân đôi; (2) Tiếp hợp; (3) Nảy chồi; (4) Bào tử.",

                options: ["A. (1), (2), (3).",
                    "B. (1), (2), (4).",
                    "C. (1), (3), (4).",
                    "D. (2), (3), (4)."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L1_015. Hình thức sinh sản nào sau đây <b>không</b> xuất hiện ở vi sinh vật?",

                options: ["A. Sinh sản sinh dưỡng.",
                    "B. Phân đôi.",
                    "C. Hình thành bào tử.",
                    "D. Nảy chồi."],
                answer: 0,
            },
            {
                question: "MB_STVSSOVSV_L1_016. Xạ khuẩn có hình thức sinh sản bằng:",

                options: ["A. phân đôi.",
                    "B. nảy chồi.",
                    "C. bào tử trần.",
                    "D. tiếp hợp."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L1_017. Mô tả nào dưới đây là đúng về pha tiềm phát của quần thể vi khuẩn sinh trưởng trong môi trường nuôi cấy không liên tục?",

                options: ["A. Vi khuẩn phân chia rất chậm, số tế bào sinh ra bằng số tế bào chết đi.",
                    "B. Vi khuẩn thích ứng dần với môi trường, tổng hợp các enzyme trao đổi chất và DNA, chuẩn bị cho quá trình phân bào, mật độ tế bào trong quần thể gần như không thay đổi.",
                    "C. Vi khuẩn thích ứng kém với môi trường, chúng phân chia rất chậm, số tế bào sinh ra bằng số tế bào chết đi.",
                    "D. Vi khuẩn thích ứng tốt với môi trường, chúng tổng hợp các enzyme trao đổi chất và DNA, các tế bào trong quần thể phân chia mạnh mẽ."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L1_018. Vi sinh vật A có khả năng sinh trưởng ở nhiệt độ từ 15℃ đến 45℃, sinh trưởng tối ưu ở 30℃ - 35℃. Chúng thuộc nhóm vi sinh vật nào dưới đây?",

                options: ["A. Nhóm vi sinh vật ưa lạnh.",
                    "B. Nhóm vi sinh vật ưa ấm.",
                    "C. Nhóm vi sinh vật ưa nhiệt.",
                    "D. Nhóm vi sinh vật siêu ưa nhiệt."],
                answer: 1,
            },
        ],
        level2: [

            {
                question: "MB_STVSSOVSV_L2_001. Sinh trưởng ở vi khuẩn cần được xem xét trên phạm vi quần thể vì",

                options: ["A. vi khuẩnhoàn toànkhông có sự thay đổi về kích thước và khối lượng.",
                    "B. khó nhận ra sự thay đổi về kích thước và khối lượng của tế bào vi khuẩn.",
                    "C. vi khuẩn có khả năng trao đổi chất, sinh trưởng và phát triển rất nhanh.",
                    "D. khó nhận ra sự tồn tại, phát triển của tế bào vi khuẩn trong môi trường tự nhiên."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L2_002. Trong điều kiện nuôi cấy không liên tục, chất dinh dưỡng cạn dần, sản phẩm chuyển hóa tăng lên sẽ dẫn đến hiện tượng",

                options: ["A. tăng tốc độ sinh trưởng của vi sinh vật.",
                    "B. số vi sinh vật sinh ra bằng số sinh vật chết đi.",
                    "C. quần thể vi sinh vật bị suy vong.",
                    "D. số vi sinh vật tăng lên theo cấp số nhân."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L2_003. Trong nuôi cấy không liên tục, để thu được lượng sinh khối của vi khuẩn tối đa nên tiến hành thu hoạch vào thời điểm nào sau đây?",

                options: ["A. Đầu pha lũy thừa.",
                    "B. Cuối pha lũy thừa.",
                    "C. Đầu pha tiềm phát.",
                    "D. Cuối pha cân bằng."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L2_004. Ở trong tủ lạnh, thực phẩm giữ được khá lâu là vì",

                options: ["A. vi khuẩn bị tiêu diệt ở nhiệt độ thấp.",
                    "B. nhiệt độ thấp làm biến đổi thức ăn, vi khuẩn không thể phân hủy được.",
                    "C. khi ở trong tủ lạnh vi khuẩn bị mất nước nên không hoạt động được.",
                    "D. ở nhiệt độ thấp trong tủ lạnh các vi khuẩn bị ức chế."],
                answer: 3,
            },
            {
                question: "MB_STVSSOVSV_L2_005. Có bao nhiêu lí do trong các lí do sau đây giải thích cho việc giảm dần số lượng cá thể ở pha suy vong trong nuôi cấy vi khuẩn không liên tục? (1) Chất dinh dưỡng trong môi trường nuôi cấy bị cạn kiệt; (2) Các chất độc hại tích tụ nhiều; (3) Môi trường nuôi cấy không còn không gian để chứa vi khuẩn; (4) Nồng độ oxygen giảm xuống rất thấp.",

                options: ["A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L2_006. Trong sữa chua hầu như không có vi sinh vật gây bệnh. Yếu tố nào sau đây đã ức chế sự phát triển của vi sinh vật gây bệnh trong trường hợp này?",

                options: ["A. Độ ẩm.",
                    "B. Nhiệt độ.",
                    "C. Độ pH.",
                    "D. Ánh sáng."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L2_007. Vì sao trong sữa chua hầu như <b>không</b> có vi sinh vật gây bệnh?",

                options: ["A. Vì sữa chua có độ ẩm cao nên ức chế được sự phát triển của các vi sinh vật gây bệnh.",
                    "B. Vì sữa chua có pH thấp nên ức chế được sự phát triển của các vi sinh vật gây bệnh.",
                    "C. Vì sữa chua có áp suất thẩm thấu cao nên ức chế được sự phát triển của các vi sinh vật gây bệnh.",
                    "D. Vì sữa chua có nhiệt độ bảo quản cao nên ức chế được sự phát triển của các vi sinh vật gây bệnh."],
                answer: 1,
            },
            {
                question: "MB_STVSSOVSV_L2_008. Cho các phát biểu sau: (1) Phân đôi là hình thức sinh sản phổ biến ở vi khuẩn; (2) Nảy chồi là hình thức sinh sản có ở cả vi sinh vật nhân sơ và nhân thực; (3) Một số động vật nguyên sinh có cả 2 hình thức sinh sản vô tính và hữu tính; (4) Bản chất của quá trình sinh sản vô tính ở vi sinh vật là quá trình nguyên phân. Trong các phát biểu trên, số phát biểu đúng khi nói về sinh sản ở vi sinh vật là",

                options: ["A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."],
                answer: 2,
            },
            {
                question: "MB_STVSSOVSV_L2_009. Tốc độ phân chia tế bào của quần thể vi khuẩn sinh trưởng trong môi trường nuôi cấy không liên tục đạt cực đại ở pha nào?",

                options: ["A. Pha tiềm phát.",
                    "B. Pha lũy thừa.",
                    "C. Pha cân bằng.",
                    "D. Pha suy vong."],
                answer: 1,
            },
        ],
        level3: [
            {
                question: "MB_STVSSOVSV_L3_001. Thuốc kháng sinh có đặc điểm nào dưới đây?",
                options: ["A. Có khả năng ức chế sự phát triển của virus.",
                    "B. Có khả năng tiêu diệt hoặc ức chế đặc hiệu một hoặc một vài nhóm vi sinh vật gây bệnh.",
                    "C. Có khả năng tiêu diệt hoặc ức chế tất cả các vi sinh vật gây bệnh.",
                    "D. Có khả năng ức chế sinh trưởng của vi sinh vật gây bệnh ở nồng độ cao."],
                answer: 1
            },


        ]
    },
    // Vai trò và ứng dụng của vi sinh vật
    mcVTUDVSV: {
        level1: [

            {
                question: "MB_VTVUDVSV_L1_001. Sản phẩm được tạo ra từ quá trình lên men lactic là gì?",

                options: ["A. Bia.",
                    "B. Dưa muối.",
                    "C. Dấm ăn.",
                    "D. Rượu vang."],
                answer: 1,
            },
            {
                question: "MB_VTVUDVSV_L1_002. Acid lactic được tạo ra nhờ quá trình:",

                options: ["A. hô hấp hiếu khí.",
                    "B. hô hấp kị khí.",
                    "C. lên men.",
                    "D. hô hấp nhân tạo."],
                answer: 2,
            },
            {
                question: "MB_VTVUDVSV_L1_003. Lên men dấm được coi là ứng dụng của quá trình nào?",

                options: ["A. Hô hấp hiếu khí không hoàn toàn.",
                    "B. Lên men kị khí.",
                    "C. Hô hấp kị khí.",
                    "D. Hô hấp hiếu khí hoàn toàn."],
                answer: 1,
            },
            {
                question: "MB_VTVUDVSV_L1_004. Lên men dấm được coi là ứng dụng của quá trình nào?",

                options: ["A. Hô hấp hiếu khí không hoàn toàn.",
                    "B. Lên men kị khí.",
                    "C. Hô hấp kị khí.",
                    "D. Hô hấp hiếu khí hoàn toàn."],
                answer: 1,
            },
            {
                question: "MB_VTVUDVSV_L1_005. Trong quá trình làm kim chi, thực chất là tạo điều kiện để quá trình nào sau đây xảy ra?",

                options: ["A. Phân giải protein, cellulose.",
                    "B. Lên men lactic đồng hình.",
                    "C. Lên men lactic dị hình.",
                    "D. Phân giải cellulose, lên men lactic."],
                answer: 0,
            },
            {
                question: "MB_VTVUDVSV_L1_006. Quá trình lên men rượu ethylic từ nguyên liệu tinh bột cần có sự tham gia của các vi sinh vật",

                options: ["A. nấm men rượu và vi khuẩn lactic.",
                    "B. nấm men rượu và nấm mốc.",
                    "C. nấm men rượu.",
                    "D. nấm mốc và vi khuẩn lactic."],
                answer: 1,
            },
            {
                question: "MB_VTVUDVSV_L1_007. Qúa trình chuyển hóa từ tinh bột thành đường trong quá trình lên men rượu do vi sinh vật nào thực hiện?",

                options: ["A. Vi khuẩn lactic.",
                    "B. Vi khuẩn acetic.",
                    "C. Nấm men.",
                    "D. Nấm đường hóa."],
                answer: 3,
            },
            {
                question: "MB_VTVUDVSV_L1_008. Protein của cá, đậu tương được phân giải tạo ra các amino acid nhờ enzyme",

                options: ["A. Amylase.",
                    "B. Nucleasẹ.",
                    "C. Protease.",
                    "D. Lipase."],
                answer: 2,
            },
            {
                question: "MB_VTVUDVSV_L1_009. Loài nào sau đây <b>không</b> phải vi sinh vật?",

                options: ["A. Vi khuẩn lam.",
                    "B. Tảo đơn bào.",
                    "C. Nấm rơm.",
                    "D. Trùng biến hình."],
                answer: 2,
            },

            {
                question: "MB_VTVUDVSV_L1_010. Các môi trường nuôi cấy thường ở trạng thái lỏng, để tạo môi trường nuôi cấy đặc, ta có thể bổ sung thêm vào môi trường",

                options: ["A. Cao nấm men.",
                    "B. Thạch.",
                    "C. MgSO<sub>4</sub>.",
                    "D. NaCl."],
                answer: 1,
            },
        ],
        level2: [
            {
                question: "MB_VTVUDVSV_L2_001. Điều nào sau đây <b>không</b> đúng khi nói về lên men ở vi sinh vật?",

                options: ["A. Cơ chất (ví dụ đường) bị oxy hoá từng phần.",
                    "B. NADH bị khử thành NAD<sub>+</sub> để cung cấp cho đường phân.",
                    "C. Chất nhận electron là chất hữu cơ nội sinh.",
                    "D. ATP được tạo thành nhờ phosphoryl hoá oxy hoá."],
                answer: 3,
            },
            {
                question: "MB_VTVUDVSV_L2_002. Ở vi sinh vật, liên kết Glycerol và acid béo có thể tạo thành",

                options: ["A. Glucose.",
                    "B. Protein.",
                    "C. Lipid.",
                    "D. Nucleic acid."],
                answer: 2,
            },
            {
                question: "MB_VTVUDVSV_L2_003. Phát biểu nào sau đây là sai khi nói đến quá trình phân giải protein của vi sinh vật?",

                options: ["A. Đây là quá trình phân giải ngoại bào của vi sinh vật.",
                    "B. Đây là quá trình chuyển hoá protein thành amino acid.",
                    "C. Quá trình được ứng dụng trong lên men rượu.",
                    "D. Được ứng dụng trong làm tương, nước chấm."],
                answer: 2,
            },
            {
                question: "MB_VTVUDVSV_L2_004. Acid lactic được tạo ra nhờ quá trình",

                options: ["A. hô hấp hiếu khí.",
                    "B. hô hấp kị khí.",
                    "C. lên men.",
                    "D. hô hấp nhân tạo."],
                answer: 2,
            },
            {
                question: "MB_VTVUDVSV_L2_005. Vi khuẩn <em>Neisseria meningitidis</em> có thể gây nhiễm trùng và có thể",

                options: ["A. gây viêm phổi.",
                    "B. dẫn đến nhiễm trùng huyết.",
                    "C. điều trị bằng kháng thể đơn dòng kháng TNF.",
                    "D. do tế bào lympho T hoạt hóa quá mức."],
                answer: 1,
            },
            {
                question: "MB_VTVUDVSV_L2_006. Chất độc nào sau đây là chất gây tan máu?",

                options: ["A. Độc tố bạch hầu.",
                    "B. Độc tố gây ngộ độc.",
                    "C. Độc tố uốn ván.",
                    "D. Streptolysin O."],
                answer: 3,
            },
            {
                question: "MB_VTVUDVSV_L2_007. Chất nào sau đây <b>không</b> được dùng làm nguyên liệu sản xuất rượu?",

                options: ["A. Ngô.",
                    "B. Mật đường.",
                    "C. Váng sữa.",
                    "D. Nho."],
                answer: 2,
            },
        ],
        level3: [
            {
                question: "MB_VTVUDVSV_L3_001. Nguyên liệu nào sau đây quan trọng để sản xuất acid glutamic?",
                options: ["A. Glycerol.",
                    "B. Rượu mạnh ngô.",
                    "C. Trypton.",
                    "D. Biotin."],
                answer: 3
            },
            {
                question: "MB_VTVUDVSV_L3_002. Vi sinh vật nào sau đây có hàm lượng vitamin cao?",
                options: ["A. Vi khuẩn.",
                    "B. Nấm men.",
                    "C. Tảo.",
                    "D. Động vật nguyên sinh."],
                answer: 1
            },
            {
                question: "MB_VTVUDVSV_L3_003. Vi sinh vật nào sau đây thực hiện quang hợp bằng cách tận dụng ánh sáng?",
                options: ["A. Vi khuẩn lam.",
                    "B. Nấm.",
                    "C. Virus.",
                    "D. Vi khuẩn lam, nấm và virus."],
                answer: 0
            },
            {
                question: "MB_VTVUDVSV_L3_004. Đặc điểm chung của ba con đường phân giải carbohydrate của vi sinh vật?",
                options: ["A. Năng lượng sinh ra như nhau.",
                    "B. Được thực hiện nhờ cùng một hệ enzyme giống nhau.",
                    "C. Glucose trước tiên phải được hoạt hóa bởi ATP.",
                    "D. Đều xảy ra ở điều kiện hiếu khí."],
                answer: 2
            },
            {
                question: "MB_VTVUDVSV_L3_005. Có hai loại lên men lactic là",
                options: ["A. Lên men lactic hóa dưỡng và lên men lactic quang dưỡng.",
                    "B. Lên men lactic đồng hình và lên men lactic dị hình.",
                    "C. Lên men lactic tự dưỡng và lên men lactic dị dưỡng.",
                    "D. Lên men lactic chủ động và lên men lactic bị động."],
                answer: 1
            },
            {
                question: "MB_VTVUDVSV_L3_006. Chất nào sau đây còn được gọi là Protein đơn bào?",
                options: ["A. Probiotic.",
                    "B. Kháng sinh.",
                    "C. Multibiotic.",
                    "D. Synbiotic."],
                answer: 0
            },
            {
                question: "MB_VTVUDVSV_L3_007. Tên đúng của BOD là gì?",
                options: ["A. Nhu cầu oxy sinh hóa.",
                    "B. Nhu cầu oxy sinh học.",
                    "C. Bệnh sinh học.",
                    "D. Thiếu oxy sinh học."],
                answer: 0
            },
            {
                question: "MB_VTVUDVSV_L3_008. Nhà hóa sinh nào cùng với Howard Florey và Ernst Chain, đã thiết kế một quy trình quy mô phòng thí nghiệm để sản xuất đủ Penicillin cho các thử nghiệm trên động vật?",
                options: ["A. Edward Penley Abraham.",
                    "B. Norman George Heatley.",
                    "C. Alexander Fleming.",
                    "D. Rudolph Emmerich."],
                answer: 1
            },
            {
                question: "MB_VTVUDVSV_L3_009. Ai đã phát hiện ra rằng bia và sữa bơ được tạo ra do hoạt động của nấm men?",
                options: ["A. Louis Pasteur.",
                    "B. Waksman.",
                    "C. Babes.",
                    "D. Joubert."],
                answer: 0
            },
            {
                question: "MB_VTVUDVSV_L3_010. Tên gọi đầy đủ của GAP là gì?",
                options: ["A. Tiểm năng hoạt động Ganga.",
                    "B. Kế hoạch hoạt động GanYa.",
                    "C. Tiềm năng hoạt động Yagang.",
                    "D. Kế hoạch hành động Ganga và Yamuna."],
                answer: 2
            },
            {
                question: "MB_VTVUDVSV_L3_011. Các rối loạn phát sinh do các vấn đề với chất nhầy có thể cho chúng ta biết rất nhiều về chức năng của nó. Trong một chứng rối loạn, chất nhầy trong đường hô hấp thiếu nước nên trở nên đặc và dính. Chất nhầy này <b>không</b> thể di chuyển và do đó vi khuẩn vẫn còn và nhiễm trùng phát triển. Những rối loạn nào trong số những rối loạn này đang được mô tả?",
                options: ["A. Thiếu máu.",
                    "B. Bệnh xơ nang.",
                    "C. Hội chứng Turner.",
                    "D. Bệnh Crohn."],
                answer: 1
            },
        ]
    },
    // Thực hành về vi sinh vật
    mcTHVSV: {
        level1: [

            {
                question: "MB_THVSV_L2_005. Nước được sử dụng trong quá trình làm sữa chua là",
                options: [
                    "A. nước vừa đun sôi khoảng 100<sup>o</sup>C.",
                    "B. nước lọc ở nhiệt độ phòng khoảng 50<sup>o</sup>C.",
                    "C. nước lạnh ở nhiệt độ khoảng 10 – 15<sup>o</sup>C.",
                    "D. nước đun sôi để nguội đến khoảng 50<sup>o</sup>C."
                ],
                answer: 3,
            },
            {
                question: "MB_THVSV_L1_002. Những biểu hiện nào sau đây chứng tỏ kết quả làm sữa chua đã thành công?",
                options: [
                    "A. Sữa chua đông tụ, có màu trắng sữa, có vị chua nhẹ.",
                    "B. Sữa chua tách nước, có màu trắng sữa, có vị chua nhẹ.",
                    "C. Sữa chua đông tụ, có màu vàng ngà, có vị chua nhẹ.",
                    "D. Sữa chua sủi bọt, có màu vàng ngà, có vị chua nhẹ."
                ],
                answer: 0,
            },
        ],
        level2: [
            {
                question: "MB_THVSV_L2_001. Trong quy trình làm sữa chua, việc bổ sung một hộp sữa chua vào hỗn hợp nước và sữa có tác dụng",
                options: [
                    "A. giảm nhiệt độ của môi trường dinh dưỡng.",
                    "B. cung cấp giống vi khuẩn lactic ban đầu.",
                    "C. tạo độ đặc sánh cho môi trường dinh dưỡng.",
                    "D. cung cấp thêm chất dinh dưỡng cho môi trường."
                ],
                answer: 1,
            },
            {
                question: "MB_THVSV_L2_002. Cần phải bảo quản sữa chua thành phẩm trong tủ lạnh nhằm",
                options: [
                    "A. hạn chế tốc độ lên men quá mức, kéo dài thời gian bảo quản.",
                    "B. tăng tốc độ lên men, kéo dài thời gian bảo quản.",
                    "C. tăng giá trị dinh dưỡng và độ ngon của sữa chua.",
                    "D. tăng độ đông tụ và độ ngọt thanh của sữa chua."
                ],
                answer: 0,
            },
            {
                question: "MB_THVSV_L2_003. Khi muối dưa chua, người ta thường cho thêm một ít nước dưa của lần muối trước vào cùng. Việc làm này có mục đích gì?",
                options: [
                    "A. Để dưa nhanh chua hơn.",
                    "B. Để dưa không bị mùi hôi, thối.",
                    "C. Để dưa giòn hơn.",
                    "D. Để dưa chậm chua hơn."
                ],
                answer: 0,
            },
            {
                question: "MB_THVSV_L2_004. Khi muối dưa chua, việc cho nguyên liệu đã xử lí vào dung dịch nước muối 5 – 6 % nhằm mục đích gì?",
                options: [
                    "A. Để tạo vị mặn cho dưa.",
                    "B. Để dưa nhanh chua hơn.",
                    "C. Để ức chế các vi sinh vật gây thối.",
                    "D. Để kích thích quá trình lên men."
                ],
                answer: 2,
            },
        ],
        level3: [
            {
                question: "MB_THVSV_L3_001. Sản phẩm nào sau đây không phải là sản phẩm của công nghệ vi sinh vật?",
                options: [
                    "A. Sữa chua.",
                    "B. Vaccine.",
                    "C. Chất kháng sinh.",
                    "D. Lúa mì."
                ],
                answer: 3,
            },
            {
                question: "MB_THVSV_L3_002. Chủng vi sinh vật được ứng dụng trong sản xuất thuốc trừ sâu sinh học là",
                options: [
                    "A. Saccharomyces cerevisiae.",
                    "B. Streptomyces griseus.",
                    "C. Bacillus thuringiensis.",
                    "D. Rhizobium."
                ],
                answer: 2,
            },
            {
                question: "MB_THVSV_L3_003. Con người đã sử dụng vi sinh vật nào sau đây để tạo ra phần lớn thuốc kháng sinh?",
                options: [
                    "A. Nấm men.",
                    "B. Tảo đơn bào.",
                    "C. Xạ khuẩn.",
                    "D. Vi khuẩn lactic."
                ],
                answer: 2,
            },
            {
                question: "MB_THVSV_L3_004. Mốc vàng hoa cau <em>(Aspergillus oryzae)</em> có vai trò gì trong sản xuất tương?",
                options: [
                    "A. Tạo ra enzyme để thủy phân tinh bột và protein có trong đậu tương.",
                    "B. Lên men tạo vị chua cho tương.",
                    "C. Tạo độ pH thấp làm tương không bị thối.",
                    "D. Làm cho tương có màu vàng như màu của nấm mốc."
                ],
                answer: 0,
            },

            {
                question: "MB_THVSV_L3_005. Khi nói về hoạt động sản xuất rượu theo phương pháp thủ công, phát biểu nào dưới đây đúng?",
                options: [
                    "A. Trong quá trinh ủ rượu, người ta luôn duy trì môi trường ở trạng thái yếm khí.",
                    "B. Khi ủ rượu người ta cho thêm nước vào để hòa loãng rượu.",
                    "C. Trong bánh men rượu chỉ có một loại vi sinh vật là nấm men.",
                    "D. Quá trình ủ rượu chỉ có 1 giai đoạn: người ta trộn bột bánh men vào cơm, xôi, ngô chín, ... rồi ủ, sau đó đưa ra chưng cất thành rượu."
                ],
                answer: 1,
            },
            {
                question: "MB_THVSV_L3_006. Điểm khác biệt cơ bản giữa môi trường nuôi cấy tự nhiên với các môi trường nuôi cấy khác là",
                options: [
                    "A. Các chất trong môi trường đều có nguồn gốc tự nhiên.",
                    "B. Gồm các chất mà một nửa xác định được còn một nửa thì không.",
                    "C. Gồm các chất đã xác định được thành phần và tỷ lệ.",
                    "D. Gồm các chất có nguồn gốc tự nhiên và các hóa chất thông dụng."
                ],
                answer: 0,
            },
            {
                question: "MB_THVSV_L3_007. Hiện nay trên thị trường có các loại bột giặt sinh học. Bột giặt sinh học được hiểu theo nghĩa nào sau đây?",
                options: [
                    "A. Có chứa chất tẩy rửa tổng hợp.",
                    "B. Chứa enzyme và nhiều chất tẩy rửa khác nhau.",
                    "C. Chứa một hoặc nhiều enzyme từ vi sinh vật.",
                    "D. Chứa một loại chất tẩy rửa đặc thù."
                ],
                answer: 2,
            },
            {
                question: "MB_THVSV_L3_008. Hiện nay con người thường sử dụng đối tượng nào sau đây để sản xuất sinh khối, amino acid, chất xúc tác sinh học, gôm sinh học?",
                options: [
                    "A. Động vật.",
                    "B. Thực vật.",
                    "C. Vi sinh vật.",
                    "D. Enzyme của vi sinh vật."
                ],
                answer: 2,
            },
            {
                question: "MB_THVSV_L3_009. Muối chua rau, thực chất là tạo điều kiện để quá trình nào sau đây xảy ra?",
                options: [
                    "A. Phân giải cellulose, lên men lactic.",
                    "B. Phân giải protein, cellulose.",
                    "C. Lên men lactic và lên men ethylic.",
                    "D. Lên men lactic."
                ],
                answer: 3,
            },
        ]
    },
    // Khái quát về virus
    mcKQVR: {
        level1: [

            {
                question: "MB_KQVVR_L1_001. Phát biểu nào sau đây là đúng khi nói về virus?",

                options: ["A. Virus có thể sống tự do hoặc kí sinh trên cơ thể sinh vật khác.",
                    "B. Không thể nuôi virus trên môi trường nhân tạo như nuôi vi khuẩn.",
                    "C. Virus cũng có cấu tạo tế bào giống như các sinh vật khác.",
                    "D. Virus có kích thước rất nhỏ nhưng vẫn lớn hơn vi khuẩn."],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_002. Virus có thể kí sinh ở bao nhiêu sinh vật trong các sinh vật sau đây? (1) Vi khuẩn; (2) Nấm; (3) Thực vật; (4) Động vật; (5) Người.",

                options: ["A. 2.",
                    "B. 3.",
                    "C. 4.",
                    "D. 5."],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L1_003. Virus được cấu tạo từ 2 thành phần chính gồm",

                options: ["A. lõi nucleic acid và vỏ ngoài.",
                    "B. vỏ ngoài và vỏ capsid.",
                    "C. lõi nucleic acid và vỏ capsid.",
                    "D. gai glycoprotein và lõi nucleic acid."],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_004. Thành phần cơ bản của virus là",

                options: ["A. vỏ capsid và lõi nucleic acid.",
                    "B. vỏ capsid và vỏ ngoài.",
                    "C. vỏ ngoài và lõi nucleic acid.",
                    "D. lõi nucleic acidvàgai glycoprotein."],
                answer: 0,
            },
            {
                question: "MB_KQVVR_L1_005. Vỏ capsid của các virus được cấu tạo từ",

                options: ["A. DNA.",
                    "B. RNA.",
                    "C. protein.",
                    "D. phospholipid."],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_006. Cho các chức năng sau: (1) Nhận diện tế bào vật chủ để xâm nhập; (2) Bảo vệ virus khỏi hệ thống miễn dịch của tế bào vật chủ; (3) Giúp virus bám vào tế bào vật chủ; (4) Giúp virus nhân lên nhanh chóng. Lớp vỏ ngoài của virus đảm nhận số chức năng là",

                options: ["A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_007. Nhóm virus có dạng hình xoắn là",

                options: ["A. virus bại liệt, virus hecpet, virus khảm thuốc lá.",
                    "B. virus khảm thuốc lá, virus cúm, virus sởi, virus dại.",
                    "C. virus đậu mùa, phage T2, virus khảm thuốc lá.",
                    "D. virus đậu mùa, phage T2, virus bại liệt."],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_008. Đặc điểm nào sau đây không đúng với virus?",

                options: ["A. Có kích thước siêu nhỏ (khoảng 20 – 300 nm).",
                    "B. Có cấu tạo tế bào mặc dù còn rất đơn giản.",
                    "C. Có vật chất di truyền là DNA hoặc RNA.",
                    "D. Chỉ có thể nhân lên trong tế bào vật chủ."],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_009. Cho các tiêu chí sau: (1) Sự tồn tại của lớp vỏ ngoài; (2) Sự sắp xếp của capsomer ở vỏ capsid; (3) Loại vật chất di truyền; (4) Loại vật chủ. Số tiêu chí được sử dụng để phân loại virus là",
                options: [
                    "A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."
                ],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L1_010. Phát biểu nào sau đây sai khi nói về virus trần và virus có vỏ ngoài?",
                options: [
                    "A. Virus trần và virus có vỏ ngoài đều có vỏ capsid.",
                    "B. Virus trần và virus có vỏ ngoài đều có lõi nucleic acid.",
                    "C. Bề mặt của virus trần có các gai glycoprotein còn bề mặt của virus có vỏ ngoài thì không có các gai glycoprotein.",
                    "D. Virus trần không có lớp vỏ ngoài bằng phospholipid và protein còn virus có vỏ ngoài thì có lớp vỏ ngoài bằng phospholipid và protein."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_011. Virus được phân thành 3 nhóm gồm virus có cấu trúc xoắn, virus có cấu trúc khối và virus có cấu trúc hỗn hợp. Sự phân loại này dựa trên tiêu chí nào sau đây?",
                options: [
                    "A. Sự tồn tại của lớp vỏ ngoài.",
                    "B. Sự sắp xếp của capsomer ở vỏ capsid.",
                    "C. Loại vật chất di truyền.",
                    "D. Loại vật chủ."
                ],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_012. Các đơn vị cấu tạo nên vỏ capsid của virus là",
                options: [
                    "A. capsomer.",
                    "B. glycoprotein.",
                    "C. glycerol.",
                    "D. nucleotide."
                ],
                answer: 0,
            },
            {
                question: "MB_KQVVR_L1_013. Nhận định nào sau đây đúng về vật chất di truyền của virus?",
                options: [
                    "A. Chỉ có thể là DNA, mạch đơn hoặc mạch kép.",
                    "B. Chỉ có thể là RNA, mạch đơn hoặc mạch kép.",
                    "C. Có thể là DNA hoặc RNA, mạch đơn hoặc mạch kép.",
                    "D. Có thể là DNA mạch kép hoặc RNA mạch đơn."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_014. Dựa vào lớp vỏ ngoài, virus được phân thành các nhóm gồm",
                options: [
                    "A. virus trần và virus có vỏ ngoài.",
                    "B. virus có cấu trúc xoắn, virus có cấu trúc khối và virus có cấu trúc hỗn hợp.",
                    "C. virus DNA và virus RNA.",
                    "D. virus kí sinh ở vi khuẩn, virus kí sinh ở nấm, virus kí sinh ở thực vật, virus kí sinh ở động vật và người."
                ],
                answer: 0,
            },
            {
                question: "MB_KQVVR_L1_015. Phát biểu nào sau đây sai khi nói về virus trần và virus có vỏ ngoài?",
                options: [
                    "A. Virus trần và virus có vỏ ngoài đều có vỏ capsid.",
                    "B. Virus trần và virus có vỏ ngoài đều có lõi nucleic acid.",
                    "C. Bề mặt của virus trần có các gai glycoprotein còn bề mặt của virus có vỏ ngoài thì không có các gai glycoprotein.",
                    "D. Virus trần không có lớp vỏ ngoài bằng phospholipid và protein còn virus có vỏ ngoài thì có lớp vỏ ngoài bằng phospholipid và protein."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_016. Virus được phân thành 3 nhóm gồm virus có cấu trúc xoắn, virus có cấu trúc khối và virus có cấu trúc hỗn hợp. Sự phân loại này dựa trên tiêu chí nào sau đây?",
                options: [
                    "A. Sự tồn tại của lớp vỏ ngoài.",
                    "B. Sự sắp xếp của capsomer ở vỏ capsid.",
                    "C. Loại vật chất di truyền.",
                    "D. Loại vật chủ."
                ],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L1_017. Cho các yếu tố sau: (1) Lượng virus; (2) Tốc độ nhân lên và lây lan của virus; (3) Tình trạng sức khỏe của vật chủ; (4) Các bệnh nền của vật chủ. Trong số các yếu tố trên, số yếu tố ảnh hưởng đến khả năng gây bệnh của virus là",
                options: [
                    "A. 1.",
                    "B. 2.",
                    "C. 3.",
                    "D. 4."
                ],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L1_018. Chu trình nhân lên của virus gồm 5 giai đoạn theo trình tự là",
                options: [
                    "A. hấp thụ → xâm nhập → lắp ráp → tổng hợp → giải phóng.",
                    "B. hấp thụ → xâm nhập → tổng hợp → giải phóng → lắp ráp.",
                    "C. hấp thụ → lắp ráp → xâm nhập → tổng hợp → giải phóng.",
                    "D. hấp thụ → xâm nhập → tổng hợp → lắp ráp → giải phóng."
                ],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L1_019. Trong quá trình nhân lên của virus, giai đoạn có sự nhân lên của nucleic acid trong tế bào chủ là",
                options: [
                    "A. hấp thụ.",
                    "B. xâm nhập.",
                    "C. tổng hợp.",
                    "D. lắp ráp."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L1_020. Sự liên kết giữa phân tử bề mặt của virus với thụ thể bề mặt của tế bào chủ xảy ra trong giai đoạn",
                options: [
                    "A. hấp phụ.",
                    "B. xâm nhập.",
                    "C. tổng hợp.",
                    "D. phóng thích."
                ],
                answer: 0,
            },
        ],
        level2: [
            {
                question: "MB_KQVVR_L2_001. Các virion khác virus khác ở đặc điểm là",

                options: ["A. có lõi nucleic acid là DNA.",
                    "B. có lõi nucleic acid là RNA.",
                    "C. có vỏ capsid cấu tạo từ protein.",
                    "D. có vỏ ngoài cấu tạo từ phospholipid."],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L2_002. Virus khác vi khuẩn ở điểm là",
                options: [
                    "A. có kích thước lớn hơn.",
                    "B. có cấu tạo tế bào.",
                    "C. có lối sống kí sinh nội bào bắt buộc.",
                    "D. có hình dạng và cấu trúc đa dạng."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L2_003. Phát biểu nào sau đây đúng khi nói về sự khác nhau của virus và vi khuẩn?",
                options: [
                    "A. Virus không nhất thiết phải sống kí sinh nội bào bắt buộc còn vi khuẩn phải sống kí sinh nội bào bắt buộc.",
                    "B. Virus không có hệ thống sinh năng lượng còn vi khuẩn thì có hệ thống sinh năng lượng.",
                    "C. Virus có hiện tượng sinh trưởng và nhân lên còn vi khuẩn thì không có hiện tượng sinh trưởng và nhân lên.",
                    "D. Virus có thể mẫn cảm với các chất kháng sinh còn vi khuẩn thì không mẫn cảm với các chất kháng sinh."
                ],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L2_004. Tại sao virus không thể nuôi trong môi trường tổng hợp như vi khuẩn?",
                options: [
                    "A. Vì virus có kích thước rất nhỏ.",
                    "B. Vì virus có vật chất di truyền là RNA.",
                    "C. Vì virus sống kí sinh nội bào bắt buộc.",
                    "D. Vì virus không mẫn cảm với chất kháng sinh."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L2_005. Vì sao mỗi loại virus chỉ xâm nhập vào tế bào của vật chủ nhất định?",
                options: [
                    "A. Vì mỗi loại virus chỉ xâm nhập được vào những tế bào của vật chủ có hệ gene tương thích với hệ gene của virus.",
                    "B. Vì mỗi loại virus chỉ xâm nhập được vào những tế bào của vật chủ có màng sinh chất tương thích với vỏ capsid của virus.",
                    "C. Vì mỗi loại virus chỉ xâm nhập được vào những tế bào của vật chủ có hình dạng tương thích với hình dạng của virus.",
                    "D. Vì mỗi loại virus chỉ xâm nhập được vào những tế bào của vật chủ có thụ thể tương thích với phân tử bề mặt của virus."
                ],
                answer: 3,
            },
            {
                question: "MB_KQVVR_L2_006. Vì sao mỗi loại virus chỉ có thể xâm nhập vào một số loại tế bào nhất định?",
                options: [
                    "A. Vì mỗi loại virus chỉ có các gai glycoprotein hoặc protein bề mặt tương thích với thụ thể trên bề mặt của một số loại tế bào chủ nhất định.",
                    "B. Vì mỗi loại virus chỉ có enzyme phân giải màng tế bào của một số loại tế bào chủ nhất định.",
                    "C. Vì mỗi loại virus chỉ có khả năng sử dụng bộ máy sinh tổng hợp các chất của một số loại tế bào chủ nhất định.",
                    "D. Vì mỗi loại virus chỉ có enzyme phiên mã ngược tương thích với vật chất di truyền của một số loại tế bào chủ nhất định."
                ],
                answer: 0,
            },
            {
                question: "MB_KQVVR_L2_007. Phát biểu nào sau đây là đúng khi nói về điểm khác nhau giữa chu trình sinh tan và chu trình tiềm tan?",
                options: [
                    "A. Trong chu trình tiềm tan, vật chất di truyền của virus tồn tại và nhân lên độc lập với vật chất di truyền của tế bào chủ. Trong chu trình sinh tan, vật chất di truyền của virus tích hợp và cùng nhân lên với vật chất di truyền của tế bào chủ.",
                    "B. Trong chu trình tiềm tan, có sự nhân lên tạo nhiều thế hệ virus mới trong tế bào chủ. Trong chu trình sinh tan, không có sự nhân lên thế hệ virus trong tế bào chủ.",
                    "C. Trong chu trình tiềm tan, virus giải phóng sẽ không làm tan tế bào chủ. Trong chu trình sinh tan, virus giải phóng sẽ làm tan tế bào chủ.",
                    "D. Virus ở chu trình sinh tan có thể chuyển thành chu trình tiềm tan. Virus ở chu trình tiềm tan không thể chuyển thành chu trình sinh tan."
                ],
                answer: 2,
            },
            {
                question: "MB_KQVVR_L2_008. Phát biểu nào sau đây đúng khi nói về sự khác nhau trong giai đoạn xâm nhập giữa phage và virus có vỏ ngoài?",
                options: [
                    "A. Ở phage, nucleocapsid được đưa vào tế bào chất sau đó “cởi vỏ” để giải phóng nucleic acid. Ở virus có vỏ ngoài, nucleic acid được bơm vào tế bào chất còn vỏ nằm bên ngoài.",
                    "B. Ở phage, nucleic acid được bơm vào tế bào chất còn vỏ nằm bên ngoài. Ở virus có vỏ ngoài, nucleocapsid được đưa vào tế bào chất sau đó “cởi vỏ” để giải phóng nucleic acid.",
                    "C. Ở phage, vỏ capsid được bơm vào tế bào chất còn nucleic acid nằm bên ngoài. Ở virus có vỏ ngoài, nucleocapsid được đưa vào tế bào chất sau đó “cởi vỏ” để giải phóng nucleic acid.",
                    "D. Ở phage, nucleocapsid được đưa vào tế bào chất sau đó “cởi vỏ” để giải phóng nucleic acid. Ở virus có vỏ ngoài, vỏ capsid được bơm vào tế bào chất còn nucleic acid nằm bên ngoài."
                ],
                answer: 1,
            },
            {
                question: "MB_KQVVR_L2_009. Phát biểu nào sau đây đúng khi nói về sự khác nhau giữa virus độc và virus ôn hòa?",
                options: [
                    "A. Virus độc không thể nhân lên nhưng tiết chất độc phá vỡ tế bào chủ. Virus ôn hòa cũng không thể nhân lên nhưng tiết chất dinh dưỡng để nuôi tế bào chủ.",
                    "B. Virus độc không thể nhân lên nhưng tiết chất độc phá vỡ tế bào chủ. Virus ôn hòa thì có thể nhân lên và làm phá vỡ tế bào chủ.",
                    "C. Virus độc xâm nhập, nhân lên và phá vỡ tế bào chủ. Virus ôn hòa gắn bộ gen vào bộ gen tế bào chủ, không tạo thành virus mới và không phá vỡ tế bào chủ.",
                    "D. Virus độc gắn bộ gen vào bộ gen tế bào chủ, không tạo thành virus mới và không phá vỡ tế bào chủ. Virus ôn hòa xâm nhập, nhân lên và phá vỡ tế bào chủ."
                ],
                answer: 2,
            },
        ],
        level3: [
            {
                question: "MB_KQVVR_L3_001. Franken và Conrat đã tiến hành thí nghiệm tách lõi RNA ra khỏi vỏ protein của hai chủng virus A và B.Sau đó, tiến hành lấy lõi nucleic acid của chủng A kết hợp với vỏ capsid của chủng B để tạo thành virus lai. Nhiễm chủng virus lai vào cây thuốc lá thì cây sẽ bị bệnh. Theo lí thuyết, khi tiến hành phân lập từ lá cây bị bệnh sẽ thu được virus có cấu tạo gồm",
                options: ["A. lõi nucleic acid của chủng A và vỏ capsid của chủng B.",
                    "B. lõi nucleic acid của chủng B và vỏ capsid của chủng A.",
                    "C. lõi nucleic acid của chủng A và vỏ capsid của chủng A.",
                    "D. lõi nucleic acid của chủng B và vỏ capsid của chủng B."],
                answer: 2
            },

        ]
    },
    // Virus
    mcVR: {
        level1: [

            {
                question: "MB_VR_L1_001. Virus <b>không</b> được sử dụng trong ứng dụng nào dưới đây?",

                options: ["A. Chế tạo vaccine.",
                    "B. Sản xuất thuốc trừ sâu.",
                    "C. Làm vector trong công nghệ di truyền.",
                    "D. Sản xuất enzyme tự nhiên."],
                answer: 3
            },
            {
                question: "MB_VR_L1_002. Dưới góc độ phòng bệnh, tại sao nên tránh tiếp xúc với các động vật hoang dã?",

                options: ["A. Vì động vật hoang dã có thể là ổ chứa mầm bệnh truyền nhiễm.",
                    "B. Vì động vật hoang dã có thể tấn công gây nguy hiểm cho con người.",
                    "C. Vì động vật hoang dã có thể làm biến đổi gene của con người.",
                    "D. Vì động vật hoang dã có thể làm suy giảm hệ miễn dịch của con người."],
                answer: 0
            },
            {
                question: "MB_VR_L1_003. Bệnh do virus lây truyền bằng 2 phương thức là:",

                options: ["A. truyền dọc và truyền ngang.",
                    "B. truyền qua đường hô hấp và truyền qua đường tiêu hóa.",
                    "C. truyền qua đường tiêu hóa và truyền qua đường máu.",
                    "D. truyền qua đường hô hấp và truyền qua đường tình dục."],
                answer: 0
            },
            {
                question: "MB_VR_L1_004. Bệnh do virus nào sau đây <b>không</b> lây truyền qua đường hô hấp?",

                options: ["A. Bệnh SARS.",
                    "B. Bệnh AIDS.",
                    "C. Bệnh cúm.",
                    "D. Bệnh sởi."],
                answer: 1
            },
            {
                question: "MB_VR_L1_005. Virus <b>không</b> gây bệnh theo cơ chế nào sau đây?",

                options: ["A. Cơ chế nhân lên kiểu sinh tan phá hủy các tế bào cơ thể và các mô.",
                    "B. Cơ chế sản sinh các độc tố trong tế bào chủ làm biểu hiện triệu chứng bệnh.",
                    "C. Cơ chế nhân lên kiểu tiềm tan gây đột biến gene dẫn đến ung thư.",
                    "D. Cơ chế sản sinh các độc tố bên ngoài tế bào chủ làm biểu hiện triệu chứng bệnh."],
                answer: 3
            },
            {
                question: "MB_VR_L1_006. Virus gây hội chứng suy giảm miễn dịch mắc phải (AIDS) ở người là:",

                options: ["A. HIV.",
                    "B. SARS _ CoV _ 2.",
                    "C. Paramyxo virus.",
                    "D. Aphtho type A."],
                answer: 0
            },
            {
                question: "MB_VR_L1_007. Phát biểu nào sau đây <b>không</b> đúng khi nói về HIV/AIDS?",

                options: ["A. HIV tấn công và phá hủy các tế bào hệ miễn dịch, làm suy yếu khả năng miễn dịch của cơ thể.",
                    "B. HIV có khả năng tạo ra rất nhiều biến thể mới trong một thời gian ngắn khiến việc phòng và điều trị AIDS gặp nhiều khó khăn.",
                    "C. HIV lây truyền từ người sang người theo 3 con đường: đường hô hấp, đường tình dục và mẹ truyền sang con.",
                    "D. Trong những giai đoạn đầu, người nhiễm HIV thường không có biểu hiện triệu chứng rõ ràng dẫn đến nguy cơ lây nhiễm cao."],
                answer: 2
            },
            {
                question: "MB_VR_L1_008. Các chủng virus cúm khác nhau về:",

                options: ["A. chất cấu tạolõi nucleic acid.",
                    "B. chất cấu tạo lớp vỏ ngoài.",
                    "C. loại enzyme phiên mã ngược.",
                    "D. loại tổ hợp gai glycoprotein."],
                answer: 0
            },
            {
                question: "MB_VR_L1_009. Virus thực vật không thể xâm nhập vào trong tế bào qua con đường thực bào hoặc dung hợp màng tế bào là do:",

                options: ["A. tế bào thực vật có thành tế bào cứng chắc.",
                    "B. tế bào thực vật có màng tế bào cứng chắc.",
                    "C. virus thực vật không có lớp vỏ ngoài glycoprotein.",
                    "D. virus thực vật không có lớp vỏ capsid."],
                answer: 0
            },
            {
                question: "MB_VR_L1_010. Bệnh sốt xuất huyết lây lan do muỗi vằn truyền virus từ người bệnh sang người khỏe mạnh. Trong trường hợp này, muỗi vằn được gọi là",

                options: ["A. vật chủ.",
                    "B. phổ vật chủ.",
                    "C. vật trung gian.",
                    "D. tác nhân gây bệnh."],
                answer: 2
            },
            {
                question: "MB_VR_L1_011. Vật trung gian truyền bệnh lùn xoắn lá ở lúa là:",

                options: ["A. rầy nâu.",
                    "B. ong mắt đỏ.",
                    "C. ruồi giấm.",
                    "D. muỗi vằn."],
                answer: 0
            },
            {
                question: "MB_VR_L1_012. Biện pháp chủ động phòng tránh virus hiệu quả nhất ở người là:",

                options: ["A. tiêm vaccine.",
                    "B. vệ sinh môi trường sạch sẽ.",
                    "C. giữ gìn vệ sinh cơ thể.",
                    "D. ăn uống đủ chất."],
                answer: 0
            },
            {
                question: "MB_VR_L1_013. Bệnh SARS_CoV_2 có triệu chứng điển hình là:",

                options: ["A. gây suy giảm miễn dịch, ở giai đoạn cuối gây ra bệnh cơ hội dẫn đến tử vong.",
                    "B. sốt cao, đau đầu, nổi ban trên da, sợ nước và gió, tiêu chảy không ngừng.",
                    "C. đau đầu, khó thở, viêm phổi nặng, có thể dẫn tới suy hô hấp và tử vong.",
                    "D. bị ảo giác, lú lẫn, hành vi hung hăng, co thắt cơ bắp, nuốt khó, tử vong."],
                answer: 2
            },
            {
                question: "MB_VR_L1_014. Triệu chứng điển hình của cây trồng bị nhiễm virus là:",

                options: ["A. lá màu xanh đậm; thân cây mọc cao vống lên nhưng yếu và dễ đổ gãy.",
                    "B. lá bị xoăn; có những vết nâu, trắng hoặc vàng trên lá và quả; sinh trưởng chậm.",
                    "C. lá có màu vàng đỏ; thân cây xuất hiện nhiều u bướu nhỏ.",
                    "D. sinh trưởng chậm; lá cây vàng héo rồi rụng; số lượng hoa và quả đều giảm."],
                answer: 1
            },
            {
                question: "MB_VR_L1_015. Virus có hình thức sống là",

                options: ["A. kí sinh bắt buộc.",
                    "B. hoại sinh.",
                    "C. kí sinh không bắt buộc.",
                    "D. cộng sinh."],
                answer: 0
            },
            {
                question: "MB_VR_L1_016. Virus có nhiều hình dạng, được cấu tạo từ hai thành phần chính là lõi __(1)__  và lớp vỏ __(2)__ , một số virus có thêm vỏ ngoài. (1) và (2) trong câu lần lượt là",

                options: ["A. RNA, protein.",
                    "B. DNA, glycoprotein.",
                    "C. DNA / RNA, glycoprotein.",
                    "D. DNA / RNA, protein."],
                answer: 3
            },
            {
                question: "MB_VR_L1_017. Đặc điểm sinh sản của virus là",

                options: ["A. sinh sản bằng cách nhân đôi.",
                    "B. sinh sản dựa vào nguyên liệu tế bào chủ.",
                    "C. sinh sản hữu tính.",
                    "D. sinh sản tiếp hợp."],
                answer: 1
            },
            {
                question: "MB_VR_L1_018. Trình tự các giai đoạn trong chu trình nhân lên của virus là",

                options: ["A. hấp thụ - xâm nhập - lắp ráp - sinh tổng hợp - giải phóng.",
                    "B. xâm nhập - sinh tổng hợp - hấp thụ - lắp ráp - giải phóng.",
                    "C. hấp thụ - xâm nhập - sinh tổng hợp - lắp ráp - giải phóng.",
                    "D. giải phóng - hấp thụ - xâm nhập - sinh tổng hợp - lắp ráp."],
                answer: 2
            },
        ],
        level2: [

            {
                question: "MB_VR_L2_001. Sự lây nhiễm của virus cúm khác HIV ở điểm:",

                options: ["A. RNA của virus cúm được sử dụng trực tiếp để tạo ra RNA và protein của virus mới.",
                    "B. vỏ ngoài của virus được dung hợp với màng tế bào để đưa hạt virus vào trong tế bào chất.",
                    "C. các hạt virus mới được lắp ráp và giải phóng ra bên ngoài tế bào bằng con đường xuất bào.",
                    "D. sự hấp phụ được thực hiện nhờ các gai glycoprotein trên vỏ ngoài tương tác đặc hiệu với các thụ thể trên bề mặt của tế bào chủ."],
                answer: 0
            },
            {
                question: "MB_VR_L2_002. Các bệnh do virus thường có biểu hiện chung là:",

                options: ["A. sốt cao, đau nhức các bộ phận cơ thể.",
                    "B. suy giảm hệ thống miễn dịch của cơ thể.",
                    "C. sốt cao, tiêu chảy, đau họng.",
                    "D. tiêu chảy, đau nhức các bộ phận cơ thể."],
                answer: 0
            },
            {
                question: "MB_VR_L2_003. Virus có vật chất di truyền là RNA dễ phát sinh các chủng đột biến hơn virus có vật chất di truyền là DNA vì:",

                options: ["A. các virus RNA có khả năng tái tổ hợp với các virus RNA khác tạo ra loại virus mới.",
                    "B. các enzyme nhân bản RNA thường sao chép không chính xác và ít hoặc không có khả năng sửa chữa các sai sót.",
                    "C. các virus RNA có vỏ protein linh hoạt, dễ bị biến tính trong môi trường nội bào của tế bào chủ.",
                    "D. các lõi nucleic acid của virus RNA thường có khả năng chủ động tạo ra những đột biến theo hướng tăng cường khả năng xâm nhập của virus."],
                answer: 1
            },
        ],
        level3: [
            {
                question: "...",
                options: ["A. F2 thu được tỉ lệ kiểu hình khác tỉ lệ kiểu gene.", "B.Các cặp tính trạng di truyền phân li độc lập.", "C.F2 thu được tỉ lệ kiểu hình giống tỉ lệ kiểu gene.", "D.Kiểu gene của F1 là dị hợp tử đều."],
                answer: 2
            },

        ]
    },
    // Mở đầu
    tfMD: {
        level1: [

            {
                question: "DP_MĐ_L1_001. Cho các phát biểu về vai trò của sinh học trong phát triển kinh tế, phát biểu nào đúng, phát biểu nào sai?",
                statements: [
                    {
                        text: "Cung cấp các kiến thức, công nghệ xử lí ô nhiễm và cải tạo môi trường.", correct: false
                    },
                    {
                        text: "Tạo ra những giống cây trồng và vật nuôi có năng suất và chất lượng cao.", correct: true
                    },
                    {
                        text: "Đưa ra các biện pháp nhằm kiểm soát sự phát triển dân số cả về chất lượng và số lượng.", correct: false
                    },
                    {
                        text: "Góp phần xây dựng chính sách môi trường.", correct: false
                    }
                ]
            },
            {
                question: "DP_MĐ_L1_002. Khi nói về các phương pháp nghiên cứu và học tập môn sinh học, mỗi mệnh đề sau là đúng hay sai?",
                statements: [
                    {
                        text: "Có thể ghi chép dữ liệu bằng nhiều cách như ghi sổ tay, máy ghi âm, video,…", correct: true
                    },
                    {
                        text: "Micropipette là một dụng cụ cơ bản trong nghiên cứu và học tập môn Sinh học.", correct: true
                    },
                    {
                        text: "Khi thu thập dữ liệu người nghiên cứu chỉ được sử dụng một phương pháp nhất định.", correct: false
                    },
                    {
                        text: "Nếu dữ liệu được ghi chép dưới dạng số liệu thì chỉ cần ghi nhận số liệu một lần để tránh sai sót.", correct: false
                    }
                ]
            },
            {
                question: "DP_MĐ_L1_003. Khi nói về vai trò của kính hiển vi quang học, mỗi mệnh đề sau là đúng hay sai?",
                statements: [
                    {
                        text: "Dùng chữa các tật khúc xạ của mắt như cận thị, loạn thị và viễn thị.", correct: false
                    },
                    {
                        text: "Dụng cụ quang bổ trợ cho mắt, có tác dụng tạo ảnh có góc trông lớn đối với vật ở rất xa.", correct: false
                    },
                    {
                        text: "Dùng để quan sát cấu trúc của vật, vi sinh vật có kích thước nhỏ mắt thường không quan sát được.", correct: true
                    },
                    {
                        text: "Dùng để đọc chữ, quan sát kĩ các bộ phận của các vật thể có kích thước nhỏ được dùng nhiều trong trường học hoặc các phòng thí nghiệm.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DP_MĐ_L2_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                statements: [
                    {
                        text: "Sinh học nghiên cứu về sự sống.", correct: true
                    },
                    {
                        text: "Lĩnh vực nghiên cứu sinh học được tìm hiểu trong lớp 10 là sinh học cơ thể.", correct: false
                    },
                    {
                        text: "Phát triển bền vững là sự phát triển đáp ứng được nhu cầu của xã hội hiện tại, nhưng không làm tổn hại đến khả năng tiếp cận với nhu cầu phát triển của các thế hệ tương lai.", correct: true
                    },
                    {
                        text: "Sinh học là cơ sở đưa ra biện pháp nâng cao tuổi thọ và sức khỏe của con người.", correct: false
                    }
                ]
            },
            {
                question: "DP_MĐ_L2_002. Mỗi mệnh đề sau là đúng hay sai khi nói về ứng dụng của tin sinh học?",
                statements: [
                    {
                        text: "Xác định quan hệ họ hàng giữa các loài.", correct: true
                    },
                    {
                        text: "Xây dựng ngân hàng sinh học.", correct: true
                    },
                    {
                        text: "So sánh trình tự protein.", correct: true
                    },
                    {
                        text: "So sánh hệ gene.", correct: true
                    }
                ]
            },

        ],

        level3: [
            {
                question: "DP_MĐ_L3_001. Mỗi nhận định sau là đúng hay sai khi nói về chức năng của cân được sử dụng trong phòng thí nghiệm?",

                statements: [
                    {
                        text: "Thiết bị dùng để cân trọng lượng của vật.", correct: true
                    },
                    {
                        text: "Thiết bị dùng để đo nồng độ của các chất điện giải trong cơ thể như: Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Cl<sup>-</sup>, Li<sup>+</sup>.", correct: false
                    },
                    {
                        text: "Thiết bị dùng để đo các thông số máu như số lượng bạch cầu, số lượng tiểu cầu hoặc giá trị nồng độ.", correct: false
                    },
                    {
                        text: "Thiết bị dùng để tách hỗn hợp hai pha rắn – lỏng hoặc lỏng – lỏng thành các phần riêng biệt.", correct: false
                    }
                ]
            },
            {
                question: "DP_MĐ_L3_002. Khi nói về những hoạt động được thực hiện ở bước 1 trong nghiên cứu vấn đề thúc đẩy thanh long ra quả trái vụ, phát biểu nào đúng, phát biểu nào sai?",

                statements: [
                    {
                        text: "Ghi ngày bắt đầu và kết thúc thắp đèn, thời gian thắp đèn mỗi đêm.", correct: false
                    },
                    {
                        text: "Chọn phương pháp xử lí.", correct: true
                    },
                    {
                        text: "Chuẩn bị bóng đèn và dây dẫn đúng kĩ thuật.", correct: true
                    },
                    {
                        text: "Lựa chọn vườn thanh long để thực nghiệm.", correct: true
                    }
                ]
            },
        ]
    },
    // Phương pháp nghiên cứu và học tập môn Sinh học
    tfPPNCHT: {
        level1: [

            {
                question: "DP_PPNCHT_L1_001. Cho các phát biểu về phương pháp làm việc trong phòng thí nghiệm, phát biểu nào đúng, phát biểu nào sai?",
                statements: [
                    {
                        text: "Phương pháp làm việc trong phòng thí nghiệm là phương pháp chủ động tác động vào đối tượng nghiên cứu và các hoạt động của đối tượng đó nhằm kiểm soát sự phát triển của chúng có chủ đích.", correct: false
                    },
                    {
                        text: "Phương pháp làm việc trong phòng thí nghiệm là phương pháp sử dụng các dụng cụ, hóa chất, quy tắc an toàn trong phòng thí nghiệm để thực hiện các thí nghiệm khoa học.", correct: true
                    },
                    {
                        text: "Phương pháp làm việc trong phòng thí nghiệm được thực hiện bằng nhiều cách khác nhau căn cứ vào tính chất riêng của các chỉ tiêu chất lượng: đo trực tiếp, phương pháp phân tích hóa trị, phương pháp tính toán(tính năng suất, hiệu quả, giá thành, tuổi thọ, hao phí nguyên liệu…).", correct: false
                    },
                    {
                        text: "Phương pháp làm việc trong phòng thí nghiệm là phương pháp sử dụng tri giác để thu thập thông tin của đối tượng được quan sát.", correct: false
                    }
                ]
            },


        ],
        level2: [
            {
                question: "DP_PPNCHT_L2_001. Cho các phát biểu về phương pháp làm việc trong phòng thí nghiệm, phát biểu nào đúng, phát biểu nào sai?",
                statements: [
                    {
                        text: "Khi thu thập dữ liệu người nghiên cứu chỉ được sử dụng một phương pháp nhất định.", correct: false
                    },
                    {
                        text: "Có thể ghi chép dữ liệu bằng nhiều cách như ghi sổ tay, máy ghi âm, video.", correct: true
                    },
                    {
                        text: "Nếu dữ liệu được ghi chép dưới dạng số liệu thì chỉ cần ghi nhận số liệu một lần để tránh sai sót.", correct: false
                    },
                    {
                        text: "Micropipette là một dụng cụ cơ bản trong nghiên cứu và học tập môn Sinh học.", correct: true
                    }
                ]
            },

        ],

        level3: [
            {
                question: "...",

                statements: [
                    {
                        text: "Thế giới sống được tổ chức theo nguyên tắc từ đơn giản đến phức tạp.", correct: false
                    },
                    {
                        text: "Các cấp độ tổ chức sống là những hệ mở và tự điều chỉnh.", correct: true
                    },
                    {
                        text: "Thế giới sống liên tục tiến hóa.", correct: true
                    },
                    {
                        text: "Tổ chức từ loại chưa có cấu tạo tế bào như virus tới các sinh vật đa bào và không ngừng tiến hóa.", correct: false
                    }
                ]
            },

        ]
    },
    tfCCDTCS: {
        level1: [

            {
                question: "DP_CCĐTCS_L1_001. Mỗi nhận sau là đúng hay sai khi nói về đặc điểm chung của thế giới sống?",
                statements: [
                    {
                        text: "Liên tục tiến hóa.", correct: true
                    },
                    {
                        text: "Là một hệ thống kín.", correct: false
                    },
                    {
                        text: "Có khả năng tự điều chỉnh.", correct: true
                    },
                    {
                        text: "Tổ chức theo nguyên tắc thứ bậc.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L1_002. Cho các phát biểu về đặc điểm chung của thế giới sống, phát biểu nào đúng, phát biểu nào sai?",

                statements: [
                    {
                        text: "Thế giới sống được tổ chức theo nguyên tắc từ đơn giản đến phức tạp.", correct: false
                    },
                    {
                        text: "Các cấp độ tổ chức sống là những hệ mở và tự điều chỉnh.", correct: true
                    },
                    {
                        text: "Thế giới sống liên tục tiến hóa.", correct: true
                    },
                    {
                        text: "Tổ chức từ loại chưa có cấu tạo tế bào như virus tới các sinh vật đa bào và không ngừng tiến hóa.", correct: false
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L1_003. Mỗi nhận định sau là đúng hay sai khi nói về đặc điểm chung của thế giới sống?",

                statements: [
                    {
                        text: "Liên tục tiến hoá.", correct: true
                    },
                    {
                        text: "Là một hệ thống kín.", correct: false
                    },
                    {
                        text: "Có khả năng tự điều chỉnh.", correct: true
                    },
                    {
                        text: "Tổ chức theo nguyên tắc thứ bậc.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L1_004. Khi nói về các cấp độ tổ chức của thế giới sống, phát biểu nào đúng, phát biểu nao sai?",

                statements: [
                    {
                        text: "Các cấp tổ chức sống có những đặc trưng cơ bản như: chuyển hóa vật chất và năng lượng, sinh trưởng và phát triển, sinh sản,…", correct: false
                    },
                    {
                        text: "Các cấp độ tổ chức sống cơ bản gồm bào quan, cơ thể, quần thể, quần xã, hệ sinh thái.", correct: true
                    },
                    {
                        text: "Các đơn vị cấu tạo nên thế giới sống gọi là cấp độ tổ chức của thế giới sống.", correct: false
                    },
                    {
                        text: "Các cấp tổ chức sống chỉ có quan hệ về chức năng.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L1_005. Mỗi mệnh đề sau là đúng hay sai khi nói về các cấp độ tổ chức của thế giới sống?",

                statements: [
                    {
                        text: "Tổ chức sống cao hơn mang những điểm nổi trội.", correct: false
                    },
                    {
                        text: "Các cấp tổ chức sống được tổ chức theo nguyên tắc thứ bậc.", correct: false
                    },
                    {
                        text: "Tổ chức sống cấp trên làm cơ sở hình tố chức sống cấp dưới.", correct: true
                    },
                    {
                        text: "Đặc tính nổi trội hình thành do sự tương tác giữa các bộ phận cấu thành.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DP_CCĐTCS_L2_001. Mỗi nhận sau là đúng hay sai khi nói về ví dụ để minh chứng cho đặc điểm tổ chức sống là hệ mở?",
                statements: [
                    {
                        text: "Khi trời nóng thì người đổ mồ hôi.", correct: false
                    },
                    {
                        text: "Hệ thần kinh ở động vật được cấu tạo từ các noron.", correct: false
                    },
                    {
                        text: "Sinh vật có hoạt động sinh sản khi đủ tuổi chín sinh lí.", correct: false
                    },
                    {
                        text: "Thực vật thực hiện quá trình hô hấp lấy khí O<sub>2</sub> và thải khí CO<sub>2</sub>.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L2_002. Mỗi nhận định sau là đúng hay sai khi nói về ví dụ để minh chứng cho đặc điểm tổ chức sống là hệ mở?",
                statements: [
                    {
                        text: "Khi trời nóng thì người đổ mồ hôi.", correct: false
                    },
                    {
                        text: "Hệ thần kinh ở động vật được cấu tạo từ các noron.", correct: false
                    },
                    {
                        text: "Sinh vật có hoạt động sinh sản khi đủ tuổi chín sinh lí.", correct: false
                    },
                    {
                        text: "Thực vật thực hiện quá trình hô hấp lấy khí O<sub>2</sub> và thải khí CO<sub>2</sub>.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L2_003. Khi nói về lí do các cấp tổ chức của thế giới sống đều là những hệ mở thì lí do nào đúng, lí do nào sai?",
                statements: [
                    {
                        text: "Thường xuyên trao đổi chất với môi trường.", correct: true
                    },
                    {
                        text: "Có khả năng sinh sản để duy trì nòi giống.", correct: false
                    },
                    {
                        text: "Có khả năng thích nghi với môi trường.", correct: false
                    },
                    {
                        text: "Phát triển và tiến hoá không ngừng.", correct: false
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L2_004. Khi đề cập đến ví dụ nói về khả năng tự điều chỉnh của tổ chức sống, phát biểu nào đúng, phát biểu nào sai?",
                statements: [
                    {
                        text: "Cây xanh hút khí CO2, thải khí O<sub>2</sub>.", correct: false
                    },
                    {
                        text: "Đến độ tuổi nhất định sinh vật có khả năng sinh sản.", correct: false
                    },
                    {
                        text: "Quần thể có mật độ quá đông sẽ có hiện tượng tách đàn làm giảm số lượng cá thể.", correct: true
                    },
                    {
                        text: "Nhiều cá thể cùng loài sống chung có quan hệ chặt chẽ với nhau tạo thành quần thể.", correct: false
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L2_005. Khi nói về nguyên tắc thứ bậc của các tổ chức sống, phát biểu nào đúng, phát biểu nao sai?",
                statements: [
                    {
                        text: "Tất cả các cấp tổ chức sống được xây dựng từ cấp tế bào.", correct: false
                    },
                    {
                        text: "Các cơ thể còn non phải phục tùng các cơ thể trưởng thành.", correct: false
                    },
                    {
                        text: "Kích thước của các tổ chức sống được sắp xếp từ nhỏ đến lớn.", correct: false
                    },
                    {
                        text: "Cấp tổ chức nhỏ hơn làm nền tảng để xây dựng cấp tổ chức cao hơn.", correct: true
                    }
                ]
            },
        ],

        level3: [
            {
                question: "DP_CCĐTCS_L3_001. Khi nói về lí do các cấp tổ chức của thế giới sống đều là những hệ mở thì lí do nào đúng, lí do nào sai?",

                statements: [
                    {
                        text: "Thường xuyên trao đổi chất với môi trường.", correct: true
                    },
                    {
                        text: "Có khả năng sinh sản để duy trì nòi giống.", correct: false
                    },
                    {
                        text: "Có khả năng thích nghi với môi trường.", correct: false
                    },
                    {
                        text: "Phát triển và tiến hóa không ngừng.", correct: false
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L3_002. Một con robot cũng có khả năng di chuyển, tương tác với môi trường xung quanh, làm việc nhà, thậm chí trả lời các câu hỏi và đưa ra lời khuyên hữu ích cho các bác sĩ trong việc điểu trị bệnh. Khi nói về đặc điểm khác nhau giữa con robot với vật sống, mỗi mệnh đề sau là đúng hay sai?",

                statements: [
                    {
                        text: "Các phản ứng của chúng là các thuật toán được con người cài sẵn.", correct: true
                    },
                    {
                        text: "Không có có khả năng giao phối, sinh sản tạo ra các thế hệ sau.", correct: true
                    },
                    {
                        text: "Robot không có khả năng tự sinh sản ra các thế hệ sau.", correct: true
                    },
                    {
                        text: "Không có khả năng lớn lên, phát triển theo thời gian.", correct: true
                    }
                ]
            },
            {
                question: "DP_CCĐTCS_L3_003. Mỗi nhận định sau là đúng hay sai khi nói về lí do mà giữa sinh vật và môi trường có mối quan hệ tác động lẫn nhau?",

                statements: [
                    {
                        text: "Sinh vật có cấu tạo phức tạp.", correct: false
                    },
                    {
                        text: "Sinh vật có các bào quan phát triển.", correct: false
                    },
                    {
                        text: "Quá trình tiến hóa để thích nghi.", correct: false
                    },
                    {
                        text: "Quá trình trao đổi chất và năng lượng.", correct: true
                    }
                ]
            },
        ]
    },
    // Nguyên tố hóa học và nước

    tfCNTHHVN: {
        level1: [
            {
                question: "DP_CNTHHVN_L1_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Các nguyên tố hóa học chỉ tham gia cấu tạo nên các đại phân tử sinh học.", correct: false
                    },
                    {
                        text: "Có khoảng 50% số nguyên tố hóa học là thiết yếu.", correct: false
                    },
                    {
                        text: "Có hai nhóm nguyên tố chính là nguyến tố đa lượng và nguyên tố vi lượng.", correct: true
                    },
                    {
                        text: "Carbon là nguyên tố có vai trò đặc biệt quan trọng đối với tế bào.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DP_CNTHHVN_L2_001. Cho các phát biểu sau về học thuyết tế bào. Phát biểu nào đúng và phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Tế bào là đơn vị nhỏ nhất, đơn vị cấu trúc và đơn vị chức năng cấu tạo nên mọi cơ thể sinh vật.", correct: true
                    },
                    {
                        text: "Tế bào chỉ được sinh ra từ sự phân chia các tế bào có trước.", correct: true
                    },
                    {
                        text: "Sự sống được tiếp diễn do có sự chuyển hóa và di truyền xảy ra bên trong các tế bào.", correct: true
                    },
                    {
                        text: "Tất cả mọi sinh vật đều được cấu tạo từ nhiều tế bào.", correct: false
                    }
                ]
            },

        ],

        level3: [
            {
                question: "DP_CNTHHVN_L3_001. Mỗi phát biểu dưới đây là đúng hay sai khi nói về đặc điểm của nguyên tố vi lượng trong cơ thể sống?",

                statements: [
                    {
                        text: "Là nguyên tố mà sinh vật chỉ cần một lượng rất nhỏ.", correct: true
                    },
                    {
                        text: "Chỉ cần cho thực vật ở giai đoạn sinh trưởng.", correct: false
                    },
                    {
                        text: "Thường tham gia cấu tạo nên enzyme trong tế bào.", correct: true
                    },
                    {
                        text: "Chiếm tỉ lệ lớn hơn 0,01% khối lượng chất sống của cơ thể.", correct: false
                    }
                ]
            },
        ]
    },
    // Các đại phân tử hữu cơ
    tfCDPTHC: {
        level1: [
            {
                question: "DP_CĐPTHC_L1_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Carbohydrate là hợp chất hữu cơ được cấu tạo bởi các nguyên tố C, H, O.", correct: true
                    },
                    {
                        text: "Người ta dựa vào số loại đơn phân có trong phân tử để chia saccharide ra thành ba loại là đường đơn, đường đôi và đường đa.", correct: false
                    },
                    {
                        text: "Cellulose là một polysaccharide không tan trong nước.", correct: true
                    },
                    {
                        text: "Saccharose có tên gọi là đường nho.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DP_CĐPTHC_L2_001.Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Glycogen là chất dự trữ của cơ thể động vật và nấm.", correct: true
                    },
                    {
                        text: "Glucose là nguyên liệu chủ yếu cho hô hấp tế bào.", correct: true
                    },
                    {
                        text: "Lipid là nhóm chất được cấu tại từ 3 nguyên tố C, H, O được nối với nhau bằng liên kết cộng hóa trị phân cực, có tính kị nước.", correct: false
                    },
                    {
                        text: "Dầu ăn và mỡ bôi trơn có cùng thành phần nguyên tố.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DP_CĐPTHC_L3_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Chất béo rắn là loại chất béo chứa hàm lượng lớn các gốc acid béo no.", correct: true
                    },
                    {
                        text: "Chất béo chứa các gốc acid không no thường là chất lỏng ở nhiệt độ thường và được gọi là mỡ.", correct: false
                    },
                    {
                        text: "Phospholipid và steroid thuộc loại lipid phức tạp.", correct: true
                    },
                    {
                        text: "Một phân tử phospholipid có cấu tạo bao gồm 1 phân tử glycerol và 1 phân tử acid béo và 1 nhóm phosphate.", correct: false
                    }
                ]
            },
        ]
    },
    // Tế bào nhân sơ

    tfTBNS: {
        level1: [
            {
                question: "DB_TBNS_L1_001. Khi nói về đặc điểm chung của tế bào nhân sơ, nhận định nào sau đây đúng, nhận định nào sai?",
                image: null,
                statements: [
                    {
                        text: "Kích thước lớn.", correct: false
                    },
                    {
                        text: "Tỉ lệ diện tích bề mặt/ thể tích cơ thể lớn.", correct: false
                    },
                    {
                        text: "Trao đổi chất, sinh trưởng và sinh sản nhanh.", correct: true
                    },
                    {
                        text: "Chưa có nhân hoàn chỉnh(chưa có màng nhân).", correct: true
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB_TBNS_L2_001. Khi nói về chức năng của thành tế bào vi khuẩn, nhận định nào sau đây đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Lưu trữ thông tin di truyền.", correct: false
                    },
                    {
                        text: "Tổng hợp protein.", correct: false
                    },
                    {
                        text: "Bảo vệ tế bào.", correct: true
                    },
                    {
                        text: "Quy định hình dạng tế bào.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_TBNS_L3_001. Mỗi nhận định sau đây đúng hay sai khi nói về tế bào nhân sơ?",
                image: null,
                statements: [
                    {
                        text: "Các tế bào nhân sơ có kích thước nhỏ nên sinh trưởng, sinh sản nhanh.", correct: true
                    },
                    {
                        text: "Thành tế bào cấu tạo chủ yếu là chitin.", correct: false
                    },
                    {
                        text: "Bào quan của tế bào nhân sơ không có màng bọc.", correct: true
                    },
                    {
                        text: "Tế bào nhân sơ chưa có hệ thống nội màng, chứa có màng nhân.", correct: true
                    }
                ]
            },
        ]
    },
    // Tế bào nhân thực

    tfTBNT: {
        level1: [
            {
                question: "DB_TBNT_L1_001. Quan sát hình ảnh sau về cấu tạo của tế bào, hãy cho biết các nhận định dưới đây là <b>Đúng</b> hay <b>Sai</b>?",
                image: "https://nhantri.top/media/Grade10/TBTVdien.png",
                statements: [
                    {
                        text: "Bào quan 6 được bao bọc bởi lớp màng đơn.", correct: false
                    },
                    {
                        text: "Bào quan 3 trong tế bào thường lớn, là nơi dự trữ nước, carbohydrate, protein, được bao bọc bởi lớp màng đơn.", correct: true
                    },
                    {
                        text: "Bào quan 4 có thành phần chủ yếu là cellulose.", correct: true
                    },
                    { text: "Bào quan 2 được coi là “nhà máy năng lượng” của tế bào.", correct: false }
                ]
            },
            {
                question: "DB_TBNT_L1_002. Quan sát hình ảnh sau về cấu tạo của tế bào, hãy cho biết các nhận định dưới đây là <b>Đúng</b> hay <b>Sai</b>?",
                image: "https://nhantri.top/media/Grade10/TBTVdien.png",
                statements: [
                    {
                        text: "Bào quan 6 là trung tâm điều khiển các hoạt động của tế bào, được bao bọc bởi lớp màng đơn.", correct: false
                    },
                    {
                        text: "Bào quan 6, 1, 5 được bao bọc bởi lớp màng kép.", correct: true
                    },
                    {
                        text: "Tế bào này là tế bào nhân thực.", correct: true
                    },
                    { text: "Tế bào này có chứa vùng nhân.", correct: false }
                ]
            },
            {
                question: "DB_TBNT_L1_003. Nhận định sau đây là <b>Đúng</b> hay <b>Sai</b> về tế bào nhân thực?",

                statements: [
                    {
                        text: "Ti thể có hai lớp màng: màng ngoài gấp nếp, màng trong phẳng và nhẵn.", correct: false
                    },
                    {
                        text: "Lysosome là bào quan dạng túi, có màng đơn.", correct: true
                    },
                    {
                        text: "Màng sinh chất cho phép tất cả các chất đi vào và đi ra khỏi tế bào.", correct: false
                    },
                    {
                        text: "Ribosome là bào quan không có màng bao bọc, giữ chức năng tổng hợp protein.", correct: true
                    }
                ]
            },
            {
                question: "DB_TBNT_L1_004. Nhận định sau đây là <b>Đúng</b> hay <b>Sai</b> về tế bào nhân thực?",

                statements: [
                    {
                        text: "Ribosome có thể tồn tại tự do trong tế bào hoặc đính với lưới nội chất hạt.", correct: true
                    },
                    {
                        text: "Nhân con là cấu trúc trong nhân tế bào có vai trò chính trong việc tổng hợp protein.", correct: false
                    },
                    {
                        text: "Các tế bào gan có chứa lưới nội chất hạt phát triển mạnh chứa các enzyme tham gia vào quá trình khử độc.", correct: false
                    },
                    {
                        text: "Bên trong lục lạp có chứa hệ thống các túi dẹp, được gọi là granum, các túi này xếp chồng và nối thông nhau bằng các màng tạo nên cấu trúc thylakoid.", correct: false
                    }
                ]
            },
            {
                question: "DB_TBNT_L1_005. Nhận định sau đây là <b>Đúng</b> hay <b>Sai</b>?",

                statements: [
                    {
                        text: "Tế bào chất của tế bào nhân thực chứa nhiều bào quan phức tạp.", correct: true
                    },
                    {
                        text: "Vi khuẩn E.coli có lưới nội chất.", correct: false
                    },
                    {
                        text: "Mạng lưới nội chất trơn có đính ribosome.", correct: false
                    },
                    {
                        text: "Mạng lưới nội chất có hạt tham gia tổng hợp protein.", correct: true
                    }
                ]
            },
            {
                question: "DB_TBNT_L1_006. Nhận định sau đây là <b>Đúng</b> hay <b>Sai</b>?",

                statements: [
                    {
                        text: "Vi khuẩn E.coli không có ribosome.", correct: false
                    },
                    {
                        text: "Ribosome của vi khuẩn và tế bào động vật là hoàn toàn giống nhau về kích thước và thành phần rRNA.", correct: false
                    },
                    {
                        text: "Trên thể Golgi có đính ribosome.", correct: false
                    },
                    {
                        text: "Protein không bị phân giải trong lysosome.", correct: false
                    }
                ]
            },
            {
                question: "DB_TBNT_L1_007. Nhận định sau đây là <b>Đúng</b> hay <b>Sai</b>?",

                statements: [
                    {
                        text: "Ti thể được bao bọc bởi một lớp màng.", correct: false
                    },
                    {
                        text: "Màng ngoài và màng trong của ti thể có cấu tạo và chức năng khác nhau.", correct: true
                    },
                    {
                        text: "Ti thể có chứa DNA trần dạng vòng.", correct: true
                    },
                    {
                        text: "Bộ khung xương của tế bào được cấu tạo gồm vi sợi, vi ống và sợi trung gian.", correct: true
                    }
                ]
            },

        ],
        level2: [

            {
                question: "DB_TBNT_L2_001. Mỗi nhận định sau đúng hay sai khi nói về chức năng của bộ máy Golgi?",

                statements: [
                    {
                        text: "Tiếp nhận, biến đổi, đóng gói và phân phối các sản phẩm của tế bào.", correct: true
                    },
                    {
                        text: "Phân giải các hợp chất hữu cơ phức tạp thành chất đơn giản sinh năng lượng.", correct: false
                    },
                    {
                        text: "Tổng hợp một số polysaccharide cấu tạo nên thành tế bào thực vật.", correct: true
                    },
                    {
                        text: "Tổng hợp protein sau đó đóng gói và phân phối đến màng sinh chất.", correct: false
                    }
                ]
            },
            {
                question: "DB_TBNT_L2_002. Mỗi nhận định sau đúng hay sai khi nói về ti thể và lục lạp?",

                statements: [
                    {
                        text: "Lục lạp có chức năng quang hợp, còn ti thể đảm nhận chức năng hô hấp.", correct: true
                    },
                    {
                        text: "Ti thể có chứa DNA còn lục lạp thì không.", correct: false
                    },
                    {
                        text: "Ti thể không có hệ sắc tố, còn lục lạp có hệ sắc tố.", correct: true
                    },
                    {
                        text: "Ti thể chỉ có ở tế bào động vật.", correct: false
                    }
                ]
            },
            {
                question: "DB_TBNT_L2_003. Mỗi nhận định sau đúng hay sai khi nói về khung xương tế bào?",

                statements: [
                    {
                        text: "Tổng hợp protein và enzyme cho tế bào.", correct: false
                    },
                    {
                        text: "Tham gia vào sự vận động của tế bào.", correct: true
                    },
                    {
                        text: "Nơi neo đậu của các bào quan và enzyme.", correct: true
                    },
                    {
                        text: "Làm giá đỡ cơ học, giúp duy trì hình dạng tế bào.", correct: true
                    }
                ]
            },

        ],
        level3: [
            {
                question: "DB_TBNT_L3_001. Hai mẫu tế bào khác nhau (mẫu A và mẫu B) được phân lập từ cùng một người để xử lí phá màng tế bào. Sau đó tiến hành li tâm phân đoạn các thành phần trong từng mẫu. Kết quả thí nghiệm được thể hiện như hình dưới đây. Hãy cho biết mỗi nhận định sau đây là <b>Đúng</b> hay <b>Sai</b>?",
                image: "https://nhantri.top/media/Grade10/dothilitam.png",
                statements: [
                    {
                        text: "Tế bào B có nhu cầu sử dụng năng lượng ATP cao hơn so với tế bào A.", correct: true
                    },
                    {
                        text: "Tế bào B có nhu cầu tổng hợp protein cao hơn so với tế bào A.", correct: false
                    },
                    {
                        text: "Lysosome trong tế bào A được bao bọc bởi lớp màng đơn.", correct: true
                    },
                    { text: "Tế bào B có nhiều lông nên nó là tế bào nhân sơ.", correct: false }
                ]
            },
        ]
    },
    // Vận chuyển các chất qua màng

    tfTDC: {
        level1: [
            {
                question: "DB_VCCCQM_L1_001. Khi nghiên cứu hiện tượng thẩm thấu, người ta tiến hành đặt tế bào hồng cầu và tế bào thực vật vào 3 loại môi trường khác nhau như hình bên trái. Hãy cho biết, mỗi kết luận dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade10/vcccqmtbtv.jpg",
                statements: [
                    {
                        text: "Hình (a) _ nước bên trong tế bào hồng cầu di chuyển ra bên ngoài làm tế bào mất nước và bị co lại.", correct: true
                    },
                    {
                        text: "Hình(e) và(f) giúp giải thích vì sao lá rau bị héo khi mất nước và chỉ tươi khi trương nước.", correct: false
                    },
                    {
                        text: "Nếu đặt tế bào vi khuẩn và nấm vào môi trường giống hình(c) thì chúng sẽ bị vỡ do hút nước.", correct: false
                    },
                    {
                        text: "Nếu loại bỏ thành và đặt tế bào thực vật vào môi trường giống hình(b) thì tế bào có dạng hình cầu.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_VCCCQM_L2_001. Hình dưới đây mô tả tóm tắt quá trình tổng hợp, hoàn thiện và vận chuyển protein ở tế bào nhân thực. Mỗi nhận định sau đây là <b>Đúng</b> hay <b>Sai</b> về thí nghiệm này?",
                image: "https://nhantri.top/media/Grade10/thinghiemtrung.png",
                statements: [
                    {
                        text: "Ở cốc 1, sau 24 giờ ngâm giấm rồi ngâm NaCl thì khối lượng quả trứng tăng 4,7g/giờ.", correct: true
                    },
                    {
                        text: "Ở cốc 2, quả trứng được ngâm trong dung dịch ưu trương nên muối di chuyển vào trong.", correct: false
                    },
                    {
                        text: "Ở cốc 3, nước đã di chuyển từ dung dịch NaCl vào quả trứng.", correct: true
                    },
                    { text: "Ở cốc 4, khối lượng quả trứng giảm do nước thẩm thấu qua màng vỏ ra bên ngoài.", correct: true }
                ]
            },
            {
                question: "DB_VCCCQM_L2_002. Hình dưới đây mô tả 3 hình thức vận chuyển các chất qua màng tế bào, kí hiệu là a, b, c. Mỗi nhận định sau đây là <b>Đúng</b> hay <b>Sai</b> về quá trình này?",
                image: "https://nhantri.top/media/Grade10/cachtvc.png",
                statements: [
                    {
                        text: "hình thức a, b là vận chuyển chủ động có sử dụng năng lượng ATP.", correct: false
                    },
                    {
                        text: "hình thức c là khuếch tán đơn giản qua lớp phospholipid kép.", correct: true
                    },
                    {
                        text: "hình thức b, c là vận chuyển không tiêu tốn năng lượng của tế bào.", correct: true
                    },
                    {
                        text: "Cả ba hình thức vận chuyển trên đều dựa trên sự khếch tán của các chất từ nơi có nồng độ cao đến nơi có nồng độ thấp.", correct: false
                    }
                ]
            },
            {
                question: "DB_VCCCQM_L2_003. Khi nói về các phương thức vận chuyển các chất tan vào trong màng tế bào, nhận định sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Khuếch tán gián tiếp qua lớp kép phospholipid.", correct: false
                    },
                    {
                        text: "Nhờ sự biến dạng của màng tế bào.", correct: true
                    },
                    {
                        text: "Khuếch tán qua kênh protein xuyên màng.", correct: true
                    },
                    {
                        text: "Nhờ kênh protein đặc hiệu và tiêu hao ATP.", correct: true
                    }
                ]
            },
            {
                question: "DB_VCCCQM_L2_004. Khi nói về các hoạt động diễn ra trong tế bào có sử dụng năng lượng ATP, nhận định sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Tổng hợp các chất cần thiết diễn ra trong tế bào.", correct: true
                    },
                    {
                        text: "Vận chuyển chủ động các chất qua màng tế bào.", correct: true
                    },
                    {
                        text: "Glucose khuếch tán qua màng tế bào.", correct: false
                    },
                    {
                        text: "Nước thẩm thấu vào tế bào khi tế bào ngập trong dung dịch nhược trương.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_VCCCQM_L3_001. Để nghiên cứu ảnh hưởng của nồng độ muối đến khối lượng của quả trứng gà, một thí nghiệm được tiến hành như sau:</br> (1) Ngâm ngập 4 quả trứng gà trong 24 giờ với giấm ăn(một loại acid yếu) để hòa tan lớp vỏ cứng.</br> (2) Vớt trứng ra, dùng khăn giấy lau khô, cân khối lượng từng quả trứng và ghi lại.</br >(3) Chuẩn bị 4 cốc, mỗi cốc có chứa 200 mL dung dịch NaCl với nồng độ khác nhau, đặt vào mỗi cốc 1 quả trứng và ngâm trong 1 giờ.</br >(4) Vớt trứng ra, dùng khăn giấy lau khô, cân khối lượng từng quả trứng và ghi lại. Kết quả thí nghiệm được thể hiện ở bảng dưới đây.</br>Mỗi nhận định sau đây là <b>Đúng</b> hay <b>Sai</b> về quá trình này?",
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
        ]
    },
    // Truyền tin tế bào

    tfTTTB: {
        level1: [
            {
                question: "DB_TTTB_L1_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Giúp các tế bào đáp ứng lại với các kích thích của môi trường ngoại bào.", correct: true
                    },
                    {
                        text: "Giúp các tế bào truyền đạt, sao chép thông tin di truyền.", correct: false
                    },
                    {
                        text: "Giúp các tế bào trao đổi thông tin qua lại với nhau.", correct: true
                    },
                    {
                        text: "Giúp tế bào nhân lên, thay thế các tế bào bị thương, già chết.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_TTTB_L2_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Tế bào tiếp nhận tín hiệu bằng các protein thụ thể trê màng tế bào.", correct: false
                    },
                    {
                        text: "Trong quá trình truyền thông tin giữa các tế bào, phân tử tín hiệu làm biến đổi hình dạng của thụ thể ở giai đoạn đáp ứng.", correct: false
                    },
                    {
                        text: "Sự truyền tín hiệu bên trong tế bào là sự chuyển đổi tín hiệu giữa các phân tử trong con đường truyền tin tế bào.", correct: true
                    },
                    {
                        text: "Theo hình thức cho - nhận, trong đó một tế bào tiết ra phân tử truyền tin và liên kết trực tiếp với thụ thể của tế bào khác.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_TTTB_L3_001. Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Con đường truyền tin của phân tử gồm các bước chính: Tiếp nhận → Truyền tin → Đáp ứng.", correct: true
                    },
                    {
                        text: "Quá trình ở đó tín hiệu trên bề mặt tế bào được chuyển thành dạng thông tin hóa học.", correct: true
                    },
                    {
                        text: "Chất truyền tin gồm 2 loại chính đó là hormone và nước.", correct: false
                    },
                    {
                        text: "Chất truyền tin là các chất hoá học liên kết giữa các tế bào làm nhiệm vụ  mà đích của chúng là các tế bào liền kề.", correct: false
                    }
                ]
            },
        ]
    },
    // Chuyển hóa vật chất và năng lượng

    tfKQCHVCVNL: {
        level1: [
            {
                question: "DB_KQCHVCVNL_L1_001. Cho vào cốc mỏ 1ml nước bọt, 19ml nước cất. Lắc đều để tạo dung dịch nước bọt 1/20. Lấy 5 ống nghiệm lần lượt cho vào mỗi ống 1ml hồ tinh bột 1% và 0, 5ml dung dịch nước bọt 1/20. Để các ống nghiệm ở trên nhiệt độ thường hoặc đun cách thủy 37 độ. Tiến hành phản ứng với dung dịch Iodine như trong bảng dưới đây.Các nhận định rút ra từ thí nghiệm là đúng hay sai?",
                image: "https://nhantri.top/media/Grade10/thenzyme.png",
                statements: [
                    {
                        text: "Ở ống 1: sau thời gian đun cách nhiệt 1 phút, enzyme đã thủy phân hết hồ tinh bột, nên khi cho Iodine vào dung dịch có màu xanh tím đậm.", correct: false
                    },
                    {
                        text: "Ở ống 2, 3, 4 có màu nhạt dần do enzyme bị phân giải theo thời gian, lượng hồ tinh bột mất dần.", correct: true
                    },
                    {
                        text: "Ở ống 5: sau thời gian đun cách thủy 20 phút, lượng hồ tinh bột đã bị enzyme thủy phân hết tạo thành các dextrin và maltose.Vì vậy, ống nghiệm có màu vàng nhạt.", correct: true
                    },
                    { text: "Thời gian phản ứng tỉ lệ nghịch với lượng hồ tinh bột bị phân giải bởi enzyme amylase.", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "DB_KQCHVCVNL_L2_001. Mỗi nhận định dưới đây là đúng hay sai khi nói về ATP?",
                image: null,
                statements: [
                    {
                        text: "Liên kết P - P trong phân tử ATP là liên kết cao năng.", correct: true
                    },
                    {
                        text: "Năng lượng tích trữ trong các phân tử ATP là nhiệt năng.", correct: false
                    },
                    {
                        text: "Phân tử ATP có cấu tạo gồm: adenine, đường ribose và hai nhóm phosphate.", correct: false
                    },
                    {
                        text: "ATP là đồng tiền năng lượng tế bào.", correct: true
                    }
                ]
            },
            {
                question: "DB_KQCHVCVNL_L2_002. Mỗi nhận định dưới đây là đúng hay sai khi nói về enzyme?",
                image: null,
                statements: [
                    {
                        text: "Bản chất enzyme là protein hoặc protein kết hợp với các chất khác không phải là protein.", correct: false
                    },
                    {
                        text: "Enzyme là thành phần không thể thiếu trong sản phẩm của phản ứng sinh hóa mà nó xúc tác.", correct: true
                    },
                    {
                        text: "Enzyme làm tăng tốc độ phản ứng và sẽ bị phân hủy sau khi tham gia phản ứng.", correct: false
                    },
                    {
                        text: "Ở động vật và thực vật, enzyme do các tuyến tiết ra.", correct: true
                    }
                ]
            },

        ],
        level3: [

            {
                question: "...",
                image: "https://nhantri.top/media/Grade10/btquanghop.png",
                statements: [
                    {
                        text: "Pha (1) thực hiện nhờ hệ sắc tố quang hợp và chuỗi chuyền elctron quan hợp nằm xoang thylakoid.", correct: false
                    },
                    {
                        text: "Pha (2) diễn ra ở chất nền, oxi hóa CO<sub>2</sub> thành C6H12O6 nhờ ATP, NADPH.", correct: false
                    },
                    {
                        text: "Phân tử (5) sau khi được hình thành phải qua 4 lớp màng để ra khỏi tế bào thực vật.", correct: true
                    },
                    {
                        text: "Trong một thí nghiệm, một cây được cung cấp chất X có chứa đồng vị <sup>18</sup>O và các đồng vị này có mặt trong phân tử glucose. X có thể là phân tử (4).", correct: true
                    }
                ]
            },
        ]
    },
    // Chuyển hóa vật chất và năng lượng

    tfQTCHVCVNL: {
        level1: [
            {
                question: "DB_CHVCVNL_L1_001. Mỗi nhận định sau là đúng hay sai khi nói về đặc điểm của quá trình trao đổi chất và năng lượng ở cấp độ cơ thể?",

                statements: [
                    {
                        text: "Đây là chuỗi các phản ứng enzyme trong tế bào.", correct: false
                    },
                    {
                        text: "Xảy ra trong cơ thể, trong các hệ cơ quan trong cơ thể.", correct: true
                    },
                    {
                        text: "Biểu hiện ở mối quan hệ giữa các sinh vật trong chuỗi, lưới thức ăn.", correct: false
                    },
                    {
                        text: "Biểu hiện ở mối quan hệ giữa các cá thể cùng loài trong kiếm ăn, sinh sản, tự vệ,…", correct: false
                    }
                ]
            },

        ],
        level2: [

            {
                question: "DB_CHVCVNL_L2_001. Mỗi nhận định sau đây là đúng hay sai khi nói về vai trò của quang hợp?",
                image: null,
                statements: [
                    {
                        text: "Tổng hợp các chất và tích lũy năng lượng.", correct: true
                    },
                    {
                        text: "Chỉ đều hòa hàm lượng O<sub>2</sub> trong khí quyển.", correct: false
                    },
                    {
                        text: "Cung cấp nguồn dinh dưỡng nuôi sống gần như toàn bôh sinh giới.", correct: true
                    },
                    {
                        text: "Cung cấp nguồn nguyên liệu cho sản xuất công nghiệp, xây dựng và y học.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_CHVCVNL_L3_001. Mỗi nhận định sau đây là đúng hay sai khi nói về vai trò của quá trình tổng hợp các chất trong tế bào động vật?",

                statements: [
                    {
                        text: "Tích lũy năng lượng cho tế bào và cơ thể.", correct: true
                    },
                    {
                        text: "Cung cấp nguyên liệu cấu tạo nên tế bào và cơ thể sống.", correct: true
                    },
                    {
                        text: "Giải phóng năng lượng cung cấp cho các hoạt động sống.", correct: false
                    },
                    {
                        text: "Giải phóng oxygen cung cấp cho các quá trình sinh năng lượng ATP.", correct: false
                    }
                ]
            },
            {
                question: "DB_CHVCVNL_L3_002. Quá trình quang hợp ở thực vật là quá trình oxy hóa - khử gồm 2 pha và được thực hiện bởi bào quan lục lạp theo sơ đồ trong hình. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade10/btquanghop.png",
                statements: [
                    {
                        text: "Pha (1) thực hiện nhờ hệ sắc tố quang hợp và chuỗi chuyền elctron quan hợp nằm xoang thylakoid.", correct: false
                    },
                    {
                        text: "Pha (2) diễn ra ở chất nền, oxi hóa CO<sub>2</sub> thành C6H12O6 nhờ ATP, NADPH.", correct: false
                    },
                    {
                        text: "Phân tử (5) sau khi được hình thành phải qua 4 lớp màng để ra khỏi tế bào thực vật.", correct: true
                    },
                    {
                        text: "Trong một thí nghiệm, một cây được cung cấp chất X có chứa đồng vị <sup>18</sup>O và các đồng vị này có mặt trong phân tử glucose. X có thể là phân tử (4).", correct: true
                    }
                ]
            },
        ]
    },
    // Chu kì tế bào và nguyên phân

    tfCKTBVNP: {
        level1: [
            {
                question: "DB_CKTBVNP_L1_001.... ",
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

        ],
        level2: [
            {
                question: "DB_CKTBVNP_L2_001. ...",
                image: null,
                statements: [
                    {
                        text: "Allele A và A1 có thể có số lượng nucleotide bằng nhau hoặc hơn kém nhau một nucleotide.", correct: true
                    },
                    {
                        text: "Nếu phân tử protein do allele A1 mã hóa có chức năng bị thay đổi thì có thể mang allele A1 là thể đột biến.", correct: false
                    },
                    {
                        text: "Nếu allele A và A1 có số nucleotide bằng nhau thì chuỗi polypeptide do hai allele này mã hóa có thể có số amino acid khác nhau.", correct: false
                    },
                    { text: "Nếu allele A1 là gene trội so với allele A thì thể đột biến có kiểu gene AA.", correct: true }
                ]
            },
        ],
        level3: [
            {
                question: "DB_CKTBVNP_L3_001. Mỗi nhận định sau là đúng hay sai khi nói về ý nghĩa của nguyên phân đối với sinh vật nhân thực đa bào?",
                image: null,
                statements: [
                    {
                        text: "Là cơ sở sinh sản vô tính.", correct: true
                    },
                    {
                        text: "Tạo nên sựu đa dạng di truyền.", correct: false
                    },
                    {
                        text: "Giúp ổn định bộ nhiễm sắc thể qua các thế hệ.", correct: true
                    },
                    {
                        text: "Giúp thay thế các tế bào già, sai hỏng.", correct: true
                    }
                ]
            },
        ]
    },

    // Quá trình giảm phân

    tfQTGP: {
        level1: [
            {
                question: "DB_GP_L1_001. Mỗi nhận định dưới đây là đúng hay sai khi nói về sự giống nhau giữa kì sau I và kì sau II của quá trình giảm phân?",

                statements: [
                    {
                        text: "Các NST đều ở trạng thái đơn.", correct: false
                    },
                    {
                        text: "Các NST đều ở trạng thái kép.", correct: false
                    },
                    {
                        text: "Có sự dãn xoắn của các NST.", correct: false
                    },
                    {
                        text: "Có sự phân li các NST về hai cực của tế bào.", correct: true
                    }
                ]
            },
            {
                question: "DB_GP_L1_002. Khi nói về điểm khác nhau giữa kì giữa của nguyên phân và kì giữa I của giảm phân, phát biểu nào đúng, phát biều nào sai?",

                statements: [
                    {
                        text: "Thoi phân bào từ mỗi cực chỉ đính vào tâm động của một NST kép của cặp NST kép tương đồng.", correct: true
                    },
                    {
                        text: "Các cặp nhiễm sắc thể kép tương đồng tập trung hình thành 2 hàng ở mặt phẳng xích đạo.", correct: true
                    },
                    {
                        text: "Thoi phân bào được hình thành, màng nhân tiêu biến.", correct: false
                    },
                    {
                        text: "Các nhiễm sắc thể kép co xoắn cực đại.", correct: false
                    }
                ]
            },
            {
                question: "DB_GP_L1_003. Mỗi nhận định sau là đúng hay sai khi nói về tế bào?",

                statements: [
                    {
                        text: "Tế bào là nơi diễn ra mọi hoạt động sống.", correct: true
                    },
                    {
                        text: "Tế bào chỉ được sinh ra bằng cách phân chia tế bào.", correct: true
                    },
                    {
                        text: "Tế bào có một hình thức phân chia duy nhất là nguyên phân.", correct: false
                    },
                    {
                        text: "Tế bào có khả năng trao đổi chất theo phương thức đồng hóa và dị hóa.", correct: true
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB_GP_L2_001. Khi nói về giảm phân, phát biểu nào đúng phát biểu nào sai?",

                statements: [
                    {
                        text: "Tất cả mọi tế bào đều có thể tiến hành giảm phân.", correct: false
                    },
                    {
                        text: "Quá trình giảm phân luôn tạo ra tế bào con có bộ NST đơn bội.", correct: false
                    },
                    {
                        text: "Sự phân bào giảm phân luôn dẫn tới quá trình tạo giao tử.", correct: false
                    },
                    {
                        text: "Từ 1 tế bào 2n qua giảm phân bình thường sẽ tạo ra bốn tế bào n.", correct: true
                    }
                ]
            },
            {
                question: "DB_GP_L2_002. Mỗi nhận định sau là đúng hay sai khi nói về lí do của sựu đa dạng di truyền sinh sản hữu tính?",

                statements: [
                    {
                        text: "Sự phân li độc lập và tổ hợp tự do của các nhiễm sắc thể trong giảm phân và thụ tinh.", correct: true
                    },
                    {
                        text: "Sự phân li đồng đều của các nhiễm sắc thể trong nguyên phân và giảm phân.", correct: false
                    },
                    {
                        text: "Sự duy trì ổn định bộ nhiễm sắc thể lưỡng bội trong quá trình nguyên phân.", correct: false
                    },
                    {
                        text: "Sự trao đổi chéo các đoạn chromatid của cặp nhiễm sắc thể tương đồng.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_GP_L3_001. Phát biểu sau đây là đúng hay sai khi nói về giảm phân?",

                statements: [
                    {
                        text: "Giai đoạn thực chất làm giảm đi một nửa số lượng NST ở các tế bào con là giảm phân I.", correct: true
                    },
                    {
                        text: "Trong giảm phân có 2 lần nhân đôi NST ở hai kì trung gian.", correct: false
                    },
                    {
                        text: "Giảm phân sinh ra các tế bào con có số lượng NST giảm đi một nửa so với tế bào mẹ.", correct: true
                    },
                    {
                        text: "Bốn tế bào con được sinh ra đều có n NST giống nhau về cấu trúc.", correct: false
                    }
                ]
            },
        ]
    },
    // Công nghệ tế bào

    tfCNTB: {
        level1: [
            {
                question: "DB_CNTB_L1_001. Khi nói về thành tựu do ứng dụng của công nghệ tế bào. Mỗi nhận định sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Tạo giống dâu tằm tam bội có năng suất tăng cao hơn so với dạng lưỡng bội bình thường.", correct: false
                    },
                    {
                        text: "Tạo ra nhiều cá thể từ một phôi ban đầu.", correct: true
                    },
                    {
                        text: "Nhân nhanh các giống cây quý hiếm đồng nhất về kiểu gene.", correct: true
                    },
                    {
                        text: "Tạo ra giống Táo má hồng từ Táo Gia Lộc.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_CNTB_L2_001. Cừu Dolly (05/07/1996) là động vật có vú đầu tiên được nhân bản vô tính trên thế giới. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade10/cuubt.png",
                statements: [
                    {
                        text: "Cừu (S) là cứu Dolly và tế bào Y là tế bào soma.", correct: false
                    },
                    {
                        text: "Sản phẩm của bước 5 là hợp tử.", correct: true
                    },
                    {
                        text: "Bước 7 là chuyển gen vào cừu cái mang thai hộ.", correct: false
                    },
                    {
                        text: "Tế bào X là tế bào tuyến vú.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_CNTB_L3_001. Mỗi nhận định sau là đúng hay sai khi nói về ý nghĩa của việc ứng dụng nhân giống vô tính trong ống nghiệm ở cây trồng?",
                image: "https://nhantri.top/media/Grade10/ngvtton.png",
                statements: [
                    {
                        text: "Giúp tạo ra giống có nhiều ưu điểm như sạch nấm bệnh, đồng đều về đặc tính của giống gốc.", correct: true
                    },
                    {
                        text: "Giúp bảo tồn một số nguồn gene thực vật quý hiếm có nguy cơ tuyệt chủng.", correct: true
                    },
                    {
                        text: "Giúp nhân nhanh giống cây trồng đáp ứng yêu cầu của sản xuất.", correct: true
                    },
                    {
                        text: "Giúp tạo ra nhiều biến dị tốt.", correct: false
                    }
                ]
            },
        ]
    },
    // Đa dạng và PPNC VSV
    tfDDPPNCVSV: {
        level1: [
            {
                question: "DB_ĐDVPPNCVSV_L1_001. Mỗi phát biểu dưới đây là đúng hay sai khi nói về đặc điểm đặc trưng chung của vi sinh vật?",
                image: null,
                statements: [
                    {
                        text: "Tốc độ trao đổi chất nhanh.", correct: true
                    },
                    {
                        text: "Sinh trưởng và sinh sản nhanh hơn thực vật và động vật.", correct: true
                    },
                    {
                        text: "Cấu tạo cơ thể phức tạp.", correct: false
                    },
                    {
                        text: "Tốc độ trao đổi chất chậm.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_ĐDVPPNCVSV_L2_001. Những đại diện nào sau đây sử dụng hình thức dinh dưỡng hóa tự dưỡng?",
                image: null,
                statements: [
                    {
                        text: "Vi khuẩn Nitrate hóa.", correct: true
                    },
                    {
                        text: "Vi khuẩn lam.", correct: false
                    },
                    {
                        text: "Trùng roi.", correct: false
                    },
                    {
                        text: "Vi khuẩn oxy hóa hydrogen.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_ĐDVPPNCVSV_L3_001. Mỗi phát biểu dưới đây là đúng hay sai khi nói về đặc điểm của vi sinh vật?",

                statements: [
                    {
                        text: "Có kích thước lớn.", correct: false
                    },
                    {
                        text: "Có tỉ lệ S/V lớn.", correct: true
                    },
                    {
                        text: "Đều có khả năng tự dưỡng.", correct: false
                    },
                    {
                        text: "Sinh trưởng nhanh.", correct: true
                    }
                ]
            },
        ]
    },
    // Sinh trưởng và sinh sản VSV
    tfSTSSVSV: {
        level1: [
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

        ],
        level2: [
            {
                question: "DB_STVSSOVSV_L2_001. Các nhận định dưới đây về quần thể vi sinh vật là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Ở vi sinh vật, protein được tổng hợp bằng cách kết hợp giữa glycerol và acid béo.", correct: false
                    },
                    {
                        text: "Phân đôi là hình thức sinh sản của vi sinh vật, trong đó một tế bào mẹ phân chia thành hai tế bào con giống nhau.", correct: true
                    },
                    {
                        text: "Vi sinh vật có kích thước nhỏ, ưu thế của đặc điểm này là giúp vi sinh vật chuyển hóa các chất, sinh trưởng và sinh sản nhanh.", correct: true
                    },
                    {
                        text: "Trong môi trường nuôi cấy không liên tục quần thể vi sinh vật không trải qua pha suy vong.", correct: false
                    }
                ]
            },
            {
                question: "DB_STVSSOVSV_L2_002. Hình sau đây là một ví dụ về quá trình nhân lên của virus trong tế bào chủ, cho biết mỗi nhận định sau đây là đúng hay sai khi nói về quá trình này?",
                image: "https://nhantri.top/media/Grade10/ctnhanlenvr.png",
                statements: [
                    {
                        text: "Virus trong hình là thể thực khuẩn.", correct: true
                    },
                    {
                        text: "Hình ảnh trên mô tả chu kì tiềm tan ở virus.", correct: false
                    },
                    {
                        text: "Giai đoạn 2 là giai đoạn xâm nhập, trong giai đoạn này tất cả các bộ phận của virus được đưa vào trong tế bào vật chủ.", correct: false
                    },
                    {
                        text: "Giai đoạn 3 là giai đoạn tổng hợp các bộ phận của virus.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "...",

                statements: [
                    {
                        text: "Mối quan hệ sinh thái giữa loài chim và loài chuột là cạnh tranh khác loài.", correct: false
                    },
                    {
                        text: "Mèo rừng là loài chủ chốt trong quần xã.", correct: true
                    },
                    {
                        text: "Trong thí nghiệm 1, tổng số cá thể của quần xã đạt giá trị cao nhất khi quần xã đạt trạng thái ổn định.", correct: false
                    },
                    {
                        text: "Kết quả nghiên cứu cho thấy việc loại bỏ một loài có thể xác định được vai trò sinh thái của loài đó trong quần xã.", correct: true
                    }
                ]
            },
        ]
    },
    // Vai trò và ứng dụng của VSV
    tfVTUDVSV: {
        level1: [
            {
                question: "DB_VTVUDVSV_L1_001. Khi nói về quá trình sản xuất tương, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Quá trình sản xuất tương gồm 4 giai đoạn.", correct: false
                    },
                    {
                        text: "Cần bổ sung các loại mốc đen, xanh, hồng vào xôi nếp sau khi để nguội.", correct: false
                    },
                    {
                        text: "Trong giai đoạn ủ tương nên cho thêm muối ăn để tương không bị thối.", correct: true
                    },
                    {
                        text: "Loại nấm mốc thường được sử dụng để sản xuất tương là <em>Aspergillus oryzae</em>.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_VTVUDVSV_L2_001. Khi nói về vai trò của mốc vàng hoa cau <em>Aspergillus oryzae</em> trong sản xuất tương, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Tạo ra enzyme để thủy phân tinh bột và protein có trong đậu tương.", correct: true
                    },
                    {
                        text: "Làm cho tương có màu vàng như màu của nấm mốc.", correct: false
                    },
                    {
                        text: "Tạo độ pH thấp làm tương không bị thối.", correct: false
                    },
                    {
                        text: "Lên men tạo vị chua cho tương.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_VTVUDVSV_L3_001. Mỗi nhận định sau là đúng hay sai khi nói về cơ sở khoa học sản xuất phomat?",
                statements: [
                    {
                        text: "Vi khuẩn lactic lên men lactose làm đông tụ sữa.", correct: true
                    },
                    {
                        text: "Enzyme rennin lên men casein làm protein đông vón.", correct: false
                    },
                    {
                        text: "Enzyme rennin thủy phân casein làm protein đông vón.", correct: true
                    },
                    {
                        text: "Vi khuẩn lactic lên men protein trong sữa làm đông tụ sữa.", correct: false
                    }
                ]
            },
        ]
    },
    // Thực hành về VSV
    tfTHVSV: {
        level1: [
            {
                question: "DB_THVSV_L1_001. ...",
                image: null,
                statements: [
                    {
                        text: "Quá trình sản xuất tương gồm 4 giai đoạn.", correct: false
                    },
                    {
                        text: "Cần bổ sung các loại mốc đen, xanh, hồng vào xôi nếp sau khi để nguội.", correct: false
                    },
                    {
                        text: "Trong giai đoạn ủ tương nên cho thêm muối ăn để tương không bị thối.", correct: true
                    },
                    {
                        text: "Loại nấm mốc thường được sử dụng để sản xuất tương là <em>Aspergillus oryzae</em>.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_THVSV_L2_001. ...",
                image: null,
                statements: [
                    {
                        text: "Tạo ra enzyme để thủy phân tinh bột và protein có trong đậu tương.", correct: true
                    },
                    {
                        text: "Làm cho tương có màu vàng như màu của nấm mốc.", correct: false
                    },
                    {
                        text: "Tạo độ pH thấp làm tương không bị thối.", correct: false
                    },
                    {
                        text: "Lên men tạo vị chua cho tương.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_THVSV_L3_001. ...",
                statements: [
                    {
                        text: "Vi khuẩn lactic lên men lactose làm đông tụ sữa.", correct: true
                    },
                    {
                        text: "Enzyme rennin lên men casein làm protein đông vón.", correct: false
                    },
                    {
                        text: "Enzyme rennin thủy phân casein làm protein đông vón.", correct: true
                    },
                    {
                        text: "Vi khuẩn lactic lên men protein trong sữa làm đông tụ sữa.", correct: false
                    }
                ]
            },
        ]
    },
    // Khái quát về virus
    tfKQVR: {
        level1: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "Quá trình sản xuất tương gồm 4 giai đoạn.", correct: false
                    },
                    {
                        text: "Cần bổ sung các loại mốc đen, xanh, hồng vào xôi nếp sau khi để nguội.", correct: false
                    },
                    {
                        text: "Trong giai đoạn ủ tương nên cho thêm muối ăn để tương không bị thối.", correct: true
                    },
                    {
                        text: "Loại nấm mốc thường được sử dụng để sản xuất tương là <em>Aspergillus oryzae</em>.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "Tạo ra enzyme để thủy phân tinh bột và protein có trong đậu tương.", correct: true
                    },
                    {
                        text: "Làm cho tương có màu vàng như màu của nấm mốc.", correct: false
                    },
                    {
                        text: "Tạo độ pH thấp làm tương không bị thối.", correct: false
                    },
                    {
                        text: "Lên men tạo vị chua cho tương.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "...",
                statements: [
                    {
                        text: "Vi khuẩn lactic lên men lactose làm đông tụ sữa.", correct: true
                    },
                    {
                        text: "Enzyme rennin lên men casein làm protein đông vón.", correct: false
                    },
                    {
                        text: "Enzyme rennin thủy phân casein làm protein đông vón.", correct: true
                    },
                    {
                        text: "Vi khuẩn lactic lên men protein trong sữa làm đông tụ sữa.", correct: false
                    }
                ]
            },
        ]
    },

    // Virus

    tfVR: {
        level1: [
            {
                question: "DB_VR_L1_001. Cho các phát biều sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Virus viêm gan A, B, C lây chủ yếu qua đường hô hấp.", correct: false
                    },
                    {
                        text: "Con đường qua nhau thai là con đường lây lan bằng phương thức truyền dọc đối với người và động vật.", correct: true
                    },
                    {
                        text: "Vector truyền bệnh lùn xoắn lá ở lúa là ốc.", correct: false
                    },
                    {
                        text: "Vector gây bệnh vàng xoăn lá cà chua là ong.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB_VR_L2_001. Cho các phát biều sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Virus có khả năng gây bệnh rất nhanh.", correct: true
                    },
                    {
                        text: "Có hai phương thức chính lây truyền bệnh do virus ở người, động vật, thực vật, ...", correct: true
                    },
                    {
                        text: "Virus lây lan qua đường tiêu hóa gồm: viêm gan A, B, C, ...", correct: true
                    },
                    {
                        text: "Bệnh viêm phổi do virus gây ra là chủ yếu.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB_VR_L3_001. Cho các phát biều sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Phage kí sinh ở E.coli là loại virus thuộc nhóm virus kí sinh ở người và động vật.", correct: false
                    },
                    {
                        text: "Virus kí sinh ở thực vật lan sang các tế bào khác thông qua cấu trúc cầu sinh chất.", correct: true
                    },
                    {
                        text: "Bệnh đốm trắng ở tôm không lây qua con đường từ tôm mẹ sang con.", correct: true
                    },
                    {
                        text: "Peroxisome là hạt có mặt trong các tế bào nhân thực hiếu khí, có vật chất di truyền riêng.", correct: false
                    }
                ]
            },
            {
                question: "DB_VR_L3_002 [30-4-03]. Cho các phát biều sau, phát biểu nào đúng, phát biểu nào sai?",
                image: null,
                statements: [
                    {
                        text: "Giảm phân là sự phân bào làm giảm số lượng nhiễm sắc thể xảy ra ở giảm phân II.", correct: false
                    },
                    {
                        text: "Hiện tượng thực bào thường thấy ở vi khuẩn.", correct: false
                    },
                    {
                        text: "Trong suốt quá trình nhiễm phage (thực khuẩn thể) đến giai đoạn tổng hợp tất cả các thành phần của phage, người ta không tìm thấy phage trong tế bào vi khuẩn.", correct: true
                    },
                    {
                        text: "Lang ben là bệnh do virus gây ra.", correct: false
                    }
                ]
            },
        ]
    },

    // Mở đầu

    saMD: {
        level1: [
            {
                question: "TB_MĐ_L1_001. Sinh học nghiên cứu bao nhiêu đối tượng trong số các đối tượng sau: đồ dùng học tập, vi khuẩn, quần áo, nấm, động vật, thực vật, địa hình, con người?",
                answer: "5"
            },
            {
                question: "TB_MĐ_L1_002. Có bao nhiêu loại kính hiển vi?",
                answer: "2"
            },

            // Thêm các câu hỏi MĐ level 1 khác...
        ],
        level2: [
            {
                question: "TB_MĐ_L2_001. Cấu tạo cơ bản của tế bào gồm có mấy thành phần chính?",
                answer: "3"
            },

            // Thêm các câu hỏi MĐ level 2...
        ],
        level3: [
            {
                question: "TB_MĐ_L3_001. Trong số các trang bị sau, có bao nhiêu trang bị cá nhân cần thiết khi làm việc trong phòng thí nghiệm: ủng, áo choàng, cuốc, găng tay, sẻng, kính bảo hộ, mặt nạ.",
                answer: "4"
            },

            // Thêm các câu hỏi MĐ level 3...
        ],
        level4: [
            {
                "question": "TB_MĐ_L4_001. Môn sinh học là gì?",
                "answer": "Môn sinh học là môn khoa học nghiên cứu về sự sống và các hiện tượng liên quan đến sự sống."
            },
            {
                "question": "TB_MĐ_L4_002. Mục tiêu của môn sinh học là gì?",
                "answer": "Mục tiêu là giúp học sinh hiểu biết về các quá trình sống và các sinh vật."
            },
            {
                "question": "TB_MĐ_L4_003. Sinh học nghiên cứu những đối tượng nào?",
                "answer": "Sinh học nghiên cứu các sinh vật sống như vi khuẩn, động vật, thực vật, và con người."
            },
            {
                "question": "TB_MĐ_L4_004. Sinh học là môn khoa học như thế nào?",
                "answer": "Sinh học là một môn khoa học thực nghiệm, dựa trên nghiên cứu và quan sát."
            },

            {
                "question": "TB_MĐ_L4_005. Sinh học có ảnh hưởng như thế nào đến cuộc sống con người?",
                "answer": "Sinh học giúp phát triển y học, nông nghiệp và bảo vệ môi trường."
            },
            {
                "question": "TB_MĐ_L4_006. Sinh học có mối liên hệ gì với các môn học khác?",
                "answer": "Sinh học có mối liên hệ với hóa học, vật lí, và môi trường."
            },
            {
                "question": "TB_MĐ_L4_007. Môn sinh học giúp ích gì trong việc phát triển nền y học?",
                "answer": "Sinh học giúp nghiên cứu các bệnh lí và phương pháp chữa trị."
            },
            {
                "question": "TB_MĐ_L4_008. Chức năng của tế bào là gì?",
                "answer": "Tế bào thực hiện các chức năng sống như trao đổi chất, sinh sản và phản ứng với môi trường."
            },
            {
                "question": "TB_MĐ_L4_009. Môi trường là gì trong sinh học?",
                "answer": "Môi trường là tất cả các yếu tố tự nhiên ảnh hưởng đến sự sống của sinh vật."
            },
            {
                "question": "TB_MĐ_L4_010. Các sinh vật có đặc điểm gì chung?",
                "answer": "Tất cả sinh vật đều có khả năng sinh sản, trao đổi chất và đáp ứng với kích thích từ môi trường."
            },

            {
                "question": "TB_MĐ_L4_011. Khái niệm 'hệ sinh thái' là gì?",
                "answer": "Hệ sinh thái là tập hợp các sinh vật sống và môi trường sống của chúng."
            },
            {
                "question": "TB_MĐ_L4_012. Di truyền học nghiên cứu gì?",
                "answer": "Di truyền học nghiên cứu sự di truyền các đặc tính từ thế hệ này sang thế hệ khác."
            },
            {
                "question": "TB_MĐ_L4_013. Sinh học giúp gì trong bảo vệ môi trường?",
                "answer": "Sinh học giúp nghiên cứu và bảo tồn các loài sinh vật và hệ sinh thái."
            },
            {
                "question": "TB_MĐ_L4_014. Khái niệm 'sinh sản' trong sinh học là gì?",
                "answer": "Sinh sản là quá trình tạo ra cá thể mới từ cá thể sinh vật mẹ."
            },
            {
                "question": "TB_MĐ_L4_015. Các yếu tố ảnh hưởng đến sự sống của sinh vật là gì?",
                "answer": "Các yếu tố gồm nhiệt độ, ánh sáng, nước và thức ăn."
            },
            {
                "question": "TB_MĐ_L4_016. Sự phát triển của sinh học ảnh hưởng như thế nào đến nông nghiệp?",
                "answer": "Sinh học giúp cải thiện giống cây trồng và vật nuôi, tăng năng suất."
            },

            {
                "question": "TB_MĐ_L4_017. Quá trình quang hợp có vai trò gì đối với sinh vật?",
                "answer": "Quá trình quang hợp giúp thực vật sản xuất ra năng lượng từ ánh sáng mặt trời."
            },
            {
                "question": "TB_MĐ_L4_018. Vai trò của enzyme trong cơ thể là gì?",
                "answer": "Enzyme là các chất xúc tác giúp tăng tốc các phản ứng sinh hóa trong cơ thể."
            },
            {
                "question": "TB_MĐ_L4_019. Khái niệm sinh thái học là gì?",
                "answer": "Sinh thái học nghiên cứu mối quan hệ giữa sinh vật và môi trường sống."
            },
            {
                "question": "TB_MĐ_L4_020. vQuá trình hô hấp tế bào là gì?",
                "answer": "Hô hấp tế bào là quá trình chuyển hóa glucose thành năng lượng dưới dạng ATP."
            },

            {
                "question": "TB_MĐ_L4_021. Khái niệm 'sinh học phân tử' là gì?",
                "answer": "Sinh học phân tử nghiên cứu cấu trúc và chức năng của các phân tử trong tế bào sống."
            },
            {
                "question": "TB_MĐ_L4_022. Tại sao phải học sinh học?",
                "answer": "Học sinh học giúp hiểu rõ về sự sống và bảo vệ sức khỏe con người."
            },
            {
                "question": "TB_MĐ_L4_023. Cấu tạo cơ bản của tế bào gồm những thành phần nào?",
                "answer": "Tế bào gồm màng tế bào, tế bào chất và nhân tế bào."
            },
            {
                "question": "TB_MĐ_L4_024. Mối quan hệ giữa sinh vật và môi trường như thế nào?",
                "answer": "Sinh vật và môi trường có mối quan hệ tương tác mật thiết, ảnh hưởng lẫn nhau."
            },
            {
                "question": "TB_MĐ_L4_025. Các nguyên tố hóa học nào cần thiết cho sự sống?",
                "answer": "Các nguyên tố như carbon, hydro, oxygen, nitrogen, và phosphorus cần thiết cho sự sống."
            },
        ]

    },
    saPPNCHT: {
        level1: [

            {
                "question": "TB_PPNCVHTSH_L1_001. Có bao nhiêu phương pháp phổ biến được sử dụng trong nghiên cứu sinh học?",
                "answer": "3"
            },
            {
                "question": "TB_PPNCVHTSH_L1_002. Có bao nhiêu ý sau đây là ứng dụng của Tin sinh học?<br />(1) So sánh hệ gene.<br />(2) So sánh trình tự protein.<br />(3) Xác định quan hệ họ hàng giữa các loài.<br />(4) Xây dựng ngân hàng sinh học.",
                "answer": "4"
            },

            // Thêm các câu hỏi PPNC và HT môn Sinh học level 1 khác...
        ],
        level2: [
            {
                "question": "TB_PPNCVHTSH_L2_001. Cho các hình thức: ghi trên giấy, ghi trực tuyến, tự ghi nhớ, ghi âm và quay video. Có thể lưu giữ kết quả quan sát bằng bao nhiêu hình thức kể trên?",
                "answer": "4"
            },

            // Thêm các câu hỏi PPNC và HT môn Sinh học level 2...
        ],
        level3: [
            {
                "question": "TB_PPNCVHTSH_L3_001. Có các dụng cụ: mô hình, ống nghe, kính hiển vi và Micropipette. Có bao nhiêu dụng cụ dùng trong nghiên cứu và học tập môn sinh học?",
                "answer": "3"
            },

            // Thêm các câu hỏi PPNC và HT môn Sinh học level 3...
        ],
        level4: [
            {
                "question": "TB_PPNCVHTSH_L4_001. Phương pháp đầu tiên trong nghiên cứu sinh học là gì?",
                "answer": "Phương pháp quan sát."
            },
            {
                "question": "TB_PPNCVHTSH_L4_002. Đối tượng quan sát trong nghiên cứu sinh học có thể là gì?",
                "answer": "Các sinh vật và quá trình sống."
            },
            {
                "question": "TB_PPNCVHTSH_L4_003. Công cụ nào được sử dụng trong phương pháp quan sát?",
                "answer": "Giác quan và thiết bị hỗ trợ như kính hiển vi, máy ghi âm."
            },

            {
                "question": "TB_PPNCVHTSH_L4_004. Các bước thực hiện phương pháp quan sát bao gồm những gì?",
                "answer": "Lựa chọn đối tượng, lựa chọn công cụ quan sát, và ghi chép số liệu."
            },
            {
                "question": "TB_PPNCVHTSH_L4_005. Mục đích của phương pháp làm việc trong phòng thí nghiệm là gì?",
                "answer": "Đảm bảo an toàn và kết quả chính xác trong các thí nghiệm."
            },

            {
                "question": "TB_PPNCVHTSH_L4_006. Những trang bị cá nhân nào cần thiết khi làm việc trong phòng thí nghiệm?",
                "answer": "Áo choàng, găng tay, kính bảo hộ, mặt nạ."
            },
            {
                "question": "TB_PPNCVHTSH_L4_007. Phương pháp giải phẫu giúp hiểu rõ điều gì trong sinh học?",
                "answer": "Cấu trúc cơ thể và các bộ phận của tế bào."
            },

            {
                "question": "TB_PPNCVHTSH_L4_008. Một số phương pháp thực nghiệm khoa học trong sinh học là gì?",
                "answer": "Phân loại sinh vật, tách chiết, nuôi cấy."
            },
            {
                "question": "TB_PPNCVHTSH_L4_009. Phương pháp nghiên cứu phân loại sinh vật bao gồm những gì?",
                "answer": "Định danh hình thái, phân tích gene, và phân lập."
            },
            {
                "question": "TB_PPNCVHTSH_L4_010. Phương pháp nuôi cấy sử dụng để làm gì?",
                "answer": "Nuôi cấy vi khuẩn, mô tế bào, động vật và thực vật."
            },
            {
                "question": "TB_PPNCVHTSH_L4_011. Kính hiển vi dùng để làm gì trong nghiên cứu sinh học?",
                "answer": "Quan sát các vật thể nhỏ mà mắt thường không thể thấy."
            },
            {
                "question": "TB_PPNCVHTSH_L4_012. Có những loại kính hiển vi nào?",
                "answer": "Hai loại Kính hiển vi quang học và kính hiển vi điện tử."
            },
            {
                "question": "TB_PPNCVHTSH_L4_013. Máy li tâm được sử dụng trong kĩ thuật nào?",
                "answer": "Phân đoạn tế bào."
            },
            {
                "question": "TB_PPNCVHTSH_L4_014. Máy li tâm tách bào quan dựa trên yếu tố gì?",
                "answer": "Tách dựa trên khối lượng của các bào quan."
            },
            {
                "question": "TB_PPNCVHTSH_L4_015. Quá trình sử dụng máy li tâm gồm những bước gì?",
                "answer": "Phá vỡ tế bào, li tâm, phân tách các bào quan."
            },
            {
                "question": "TB_PPNCVHTSH_L4_016. Các thiết bị đơn giản nào thường được sử dụng trong môn Sinh học?",
                "answer": "Kính lúp, pipet, ống hút."
            },
            {
                "question": "TB_PPNCVHTSH_L4_017. Tại sao việc thu thập dữ liệu trong quan sát cần phải kiên trì và thận trọng?",
                "answer": "Để đảm bảo tính chính xác và đáng tin cậy của dữ liệu."
            },
            {
                "question": "TB_PPNCVHTSH_L4_018. Làm thế nào để đặt câu hỏi trong quá trình nghiên cứu khoa học?",
                "answer": "Dựa trên số liệu thu thập được từ quan sát."
            },
            {
                "question": "TB_PPNCVHTSH_L4_019. Tại sao ghi chép số liệu quan sát là quan trọng?",
                "answer": "Để có dữ liệu khách quan và có thể xử lý bằng phương pháp thống kê."
            },
            {
                "question": "TB_PPNCVHTSH_L4_020. Cần lưu ý gì khi làm việc với hóa chất dễ bay hơi trong phòng thí nghiệm?",
                "answer": "Làm việc ở nơi có tủ hút khí độc hoặc nơi thoáng khí."
            },
            {
                "question": "TB_PPNCVHTSH_L4_021. Cách nào giúp đảm bảo an toàn cháy nổ trong phòng thí nghiệm?",
                "answer": "Tuân thủ quy tắc pha hóa chất và kiểm tra thiết bị an toàn."
            },
            {
                "question": "TB_PPNCVHTSH_L4_022. Tại sao cần ghi nhật kí khi vận hành thiết bị phòng thí nghiệm?",
                "answer": "Để theo dõi tình trạng hoạt động và tránh hư hỏng thiết bị."
            },
            {
                "question": "TB_PPNCVHTSH_L4_023. Cắt mẫu mô thành lát mỏng trong phương pháp tiêu bản tế bào để làm gì?",
                "answer": "Để quan sát tế bào dưới kính hiển vi."
            },
            {
                "question": "TB_PPNCVHTSH_L4_024. Phương pháp tiêu bản tươi giúp quan sát cái gì?",
                "answer": "Quan sát nhiễm sắc thể của tế bào."
            },
            {
                "question": "TB_PPNCVHTSH_L4_025. Phương pháp thực nghiệm khoa học được thực hiện ở đâu?",
                "answer": "Thực hiện tại thực địa hoặc trong phòng thí nghiệm."
            },
            // Thêm các câu hỏi PPNC và HT môn Sinh học level 3...
        ]

    },
    saCCDTCS: {
        level1: [
            {
                "question": "TB_CCĐTCS_L1_001. Có bao nhiêu cấp độ tổ chức sống cơ bản?",
                "answer": "5 (tế bào, cơ thể, quần thể, quần xã và hệ sinh thái)"
            },
            {
                "question": "TB_CCĐTCS_L1_002. Dựa vào đặc điểm chung, các loài sinh vật được chia thành bao nhiêu lãnh giới?",
                "answer": "3 (vi khuẩn, vi khuẩn cổ và nhân thực)"
            },
            // Thêm các câu hỏi SA level 1 khác...
        ],
        level2: [

            {
                "question": "TB_CCĐTCS_L2_001. Cho các tổ chức sống: tim, não, phổi, lục lạp và ribosome.Có bao nhiêu tổ chức sống là bào quan?",
                "answer": "2 (lục lạp và ribosome)"
            },



            // Thêm các câu hỏi SA level 2...
        ],
        level3: [
            {
                "question": "TB_CCĐTCS_L3_001. Sự đa dạng của sinh giới thể hiện ở bao nhiêu đặc điểm sau đây?<br />(1) Đa dạng về sinh quyển.<br />(2) Đa dạng về hệ sinh thái.<br />(3) Đa dạng về loài, về nguồn gene.<br />(4) Đa dạng về lưới và chuỗi thức ăn.",
                "answer": "3 (2, 3, 4)"
            },
            {
                "question": "TB_CCĐTCS_L3_002. Có bao nhiêu đặc điểm sau đây chỉ có ở tổ chức sống mà không có ở vật vô sinh?<br />(1) Liên tục tiến hóa.<br />(2) Tổ chức theo nguyên tắc thứ bậc.<br />(3) Có khả năng cảm ứng và vận động.<br />(4) Là hệ mở, có khả năng tự điều chỉnh.<br />(5) Là hệ kín, có tính ổn định và bền vững.<br />(6) Thường xuyên trao đổi chất với môi trường.",
                "answer": "5 (trừ 5)"
            },
            // Thêm các câu hỏi SA level 3...
        ],
        level4: [
            {
                "question": "TB_CCĐTCS_L4_001. Cấp tổ chức sống cơ bản nhất là gì?",
                "answer": "Tế bào."
            },
            {
                "question": "TB_CCĐTCS_L4_002. Cấp độ tổ chức sống cao nhất trên Trái Đất là gì?",
                "answer": "Sinh quyển."
            },
            {
                "question": "TB_CCĐTCS_L4_003. Cấp độ tổ chức nào bao gồm nhiều cơ thể cùng loài sống cùng một khu vực?",
                "answer": "Quần thể."
            },
            {
                "question": "TB_CCĐTCS_L4_004. Tế bào được cấu tạo từ những gì?",
                "answer": "Bào quan."
            },
            {
                "question": "TB_CCĐTCS_L4_005. Cấp độ tổ chức sống lớn hơn tế bào là gì?",
                "answer": "Mô."
            },
            {
                "question": "TB_CCĐTCS_L4_006. Cấp độ tổ chức sống nào là một hệ thống gồm nhiều cơ quan phối hợp với nhau?",
                "answer": "Hệ cơ quan."
            },
            {
                "question": "TB_CCĐTCS_L4_007. Quần xã sinh vật là gì?",
                "answer": "Nhiều quần thể khác loài sống cùng một khu vực."
            },
            {
                "question": "TB_CCĐTCS_L4_008. Hệ sinh thái là gì?",
                "answer": "Tương tác giữa quần xã sinh vật và môi trường sống."
            },
            {
                "question": "TB_CCĐTCS_L4_009. Mọi cấp độ tổ chức sống đều có khả năng gì để tồn tại?",
                "answer": "Tự điều chỉnh."
            },
            {
                "question": "TB_CCĐTCS_L4_010. Cơ thể là cấp độ tổ chức của sinh vật đơn bào hay đa bào?",
                "answer": "Đa bào."
            },
            {
                "question": "TB_CCĐTCS_L4_011. Ví dụ của cấp độ phân tử là gì?",
                "answer": "DNA."
            },
            {
                "question": "TB_CCĐTCS_L4_012. Chức năng của mô là gì?",
                "answer": "Thực hiện chức năng sinh học chuyên biệt."
            },
            {
                "question": "TB_CCĐTCS_L4_013. Hệ cơ quan tiêu hóa thuộc cấp độ nào?",
                "answer": "Hệ cơ quan."
            },
            {
                "question": "TB_CCĐTCS_L4_014. Sinh quyển bao gồm những gì?",
                "answer": "Tất cả hệ sinh thái trên Trái Đất."
            },
            {
                "question": "TB_CCĐTCS_L4_015. Cấp độ tổ chức nào được hình thành từ các bào quan?",
                "answer": "Tế bào."
            },

            {
                "question": "TB_CCĐTCS_L4_016. Các cấp độ tổ chức sống có tổ chức theo nguyên tắc gì?",
                "answer": "Thứ bậc."
            },
            {
                "question": "TB_CCĐTCS_L4_017. Quần xã sinh vật hình thành từ những gì?",
                "answer": "Các quần thể sinh vật."
            },

            {
                "question": "TB_CCĐTCS_L4_018. Mối quan hệ giữa các cấp độ tổ chức sống như thế nào?",
                "answer": "Cấp trên được hình thành từ cấp dưới."
            },
            {
                "question": "TB_CCĐTCS_L4_019. Lấy ví dụ về cấp độ tổ chức bào quan trong tế bào.",
                "answer": "Ti thể."
            },

            {
                "question": "TB_CCĐTCS_L4_020. Hệ sinh thái gồm những thành phần nào?",
                "answer": "Sinh vật và môi trường."
            },
            {
                "question": "TB_CCĐTCS_L4_021. Cấp độ tổ chức sống nào tồn tại độc lập và có khả năng thích nghi?",
                "answer": "Cơ thể."
            },
            {
                "question": "TB_CCĐTCS_L4_022. Cấp độ tổ chức nào bao gồm hệ cơ quan?",
                "answer": "Cơ thể."
            },
            {
                "question": "TB_CCĐTCS_L4_023. Quần thể là cấp độ tổ chức ở giữa cấp độ cá thể và cấp độ tổ chức nào?",
                "answer": "Quần xã."
            },
            {
                "question": "TB_CCĐTCS_L4_024. Tại sao nói tổ chức sống là hệ thống mở, tự điều chỉnh và liên tục tiến hóa?",
                "answer": "Hệ thống mở vì mọi cấp độ tổ chức sống đều không ngừng trao đổi vật chất và năng lượng với môi trường, luôn có sự tương tác giữa cơ thể với môi trường (Cơ thể ↔ MT); Tự điều chỉnh vì mọi cấp độ tổ chức sống đều có các cơ chế tự điều chỉnh, đảm bảo duy trì và điều hòa sự cân bằng động trong hệ thống sống. Ví dụ ở người, nhiệt độ cơ thể 37<sup>o</sup>C; [NaCl] = 0, 9%,… Thế giới sống liên tục tiến hóa vì thế giới sinh vật liên tục sinh sôi nảy nở và không ngừng tiến hóa → vô cùng phong phú, đa dạng trong sự thống nhất. Nguyên nhân là do tất cả các sinh vật trên Trái Đất đều có đặc điểm chung do có chung nguồn gốc (tính thống nhất). Tuy nhiên, do sự phát sinh những biến dị di truyền và sự thay đổi của điều kiện môi trường → thế giới sống đa dạng và phong phú."
            },
            {
                "question": "TB_CCĐTCS_L4_025. Cấp độ tổ chức nào là đơn vị tiến hóa cơ sở?",
                "answer": "Quần thể."
            },
            {
                "question": "TB_CCĐTCS_L4_026. Cấp độ tổ chức nào thực hiện các chức năng sống cơ bản?",
                "answer": "Cơ thể."
            },

        ]

    },
    // Các nguyên tố hóa học và nước
    saCNTHHVN: {
        level1: [
            {
                "question": "TB_CNTHHVN_L1_001. ...",
                "answer": "..."
            },
            
            // Thêm các câu hỏi SA Mendel level 1 khác...
        ],
        level2: [
            {
                question: "TB_CNTHHVN_L2_001. Trong phân tử nước có mấy nguyên tử hydrogen?",
                answer: "2"
            },
            {
                question: "TB_CNTHHVN_L2_002. Trong phân tử nước có mấy nguyên tử oxygen?",
                answer: "1"
            },
            {
                question: "TB_CNTHHVN_L2_003. Trong phân tử đường glucose có mấy nguyên tử oxygen?",
                answer: "6"
            },
            {
                question: "TB_CNTHHVN_L2_004. Trong phân tử đường glucose có mấy nguyên tử hydrogen?",
                answer: "12"
            },
            {
                question: "TB_CNTHHVN_L2_005. Trong phân tử đường glucose có mấy nguyên tử carbon?",
                answer: "6"
            },
            // Thêm các câu hỏi SA Mendel level 2...
        ],
        level3: [
            {
                "question": "TB_CNTHHVN_L1_001. ...",
                "answer": "..."
            },
           
            // Thêm các câu hỏi SA Mendel level 3...
        ],
        level4: [
            {
                "question": "TB_CNTHHVN_L4_001. Ai là những nhà sinh học đầu tiên đưa ra học thuyết tế bào?",
                "answer": "Matthias Jakob Schleiden và Theodor Schwann."
            },
            {
                "question": "TB_CNTHHVN_L4_002. Tất cả sinh vật đều được cấu tạo từ yếu tố nào?",
                "answer": "Tất cả sinh vật đều được cấu tạo từ một hoặc nhiều tế bào."
            },
            {
                "question": "TB_CNTHHVN_L4_003. Tế bào chỉ được sinh ra từ đâu?",
                "answer": "Tế bào chỉ sinh ra từ sự phân chia các tế bào có trước."
            },
            {
                "question": "TB_CNTHHVN_L4_004. Các quá trình nào diễn ra trong tế bào?",
                "answer": "Các quá trình trao đổi chất, chuyển hóa năng lượng, truyền tin và di truyền diễn ra trong tế bào."
            },
            {
                "question": "TB_CNTHHVN_L4_005. Có bao nhiêu % số lượng nguyên tố hóa học trong tự nhiên là thiết yếu cho sinh vật?",
                "answer": "Có khoảng 20 - 25% các nguyên tố hóa học trong tự nhiên là thiết yếu cho sinh vật."
            },
            {
                "question": "TB_CNTHHVN_L4_006. Có sự khác biệt gì giữa các tế bào của các loài sinh vật khác nhau?",
                "answer": "Có sự khác biệt về hàm lượng và thành phần các nguyên tố hóa học."
            },
            {
                "question": "TB_CNTHHVN_L4_007. Các nguyên tố trong cơ thể sinh vật được chia thành những nhóm nào?",
                "answer": "Hai nhóm nguyên tố đại lượng và nguyên tố vi lượng."
            },
            {
                "question": "TB_CNTHHVN_L4_008. Thiếu nguyên tố nào có thể gây bệnh bướu cổ ở người?",
                "answer": "Thiếu iodin có thể gây bệnh bướu cổ."
            },
            {
                "question": "TB_CNTHHVN_L4_009. Thiếu nguyên tố nào gây bệnh vàng lá ở cây?",
                "answer": "Thiếu sắt (Fe) gây bệnh vàng lá ở cây."
            },
            {
                "question": "TB_CNTHHVN_L4_010. Tế bào có vai trò gì đối với cơ thể sống?",
                "answer": "Tế bào là đơn vị cấu trúc và chức năng cơ bản của cơ thể sống."
            },
            {
                "question": "TB_CNTHHVN_L4_011. Vai trò của nguyên tố carbon trong tế bào là gì?",
                "answer": "Carbon là thành phần quan trọng trong cấu tạo tế bào và hình thành các hợp chất hữu cơ."
            },
            {
                "question": "TB_CNTHHVN_L4_012. Nguyên tử carbon có bao nhiêu electron hóa trị?",
                "answer": "Nguyên tử carbon có 4 electron hóa trị."
            },
            {
                "question": "TB_CNTHHVN_L4_013. Nguyên tử carbon có khả năng gì đặc biệt trong cấu tạo tế bào?",
                "answer": "Tạo liên kết cộng hóa trị với các nguyên tử khác để tạo thành các hợp chất hữu cơ đa dạng."
            },
            {
                "question": "TB_CNTHHVN_L4_014. Khung hydrocarbon được tạo thành như thế nào?",
                "answer": "Được tạo thành khi nguyên tử carbon liên kết với các nguyên tử hydrogen."
            },
            {
                "question": "TB_CNTHHVN_L4_015. Nước có tính chất gì đặc biệt?",
                "answer": "Nước có tính phân cực, sức căng bề mặt lớn, nhiệt dung riêng cao và nhiệt bay hơi cao."
            },
            {
                "question": "TB_CNTHHVN_L4_016. Tại sao nước có sức căng bề mặt lớn?",
                "answer": "Do các phân tử nước liên kết với nhau bằng liên kết hydrogen."
            },
            {
                "question": "TB_CNTHHVN_L4_017. Nước có tác dụng gì trong các phản ứng chuyển hóa vật chất?",
                "answer": "Nước là nguyên liệu và môi trường cho các phản ứng chuyển hóa vật chất trong tế bào."
            },
            {
                "question": "TB_CNTHHVN_L4_018. Tính phân cực của nước giúp gì cho sinh vật?",
                "answer": "Giúp nước hòa tan các chất cần thiết cho tế bào và hỗ trợ các phản ứng sinh hóa trong cơ thể."
            },
            {
                "question": "TB_CNTHHVN_L4_019. Phân tử nước bao gồm những nguyên tử nào?",
                "answer": "Phân tử nước bao gồm một nguyên tử oxygen và hai nguyên tử hydrogen."
            },
                        {
                "question": "TB_CNTHHVN_L4_020. Cấu trúc của phân tử nước có gì đặc biệt?",
                "answer": "Hình chóp, với hai nguyên tử hydrogen liên kết với một nguyên tử oxygen."
            },
            {
                "question": "TB_CNTHHVN_L4_021. Tại sao nước có khả năng hòa tan nhiều chất?",
                "answer": "Vì nước có tính phân cực, nên nó có thể hòa tan nhiều chất phân cực và ion."
            },
            {
                "question": "TB_CNTHHVN_L4_022. Nước có vai trò gì trong việc duy trì cấu trúc phân tử?",
                "answer": "Nước giúp định hình cấu trúc không gian của nhiều phân tử hữu cơ trong tế bào."
            },
            {
                "question": "TB_CNTHHVN_L4_023. Lượng nước trong cơ thể sống có vai trò gì?",
                "answer": "Nước là thành phần chủ yếu cấu tạo nên tế bào và cơ thể sống."
            },
            {
                "question": "TB_CNTHHVN_L4_024. Vai trò của nước đối với các enzyme là gì?",
                "answer": "Nước giúp duy trì hình dạng của các enzyme và là môi trường cho các phản ứng enzyme."
            },
            {
                "question": "TB_CNTHHVN_L4_025. Nguyên tử nào trong phân tử nước có tính hút điện mạnh hơn?",
                "answer": "Nguyên tử oxygen có tính hút điện mạnh hơn nguyên tử hydrogen."
            },
            // Thêm các câu hỏi SA Mendel level 3...
        ]

    },
    // Các đại phân tử hữu cơ

    saCDPTHC: {
        level1: [
            {
                question: "TB_CĐPTHC_L1_001. Ghép tên phân tử với đặc điểm của phân tử đó.",
                image: "https://nhantri.top/media/Grade10/ghepnoidpthc.png",
                answer: "a_3; b_4; c_1; d_2; e_5"
            },
            {
                question: "TB_CĐPTHC_L1_002. Có mấy phân tử hữu cơ chính trong tế bào?",
                answer: "4"
            },
            {
                question: "TB_CĐPTHC_L1_003. Carbohydrate có mấy loại?",
                answer: "3"
            },
            {
                question: "TB_CĐPTHC_L1_004. Protein có mấy bậc cấu trúc?",
                answer: "4"
            },
            {
                question: "TB_CĐPTHC_L1_005. Có mấy loại nucleic acid?",
                answer: "2"
            },
            {
                question: "TB_CĐPTHC_L1_006. Có mấy loại RNA?",
                answer: "3"
            },
            {
                "question": "TB_CĐPTHC_L1_007. Phân tử sinh học là gì?",
                "answer": "Các phân tử hữu cơ tồn tại và tham gia vào các hoạt động sống trong tế bào."
            },
            {
                "question": "TB_CĐPTHC_L1_008. Các phân tử sinh học chính trong tế bào là gì?",
                "answer": "Các phân tử sinh học chính là protein, lipid, carbohydrate và nucleic acid."
            },
            {
                "question": "TB_CĐPTHC_L1_009. Đặc điểm chung của các phân tử sinh học là gì?",
                "answer": "Kích thước lớn, cấu tạo từ nhiều đơn phân, chủ yếu chứa carbon và hydrogen."
            },
            {
                "question": "TB_CĐPTHC_L1_010. Carbohydrate là gì?",
                "answer": "Hợp chất hữu cơ cấu tạo từ carbon, hydrogen và oxygen với tỉ lệ 1:2:1."
            },
            {
                "question": "TB_CĐPTHC_L1_011. Các phân tử nào tham gia vào việc tổng hợp protein trong tế bào?",
                "answer": "mRNA, tRNA và ribosome tham gia vào quá trình tổng hợp protein."
            },
            {
                "question": "TB_CĐPTHC_L1_012. Đơn phân chủ yếu của carbohydrate là gì?",
                "answer": "Đơn phân chủ yếu của carbohydrate là glucose, fructose và galactose."
            },
            {
                "question": "TB_CĐPTHC_L1_013. Carbohydrate có những loại nào?",
                "answer": "Carbohydrate có ba loại: đường đơn, đường đôi và đường đa."
            },
            {
                "question": "TB_CĐPTHC_L1_014. Chức năng của carbohydrate trong tế bào là gì?",
                "answer": "Carbohydrate cung cấp năng lượng cho tế bào và cơ thể."
            },
            {
                "question": "TB_CĐPTHC_L1_015. Lipid là gì?",
                "answer": "Nhóm chất hữu cơ cấu tạo từ carbon, hydrogen và oxygen, thường có tính kị nước."
            },
            {
                "question": "TB_CĐPTHC_L1_016. Mỡ và dầu khác nhau như thế nào?",
                "answer": "Mỡ là chất béo chứa acid béo no, rắn, còn dầu chứa acid béo không no, lỏng."
            },
            {
                "question": "TB_CĐPTHC_L1_017. Phospholipid có cấu tạo như thế nào?",
                "answer": "Một phân tử glycerol, hai acid béo và một nhóm phosphate."
            },
            {
                "question": "TB_CĐPTHC_L1_018. Steroid là gì?",
                "answer": "Một loại lipid không chứa acid béo, có cấu trúc gồm 4 vòng carbon liên kết với nhau."
            },
            {
                "question": "TB_CĐPTHC_L1_019. Chức năng của cholesterol trong cơ thể là gì?",
                "answer": "Cholesterol tham gia vào cấu trúc màng tế bào."
            },
            {
                "question": "TB_CĐPTHC_L1_020. Carotenoid là gì?",
                "answer": "Sắc tố màu vàng cam trong thực vật, có thể chuyển thành vitamin A trong cơ thể."
            },
            {
                "question": "TB_CĐPTHC_L1_021. Protein là gì?",
                "answer": "Hợp chất hữu cơ cấu tạo từ amino acid, tham gia vào nhiều chức năng sinh lý."
            },
            {
                "question": "TB_CĐPTHC_L1_022. Chức năng chính của protein là gì?",
                "answer": "Tham gia cấu trúc tế bào, xúc tác, bảo vệ, vận động, tiếp nhận thông tin và điều hòa."
            },
            {
                "question": "TB_CĐPTHC_L1_023. Protein được cấu tạo như thế nào?",
                "answer": "Cấu tạo từ các chuỗi amino acid liên kết với nhau bằng liên kết peptide."
            },
            {
                "question": "TB_CĐPTHC_L1_024. Amino acid là gì?",
                "answer": "Đơn phân của protein, gồm một nhóm amino, nhóm carboxyl và một chuỗi bên."
            },
            {
                "question": "TB_CĐPTHC_L1_025. Có khoảng bao nhiêu loại amino acid tham gia cấu tạo protein?",
                "answer": "Có 20 loại amino acid tham gia cấu tạo protein."
            },
            {
                "question": "TB_CĐPTHC_L1_026. Bậc cấu trúc thứ nhất của protein là gì?",
                "answer": "Bậc 1 của protein là trình tự các amino acid trong chuỗi polypeptide."
            },
            {
                "question": "TB_CĐPTHC_L1_027. Biến tính protein là gì?",
                "answer": "Hiện tượng protein mất cấu trúc không gian và chức năng do thay đổi điều kiện môi trường."
            },
            {
                "question": "TB_CĐPTHC_L1_028. Nucleic acid là gì?",
                "answer": "Là các phân tử đại phân tử (DNA và RNA), lưu trữ và truyền đạt thông tin di truyền."
            },
            {
                "question": "TB_CĐPTHC_L1_029. DNA có cấu trúc như thế nào?",
                "answer": "Xoắn kép, cấu tạo từ hai chuỗi polynucleotide liên kết với nhau bằng liên kết hydrogen."
            },
            {
                "question": "TB_CĐPTHC_L1_030. Chức năng của DNA là gì?",
                "answer": "DNA mang, bảo quản và truyền đạt thông tin di truyền trong tế bào."
            },
            {
                "question": "TB_CĐPTHC_L1_031. Chức năng của mRNA là gì?",
                "answer": "mRNA mang thông tin di truyền từ DNA đến ribosome để tổng hợp protein."
            }
            // Thêm các câu hỏi CĐPTHC level 1 khác...
        ],
        level2: [

            {
                question: "TB_CĐPTHC_L2_002. Ribosome có cấu tạo gồm mấy tiểu phần?",
                answer: "2"
            },
            // Thêm các câu hỏi CĐPTHC level 2...
        ],
        level3: [
            {
                question: "TB_CĐPTHC_L3_001. Có bao nhiêu thông tin dưới đây là đúng về các phân tử sinh học? </br> (1) Sự thay đổi màu trong ống nghiệm khi đun nóng dung dịch glucose với dung dịch Benedict thì màu của dung dịch sẽ chuyển dần từ xanh lục sang vàng và cam rồi xuất hiện kết tủa đỏ gạch.</br>(2) Có thể sử dụng chuối chín hoặc đường để thực hiện thí nghiệm nhận biết sự có mặt của glucose.</br>(3) Một trong các nguyên lí của thí nghiệm nhận biết protein bằng phép thử Biuret là những nguyên tử nitrogen liên kết với $Cu_2$$^+$ tạo thành phức chất có màu đỏ.</br>(4) Trong thí nghiệm nhận biết lipid bằng phép thử nhũ tương, khi cho dầu ăn vào cồn và lắc đều sẽ thấy dầu ăn với cồn tách thành 2 lớp riêng biệt, không hòa tan với nhau.",
                answer: "2"
            },
            {
                question: "TB_CĐPTHC_L3_002. Hãy chỉ ra sự khác biệt cơ bản trong cấu trúc phân tử của tinh bột và cellulose.",
                answer: "Tinh bột: do nhiều phân tử glucose liên kết với nhau dưới dạng phân nhánh và không phân nhánh. Cellulose: do nhiều phân tử glucose liên kết với nhau bởi các liên kết glycosid tạo ra cấu trúc mạch thẳng."
            },
            {
                question: "TB_CĐPTHC_L3_003. Vì sao khi bảo quản trứng sống, người ta dùng phương pháp bảo quản lạnh chứ không dùng phương pháp bảo quản nóng?",
                answer: "Trong trứng có nhiều protein, cấu trúc không gian của pr được hình thành bởi các liên kết hydrogen, không bền với nhiệt độ cao, …	Dùng phương pháp bảo quản lạnh là bảo quản trứng trong điều kiện nhiệt độ thấp: trong điều kiện nhiệt độ thấp, liên kết hydrogen không bị đứt, cấu trúc không gian của pr không bị phá vỡ, nó chỉ ức chế và làm giảm hoạt tính của pr nên trứng lâu bị hỏng. Không dùng phương pháp bảo quản nóng (bảo quản trứng trong điều kiện nhiệt độ cao): nhiệt độ cao làm cho liên kết hydrogen bị phá vỡ, cấu trúc không gian protein bị phá vỡ và protein mất hoạt tính, làm cho trứng nhanh bị hỏng."
            },
            {
                question: "TB_CĐPTHC_L3_004. Khi phân tích thành phần % nucleotide của vật chất di truyền ở các loài sinh vật khác nhau người ta thu được bảng số liệu. Hãy cho biết loại vật chất di truyền của mỗi loài. Giải thích.",
                image: "https://nhantri.top/media/Grade10/cautaonucleicacid.png",
                answer: "Loài I và loài II có DNA cấu trúc 2 mạch vì trong phân tử có 4 loại nucleotide A, T, G, C; A = T và G = C; Loài III có DNA cấu trúc 1 mạch vì trong phân tử có 4 loại nucleotide A, T, G, C; A khác T và G khác C; Loài IV có cấu trúc 2 mạch RNA vì trong phân tử có 4 loại nucleotide A, U, G, C; A = U và G = C; Loài V có RNA cấu trúc 1 mạch vì trong phân tử có 4 loại nucleotide A, U, G, C; A khác U và G khác C."
            },
            {
                question: "TB_CĐPTHC_L3_005. Trong tế bào động vật, các loại cấu trúc dưới tế bào nào có chứa cả protein và nucleic acid? Hãy nêu sự khác nhau giữa các nucleic acid có trong các loại cấu trúc đó về: số mạch, dạng cấu trúc, loại đơn phân.",
                answer: "Ở tế bào động vật, ba loại cấu trúc dưới tế bào có chứa protein và acid nucleic là: Ribosome (chứa rRNA và protein), Ti thể/lục lạp (chứa DNA vòng và protein); Nhân tế bào (chứa DNA và protein). Trong ribosome, rRNA có Mạch đơn, dạng cuộn xoắn, 4 loại nitrogenus base (U, A, G, C). Trong ti thể/lục lạp, DNA mạch kép, dạng vòng, 4 loại nitrogenus base (T, A, G, C). DNA trong nhân có mạch kép, dạng thẳng, 4 loại nitrogenus base (T, A, G, C)."
            },
            // Thêm các câu hỏi CĐPTHC level 3...
        ],
        level4: [

            {
                question: "TB_CĐPTHC_L4_001. Hình sau mô tả cấu trúc của một số phân tử lipid.</br>a. Hãy nêu tên của các loại lipid I, II, III.</br>b. Nêu tên của các phần A, B của I và C, D của phân tử II.</br>c. Nêu một chức năng quan trọng của kiểu lipid I và kiểu lipid II",
                image: "https://nhantri.top/media/Grade10/cacloailipid.png",
                answer: "a.Tên các loại lipid: I là Phospholipid; II là triglyceride; III là Steroid.</br>b.Các thành phần của I: A là đầu ưa nước, B là đuôi kị nước; Các thành phần của II: C là glycerol, D là acid béo.</br>c.Chức năng của I: Cấu tạo nên màng sinh học; Chức năng của II: dự trữ năng lượng."
            },
            {
                question: "TB_CĐPTHC_L4_002. Hoạt tính của protein do cấu trúc không gian của nó quyết định. Bằng kĩ thuật di truyền người ta tạo được 2 phân tử protein đơn phân có trình tự acid amin giống hệt nhau nhưng ngược chiều (từ đầu N đến đầu C). Hai phân tử protein này có cấu trúc không gian và hoạt tính giống nhau không? Tại sao?",

                answer: "Hai phân tử protein này không có cấu trúc không gian và hoạt tính giống nhau. Vì liên kết peptid có tính phân cực từ đầu N đến đầu C hai chuỗi polipeptide có trình tự giống nhau nhưng ngược chiều sẽ có gốc R hướng về các hướng khác nhau nên cấu trúc bậc 2, 3 hoàn toàn khác nhau làm cho hoạt tính protein thay đổi hoặc không có hoạt tính."
            },
            {
                question: "TB_CĐPTHC_L4_003 [HSGTPHN2526 - 1.5 điểm]. Nêu vai trò của liên kết hydrogen trong các phân tử: cellulose, DNA và protein.",

                answer: "a. Vai trò của liên kết hydrogen:</br>Trong cellulose: liên kết hydrogen giữa các phân tử ở các mạch hình thành nên các bó dài dạng vi sợi sắp xếp xen phủ tạo nên cấu trúc dai và vững chắc.</br>- Trong DNA: Các nucleotide giữa hai mạch của DNA liên kết với nhau bằng liên kết hydrogen theo nguyên tắc bổ sung (A liên kết với T bằng 2 liên kết hydrogen và G liên kết với C bằng 3 liên kết hydrogen và ngược lại).Đây là các liên kết yếu nhưng có số lượng lớn đảm bảo cho DNA vừa có tính bền vững lại dễ dàng có thể bị cắt đứt để tạo điều kiện cho DNA thực hiện các chức năng sinh học và dễ phát sinh các đột biến, làm nguyên liệu cho tiến hóa.</br>- Trong protein: Các amino acid trong chuỗi polypeptid bậc 1 hình thành liên kết hydrogen giữa nhóm C- O và N - H ở các vòng xoắn gần nhau tạo nên cấu trúc bậc 2 của protein."
            },
            {
                question: "TB_CĐPTHC_L4_004 [HSGTPHN2526 - 1.5 điểm]. </br>Dung dịch trong mỗi ống nghiệm 1, 2, và 3 có chứa một trong các chất sau: glucose, hồ tinh bột, lòng trắng trứng, các điều kiện thí nghiệm xảy ra. Dựa vào các kết quả trong Bảng 1, kiểm tra bằng các thuốc thử, em hãy xác định mỗi ống nghiệm có một chất nào ở trên (Biết rằng kí hiệu + là kết quả có phản ứng, - là không phản ứng). Giải thích.",
                image: "https://nhantri.top/media/Grade10/thuhchc.png",
                answer: "- Ống nghiệm 1 có lòng trắng trứng, vì lòng trắng trứng chứa protein albumin, khi thử nghiệm Biuret sẽ cho kết tủa màu tím.</br>- Ống nghiệm 2 có hồ tinh bột, vì hồ tinh bột khi gặp thuốc thử Lugol(KI) sẽ chuyển màu từ màu vàng sang màu xanh tím đặc trưng.</br>- Ống nghiệm 3 có glucose, vì khi glucose là loại đường khử, khi gặp thuốc thử Benedict sẽ tạo kết tủa màu đỏ gạch."
            },

            // Thêm các câu hỏi CĐPTHC level 3...
        ]
    },
    // Tế bào nhân sơ

    saTBNS: {
        level1: [
            {
                "question": "TB_TBNS_L1_001. Tế bào nhân sơ có kích thước bao nhiêu?",
                "answer": "Tế bào nhân sơ có kích thước từ 1 µm đến 5 µm."
            },
            {
                "question": "TB_TBNS_L1_002. Tế bào nhân sơ có những hình dạng phổ biến nào?",
                "answer": "Tế bào nhân sơ có hình cầu, hình que và hình xoắn."
            },
            {
                "question": "TB_TBNS_L1_003. Lông của tế bào nhân sơ có cấu tạo như thế nào?",
                "answer": "Lông của tế bào nhân sơ ngắn hơn roi và có số lượng nhiều."
            },
            {
                "question": "TB_TBNS_L1_004. Lông trong tế bào nhân sơ có chức năng gì?",
                "answer": "Giúp tế bào bám dính và tiếp hợp với nhau hoặc bám vào bề mặt tế bào khác."
            },
            {
                "question": "TB_TBNS_L1_005. Roi của tế bào nhân sơ có cấu tạo như thế nào?",
                "answer": "Cấu tạo từ sợi protein, dài hơn lông và có thể có một hoặc nhiều roi."
            },
            {
                "question": "TB_TBNS_L1_006. Chức năng của roi trong tế bào nhân sơ là gì?",
                "answer": "Roi giúp vi khuẩn di chuyển về phía trước."
            },
            {
                "question": "TB_TBNS_L1_007. Màng ngoài của tế bào nhân sơ có cấu tạo như thế nào?",
                "answer": "Màng ngoài của tế bào nhân sơ chủ yếu cấu tạo từ lipopolysaccharide."
            },
            {
                "question": "TB_TBNS_L1_008. Chức năng của màng ngoài tế bào nhân sơ là gì?",
                "answer": "Màng ngoài bảo vệ tế bào khỏi sự tấn công của tế bào bạch cầu."
            },
            {
                "question": "TB_TBNS_L1_009. Thành tế bào của tế bào nhân sơ có cấu tạo như thế nào?",
                "answer": "Thành tế bào của tế bào nhân sơ được cấu tạo từ peptidoglycan."
            },
            {
                "question": "TB_TBNS_L1_010. Độ dày của thành tế bào nhân sơ là bao nhiêu?",
                "answer": "Thành tế bào nhân sơ có độ dày từ 10 nm đến 20 nm."
            },
            {
                "question": "TB_TBNS_L1_011. Màng tế bào của tế bào nhân sơ cấu tạo như thế nào?",
                "answer": "Màng tế bào của tế bào nhân sơ cấu tạo từ lớp kép phospholipid và protein."
            },
            {
                "question": "TB_TBNS_L1_012. Chức năng của màng tế bào nhân sơ là gì?",
                "answer": "Trao đổi chất có chọn lọc và diễn ra các quá trình chuyển hóa vật chất."
            },
            {
                "question": "TB_TBNS_L1_013. Tế bào chất trong tế bào nhân sơ có thành phần chủ yếu nào?",
                "answer": "Bào tương, một dạng keo lỏng chứa nước và các hợp chất hữu cơ và vô cơ."
            },
            {
                "question": "TB_TBNS_L1_014. Chức năng của tế bào chất là gì?",
                "answer": "Nơi diễn ra các phản ứng hóa sinh và duy trì hoạt động sống của tế bào."
            },
            {
                "question": "TB_TBNS_L1_015. Vùng nhân trong tế bào nhân sơ có cấu tạo như thế nào?",
                "answer": "Vùng nhân không có màng bao bọc và chứa một phân tử DNA dạng vòng."
            },
            {
                "question": "TB_TBNS_L1_016. DNA trong vùng nhân tế bào nhân sơ có cấu trúc như thế nào?",
                "answer": "DNA trong vùng nhân của tế bào nhân sơ có dạng vòng, mạch kép."
            },
            {
                "question": "TB_TBNS_L1_017. Ngoài DNA trong vùng nhân, tế bào nhân sơ có chứa DNA nào khác không?",
                "answer": "Tế bào nhân sơ còn chứa các plasmid, là các phân tử DNA nhỏ, dạng vòng."
            },
            {
                "question": "TB_TBNS_L1_018. Plasmid trong tế bào nhân sơ có chức năng gì?",
                "answer": "Mang các gen bổ sung cho tế bào, giúp chúng có khả năng chống lại kháng sinh."
            },

            {
                "question": "TB_TBNS_L1_019. Vi khuẩn Gram dương có thành tế bào như thế nào?",
                "answer": "Thành tế bào dày hơn và chứa nhiều peptidoglycan."
            },
            {
                "question": "TB_TBNS_L1_020. Tế bào nhân sơ phân chia bằng phương pháp nào?",
                "answer": "Tế bào nhân sơ phân chia bằng phương pháp phân chia nhị phân."
            },
            {
                "question": "TB_TBNS_L1_021. Vùng nhân trong tế bào nhân sơ có nhiệm vụ gì?",
                "answer": "Chứa thông tin di truyền và điều khiển các hoạt động sống của tế bào."
            },
            {
                "question": "TB_TBNS_L1_022. Lớp màng ngoài của tế bào nhân sơ có chức năng gì?",
                "answer": "Màng ngoài bảo vệ tế bào khỏi sự tấn công của các tế bào bạch cầu."
            },


            // Thêm các câu hỏi SA Tế bào nhân sơ level 1 khác...
        ],
        level2: [
            {
                "question": "TB_TBNS_L2_001. Tế bào nhân sơ có thể chia thành mấy loại vi khuẩn dựa trên cấu tạo thành tế bào?",
                "answer": "2."
            },
            {
                "question": "TB_TBNS_L2_002. Tế bào nhân sơ có hệ thống nội màng không?",
                "answer": "Tế bào nhân sơ không có hệ thống nội màng."
            },
            // Thêm các câu hỏi SA Tế bào nhân sơ level 2...
        ],
        level3: [
            {
                "question": "TB_TBNS_L3_001. Tế bào nhân sơ có thể sống ở môi trường nào?",
                "answer": "Sống trong nhiều môi trường khác nhau, bao gồm cả môi trường khắc nghiệt."
            },
            // Thêm các câu hỏi SA Tế bào nhân sơ level 3...
        ],
        level4: [
            {
                "question": "TB_TBNS_L4_001 [30-4-00]. Nêu cấu tạo và chức năng của màng sinh chất.",
                "answer": "- Theo Davson – Danielli: Gồm hai lớp protein (trong – ngoài), hai lớp phospholipid ở giữa và màng có nhiều lỗ.<br />- Theo Singer – Nicolson (Cấu trúc khảm động): Gồm hai lớp phospholipid, các phân tử protein dính ở mặt ngoài, mặt trong hoặc xuyên màng.<br /> - Chức năng: Bảo vệ tế bào, giúp tế bào trao đổi chất và truyền tin."
            },
            // Thêm các câu hỏi SA Tế bào nhân sơ level 3...
        ]
    },
    // Tế bào nhân thực

    saTBNT: {
        level1: [
            {
                question: "TB_TBNT_L1_001. Quan sát hình ảnh sau và cho biết, bào quan số mấy là nơi tập trung chế biến, lắp ráp, đóng gói các phân tử protein, lipid rồi phân phối chúng đến nơi cần thiết.",
                image: "https://nhantri.top/media/Grade10/ndbmgg.png",
                answer: "6"
            },
            {
                question: "TB_TBNT_L1_002. Trong số các bào quan: ti thể, ribosome, peroxisome, lục lạp, có bao nhiêu bào quan không có màng bao bọc?",

                answer: "1"
            },
            {
                question: "TB_TBNT_L1_003. Cho các bào quan: bộ máy Golgi, nhân, lục lạp, ribosome, thành tế bào, ti thể. Có bao nhiêu bào quan có ở cả tế bào động vật và tế bào thực vật?",

                answer: "4"
            },
            {
                question: "TB_TBNT_L1_004. Cho các bào quan sau: bộ máy Golgi, lục lạp, ti thể, ribosome, nhân, lysosome, peroxisome, mạng lưới nội chất. Có bao nhiêu bào quan có chứa vật chất di truyền (DNA)?",

                answer: "3"
            },
            {
                question: "TB_TBNT_L1_005. Cho các cấu trúc: bộ máy Golgi, nhân, lục lạp, ribosome, thành tế bào, ti thể. Có bao nhiêu cấu trúc có ở cả tế bảo động vật và tế bào thực vật?",

                answer: "4"
            },
            {
                question: "TB_TBNT_L1_006. Trong số các đặc điểm sau đây, có bao nhiêu đặc điểm có ở tế bào nhân thực? (1) Có màng sinh chất; (2) Có vùng nhân chưa hoàn chỉnh; (3) Có các bào quan có màng bao bọc; (4) Có ribosome; (5) Có màng nhân; (6) Có thành peptidoglycan.",

                answer: "4"
            },
            {
                question: "TB_TBNT_L1_007. Trong số các đặc điểm dưới đây, có bao nhiêu đặc điểm có ở tế bào động vật? (1) Có màng sinh chất; (2) Tự dưỡng; (3) Dị dưỡng; (4) Có hệ thống nội màng; (5) Có thành chitin; (6) Có màng nhân; (7) Có thành peptidoglycan; (8) Có ribosome; (9) Có DNA; (10) Có thành cellulose.",

                answer: "6"
            },
            {
                question: "TB_TBNT_L1_008. Có bao nhiêu nhận định nhận định sau đây đúng khi nói về điểm khác nhau giữa ti thể và lục lạp? (1) Lục lạp có vai trò chính trong quang hợp, còn ti thể đảm nhận chức năng trong quá trình hô hấp tế bào. (2) Màng trong của ti thể gấp nếp, còn màng trong của lục lạp thì trơn nhẵn. (3) Ti thể không có hệ sắc tố, còn lục lạp có hệ sắc tố. (4) Ti thể chỉ có ở tế bào động vật còn lục lạp chỉ có ở tế bào thực vật. (5) Ti thể có chứa DNA còn lục lạp thì không.",

                answer: "3"
            },
            {
                question: "TB_TBNT_L1_009. Quan sát hình ảnh sau và cho biết, bào quan số mấy là hệ thống mạng lưới các túi dẹt và ống thông nhau, nơi đính gắn của ribosome?",
                image: "https://nhantri.top/media/Grade10/ndbmgg.png",
                answer: "9"
            },
            {
                question: "TB_TBNT_L1_010. Quan sát hình ảnh sau và cho biết, bào quan số mấy là dịch đặc bên trong nhân, chứa sợi nhiễm sắc (DNA và protein), điều khiển các hoạt động sống của tế bào?",
                image: "https://nhantri.top/media/Grade10/ndbmgg.png",
                answer: "8"
            },
            {
                question: "TB_TBNT_L1_011. Quan sát hình ảnh sau và cho biết, bào quan số mấy Bào quan được coi là nhà máy năng lượng của tế bào?",
                image: "https://nhantri.top/media/Grade10/ndbmgg.png",
                answer: "1"
            },
            {
                question: "TB_TBNT_L1_012. Quan sát hình ảnh sau và cho biết bào quan số mấy là nơi tập trung chế biến, lắp ráp, đóng gói các phân tử protein, lipid rồi phân phối chúng đến nơi cần thiết?",
                image: "https://nhantri.top/media/Grade10/ndbmgg.png",
                answer: "6"
            },
            {
                "question": "TB_TBNT_L1_013. Tế bào nhân thực có kích thước như thế nào?",
                "answer": "Tế bào nhân thực có kích thước khoảng 10 – 100 µm."
            },

            {
                "question": "TB_TBNT_L1_014. Nhân tế bào nhân thực có cấu trúc như thế nào?",
                "answer": "Có màng nhân bao bọc và chứa DNA cùng các hạch nhân."
            },
            {
                "question": "TB_TBNT_L1_015. Ribosome có chức năng gì trong tế bào?",
                "answer": "Ribosome là nơi tổng hợp protein."
            },

            {
                "question": "TB_TBNT_L1_016. Ribosome có cấu tạo như thế nào?",
                "answer": "Gồm hai tiểu phần, một lớn và một nhỏ, không có màng bao bọc."
            },
            {
                "question": "TB_TBNT_L1_017. Lưới nội chất có vai trò gì trong tế bào?",
                "answer": "Tham gia tổng hợp, vận chuyển và phân phối các sản phẩm sinh học."
            },
            {
                "question": "TB_TBNT_L1_018. Lưới nội chất có những loại nào?",
                "answer": "Lưới nội chất gồm lưới nội chất hạt và lưới nội chất trơn."
            },
            {
                "question": "TB_TBNT_L1_019. Bộ máy Golgi có chức năng gì?",
                "answer": "Phân loại, đóng gói và phân phối các protein và lipid."
            },
            {
                "question": "TB_TBNT_L1_020. Lysosome có vai trò gì trong tế bào?",
                "answer": "Lysosome phân hủy các chất thải và tái chế các bào quan cũ."
            },
            {
                "question": "TB_TBNT_L1_021. Không bào có chức năng gì ở tế bào thực vật?",
                "answer": "Điều hòa áp suất thẩm thấu và lưu trữ các chất như carbohydrate và muối."
            },
            {
                "question": "TB_TBNT_L1_022. Peroxysome có chức năng gì?",
                "answer": "Phân giải H<sub>2</sub>O<sub>2</sub> và các chất độc trong tế bào."
            },
            {
                "question": "TB_TBNT_L1_023. Ti thể có vai trò gì trong tế bào?",
                "answer": "Nơi thực hiện hô hấp tế bào và sản xuất ATP."
            },
            {
                "question": "TB_TBNT_L1_024. Ti thể có cấu tạo như thế nào?",
                "answer": "2 màng, màng ngoài trơn và màng trong gấp nếp, chứa nhiều enzyme tổng hợp ATP."
            },
            {
                "question": "TB_TBNT_L1_025. Lục lạp có chức năng gì?",
                "answer": "Quang hợp, chuyển hóa năng lượng ánh sáng thành năng lượng hóa học."
            },
            {
                "question": "TB_TBNT_L1_026. Lục lạp có cấu tạo như thế nào?",
                "answer": "Lục lạp có màng kép và chứa các thylakoid xếp thành granum."
            },
            {
                "question": "TB_TBNT_L1_027. Tế bào chất có chức năng gì?",
                "answer": "Nơi diễn ra các hoạt động sống của tế bào."
            },
            {
                "question": "TB_TBNT_L1_028. Bộ khung xương tế bào có cấu tạo như thế nào?",
                "answer": "Gồm các sợi vi ống, vi sợi và sợi trung gian."
            },
            {
                "question": "TB_TBNT_L1_029. Trung thể có vai trò gì trong tế bào động vật?",
                "answer": "Tham gia hình thành thoi phân bào trong quá trình phân chia tế bào."
            },
            {
                "question": "TB_TBNT_L1_030. Trung thể có cấu tạo như thế nào?",
                "answer": "Gồm hai trung tử xếp vuông góc với nhau, mỗi trung tử chứa các vi ống."
            },
            {
                "question": "TB_TBNT_L1_031. Màng tế bào có cấu tạo như thế nào?",
                "answer": "Gồm lớp kép phospholipid và protein màng."
            },
            {
                "question": "TB_TBNT_L1_032. Màng tế bào có chức năng gì?",
                "answer": "Kiểm soát sự trao đổi chất giữa tế bào và môi trường, nhận tín hiệu từ môi trường."
            },
            {
                "question": "TB_TBNT_L1_033. Thành tế bào có chức năng gì trong tế bào thực vật?",
                "answer": "Bảo vệ và định hình tế bào thực vật."
            },
            {
                "question": "TB_TBNT_L1_034. Thành tế bào nấm được cấu tạo từ chất nào?",
                "answer": "Thành tế bào nấm được cấu tạo từ chitin."
            },
            {
                "question": "TB_TBNT_L1_035. Mối nối kín có chức năng gì?",
                "answer": "Ngăn không cho chất đi qua khe giữa các tế bào."
            },
            // Thêm các câu hỏi SA TBNT level 1 khác...
        ],
        level2: [
            {
                "question": "TB_TBNT_L2_001. Tế bào nhân thực có gì khác biệt so với tế bào nhân sơ?",
                "answer": "Có nhân chính thức, cấu trúc phức tạp hơn và có nhiều bào quan."
            },
            {
                question: "TB_TBNT_L2_002. Quan sát hình dưới đây và cho biết, tế bào ở hình số mấy là tế bào nhân sơ?",
                image: "https://nhantri.top/media/Grade10/chonnhanso.png",
                answer: "3"
            },
            {
                question: "TB_TBNT_L2_003. Hình dưới đây mô tả cấu trúc tế bào thực vật. Cấu trúc số mấy thực hiện quang hợp?",
                image: "https://nhantri.top/media/Grade10/ndluclap.jpg",
                answer: "2"
            },
            {
                question: "TB_TBNT_L2_004. Quan sát hình sau và cho biết nhân con là cấu trúc số mấy?",
                image: "https://nhantri.top/media/Grade10/ndnhan.png",
                answer: "4"
            },

            // Thêm các câu hỏi SA TBNT level 2...
        ],
        level3: [
            {
                question: "TB_TBNT_L3_001. Một nhà sinh học đã tiến hành lấy nhân của tế bào sinh dưỡng của tế bào 1 rồi cấy vào tế bào trứng của loài 2 đã bị hủy nhân. Sau nhiều lần thí nghiệm ông đã thu được các con ếch con từ tế bào đã chuyển nhân.Hãy cho biết các con ếch con này có đặc điểm của loài số mấy?",

                answer: "1"
            },
            {
                question: "TB_TBNT_L3_002. Phân biệt lưới nội chất hạt và lưới nội chất trơn về cấu trúc và chức năng.",

                answer: "Lưới nội chất hạt: là hệ thống xoang, trên màng có đính các ribosome, tổng hợp protein xuất bào và vận chuyển các chất trong tế bào, nằm gần nhân. Lưới nội chất trơn: là hệ thống ống phân nhánh, không đính hạt ribosome, có nhiều loại enzyme, là nơi tổng hợp lipid, chuyển hóa đường và phân hủy các chất độc hại, nằm gần màng sinh chất."
            },
            {
                question: "TB_TBNT_L3_003. Điểm khác nhau trong cấu trúc của tế bào động vật và tế bào thực vật dẫn đến sự khác nhau trong quá trình trao đổi nước của hai loại tế bào này như thế nào?",

                answer: "Tế bào TV có thành tế bào, tạo sức trương nước nên S = P - T, tế bào không bị vỡ trong môi trường nhược trương. Tế bào động vật không có thành nên S = P, tế bào có thể bị vỡ trong môi trường nhược trương. Tế bào TV mất nước gây co nguyên sinh, không làm thay đổi hình dạng tế bào. Tế bào ĐV khi mất nước bị biến dạng, tế bào bị nhăn nheo."
            },
            {
                question: "TB_TBNT_L3_004. Protein lạ xuất hiện trong máu người thường bị các tế bào bạch cầu phát hiện và phân hủy. Hãy cho biết tế bào bạch cầu phân hủy protein này theo cơ chế nào? Tại sao chỉ có protein lạ bị bạch cầu phân hủy còn các protein của cơ thể thì không?",

                answer: "Protein lạ bị phân hủy theo cơ chế thực bào: màng tế bào tiếp xúc với protein, lõm vào hình thành túi nhập bào → túi nhập bào di chuyển vào tế bào chất → dung hợp với lysosome, các enzyme thủy phân trong lysosome sẽ phân hủy protein lạ. Bạch cầu có thể phân biệt được protein lạ và protein của cơ thể nhờ các thụ thể trên màng tế bào bạch cầu. Chỉ những protein liên kết đặc hiệu được với thụ thể trên màng tế bào bạch cầu mới bị phân hủy."
            },
            {
                question: "TB_TBNT_L3_005. Erythropoetin (EPO) là loại hormone do thận tiết ra để kích thích việc sản sinh ra hồng cầu. Biết rằng EPO là một loại protein tiết, được glyco hóa nhiều. Cho biết cấu trúc nào làm nhiệm vụ tổng hợp và hoàn thiện EPO? Giải thích.",

                answer: "Mạng lưới nội chất hạt vì chức năng của lưới nội chất hạt là tổng hợp protein. Các protein sau khi được tổng hợp ở mạng lưới nội chất hạt sẽ được tập trung vào lòng túi để vận chuyển đến phức hệ Golgi. Tại đây chúng tiếp tục được hoàn chỉnh bằng cách được gắn thêm carbohydrate (glyco hóa), sau đó chúng được phóng thích đến màng sinh chất hay các lysosome hoặc được tiết ra ngoài."
            },
            {
                question: "TB_TBNT_L3_006. Chứng minh rằng lục lạp có cấu trúc phù hợp với chức năng.",

                answer: "Cấu trúc màng kép, bên trong là chất trền stroma trong suốt → Ánh sáng dễ dàng đi qua → Thuận lợi cho quá trình quang hợp; Đơn vị của các hạt grana là túi thylakoid, trên màng thylakoid có hệ sắc tố quang hợp → Tăng tổng diện tích bề mặt → hấp thu được nhiều photon ánh sáng; Có nhiều loại enzyme quang hợp → Xúc tác cho các phản ứng trong quá trình quang hợp, đặc biệt là pha tối; Có bộ máy di truyền độc lập: DNA, RNA, ribosome, enzyme,… → Di truyền độc lập trong tế bào chất (có khả năng tự phân chia để tăng số lượng lục lạp phù hợp với nhu cầu tổng hợp chất của cây); Có khả năng bị thoái hoá thành dạng sắc lạp khác → Tích luỹ chất màu (ở hoa, quả,…) giúp cây thụ phấn và phát tán hạt."
            },
            {
                question: "TB_TBNT_L3_007. Hãy chú thích các thành phần cấu tạo của tế bào động vật và thực vật trong hình sau:",
                image: "https://nhantri.top/media/Grade10/tbdvtv.png",
                answer: "TBĐV: 1 - ti thể; 2 - màng tế bào; 3 - tế bào chất; 4 - nhân; 5 - không bào nhỏ; 6 - trung thể; 7 - lysosome. TBTV: 1 - ti thể; 2 - màng tế bào; 3 - tế bào chất; 4 - nhân; 5 - không bào trung tâm; 8 - thành tế bào; 9 - lục lạp."
            },
            {
                question: "TB_TBNT_L3_008. Điền từ vào chỗ trống để hoàn thành sơ đồ cấu trúc của nhân.",
                image: "https://nhantri.top/media/Grade10/diennhan.png",
                answer: "1 - màng nhân; 2 - lỗ nhân; 3 - nhiễm sắc thể; 4 - nhân con."
            },
            {
                question: "TB_TBNT_L3_009. Điền vào chỗ trống các cấu trúc bên dưới đây bằng các từ gợi ý: Lưới nội chất trơn, lưới nội chất hạt, ribosome, màng nhân.",
                image: "https://nhantri.top/media/Grade10/cacbophan.png",
                answer: "1 - nhân; 2 - mạng lưới nội chất trơn; 3 - mạng lưới nội chất hạt; 4 - ribosome."
            },
            {
                question: "TB_TBNT_L3_010. Điền vào chỗ trống các cấu trúc bên dưới đây bằng các từ gợi ý: Lưới nội chất trơn, lưới nội chất hạt, ribosome, màng nhân.",
                image: "https://nhantri.top/media/Grade10/thanhphantb.png",
                answer: "1 - mạng lưới nội chất hạt; 2 - nhân; 3 - màng nhân; 4 - lỗ nhân; 5 - ribosome; 6 - mạng lưới nội chất trơn; 7 - lysosome; 8 - túi tiết (bóng tải); 9 - màng tế bào; 10 - bộ máy Golgi."
            },
            {
                question: "TB_TBNT_L3_011. Chú thích hình cấu trúc ti thể bằng các từ gợi ý sau: mào, chất nền, DNA, màng trong, màng ngoài, ribosome.",
                image: "https://nhantri.top/media/Grade10/dientithe.png",
                answer: "1 - màng trong; 2 - màng ngoài; 3 - DNA; 4 - chất nền; 5 - mào; 6 - ribosome"
            },
            {
                question: "TB_TBNT_L3_012. Hoàn thành cấu trúc lục lạp bằng các từ gợi ý: DNA, màng trong, thylakoid, màng ngoài, stroma, ribosome.",
                image: "https://nhantri.top/media/Grade10/dienluclap.png",
                answer: "1 - màng trong; 2 - màng ngoài; 3 - DNA; 4 - chất nền (stroma); 5 - ribosome; 6 - thylakoid"
            },
            {
                question: "TB_TBNT_L3_013*. Tại sao nói tế bào là đơn vị cấu trúc của sự sống?",

                answer: "- Mọi sinh vật đều được cấu tạo từ tế bào, tế bào là đơn vị sống bé nhất.</br>- Mọi quá trình sống đều diễn ra trong tế bào.</br>- Tế bào chỉ có thể được sinh ra từ những tế bào đã tồn tại trước.Trong lịch sử tiến hóa, chỉ giai đoạn xuất hiện tế bào thì sự sống mới biểu hiện đầy đủ các đặc tính của sự sống."
            },
            {
                question: "TB_TBNT_L3_014*. Vì sao tế bào binh thường không gia tăng mãi về kích thước? Điều kiện nào thì chọn lọc tự nhiên có thể làm cho sinh vật đơn bào gia tăng kích thước?",

                answer: "- Tế bào không thể gia tăng mãi về kích thước vì khi có kích thước lớn thì tỉ lệ S/ V sẽ giảm làm giảm tốc độ trao đổi chất của tế bào với môi trường.</br>- Khi tế bào có kích thước quá lớn thì sự khuếch tán của các chất tới các nơi bên trong tế bào cũng cần nhiều thời gian hơn.</br>- Khi tế bào có kích thước lớn thì đáp ứng của tế bào với các tín hiệu từ bên ngoài cũng sẽ chậm hơn vì tế bào thu nhận và đáp ứng lại các tín hiệu từ môi trường chủ yếu dựa trên con đường truyền tin hoá học.</br>- Trong điều kiện sinh vật đơn bào này sống chung với những loài sinh vật đơn bào ăn thịt chúng thì những tế bào nào có kích thước lớn hơn sẽ ít bị ăn thịt hơn."
            },
            {
                question: "TB_TBNT_L3_015*. Hãy mô tả tiến trình thí nghiệm dung hợp hai tế bào của hai loài động vật khác nhau để chứng minh các phân tử prôtêin của màng sinh chất có khả năng di chuyển hay không.",

                answer: "Trước tiên người ta phải đánh dấu protein màng của hai loài khác nhau sao cho có thể phân biệt được chúng (đánh dấu bằng đồng vị phóng xạ hoặc bằng chất phát quang), sau đó cho các tế bào của hai loài tiếp xúc và dung hợp với nhau(nhờ sự trợ giúp của các chất nhất định).</br> Sau từng khoảng thời gian một, quan sát các dấu chuẩn của từng loài trên tế bào lai dưới kính hiển vi. Nếu protein màng của các loài đan xen với nhau trên tế bào lai thì chứng tỏ các protein màng đã dịch chuyển. Tuy nhiên, nếu các protein của từng loài không pha trộn vào nhau mà vẫn nằm ở hai phía riêng biệt của tế bào lai thì ta vẫn chưa thể kết luận chắc chắn là protein màng không di chuyển. Vì protein của cùng một loài có thể vẫn di chuyển trong loại tế bào đó nhưng khó có thể di chuyển sang màng tế bào của loài khác."
            },
            {
                question: "TB_TBNT_L3_016*. Nêu các chức năng chủ yếu của lưới nội chất. Cho một ví dụ về một loại tế bào của người có lưới nội chất hạt phát triển, một loại tế bào có lưới nội chất trơn phát triển và giải thích chức năng của các loại tế bào này.",

                answer: "Chức năng chính của lưới nội chất hạt là tổng hợp các loại prôtêin dùng để tiết ra ngoài tế bào hoặc protein của màng tế bào cũng như protein của các lisosome. Chức năng của lưới nội chất trơn: Chứa các enzyme tham gia vào quá trình tổng hợp lipid, chuyển hoá đường và giải độc. Tế bào bạch cầu có lưới nội chất hạt phát triển vì chúng có chức năng tổng hợp và tiết ra các kháng thể. Tế bào gan có lưới nội chất trơn phát triển vì gan có chức năng giải độc."
            },

            // Thêm các câu hỏi SA TBNT level 3...
        ],
        level4: [
            {
                question: "TB_TBNT_L4_001. Phân biệt tế bào nhân sơ và tế bào nhân thực",

                answer: "- Tế bào nhân sơ: Kích thước bé 0.2 - 10μm; Có ở vi khuẩn; Thành tế bào cấu tạo bằng; Peptitdoglycan; Một số có vỏ nhầy; Lông và roi được cấu tạo đơn giản từ các protein có tính đàn hồi; Tế bào chất không có hệ thống nội màng và các bào quan có màng bao bọc, không có hiện tượng chuyển động chất nguyên sinh; Có màng sinh chất gấp nếp thành mesosome; Ribosome có độ lắng li tâm 70S; Vùng nhân chưa có màng bao bọc, DNA dạng vòng không liên kết với protein histon; Có plasmid.</br>- Tế bào nhân thực: Kích thước 5 - 10μm; Có ở động vật, thực vật và nấm; Thành tế bào thực vật cấu tạo bằng cellulose, tế bào nấm cấu tạo bằng chitin, tế bào động vật không có thành tế bào; Không có vỏ nhầy; Lông và roi có cấu tạo phức tạp bằng hệ vi ống kiểu cấu trúc 9+2; Tế bào chất có hệ thống nội màng và các bào quan có màng bao bọc, có hiện tượng chuyển động của chất nguyên sinh; Không có mesosome; Ribosome có độ lắng li tâm 80S; Nhân có màng bao bọc, có nhân con; DNA thẳng liên kết với protein histon; Không có plasmid."
            },
            {
                question: "TB_TBNT_L4_002. Phân biệt cấu trúc, chức năng của protein xuyên màng và protein bám màng. Vì sao nói hai loại protein này có ảnh hưởng đến tính linh động của màng sinh chất?",

                answer: "- Protein xuyên màng: có cấu tạo xuyên qua lớp phospholipid của màng một lần hoặc nhiều lần; có sự phân hóa các vùng ưa nước; vùng kị nước không phân cực nằm sâu trong lớp kép phospholipid; vùng phân cực ưa nước lộ ra bề mặt màng. Chức năng của protein xuyên màng là vận chuyển các chất qua màng; truyền tín hiệu và có hoạt tính enzyme.</br>- Protein bám màng bám vào phía mặt trong và mặt ngoài của màng; Không có vùng kị nước. Protein bám màng có chức năng tín hiệu nhận biết các tế bào, giúp tế bào ghép nối với nhau; xác định hình dạng tế bào; giữ một số protein vào các vị trí nhất định.</br>- Nói hai loại protein này có ảnh hưởng đến tính linh động của màng sinh chất vì: hai loại protein này có thể thay đổi vị trí, hình dạng trong không gian → tạo nên tính linh động, mềm dẻo cho màng; Các phân tử protein có khả năng chuyển động quay, lên xuống giữa hai lớp màng; Ngoài ra các phân tử protein phân bố tương đối đều trên màng, nhưng khi có sự thay đổi nào đó nào đó của môi trường thì protein lại có khả năng di chuyển tập hợp lại với nhau."
            },
            {
                question: "TB_TBNT_L4_003. Hãy nêu các bằng chứng ủng hộ giả thiết ti thể có nguồn gốc cộng sinh từ vi khuẩn. Tại sao nhiều nhà khoa học cho rằng Ti thể xuất hiện trước lạp thể trong quá trình tiến hóa?",

                answer: "Bằng chứng ủng hộ giả thiết ti thể có nguồn gốc từ vi khuẩn: Ti thể chứa DNA giống DNA của vi khuẩn: các phân tử DNA vòng, trần không kết hợp với protein; Ti thể chứa ribosome giống ribosome của vi khuẩn: dạng ribosome có độ lắng 70S; Cơ chế tổng hợp protein trong ti thể tương tự như ở vi khuẩn; Ti thể có cấu trúc màng kép và phân đôi giống vi khuẩn: Trên màng của ti thể và màng của vi khuẩn đều có hệ enzyme hô hấp. </br>Nói ti thể xuất hiện trước lạp thể trong quá trình tiến hóa bởi vì: Toàn bộ giới sinh vật nhân thực: động vật, thực vật và nấm đều có ti thể nhưng chỉ có một nhóm sinh vật nhân thực (tảo và thực vật) có lạp thể → lạp thể xuất hiện sau trong quá trình tiến hóa."
            },
            {
                question: "TB_TBNT_L4_004. Nêu các chức năng chủ yếu của lưới nội chất. Cho một ví dụ về loại tế bào của người có lưới nội chất hạt phát triển, một loại tế bào có lưới nội chất trơn phát triển và giải thích chức năng của các loại tế bào này.",

                answer: "- Chức năng chính của lưới nội chất hạt là tổng hợp các loại protein dùng để tiết ra ngoài màng tế bào hoặc protein của màng tế bào cũng như protein của các lysosome.</br>- Chức năng của lưới nội chất trơn: Chứa các enzyme tham gia vào quá trình tổng hợp lipid, chuyển hóa đường và giải độc cho tế bào.</br>- Tế bào bạch cầu có lưới nội chất hạt phát triển vì chúng có chức năng tổng hợp và tiết ra các kháng thể.</br>- Tế bào gan có lưới nội chất trơn phát triển vì có chức năng giải độc."
            },
            {
                question: "TB_TBNT_L4_005. Loại bào quan trong tế bào nhân thực có chức năng làm cho tế bào có thể gia tăng kích thước nhanh chóng nhưng lại tiêu tốn ít năng lượng.Hãy giải thích chức năng của loại bào quan này.",

                answer: "- Bào quan đó là không bào. Không bào lớn (không bào trung tâm) hút nước và gia tăng kích thước làm cho thành tế bào trương lên khi thành tế bào đã được axit hóa làm giãn ra. Do vậy tế bào có thể nhanh chóng gia tăng kích thước rồi sau đó mới tổng hợp thêm các chất cần thiết.</br>- Loại bào quan này ở thực vật còn có các chức năng dự trữ các chất dinh dưỡng, chứa các chất độc hại đối với các tế bào, là kho dự trữ các ion cần thiết cho tế bào; không bào ở cánh hoa còn chứa sắc tố giúp côn trùng đến thụ phấn và chứa các chất độc giúp thực vật chống lại các động vật ăn thực vật."
            },
            {
                question: "TB_TBNT_L4_006. Các tế bào động vật không có lysosome, trong khi ở thực vật không có bào quan này. Loại bào quan nào ở tế bào thực vật có thể thay thế chức năng của lysosome? Giải thích.",

                answer: "Tế bào thực vật không có lysosome nhưng có không bào trung tâm. Loại bào quan này có ở tế bào thực vật có thể thay thế chức năng của lysosome ở tế bào động vật.</br>Vì không bào cũng có nhiều enzyme thủy phân và có chức năng phân giải các chất hữu cơ cũng như thủy phân các bào quan và tế bào già."
            },
            {
                question: "TB_TBNT_L4_007. Trong tế bào động vật có hai loại bào quan thực hiện chức năng khử độc, đó là hai loại bào quan nào? Cơ chế khử độc của hai loại bào quan đó có gì khác nhau?",

                answer: "- Hai loại bào quan thực hiện chức năng khử độc trong tế bào động vật là: lưới nội chất trơn, và peroxysome. </br>- Lưới nội chất trơn khử độc bằng cách gắn nhóm (-OH) vào chất độc chuyển thành chất dẽ bị đào thải ra khỏi tế bào; peroxysome chỉ tham gia phân giải H<sub>2</sub>O<sub>2</sub> sản phẩm độc hại thành nước nhờ enzyme catalase."
            },
            {
                question: "TB_TBNT_L4_008. Bào quan lysosome ở tế bào động vật được hình thành từ đâu? Tế bào cơ, tế bào thần kinh, tế bào hồng cầu, tế bào bạch cầu loại tế bào nào chứa nhiều lysosome nhất? Giải thích.",

                answer: "- Bào quan lysosome ở tế bào nhân thực được hình thành từ bộ máy golgi. Cấu tạo dạng túi, màng đơn, chứa nhiều enzyme thủy phân làm nhiệm vụ tiêu hóa nội bào.</br>- Tế bào bạch cầu chứa lysosome nhiều nhất và nó đảm nhiệm chức năng tiêu diệt vi khuẩn, tế bào già, tế bào bị tổn thương."
            },
            {
                question: "TB_TBNT_L4_009. Bào quan nào chỉ có ở tế bào động vật, không có ở tế bào thực vật? Nêu cấu tạo và chức năng của bào quan trên? Tế bào thực vật có thực hiện được chức năng này không? Tại sao?",

                answer: "- Bào quan đó là trung thể.</br>- Cấu tạo: Mỗi trung thể gồm hai trung tử xếp thẳng góc với nhau theo trục dọc. Trung tử là ống hình trụ, rỗng, dài có đường kính khoảng 0,13 μm gồm nhiều bộ ba vi ống xếp thành vòng.</br>- Chức năng: hình thành nên thoi vô sắc trong quá trình phân bào.</br>- Tế bào thực vật không có trung thể nhưng vẫn hình thành thoi phân bào vì tế bào thực vật vẫn có trung tâm tổ chức vi ống nhưng ở trạng thái phân tán."
            },
            {
                question: "TB_TBNT_L4_010. Trong cơ thể người, loại tế bào nào không có nhân, loại tế bào nào có nhiều nhân? Trình bày khái quát sự hình thành loại tế bào này.",

                answer: "Tế bào không nhân là hồng cầu, hình thành từ tê bào tủy xương (có 1 nhân) sau đó bị lysosome phân giải để thực hiện chức năng; tế bào nhiều nhân là tế bào bạch cầu."
            },
            {
                question: "TB_TBNT_L4_011. So sánh vị trí, cấu trúc, chức năng của màng sinh chất và màng nhân? Hãy cho biết dòng di chuyển của protein từ nơi tổng hợp đến màng sinh chất?",

                answer: "Đều được cấu trúc bởi các thành phần giống nhau: lớp kép phospholipid và các phân tử protein khảm - động trong lớp kép phospholipid, carbohyđrate; Đều có chức năng bảo vệ, có các lỗ màng để thực hiện trao đổi chất.</br>Màng sinh chất: Vị trí: Bao bọc khối sinh chất bên trong tế bào; Cấu trúc: Có cấu trúc màng đơn; Có các dấu chuẩn glycoprotein; Chức năng: Thực hiện sự trao đổi chất giữa tế bào với môi trường ngoài tế bào; Bảo vệ toàn bộ khối sinh chất trong tế bào.</br>Màng nhân: Vị trí: Bao bọc nhân và ngăn cách giữa nhân và khối sinh chất; Cấu trúc: Có cấu trúc màng kép; Chức năng: Thực hiện sự trao đổi chất giữa nhân và tế bào chất; Bảo vệ nhân.</br>Dòng di chuyển của prôtêin từ nơi tổng hợp đến màng sinh chất: protein thường được tổng hợp tại ribosome trên lưới nội chất hạt rồi tạo thành các túi tiết đưa tới bộ máy Golgi để bao gói rồi đưa ra màng sinh chất."
            },
            {
                question: "TB_TBNT_L4_012. So sánh lưới nội chất ở tế bào bạch cầu và lưới nội chất ở tế bào gan của người.Giải thích sự khác nhau về lưới nội chất ở hai loại tế bào đó.",

                answer: "- Giống nhau: Đều là hệ thống màng bên trong tế bào nhân thực, tạo thành hệ thống các ống xoang dẹp và ống thông với nhau, ngăn cách phần còn lại của tế bào chất.</br>- Khác nhau: Ở tế bào bạch cầu có lưới nội chất hạt phát triển còn ở tế bào gan có lưới nội chất trơn phát triển.</br>Giải thích sự khác nhau: Lưới nội chất hạt có chức năng chính là tổng hợp các loại protein dùng để tiết ra ngoài tế bào hoặc protein của màng tế bào cũng như protein của các lysosome; Lưới nội chất trơn chứa các enzyme tham gia vào quá trình tổng hợp lipid, chuyển hoá đường và giải độc; Tế bào bạch cầu có lưới nội chất hạt phát triển vì chúng có chức năng tổng hợp và tiết ra các kháng thể; Tế bào gan có lưới nội chất trơn phát triển vì chúng có chức năng giải độc."
            },
            {
                question: "TB_TBNT_L4_013. Phân biệt túi vận chuyển (bóng tải), lysosome, peroxysome và không bào.",

                answer: "- Bóng tải: là các túi vận chuyển đưa các chất đi khắp tế bào.</br>- Lysosome chứa enzyme thủy phân phân giải các thể lạ hoặc các chất cần cho tái chế.</br>- Peroxysome chứa nhiều enzyme dùng để gải độc các chất như ancol và tạo catalase để trung hòa hydroperoxide; </br>- Không bào là bào quan dự trữ một số chất cho tế bào, có thể tham gia vào việc tiêu hóa thức ăn ở một số loại tế bào."
            },
            {
                question: "TB_TBNT_L4_014. Các tế bào nhận biết nhau bằng các dấu chuẩn có trên màng sinh chất, theo em các dấu chuẩn là hợp chất hóa học nào? Chất này được tổng hợp và vận chuyển tới màng sinh chất như thế nào?",

                answer: "Dấu chuẩn là hợp chất glycoprotein: protein kết hợp với carbohydrate. Protein được tổng hợp ở các ribosome trên màng lưới nội chất hạt, sau đó được đưa vào trong xoang của lưới nội chất hạt → tạo thành túi → bộ máy Golgi. Carbohydrate được tổng hợp tại lưới nội chất trơn sau đó được chuyển đến bộ máy Golgi. Tại đây protein được hoàn thiện cấu trúc.Gắn thêm hợp chất polysaccharide → glycoprotein hoàn chỉnh → đống gói → đưa ra bên ngoài bằng cách xuất bào."
            },
            {
                question: "TB_TBNT_L4_015. Trong tế bào nhân thực những bào quan nào có khả năng tổng hợp ATP? So sánh cấu trúc và chức năng của các bào quan đó?",

                answer: "Trong tế bào nhân thực bào quan có khả năng tổng hợp ATP là ti thể và lục lạp: ti thể tổng hợp ATP trong chu trình Krebs và chuỗi chuyền e hô hấp; còn lục lạp tổng hợp ATP trong pha sáng của quang hợp.</br>Giống nhau: Đều là bào quan có cấu trúc màng kép trong tế bào nhân thực; Bên trong chứa DNA dạng vòng, ribosome, protein và enzyme; Đều có nguồn gốc cộng sinh từ vi khuẩn trong tế bào nhân thực; Đều là bào quan chuyển hóa năng lượng trong tế bào.</br>Khác nhau: vị trí; cấu tạo màng trong; hệ enzyme; vị trí của ion H<sup>+</sup>"
            },
            {
                question: "TB_TBNT_L4_016. So sánh cấu trúc của tế bào thực vật và tế bào động vật. Sự giống nhau và khác nhau đó phản ánh điều gì?",

                answer: "- Giống nhau: thành phần chính; nhân hoàn chỉnh; các bào quan. </br>- Khác nhau: thành tế bào, chất nền ngoại bào, lục lạp, không bào trung tâm, chất dự trữ, trung thể."
            },
            {
                question: "TB_TBNT_L4_017. Nếu một người uống thuốc penicillin với một lượng lớn thì chỉ vài ngày trong tế bào gan có một loại bào quan tăng gấp đôi, số lượng bào quan này chỉ trở lại bình thường trong vòng 5 ngày khi thôi dùng thuốc.Điều này chứng tỏ penicillin là chất như thế nào đối với cơ thể? Tên gọi, cấu tạo và chức năng của bào quan có sự thay đổi đó?",

                answer: "Pelicillin là chất độc đối với cơ thể và gan có chức năng khử độc. Bào quan có sự thay đổi là mạng lưới nội chất trơn.</br>Cấu tạo: Lưới nội chất là hệ thống màng tạo thành các ống và xoang dẹt thông nhau; Trong xoang có chứa nhiều enzyme tổng hợp lipid, chuyển hóa carbohydrate và enzyme khử độc thuốc và chất độc. </br>Chức năng: Tổng hợp lipid: dầu thực vật, phospholipid, hormone có thành phần là steroid như hormone sinh dục ở động vật có xương sống, tuyến thượng thận; Chuyển hóa carbohydrate; Khử độc: phương thức chủ yếu là bổ sung thêm nhóm OH, làm cho nó rễ tan do vậy đào thải khỏi cơ thể."
            },
            {
                question: "TB_TBNT_L4_018. Trong cấu trúc của một tế bào thực vật điển hình có hai bào quan tham gia quá trình chuyển hóa năng lượng.Phân biệt những chi tiết quan trọng nhất liên quan đến cấu trúc và chức năng của hai bào quan đó.",

                answer: "- Trong tế bào thực vật điển hình, hai bào quan tham gia vào chuyển hóa vật chất và năng lượng là ti thể và lục lạp, giữa hai bào quan này, phân biệt về mặt cấu trúc và chức năng bao gồm: - Đều có màng kép, song màng trong ti thể gấp nếp còn màng trong lục lạp trơn, không đóng vai trò trong hoạt động chuyển hóa năng lượng.</br>- Bên trong hệ thống màng kép, ti thể không có hệ thống nội màng, ở lục lạp có các túi dẹt xếp chồng lên nhau tạo ra hệ thống grana.</br>- Các thành phần enzyme của chuỗi vận chuyển điện tử trên màng thylakoid và màng trong ti thể cũng như hệ thống các enzyme trong chất nền lục lạp và chất nền ti thể khác nhau. </br>- Ti thể có vai trò phân giải chất hữu cơ, chuyển hóa năng lượng trong chất hữu cơ thành hóa năng trong các lực khử và hóa năng trong ATP cung cấp các hoạt động sống, lục lạp có vai trò chuyển quang năng thành hóa năng dự trữ trong các hợp chất hữu cơ."
            },
            {
                question: "TB_TBNT_L4_019. Sơ đồ mô tả lát cắt của một tế bào niêm mạc ruột non ở người. Tế bào này thích nghi với 3 chức năng: Vận chuyển chủ động các chất từ tế bào vào dòng máu; Tổng hợp các enzyme; Khuếch tán nhanh chóng các cơ chất từ xoang ruột vào tế bào chất của tế bào niêm mạc. Dựa trên hình ảnh về cấu trúc của tế bào niêm mạc ruột này, giải thích sự phù hợp giữa cấu trúc và 3 chức năng kể trên.",
                image: "https://nhantri.top/media/Grade10/niemmacruot.png",
                answer: "- Để vận chuyển chủ động các chất từ tế bào chất vào dòng máu, tế bào cần sự có mặt của ti thể cung cấp ATP cho hoạt động vận chuyển chủ động. </br>- Để tổng hợp các enzyme, tế bào cần có hệ thống lưới nội chất hạt, trên đó có các hạt ribosome tiến hành tổng hợp các chuỗi polypeptide cấu thành enzyme. Tế bào cần sử dụng bộ máy golgi để hoàn thiện enzyme đó tạo ra sản phẩm hoàn thiện.</br>- Để khuếch tán nhanh các chất từ xoang ruột vào trong tế bào chất của tế bào niêm mạc cần có màng sinh chất với diện tích lớn, tế bào thích ứng bằng cách tạo ra các vi nhung làm tăng tổng diện tích khuếch tán."
            },
            {
                question: "TB_TBNT_L4_020. Một liposome nhân tạo là điều kiện lí tưởng để nghiên cứu sự di chuyển electron trong chuỗi truyền electron thay vì sử dụng ti thể (hình a). Khi một chất cho và một chất nhận electron phù hợp được cho vào liposome, cùng với phức hệ IV (cytochrome c oxidase) gắn trên màng với mục đích nghiên cứu sự vận chuyển electron từ cytochrome c dạng khử đến oxygen phân tử (O<sub>2</sub>). K<sub>+</sub> gắn với valinomycin được đưa vào với mục đích cân bằng điện thế giữa màng trong và ngoài (K<sub>+</sub> thường không thẩm thấu qua màng trong, nhưng valinomycin là một chất vận chuyển ion giúp mang K<sub>+</sub> qua màng). </br>a. Khi thêm O2 vào bên trong liposome chất nào được tạo ra? Nêu cơ chế của quá trình đó.</br>b.Dựa vào đồ thị (hình b) giải thích tại sao khi lượng O<sub>2</sub> được đưa vào thì có sự thay đổi pH như vậy?</br>c.Chất độc đã được dùng như vũ khí hóa học là hơi ga để giết người trong chiến tranh, bám vào hem α3 của cytochrome c oxidase. Giải thích tại sao chúng gây độc",
                image: "https://nhantri.top/media/Grade10/liposome.png",
                answer: "a.Khi thêm O<sub>2</sub>, oxygen sẽ nhận được e từ quá trình khử cyt c<sup>2+</sup> thành cyt c<sup>3+</sup> xúc tác hình thành H<sub>2</sub>O </br>Phương trình: 2 H<sup>+</sup> + ½ O<sub>2</sub> → H<sub>2</sub>O </br>1.b. Dựa vào đồ thị ta thấy lượng O<sub>2</sub> được đưa vào làm pH giảm mạnh vì cyt c <sup>2+</sup> ở dạng khử được oxy hóa thành cyt c <sup>3+</sup>, electron được đưa đến O<sub>2</sub> để tạo H<sub>2</sub>O. Electron được vận chuyển vào thì đồng thời H<sup>+</sup> được đưa ra ngoài môi trường làm pH giảm </br>1.c. Cyanine có trong khí gas đưa vào hệ hô hấp, sẽ ngăn chặn sự vận chuyển e, quá trình phosphoryl hóa – oxy hóa bị ngăn cản lại ngừng tổng hợp ATP nên cơ thể chết.</br>- Khi cyt dạng khử được oxy hóa hoàn toàn, proton lại quay trở lại dung môi trong túi, pH lại quay lại giá trị ban đầu."
            },
            {
                question: "TB_TBNT_L4_021 [HSGTPHN2526-1.5 điểm]. Khi uống nhiều rượu hoặc uống thuốc quá liều thì loại tế bào nào, bào quan nào trong cơ thể người phải tích cực làm việc để khử độc cho tế bào của cơ thể? Hãy cho biết cơ chế khử độc của bào quan đó.",

                answer: "Khi uống nhiều rượu hoặc uống thuốc quá liều:</br>- Loại tế bào làm việc tích cực: Tế bào gan.</br>- Hai loại bào quan tích cực để khử độc trong tế bào là: mạng lưới nội chất trơn và peroxisome </br>- Cơ chế:</br>+ Mạng lưới nội chất trơn khử độc bằng cách gắn thêm nhóm hydroxyl (-OH) vào để làm tăng khả năng hòa tan trong nước, khiến chúng dễ dàng bị đẩy ra khỏi cơ thể.</br>+ Peroxysome khử chất độc rượu và các chất độc khác bằng cách chuyển hydrogen tới oxygen để hình thành peroxide (H<sub>2</sub>O<sub>2</sub>), chất này ngay lập tức được enzyme catalase phân giải thành nước và oxygen.</br>"
            },
            {
                question: "TB_TBNT_L4_021 [HSGTPHN2526-1.5 điểm]. Bảng 1 cho biết thành phần chủ yếu của thành tế bào và cấu tạo cơ thể của 4 sinh vật (kí hiệu A, B, C và D). </br>a. Sinh vật A, B, C và D tương ứng với các sinh vật nào sau đây: thực vật, động vật, nấm, vi khuẩn.</br>b.Cho biết vật chất di truyền của các sinh vật trên.",
                image: "https://nhantri.top/media/Grade10/thanhtbsv.png",
                answer: "a. Sinh vật A là nấm; sinh vật B là thực vật; sinh vật C là vi khuẩn; sinh vật D là động vật.</br>b.Vật chất di truyền của sinh vật A, B, D (nấm, thực vật, động vật) là DNA kép, dạng thẳng có kết hợp với protein Histon tạo NST.</br>Vật chất di truyền của sinh vật C(vi khuẩn) là DNA kép, dạng vòng không kết hợp với protein."
            },
            {
                question: "TB_TBNT_L4_022 [HSGTPHN2526-2.5 điểm]. Hình 1 mô tả cấu trúc màng sinh chất của sinh vật.</br>a.Hãy chỉ rõ các thành phần(1), (2), (3), (4).</br>b.Theo em, cấu trúc màng sinh chất mô tả trong Hình 2 là của tế bào động vật hay tế bào thực vật ? Giải thích.</br>c.Điều gì có thể xảy ra nếu thành phần(4) chiếm số lượng lớn trong cấu trúc màng sinh chất?",
                image: "https://nhantri.top/media/Grade10/dienmsc.png",
                answer: "a. Chú thích: (1) protein(xuyên màng); (2) phospholipid; (3) carbohydrate(hoặc glicoprotein); (4) Cholesterol.</br>b.Đây là màng tế bào động vật vì bên ngoài màng có cholesterol (chỉ có ở tế bào động vật).</br>c.Nếu thành phần 4 (cholesterol) có nhiều trong màng tế bào sẽ làm màng tế bào trở nên ổn định, vững chắc hơn. </br>Số cholesterol càng nhiều thì độ linh hoạt của màng càng kém, màng càng cứng và dễ vỡ.</br>Ví dụ: người béo phì thường có lượng cholesterol trong thành mạch máu cao.Khi cholesterol ở mạch máu cao (đặc biệt là ở não và tim) có thể gây vỡ mạch máu và dẫn tới đột quỵ."
            },
            // Thêm các câu hỏi SA TBNT level 3...
        ]
    },
    // Vận chuyển các chất qua màng

    saTDC: {
        level1: [
            {
                question: "TB_VCCCQM_L2_002. Có bao nhiêu cách vận chuyển sau đây thuộc hình thức vận chuyển thụ động?</br>(1) CO<sub>2</sub>, O<sub>2</sub> khuếch tán qua lớp phospholipid.</br>(2) Vận chuyển glucose ngược chiều gradient nồng độ qua màng tế bào.</br>(3) Vận chuyển các chất có kích thước lớn qua màng tế bào bằng xuất – nhập bào.</br>(4) Thẩm thấu: Khuếch tán của phân tử nước qua kênh aquaporin.</br>(5) Vận chuyển Na+, K + bằng bơm protein qua màng tế bào.",

                answer: "2"
            },

            // Thêm các câu hỏi SA Vận chuyển các chất qua màng level 1 khác...
        ],
        level2: [
            {
                question: "TB_VCCCQM_L2_001. Cho các chất: oxygen, glucose, vitamin, protein, carbodioxide. Có bao nhiêu chất được vận chuyển trực tiếp qua lớp phospholipid kép ở màng sinh chất?",

                answer: "2"
            },

            {
                question: "TB_VCCCQM_L2_003. Trong các phương thức vận chuyển dưới đây, có mấy phương thức đưa các chất vào trong tế bào theo hình thức vận chuyển chủ động?</br>(1) Khuếch tán trực tiếp qua lớp kép phospholipid.</br>(2) Khuếch tán qua kênh protein xuyên màng.</br>(3) Nhờ sự biến dạng của màng tế bào.</br>(4) Nhờ kênh protein đặc hiệu và sử dụng ATP.",

                answer: "2"
            },


            // Thêm các câu hỏi SA Vận chuyển các chất qua màng level 2...
        ],
        level3: [
            {
                question: "TB_VCCCQM_L2_004. Trong các hoạt động dưới đây, số hoạt động cần sự tham gia của vận chuyển chủ động là?</br>(1) Hấp thụ nước ở rễ cây.</br>(2) Vận chuyển các ion khoáng ở rễ cây.</br>(3) Vận chuyển oxygen từ phế nang vào máu.</br>(4) Tái hấp thu các chất trong ống thận.",

                answer: "2"
            },
            // Thêm các câu hỏi SA Vận chuyển các chất qua màng level 3...
        ],
        level4: [
            {
                "question": "TB_TĐCQM_L4_001. Trao đổi chất qua màng tế bào là gì?",
                "answer": "Là quá trình vận chuyển các chất vào và ra khỏi tế bào qua màng tế bào."
            },

            {
                "question": "TB_TĐCQM_L4_002. Trao đổi chất qua màng tế bào có vai trò gì trong tế bào?",
                "answer": "Giúp tế bào nhận các chất cần thiết và đào thải các chất thải."
            },
            {
                "question": "TB_TĐCQM_L4_003. Những vật chất nào có thể được tế bào trao đổi với môi trường?",
                "answer": "Có thể là các ion, đại phân tử sinh học, hoặc thậm chí là một tế bào khác."
            },
            {
                "question": "TB_TĐCQM_L4_004. Vận chuyển thụ động là gì?",
                "answer": "Vận chuyển chất từ nơi có nồng độ cao đến nơi có nồng độ thấp."
            },
            {
                "question": "TB_TĐCQM_L4_005. Có những hình thức vận chuyển thụ động nào?",
                "answer": "Khuếch tán đơn giản, khuếch tán tăng cường, thẩm thấu."
            },
            {
                "question": "TB_TĐCQM_L4_006. Khuếch tán đơn giản là gì?",
                "answer": "Các phân tử đi qua lớp lipid kép màng tế bào mà không cần sự trợ giúp của protein."
            },
            {
                "question": "TB_TĐCQM_L4_007. Khuếch tán tăng cường là gì?",
                "answer": "Vận chuyển chất qua màng nhờ sự hỗ trợ của các protein xuyên màng."
            },
            {
                "question": "TB_TĐCQM_L4_008. Thẩm thấu là gì?",
                "answer": "Là sự khuếch tán của phân tử nước qua màng tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_009. Cơ chế thẩm thấu hoạt động như thế nào?",
                "answer": "Nước di chuyển từ vùng có nồng độ chất tan thấp sang vùng có nồng độ chất tan cao."
            },
            {
                "question": "TB_TĐCQM_L4_010. Tốc độ thẩm thấu của nước phụ thuộc vào yếu tố nào?",
                "answer": "Áp suất thẩm thấu của tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_011. Môi trường ưu trương có đặc điểm gì?",
                "answer": "Môi trường có nồng độ chất tan cao hơn trong tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_012. Vận chuyển chủ động là gì?",
                "answer": "Quá trình vận chuyển các chất từ nơi có nồng độ thấp đến nơi có nồng độ cao."
            },
            {
                "question": "TB_TĐCQM_L4_013. Vận chuyển chủ động cần yếu tố nào?",
                "answer": "Protein kênh vận chuyển và năng lượng từ ATP."
            },
            {
                "question": "TB_TĐCQM_L4_014. Ví dụ nào cho thấy tế bào sử dụng vận chuyển chủ động?",
                "answer": "Tế bào thận sử dụng năng lượng để lọc máu và tái hấp thu amino acid và glucose."
            },
            {
                "question": "TB_TĐCQM_L4_015. Tế bào niêm mạc dạ dày sử dụng vận chuyển chủ động để làm gì?",
                "answer": "Bơm H<sup>+</sup> và Cl<sup>-</sup> vào dạ dày tạo môi trường axit để tiêu hóa thức ăn."
            },
            {
                "question": "TB_TĐCQM_L4_016. Vận chuyển vật chất nhờ biến dạng màng tế bào là gì?",
                "answer": "Vận chuyển các chất có kích thước lớn hoặc không thể qua các protein xuyên màng."
            },
            {
                "question": "TB_TĐCQM_L4_017. Có những hình thức vận chuyển nào qua biến dạng màng tế bào?",
                "answer": "Thực bào, ẩm bào và xuất bào."
            },
            {
                "question": "TB_TĐCQM_L4_018. Thực bào là gì?",
                "answer": "Tế bào đưa các phân tử lớn vào trong tế bào, bao bọc chúng trong túi màng."
            },
            {
                "question": "TB_TĐCQM_L4_019. Màng tế bào có thể chọn lọc các chất như thế nào?",
                "answer": "Nhờ vào các protein thụ thể và các kênh protein xuyên màng."
            },
            {
                "question": "TB_TĐCQM_L4_020. Các protein xuyên màng giúp gì cho tế bào trong quá trình trao đổi chất?",
                "answer": "Chúng giúp các phân tử lớn hoặc ion đi qua màng tế bào dễ dàng."
            },
            {
                "question": "TB_TĐCQM_L4_021. Tại sao tế bào không thể tồn tại nếu không có hoạt động trao đổi chất?",
                "answer": "Vì tế bào cần các chất cần thiết cho hoạt động sống và cần thải bỏ các chất thải."
            },
            {
                "question": "TB_TĐCQM_L4_022. Lí do tế bào cần thực hiện xuất bào là gì?",
                "answer": "Để thải các chất không cần thiết hoặc các sản phẩm tiêu hóa ra ngoài môi trường tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_023. Tại sao tế bào cần có tính chọn lọc trong quá trình trao đổi chất?",
                "answer": "Để kiểm soát và điều hòa môi trường nội bào, duy trì hoạt động sống của tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_024. Nước có thể qua màng tế bào bằng cách nào?",
                "answer": "Nước vào trong tế bào nhờ kênh aquaporin."
            },
            {
                "question": "TB_TĐCQM_L4_025. Phân biệt phương thức vận chuyển thụ động và vận chuyển chủ động các chất qua màng sinh chất.",
                "answer": "Vận chuyển thụ động: vận chuyển các chất theo chiều gradient nồng độ; không tiêu tốn năng lượng ATP; khuếch tán trực tiếp qua lớp photpholipit hoặc khuếch tán qua kênh protein xuyên màng; tốc độ khuếch tán phụ thuộc chênh lệch nồng độ giữa trong và ngoài tế bào. Vận chuyển chủ động: vận chuyển các chất ngược chiều gradient nồng độ; tiêu tốn năng lượng ATP; cần protein đặc chủng cho từng chất vận chuyển; tốc độ vận chuyển phụ thuộc vào nhu cầu sinh lí của tế bào."
            },
            {
                "question": "TB_TĐCQM_L4_026. Tại sao muốn giữ rau tươi, ta phải thường xuyên vẩy nước vào rau?",
                "answer": "Khi vẩy nước vào rau, tạo môi trường nhược trương → nước sẽ thẩm thấu vào tế bào làm cho tế bào trương lên → tăng sức căng bề mặt → rau tươi lên, không bị héo."
            },
            {
                "question": "TB_TĐCQM_L4_027. Vai trò của vận chuyển chủ động trong tế bào là gì?",
                "answer": "Giúp tế bào lấy các chất cần thiết và điều hòa nồng độ các chất."
            },
            {
                "question": "TB_TĐCQM_L4_028. Loại bỏ thành tế bào của các loại vi khuẩn có hình dạng khác nhau rồi cho các tế bào này vào môi trường đẳng trương, sau đó làm tiêu bản các tế bào đó và quan sát bằng kính hiển vi quang học, em sẽ quan sát thấy gì? Giải thích.",
                "answer": "Quan sát thấy các tế bào đều có dạng hình cầu. Giải thích: thành tế bào có chức năng cố định hình dạng tế bào và tạo hình dạng khác nhau cho các loài vi khuẩn, khi mất thành và thả vào môi trường đẳng trương, nước vào tế bào đạt trạng thái cân bằng, áp suất thẩm thấu tác động đều lên bề mặt màng sinh chất làm cho tế bào căng tròn ra."
            },
            {
                "question": "TB_TĐCQM_L4_029. Tế bào niêm mạc ruột có 3 chức năng là: khuếch tán nhanh chóng các chất từ xoang ruột vào tế bào chất, vận chuyển chủ động các chất từ tế bào vào máu, tổng hợp các enzyme. Nêu đặc điểm cấu trúc của tế bào niêm mạc ruột phù hợp với các chức năng nói trên. Giải thích.",
                "answer": "Để khuếch tán nhanh các chất từ xoang ruột vào trong tế bào chất của tế bào niêm mạc ruột, tế bào cần có màng sinh chất với diện tích lớn → tế bào thích ứng bằng cách tạo ra các vi nhung mao (gấp nếp nhiều lần) làm tăng tổng diện tích khuếch tán. Để vận chuyển chủ động các chất từ tế bào chất vào máu, tế bào cần có nhiều ti thể để cung cấp ATP cho hoạt động vận chuyển chủ động. Để tổng hợp các enzyme, tế bào cần phát triển hệ thống lưới nội chất hạt, trên đó có các hạt ribosome để tổng hợp các chuỗi polypeptide cấu thành nên enzyme. Tế bào cũng cần bộ máy Golgi để hoàn thiện enzyme."
            },
            {
                "question": "TB_TĐCQM_L4_030. Tại sao khi xào rau thì rau thường bị quắt lại? Làm thế nào để xào rau không bị quắt lại mà vẫn xanh, giòn?",
                "answer": "Gia vị (ưu trương); Lửa to (tránh mất nước)."
            },
            {
                "question": "TB_TĐCQM_L4_031. Một học sinh muốn cây rau cải của mình trồng nhanh lớn nên đã hòa nước giải để tưới cho cây nhưng cây lại bị héo. Em hãy cho biết học sinh đó đã mắc sai lầm gì? Nêu cách khắc phục.",
                "answer": "Nước giải có ion khoáng cao (ưu trương); Pha loãng nước giải để làm giảm nồng độ ion khoáng → sau đó mới tưới cho cây."
            },
            {
                "question": "TB_TĐCQM_L4_032*. Để điều trị bệnh loét dạ dày do thừa acid, người ta có thể sử dụng thuốc ức chế hoạt động loại protein nào của màng tế bào niêm mạc dạ dày? Giải thích.",
                "answer": "Tế bào niêm mạc dạ dày tạo ra axit HCl bằng cách có một số bơm H + (bơm proton) và một số khác bơm Cl– vào trong dạ dày để rồi các ion này kết hợp với nhau tạo ra HCl trong dịch vị dạ dày.</br>Nếu vì lí do nào đó việc tiết các ion này tăng lên quá mức sẽ khiến cho dạ dày bị dư thừa acid và bị loét. Do vậy, chúng ta có thể dùng thuốc ức chế các bơm proton trên màng sinh chất để giảm bớt acid của dạ dày."
            },
            {
                question: "TB_TĐCQM_L4_33. Người ta cho một tế bào của khoai tây và một tế bào hồng cầu của người vào nước.Điều gì sẽ xảy ra? Giải thích tại sao lại có hiện tượng đó.",

                answer: "Nước được coi là môi trường quá nhược trương đối với tế bào → khi cho tế bào khoai tây (thực vật) và hồng cầu vào nước, thì nước ở ngoài môi trường sẽ đi vào tế bào, làm tế bào tăng thể tích.</br>Tế bào thực vật có thành cellulose vững chắc nên chỉ hút nước đến giới hạn nhất định → không bị vỡ, còn tế bào hồng cầu sau khi tăng thể tích đến một mức độ nhất định thì sẽ bị vỡ ra."
            },
            {
                question: "TB_TĐCQM_L4_034 [HSGTPHN2526-2.5 điểm]. Hình 1.1 mô tả các kiểu vận chuyển các chất qua màng tế bào, Hình 1.2 mô tả cơ chế vận chuyển đường saccharose vào trong tế bào thực vật, Hình 1.3 mô tả ảnh hưởng của nồng độ chất tan bên ngoài đến tốc độ hấp thu chất tan đó.</br>a. Gọi tên các kiểu vận chuyển I, II, III. </br>b.Cơ chế hấp thu đường saccharose của tế bào thực vật có thể xếp vào kiểu vận chuyển nào trong các kiểu đó? Giải thích.</br>c.Các đường a, b, c ở Hình 1.3 tương ứng với kiểu vận chuyển nào trong Hình 1.1? Giải thích.",
                image: "https://nhantri.top/media/Grade10/vcccquanmangtb.png",
                answer: "a. Tên các kiểu vận chuyển:</br>- Kiểu I: Khuếch tán đơn giản (khuếch tán trực tiếp qua lớp phospholipid).</br>- Kiểu II: Khuếch tán qua kênh (khuếch tán tăng cường).</br>- Kiểu III: Vận chuyển chủ động.</br>b.Cơ chế hấp thụ saccharose thuộc kiểu vận chuyển chủ động (kiểu III) vì quá trình vận chuyển đi ngược chiều nồng độ và có sự tiêu tốn ATP.</br>c.Kiểu vận chuyển của các đường a, b, c trong hình III:</br>- Đường a (kiểu III): Vận chuyển chủ động, vì tốc độ vận chuyển cao và không phụ thuộc vào nồng độ chất tan bên ngoài tế bào.</br>- Đường b (kiểu II): Khuếch tán qua kênh (qua protein màng), vì tốc độ vận chuyển tăng nhanh theo sự tăng nồng độ chất tan bên ngoài, đồng thời có hiện tượng bão hòa tốc độ vận chuyển.</br>- Đường c (kiểu I): Khuếch tán đơn giản, vì tốc độ vận chuyển tăng tỉ lệ thuận với nồng độ chất tan bên ngoài tế bào và không có hiện tượng bão hòa."
            },
            {
                question: "TB_TĐCQM_L4_035. Hãy xác định:</br>a) Tên các thành phần cơ bản cấu tạo nên tế bào.</br>b) Xác định vị trí, kích thước và cấu tạo của màng tế bào.",
                image: "https://nhantri.top/media/Grade10/Tbthucvatdien.png",
                answer: "1. Màng tế bào; 2. Tế bào chất; 3. Nhân; 4 Thành tế bào."
            },
            {
                question: "TB_TĐCQM_L4_036. Hãy cho biết:</br>a) Quá trình trao đổi chất ở tế bào có thể chia thành những giai đoạn nào? </br>b) Tại sao các chất dinh dưỡng sau khi vào tế bào được tổng hợp thành chất hữu cơ, chất hữu cơ lại bị phân giải? Điều đó có lãng phí không?",
                image: "https://nhantri.top/media/Grade10/Sdotdctb.png",
                answer: "a. Quá trình hấp thu các chất dinh dưỡng; Quá trình tổng hợp các chất hữu cơ đặc trưng; Quá trình phân giải các chất hữu cơ trong tế bào; Quá trình đào thải các chất ra khỏi tế bào.</br>b. Quá trình này không hề lãng phí vì cơ thể cần phải tổng hợp các chất hữu cơ đặc trưng cho cơ thể, giúp cơ thể sinh trưởng, phát triển. Khi cần có năng lượng, tế bào mới phân giải chúng thông qua quá trình hô hấp tế bào."
            },
            {
                question: "TB_TĐCQM_L4_037. Hình sau biểu diễn hiện tượng khuếch tán. Trong đó, màng bán thấm là một loại màng  cho phép những chất nhất định đi qua theo phương thức khuếch tán. Quan sát hình rồi trả lời các câu hỏi sau:</br>a) So sánh nồng độ chất tan hai bên màng bán thấm lúc ban đầu.</br>b) So sánh nồng độ chất tan hai bên màng bán thấm sau một thời gian. c) Tại sao sau một thời gian thí nghiệm, có sự chênh lệch chiều cao cột nước giữa hai bên màng bán thấm?</br>d) Thế nào là hiện tượng khuếch tán?",
                image: "https://nhantri.top/media/Grade10/timhieukhuechtan.png",
                answer: "a. Ban đầu, nồng độ chất tan chênh lệch nhau nhiều. </br>b. Sau một thời gian, nồng độ chất tan chênh lệch nhau ít hơn.</br>c. Vì nước đã di chuyển từ cột nước có nồng độ chất tan thấp sang phía có nống độ chất tan cao.</br>d. Khuếch tán là hiện tượng các chất được vận chuyển từ nơi có nồng độ cao đến nơi có nồng độ thấp."
            },
            {
                question: "TB_TĐCQM_L4_038. Hình sau biểu diễn sự vận chuyển thụ động của các chất qua màng tế bào theo nguyên lí khuếch tán. </br>a) So sánh chiều hướng vận chuyển của các chất tan và phân tử nước. Tại sao lại có sự khác biệt đó? </br>b) Thế nào là hiện tượng thẩm thấu và hiện tượng thẩm tách?",
                image: "https://nhantri.top/media/Grade10/thamthauthamtach.png",
                answer: "a. Di chuyển theo hai hướng ngược nhau. Nước đi từ nơi nhiều nước đến nới ít nước; Chất tan di chuyển từ nơi nhiều chất tan đến nơi có ít chất tan.</br>b. Hiện tượng thẩm tách là hiện tượng vận chuyển thụ động của các chất hòa tan từ nơi có nồng độ cao đến nơi có nồng độ thấp."
            },
            {
                question: "TB_TĐCQM_L4_039 [30-4-98]. Vì sao tế bào lông hút của cây xanh có thể hút nước theo cách thẩm thấu?",
                answer: "Tế bào lông hút của cây xanh có thể hút nước theo cách thẩm thấu vì: Màng tế bào lông hút có tính thấm chọn lọc (màng bán thấm tương đối)."
            },
            {
                question: "TB_TĐCQM_L4_040 [30-4-98]. Trên một vùng đất ngập mặn ta thấy các loài cây sú, vẹt, đước phát triển tốt còn lúa thì phát triển rất kém. Em hãy giải thích hiện tượng vừa nêu?",
                answer: "Không bào của các cây chịu mặn (sú, vẹt, đước) chứa dịch bào tạo áp suất thẩm thấu rất lớn, do tích trữ một lượng muối lớn ⇒ lấy được nước của môi trường có nồng độ muối thấp hơn. Các cây khác có áp suất thẩm thấu thấp hơn ⇒ không lấy được nước mà còn bị mất nước."
            },
            {
                question: "TB_TĐCQM_L4_041 [30-4-00]. Trình bày cơ chế vận chuyển các chất qua màng sinh chất.",
                answer: "- Vận chuyển thụ động: bao gồm khuếch tán đơn giản, khuếch tán tăng cường, thầm thấu; vận chuyển thuận chiều nồng độ, cần chất mang và không tiêu tốn năng lượng.<br />- Vận chuyển chủ động: bao gồm vận chuyển đơn cảng, đồng cảng, đối cảng; vận chuyển ngược chiều nồng độ, không cần chất mang và tiêu tốn năng lượng;<br />- Biến dạng màng: bao gồm xuất bào và nhập bào (ẩm bào, thực bào); là hình thức đặc biệt của vận chuyển chủ động."
            },
            {
                question: "TB_TĐCQM_L4_042 [30-4-01]. Thế nào là hiện tượng co nguyên sinh? Quan sát hiện tượng co nguyên sinh của tế bào giúp ta biết được điều gì? Giải thích hiện tượng cây bị héo khi bón quá nhiều phân.",
                answer: "- Co nguyên sinh là hiện tượng tế bào mất nước khi đặt tế bào trong môi trường ưu trương.<br />- Quan sát hiện tượng co nguyên sinh của tế bào giúp ta biết tế bào sống hay chết (nếu tế bào chết, màng nguyên sinh mất tính bán thấm, không gây hiện tượng co nguyên sinh); Độ nhớt của chất nguyên sinh thay đổi, từ đó thay đổi cường độ trao đổi chất của tế bào.<br /> - Giải thích hiện tượng cây bị héo khi bón quá nhiều phân: nồng độ dịch đất tăng cao so với nồng độ dịch bào nên nước từ bên ngoài không vào được bên trong tế bào. Do sự thoát hơi nước vẫn xảy ra nhưng nước không được bù đắp lại nên sức trương nước của tế bào giảm và cây bị héo."
            },
            // Thêm các câu hỏi SA Vận chuyển các chất qua màng level 3...
        ]
    },


    // Truyền tin tế bào

    saTTTB: {
        level1: [
            {
                "question": "TB_TTTB_L1_001. Truyền tin tế bào là gì?",
                "answer": "Là sự phát tán và nhận các phân tử tín hiệu qua lại giữa các tế bào."
            },
            {
                "question": "TB_TTTB_L1_002. Truyền tin tế bào có vai trò gì?",
                "answer": "Đảm bảo sự điều chỉnh, phối hợp hoạt động của các tế bào trong cơ thể."
            },

            {
                "question": "TB_TTTB_L1_003. Truyền tin tế bào ở cơ thể đa bào có vai trò gì?",
                "answer": "Tạo cơ chế điều chỉnh, phối hợp hoạt động đảm bảo tính thống nhất của cơ thể."
            },
            {
                "question": "TB_TTTB_L1_004. Các tín hiệu truyền tin giữa các tế bào có thể là gì?",
                "answer": "Các tín hiệu hóa học, như amino acid, peptide,... thậm chí là chất khí như NO."
            },
            {
                "question": "TB_TTTB_L1_005. Có những hình thức truyền tin tế bào phổ biến nào trong cơ thể đa bào?",
                "answer": "Truyền tin trực tiếp, cận tiết, nội tiết, qua synapse."
            },
            {
                "question": "TB_TTTB_L1_006. Truyền tin cận tiết là gì?",
                "answer": "Là sự truyền tín hiệu giữa các tế bào liền kề."
            },
            {
                "question": "TB_TTTB_L1_007. Truyền tin nội tiết là gì?",
                "answer": "Là tín hiệu hormone được tiết vào máu và truyền tới các tế bào đích ở xa."
            },
            {
                "question": "TB_TTTB_L1_008. Giai đoạn tiếp nhận tín hiệu trong tế bào là gì?",
                "answer": "Là khi phân tử tín hiệu liên kết với thụ thể đặc hiệu trên tế bào đích."
            },
            {
                "question": "TB_TTTB_L1_009. Thụ thể trong tế bào là gì?",
                "answer": "Là các protein kênh xuyên màng, enzyme, hoặc các protein."
            },
            {
                "question": "TB_TTTB_L1_010. Có bao nhiêu loại thụ thể trong tế bào?",
                "answer": "Có 2 loại: thụ thể trên màng tế bào và thụ thể trong tế bào chất."
            },
            {
                "question": "TB_TTTB_L1_011. Thụ thể trong tế bào chất nhận tín hiệu như thế nào?",
                "answer": "Phân tử tín hiệu đi qua màng và liên kết với thụ thể tạo thành phức hợp tín hiệu-thụ thể."
            },
            {
                "question": "TB_TTTB_L1_012. Các phân tử tín hiệu nào có thể liên kết với thụ thể trong tế bào chất?",
                "answer": "Các hormone steroid như estrogen, testosterone hoặc các chất khí như NO."
            },
            {
                "question": "TB_TTTB_L1_013. Thụ thể trên màng tế bào nhận tín hiệu như thế nào?",
                "answer": "Phân tử tín hiệu liên kết với thụ thể ở bên ngoài tế bào."
            },
            {
                "question": "TB_TTTB_L1_014. Các phân tử tín hiệu nào có thể liên kết với thụ thể trên màng tế bào?",
                "answer": "Các chất vô cơ như Ca²⁺, các chất hữu cơ như amino acid, hoặc các kháng nguyên."
            },
            {
                "question": "TB_TTTB_L1_015. Quá trình truyền tín hiệu trong tế bào là gì?",
                "answer": "Là sự chuyển đổi tín hiệu giữa các phân tử trong con đường truyền tin của tế bào."
            },
            {
                "question": "TB_TTTB_L1_016. Khi phân tử tín hiệu liên kết với thụ thể, điều gì xảy ra?",
                "answer": "Cấu hình của thụ thể bị thay đổi, và thụ thể hoạt động tác động lên phân tử liền kề."
            },
            {
                "question": "TB_TTTB_L1_017. Quá trình truyền tín hiệu có ảnh hưởng đến phân tử nào trong tế bào?",
                "answer": "Dẫn đến sự hoạt hóa phân tử đích cuối cùng trong chuỗi chuyển đổi tín hiệu."
            },
            {
                "question": "TB_TTTB_L1_018. Đáp ứng tín hiệu trong tế bào là gì?",
                "answer": "Là kết quả của quá trình truyền tín hiệu, thể hiện qua sự thay đổi trong tế bào."
            },

            {
                "question": "TB_TTTB_L1_019. Các tế bào có thể thay đổi đáp ứng tín hiệu bằng cách nào?",
                "answer": "Thông qua việc điều chỉnh các thụ thể hoặc các con đường truyền tín hiệu."
            },
            {
                "question": "TB_TTTB_L1_020. Các yếu tố nào ảnh hưởng đến quá trình tiếp nhận tín hiệu?",
                "answer": "Loại thụ thể, nồng độ phân tử tín hiệu, và tính khả dụng của các protein đáp ứng."
            },
            {
                "question": "TB_TTTB_L1_021. Sự tương tác giữa phân tử tín hiệu và thụ thể như thế nào?",
                "answer": "Phân tử tín hiệu liên kết đặc hiệu với thụ thể, giống như 'chìa khóa với ổ khóa'."
            },
            {
                "question": "TB_TTTB_L1_022. Hormone có thể ảnh hưởng đến tế bào như thế nào?",
                "answer": "Đi qua màng tế bào và liên kết với thụ thể trong tế bào, kích thích hoạt động của gene."
            },

            // Thêm các câu hỏi SA Truyền tin tế bào level 1 khác...
        ],
        level2: [
            {
                "question": "TB_TTTB_L2_001. Truyền tin tế bào xảy ra như thế nào ở cơ thể đơn bào?",
                "answer": "Tế bào vi khuẩn tập hợp lại thành cụm để hỗ trợ lẫn nhau khi gặp môi trường bất lợi."
            },
            {
                "question": "TB_TTTB_L2_002. Tại sao tế bào cần có khả năng điều chỉnh mức độ tiếp nhận tín hiệu?",
                "answer": "Để đáp ứng linh hoạt với các thay đổi trong môi trường hoặc nhu cầu của cơ thể."
            },

            // Thêm các câu hỏi SA Truyền tin tế bào level 2...
        ],
        level3: [
            {
                "question": "TB_TTTB_L3_001. Tại sao cùng một tín hiệu lại có thể gây ra các đáp ứng khác nhau?",
                "answer": "Vì các loại thụ thể và con đường truyền tín hiệu khác nhau ở mỗi tế bào."
            },
            // Thêm các câu hỏi SA Truyền tin tế bào level 3...
        ],
        level4: [
            {
                question: "TB_TTTB_L4_001 [HSGTPHN2526 - 1.5 điểm]. a. Nêu tên các giai đoạn của quá trình truyền tin trong tế bào.</br>b. Kể tên các loại thụ thể để tế bào tiếp nhận thông tin từ môi trường.</br>c. Một nhà khoa học đã tiến hành gây đáp ứng tế bào gan bằng hormone insulin để kích thích chuyển hóa glucose thành glycogen. Ông đã tiến hành hai thí nghiệm như sau:</br>- Thí nghiệm 1: Cho tế bào gan(A) còn nguyên vẹn vào môi trường có chứa insulin và glucose.</br>- Thí nghiệm 2: Tiêm trực tiếp insulin vào trong tế bào gan (B) rồi cho vào môi trường có chứa glucose.</br>Sau khi quan sát kết quả, ông nhận thấy glycogen xuất hiện ở một trong hai tế bào trên. Tế bào nào đã xuất hiện glycogen? Tại sao glycogen không xuất hiện ở tế bào còn lại?",

                answer: "a. Các giai đoạn truyền tin tế bào gồm: tiếp nhận tín hiệu, truyền tín hiệu và đáp ứng tín hiệu.</br>b.Các loại thụ thể: thụ thể trên màng tế bào và thụ thể trong tế bào chất.</br>c. Tế bào xuất hiện glycogen là tế bào A, vì insulin tác động vào thụ thể trên màng tế bào A, kích hoạt con đường truyền tín hiệu vào bên trong tế bào gây đáp ứng tế bào chuyển hóa glucose thành glycogen.</br>Tế bào B, insulin đã được tiêm vào trong tế bào nên không tác động vào thụ thể trên bề mặt tế bào được, vì vậy tế bào không chuyển hóa glucose thành glycogen."
            },

            // Thêm các câu hỏi SA Truyền tin tế bào level 3...
        ]
    },
    // Khái quát về chuyển hóa vật chất và năng lượng

    saKQCHVCVNL: {
        level1: [
            {
                "question": "TB_KQCHVCVNL_L1_001. Năng lượng là gì?",
                "answer": "Là khả năng sinh công hay khả năng tạo nên sự chuyển động của vật chất."
            },
            {
                "question": "TB_KQCHVCVNL_L1_002. Có bao nhiêu dạng năng lượng trong tế bào?",
                "answer": "Hai dạng năng lượng trong tế bào là động năng và thế năng."
            },
            {
                "question": "TB_KQCHVCVNL_L1_003. Động năng là gì?",
                "answer": "Năng lượng làm vật di chuyển hoặc thay đổi trạng thái."
            },
            {
                "question": "TB_KQCHVCVNL_L1_004. Thế năng là gì?",
                "answer": "Năng lượng tiềm ẩn do vị trí hoặc trạng thái của vật chất."
            },
            {
                "question": "TB_KQCHVCVNL_L1_005. Dạng năng lượng chính được tế bào sử dụng là gì?",
                "answer": "Hóa năng."
            },
            {
                "question": "TB_KQCHVCVNL_L1_006. ATP là gì?",
                "answer": "Là 'đồng tiền' năng lượng của tế bào, dự trữ năng lượng ngắn hạn."
            },
            {
                "question": "TB_KQCHVCVNL_L1_007. ATP gồm những thành phần nào?",
                "answer": "ATP gồm adenine, ribose và ba gốc phosphate."
            },
            {
                "question": "TB_KQCHVCVNL_L1_008. ATP có chức năng gì trong tế bào?",
                "answer": "Cung cấp năng lượng cho các hoạt động sống."
            },

            {
                "question": "TB_KQCHVCVNL_L1_009. Quá trình chuyển hóa vật chất trong tế bào là gì?",
                "answer": "Tập hợp các phản ứng hóa học trong tế bào chuyển đổi chất này thành chất khác."
            },
            {
                "question": "TB_KQCHVCVNL_L1_010. Chuyển hóa năng lượng trong tế bào là gì?",
                "answer": "Chuyển đổi năng lượng từ dạng này sang dạng khác theo quy luật nhiệt động học."
            },
            {
                "question": "TB_KQCHVCVNL_L1_011. Mối quan hệ giữa chuyển hóa vật chất và năng lượng trong tế bào là gì?",
                "answer": "Chuyển hóa vật chất luôn đi kèm với sự chuyển đổi năng lượng trong tế bào."
            },
            {
                "question": "TB_KQCHVCVNL_L1_012. Enzyme là gì?",
                "answer": "Chất xúc tác sinh học giúp tăng tốc độ phản ứng trong tế bào mà không bị biến đổi sau phản ứng."
            },
            {
                "question": "TB_KQCHVCVNL_L1_013. Enzyme có cấu trúc như thế nào?",
                "answer": "Enzyme có thể là protein hoặc kết hợp với cofactor."
            },
            {
                "question": "TB_KQCHVCVNL_L1_014. Trung tâm hoạt động của enzyme có vai trò gì?",
                "answer": "Nơi liên kết với cơ chất và thực hiện phản ứng xúc tác."
            },
            {
                "question": "TB_KQCHVCVNL_L1_015. Vai trò của enzyme trong chuyển hóa là gì?",
                "answer": "Xúc tác phản ứng sinh hóa, tăng tốc độ phản ứng và giảm năng lượng hoạt hóa."
            },

            {
                "question": "TB_KQCHVCVNL_L1_016. Các yếu tố nào ảnh hưởng đến hoạt tính của enzyme?",
                "answer": "Nồng độ enzyme và cơ chất, độ pH, nhiệt độ và chất điều hòa enzyme."
            },
            {
                "question": "TB_KQCHVCVNL_L1_017. Lấy ví dụ về enzyme có pH tối ưu cụ thể.",
                "answer": "Enzyme pepsin có pH tối ưu là 2."
            },
            {
                "question": "TB_KQCHVCVNL_L1_018. Chất điều hòa enzyme là gì?",
                "answer": "Có thể là chất ức chế hoặc chất hoạt hóa, ảnh hưởng đến hoạt tính của enzyme."
            },
            {
                "question": "TB_KQCHVCVNL_L1_019. Chất ức chế enzyme có tác dụng gì?",
                "answer": "Làm giảm hoặc mất hoạt tính của enzyme."
            },
            {
                "question": "TB_KQCHVCVNL_L1_020. Điều hòa quá trình chuyển hóa vật chất diễn ra như thế nào?",
                "answer": "Điều hòa quá trình chuyển hóa vật chất thông qua sự điều chỉnh hoạt tính của enzyme."
            },
            {
                "question": "TB_KQCHVCVNL_L1_021. ATP cung cấp năng lượng cho những hoạt động nào trong tế bào?",
                "answer": "Tổng hợp chất, vận chuyển chất qua màng và sinh công cơ học."
            },


            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 1 khác...
        ],
        level2: [
            {
                "question": "TB_KQCHVCVNL_L2_001. Tại sao ATP được gọi là đồng tiền năng lượng của tế bào?",
                "answer": "Vì ATP sinh ra liên tục và được sử dụng ngay cho mọi hoạt động sống của tế bào."
            },
            {
                "question": "TB_KQCHVCVNL_L2_002. Khi nào enzyme hoạt động hết công suất?",
                "answer": "Khi tất cả cơ chất đã liên kết và phản ứng được xúc tác hoàn toàn."
            },
            {
                "question": "TB_KQCHVCVNL_L2_003. ATP được sinh ra như thế nào trong tế bào?",
                "answer": "Trong các phản ứng trao đổi chất như hô hấp tế bào và quang hợp."
            },
            {
                "question": "TB_KQCHVCVNL_L2_004. Hình ảnh minh họa ảnh hưởng của nhiệt độ đến tốc độ phản ứng enzyme. X là gì và có giá trị trung bình khoảng bao nhiêu đối với các enzyme ở động vật có vú? Hoạt độ enzyme ở vùng B diễn ra như thế nào? Giải thích.",
                image: "https://nhantri.top/media/Grade10/sodopuenzyme.png",
                "answer": "X là giá trị nhiệt độ tối thích (thích hợp nhất, tối ưu) của phản ứng enzyme. Nó có tính đặc trưng enzyme – cơ chất. Khi enzyme bão hòa, nhiệt độ này là nhiệt độ mà tốc độ phản ứng enzyme là cao nhất. Đối với các enzyme của động vật có vú, X có giá trị trung bình là 37<sup>o</sup>C (một số trường hợp có thể lên đến 40<sup>o</sup>C). Nhận xét: Ở vùng B tốc độ phản ứng giảm dần khi nhiệt độ tăng lên vì khi nhiệt độ tăng vượt qua nhiệt độ tối ưu, cấu trúc của enzyme bị biến đổi, cơ chất giảm dần ái lực liên kết với enzyme (hoặc số lượng trung tâm hoạt động của enzyme giảm dần), do vậy tốc độ phản ứng giảm. Tốc độ phản ứng bằng 0 là do enzyme bị biến tính (mất hoạt tính hoàn toàn)."
            },
            {
                "question": "TB_KQCHVCVNL_L2_005. Người ta lần lượt cho vào 3 ống nghiệm các chất sau: Ống nghiệm 1: 5ml hồ tinh bột + 2ml nước cất; Ống nghiệm 2: 5ml hồ tinh bột + 2ml nước bọt; Ống nghiệm 3: 5ml hồ tinh bột + 2ml nước bọt + nhỏ vài giọt HCl 3 %. Các ống nghiệm trên đều đặt trong cốc nước ấm 37°C nhưng quên không đánh dấu.Trình bày cách nhận biết các ống nghiệm 1, 2, 3 và giải thích.",
                "answer": "Dùng dung dịch iodine và giấy quỳ để nhận biết: dùng thuốc thử iodine nhỏ vào tất cả các ống nghiệm, chỉ có một ống không có màu xanh tím mà có màu vàng nâu(của dung dịch iodine) là ống 2. Hai ống còn lại (ống 1 và ống 3) đều có màu xanh tím. Dùng giấy quỳ tím cho vào 2 ống nghiệm, ống nào giấy quỳ chuyển sang màu đỏ là ống 3 (có HCl), còn lại là ống 1 (có nước cất). Giải thích: Ống 1: hồ tinh bột không bị biến đổi do không có enzyme nên khi nhỏ thuốc thử iodine thì sẽ đổi sang màu xanh. Do không có tính acid/ base nên không làm đổi màu quỳ tím. Ống 2: không đổi màu khi nhỏ thuốc thử iodine do hồ tinh bột bị biến đổi thành đường mantose dưới tác động của enzyme amylase trong nước bọt. Ống 3: enzyme amylase trong nước bọt trong môi trường acid bị biến tính (mất chức năng) nên không thể biến đổi được hồ tinh bột, khi nhỏ iodine sẽ đổi màu xanh. Do có HCl nên khi dùng quỳ tím nhận biết sẽ đổi sang màu đỏ."
            },
            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 2...
        ],
        level3: [
            {
                "question": "TB_KQCHVCVNL_L3_001. Nếu thiếu enzyme, tế bào sẽ ra sao?",
                "answer": "Các phản ứng sinh hóa sẽ xảy ra rất chậm, không duy trì được hoạt động sống của tế bào."
            },
            {
                "question": "TB_KQCHVCVNL_L3_002. Bản chất của enzyme là gì? Vì sao enzyme có hoạt tính mạnh hơn chất xúc tác vô cơ?",
                "answer": "Bản chất của enzyme là protein. Với enzyme hai thành phần có thêm một lượng nhỏ coenzyme. Enzyme làm giảm mức năng lượng hoạt hóa cần cho phản ứng nên chỉ cần một lượng nhỏ."
            },
            {
                question: "TB_KQCHVCVNL_L3_003*. Bằng cơ chế nào tế bào có thể ngừng việc tổng hợp một chất nhất định khi cần?",

                answer: "Tế bào có thể điều khiển tổng hợp các chất bằng cơ chế ức chế ngược âm tính. Sản phẩm khi được tổng hợp ra quá nhiều sẽ trở thành chất ức chế quay lại ức chế enzyme xúc tác cho phản ứng đầu tiên của chuỗi phản ứng tạo ra sản phẩm đó."
            },
            {
                question: "TB_KQCHVCVNL_L3_004*. Thế nào là chất ức chế cạnh tranh và chất ức chế không cạnh tranh của một enzim? Nếu chỉ có các chất ức chế và cơ chất cùng dụng cụ xác định hoạt tính của enzim thì làm thế nào để có thể phân biệt hai loại chất ức chế này?",

                answer: "Chất ức chế cạnh tranh là chất có cấu hình phân tử giống với cơ chất của enzyme, vì thế chúng cạnh tranh với cơ chất trong việc chiếm vùng trung tâm hoạt động. Chất ức chế không cạnh tranh liên kết với một vùng nhất định(không phải trung tâm hoạt động), làm biến đổi cấu hình của phân tử nên enzim không liên kết được với cơ chất ở vùng trung tâm hoạt động. Ta có thể phân biệt được hai loại chất ức chế bằng cách cho một lượng enzyme nhất định cùng với cơ chất và chất ức chế vào một ống nghiệm, sau đó tăng dần lượng cơ chất thêm vào ống nghiệm, nếu tốc độ phản ứng gia tăng thì chất ức chế đó là chất ức chế cạnh tranh."
            },
            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 3...
        ],
        level4: [
            {
                question: "TB_KQCHVCVNL_L4_001 [HSGTPHN2526 - 1.5 điểm]. Hình 1 ảnh (a) ở bên mô tả phản ứng của enzyme succinic dehydrogenase biến đổi chất succinate thành sản phẩm là fumarate. Tuy nhiên sản phẩm sẽ không được tạo ra nếu có mặt malonate (hình b). Cho biết tác dụng của malonate. Giải thích hiện tượng trên.",
                image: "https://nhantri.top/media/Grade10/uccheenzyme.png",
                answer: "Tác dụng của malonate: đây là chất ức chế cạnh tranh.</br>Giải thích:</br>- Malonate có cấu tạo và hình dạng khá giống với cơ chất(succinate).</br>- Khi có chất ức chế cạnh tranh(malonate), vùng trung tâm hoạt động của enzyme sẽ kết hợp với chất ức chế cạnh tranh mà không thể kết hợp được với cơ chất.Vì vậy mà enzyme succinic dehydrogenase sẽ không thể biến đổi succinate thành sản phẩm là fumarate."
            },
            {
                "question": "TB_KQCHVCVNL_L4_042 [30-4-02]. ATP là gì? Vì sao ATP được gọi là tiền tệ năng lượng của sinh giới?",

                "answer": "- ATP là viết tắt của adenosine triphosphate<br />- Mọi cơ thể sống đều sử dụng năng lượng từ ATP.<br />- Quá trình sinh năng lượng biến đổi ADP thành ATP.<br />- Quá trình tiêu thụ năng lượng biến đổi ATP thành ADP."
            },
            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 3...
        ]
    },
    // Tổng hợp và phân giải các chất trong tế bào

    saQTCHVCVNL: {
        level1: [
            {
                "question": "TB_THVPGCC_L1_001. ...",
                "answer": "..."
            },


            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 1 khác...
        ],
        level2: [
            {
                "question": "TB_THVPGCC_L2_001. ...",
                "answer": "..."
            },

            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 2...
        ],
        level3: [
            {
                "question": "TB_THVPGCC_L3_001. ...",
                "answer": "..."
            },

            // Thêm các câu hỏi SA Chuyển hóa vật chất và năng lượng level 3...
        ],
        level4: [
            {
                question: "TB_THVPGCC_L4_001 [HSGTPHN2526 - 1.5 điểm]. Trong quá trình hô hấp hiếu khí của tế bào nhân thực, ATP đã được tạo ra ở những giai đoạn nào? Giai đoạn nào tạo nhiều ATP nhất? Trình bày cơ chế tạo ATP ở giai đoạn đó.",

                answer: "ATP được tạo ra ở những giai đoạn:</br>- Quá trình đường phân: tạo ra 2 ATP.</br>- Chu trình Krebs: tạo ra 2 ATP.</br>- Chuỗi vận chuyển điện tử: Tạo ra 34 ATP.</br>Giai đoạn chuỗi vận chuyển điện tử tạo ra nhiều ATP nhất.</br>Cơ chế: Sự vận chuyển điện tử trong hô hấp tạo ra động lực bơm H+ từ chất nền ti thể vào xoang gian màng, xuất hiện sự chênh lệch nồng độ từ xoang gian màng qua kênh ATP synthase vào chất nền tạo ATP từ ADP và phospho vô cơ."
            },
            {
                question: "TB_THVPGCC_L4_002 [HSGTPHN2526 - 1.5 điểm]. Nghiên cứu về quá trình quang hợp của thực vật:</br>a.Chú thích các pha 1, pha 2; kí hiệu a, b, c, d; các chất A, B, C trong Hình 1.</br>b.Nếu tiến hành thí nghiệm môi trường không được chiếu sáng trong 1 giờ, sau đó tiếp tục không chiếu sáng và sục khí CO₂ đánh dấu phóng xạ C¹⁴ trong 25 phút thì glucose thu được tại thời điểm kết thúc sục khí có chứa C¹⁴ không? Giải thích.",
                image: "https://nhantri.top/media/Grade10/dienquanghop.png",
                answer: "a. Pha 1: Pha sáng; Pha 2: Pha tối.</br>a: ATP; b: NADPH; c: ADP; d: NADP.</br>A: nước; B: oxygen; C: carbon dioxide.</br>b.Không có C<sup>14</sup> trong glucose, do trong môi trường không được chiếu sáng sẽ không tạo ra ATP và NADPH. Vì vậy, không tạo ra nguyên liệu cho pha tối, quá trình cố định CO<sub>2</sub> không diễn ra được nên không có C<sup>14</sup> trong phân tử glucose."
            },
            {
                "question": "TB_THVPGCC_L4_003. Quá trình phân giải các chất trong tế bào là gì?",
                "answer": "Là quá trình phá vỡ các phân tử sinh học lớn thành các phân tử nhỏ, giải phóng năng lượng."
            },
            {
                "question": "TB_THVPGCC_L4_004. Phân giải các chất có vai trò gì trong tế bào?",
                "answer": "Cung cấp năng lượng cho các hoạt động sống và tạo nguyên liệu cho tổng hợp."
            },
            {
                "question": "TB_THVPGCC_L4_005. Có bao nhiêu con đường phân giải trong tế bào?",
                "answer": "Ba con đường: hô hấp tế bào, hô hấp kị khí và lên men."
            },
            {
                "question": "TB_THVPGCC_L4_006. Hô hấp tế bào cần yếu tố nào để diễn ra?",
                "answer": "Cần có oxygen (O<sub>2</sub>)."
            },
            {
                "question": "TB_THVPGCC_L4_007. Quá trình hô hấp tế bào là gì?",
                "answer": "Là quá trình phân giải hoàn toàn glucose thành O<sub>2</sub> và nước, giải phóng năng lượng."
            },
            {
                "question": "TB_THVPGCC_L4_008. Hô hấp tế bào diễn ra ở đâu trong tế bào nhân thực?",
                "answer": "Diễn ra trong tế bào chất và ti thể."
            },
            {
                "question": "TB_THVPGCC_L4_009. Đường phân diễn ra ở đâu và cần O<sub>2</sub> không?",
                "answer": "Diễn ra trong tế bào chất và không cần O<sub>2</sub>."
            },
            {
                "question": "TB_THVPGCC_L4_010. Chu trình Krebs xảy ra ở đâu?",
                "answer": "Trong chất nền của ti thể."
            },
            {
                "question": "TB_THVPGCC_L4_011. Sản phẩm chính của chu trình Krebs là gì?",
                "answer": "CO<sub>2</sub>, NADH, FADH<sub>2</sub>, ATP."
            },
            {
                "question": "TB_THVPGCC_L4_012. Chuỗi truyền electron diễn ra ở đâu trong tế bào?",
                "answer": "Diễn ra ở màng trong ti thể."
            },
            {
                "question": "TB_THVPGCC_L4_013. Lên men là quá trình gì?",
                "answer": "Là quá trình phân giải glucose không hoàn toàn để tạo năng lượng mà không có sự tham gia của CO<sub>2</sub>."
            },
            {
                "question": "TB_THVPGCC_L4_014. Lên men diễn ra ở đâu trong tế bào?",
                "answer": "Diễn ra trong tế bào chất."
            },
            {
                "question": "TB_THVPGCC_L4_015. Quá trình lên men có bao nhiêu giai đoạn?",
                "answer": "Gồm hai giai đoạn: đường phân và lên men."
            },
            {
                "question": "TB_THVPGCC_L4_016. Lên men tạo ra bao nhiêu ATP từ một phân tử glucose?",
                "answer": "2 phân tử ATP."
            },
            {
                "question": "TB_THVPGCC_L4_017. Tổng hợp các chất trong tế bào là gì?",
                "answer": "Là quá trình tạo ra các hợp chất phức tạp từ các chất đơn giản, tiêu tốn năng lượng."
            },
            {
                "question": "TB_THVPGCC_L4_018. Quang hợp ở thực vật cần yếu tố gì?",
                "answer": "Cần CO<sub>2</sub>, nước và năng lượng ánh sáng."
            },
            {
                "question": "TB_THVPGCC_L4_019. Pha sáng sử dụng nguyên liệu gì?",
                "answer": "H<sub>2</sub>O, ADP, Pi, NADP⁺, ánh sáng."
            },
            {
                "question": "TB_THVPGCC_L4_020. Sản phẩm của pha sáng là gì?",
                "answer": "ATP, NADPH, H⁺ và O<sub>2</sub>."
            },
            {
                "question": "TB_THVPGCC_L4_021. Pha tối phụ thuộc vào yếu tố nào?",
                "answer": "Phụ thuộc vào sản phẩm của pha sáng: ATP và NADPH."
            },
            {
                "question": "TB_THVPGCC_L4_022. Chu trình Calvin trong pha tối sử dụng nguyên liệu gì?",
                "answer": "CO<sub>2</sub>, ATP, NADPH."
            },
            {
                "question": "TB_THVPGCC_L4_023. Quang khử là gì?",
                "answer": "Sử dụng năng lượng ánh sáng để khử CO<sub>2</sub> mà không cần nước và không giải phóng O<sub>2</sub>."
            },
            {
                "question": "TB_THVPGCC_L4_024. Nêu khái niệm và viết phương trình tổng quát của quá trình quang hợp.",
                "answer": "Quang hợp là quá trình tổng hợp các chất hữu cơ phức tạp từ các chất vô cơ đơn giản dưới tác dụng của ánh sáng mặt trời và sự tham gia của hệ sắc tố thực vật. 6CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6 O<sub>2</sub>."
            },
            {
                "question": "TB_THVPGCC_L4_025. Sản phẩm chính của quá trình đường phân là gì?",
                "answer": "2 phân tử pyruvate, 2 ATP, 2 NADH."
            },
            {
                "question": "TB_THVPGCC_L4_026. Nguồn năng lượng và nguyên liệu cho quá trình tổng hợp đến từ đâu?",
                "answer": "Từ các sinh vật tự dưỡng như thực vật, tảo, một số vi khuẩn."
            },
            {
                "question": "TB_THVPGCC_L4_027. Vi khuẩn hóa tự dưỡng sử dụng năng lượng từ đâu?",
                "answer": "Sử dụng năng lượng từ các phản ứng oxy hóa hợp chất vô cơ."
            },
            {
                "question": "TB_THVPGCC_L4_028. Phân biệt pha sáng và pha tối của quá trình quang hợp.",
                "answer": "Pha sáng xảy ra ở màng thylakoid; Trong điều kiện có ánh sáng; sử dụng nguyên liệu là H<sub>2</sub>O, ADP, Pi, NADP+; sản phẩm tạo ra gồm O<sub>2</sub>, ATP, NADPH; vai trò chuyển hóa năng lượng ánh sáng thành năng lượng ATP và NADPH cung cấp cho pha tối. Pha tối: xảy ra ở chất nền lục lạp; không cần ánh sáng; nguyên liệu gồm CO<sub>2</sub>, ATP, NADPH; sản phẩm gồm chất hữu cơ, ADP, Pi, NADP+; vai trò tổng hợp chất hữu cơ từ CO<sub>2</sub>, tái sinh ADP, Pi, NADP + cung cấp cho pha sáng."
            },
            {
                "question": "TB_THVPGCC_L4_029. Thế nào là hô hấp tế bào? Tại sao người vận động quá sức thường thấy mỏi cơ?",
                "answer": "Hô hấp tế bào là quá trình phân giải nguyên liệu hữu cơ (chủ yếu là glucose) thành các chất đơn giản (CO<sub>2</sub>, H<sub>2</sub>O), giải phóng năng lượng cho các hoạt động sống. Khi vận động ta thường thấy mỏi cơ vì khi vận động quá sức, quá trình hô hấp ngoài không cung cấp đủ oxygen cho quá trình hô hấp tế bào nên các tế bào cơ phải sử dụng quá trình hô hấp kị khí để tạo năng lượng ATP. Sản phẩm của quá trình hô hấp kị khí là acid lactic, chất này tích lũy trong tế bào gây nên hiện tượng mỏi cơ."
            },
            {
                "question": "TB_THVPGCC_L4_030. Quá trình phân giải và tổng hợp có liên quan như thế nào?",
                "answer": "Phân giải cung cấp năng lượng và nguyên liệu cho quá trình tổng hợp."
            },
            {
                "question": "TB_THVPGCC_L4_031. Quá trình tổng hợp các chất của vi sinh vật được ứng dụng trong thực tiễn như thế nào?",
                "answer": "Quá trình tổng hợp các chất trong tế bào diễn ra nhanh: sản xuất sinh khối, thu protein đơn bào bổ sung vào thức ăn của người và vật nuôi. VSV có khả năng tổng hợp các amino acid, kể cả amino acid không thay thế: nuôi cấy VSV thu amino acid không thay thế.	VSV có khả năng tổng hợp polysaccharide tiết ra môi trường để bảo vệ TB: để sản xuất gôm sinh học dùng trong công nhghiệp thực phẩm, khai thác dầu mỏ, y học. VSV có khả năng tổng hợp nhiều sản phẩm sinh hoc có hoạt tính cao: nuôi cấy chúng để thu sản phảm có hoạt tính sinh học cao như enzyme ngoại bào, kháng sinh, … phục vụ đời sống."
            },
            {
                "question": "TB_THVPGCC_L4_032. Chất độc X có tác dụng ức chế các enzyme trong chu trình Calvin của tế bào thực vật. Nếu xử lí tế bào đang quang hợp bằng chất X thì lượng oxygen tạo ra từ tế bào này thay đổi như thế nào? Giải thích.",
                "answer": "Chu trình Calvin sử dụng ATP và NADPH, tạo ra ADP, Pi, NADP+ cung cấp trở lại cho pha sáng. Khi xử lý chất độc X, chu trình Calvin bị ngưng, lượng ADP, Pi, NADP+ không được tái tạo → pha sáng thiếu nguyên liệu → pha sáng ngừng → quá trình quang phân li nước giải phóng oxi bị ngừng trệ → lượng oxi tạo ra giảm dần đến 0."
            },
            {
                "question": "TB_THVPGCC_L4_033. Giải thích cơ sở khoa học của việc giảm thiểu cường độ hô hấp trong các biện pháp bảo quản nông sản (thực phẩm, rau quả, hạt,..). Có nên giảm cường độ hô hấp đến 0 không ? Giải thích tại sao.",
                "answer": "Phải giảm cường độ hô hấp vì hô hấp làm tiêu hao chất hữu cơ của đối tượng bảo quản, do đó làm giảm số lượng và chất lượng sản phẩm trong quá trình bảo quản. Hô hấp làm thay đổi thành phần không khí trong môi trường bảo quản. Khi hô hấp tăng thì O<sub>2</sub> giảm, CO<sub>2</sub> tăng. Khi O<sub>2</sub> giảm quá mức, CO<sub>2</sub> tăng quá mức thì hô hấp của nông sản sẽ chuyển sang dạng phân giải kị khí → sẽ bị phân hủy nhanh chóng. Hô hấp làm tăng nhiệt độ trong môi trường bảo quản → tăng tốc độ các phản ứng chuyển hóa → làm giảm số lượng và chất lượng trong quá trình bảo quản. Hô hấp làm tăng độ ẩm của nông sản → càng làm tăng cường độ hô hấp của nông sản. Ngoài ra việc tăng độ ẩm còn tạo điều kiện thuận lợi cho vi sinh vật bám trên nông sản phát triển, vi sinh vật phân giải làm hỏng sản phẩm. Không nên giảm cường độ hô hấp đến 0 vì nếu giảm đến 0 đối tượng bảo quản sẽ chết (không đáp ứng được mục tiêu bảo quản, nhất là đối với hạt củ giống)."
            },
            {
                "question": "TB_THVPGCC_L4_034 [30-4-98]. Một học sinh đã viết hai quá trình lên men của vi sinh vật ở trạng thái kị khí (hiếm khí) như sau:<br />C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> → CH<sub>3</sub>CHOHCOOH  (1)<br />CH<sub>3</sub>CH<sub>2</sub>OH + O<sub>2</sub> → CH<sub>3</sub>COOH + H<sub>2</sub>O + Q (2)",
                "answer": "Bạn học sinh kia đã có sự nhầm lẫn sau:<br />Ở (1): + Là quá trình lên men lactic (lên men kị khí) do đó cơ chất phải là đường đơn (loại glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) chứ không phải đường đôi (saccharose) như đã viết.<br />Chất tạo thành là lactic acid.<br />Do vi khuẩn lactic.<br />Ở (2):<br />+ Là quá trình oxy hoá, không thể coi là sự lên men kị khí được, do đó đặt vào đây là không hợp đầu đề.<br />Cơ chất ở đây là rượu ethylic.<br />Chất tạo thành là acetic acid.<br />Do vi khuẩn acetic."
            },
            {
                "question": "TB_THVPGCC_L4_035 [30-4-98]. Sơ đồ sau đây mô tả cấu trúc của bào quan A. Hãy cho biết bào quan này là gì? Chú thích và nói sơ lược của các cấu trúc: 1, 2, 3, 4, 5, 6.",
                image: "https://nhantri.top/media/Grade10/luclapdien.png",
                "answer": "Bào quan trên là lục lạp. Vị trí cấu tạo các thành phần cấu trúc:<br />1: màng trong; 2: màng ngoài, là màng kép lipoprotein bao bọc quanh lục lạp; 3: grana nằm rải rác trong khối cơ chất; 4: thylacoid là những túi dẹt chồng lên nhau tạo thành grana, màng bao túi dẹt là màng đơn chất nguyên sinh; 5: quangtasome nằm trên bề mặt của màng bao túi dẹt, bên trong chứa sắc tố và các enzyme; 6: chất nền (stroma)."
            },
            {
                "question": "TB_THVPGCC_L4_036 [30-4-98]. Ở chú thích (5) xảy ra hiện tượng gì? Bao gồm những biến đổi cơ bản nào?",
                image: "https://nhantri.top/media/Grade10/luclapdien.png",
                "answer": "Vị trí số (5) là quantasome, nằm trên màng thylakoid của grana. Đây là trung tâm thực hiện pha sáng của quang hợp, tạo ra nguyên liệu cho pha tối (diễn ra ở stroma).<br />Các biến đổi cơ bản:<br />- Ánh sáng tác động vào diệp lục làm diệp lục bị kích động (mất electron).<br />- Quang phân li nước: O<sub>2</sub> ← 2 H<sub>2</sub>O → 4 H<sup>+</sup> + O<sub>2</sub> + electron (bù lại quantasome).<br />- ATP và NADPH<sub>2</sub> được tổng hợp và dùng vào pha tối, xảy ra ở chất nền stroma, CO<sub>2</sub> đi vào chu trình Calvin, tổng hợp các hợp chất hữu cơ."
            },
            {
                "question": "TB_THVPGCC_L4_037 [30-4-99]. So sánh quá trình lên men rượu và lên men lactic.",

                "answer": "Giống nhau: Đều do vi sinh vật thực hiện trong điều kiện kị khí, nguyên liệu là đường đơn (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) và đều trải qua giai đoạn đường phân.<br />Khác nhau:<br />Lên men rượu từ đường: tác nhân là nấm men; sản phẩm là rượu ethylic (C<sub>2</sub>H<sub>5</sub>OH) và CO<sub>2</sub> lactic acid), thời gian lâu hơn, phản ứng C<sub>6</sub>H<sub>12</sub>​O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub><br />Lên men lactic: tác nhân là vi khuẩn lactic, thời gian nhanh hơn, sản phẩm là lactic acid CH<sub>3</sub>CHOHCOOH, phản ứng: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 CH<sub>3</sub>−CHOH−COOH."
            },
            {
                "question": "TB_THVPGCC_L4_038 [30-4-99]. Nêu quy trình của quá trình lên men để sản xuất rượu từ nguyên liệu gạo.",

                "answer": "Giai đoạn 1: Đồ xôi gạo và rắc bánh men.<br />Giai đoạn 2: Chuyển hóa tinh bột thành đường nhờ nấm sợi trong điều kiện hiếu khí: (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)n + n H<sub>2</sub>O → n C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.<br />Giai đoạn 3: Chuyển hóa đường thành rượu nhờ nấm men trong điều kiện kị khí: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>.<br />Giai đoạn 4: Bổ sung nước và chưng cất."
            },
            {
                "question": "TB_THVPGCC_L4_038 [30-4-99]. Trình bày thí nghiệm chứng minh ánh sáng cần cho quang hợp.<br />a) Dụng cụ thí nghiệm.<br />b) Các bước tiến hành.<br />c) Nhận xét về ảnh hưởng của ánh sáng đến quang hợp.",

                "answer": "a) Dung cụ: Cây đậu hoặc cây dâm bụt (có 4-5 lá, trồng ngoài vườn); Giấy đen hoặc giấy thiếc; kẹp; cồn; dung dịch iodine trong KI; bếp; nồi đun cách thủy; cốc thủy tinh.<br />b) Các bước tiến hành:<br />- Dùng giấy đen hay giấy thiếc bịt một phần của lá định làm thí nghiệm (trước vài ngày).<br />- Ngắt lá, bỏ giấy che, nhúng lá vào nước sôi từ 1 – 2 phút rồi cho vào cốc thủy tinh có cồn và đặt vào nồi, đun cách thủy.<br />- Khi lá mất màu hoàn toàn thì vớt ra, rửa sạch cồn và cho vào cốc đựng KI.<br />- Vớt lá ra khỏi dung dịch, quan sát.<br />c) Nhận xét: Chỉ những nơi lá không bị che bởi giấy thiếc, nhận đầy đủ ánh sáng thì khi nhuộm dung dịch iodine mới đổi thành màu xanh lơ, chứng minh ánh sáng cần cho quang hợp.<br />- Yếu tố quan trọng để đảm bảo kết quả chính xác: Lá phải được đun cách thủy trong cồn để tẩy sạch hoàn toàn màu của diệp lục. Nếu lá còn lẫn diệp lục, phản ứng hiện diện của tinh bột với thuốc thử iodine (màu xanh lơ) sẽ rất nhạt và khó quan sát."
            },
            {
                "question": "TB_THVPGCC_L4_039 [30-4-00]. Chứng minh nguồn gốc oxygen thải ra trong quang hợp. Cơ chế của quá trình trên? Quá trình trên xảy ra ở đâu?",

                "answer": "Nguồn gốc oxygen thải ra trong quang hợp:<br />- Oxygen thải ra trong quang hợp từ nước, do sự quang phân li nước.<br />-Chứng minh:<br />+ Cung cấp H<sup>2</sub>O<sup>∗</sup> (có oxygen đánh dấu ∗: O<sup>18</sup>) và CO<sub>2</sub>: oxygen giải phóng là O<sup>18</sup>.<br />+ Cung cấp H<sub>2</sub>O và CO<sub>2</sub>: oxygen giải phóng là O<sup>16</sup> (oxygen không đánh dấu).<br />Quá trình quang phân li nước: 2 H<sub>2</sub>O --> 4 H<sup>+</sup> + 4 e<sup>−</sup> + O<sup>2</sub>↑.<br />Nơi xảy ra: tại các thylakoid của các grana."
            },
            {
                "question": "TB_THVPGCC_L4_040 [30-4-00]. Trình bày mối liên quan giữa pha sáng và pha tối trong quang hợp, mối liên quan giữa quang hợp và hô hấp.",

                "answer": "- Giữa pha sáng và pha tối: Pha sáng cung cấp ATP và chất khử mạnh (NADPH<sub>2</sub>) để khử CO<sub>2</sub> ở pha tối. Ngược lại, pha tối sử dụng sản phẩm của pha sáng để đồng hoá cacbon, tạo chất hữu cơ, đồng thời cung cấp ADP và NADP<sup>+</sup> cho pha sáng.<br />- Giữa quang hợp và hô hấp:<br />+ Quá trình hô hấp (gồm hô hấp sáng ở lục lạp thực vật C3 và hô hấp ti thể) cung cấp nguyên liệu cho quang hợp.<br />+ Ở thực vật C3, hiện tượng hô hấp sáng làm phân hủy nhiều sản phẩm quang hợp, dẫn đến giảm năng suất cây trồng.<br />+ Trong tối, không có quang hợp, chỉ có hô hấp ti thể tạo ra nhiều sản phẩm trung gian cần thiết cho quang hợp."
            },
            {
                "question": "TB_THVPGCC_L4_041 [30-4-02]. Phân biệt pha sáng và pha tối của quá trình quang hợp.",

                "answer": "Kẻ bảng phân biệt pha sáng và pha tối ở các tiêu chí: vị trí, nguyên liệu, sản phẩm, chuyển đổi năng lượng."
            },
            {
                "question": "TB_THVPGCC_L4_042 [30-4-02]. Cho biết cơ chế và ý nghĩa của quá trình quang phân li nước.",

                "answer": "- Cơ chế: 4 H<sub>2</sub>O → 4 H<sup>+</sup> + 4 OH<sup>-</sup>;  4 OH<sup>-</sup> → 2 H<sub>2</sub>O<sub>2</sub> + 4 electron; 2 H<sub>2</sub>O<sub>2</sub> → H<sub>2</sub>O + O<sub>2</sub>. <br />- Ý nghĩa: bù electron bị mất cho diệp lục; cung cấp oxygen; tạo NADPH."
            },
            {
                "question": "TB_THVPGCC_L4_043 [30-4-02]. Trong tế bào có hai bào quan có khả năng tổng hợp ATP, đó là những bào quan nào? Trình bày cấu tạo của hai bào quan đó.",

                "answer": "- Hai bào quan là lục lạp và ti thể. <br />- Cấu tạo: có hai lớp màng, chất nền, ribosome, DNA. Tuy nhiên, màng ti thể thì gấp nếp tạo các gờ răng lược chứa nhiều enzyme hô hấp còn trong lục lạp có grana được tạo bởi các tấm thylakoid có gắn quantasome."
            },
            {
                "question": "TB_THVPGCC_L4_044 [30-4-02]. ATP được tạo ra trong lục lạp và ti thể được sử dụng để làm gì?",

                "answer": "- ATP trong lục lạp được tạo ra ở pha sáng và sử dụng cho pha tối để tổng hợp chất hữu cơ. <br />- ATP được tạo ra trong ti thể được sử dụng cho các hoạt động sinh tổng hợp các chất hữu cơ, hấp thu, vận chuyển các chất, ...."
            },
            {
                "question": "TB_THVPGCC_L4_045 [30-4-02]. Cơ chế tạo ra ATP ở lục lạp có gì khác với ở ti thể",

                "answer": "- ATP trong lục lạp được tạo ra do quang năng tác động lên lục lạp kích động các điện tử di chuyển qua các chất trung gian, một phần năng lượng mất đi dưới dạng nhiệt, một phần tạo ra ATP (4 H<sub>2</sub>O + 2 ADP + 2 Pi + 2 NADP<sup>+</sup> →  2 H<sub>2</sub>O + O<sub>2</sub> + 2 ATP + 2 NADPH ).<br />- ATP được tạo ra trong ti thể do quá trình vận chuyển điện tử tử chất cho đến chất nhận điện tử (AH<sub>2</sub> + B + ADP + Pi → A + BH<sub>2</sub> + ATP)."
            },
        ]
    },
    // Chu kì tế bào và nguyên phân
    saCKTBVNP: {
        level1: [
            {
                question: "TB_CKTBVNP_L1_001. Số điểm kiểm soát rong chu kì tế bào của sinh vật nhân thực là bao nhiêu?",
                answer: "3"
            },
            {
                question: "TB_CKTBVNP_L1_002. Trong nguyên phân, sự phân chia nhân tế bào diễn ra qua mấy kì?",
                answer: "4"
            },
            {
                question: "TB_CKTBVNP_L1_003. Cho các biện pháp sau: (1) Không hút thuốc lá; (2) Tập thể dục thường xuyên; (3) Hạn chế ăn thức ăn nhanh; (4) Hạn chế tiếp xúc với ánh nắng mặt trời; (5) Khám sàng lọc định kì. Có bao nhiêu biện pháp phòng tránh bệnh ung thư?",
                answer: "5"
            },
            {
                "question": "TB_CKTBVNP_L1_004. Quá trình nguyên phân có mấy kì?",
                "answer": "4 (kì đầu, kì giữa, kì sau, kì cuối)."
            },

        ],
        level2: [
            {
                question: "TB_CKTBVNP_L2_001. Một tế bào có bộ NST 2n = 46 tiến hành nguyên phân. Tại kì đầu, tế bào chứa bao nhiêu NST kép?",
                answer: "46"
            },
            {
                question: "TB_CKTBVNP_L2_002. Một tế bào có bộ NST 2n = 46 tiến hành nguyên phân. Tại kì sau, tế bào chứa bao nhiêu NST đơn?",
                answer: "92"
            },
            {
                question: "TB_CKTBVNP_L2_003. Ở lúa nước 2n = 24, số NST có trong một tế bào ở cuối kì sau của nguyên phân là bao nhiêu?",
                answer: "48"
            },

            // Thêm các câu hỏi SA Chu kì tế bào và nguyên phân level 2...
        ],
        level3: [
            {
                question: "TB_CKTBVNP_L3_001. Lấy 50 tế bào soma từ một cây mầm cho nguyên phân liên tiếp nhiều lần thì nhận thấy nhiễm sắc thể cung cấp 16800 nhiễm sắc thể, trong đó có 14400 nhiễm sắc thể tạo thành từ nguyên liệu mới hoàn toàn. Bộ nhiễm sắc thể 2n của loài là bao nhiêu?",

                answer: "48"
            },
            {
                question: "TB_CKTBVNP_L3_002. Hợp tử của một loài nguyên phân cho 2 tế bào A và B. Tế bào A nguyên phân một số đợt cho các tế bào con, số tế bào con này bằng số nhiễm sắc thể đơn trong bộ nhiễm sắc thể đơn bội của loài. Tế bào B nguyên phân một số đợt cho số tế bào con với tổng số nhiễm sắc thể đơn gấp 8 lần số nhiễm sắc thể của một tế bào lưỡng bội của loài. Tổng số nhiễm sắc thể ở trạng thái chưa nhân đôi của tất cả các tế bào được hình thành là 768. Bộ nhiễm sắc thể lưỡng bội của loài là bao nhiêu?",

                answer: "32"
            },

        ],
        level4: [
            {
                question: "TB_CKTBVNP_L4_001 [HSGTPHN2526 - 1 điểm]. Hình sau thể hiện sự thay đổi hàm lượng tương đối của DNA trong nhân tế bào ở miền sinh trưởng rễ hành qua các thời kì của chu kì tế bào. Giai đoạn nào (A, B, C và D) ở trong hình tương ứng với thời gian diễn ra các sự kiện sau: (1) NST dãn xoắn và nhân đôi; (2) tăng kích thước tế bào? Giải thích.",
                image: "https://nhantri.top/media/Grade10/dnathaydoi.png",
                answer: "Sự kiện (1): NST dãn xoắn và nhân đôi ở giai đoạn B vì giai đoạn này hàm lượng DNA tăng lên rất nhanh (từ 3 lên 6), tương ứng với pha S của kì trung gian.</br>Sự kiện(2): tăng kích thước tế bào ở giai đoạn A vì tương tứng với pha G1 của kì trung gian, tế bào tích lũy vật chất, năng lượng và lớn lên.Giai đoạn này có hàm lượng DNA ổn định và bằng một nửa so với giai đoạn C."
            },
            {
                question: "TB_CKTBVNP_L4_002 [HSGTPHN2526 - 2 điểm]. Nuôi cấy một lượng tế bào phù hợp của dòng tế bào soma A và dòng tế bào soma B của động vật trên 2 đĩa nuôi cấy riêng rẽ. Số lượng tế bào khi bắt đầu nuôi cấy và sau 48 giờ nuôi cấy được thể hiện trong bảng. </br>a. Thời gian chu kì tế bào của tế bào soma A và tế bào soma B là bao nhiêu? Nêu cách tính.</br>b.Dòng tế bào soma B có thể là tế bào thần kinh của động vật trưởng thành không? Giải thích.",
                image: "https://nhantri.top/media/Grade10/tebaonhanlen.png",
                answer: "a. - Số lượng tế bào soma A đã tăng lên: 77,6 : 9,7 = 8 (lần). Vậy số lần phân chia của dòng tế bào soma A là: 2<sup>k</sup> = 8 nên k = 3 (lần).</br>Thời gian chu kì tế bào của dòng tế bào soma A là: 48 : 3 = 16 (giờ).</br>- Số lượng tế bào soma B đã tăng lên: 123,2 : 7,7 = 16 (lần). Vậy số lần phân chia của dòng tế bào soma A là: 2<sup>k’</sup> = 16 nên k’ = 4 (lần).</br>Thời gian chu kì tế bào của dòng tế bào soma B là: 48 : 4 = 12 (giờ).</br>b. Không, vì tế bào thần kinh của động vật trưởng thành không phân chia. Chúng hoàn toàn nằm ở pha G0."
            },
            {
                "question": "TB_CKTBVNP_L4_003. Chu kì tế bào là gì?",
                "answer": "Là khoảng thời gian từ khi tế bào được sinh ra, lớn lên và phân chia."
            },
            {
                "question": "TB_CKTBVNP_L4_004. Chu kì tế bào gồm mấy giai đoạn chính?",
                "answer": "Gồm kì trung gian và quá trình nguyên phân."
            },
            {
                "question": "TB_CKTBVNP_L4_005. Kì trung gian gồm các pha nào?",
                "answer": "G1, S và G2."
            },
            {
                "question": "TB_CKTBVNP_L4_006. Quá trình nguyên phân gồm mấy giai đoạn?",
                "answer": "Phân chia nhân và phân chia tế bào chất."
            },
            {
                "question": "TB_CKTBVNP_L4_007. Điểm kiểm soát G1/S có vai trò gì?",
                "answer": "Quyết định việc nhân đôi DNA để tiếp tục phân bào."
            },
            {
                "question": "TB_CKTBVNP_L4_008. Điểm kiểm soát G2/M có vai trò gì?",
                "answer": "Kiểm tra quá trình nhân đôi DNA đã hoàn tất chưa."
            },
            {
                "question": "TB_CKTBVNP_L4_009. Nguyên nhân nào khiến chu kì tế bào bị dừng lại tại các điểm kiểm soát?",
                "answer": "Nếu các bước trước chưa hoàn tất hoặc có sai sót."
            },
            {
                "question": "TB_CKTBVNP_L4_010. Nguyên phân xảy ra ở đâu?",
                "answer": "Ở các tế bào sinh dưỡng và tế bào sinh dục sơ khai của sinh vật nhân thực."
            },
            {
                "question": "TB_CKTBVNP_L4_011. Phân chia nhân trong nguyên phân diễn ra như thế nào?",
                "answer": "Phân chia đồng đều DNA và NST thành 2 nhóm."
            },
            {
                "question": "TB_CKTBVNP_L4_012. Quá trình phân chia tế bào chất ở tế bào thực vật diễn ra như thế nào?",
                "answer": "Hình thành vách ngăn chia tế bào thành 2 tế bào con."
            },
            {
                "question": "TB_CKTBVNP_L4_013. Quá trình phân chia tế bào chất ở tế bào động vật diễn ra như thế nào?",
                "answer": "Vùng giữa tế bào co thắt và chia tế bào thành hai."
            },
            {
                "question": "TB_CKTBVNP_L4_014. Nguyên phân có ý nghĩa gì đối với sinh vật nhân thực đơn bào?",
                "answer": "Là phương thức sinh sản tạo cơ thể mới."
            },
            {
                "question": "TB_CKTBVNP_L4_015. Nguyên phân có ý nghĩa gì đối với sinh vật nhân thực đa bào?",
                "answer": "Tăng số lượng tế bào, thay thế tế bào già và tái sinh cơ thể."
            },
            {
                "question": "TB_CKTBVNP_L4_016. Ung thư là gì?",
                "answer": "Là sự tăng trưởng bất thường của các tế bào do đột biến gene."
            },
            {
                "question": "TB_CKTBVNP_L4_017. Khối u ác tính có đặc điểm gì?",
                "answer": "Tế bào có đột biến và có khả năng di chuyển đến nơi khác trong cơ thể."
            },
            {
                "question": "TB_CKTBVNP_L4_018. Khối u lành tính có đặc điểm gì?",
                "answer": "Tế bào không di chuyển, nằm cố định tại một vị trí."
            },
            {
                "question": "TB_CKTBVNP_L4_019. Tác nhân môi trường nào gây đột biến dẫn đến ung thư?",
                "answer": "Khói thuốc lá, tia tử ngoại, hóa chất độc hại."
            },
            {
                "question": "TB_CKTBVNP_L4_020. Tác nhân bên trong cơ thể nào có thể gây ung thư?",
                "answer": "Virus viêm gan, vi khuẩn gây viêm dạ dày, gốc tự do."
            },
            {
                "question": "TB_CKTBVNP_L4_021. Ung thư do đột biến gene trong cơ thể có di truyền không?",
                "answer": "Khoảng 10% ung thư có thể di truyền."
            },
            {
                "question": "TB_CKTBVNP_L4_022. Những yếu tố nào khiến tỷ lệ ung thư tăng cao ở Việt Nam?",
                "answer": "Ô nhiễm, thói quen ăn uống không khoa học, lão hóa."
            },
            {
                "question": "TB_CKTBVNP_L4_023. Kì đầu của nguyên phân có đặc điểm gì?",
                "answer": "Màng nhân biến mất, các NST bắt đầu co ngắn."
            },
            {
                "question": "TB_CKTBVNP_L4_024. Nêu khái niệm về chu kì tế bào và những diễn biến cơ bản ở các pha của kì trung gian.",
                "answer": "Khái niệm về chu kì TB: Trình tự nhất định các sự kiện mà TB trải qua và lặp đi lặp lại giữa các lần NP liên tiếp mang tính chất chu kì. Pha G1: gia tăng tế bào chất, hình thành nên các bào quan tổng hợp các RNA và các protein chuẩn bị các tiền chất cho sự tổng hợp DNA (Thời gian pha G1 rất khác nhau ở các loại tế bào.Cuối pha G1 có điểm kiểm soát R, tế bào nào vượt qua R thì đi vào pha S, tế bào nào không vượt qua R thì đi vào quá trình biệt hóa hoặc bị chết theo chương trình); Pha S: có sự nhân đôi của DNA và sự nhân đôi NST, nhân đôi trung tử, tổng hợp nhiều hợp chât cao phân tử; Pha G2: Tiếp tục tổng hợp protein, hình thành thoi phân bào."
            },
            {
                "question": "TB_CKTBVNP_L4_025. Vì sao chu kì tế bào sinh vật nhân thực dài hơn sinh vật nhân sơ?",
                "answer": "Vì tế bào nhân thực có kích thước và số lượng NST lớn hơn."
            },
            {
                "question": "TB_CKTBVNP_L4_026. Tại sao bệnh ung thư lại không di truyền được?",
                "answer": "Hầu hết do đột biến gene phát sinh trong tế bào cơ thể, không di truyền."
            },
            {
                "question": "TB_CKTBVNP_L4_027. Kì trung gian của các loại tế bào sau có gì khác nhau: tế bào vi khuẩn, tế bào hồng cầu, tế bào thần kinh trưởng thành, tế bào ung thư?",
                "answer": "Tế bào vi khuẩn (nhân sơ): phân chia kiểu trực phân nên không có kì trung gian; Tế bào hồng cầu: không có nhân, không có khả năng phân chia nên không có kì trung gian; Tế bào thần kinh trưởng thành: Kì trung gian kéo dài suốt đời sống cơ thể (tế bào); Tế bào ung thư: tốc độ phân chia nhanh → kì trung gian rất ngắn."
            },
            {
                "question": "TB_CKTBVNP_L4_028. Cách phòng ngừa ung thư là gì?",
                "answer": "Hạn chế tiếp xúc với tác nhân gây ung thư, tập thể dục, kiểm tra sức khỏe."
            },
            {
                "question": "TB_CKTBVNP_L4_029. Thực chất của nguyên phân là gì? Vì sao nói nguyên phân là phương thức phân bào quan trọng đối với cơ thể? Nêu ý nghĩa thực tiễn của nguyên phân.",
                "answer": "Thực chất là quá trình truyền đạt ổn định bộ NST đặc trưng của loài qua các thế hệ tế bào trong cơ thể đa bào và qua các thế hệ cơ thể ở loài sinh sản vô tính. Là hình thức phân bào quan trọng vì: nó giúp cơ thể lớn lên, hình thành cơ quan bộ phận mới, di truyền ổn định bộ NST của loài, là cơ chế sinh sản. Nguyên phân có ý nghĩa thực tiễn là là cơ sở khoa học của các phương pháp nuôi cấy mô và tế bào thực vật để nhân giống sạch bệnh, với số lượng lớn, duy trì ổn định tính trạng tốt. Là cơ sở của giâm cành, chiết cành, ghép cây và nuôi cấy mô tế bào để ứng dụng trong nông nghiệp và y học."
            },
            {
                "question": "TB_CKTBVNP_L4_030. Lúa nước có 2n = 24. Một hợp tử của lúa phân bào liên tiếp 5 đợt. Hãy xác định tổng số nhiễm sắc thể đơn có trong các tế bào ở thế hệ cuối cùng. Trong đó có bao nhiêu nhiễm sắc thể đơn được cấu tạo hoàn toàn từ nguyên liệu của môi trường nội bào?",
                "answer": "Ở thế hệ TB cuối cùng, đang ở đầu kì trung gian, NST chưa nhân đôi thì tổng số NST đơn trong các tế bào là: 24 x 32 = 768 (NST). Trong đó số NST cấu tạo hoàn toàn mới là 768 – 48 = 720 (NST). Nếu thế hệ tế bào cuối cùng đang ở kì sau, đầu kì cuối, khi NST đã nhân đôi thì số NST đơn trong các tế bào là: 24 x 64= 1536. Trong đó số NST cấu tạo mới hoàn toàn là 1536 – 48 = 1488 (NST)."
            },
            {
                "question": "TB_CKTBVNP_L4_031. Lúa nước có 2n = 24. Một tế bào sinh dục chín của lúa giảm phân, thực tế cho ra mấy loại tế bào có sự khác nhau về nhiễm sắc thể? Biết rằng mỗi cặp nhiễm sắc thể tương đồng đều có hai nhiễm sắc thể khác nhau về cấu trúc.",
                "answer": "Một tế bào giảm phân cho 2 loại tế bào (nếu không có HVG) hoặc cho 4 loại tế bào (nếu có HVG)."
            },
            {
                "question": "TB_CKTBVNP_L4_032 [30-4-00]. Một loài có bộ nhiễm sắc thể (NST) lưỡng bội 2n = 6. Xét 3 tế bào A, B, C của loài đều trải qua nguyên phân trong thời gian 1 giờ 30 phút. Tế bào B có chu kì nguyên phân bằng 1/2 so với chu kì nguyên phân của tế bào C và có tốc độ nguyên phân bằng 2/3 so với tế bào A. Quá trình trên cần được môi trường tế bào cung cấp 486 NST đơn.<br />Xác định số lần nguyên phân và thời gian một chu kì phân bào của mỗi tế bào A, B, C nói trên.",
                "answer": "Số lần nguyên phân và thời gian chu kì:<br />Gọi x là số lần nguyên phân của tế bào C ⇒ Tế bào B là 2x, Tế bào A là 3x (x nguyên dương).<br />Theo đề bài: (2<sup>3x</sup> + 2<sup>2x</sup> + 2<sup>x</sup> −3)<sup>6</sup> = 486 và 2<sup>3x</sup> + 2<sup>2x</sup> + 2<sup>x</sup> = 84. <br />Giải phương trình ta tính được x = 2.<br />Kết quả nguyên phân: Tế bào A nguyên phân 6 lần, tế bào B nguyên phân 4 lần, tế bào C nguyên phân 2 lần.<br />Chu kì nguyên phân: Tế bào A: 90 : 6 = 15 phút; Tế bào B: 90 : 4 = 22,5 phút; Tế bào C: 90 : 2 = 45 phút."
            },
            {
                "question": "TB_CKTBVNP_L4_033 [30-4-02]. Theo dõi 3 nhóm tế bào sinh dục sơ khai đang nguyên phân, sau cùng một khoảng thời gian người ta nhận thấy: nhóm A gồm 1/4 số tế bào đã nguyên phân 3 lần, nhóm B gồm 1/3 số tế bào đã nguyên phân 4 lần, nhóm C gồm các tế bào còn lại đã nguyên phân 5 lần, tất cả tạo thành 2480 tế bào con. Hãy xác định số tế bào tham gia nguyên phân.",
                "answer": "Xác định số tế bào tham gia nguyên phân:<br />Gọi x là số tế bào tham gia nguyên phân.<br />Phương trình: x/4.3<sup>3</sup> + x/3.2<sup>4</sup> + [x - (x/4 + x/3)].2<sup>5</sup> = 2480. Giải ra được x = 120."
            },
        ]
    },
    // Giảm phân
    saQTGP: {
        level1: [
            {
                "question": "TB_GP_L1_001. Giảm phân là gì?",
                "answer": "Là quá trình phân chia tế bào mầm sinh dục để tạo giao tử."
            },
            {
                "question": "TB_GP_L1_002. Giảm phân gồm mấy lần phân bào?",
                "answer": "Gồm hai lần phân bào liên tiếp: giảm phân I và giảm phân II."
            },
            {
                "question": "TB_GP_L1_003. Trong giảm phân, nhiễm sắc thể nhân đôi bao nhiêu lần?",
                "answer": "Chỉ nhân đôi một lần trước khi bắt đầu giảm phân I."
            },
            {
                "question": "TB_GP_L1_004. Kết quả của giảm phân I là gì?",
                "answer": "Tạo ra 2 tế bào con đơn bội kép (n kép) từ một tế bào 2n."
            },
            {
                "question": "TB_GP_L1_005. Kết quả của giảm phân II là gì?",
                "answer": "Tạo ra 4 tế bào con đơn bội (n) từ 2 tế bào con n kép."
            },
           
            {
                "question": "TB_GP_L1_006. Trao đổi chéo xảy ra trong giai đoạn nào của giảm phân?",
                "answer": "Xảy ra trong kì đầu của giảm phân I."
            },
            {
                "question": "TB_GP_L1_007. Ở động vật, một tế bào trứng qua giảm phân sẽ tạo ra bao nhiêu tế bào trứng?",
                "answer": "Tạo ra 1 trứng và 3 thể cực bị tiêu biến."
            },
            {
                "question": "TB_GP_L1_008. Các hormone sinh dục có vai trò gì trong giảm phân?",
                "answer": "Điều chỉnh và kích thích quá trình giảm phân."
            },
            {
                "question": "TB_GP_L1_009. Tuổi tác có ảnh hưởng gì đến giảm phân ở người?",
                "answer": "Phụ nữ tuổi càng cao thì giảm phân càng dễ bị rối loạn."
            },
            {
                "question": "TB_GP_L1_010. Quá trình giảm phân giúp duy trì điều gì trong sinh sản hữu tính?",
                "answer": "Giúp duy trì bộ NST 2n đặc trưng của loài."
            },
            {
                "question": "TB_GP_L1_011. Khi hai giao tử kết hợp trong thụ tinh, bộ NST của hợp tử là gì?",
                "answer": "Hợp tử có bộ NST 2n."
            },
           
            
            {
                "question": "TB_GP_L1_012. Tại sao giảm phân góp phần tạo ra sự đa dạng ở đời con?",
                "answer": "Vì giảm phân tạo ra biến dị tổ hợp cho đời con."
            },
            {
                "question": "TB_GP_L1_013. Biến dị tổ hợp ở con có nguồn gốc từ đâu?",
                "answer": "Từ sự phân li và trao đổi chéo của các NST trong giảm phân."
            },
            {
                "question": "TB_GP_L1_014. Giảm phân xảy ra ở đâu trong cơ thể động vật?",
                "answer": "Xảy ra trong các cơ quan sinh sản."
            },
            {
                "question": "TB_GP_L1_015. Quá trình giảm phân ở động vật có gì khác so với ở thực vật?",
                "answer": "Ở động vật, giảm phân tạo ra các giao tử, ở thực vật tạo ra các tế bào mầm."
            },
            
            {
                "question": "TB_GP_L1_016. Tế bào nào không tham gia vào quá trình giảm phân?",
                "answer": "Tế bào sinh dưỡng không tham gia giảm phân."
            },
            {
                "question": "TB_GP_L1_017. Người ta có thể kích thích quá trình giảm phân cho vật nuôi bằng cách nào?",
                "answer": "Tiêm hormone sinh dục để kích thích sinh sản."
            },
            {
                "question": "TB_GP_L1_018. Sự phân li ngẫu nhiên của NST trong giảm phân có tác dụng gì?",
                "answer": "Tạo ra sự đa dạng về di truyền trong thế hệ con cái."
            },
           
            {
                "question": "TB_GP_L1_019. Giảm phân xảy ra ở tế bào nào trong cơ thể động vật?",
                "answer": "Ở tế bào mầm sinh dục trong cơ quan sinh sản."
            },
            // Thêm các câu hỏi SA Giảm phân level 1 khác...
        ],
        level2: [
            {
                "question": "TB_GP_L2_001. Sự khác nhau về di truyền của các tế bào con trong giảm phân do đâu?",
                "answer": "Do sự phân li ngẫu nhiên của các cặp NST và sự trao đổi chéo."
            },
            {
                "question": "TB_GP_L2_002. Tại sao quá trình giảm phân quan trọng đối với sinh sản hữu tính?",
                "answer": "Vì tạo ra các giao tử với bộ NST giảm một nửa, đảm bảo sự kết hợp trong thụ tinh."
            },
            {
                "question": "TB_GP_L2_003. Lí do tế bào trứng chỉ tạo ra một tế bào trứng lớn là gì?",
                "answer": "Vì tế bào trứng phải chứa đủ nguyên liệu dinh dưỡng cho phôi sau khi thụ tinh."
            },
            {
                "question": "TB_GP_L2_004. Sự trao đổi chéo giúp tạo ra gì trong giảm phân?",
                "answer": "Tạo ra sự kết hợp mới của NST và gene."
            },
            // Thêm các câu hỏi SA Giảm phân level 2...
        ],
        level3: [
            {
                "question": "TB_GP_L3_001. Quá trình giảm phân và thụ tinh đảm bảo điều gì cho loài?",
                "answer": "Đảm bảo duy trì bộ NST ổn định của loài qua các thế hệ."
            },
            {
                "question": "TB_GP_L3_002. Giảm phân có vai trò gì trong tiến hóa và chọn giống?",
                "answer": "Cung cấp nguyên liệu di truyền cho sự tiến hóa và chọn giống."
            },
            {
                "question": "TB_GP_L3_003. Ở ngô có bộ nhiễm sắc thể lưỡng bội 2n = 20, một nhóm tế bào sinh dục của ngô đang thực hiện quá trình giảm phân có tổng số nhiễm sắc thể đơn và kép là 2000. Trong đó, số nhiễm sắc thể kép nhiều hơn số nhiễm sắc thể đơn là 400. Số nhiễm sắc thể ở kì giữa 1, kì sau 1, kì đầu 2 tương ứng tỉ lệ 1 : 3 : 2, các nhiễm sắc thể còn lại ở kì sau 2. Xác định số tế bào ở mỗi kì; Tính tổng số tế bào đơn bội tạo thành qua giảm phân của nhóm tế bào trên và tổng số nhiễm sắc thể của chúng.",
                "answer": "10; 30; 40; 40; 320; 3200."
            },
            {
                "question": "TB_GP_L3_004*. Ở cơ thể đực của một loài gia súc, theo dõi sự phân chia của hai nhóm tế bào: một nhóm tế bào sinh dưỡng và một nhóm tế bào sinh dục ở vùng chín. Tổng số tế bào ban đầu của hai nhóm là 16. Cùng với sự giảm phân tạo tinh trùng của các tế bào sinh dục, các tế bào sinh dưỡng cũng nguyên phân một số đợt bằng nhau. Khi kết thúc quá trình giảm phân của các tế bào sinh dục thì tổng số tế bào của hai nhóm sinh ra là 104 tế bào và tổng số nhiễm sắc thể (NST) đơn mà môi trường nội bào phải cung cấp cho hai quá trình là 4560 NST.</br>a) Xác định số lần nguyên phân của các tế bào sinh dưỡng?</br>b) Xác định số tế bào ban đầu của mỗi nhóm?</br>c) Xác định bộ NST lưỡng bội của loài?",
                "answer": "Đặt: x là số tế bào sinh dưỡng; y là số tế bào sinh dục chín. Ta có:</br>x + y = 16x + y = 16x + y = 16.</br>Gọi a là số lần nguyên phân (cũng là số lần giảm phân y → 4y).Ta có:</br>x.2<sup>a</sup> + 4y = 104</br>⇒ x.2<sup>a</sup> - 4x = 40</br>⇒ (x.2<sup>a</sup>) : 4 - x = 10⇒ (x.2<sup>a</sup> - 2) - x = 10</br>⇒ x.(2<sup>a - 2</sup> - 1) = 10 (= 1 x 10 hoặc 2 x 5)</br>Vì (2<sup>a - 2</sup> - 1) là số lẻ nên:</br>- Nếu 2<sup>a - 2</sup> - 1 = 1 ⇒ a = 3; x = 10.</br>- Nếu 2<sup>a - 2</sup> - 1 = 5 ⇒ 2a - 2 = 6 (loại, vì a là số nguyên).</br>a) Số lần nguyên phân: a = 3.</br>b) Số tế bào ban đầu: x = 10; y = 6.</br>c) Số NST lưỡng bội của loài: 2n = 60."
            },
            // Thêm các câu hỏi SA Giảm phân level 3...
        ],
        level4: [
           
            {
                "question": "TB_GP_L4_001 [30-4-08]. Ở ruồi giấm có 2n = 8.<br/>a) Một nhóm tế bào sinh dục đang thực hiện quá trình giảm phân có tất cả 128 nhiễm sắc thể (NST) kép.<br/>– Hãy xác định nhóm tế bào này đang ở kì nào?<br/>– Tính số lượng tế bào ở thời điểm tương ứng?<br/>b) Một nhóm tế bào sinh dục khác có tất cả 512 NST đơn, đang phân li về 2 cực tế bào.<br/>– Xác định số lượng tế bào của nhóm.<br/>– Tính số tế bào con khi nhóm trên kết thúc phân bào.<br/>–  Tính số NST trong các tế bào con.<br/>– Nếu đây là các tế bào sinh tinh với hiệu suất thụ tinh là 25 %.Tính số hợp tử được tạo thành.",
                "answer": "a) Nhóm tế bào đang thực hiện quá trình giảm phân ở kì:<br/>- Kì trung gian, kì đầu, kì giữa của giảm phân I.<br/>- Số lượng tế bào: 16 tế bào.<br/>- Kì đầu, kì giữa của giảm phân II.<br/>- Số lượng tế bào: 32 tế bào.<br/>b) Kì sau lần giảm phân II, với số lượng tế bào:<br/>- 64 tế bào.<br/>- Số tế bào con tạo ra: 64 × 2 = 128 tế bào.<br/>- Số NST của:<br/>o	Mỗi tế bào: 4 NST.<br/>o	Các tế bào: 128 × 4 = 512 NST.<br/>- Số tinh trùng tham gia thụ tinh: (128 × 25) : 100 = 32. Số hợp tử tạo thành = số tinh trùng tham gia thụ tinh = 32 hợp tử."
            },
            {
                "question": "TB_GP_L4_002 [30-4-09]. Ở cơ thể đực của một loài gia súc, theo dõi sự phân chia của hai nhóm tế bào: một nhóm tế bào sinh dưỡng và một nhóm tế bào sinh dục ở vùng chín. Tổng số tế bào ban đầu của hai nhóm là 16. Cùng với sự giảm phân tạo tinh trùng của các tế bào sinh dục, các tế bào sinh dưỡng cũng nguyên phân một số đợt bằng nhau. Khi kết thúc quá trình giảm phân của các tế bào sinh dục thì tổng số tế bào của hai nhóm sinh ra là 104 tế bào và tổng số nhiễm sắc thể (NST) đơn mà môi trường nội bào phải cung cấp cho hai quá trình là 4560 NST.<br/>a) Xác định số lần nguyên phân của các tế bào sinh dưỡng?<br/>b) Xác định số tế bào ban đầu của mỗi nhóm?<br/>c) Xác định bộ NST lưỡng bội của loài?",
                "answer": "Đặt: x là số tế bào sinh dưỡng; y là số tế bào sinh dục chín. Ta có:<br/>x + y = 16x + y = 16x + y = 16<br/>Gọi a là số lần nguyên phân (cũng là số lần giảm phân y → 4y). Ta có: <br/>x.2<sup>a</sup> + 4y = 104<br/>⇒ x.2<sup>a</sup> - 4x = 40<br/>⇒ (x.2<sup>a</sup>) : 4 - x = 10<br/>⇒ (x.2<sup>a</sup> - 2) - x = 10<br/>⇒ x.(2<sup>a-2</sup> - 1) = 10 (= 1 x 10 hoặc 2 x 5)<br/>Vì (2<sup>a-2</sup> - 1) là số lẻ nên:<br/>- Nếu 2<sup>a-2</sup> - 1 = 1 ⇒ a = 3; x = 10.<br/>- Nếu 2<sup>a-2</sup> - 1 = 5 ⇒ 2<sup>a-2</sup> = 6 (loại, vì a là số nguyên).<br/>a) Số lần nguyên phân: a = 3.<br/>b) Số tế bào ban đầu: x = 10; y = 6.<br/>c) Số NST lưỡng bội của loài: 2n = 60."
            },
            {
                "question": "TB_GP_L4_003 [30-4-00]. Một nhóm tế bào sinh dục sơ khai có số lần nguyên phân như nhau, qua các giai đoạn phát triển từ vùng sinh sản sang vùng chín đã nhờ môi trường nội bào cung cấp số nguyên liệu để hình thành 1920 nhiễm sắc thể (NST) đơn. Số NST đơn trong 1 giao tử bằng một nửa số NST đơn trong tế bào sinh dục sơ khai ban đầu và bằng 1/4 tổng số tế bào tham gia đợt nguyên phân cuối cùng tại vùng sinh sản. Tổng số giao tử được tạo ra bằng 1/156 tổng số kiểu tổ hợp giao tử có thể có.<br/>a) Xác định bộ NST lưỡng bội (2n) của loài.<br/>b) Số NST đơn mà môi trường nội bào phải cung cấp cho mỗi giai đoạn phát triển của các tế bào sinh dục đã cho là bao nhiêu?<br/>c) Cá thể trên thuộc giới tính nào? (Biết rằng quá trình giảm phân tạo giao tử diễn ra bình thường).",
                "answer": "a) Xác định bộ nhiễm sắc thể (NST) lưỡng bội (2n):<br/>Đặt: x = 2n (bộ NST lưỡng bội); a = x : 2 là số tế bào sinh dục sơ khai ban đầu; k là số lần nguyên phân.<br/>Ta có: x/2 . x . (2<sup>k</sup> - 1) + x/2 . x . 2<sup>k</sup> = 1920.<br/>x/2 = 1/4 . x/2 . (2<sup>k-1</sup>)<br/>Ta tính được: k=3; x = 16; a = 8; 2n = 16.<br/>b) Số NST đơn cần cung cấp cho mỗi giai đoạn:<br/>- Giai đoạn sinh sản (ở vùng sinh sản): 896 NST<br/>- Giai đoạn sinh trưởng (ở vùng sinh trưởng): Tế bào sinh dục tăng kích thước, tích trữ chất dinh dưỡng nên cần số NST = 0.<br/>- Giai đoạn chín (ở vùng chín): Tế bào sinh dục qua giảm phân: 1024 NST<br/>c) Giới tính:<br/>- Số kiểu hợp tử của loài: 2<sup>2n</sup> = 216 = 65536 (kiểu)<br/>- Tổng số giao tử được tạo ra: 65536 : 256 = 256.<br/>- Số tế bào sinh dục (2n) bước vào giảm phân: a. 2<sup>k</sup> = 64.<br/>- Mỗi tế bào sinh dục (2n) qua giảm phân tạo ra số giao tử (n): 256 : 64 = 4 <br/>⇒ 1 tế bào sinh dục (2n) giảm phân → 4 giao tử (n). Vậy cá thể khảo sát là cá thể đực (♂)."
            },
            
            // Thêm các câu hỏi SA Giảm phân level 3...
        ]
    },
    // Công nghệ tế bào
    saCNTB: {
        level1: [
            {
                "question": "TB_CNTB_L1_001. Công nghệ tế bào động vật là gì?",
                "answer": "Nuôi cấy tế bào động vật trong môi trường nhân tạo để nghiên cứu và ứng dụng."
            },
            {
                "question": "TB_CNTB_L1_002. Nguyên lí của công nghệ tế bào động vật là gì?",
                "answer": "Nuôi cấy tế bào gốc trong môi trường thích hợp, giúp chúng phân chia và biệt hóa thành các tế bào khác."
            },
            {
                "question": "TB_CNTB_L1_003. Tế bào gốc là gì?",
                "answer": "Là tế bào có khả năng phân chia và biệt hóa thành các tế bào khác."
            },
            {
                "question": "TB_CNTB_L1_004. Tế bào gốc phôi có đặc điểm gì?",
                "answer": "Là tế bào gốc vạn năng, có thể biệt hóa thành mọi loại tế bào của cơ thể."
            },
            {
                "question": "TB_CNTB_L1_005. Tế bào gốc trưởng thành có khả năng gì?",
                "answer": "Là tế bào gốc đa tiềm năng, chỉ biệt hóa thành một số loại tế bào nhất định."
            },
            {
                "question": "TB_CNTB_L1_006. Tế bào biệt hóa có đặc điểm gì?",
                "answer": "Là tế bào không còn khả năng phân chia và tạo thành các tế bào khác."
            },
            {
                "question": "TB_CNTB_L1_007. Nhân bản vô tính là gì?",
                "answer": "Tạo ra các con vật giống hệt nhau về kiểu gene mà không cần sinh sản hữu tính."
            },
            
            {
                "question": "TB_CNTB_L1_008. Thành công nổi bật nhất trong công nghệ nhân bản vô tính là gì?",
                "answer": "Nhân bản thành công con cừu Dolly năm 1996."
            },
            {
                "question": "TB_CNTB_L1_009. Liệu pháp tế bào gốc là gì?",
                "answer": "Chữa bệnh bằng cách truyền tế bào gốc vào cơ thể để thay thế tế bào bị hỏng."
            },
            {
                "question": "TB_CNTB_L1_010. Ưu điểm của liệu pháp tế bào gốc là gì?",
                "answer": "Cơ thể không loại thải tế bào ghép, và tế bào gốc có thể lấy từ mô người trưởng thành."
            },
            {
                "question": "TB_CNTB_L1_011. Liệu pháp gene là gì?",
                "answer": "Là phương pháp chữa bệnh di truyền bằng cách thay thế gene bệnh bằng gene lành."
            },
            {
                "question": "TB_CNTB_L1_012. Quy trình liệu pháp gene bao gồm các bước nào?",
                "answer": "Nhân nuôi tế bào, chỉnh sửa gene, sàng lọc và truyền tế bào vào cơ thể bệnh nhân."
            },
           
            {
                "question": "TB_CNTB_L1_013. Công nghệ tế bào thực vật là gì?",
                "answer": "Nuôi cấy tế bào và mô trong điều kiện vô trùng để tạo ra cây giống nhau về kiểu gene."
            },
            {
                "question": "TB_CNTB_L1_014. Cơ sở khoa học của công nghệ tế bào thực vật là gì?",
                "answer": "Dùng môi trường dinh dưỡng và hormone thích hợp để nuôi cấy tế bào thực vật."
            },
            
            {
                "question": "TB_CNTB_L1_015. Lai tế bào sinh dưỡng là gì?",
                "answer": "Là phương pháp kết hợp tế bào trần để tạo tế bào lai giữa các loài khác nhau."
            },
            {
                "question": "TB_CNTB_L1_016. Quy trình lai tế bào sinh dưỡng bao gồm các bước nào?",
                "answer": "Tạo tế bào trần, kết hợp chúng để tạo tế bào lai, rồi nuôi cấy để tạo giống cây lai."
            },
            
            {
                "question": "TB_CNTB_L1_017. Mục đích của công nghệ tế bào động vật là gì?",
                "answer": "Tạo ra lượng lớn tế bào để nghiên cứu và ứng dụng thực tiễn."
            },
           
           
            {
                "question": "TB_CNTB_L1_018. Lai tế bào sinh dưỡng có thể tạo ra giống cây có đặc điểm gì?",
                "answer": "Giống cây lai mang đặc điểm của hai loài khác nhau."
            },
            
            // Thêm các câu hỏi SA Công nghệ tế bào level 1 khác...
        ],
        level2: [
            {
                "question": "TB_CNTB_L2_001. Tại sao tế bào gốc được gọi là tế bào vạn năng?",
                "answer": "Vì tế bào gốc có thể phát triển thành mọi loại tế bào của cơ thể."
            },
            {
                "question": "TB_CNTB_L2_002. Tại sao công nghệ tế bào thực vật lại quan trọng?",
                "answer": "Nó giúp tạo ra giống cây trồng mới và nâng cao chất lượng cây trồng."
            },
            // Thêm các câu hỏi SA Công nghệ tế bào level 2...
        ],
        level3: [
            {
                "question": "TB_CNTB_L3_001. Ứng dụng của nhân bản vô tính là gì?",
                "answer": "Tạo ra các cá thể có kiểu gene ưu việt và tăng số lượng loài nguy cơ tuyệt chủng."
            },
            {
                "question": "TB_CNTB_L3_002. Công nghệ nhân bản vô tính có thể giúp gì trong bảo tồn loài?",
                "answer": "Giúp nhân giống các loài động vật có nguy cơ tuyệt chủng."
            },
            {
                "question": "TB_CNTB_L3_003. Ứng dụng của nuôi cấy hạt phấn hoặc noãn chưa thụ tinh là gì?",
                "answer": "Tạo cây có kiểu gene đồng hợp tử, phục vụ cho công tác tạo giống cây trồng."
            },
            {
                "question": "TB_CNTB_L3_004. Ứng dụng của nuôi cấy mô tế bào là gì?",
                "answer": "Nhân nhanh cây quý hiếm, cây kháng bệnh, và tạo cây chuyển gene."
            },
            {
                "question": "TB_CNTB_L3_005. Liệu pháp gene chỉ áp dụng cho bệnh gì?",
                "answer": "Chỉ áp dụng cho bệnh di truyền do lỗi ở một gene cụ thể."
            },
            // Thêm các câu hỏi SA Công nghệ tế bào level 3...
        ],
        level4: [
            {
                "question": "...",
                "answer": "..."
            },
           
            // Thêm các câu hỏi SA Công nghệ tế bào level 3...
        ]
    },
    // Đa dạng và phương pháp nghiên cứu VSV

    saDDPPNCVSV: {
        level1: [
            {
                question: "TB_ĐDVCPPNCVSV_L1_001. Có bao nhiêu phát biểu sau đây là <em>đúng</em> về đặc điểm của vi sinh vật? <br/>(1) Vi sinh vật là những sinh vật có kích thước nhỏ. <br/>(2) Tất cả vi sinh vật đều có cấu trúc đơn bào. <br/>(3) Vi sinh vật chỉ tồn tại được trong cơ thể sinh vật. <br/>(4) Vi sinh vật có khả năng sinh trưởng rất nhanh nhưng sinh sản chậm.",
                answer: "1"
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L1_002. Vi sinh vật được phân loại thành bao nhiêu nhóm?",
                "answer": "2 (vi sinh vật nhân sơ và vi sinh vật nhân thực)."
            },
           
            // Thêm các câu hỏi SA Đa dạng và phương pháp nghiên cứu VSV level 1 khác...
        ],
        level2: [
            {
                "question": "TB_ĐDVCPPNCVSV_L2_001. ..",
                "answer": "..."
            },
            
           
            // Thêm các câu hỏi SA Đa dạng và phương pháp nghiên cứu VSV level 2...
        ],
        level3: [
            {
                "question": "TB_ĐDVCPPNCVSV_L3_001. ...",
                "answer": "..."
            },
            // Thêm các câu hỏi SA Đa dạng và phương pháp nghiên cứu VSV level 3...
        ],
        level4: [
            {
                "question": "TB_ĐDVCPPNCVSV_L4_001. Một học sinh khi làm thí nghiệm lên men lactic dựa trên ứng dụng về hoạt động của vi khuẩn <em>Lactobacillus</em>. Khi tra cứu về vi khuẩn trên, học sinh nhận thấy chúng có các đặc điểm sau:<br />- Thuộc nhóm vi khuẩn Gram dương.<br />- Sinh enzyme catalase.<br />- Đa khuyết dưỡng đối với nhiều amino acid: folic, riboflavin, pirodoxine.<br />Với mẫu vi khuẩn <em>Lactobacillus</em> sẵn có, em hãy trình bày phương án thực hiện các thí nghiệm để chứng minh vi khuẩn <em>Lactobacillus</em> có các đặc điểm trên.",
                "answer": "Vi khuẩn Gram (+): Dùng phương pháp nhuộm Gram là phương pháp nhuộm kép với thuốc nhuộm tím (gentian) và thuốc nhuộm màu đỏ (fushin). Vi khuẩn Gram (+) bắt màu thuốc nhuộm màu tím.<br />Sinh catalase: Nhỏ nước oxygen già (H₂O₂) lên bề mặt nuôi cấy vi khuẩn → thấy có bọt khí xuất hiện → vi khuẩn sinh enzyme catalase.<br />Đa khuyết dưỡng với nhiều acid amin: cấy vi khuẩn <em>Lactobacillus</em> vào 3 môi trường sau:<br />(I) Môi trường cơ sở + folic (hoặc riboflavin hoặc pirodoxine).<br />(II) Môi trường cơ sở + folic + riboflavin (hoặc folic + pirodoxine hoặc riboflavin + pirodoxine).<br />(III) Môi trường cơ sở + folic + riboflavin + pirodoxine.<br />→ Vi khuẩn chỉ hình thành khuẩn lạc trên môi trường III → chúng khuyết dưỡng về cả 3 loại amino acid trên."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_002. Vi sinh vật là gì?",
                "answer": "Những sinh vật có kích thước nhỏ bé, thường chỉ quan sát được dưới kính hiển vi."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_003. Đặc điểm chung của vi sinh vật là gì?",
                "answer": "Kích thước nhỏ, đơn bào, tốc độ chuyển hóa vật chất nhanh, số lượng lớn, phân bố rộng."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_004. Vi sinh vật có thể sử dụng những nguồn nào để cung cấp năng lượng và carbon?",
                "answer": "Quang dị dưỡng, hóa dị dưỡng, quang tự dưỡng và hóa tự dưỡng."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_005. Quang dị dưỡng là kiểu dinh dưỡng như thế nào?",
                "answer": "Sử dụng ánh sáng làm nguồn năng lượng và các hợp chất hữu cơ làm nguồn carbon."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_006. Hóa dị dưỡng là kiểu dinh dưỡng như thế nào?",
                "answer": "Sử dụng các hợp chất hóa học làm nguồn năng lượng và các hợp chất hữu cơ làm nguồn carbon."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_007. Phương pháp quan sát vi sinh vật dùng để nghiên cứu vấn đề nào?",
                "answer": "Để nghiên cứu hình thái, kích thước và cấu tạo tế bào của vi sinh vật."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_008. Để quan sát vi sinh vật, cần sử dụng dụng cụ gì?",
                "answer": "Cần sử dụng kính hiển vi quang học hoặc kính hiển vi điện tử."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_009. Phương pháp phân lập vi sinh vật có mục đích gì?",
                "answer": "Để thu nhận vi sinh vật ở dạng thuần khiết, không lẫn với vi sinh vật khác."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_010. Quy trình phân lập vi sinh vật như thế nào?",
                "answer": "Mẫu vật pha loãng trong nước tiệt trùng, rồi phết lên bề mặt thạch và nuôi cấy."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_011. Khuẩn lạc là gì?",
                "answer": "Tập hợp các tế bào vi sinh vật sinh ra từ một tế bào ban đầu."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_012. Khuẩn lạc vi khuẩn có đặc điểm gì?",
                "answer": "Thường nhầy ướt, bề mặt dẹt và có nhiều màu sắc."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_013. Khuẩn lạc nấm men có đặc điểm gì?",
                "answer": "Thường khô, tròn đều và lồi ở tâm, màu trắng sữa."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_014. Khi quan sát khuẩn lạc, có thể sử dụng đặc điểm nào để phân biệt vi sinh vật?",
                "answer": "Có thể dựa vào hình dạng, màu sắc và độ nhầy của khuẩn lạc."
            },
                        {
                "question": "TB_ĐDVCPPNCVSV_L4_015. Làm thế nào để tạo môi trường nuôi cấy vi sinh vật?",
                "answer": "Môi trường cần tiệt trùng và chứa đầy đủ chất dinh dưỡng cho vi sinh vật phát triển."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_016. Môi trường thạch dùng trong phân lập vi sinh vật có đặc điểm gì?",
                "answer": "Dạng đặc, cho phép vi sinh vật phát triển thành khuẩn lạc riêng biệt."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_017. Phương pháp nuôi cấy vi sinh vật giúp gì trong nghiên cứu?",
                "answer": "Giúp quan sát và nghiên cứu sự phát triển của vi sinh vật trong điều kiện kiểm soát."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_018. Phương pháp phân lập có thể giúp tách biệt những vi sinh vật nào?",
                "answer": "Giúp tách biệt các vi sinh vật khác nhau dựa trên đặc điểm khuẩn lạc."
            },
                        {
                "question": "TB_ĐDVCPPNCVSV_L4_019. Vi sinh vật có thể tạo ra những hợp chất gì?",
                "answer": "Các hợp chất hữu cơ, chất kháng sinh và nhiều sản phẩm sinh học khác."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_020. Nấm men tạo khuẩn lạc có hình dạng như thế nào?",
                "answer": "Khuẩn lạc thường tròn, khô và lồi ở trung tâm."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_021. Khuẩn lạc nấm mốc có đặc điểm gì?",
                "answer": "Khuẩn lạc lan rộng, có màu sắc đa dạng như trắng, vàng, đen, xanh."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_022. Quang tự dưỡng là kiểu dinh dưỡng như thế nào?",
                "answer": "Sử dụng ánh sáng làm nguồn năng lượng và CO2 làm nguồn carbon."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_023. Hóa tự dưỡng là kiểu dinh dưỡng như thế nào?",
                "answer": "Sử dụng các hợp chất hóa học làm nguồn năng lượng và CO2 làm nguồn carbon."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_024. Tại sao phương pháp phân lập vi sinh vật rất quan trọng?",
                "answer": "Giúp thu nhận vi sinh vật thuần khiết, giúp nghiên cứu đặc tính của từng loại."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_025. Trong hệ thống phân loại 5 giới, vi sinh vật được xếp vào giới nào? Cơ sở của sự sắp xếp đó?",
                "answer": "VSV được xếp vào 3 giới: khởi sinh, nguyên sinh, nấm. Còn virus không được xếp vào giới nào.	Cơ sở xắp xếp: Dựa vào cấu trúc tế bào, phương thức trao đổi chất, ...  Giới khởi sinh: VK, VK cổ.Có tế bào nhân sơ, thành tế bào peptidoglucan, đơn bào, tự dưỡng, dị dưỡng. Giới nguyên sinh: ĐV đơn bào, tảo, nấm nhầy. Có tế bào nhân thực, đơn bào hoặc đa bào, thành cellulose hoặc không có thành, tự dưỡng, dị dưỡng. Giới nấm: Nấm, TB nhân thực, thành có chitin, đơn bào hoặc đa bào, dị dưỡng hoại sinh. Virus: chưa có cấu trúc tế bào."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_026. Tại sao vi sinh vật có thể sống ở nhiều nơi trên Trái Đất?",
                "answer": "Vì chúng có khả năng thích nghi với nhiều môi trường sống khác nhau."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_027 [30-4-00]. Căn cứ vào đặc điểm trao đổi chất, vi sinh vật được chia thành những nhóm nào? Nêu ví dụ minh họa ở mỗi nhóm. Điểm khác biệt cơ bản giữa các nhóm.",
                "answer": "Phân nhóm vi sinh vật:<br />- Nhóm vi sinh vật tự dưỡng: Quang tổng hợp và hóa tổng hợp.<br />Nguồn carbon vô cơ; nguồn năng lượng từ ánh sáng hoặc các phản ứng hóa học.<br />- Nhóm vi sinh vật dị dưỡng lấy nguồn carbon hữu cơ. <br />Căn cứ nguồn O<sub>2</sub>chia ra vi sinh vật hiếu khí và vi sinh vật kị khí.<br />Căn cứ phương thức dinh dưỡng chia ra: hoại sinh, kí sinh, cộng sinh."
            },
            {
                "question": "TB_ĐDVCPPNCVSV_L4_028. So sánh nấm men và vi khuẩn.",
                "answer": "Giống nhau:<br /> Hầu hết ở dạng đơn bào; Tế bào đa dạng, có thành tế bào; Sinh sản vô tính bằng phân cắt tế bào; Sinh sản hữu tính bằng tiếp hợp.<br />Khác nhau: <br />+ Nấm men có dạng đơn bào hoặc đa bào, nhân thực, có nhiều bào quan, không có vỏ nhầy, sống dị dưỡng, sinh sản vô tính bằng nảy chồi.<br />+ Vi khuẩn có dạng đơn bào, nhân sơ, có ít bào quan, có vỏ nhầy, sống tự dưỡng hoặc dị dưỡng, không sinh sản vô tính bằng nảy chồi."
            },
        ]
    },
    // Sinh trưởng và sinh sản ở VSV

    saSTSSVSV: {
        level1: [
            {
                question: "TB_STVSSOVSV_L1_001. Đồ thị mô tả tốc độ sinh trưởng của ba loài vi sinh vật, loài số mấy là loài ưa acid?",
                image: "https://nhantri.top/media/Grade10/vsvuaacid.png",
                answer: "1"
            },
            
        ],
        level2: [
            {
                question: "TB_STVSSOVSV_L2_001. Quan sát hình ảnh và cho biết hình số mấy mô tả đúng đường cong sinh trưởng của quần thể vi khuẩn trong nuôi cấy liên tục?",
                image: "https://nhantri.top/media/Grade10/dothicgdst.png",
                answer: "3"
            },


        ],
        level3: [
                        {
                "question": "TB_STVSSOVSV_L3_001. Ở một loài vi khuẩn, nếu bắt đầu nuôi 1300 tế bào thì sau 3 giờ, lượng tế bào đạt được là 10400 tế bào. Thời gian thế hệ của loài vi khuẩn này là bao nhiêu phút?",
                "answer": "60."
            },
            {
                "question": "TB_STVSSOVSV_L3_002. Vi khuẩn <em>Eschirichia coli<em/> nuôi cấy trong điều kiện thích hợp thì cứ 20 phút sẽ phân chia một lần. Sau khi được nuôi cấy trong 3 giờ, từ một nhóm vi khuẩn ban đầu đã tạo ra 3584 vi khuẩn ở thế hệ cuối cùng. Hỏi số lượng vi khuẩn ban đầu là bao nhiêu?",
                "answer": "7."
            },
            // Thêm các câu hỏi SA Sinh trưởng và sinh sản ở VSV level 3...
        ],
        level4: [
            {
                "question": "TB_STVSSOVSV_L4_001. Nuôi cấy vi khuẩn E.coli trong môi trường với nguồn cung cấp carbon là glucose và sorbitol, theo dõi sự sinh trưởng và vẽ lại được đồ thị như sau. Giải thích quá trình sinh trưởng của quần thể vi khuẩn.",
                image: "https://nhantri.top/media/Grade10/sinhtruongkep.png",
                "answer": "Đây là hiện tượng sinh trưởng kép xảy ra trong môi trường nuôi cấy có 2 loại cơ chất (2 loại chất cho carbon).<br />Đồ thị có 2 pha tiềm phát, 2 pha lũy thừa, kết thúc pha lũy thừa thứ nhất, tế bào lại mở đầu pha tiềm phát thứ 2 rồi tiếp đến pha lũy thừa thứ hai.<br />Khi sinh trưởng vi khuẩn dùng hóa nguồn carbon dễ phân giải trước (glucose).<br />Sau khi nguồn carbon thứ nhất đã cạn thì nguồn carbon thứ 2 (sorbitol) mới được cảm ứng để tổng hợp enzyme cần cho việc chuyển hóa nó."
            },
            {
                "question": "TB_STVSSOVSV_L4_002. Trong môi trường tiêu chuẩn ở pH = 7.0, nhiệt độ 35°C và kị khí hoàn toàn, có hai mê nuôi cấy vi khuẩn trong đó một mẻ nuôi cấy có chứa hai hợp chất hữu cơ giàu năng lượng (môi trường A) và mẻ còn lại chứa một loại hợp chất hữu cơ đồng nhất (môi trường B), người ta nuôi cấy riêng hai loài vi khuẩn <em>Lactobacillus bulgaricus</em> và <em>Streptococcus votrovorus</em> (mật độ ban đầu là 3,2.10⁵ tế bào/mL) thành hai mẻ ở hai môi trường khác nhau. Đồ thị biểu diễn sự sinh trưởng và sự biến đổi nồng độ các chất trong môi trường nuôi cấy của hai loài vi khuẩn trên được biểu diễn ở hình 1 và hình 2.<br />a. Giải thích đường cong sinh trưởng của hai loài vi khuẩn và xác định mỗi loài vi khuẩn được nuôi cấy ở môi trường nào.<br />b. Dựa vào sản phẩm chuyển hoá, hãy xác định <em>Lactobacillus bulgaricus</em> và <em>Streptocuccus votrovorus</em> là vi khuẩn gì?",
                image: "https://nhantri.top/media/Grade10/lacticdhdh.png",
                "answer": "a. - <em>Lactobacillus bulgaricus</em>: Đường cong sinh trưởng kép gồm 2 pha lag và 2 pha log, xảy ra trong điều kiện môi trường có hơn hợp 2 loại hợp chất carbon khác nhau → môi trường A (chứa hai loại hợp chất hữu cơ giàu năng lượng) tương ứng với môi trường nuôi cấy <em>Lactobacillus bulgaricus</em>.<br />- <em>Streptocuccus votrovorus</em>: Đường cong sinh trưởng thêm, có thêm một đoạn cong nhỏ sau pha suy vong do ở giai đoạn này một số vi khuẩn sống sót và tiếp tục sinh trưởng nhờ các chất dinh dưỡng được giải phóng ra từ quá trình tự phân → tương ứng với môi trường B.<br />b. Dựa vào đồ thị:<br />- <em>Lactobacillus bulgaricus</em> trong suốt quá trình sinh trưởng chỉ tạo ra acid lactic (hàm lượng ethanol không thay đổi còn lượng acid lactic tăng mạnh) → vi khuẩn lên men lactic đồng hình.<br />- <em>Streptocuccus votrovorus</em> trong quá trình sinh trưởng ngoài tạo ra acid lactic còn tạo ra cả ethanol(hàm lượng acid lactic nhỏ hơn 50% so với lượng acid lactic mà <em>Lactobacillus bulgaricus</em> tạo ra) → vi khuẩn lên men lactic dị hình."
            },
            {
                "question": "TB_STVSSOVSV_L4_003. Quá trình tổng hợp ở vi sinh vật là gì?",
                "answer": "Quá trình vi sinh vật sử dụng năng lượng để tổng hợp các phân tử hữu cơ phức tạp từ các phân tử đơn giản."
            },
            {
                "question": "TB_STVSSOVSV_L4_004. Vi sinh vật tổng hợp những chất nào trong quá trình sinh tổng hợp?",
                "answer": "Vi sinh vật tổng hợp carbohydrate, protein, lipid và nucleic acid."
            },
            {
                "question": "TB_STVSSOVSV_L4_005. Tổng hợp carbohydrate ở vi sinh vật diễn ra như thế nào?",
                "answer": "Vi sinh vật tổng hợp từ các đường đơn, chủ yếu qua quang hợp hoặc hóa tổng hợp."
            },
            {
                "question": "TB_STVSSOVSV_L4_006. Quá trình tổng hợp protein ở vi sinh vật như thế nào?",
                "answer": "Vi sinh vật tổng hợp protein từ amino acid thông qua quá trình tổng hợp protein."
            },
            {
                "question": "TB_STVSSOVSV_L4_007. Lipid được tổng hợp như thế nào ở vi sinh vật?",
                "answer": "Vi sinh vật tổng hợp lipid từ glycerol và acid béo."
            },
            {
                "question": "TB_STVSSOVSV_L4_008. Tổng hợp nucleic acid ở vi sinh vật diễn ra như thế nào?",
                "answer": "Nucleic acid được tổng hợp từ nucleotide, gồm đường 5 carbon và các acid amin."
            },
            {
                "question": "TB_STVSSOVSV_L4_009. Phân giải ở vi sinh vật là gì?",
                "answer": "Là quá trình chuyển đổi chất hữu cơ phức tạp thành các chất đơn giản."
            },
            {
                "question": "TB_STVSSOVSV_L4_010. Vai trò của quá trình phân giải trong vi sinh vật là gì?",
                "answer": "Quá trình phân giải giúp cung cấp nguyên liệu và năng lượng cho vi sinh vật."
            },
            {
                "question": "TB_STVSSOVSV_L4_011. Các vi sinh vật sử dụng chất nào để phân giải chất hữu cơ phức tạp?",
                "answer": "Vi sinh vật tiết enzyme ngoại bào để phân giải các chất hữu cơ phức tạp."
            },
                        {
                "question": "TB_STVSSOVSV_L4_012. Sinh trưởng của quần thể vi sinh vật là gì?",
                "answer": "Là sự tăng trưởng về số lượng tế bào trong quần thể."
            },
            {
                "question": "TB_STVSSOVSV_L4_013. Thời gian thế hệ là gì?",
                "answer": "Là thời gian để một tế bào phân chia và số lượng tế bào tăng gấp đôi."
            },
            {
                "question": "TB_STVSSOVSV_L4_014. Quá trình sinh trưởng của quần thể vi sinh vật trong môi trường nuôi cấy không liên tục diễn ra như thế nào?",
                "answer": "Có 4 pha: tiềm phát, lũy thừa, cân bằng và suy vong."
            },
            {
                "question": "TB_STVSSOVSV_L4_015. Điều kiện trong môi trường nuôi cấy liên tục là gì?",
                "answer": "Phải bổ sung chất dinh dưỡng và loại bỏ sản phẩm trao đổi chất."
            },
            {
                "question": "TB_STVSSOVSV_L4_016. Vi sinh vật sinh trưởng trong môi trường nuôi cấy liên tục có đặc điểm gì?",
                "answer": "Duy trì sự cân bằng và không có pha suy vong."
            },
                        {
                "question": "TB_STVSSOVSV_L4_017. Vi sinh vật sinh sản như thế nào?",
                "answer": "Vi sinh vật sinh sản bằng các phương thức phân đôi, bào tử và nảy chồi."
            },
            {
                "question": "TB_STVSSOVSV_L4_018. Phân đôi là gì?",
                "answer": "Tế bào mẹ phân chia thành hai tế bào con giống hệt nhau."
            },
            {
                "question": "TB_STVSSOVSV_L4_019. Nấm sinh sản bằng bào tử như thế nào?",
                "answer": "Nấm sinh sản bằng bào tử đính, bào tử tiếp hợp hoặc ngoại bào tử."
            },
            {
                "question": "TB_STVSSOVSV_L4_020. Sinh sản vô tính có ưu điểm gì?",
                "answer": "Giúp vi sinh vật sinh trưởng nhanh và duy trì đặc tính di truyền ổn định."
            },
            {
                "question": "TB_STVSSOVSV_L4_021. Vi sinh vật nào sinh sản bằng ngoại bào tử?",
                "answer": "Xạ khuẩn."
            },
            {
                "question": "TB_STVSSOVSV_L4_022. Quá trình tiếp hợp ở vi sinh vật có mục đích gì?",
                "answer": "Giúp trao đổi vật chất di truyền giữa các vi sinh vật, tạo ra sự đa dạng di truyền."
            },
            {
                "question": "TB_STVSSOVSV_L4_023. Sinh sản bằng bào tử có tác dụng gì đối với vi sinh vật?",
                "answer": "Giúp vi sinh vật duy trì sự sống trong môi trường khắc nghiệt."
            },
            {
                "question": "TB_STVSSOVSV_L4_024. Bào tử nội ở vi khuẩn có chức năng gì?",
                "answer": "Giúp vi khuẩn sống tiềm sinh khi gặp điều kiện môi trường bất lợi."
            },
            {
                "question": "TB_STVSSOVSV_L4_025. Nảy chồi là gì?",
                "answer": "Một cá thể con hình thành từ cá thể mẹ."
            },
            {
                question: "TB_STVSSOVSV_L4_026. Phân biệt bào tử sinh sản vô tính với bào tử sinh sản hữu tính của sinh vật nhân thực.",

                answer: "Bào tử vô tính: phân cắt phần đỉnh khí sinh theo cơ chế nguyên phân tạo  thành một chuỗi bào tử 2n, bào tử phát tán đến cơ chất thuận lợi ,nảy mầm và phát triển thành cơ thể mới. Đại diện: xạ khuẩn, nấm mốc. Bào tử hữu tính: cơ thể mẹ giảm phân hình thành các bào tử đơn bội, có sự khác nhau về giới tính.Các bào tử khác giới kết hợp với nhau tạo thành tế bào lưỡng bội, phát triển thành cơ thể mới.Đại diện: tảo lục, tảo mắt, trùng giầy."
            },
            {
                "question": "TB_STVSSOVSV_L4_027. Quá trình phân giải protein có ứng dụng gì?",
                "answer": "Ứng dụng trong sản xuất nước mắm, nước tương, và acid hữu cơ."
            },
            {
                "question": "TB_STVSSOVSV_L4_028. Nuôi cấy liên tục có ứng dụng gì trong sản xuất?",
                "answer": "Sản xuất sinh khối, vitamin, enzyme và chất kháng sinh."
            },
         
        ]
    },
    // Vai trò và ứng dụng của VSV

    saVTUDVSV: {
        level1: [
            
            {
                "question": "TB_VTƯDVSV_L1_001. ...",
                "answer": "..."
            },
            
         
           
            // Thêm các câu hỏi SA Vai trò và ứng dụng của VSV level 1 khác...
        ],
        level2: [
            {
                "question": "TB_VTƯDVSV_L1_001. ...",
                "answer": "..."
            },


           

            // Thêm các câu hỏi SA Vai trò và ứng dụng của VSV level 2...
        ],
        level3: [
            {
                "question": "TB_VTƯDVSV_L1_001. ...",
                "answer": "..."
            },

            // Thêm các câu hỏi SA Vai trò và ứng dụng của VSV level 3...
        ],
        level4: [
            {
                "question": "TB_VTƯDVSV_L4_001. Trình bày các cơ chế tác động của penicillin lên vi khuẩn. Tại sao vi khuẩn có thể biến đổi chống được penicillin?",
                "answer": "Các cơ chế tác động của penicillin lên vi khuẩn:<br/>Ức chế tổng hợp thành tế bào (peptidoglycan).<br/>Phá hủy màng sinh chất.<br/>Ức chế nhân đôi DNA, phiên mã, dịch mã.<br/>Vi khuẩn (VK) có thể biến đổi chống được penicillin vì:<br/>Nhiều VK mang gene kháng kháng sinh mã hóa enzyme penicillinase cắt vòng beta-lactam của penicillin và bất hoạt chất kháng sinh này."
            },
            {
                "question": "TB_VTƯDVSV_L4_002. Vi sinh vật có ảnh hưởng thế nào đến sự phát triển của cây trồng?",
                "answer": "Phân giải mùn, chất hữu cơ và cung cấp chất dinh dưỡng cho cây trồng."
            },


            {
                "question": "TB_VTƯDVSV_L4_003. Phổ sinh thái của vi sinh vật có nghĩa là gì?",
                "answer": "Vi sinh vật có khả năng sống trong nhiều môi trường khác nhau, với nhu cầu dinh dưỡng đa dạng."
            },


            {
                "question": "TB_VTƯDVSV_L4_004. Triển vọng của công nghệ vi sinh vật trong tương lai là gì?",
                "answer": "Kết hợp với công nghệ nano, trí tuệ nhân tạo, công nghệ vi sinh vật."
            },
            {
                question: "TB_VTƯDVSV_L4_005. Trong các hiện tượng sau, có bao nhiêu hiện tượng thể hiện lợi ích của vi sinh vật đối với đời sống con người? <br />(1) muối chua rau cải để bảo quản rau cải trong thời gian lâu hơn.<br />(2) quần áo bị mốc đen.<br />(3) thực phẩm bị mốc, thối.<br />(4) biofilm bám trên các bề mặt thiết bị công nghiệp, đồ dùng sản xuất, ống nước,… làm tắc nghẽn đường ống, cản trở hoạt động sản xuất.<br />(5) nước thải bị mất mùi khi qua các bể xử lí vi sinh.<br />(6) vi khuẩn Helicobacter pylori gây viêm loét dạ dày.<br />(7) sử dụng vi khuẩn phân hủy dầu để xử lí sự cố tràn dầu trên biển.",
                answer: "3"
            },
            {
                "question": "TB_VTƯDVSV_L4_006. Tại sao vi sinh vật có sự đa dạng di truyền lớn?",
                "answer": "Vi sinh vật có khả năng đột biến nhanh và tái tổ hợp di truyền, dẫn đến sự đa dạng lớn."
            },
            {
                "question": "TB_VTƯDVSV_L4_007. Vì sao vi sinh vật có khả năng tổng hợp và phân giải các chất nhanh?",
                "answer": "Vi sinh vật có tốc độ trao đổi chất và sinh trưởng cao, giúp tạo ra sản phẩm nhanh chóng."
            },
            {
                "question": "TB_VTƯDVSV_L4_008. Vi sinh vật có vai trò gì trong vòng tuần hoàn vật chất?",
                "answer": "Phân giải chất thải và xác vi sinh vật thành chất khoáng, giúp làm giàu dinh dưỡng cho đất."
            },
            {
                "question": "TB_VTƯDVSV_L4_009. Vi sinh vật tự dưỡng có vai trò gì trong tự nhiên?",
                "answer": "Tạo ra O₂ và chất dinh dưỡng cho sinh vật dị dưỡng."
            },
            {
                "question": "TB_VTƯDVSV_L4_010. Vi sinh vật có tác dụng gì đối với sự chuyển hóa chất trong đất?",
                "answer": "Phân giải chất hữu cơ thành khoáng chất, duy trì vòng tuần hoàn các chất trong đất."
            },
            {
                "question": "TB_VTƯDVSV_L4_011. Vi sinh vật có thể làm gì để giảm ô nhiễm môi trường?",
                "answer": "Phân giải chất thải độc hại như nhựa, hóa chất, chất phóng xạ."
            },
            {
                "question": "TB_VTƯDVSV_L4_012. Vi sinh vật có tác dụng gì đối với hệ tiêu hóa của con người?",
                "answer": "Vi sinh vật cộng sinh trong cơ thể giúp tiêu hóa và tổng hợp vitamin, amino acid."
            },
            {
                "question": "TB_VTƯDVSV_L4_013. Vi sinh vật có thể giúp sản xuất gì trong công nghiệp?",
                "answer": "Dùng trong sản xuất thực phẩm, thuốc kháng sinh, vitamin, amino acid."
            },
            {
                "question": "TB_VTƯDVSV_L4_014. Vi sinh vật có thể ảnh hưởng thế nào đến các thiết bị công nghiệp?",
                "answer": "Tạo màng sinh học bám trên thiết bị, gây tắc nghẽn và cản trở sản xuất."
            },
            {
                "question": "TB_VTƯDVSV_L4_015. Vi sinh vật có đặc điểm sinh học gì giúp ứng dụng trong thực tiễn?",
                "answer": "Kích thước nhỏ, sinh trưởng nhanh, và khả năng phân giải nhanh các chất."
            },
            {
                "question": "TB_VTƯDVSV_L4_016. Kích thước nhỏ của vi sinh vật có lợi ích gì trong ứng dụng công nghiệp?",
                "answer": "Dễ dàng nuôi cấy, lưu trữ và nghiên cứu với số lượng lớn."
            },
            {
                "question": "TB_VTƯDVSV_L4_017. Vi sinh vật có khả năng sinh trưởng nhanh mang lại lợi ích gì?",
                "answer": "Tạo ra sản phẩm với số lượng lớn trong thời gian ngắn."
            },
            {
                "question": "TB_VTƯDVSV_L4_018. Vi sinh vật có thể dùng để xử lí vết nứt bê tông như thế nào?",
                "answer": "Tạo ra hợp chất canxi carbonate, giúp làm đầy và khép lại các vết nứt."
            },
            {
                "question": "TB_VTƯDVSV_L4_019. Lợi ích của vi sinh vật trong việc sản xuất sản phẩm sinh học là gì?",
                "answer": "Có thể tổng hợp các sản phẩm như enzyme, vitamin, và hormone với chi phí thấp."
            },
            {
                "question": "TB_VTƯDVSV_L4_020. Vi sinh vật có ứng dụng gì trong nông nghiệp?",
                "answer": "Cải tạo đất, sản xuất phân bón vi sinh, và ức chế bệnh hại cho cây trồng."
            },
            {
                "question": "TB_VTƯDVSV_L4_021. Làm thế nào vi sinh vật có thể giúp cây trồng phát triển?",
                "answer": "Cố định nitrogen, biến lân khó tiêu thành lân dễ tiêu, sản sinh chất kích thích tăng trưởng."
            },
            {
                "question": "TB_VTƯDVSV_L4_022. Vi sinh vật giúp sản xuất thuốc trừ sâu như thế nào?",
                "answer": "Ức chế sự phát triển của sâu bệnh, thay thế thuốc trừ sâu hóa học."
            },
            {
                "question": "TB_VTƯDVSV_L4_023. Vi sinh vật được sử dụng để sản xuất gì trong y dược?",
                "answer": "Sản xuất thuốc kháng sinh, vaccine và các chế phẩm sinh học khác."
            },
            {
                "question": "TB_VTƯDVSV_L4_024. Vi sinh vật có thể sản xuất khí biogas như thế nào?",
                "answer": "Sinh methane giúp xử lý chất thải vật nuôi và tạo ra khí biogas."
            },
            {
                "question": "TB_VTƯDVSV_L4_025. Một trong những thành tựu lớn nhất của công nghệ vi sinh vật là gì?",
                "answer": "Công nghệ lên men và thu hồi sản phẩm như thuốc kháng sinh và vaccine."
            },
            {
                "question": "TB_VTƯDVSV_L4_026. Công nghệ thu hồi sản phẩm trong công nghệ vi sinh vật có thể thu được gì?",
                "answer": "Các sản phẩm như thuốc bảo vệ thực vật sinh học, kháng sinh, chế phẩm sinh học."
            },
            {
                "question": "TB_VTƯDVSV_L4_027. Các nghiên cứu về hệ vi sinh vật Trái Đất có ý nghĩa gì?",
                "answer": "Giúp tìm ra các ứng dụng mới như xử lý ô nhiễm và cải thiện sức khỏe."
            },
            {
                "question": "TB_VTƯDVSV_L4_028. Trong lên men rượu truyền thống, có những vi sinh vật nào tham gia? Vai trò và điều kiện hoạt động của các vi sinh vật đó.",
                "answer": "Nấm mốc: Phân giải tinh bột thành đường trong môi trường hiếu khí, có tinh bột chín.	Nấm men: Phân giải đường thành rượu, trong môi trường yếm khí, có đường glucose."
            },
            {
                "question": "TB_VTƯDVSV_L4_029. Vì sao bèo hoa dâu được dùng để cải tạo đất?",
                "answer": "Trong bèo có vi khuẩn lam cộng sinh,có khả năng cố định đạm từ nitrogen không khí, từ đó nó bổ sung đạm cho đất. Khi chết cung cấp mùn cho đất, làm cho đất tơi xốp."
            },
            {
                "question": "TB_VTƯDVSV_L4_030 [30-4-99]. Thế nào là đạm sinh học? Tại sao người ta thường trồng xen kẽ cây họ Đậu với cây ngũ cốc.",
                "answer": "Đạm sinh học là dạng đạm do các vi sinh vật tổng hợp từ N<sub>2</sub> tự do bằng phản ứng sinh học dưới tác dụng của enzyme.<br />Nhờ enzyme nitrogenase xúc tác quá trình phân cắt 3 liên kết trong phân tử N<sub>2</sub> rồi liên kết với hydrogen (H<sub>2</sub>) trong không khí tạo thành NH<sub>3</sub>, từ đó chuyển hóa tiếp thành các dạng nitrogen khác.<br /> Phương trình: N<sub>2</sub> + 8 H --> 2 NH<sub>3</sub> + H<sub>2</sub>. <br />Trồng xen cây họ Đậu với cây ngũ cốc giúp tăng cường nguồn đạm sinh học cho đất nhờ vi khuẩn cố định đạm trong cây họ đậu, qua đó cung cấp đạm cho cây ngũ cốc."
            },
            {
                "question": "TB_VTƯDVSV_L4_031 [30-4-00]. Trình bày quá trình làm giấm và làm sữa chua. Điểm khác nhau giữa hai quá trình này?",
                "answer": "Làm giấm: nguyên liệu là rượu, sản phẩm là giấm và nước, điều kiện vi hiếu khí, tác nhân là vi khuẩn acetic, phương trình: C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub> --> CH<sub>3</sub>COOH + H<sub>2</sub>O.<br />Làm sữa chua: nguyên liệu là glucose, sản phẩm là lactic acid (sữa chua), điều kiện kị khí, tác nhân là vi khuẩn lactic, phương trình: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> --> 2 CH<sub>3</sub>-CHOH-COOH"
            },
            {
                "question": "TB_VTƯDVSV_L4_032 [30-4-01]. Hãy cho biết vai trò và tác hại của vi tảo trong đời sống.",
                "answer": "Vai trò:<br />- Là nguồn thức ăn cho động vật thủy sinh.<br />- Làm sạch nguồn nước thải.<br />- Là vật chỉ thị để đánh giá độ ô nhiễm của nguồn nước trong thủy vực.<br />- Xác vi tảo trên mặt đất tạo mùn cho đất.<br />- Làm nguồn thức ăn bổ sung giàu dinh dưỡng cho người và động vật.<br />- Cộng sinh với nấm thành địa y, tạo điều kiện cho sự phát triển các loài sinh vật khác.<br />Tác hại:<br />- Một số loài tảo khi chết hàng loạt gây hiện tượng thủy triều đỏ làm ô nhiễm môi trường.<br />- Cạnh tranh chất khoáng với cây trồng."
            },
            {
                "question": "TB_VTƯDVSV_L4_033 [30-4-02]. Thuốc trừ sâu sinh học là gì? Phân tích ưu điểm và nhược điểm của thuốc trừ sâu sinh học.",
                "answer": "Thuốc trừ sâu sinh học là các chế phẩm sản xuất từ các loại vi sinh vật như vi khuẩn, xạ khuẩn, nấm sợi, virus, ... nhằm mục đích diệt sâu bọ có hại cho nông nghiệp.<br />- Ưu điểm: + Vô hại đối với con người, gia súc, gia cầm, cây trồng; không gây ô nhiễm môi trường.<br />+ Không dễ phát sinh hiện tượng kháng thuốc.<br />+ Bào tử vi sinh vật tồn tại lâu dài và cạnh tranh bền bỉ với sâu hại.<br />+ Vi sinh vật sinh sản nhanh, nguyên liệu dễ kiếm, rẻ tiền.<br />+ Quy mô sản xuất từ thủ công đến hiện đại đều thích hợp.<br />- Nhược điểm:<br />+ Tác động chậm, thường từ 3 đến 5 ngày mới gây chết hàng loạt.<br />+ Hiệu quả thay đổi do điều kiện ngoại cảnh.<br />+ Không thể cùng lúc tiêu diệt nhiều loại sâu bệnh khác nhau."
            },
        ]
    },
    // Thực hành VSV

    saTHVSV: {
        level1: [

            {
                "question": "TB_THVSV_L1_001. Vi sinh vật có ảnh hưởng thế nào đến sự phát triển của cây trồng?",
                "answer": "Phân giải mùn, chất hữu cơ và cung cấp chất dinh dưỡng cho cây trồng."
            },


            // Thêm các câu hỏi SA Vai trò và ứng dụng của VSV level 1 khác...
        ],
        level2: [
            {
                question: "TB_THVSV_L2_001. ...",
                answer: "3"
            },
           

            // Thêm các câu hỏi SA Vai trò và ứng dụng của VSV level 2...
        ],
        level3: [
            {
                "question": "TB_THVSV_L3_001. ...",
                "answer": "..."
            },
           
            // Thêm các câu hỏi SA Thực hành VSV level 3...
        ],
        level4: [
            {
                "question": "TB_THVSV_L4_001. Có hai bình tam giác nuôi cấy vi sinh vật chứa dung dịch có đầy đủ các nguyên tố khoáng và CO<sub>2</sub>. Một bình chứa vi khuẩn lam (vi khuẩn quang tự dưỡng), một bình chứa vi khuẩn không lưu huỳnh màu lục (vi khuẩn quang dị dưỡng), cả hai bình được đậy nút bông. Tiến hành nuôi lắc trong tối 24 giờ (giai đoạn 1), sau đó chuyển ra nuôi lắc ngoài sáng 24 giờ (giai đoạn 2), chuyển sang nuôi tĩnh trong tối 24 giờ (giai đoạn 3). Kết quả mỗi giai đoạn như trong bảng. Hãy xác định loại vi khuẩn có trong bình A và bình B. Giải thích.",
                image: "https://nhantri.top/media/Grade10/giaidoandinhduong.png",
                "answer": "- Bình A: Vi khuẩn không chứa lưu huỳnh màu lục (quang dị dưỡng). Vì trong bình nuôi cấy không có chất hữu cơ → không sinh trưởng không tăng sinh khối → bình nuôi cấy trong.<br/>- Bình B: Vi khuẩn lam (quang tự dưỡng). Vì giai đoạn 1 nuôi trong tối không có ánh sáng nên không quang hợp → sinh khối không tăng → bình trong. Giai đoạn 2 nuôi ngoài sáng quang hợp được → sinh khối tăng → hơi đục. Giai đoạn 3 nuôi trong tối → không quang hợp → sinh khối không tăng thêm → hơi đục."
            },
            {
                "question": "TB_THVSV_L4_002. Một số loài vi khuẩn có thể sử dụng etanol (CH₃-CH₂-OH) hoặc acetat (CH₃-COO⁻) làm nguồn carbon duy nhất trong quá trình sinh trưởng. Tốc độ hấp thu ban đầu hai loại chất này của tế bào vi khuẩn được trình bày trong bảng.<br/>a. Vẽ đồ thị biểu diễn mối quan hệ giữa tốc độ hấp thu ban đầu và nồng độ của hai chất trên.<br/>b. Dựa vào đồ thị đã vẽ, hãy cho biết:<br/>- Hai chất A và B vận chuyển qua màng tế bào vi khuẩn theo cách nào? Giải thích.<br/>- Hai chất A và B, chất nào là etanol và chất nào là acetat? Giải thích.",
                image: "https://nhantri.top/media/Grade10/tocdohapthuvk.png",
                "answer": "Sự hấp thu chất B qua đồ thị cho thấy tốc độ vận chuyển các chất vào trong tế bào lúc đầu tăng cùng với việc tăng nồng độ các chất. Nhưng đến một giai đoạn nhất định thì tốc độ phản ứng gần như không tăng ngay cả khi nồng độ chất tan tiếp tục tăng lên. Chất B đưọc vận chuyển qua kênh protein và việc tốc độ vận chuyển của chất B không tăng ở giai đoạn sau là hiện tượng bão hòa kênh.<br/>Sự hấp thu chất A qua đồ thị cho thấy tốc độ vận chuyển chất tan phụ thuộc tuyến tính vào nồng độ chất tan.Điều này chỉ ra rằng chất A được vận khuếch tán trực tiếp qua lớp lipid kép của màng tế bào  mà không cần phải qua kênh protein xuyên màng.<br/>Từ đồ thị cho thấy:<br/>Chất A là ethanol vì ethanol là chất phân tử nhỏ, không tích điện nên có thể khuyếch tán trực tiếp qua lớp lipid kép của màng tế bào dễ dàng hơn khuyếch tán vào lớp lipid.<br/>Chất B là acetat vì là chất tích điện nên sẽ khó khuyếch tán trực tiếp qua lớp lipid kép của màng tế bào vì lớp phospholipid kép có chứa các đuôi hydrocarbon kị nước (không phân cực)."
            },
            {
                "question": "TB_THVSV_L4_003. Rau củ lên men lactic là thức ăn truyền thống ở nhiều nước châu Á. Vi sinh vật thường thấy trong dịch lên men gồm vi khuẩn lên men lactic, nấm men và nấm sợi.<br />Hình sau thể hiện số lượng tế bào sống (LogN/ ml) của ba nhóm vi sinh vật khác nhau và giá trị pH trong quá trình lên men lactic dưa cải. Oxygen hòa tan trong dịch lên men giảm theo thời gian và được sử dụng hết sau ngày thứ 22.<br />a. Hãy cho biết trong các loài 1, 2, 3, loài nào là vi khuẩn lactic, loài nào là nấm men và loài nào là nấm sợi ? Giải thích.<br />b. Giải thích nguyên nhân tăng số lượng của loài 2 ở giai đoạn từ ngày 10 đến ngày 22.<br />c. Bằng cách nào các nhà khoa học có thể xác định được số lượng các tế bào sống của mỗi loài trong dịch lên men mà không bị lẫn các tế bào chết?",
                image: "https://nhantri.top/media/Grade10/rauculenmen.png",
                "answer": "a. Loài 1 là vi khuẩn lactic, vì trong điều kiện kị khí (sau ngày 22) số lượng tế bào của vi khuẩn này vẫn rất cao; Loài 2 là nấm men, vì trong điều kiện kị khí (sau ngày 22) loài này vẫn sinh trưởng được, mặc dù không bằng loài 1; Loài 3 là nấm sợi, vì loài này là loài hiếu khí, trong điều kiện kị khí, số lượng cả thể giảm nhanh.<br />b. Từ ngày 10 đến ngày 22, số lượng loài 2 tăng nhanh do:<br />- Vi khuẩn lactic hoạt động làm giảm pH, tạo thuận lợi cho sự phát triển của loài.<br />- Nấm sợi bị trở chế sinh trưởng, làm giảm mức cạnh tranh với loài.<br />c. Để xác định số lượng tế bào sống, ta có thể sử dụng phương pháp đếm khuẩn lạc (CFU)<br />Các tiến hành:<br />- Pha loãng dịch nuôi cấy đến mức cần thiết<br />- Cấy trải lên đĩa thạch và đếm số khuẩn lạc của mỗi loài."
            },
            {
                "question": "TB_THVSV_L4_004. Ba ống nghiệm X, Y và Z lần lượt chứa vi khuẩn Escherichia coli (Gram âm), Bacillus subtilis (Gram dương) và Mycoplasma mycoides (không có thành tế bào) với cùng mật độ (10⁶ tế bào/mL) trong dung dịch đẳng trương. Bổ sung lisozyme vào cả ba ống nghiệm, ủ ở 37°C trong 1 giờ. Tiếp tục bổ sung thực khuẩn thể gây độc đặc hiệu cho từng loại vi khuẩn vào ống X, Y, Z và ủ ở 37°C trong 1 giờ. Sau đó, tế bào vi khuẩn được li tâm và rửa lại nhiều lần rồi được cấy trải trên đĩa petri chứa môi trường thạch phù hợp cho sinh trưởng, phát triển và phục hồi thành tế bào của cả ba loài vi khuẩn (đĩa X, Y và Z), ủ ở 37°C trong 24 giờ. Hãy cho biết khả năng mọc của vi khuẩn và sự hình thành vết tan trên mỗi đĩa petri.",
              
                "answer": "Đĩa X:<br />- Vi khuẩn Escherichia coli (G-) → không bị tác động của lisozyme → khuẩn lạc hình thành.<br />- Bổ sung thực khuẩn thể đặc hiệu → xâm nhập và nhân lên trong tế bào vi khuẩn → xuất hiện vết tan.<br />Đĩa Y:<br />- Vi khuẩn Bacillus subtilis (G⁺) → bị tác động của lisozyme → phá thành → đặt trong đĩa petri phù hợp → phục hồi thành → hình thành khuẩn lạc.<br />- Bổ sung thực khuẩn thể đặc hiệu trước khi phục hồi thành → thực khuẩn thể không xâm nhập vào tế bào vi khuẩn → không xuất hiện vết tan."
            },
            // Thêm các câu hỏi SA Thực hành VSV level 4...
        ]
    },
    // Khái quát về virus

    saKQVR: {
        level1: [
            {
                question: "TB_KQVVR_L1_001. Virus là gì?",
                answer: "Virus là thực thể chưa có cấu tạo tế bào, chỉ nhân lên trong tế bào sống."
            },
            {
                question: "TB_KQVVR_L1_002. Kích thước của virus dao động trong khoảng bao nhiêu?",
                answer: "Kích thước virus dao động từ 20 nm đến 300 nm."
            },
            {
                question: "TB_KQVVR_L1_003. Hình dạng của virus có đặc điểm gì?",
                answer: "Virus có hình dạng đa dạng như xoắn, đa diện, cầu, hoặc phức tạp."
            },
            {
                question: "TB_KQVVR_L1_004. Virus có mấy thành phần chính trong cấu trúc?",
                answer: "2."
            },
            {
                question: "TB_KQVVR_L1_005. Có mấy loại lõi nucleic acid của virus?",
                answer: "2."
            },
            {
                question: "TB_KQVVR_L1_006. Vỏ capsid của virus có vai trò gì?",
                answer: "Vỏ capsid bao bọc và bảo vệ virus."
            },
            {
                question: "TB_KQVVR_L1_007. Một số loại virus có thêm cấu trúc nào ngoài vỏ capsid?",
                answer: "Một số virus có lớp vỏ ngoài bằng phospholipid và các gai glycoprotein."
            },
            {
                question: "TB_KQVVR_L1_008. Vai trò của các gai glycoprotein trên lớp vỏ ngoài của virus là gì?",
                answer: "Giúp virus tiếp cận và xâm nhập vào tế bào chủ."
            },
            {
                question: "TB_KQVVR_L1_009. Nơi virus tồn tại ngoài tự nhiên gọi là gì?",
                answer: "Ổ chứa."
            },
            {
                question: "TB_KQVVR_L1_010. Nơi virus tồn tại ngoài tự nhiên gọi là gì?",
                answer: "Ổ chứa."
            },
            {
                question: "TB_KQVVR_L1_011. Quá trình nhân lên của virus bao gồm bao nhiêu giai đoạn?",
                answer: "5."
            },
            {
                question: "TB_KQVVR_L1_012. Giai đoạn hấp phụ là gì?",
                answer: "Khi virus bám vào tế bào chủ nhờ các gai glycoprotein hoặc protein bề mặt."
            },
            {
                question: "TB_KQVVR_L1_013. Virus bám vào tế bào chủ như thế nào?",
                answer: "Nhờ sự tương tác giữa các thụ thể trên tế bào và protein bề mặt của virus."
            },
            {
                question: "TB_KQVVR_L1_014. Giai đoạn xâm nhập có điều gì đặc biệt?",
                answer: "Chỉ vật chất di truyền của virus được đưa vào tế bào chủ."
            },
            {
                question: "TB_KQVVR_L1_015. Giai đoạn tổng hợp diễn ra như thế nào?",
                answer: "Khi tế bào chủ tạo ra các bộ phận của virus, bao gồm protein và nucleic acid."
            },
            {
                question: "TB_KQVVR_L1_016. Virus DNA tổng hợp như thế nào trong tế bào chủ?",
                answer: "Virus DNA sử dụng enzyme tế bào chủ để phiên mã, dịch mã và nhân bản vật chất di truyền."
            },
            {
                question: "TB_KQVVR_L1_017. Giai đoạn lắp ráp diễn ra như thế nào?",
                answer: "Khi lõi nucleic acid được kết hợp với vỏ protein để tạo thành hạt virus hoàn chỉnh."
            },
            {
                question: "TB_KQVVR_L1_018. Giai đoạn phóng thích diễn ra như thế nào?",
                answer: "Khi virus mới được tạo ra rời khỏi tế bào chủ."
            },
            {
                question: "TB_KQVVR_L1_019. Virus có thể ra khỏi tế bào chủ bằng cách nào?",
                answer: "Phá vỡ tế bào hoặc ra theo cách khác mà tế bào không bị phá hủy."
            },
            {
                question: "TB_KQVVR_L1_020. Virus có thể nhân lên theo hình thức nào?",
                answer: "Bằng cách xâm nhập vào tế bào chủ, sử dụng các cơ chế của tế bào để tạo ra các bản sao của mình."
            },
            {
                question: "TB_KQVVR_L1_021. Enzyme sao chép ngược của virus RNA có chức năng gì?",
                answer: "Sao chép RNA thành DNA, sau đó phiên mã thành RNA virus mới."
            },
           
            // Thêm các câu hỏi SA Khái quát về virus level 1 khác...
        ],
        level2: [
            {
                question: "TB_KQVVR_L1_001. Tại sao việc phát hiện ổ chứa của virus quan trọng?",
                answer: "Việc phát hiện ổ chứa giúp kiểm soát dịch bệnh do virus."
            },
            {
                question: "TB_KQVVR_L1_002. Virus động vật có vỏ ngoài xâm nhập tế bào chủ như thế nào?",
                answer: "Virus động vật có vỏ ngoài đưa cả vỏ capsid và vật chất di truyền vào tế bào chủ."
            },
            {
                question: "TB_KQVVR_L1_003. Tại sao quá trình nhân lên của virus chỉ diễn ra trong tế bào sống?",
                answer: "Vì virus cần các cơ chế sinh học của tế bào sống để nhân bản và tạo ra các sản phẩm virus mới."
            },
          
        ],
        level3: [
            {
                question: "TB_KQVVR_L3_001. Đối với virus phage, vật chất di truyền vào tế bào chủ như thế nào?",

                answer: "Virus phage tiêm vật chất di truyền vào tế bào vi khuẩn, vỏ protein để lại bên ngoài."
            },

            
        ],
        level4: [
            {
                question: "TB_KQVVR_L4_001 [30-4-98]. Virus thuộc nhóm phân loại nào của vi sinh vật? Có cấu tạo cơ bản như thế nào?",

                answer: "Virus thuộc nhóm vi sinh vật chưa có cấu tạo tế bào.<br />Cấu tạo:<br />Phần vỏ protein (vỏ capsid). <br />Lõi nucleic acid (chứa DNA hoặc RNA). Một số virus ngoài vỏ capsid còn có màng bao do lipid hay lipoprotein tạo nên."
            },
            {
                question: "TB_KQVVR_L4_002 [30-4-98]. Virus có đời sống kí sinh bắt buộc. Vậy hãy nêu những mối quan hệ giữa virus và tế bào kí chủ? Cho một vài ví dụ.",

                answer: "Có 3 mối quan hệ giữa virus và tế bào kí chủ:<br />Làm tan tế bào kí chủ. Ví dụ: virus đậu mùa, virus viêm tủy sống;<br />Không làm tan tế bào kí chủ. Ví dụ: virus sởi.<br />Kết hợp 2 loại trên: DNA của virus kết hợp với DNA của tế bào kí chủ, làm tế bào sinh nở nhanh nhưng không giải phóng ra ngoài tế bào. Ví dụ: một số virus ung thư."
            },
            {
                question: "TB_KQVVR_L4_002 [30-4-99]. Hãy nêu phương thức sinh sản của virus.",

                answer: "Phương thức sinh sản của virus thực chất là quá trình nhân lên nhờ hệ gene và năng lượng vật chất của tế bào chủ. Quá trình này gồm 5 bước: Sự hấp phụ; Sự xâm nhập; Sự sao chép; Sự thành thục; Sự phóng thích."
            },
            {
                question: "TB_KQVVR_L4_002 [30-4-99]. Ảnh hưởng của virus đối với đời sống con người.",

                answer: "Tác hại: Là tác nhân gây nhiều bệnh hiểm nghèo ở người (dại, cúm, viêm não Nhật Bản, AIDS,...), động vật (dại ở chó, toi gà...) và thực vật (xoắn lá cà chua, khảm thuốc lá, ...), gây thiệt hại lớn về kinh tế.<br />Lợi ích: Nhờ cấu tạo đơn giản, virus được ứng dụng trong kĩ thuật di truyền (cấy ghép gene), nghiên cứu bệnh mới, chế tạo vaccin và sản xuất thuốc trừ sâu sinh học."
            },
            {
                question: "TB_KQVVR_L4_002 [30-4-99]. So sánh sự tải nạp và tiếp hợp ở vi sinh vật.",

                answer: "Giống nhau: Đều là quá trình chuyển gene từ tế bào cho sang tế bào nhận.<br />Khác nhau:<br />- Tải nạp: Chuyển DNA nhờ vật trung gian là phage.<br />- Tiếp hợp: Chuyển ADNA qua tiếp xúc trực tiếp giữa hai tế bào vi khuẩn."
            },
        ]
    },
    // Một số bệnh Virus và các thành tựu

    saVR: {
        level1: [
            {
                question: "TB_VR_L1_001. Trong các hoạt động sau đây, có bao nhiêu hoạt động không gây lây nhiễm HIV? <br/>(1) Sử dụng chung kim tiêm với người mắc HIV. <br/>(2) Bắt tay, ôm người mắc HIV. <br/>(3) Truyền máu nhiễm HIV. <br/>(4) Tiếp xúc gần, nói chuyện với người mắc HIV. <br/>(5) Ở cùng phòng với người mắc HIV. <br/>(6) Ăn cơm cùng bàn với người mắc HIV.",
                answer: "4"
            },
            {
                question: "TB_VR_L1_002. Virus gây bệnh bằng cơ chế gì?",
                answer: "Virus gây bệnh thông qua cơ chế sinh tan và tiềm tan."
            },
            {
                question: "TB_VR_L1_003. Lấy ví dụ về virus gây bệnh qua cơ chế sinh tan.",
                answer: "Poliovirus gây bại liệt, virus gây cảm lạnh, viêm đường hô hấp."
            },
            {
                question: "TB_VR_L1_003. Lấy ví dụ về virus gây bệnh qua cơ chế tiềm tan.",
                answer: "Virus viêm gan B và virus HPV gây ung thư gan và ung thư tử cung."
            },
            {
                question: "TB_VR_L1_004. Kể tên một loại virus có thể tái tổ hợp khi cùng xâm nhập vào một tế bào?",
                answer: "Virus cúm."
            },
            {
                question: "TB_VR_L1_005. Virus nào gây hội chứng suy giảm miễn dịch mắc phải?",
                answer: "Virus HIV."
            },
            {
                question: "TB_VR_L1_006. HIV có vật chất di truyền gì?",
                answer: "HIV có vật chất di truyền là RNA."
            },
            {
                question: "TB_VR_L1_007. Cấu trúc bên ngoài của HIV gồm những gì?",
                answer: "Vỏ ngoài của HIV là lớp phospholipid chứa gai glycoprotein."
            },
            {
                question: "TB_VR_L1_008. HIV lây truyền qua những con đường nào?",
                answer: "Qua máu, đường tình dục và mẹ truyền sang con."
            },
            {
                question: "TB_VR_L1_009. Virus HIV tấn công tế bào nào trong hệ miễn dịch?",
                answer: "HIV tấn công tế bào bạch cầu T4."
            },
            {
                question: "TB_VR_L1_010. Cấu trúc của virus cúm bao gồm những gì?",
                answer: "Virus cúm có vỏ ngoài và vật chất di truyền là RNA."
            },
            {
                question: "TB_VR_L1_011. Virus cúm có hai loại glycoprotein nào?",
                answer: "H (hemagglutinin) và N (neuraminidase)."
            },
            {
                question: "TB_VR_L1_012. Virus cúm có bao nhiêu nhóm H và N?",
                answer: "16 nhóm H và 9 nhóm N."
            },
            {
                question: "TB_VR_L1_013. Virus cúm lây truyền như thế nào?",
                answer: "Lây qua giọt bắn, tiếp xúc trực tiếp, qua bề mặt nhiễm virus."
            },
            {
                question: "TB_VR_L1_014. Biểu hiện bệnh ở thực vật do virus là gì?",
                answer: "Lá xoăn, có vết nâu, vàng, hoặc trắng, cây sinh trưởng chậm."
            },
            {
                question: "TB_VR_L1_015. Virus lây truyền trong thực vật bằng cách nào?",
                answer: "Lây qua con đường truyền ngang và truyền dọc."
            },
            {
                question: "TB_VR_L1_016. Virus lây truyền theo hàng ngang như thế nào?",
                answer: "Virus lây qua sự tổn thương thành tế bào do côn trùng chích hoặc chăm sóc cây."
            },
            {
                question: "TB_VR_L1_017. Virus có thể được sử dụng trong nghiên cứu cái gì?",
                answer: "Virus có thể được sử dụng làm vector trong công nghệ di truyền."
            },
            {
                question: "TB_VR_L1_018. Virus có thể được sử dụng trong liệu pháp gene như thế nào?",
                answer: "Virus chuyển gene lành vào cơ thể người để thay thế gene bệnh."
            },
            // Thêm các câu hỏi SA Virus level 1 khác...
        ],
        level2: [
            {
                question: "TB_VR_L2_001. Virus gây bệnh sinh tan như thế nào?",
                answer: "Phá hủy tế bào và mô, gây bệnh nặng hay nhẹ tùy vào số tế bào bị hủy hoại."
            },
            {
                question: "TB_VR_L2_002. Virus gây bệnh tiềm tan như thế nào?",
                answer: "Gây đột biến gene dẫn đến ung thư."
            },
            {
                question: "TB_VR_L2_003. Virus gây bệnh tiềm tan như thế nào?",
                answer: "Để ngăn chặn sự nhân lên và phát tán của virus."
            },
            {
                question: "TB_VR_L2_004. Virus gây bệnh tiềm tan như thế nào?",
                answer: "Virus dễ đột biến (đặc biệt là virus có RNA), tạo ra các chủng mới."
            },
            {
                question: "TB_VR_L2_005. Vì sao có một số loại virus gây bệnh ở người rất khó tiêu diệt?",
                answer: "Một số virus gây bệnh ở người khó tiêu diệt vì chúng có hệ gene kết hợp vào hệ gene của tế bào chủ, kí sinh bắt buộc trong tế bào chủ."
            },
            {
                question: "TB_VR_L2_006. Nói virus không có lợi cho con người, đúng hay sai? Giải thích.",
                answer: "Nói virus không có lợi là sai vì virus được ứng dụng vào nhiều lĩnh vực đời sống: sản xuất các chế phẩm sinh học, sản xuất vaccine, sản xuất thuốc trừ sâu, trong nghiên cứu di truyền."
            },
            // Thêm các câu hỏi SA Virus level 2...
        ],
        level3: [
            {
                question: "TB_VR_L3_001. Quan sát hình ảnh và cho biết virus lai nhiễm vào cây mang đặc điểm của virus chủng số mấy?",
                image: "https://nhantri.top/media/Grade10/voloi.png",
                answer: "1"
            },
            {
                question: "TB_VR_L3_002. Biểu hiện chung của các bệnh do virus là gì?",
                answer: "Sốt cao và đau nhức cơ thể."
            },
            {
                question: "TB_VR_L3_003. Tại sao virus RNA dễ phát sinh chủng mới?",
                answer: "Enzyme sao chép RNA không chính xác và ít khả năng sửa chữa lỗi."
            },
            {
                question: "TB_VR_L3_004. Thuốc trừ sâu từ virus có ưu điểm gì so với thuốc trừ sâu hóa học?",
                answer: "Đặc hiệu, không gây ô nhiễm môi trường và không để lại hóa chất trong nông sản."
            },
           
        ],
        level4: [
            {
                question: "TB_VR_L4_001. Virus Corona chủng mới (Covid-19) bùng phát dịch bệnh vào tháng 12 năm 2019. Để giảm bớt tác hại của Covid-19, các nhà khoa học trên các quốc gia khác nhau đã tìm ra nhiều loại vaccine khác nhau như: AstraZeneca, Pfizer, Vero cell,... Tuy nhiên, mỗi loại vaccine lại được sản xuất theo một công nghệ khác nhau.<br/>Em hiểu thế nào là vaccine được sản xuất theo công nghệ virus bất hoạt và vaccine sản xuất theo công nghệ mRNA?<br/>Lấy ví dụ về vaccine cho từng loại công nghệ.",
              
                answer: "- Công nghệ mRNA: Đây là loại vaccine sử dụng một loại vật chất di truyền đã được biến đổi gene. Sau khi tiêm vào cơ thể sẽ tạo ra protein có cấu trúc giống như virus gây bệnh để tạo ra phản ứng miễn dịch (kháng thể). Ví dụ: Vaccine Pfizer. <br/>- Công nghệ virus bất hoạt: Loại vaccine này sẽ tạo kháng thể phòng chống mầm bệnh bằng cách sử dụng virus đã chết hoặc làm yếu đi những vẫn đủ khả năng tạo phản ứng miễn dịch. Ví dụ: Vắcxin Vero cell."
            },
            {
                question: "TB_VR_L4_002. Hình dưới đây mô tả cấu trúc của virus SAR-CoV-2 thuộc nhóm Coronavirus với vật chất di truyền là ssRNA (+) nhưng lại được tái bản nhờ enzyme Replicase (RdRP) là một enzyme RNA polymerase dùng RNA làm mạch khuôn. Virus này có màng ngoài chứa gai protein (S), màng lipid (M) và vỏ E.<br/>a) Nguồn gốc và vai trò của gai S đối với chu trình sống của virus SAR-CoV-2?<br/>b) Bằng cách nào virus SAR-CoV-2 có thể tổng hợp mRNA của bản thân nó trong tế bào chủ ?<br/>Quá trình này có trùng với quá trình tự sao không?<br/>c) Dựa trên các thông tin đã mô tả ở trên giải thích tại sao tốc độ tạo ra chủng mới của virus SAR-CoV-2 lại rất nhanh ?<br/>d) Một nhóm nghiên cứu của Đức – Cure Vac sử dụng một cách tiếp cận khác để nghiên cứu và sản xuất vaccine COVID–19. Họ tiến hành tổng hợp nhân tạo mRNA mã hóa protein bề mặt của virus này rồi đóng gói trong một túi nano lipid gọi là micelle và sản xuất với số lượng lớn làm vaccine mà không cần nuôi cấy virus.Sản phẩm này có hoạt tính vaccine hay không? Giải thích.",
                image: "https://nhantri.top/media/Grade10/vrcorona.png",
                answer: "a. Gai S là một loại protein do gene của virus sử dụng các nguyên liệu của tế bào chủ tổng hợp mà thành. Chức năng sinh học của gai S là liên kết đặc hiệu với thụ thể trên màng tế bào chủ để tiến hành giai đoạn hấp phụ của virus.<br/>Virus tổng hợp mRNA của nó trong tế bào chủ bằng cách:<br/>- Vì genome của virus là ssRNA sợi dương nên có thể dùng luôn như một mRNA để tổng hợp protein enzyme replicase ngay sau khi chúng xâm nhập vào trong tế bào chủ.<br/>- RdRP dùng ssRNA (+) làm khuôn để tổng hợp ssRNA (-), sợi ssRNA (-) được dùng làm khuôn để tiến hành quá trình sao chép hàng loạt ssRNA(+) là vật chất di truyền của các hạt virus tiếp theo.<br/>- Ở ssRNA(+) thì quá trình phiên mã cũng chính là quá trình tự sao của vật chất di truyền.<br/>c.Tốc độ biến chủng của SAR-CoV-2 rất nhanh vì replicase có bản chất là RNA polymerase không có hoạt động sửa sai và do đó các sai sót xuất hiện trong tự sao nhiều, không được sửa chữa hình thành các đột biến.<br/>d.Sản phẩm này có hoạt tính vaccine vì khi micelle xâm nhập vào tế bào chủ, mRNA mang theo được dịch mã tạo ra protein gai virus.Tế bào nhận diện protein gai virus là protein lạ và kích thích đáp ứng miễn dịch."
            },

        ],
    }
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
    if (total > 400) {
        errorMessage.textContent = 'Tổng số câu hỏi không được vượt quá 400!';
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
    if (total > 400) {
        alert('Tổng số câu hỏi không được vượt quá 400!');
        return;
    }

    const examContent = document.getElementById('exam-content');
    const answersContent = document.getElementById('answers-content');
    let examHtml = '<h2>ĐỀ KIỂM TRA</h2>';
    let answersHtml = '<h2>ĐÁP ÁN</h2>';
    let questionNumber = 1;

    // Generate MC Mở đầu
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcMD[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max_width: 100%; height: auto;">` : ""}
                                                        <div class="mcMD-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcMD-option" data_index="${idx}">

                                                                    <div class="mcMD-option_text">${opt}</div>
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
    // Generate MC Phương pháp nghiên cứu và học tập môn Sinh học
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcPPNCHT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcPPNCHT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max_width: 100%; height: auto;">` : ""}
                                                        <div class="mcPPNCHT-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcPPNCHT-option" data_index="${idx}">

                                                                    <div class="mcPPNCHT-option_text">${opt}</div>
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
    // Generate MC Các cấp độ tổ chức sống
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCCDTCS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCCDTCS[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max_width: 100%; height: auto;">` : ""}
                                                        <div class="mcCCDTCS-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcCCDTCS-option" data-index="${idx}">

                                                                    <div class="mcCCDTCS-option-text">${opt}</div>
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
    // Generate Nguyên tố hóa học và nước
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCNTHHVN-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCNTHHVN[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                          <div class="question">
                                              <div>
                                                  <span>Câu ${questionNumber}:</span> ${q.question}
                                              </div>
                                              ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                              <div class="mcCNTHHVN-options">
                                                  ${q.options.map((opt, idx) => `
                                                      <div class="mcCNTHHVN-option" data-index="${idx}">

                                                          <div class="mcCNTHHVN-option-text">${opt}</div>
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
    // Generate MC Các đại phân tử hữu cơ
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCDPTHC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCDPTHC[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcCDPTHC-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcCDPTHC-option" data-index="${idx}">

                                              <div class="mcCDPTHC-option-text">${opt}</div>
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
    // Generate MC Tế bào nhân sơ
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTBNS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTBNS[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTBNS-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTBNS-option" data-index="${idx}">

                                              <div class="mcTBNS-option-text">${opt}</div>
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
    // Generate MC Tế bào nhân thực
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTBNT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTBNT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTBNT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTBNT-option" data-index="${idx}">

                                              <div class="mcTBNT-option-text">${opt}</div>
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
    // Generate MC Trao đổi chất trong tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTDC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTDC[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTDC-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTDC-option" data-index="${idx}">

                                              <div class="mcTDC-option-text">${opt}</div>
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
    // Generate MC Truyền tin tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTTTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTTTB[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTTTB-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTTTB-option" data-index="${idx}">

                                              <div class="mcTTTB-option-text">${opt}</div>
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
    // Generate MC Khái quát về Chuyển hóa năng lượng
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQCHVCVNL[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcKQCHVCVNL-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcKQCHVCVNL-option" data-index="${idx}">

                                              <div class="mcKQCHVCVNL-option-text">${opt}</div>
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
    // Generate MC Chuyển hóa năng lượng trong tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcQTCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcQTCHVCVNL[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcQTCHVCVNL-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcQTCHVCVNL-option" data-index="${idx}">

                                              <div class="mcQTCHVCVNL-option-text">${opt}</div>
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
    // Generate MC Chu kì tế bào và nguyên phân
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCKTBVNP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCKTBVNP[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcCKTBVNP-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcCKTBVNP-option" data-index="${idx}">

                                              <div class="mcCKTBVNP-option-text">${opt}</div>
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
    // Generate MC Giảm phân
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcQTGP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcQTGP[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcQTGP-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcQTGP-option" data-index="${idx}">

                                              <div class="mcQTGP-option-text">${opt}</div>
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
    // Generate MC Công nghệ tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCNTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCNTB[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcCNTB-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcCNTB-option" data-index="${idx}">

                                              <div class="mcCNTB-option-text">${opt}</div>
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
    // Generate MC Đa dạng và phương pháp nghiên cứu VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcDDPPNCVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDDPPNCVSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDDPPNCVSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDDPPNCVSV-option" data-index="${idx}">

                                              <div class="mcDDPPNCVSV-option-text">${opt}</div>
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
    // Generate MC Sinh trưởng và sinh sản ở VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTSSVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTSSVSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTSSVSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTSSVSV-option" data-index="${idx}">

                                              <div class="mcSTSSVSV-option-text">${opt}</div>
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
    // Generate MC Vai trò và ứng dụng của VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcVTUDVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcVTUDVSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcVTUDVSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcVTUDVSV-option" data-index="${idx}">

                                              <div class="mcVTUDVSV-option-text">${opt}</div>
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
    // Generate MC Thực hành VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTHVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTHVSV[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTHVSV-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTHVSV-option" data-index="${idx}">

                                              <div class="mcTHVSV-option-text">${opt}</div>
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
    // Generate MC Khái quát về virus
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcKQVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcKQVR[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcKQVR-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcKQVR-option" data-index="${idx}">

                                              <div class="mcKQVR-option-text">${opt}</div>
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
    // Generate MC Virus
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcVR[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcVR-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcVR-option" data-index="${idx}">

                                              <div class="mcVR-option-text">${opt}</div>
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
    // Generate TF Mở đầu
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfMD[`level${level}`], count);
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
    // Generate TF Phương pháp nghiên cứu và học tập môn Sinh học
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfPPNCHT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfPPNCHT[`level${level}`], count);
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
    // Generate TF Mở đầu
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCCDTCS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCCDTCS[`level${level}`], count);
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
    // Generate TF Nguyên tố hóa học và nước
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCNTHHVN-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCNTHHVN[`level${level}`], count);
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
    // Generate TF Các đại phân tử hữu cơ
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCDPTHC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCDPTHC[`level${level}`], count);
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
    // Generate TF Cấu trúc tế bào nhân sơ
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTBNS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTBNS[`level${level}`], count);
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
    // Generate TF Cấu trúc tế bào nhân thực
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTBNT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTBNT[`level${level}`], count);
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
    // Generate TF Trao đổi chất
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTDC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTDC[`level${level}`], count);
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
    // Generate TF Truyền tin tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTTTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTTTB[`level${level}`], count);
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
    // Generate TF Khái quát về Chuyến hóa năng lượng 
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQCHVCVNL[`level${level}`], count);
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
    // Generate TF Chuyến hóa năng lượng trong tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfQTCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfQTCHVCVNL[`level${level}`], count);
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
    // Generate TF Chu kì tế bào và nguyên phân
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCKTBVNP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCKTBVNP[`level${level}`], count);
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
    // Generate TF Giảm phân
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfQTGP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfQTGP[`level${level}`], count);
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
    // Generate TF Công nghệ tế bào
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCNTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCNTB[`level${level}`], count);
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
    // Generate TF Đa dạng và PPNC VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfDDPPNCVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDDPPNCVSV[`level${level}`], count);
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
    // Generate TF Sinh trưởng và sinh sản VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTSSVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTSSVSV[`level${level}`], count);
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
    // Generate TF Vai trò và ứng dụng của VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfVTUDVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfVTUDVSV[`level${level}`], count);
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
    // Generate TF Thực hành VSV
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTHVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTHVSV[`level${level}`], count);
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
    // Generate TF Khái quát về virus
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfKQVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfKQVR[`level${level}`], count);
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

    // Generate TF Virus
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfVR[`level${level}`], count);
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
    // Generate SA Mở đầu
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saMD[`level${level}`], count);

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
    // Generate SA Phương pháp nghiên cứu và học tập môn sinh học
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saPPNCHT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saPPNCHT[`level${level}`], count);

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
    // Generate SA Các cấp độ tổ chức sống
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCCDTCS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCCDTCS[`level${level}`], count);

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
    // Generate SA Nguyên tố hóa học và nước
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCNTHHVN-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCNTHHVN[`level${level}`], count);

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
    // Generate SA Các đại phân tử hữu cơ
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCDPTHC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCDPTHC[`level${level}`], count);

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
    // Generate SA Tế bào nhân sơ
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTBNS-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTBNS[`level${level}`], count);

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
    // Generate SA Tế bào nhân thực
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTBNT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTBNT[`level${level}`], count);

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
    // Generate SA Trao đổi chất trong tế bào
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTDC-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTDC[`level${level}`], count);

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
    // Generate SA Truyền tin tế bào
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTTTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTTTB[`level${level}`], count);

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
    // Generate SA Khái quát Chuyển hóa năng lượng
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQCHVCVNL[`level${level}`], count);

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
    // Generate SA Chuyển hóa năng lượng trong tế bào
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saQTCHVCVNL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saQTCHVCVNL[`level${level}`], count);

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
    // Generate SA Chu kì tế bào và nguyên phân
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCKTBVNP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCKTBVNP[`level${level}`], count);

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
    // Generate SA Giảm phân
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saQTGP-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saQTGP[`level${level}`], count);

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
    // Generate SA Công nghệ tế bào
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saCNTB-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCNTB[`level${level}`], count);

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

    // Generate SA Đa dạng và các phương pháp nghiên cứu VSV
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saDDPPNCVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDDPPNCVSV[`level${level}`], count);

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
    // Generate SA Sinh trưởng và sinh sản ở VSV
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTSSVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTSSVSV[`level${level}`], count);

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
    // Vai trò và ứng dụng VSV
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saVTUDVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saVTUDVSV[`level${level}`], count);

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
    // Thực hành VSV
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saTHVSV-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTHVSV[`level${level}`], count);

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
    // Generate SA Khái quát về virus
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saKQVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saKQVR[`level${level}`], count);

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
    // Generate SA Virus
    ['1', '2', '3', '4'].forEach(level => {
        const count = parseInt(document.getElementById(`saVR-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saVR[`level${level}`], count);

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
    link.download = 'de-kiem-tra.doc';
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
