// Ngân hàng câu hỏi
const questionBank = {
    mcc1: {
        level1: [
            {
                question: "MB-CSVCDTPT-L1-001. Quan sát hình và cho biết gene là gì?",
                image: "https://nhantri.top/media/Grade12/5103.png",
                options: ["A. Gene là một đoạn của phân tử DNA mang thông tin mã hoá cho một chuỗi polypeptide.", "B. Gene là một đoạn của phân tử DNA mang thông tin mã hoá cho một chuỗi polypeptide hay một phân tử RNA.", "C. Gene là một đoạn của phân tử RNA mang thông tin mã hoá cho một chuỗi polypeptide hay một số phân tử RNA.", "D. Gene là một đoạn của phân tử DNA mang thông tin mã hoá cho một số loại chuỗi polypeptide hay một số loại phân tử RNA."],
                answer: 1
            },
            {
                question: "MB-CSVCDTPT-L1-002. Quan sát hình và cho biết các nucleotide trong một sợi của DNA liên kết với nhau bằng liên kết:",
                image: "https://nhantri.top/media/Grade12/5103tt.png",
                options: ["A. Liên kết ion.", "B. Liên kết hydrogen.", "C. Liên kết phosphodiester.", "D. Cầu liên kết H<sub>2</sub>S"],
                answer: 2
            },
            {
                question: "MB-CSVCDTPT-L1-003. Điều nào dưới đây là không đúng khi nói về các vùng của gene?",
                image: "https://nhantri.top/media/Grade12/5104.png",
                options: ["A. Vùng mở đầu nằm ở đầu 3' còn vùng kết thúc nằm ở đầu 5' của mạch mang mã gốc.", "B. Vùng điều hòa chứa trình tự khởi động cần thiết cho sự khởi đầu tổng hợp RNA.", "C. Vùng kết thúc mang tín hiệu kết thúc quá trình tổng hợp RNA.", "D. Vùng mã hóa nằm ở giữa và có vai trò điều hòa hoạt động của gene."],
                answer: 3
            },

            {
                question: "MB-CSVCDTPT-L1-004. Loại đường có trong cấu tạo đơn phân của DNA là",
                options: ["A. glucose.", "B. lactose.", "C. deoxyribose.", "D. ribose."],
                answer: 2
            },
            {
                question: "MB-CSVCPT-L1-005. Loại nucleic acid nào sau đây là thành phần cấu tạo của ribosome?",
                options: ["A. rRNA.", "B. mRNA.", "C. tRNA.", "D. DNA."],
                answer: 0
            },

            {
                question: "MB-CSVCDTPT-L1-006. Hệ gene là",
                options: ["A. tập hợp tất cả vật chất di truyền DNA trong tế bào của một sinh vật.", "B. tập hợp tất cả vật chất di truyền DNA trong tế bào của một quần thể sinh vật.", "C. tập hợp tất cả vật chất di truyền RNA trong tế bào của một sinh vật.", "D. tập hợp tất cả vật chất di truyền RNA trong tế bào của một quần thể sinh vật."],
                answer: 0
            },
            {
                question: "MB-CSVCDTPT-L1-007. Trong chu kì tế bào, nhiễm sắc thể tự nhân đôi diễn ra ở kì nào?",
                options: ["A. Kì trung gian",
                    "B. Kì đầu.",
                    "C. Kì sau.",
                    "D. Kì giữa."],
                answer: 0
            },
            // Thêm các câu hỏi MC level 1 khác...
        ],
        level2: [
            {
                question: "MB-CSVCDTPT-L2-001. Quan sát hình và cho biết DNA và RNA khác nhau ở đặc điểm:",
                image: "https://nhantri.top/media/Grade12/5103ttt.png",
                options: ["A. chúng đều được cấu tạo từ đường deoxyribose.", "B. chúng đều được cấu tạo từ đường ribose.", "C. DNA được cấu tạo từ đường deoxyribose, còn RNA được cấu tạo từ đường ribose.", "D. DNA được cấu tạo từ đường ribose, còn RNA được cấu tạo từ đường deoxyribose."],
                answer: 2
            },

            {
                question: "MB-CSVCDTPT-L2-002. Một đoạn phân tử DNA ở sinh vật nhân thực có trình tự nucleotide trên mạch mã gốc là 3’..TGTGAAXTTGXA... 5’. Theo lí thuyết, trình tự nucleotide trên mạch bổ sung của đoạn phân tử DNA này là",
                options: ["A. 5' ...TGTGAACCTGCA... 3’.", "B. 5'...AAAGTTACCGGT... 3’.", "C. 5’..TGCAAGTTCACA... 3’.", "D. 5’...ACACTTGAACGT... 3’."],
                answer: 3
            },
            {
                question: "MB-CSVCDTPT-L2-003.  Kết quả phân tích nucleic acid lấy từ mẫu máu của một bệnh nhân như sau: 32% Adenine; 20% Guanine; 18% Thymine; 30% Cytosine. Kết quả phân tích cho thấy đây là",
                options: ["A. DNA của vi khuẩn có trong máu bệnh nhân.", "B. DNA đột biến có trong tế bào máu của bệnh nhân.", "C. RNA có trong tế bào nhiễm virus của bệnh nhân.", "D. DNA của virus có trong máu bệnh nhân."],
                answer: 3
            },
            {
                question: "MB-CSVCDTPT-L2-004. Dựa vào chức năng, gene được chia thành hai loại gồm:",
                options: ["A. gene cấu trúc và gene phân mảnh.", "B. gene điều hòa và gene cấu trúc.", "C. gene điều hòa và gene không phân mảnh.", "D. gene phân mảnh và gene không phân mảnh."],
                answer: 1
            },
            {
                question: "MB-CSVCDTPT-L2-005. Phân tử nucleic acid số mấy đã sẵn sàng tham gia làm khuôn cho quá trình dịch mã?",
                image: "https://nhantri.top/media/Grade12/rnaphanloai.png",
                options: ["A. (I).",
                    "B. (II).",
                    "C. (III).",
                    "D. (IV)."],
                answer: 2
            },
            {
                question: "MB-CSVCDTPT-L2-005. Phân tử nucleic acid số mấy là tRNA",
                image: "https://nhantri.top/media/Grade12/rnaphanloai.png",
                options: ["A. (I).",
                    "B. (II).",
                    "C. (III).",
                    "D. (IV)."],
                answer: 1
            },
            // Thêm các câu hỏi MC level 2 khác...
        ],
        level3: [

            {
                "question": "MB-CSVCDTPT-L2-005. Khi xác định quan hệ huyết thống giữa hai người bất kì, phân tích loại phân tử sinh học nào sau đây cho kết quả chính xác nhất ?",
                "options": [
                    "A. DNA.",
                    "B. RNA.",
                    "C. Protein.",
                    "D. Carbohydrate."
                ],
                "answer": 0,

            },
            // Thêm các câu hỏi MC level 3 khác...
        ]
    },
    mcCCDTPT: {
        level1: [
            {
                question: "MB-CCDTPT-L1-01. Nhiều bộ ba khác nhau cùng xác định một loại amino acid, trừ 5’AUG3’ và 5’UGG3’, điều này chứng tỏ mã di truyền có tính:",
                options: ["A. liên tục.", "B. phổ biến.", "C. thoái hóa.", "D. đặc hiệu."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L1-002. Vai trò của enzyme DNA polymerase trong quá trình tái bản DNA là",

                options: ["A. Nối các Okazaki với nhau.", "B. Bẻ gãy các liên kết hydro giữa 2 mạch của DNA.", "C. Lắp ráp các nucleotide tự do theo nguyên tắc bổ sung với mỗi mạch khuôn của DNA.", "D. Tháo xoắn phân tử DNA."],
                answer: 2
            },

            {
                question: "MB-CCDTPT-L1-003. Điều nào dưới đây là đúng khi nói về gene ở sinh vật nhân sơ và sinh vật nhân thực?",
                image: "https://nhantri.top/media/Grade12/IntronExon.png",
                options: ["A. Gene ở sinh vật nhân sơ là gene phân mảnh còn gene ở sinh vật nhân thực là gene liên tục.", "B. Gene ở sinh vật nhân sơ là gene liên tục còn gene ở sinh vật nhân thực là gene phân mảnh.", "C. Gene ở sinh vật nhân sơ và sinh vật nhân thực đều là gene liên tục.", "D. Gene ở sinh vật nhân sơ và sinh vật nhân thực đều là gene phân mảnh."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-004. Enzyme nào dưới đây có vai trò nối các đoạn Okazaki trong quá trình tái bản của DNA?",
                options: ["A. RNA- polymerase.", "B. Ligase.", "C. DNA - polymerase.", "D. Restrictase."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-005. Trong quá trình tự tái bản DNA, mạch đơn nào làm khuôn mẫu tổng hợp mạch DNA liên tục?",
                options: ["A. Mạch đơn có chiều 5’ – 3’.", "B. Một mạch đơn DNA bất kì.", "C. Mạch đơn có chiều 3’ – 5’.", "D. Trên cả 2 mạch đơn."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L1-006. Quá trình nào sau đây có giai đoạn hoạt hóa amino acid?",
                options: ["A. Phiên mã tổng hợp mRNA.", "B. Dịch mã.", "C. Phiên mã tổng hợp tRNA.", "D. Tái bản DNA."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-007. Ở sinh vật nhân thực, codon nào sau đây quy định tín hiệu kết thúc quá trình dịch mã?",
                options: ["A. 5’AUA3’.", "B. 5’AUG3’.", "C. 5’AAG3’.", "D. 5’UAA3’."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L1-008. Thí nghiệm phát hiện operon lac ở vi khuẩn E.coli, Monod và Jacob sử dụng môi trường nào sau đây để nuôi vi khuẩn E.coli trong lô thí nghiệm?",
                options: ["A. Môi trường không có lactose và có các amino acid đánh dấu phóng xạ.", "B. Môi trường có lactose và không có các amino acid đánh dấu phóng xạ.", "C. Môi trường có lactose và có các amino acid đánh dấu phóng xạ.", "D. Môi trường không có lactose và không có các amino acid đánh dấu phóng xạ."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L1-009. Theo Monod và Jacob, các thành phần cấu tạo của operon lac gồm:",
                options: ["A. vùng cấu trúc promoter, operator và ba gene điều hòa.", "B. gene điều hòa, ba gene cấu trúc và operator.", "C. gene điều hòa, ba gene cấu trúc và promoter.", "D. promoter, operator và ba gene cấu trúc."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L1-010. GMO (genetic modified organism) là thuật ngữ nói về",
                options: ["A. Vi sinh vật biến đổi gene.", "B. Thực vật biến đổi gene.", "C. Động vật biến đổi gene.", "D. Sinh vật biến đổi gene."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L1-011. Để nối đoạn DNA của tế bào cho vào DNA plasmid, người ta sử dụng enzyme gì?",
                options: ["A. DNA - polymerase.", "B. Ligase.", "C. Restrictase.", "D. Amylase."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-012. Enzyme nào được sử dụng để cắt đoạn DNA của tế bào cho ở những vị trí nucleotide xác định?",
                options: ["A. polymerase.", "B. ligase.", "C. restrictase.", "D. amylase."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L1-013. Trong kĩ thuật chuyển gene, các bước được tiến hành theo trình tự là",
                options: ["A. tạo DNA tái tổ hợp → đưa DNA tái tổ hợp vào trong tế bào nhận → phân lập dòng tế bào chứa DNA tái tổ hợp.", "B. tách gene và thể truyền → cắt và nối DNA tái tổ hợp → đưa DNA tái tổ hợp vào tế bào nhận.", "C. tạo DNA tái tổ hợp → phân lập dòng DNA tái tổ hợp → đưa DNA tái tổ hợp vào tế bào nhận.", "D. phân lập dòng tế bào chứa DNA tái tổ hợp → tạo DNA tái tổ hợp → chuyển DNA tái tổ hợp vào tế bào nhận."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L1-014. Thể truyền thực chất là",
                options: ["A. Một phân tử nucleic acid nhỏ, có khả năng nhân đôi một cách độc lập với hệ gene của tế bào cũng như gắn vào hệ gene của tế bào.", "B. Một phân tử DNA nhỏ, có khả năng nhân đôi một cách độc lập với hệ gene của tế bào cũng như gắn vào hệ gene của tế bào.", "C. Một phân tử DNA nhỏ, có khả năng nhân đôi một cách độc lập với hệ gene của tế bào cũng nhưng không gắn được vào hệ gene của tế bào.", "D. Một phân tử nucleic acid nhỏ, có khả năng nhân đôi một cách độc lập với hệ gene của tế bào nhưng không gắn được vào hệ gene của tế bào."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-015. Đối tượng vi sinh vật thường được sử dụng làm tế bào nhận để tạo ra các sản phẩm sinh học trong công nghệ gene là",
                options: ["A. virus.", "B. vi khuẩn.", "C. thể thực khuẩn.", "D. nấm mốc."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L1-016. Việc chữa trị các bệnh di truyền bằng cách phục hồi các chức năng của gene đột biến gọi là",
                options: ["A. liệu pháp gene.", "B. sửa chữa sai hỏng di truyền.", "C. phục hồi gene.", "D. gây hồi biến."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L1-017. Vi khuẩn E.coli sản xuất insulin của người là thành quả của:",
                options: ["A. lai hai tế bào soma.", "B. Dùng kĩ thuật vi tiêm.", "C. Gây đột biến nhân tạo.", "D. Dùng kĩ thuật chuyển gene nhờ plasmid."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L1-018. Trong công nghệ tạo giống thì gene đánh dấu có vai trò gì?",
                options: ["A. Phân biệt các loại tế bào khác nhau.", "B. Giúp nhận biết tế bào đang phân chia.", "C. Gây biến đổi một gene khác.", "D. Giúp nhận biết tế bào có DNA tái tổ hợp."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L1-019. Chuỗi polypeptide được tổng hợp ở tế bào nhân thực được mở đầu bằng amino acid",
                options: ["A. formyl methionine.", "B. proline.", "C.tryptophan.", "D.methionine."],
                answer: 3
            },

            // Thêm các câu hỏi MC level 1 khác...
        ],
        level2: [
            {
                question: "MB-CCDTPT-L2-001. Khi nói về các enzyme tham gia quá trình tái bản DNA, nhận định nào sau đây là đúng?",
                image: "https://nhantri.top/media/Grade12/IntronExon.png",
                options: ["A. Thứ tự tham gia của các enzyme là Tháo xoắn → DNA- polymerase → RNA - polymerase → Ligase.", "B. Cả DNA - polymerase và RNA - polymerase đều chỉ di chuyển trên mạch khuôn theo chiều 3’-5’.", "C. RNA - polymerase có chức năng tháo xoắn và tổng hợp đoạn mồi.", "D. DNA - polymerase có thể tổng hợp nucleotide đầu tiên của chuỗi polinucleotide."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L2-002. Quá trình tái bản DNA luôn cần có đoạn RNA mồi vì:",
                options: ["A. enzyme DNA- polymerase chỉ gắn nucleotide vào đầu có 3’OH tự do.", "B. enzyme DNA - polymerase hoạt động theo nguyên tắc bổ sung.", "C. đoạn mồi làm nhiệm vụ sửa chữa sai sót trong quá trình tái bản DNA.", "D. tất cả enzyme xúc tác cho tái bản DNA đều cần có đoạn mồi mới hoạt động được."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L2-003. Khi nói về quá trình tái bản DNA, kết luận nào sau đây không đúng?",
                options: ["A. Trên mỗi phân tử DNA của sinh vật nhân sơ chỉ có một điểm khởi đầu tái bản DNA.", "B. Tính theo chiều tháo xoắn, ở mạch khuôn có nhiều 5’–3’ mạch mới được tổng hợp gián đoạn.", "C. Enzyme DNA- polymerase làm nhiệm vụ tháo xoắn phân tử DNA trong nhân tế bào.", "D. Sự tái bản của DNA ti thể độc lập so với sự tái bản của DNA trong nhân tế bào."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L2-004.  Người ta chuyển một số phân tử DNA của vi khuẩn E.coli chỉ chứa <sup>15</sup>N sang môi trường chứa <sup>14</sup>N. Tất cả các DNA nói trên đều thực hiện nhân đôi 3 lần sau đó được chuyển về môi trường chứa <sup>15</sup>N để nhân đôi thêm 2 lần nữa. Ở lần nhân đôi cuối cùng người ta thu được 70 phân tử DNA chứa 1 mạch <sup>14</sup>N và 1 mạch <sup>15</sup>N. Số phân tử DNA ban đầu là",
                options: ["A. 9.", "B. 3.", "C. 7.", "D. 5."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L2-005.  Triplet 3’CAT5’ mã hóa amino acid valine, tRNA vận chuyển amino acid này có anticodon là",
                options: ["A. 5’GUA3’.", "B. 3’CAU5’.", "C. 5’CAU3’.", "D. 3’GUA5’."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L2-006. Đặc điểm chung của quá tình tái bản DNA và quá trình phiên mã ở sinh vật nhân thực là",
                options: ["A. đều diễn ra trên toàn bộ phân tử DNA của nhiễm sắc thể.", "B. đều được thực hiện theo nguyên tắc bổ sung.", "C. đều có sự tham gia của DNA polymerase.", "D. đều diễn ra trên cả hai mạch của gene."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L2-007. Trong cơ chế điều hòa hoạt động của operon lac ở vi khuẩn E.coli, protein nào sau đây được tổng hợp ngay cả khi môi trường không có lactose?",
                options: ["A. Protein ức chế.", "B. Protein lacA.", "C. Protein lacY.", "D. Protein lacZ."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L2-008. Theo mô hình của Jacob và Monod, thành phần nào sau đây không nằm trong cấu trúc của operon lac ở vi khuẩn E.coli?",
                options: ["A. Gene cấu trúc lacY.", "B. Gene cấu trúc lacZ.", "C. Gene điều hòa lacI.", "D. Gene cấu trúc lacA."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L2-009. Enzyme RNA polymerase bám vào vị trí nào trên operon Lac để phiên mã nhóm gene cấu trúc lacZ, lacY, lacA?",
                options: ["A. Vùng promoter(P).", "B. Vùng operator(O).", "C. Nhóm gene cấu trúc.", "D. Gene điều hòa."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L2-010. Trong cơ chế điều hòa hoạt động của operon lac ở vi khuẩn E.coli, đột biến xảy ra tại vị trí nào sau đây của operon thì quá trình phiên mã của các gene lacZ, lacY, lacA có thể không diễn ra ngay cả khi môi trường có lactose?",
                options: ["A. Gene cấu trúc lacZ.", "B. Trình tự P (promoter).", "C. Gene cấu trúc lacY.", "D. Gene cấu trúc lacA."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L2-011. Tế bào vi khuẩn E.coli phải dùng tới 90% số ATP mà tế bào tạo ra để tổng hợp protein. Nhờ có sự điều hòa biểu hiện gene, tế bào chỉ tổng hợp sản phẩm của gene khi cần thiết, với lượng phù hợp với nhu cầu. Ý nghĩa của điều hòa biểu hiện gene trong trường hợp trên là",
                options: ["A. Đảm bảo tế bào vi khuẩn thích nghi được với sự thay đổi của môi trường.", "B. Tiết kiệm năng lượng cho quá trình tổng hợp và chuyển hóa các chất.", "C. Đảm bảo tính chính xác trong quá trình phát triển của tế bào vi khuẩn E.coli.", "D. Kiểm soát, sửa chữa những đột biến xảy ra trong tế bào vi khuẩn E.coli."],
                answer: 1
            },
            {
                question: "MB-CCDTPT-L2-012. Trong cơ chế điều hoà hoạt động các gene của operon lac, sự kiện nào sau đây chỉ diễn ra khi môi trường không có lactose?",
                options: ["A. Một phân tử lactose liên kết với protein ức chế làm biến đổi cấu hình không gian ba chiều của nó.", "B. RNA polymerase liên kết với trình tự P(promoter) để tiến hành phiên mã.", "C. Protein ức chế liên kết với trình tự O(operator) ngăn cản quá trình phiên mã của các gene cấu trúc.", "D. Các phân tử mRNA của các gene cấu trúc Z, Y, A được dịch mã tạo ra các enzyme phân giải đường lactose."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L2-013. Điều nào dưới đây không đúng với mô tả về sinh vật biến đổi gene?",
                options: ["A. Giống lúa “gạo vàng” có khả năng tổng hợp caroten trong hạt.", "B. Vi khuẩn E.Coli mang gene mã hóa insulin ở người.", "C. Chuột nhắt mang gene hormone sinh trưởng của chuột cống nên có khối lượng gần gấp đôi so với con chuột bình thường cùng lứa.", "D. Lúa đại mạch có hoạt tính enzyme amylase tăng gấp 300 lần so với bình thường."],
                answer: 3
            },
            {
                "question": "MB-CCDTPT-L2-014. Hình dưới đây mô tả quá trình nào trong tế bào?",
                "options": [
                    "A. Tái bản DNA.",
                    "B. Phiên mã.",
                    "C. Dịch mã.",
                    "D. Điều hòa biểu hiện của gene."
                ],
                "answer": 1,
                "image": "https://nhantri.top/media/Grade12/Qtpm.png"
            },
            {
                "question": "MB-CCDTPT-L2-015. Hình dưới đây mô tả quá trình nào trong tế bào?",
                "options": [
                    "A. Tái bản DNA.",
                    "B. Phiên mã.",
                    "C. Dịch mã.",
                    "D. Điều hòa biểu hiện của gene."
                ],
                "answer": 2,
                "image": "https://nhantri.top/media/Grade12/Qtdm.png"
            },
            {
                "question": "MB-CCDTPT-L2-016. Hình dưới đây mô tả quá trình nào trong tế bào?",
                "options": [
                    "A. Tái bản DNA.",
                    "B. Phiên mã.",
                    "C. Dịch mã.",
                    "D. Điều hòa biểu hiện của gene."
                ],
                "answer": 0,
                "image": "https://nhantri.top/media/Grade12/5106.png"
            },
            {
                "question": "MB-CCDTPT-L2-017. Một amino acid có triplet tương ứng là 3’AGT5’. Theo lí thuyết, triplet mã hóa codon nào sau đây?",
                "options": [
                    "A. 5’AGU3’.",
                    "B. 5’UXA3’.",
                    "C. 3’UXX5’.",
                    "D. 3’XXU5’."
                ],
                "answer": 1

            },
            {
                "question": "MB-CCDTPT-L2-018. Thông tin di truyền trong DNA được biểu hiện thành tính trạng trong đời sống cá thể nhờ quá trình:",
                "options": [
                    "A. phiên mã và dịch mã.",
                    "B. nhân đôi DNA và dịch mã.",
                    "C. nhân đôi DNA, phiên mã và dịch mã.",
                    "D. nhân đôi DNA và phiên mã."
                ],
                "answer": 0

            },
            {
                "question": "MB-CCDTPT-L2-019. Hình vẽ thể hiện một cơ chế di truyền ở cấp phân tử. Tên gọi cơ chế di truyền và chú thích X lần lượt là",
                "options": [
                    "A. phiên mã và các nucleotide.",
                    "B. tái bản DNA và các nucleotide.",
                    "C. dịch mã và liên kết peptide.",
                    "D. dịch mã và các amino acid."
                ],
                "answer": 3,
                "image": "https://nhantri.top/media/Grade12/dichmaaa.png"
            },
            // Thêm các câu hỏi MC level 2 khác...
        ],
        level3: [
            {
                question: "MB-CCDTPT-L3-001. Thuốc Tamoxifen ức chế đặc hiệu thụ thể estrogen alpha để chữa ung thư vú do gene biểu hiện quá mức là ứng dụng của điều hòa biểu hiện gene trong lĩnh vực",
                options: ["A. nghiên cứu di truyền.", "B. trồng trọt.", "C. chăn nuôi.", "D. y dược."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L3-002. Trong quá trình nhân đôi DNA ở sinh vật nhân sơ, thứ tự tác động của các enzyme là",
                options: ["A. DNA polymerase → gyrase → ligase → RNA polymerase.", "B. Gyrase → DN polymerase → RNA polymerase → ligase.", "C. Gyrase → RNA polymerase → DNA polymerase → ligase.", "D. RNA polymerase → gyrase → ligase → DNA polymerase."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L3-003. Vì sao trên mạch khuôn 5’-3’, mạch mới lại được tổng hợp ngắt quãng?",
                image: "https://nhantri.top/media/Grade12/TbDNA.png",
                options: ["A. Vì trên gene có các đoạn Okazaki", "B.Vì gene không liên tục có các đoạn Exon và đoạn Intron xen kẽ nhau.", "C.Vì enzyme DNA polymerase chỉ tổng hợp mạch mới theo chiều 5’-3’.", "D. Vì enzyme DNA polymerase chỉ tổng hợp mạch mới theo chiều 3’-5’."],
                answer: 2
            },
            {
                question: "MB-CCDTPT-L3-004. Cho một đoạn DNA ở khoảng giữa có một đơn vị sao chép như hình vẽ. O là điểm khởi đầu sao chép, I, II, III, IV chỉ các đoạn mạch đơn của DNA.Đoạn nào có mạch đơn mới được tổng hợp gián đoạn?",
                image: "https://nhantri.top/media/Grade12/DNApolymerase.png",
                options: ["A. I và III. ", "B. I và II. ", "C. II và III.", "D. I và IV"],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L3-005. Giả sử trong môi trường chứa vi khuẩn E. coli được bổ sung Thymine đánh dấu phóng xạ và các loại nucleotide còn lại thì không đánh dấu phóng xạ. Điều gì sẽ xảy ra khi DNA của tế bào nhân đôi một lần?",
                options: ["A. Một DNA con chứa phóng xạ, nhưng DNA con kia không có phóng xạ.", "B. Cả hai DNA con đều không có phóng xạ.", "C. Tất cả bốn loại nucleotide đều chứa phóng xạ.", "D. Cả hai DNA con sẽ chứa phóng xạ."],
                answer: 3
            },
            {
                question: "MB-CCDTPT-L3-006. Người ta đã tiến hành cài gene A vào plasmid nhằm mục đích tạo giống cây trồng chuyển gene có khả năng tổng hợp một loại carotenoid. Cấu trúc thu được ở giai đoạn cuối cùng trong quy trình được mô tả ở hình dưới đây là",
                options: ["A. DNA tái tổ hợp.", "B. Protein tái tổ hợp.", "C. Gene chuyển.", "D. RNA tái tổ hợp."],
                answer: 0
            },
            {
                question: "MB-CCDTPT-L3-007. Trong điều trị bệnh rối loạn suy giảm miễn dịch (ACID) ở người do đột biến gene, không tổng hợp enzyme adenosine deaminase (ADA), một nhóm nhà khoa học sử dụng vector chuyển gene ADA bình thường vào tế bào gốc tủy của bệnh nhân SCID. Liệu pháp gene đã được sử dụng trong trường hợp này là gì?",
                options: ["A. Đưa gene bình thường vào cơ thể người bệnh để phá hủy gene đột biến.", "B. Đưa gene bình thường vào cơ thể người bệnh để ức chết biểu hiện của gene đột biến.", "C. Đưa gene bình thường vào cơ thể người bệnh để chỉnh sửa gene đột biến.", "D. Đưa gene bình thường vào cơ thể người bệnh để tạo enzyme hoạt động."],
                answer: 3
            },
            // Thêm các câu hỏi MC level 3 khác...
        ]
    },
    // Quy luật di truyền Mendel
    mcc2: {
        level1: [
            {
                question: "MB-DTMĐ-L1-001. Cấu trúc siêu hiển vi của NST ở kì trung gian là một chuỗi hình thành do:",

                options: ["A. Các đoạn phân tử RNA liên kết với các protein histone tạo nên.", "B. Các đoạn phân tử DNA liên kết với các protein histone tạo nên.", "C. Các đoạn phân tử DNA liên kết với các protein khác nhau tạo nên.", "D. Các đoạn phân tử RNA liên kết với các protein khác nhau tạo nên."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L1-002. Vùng dị nhiễm sắc trên NST là vùng có:",

                options: ["A. Chuỗi nucleosome nằm sát nhau.", "B. Chuỗi nucleosome với các vùng có nucleosome nằm xa nhau.", "    C. Chuỗi nucleosome nằm cách xa nhau.", "D. Chuỗi nucleosome với các vùng có nucleosome nằm sát nhau."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-003. Vùng có các nucleosome nằm cách xa nhau gọi là",

                options: ["A. Nguyên nhiễm sắc.", "B. Đơn nhiễm sắc.", "C. Dị nhiễm sắc.", "D. Đồng nhiễm sắc."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-004. Vùng dị nhiễm sắc:",

                options: ["A. hoặc chứa gene hoặc chứa gene dị bất hoạt.", "B. hoặc chứa gene hoặc không chứa gene dị bất hoạt.", "C. hoặc không chứa gene hoặc chứa gene dị bất hoạt.", "D. hoặc chứa gene và không chứa gene dị bất hoạt."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L1-005. Vùng nguyên nhiễm thường chứa:",

                options: ["A. Các gene không hoạt động.", "B. Các gene đang hoạt động.", "C. Các gene chưa hoạt động.", "D. NST không hoạt động."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L1-006. Ở kì giữa của nguyên phân, NST ở trạng thái kép co xoắn tạo nên độ lớn cực đại:",
                options: ["A. Chiều ngang có thể đạt 1800 nm.", "B. Chiều dọc có thể đạt 1400 nm.", "C. Chiều dọc có thể đạt 1800 nm.", "D. Chiều ngang có thể đạt 1400 nm."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-007. Phân tử DNA là vật chất di truyền:",
                options: ["A. ở cấp độ tế bào trong các tế bào sinh vật.", "B. ở cấp độ cơ quan trong các tế bào sinh vật.", "C. ở cấp độ phân tử trong các tế bào sinh vật.", "D.ở cấp độ siêu phân tử trong các tế bào sinh vật."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L1-008. Mỗi NST mang:",
                options: ["A. Nhiều phân tử DNA.", "B. Một phân tử DNA.", "C. Một phân tử RNA.", "D. Nhiều phân tử RNA."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L1-009. Vị trí của gene trên NST được gọi là",
                options: ["A. Locus.", "B. Allene.", "C. Nucleotide.", "D. DNA."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-010. Số lượng gene và sự phân bố của các gene trên NST của cùng một bộ NST là",
                options: ["A. Giống nhau.", "B. Bằng nhau.", "C. Như nhau.", "D. Khác nhau."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-011. Các NST có thể chứa nhiều gene với mật độ: ",
                options: ["A. Khác nhau.", "B. Giống nhau.", "C. Tương đương nhau.", "D. Đồng đều nhau."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-012. Trong cùng một locus trên cặp NST tương đồng có thể chứa trình tự nucleotide khác nhau được gọi là các:",
                options: ["RNA.", "B. Allele.", "C. Nucleotide.", "D. DNA."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L1-013. Trong nguyên phân NST được nhân đôi và phân chia đồng đều về:",
                options: ["A. Bốn tế bào con.", "B. Tám tế bào con.", "C. Hai tế bào con.", "D. Một tế bào con."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L1-014. Trước khi lai, Mendel đã tiến hành tạo ra các dòng:",
                options: ["A. Thuần chủng về từng đặc tính của mỗi cặp tính trạng.", "B. Thuần chủng về nhiều đặc tính của mỗi cặp tính trạng.", "C. Thuần chủng về từng đặc tính của nhiều cặp tính trạng.", "D. Thuần chủng về từng đặc tính của mỗi tính trạng."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-015. Các thí nghiệm lai của Mendel đều được tiến hành",
                options: ["A. các phép lai thuận.", "B. các phép lai nghịch.", "C. các phép lai thuận và lai nghịch.", "D. lặp đi lặp lại cùng một phép lai."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L1-016. Mỗi tính trạng phải do:",
                options: ["A. hai cặp nhân tố di truyền (gene) quy định.", "B. nhiều cặp nhân tố di truyền (gene) quy định.", "C. một cặp nhân tố biến dị quy định.", "D. một cặp nhân tố di truyền (gene) quy định."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-017. Di truyền học hiện đại đã khẳng định, nhân tố di truyền mà Mendel đề xuất chính là",
                options: ["A. Allele.", "B. Cặp gene.", "C. Cặp tính trạng.", "D. Cặp allele."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-018. Sự tổ hợp ngẫu nhiên của các giao tử tạo nên.",
                options: ["A. các tổ hợp gene khác nhau.", "B. các tổ hợp gene giống nhau.", "C. một tổ hợp gene.", "D. các gene khác nhau."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-019. Ở đậu Hà Lan, allele quy định kiểu hình hạt trơn và allele quy định kiểu hình nào sau đây được gọi là 1 cặp allele ?",
                options: ["A. Thân cao.", "B. Quả vàng.", "C. Hoa trắng.", "D. Hạt nhăn."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-020. Nhà khoa học nào đưa ra giả thuyết các nhân tố di truyền của bố và mẹ tồn tại trong tế bào của cơ thể con một cách riêng rẽ, không hòa trộn vào nhau ?",
                options: ["A. F.Jacop.", "B. K.Coren.", "C. G.J.Mendel.", "D. T.Morgan."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L1-021. Phép lai nào sau đây thường được sử dụng để xác định kiểu gene của cơ thể có kiểu hình trội?",
                options: ["A. lai khác dòng.", "B. lai thuận nghịch.", "C. lai tế bào.", "D. lai phân tích."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L1-022. Phép lai nào sau đây cho đời con có số loại kiểu gene gấp đôi số loại kiểu hình?",
                options: ["A. Aa × AA.",
                    "B. Aa × aa.",
                    "C. aa × aa.",
                    "D. Aa × Aa."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L1-023. Kiểu gene AA và kiểu gene Aa cùng quy định 1 kiểu hình, kiểu gene aa quy định kiểu hình khác. Hiện tượng này được gọi là",
                options: ["A. tương tác bổ sung.",
                    "B. tương tác cộng gộp.",
                    "C. Trội hoàn toàn.",
                    "D. Trội không hoàn toàn."],
                answer: 2
            },
            // Thêm các câu hỏi Di truyền Mendel level 1 khác...
        ],
        level2: [
            {
                question: "MB-DTMĐ-L2-001. Mỗi cây F1 trong thí nghiệm của Mendel sẽ tạo ra:",

                options: ["A. Một loại giao tử nhất định.", "B. Hai loại giao tử với tỉ lệ bằng nhau.", "C. Hai loại giao tử với tỉ lệ khác nhau.", "D. Nhiều loại giao tử với tỉ lệ khác nhau."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L2-002. Sự kết hợp ngẫu nhiên của các giao tử trong quá trình thụ tinh dẫn đến:",

                options: ["A. sự phân li tính trạng ở đời con.", "B. sự phân tính tính trạng ở đời con.", "C. sự phân li gene ở đời con.", "D. sự kết hợp tính trạng ở đời con."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L2-003. Mendel giải thích kết quả thí nghiệm bằng cách sử dụng",

                options: ["A. Quy luật tuyến tính.", "B. Quy luật xác suất.", "C. Quy luật tổ hợp.", "D. Quy luật phân tính."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L2-004. Kết quả phân li kiểu hình trong thí nghiệm lai hai cặp tính trạng của Mendel là",

                options: ["A. 9: 3: 3: 1.", "B. 9: 3: 2: 2.", "C. 8: 3: 3: 2.", "D. 8: 3: 2: 3."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L2-005. Trong thí nghiệm lai hai cặp tính trạng, sự kết hợp ngẫu nhiên của các giao tử trong quá trình thụ tinh tạo ra:",

                options: ["A. 15 tổ hợp nhân tố di truyền.", "B. 16 tổ hợp nhân tố di truyền.", "C. 17 tổ hợp nhân tố di truyền.", "D. 18 tổ hợp nhân tố di truyền."],
                answer: 1
            },
            {
                question: "MB-DTMĐ-L2-006. Theo Mendel các cặp nhân tố di truyền quy định các tính trạng khác nhau.",

                options: ["A. phân li cùng với nhau trong quá trình hình thành giao tử.", "B. phân li độc lập với nhau trong quá trình hình thành hợp tử.", "C. phân li độc lập với nhau trong quá trình hình thành giao tử.", "D. phân li không độc lập với nhau trong quá trình hình thành giao tử."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L2-007. Theo lí thuyết, nếu phép lai thuận là ♂ cây thân cao x ♀ cây thân thấp thì phép lai nào sau đây là lai nghịch ?",

                options: ["A. ♂ cây thân cao x ♀ cây thân cao.", "B. ♂ cây thân thấp x ♀ cây thân thấp.", "C. ♂ cây thân cao x ♀ cây thân thấp.", "D. ♂ cây thân thấp x ♀ cây thân cao."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L2-008. Lúa nước có bộ nhiễm sắc thể 2n = 24. Theo lí thuyết, số nhóm gene liên kết của loài này là",

                options: ["A. 12.", "B. 24.", "C. 8.", "D. 16."],
                answer: 0
            },
            {
                question: "MB-DTMĐ-L2-009. Cho biết allele B quy định thân cao trội hoàn toàn so với allele b quy định thân thấp. Theo lí thuyết, phép lai nào sau đây cho đời con có tỉ lệ kiểu hình 3:1?",

                options: ["A. BB x bb.", "B. Bb x bb.", "C.Bb x Bb.", "D.BB x Bb."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L2-010. Trong các kiểu gene sau đây, kiểu gene nào có ưu thế lai thấp nhất?",

                options: ["A. AaBBDD.", "B. AaBbDD.", "C. AaBbDd.", "D. aaBBDD."],
                answer: 3
            },

            // Thêm các câu hỏi MĐ level 2 khác...
        ],
        level3: [
            {
                question: "MB-DTMĐ-L3-001. Theo lí thuyết, phép lai nào sau đây tạo ra đời con có kiểu gene aa chiếm tỉ lệ 25%?",
                options: ["A. aa x aa.", "B. Aa x aa.", "C. AA x Aa.", "D. Aa x Aa."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L3-002. Một loài thực vật, allele A quy định hoa đỏ trội hoàn toàn so với allele a quy định hoa trắng. Phép lai P: Cây hoa đỏ x cây hoa đỏ thu được F1 toàn hoa đỏ. Cho các cây F1 giao phấn ngẫu nhiên thu được F2 có các cây hoa đỏ và các cây hoa trắng. Theo lí thuyết, tỉ lệ kiểu hình ở F2 là",
                options: ["A. 3: 1.", "B. 1: 2 : 1.", "C. 15: 1.", "D. 5: 3."],
                answer: 2
            },
            {
                question: "MB-DTMĐ-L3-003. Theo lí thuyết, phép lai nào sau đây cho đời con có 3 loại kiểu gene?",

                options: ["A. AA x aa.", "B. Aa x AA.", "C. Aa x aa.", "D. Aa x Aa."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L3-004. Theo lí thuyết, phép lai nào sau đây cho đời con chỉ có kiểu gene đồng hợp tử trội?",

                options: ["A. AA × Aa.", "B. Aa × Aa.", "C. Aa × aa.", "D. AA × AA."],
                answer: 3
            },
            {
                question: "MB-DTMĐ-L3-005. Theo lí thuyết, phép lai nào sau đây đời con cho 4 loại kiểu hình, trong điều kiện một gene quy định một tính trạng, trội lặn hoàn toàn?",

                options: ["A. aabb × aabb.", "B. AaBb × aabb.", "C. Aabb × aabb.", "D. AABB × AABB."],
                answer: 1
            },
            // Thêm các câu hỏi MĐ level 3 khác...
        ]
    },
    // Quy luật di truyền Morgan
    mcc3: {
        level1: [
            {
                question: "MB-DTMG-L1-001. Liên kết gene là hiện tượng:",

                options: ["A. Các gene trên một NST di truyền khác nhau.", "B. Các gene trên nhiều NST di truyền cùng nhau.", "C. Các gene trên một NST di truyền cùng nhau.", "D. Các gene trên một NST không di truyền cùng nhau."],
                answer: 2
            },
            {
                question: "MB-DTMG-L1-002. Trong tự nhiên, liên kết gene giúp cho các gene có lợi trên một NST:",

                options: ["A. không thể di truyền cùng nhau.", "B. có thể di truyền khác nhau.", "C. có thể di truyền cùng nhau.", "D. mất đi sự có lợi của chúng."],
                answer: 2
            },
            {
                question: "MB-DTMG-L1-003. Các gene di truyền cùng nhau:",

                options: ["A. Đảm bảo duy trì sự ổn định của loài.", "B. Không giúp cho sự ổn định loài.", "C. Có thể dẫn đến sự mất ổn định loài.", "D. Làm tăng sự biến động của loài."],
                answer: 0
            },
            {
                question: "MB-DTMG-L1-004.  Bản đồ di truyền có ý nghĩa:",

                options: ["A. Giúp dự đoán tần số các tổ hợp gene mới trong các phép lai.", "B. Giúp dự đoán tần số các gene mới trong các phép lai.", "C. Giúp dự đoán các tổ hợp gene mới trong các phép lai.", "D. Giúp dự đoán tần số các tổ hợp gene cũ trong các phép lai."],
                answer: 0
            },
            {
                question: "MB-DTMG-L1-005. Bản đồ di truyền vật lí thể hiện:",

                options: ["A. Khoảng cách vật lí giữa các NST.", "B. Khoảng cách hóa học giữa các gene trên NST.", "C. Khoảng cách vật lí giữa các gene trên NST.", "D. Liên kết giữa các gene trên NST."],
                answer: 2
            },
            {
                question: "MB-DTMG-L1-006. Đối tượng trong nghiên cứu di truyền của Morgan là",

                options: ["A. Đậu Hà Lan.", "B. Ruồi giấm.", "C. Thỏ.", "D. Chuột bạch."],
                answer: 1
            },
            {
                question: "MB-DTMG-L1-008. Thế nào là nhóm gen liên kết?",

                options: ["A. Các gen allele cùng nằm trên một NST phân li cùng nhau trong quá trình phân bào.", "B. Các gene không allele cùng nằm trên một NST phân li cùng nhau trong quá trình phân bào.", "C. Các gene không allele nằm trong bộ NST phân li cùng nhau trong quá trình phân bào.", "D. Các gene allele nằm trong bộ NST phân li cùng nhau trong quá trình phân bào."],
                answer: 1
            },
            {
                question: "MB-DTMG-L1-009. Trên một NST thường, khoảng cách giữa hai gene A và B là 20cM. Theo lí thuyết, tần số hoán vị giữa hai gene này là",

                options: ["A. 10%.", "B. 40%.", "C. 30%.", "D. 20%."],
                answer: 3
            },
            {
                question: "MB-DTMG-L1-010. Ở ruồi giấm, allele A quy định mắt đỏ trội hoàn toàn với allele a quy định mắt trắng, gene trên vùng tương đồng của NST giới tính X, con cái mắt trắng có kiểu gene là",

                options: ["A. X<sup>A</sup>Y.", "B. X<sup>a</sup>Y", "C. X<sup>a</sup>X<sup>a</sup>.", "D.X<sup>A</sup>X<sup>a</sup>."],
                answer: 2
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                question: "MB-DTMG-L2-001. Kết quả phép lai trong thí nghiệm với ruồi giấm của Morgan cho phân li kiểu hình:",

                options: ["A. 1: 1: 1: 1.", "B. Khác 1: 1: 1: 1.", "C. Theo tỉ lệ bằng nhau.", "D. Không phân li."],
                answer: 1
            },
            {
                question: "MB-DTMG-L2-002. Morgan cho rằng, trong di truyền:",

                options: ["A. sự độc lập giữa các gene trong một NST.", "B. Các gene trên một NST không có sự liên kết với nhau.", "C. Có sự liên kết giữa các gene nằm trên các NST khác nhau.", "D. Có sự liên kết giữa các gene nằm trên cùng một NST."],
                answer: 3
            },
            {
                question: "MB-DTMG-L2-003. Theo Morgan, các gene trên NST:",

                options: ["A. Phân bố dọc theo chiều dài của NST.", "B. Phân bố ngang theo chiều dài của NST.", "C. Không phân bố dọc theo chiều dài của NST.", "D. Phân bố ngẫu nhiên theo đa chiều của NST."],
                answer: 0
            },
            {
                question: "MB-DTMG-L2-004. Một loài thực vật có 12 nhóm gene liên kết. Theo lí thuyết, bộ NST lưỡng bội của loài này là",

                options: ["A. 2n = 12.", "B. 2n = 24.", "C. 2n = 36.", "D. 2n = 6."],
                answer: 1
            },
            {
                question: "MB-DTMG-L2-005. Với hai cặp gene không allele cùng nằm trên một cặp nhiễm sắc thể tương đồng thì cách viết kiểu gene nào dưới đây là không đúng?",
                image: "https://nhantri.top/media/Grade12/KieugenBT.png",
                options: ["", "", "", ""],
                answer: 2
            },
            {
                question: "MB-DTMG-L2-006. Cơ sở tế bào học của trao đổi đoạn nhiễm sắc thể là",

                options: ["A. Sự tiếp hợp các NST tương đồng ở kì trước của giảm phân I.",
                    "B. Sự trao đổi đoạn giữa 2 chromatid cùng nguồn gốc ở kì trước của giảm phân II.",
                    "C. Sự trao đổi đoạn giữa các chromatid khác nguồn gốc ở kì trước giảm phân I.",
                    "D. Sự phân li và tổ hợp tự do của NST trong giảm phân."],
                answer: 2
            },
            {
                question: "MB-DTMG-L2-007. Vì sao các gene liên kết được với nhau:",

                options: ["A. Vì chúng nằm trên cùng một chiếc NST.", "B.Vì các tính trạng do chúng quy định cùng biểu hiện.", "C.Vì chúng cùng ở cặp NST tương đồng.", "D.Vì chúng có locus giống nhau."],
                answer: 0
            },
            {
                question: "MB-DTMG-L2-008. Khi cho lai 2 cơ thể bố mẹ thuần chủng khác nhau bởi hai cặp tính trạng tương phản, F đồng tính biểu hiện tính trạng của một bên bố hoặc mẹ, tiếp tục cho F lai phân tích, nếu đời lai thu được tỉ lệ 1: 1 thì hai tính trạng đó đã di truyền:",

                options: ["A. tương tác gene.", "B. liên kết hoàn toàn.", "C. hoán vị gene.", "D. phân li độc lập."],
                answer: 1
            },
            {
                "question": "MB-DTMG-L2-009. Ở cơ thể lưỡng bội, gene nằm ở vị trí nào sau đây thì sẽ tồn tại thành cặp allele?",
                "options": [
                    "A. Trên nhiễm sắc thể thường.",
                    "B. Trong lục lạp.",
                    "C. Trên nhiễm sắc thể giới tính Y.",
                    "D. Trong ti thể."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DTMG-L2-010. Phát biểu nào sau đây về hiện tượng liên kết gene (liên kết gene họàn toàn) là sai?\n",
                "options": [
                    "A. Hiện tượng này không xảy ra trên NST giới tính.",
                    "B. Số nhóm gene liên kết của một loài thường bằng số lượng NST trong bộ NST đơn bội của loài.",
                    "C. Các gene trên cùng một NST di truyền cùng nhau tạo thành một nhóm gene liên kết.",
                    "D. Liên kết gene hạn chế sự xuất hiện biến dị tổ hợp."
                ],
                "answer": 0,
                "image": null
            },

            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                question: "MB-DTMG-L3-001. Khi cho đậu hoa vàng, cánh thẳng lai với đậu hoa tím, cánh cuốn thu được F1 100% đậu hoa tím, cánh thẳng. Cho F1 giao phấn với nhau thu được F2 gồm 105 đậu hoa vàng, cánh thẳng, 210 đậu hoa tím, cánh thẳng, 100 đậu hoa tím, cánh cuốn. Biết rằng mỗi gene quy định một tính trạng. Nhận xét nào sau đây là đúng?",
                options: ["A. F2 thu được tỉ lệ kiểu hình khác tỉ lệ kiểu gene.", "B.Các cặp tính trạng di truyền phân li độc lập.", "C.F2 thu được tỉ lệ kiểu hình giống tỉ lệ kiểu gene.", "D.Kiểu gene của F1 là dị hợp tử đều."],
                answer: 2
            },
            {
                "question": "MB-DTMG-L3-002. Kiểu gene Aa BB DE/de khi giảm phân cho được bao nhiêu loại giao tử nếu gene liên kết hoàn toàn?",
                "options": [
                    "A. 2.",
                    "B. 4.",
                    "C. 8.",
                    "D. 16."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-003. Cho 3 tế bào sinh tinh có kiểu gene AB/ab thực hiện giảm phân, biết quá trình giảm phân hoàn toàn bình thường, không có đột biến xảy ra, gene liên kết hoàn toàn. Số loại giao tử có thể tạo ra là?",
                "options": [
                    "A. 2.",
                    "B. 4.",
                    "C. 6.",
                    "D. 12."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-004. Một cá thể có kiểu gene Dd Ab/aB tạo ra giao tử d<u>Ab</u> với tỉ lệ:",

                "options": [
                    "A. 0%.",
                    "B. 5%.",
                    "C. 10%.",
                    "D. 25%."
                ],
                "answer": 3,
                "image": null

            },
            {
                "question": "MB-DTMG-L3-005. Một loài sinh vật có 3 gene I, II và III có số allele lần lượt là 2; 3 và 4. Tính số kiểu gene tối đa có thể có của loài trong trường hợp 3 gene trên nằm trên 1 cặp NST thường. ",
                "options": [
                    "A. 2024.",
                    "B. 24.",
                    "C. 2048.",
                    "D. 300."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-006. Một loài sinh vật có 3 gene I, II và III có số allele lần lượt là 2; 3 và 4. Tính số kiểu gene tối đa có thể có của loài trong trường hợp: Gene I và II cùng nằm trên một cặp NST thường, gene III nằm trên cặp NST thường khác.",
                "options": [
                    "A. 31.",
                    "B. 63.",
                    "C. 210.",
                    "D. 2048."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-007. Cho phép lai P: AB/ab x ♂ aB/ab. Biết các gene liên kết hoàn toàn. Tính theo lí thuyết, số kiểu gene ở F1 sẽ là",
                "options": [
                    "A. 1.",
                    "B. 2.",
                    "C. 4.",
                    "D. 8."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-008. Ở một loài thực vật, gene quy định màu sắc hoa có hai allele A và a, gene quy định hình dạng quả có hai allele B và b. Biết hai cặp gene cùng nằm trên một cặp NST thường và di truyền liên kết hoàn toàn. Cho cây dị hợp hai cặp gene tự thụ phấn thì số kiểu hình tối đa ở đời con là?",
                "options": [
                    "A. 4.",
                    "B. 9.",
                    "C. 2.",
                    "D. 3."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-009. Ở một loài thực vật, gene A quy định thân cao, gene a quy định thân thấp; gene B quy định quả tròn, gene b quy định quả dài; các cặp gene này cùng nằm trên 1 cặp nhiễm sắc thể thường. Cho phép lai P: Ab/aB x Ab/ab. Biết các gene liên kết hoàn toàn. Tính theo lí thuyết, tỉ lệ phân li kiểu hình thân cao, quả tròn ở F1 sẽ là ",
                "options": [
                    "A. 100%.",
                    "B. 75%.",
                    "C. 50%.",
                    "D. 25%."
                ],
                "answer": 3,

            },
            {
                "question": "MB-DTMG-L3-010. Một loài thực vật lưỡng bội, allele A quy định thân cao trội hoàn toàn so với allele a quy định thân thấp; allele B quy định hoa đỏ trội hoàn toàn so với allele b quy định hoa trắng; 2 cặp gene này trên cùng 1 cặp NST và không xảy ra hoán vị gene. Thế hệ P: Cây thân cao, hoa trắng thuần chủng thụ phấn cho các cây cùng loài, tạo ra F1. F1 của mỗi phép lai đều có tỉ lệ 1 cây thân cao, hoa đỏ : 1 cây thân cao, hoa trắng. Theo lí thuyết, dựa vào kiểu gene của P, ở thế hệ P có tối đa bao nhiêu phép lai phù hợp?",
                "options": [
                    "A. 3.",
                    "B. 4.",
                    "C. 5.",
                    "D. 6."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DTMG-L3-011. Bản đồ di truyền là sơ đồ thể hiện vị trí của gene (locus) trên nhiễm sắc thể; được xây dựng dựa vào tần số trao đổi chéo (hoán vị gene) giữa hai gene. T. H. Morgan và cộng sự đã lập bản đồ của 2 gene màu sắc thân (B, b) và chiều dài cánh (V, v) ở ruồi giấm như hình dưới đây. Theo lí thuyết, phép lai P: ♀ AB/ab x ♂ ab/ab tạo ra F1 có biến dị tổ hợp chiếm tỉ lệ bao nhiêu?",
                "options": [
                    "A. 17%.",
                    "B. 8,5%.",
                    "C. 41,5%.",
                    "D. 34%."
                ],
                "answer": 0,
                "image": "https://nhantri.top/media/Grade12/hoanvigenebdth.png"
            },
            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    // Quy luật di truyền Bổ sung Mendel
    mcBSMD: {
        level1: [
            {
                question: "MB-DTBSMĐ-L1-001. Ở một số loài động vật có vú, cho phép lai (P) ♂ X<sup>b</sup>Y × ♀ X<sup>B</sup>X<sup>b</sup>. Trong quá trình giảm phân ở con cái, ở một số tế bào, cặp NST giới tính phân li bình thường ở giảm phân I nhưng không phân li ở giảm phân II. Quá trình giảm phân ở con đực diễn ra bình thường. Các giao tử đực và cái kết hợp với nhau tạo thành các hợp tử. Những hợp tử có kiểu gene nào sau đây có thể được hình thành từ quá trình trên?",

                options: ["A. X<sup>B</sup>X<sup>b</sup>, X<sup>b</sup>X<sup>b</sup>, X<sup>B</sup>YY, X<sup>b</sup>YY.",
                    "B. X<sup>B</sup> X<sup>B</sup> X<sup>b</sup>, X<sup>B</sup>X<sup>B</sup>Y, X<sup>b</sup>Y.",
                    "C. X<sup>B</sup>X<sup>b</sup>X<sup>b</sup>, X<sup>b</sup>X<sup>b</sup>, X<sup>B</sup>X<sup>b</sup>Y, X<sup>b</sup>Y.",
                    "D. X<sup>B</sup>X<sup>B</sup>X<sup>B</sup>, X<sup>B</sup>X<sup>b</sup>X<sup>b</sup>, X<sup>B</sup>Y, X<sup>b</sup>Y"],
                answer: 1
            },
            {
                question: "MB-DTBSMĐ-L1-002. Đặc điểm của các gene ngoài nhân ở sinh vật nhân thực là",

                options: ["A. không phân chia đều cho các tế bào con.",
                    "B. không bị đột biến dưới tác động của các tác nhân gây đột biến.",
                    "C. luôn tồn tại thành từng cặp allele.",
                    "D. chỉ mã hóa cho các prôtêin tham gia cấu trúc nhiễm sắc thể."],
                answer: 0
            },
            {
                question: "MB-DTBSMĐ-L1-003. Ở người, tính trạng nhóm máu A,B,O do một gene có 3 allele I<sup>A</sup>, I<sup>B</sup>, I<sup>O</sup> quy định. Ba allele này có quan hệ trội lặn như sau: I<sup>A</sup> = I<sup>B</sup> > I<sup>O</sup>. Cặp bố mẹ có kiểu gene naò sau đây sẽ cho thế hệ con có đủ 4 loại nhóm máu?",

                options: ["A. I<sup>B</sup>I<sup>O</sup>  x I<sup>A</sup>I<sup>B</sup>.",
                    "B. I<sup>A</sup>I<sup>B</sup> x I<sup>A</sup>I<sup>B</sup>.",
                    "C. I<sup>A</sup>I<sup>O</sup> x I<sup>B</sup>I<sup>O</sup>.",
                    "D. I<sup>A</sup>I<sup>O</sup> x I<sup>A</sup>I<sup>B</sup>."],
                answer: 2
            },
            {
                question: "MB-DTBSMĐ-L1-004. Ở người, gene quy định nhóm máu A, B, O và AB có 3 allele: I<sup>A</sup>, I<sup>B</sup>, I<sup>O</sup> trên NST thường. Một cặp vợ chồng có nhóm máu A và B sinh được một con trai đầu lòng có nhóm máu O. Kiểu gene về nhóm máu của cặp vợ chồng này là",

                options: ["A. chồng I<sup>A</sup>I<sup>O</sup> vợ I<sup>B</sup>I<sup>O</sup>.",
                    "B. chồng I<sup>B</sup>I<sup>O</sup> vợ I<sup>A</sup>I<sup>O</sup>.",
                    "C. chồng I<sup>A</sup>I<sup>O</sup> vợ I<sup>A</sup>I<sup>O</sup>.",
                    "D. một người I<sup>A</sup>I<sup>O</sup> người còn lại I<sup>B</sup>I<sup>O</sup>."],
                answer: 3
            },
            {
                question: "MB-DTBSMĐ-L1-005. Gene chi phối đến sự hình thành nhiều tính trạng được gọi là",

                options: ["A. gene trội.",
                    "B. gene điều hòa.",
                    "C. gene đa hiệu.",
                    "D. gene tăng cường."],
                answer: 2
            },
            
            // Thêm các câu hỏi Bổ sung Mendel level 1 khác...
        ],
        level2: [
            {
                question: "MB-DTBSMĐ-L2-001. Để xác định một tính trạng do gene trong nhân hay gene trong tế bào chất quy định, người ta thường tiến hành:",

                options: ["A. 1: 1: 1: 1.", "B. Khác 1: 1: 1: 1.", "C. Theo tỉ lệ bằng nhau.", "D. Không phân li."],
                answer: 1
            },
            {
                question: "MB-DTBSMĐ-L2-002. Ở một loài thực vật, cho lai hai cây hoa đỏ với nhau, đời con thu được 135 cây hoa đỏ, 90 cây hoa vàng và 15 cây hoa trắng. Sự di truyền tính trạng màu hoa tuân theo quy luật di truyền nào sau đây?",

                options: ["A. Tương tác cộng gộp.", "B. Phân li độc lập.", "C. Tương tác bổ sung.", "D. Liên kết gene hoàn toàn."],
                answer: 2
            },
            {
                question: "MB-DTBSMĐ-L2-003. Đặc điểm nào dưới đây không phải là đặc điểm của bệnh di truyền do gene lặn liên kết với NST giới tính X ở người?",

                options: ["A. Mẹ mang gene bệnh ở trạng thái dị hợp sẽ làm biểu hiện bệnh ở một nửa số con trai.",
                    "B. Bệnh có xu hướng dễ biểu hiện ở nam do gene lặn đột biến không có allele bình thường tương ứng trên Y át chế.",
                    "C. Bố mang gene bệnh sẽ truyền gene bệnh cho một nửa số con gái.",
                    "D. Người nữ khó biểu hiện bệnh do muốn biểu hiện gene bệnh phải ở trạng thái đồng hợp."],
                answer: 2
            },
            {
                question: "MB-DTBSMĐ-L2-004. Gene ở vùng không tương đồng trên nhiễm sắc thể Y có hiện tượng di truyền",

                options: ["A. theo dòng mẹ.",
                    "B. thẳng.",
                    "C. như gene trên NST thường.",
                    "D. chéo."],
                answer: 1
            },
            {
                question: "MB-DTBSMĐ-L2-005. Ở cây hoa phấn gene quy định lá xanh hay đốm nằm ngoài nhân. Lấy hạt phấn của cây lá xanh thụ phấn cho cây lá đốm sẽ thu được ở đời con",

                options: ["A. 100% lá xanh.",
                    "B. 100% lá đốm.",
                    "C. 100% trội.",
                    "D. 50% lá xanh : 50 % đốm."],
                answer: 1
            },
            {
                question: "MB-DTBSMĐ-L2-006. Trong các hiện tượng sau, thuộc về thường biến là hiện tượng",

                options: ["A. tắc kè hoa thay đổi màu sắc theo nền môi trường.",
                    "B. bố mẹ bình thường sinh ra con bạch tạng.",
                    "C. lợn con sinh ra có vành tai xẻ thuỳ, chân dị dạng.",
                    "D. trên cây hoa giấy đỏ xuất hiện cành hoa trắng."],
                answer: 0
            },
            {
                question: "MB-DTBSMĐ-L2-007. Các cây hoa cẩm tú cầu mặc dù có cùng một kiểu gene nhưng màu hoa có thể biểu hiện ở các dạng trung gian khác nhau giữa tím và đỏ tùy thuộc vào",

                options: ["A. nhiệt độ môi trường.",
                    "B. cường độ ánh sáng.",
                    "C. hàm lượng phân bón.",
                    "D. độ pH của đất."],
                answer: 3
            },
            {
                question: "MB-DTBSMĐ-L2-008. Phát biểu nào sau đây là sai khi nói về mối quan hệ giữa kiểu gene, môi trường sống và kiểu hình?",

                options: ["A. Kiểu hình chỉ phụ thuộc vào kiểu gene mà không chịu ảnh hưởng của các yếu tố môi trường.",
                    "B. Kiểu gene quy định khả năng phản ứng của cơ thể trước môi trường.",
                    "C. Bố mẹ không truyền cho con những tính trạng đã hình thành sẵn mà truyền một kiểu gene.",
                    "D. Kiểu hình là kết quả tương tác giữa kiểu gene và môi trường."],
                answer: 0
            },
            {
                question: "MB-DTBSMĐ-L2-009. Gene nằm ở vị trí nào sau đây thì sẽ di truyền theo dòng mẹ?",

                options: ["A. Nằm trên NST thường.",
                    "B. Nằm trên NST X.",
                    "C. Nằm trên NST Y.",
                    "D. Nằm trong ti thể."],
                answer: 3
            },
            // Thêm các câu hỏi Bổ sung Mendel level 2 khác...
        ],
        level3: [
            {
                question: "MB-DTBSMĐ-L3-001. Ở ruồi giấm, allele A quy định mắt đỏ trội hoàn toàn so với allele a quy định mắt trắng. Theo lí thuyết, phép lai X<sup>A</sup>X<sup>a</sup> × X<sup>A</sup>Y tạo ra đời con có tỉ lệ kiểu hình mắt trắng chiếm tỉ lệ bao nhiêu?",
                options: ["A. 75%.",
                    "B. 25%.",
                    "C. 100%.",
                    "D. 50%."],
                answer: 1
            },
            {
                "question": "MB-DTBSMĐ-L3-002. Ở người, xét 2 gene trên 2 cặp nhiễm sắc thể thường; gene quy định nhóm máu có 3 allele là I<sup>A</sup>, I<sup>B</sup>, I<sup>O</sup>. Kiểu gene I<sup>A</sup>I<sup>A</sup> và I<sup>A</sup>I<sup>O</sup> quy định nhóm máu A; kiểu gene I<sup>B</sup>I<sup>B</sup>và I<sup>B</sup>I<sup>O</sup> quy định nhóm máu B; kiểu gene I<sup>A</sup>I<sup>B</sup> quy định nhóm máu AB; kiểu gene I<sup>O</sup>I<sup>O</sup> quy định nhóm máu O; gene quy định dạng tóc có 2 allele, allele D trội hoàn toàn so với allele d. Biết rằng cặp vợ chồng 1 - 2 có nhóm máu giống nhau, 2 người con gái 5, 6 có kiểu hình khác bố, mẹ về cả 2 tính trạng; đồng thời 2 người con gái này có nhóm máu khác nhau. Theo lí thuyết, xác suất sinh con đầu lòng là con gái có nhóm máu A, tóc thẳng của cặp vợ chồng 7 - 8 là",
                "image": "https://nhantri.top/media/Grade12/phaheabo.png",
                "options": [
                    "A. 5/108.",
                    "B. 10/27.",
                    "C. 4/9.",
                    "D. 1/18."
                ],
                "answer": 3,

            },
            {
                "question": "MB-DTBSMĐ-L3-003. Ở một loài thực vật, khi trong kiểu gene có cả gene A và gene B thì hoa có màu đỏ. Nếu trong kiểu gene chỉ có A hoặc chỉ có B thì hoa có màu vàng. Nếu không có gene A và B thì hoa có màu trắng. Kiểu gene nào sau đây quy định kiểu hình hoa đỏ?",
                "options": [
                    "A. AAbb.",
                    "B. aaBB.",
                    "C. Aabb.",
                    "D. AaBb."
                ],
                "answer": 3,

            },
            {
                "question": "MB-DTBSMĐ-L3-004. Ở  ngựa sự có mặt của 2 gene trội A và B  cùng kiểu gene quy định lông xám, gene A có khả năng đình chỉ hoạt động của gene B nên gene B cho lông màu đen khi không đứng cùng với gene A trong kiểu gene. Ngựa mang 2 cặp gene đồng hợp lặn cho kiểu hình lông hung. Các gene phân li độc lập trong quá trình di truyền. Tính trạng màu lông ngựa là kết quả của hiện tượng nào?",
                "options": [
                    "A. Tác động cộng gộp.",
                    "B. Tác động ác chế.",
                    "C. Trội không hoàn toàn.",
                    "D. Tác động bổ trợ."
                ],
                "answer": 1,

            },
            {
                "question": "MB-DTBSMĐ-L3-005. Lai hai dòng bí thuần chủng quả tròn được F1 toàn quả dẹt; F2 gồm 271 quả dẹt : 179 quả tròn : 28 quả dài. Sự di truyền hình dạng quả tuân theo quy luật di truyền nào?",
                "options": [
                    "A. Tương tác át chế.",
                    "B. Tương tác cộng gộp.",
                    "C. Trội không hoàn toàn.",
                    "D. Tương tác bổ trợ."
                ],
                "answer": 3,

            },
            {
                "question": "MB-DTBSMĐ-L3-006. Cho lai hai dòng vẹt thuần chủng lông vàng với lông xanh, được F1 toàn màu hoa thiên lí (xanh - vàng). F2 gồm 9/16 màu thiên lí : 3/16 lông vàng : 3/16 lông xanh : 1/16 lông trắng. Tính trạng này di truyền theo quy luật",
                "options": [
                    "A. Phân li độc lập.",
                    "B. Trội không hoàn toàn.",
                    "C. Tương tác gene.",
                    "D. Liên kết gene."
                ],
                "answer": 2,

            },
            {
                "question": "MB-DTBSMĐ-L3-007. Khi lai cây hoa đỏ thuần chủng với cây hoa trắng thuần chủng, F1 thu được 100% hoa đỏ. Cho lai F1 với cây hoa trắng thuần chủng ở trên, F2 thu được 3 hoa trắng : 1 hoa đỏ. Sự di truyền tính trạng trên tuân theo quy luật nào?",
                "options": [
                    "A. Tương tác át chế bởi gene trội.",
                    "B. Tương tác át chế bởi gene lặn.",
                    "C. Tương tác gene theo kiểu bổ trợ.",
                    "D. Tương tác gene theo kiểu cộng gộp."
                ],
                "answer": 2,

            },
            {
                "question": "MB-DTBSMĐ-L3-008. Ở đậu thơm, sự có mặt của 2 gene trội A, B trong cùng kiểu gene quy định màu hoa đỏ, các tổ hợp gene khác chỉ có 1 trong 2 loại gene trội trên, cũng như kiểu gene đồng hợp lặn sẽ cho kiểu hình hoa màu trắng. Cho biết các gene phân li độc lập  trong quá trình di truyền.  lai 2 giống đậu hoa trắng thuần chủng, F1 thu được toàn hoa màu đỏ. Cho F1 giao phấn với hoa trắng thu được F2 phân tính theo tỉ lệ 37.5% đỏ: 62,5% trắng. Kiểu gene hoa trắng đem lai với F1 là:",
                "options": [
                    "A. Aabb hoặc aaBb.",
                    "B. Aabb hoặc AaBB.",
                    "C. aaBb hoặc AABb.",
                    "D. AaBB hoặc AABb."
                ],
                "answer": 0,

            },
            {
                "question": "MB-DTBSMĐ-L3-009. Lai 2 dòng bí thuần chủng quả tròn, thu được F¬1 toàn quả dẹt; cho F1 tự thụ phấn F2 thu được 271 quả dẹt : 179 quả tròn : 28 quả dài. Kiểu gene của bố  mẹ là",
                "options": [
                    "A. Aabb x aaBB.",
                    "B. AaBb x AaBb.",
                    "C. AaBB x Aabb.",
                    "D. AABB x aabb."
                ],
                "answer": 0,

            },
           
            // Thêm các câu hỏi Bổ sung Mendel level 3 khác...
        ]
    },
    // Đột biến gene
    mcDBG: {
        level1: [
            {
                question: "MB-ĐBG-L1-001. Thể đột biến là",
                options: ["A. cơ thể mang đột biến chưa biểu hiện ra kiểu hình.", "B. cơ thể mang đột biến đã được biểu hiện ra kiểu hình.", "C. cơ thể mang biến dị tổ hợp đã được biểu hiện ra kiểu hình.", "D. cơ thể mang biến dị tổ hợp chưa được biểu hiện ra kiểu hình."],
                answer: 1
            },
            {
                question: "MB-ĐBG-L1-002. Đột biến điểm có các dạng:",
                options: ["A. mất, thêm, thay thế một cặp nucleotide.", "B. mất, thêm một hoặc vài cặp nucleotide.", "C. mất, thay thế một hoặc vài cặp nucleotide.", "D. thêm, thay thế một hoặc vài cặp nucleotide."],
                answer: 0
            },
            {
                question: "MB-ĐBG-L1-003. Vai trò cơ bản của đột biến gene trong tiến hoá là",
                options: ["A. giúp đào thải các cá thể có hại.", "B. tạo nguyên liệu cho quá trình tiến hoá.", "C. tạo các biến dị tổ hợp.", "D. giảm nguyên liệu của quá trình tiến hoá."],
                answer: 1
            },
            {
                question: "MB-ĐBG-L1-004. Vai trò của đột biến gene trong chọn giống là",
                options: ["A. tạo ra các loài mới đáp ứng yêu cầu sản xuất.", "B. tạo ra các gene mới đáp ứng yêu cầu sản xuất.", "C. tạo ra các tính trạng tốt đáp ứng yêu cầu sản xuất.", "D. tạo ra các biến dị tổ hợp đáp ứng yêu cầu sản xuất."],
                answer: 2
            },
            {
                question: "MB-ĐBG-L1-005. Tác nhân sinh học gây ra đột biến gene gồm:",
                options: ["A. virus viêm gan B, virus herpes.", "B. nọc độc của một số loài rắn như cạp nong, cạp nia.", "C. kiến ba khoang, ong bắp cày.", "D. nấm độc, vi khuẩn lao."],
                answer: 0
            },
            {
                question: "MB-ĐBG-L1-006. Ở người, bệnh Đao có bộ NST nào sau đây?",
                options: ["A. 2n - 1.", "B. 2n + 1.", "C. 3n.", "D. 4n."],
                answer: 1
            },

            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                question: "MB-ĐBG-L2-001. Phát biểu nào sau đây về đột biến gene là không đúng?",
                options: ["A. Đột biến gene là những biến đổi của gene liên quan đến một hoặc một số cặp nucleotide.", "B. Đột biến gene có thể xuất hiện ở tất cả các gene.", "C. Đột biến gene có thể làm thay đổi một hoặc một số tính trạng của cơ thể sinh vật.", "D. Đột biến gene làm thay đổi vị trí của gene trong nhiễm sắc thể."],
                answer: 3
            },
            {
                question: "MB-ĐBG-L2-002. Dạng đột biến điểm nào sau đây làm tăng số liên kết hydrogen của gene?",
                options: ["A. Mất một cặp A – T.", "B. Thêm một cặp G – C.", "C. Thay thế một cặp A – T bằng một cặp T – A.", "D. Thay thế một cặp G – C bằng một cặp C – G."],
                answer: 1
            },
            {
                question: "MB-ĐBG-L2-003. Đột biến nào khi xảy ra không làm thay đổi số nucleotide nhưng lại làm thay đổi số liên kết hydrogen trong gene?",
                options: ["A. Đột biến thay thế cặp A – T bằng G – C.",
                    "B. Đột biến mất một cặp nucleotide (mất cặp A – T hoặc G – C).",
                    "C. Đột biến thay thế cặp G – C bằng C – G.",
                    "D. Đột biến thêm một cặp nucleotide (thêm cặp A – T hoặc G – C)."],
                answer: 0
            },
            {
                question: "MB-ĐBG-L2-004. Đột biến thay thế một cặp nucleotide được gọi là đột biến đồng nghĩa xảy ra khi:",
                options: ["A. có sự thay đổi amino acid tương ứng trong chuỗi polypeptide.", "B. thể đột biến được xuất hiện ở thế hệ sau.", "C. thay đổi toàn bộ amino acid trong chuỗi polypeptide.", "D. không làm thay đổi amino acid nào trong chuỗi polypeptide."],
                answer: 3
            },
            {
                question: "MB-ĐBG-L2-005. Allele M bị đột biến điểm thành allele m. Theo lí thuyết, allele M và allele m:",
                options: ["A. chắc chắn có số nucleotide bằng nhau.", "B. luôn có số liên kết hydrogen bằng nhau.", "C. có thể có tỉ lệ(A + T)/(G + C) bằng nhau.", "D. luôn có chiều dài bằng nhau."],
                answer: 2
            },
            {
                question: "MB-ĐBG-L2-006. Hình bên mô tả hiện tượng một đột biến điểm xảy ra trên gene ẞ-globin và gây bệnh hồng cầu hình liềm ở người. Quan sát hình và cho biết dạng đột biến gene gây bệnh này thuộc loại nào sau đây?",
                options: ["A. Mất 1 cặp nucleotide.",
                    "B. Thêm 1 cặp nucleotide.",
                    "C. Thay thế 1 cặp nucleotide.",
                    "D. Mất 2 cặp nucleotide."],
                answer: 2,
                "image": "https://nhantri.top/media/Grade12/hongcauliem.png"
            },
            {
                question: "MB-ĐBG-L2-007. Khi nói về bệnh Phenylketonuria ở người, phát biểu nào sau đây là đúng?",
                options: ["A. Chỉ cần loại bỏ hoàn toàn amino acid phenylalanine ra khỏi khẩu phần ăn của người bệnh thì người bệnh sẽ trở nên khỏe mạnh hoàn toàn.",
                    "B. Có thể phát hiện ra bệnh Phenylketonuria bằng cách làm tiêu bản tế bào và quan sát hình dạng nhiễm sắc thể dưới kính hiển vi.",
                    "C. Bệnh Phenylketonuria là bệnh do đột biến ở gene mã hóa enzyme xúc tác cho phản ứng chuyển hóa amino acid phenylalanine thành tyrosine trong cơ thể.",
                    "D. Bệnh Phenylketonuria là do lượng amino acid tyrosine dư thừa và ứ đọng trong máu, chuyển lên não gây đầu độc tế bào thần kinh."],
                answer: 2,
                "image": "https://nhantri.top/media/Grade12/hongcauliem.png"
            },
            {
                question: "MB-ĐBG-L2-008. Một nhiễm sắc thể có trình tự <u>ABCDEG</u>.<u>HKM</u> đã bị đột biến thành nhiễm sắc thể có trình tự <u>ABCDCDEG</u>.<u>HKM</u>. Dạng đột biến này thường:",
                options: ["A. làm xuất hiện nhiều gene mới trong quần thể.",
                    "B. gây chết cho cơ thể mang nhiễm sắc thể đột biến.",
                    "C. làm thay đổi số nhóm gene liên kết của loài.",
                    "D. làm tăng hoặc giảm cường độ biểu hiện của tính trạng."],
                answer: 3,
            },
            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                question: "Cho phép lai P: ♀ AaBbDd × ♂ AaBbdd. Trong quá trình giảm phân hình thành giao tử đực, ở một số tế bào, cặp nhiễm sắc thể mang cặp gene Aa không phân li trong giảm phân I; giảm phân II diễn ra bình thường. Quá trình giảm phân hình thành giao tử cái diễn ra bình thường. Theo lí thuyết phép lai trên tạo ra F1 có tối đa bao nhiêu loại kiểu gene?",
                options: ["A. 18.", "B. 56.", "C. 42.", "D. 24."],
                answer: 2,
            },

            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    mcDBNST: {
        level1: [
            {
                question: "MB-DBNST-L1-001. Một NST có trình tự các gene là ABCDEFG●HI bị đột biến thành NST có trình tự các gene là CDEFG●HI. Đây là dạng đột biến nào?",

                options: ["A. Mất đoạn.",
                    "B. Chuyển đoạn.",
                    "C. Đảo đoạn.",
                    "D. Lặp đoạn."],
                answer: 0,
            },
            {
                question: "MB-DBNST-L1-002. Dạng đột biến nào sau đây không phải là đột biến số lượng NST?",

                options: ["A. Đảo đoạn NST.",
                    "B. Dị đa bội.",
                    "C. Tự đa bội.",
                    "D. Lệch bội."],
                answer: 0,
            },
            {
                question: "Loại nucleic acid nào sau đây là thành phần cấu tạo của NST?",
                options: [
                    "A. tRNA.",
                    "B. rRNA.",
                    "C. DNA.",
                    "D. mRNA."
                ],
                answer: 3
            },
            {
                question: "Cấu trúc của nucleosome gồm",
                options: [
                    "A. 4 phân tử DNA được phân tử Histon quấn quanh.",
                    "B. Phân tử histon được quấn bởi 146 cặp nucleotide.",
                    "C. 8 phân tử Histon được quấn quanh bởi 146 cặp nucleotide.",
                    "D. Lõi DNA được bọc bởi 8 phân tử protein histon."
                ],
                answer: 3
            },
            {
                question: "NST ở sinh vật nhân thực được cấu trúc bởi 2 thành phần chính là",
                options: [
                    "A. DNA và RNA.",
                    "B. DNA và protein histon.",
                    "C. RNA và protein histon.",
                    "D. DNA và protein trung tính."
                ],
                answer: 2
            },
            {
                question: "Loại đột biến nào sau đây làm tăng 1 liên kết hydrogen?",
                options: [
                    "A. Đột biến thêm 1 cặp G-C.",
                    "B. Đột biến mất 1 cặp A-T.",
                    "C. Đột biến thay thế 1 cặp A-T bằng 1 cặp G-C.",
                    "D. Đột biến thay thế 1 cặp G-C bằng 1 cặp A-T."
                ],
                answer: 3
            },
            {
                question: "Một đoạn mạch gốc của gene có trình tự các nuclêôtít 3’… TCG CCT GGA …5’. Trình tự các nuclêôtit trên đoạn mRNA tương ứng được tổng hợp từ gene này là",
                options: [
                    "A. 5'…AGC GGA CCU …3'.",
                    "B. 5'…ACG CCU GGU …3'.",
                    "C. 5'…UGC GGU CCU …3'.",
                    "D. 3'…UCG CCU GGA …5'."
                ],
                answer: 1
            },
            {
                question: "Loại đột biến NST nào sau đây làm tăng hàm lượng DNA trong nhân tế bào?",
                options: [
                    "A. Đột biến đảo đoạn.",
                    "B. Đột thể ba.",
                    "C. Đột biến thể một.",
                    "D. Đột biến mất đoạn."
                ],
                answer: 2
            },
            {
                question: "Loại enzyme nào sau đây có khả năng tháo xoắn một đoạn phân tử DNA?",
                options: [
                    "A. DNA polymerase.",
                    "B. RNA polymerase.",
                    "C. Ligase.",
                    "D. Recstrictase."
                ],
                answer: 2
            },
            {
                question: "Codon nào sau đây mang tín hiệu kết thúc quá trình dịch mã?",
                options: [
                    "A. 5'AUG3'.",
                    "B. 5'UAA3'.",
                    "C. 5'ACG3'.",
                    "D. 5'AGC3'."
                ],
                answer: 2
            },
            {
                question: "Trình tự nuclêôtit trong DNA có tác dụng bảo vệ và làm các NST không dính vào nhau nằm ở",
                options: [
                    "A. Hai đầu mút NST.",
                    "B. Eo thứ cấp.",
                    "C. Tâm động.",
                    "D. Điểm khởi sự nhân đôi."
                ],
                answer: 1
            },
            {
                question: "Đột biến cấu trúc NST là",
                options: [
                    "A. phá huỷ mối liên kết giữa protein và DNA.",
                    "B. thay đổi thành phần protein trong NST.",
                    "C. những biến đổi trong cấu trúc của NST.",
                    "D. biến đổi DNA tại một điểm nào đó trên NST."
                ],
                answer: 3
            },
            {
                question: "Việc loại khỏi NST những gene không mong muốn trong công tác chọn giống được ứng dụng từ dạng đột biến",
                options: [
                    "A. lặp đoạn NST.",
                    "B. mất đoạn nhỏ.",
                    "C. đảo đoạn NST.",
                    "D. chuyển đoạn NST."
                ],
                answer: 2
            },
            {
                question: "Một loài thực vật có bộ NST 2n = 14. Số loại thể một (2n-1) có thể có ở loài này là",
                options: [
                    "A. 21.",
                    "B. 7.",
                    "C. 14.",
                    "D. 13."
                ],
                answer: 2
            },
            {
                question: "Loại đột biến cấu trúc NST ít gây hậu quả nghiêm trọng cho cơ thể là",
                options: [
                    "A. đảo đoạn.",
                    "B. lặp đoạn và mất đoạn lớn.",
                    "C. chuyển đoạn lớn và đảo đoạn.",
                    "D. mất đoạn lớn."
                ],
                answer: 1
            },
            {
                question: "Một loài thực vật có bộ NST lưỡng bội 2n =14. Số NST có trong tế bào sinh dưỡng của thể một thuộc loài này là",
                options: [
                    "A. 13.",
                    "B. 15.",
                    "C. 27.",
                    "D. 23."
                ],
                answer: 1
            },
            {
                question: "Trong cấu trúc siêu hiển vi của NST ở sinh vật nhân thực, mức xoắn 3 có đường kính là",
                options: [
                    "A. 30 nm.",
                    "B. 300 nm.",
                    "C. 11 nm.",
                    "D. 700 nm."
                ],
                answer: 2
            },
            {
                question: "Đột biến lệch bội là đột biến",
                options: [
                    "A. làm giảm số lượng NST ở một hay một số cặp tương đồng.",
                    "B. làm thay đổi số lượng NST ở một hay một số cặp tương đồng.",
                    "C. làm thay đổi số lượng NST ở tất cả các cặp tương đồng.",
                    "D. làm tăng số lượng NST ở một hay một số cặp tương đồng."
                ],
                answer: 2
            },
            {
                question: "Trong cấu tạo siêu hiển vi của NST, sợi cơ bản có đường kính là",
                options: [
                    "A. 30 nm.",
                    "B. 700 nm.",
                    "C. 300 nm.",
                    "D. 11 nm."
                ],
                answer: 4
            },
            {
                question: "Dạng đột biến cấu trúc NST có thể dùng để loại bỏ các gene không mong muốn ra khỏi NST là",
                options: [
                    "A. Đột biến mất đoạn.",
                    "B. Đột biến chuyển đoạn.",
                    "C. Đột biến đảo đoạn.",
                    "D. Đột biến lặp đoạn."
                ],
                answer: 1
            },
            {
                question: "Ở sinh vật nhân thực, vật chất mang thông tin di truyền ở cấp độ phân tử là",
                options: [
                    "A. NST.",
                    "B. RNA.",
                    "C. Protein.",
                    "D. DNA."
                ],
                answer: 4
            },
            {
                question: "Trình tự nuclêôtit đặc biệt trong DNA của NST là vị trí liên kết với thoi phân bào được gọi là",
                options: [
                    "A. tâm động.",
                    "B. eo thứ cấp.",
                    "C. hai đầu mút NST.",
                    "D. Điểm khởi đầu nhân đôi."
                ],
                answer: 1
            },
            {
                question: "Khi nói về đột biến đa bội, đặc điểm nào sau đây đúng?",
                options: [
                    "A. Được sử dụng để lập bản đồ gene.",
                    "B. Làm thay đổi hình thái NST.",
                    "C. Không gặp ở động vật.",
                    "D. Góp phần hình thành nhiều loài thực vật có hoa."
                ],
                answer: 3
            },
            {
                question: "Trình tự nuclêôtit đặc biệt của một opêron để enzyme RNA pôlimerase bám vào khởi động quá trình phiên mã được gọi là",
                options: [
                    "A. gene điều hòa.",
                    "B. vùng khởi động.",
                    "C. vùng vận hành.",
                    "D. vùng mã hoá."
                ],
                answer: 2
            },
            {
                question: "Mã di truyền có tính thoái hoá, tức là",
                options: [
                    "A. mã di truyền là mã bộ ba.",
                    "B. nhiều bộ ba khác nhau cùng mã hoá cho một loại amino acid.",
                    "C. một bộ ba mã hoá chỉ mã hoá cho một amino acid.",
                    "D. tất cả các loài đều dùng chung một bộ mã di truyền."
                ],
                answer: 2
            }
            // Thêm các câu hỏi Đột biến NST level 1 khác...
        ],
        level2: [
            {
                question: "MB-DBNST-L2-001. Hình ảnh mô tả số lượng NST ở tế bào soma A và B của hai cơ thể thuộc một loài sinh vật lưỡng bội. Nếu tế bào A là tế bào của cơ thể bình thường, thì tế bào B thuộc thể đột biến nào?",
                image: "https://nhantri.top/media/Grade12/Tamnhiem.png",
                options: ["A. Thể một nhiễm.", "B. Thể ba nhiễm.", "C. Thể đa bội.", "D. Thể tam bội."],
                answer: 1,
            },
            {
                question: "MB-DBNST-L2-002. Dùng colchicine xử lí hợp tử có kiểu gene AaBb, sau đó cho phát triển thành cây hoàn chỉnh thì có thể tạo ra được thể tứ bội có kiểu gene",
               
                options: ["A. AaaaBBbb.",
                    "B. AAAaBBbb.",
                    "C. AAaaBBbb.",
                    "D. AAaaBbbb."],
                answer: 2,
            },
            {
                question: "MB-DBNST-L2-00. ",
                options: ["A. ",
                    "B. ",
                    "C. ",
                    "D. "],
                answer: 2,
            },
            {
                question: "MB-DBNST-L2-003. Phát biểu nào sau đây đúng khi nói về thể đột biến tam bội ở thực vật?",
                options: [
                    "A. Trong tế bào sinh dưỡng, một số cặp NST chứa 3 chiếc NST.",
                    "B. hầu như không có khả năng sinh giao tử bình thường.",
                    "C. cơ quan sinh dưỡng sinh trưởng mạnh, kích thước lớn hơn so với thể tứ bội.",
                    "D. Không có khả năng sinh trưởng, chống chịu các điều kiện bất lợi của môi trường."
                ],
                answer: 1
            },
            {
                question: "MB-DBNST-L2-004. Đột biến lệch bội",
                options: [
                    "A. làm thay đổi số lượng nhiễm sắc thể ở một hoặc toàn bộ các cặp NST tương đồng.",
                    "B. chỉ xảy ra trên NST thường, không xảy ra trên NST giới tính.",
                    "C. có thể làm cho một phần cơ thể mang đột biến và hình thành thể khảm.",
                    "D. không có ý nghĩa gì đối với quá trình tiến hóa."
                ],
                answer: 2
            },
            {
                question: "MB-DBNST-L2-005. Sự kết hợp giữa giao tử (n) và giao tử (n+1) trong thụ tinh sẽ tạo ra thể đột biến nào?",
                options: [
                    "A. Tứ nhiễm",
                    "B. Tam nhiễm",
                    "C. Một nhiễm",
                    "D. Tam bội"
                ],
                answer: 1
            },
            {
                question: "MB-DBNST-L2-006. Một NST có trình tự các gen là AB*CDEFG. Sau đột biến, trình tự các gen trên NST này là AB*CFEDG. Đây là dạng đột biến nào?",
                options: [
                    "A. Lặp đoạn NST",
                    "B. Mất đoạn NST.",
                    "C. Chuyển đoạn NST",
                    "D. Đảo đoạn NST."
                ],
                answer: 3
            },
           
            {
                question: "MB-DBNST-L2-007. Ở một loài thực vật lưỡng bội (2n = 8), có bộ NST có kí hiệu AaBbDdEe. Bộ NST nào sau đây là dạng đột biến thể ba?",
                options: [
                    "A. AaBbDEe.",
                    "B. AaaBBbDddEee.",
                    "C. AaBbDE",
                    "D. AaaBbDdEe"
                ],
                answer: 4
            },
            {
                question: "MB-DBNST-L2-008. Một loài thực vật có 8 nhóm gene liên kết theo lí thuyết số nhiễm sắc thể có trong thể một nhiễm là",
                options: [
                    "A. 7.",
                    "B. 9.",
                    "C. 15.",
                    "D. 17."
                ],
                answer: 3
            },
           
            {
                question: "MB-DBNST-L2-009. Một NST ban đầu có trình tự gen là ABCD*EFGH. Sau đột biến, NST có trình tự là: D*EFGH. Dạng đột biến này thường gây ra hậu quả gì?",
                options: [
                    "A. Gây chết hoặc giảm sức sống.",
                    "B. Làm tăng cường hoặc giảm bớt sự biểu hiện tính trạng.",
                    "C. Làm phát sinh nhiều nòi trong một loài.",
                    "D. Làm tăng khả năng sinh sản của cá thể mang đột biến."
                ],
                answer: 1
            },
            
            {
                question: "MB-DBNST-L2-010. Một loài thực vật có bộ nhiễm sắc thể lưỡng bội 2n = 24.Theo lí thuyết, có tối đa bao nhiêu dạng thể một khác nhau thuộc loài này?",
                options: [
                    "A. 25.",
                    "B. 23.",
                    "C. 24.",
                    "D. 12."
                ],
                answer: 4
            },
              {
                  question: "MB-DBNST-L2-011. Đột biến gene và đột biến NST có điểm khác nhau cơ bản là",
                options: [
                    "A. Đột biến NST có thể làm thay đổi số lượng gene trên NST, còn đột biến gene không thể làm thay đổi số lượng gene trên NST.",
                    "B. Đột biến NST thường phát sinh trong giảm phân, còn đột biến gene thường phát sinh trong nguyên phân.",
                    "C. Đột biến NST có hướng, còn đột biến gene vô hướng.",
                    "D. Đột biến NST có thể gây chết,còn đột biến gene không thể gây chết."
                ],
                answer: 1
            },
            {
                question: "MB-DBNST-L2-012. Sự không phân li của một cặp NST ở một số tế bào trong giảm phân hình thành giao tử ở một bên bố hoặc mẹ, qua thụ tinh với giao tử bình thường có thể hình thành các hợp tử mang bộ NST là",
                options: [
                    "A. 2n, 2n + 2, 2n - 2.",
                    "B. 2n, 2n + 1.",
                    "C. 2n, 2n + 1, 2n – 1.",
                    "D. 2n + 1, 2n – 1."
                ],
                answer: 4
            },
            {
                question: "MB-DBNST-L2-013. Bằng phương pháp tế bào học, người ta xác định được trong các tế bào sinh dưỡng của một cây đều có 40 NST và khẳng định cây này là thể tứ bội (4n). Cơ sở tế bào học của khẳng định trên là",
                options: [
                    "A. Các NST tồn tại thành cặp tương đồng gồm 2 chiếc có hình dạng, kích thước giống nhau.",
                    "B. Cây này sinh trưởng nhanh, phát triển mạnh và có khả chống chịu tốt.",
                    "C. Trong tế bào, NST tồn tại thành từng nhóm, mỗi nhóm gồm 4 NST tương đồng.",
                    "D. Trong tế bào, số NST là bội số của 4 nên bộ NST n = 10 và 4n = 40."
                ],
                answer: 3
            },
            {
                question: "MB-DBNST-L2-014. Ở thực vật, hợp tử được hình thành trong trường hợp nào sau đây có thể phát triển thành cây tứ bội?",
                options: [
                    "A. Hai giao tử lệch bội (n+1) kết hợp với nhau.",
                    "B. Hai giao tử lưỡng bội (2n) kết hợp với nhau.",
                    "C. Giao tử lưỡng bội (2n) kết hợp với giao tử lệch bội (n+1).",
                    "D. Giao tử lưỡng bội (2n) kết hợp với giao tử đơn bội (n)."
                ],
                answer: 2
            },
            {
                question: "MB-DBNST-L2-015. Phát biểu nào sau đây không đúng khi nói về đột biến lệch bội?",
                options: [
                    "A. Có thể phát sinh trong nguyên phân hoặc trong giảm phân.",
                    "B. Làm thay đổi số lượng ở một hoặc một số cặp nhiễm sắc thể.",
                    "C. Chỉ xảy ra ở NST thường, không xảy ra ở NST giới tính.",
                    "D. Xảy ra do rối loạn phân bào làm cho một hoặc một số cặp NST không thể phân li."
                ],
                answer: 3
            },

            // Thêm các câu hỏi Đột biến NST level 2 khác...
        ],
        level3: [
            {
                question: "MB-DBNST-L3-001. Hợp tử được hình thành trong trường hợp nào sau đây có thể phát triển thành thể đa bội lẻ?",
                options: [
                    "A. Giao tử đơn bội (n) kết hợp với giao tử lệch bội (n+1).",
                    "B. Giao tử lệch bội (n-1) kết hợp với giao tử lệch bội (n+1).",
                    "C. Giao tử đơn bội (n) kết hợp với giao tử lưỡng bội (2n).",
                    "D. Giao tử lưỡng bội (2n) kết hợp với giao tử lưỡng bội (2n)."
                ],
                answer: 2
            },
            {
                question: "MB-DBNST-L3-002. Dạng đột biến cấu trúc nhiễm sắc thể nào sau đây có thể làm cho hai allele của một gene nằm trên một NST đơn?",
                options: [
                    "A. Đảo đoạn.",
                    "B. chuyển đoạn trên một NST.",
                    "C. lặp đoạn.",
                    "D. mất đoạn"
                ],
                answer: 3
            },
            {
                question: "MB-DBNST-L3-003. Loại đột biến cấu trúc nhiễm sắc thể nào sau đây làm tăng số loại allele trong nhiễm sắc thể?",
                options: [
                    "A. Đảo đoạn.",
                    "B. Lặp đoạn.",
                    "C. Chuyển đoạn trong cùng một nhiễm sắc thể.",
                    "D. Chuyển đoạn giữa hai nhiễm sắc thể khác nhau."
                ],
                answer: 4
            },
            // Thêm các câu hỏi Đột biến NST level 3 khác...
        ]
    },
    mcDTHNUD: {
        level1: [
            {
                question: "MB-DTHN&UDTH-L1-001. Ở người, tính trạng mắt đen là trội hoàn toàn so với tính trạng mắt xanh. Một gia đình có bố mẹ mắt đen sinh được một người con gái mắt xanh và một người con gái mắt đen. Sơ đồ nào sau đây phản ánh đúng sự di truyền tính trạng màu mắt ở gia đình này?",
                image: "https://nhantri.top/media/Grade12/phahedung.png",
                options: ["A. Sơ đồ (I).",
                    "B. Sơ đồ (II).",
                    "C. Sơ đồ (III).",
                    "D. Sơ đồ (IV)."],
                answer: 0
            },
            {
                question: "MB-DTHN&UDTH-L1-002. Bệnh (hội chứng) nào sau đây ở người không phải do đột biến NST gây nên?",
               
                options: ["A. Hội chứng Klainfelter.",
                    "B. Ung thư máu.",
                    "C. Hội chứng Patau.",
                    "D. Hội chứng suy giảm miễn dịch mắc phải (AIDS)."],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L1-003. Trong chọn giống vật nuôi, phương pháp thường được dùng để tạo ra các biến dị tổ hợp là",
                options: [
                    "A. gây đột biến bằng sốc nhiệt.",
                    "B. chiếu xạ bằng tia X.",
                    "C. lai hữu tính.",
                    "D. gây đột biến bằng conchicin."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L1-004. Phương pháp gây đột biến nhân tạo thường ít được áp dụng ở",
                options: [
                    "A. động vật bậc cao.",
                    "B. vi sinh vật.",
                    "C. nấm.",
                    "D. thực vật."
                ],
                answer: 0
            },
            {
                question: "MB-DTHN&UDTH-L1-005. Trong kĩ thuật tạo DNA tái tổ hợp, Enzyme nào sau đây được sử dụng để gắn gene cần chuyển với DNA thể truyền?",
                options: [
                    "A. DNA polymerase.",
                    "B. Ligase.",
                    "C. Restrictase.",
                    "D. ARN polymerase."
                ],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L1-006. Phương pháp tạo giống thuần chủng có kiểu gene mong muốn dựa trên nguồn biến dị tổ hợp gồm các bước sau:\n(1) Cho các cá thể có tổ hợp gene mong muốn tự thụ phấn hoặc giao phối cận huyết qua một số thế hệ để tạo ra các giống thuần chủng có kiểu gene mong muốn.\n(2) Lai các dòng thuần chủng khác nhau để chọn ra các tổ hợp gene mong muốn.\n(3) Tạo ra các dòng thuần chủng có kiểu gene khác nhau.\nTrình tự đúng của các bước là",
                options: [
                    "A. (1) (2) (3).",
                    "B. (3) (1) (2).",
                    "C. (2) (3) (1).",
                    "D. (3) (2) (1)."
                ],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L1-007. Phương pháp nào sau đây có thể được ứng dụng để tạo ra sinh vật mang đặc điểm của hai loài?",
                options: [
                    "A. Nuôi cấy hạt phấn.",
                    "B. Gây đột biến gene.",
                    "C. Nhân bản vô tính.",
                    "D. Dung hợp tế bào trần."
                ],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L1-008. Dưới đây là các bước trong quy trình tạo giống mới bằng phương pháp gây đột biến:\nI. Cho tự thụ phấn hoặc lai xa để tạo các giống thuần chủng.\nII. Chọn lọc các cá thể đột biến có kiểu hình mong muốn.\nIII. Xử lý mẫu vật bằng các tác nhân gây đột biến.\nIV. Tạo dòng thuần.\nTrình tự đúng là",
                options: [
                    "A. I – III – II.",
                    "B. III – II – I.",
                    "C. III – II – IV.",
                    "D. II – III – IV."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L1-009. Trong kĩ thuật chuyển gene vào vi khuẩn <em>E. coli</em>, để nhận biết tế bào chứa DNA tái tổ hợp hay chưa, các nhà khoa học phải chọn thể truyền có",
                options: [
                    "A. gene cần chuyển.",
                    "B. gene ngoài nhân.",
                    "C. gene đánh dấu.",
                    "D. gene điều hoà."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L1-010. Tạo sinh vật biến đổi gene bằng các phương pháp nào sau đây:\n1. Đưa thêm gene lạ vào hệ gene.\n2. Thay thế nhân tế bào.\n3. Làm biến đổi một gen đã có sẵn trong hệ gene.\n4. Lai hữu tính giữa các dòng thuần chủng.\n5. Loại bỏ hoặc làm bất hoạt một gen nào đó trong hệ gene.\nPhương án đúng là",
                options: [
                    "A. 3,4,5.",
                    "B. 2,4,5.",
                    "C. 1,3,5.",
                    "D. 1,2,3."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L1-011. Để plasmid DNA tái tổ hợp dễ dàng xâm nhập qua màng tế bào <em>E. Coli</em> người ta dùng",
                options: [
                    "A. Enzyme Restrictase.",
                    "B. Enzyme Ligase.",
                    "C. CaCl<sub>2</sub>.",
                    "D. Chiếu xạ."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L1-012. Cho các loại giống sau: (1) Giống lúa gạo vàng; (2) Dâu tằm tam bội; (3) Pomato; (4) Cừu Đolly; (5) Vi khuẩn E.coli sản xuất kháng sinh penicillin; (6) Giống dâu tằm tam bội; (7) Giống bông kháng sâu; (8) Bò lai Sind; (10) Cà chua chín chậm.\nCó bao nhiêu giống được tạo nên bằng công nghệ gene?",
                options: [
                    "A. 4.",
                    "B. 3.",
                    "C. 5.",
                    "D. 6."
                ],
                answer: 0
            },

            // Thêm các câu hỏi DTH người và ứng dụng level 1 khác...
        ],
        level2: [
            {
                question: "MB-DTHN&UDTH-L2-001. Sơ đồ phả hệ trên mô tả sự di truyền một bệnh ở người do một trong hai allele của một gene quy định. Biết rằng không xảy ra đột biến ở tất cá các cá thể trong phả hệ. Trong những người thuộc phả hệ trên, những người chưa thể xác định được chính xác kiểu gene do chưa có đủ thông tin là",
                image: "https://nhantri.top/media/Grade12/sodophe.png",
                options: ["A. 8 và 13.", "B. 1 và 4.", "C. 17 và 20.", "D. 15 và 16."],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L2-002. Để duy trì và củng cố ưu thế lai ở thực vật, người ta áp dụng phương pháp nào sau đây?",
               
                options: ["A. Lai trở lại các cá thể thế hệ F1 với các cá thể thế hệ P.",
                    "B. Cho tạp giao giữa các cá thể thế hệ F1.",
                    "C. Cho các cá thể thế hệ F1 tự thụ phấn.",
                    "D. Sinh sản sinh dưỡng."],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L2-003. Phân tích thành phần các loại nucleotide trong một mẫu DNA lấy từ một bệnh nhân người ta thấy như sau: A = 22%; G = 20%; T= 28% ; X = 30%. Kết luận nào sau đây là đúng?",

                options: ["A. DNA này không phải là DNA của tế bào người bệnh.",
                    "B. DNA này là của sinh vật nhân sơ gây bệnh cho người.",
                    "C. DNA của người bệnh đã bị biến đổi bất thường do tác nhân gây bệnh.",
                    "D. DNA của người bệnh bị lai hóa với RNA."],
                answer: 0
            },
            {
                question: "MB-DTHN&UDTH-L2-004. Từ một phôi cừu có kiểu gene AaBb, bằng phương pháp cấy truyền phôi có thể tạo ra cừu con có kiểu gene",
                options: [
                    "A. aabb.",
                    "B. aaBB.",
                    "C. AAbb.",
                    "D. AaBb."
                ],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L2-005. Đặc điểm không phải của cá thể tạo ra do nhân bản vô tính là:",
                options: [
                    "A. Có kiểu gene giống hệt cá thể cho nhân.",
                    "B. Thường có tuổi thọ ngắn hơn so với các cá thể cùng loài sinh ra bằng phương pháp tự nhiên.",
                    "C. Được sinh ra từ một tế bào xôma, không cần có sự tham gia của nhân tế bào sinh dục.",
                    "D. Mang các đặc điểm giống hệt cá thể mẹ đã mang thai và sinh ra nó."
                ],
                answer: 3
            },
            {
                question: "MB-DTHN&UDTH-L2-006. Ở một loài thực vật, xét hai cặp gene Aa và Bb. Người ta tiến hành lai giữa các dòng thuần về hai cặp gene này để tạo ra con lai có ưu thế lai. Theo giả thuyết siêu trội, con lai có kiểu gene nào sau đây thể hiện ưu thế con lai cao nhất?",
                options: [
                    "A. AaBB",
                    "B. AABB",
                    "C. AaBb",
                    "D. AABb"
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L2-007. Khi nói về ưu thế lai, phát biểu nào sau đây đúng?",
                options: [
                    "A. Ưu thế lai tỉ lệ thuận với số lượng cặp gene đồng hợp tử trội có trong kiểu gene của con lai.",
                    "B. Ưu thế lai biểu hiện cao nhất ở đời F1 của phép lai khác dòng.",
                    "C. Ưu thế lai có thể được duy trì và củng cố bằng phương pháp tự thụ phấn hoặc giao phối gần.",
                    "D. Ưu thế lai chỉ xuất hiện ở phép lai giữa các dòng thuần chủng có kiểu gene giống nhau."
                ],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L2-008. Chọn một loài cây thích hợp trong số các loài cây dưới đây để có thể áp dụng chất conchicin nhằm tạo ra giống mới đem lại hiệu quả kinh tế cao",
                options: [
                    "A. Cây lúa",
                    "B. Cây đậu tương.",
                    "C. Cây củ cải đường.",
                    "D. Cây ngô."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L2-009. Người ta tiến hành cấy truyền một phôi cừu có kiểu gene Aabb thành 20 phôi và nuôi cấy phát triển thành 20 cá thể. Các 20 cá thể này:",
                options: [
                    "A. Có khả năng giao phối với nhau để sinh con.",
                    "B. Có mức phản ứng giống nhau.",
                    "C. Có giới tính có thể giống hoặc khác nhau.",
                    "D. Có kiểu hình hoàn toàn khác nhau."
                ],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L2-010. Một trong những ưu điểm của phương pháp nuôi cấy mô ở thực vật là",
                options: [
                    "A. tạo ra các cây con có ưu thế lai cao hơn hẳn so với cây ban đầu.",
                    "B. nhân nhanh các giống cây trồng quý hiếm, tạo ra các cây đồng nhất về kiểu gene.",
                    "C. tạo ra các dòng thuần chủng có kiểu gene khác nhau.",
                    "D. tạo ra giống cây trồng mới có kiểu gene hoàn toàn khác với cây ban đầu."
                ],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L2-011. Khi nói về vai trò của thể truyền plasmid trong kỹ thuật chuyển gene vào tế bào vi khuẩn, phát biểu nào sau đây là đúng?",
                options: [
                    "A. Nếu không có thể truyền plasmid thì gene cần chuyển sẽ tạo ra quá nhiều sản phẩm trong tế bào nhận.",
                    "B. Nhờ có thể truyền plasmid mà gene cần chuyển được nhân lên trong tế bào nhận.",
                    "C. Nếu không có thể truyền plasmid thì tế bào nhận không phân chia được.",
                    "D. Nhờ có thể truyền plasmid mà gene cần chuyển gắn được vào DNA vùng nhân của tế bào nhận."
                ],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L2-012. Bằng công nghệ tế bào thực vật, người ta có thể nuôi cấy các mẩu mô của một cơ thể thực vật rồi sau đó cho chúng tái sinh thành các cây. Bằng kĩ thuật chia cắt một phôi động vật thành nhiều phôi rồi cấy các phôi này vào tử cung của các con vật khác nhau cũng có thể tạo ra nhiều con vật quý hiếm. Đặc điểm chung của hai phương pháp này là",
                options: [
                    "A. đều tạo ra các cá thể có kiểu gene thuần chủng.",
                    "B. các cá thể tạo ra rất đa dạng về kiểu gene và kiểu hình.",
                    "C. đều tạo ra các cá thể có kiểu gene đồng nhất.",
                    "D. đều thao tác trên vật liệu di truyền là DNA và nhiễm sắc thể."
                ],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L2-013. Giả sử một cây ăn quả của một loài thực vật tự thụ phấn có kiểu gene AaBb. Theo lí thuyết, phát biểu nào sau đây sai?",
                options: [
                    "A. Nếu chiết cành từ cây này đem trồng, người ta sẽ thu được cây con có kiểu gene AaBb.",
                    "B. Nếu gieo hạt của cây này thì có thể thu được cây con có kiểu gene đồng hợp tử trội về các gene trên.",
                    "C. Nếu đem nuôi cấy hạt phấn của cây này rồi gây lưỡng bội hóa thì có thể thu được cây con có kiểu gene AaBB.",
                    "D. Các cây con được tạo ra từ cây này bằng phương pháp nuôi cấy mô sẽ có đặc tính di truyền giống nhau và giống với cây mẹ."
                ],
                answer: 2
            }
            // Thêm các câu hỏi DTH người và ứng dụng level 2 khác...
        ],
        level3: [
            {
                question: "MB-DTHN&UDTH-L3-001. Ở người, tính trạng tóc xoăn là trội hoàn toàn so với tính trạng tóc thẳng. Một gia đình có bố, mẹ tóc xoăn đã sinh ra hai người con, trong đó có một người con gái tóc thẳng. Phả hệ nào sau đây phản ánh đúng sự di truyền tính trạng dạng tóc ở gia đình này?",
                image: "https://nhantri.top/media/Grade12/Timphahe.png",
                options: ["", "", "", ""],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L3-002. Ở người, cùng với hệ nhóm máu ABO, hệ nhóm máu Rhesus (Rh) có vai trò quan trọng do đều gây ra chứng tan huyết khi không tương đồng nhóm máu. Một người phụ nữ có nhóm máu Rh âm (Rh<sup>-</sup>) thường mang thai và sinh con thứ nhất có nhóm máu Rh dương (Rh<sup>+</sup>) bình thường, nhưng dễ bị sảy thai ở các lần mang thai tiếp theo nếu thai nhi có nhóm máu Rh<sup>+</sup>. Tỉ lệ người có nhóm máu Rh<sup>-</sup> chiếm khoảng 17 % ở người da trắng, 7 % ở người da đen và 0, 5 % ở người da vàng (trong đó có người Việt). Gene quy định nhóm máu Rh có 2 allele là R và r, nằm trên NST thường. Allele R quy định nhóm máu Rh<sup>+</sup> trội hoàn toàn so với allele r quy định nhóm máu Rh<sup>-</sup>. Một cặp vợ chồng người Việt có con thứ nhất Rh<sup>+</sup>, nhưng người vợ có một anh ruột và hai cháu ruột Rh<sup>-</sup>. Phát biểu tư vấn di truyền nào dưới đây là phù hợp với cặp vợ chồng này khi họ dự định sinh con lần thứ hai?",
                image: "https://nhantri.top/media/Grade12/Timphahe.png",
                options: ["A. Người vợ không có nguy cơ sảy thai, vì đã có con thứ nhất Rh<sup>+</sup> và xác suất Rh<sup>-</sup> ở người Việt thấp.",
                    "B. Người vợ không có nguy cơ sảy thai, vì con thứ nhất Rh<sup>+</sup> cho thấy kiểu gene người chồng là RR.",
                    "C. Người vợ có nguy cơ sảy thai, vì xác suất người vợ có nhóm máu Rh<sup>-</sup> cao hơn mức chung của quần thể.",
                    "D. Người vợ có nguy cơ sảy thai cao hơn 50 % nếu có kiểu gene rr và người chồng có kiểu gene dị hợp tử."],
                answer: 2
            },
            {
                question: "MB-DTHN&UDTH-L3-003. Phenylketonuria (PKU) là một bệnh di truyền do thiếu enzyme chuyển hoá amino acid phenyl alanine. Sơ đồ phả hệ của một gia đình sau đây bị bệnh này. Phả hệ cho thấy bệnh phenylketonuria (PKU) được quy định bởi:",
                image: "https://nhantri.top/media/Grade12/genelannstt.png",
                options: ["A. gene trội trên nhiễm sắc thể giới tính X.", "B. gene lặn trên nhiễm sắc thể thường.", "C. gene trội trên nhiễm sắc thể thường.", "D. gene lặn trên nhiễm sắc thể giới tính X."],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L3-004. Trong khoa học pháp y, dấu vết máu ở hiện trường có thể chỉ ra danh tính của chủ nhân vết máu đó thông qua phân tích yếu tố nào sau đây?",
             
                options: ["A. DNA.",
                    "B. Carbohydrate.",
                    "C. Lipid.",
                    "D. Protein."],
                answer: 0
            },
            {
                question: "MB-DTHN&UDTH-L3-004. Vi khuẩn <em>Bacillus thringiensis<em/> có gene Bt quy định sản xuất độc tố Bt tiêu diệt một số loài sâu hại. Vi khuẩn <em>Argobacterium tumefaciens<em/> có khả năng lây nhiễm tế bào thực vật và chuyển gene vào nhiễm sắc thể nhờ vào một loại plasmid đặc biệt. Hình ảnh thể hiện quy trình tạo giống ngô kháng sâu từ hai loài vi khuẩn này nhờ áp dụng công nghệ gene. Nhận định nào dưới đây là đúng?",
                image: "https://nhantri.top/media/Grade12/genetthkt.png",
                options: ["A. Quá trình này không cần sử dụng enzyme giới hạn.",
                    "B. Tất cả các tế bào sinh dưỡng của cây ngô đều mang gene Bt.",
                    "C. Độ tố Bt của cây được sản xuất từ tế bào vi khuẩn <em> Agrobacterium tumefaciens <em/>.",
                    "D. Độ tố Bt của cây được sản xuất từ tế bào vi khuẩn <em> Bacillus thuringiensis <em/>."],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L3-005. Có khoảng 3% dân số bình thường mang allele đột biến ở gene CFTR gây bệnh xơ nang. Trong một gia đình, cả người vợ và chồng đều là thể mang một động biến CFTR. Cặp vợ chồng này sinh ra đứa con đầu lòng bị bệnh xơ nang, vì vậy khi mang thai đứa con thứ hai, họ muốn được bác sĩ tư vấn và kiểm tra để xác định thai nhi bị bệnh hay hoàn toàn không mang gene bệnh hay là thể mang gene bệnh. Các mẫu DNA từ các thành viên trong gia đình và thai nhi được thu thập, PCR và điện di trên gel, kết quả như trong hình. Nếu thai nhi sinh ra, lớn lên và kết hôn với người bình thường thì xác suất sinh ra đứa con trai đầu lòng bị bệnh xơ nang là bao nhiêu phần trăm?",
                image: "https://nhantri.top/media/Grade12/diendithai.png",
                options: ["A. 0,3%.",
                    "B. 0, 375 %.",
                    "C. 0, 15 %.",
                    "D. 0, 25 %."],
                answer: 1
            },
            {
                question: "MB-DTHN&UDTH-L3-005. Ở người, bệnh A do 1 gene có 2 allele trên NST thường quy định, allele trội quy không bị bệnh trội hoàn toàn so với allele lặn quy định bị bệnh; bệnh B do 1 cặp gene khác nằm trên vùng không tương đồng của NST giới tính X quy định, allele trội quy định kiểu hình bình thường trội hoàn toàn so với allele lặn quy định kiểu hình bị bệnh. Cho sơ đồ phả hệ trong hình, theo lí thuyết, số người có thể xác định chính xác kiểu gene là",
                image: "https://nhantri.top/media/Grade12/benhab.png",
                options: ["A. 4.",
                    "B. 5.",
                    "C. 7.",
                    "D. 8."],
                answer: 2
            },
            // Thêm các câu hỏi DTH người và ứng dụng level 3 khác...
        ]
    },
    mcDTQT: {
        level1: [
            {
                question: "MB-DTQT-L1-001. Về mặt di truyền mỗi quần thể được đặc trưng bởi",
                options: [
                    "A. Vốn gene.",
                    "B. Tỉ lệ các nhóm tuổi.",
                    "C. Tỉ lệ đực và cái.",
                    "D. Độ đa dạng."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L1-002. Cấu trúc di truyền của quần thể tự phối biến đổi qua các thể hệ theo hướng",
                options: [
                    "A. giảm dần tần số kiểu gene đồng hợp tử lặn, tăng dần tần số kiểu gene đồng hợp tử trội.",
                    "B. giảm dần tần số kiểu gene dị hợp tử, tăng dần tần số kiểu gene đồng hợp tử.",
                    "C. giảm dần tần số kiểu gene đồng hợp tử trội, tăng dần tần số kiểu gene đồng hợp tử lặn.",
                    "D. tăng dần tần số kiểu gene dị hợp tử, giảm dần tần số kiểu gene đồng hợp tử."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L1-003. Trong các quần thể sau đây, quần thể nào có tần số allele a thấp nhất?",
                options: [
                    "A. 0,3AA : 0,5Aa : 0,2aa.",
                    "B. 0,2AA : 0,8Aa.",
                    "C. 0,5AA : 0,4Aa : 0,1aa.",
                    "D. 0,4AA : 0,3Aa : 0,3aa."
                ],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-004. Cho cây có kiểu gene AaBbDdee tự thụ phấn qua nhiều thế hệ. Nếu các cặp gene này nằm trên các cặp NST thường khác nhau thì tối đa có bao nhiêu dòng thuần về cả 4 cặp gene trên?",
                options: ["A. 3.", "B. 6.", "C. 8.", "D. 1."],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-005. Một quần thể ngẫu phối có tần số Allele A = 0,4; a = 0,6. Ở trạng thái cân bằng Hardy - Weinberg, cấu trúc di truyền của quần thể là",
                options: [
                    "A. 0,16AA : 0,48Aa : 0,36aa.",
                    "B. 0,16Aa : 0,48AA : 0,36aa.",
                    "C. 0,36AA : 0,48Aa : 0,16aa.",
                    "D. 0,16AA : 0,48aa : 0,36Aa."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L1-006. Quần thể tự thụ phấn ban đầu có toàn kiểu gene Aa, sau 3 thế hệ tự thụ phấn, tỉ lệ kiểu gene đồng hợp tồn tại trong quần thể là",
                options: ["A. 25%.", "B. 50%.", "C. 5%.", "D. 87,5%."],
                answer: 3
            },
            {
                question: "MB-DTQT-L1-007. Một quần thể thực vật tự thụ phấn có tỉ lệ kiểu gene ở thế hệ bố mẹ là 0,2 BB : 0,5 Bb : 0,3 bb. Cho biết các cá thể Bb không có khả năng sinh sản. Tính theo lí thuyết, tần số tương đối của allele B và b lần lượt ở F5 là",
                options: [
                    "A. 0,6; 0,4.",
                    "B. 0,25; 0,75.",
                    "C. 0,4; 0,6.",
                    "D. 0,5; 0,5."
                ],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-008. Trong một quần thể thực vật, khi khảo sát 1000 cá thể, thì thấy có 280 cây hoa đỏ (kiểu gene AA), 640 cây hoa hồng (kiểu gene Aa), còn lại là cây hoa trắng (kiểu gene aa). Tần số tương đối của allele A và allele a là",
                options: [
                    "A. A = 0,2; a = 0,8.",
                    "B. A = 0,8; a = 0,2.",
                    "C. A = 0,6; a = 0,4.",
                    "D. A = 0,4; a = 0,6."
                ],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-009. Một quần thể thực vật đang ở trạng thái cân bằng di truyền có tần số kiểu gene aa là 0,16. Theo lí thuyết tần số allele A của quần thể này là",
                options: ["A. 0,4.", "B. 0,32.", "C. 0,48.", "D. 0,6."],
                answer: 3
            },
            {
                question: "MB-DTQT-L1-010. Trong các điều kiện sau đây, điều kiện nào là tiên quyết đảm bảo cho quần thể giao phối cân bằng Hardy – Weinberg?",
                options: [
                    "A. Quần thể phải có kích thước đủ lớn, đảm bảo ngẫu phối.",
                    "B. Các cá thể có kiểu gene khác nhau phải có sức sống và khả năng sinh sản ngang nhau.",
                    "C. Nếu xảy ra đột biến thì tần số đột biến thuận phải bằng tần số đột biến nghịch.",
                    "D. Quần thể phải được cách li với các quần thể khác (không có sự di gene – nhập gene)."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L1-011. Theo quan điểm của học thuyết tiến hóa tổng hợp hiện đại, nhân tố nào dưới đây làm thay đổi cấu trúc di truyền của quần thể theo hướng duy trì tần số tương đối của các allele, biến đổi thành phần kiểu gene của quần thể?",
                options: [
                    "A. Đột biến gene.",
                    "B. Di nhập gene.",
                    "C. Nội phối.",
                    "D. Chọn lọc tự nhiên."
                ],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-012. Cấu trúc di truyền của quần thể tự phối qua nhiều thế hệ có đặc điểm?",
                options: [
                    "A. Đa dạng và phong phú về kiểu gene.",
                    "B. Phân hóa thành các dòng thuần có kiểu gene khác nhau.",
                    "C. Chủ yếu ở trạng thái dị hợp.",
                    "D. Tăng thể dị hợp và giảm thể đồng hợp."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L1-013. Một quần thể thực vật lưỡng bội có một gene nằm trên nhiễm sắc thể thường gồm 5 allele. Trong quần thể, số kiểu gene đồng hợp về gene đó là",
                options: ["A. 15.", "B. 5.", "C. 20.", "D. 10."],
                answer: 1
            },
            {
                question: "MB-DTQT-L1-014. Một quần thể thực vật lưỡng bội đang ở trạng thái cân bằng di truyền có tần số allele a là 0,15. Theo lí thuyết, tần số kiểu gene Aa của quần thể này là",
                options: ["A. 25,5%.", "B. 12,75%.", "C. 72,25%.", "D. 85%."],
                answer: 0
            },
            {
                question: "MB-DTQT-L1-015. Nhân tố nào sau đây góp phần thúc đẩy sự phân hóa kiểu gene của quần thể?",
                options: [
                    "A. Giao phối không ngẫu nhiên.",
                    "B. Chọn lọc tự nhiên.",
                    "C. Đột biến.",
                    "D. Cách li địa lí."
                ],
                answer: 3
            },
            {
                question: "MB-DTQT-L1-016. Ở một loài thực vật, xét một gene quy định một tính trạng gồm 2 allele A và a. Allele A trội hoàn toàn so với allele a. Một quần thể đang ở trạng thái cân bằng di truyền có tần số allele A là 0,4. Tỉ lệ kiểu hình lặn trong quần thể là",
                options: ["A. 48%.", "B. 84%.", "C. 60%.", "D. 36%."],
                answer: 3
            },
            {
                question: "MB-DTQT-L1-017. Xét hai quần thể thực vật, một quần thể chỉ sinh sản bằng tự thụ phấn, một quần thể chỉ sinh sản bằng giao phấn. Ở mỗi quần thể, xét một gene có 4 allele quy định một tính trạng, phát biểu nào sau đây là đúng?",
                options: [
                    "A. Số loại kiểu gene ở cả hai trường hợp tự thụ và giao phấn là như nhau.",
                    "B. Số loại giao tử tối đa trong hai quần thể về gene nói trên là như nhau.",
                    "C. Ở quần thể tự thụ phấn sẽ cho ra ít loại kiểu hình hơn giao phấn.",
                    "D. Quần thể tự thụ phấn có đa dạng di truyền cao hơn quần thể giao phấn."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L1-018. Xét một quần thể có 2 allele (A, a). Quần thể khởi đầu có số cá thể tương ứng với từng loại kiểu gene là: 65AA: 26Aa: 169aa. Tần số tương đối của mỗi allele trong quần thể này là",
                options: [
                    "A. A = 0,50; a = 0,50.",
                    "B. A = 0,35 ; a = 0,65.",
                    "C. A = 0,30; a = 0,70.",
                    "D. A = 0,25; a = 0,75."
                ],
                answer: 2
            },
            {
                question: "MB-DTQT-L1-019. Một quần thể có thành phần kiểu gene là 0,16 AA : 0,48 Aa : 0,36 aa. Tần số allele A của quần thể này là",
                options: ["A. 0,7.", "B. 0,3.", "C. 0,4.", "D. 0,5."],
                answer: 2
            },
           

            // Thêm các câu hỏi Di truyền quần thể level 1 khác...
        ],
        level2: [
            {
                "question": "MB-DTQT-L2-001. Một quần thể thực vật đang ở trạng thái cân bằng di truyền có tần số allele b là 0,7. Theo lý thuyết, tần số kiểu gene bb của quần thể này là",
                "options": [
                    "A. 0,49.",
                    "B. 0,60.",
                    "C. 0,42.",
                    "D. 0,30."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-DTQT-L2-002. Quần thể ngẫu phối nào sau đây đang ở trạng thái cân bằng di truyền?",
                "options": [
                    "A. 0, 49AA : 0, 50Aa : 0,01 aa.",
                    "B. 0, 81AA : 0, 18Aa : 0,01aa.",
                    "C. 0, 36AA : 0, 16Aa : 0, 48aa.",
                    "D. 0, 25AA : 0, 59Aa : 0, 16aa."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-DTQT-L2-003. Một quần thể thực vật đang ở trạng thái cân bằng di truyền có tần số kiểu gene aa là 0,16. Theo lí thuyết tần số allele A của quần thể này là",
                "options": [
                    "A. 0,40.",
                    "B. 0,84.",
                    "C. 0,48.",
                    "D. 0,60."
                ],
                "answer": 3,
                "image": null
            },
            {
                question: "MB-DTQT-L2-004. Trong một quần thể của một loài ngẫu phối, tỉ lệ giao tử mang gene đột biến là 10%. Theo lí thuyết tỉ lệ hợp tử mang gene đột biến là:",
                options: ["A. 19%.", "B. 10%.", "C. 1%.", "D. 5%."],
                answer: 0
            },
          
            {
                question: "MB-DTQT-L2-005. Khi nói về các đặc trưng cơ bản của quần thể, phát biểu nào sau đây đúng?",
                options: [
                    "A. Trong điều kiện môi trường bị giới hạn, đường cong sinh trưởng thực tế của quần thể có hình chữ S.",
                    "B. Tỉ lệ đực cái của các loài luôn là 1/1.",
                    "C. Khi kích thước quần thể đạt tối đa thì tốc độ tăng trưởng của quần thể là lớn nhất.",
                    "D. Mật độ cá thể của mỗi quần thể luôn ổn định, không thay đổi theo mùa, theo năm."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L2-006. Trong các quần thể sau đây có bao nhiêu quần thể ở trạng thái cân bằng di truyền? QT1: 0,5AA : 0,5Aa; QT2: 0,5AA : 0,5aa; QT3: 0,81AA : 0,18Aa : 0,01aa; QT4: 0,25AA : 0,5Aa : 0,25aa.",
                options: ["A. 2.", "B. 4.", "C. 3.", "D. 1."],
                answer: 0
            },
            {
                question: "MB-DTQT-L2-007. Quần thể nào sau đây cân bằng di truyền?",
                options: [
                    "A. 0,16AA : 0,48Aa : 0,36aa.",
                    "B. 0,1 AA : 0,4Aa : 0,5aa.",
                    "C. 0,5AA : 0,5aa.",
                    "D. 0,16AA : 0,38Aa : 0,46aa."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L2-008. Một quần thể có 1375 cây AA, 750 cây Aa, 375 cây aa. Kết luận nào sau đây không đúng?",
                options: [
                    "A. Sau một thế hệ giao phối tự do, kiểu gene Aa có tỉ lệ 0,48.",
                    "B. Allele A có tần số 0,7; allele a có tần số 0,3.",
                    "C. Quần thể chưa cân bằng về mặt di truyền.",
                    "D. Sau 1 thế hệ giao phối tự do, quần thể sẽ đạt cân bằng di truyền."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L2-009. Một loài sinh vật ngẫu phối, xét một gene có hai allele nằm trên NST thường, allele A trội hoàn toàn so với allele a. Bốn quần thể của loài này đều ở trạng thái cân bằng di truyền và có tỉ lệ các cá thể mang kiểu hình trội như sau: QT I: 96%; QT II: 64%; QT III: 75%; QT IV: 84%. Phát biểu nào sau đây sai?",
                options: [
                    "A. Quần thể II có tần số kiểu gene AA là 0,16.",
                    "B. Quần thể I có tần số kiểu gene Aa là 0,32.",
                    "C. Quần thể III có thành phần kiểu gene 0.25AA : 0,5Aa : 0,25aa.",
                    "D. Trong bốn quần thể trên, quần thể IV có tần số kiểu gene Aa lớn nhất."
                ],
                answer: 3
            },
            {
                question: "MB-DTQT-L2-010. Nghiên cứu cấu trúc di truyền của một quần thể động vật người ta phát hiện có 1 gene gồm 2 allele (A và a); 2 allele này đã tạo ra 5 kiểu gene khác nhau trong quần thể. Có thể kết luận gene này nằm ở trên:",
                options: [
                    "A. Nhiễm sắc thể X và Y.",
                    "B. Nhiễm sắc thể thường.",
                    "C. Nhiễm sắc thể X.",
                    "D. Nhiễm sắc thể Y."
                ],
                answer: 2
            },
           
           
            
            // Thêm các câu hỏi Di truyền quần thể level 2 khác...
        ],
        level3: [
            {
                question: "MB-DTQT-L3-001. Ở một loài thực vật, A quy định hoa đỏ trội hoàn toàn so với a quy định hoa trắng. Thế hệ xuất phát của một quần thể tự phối có tỉ lệ kiểu gene là 0,7Aa: 0,3aa. Tỉ lệ kiểu hình ở thế hệ F3 là:",
                options: [
                    "A. 60,625% cây hoa đỏ: 39,375% cây hoa trắng.",
                    "B. 39,375% cây hoa đỏ: 60,625% cây hoa trắng.",
                    "C. 62,5% cây hoa đỏ: 37,5% cây hoa trắng.",
                    "D. 37,5% cây hoa đỏ: 62,5% cây hoa trắng."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L3-002. Một quần thể có cấu trúc như sau P:17,34% AA; 59,32% Aa; 23,34%aa. Sau 3 thế hệ giao phối ngẫu nhiên thì kết quả nào sau đây không xuất hiện ở F3?",
                options: [
                    "A. Tần số allele A giảm và tần số allele a tăng lên so với P.",
                    "B. Tần số tương đối của A/a = 0,47/0,53.",
                    "C. Tỉ lệ kiểu gene 22,09% AA ; 49,82% Aa ; 28,09% aa.",
                    "D. Tỉ lệ thể dị hợp giảm và tỉ lệ thể đồng hợp tăng so với P."
                ],
                answer: 0
            },
            {
                question: "MB-DTQT-L3-003. Cấu trúc di truyền của quần thể ban đầu: 0,2 AA + 0,6 Aa + 0,2 aa = 1. Sau 2 thế hệ tự phối thì cấu trúc di truyền của quần thể sẽ là:",
                options: [
                    "A. 0,25 AA + 0,50Aa + 0,25 aa = 1.",
                    "B. 0,425 AA + 0,15 Aa + 0,425 aa = 1.",
                    "C. 0,35AA + 0,30 Aa + 0,35 aa = 1.",
                    "D. 0,4625 AA + 0,075 Aa + 0,4625 aa = 1."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L3-004. Một quần thể (P) có thành phần kiểu gene là 0,4 AA : 0,4 Aa : 0,2 aa, sau 2 thế hệ tự thụ phấn, kiểu gene dị hợp ở F2 chiếm tỉ lệ bao nhiêu?",
                options: ["A. 0,1.", "B. 0,2.", "C. 0,48.", "D. 0,32."],
                answer: 0
            },
            {
                question: "MB-DTQT-L3-005. Trong một quần thể thực vật giao phấn, xét một locus có 2 allele, allele A quy định thân cao trội hoàn toàn so với allele a quy định thân thấp. Quần thể ban đầu (P) có kiểu hình thân thấp chiếm tỉ lệ 25%. Sau một số thế hệ ngẫu phối, kiểu hình thân thấp ở thế hệ con chiếm tỉ lệ 16%. Thành phần kiểu gene của quần thể P là:",
                options: [
                    "A. 0,3 AA : 0,45 Aa : 0,25 aa.",
                    "B. 0,45 AA : 0,3 Aa : 0,25 aa.",
                    "C. 0,25 AA : 0,5 Aa : 0,25 aa.",
                    "D. 0,1 AA : 0,65 Aa : 0,25 aa."
                ],
                answer: 1
            },
            {
                question: "MB-DTQT-L3-006. Một quần thể ở thể hệ xuất phát (P) có thành phần kiểu gene ở giới đực và giới cái như nhau. Qua ngẫu phối thu được F1 có 1% cá thể thực quản hẹp (aa). Tỉ lệ cá thể dị hợp so với đồng hợp trong P là:",
                options: ["A. 1/5.", "B. 1/4.", "C. 4/5.", "D. 2/5."],
                answer: 1
            },
            {
                question: "MB-DTQT-L3-007. Một quần thể thực vật tự thụ phấn gồm 80 cây có kiểu gene AA, 20 cây có kiểu gene aa, 100 cây có kiểu gene Aa. Tần số allele A và a lần lượt là:",
                options: [
                    "A. 0,6 và 0,4.",
                    "B. 0,8 và 0,2.",
                    "C. 0,6525 và 0,3475.",
                    "D. 0,65 và 0,35."
                ],
                answer: 3
            },
            {
                question: "MB-DTQT-L3-008. Một quần thể ở thế hệ xuất phát có cấu trúc di truyền 0,1 AA: 0,4 Aa : 0,5 aa. Tỉ lệ kiểu gene dị hợp sau 3 thế hệ ngẫu phối là:",
                options: ["A. 0,9.", "B. 0,125.", "C. 0,42.", "D. 0,25."],
                answer: 2
            },
            {
                question: "MB-DTQT-L3-009. Một quần thể có 60 cá thể AA; 40 cá thể Aa; 100 cá thể aa. Cấu trúc di truyền của quần thể sau một lần ngẫu phối là:",
                options: [
                    "A. 0,16 AA: 0,36 Aa: 0,48 aa.",
                    "B. 0,48 AA: 0,16 Aa: 0,36 aa.",
                    "C. 0,36 AA: 0,48 Aa: 0,16 aa.",
                    "D. 0,16 AA: 0,48 Aa: 0,36 aa."
                ],
                answer: 3
            },
            {
                question: "MB-DTQT-L3-010. Cho cây hoa đỏ P tự thụ phấn, thu được F1 gồm 56,25% cây hoa đỏ: 37,5% cây hoa hồng và 6,25% cây hoa trắng. Cho tất cả các cây hoa hồng ở F1 giao phấn với nhau, thu được F2. Tỉ lệ kiểu hình ở F2 là:",
                options: [
                    "A. 4 cây hoa đỏ : 6 cây hoa hồng : 1 cây hoa trắng.",
                    "B. 4 cây hoa đỏ : 8 cây hoa hồng : 1 cây hoa trắng.",
                    "C. 2 cây hoa đỏ : 4 cây hoa hồng : 1 cây hoa trắng.",
                    "D. 2 cây hoa đỏ : 6 cây hoa hồng : 1 cây hoa trắng."
                ],
                answer: 3
            },

            // Thêm các câu hỏi Di truyền quần thể level 3 khác...
        ]
    },
    mcBCCCTH: {
        level1: [
            {
                question: "MB-BC&CCTH-L1-001. Sự thay đổi tần số allele của quần thể do tác động của các yếu tố ngẫu nhiên như lũ lụt, hạn hán làm giảm mạnh số lượng cá thể của quần thể được gọi là",

                options: ["A. đột biến.", "B. chọn lọc tự nhiên.", "C. dòng gene.", "D. phiêu bạt di truyền."],
                answer: 3
            },
            {
                question: "MB-BC&CCTH-L1-002. Một quần thể côn trùng sống trên loài cây M. Do quần thể phát triển mạnh, một số cá thể phát tán sang loài cây N. Những cá thể nào có sẵn các gene đột biến giúp chúng khai thác được thức ăn ở loài cây N thì sống sót và sinh sản, hình thành nên quần thể mới. Hai quần thể này sống trong cùng một khu vực địa lí nhưng ở hai ổ sinh thái khác nhau. Qua thời gian, các nhân tố tiến hóa tác động làm phân hóa vốn gene của hai quần thể tới mức làm xuất hiện cách li sinh sản và hình thành nên loài mới. Đây là ví dụ về hình thành loài mới:",

                options: ["A. bằng cách li địa lí.", "B. bằng cách li sinh thái.", "C. bằng tự đa bội.", "D. bằng lai xa và đa bội hoá."],
                answer: 1
            },
            {
                question: "MB-BC&CCTH-L1-003. Cặp cơ quan nào sau đây ở các loài sinh vật là cơ quan tương tự?",

                options: ["A. Cánh chim và cánh bướm.", "B. Ruột thừa ở người và manh tràng ở thú ăn thực vật.", "C. Tuyến nọc độc của rắn và tuyến nước bọt của động vật.", "D. Chi trước của mèo và tay người."],
                answer: 0,
            },
            {
                question: "MB-BC&CCTH-L1-004. Khi nói về quá trình hình thành loài mới theo quan niệm của thuyết tiến hóa hiện đại, phát biểu nào sau đây sai?",

                options: ["A. Hình thành loài là quá trình tích luỹ các biến đổi đồng loạt do tác động trực tiếp của ngoại cảnh.",
                    "B. Hình thành loài bằng con đường lai xa và đa bội hóa xảy ra phổ biến ở thực vật.",
                    "C. Hình thành loài bằng con đường sinh thái thường gặp ở động vật ít di chuyển xa.",
                    "D. Hình thành loài bằng con đường cách li địa lí thường xảy ra một cách chậm chạp."],
                answer: 0,
            },
            {
                question: "MB-BC&CCTH-L1-005. Hóa thạch là di tích của?",

                options: ["A. Sinh vật.",
                    "B. Công trình kiến trúc.",
                    "C. Núi lửa.",
                    "D. Đá."],
                answer: 0,
            },
            {
                question: "MB-BC&CCTH-L1-006. Để xác định tuổi của các lớp đất và các hoá thạch tương đối mới người ta căn cứ vào",
                options: ["A. Lượng sản phẩn phân rã của các nguyên tố phóng xạ.",
                    "B. Đánh giá trực tiếp thời gian phân rã của nguyên tố uran (Ur).",
                    "C. Lượng sản phẩm phân rã của các nguyên tố cacbon phóng xạ.",
                    "D. Đặc điểm địa chất của lớp đất."],
                
                answer: 2,
            },
            {
                question: "MB-BC&CCTH-L1-007. Trong tiến hóa, các cơ quan tương tự có ý nghĩa phản ánh",
                options: ["A. sự tiến hóa phân li.",
                    "B. sự tiến hóa đồng quy.",
                    "C. sự tiến hóa song hành.",
                    "D. nguồn gốc chung giữa các loài."],
                
                answer: 1,
            },
            // Thêm các câu hỏi BC và CCTH level 1 khác...
        ],
        level2: [
            {
                question: "MB-BC&CCTH-L2-001. Theo thuyết tiến hóa tổng hợp hiện đại, chọn lọc tự nhiên dẫn tới hiện tượng",

                options: ["A. Tạo ra các kiểu gene thích nghi.", "B. Tạo ra các allele mới.", "C. Hình thành các kiểu hình mới.", "D. Hình thành quần thể thích nghi."],
                answer: 3
            },
            {
                "question": "MB-BC&CCTH-L2-002. Ở một loài côn trùng, đột biến gene A thành a. Thể đột biến có mắt lồi hơn bình thường, giúp chúng kiếm ăn tốt hơn và tăng khả năng chống chịu với điều kiện bất lợi của môi trường nhưng thể đột biến lại mất đi khả năng sinh sản. Theo quan điểm của tiến hoá hiện đại, ý nghĩa của đột biến trên là",
                "options": [
                    "A. có lợi cho sinh vật và tiến hoá.",
                    "B. có hại cho sinh vật và tiến hoá.",
                    "C. có hại cho sinh vật và vô nghĩa với tiến hoá.",
                    "D. có lợi cho sinh vật và vô nghĩa với tiến hoá."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-BC&CCTH-L2-003. Tốc độ chọn lọc tự nhiên của quần thể vi khuẩn nhanh hơn quần thể sinh vật nhân thực vì:",
                "options": [
                    "A. quần thể vi khuẩn có tốc độ sinh sản nhanh và kiểu gene đơn bội.",
                    "B. quần thể vi khuẩn có tốc độ sinh sản nhanh và kiểu gene lưỡng bội.",
                    "C. quần thể vi khuẩn có tốc độ sinh sản nhanh và kiểu gene toàn gene trội.",
                    "D. quần thể vi khuẩn có tốc độ sinh sản nhanh và kiểu gene toàn gene lặn."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-BC&CCTH-L2-004. Ý nghĩa của hoá thạch là",
                "options": [
                    "A. bằng chứng trực tiếp về lịch sử phát triển của sinh giới.",
                    "B. bằng chứng gián tiếp về lịch sử phát triển của sinh giới.",
                    "C. xác định tuổi của hoá thạch có thể xác định tuổi của quả đất.",
                    "D. xác định tuổi của hoá thạch bằng đồng vị phóng xạ."
                ],
                "answer": 0,

            },
            {
                "question": "MB-BC&CCTH-L2-005. Ở người, đâu <b>không</b> phải là một cấu trúc thoái hóa?",
                "options": [
                    "A. Răng khôn.",
                    "B. Tóc.",
                    "C. Ruột thừa.",
                    "D. Xương cụt."
                ],
                "answer": 1,

            },
            // Thêm các câu hỏi bằng chứng và cơ chế tiến hóa level 2 khác...
        ],

        level3: [
            {
                question: "MB-BC&CCTH-L3-001. Loài cỏ <em>Spartina alternaflora</em> (2n = 62) giao phấn với loài cỏ <em>S. maritima</em> (2n = 60) tạo ra cây lai (61 NST). Từ cây lai này đã hình thành nên loài mới là <em>S. anglica</em> hữu thụ. Nhận định nào sau đây là đúng?",
                options: ["A. Số NST trong tế bào soma của loài <em>S.anglica</em> là 61.", "B. Tế bào soma của cây lai chứa các cặp NST tương đồng.", "C. Loài <em>S.alternaflora</em> và loài <em>S.maritima</em> không có sự cách li sinh sản sau hợp tử.", "D. Loài <em>S.anglica</em> có thể được hình thành bằng con đường lai xa và đa bội hóa."],
                answer: 3
            },

            // Thêm các câu hỏi bằng chứng và cơ chế tiến hóa level 3 khác...
        ]
    },
    mcTHHD: {
        level1: [
            {
                "question": "MB-HTTHTHHĐ-L1-001. Nhân tố tiến hóa nào sau đây ngăn cản hai quần thể cùng loài hình thành loài mới?",
                "options": [
                    "A. Đột biến.",
                    "B. Chọn lọc tự nhiên.",
                    "C. Dòng gene.",
                    "D. Giao phối có lựa chọn."
                ],
                "answer": 2,
                "image": null
            },
           
            // Thêm các câu hỏi học thuyết tiến hóa tổng hợp hiện đại level 1 khác...
        ],
        level2: [

            {
                "question": "MB-HTTHTHHĐ-L2-001. Một quần thể có thành phần kiểu gene biến đổi qua các thế hệ như trong bảng. Quần thể đang chịu tác động của nhân tố tiến hóa nào sau đây?",
                image: "https://nhantri.top/media/Grade12/gpknn.png",
                "options": [
                    "A. Giao phối không ngẫu nhiên.",
                    "B. Dòng gene.",
                    "C. Phiên bạt di truyền.",
                    "D. Chọn lọc tự nhiên."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-HTTHTHHĐ-L2-002. Nhân tố nào có vai trò tăng cường sự phân hóa trong nội bộ quần thể làm cho quần thể nhanh chóng phân li thành các quần thể mới?",
                
                "options": [
                    "A. Quá trình đột biến.",
                    "B. Quá trình giao phối.",
                    "C. Quá trình chọn lọc tự nhiên.",
                    "D. Các cơ chế cách li."
                ],
                "answer": 3,
               
            },
            // Thêm các câu hỏi học thuyết tiến hóa tổng hợp hiện đại level 2 khác...
        ],
        level3: [

            {
                "question": "MB-HTTHTHHĐ-L3-001. Sơ đồ thể hiện kích thước quần thể thỏ ở hai khu vực khác nhau. Nhận định nào dưới đây đúng về hai quần thể thỏ nêu trên?",
                "image": "https://nhantri.top/media/Grade12/ttgioihan.png",
                "options": [
                    "A. Cả quần thể A và B đều tăng trưởng theo tiềm năng sinh học.",
                    "B. Cả quần thể A và B đều tăng trưởng trong điều kiện môi trường giới hạn.",
                    "C. Chỉ có quần thể A tăng trưởng theo tiềm năng sinh học.",
                    "D. Chỉ có quần thể A tăng trưởng trong điều kiện môi trường có giới hạn."
                ],
                "answer": 1,
                
            },
            {
                "question": "MB-HTTHTHHĐ-L3-002. Sơ đồ thể hiện kích thước quần thể thỏ ở hai khu vực khác nhau. Ở năm thứ 15, mật độ trung bình của quần thể thỏ ở khu vực A và B lần lượt là 56 con/ha và 65 con/ha. Diện tích khu vực phân bố của quần thể A và B lần lượt là:",
                "image": "https://nhantri.top/media/Grade12/ttgioihan.png",
                "options": [
                    "A. 261, 5 ha và 492, 3 ha.",
                    "B. 492, 3 ha và 261, 5 ha.",
                    "C. 262, 5 ha và 571, 4 ha.",
                    "D. 571, 4 ha và 262, 5 ha."
                ],
                "answer": 3,

            },
            // Thêm các câu hỏi học thuyết tiến hóa tổng hợp hiện đại level 3 khác...
        ]
    },
    mcSPSCL: {
        level1: [
            {
                "question": "MB-SPSCL-L1-001. Theo Darwin, hình thành loài mới diễn ra theo con đường nào?",
                "options": [
                    "A. Cách li địa lí.",
                    "B. Cách li sinh thái.",
                    "C. Chọn lọc tự nhiên.",
                    "D. Phân li tính trạng."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-002. Sinh vật đầu tiên xuất hiện trên Trái Đất thực hiện trao đổi chất theo phương thức:",
                "options": [
                    "A. tự dưỡng quang hợp.",
                    "B. dị dưỡng kí sinh. ",
                    "C. dị dưỡng hoại sinh.",
                    "D. tự dưỡng hóa tổng hợp."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-003. Trong lịch sử phát triển của sinh giới qua các đại địa chất, cây hạt trần ngự trị ở đại nào sau đây?",
                "options": [
                    "A. Đại Trung sinh.",
                    "B. Đại Cổ sinh.",
                    "C. Đại Nguyên sinh.",
                    "D. Đại Tân sinh."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-004. Trong lịch sử phát sinh và phát triển của sự sống trên Trái Đất, loài người xuất hiện ở:",
                "options": [
                    "A. đại Tân sinh.",
                    "B. đại Trung sinh.",
                    "C. đại Cổ sinh.",
                    "D.đại Nguyên sinh."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-005. Trình tự các giai đoạn phát sinh và phát triển sự sống trên Trái Đất là",
                "options": [
                    "A. tiến hóa hóa học → tiến hóa sinh học → tiến hóa tiền sinh học.",
                    "B. tiến hóa hóa học → tiến hóa tiền sinh học → tiến hóa sinh học.",
                    "C. tiến hóa tiền sinh học → tiến hóa sinh học → tiến hóa hóa học.",
                    "D. tiến hóa sinh học → tiến hóa tiền sinh học → tiến hóa hóa học."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-006. Trong quá trình phát sinh và phát triển sự sống trên Trái Đất, hóa thạch nhân sơ cổ nhất xuất hiện ở:",
                "options": [
                    "A. đại Nguyên sinh.",
                    "B. đại Cổ sinh.",
                    "C. đại Trung sinh.",
                    "D. đại Thái cổ."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-007. Trong lịch sử phát triển sự sống trên Trái Đất, dương xỉ phát triển mạnh và bò sát phát sinh ở kỉ:",
                "options": [
                    "A. Carbon.",
                    "B. Kreta.",
                    "C. Ocdovic.",
                    "D. Pecmi."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-008. Tiến hóa hóa học là quá trình:",
                "options": [
                    "A. hình thành các hạt coacervate.",
                    "B.xuất hiện cơ chế tự sao.",
                    "C.xuất hiện các enzyme.",
                    "D.tổng hợp các chất hữu cơ từ các chất vô cơ theo phương thức hoá học."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-009. Năm 1953, Miller và Urey đã làm thí nghiệm để kiểm tra giả thuyết các hợp chất hữu cơ đơn giản đầu tiên trên trái đất có thể được tổng hợp bằng con đường hóa học từ hợp chất vô cơ và nguồn năng lượng sấm sét, núi lửa, tia tử ngoại, chất nào sau đây không có trong thí nghiệm của Miller và Urey?",
                "options": [
                    "A.Phosphorus.",
                    "B.Nitrogen.",
                    "C.Hydrogen.",
                    "D.Carbon."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-010. Trong khí quyển nguyên thủy của Trái đất chưa có:",
                "options": [
                    "A. CO.",
                    "B. H<sub>2</sub>O.",
                    "C. Oxygen.",
                    "D. NH<sub>3</sub>."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-011. Nguồn năng lượng dùng để tổng hợp các phân tử hữu cơ hình thành sự sống là",
                "options": [
                    "A. Năng lượng hóa học.",
                    "B. ATP.",
                    "C. Năng lượng sinh học.",
                    "D. Năng lượng tự nhiên."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-012. Quá trình nào đã tạo nên các đại phân tử hữu cơ từ các chất hữu cơ đơn giản hòa tan trong các đại dương nguyên thủy?",
                "options": [
                    "A. Nhân đôi.",
                    "B. Trùng phân.",
                    "C. Phiên mã.",
                    "D. Thủy phân."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-013. Trong quá trình phát sinh sự sống, tiến hóa tiền sinh học là quá trình:",
                "options": [
                    "A. Hình thành các tế bào sơ khai đầu tiên từ các đại phân tử hữu cơ.",
                    "B. Tổng hợp các hợp chất hữu cơ đơn giản từ các chất vô cơ.",
                    "C. Trùng phân tạo các đại phân tử hữu cơ.",
                    "D. Hình thành các loài sinh vật từ tế bào đầu tiên."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-014. Trong tiến hoá tiền sinh học, những mầm sống đầu tiên xuất hiện ở:",
                "options": [
                    "A. trong ao, hồ nước ngọt.",
                    "B. trong đại dương nguyên thuỷ.",
                    "C. khí quyển nguyên thuỷ.",
                    "D. trong lòng đất."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-015. Cơ sở để chia lịch sử của quả đất thành các đại, các kỉ?",
                "options": [
                    "A. Thời gian hình thành và phát triển của quả đất.",
                    "B. Lịch sử phát triển của thế giới sinh vật qua các thời kì.",
                    "C. Những biến đổi lớn về địa chất, khí hậu của trái đất và các hóa thạch.",
                    "D. Sự hình thành hóa thạch và khoáng sản trong lòng đất."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-016. Dựa vào những biến đổi về địa chất, khí hậu, sinh vật. Người ta chia lịch sử trái đất thành các đại theo thời gian từ trước đên nay là",
                "options": [
                    "A. đại thái cổ, đại nguyên sinh, đại cổ sinh, đại trung sinh, đại tân sinh.",
                    "B. đại thái cổ, đại cổ sinh, đại trung sinh đại nguyên sinh, đại tân sinh.",
                    "C. đại cổ sinh, đại nguyên sinh, đại thái cổ, đại trung sinh, đại tân sinh.",
                    "D. đại thái cổ, đại nguyên sinh, đại trung sinh, đại cổ sinh, đại tân sinh."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-017. Cây có mạch và động vật lên cạn xuất hiện ở kỉ nào?",
                "options": [
                    "A. Kỉ Ordovician.",
                    "B. Kỉ Silurian.",
                    "C. Kỉ Cambrian.",
                    "D. Kỉ Permi."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-018. Sự xuất hiện của thực vật có hoa diễn ra vào:",
                "options": [
                    "A. Đại thái cổ.",
                    "B. Đại cổ sinh.",
                    "C. Đại trung sinh.",
                    "D. Đại tân sinh."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-019. Đặc điểm nổi bật của đại trung sinh là gì?",
                "options": [
                    "A. Sự phát triển ưu thế của hạt trần và bò sát.",
                    "B. Sự xuất hiện thực vật hạt kín.",
                    "C. Sự xuất hiện bò sát bay và chim.",
                    "D. Sự xuất hiện thú có nhau thai."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-020. Trong lịch sử phát triển của sinh giới qua các đại địa chất, ở đại nào sau đây phát sinh các nhóm linh trưởng?",
                "options": [
                    "A. Đại Cổ sinh.",
                    "B. Đại Nguyên sinh.",
                    "C. Đại Tân sinh.",
                    "D. Đại Trung sinh."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L1-021. Sau khi tách ra từ tổ tiên chung, nhánh vượn người cổ đại đã phân hoá thành nhiều loài khác nhau, trong số đó có một nhánh tiến hoá hình thành chi Homo. Loài xuất hiện đầu tiên trong chi Homo là",
                "options": [
                    "A. <em>Homo habilis.<em/>",
                    "B. <em>Homo sapiens.<em/>",
                    "C. <em>Homo erectus.<em/>",
                    "D. <em>Homo neanderthallelesis.<em/>"
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [

            {
                "question": "MB-SPSCL-L2-001. Loài người có cột sống hình chữ S và dáng đứng thẳng trong khi tổ tiên của loài người lại có cột sống hình chữ C và dáng đi khom. Sự khác biệt này chủ yếu là do:",
                "options": [
                    "A. tác động của chọn lọc tự nhiên dựa trên những đột biến sẵn có.",
                    "B. quá trình tự rèn luyện của cá thể.",
                    "C. loài người có quá trình lao động và tập thể dục.",
                    "D. sự phát triển của não bộ và ý thức."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-002. Kết quả thí nghiệm của Milơ và Urây (1953) đã chứng minh:",
                "options": [
                    "A. Các chất hữu cơ được hình thành phổ biến từ con đường sinh học.",
                    "B. Các chất hữu cơ được hình thành trong khí quyển nguyên thủy nhờ năng lượng sinh học.",
                    "C. Các chất hữu cơ được hình thành từ chất vô cơ trong điều kiện khí quyển nguyên thủy của trái đất.",
                    "D. Ngày nay các chất hữu cơ vẫn được hình thành phổ biến theo con đường tổng hợp hóa học trong tự nhiên."
                ],
                "answer": 2,
                "image": null
            },

            {
                "question": "MB-SPSCL-L2-003. Nhiều thí nghiệm đã chứng minh rằng các đơn phân nucleotide có thể tự lắp ghép thành những đoạn RNA ngắn, có thể nhân đôi mà không cần đến sự xúc tác của enzyme. Điều này có ý nghĩa gì?",
                "options": [
                    "A. Cơ thể sống hình thành từ sự tương tác giữa protein và nucleic acid.",
                    "B. Sự xuất hiện các protein và nucleic acid chưa phải là xuất hiện sự sống.",
                    "C. Trong quá trình tiến hóa, RNA xuất hiện trước DNA và protein.",
                    "D. Protein có thể tự tổng hợp mà không cần cơ chế phiên mã và dịch mã."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-004. Hiện nay, người ta giả thiết rằng trong quá trình phát sinh sự sống trên Trái đất, phân tử tự nhân đôi xuất hiện đầu tiên có thể là",
                "options": [
                    "A. Lipid.",
                    "B. DNA.",
                    "C. Protein.",
                    "D. RNA."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-005. Về quá trình phát sinh sự sống trên trái đất, nhận định nào dưới dây KHÔNG chính xác?",
                "options": [
                    "A. Chọn lọc tự nhiên chỉ tác động ở giai đoạn tiến hóa tiền sinh học tạo nên các tế bào sơ khai vả sau đó hình thành tế bào sống đầu tiên.",
                    "B. Sự xuất hiện sự sống gắn liền với sự xuất hiện phức hợp đại phân tử protein và nucleic acid có khả năng tự nhân đôi và dịch mã.",
                    "C. Nhiều bằng chứng thực nghiệm thu được đã ủng hộ quan điểm cho rằng các chất hữu cơ đầu tiên trên Trái đất đuợc hình thành bằng con đường tổng hợp hoá học.",
                    "D. Một số bằng chứng khoa học cho rằng vật chất di truyền đầu tiên có lẽ là RNA mà không phải là DNA."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-006. Khi nói về quá trình phát sinh sự sống, phát biểu nào sau đây chính xác?",
                "options": [
                    "A. Khi so sánh bằng chứng sinh học phân tử giữa người và vượn người cho phép ta kết luận người có nguồn gốc từ tinh tinh.",
                    "B. Để xác định tuổi của hóa thạch các nhà khoa học chỉ dùng phương pháp xác định tuổi địa tầng.",
                    "C. Sự di chuyển các lục địa có ảnh hưởng lớn đối với sự hình thành và diệt vong của các loài sinh vật.",
                    "D. Các loài động, thực vật lên cạn đầu tiên xuất hiện ở đại Nguyên Sinh."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-007. Đâu là kết luận không đúng về quá trình tiến hóa của sự sống trên trái đất?",
                "options": [
                    "A. Tiến hóa tiền sinh học là giai đoạn hình thành các tế  bào sơ khai và những tế bào sống đầu tiên.",
                    "B. Tiến hóa tiền sinh học là giai đoạn hình thành nên các tế bào sơ khai sau đó là cơ thể sinh vật nhân sơ đầu tiên.",
                    "C. Tiến hóa sinh học là giai đoạn tiến hóa từ những tế bào đầu tiên hình thành nên các loài sinh vật như ngày nay.",
                    "D. Tiến hóa hóa học là giai đoạn hình thành nên các hợp chất hữu cơ từ các chất vô cơ."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-008. Phát biểu nào sau đây là đúng khi nói về sự phát sinh sự sống trên trái đất?",
                "options": [
                    "A. Trong tiến hóa tiền sinh học có sự tạo ra các hợp chất hữu cơ cho các sinh vật dị dưỡng.",
                    "B. Trong giai đoạn tiến hóa hóa học các hợp chất hữu cơ đơn giản và phức tạp được hình thành nhờ  các nguồn năng lượng tự nhiên.",
                    "C. Kết quả quan trọng của giai đoạn tiến hóa sinh học là hình thành dạng sống đơn giản đầu tiên.",
                    "D. Những mầm sống đầu tiên xuất hiện ở trong khí quyển nguyên thủy."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-009. Phát biểu nào sau đây không đúng khi nói về sự phát sinh sự sống?",
                "options": [
                    "A. Sự hình thành các đại phân tử hữu cơ diễn ra trong môi trường nước.",
                    "B. Sự hình thành các hợp chất hữu cơ đơn giản từ các chất vô cơ diễn ra trong môi trường khí quyển nguyên thủy.",
                    "C. Sự hoàn thiện cơ chế nhân đôi, dịch mã diễn ra khi đã hình thành lớp màng bán thấm.",
                    "D. Polysome là những giọt có màng bọc lipid và có đặc tính sơ khai của sự sống."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-010. Trong quá trình phát sinh sự sống, bước quan trọng để dạng sống sản sinh ra những dạng giống chúng, di truyền đặc điểm cho thế hệ sau là sự:",
                "options": [
                    "A. hình thành các đại phân tử.",
                    "B. xuất hiện cơ chế tự sao chép.",
                    "C. hình thành lớp màng.",
                    "D. xuất hiện các enzyme."
                ],
                "answer": 1,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-011. Cho một số sự kiện trong quá trình phát sinh các loài sinh vật trên Trái Đất: <br/>- Kỉ Cambrian: xuất hiện động vật có dây sống, phân hóa tảo. <br/>- Kỉ Ordovician: động vật không xương sống ngự trị, thực vật lên cạn. <br/>- Triassic: xuất hiện khủng long và động vật có vú, thực vật hạt trần và dương xỉ ngự trị. <br/>- Jurassic: khủng long ngự trị, thực vật có hoa xuất hiện. <br/>- Tertiary: phát sinh các nhóm linh trưởng, thực vật có hoa ngự trị. <br/>Nhận định nào sau đây là đúng về quá trình phát sinh của động vật?",
                "options": [
                    "A. Động vật không xương sống xuất hiện trước kỉ Cambrian.",
                    "B. Động vật không xương sống xuất hiện ở kỉ Ordovician.",
                    "C. Động vật có xương sống xuất hiện trước động vât không xương sống.",
                    "D. Động vật không xương sống đã hoàn toàn tuyệt diệt."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-SPSCL-L2-012. Cho một số sự kiện trong quá trình phát sinh các loài sinh vật trên Trái Đất: <br/>- Kỉ Cambrian: xuất hiện động vật có dây sống, phân hóa tảo. <br/>- Kỉ Ordovician: động vật không xương sống ngự trị, thực vật lên cạn. <br/>- Triassic: xuất hiện khủng long và động vật có vú, thực vật hạt trần và dương xỉ ngự trị. <br/>- Jurassic: khủng long ngự trị, thực vật có hoa xuất hiện. <br/>- Tertiary: phát sinh các nhóm linh trưởng, thực vật có hoa ngự trị. <br/>Nhận định nào sau đây là <b>sai</b> về quá trình phát sinh của thực vật?",
                "options": [
                    "A. Không có loài thực vật nào bị tuyệt chủng.",
                    "B. Thực vật hạt kín tiến hóa hơn so với thực vật hạt trần.",
                    "C. Hướng tiến hóa của thực vật là từ nước lên cạn.",
                    "D. Thực vật hạt trần vẫn còn tồn tại đến ngày nay."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi Sự phát sinh chủng loại level 2 khác...
        ],
        level3: [

            {
                "question": "MB-SPSCL-L3-002. Khi phân tích sơ đồ phát sinh chủng loại về một số tính trạng của các nhóm động vật có xương sống ở hình dưới đây, nhận xét nào sau đây đúng? ",
                "options": [
                    "A. Cả và ếch có quan hệ họ hàng gần gũi hơn so với quan hệ họ hàng giữa ếch và thằn lằn. ",
                    "B. Cả ba loài thằn lằn, ếch và thỏ đều sở hữu đặc điểm trứng có màng ối. ",
                    "C. Cá và ếch đều sở hữu đặc điểm có các chi. ",
                    "D. Thỏ và thần lằn có quan hệ họ hàng gần gũi hơn so với quan hệ họ hàng giữa ếch và thần lằn."
                ],
                "answer": 3,
                "image": "https://nhantri.top/media/Grade12/phatsinhcl.png"
            },
            {
                question: "MB-SPSCL-L3-003. Trong điều kiện của Trái Đất hiện nay, nếu các đại phân tử hữu cơ được hình thành trong tự nhiên thì từ các chất này có thể tiến hóa hình thành nên các tế bào sơ khai được không? Vì sao?",
                options: ["A. Không, vì điều kiện của Trái Đất hiện nay không có đủ phân tử hữu cơ trong đại dương.",
                    "B. Không, vì điều kiện của Trái Đất hiện nay chất hữu cơ sẽ bị phân hủy bởi oxygen tự do hoặc các vi sinh vật.",
                    "C. Không, vì điều kiện của Trái Đất hiện nay không có đủ năng lượng để tổng hợp các chất hữu cơ.",
                    "D. Không, vì điều kiện của Trái Đất hiện nay không có đủ các chất vô cơ như thời nguyên thủy."],
                answer: 1,
            },
            {
                question: "MB-SPSCL-L3-004. Coacervate được hình thành từ:",
                options: ["A. Polysaccharide và protein.",
                    "B. Hỗn hợp hai dung dịch keo khác nhau đông tụ thành.",
                    "C. Các đại phân tử hữu cơ hoà tan trong nước tạo thành dung dịch keo.",
                    "D. Một số đại phân tử có dấu hiệu sơ khai của sự sống."],
                answer: 2,
            },
            // Thêm các câu hỏi sự phát sinh chủng loại level 3 khác...
        ]
    },
    mcSTHCT: {
        level1: [
            {
                "question": "MB-STHCT-L1-001. Loại môi trường sống của tôm thẻ chân trắng là:",
                "options": [
                    "A. nước.",
                    "B. sinh vật.",
                    "C. trên cạn.",
                    "D. đất."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-002. Sục oxygene trong hệ sinh thái bể cá cảnh có vai trò gì?",
                "options": [
                    "A. Cung cấp O₂ cho các sinh vật hô hấp.",
                    "B. Cung cấp CO₂ cho các thực vật quang hợp.",
                    "C. Cung cấp O₂ cho các sinh vật quang hợp.",
                    "D. Cung cấp CO₂ cho các sinh vật hô hấp."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-003. Một loài cá chỉ sống được trong khoảng nhiệt độ từ 5°C đến 42°C. Đối với loài cá này, khoảng nhiệt độ từ 5°C đến 42°C được gọi là",
                "options": [
                    "A. giới hạn dưới về nhiệt độ.",
                    "B. khoảng chống chịu.",
                    "C. giới hạn sinh thái về nhiệt độ.",
                    "D. khoảng thuận lợi."
                ],
                "answer": 2,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-004. Môi trường sống của sinh vật là nơi sinh sống của sinh vật bao gồm:",
                "options": [
                    "A. tất cả các nhân tố vô sinh bao quanh sinh vật.",
                    "B. tất cả các nhân tố hữu sinh bao quanh sinh vật.",
                    "C. tất cả các nhân tố vô sinh và hữu sinh bao quanh sinh vật.",
                    "D. tất cả các yếu tố bao quanh sinh vật có tác động trực tiếp, gián tiếp hoặc tác động qua lại với sinh vật làm ảnh hưởng tới sự tồn tại, sinh trưởng, phát triển của sinh vật."
                ],
                "answer": 3,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-005. Các nhân tố sinh thái là",
                "options": [
                    "A. tất cả các yếu tố xung quanh sinh vật, ảnh hưởng trực tiếp hoặc gián tiếp tới đời sống của sinh vật.",
                    "B. tất cả các nhân tố vật lí và hoá học của môi trường xung quanh sinh vật.",
                    "C. những mối quan hệ giữa một sinh vật(hoặc nhóm sinh vật) này với một sinh vật(hoặc nhóm sinh vật) khác sống xung quanh.",
                    "D. những tác động của con người tới môi trường và sinh vật."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-006. Giới hạn sinh thái là",
                "options": [
                    "A. khoảng giá trị xác định của một nhân tố sinh thái trong khoảng đó sinh vật có thể tồn tại và phát triển ổn định theo thời gian.",
                    "B. là khoảng của các nhân tố sinh thái ở mức độ phù hợp đảm bảo cho sinh vật thực hiện chức năng sống tốt nhất.",
                    "C. là khoảng của các nhân tố sinh thái gây ức chế cho hoạt động sinh lí của sinh vật.",
                    "D. là không gian sinh thái mà ở đó tất cả các nhân tố sinh thái của môi trường nằm trong giới hạn sinh thái cho phép loài đó tồn tại và phát triển."
                ],
                "answer": 0,
                "image": null
            },
            {
                "question": "MB-STHCT-L1-007. Nhịp sinh học là khả năng.",
                "options": [
                    "A. thích ứng nhịp nhàng của sinh vật với với những thay đổi có tính chu kì của môi trường.",
                    "B. điều chỉnh nguồn thức ăn nơi ở của sinh vật.",
                    "C. hình thành các đặc điểm thích nghi của sinh vật với môi trường.",
                    "D. phát sinh biến dị tạo ra đột biến mới ở sinh vật."
                ],
                "answer": 0,
                "image": null
            },
            // Thêm các câu hỏi MG level 1 khác...
        ],
        level2: [
            {
                question: "MB-STHCT-L2-001. Mỗi loài sinh vật có một môi trường sống đặc trưng vì:",

                options: ["A. chúng sinh ra từ môi trường đó.",
                    "B. chúng có những đặc điểm thích nghi với môi trường về hình thái, sinh lí, và tập tính.",
                    "C. chúng có những đặc điểm thích nghi với môi trường về cách lấy thức ăn.",
                    "D. môi trường đó có nhiều thức ăn và có quan hệ đực cái."],
                answer: 1
            },
            {
                question: "MB-STHCT-L2-002. Tác động của các nhân tố sinh thái lên cơ thể sinh vật qua nhiều thế hệ đã hình thành:",

                options: ["A. những đặc điểm thích nghi của sinh vật với môi trường sống.",
                    "B. những đặc điểm có lợi cho sinh vật.",
                    "C. những đặc điểm bất lợi cho sinh vật.",
                    "D. những đặc điểm có lợi cho con người để nâng cao năng suất cây trồng vật nuôi."],
                answer: 0
            },
            {
                question: "MB-STHCT-L2-003. Hiện tượng nào sau đây không phải là nhịp sinh học?",

                options: ["A. Vào mùa đông ở những vùng có băng tuyết, phần lớn cây xanh rụng lá và sống ở trạng thái giả chết.",
                    "B. Nhím ban ngày cuộn mình nằm như bất động, ban đêm sục sạo kiếm mồi và tìm bạn.",
                    "C. Cây mọc trong môi trường có ánh sáng chỉ chiếu từ một phía thường có thân uốn cong, ngọn cây vươn về phía nguồn sáng.",
                    "D. Khi mùa đông đến, chim én rời bỏ nơi giá lạnh, khan hiếm thức ăn đến những nơi ấm áp, có nhiều thức ăn."],
                answer: 2
            },
            // Thêm các câu hỏi MG level 2 khác...
        ],
        level3: [
            {
                question: "MB-STHCT-L3-001. Ứng dụng sự thích nghi của cây trồng đối nhân tố sinh thái ánh sáng, người ta có thể trồng xen kẽ các loại cây theo trình tự nào sau đây là hợp lí nhất?",
                options: ["A. cây ưa bóng trồng trước, cây ưa sáng trồng sau.",
                    "B. cây ưa sáng trồng trước, cây ưa bóng trồng sau.",
                    "C. tùy từng mùa ánh sáng thay đổi, mà có thể trồng đảo thứ tự các cây cho nhau.",
                    "D. không thể trồng chung cả hai loại cây này."],
                answer: 1
            },
            {
                question: "MB-STHCT-L3-002. Ở loài tôm he <em>(Penaeus merguiensis)</em>, giai đoạn ấu trùng chỉ thích nghi ở nồng độ muối 1,0 - 2,5%, trong khi đó giai đoạn trứng chịu được nồng độ muối 3,2 - 3,3%. Đây là ví dụ về quy luật sinh thái nào?",
                options: ["A. Quy luật giới hạn sinh thái.",
                    "B. Quy luật tác động không đồng đều của các nhân tố sinh thái.",
                    "C. Quy luật tác động qua lại giữa sinh vật và môi trường.",
                    "D. Quy luật tác động tổng hợp của các nhân tố sinh thái."],
                answer: 1
            },
            // Thêm các câu hỏi MG level 3 khác...
        ]
    },
    mcSTHQT: {
        level1: [
            {
                question: "MB-STHQT-L1-001. Quần thể sinh vật không có đặc trưng nào sau đây?",

                options: ["A. Mật độ cá thể.", "B. Kích thước quần thể.", "C. Thành phần loài.", "D. Nhóm tuổi (còn gọi là cấu trúc tuổi)."],
                answer: 2
            },
            {
                question: "MB-STHQT-L1-002. Số lượng cá thể ít nhất mà quần thể cần có để duy trì và phát triển được gọi là",

                options: ["A. Kích thước tối đa.", "B. Kích thước của quần thể.", "C. Mật độ cá thể.", "D. Kích thước tối thiểu."],
                answer: 3
            },
            {
                question: "MB-STHQT-L1-003. Dấu hiệu không phải là đặc trưng của quần thể là",

                options: ["A. mật độ.",
                    "B. tỉ lệ giới tính.",
                    "C. cấu trúc tuổi.",
                    "D. độ đa dạng."],
                answer: 3
            },
            {
                question: "MB-STHQT-L1-004. Trong bầy, các cá thể có hoạt động sống và khả năng chống chịu tốt hơn với những tác động bất lợi của môi trường. Người ta gọi đó là",

                options: ["A. quan hệ hỗ trợ.",
                    "B. hiệu suất nhóm.",
                    "C. sự phân bố đồng đều.",
                    "D. tụ họp."],
                answer: 1
            },
            {
                question: "MB-STHQT-L1-005. Dạng phân bố nào dưới đây không phải là dạng phân bố của quần thể?",

                options: ["A. phân bố đồng đều.",
                    "B. phân bố không đồng đều.",
                    "C. phân bố ngẫu nhiên.",
                    "D. phân bố theo nhóm."],
                answer: 1
            },
            {
                question: "MB-STHQT-L1-006. Cấu trúc tuổi của một quần thể có dạng hình tháp, đáy rộng cho thấy quần thể này thuộc dạng quần thể:",

                options: ["A. đang ổn định.",
                    "B. đang bắt đầu suy thoái.",
                    "C. đang tăng trưởng nhanh.",
                    "D. bị hạn chế bởi một số yếu tố của môi trường."],
                answer: 2
            },
            {
                question: "MB-STHQT-L1-007. Khi nói về cấu trúc tuổi của quần thể, phát biểu nào sau đây đúng?",

                options: ["A. Ở tất cả các quần thể, nhóm tuổi đang sinh sản luôn có số lượng cá thể nhiều hơn nhóm tuổi sau sinh sản.",
                    "B. Khi số lượng cá thể của nhóm tuổi sau sinh sản ít hơn số lượng cá thể của nhóm tuổi trước sinh sản thì quần thể đang phát triển.",
                    "C. Quần thể sẽ diệt vong nếu số lượng cá thể ở nhóm tuổi trước sinh sản ít hơn số lượng cá thể ở nhóm tuổi đang sinh sản.",
                    "D. Cấu trúc tuổi của quần thể thường thay đổi theo chu kì mùa. Ở loài nào có vùng phân bố rộng thì thường có cấu trúc tuổi phức tạp hơn loài có vùng phân bố hẹp."],
                answer: 3
            },
            // Thêm các câu hỏi Sinh thái học quần thể level 1 khác...
        ],
        level2: [
            {
                question: "MB-STHQT-L2-001. Trên đồng cỏ, các con sư tử trong đàn kết hợp với nhau để săn bắt trâu rừng. Các con trâu rừng tập hợp thành đàn để chống lại sư tử. Mối quan hệ sinh thái giữa những con trâu rừng trong đàn là",

                options: ["A. cộng sinh.", "B. hội sinh.", "C. hỗ trợ.", "D. cạnh tranh."],
                answer: 2
            },
            {
                question: "MB-STHQT-L2-002. Khi nói về các đặc trưng cơ bản của quần thể sinh vật, phát biểu nào sau đây đúng?",

                options: ["A. Kích thước của quần thể không phụ thuộc vào điều kiện môi trường.", "B. Sự phân bố cá thể có ảnh hưởng tới khả năng khai thác nguồn sống trong môi trường.", "C. Mật độ cá thể của mỗi quần thể luôn ổn định, không thay đổi theo mùa, theo năm.", "D. Khi kích thước quần thể đạt mức tối đa thì tốc độ tăng trưởng của quần thể là lớn nhất."],
                answer: 1
            },
            {
                question: "MB-STHQT-L2-003. Khi nói về mối quan hệ giữa các cá thể trong quần thể sinh vật, phát biểu nào sau đây đúng?",

                options: ["A.Khi nguồn thức ăn của quần thể càng dồi dào thì sự cạnh tranh về dinh dưỡng càng gay gắt.",
                    "B. Số lượng cá thể trong quần thể càng tăng thì sự cạnh tranh cùng loài càng giảm.",
                    "C. Ăn thịt lẫn nhau là hiện tượng xảy ra phổ biến ở các quần thể động vật.",
                    "D. Ở thực vật, cạnh tranh cùng loài có thể dẫn đến hiện tượng tự tỉa thưa."],
                answer: 3
            },
            {
                question: "MB-STHQT-L2-004. Khi nói về cấu trúc tuổi của quần thể, phát biểu nào sau đây đúng?",

                options: ["A. Ở tất cả các quần thể, nhóm tuổi đang sinh sản luôn có số lượng cá thể nhiều hơn nhóm tuổi sau sinh sản.",
                    "B. Khi số lượng cá thể của nhóm tuổi sau sinh sản ít hơn số lượng cá thể của nhóm tuổi trước sinh sản thì quần thể đang phát triển.",
                    "C. Quần thể sẽ diệt vong nếu số lượng cá thể ở nhóm tuổi sinh sản ít hơn số lượng cá thể ở nhóm tuổi đang sinh sản.",
                    "D. Cấu trúc tuổi của quần thể thường thay đổi theo chu kì mùa.Ở loài nào có vùng phân bố rộng thì thường có cấu trúc tuổi phức tạp hơn loài có vùng phân bố hẹp."],
                answer: 3
            },
            {
                question: "MB-STHQT-L2-005. Ở ven biển Peru, cứ 10 đến 12 năm có một dòng hải lưu Nino chảy qua làm tăng nhiệt độ, tăng nồng độ muối dẫn tới gây chết các sinh vật phù du gây ra biến động số lượng cá thể của các quần thể. Đây là kiểu biến động:",

                options: ["A. Theo chu kì nhiều năm.",
                    "B. Theo chu kì mùa.",
                    "C. Không theo chu kì.",
                    "D. Theo chu kì tuần trăng."],
                answer: 0
            },
            {
                question: "MB-STHQT-L2-006. Tập hợp nào sau đây không phải là quần thể?",

                options: ["A. cá chép trong ao.",
                    "B. cá rô phi đơn tính trong ao.",
                    "C. các cây thông ở đồi thông Đà Lạt.",
                    "D. đồi chè Thái Nguyên."],
                answer: 1
            },
            {
                question: "MB-STHQT-L2-007. Yếu tố quan trọng nhất chi phối cơ chế tự điều chỉnh số lượng cá thể của quần thể là",

                options: ["A. sức sinh sản.",
                    "B. các yếu tố không phụ thuộc mật độ.",
                    "C. sức tăng trưởng của quần thể.",
                    "D. nguồn thức ăn từ môi trường."],
                answer: 0
            },
            {
                question: "MB-STHQT-L2-008. Quan hệ hỗ trợ của các cá thể trong quần thể có ý nghĩa quan trọng là",

                options: ["A. cá thể chống được các điều kiện bất lợi của môi trường.",
                    "B. đảm bảo quần thể tồn tại ổn định, kiếm được thức ăn và sinh sản ra thế hệ sau.",
                    "C. đảm bảo quần thể tồn tại ổn định, khai thác tối ưu nguồn sống làm tăng khả năng phát triển và sinh sản của các cá thể.",
                    "D. các cá thể trong quần thể phát triển tốt hơn lớn nhanh hơn cho năng suất cao."],
                answer: 2
            },
            {
                question: "MB-STHQT-L2-009. Ý nghĩa mối quan hệ cạnh tranh trong quần thể là",

                options: ["A. các sinh vật trong quần thể sống tốt hơn, phát triển mạnh hơn.",
                    "B. đảm bảo quần thể tồn tại ổn định, làm tăng khả năng phát triển và sinh sản của các cá thể.",
                    "C. đảm bảo số lượng và sự phân bố của các cá thể trong quần thể duy trì ở mức độ phù hợp, đảm bảo sự tồn tại và phát triển của quần thể.",
                    "D. các cá thể trong quần thể chết nhiều hơn, phát tán đi các nơi khác."],
                answer: 2
            },
            {
                question: "MB-STHQT-L2-010. Các cá thể trong quần thể phân bố theo nhóm có ý nghĩa sinh thái:",

                options: ["A. các cá thể cạnh tranh nhau về thức ăn, đực cái, ...",
                    "B. sinh vật tận dụng nguồn sống tiềm tàng trong môi trường sống.",
                    "C. đảm bảo khả năng sinh sản của các cá thể.",
                    "D. các cá thể hỗ trợ lẫn nhau, chống lại điều kiện bất lợi của môi trường."],
                answer: 3
            },
            {
                question: "MB-STHQT-L2-011. Nghiên cứu thành phần nhóm tuổi của quần thể có ý nghĩa:",

                options: ["A. hiểu được sự phát triển hay diệt vong của quần thể.",
                    "B. bảo vệ và khai thác có hiệu quả nguồn tài nguyên hoang dã.",
                    "C. chủ động cung cấp nguồn sống cho quần thể.",
                    "D. điều chỉnh số lượng đực cái, phù hợp đảm bảo sự phát triển của quần thể."],
                answer: 1
            },
            {
                question: "MB-STHQT-L2-012. Phát biểu nào sau đây là đúng về sự tăng trưởng của quần thể sinh vật?",

                options: ["A. khi môi trường không bị giới hạn, mức sinh sản của quần thể luôn nhỏ hơn mức tử vong.",
                    "B. khi môi trường bị giới hạn, mức sinh sản của quần thể luôn lớn hơn mức tử vong.",
                    "C. khi môi trường không bị giới hạn, mức sinh sản của quần thể là tối đa, mức tử vong là tối thiểu.",
                    "D. khi môi trường bị giới hạn, mức sinh sản của quần thể luôn tối đa, mức tử vong luôn tối thiểu."],
                answer: 2
            },
            {
                question: "MB-STHQT-L2-013. Hiện tượng nào sau đây là biểu hiện của mối quan hệ hỗ trợ cùng loài?",

                options: ["A. Cá mập con khi mới nở, sử dụng trứng chưa nở làm thức ăn.",
                    "B. Động vật cùng loài ăn thịt lẫn nhau.",
                    "C. Tỉa thưa tự nhiên ở thực vật.",
                    "D. Các cây thông mọc gần nhau, có rễ nối liền nhau."],
                answer: 3
            },
            {
                question: "MB-STHQT-L2-014. Ví dụ nào sau đây thể hiện quan hệ cạnh tranh giữa các cá thể trong quần thể sinh vật?",

                options: ["A. Tảo giáp nở hoa gây độc cho tôm, cá sống trong cùng một môi trường.",
                    "B. Các cây thông nhựa liền rễ sinh trưởng nhanh hơn các cây thông nhựa sống riêng rẽ.",
                    "C. Vào mùa sinh sản, các con cò cái trong đàn tranh giành nơi làm tổ.",
                    "D. Bồ nông đi kiếm ăn theo đàn bắt được nhiều cá hom bồ nông đi kiếm ăn riêng rẽ."],
                answer: 2
            },
            {
                question: "MB-STHQT-L2-015. Khi nói về các đặc trưng cơ bản của quần thể sinh vật, phát biểu nào sau đây đúng?",

                options: ["A. Kích thước của quần thể không phụ thuộc vào điều kiện môi trường.",
                    "B. Sự phân bố cá thể có ảnh hưởng tới khả năng khai thác nguồn sống trong môi trường.",
                    "C. Mật độ cá thể của mỗi quần thể luôn ổn định, không thay đổi theo mùa, theo năm.",
                    "D. Khi kích thước quần thể đạt mức tối đa thì tốc độ tăng trưởng của quần thể là lớn nhất."],
                answer: 1
            },
            {
                question: "MB-STHQT-L2-016. Trong hình thể hiện sự phân bố cá thể của 3 quần thể sinh vật trong một khu vực khảo sát. Nhận xét đúng về mỗi quần thể là",
                "image": "https://nhantri.top/media/Grade12/hinhphanbo.png",
                options: ["A. Điều kiện sống của môi trường đối với quần thể I là phân bố đồng đều.",
                    "B. Quần thể II có mật độ cá thể cao nhất.",
                    "C. Kích thước của quần thể III là nhỏ nhất.",
                    "D. Mối quan hệ phổ biến giữa các cá thể trong quần thể III là cạnh tranh."],
                answer: 0,
                
            },
            {
                question: "MB-STHQT-L2-017. Đồ thị sau đây mô tả sự tăng trưởng của một quần thể sinh vật theo thời gian. Thời điểm đánh dấu trên đồ thị thể hiện tỉ lệ sinh bằng tỉ lệ tử vong là",
                "image": "https://nhantri.top/media/Grade12/tlstlt.png",
                options: ["A. Thời điểm (E).",
                    "B. Thời điểm (D).",
                    "C. Thời điểm (A).",
                    "D. Thời điểm (B)."],
                answer: 0,
                
            },
            // Thêm các câu hỏi Sinh thái học quần thể level 2 khác...
        ],
        level3: [
            {
                question: "MB-STHQT-L2-001. Xét 4 quần thể của cùng một loài sống ở 4 hồ tự nhiên. Tỉ lệ % cá thể của mỗi nhóm tuổi ở mỗi quần thể như bảng dưới đây. Cho rằng không có sự đánh bắt của con người và không có di cư, nhập cư. Theo suy luận lí thuyết, phát biểu nào sau đây đúng?",
                options: ["A. Quần thể số 1 thuộc dạng quần thể suy thoái.",
                    "B. Quần thể số 3 có mật độ cá thể đang tăng lên.",
                    "C. Quần thể số 4 thuộc dạng quần thể ổn định.",
                    "D. Quần thể số 2 có kích thước đang tăng lên."],
                answer: 1,
                "image": "https://nhantri.top/media/Grade12/bangtlnhtuoi.png"
            },
            {
                question: "MB-STHQT-L2-002. Sự hiểu biết về tỉ lệ giới tính của quần thể sinh vật có ý nghĩa gì trong chăn nuôi?",
                options: ["A. tạo sự cách li sinh sản.",
                    "B. điều chỉnh tỉ lệ đực cái cho phù hợp.",
                    "C. tạo điều kiện sinh sản với tốc độ nhanh.",
                    "D. giữ tỉ lệ giới tính trong quần thể là 1 : 1."],
                answer: 1,
            },
            // Thêm các câu hỏi Sinh thái học quần thể level 3 khác...
        ]
    },
    mcSTHQX: {
        level1: [
            {
                question: "MB-STHQX-L1(NT1)-001. Trên đồng cỏ, các con sư tử trong đàn kết hợp với nhau để săn bắt trâu rừng. Các con trâu rừng tập hợp thành đàn để chống lại sư tử. Mối quan hệ sinh thái giữa sư tử và trâu rừng là",

                options: ["A. hợp tác.", "B. Cộng sinh.", "C. Cạnh tranh.", "D. vật ăn thịt và con mồi."],
                answer: 3
            },
            {
                question: "MB-STHQX-L1(NT1)-002. Trong một nghiên cứu về ảnh hưởng của loài Sa giông <em>Notophthalmus viridescens</em> đối với nguồn thức ăn là nòng nọc các loài ếch nhái <em>Bufo americanus</em>, <em>Hyla chrysoscelis</em>, <em>Rana sphenocephala</em> và <em>Scaphiopus holbrooki</em> trong một hố nước sau 100 ngày sinh trưởng được thể hiện trong hình bên, trong đó (I) không có sự hiện diện loài Sa giông và (II) có sự xuất hiện của 5 cá thể loài Sa giông. Các loài ếch nhái không ăn nòng nọc của nhau và không tạo ra những sản phẩm gây ức chế lẫn nhau. Quan hệ sinh thái giữa loài Sa giông và loài <em>H. chrysoscelis</em> là",

                options: ["A. cạnh tranh.", "B. vật ăn thịt - con mồi.", "C. cộng sinh.", "D. hợp tác."],
                answer: 1,
                "image": "https://nhantri.top/media/Grade12/consagiong.png"
            },
            {
                question: "MB-STHQX-L1(NT1)-003. Quần xã sinh vật là",

                options: ["A. Tập hợp các quần thể sinh vật giống nhau, được hình thành trong một quá trình lịch sử, cùng sống trong một sinh cảnh và có các mối quan hệ tương hỗ mà gắn bó như một thể thống nhất.",
                    "B. Tập hợp các quần thể trong một giai đoạn lịch sử, nhờ các mối liên hệ sinh thái tương hỗ mà gắn bó với nhau như một thể thống nhất.",
                    "C. Tập hợp các quần thể sinh vật ngẫu nhiên, cùng sống trong một không gian xác định, gắn bó như một thể thống nhất.",
                    "D. Tập hợp các quần thể sinh vật khác loài, được hình thành trong một quá trình lịch sử, cùng sinh sống trong một khoảng không gian xác định, nhờ các mối quan hệ tương hỗ mà gắn bó với nhau như một thể thống nhất."],
                answer: 3
            },
            {
                question: "MB-STHQX-L1(NT1)-004. Nhóm sinh vật nào sau đây là một quần xã?",

                options: ["A. Các cây cọ sống trên một quả đồi.",
                    "B. Các con voi sống trong rừng Tây Nguyên.",
                    "C. Các sinh vật sống trong một khu rừng.",
                    "D. Các con cá chép sống trong một cái hồ."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-005. Đặc trưng nào sau đây không phải của quần xã?",

                options: ["A. Độ đa dạng về loài.",
                    "B. Số lượng các nhóm loài.",
                    "C. Thành phần nhóm tuổi.",
                    "D. Sự phân bố của loài trong không gian."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-006. Quần xã sinh vật khác quần thể sinh vật ở điểm căn bản nào nhất?",

                options: ["A. thời gian hình thành.",
                    "B. số loài.",
                    "C. độ đa dạng của các cá thể trong cùng một loài.",
                    "D. cấu trúc phân tầng."],
                answer: 1
            },
            {
                question: "MB-STHQX-L1(NT1)-007. Loài ưu thế phân biệt với các loài khác trong quần xã là",

                options: ["A. loài có tần suất xuất hiện và độ phong phú cao, sinh khối lớn quyết định chiều hướng phát triển của quần xã.",
                    "B. loài chỉ có ở một quần xã nào đó hoặc có số lượng hơn hẳn các loài khác và có vai trò quan trọng trong quần xã.",
                    "C. loài có vai trò kiểm soát và khống chế sự phát triển của một số loài khác, duy trì sự ổn định của quần xã.",
                    "D. loài có tần suất xuất hiện và độ phong phú thấp, sự có mặt của nó làm tăng mức đa dạng cho quần xã."],
                answer: 0
            },
            {
                question: "MB-STHQX-L1(NT1)-008. Loài đặc trưng là?",

                options: ["A. loài có số lượng ít nhất trong quần xã.",
                    "B. loài có số lượng nhiều trong quần xã.",
                    "C. loài chỉ có ở một quần xã hoặc có nhiều hơn hẳn các loài khác.",
                    "D. loài có vai trò quan trọng trong quần xã."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-009. Sự phân tầng thẳng đứng trong quần xã là do:",

                options: ["A. phân bố ngẫu nhiên của các quần thể.",
                    "B. trong quần xã có nhiều quần thể.",
                    "C. nhu cầu không đồng đều ở các quần thể.",
                    "D. sự phân bố để tận dụng diện tích không gian."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-010. Sự phân tầng theo phương thẳng đứng trong quần xã sinh vật có ý nghĩa.",

                options: ["A. tăng sự cạnh tranh giữa các loài, giảm khả năng tận dụng nguồn sống.",
                    "B. giảm mức độ cạnh tranh giữa các loài, giảm khả năng tận dụng nguồn sống.",
                    "C. giảm mức độ cạnh tranh giữa các loài, nâng cao hiệu quả sử dụng nguồn sống.",
                    "D. tăng hiệu quả sử dụng nguồn sống, tăng sự cạnh tranh giữa các quần thể."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-011. Sự phân bố sinh vật trong nước biển theo chiều ngang là",

                options: ["A. cá sống ven bờ, cá sống vùng khơi xa.",
                    "B. cá vùng nước mặt và cá vùng nước đáy.",
                    "C. cá vùng nước giữa và cá vùng đáy sâu.",
                    "D. tảo trên bề mặt và san hô đáy sâu."],
                answer: 0
            },
            {
                question: "MB-STHQX-L1(NT1)-011. Sự phân chia các loài trong quần xã thành 3 nhóm. sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải theo:",

                options: ["A. tổ chức cơ thể.",
                    "B. khả năng phát triển.",
                    "C. phương thức dinh dưỡng.",
                    "D. hình thức sinh sản."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-012. Sự phân hóa các ổ sinh thái giúp các loài giảm bớt sự:",

                options: ["A. đối địch.",
                    "B. hợp tác.",
                    "C. cạnh tranh.",
                    "D. cộng sinh."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-013. Yếu tố quyết định mức độ đa dạng của một thảm thực vật ở cạn là",

                options: ["A. không khí.",
                    "B. nước.",
                    "C. ánh sáng.",
                    "D. gió."],
                answer: 2
            },
            {
                question: "MB-STHQX-L1(NT1)-014. Tảo giáp nở hoa làm chết các loài cá, tôm là mối quan hệ gì?",

                options: ["A. Ức chế cảm nhiễm.",
                    "B. Sinh vật ăn sinh vật.",
                    "C. Cạnh tranh.",
                    "D. Kí sinh."],
                answer: 0
            },
            // Thêm các câu hỏi Sinh thái học quần xã level 1 khác...
        ],
        level2: [
            {
                question: "MB-STHQX-L2-001. Việc khai thác khoáng sản ở một số khu vực rừng mưa nhiệt đới làm hủy hoại hệ sinh thái: đất bị xáo trộn, nghèo mùn bã hữu cơ, chỉ còn ít cây bụi và ít hạt cây ở trong đất. Sau khi ngừng khai thác khoáng sản, rừng trên khu vực này phục hồi nhưng tốc độ rất chậm. Quá trình rừng phục hồi ở khu vực đất đã khai thác khoáng sản này là diễn thế … (1) làm … (2) độ đa dạng của quần xã.Cụm từ / từ tương ứng với(1), (2) lần lượt là",

                options: ["A. nguyên sinh, tăng.", "B. nguyên sinh, giảm.", "C. thứ sinh, tăng.", "D. thứ sinh, giảm."],
                answer: 2
            },
            {
                question: "MB-STHQX-L2(NT5)-002. Trong một nghiên cứu về ảnh hưởng của loài Sa giông <em>Notophthalmus viridescens</em> đối với nguồn thức ăn là nòng nọc các loài ếch nhái <em>Bufo americanus</em>, <em>Hyla chrysoscelis</em>, <em>Rana sphenocephala</em> và <em>Scaphiopus holbrooki</em> trong một hố nước sau 100 ngày sinh trưởng được thể hiện trong hình bên, trong đó (I) không có sự hiện diện loài Sa giông và (II) có sự xuất hiện của 5 cá thể loài Sa giông. Các loài ếch nhái không ăn nòng nọc của nhau và không tạo ra những sản phẩm gây ức chế lẫn nhau. Quan hệ sinh thái giữa loài <em>H.chrysoscellis</em> và <em>S. holbrooki</em> là",

                options: ["A. cạnh tranh.", "B. hội sinh.", "C. hợp tác.", "D. không có quan hệ."],
                answer: 0,
                "image": "https://nhantri.top/media/Grade12/consagiong.png"
            },
            {
                question: "MB-STHQX-L2-003. Sự phân tầng của thực vật trong quần xã rừng mưa nhiệt đới chủ yếu là do sự khác nhau về nhu cầu:",

                options: ["A. các nguyên tố khoáng.", "B. nước.", "C. không khí.", "D. ánh sáng."],
                answer: 3,

            },
            {
                question: "MB-STHQX-L2-004. Hiện tượng cá sấu há to miệng cho một loài chim “xỉa răng” hộ là biểu hiện quan hệ:",

                options: ["A. kí sinh.", "B. hội sinh.", "C. hợp tác.", "D. cộng sinh."],
                answer: 2

            },
            {
                question: "MB-STHQX-L2-005. Khi nói về sự phân bố cá thể trong không gian của quần xã, phát biểu nào sau đây sai?",

                options: ["A. Sinh vật phân bố theo chiều ngang thường tập trung nhiều ở vùng có điều kiện sống thuận lợi như vùng đất màu mỡ, độ ẩm thích hợp, thức ăn dồi dào.",
                    "B. Phân bố cá thể trong không gian của quần xã tùy thuộc vào nhu cầu sống của từng loài.",
                    "C. Sự phân bố cá thể trong tự nhiên có xu hướng làm giảm bớt mức độ cạnh tranh giữa các loài và nâng cao hiệu quả sử dụng nguồn sống của môi trường.",
                    "D. Trong hệ sinh thái rừng mưa nhiệt đới, chỉ có sự phân tầng của các loài thực vật, không có sự phân tầng của các loài động vật."],
                answer: 3

            },
            {
                question: "MB-STHQX-L2-006. Trên đồng cỏ, các con bò đang ăn cỏ. Bò tiêu hoá được cỏ nhờ các vi sinh vật sống trong dạ cỏ. Các con chim sáo đang tìm ăn các con rận sống trên da bò. Khi nói về quan hệ giữa các sinh vật trên, phát biểu nào sau đây đúng?",

                options: ["A. Quan hệ giữa chim sáo và rận là quan hệ hội sinh.",
                    "B. Quan hệ giữa rận và bò là quan hệ sinh vật này ăn sinh vật khác.",
                    "C. Quan hệ giữa vi sinh vật và rận là quan hệ cạnh tranh.",
                    "D. Quan hệ giữa bò và vi sinh vật là quan hệ cộng sinh."],
                answer: 3

            },
            // Thêm các câu hỏi Sinh thái học quần xã level 2 khác...
        ],
        level3: [
            {
                question: "MB-STHQX-L3-001. Việc khai thác khoáng sản ở một số khu vực rừng mưa nhiệt đới làm hủy hoại hệ sinh thái: đất bị xáo trộn, nghèo mùn bã hữu cơ, chỉ còn ít cây bụi và ít hạt cây ở trong đất. Sau khi ngừng khai thác khoáng sản, rừng trên khu vực này phục hồi nhưng tốc độ rất chậm. Cùng với việc gieo hạt và trồng cây bản địa, để thúc đẩy tốc độ phục hồi hệ sinh thái sau khi ngừng khai thác khoáng sản, biện pháp nào sau đây phù hợp nhất?",
                options: ["A. Di nhập các động vật đào hang để làm tơi xốp đất.", "B.Thường xuyên tỉa thưa để hạn chế sự phát triển của các loài ưu thế.", "C.Bổ sung vụn cành và lá cây vào trong đất.", "D.Gieo hạt của các cây ngoại lai vào trong đất."],
                answer: 2
            },
            {
                "question": "MB-STHQX-L3-002. Trong một nghiên cứu về đa dạng sinh học các loài ve sầu ở một vườn quốc gia thuộc vùng Tây Bắc Việt Nam, người ta thu được 431 cả thể thuộc 39 loài. Trong đó, có 14 cá thể thuộc loài <em>Pomponia backanensis</em> (một loài ve sầu mới được đặt tên vào năm 2009 bởi 2 nhà côn trùng học người Việt Nam và người Campuchia). Mức độ phong phú của một loài trong khu vực nghiên cứu được xác định như bảng dưới đây. <em>Loài Pomponia backanensis</em> có mức độ ưu thế như thế nào trong quần xã vườn quốc gia trên? ",
                "options": [
                    "A. Loài rất ưu thế.",
                    "B. Loài ưu thế.",
                    "C. Loài ưu thế tiềm tàng.",
                    "D. Loài không ưu thế."
                ],
                "answer": 3,
                "image": "https://nhantri.top/media/Grade12/thanhphanloai.png"
            },
            {
                "question": "MB-STHQX-L3-003. Trong quần xã ao nuôi cá, người ta thường thả nhiều loài cá trong ao nhằm:",
                "options": [
                    "A. tận dụng diện tích ao hồ và tận dụng triệt để nguồn thức ăn trong ao.",
                    "B. để dễ quan sát và tiện việc chăm sóc.",
                    "C. để tránh sự cạnh tranh về thức ăn trong ao.",
                    "D. để chúng cùng hỗ trợ nhau trong cuộc sống chung."
                ],
                "answer": 0,

            }
            // Thêm các câu hỏi Sinh thái học quần xã level 3 khác...
        ]
    },
    mcHST: {
        level1: [
            {
                question: "MB-HST,SQ&BVMT-L1-001. Phát biểu nào sau đây đúng khi nói về vai trò của chu trình sinh, địa, hóa đối với hệ sinh thái?",

                options: ["A. Đảm bảo giữ ấm cho các sinh vật.",
                    "B. Dòng năng lượng qua hệ sinh thái theo một chiều và cuối cùng bị tiêu biến ở dạng nhiệt.",
                    "C. Giúp loại bỏ chất độc ra khỏi hệ sinh thái.",
                    "D. Chất dinh dưỡng và các phân tử duy trì sự sống có nguồn cung cấp hạn chế nên cần được tái tạo lại liên tục."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-002. Hệ sinh thái là gì?",

                options: ["A. bao gồm quần xã sinh vật và môi trường vô sinh của quần xã.",
                    "B. bao gồm quần thể sinh vật và môi trường vô sinh của quần xã.",
                    "C. bao gồm quần xã sinh vật và môi trường hữu sinh của quần xã.",
                    "D. bao gồm quần thể sinh vật và môi trường hữu sinh của quần xã."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-003. Sinh vật sản xuất là những sinh vật:",

                options: ["A. phân giải vật chất (xác chết, chất thải) thành những chất vô cơ trả lại cho môi trường.",
                    "B. động vật ăn thực vật và động vật ăn động vật.",
                    "C. có khả năng tự tổng hợp nên các chất hữu cơ để tự nuôi sống bản thân.",
                    "D. chỉ gồm các sinh vật có khả năng hóa tổng hợp."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-004. Các kiểu hệ sinh thái trên Trái Đất được phân chia theo nguồn gốc bao gồm:",

                options: ["A. hệ sinh thái trên cạn và hệ sinh thái dưới nước.",
                    "B. hệ sinh thái tự nhiên và hệ sinh thái nhân tạo.",
                    "C. hệ sinh thái nước mặn và hệ sinh thái nước ngọt.",
                    "D. hệ sinh thái nước mặn và hệ sinh thái trên cạn."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-005. Trong một chuỗi thức ăn của hệ sinh thái trên cạn, nhóm sinh vật nào sau đây có tổng sinh khối lớn nhất?",

                options: ["A. Sinh vật tiêu thụ bậc 2.",
                    "B. Sinh vật tiêu thụ bậc 1.",
                    "C. Sinh vật tiêu thụ bậc 3.",
                    "D. Sinh vật sản xuất."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-006. Sơ đồ phản ánh một chuỗi thức ăn là",

                options: ["A. Ánh sáng → Nhiệt độ → Lúa.",
                    "B. Lúa → Châu chấu → Cóc.",
                    "C. Phân bón → Lúa → Năng suất.",
                    "D. Cháy rừng → Ô nhiễm."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-007. Căn cứ vào sinh vật khởi đầu chuỗi thức ăn, các chuỗi thức ăn trong tự nhiên được quy ước chia thành:",

                options: ["A. 2 loại.",
                    "B. 3 loại.",
                    "C. 4 loại.",
                    "D. Rất nhiều loại."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-008. Chuỗi thức ăn nào khởi đầu bằng sinh vật phân hủy?",

                options: ["A. Cỏ → Hươu → Hổ.",
                    "B. Giun đất → Gà → Diều hâu.",
                    "C. Lúa → Sâu bọ → Ếch → Rắn.",
                    "D. Tảo → Tôm → Cá rô."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-009. Trong chuỗi thức ăn. Cỏ → Hươu → Hổ, thì Hươu là",

                options: ["A. Sinh vật sản xuất.",
                    "B. Sinh vật tiêu thụ.",
                    "C. Bậc dinh dưỡng cấp 1.",
                    "D. Động vật ăn thịt."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-010. Tập hợp nhiều chuỗi thức ăn trong quần xã tạo thành:",

                options: ["A. Lưới thức ăn.",
                    "B. Mạng lưới quần thể.",
                    "C. Chuỗi thức ăn.",
                    "D. Dây chuyền sinh thái."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-011. Trong 3 loại tháp sinh thái, loại tháp nào luôn luôn ở trạng thái điển hình (chân tháp rộng, hẹp dần qua các bậc dinh dưỡng)",

                options: ["A. Tháp số lượng.",
                    "B. Tháp sinh khối.",
                    "C. Tháp năng lượng.",
                    "D. Tất cả các loại tháp sinh thái đều luôn luôn ở trạng thái điển hình."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-012. Dòng năng lượng trong chuỗi thức ăn đi theo chiều:",

                options: ["A. Từ bậc dinh dưỡng thấp lên bậc cao hơn.",
                    "B. Từ bậc dinh dưỡng cao xuống bậc thấp hơn.",
                    "C. Từ vật sản xuất đến vật tiêu thụ.",
                    "D. Từ sinh vật tiêu thụ cấp dưới lên cấp trên."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-013. Trong quá trình tồn tại và phát triển của quần xã, các quần thể sinh vật và môi trường luôn có sự tác động qua lại với nhau. Sự tác động đó dẫn tới kết quả:",

                options: ["A. các quần thể trong quần xã biến đổi.",
                    "B. các cá thể trong quần xã biến đổi.",
                    "C. quần xã luôn được duy trì không thay đổi.",
                    "D. quần xã biến đổi qua các giai đoạn khác nhau và cuối cùng sẽ dẫn tới một quần xã tương đối ổn định."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-014. Thực chất của diễn thế sinh thái:",

                options: ["A. quá trình biến đổi mạnh mẽ và liên tục các nhân tố hữu sinh.",
                    "B. quá trình biến đổi tuần tự quần xã qua các giai đoạn khác nhau.",
                    "C. quá trình biến đổi mạnh mẽ và liên tục của các nhân tố vô sinh.",
                    "D. quá trình biến đổi của nhân tố hữu sinh, nhân tố vô sinh không thay đổi."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-015. Quá trình phát triển của diễn thế nguyên sinh là",

                options: ["A. từ quần xã ổn định thay thế bằng quần xã mới.",
                    "B. từ chưa có quần xã đến có quần xã.",
                    "C. từ quần xã khởi đầu đơn giản đến quần xã ổn định.",
                    "D. từ quần xã trung gian đến quần xã ổn định."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-016. Trên một đảo mới được hình thành do hoạt động của núi lửa, nhóm sinh vật có thể đến cư trú đầu tiên là",

                options: ["A. sâu bọ.",
                    "B. thực vật thân cỏ có hoa.",
                    "C. thực vật hạt trần.",
                    "D. địa y."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-017. Hệ sinh thái dưới nước có đặc điểm là",

                options: ["A. Quần xã chịu khô hạn.",
                    "B. Loài ưu thế là thông lá kim.",
                    "C. Nhiều sinh vật phù du.",
                    "D. Chủ yếu là cỏ và cây bụi."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-018. Hệ sinh thái trên cạn có độ đa dạng cao nhất là",

                options: ["A. Savan.",
                    "B. Taiga.",
                    "C. Rừng nhiệt đới.",
                    "D. Rừng ngập mặn."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-019. Hệ sinh thái nào sau đây có đặc điểm năng lượng mặt trời là nguồn gốc chính, số loài hạn chế và được cấp thêm vật chất?",

                options: ["A. Rừng nhiệt đới.",
                    "B. Hệ sinh thái biển.",
                    "C. Hệ sinh thái nông nghiệp.",
                    "D. Hoang mạc và savan."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-020. Khu sinh học là",

                options: ["A. Hệ sinh thái và khu vực sống của chúng.",
                    "B. Hệ sinh thái rất lớn có các sinh vật phân bố ở một khoảng không gian nhất định trên Trái đất.",
                    "C. Hệ sinh thái rất lớn có các sinh vật phân bố ở các vùng đất liền kề trên Trái đất.",
                    "D. Hệ sinh thái rất lớn đặc trưng cho đất đai và khí hậu ở vùng đó."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-021. Bảo vệ đa dạng sinh học là",

                options: ["A. bảo vệ sự phong phú về nguồn gen và nơi sống của các loài.",
                    "B. bảo vệ sự phong phú về nguồn gen và về loài.",
                    "C. bảo vệ sự phong phú về nguồn gen, về loài và các hệ sinh thái.",
                    "D. bảo vệ sự phong phú về nguồn gen, các mối quan hệ giữa các loài trong hệ sinh thái."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-022. Để góp phần làm giảm hiệu ứng nhà kính, cần hạn chế sự gia tăng loại khí nào sau đây trong khí quyển?",

                options: ["A. Khí nitrogen.",
                    "B. Khí heli.",
                    "C. Khí carbon dioxide.",
                    "D. Khí neon."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-023. Trong chu trình nitrogen, một loài vi khuẩn trong đất không có lợi cho thực vật là?",

                options: ["A. Vi khuẩn cố định nitrogen.",
                    "B. Vi khuẩn nitrate hóa.",
                    "C. Vi khuẩn phản nitrate hóa.",
                    "D. Vi khuẩn phân giải chất hữu cơ."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-024. Trong hệ sinh thái, tất cả các dạng năng lượng được hấp thụ cuối cùng đều được:",

                options: ["A. chuyển cho bậc dinh dưỡng tiếp theo.",
                    "B. chuyển cho sinh vật phân giải.",
                    "C. sử dụng cho các hoạt động sống.",
                    "D. giải phóng vào môi trường dưới dạng nhiệt."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-025. Các yếu tố sau đây đều tuần hoàn trong sinh quyển, trừ:",

                options: ["A. Nitrogen.",
                    "B. CO<sub>2</sub>.",
                    "C. Nước.",
                    "D. Bức xạ mặt trời."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-026. Vi khuẩn phản nitrate trả lại nitrogen cho môi trường dưới dạng:",

                options: ["A. nitrite(NO<sub>2</sub><sup>-</sup>).",
                    "B. nitrate(NO<sub>3</sub><sup>-</sup>).",
                    "C. amoni(NH<sub>4</sub><sup>+</sup>).",
                    "D. Nitrogen(N<sub>2</sub>)."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-026. Chất nào sau đây không xâm nhập vào quần xã sinh vật nhờ hoạt động hút khoáng của thực vật?",

                options: ["A. Carbon.",
                    "B. Nước.",
                    "C. Nitrogen.",
                    "D. Photphorus."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-027. Trong chu trình sinh địa hoá, carbon từ quần xã sinh vật được trả lại môi trường thông qua hoạt động của:",

                options: ["A. sinh vật sản xuất.",
                    "B. sinh vật tiêu thụ.",
                    "C. sinh vật phân giải.",
                    "D. tất cả các nhóm sinh vật."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-028. Trong chu trình sinh địa hóa, carbon đi từ môi trường ngoài vào quần xã sinh vật thông qua hoạt động của nhóm:",

                options: ["A. Sinh vật sản xuất.",
                    "B. Sinh vật tiêu thụ bậc 1.",
                    "C. Sinh vật phân giải.",
                    "D. Sinh vật tiêu thụ bậc 2."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-029. Điều nào dưới đây không đúng với chu trình nước?",

                options: ["A. Trong khí quyển, nước ngưng tụ tạo thành mưa rơi xuống lượng lớn ở đại dương.",
                    "B. Trong tự nhiên, nước luôn vận động tạo nên chu trình nước toàn cầu.",
                    "C. Trong khí quyển, nước ngưng tụ tạo thành mưa rơi xuống lượng lớn ở lục địa.",
                    "D. Sự bốc hơi nước diễn ra từ đại dương, mặt đất và thảm thực vật."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L1-030. Trong chu trình sinh địa hóa, nitrogen từ trong cơ thể sinh vật truyền trở lại môi trường không khí dưới dạng nitrogen phân tử (N<sub>2</sub>) thông qua hoạt động của nhóm sinh vật nào trong các nhóm sau đây?",

                options: ["A. Vi khuẩn cố định nitrogen.",
                    "B. Cây họ đậu.",
                    "C. Động vật đa bào.",
                    "D. Vi khuẩn phản nitrate hóa."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-031. Trong chu trình sinh địa hoá, nhóm sinh vật nào trong số các nhóm sinh vật sau đây có khả năng biến đổi nitrogen ở dạng NO<sub>3</sub><sup>−</sup> thành nitrogen ở dạng NH<sub>4</sub><sup>+</sup>?",

                options: ["A. Vi khuẩn cố định nitrogen trong đất.",
                    "B. Thực vật tự dưỡng.",
                    "C. Vi khuẩn phản nitrate hoá.",
                    "D. Động vật đa bào."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L1-032. Trong chu trình carbon, điều nào dưới đây là không đúng?",

                options: ["A. Carbon đi vào chu trình dưới dạng carbon dioxide.",
                    "B. Thông qua quang hợp, thực vật lấy CO<sub>2</sub> để tạo ra chất hữu cơ.",
                    "C. Động vật ăn cỏ sử dụng thực vật làm thức ăn chuyển các hợp chất chứa carbon cho động vật ăn thịt.",
                    "D. Phần lớn CO<sub>2</sub> được lắng đọng, không hoàn trả vào chu trình."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L1-033. Khu sinh học nào sau đây chiếm diện tích lớn nhất trong sinh quyển?",

                options: ["A. Khu sinh học nước mặn.",
                    "B. Khu sinh học nước ngọt.",
                    "C. Khu sinh học thềm lục địa.",
                    "D. Khu sinh học trên cạn."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-034. Chu trình sinh địa hóa có ý nghĩa là",

                options: ["A. duy trì sự cân bằng vật chất trong sinh quyển.",
                    "B. duy trì sự cân bằng vật chất trong quần thể.",
                    "C. duy trì sự cân bằng vật chất trong quần xã.",
                    "D. duy trì sự cân bằng vật chất trong hệ sinh thái."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-035. Trong các hệ sinh thái trên cạn, loài ưu thế thường thuộc về nhóm sinh vật nào?",

                options: ["A. Giới thực vật.",
                    "B. Giới vi khuẩn.",
                    "C. Giới động vật.",
                    "D. Giới nấm."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-035. Chu trình sinh địa hóa là chu trình trao đổi:",

                options: ["A. các chất trong tự nhiên từ môi trường vào quần xã và ngược lại.",
                    "B. các hợp chất hữu cơ cần thiết cho sự sống trong tự nhiên.",
                    "C. vật chất giữa các quần thể sinh vật trong một quần xã với nhau.",
                    "D. vật chất giữa các quần xã sinh vật với nhau."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L1-036. Nhóm vi sinh vật nào dưới đây làm giảm lượng nitrogen trong đất?",

                options: ["A. Vi khuẩn lam.",
                    "B. Vi khuẩn amoni.",
                    "C. Vi khuẩn nitrite hóa.",
                    "D. Vi khuẩn phản nitrate hóa."],
                answer: 3
            },
            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 1 khác...
        ],
        level2: [
            {
                question: "MB-HST,SQ&BVMT-L2-001. Khi nói về chuỗi thức ăn và lưới thức ăn, phát biểu nào sau đây sai?",

                options: ["A. Quần xã sinh vật có độ đa dạng càng cao thì lưới thức ăn trong quần xã càng phức tạp.",
                    "B. Trong lưới thức ăn, một loài sinh vật có thể là mắt xích của nhiều chuỗi thức ăn.",
                    "C. Lưới thức ăn của quần xã rừng mưa nhiệt đới thường phức tạp hơn lưới thức ăn của quần xã thảo nguyên.",
                    "D. Trong chuỗi thức ăn, bậc dinh dưỡng cao nhất luôn có sinh khối lớn nhất."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-002. Cho chuỗi thức ăn: Tảo lục đơn bào → Tôm → Cá rô → Chim bói cá. Trong chuỗi thức ăn này, cá rô là",

                options: ["A. Sinh vật tiêu thụ bậc 1 và thuộc bậc dinh dưỡng cấp 3.",
                    "B. Sinh vật tiêu thụ bậc 3 và thuộc bậc dinh dưỡng cấp 2.",
                    "C. Sinh vật tiêu thụ bậc 3 và thuộc bậc dinh dưỡng cấp 2.",
                    "D. Sinh vật tiêu thụ bậc 2 và thuộc bậc dinh dưỡng cấp 3."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-003. Ví dụ không thể minh họa cho một hệ sinh thái là",

                options: ["A. Hồ với rong, tảo, cua, cá, vi khuẩn, ... cùng các chất và yếu tố khí hậu liên quan.",
                    "B. Một khu rừng có cỏ, cây, sâu bọ, chim chóc, thú, nấm, vi sinh vật, ...và nhân tố vô cơ ở đó.",
                    "C. Một cái ao nhưng không sinh vật, chỉ kể các nhân tố vô sinh(nước, khoáng, khí, nhiệt độ, ...).",
                    "D. Một quần xã ở một hòn đảo và sinh cảnh ở đó."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L2-004. Khi nói về chuỗi thức ăn và lưới thức ăn, phát biểu nào sau đây sai?",

                options: ["A. Quần xã sinh vật có độ đa dạng càng cao thì lưới thức ăn trong quần xã càng phức tạp.",
                    "B. Trong lưới thức ăn, một loài sinh vật có thể là mắt xích của nhiều chuỗi thức ăn.",
                    "C. Lưới thức ăn của quần xã rừng mưa nhiệt đới thường phức tạp hơn lưới thức ăn của quần xã thảo nguyên.",
                    "D. Trong chuỗi thức ăn, bậc dinh dưỡng cao nhất luôn có sinh khối lớn nhất."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-005. Ở mỗi bậc dinh dưỡng của chuỗi thức ăn, năng lượng bị tiêu hao nhiều nhất qua:",

                options: ["A. quá trình bài tiết các chất thải.",
                    "B. hoạt động quang hợp.",
                    "C. hoạt động hô hấp.",
                    "D. quá trình sinh tổng hợp các chất."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L2-006. Khi nói về tháp sinh thái, phát biểu nào sau đây không đúng?",

                options: ["A. Tháp năng lượng luôn có dạng chuẩn, đáy lớn, đỉnh nhỏ.",
                    "B. Tháp số lượng và tháp sinh khối có thể bị biến dạng, tháp trở nên mất cân đối.",
                    "C. Trong tháp năng lượng, năng lượng vật làm mồi bao giờ cũng đủ đến dư thừa để nuôi vật tiêu thụ mình.",
                    "D. Tháp sinh khối của quần xã sinh vật nổi trong nước thường mất cân đối do sinh khối của sinh vật tiêu thụ nhỏ hơn sinh khối của sinh vật sản xuất."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-007. Trong môi trường tương đối ổn định, nguyên nhân chính ở trong quần xã dẫn đến diễn thế sinh thái là",

                options: ["A. sự cố bất thường, bão, lụt, cháy, ô nhiễm.",
                    "B. sự thay đổi thời tiết khí hậu.nắng, mưa, chuyển mùa.",
                    "C. loài đặc trưng của quần xã thay đổi.",
                    "D. thay thế nhóm loài ưu thế này bằng nhóm loài ưu thế khác có sức cạnh tranh cao hơn."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-008. Các khu sinh học (Biome) được sắp xếp theo thứ tự giảm dần độ đa dạng sinh học là",

                options: ["A. Đồng rêu hàn đới → Rừng mưa nhiệt đới → Rừng rụng lá ôn đới (rừng lá rộng rụng theo mùa).",
                    "B. Đồng rêu hàn đới → Rừng rụng lá ôn đới (rừng lá rộng rụng theo mùa) → Rừng mưa nhiệt đới.",
                    "C. Rừng mưa nhiệt đới → Rừng rụng lá ôn đới (rừng lá rộng rụng theo mùa) → Đồng rêu hàn đới.",
                    "D. Rừng mưa nhiệt đới → Đồng rêu hàn đới → Rừng rụng lá ôn đới (rừng lá rộng rụng theo mùa)."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L2-009. Một trong những đặc điểm của khu sinh học rừng lá rộng rụng theo mùa là",

                options: ["A. nhóm thực vật chiếm ưu thế là rêu, cỏ bông.",
                    "B. khu hệ động vật khá đa dạng nhưng không có loài nào chiếm ưu thế.",
                    "C. khí hậu lạnh quanh năm, cây lá kim chiếm ưu thế.",
                    "D. kiểu rừng này tập trung nhiều ở vùng xích đạo, nơi có nhiệt độ cao, lượng mưa nhiều."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L2-010. Chu trình sinh địa hóa không bao gồm:",

                options: ["A. Dòng năng lượng trong hệ sinh thái.",
                    "B. Con đường vật chất từ ngoài vào cơ thể.",
                    "C. Con đường vật chất từ cơ thể ra môi trường.",
                    "D. Sự biến chất hữu cơ thành vô cơ hay ngược lại."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L2-011. Trong chu trình carbon ở hệ sinh thái, nguyên tố carbon đi từ môi trường vô sinh vào quần xã sinh vật nhờ quá trình:",

                options: ["A. Dị hóa.",
                    "B. Quang hợp.",
                    "C. Hô hấp.",
                    "D. Phân giải."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L2-012. Điều nhận thức không đúng từ chu trình nước là",

                options: ["A. nước không bị mất đi và là nguồn tài nguyên vô hạn, chúng bốc hơi từ mặt đất và thảm thực vật sau đó lại rơi tất cả xuống lục địa.",
                    "B. nước là tài nguyên hữu hạn, chỉ một lượng nhỏ nước rơi xuống lục địa, cần tiết kiệm nước ngọt và bảo vệ sự trong sạch của nguồn nước.",
                    "C. nước rơi xuống lục địa phân bố không đồng đều ở các vùng khác nhau.",
                    "D. nhiều vùng nước nhiều nhưng lại bị ô nhiễm, nhiều vùng lại thiếu nước nghiêm trọng dẫn tới hạn hán, nhiều tháng trong năm bị thiếu nước."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L2-013. Qua chu trình carbon ta thấy lượng khí CO<sub>2</sub> trong khí quyển tương đối ổn định trong một khoảng thời gian hàng trăm triệu năm chủ yếu là do:",

                options: ["A. thực vật quang hợp lấy đi khí CO<sub>2</sub>, động vật và thực vật lại hô hấp và nhả trả lại khí CO<sub>2</sub> cho môi trường.",
                    "B. số lượng thực vật còn nhiều, nhất là diện tích rừng ổn định, cây xanh đã quang hợp lấy đi một lượng khí CO<sub>2</sub> mà chính thực vật, động vật và các vi sinh vật hô hấp thải ra.",
                    "C. nhiều cánh rừng bị cháy, bị khai thác, đồng thời động vật và các sinh vật khác cũng giảm theo do đó lượng khí thải và lượng khí lấy đi cân bằng.",
                    "D. con người chưa có nhiều hoạt động công nghiệp, số nhiên liệu hóa thạch còn nguyên sơ."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L2-014. Sự khác biệt rõ nhất về dòng năng lượng và dòng vật chất trong hệ sinh thái là",

                options: ["A. dòng chất dinh dưỡng được tuần hoàn, còn dòng năng lượng thì theo một chiều.",
                    "B. năng lượng được sử dụng lại, còn chất dinh dưỡng thì không.",
                    "C. sự chuyển hoá vật chất diễn ra không theo chu trình, còn năng lượng thì theo chu trình.",
                    "D. cơ thể sinh vật luôn cần năng lượng, nhưng không phải lúc nào cũng cần vật chất."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L2-015. Điểm giống nhau giữa chu trình carbon và chu trình nitrogen là",

                options: ["A. các nguyên tố đều vào chu trình dứơi dạng khí.",
                    "B. các nguyên tố đều vào chu trình thông qua hoạt động quang hợp của thực vật.",
                    "C. phần lớn các nguyên tố được hoàn lại cho chu trình.",
                    "D. phần lớn các nguyên tố tách khỏi chu trình đi vào các chất lắng đọng."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L2-016. Khi nói về chu trình sinh địa hóa carbon, phát biểu nào sau đây là đúng?",

                options: ["A. Một phần nhỏ carbon tách ra từ chu trình dinh dưỡng để đi vào các lớp trầm tích.",
                    "B. Sự vận chuyển carbon qua mỗi bậc dinh dưỡng không phụ thuộc vào hiệu suất sinh thái của bậc dinh dưỡng đó.",
                    "C. Carbon đi vào chu trình dưới dạng carbon monoxide (CO).",
                    "D. Toàn bộ lượng carbon sau khi đi qua chu trình dinh dưỡng được trở lại môi trường không khí."],
                answer: 0
            },
            {
                question: "MB-HST,SQ&BVMT-L2-017. Chu trình carbon trong sinh quyển:",

                options: ["A. liên quan tới các yếu tố vô sinh của hệ sinh thái.",
                    "B. gắn liền với toàn bộ vật chất trong hệ sinh thái.",
                    "C. là quá trình tái sinh một phần vật chất của hệ sinh thái.",
                    "D. là quá trình tái sinh một phần năng lượng của hệ sinh thái."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L2-018. Chu trình sinh địa hóa của một hệ sinh thái có liên quan đến yếu tố vô cơ cũng như hữu cơ của hệ sinh thái đó, trong các chu trình đó đặc điểm nào sau đây hoàn toàn không được nhắc tới?",

                options: ["A. Sự chuyển hóa các chất từ hữu cơ thành vô cơ và ngược lại.",
                    "B. Con đường vật chất từ ngoài vào cơ thể.",
                    "C. Con đường vật chất từ cơ thể ra môi trường.",
                    "D. Chu trình năng lượng trong hệ sinh thái."],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-019. Trong chu trình nitrogen, vi khuẩn nitrate hóa có vai trò:",

                options: ["A. chuyển hóa NH<sub>4</sub><sup>+</sup> thành NO<sub>3</sub><sup>-</sup>",
                    "B. chuyển hóa N<sub>2</sub> thành NH<sub>4</sub><sup>+</sup>",
                    "C. chuyển hóa NO<sub>3</sub><sup>-</sup> thành NH<sub>4</sub><sup>+</sup>",
                    "D. chuyển hóa NO<sub>2</sub><sup>-</sup> thành NO<sub>3</sub><sup>-</sup>"],
                answer: 3
            },
            {
                question: "MB-HST,SQ&BVMT-L2-020. Trong chu trình sinh địa hóa có hiện tượng nào sau đây?",

                options: ["A. Trao đổi các chất liên tục giữa môi trường và sinh vật.",
                    "B. Trao đổi các chất tạm thời giữa môi trường và sinh vật.",
                    "C. Trao đổi các chất liên tục giữa sinh vật và sinh vật.",
                    "D. Trao đổi các chất theo từng thời kì giữa môi trường và sinh vật."],
                answer: 0
            },

            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 2 khác...
        ],
        level3: [
            {
                question: "MB-HST,SQ&BVMT-L3-001. Nghiên cứu diễn thế sinh thái có ý nghĩa:",
                options: ["A. dự đoán được quần xã tiên phong và quần xã cuối cùng.",
                    "B. nắm được lịch sử phát triển của quần xã.",
                    "C. xây dựng kế hoạch bảo vệ và khai thác hợp lí nguồn tài nguyên, khắc phục những biến đổi bất lợi của môi trường.",
                    "D. đề ra các biện pháp kĩ thuật trong trồng trọt và chăn nuôi."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L3-002. Trong rừng mưa nhiệt đới người ta chặt cây để làm nương rẫy. Trên đó, bắt đầu là các trảng cỏ phát triển, các cây họ lúa, họ đậu, họ cói cũng sẽ phát triển do được chăm sóc. Cũng có thể mọc lại một số cây gỗ nhưng đó là những cây ưa sáng, phát triển nhanh và có gỗ mềm. Có cả các cây dây leo phát triển nhưng tổng số loài bao giờ cũng ít đi. Đoạn văn trên mô tả quá trình:",
                options: ["A. Diễn thế nguyên sinh trên cạn.",
                    "B. Diễn thế nguyên sinh dưới nước.",
                    "C. Diễn thế thứ sinh của rừng.",
                    "D. Điều chỉnh số lượng cá thể của quần thể."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L3-003. Câu ca dao đồng ruộng có câu. <em>Lúa chiêm lấp ló đầu bờ.Hễ nghe tiếng sấm phất cờ mà lên.</em> Câu ca dao đó được giải thích với lí do cơ bản:",
                options: ["A. khi có tiếng sấm báo hiệu trời sắp đổ mưa, cung cấp cho đồng ruộng một lượng nước, giúp lúa phát triển tốt hơn.",
                    "B. khi có tiếng sấm báo hiệu trời sắp đổ mưa, cung cấp cho đồng ruộng một lượng nitrogen trong khí quyển dưới dạng nitrate, giúp lúa phát triển.",
                    "C. khi có tiếng sấm báo hiệu trời sắp để mưa, cung cấp cho cây lúa một lượng phosphorus dưới dạng photphate hòa tan, giúp lúa phát triển tốt.",
                    "D. khi có tiếng sấm báo hiệu trời sắp đổ mưa, cung cấp cho cây lúa một lượng carbon để lúa quang hợp tổng hợp chất hữu cơ giúp lúa lớn nhanh."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L3-004. Điều nào dưới đây không đúng đối với chu trình nitrogen?",
                options: ["A. Vòng tuần hoàn được khép kín qua hoạt động của một số vi khuẩn phản nitrate, các vi khuẩn này phân giải đạm trong đất, nước... và giải phóng nitrogen vào không khí.",
                    "B. Khí quyển là nơi dự trữ nitrogen chủ yếu.Phần chính của chu trình nitrogen là là các sinh vật phân giải đã biến protein trong xác sinh vật thành các hợp chất đạm amonium, nitrate.",
                    "C. Các hợp chất nitrogen luôn trao đổi theo vòng tuần hoàn kín.",
                    "D. Thực vật hấp thụ các dạng đạm ở dạng muối amonium và nitrate cấu tạo nên cơ thể sống. Trong quần xã, nitrogen được luân chuyển qua lưới thức ăn. Khi sinh vật chết, protein xác sinh vật lại tiếp tục được phân giải thành đạm của môi trường."],
                answer: 2
            },
            {
                question: "MB-HST,SQ&BVMT-L3-005. Quá trình nào sau đây không trả lại CO<sub>2</sub> vào môi trường?",
                options: ["A. Hô hấp của động vật và thực vật.",
                    "B. Lắng đọng vật chất.",
                    "C. Sản xuất công nghiệp, giao thông vận tải.",
                    "D. Sử dụng nhiên liệu hóa thạch."],
                answer: 1
            },
            {
                question: "MB-HST,SQ&BVMT-L3-006. Ý nào không đúng với hiệu quả việc thay đổi các loại cây trồng hợp lí (trồng luân canh và xen kẽ)?",
                options: ["A. Tăng năng xuất cây trồng.",
                    "B. Tăng sự hỗ trợ giữa các loại cây trồng.",
                    "C. Tận dụng được hiệu suất sử dụng đất.",
                    "D. Làm cho đất không bị cạn kiệt nguồn dinh dưỡng."],
                answer: 1
            },
            // Thêm các câu hỏi Hệ sinh thái, sinh quyển và BVMT level 3 khác...
        ]
    },
    tfc1: {
        level1: [

            {
                question: "DB-DTPT-L1-001. Khi nói về cấu trúc gene của sinh vật nhân sơ, mỗi phát biểu dưới đây là Đúng hai Sai?",
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
                question: "DB-CSVCDTPT-L2-001. Tại nhiệt độ nóng chảy phù hợp trong quá trình tái bản, phiên mã cũng như thực hiện lai phân tử, gene bị đứt các liên kết hydrogen và tách rời hai mạch. Có bốn gene dài như nhau nhưng tỉ lệ phần trăm số nucleotide là khác nhau. Gene 1 có 10%T; Gene 2 có 15%T; Gene 3 có 20%T; Gene 4 có 25%T. Các kết luận dưới đây đúng hay sai?",
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
                question: "DB-CSVCDTPT-L3-001. Trong một vụ án hình sự, một người phụ nữ (F) bị mất cắp một số tiền lớn trong két sắt. Số tiền đã nhanh chóng được cảnh sát tìm thấy và một trong các cọc tiền có vết máu do thủ phạm phá két sắt bị thương để lại. Cảnh sát điều tra phát hiện có một mẫu DNA (S) dính ở cọc tiền. Liên quan tới vụ việc này có 3 người đàn ông (M1, M2, M3), trong đó có 1 người chồng đã li dị của phụ nữ F. Họ có một đứa con chung (B). Hình dưới đây biểu thị kết quả điện di phân tích DNA của mẫu S và những người liên quan. Các khẳng định dưới đây là đúng hay sai?",
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
    tfCCDTPT: {
        level1: [
            {
                question: "DB-CCDTPT-L1-001. Các nhận định sau đây về operon là Đúng hai Sai?",
                image: "https://nhantri.top/media/Grade12/operonLac.png",
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
            {
                question: "DB-CCDTPT-L1-002. Trong operon Lac ở E.coli, khi môi trường không có lactose mà enzyme chuyển hóa lactose vẫn được tạo ra với một lượng như khi có lactose. Một học sinh có một số nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/operonLac.png",
                statements: [
                    {
                        text: "Do vùng khởi động (P) trong OPERON bị bất hoạt nên RNA polymerase có thể bám vào để khởi động quá trình phiên mã.", correct: false
                    },
                    {
                        text: "Do vùng khởi động của gene lacI bị đột biến nên không tạo được protein ức chế.", correct: true
                    },
                    {
                        text: "Do vùng vận hành (O) bị đột biến nên không liên kết được với protein ức chế.", correct: true
                    },
                    { text: "Do các gene cấu trúc (Z, Y, A) bị đột biến làm tăng khả năng biểu hiện của các phân tử protein do gene mã hóa.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L1-003. Ở vi khuẩn E.coli, xét một đoạn phân tử DNA có năm gene A, B, D, E, G. Trong đó có bốn gene A, B, D, E thuộc cùng một operon. Mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/operonLac.png",
                statements: [
                    {
                        text: "Nếu gene A tái bản ba lần thì gene D cũng tái bản ba lần.", correct: true
                    },
                    {
                        text: "Nếu gene B tạo được 20 phân tử mRNA thì gene E cũng tạo được 20 phân tử mRNA.", correct: true
                    },
                    {
                        text: "Nếu gene G tổng hợp ra 15 phân tử RNA thì gene D cũng tổng hợp ra 15 phân tử RNA.", correct: false
                    },
                    { text: "Nếu xảy ra đột biến mất một cặp nucleotide ở gene A thì có thể sẽ làm thay đổi cấu trúc của mRNA ở tất cả các gene.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L1-004. Khi nghiên cứu về hoạt động operon Lac ở ba chủng vi khuẩn E.coli, người ta thu được kêt quả trong bảng sau. Từ các dữ liệu trong bản, kết luận dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/3chungope.png",
                statements: [
                    {
                        text: "Có hai chủng bị lãng phí vật chất và năng lượng bởi phiên mã không kiểm soát.", correct: true
                    },
                    {
                        text: "Chủng 1 có operon Lac hoạt động bình thường.", correct: true
                    },
                    {
                        text: "Có thể vùng P của gene LacI ở chủng 3 đã bị mất hoạt tính.", correct: true
                    },
                    { text: "Chủng 2 có thể đã bị đột biến trong các gene Z, Y, A khiến chúng tăng phiên mã.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L1(aNT1;bTH2;cTH4;dTH5)-005. Một nghiên cứu cơ chế nhân đôi phân tử DNA trên vi khuẩn E. coli (có chu kỳ nhân đôi sau 20 phút) được tiến hành gồm các bước: (1) Nuôi cấy trong môi trường chứa nucleotide chứa N<sup>15</sup> qua nhiều thế hệ tại bình 1. (2) Chuyển 10 tế bào vi khuẩn từ bình 1 sang nuôi cấy trong môi trường chỉ  N<sup>14</sup> tại bình 2. (3) So sánh kết quả thí nghiệm với các mô hình dự đoán nguyên tắc tái bản DNA. (4) DNA được chiết rút từ vi khuẩn tại bình 2 để quay li tâm ở các thời điểm 20 phút và 40 phút.",
                image: "https://nhantri.top/media/Grade12/litamdna.png",
                statements: [
                    {
                        text: "Nguyên tố N tham gia cấu trúc nucleotide.", correct: true
                    },
                    {
                        text: "Bước 1 có ý nghĩa làm sạch các tế bào E. coli trong môi trường chứa đồng vị N<sup>15</sup>.", correct: true
                    },
                    {
                        text: "Tiến trình đúng của các bước trong hoạt động nghiên cứu để xác định được nguyên tắc bán bảo tồn trong tái bản DNA: 1, 2, 4, 3.", correct: true
                    },
                    { text: "Nếu ban đầu nuôi cấy tế bào trong môi trường chứa N<sup>14</sup>, sau đó chuyển sang môi trường chứa N<sup>15</sup> trước khi lấy mẫu, vẫn cho nhận định nguyên tắc bán bảo tồn trong tái bản DNA.", correct: true }
                ]
            },
        ],
        level2: [
            {
                question: "DB-CCDTPT-L2-001. Ở sinh vi khuẩn, phiên mã được kết thúc thông qua hai cơ chế chính: hoặc do RNA polymerase tương tác với tín hiệu kết thúc của gene, hoặc do protein tín hiệu bám vào vùng kết thúc của gene. Một chủng vi khuẩn E.coli bị đột biến gene mã hóa một thành phần của enzyme RNA polymerase và enzyme chỉ bị bất hoạt ở nhiệt độ cao. Nuôi chủng đột biến này ở nhiệt độ cao. Kết luận sau đây là đúng hay sai?",
                statements: [
                    {
                        text: "Phiên mã không diễn ra.", correct: false
                    },
                    {
                        text: "Tất cả các phân tử RNA đều dài hơn bình thường.", correct: false
                    },
                    {
                        text: "Một số phân tử RNA dài hơn bình thường.", correct: true
                    },
                    { text: "RNA được sao chép từ cả hai sợi của gene.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L2-002. Hình sau mô tả quá trình phiên mã và quá trình hoàn thiện mRNA sơ khai để tạo ra mRNA trưởng thành ở tế bào nhân thực. Nhân định sau đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/Catintron.png",
                statements: [
                    {
                        text: "Exon và intron đều được phiên mã từ trình tự gene trên DNA.", correct: true
                    },
                    {
                        text: "Quá trình biến đổi từ mRNA sơ khai tạo thành mRNA trưởng thành cần có sự tham gia của các enzyme.", correct: true
                    },
                    {
                        text: "Quá trình hoàn thiện mRNA xảy ra trong nhân tế bào.", correct: false
                    },
                    { text: "Các đoạn intron không có chức năng sinh học trong quá trình mã hóa chuỗi polypeptide nên bị cắt bỏ.", correct: true }
                ]
            },
            {
                question: "DB-CCDTPT-L2-003",
                image: "https://nhantri.top/media/Grade12/PMDM.png",
                statements: [
                    {
                        text: "Quá trình (1) và (2) đều xảy ra theo nguyên tắc bổ sung và nguyên tắc bán bảo toàn.", correct: false
                    },
                    {
                        text: "Hình ảnh nói về cơ chế truyền thông tin di truyền qua các thế hệ tế bào.", correct: false
                    },
                    {
                        text: "Thông qua các cơ chế di truyền này mà thông tin di truyền trong gene được biểu hiện thành tính trạng.", correct: true
                    },
                    { text: "Quá trình (1) có sự tham gia của enzyme DNA polymerase.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L2-004. Hình sau biểu diễn quy trình của công nghệ gene ở động vật. Phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/CNtbdv.png",
                statements: [
                    {
                        text: "Vector chuyển gene trong quy trình này là plasmid.", correct: true
                    },
                    {
                        text: "Quy trình này nhằm mục đích cuối cùng là tạo ra một lượng lớn bản sao gene tổng hợp insulin.", correct: true
                    },
                    {
                        text: "Để đảm bảo quy trình phân lập dòng tế bào chứa DNA tái tổ hợp thì gene tạo insulin phải là gene đánh dấu.", correct: true
                    },
                    { text: "Trước khi đem nuôi cấy dòng tế bào chứa DNA tái tổ hợp, người ta phải phân lập dòng tế bào chứa DNA tái tổ hợp.", correct: true }
                ]
            },
            {
                question: "DB-CCDTPT-L2-005. Một nhóm nhà khoa học đã tổng hợp các phân tử mRNA nhân tạo rồi đưa mRNA này vào các ống nghiệm có sẵn phức hợp tổng hợp protein. Nguyên liệu trong mỗi ống nghiệm chỉ có một loại amino acid. Kết quả thu được như ở bảng sau. Mỗi phát biểu dưới đây là Đúng hai Sai?",
                image: "https://nhantri.top/media/Grade12/PMNmRNA.png",
                statements: [
                    {
                        text: "Trong bảng mã di truyền, triplet 3' - AAA - 5' mã hóa cho amino acid Lys, không phải Phe.", correct: false
                    },
                    {
                        text: "Quá trình dịch mã nhân tạo có thể diễn ra ngay cả khi không có codon mở đầu.", correct: true
                    },
                    {
                        text: "Nếu cho các loại amino acid khác nhau vào cùng một ống nghiệm, có thể thu được loại protein có nhiều hơn hai loại amino acid.", correct: true
                    },
                    { text: "Bốn loại amino acid Lys, Phe, Gly, Pro đều được mã hóa bởi duy nhất một codon.", correct: false }
                ]
            },
            {
                question: "DB-CCDTPT-L1(aNT1;bNT4;cTH2;dTH4)-006. Một nghiên cứu cơ chế nhân đôi phân tử DNA trên vi khuẩn E. coli (có chu kỳ nhân đôi sau 20 phút) được tiến hành gồm các bước: (1) Nuôi cấy trong môi trường chứa nucleotide chứa N<sup>15</sup> qua nhiều thế hệ tại bình 1. (2) Chuyển 10 tế bào vi khuẩn từ bình 1 sang nuôi cấy trong môi trường chỉ  N<sup>14</sup> tại bình 2. (3) So sánh kết quả thí nghiệm với các mô hình dự đoán nguyên tắc tái bản DNA. (4) DNA được chiết rút từ vi khuẩn tại bình 2 để quay li tâm ở các thời điểm 20 phút và 40 phút.",
                image: "https://nhantri.top/media/Grade12/litamdna.png",
                statements: [
                    {
                        text: "Nucleotide trong môi trường tham gia cấu tạo phân tử DNA ở các tế bào vi khuẩn sau mỗi lần phân chia.", correct: true
                    },
                    {
                        text: "Có 30 tế bào vi khuẩn tại thời điểm 40 phút.", correct: false
                    },
                    {
                        text: "Kết quả quay li tâm tại thời điểm 40 phút củng cố nhận định nguyên tắc bán bảo tồn trong nhân đôi DNA được rút ra từ kết quả phân tích ở thời điểm 20 phút.", correct: true
                    },
                    { text: "Có thể thay thế đồng vị khác nhau của nguyên tố C trong thí nghiệm tương tự để rút ra nhận định nguyên tắc bán bảo tồn DNA.", correct: true }
                ]
            },
            {
                question: "DB-CCDTPT-L2(aNT1;bNT3;cNT7;dTH2)-007. Theo dõi thí nghiệm như ở trong hình dưới đây với mẫu vật được sử dụng là gan gà.",
                image: "https://nhantri.top/media/Grade12/litamdna.png",
                statements: [
                    {
                        text: "Thí nghiệm trên là thí nghiệm tách chiết DNA từ gan gà.", correct: true
                    },
                    {
                        text: "Dung dịch (1) trong hình vẽ là nước cốt dứa, còn dung dịch (2) là nước rửa bát.", correct: false
                    },
                    {
                        text: "Có bạn đưa ra ý kiến là có thể cho cồn trước khi cho nước cốt dứa, thí nghiệm vẫn thành công.", correct: false
                    },
                    { text: "Nếu thay thế gan gà bằng lá bắp cải hoặc bất kì mẫu vật sống nào khác thì cũng có thể tách chiết được DNA.", correct: true }
                ]
            },
        ],
        level3: [
            {
                question: "DB-CCDTPT-L3-001. Hình dưới đây cho thấy kết quả xác định mức biểu hiện (qua phiên mã và dịch mã) của gene Z mã hóa enzyme β-galactosidase ở chủng <em>E. coli</em> kiểu dại, sinh trưởng trong môi trường tối thiểu ban đầu không có lactose và được bổ sung một lượng nhất định lactose vào phút thứ 3. Các đường đồ thị (1), (2) biểu thị sản phẩm của gene Z (lượng enzyme β-galactosidase hoặc lượng mRNA).",
                image: "https://nhantri.top/media/Grade12/dothimRNA.png",
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
            {
                question: "DB-CCDTPT-L3-002. Hình ảnh sau đây mô tả về một cơ chế di truyền ở cấp độ phân tử, mỗi nhận định sau đây đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/catnoipm.png",
                statements: [
                    {
                        text: "Hình ảnh trên mô tả cơ chế phiên mã của sinh vật nhân thực.", correct: true
                    },
                    {
                        text: "Phân tử đang được tổng hợp có chiều từ E(5’) → F(3’).", correct: false
                    },
                    {
                        text: "Quá trình này chỉ tạo ra được một loại mRNA trưởng thành.", correct: false
                    },
                    {
                        text: "Cơ chế này có sự tham gia của enzyme RNA-polymerase.", correct: true
                    }
                ]
            },
        ]
    },
    tfc2: {
        level1: [
            {
                question: "DB-DTMĐ. Khi nói về nhiễm sắc thể ở sinh vật nhân thực, các nhận định sau đây nhận định nào đúng nhận định nào sai?",
                image: null,
                statements: [
                    {
                        text: "Trong tế bào soma của cơ thể lưỡng bội, NST tồn tại thành từng cặp nên được gọi là bộ 2n.", correct: true
                    },
                    {
                        text: "Số lượng NST nhiều hay ít là tiêu chí quan trọng phản ánh mức độ tiến hóa của loài.", correct: false
                    },
                    {
                        text: "Vùng đầu mút của NST là vị trí duy nhất có khả năng xảy ra trao đổi chéo trong giảm phân I.", correct: false
                    },
                    {
                        text: "Có chức năng lưu trữ, bảo quản và truyền đạt thông tin di truyền.", correct: true }
                ]
            },

        ],
        level2: [
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
        level3: [
            {
                question: "DB-DTMĐ-L3-001. Khi cho hai cây đậu Hà Lan P giao phấn với nhau, tạo ra F1 đồng loạt hạt trơn, màu vàng. Đem gieo riêng các hạt F1 để sau này cho từng cây F1 thụ phấn với cây cho hạt nhăn, màu xanh thì được kết quả sau đây:</br>– Trường hợp 1: 25 % số cây F1 đều cho tỉ lệ 1 hạt trơn, màu vàng : 1 hạt trơn, màu xanh. </br>– Trường hợp 2: 25 % số cây F1 đều cho tỉ lệ 1 hạt trơn, màu vàng : 1 hạt nhăn, màu vàng. </br>– Trường hợp 3: 25 % số cây F1 đều cho 100 % hạt trơn, màu vàng.</br>– Trường hợp 4: Số cây F1 còn lại đều cho tỉ lệ 1 hạt trơn, màu vàng : 1 hạt trơn, màu xanh : 1 hạt nhăn, màu vàng : 1 hạt nhăn, màu xanh.</br>Cho biết mỗi gene quy định một tính trạng. Theo lí thuyết, mỗi phát biểu sau về phép lai này là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Hạt trơn trội hoàn toàn so với hạt nhăn, màu vàng trội hoàn toàn so với màu xanh.", correct: true
                    },
                    {
                        text: "Hai tính trạng hình dạng và màu sắc hạt phân li độc lập với nhau.", correct: true
                    },
                    {
                        text: "Các cây F1 có nhiều hơn bốn loại kiểu gene.", correct: false
                    },
                    { text: "Ở P có thể có hai phép lai.", correct: true }
                ]
            },
        ]
    },
    tfc3: {
        level1: [
            {
                question: "DB-BSMĐ-L1-001. Ở một loài thực vật, giao phấn các cây hoa kép, trắng thuần chủng với các cây hoa đơn, đỏ thu được F1 toàn cây hoa kép, đỏ. Giao phấn F1 với nhau, F2 có tỉ lệ: 1 kép, trắng : 2 kép, đỏ : 1 đơn, đỏ. Cho biết khi xử lí đột biến gene tính trạng hình dạng hoa ở dòng thuần hoa kép, trắng chỉ thu được dạng hoa đơn, đỏ. Biết rằng không có hiện tượng tương tác gene, các allele trội là trội hoàn toàn. Theo lí thuyết, mỗi phát biểu sau đây về phép lai này là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Hoa kép trội hoàn toàn so với hoa đơn, hoa đỏ trội hoàn toàn so với hoa trắng.", correct: true
                    },
                    {
                        text: "Ở F1, tỉ lệ kiểu gene dị hợp tử là 100 %.", correct: true
                    },
                    {
                        text: "Ở F2, tỉ lệ kiểu gene tương tự tỉ lệ kiểu hình.", correct: true
                    },
                    {
                        text: "Trong quần thể có 10 kiểu gene quy định các tính trạng này.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB-BSMĐ-L2-001. Một nhóm nhà khoa học thực hiện nghiên cứu về đặc điểm di truyền ở ruồi giấm. Tính trạng màu mắt được quy định bởi 1 gene có hai allele tương ứng và gene nằm trên nhiễm sắc thể X, allele W quy định mắt đỏ trội hoàn toàn so với allelle w quy định mắt trắng. Cho phép lai giữa các con ruồi: P: ♀ mắt trắng x ♂ mắt đỏ → F1: 1 ♀ cái mắt đỏ : 1 ♂ đực mắt trắng → F1 giao phối ngẫu nhiên → F2: 1 ♀ mắt đỏ : 1 ♂ mắt đỏ : 1 ♀ mắt trắng : 1 ♂ mắt trắng → F2 giao phối ngẫu nhiên → F3. Xét các nhận định dưới đây, nhận định nào đúng, nhận định nào sai?",
                image: null,
                statements: [
                    {
                        text: "Ở F3, xuất hiện con đực mắt trắng với tỉ lệ 6/16.", correct: true
                    },
                    {
                        text: "Ruồi giấm cái mắt đỏ ở F1 có kiểu gen là X<sup>W</sup>X<sup>W</sup>.", correct: false
                    },
                    {
                        text: "Tính trạng màu mắt do gene nằm trên nhiễm sắc thể thường quy định.", correct: false
                    },
                    {
                        text: "Ở F3, tỉ lệ ruồi mắt trắng so với tỉ lệ ruồi mắt đỏ là 7/9.", correct: false }
                ]
            },
        ],
        level3: [
            {
                question: "DB-DTMG-L3-001. Dựa trên cơ sở các thí nghiệm về di truyền của Morgan, nhóm học sinh đã thực hiện các phép lai trên ruồi giấm và thu được kết quả sau: </br>Phép lai 1: ♂ thân xám, cánh cụt x ♀ thân đen, cánh dài thu được F1 gồm 100% thân xám, cánh dài.</br>Phép lai 2: ♀F1 của phép lai 1 (F1- 1) x ♂ thân đen, cánh cụt thu được Fa gồm 4 loại kiểu hình với tỉ lệ khác nhau.</br>Phép lai 3: ♀F1 - 1 x ♂F1 - 1 thu được F2 gồm 3 loại kiểu hình với tỉ lệ 1 : 2 : 1.</br>Biết rằng, mỗi tính trạng do một gene có 2 allele trội lặn hoàn toàn, nằm trên NST thường quy định.",
                image: null,
                statements: [
                    {
                        text: "Các phép lai nhằm mục đích xác định cơ chế di truyền chi phối các tính trạng.", correct: true
                    },
                    {
                        text: "Tần số hoán vị gene có thể xác định được từ kết quả phép lai 2.", correct: true
                    },
                    {
                        text: "Kết quả phép lai 3 cho phép nhận định rằng các gene quy định các tính trạng trên liên kết hoàn toàn ở ♂F1- 1.", correct: true
                    },
                    { text: "Nếu cho lai ♂F1 - 1 x ♀ thân đen, cánh cụt thì tỉ lệ các kiểu hình ở đời con giống với phép lai 2.", correct: false }
                ]
            },
            {
                question: "DB-DTMG-L3-002. Ở loài ốc sên <em>(Cepaea nemoralis)</em>, allele B quy định vỏ không có dải trội hoàn toàn so với allele b quy định vỏ có dải, allele Y quy định vỏ màu nâu trội hoàn toàn so với allele y quy định vỏ màu vàng. Các gene này đều nằm trên NST thường. Một con ốc sên màu vàng, vỏ có dải được lai với một con ốc sên đồng hợp tử màu nâu, không có dải, thu được F1. Sau đó, cho con F1 lai với ốc sên màu vàng, vỏ có dải thu được đời F1. Theo lí thuyết, mỗi phát biểu sau về phép lai này là đúng hay sai?",

                statements: [
                    {
                        text: "Nếu kết quả F1 xuất hiện hai kiểu hình, chứng tỏ các gene B và Y cùng nằm trên một NST và liên kết hoàn toàn.", correct: true
                    },
                    {
                        text: "Nếu kết quả F1 xuất hiện bốn kiểu hình với tỉ lệ bằng nhau, chứng tỏ các gene B và Y phải nằm trên các NST khác nhau.", correct: false
                    },
                    {
                        text: "Nếu kết quả F1 xuất hiện bốn kiểu hình và tỉ lệ kiểu hình giống F1 chiếm tỉ lệ lớn hơn, chứng tỏ các gene B và Y đã xảy ra hoán vị gene.", correct: true
                    },
                    {
                        text: "Nếu kết quả F1 xuất hiện bốn kiểu hình với tỉ lệ 41% : 41% : 9% : 9%, chứng tỏ khoảng cách giữa các gene B và Y trên một NST là 18%.", correct: true
                    }
                ]
            },
            {
                question: "DB-DTMG-L3-003. Ở loài ong mật, những trứng được thụ tinh thì nở thành ong thợ hoặc ong chúa; những trứng không được thụ tinh thì nở thành ong đực. Xét allele A quy định cánh dài trội hoàn toàn so với allele a quy định cánh ngắn; allele B quy định cánh rộng trội hoàn toàn so với allele b quy định cánh hẹp.Hai gene quy định các tính trạng này đều nằm trên một cặp NST thường và liên kết hoàn toàn với nhau.Cho ong cái cánh dài, rộng giao phối với ong đực cánh ngắn, hẹp thu được F, toàn cánh dài, rộng.Theo lí thuyết, mỗi phát biểu sau về phép lai này là đúng hay sai?",

                statements: [
                    {
                        text: "Bộ NST của ong đực khác với ong cái.", correct: true
                    },
                    {
                        text: "Số loại giao tử của mỗi con ong cái F1 và mỗi con ong đực F1 là bằng nhau.", correct: false
                    },
                    {
                        text: "Nếu cho F1 ngẫu phối, tạo ra F2 có tỉ lệ kiểu hình cánh dài, rộng ở ong cái gấp đôi ở ong đực.", correct: true
                    },
                    {
                        text: "Số loại kiểu gene tối đa của loài này là 14.", correct: true
                    }
                ]
            },
            {
                question: "DB-DTMG-L3-004. Ở ruồi giấm, xét 2 cặp gene Aa và Bb nằm trên nhiễm sắc thể thường. Thực hiện phép lai giữa hai cá thể (P), thu được F1 có tỉ lệ kiểu hình 1 : 2 : 1. Biết không xảy ra đột biến. Theo lí thuyết, mỗi phát biểu dưới đây là Đúng hay Sai?",

                statements: [
                    {
                        text: "Hai cá thể P có kiểu gene khác nhau.", correct: false
                    },
                    {
                        text: "F1 có tối đa 4 kiểu gene.", correct: false
                    },
                    {
                        text: "Cho con đực P lai phân tích thì có thể thu được ở đời con có 100% cá thể mang kiểu hình trội về 1 tính trạng.", correct: true
                    },
                    {
                        text: "Cho con cái P lai phân tích thì có thể thu được đời con có tỉ lệ kiểu hình 4 : 4 : 1 : 1.", correct: true
                    }
                ]
            },
        ]
    },
    tfBSMD: {
        level1: [
            {
                question: "DB-BSMĐ-L1-001. Người ta tiến hành một số phép lai ở chuột và thu được kết quả như bảng dưới đây. Biết tính trạng màu lông chuột do một gene nằm trên NST thường quy định. Theo lí thuyết, mỗi phát biểu về phép lai này là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/daallele.png",
                statements: [
                    {
                        text: "Tính trạng màu lông di truyền theo hiện tượng đa gene.", correct: false
                    },
                    {
                        text: "Thứ tự trội lặn của tính trạng màu lông lần lượt là Đen > Ghi > Kem > Bạch tạng.", correct: true
                    },
                    {
                        text: "Kiểu gene của cơ thể đen thế hệ P ở phép lai 1 giống phép lai 2.", correct: false
                    },
                    {
                        text: "Tỉ lệ kiểu gene đồng hợp tử ở F, tối đa là thuộc về phép lai 1 hoặc 3.", correct: true
                    }
                ]
            },
            {
                question: "DB-BSMĐ-L1-002. Ở một loài thú, tính trạng màu mắt do một gene có 4 allele nằm trên nhiễm sắc thể thường quy định. Allele A1 quy định mắt đen trội hoàn toàn so với các allele A2, A3, A4; Allele A2 quy định mắt đỏ trội hoàn toàn so với allele A3, A4; Allele A3 quy định mắt vàng trội hoàn toàn so với allele A4 quy định mắt trắng. Biết không xảy ra đột biến. Theo lí thuyết, có bao nhiêu phát biểu sau đây đúng?",
               
                statements: [
                    {
                        text: "Cho cá thể mắt đỏ giao phối với cá thể mắt trắng, thu được F1 có tối đa 3 loại kiểu gene, 2 loại kiểu hình.", correct: false
                    },
                    {
                        text: "Cho 1 cá thể mắt đen giao phối với 1 cá thể mắt trắng, đời con có thể có tỉ lệ kiểu hình là 1 con mắt đen: 1 con mắt đỏ.", correct: true
                    },
                    {
                        text: "Cho 1 cá thể mắt đen giao phối với 1 cá thể mắt đỏ, đời con có thể có tỉ lệ kiểu hình là 100% con mắt đen.", correct: true
                    },
                    {
                        text: "Cho 1 cá thể mắt vàng giao phối với 1 cá thể mắt đỏ, đời con có thể có tỉ lệ kiểu hình là 3 con mắt đỏ: 1 con mắt vàng.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-BSMĐ-L2-001. Ở một loài thực vật, sự hình thành màu hoa do các cặp gene A, a và B, b phân li độc lập, tác động qua lại cùng quy định theo sơ đồ trong hình. Biết các allele a và b không tổng hợp được enzyme tương ứng. Mỗi phát biểu sau đây về tính trạng này sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/tuongtac.png",
                statements: [
                    {
                        text: "Tính trạng màu hoa tuân theo quy luật tương tác gene.", correct: true
                    },
                    {
                        text: "Quần thể có tối đa 9 kiểu gene khác nhau quy định tính trạng màu hoa.", correct: true
                    },
                    {
                        text: "Để đời con thu được 4 loại kiểu hình khác nhau thì kiểu hình của hai cây bố mẹ phải khác nhau.", correct: false
                    },
                    { text: "Phép lai giữa hai cây thuần chủng có kiểu hình khác nhau, đời con tạo ra đồng loạt hoa tím thì P có thể có hai phép lai.", correct: false }
                ]
            },
            {
                question: "DB-BSMĐ-L2-002. Ở một loài thực vật, để tạo thành màu sắc hoa có sự tương tác của hai gen không allele A và B theo sơ đồ. Khi tế bào đồng thời có cả sắc tố đỏ và sắc tố xanh thì cho hoa màu tím. Cho cây có kiểu gene AaBb tự thụ phấn được F1.",
                image: "https://nhantri.top/media/Grade12/sodott.png",
                statements: [
                    {
                        text: "Các cây F1 giao phấn tự do được F2. Trong số các cây hoa đỏ ở F2, cây thuần chủng chiếm tỉ lệ 1/3.", correct: true
                    },
                    {
                        text: "Trong số các cây F2 cây dị hợp một cặp gene chiếm tỉ lệ 1/2.", correct: true
                    },
                    {
                        text: "Cho các cây hoa đỏ F1 giao phấn với nhau thu được các cây con có hoa đỏ chiếm tỉ lệ 9/16.", correct: false
                    },
                    {
                        text: "Cho các cây hoa xanh F1 giao phấn tự do với nhau thu được các cây hoa đỏ chiếm tỉ lệ 8/9.", correct: false
                    }
                ]
            },
            {
                question: "DB-BSMĐ-L2-003. Ở một loài thực vật, cho giao phấn cây hoa trắng thuần chủng với cây hoa đỏ thuần chủng được F1 có 100% cây hoa đỏ. Cho cây F1 tự thụ phấn thu được F2 có tỉ lệ: 9 cây hoa đỏ : 6 cây hoa vàng : 1 cây hoa trắng. Cho tất cả các cây hoa vàng và hoa trắng  ở F2 giao phấn ngẫu nhiên với nhau được F3.",

                statements: [
                    {
                        text: "Cây hoa đỏ dị hợp ở thế hệ F2 chiếm 18,75%.", correct: false
                    },
                    {
                        text: "F3 xuất hiện 9 loại kiểu gene.", correct: false
                    },
                    {
                        text: "Cây hoa đỏ ở thế hệ F3 chiếm tỉ lệ 4/49.", correct: false
                    },
                    {
                        text: "Cây hoa vàng dị hợp ở thế hệ F3 chiếm tỉ lệ 24/49.", correct: true
                    }
                ]
            },
            {
                question: "DB-BSMĐ-L2-004. Một loài thực vật, tính trạng màu sắc hạt do 2 gene quy định, mỗi gene đều có 2 allele, di truyền theo tương tác cộng gộp. Trong kiểu gene có 4 allele trội quy định màu đỏ đậm, có 3 allele trội quy định màu đỏ vừa, có 2 allele trội quy định màu đỏ nhạt, có 1 allele trội quy định màu hồng, không có allele trội quy định màu trắng. Tính trạng chiều cao cây do 1 gene có 2 allele quy định, tính trạng thân cao trội hoàn toàn so với tính trạng thân thấp. Các gene này nằm trên các nhiễm sắc thể thường khác nhau.",

                statements: [
                    {
                        text: "Cho cây dị hợp 3 cặp gene giao phấn với nhau, đời con có thể thu được tối đa 10 kiểu hình.", correct: true
                    },
                    {
                        text: "Cây cao, đỏ vừa có 3 kiểu gene khác nhau.", correct: false
                    },
                    {
                        text: "Cho cây dị hợp 3 cặp gene(P) giao phấn với nhau thu được F1.Nếu cho các cây hồng, thân thấp ở F1 giao phấn ngẫu nhiên, đời con có kiểu hình thân thấp, hạt trắng chiếm tỉ lệ 25%.", correct: true
                    },
                    {
                        text: "Cho cây dị hợp 3 cặp gene tự thụ phấn, đời con kiểu hình thân cao, hoa đỏ vừa chiếm tỉ lệ 18, 75%.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-BSMĐ-L3-001. Ở ngô <em>(Zea mays)</em>, màu sắc hạt do hai cặp gene A, a, và B, b phân li độc lập, tác động qua lại cùng quy định, kiểu gene chứa cả allele A và B quy định hạt màu tím; các kiểu gene chỉ chứa một allele trội hoặc không chứa allele trội thì quy định hạt màu trắng.</br> Theo lí thuyết, mỗi phát biểu sau đây về tính trạng này là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Tính trạng màu sắc hạt tuân theo quy luật tương tác gene.", correct: true
                    },
                    {
                        text: "Trong quần thể, số kiểu gene quy định hạt tím nhiều hơn số kiểu gene quy định hạt trắng.", correct: false
                    },
                    {
                        text: "Phép lai giữa cây hạt tim với cây hạt trắng tạo ra đời con đồng loạt hạt tím, chứng tỏ các cây bố mẹ là thuần chủng.", correct: false
                    },
                    {
                        text: "Phép lai giữa một cây hạt tím với một cây hạt trắng, tạo ra đời con có tỉ lệ 1 hạt tím: 3 hạt trắng, thì ở đời con này có bốn loại kiểu gene.", correct: true
                    }
                ]
            },
            {
                question: "DB-BSMĐ-L3-002. Ở một loài thực vật, tính trạng hoa xanh do hai cặp gene A, a và B, b phân li độc lập cùng quy định.Một nhà khoa học xử lí hạt của cây có hoa màu xanh thuần chủng bằng tác nhân đột biến để tạo ra một quần thể các cây đột biến; trong đó có ba đột biến lặn thuần chủng kí hiệu X1, X2 và X3 cùng cho hoa màu trắng.Tiếp tục tiến hành các phép lai sau:</br>P1: 1 cây X1 × 1 cây X2, tạo ra F1, F1 tự thụ tạo ra F2: 100 % cây hoa màu trắng.</br>P2: 1 cây X2 × 1 cây X3, tạo ra F1, F1 tự thụ tạo ra F2: 9 cây hoa màu xanh: 7 cây hoa màu trắng.</br> Theo lí thuyết, mỗi phát biểu sau đây về thí nghiệm này là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Kiểu hình của các cây F1 ở P1 là hoa trắng.", correct: true
                    },
                    {
                        text: "Tính trạng màu hoa di truyền theo quy luật tương tác bổ sung.", correct: true
                    },
                    {
                        text: "Cây X2, X3 là hai thể đột biến gene lặn khác locus.", correct: true
                    },
                    {
                        text: "Ở F2 của P1 có tỉ lệ kiểu gene đồng hợp bằng tỉ lệ kiểu gene dị hợp.", correct: true
                    }
                ]
            },
            {
                question: "DB-BSMĐ-L3-003. Cho cây hoa đỏ (P) có kiểu gene dị hợp 2 cặp gene tự thụ phấn, thu được F1 có tỉ lệ kiểu hình: 56,25% hoa đỏ : 18,75% hoa hồng : 18,75% hoa vàng : 6,25% hoa trắng. Biết không xảy ra đột biến. Theo lí thuyết, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Nếu cho 1 cây hoa hồng giao phấn với một cây hoa vàng thì có thể thu được đời con với tỉ lệ kiểu hình là 1 cây hoa đỏ : 1 cây hoa vàng.", correct: true
                    },
                    {
                        text: "Nếu cho tất cả các cây hoa đỏ ở F1 lai phân tích, tỉ lệ phân li kiểu hình ở đời con là: 4 cây hoa đỏ, 2 cây hoa hồng, 2 cây hoa vàng, 1 cây hoa trắng.", correct: true
                    },
                    {
                        text: "Cho tất cả các cây hoa đỏ F1 giao phấn ngẫu nhiên thì tỉ lệ kiểu hình ở F2 sẽ là 64 cây hoa đỏ: 8 cây hoa hồng: 8 cây hoa vàng: 1 cây hoa trắng.", correct: true
                    },
                    {
                        text: "Nếu cho tất cả các cây hoa vàng ở F1 giao phấn với tất cả các cây hoa hồng F1, thu được F2 có tỉ lệ kiểu hình là 4 cây hoa đỏ, 2 cây hoa hồng, 2 cây hoa vàng, 1 cây hoa trắng.", correct: true
                    }
                ]
            },
        ]
    },

    tfDBG: {
        level1: [
            {
                question: "DB-ĐBG-L1-001. Khi nói về đột biến gene, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Quá trình nhân đôi DNA đã tạo ra gene mới bị mất một cặp so với gene ban đầu.", correct: true
                    },
                    {
                        text: "Phân tử mRNA tạo ra sau phiên mã bị mất một cặp nucleotide so với phân tử mRNA ban đầu.", correct: false
                    },
                    {
                        text: "Phân tử mRNA tạo ra sau phiên mã bị thay thế một cặp nucleotide so với phân tử mRNA ban đầu.", correct: false
                    },
                    { text: "Gene tạo ra sau quá trình nhân đôi DNA bị thay thế ở một nucleotide so với gene ban đầu.", correct: true }
                ]
            },
            {
                question: "DB-ĐBG-L1-002. Khi nói về đột biến gene, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Đột biến điểm có thể không làm thay đổi tổng liên kết hydrogen của gene.", correct: true
                    },
                    {
                        text: "Qua quá trình phân bào, gene đột biến được di truyền cho tế bào con.", correct: true
                    },
                    {
                        text: "Một đột biến làm tăng liên kết hydrogen của gene thì chứng tỏ sẽ làm tăng chiều dài của gene.", correct: false
                    },
                    {
                        text: "Đột biến điểm tạo ra codon kết thúc sớm có thể làm phân tử mRNA tổng hợp ngắn hơn bình thường.", correct: true
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-ĐBG-L2-001. Ở một loài thực vật lưỡng bội, giả sử allele A bị đột biến điểm tại vùng mã hoá trở thành allele A1. Theo lí thuyết, mỗi phát biểu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Allele A và allele A1, có thể có số lượng nucleotide bằng nhau hoặc hơn kém nhau một cặp nucleotide.", correct: true
                    },
                    {
                        text: "Nếu phân tử protein do allele A1 mã hoá có chức năng bị thay đổi so với phân tử protein do allele A mã hoá thì cơ thể mang allele A1 là thể đột biến.", correct: true
                    },
                    {
                        text: "Nếu allele A và allele A1 có số nucleotide bằng nhau thì chuỗi polypeptide do hai allele này mã hoá có thể sẽ có số amino acid khác nhau.", correct: true
                    },
                    {
                        text: "Nếu gene A1 là gene trội so với gene A thì thể đột biến có kiểu gene là AA.", correct: false
                    }
                ]
            },
            {
                question: "DB-ĐBG-L2-002. Bảng cho biết trình tự nucleotide trên một đoạn ở vùng mã hóa của mạch gốc quy định protein ở sinh vật nhân sơ và các allele được tạo ra từ gene này do đột biến điểm. Mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/bDBG.png",
                statements: [
                    {
                        text: "Chuỗi polypeptide do allele đột biến 1 mã hóa không thay đổi so với chuỗi polypeptide do gene ban đầu mã hóa.", correct: true
                    },
                    {
                        text: "Các phân tử mRNA được tổng hợp từ allele đột biến 2 và allele đột biến 3 có các codon bị thay đổi kể từ điểm xảy ra đột biến.", correct: false
                    },
                    {
                        text: "Allele đột biến 2 gây hậu quả nghiêm trọng và có thể biểu hiện thành thể đột biến.", correct: true
                    },
                    { text: "Allele đột biến 3 được hình thành do gene ban đầu bị đột biến thay thế cặp nucleotide.", correct: true }
                ]
            },
        ],
        level3: [
            {
                question: "DB-ĐBG-L3-001. Trình tự nucleotide trên một đoạn ở vùng mã hóa của mạch gốc của gene quy định protein ở sinh vật nhân sơ và các allele được tạo ra từ các gene này do đột biến điểm.</br>Gene ban đầu: 3’ - … TAC TTC AAA CCG … - 5’.</br>Allele đột biến 1: 3’ - … TAC TTC AAA CCA … - 5’.</br>Allele đột biến 2: 3’ - … TAC ATC AAA CCG … - 5’.</br> Allele đột biến 3: 3’ - … TAC TTC AAA TCG … - 5’.</br>Phân tích các dữ liệu trên, mỗi kết luận dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/5108.png",
                statements: [
                    {
                        text: "Chuỗi polypeptide do allele đột biến 1 mã hoá không thay đổi so với chuỗi polypeptide do gene ban đầu mã hoá.", correct: true
                    },
                    {
                        text: "Các phân tử mRNA được tổng hợp từ allele đột biến 2 và allele đột biến 3 có các codon bị thay đổi kể từ điểm xảy ra đột biến.", correct: false
                    },
                    {
                        text: "Allele đột biến 2 gây hậu quả nghiêm trọng và có thể biểu hiện thành thể đột biến.", correct: true
                    },
                    { text: "Allele đột biến 3 được hình thành do gene ban đầu bị đột biến thay thế một cặp nucleotide.", correct: true }
                ]
            },
            {
                question: "DB-ĐBG-L3-002. Cho biết các codon mã hoá các amino acid tương ứng như sau: 5'-AAA-3' → Lys; 5'-CCC-3' → Pro; 5'-GGG-3' → Gly; 5'-UUU-3'; 5'-UUC-3' → Phe; 5'-CUU-3’; 5'-CUC-3' → Leu; 5'-UCU-3' → Ser. </br>Một đoạn gene sau khi bị đột biến điểm đã mang thông tin mã hoá chuỗi polypeptide có trình tự amino acid: Pro – Gly – Lys – Phe. Biết rằng đột biến đã làm thay thế một nucleotide adenine (A) trên mạch gốc bằng guanine (G). Mỗi trình tự nucleotide trên đoạn mạch gốc của gene trước khi bị đột biến dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "3'-CCC GAG TTT AAA-5'.", correct: false
                    },
                    {
                        text: "5'-GAA TTT CCC GGG-3.", correct: true
                    },
                    {
                        text: "3'-GGG CCC TTT AAA-5'.", correct: true
                    },
                    {
                        text: "5'-GAG TTT CCC AAA-3.", correct: false
                    }
                ]
            },
            {
                question: "DB-ĐBG-L3-003. Có ba loại đột biến điểm (M1, M2, M3) khác nhau của cùng một gene (đối chứng). Khi điện di trên gel để phân tích RNA, protein của các gene đột biến M1, M2, M3 và gene trước đột biến (kí hiệu ĐC) thu được kết quả như hình sau. Phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/DBdiem.png",
                statements: [
                    {
                        text: "Đột biến M1 là đột biến tạo mã kết thúc sớm.", correct: true
                    },
                    {
                        text: "Đột biến M2 nhiều khả năng là đột biến thay thế một cặp nucleotide.", correct: true
                    },
                    {
                        text: "Đột biến M3 là đột biến xảy ra ở bộ ba kết thúc.", correct: true
                    },
                    { text: "Đột biến M1 có thể làm cho protein bị mất chức năng.", correct: true }
                ]
            },
            {
                question: "DB-ĐBG-L3-004. Vùng mã hóa của gene cấu trúc ở vi khuẩn, xét một đoạn mang thông tin quy định 5 amino acid của chuỗi polypeptide có trình tự như sau. Theo lí thuyết, phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/MachDB.png",
                statements: [
                    {
                        text: "Mạch 2 là mạch làm khuôn để thực hiện quá trình biểu hiện của gene.", correct: false
                    },
                    {
                        text: "Giả sử gene A nói trên bị đột biến thay thế một cặp nucleotide thành allele a làm thay đổi chức năng protein thì gene a có thể biểu hiện thành thể đột biến.", correct: true
                    },
                    {
                        text: "Nếu gene A bị đột biến thay thế một cặp nucleotide dẫn tới đoạn gene nói trên mã hóa nhiều hơn 5 amino acid thì đây có thể là đột biến thay thế cặp A- T bằng cặp G - C.", correct: false
                    },
                    { text: "Nếu gene A bị đột biến thêm một cặp G - C thì protein do gene đột biến quy định có thể bị thay đổi về chức năng.", correct: true }
                ]
            },


        ]
    },
    tfDBNST: {
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
                question: "DB-ĐBNST-L2-001. Ở cà chua <em>(Lycopersicon esculentum)</em>, phép lai giữa hai cây lưỡng bội thuần chủng, thu được F1 có các cây lưỡng bội và một số cây tam bội. Theo lí thuyết, mỗi phát biểu về phép lai này là đúng hay sai?",

                statements: [
                    {
                        text: "Cây tam bội thuộc thể đột biến số lượng NST.", correct: true
                    },
                    {
                        text: "Hàm lượng DNA trong tế bào sinh dưỡng của tất cả cây F1 là giống nhau.", correct: false
                    },
                    {
                        text: "Trong tế bào sinh dưỡng của cây lưỡng bội có NST tồn tại thành hai chiếc tương đồng, cây tam bội có NST tồn tại thành ba chiếc tương đồng.", correct: true
                    },
                    {
                        text: "Quá trình giảm phân của cây bố hoặc mẹ đã xảy ra rối loạn phân li ở tất cả các cặp NST của tất cả tế bào sinh giao tử tạo ra giao tử (2n), qua thụ tinh kết hợp với giao tử (n) tạo thành các hợp tử (3n).", correct: false
                    }
                ]
            },

            {
                question: "DB-ĐBNST-L3-001. Ở một loài thực vật, allele D quy định quả đỏ trội hoàn toàn so với allele d quy định quả vàng. Xét phép lai P: DD × dd, thu được các hợp tử F1. Dùng colchicine xử lí các hợp tử F1 rồi cho phát triển thành cây hoàn chỉnh. Biết rằng chỉ có 50% hợp tử F1 bị tứ bội hóa, còn lại ở dạng lưỡng bội. Các hợp tử F1 phát triển bình thường và thể tứ bội giảm phân chỉ cho giao tử lưỡng bội. Cho các cây F1 giao phấn ngẫu nhiên, thu được F2. Theo lí thuyết, những phát biểu sau đây về F2 là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Có 2 kiểu gene quy định kiểu hình quả vàng.", correct: false
                    },
                    {
                        text: "Có tối đa 12 kiểu gene.", correct: true
                    },
                    {
                        text: "Có tối đa 6 kiểu gene quy định kiểu hình quả đỏ.", correct: false
                    },
                    {
                        text: "Có 6, 25% số cây quả đỏ lưỡng bội thuần chủng.", correct: true
                    }
                ]
            },
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
        level3: [
            {
                question: "DB-ĐBNST-L3-001. Loài lúa mì lục bội <em>(Triticum aestivum)</em> hiện nay được hình thành theo con đường lai xa và đa bội nhiều lần từ ba loài khác nhau. Loài thứ nhất có hệ gene kí hiệu là AA với 2n = 14; loài thứ hai có hệ gene kí hiệu là BB với 2n = 14; loài thứ ba có hệ gene kí hiệu là DD với 2n = 14. Theo lí thuyết, mỗi phát biểu sau đây về loài lúa mì hiện nay là đúng hay sai?",

                statements: [
                    {
                        text: "Bộ NST của loài lúa mì hiện nay là 3n = 21.", correct: false
                    },
                    {
                        text: "Các cây lúa mì lục bội giảm phân không tạo giao tử bình thường.", correct: false
                    },
                    {
                        text: "Các NST tồn tại thành 6 NST tương đồng trong tế bào sinh dưỡng của loài này.", correct: false
                    },
                    { text: "Loài lúa mì lục bội này thể hiện một trong các vai trò của đột biến NST là tạo ra nguồn nguyên liệu cho quá trình hình thành loài mới nhờ lai xa và đa bội.", correct: true }
                ]
            },
        ]
    },
    tfDTHNUD: {
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
        level3: [
            {
                question: "DB-DTHN&UD-L3-001. Một cặp vợ chồng đến tư vấn di truyền sau khi người vợ bị sảy thai liên tiếp và chưa sinh được người con nào. Khi phân tích bộ NST của cặp vợ chồng, người chồng bị chuyển đoạn tương hỗ giữa NST số 3 và NST số 21, còn người vợ có bộ NST bình thường. Hình dưới đây minh hoạ cho 6 khả năng của bộ NST trong tinh trùng người chồng, trong đó, màu đen là NST số 3, màu trắng là NST số 21. Theo lí thuyết, mỗi phát biểu sau đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/chuyendoan.png",
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
            {
                question: "DB-DTHN&UD-L3-002. Hiện nay các trung tâm chiếu xạ ở Việt Nam đang sử dụng tia gamma Co<sup>60</sup> để xử lí hạt giống, chồi non, ... nhằm tạo ra các giống cây đột biến mới nhiều đặc điểm tốt như năng suất, khả năng chống chịu, đặc biệt là hạn hán. Trong các giống nho trồng ở miền Trung của Việt Nam, giống A cho quả nhỏ, ngọt và hầu như không hạt, nhưng khả năng chịu hạn kém. Một giống B khác cho quả to, hơi chua, được nhân giống bằng hạt là chủ yếu và có khả năng chịu hạn tốt.Sau khi gây đột biến, người ta đã chọn lọc được hai giống nho mới: giống C cho quả to, ngọt, hầu như không có hạt, nhưng chịu hạn kém và giống D cho quả to, ngọt, có hạt, chịu hạn tốt. Theo lí thuyết, mỗi nhận định sau là đúng hay sai?",

                statements: [
                    {
                        text: "Những giống cây ăn quả không hạt thường là thể đột biến đa bội lẻ.", correct: true
                    },
                    {
                        text: "Để tạo được giống nho mới có các đặc điểm ưu việt của cả hai giống nho đột biến C và D trên có thể sử dụng phương pháp lai tạo bằng thụ phấn chéo(lai hữu tính).", correct: false
                    },
                    {
                        text: "Đối với giống C, đột biến phát sinh ở loài này phải là đột biến trội.", correct: false
                    },
                    {
                        text: "Đối với giống D, đột biến phát sinh ở loài này có thể là đột biến trội hoặc đột biến lặn.", correct: true
                    }
                ]
            },
        ]
    },


    tfDTQT: {
        level1: [
            {
                question: "DB-DTQT-L1-001. Nghiên cứu thành phần kiểu gene của một quần thể qua các thế hệ thu được kết qủa trong bảng. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/bangkieugene.png",
                statements: [
                    {
                        text: "Quần thể này có thể đang chịu tác động của các yếu tố ngẫu nhiên.", correct: true
                    },
                    {
                        text: "Tần số allele trội tăng dần qua các thế hệ.", correct: false
                    },
                    {
                        text: "Ở thế hệ F1 và F2 quần thể ở trạng thái cân bằng.", correct: false
                    },
                    {
                        text: "Chọn lọc tự nhiên tác động từ F3 đến F4 theo hướng loại bỏ kiểu hình lặn.", correct: false }
                ]
            },

        ],
        level2: [
            {
                question: "DB-DTQT-L2-001. Nghiên cứu sự thay đổi thành phần kiểu gene ở một quần thể giao phối qua 4 thế hệ liên tiếp thu được kết quả như trong bảng sau:",
                image: "https://nhantri.top/media/Grade12/dtqtbang.png",
                statements: [
                    {
                        text: "Đột biến là nhân tố gây ra sự thay đổi cấu trúc di truyền của quần thể ở F3.", correct: false
                    },
                    {
                        text: "Các yếu tố ngẫu nhiên đã gây nên sự thay đổi cấu trúc di truyền của quần thể ở F3.", correct: true
                    },
                    {
                        text: "Tất cả các kiểu gene đồng hợp tử lặn đều vô sinh nên F3 có cấu trúc di truyền như vậy.", correct: false
                    },
                    {
                        text: "Tần số các allele A trước khi chịu tác động của nhân tố tiến hóa là 0, 8.", correct: true
                    }
                ]
            },
            {
                question: "DB-DTQT-L2-002. Mỗi phát biểu dưới đây là đúng hay sai khi nói về định luật Hardy - Weinberg?",
               
                statements: [
                    {
                        text: "Phản ánh trạng thái động của quần thể.", correct: false
                    },
                    {
                        text: "Từ tỉ lệ kiểu hình suy ta tỉ lệ các kiểu gene và tần số tương đối của các allele.", correct: true
                    },
                    {
                        text: "Từ tần số tương đối của các allele đã biết có thể dự đoán tỉ lệ các loại kiểu gene và kiểu hình trong quần thể.", correct: true
                    },
                    {
                        text: "Giải thích được tại sao trong thiên nhiên có những quần thể đã duy trì ổn định trong thời gian dài.", correct: true
                    }
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

    tfBCCCTH: {
        level1: [
            {
                question: "DB-BC&CCTH-L1-001. Mỗi phát biểu dưới đây là đúng hay sai khi nói về các nhân tố tiến hóa?",
                image: null,
                statements: [
                    {
                        text: "Đột biến là nguồn nguyên liệu sơ cấp cho quá trình tiến hóa.", correct: true
                    },
                    {
                        text: "Giao phối không ngẫu nhiên làm thay đổi tần số tương đối giữa các allele mà không làm thay đổi thành phần kiểu gene của quần thể.", correct: false
                    },
                    {
                        text: "Biến động di truyền và di nhập gene ảnh hưởng lớn tới các quần thể có kích thước nhỏ.", correct: true
                    },
                    { text: "Chọn lọc tự nhiên là nhân tố quy định chiều hướng và nhịp điệu của quá trình tiến hóa.", correct: true }
                ]
            },

        ],
        level2: [
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
    tfTHHD: {
        level1: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "Số liệu trên là bằng chứng tế bào học chứng minh mối quan hệ họ hàng giữa các loài.", correct: false
                    },
                    {
                        text: "Từ bảng trên cho thấy mối quan hệ họ hàng giữa các loài theo trật tự Người, chó, kì nhông, cá chép, cá mập.", correct: true
                    },
                    {
                        text: "Bảng trên chứng minh loài người tiến hóa nhất trong bậc thang tiến hóa của các loài.", correct: false
                    },
                    {
                        text: "Bảng trên cho thấy Cá mập và Kì nhông có các amino acid giống nhau ở chuỗi polypeptide anpha trong phân tử Hemoglobin là 38.6%", correct: true
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
    tfSPSCL: {
        level1: [
            {
                question: "...",
                image: null,
                statements: [
                    {
                        text: "Số liệu trên là bằng chứng tế bào học chứng minh mối quan hệ họ hàng giữa các loài.", correct: false
                    },
                    {
                        text: "Từ bảng trên cho thấy mối quan hệ họ hàng giữa các loài theo trật tự Người, chó, kì nhông, cá chép, cá mập.", correct: true
                    },
                    {
                        text: "Bảng trên chứng minh loài người tiến hóa nhất trong bậc thang tiến hóa của các loài.", correct: false
                    },
                    {
                        text: "Bảng trên cho thấy Cá mập và Kì nhông có các amino acid giống nhau ở chuỗi polypeptide anpha trong phân tử Hemoglobin là 38.6%", correct: true
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
    tfSTHCT: {
        level1: [
            {
                question: "DB-STHCT-L1-001. Khi nói về ảnh hưởng của ánh sáng đến sinh vật:",
                image: null,
                statements: [
                    {
                        text: "Ánh sáng giúp các loài chim định hướng đường bay khi di cư từ miền Bắc bán cầu về miền Nam bán cầu để tránh rét.", correct: true
                    },
                    {
                        text: "Ánh sáng là tác nhân chủ yếu đưa đến sự phân tầng trong rừng mưa nhiệt đới.", correct: true
                    },
                    {
                        text: "Ánh sáng giúp phần lớn các loài động vật có khả năng định hướng trong không gian và nhận biết các vật xung quanh.", correct: true
                    },
                    {
                        text: "Dựa vào sự thích nghi của thực vật với ánh sáng, thực vật được chia thành nhóm cây ưa ẩm và nhóm cây chịu hạn.", correct: false
                    }
                ]
            },
            {
                question: "DB-STHCT-L1-002. Các câu dưới đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Trong môi trường ruộng lúa: các yếu tố đất, nước, ánh sáng, vi khuẩn thuộc nhóm nhân tố vô sinh.", correct: false
                    },
                    {
                        text: "Do sống cùng trong một ruộng lúa nên giới hạn sinh thái về nhiệt độ của các loài sinh vật đều giống nhau.", correct: false
                    },
                    {
                        text: "Các nhân tố: động vật, thực vật, vi sinh vật thuộc nhóm nhân tố hữu sinh.", correct: true
                    },
                    {
                        text: "Các nhân tố sinh thái tác động riêng rẽ tới cây lúa.", correct: false
                    }
                ]
            },

        ],
        level2: [
            {
                question: "DB-STHCT-L2-001. Cá chép có giới hạn chịu đựng về nhiệt độ là 2°C đến 44°C, điểm cực thuận là 28°C. Cá rô phi có giới hạn chịu đựng về nhiệt độ là 5°C đến 42°C, điểm cực thuận là 30°C.",
                image: null,
                statements: [
                    {
                        text: "Cá rô phi có vùng phân bố rộng hơn vì có giới hạn chịu nhiệt rộng hơn.", correct: false
                    },
                    {
                        text: "So với giai đoạn trưởng thành, thì giai đoạn cá chép con chịu ảnh hưởng của nhiệt độ mạnh hơn.", correct: true
                    },
                    {
                        text: "Một số năm, về mùa động, ở Sa Pa nhiệt độ nước có thể xuống dưới 5°C.Nếu cá rô phi được nuôi ở Sa Pa vào thời điểm này sẽ bị chết rất nhiều.", correct: true
                    },
                    {
                        text: "Ở nhiệt độ 46°C cả cá chép và cá rô phi đều không thể tồn tại.", correct: true
                    }
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
    tfSTHQT: {
        level1: [
            {
                question: "DP-STHQT-L1-001. Tháp tuổi của 3 quần thể sinh vật với trạng thái phát triển khác nhau như hình dưới đây. Mỗi phát biểu sau là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/ndnhomtuoi.png",
                statements: [
                    {
                        text: "Quần thể 1 đang phát triển.", correct: true
                    },
                    {
                        text: "Quần thể 2 ổn định.", correct: true
                    },
                    {
                        text: "Quần thể 3 bị suy giảm do tác động của con người.", correct: true
                    },
                    {
                        text: "Mật độ quần thể 1 lớn hơn quần thể 2, 3.", correct: false
                    }
                ]
            },
            {
                question: "DP-STHQT-L1-002. Khi nói về sự biến động số lượng cá thể của quần thể sinh vật, mỗi phát biểu sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Trong những nhân tố sinh thái vô sinh, nhân tố khí hậu có ảnh hưởng thường xuyên và rõ rệt nhất tới sự biến động số lượng cá thể của quần thể.", correct: true
                    },
                    {
                        text: "Hươu và nai là những loài ít có khả năng bảo vệ vùng sống nên khả năng sống sót của con non phụ thuộc rất nhiều vào số lượng kẻ thù ăn thịt.", correct: true
                    },
                    {
                        text: "Ở chim, sự cạnh tranh nơi làm tổ ảnh hưởng tới khả năng sinh sản của các cá thể trong quần thể.", correct: true
                    },
                    {
                        text: "Hổ và báo là những loài có khả năng bảo vệ vùng sống nên sự cạnh tranh để bảo vệ vùng sống không ảnh hưởng tới số lượng cá thể trong quần thể.", correct: false
                    }
                ]
            },
            {
                question: "DP-STHQT-L1-003. Khi nói về mối quan hệ giữa các cá thể trong quần thể, phát biểu sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Chó rừng đi kiếm ăn theo đàn, nhờ đó bắt được trâu rừng có kích thước lớn hơn.Đây là ví dụ về mối quan hệ hỗ trợ cùng loài.", correct: true
                    },
                    {
                        text: "Quan hệ cạnh tranh giúp duy trì số lượng cá thể của quần thể ở mức độ phù hợp, đảm bảo sự tồn tại và phát triển của quần thể.", correct: true
                    },
                    {
                        text: "Quan hệ hỗ trợ đảm bảo cho quần thể tồn tại ổn định, khai thác tối ưu nguồn sống của môi trường.", correct: true
                    },
                    {
                        text: "Quan hệ cạnh tranh không ảnh hưởng đến số lượng và sự phân bố cá thể của quần thể trong tự nhiên.", correct: false
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DP-STHQT-L2-001. Khi thống kê tỉ lệ cá đánh bắt trong các mẻ lưới ở 3 vùng khác nhau, người ta thu được kết quả như sau:",
                image: "https://nhantri.top/media/Grade12/bangnhomtuoi.png",
                statements: [
                    {
                        text: "Vùng A  tuổi trước sinh sản quá lớn chứng tỏ khai thác cá ở vùng này quá mức.", correct: true
                    },
                    {
                        text: "Vùng C nhiều cá thể già nên nhu cầu thức ăn thấp.", correct: false
                    },
                    {
                        text: "Vùng B có quần thể trẻ đang phát triển.", correct: false
                    },
                    {
                        text: "Vùng C cần tăng cường khai thác để tạo nguồn thức ăn, nơi ở dồi dào cho quần thể phát triển.", correct: true
                    }
                ]
            },
            {
                question: "DP-STHQT-L2-002. Khi thống kê tỉ lệ cá đánh bắt trong các mẻ lưới ở 3 vùng khác nhau, người ta thu được kết quả như sau:",
                image: "https://nhantri.top/media/Grade12/carodong.png",
                statements: [
                    {
                        text: "Từ đồ thị cho thấy quần thể cá rô tăng trưởng theo tiềm năng sinh học trong điều kiện môi trường bị giới hạn.", correct: false
                    },
                    {
                        text: "Tốc độ tăng trưởng của quần thể cá rô tăng dần và đạt giá trị tối đa tại điểm uốn, qua điểm uốn tốc độ tăng trưởng của quần thể giảm dần và dừng lại khi quần thể đạt kích thước tối đa.", correct: true
                    },
                    {
                        text: "Ở pha cân bằng, quần thể cá rô có số lượng cá thể ổn định và phù hợp với khả năng cung cấp nguồn sống của môi trường.", correct: true
                    },
                    {
                        text: "Quần thể có số lượng tăng lên rất nhanh trước điểm uốn nhờ quan hệ hỗ trợ diễn ra mạnh mẽ trong quần thể sinh vật.", correct: false
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DP-STHQT-L3-001. Giả sử 4 quần thể của một loài thú được kí hiệu là A, B, C, D có diện tích khu phân bố và mật độ cá thể như ở bảng dưới đây.Cho biết diện tích khu phân bố của 4 quần thể đều không thay đổi, không có xuất cư và nhập cư. Các phát biểu sau đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/bangktqt.png",
                statements: [
                    {
                        text: "Quần thể A có kích thước nhỏ nhất.", correct: true
                    },
                    {
                        text: "Kích thước quần thể D lớn hơn kích thước quần thể C.", correct: true
                    },
                    {
                        text: "Quần thể D có kích thước lớn nhất.", correct: false
                    },
                    { text: "Kích thước quần thể C lớn hơn kích thước quần thể B.", correct: false }
                ]
            },
        ]
    },
    tfSTHQX: {
        level1: [
            {
                question: "DP-STHQX-L1-001. Khi nói về mối quan hệ giữa các loài trong quần xã, phát biểu sau đây đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Mối quan hệ vật chủ - vật kí sinh cũng là mối quan hệ con mồi - vật ăn thịt.", correct: false
                    },
                    {
                        text: "Những loài cùng sử dụng một nguồn thức ăn không thể chung sống trong cùng một sinh cảnh.", correct: false
                    },
                    {
                        text: "Trong tiến hoá, các loài gần nhau về nguồn gốc thường hướng đến sự phân li về ổ sinh thái của mình.", correct: true
                    },
                    { text: "Quan hệ cạnh tranh giữa các loài trong quần xã được xem là một trong những động lực của quá trình tiến hoá.", correct: true }
                ]
            },
            {
                question: "DP-STHQX-L1-002. Khi nói về sự phân bố cá thể trong không gian của quần xã, mỗi phát biểu sau đây đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Nhìn chung, sự phân bố cá thể trong tự nhiên có xu hướng làm giảm bớt mức độ cạnh tranh giữa các loài và nâng cao mức độ sử dụng nguồn sống của môi trường.", correct: true
                    },
                    {
                        text: "Nhìn chung, sinh vật phân bố theo chiều ngang thường tập trung nhiều  ở vùng có  điều kiện sống thuận lợi.", correct: true
                    },
                    {
                        text: "Sự phân bố cá thể trong không gian của quần xã tùy thuộc vào nhu cầu sống của từng loài.", correct: true
                    },
                    { text: "Trong hệ sinh thái rừng mưa nhiệt đới, kiểu phân bố theo chiều thẳng đứng chỉ gặp ở thực vật mà không gặp ở động vật.", correct: false }
                ]
            },
            {
                question: "DP-STHQX-L1-003. Khi nói về đặc trưng của quần xã sinh vật, mỗi phát biểu nào là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Quần xã càng đa dạng về thành phần loài thì lưới thức ăn càng đơn giản.", correct: false
                    },
                    {
                        text: "Sinh vật trong quần xã luôn tác động lẫn nhau đồng thời tác động qua lại với môi trường.", correct: true
                    },
                    {
                        text: "Mức độ đa dạng của quần xã được thể hiện qua số lượng các loài và số lượng cá thể của mỗi loài.", correct: true
                    },
                    { text: "Phân bố cá thể trong không gian của quần xã tùy thuộc vào nhu cầu sống của từng loài.", correct: true }
                ]
            },
            {
                question: "DP-STHQX-L1-004. Khi nói về đặc trưng thành phần loài của một số quần xã, phát biểu sau đây là đúng hay sai?",
                image: null,
                statements: [
                    {
                        text: "Cây lá kim là loài đặc trưng của rừng cây ôn đới.", correct: false
                    },
                    {
                        text: "Trong quần xã rừng U Minh, cây tràm được coi là loài đặc trưng.", correct: true
                    },
                    {
                        text: "Loài chủ chốt trong quần xã sinh vật là loài đặc hữu hoặc là loài có số lượng nhiều hơn hẳn các loài khác.", correct: false
                    },
                    { text: "Khi thành phần loài trong quần xã có sự thay đổi có thể dẫn tới sự biến động về cấu trúc, mối quan hệ giữa các loài và môi trường sống.", correct: true }
                ]
            },

        ],
        level2: [
            {
                question: "DB-STHQX-L2(aNT1-bNT4-cNT6-dVD1)-001. Loài nai sừng tấm sử dụng nguồn thức ăn chủ yếu là cây bụi như liễu và bạch dương, từ đất liền Ontario (cách đó 25 km) đã di chuyển đến Đảo Royale trên Hồ Superior vào khoảng năm 1900 bằng cách di chuyển qua hồ khi đóng băng. Chó sói (Wolves) sử dụng nai sừng tấm làm nguồn thức ăn chủ yếu, đã đến hòn đảo vào khoảng năm 1950 bằng cách di chuyển qua hồ đóng băng. Băng tan kể những năm 1950 và cả hai quần thể dường như đã bị cô lập khỏi quá trình nhập cư và di cư kể từ đó. Quần thể nai sừng tấm trên đảo đã trải qua hai đợt tăng và giảm lớn trong 50 năm qua. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/naisungtamm.png",
                statements: [
                    {
                        text: "Mối quan hệ sinh thái giữa nai sừng tấm và chó sói là cạnh tranh khác loài.", correct: false
                    },
                    {
                        text: "Nai sừng tấm thuộc bậc dinh dưỡng thứ hai trong các chuỗi thức ăn có sự tham gia của loài này.", correct: true
                    },
                    {
                        text: "Biến động kích thước quần thể nai sừng tấm dẫn đến sự biến động tăng giảm kích thước quần thể chó sói.", correct: true
                    },
                    {
                        text: "Kiểm soát vật ăn thịt có ý nghĩa trong việc tăng trưởng kích thước quần thể con mồi.", correct: true
                    }
                ]
            },
            {
                question: "DB-STHQX-L2(aNT1-bTH2-cTH2-dTH3)-002. Loài nai sừng tấm sử dụng nguồn thức ăn chủ yếu là cây bụi như liễu và bạch dương, từ đất liền Ontario (cách đó 25 km) đã di chuyển đến Đảo Royale trên Hồ Superior vào khoảng năm 1900 bằng cách di chuyển qua hồ khi đóng băng. Chó sói (Wolves) sử dụng nai sừng tấm làm nguồn thức ăn chủ yếu, đã đến hòn đảo vào khoảng năm 1950 bằng cách di chuyển qua hồ đóng băng. Băng tan kể những năm 1950 và cả hai quần thể dường như đã bị cô lập khỏi quá trình nhập cư và di cư kể từ đó. Quần thể nai sừng tấm trên đảo đã trải qua hai đợt tăng và giảm lớn trong 50 năm qua. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/naisungtamm.png",
                statements: [
                    {
                        text: "Mối quan hệ sinh thái giữa nai sừng tấm và cây liễu là sinh vật này ăn sinh vật khác.", correct: true
                    },
                    {
                        text: "Sự biến động kích thước quần thể nai sừng tấm có thể do nguyên nhân từ biến động kích thước vật ăn thịt và nguồn cung thực vật.", correct: true
                    },
                    {
                        text: "Để xác định ảnh hưởng chó sói với nai từng sấm cần so sánh với tình huống trước khi có sự hiện diện loài này tại quần xã sinh vật.", correct: false
                    },
                    {
                        text: "Để xác định ảnh hưởng chó sói với nai từng sấm cần so sánh với tình huống trước khi có sự hiện diện loài này tại quần xã sinh vật.", correct: true
                    }
                ]
            },
            {
                question: "DB-STHQX-L2-003. Hình bên mô tả đường cong tăng trưởng của hai loài trùng cỏ (loài 1: <em>Paramecium caudatum và loài 2:Paramecium aurelia</em>) cùng ăn một loại thức ăn trong những điều kiện nuôi chung và nuôi riêng. Biết rằng các bể nuôi có điều kiện môi trường như nhau. Mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/hailoaitrungco.png",
                statements: [
                    {
                        text: "Khi nuôi riêng, hai loài trên đều tăng trưởng theo tiềm năng sinh học.", correct: false
                    },
                    {
                        text: "Dù nuôi chung hay nuôi riêng, kích thước tối đa của quần thể ở loài 2 đều cao hơn loài 1.", correct: true
                    },
                    {
                        text: "Khi nuôi chung hai loài trong cùng một bể nuôi, sự phân li ổ sinh thái đã diễn ra.", correct: false
                    },
                    {
                        text: "Khi nuôi chung, mật độ cá thể của hai loài đều giảm so với khi nuôi riêng, trong đó loài 1 giảm mạnh chứng tỏ loài 2 có khả năng cạnh tranh cao hơn loài 1.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-STHQX-L3-001. Phương pháp mô phỏng mô hình sinh thái về sự biến đổi kích thước quần thể của ba loài: chim, chuột và mèo rừng được thực hiện trên một hòn đảo với số lượng cá thể ban đầu của mỗi loài lần lượt là 100 000, 100 và 10. Biến động số lượng cá thể mỗi loài sau một thời gian được biểu thị ở hình dưới đây. Biết rằng, chim là thức ăn của chuột, cả chim và chuột là thức ăn của mèo rừng. Khi quần xã trong thí nghiệm 1 đạt trạng thái ổn định, người ta tiến hành loại bỏ hoàn toàn các cá thể mèo rừng và thu được số liệu về sự biến động số lượng cá thể các loài trong quần xã như biểu thị trong thí nghiệm 2. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/BiendongSLuong.png",
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
            {
                question: "DB-STHQX-L3-002. Một công trình nghiên cứu đã khảo sát sự biến động số lượng cá thể của hai quần thể thuộc hai loài động vật ăn cỏ (loài A và loài B) trong cùng một khu vực sinh sống từ năm 1992 đến năm 2020. Hình sau đây mô tả sự thay đổi số lượng cá thể của hai quần thể A, B trước và sau khi loài động vật săn mồi C xuất hiện trong môi trường sống của chúng. Biết rằng ngoài sự xuất hiện của loài C, điều kiện môi trường sống trong toàn bộ thời gian nghiên cứu không có biến động lớn. Mỗi nhận định dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/thaydoisluong.png",
                statements: [
                    {
                        text: "Sự giảm kích thước quần thể A là do sự săn mồi của loài C cũng như sự gia tăng kích thước của quần thể B đã tiêu thụ một lượng lớn cỏ.", correct: true
                    },
                    {
                        text: "Sự biến động kích thước quần thể A và quần thể B cho thấy loài C không ăn thịt loài A.", correct: false
                    },
                    {
                        text: "Có sự trùng lặp ổ sinh thái về dinh dưỡng giữa quần thể A và quần thể B.", correct: true
                    },
                    {
                        text: "Trong 5 năm đầu khi có sự xuất hiện của loài C, sự săn mồi của loài C tập trung vào quần thể A, do đó làm giảm áp lực cạnh tranh lên quần thể B giúp tăng tỉ lệ sống sót của con non trong quần thể B.", correct: true
                    }
                ]
            },
        ]
    },
    tfHST: {
        level1: [
            {
                question: "DB-HST,SQ&BVMT-L1-001. Để nghiên cứu ảnh hưởng của chặt phá rừng đến sự thất thoát lượng khoáng trong đất, người ta chọn hai lô trong một khu rừng với điều kiện ban đầu như nhau. Hãy cho biết, mỗi phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/hstpharungm.png",
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
            {
                question: "DB-HST,SQ&BVMT-L1-002. Khi nói về năng lượng ở hệ sinh thái, mỗi phát biểu sau đây đúng hay sai?",
                statements: [
                    {
                        text: "Năng lượng truyền từ bậc dinh dưỡng thấp lên cao.", correct: true
                    },
                    {
                        text: "Càng lên bậc cao thì dòng năng lượng càng giảm.", correct: true
                    },
                    {
                        text: "90% năng lượng được truyền lên bậc trên.", correct: false
                    },
                    { text: "Trong mỗi dòng, năng lượng chỉ được dùng 1 lần.", correct: true }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L1-003. Cho các thông tin dưới đây liên quan đến chu trình Carbon hãy xác định thông tin Đúng - Sai?",
                statements: [
                    {
                        text: "Hô hấp là quá trình sử dụng O<sub>2</sub> để phân hủy chất hữu cơ, tạo ra năng lượng và thải ra CO<sub>2</sub>.", correct: true
                    },
                    {
                        text: "Quang hợp là quá trình sinh vật sử dụng CO<sub>2</sub> và nước để tạo ra glucose và giải phóng O<sub>2</sub>.", correct: true
                    },
                    {
                        text: "Chu trình Carbon là một chu trình mở, trong đó carbon liên tục được di chuyển vào và ra khỏi hệ thống.", correct: false
                    },
                    {
                        text: "Hiện nay sự biến đổi khí hậu biểu hiện hình thức thời tiết cực đoan  như nhiệt độ Trái đất tăng lên do sự tích tụ khí nhà kính, chủ yếu là carbon dioxide(CO<sub>2</sub>) trong khí quyển.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L1-004. Khi phát biểu về sinh quyển và vai trò của sinh quyển, các khẳng định sau đây là đúng – sai?",
                statements: [
                    {
                        text: "Sinh quyển là toàn bộ các hệ sinh thái trên Trái Đất.", correct: true
                    },
                    {
                        text: "Sinh vật phân bố đồng đều trong toàn bộ sinh quyển.", correct: false
                    },
                    {
                        text: "Sinh quyển thực hiện các quá trình quan trọng như quang hợp, hô hấp, tuần hoàn vật chất, điều hòa khí hậu, ...", correct: true
                    },
                    {
                        text: "Giới hạn trên của sinh quyển phụ thuộc vào khả năng thích nghi của các loài vi sinh vật.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L1-005. Khi phát biểu về chu trình Nitrogen, trong các mệnh đề sau hãy xác định khẳng định Đúng -  Sai?",
                statements: [
                    {
                        text: "Khí nitrogen (N<sub>2</sub>) trong khí quyển không thể được sử dụng trực tiếp bởi các sinh vật.", correct: true
                    },
                    {
                        text: "Thực vật hấp thụ nitrogen dưới dạng nitrogen hữu cơ như amonium (NH<sub>4</sub><sup>+</sup>) và nitrate(NO<sub>3</sub><sup>-</sup>)", correct: false
                    },
                    {
                        text: "Chu trình nitrogen đóng vai trò quan trọng trong việc duy trì sự sống trên Trái Đất vì nitrogen là thành phần thiết yếu của protein, nucleic acid và các hợp chất sinh học khác.", correct: true
                    },
                    {
                        text: "Hiện tượng mưa axid là do NOx thải ra từ hoạt động đốt cháy nhiên liệu hóa thạch và có thể gây hại cho các hệ sinh thái.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L1-006. Khi phát biểu về chu trình sinh địa hóa, phát biểu nào đúng – sai?",
                statements: [
                    {
                        text: "Chu trình sinh địa hóa là quá trình trao đổi chất giữa sinh vật và môi trường.", correct: true
                    },
                    {
                        text: "sự trao đổi vật chất giữa các loài sinh vật thông qua lưới thức ăn.", correct: false
                    },
                    {
                        text: "Chu trình sinh địa hóa giúp duy trì sự cân bằng của các chất dinh dưỡng trong hệ sinh thái.", correct: true
                    },
                    {
                        text: "Không cần bảo vệ các chu trình sinh địa hóa vì chúng không ảnh hưởng đến con người.", correct: false
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L1-007. Khi phát biểu về khu sinh học, hãy xác định phát biểu đúng – sai?",
                statements: [
                    {
                        text: "Các khu sinh học trên Trái Đất phân bố một cách ngẫu nhiên.", correct: false
                    },
                    {
                        text: "Khu sinh học được phân chia dựa trên các yếu tố khí hậu và địa hình.", correct: true
                    },
                    {
                        text: "So với các khu sinh học khác trong sinh quyển thì rừng mưa nhiệt đới là khu sinh học có độ đa dạng sinh học cao nhất.", correct: true
                    },
                    {
                        text: "Sự đa dạng sinh học cao ở rừng mưa nhiệt đới là do điều kiện khí hậu ổn định và lượng mưa lớn.", correct: true
                    }
                ]
            },
        ],
        level2: [
            {
                question: "DB-HST,SQ&BVMT-L2-001. Tại một đồng cỏ, mối quan hệ về dinh dưỡng giữa các loài được mô tả qua hình sau. Các phát biểu dưới đây là đúng hay sai?",
                image: "https://nhantri.top/media/Grade12/luoitan.png",
                statements: [
                    {
                        text: "Đồng cỏ này có tổng cộng 5 chuỗi thức ăn.", correct: true
                    },
                    {
                        text: "Sự gia tăng đột biến số lượng chuột có thể gây hại rất lớn cho đồng cỏ.", correct: true
                    },
                    {
                        text: "Khi số lượng rắn suy giảm, số lượng sói cũng bị giảm theo.", correct: false
                    },
                    {
                        text: "Số lượng các loài sói, chuột và rắn đều bị số lượng kền kền khống chế.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-002. Khi nói về diễn thế sinh thái, mỗi phát biểu sau đây đúng hay sai?",

                statements: [
                    {
                        text: "Diễn thế sinh thái thứ sinh luôn khởi đầu từ môi trường chưa có sinh vật.", correct: false
                    },
                    {
                        text: "Trong diễn thế sinh thái, song song với quá trình biến đổi của quần xã là quá trình biến đổi về các điều kiện tự nhiên của môi trường.", correct: true
                    },
                    {
                        text: "Sự cạnh tranh giữa các loài trong quần xã là một trong những nguyên nhân gây ra diễn thế sinh thái.", correct: true
                    },
                    {
                        text: "Diễn thế sinh thái là quá trình biến đổi tuần tự của quần xã qua các giai đoạn tương ứng với sự biến đổi của môi trường.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-003. Trên tro tàn núi lửa xuất hiện quần xã tiên phong. Quần xã này sinh sống và phát triển làm tăng độ ẩm và làm giàu thêm nguồn dinh dưỡng hữu cơ, tạo thuận lợi cho cỏ thay thế. Theo thời gian, sau cỏ là trảng cây thân thảo, thân gỗ và cuối cùng là rừng nguyên sinh. Theo lí thuyết, khi nói về quá trình này, mỗi phát biểu sau đây là đúng hay sai?",

                statements: [
                    {
                        text: "Đây là quá trình diễn thế sinh thái.", correct: true
                    },
                    {
                        text: "Rừng nguyên sinh là quần xã đỉnh cực của quá trình biến đổi này.", correct: true
                    },
                    {
                        text: "Độ đa dạng sinh học giảm dần trong quá trình biến đổi này.", correct: false
                    },
                    {
                        text: "Một trong những nguyên nhân gây ra quá trình biến đổi này là sự cạnh tranh gay gắt giữa các loài trong quần xã.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-004. Mỗi phát biểu dưới đây là đúng hay sai khi nói về hệ sinh thái?",

                statements: [
                    {
                        text: "Trong hệ sinh thái, sinh vật sản xuất là nhóm có khả năng truyền năng lượng từ quần xã tới môi trường vô sinh.", correct: false
                    },
                    {
                        text: "Bất kì sự gắn kết nào giữa các sinh vật với sinh cảnh đủ để tạo thành một chu trình sinh học hoàn chỉnh đều được xem là một hệ sinh thái.", correct: true
                    },
                    {
                        text: "Trong hệ sinh thái, sinh vật phân giải gồm các loài sống dị dưỡng như vi khuẩn, nấm, … và một số vi khuẩn hóa tự dưỡng.", correct: true
                    },
                    {
                        text: "Hệ sinh thái tự nhiên thường có tính ổn định cao hơn nhưng thành phần loài kém đa dạng hơn hệ sinh thái nhân tạo.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-005. Mỗi phát biểu sau là đúng hay sai khi nói về cấu trúc của lưới thức ăn trong hệ sinh thái?",

                statements: [
                    {
                        text: "Mỗi lưới thức ăn có một chuỗi lưới thức ăn.", correct: false
                    },
                    {
                        text: "Cấu trúc của lưới thức ăn luôn được duy trì ổn định, không phụ thuộc vào điều kiện sống.", correct: false
                    },
                    {
                        text: "Khi bị mất một mắt xích nào đó, cấu trúc của lước thức ăn vẫn không thay đổi.", correct: false
                    },
                    {
                        text: "Lưới thức ăn càng đa dạng thì hệ sinh thái có tính ổn định càng cao.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-006. Khi nói về thành phần của hệ sinh thái, mỗi phát biểu dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Một hệ sinh thái luôn có sinh vật sản xuất và môi trường sống của sinh vật.", correct: false
                    },
                    {
                        text: "Tất cả các loài vi sinh vật đều được xếp vào nhóm sinh vật phân giải.", correct: false
                    },
                    {
                        text: "Sinh vật phân giải chuyển hóa chất hữu cơ thành chất vô cơ để cung cấp cho các sinh vật sản xuất.", correct: true
                    },
                    {
                        text: "Tất cả các hệ sinh thái đều luôn có sinh vật tiêu thụ.", correct: false
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L2-007. Mỗi phát biểu dưới đây là đúng hay sai khi nói về dòng năng lượng trong hệ sinh thái?",

                statements: [
                    {
                        text: "Sinh vật sản xuất có vai trò chuyển hoá quang năng thành hoá năng tích luỹ trong các hợp chất hữu cơ.", correct: true
                    },
                    {
                        text: "Hiệu suất sinh thái giữa các bậc dinh dưỡng càng cao thì năng lượng bị tiêu hao qua các bậc dinh dưỡng là càng thấp.", correct: true
                    },
                    {
                        text: "Năng lượng do sinh vật phân giải tạo ra sẽ quay trở lại cung cấp cho sinh vật sản xuất để tổng hợp chất hữu cơ.", correct: false
                    },
                    {
                        text: "Năng lượng truyền lên bậc dinh dưỡng kế tiếp thường ít hơn năng lượng bị tiêu hao qua hô hấp cho mỗi bậc dinh dưỡng.", correct: true
                    }
                ]
            },
        ],
        level3: [
            {
                question: "DB-HST,SQ&BVMT-L3-001. Cho sơ đồ sau về một chu trình sinh địa hóa trong tự nhiên, hãy xác định các mệnh đề hãy xác định đúng - sai?",
                image: "https://nhantri.top/media/Grade12/chutrinhnitrogen.png",
                statements: [
                    {
                        text: "Sơ đồ trên minh họa cho chu trình Nitrogen trong sinh quyển.", correct: true
                    },
                    {
                        text: "Quá trình đồng hóa nitrogen diễn ra ở tất cả các sinh vật.", correct: false
                    },
                    {
                        text: "Amonium (NH<sub>4</sub><sup>+</sup> ) là sản phẩm cuối cùng của chu trình nitrogen", correct: false
                    },
                    {
                        text: "Sử dụng các biện pháp canh tác bền vững như trồng các cây họ Đậu có chứa vi khuẩn cộng sinh có khả năng cố định nitrogen trực tiếp từ khí quyển để làm tăng thêm độ đạm cho đất và có thể giúp giảm thiểu tác động tiêu cực của con người đến chu trình nitrogen.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L3-002. Tháp sinh thái về năng lượng của 4 loài sinh vật trong một chuỗi thức ăn của một hệ sinh thái gồm các loài: A → B → C → D. Khi nói về tháp sinh thái được xây dựng gồm các loài sinh vật này, mỗi phát biểu sau đây là đúng hay sai?",
                
                statements: [
                    {
                        text: "Các cá thể ở bậc dinh dưỡng A nhận năng lượng trực tiếp từ Mặt Trời.", correct: false
                    },
                    {
                        text: "Các cá thể ở bậc dinh dưỡng C là loài động vật ăn thịt.", correct: false
                    },
                    {
                        text: "Các cá thể bậc dinh dưỡng C nhận năng lượng trực tiếp từ bậc dinh dưỡng B.", correct: false
                    },
                    {
                        text: "Sinh vật ở bậc dinh dưỡng D là sinh vật tự dưỡng.", correct: true
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L3-003. Lưới thức ăn của một quần xã sinh vật trên cạn được mô tả như sau: Các loài cây là thức ăn của sâu đục thân, sâu hại quả, chim ăn hạt, côn trùng cánh cứng ăn vỏ cây và một số loài động vật ăn rễ cây. Chim sâu ăn côn trùng cánh cứng, sâu đục thân và sâu hại quả. Chim sâu và chim ăn hạt đều là thức ăn của chim ăn thịt cỡ lớn. Động vật ăn rễ cây là thức ăn của rắn, thú ăn thịt và chim ăn thịt cỡ lớn. Theo lí thuyết, mỗi phát biểu dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Chuỗi thức ăn dài nhất trong lưới thức ăn này có tối đa 4 mắt xích.", correct: true
                    },
                    {
                        text: "Nếu số lượng động vật ăn rễ cây bị giảm mạnh thì sự cạnh tranh giữa chim ăn thịt cỡ lớn và rắn gay gắt hơn so với sự cạnh tranh giữa rắn và thú ăn thịt.", correct: false
                    },
                    {
                        text: "Chim ăn thịt cỡ lớn có thể là bậc dinh dưỡng cấp 2, cũng có thể là bậc dinh dưỡng cấp 3.", correct: false
                    },
                    {
                        text: "Các loài sâu đục thân, sâu hại quả, động vật ăn rễ cây và côn trùng cánh cứng có ổ sinh thái trùng nhau hoàn toàn.", correct: false
                    }
                ]
            },
            {
                question: "DB-HST,SQ&BVMT-L3-004. Ở một vùng biển, năng lượng bức xạ chiếu xuống mặt nước đạt đến 3.10<sup>6</sup> kcal/m<sup>2</sup>/ngày. Tảo silic chỉ đồng hoá được 0,3% tổng năng lượng đó, giáp xác khai thác 10% năng lượng tích luỹ trong tảo, cá ăn giáp xác khai thác được 15% năng lượng của giáp xác. Mỗi phát biểu dưới đây là đúng hay sai?",

                statements: [
                    {
                        text: "Năng lượng được tích lũy ở bậc dinh dưỡng có sinh khối lớn nhất là 900 kcal / m<sup>2</sup> / ngày.", correct: true
                    },
                    {
                        text: "Bậc dinh dưỡng bậc 2 có sự thất thoát năng lượng nhỏ nhất.", correct: false
                    },
                    {
                        text: "Năng lượng được tích lũy ở sinh vật tiêu thụ bậc 3 là 135 kcal / m<sup>2</sup> / ngày.", correct: false
                    },
                    {
                        text: "Sinh vật sản xuất tích lũy được 9.10<sup>5</sup> kcal / m<sup>2</sup> / ngày.", correct: false
                    }
                ]
            },
        ]
    },
    sac1: {
        level1: [
            {
                question: "TB-DTPT-L1-001. DNA có mấy sợi?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L1-002. Đoạn mạch thứ nhất của gene có trình tự các nucleotide là </br>3' - AAA CCA GGG TGC - 5'. Tỉ lệ (A+G)/(T+C) ở đoạn mạch thứ hai bằng bao nhiêu?",
                answer: "0,5"
            },
            {
                question: "TB-DTPT-L1-003. Quá trình tái bản của DNA có bao nhiêu bước?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-004. Theo mô hình của Watson và Crick, mỗi chu kì xoắn của DNA dài bao nhiêu A<sup>o</sup>?",
                answer: "34"
            },
            {
                question: "TB-DTPT-L1-005. RNA có mấy loại?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-006. Quá trình phiên mã có bao nhiêu bước?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-007. Quá trình dịch mã có bao nhiêu giai đoạn?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L1-008. Có tất cả bao nhiêu bộ ba mã hóa tạo thành các amino acid?",
                answer: "61"
            },
            {
                question: "TB-DTPT-L1-009. Có tất cả bao nhiêu bộ ba mở đầu?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L1-010. Có tất cả bao nhiêu bộ ba kết thúc?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-011. Có bao nhiêu đặc điểm của mã bộ ba?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L1-012. Cấu trúc Operon gồm bao nhiêu phần?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-013. Có bao nhiêu gene cấu trúc trong Operon Lac?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-014. Nhóm gene cấu trúc sau khi phiên và dịch mã tạo sẽ tạo ra bao nhiêu loại enzyme phân giải lactose?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-015. Nếu dựa vào sự biến đổi về mặt cấu trúc của gene thì có mấy loại đột biến điểm?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-016. Nếu dựa vào giai đoạn phát sinh đột biến thì đột biến gene được chia làm mấy loại?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-017. Một gene bị đột biến thay thế cặp A - T thành cặp G - C. Gene này sẽ tăng lên bao nhiêu liên kết hydrogen?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L1-018. Công ty Ali Lilly đã sản xuất và bán ra thị trường thuốc insulin người nhờ công nghệ DNA tái tổ hợp vào năm nào?",
                answer: "1979"
            },
            {
                question: "TB-DTPT-L1-019. Cừu Dolly được sinh ra từ mấy con cừu mẹ?",
                answer: "3"
            },

            // Thêm các câu hỏi SA level 1 khác...
        ],
        level2: [
            {
                question: "TB-DTPT-L2-001. Một gene có chiều dài là 5100 Angtrom. Tính số nucleotide của gene đó?",
                answer: "3000"
            },
            {
                question: "TB-DTPT-L2-002. Một gene có khối lượng 900000 amu. Số nucleotide loại A bằng 900. Tính số liên kết hydrogen của gene?",
                answer: "3600"
            },
            {
                question: "TB-DTPT-L2-003. Từ một DNA ban đầu trải qua 5 lần tái bản liên tiếp tạo ra bao nhiêu DNA con?",
                answer: "32"
            },
            {
                question: "TB-DTPT-L2-004. Một phân tử DNA chứa toàn <sup>15</sup>N có đánh dấu phóng xạ được tái bản bốn lần liên tiếp trong môi trường <sup>14</sup>N. Số phân tử DNA còn chứa <sup>15</sup>N chiếm tỉ lệ bao nhiêu phần trăm?",
                answer: "12,5"
            },
            {
                question: "TB-DTPT-L2-005. Cho các thành phần: Gene; mRNA; amino acid; tRNA; ribosome; nucleotide.Có bao nhiêu thành phần tham gia trực tiếp vào quá trình dịch mã?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L2-006. Một DNA chứa 3 gene thực hiện tái bản 3 lần liên tiếp. Sau đó, các gene này đều thực hiện phiên mã một lần và dịch mã. Mỗi mRNA có 5 ribosome trượt qua. Tính số chuỗi polypeptide được tạo thành?",
                answer: "120"
            },
            {
                question: "TB-DTPT-L2-007. Một mRNA có trình tự: </br>5' - AUG GAU CCA AGU GCG GUU GCA UAA GUA GGA - 3'.</br> Phân tử này dùng làm khuôn để tổng hợp chuỗi polypeptide có bao nhiêu amino acid?",
                answer: "6"
            },
            {
                question: "TB-DTPT-L2-008. Một mRNA có trình tự: </br>3' - AUG GAU CCA AGU GCG GUU GCA UAA GUA GGA - 5'. </br>Phân tử này dùng làm khuôn để tổng hợp chuỗi polypeptide có bao nhiêu amino acid?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L2-009. Quá trình phên mã và dịch mã trong Operon Lac diễn ra bình thường. Nếu gene Z tạo được 5 enzyme thì gene A tạo ra bao nhiêu enzyme?",
                answer: "5"
            },
            {
                question: "TB-DTPT-L2-010. Trong mô hình điều hòa hoạt động của gene, có mấy vùng gene điều hòa tạo ra protein ức chế điều khiển Operon Lac?",
                answer: "1"
            },

            {
                question: "TB-DTPT-L2-011. Gene A ở sinh vật nhân sơ, sau khi đột biến điểm tạo ra allele A1 có chiều dài bằng với gene A. Số liên kết hydrogen của allele A1 tăng lên tối đa là bao nhiêu?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L2-012. Trong tế bào, có bao nhiêu trường hợp đột biến điểm dạng thay thế một cặp nucleotide mà allele đột biến có thành phần các loại nucleotide không thay đổi so với allele bình thường?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-013. Cho enzyme: ligase, RNA polymerase, restrictase, DNA polymerase.Có bao nhiêu loại enzyme tham gia vào quá trình tạo DNA tái tổ hợp trong công nghệ gene ?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-014. Cho các thành tựu sau đây: cừu Dolly, dưa hấu không hạt, lúa gạo vàng, cừu mang gene tổng hợp huyết thanh.Có bao nhiêu thành tựu được tạo ra từ công nghệ gene?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-015. Cho các đối tượng sau: plasmid, vi khuẩn, nguyên sinh vật, nấm, phage.Có bao nhiêu đối tượng được dùng làm thể truyền trong công nghệ gene?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-016. Có bao nhiêu cấu trúc trong hình mô tả phân tử mRNA?",
                image: "https://nhantri.top/media/Grade12/rnaphanloai.png",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-017. Theo nguyên tắc bổ sung trong một phân tử DNA chứa 8 cặp G – C  và 3 cặp A – T có bao nhiêu liên kết hydrogen?",
                answer: "30"
            },
            // Thêm các câu hỏi SA level 2...
        ],
        level3: [
            {
                question: "TB-DTPT-L3-001. Chuyển một số E. coli mang DNA chỉ chứa <sup>15</sup>N sang môi trường <sup>14</sup>N. Chúng đều nhân đôi 3 lần liên tiếp tạo ra 12 DNA chỉ chứa <sup>14</sup>N. Chuyển chúng về môi trường <sup>15</sup>N và cho tiếp tục tái bản 2 lần liên tiếp. Tính số DNA chỉ chứa <sup>15</sup>N khi kết thúc tái bản?",
                answer: "36"
            },
            {
                question: "TB-DTPT-L3-002. Một DNA dài 5100 A<sup>o</sup> có thể tạo ra phân tử protein hoàn chỉnh chứa bao nhiêu amino acid?",
                answer: "498"
            },
            {
                question: "TB-DTPT-L3-003. Một gene bị đột biến thay thế 2 cặp G - C thành A - T. Gene này sẽ giảm đi bao nhiêu liên kết hydrogen?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L3-004. Một gene bị đột biến mất 2 cặp G - C. Gene này sẽ giảm đi bao nhiêu liên kết hydrogen?",
                answer: "6"
            },
            {
                question: "TB-DTPT-L3-005. Cho tỉ lệ % các loại nucleotide của các phân tử nucleic acid ở 6 loài ở trong bảng. Bao nhiêu nucleic acid thuộc những loài có DNA mạch kép?",
                image: "https://nhantri.top/media/Grade12/dnakep.png",
                answer: "3"
            },
            // Thêm các câu hỏi SA level 3...
        ]

    },
    saCCDTPT: {
        level1: [
            {
                question: "TB-DTPT-L1-001. DNA có mấy sợi?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L1-002. Đoạn mạch thứ nhất của gene có trình tự các nucleotide là </br>3' - AAA CCA GGG TGC - 5'. Tỉ lệ (A+G)/(T+C) ở đoạn mạch thứ hai bằng bao nhiêu?",
                answer: "0,5"
            },
            {
                question: "TB-DTPT-L1-003. Quá trình tái bản của DNA có bao nhiêu bước?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-004. Theo mô hình của Watson và Crick, mỗi chu kì xoắn của DNA dài bao nhiêu Angtrom?",
                answer: "34"
            },
            {
                question: "TB-DTPT-L1-005. RNA có mấy loại?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-006. Quá trình phiên mã có bao nhiêu bước?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-007. Quá trình dịch mã có bao nhiêu giai đoạn?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L1-008. Có tất cả bao nhiêu bộ ba mã hóa tạo thành các amino acid?",
                answer: "61"
            },
            {
                question: "TB-DTPT-L1-009. Có tất cả bao nhiêu bộ ba mở đầu?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L1-010. Có tất cả bao nhiêu bộ ba kết thúc?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-011. Có bao nhiêu đặc điểm của mã bộ ba?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L1-012. Cấu trúc Operon gồm bao nhiêu phần?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-013. Có bao nhiêu gene cấu trúc trong Operon Lac?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-014. Nhóm gene cấu trúc sau khi phiên và dịch mã tạo sẽ tạo ra bao nhiêu loại enzyme phân giải lactose?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-015. Nếu dựa vào sự biến đổi về mặt cấu trúc của gene thì có mấy loại đột biến điểm?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-016. Nếu dựa vào giai đoạn phát sinh đột biến thì đột biến gene được chia làm mấy loại?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-017. Một gene bị đột biến thay thế cặp A - T thành cặp G - C. Gene này sẽ tăng lên bao nhiêu liên kết hydrogen?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L1-018. Công ty Ali Lilly đã sản xuất và bán ra thị trường thuốc insulin người nhờ công nghệ DNA tái tổ hợp vào năm nào?",
                answer: "1979"
            },
            {
                question: "TB-DTPT-L1-019. Cừu Dolly được sinh ra từ mấy con cừu mẹ?",
                answer: "3"
            },
            {
                question: "TB-DTPT-L1-020. Cừu Dolly được sinh ra từ mấy con cừu mẹ?",
                answer: "2"
            },
            // Thêm các câu hỏi SA level 1 khác...
        ],
        level2: [
            {
                question: "TB-DTPT-L2-001. Một gene có chiều dài là 5100 Angtrom. Tính số nucleotide của gene đó?",
                answer: "3000"
            },
            {
                question: "TB-DTPT-L2-002. Một gene có khối lượng 900000 amu. Số nucleotide loại A bằng 900. Tính số liên kết hydrogen của gene?",
                answer: "3600"
            },
            {
                question: "TB-DTPT-L2-003. Từ một DNA ban đầu trải qua 5 lần tái bản liên tiếp tạo ra bao nhiêu DNA con?",
                answer: "32"
            },
            {
                question: "TB-DTPT-L2-004. Một phân tử DNA chứa toàn <sup>15</sup>N có đánh dấu phóng xạ được tái bản bốn lần liên tiếp trong môi trường <sup>14</sup>N. Số phân tử DNA còn chứa <sup>15</sup>N chiếm tỉ lệ bao nhiêu phần trăm?",
                answer: "12,5"
            },
            {
                question: "TB-DTPT-L2-005. Cho các thành phần: Gene; mRNA; amino acid; tRNA; ribosome; nucleotide.Có bao nhiêu thành phần tham gia trực tiếp vào quá trình dịch mã?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L2-006. Một DNA chứa 3 gene thực hiện tái bản 3 lần liên tiếp. Sau đó, các gene này đều thực hiện phiên mã một lần và dịch mã. Mỗi mRNA có 5 ribosome trượt qua. Tính số chuỗi polypeptide được tạo thành?",
                answer: "120"
            },
            {
                question: "TB-DTPT-L2-007. Một mRNA có trình tự: </br>5' - AUG GAU CCA AGU GCG GUU GCA UAA GUA GGA - 3'.</br> Phân tử này dùng làm khuôn để tổng hợp chuỗi polypeptide có bao nhiêu amino acid?",
                answer: "6"
            },
            {
                question: "TB-DTPT-L2-008. Một mRNA có trình tự: 3' - AUG GAU CCA AGU GCG GUU GCA UAA GUA GGA - 5'. Phân tử này dùng làm khuôn để tổng hợp chuỗi polypeptide có bao nhiêu amino acid?",
                answer: "4"
            },
            {
                question: "TB-DTPT-L2-009. Quá trình phên mã và dịch mã trong Operon Lac diễn ra bình thường. Nếu gene Z tạo được 5 enzyme thì gene A tạo ra bao nhiêu enzyme?",
                answer: "5"
            },
            {
                question: "TB-DTPT-L2-010. Trong mô hình điều hòa hoạt động của gene, có mấy vùng gene điều hòa tạo ra protein ức chế điều khiển Operon Lac?",
                answer: "1"
            },

            {
                question: "TB-DTPT-L2-011. Gene A ở sinh vật nhân sơ, sau khi đột biến điểm tạo ra allele A1 có chiều dài bằng với gene A. Số liên kết hydrogen của allele A1 tăng lên tối đa là bao nhiêu?",
                answer: "1"
            },
            {
                question: "TB-DTPT-L2-012. Trong tế bào, có bao nhiêu trường hợp đột biến điểm dạng thay thế một cặp nucleotide mà allele đột biến có thành phần các loại nucleotide không thay đổi so với allele bình thường?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-013. Cho enzyme: ligase, RNA polymerase, restrictase, DNA polymerase.Có bao nhiêu loại enzyme tham gia vào quá trình tạo DNA tái tổ hợp trong công nghệ gene ?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-014. Cho các thành tựu sau đây: cừu Dolly, dưa hấu không hạt, lúa gạo vàng, cừu mang gene tổng hợp huyết thanh.Có bao nhiêu thành tựu được tạo ra từ công nghệ gene ?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L2-015. Cho các đối tượng sau: plasmid, vi khuẩn, nguyên sinh vật, nấm, phage.Có bao nhiêu đối tượng được dùng làm thể truyền trong công nghệ gene ?",
                answer: "2"
            },

            // Thêm các câu hỏi SA level 2...
        ],
        level3: [
            {
                question: "TB-DTPT-L3-001. Chuyển một số E. coli mang DNA chỉ chứa <sup>15</sup>N sang môi trường <sup>14</sup>N. Chúng đều nhân đôi 3 lần liên tiếp tạo ra 12 DNA chỉ chứa <sup>14</sup>N. Chuyển chúng về môi trường <sup>15</sup>N và cho tiếp tục tái bản 2 lần liên tiếp. Tính số DNA chỉ chứa <sup>15</sup>N khi kết thúc tái bản?",
                answer: "36"
            },
            {
                question: "TB-DTPT-L3-002. Một DNA dài 5100 A<sup>o</sup> có thể tạo ra phân tử protein hoàn chỉnh chứa bao nhiêu amino acid?",
                answer: "498"
            },
            {
                question: "TB-DTPT-L3-003. Một gene bị đột biến thay thế 2 cặp G - C thành A - T. Gene này sẽ giảm đi bao nhiêu liên kết hydrogen?",
                answer: "2"
            },
            {
                question: "TB-DTPT-L3-004. Một gene bị đột biến mất 2 cặp G - C. Gene này sẽ giảm đi bao nhiêu liên kết hydrogen?",
                answer: "6"
            },
            {
                question: "TB-DTPT-L3-005. Theo lí thuyết, trong 4 allele M1, M2, M3, M4 có bao nhiêu allele mã hóa chuỗi polypeptide có thành phần amino acid bị thay đổi so với chuỗi polypeptide do allele M mã hóa?",
                image: "https://nhantri.top/media/Grade12/bangdm.png",
                answer: "3"
            },
            {
                question: "TB-DTPT-L3-006. Cho các loại enzyme tham gia mô hình operon lac ở vi khuẩn E.coli: enzyme -galactosidase, enzyme permease, enzyme RNA polymerase và enzyme transacetylase. Có mấy loại enzyme đã được Lactose kích hoạt tế bào tổng hợp khi môi trường có Lactose?",
              
                answer: "3"
            },
            // Thêm các câu hỏi SA level 3...
        ]

    },
    sac2: {
        level1: [
            {
                question: "TB-DTMĐ-L1-001. Số phân tử protein histone trong mỗi nucleosome cấu tạo nên NST là bao nhiêu?",
                answer: "8"
            },
            {
                question: "TB-DTMĐ-L1-002. Phát biểu nội dung quy luật phân li của Mendel.",
                answer: "Mỗi tính trạng do một cặp allele quy định, một có nguồn gốc từ bố, một có nguồn gốc từ mẹ. Các allele tồn tại trong tế bào một cách riêng rẽ, không hòa trộn vào nhau. Khi hình thành giao tử, các thành viên của một cặp allele phân li đồng đều về các giao tử, nên 50% số giao tử chứa allele này còn 50% giao tử chứa allele kia."
            },
            {
                question: "TB-DTMĐ-L1-003. Phân tích cơ sở tế bào học của quy luật phân li.",
                answer: "Trong tế bào sinh dưỡng, các NST luôn tồn tại thành từng cặp tương đồng và chứa các cặp allele tương ứng. Khi giảm phân tạo giao tử, mỗi NST trong từng cặp tương đồng phân li đồng đều về các giao tử → sự phân li của các allele tương ứng và sự tổ hợp của chúng qua thụ tinh dẫn đến sự phân li và tổ hợp của cặp allele tương ứng."
            },
            {
                question: "TB-DTMĐ-L1-004. Cho biết ý nghĩa của quy luật phân li.",
                answer: "Giải thích tại sao tương quan trội lặn là phổ biến trong tự nhiên, hiện tượng trội cho thấy mục tiêu của chọn giống là tập trung nhiều tính trội có giá trị cao. Không dùng con lai F1 làm giống vì thế hệ sau sẽ phân li do F1  có kiểu gene dị hợp."
            },
            {
                question: "TB-DTMĐ-L1-005. Phát biểu nội dung quy luật phân li độc lập của Mendel.",
                answer: "Các cặp allele quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau thì phân li độc lập và tổ hợp tự do (ngẫu nhiên) trong quá trình hình thành giao tử."
            },
            {
                question: "TB-DTMĐ-L1-006. Phân tích cơ sở tế bào học của quy luật phân li độc lập.",
                answer: "Các cặp allele nằm trên các cặp NST tương đồng khác nhau. Sự phân li độc lập và tổ hợp ngẫu nhiên của các cặp NST tương đồng trong giảm phân hình thành giao tử dẫn đến sự phân li độc lập và sự tổ hợp ngẫu nhiên của các cặp allele tương ứng."
            },
            {
                question: "TB-DTMĐ-L1-007. Cho biết ý nghĩa của quy luật phân li độc lập.",
                answer: "Quy luật phân li độc lập là cơ sở góp phần giải thích tính đa dạng phong phú của sinh vật trong tự nhiên, làm cho sinh vật ngày càng thích nghi với môi trường sống. Quy luật phân li độc lập còn là cơ sở khoa học của phương pháp lai tạo để hình thành nhiều biến dị, tạo điều kiện hình thành nhiều giống mới có năng suất và phẩm chất cao, chống chịu tốt với điều kiện bất lợi của môi trường. Nếu biết được các gene nào đó là phân li độc lập có thể dự đoán được kết quả phân li kiểu hình ở đời sau."
            },
           
            // Thêm các câu hỏi SA Mendel level 1 khác...
        ],
        level2: [
            {
                question: "TB-DTMĐ-L2-001. Ở đậu hà lan, allele Y quy định hạt vàng trội hoàn toàn so với allele y quy định hạt xanh. Khi cho lai cây đậu hà lan mọc từ hạt vàng thuần chủng với cây mọc từ hạt xanh, tạo ra F1, sau đó tiếp tục tự thụ phấn để tạo ra các thế hệ tiếp theo. Theo lí thuyết, tỉ lệ màu hạt vàng trên cây F1 là bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy).",
                answer: "0,75"
            },
            {
                question: "TB-DTMĐ-L2-002. Ở đậu hà lan, allele P nằm trên NST số 1 quy định hoa tím trội hoàn toàn so với allele p quy định hoa trắng; allele T nằm trên NST số 4 quy định thân cao trội hoàn toàn so với allele t quy định thân thấp. Theo lí thuyết, số phép lai tự thụ phấn tạo ra đời con đồng tính là bao nhiêu?",
                answer: "4"
            },
            {
                question: "TB-DTMĐ-L1-003. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được số loại giao tử là bao nhiêu?",
                answer: "2<sup>n</sup>"
            },

            {
                question: "TB-DTMĐ-L1-004. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được số kiểu tổ hợp giao tử là bao nhiêu?",
                answer: "4<sup>n</sup>"
            },
            {
                question: "TB-DTMĐ-L1-005. TB-DTMĐ-L1-008. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được số loại kiểu gene là bao nhiêu?",
                answer: "3<sup>n</sup>"
            },
            {
                question: "TB-DTMĐ-L1-006. TB-DTMĐ-L1-008. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được tỉ lệ kiểu gene là bao nhiêu?",
                answer: "(1 : 2 : 1)<sup>n</sup>"
            },
            {
                question: "TB-DTMĐ-L1-007. TB-DTMĐ-L1-008. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được số loại kiểu hình là bao nhiêu?",
                answer: "2<sup>n</sup>"
            },
            {
                question: "TB-DTMĐ-L1-008. TB-DTMĐ-L1-008. Khi lai 2 cơ thể có kiểu gene giống nhau, với n cặp gene dị hợp phân li độc lập với nhau (mỗi cặp allele quy định một tính trạng, trội hoàn toàn) thì ở thế hệ lai thu được tỉ lệ kiểu hình là bao nhiêu?",
                answer: "(3 : 1)<sup>n</sup>"
            },

            // Thêm các câu hỏi SA Mendel level 2...
        ],
        level3: [
            {
                question: "TB-DTMĐ-L2-001. Cho biết mỗi gene quy định một tính trạng, các gene phân li độc lập, gene trội là trội hoàn toàn và không có đột biến xảy ra. Tính theo lí thuyết, phép lai AaBbDdEe x AaBbDdEe cho đời con có kiểu hình mang 2 tính trạng trội và 2 tính trạng lặn chiếm tỉ lệ bao nhiêu phần trăm (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)?",
                answer: "21,09"
            },
            {
                question: "TB-DTMĐ-L2-002. Xét 3 gene di truyền phân  li độc lập. Cho các cây có kiểu gene AaBbDd tự thụ phấn qua nhiều thế hệ. Biết rằng không phát sinh đột biến mới, thì số dòng thuần tối đa về cả 3 cặp gene là bao nhiêu?",
                answer: "8"
            },

            // Thêm các câu hỏi SA Mendel level 3...
        ]

    },
    sac3: {
        level1: [
            {
                question: "TB-DTMG-L1-001. Sơ đồ dưới đây minh hoạ một phần bản đồ di truyền NST X của ruồi giấm. Dựa vào bản đồ di truyền, hãy xác định khoảng cách giữa hai gene quy định thân vàng và gene quy định lông xám là bao nhiêu cM?",
                image: "https://nhantri.top/media/Grade12/lienketkt.png",
                answer: "21"
            },
            {
                question: "TB-DTMG-L1-002. Trình bày đặc điểm của quy luật di truyền liên kết gene hoàn toàn (liên kết gene).",
                
                answer: "Các gene trên cùng một NST phân li cùng nhau và làm thành nhóm gene liên kết. Số nhóm liên kết ở mỗi loài tương ứng với số NST trong bộ đơn bội (n) của loài đó. Số nhóm tính trạng liên kết tương ứng với số nhóm gene liên kết."
            },
            {
                question: "TB-DTMG-L1-003. Cho biết ý nghĩa của quy luật di truyền liên kết gene hoàn toàn (liên kết gene).",

                answer: "Liên kết gene làm hạn chế xuất hiện biến dị tổ hợp, đảm bảo sự duy trì bền vững từng nhóm tính trạng quy định bởi các gene trên cùng một NST. Trong chọn giống nhờ liên kết gene mà các nhà chọn giống có khả năng chọn được những nhóm tính trạng tốt luôn luôn đi kèm với nhau."
            },
            {
                question: "TB-DTMG-L1-004. Trình bày cơ sở tế bào học của hiện tượng hoán vị gene.",

                answer: "Sự trao đổi chéo giữa các crômatit khác nguồn gốc của cặp NST tương đồng dẫn đến sự trao đổi (hoán vị) giữa các gene trên cùng một cặp NST tương đồng. Các gene nằm càng xa nhau thì lực liên kết càng yếu, càng dễ xảy ra hoán vị gene."
            },
            {
                question: "TB-DTMG-L1-005. Phát biểu nội dung quy luật di truyền hoán vị gene.",

                answer: "Trong quá trình giảm phân, các NST tương đồng có thể trao đổi các đoạn tương đồng cho nhau dẫn đến hoán vị gene, làm xuất hiện tổ hợp gene mới."
            },
            {
                question: "TB-DTMG-L1-006. Nêu ý nghĩa của quy luật di truyền hoán vị gene.",

                answer: "Hoán vị gene làm tăng tần số biến dị tái tổ hợp, tạo điều kiện cho các gene quý có dịp tổ hợp lại với nhau → cung cấp nguyên liệu cho chọn lọc nhân tạo và chọn lọc tự nhiên, có ý nghĩa trong chọn giống và tiến hoá. Dựa vào kết quả phép lai phân tích có thể tính được tần số hoán vị gene, tính được khoảng cách tương đối giữa các gene rồi dựa vào quy luật phân bố gene theo đường thẳng mà thiết lập bản đồ di truyền. Tần số hoán vị gene = Tỉ lệ % các loại giao tử mang gene hoán vị. Trong phép lai phân tích tần số hoán vị gene được tính theo công thức: f % = (Số cá thể có HVG / Tổng số cá thể trong phép lai phân tích) x 100 (f ≤ 50 %)."
            },
            // Thêm các câu hỏi SA Morgan level 1 khác...
        ],
        level2: [
            {
                question: "TB-DTMG-L2-001. Ở ruồi giấm, allele A quy định thân xám trội hoàn toàn so với allele a quy định thân đen, allele B quy định cánh dài trội hoàn toàn so với allele b quy định thân cụt, các gene nằm cùng nằm trên một NST. Quần thể ruồi có tối đa bao nhiêu loại kiểu gene quy định các tính trạng này?",
                answer: "10"
            },
            {
                question: "TB-DTMG-L2-002. Xác định giao tử của cơ thể có kiểu gene AaBbDd.",
                answer: "ABD, Abd,	AbD,  Abd,  aBD, aBd, abD, abd."
            },
            {
                question: "TB-DTMG-L2-003. Ở một loài thực vật, gene A quy định hạt vàng trội hoàn toàn so với gene a quy định hạt trơn; gene B quy định thân cao trội hoàn toàn so với gene b quy định thân thấp; gene D quy định chín sớm trội hoàn toàn so với gene d quy định chín muộn. P: AabbDd x AaBbdd. Số loại kiểu gene ở đời con là bao nhiêu?",
                answer: "12"
            },
            {
                question: "TB-DTMG-L2-004. Xét phép lai AaBbDd x aaBbdd, mỗi cặp gene quy định một cặp tính trạng và trội hoàn toàn thì ở đời con có số loại kiểu hình là bao nhiêu?",
                answer: "8."
            },
            {
                question: "TB-DTMG-L2-005. Bố mẹ chứa hai cặp gene dị hợp, tương tác bổ trợ giữa hai cặp gene trội hình thành 4 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "9 : 3 : 3 : 1."
            },
            {
                question: "TB-DTMG-L2-006. Bố mẹ chứa hai cặp gene dị hợp, tương tác bổ trợ giữa hai cặp gene trội hình thành 3 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "9 : 6 : 1."
            },
            {
                question: "TB-DTMG-L2-007. Bố mẹ chứa hai cặp gene dị hợp, tương tác bổ trợ giữa hai cặp gene trội hình thành 2 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "9 : 7"
            },
            {
                question: "TB-DTMG-L2-008. Bố mẹ chứa hai cặp gene dị hợp, tương tác át chế bởi gene trội hình thành 3 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "12 : 3 : 1"
            },
            {
                question: "TB-DTMG-L2-009. Bố mẹ chứa hai cặp gene dị hợp, tương tác át chế bởi gene trội hình thành 2 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "13 : 3"
            },
            {
                question: "TB-DTMG-L2-010. Bố mẹ chứa hai cặp gene dị hợp, tương tác át chế bởi gene lặn hình thành 3 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "9 : 3 : 4"
            },
            {
                question: "TB-DTMG-L2-011. Bố mẹ chứa hai cặp gene dị hợp, tương tác cộng gộp hình thành 2 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "15 : 1"
            },
            {
                question: "TB-DTMG-L2-012. Bố mẹ chứa hai cặp gene dị hợp, tương tác cộng gộp theo số lượng của các allele trội hình thành 5 kiểu hình, đời con phân li theo tỉ lệ là bao nhiêu?",
                answer: "1 : 4 : 6 : 4 : 1"
            },
            {
                question: "TB-DTMG-L2-013. Ở một loài thực vật, gene A quy định hạt vàng trội hoàn toàn so với gene a quy định hạt trơn; gene B quy định thân cao trội hoàn toàn so với gene b quy định thân thấp; gene D quy định chín sớm trội hoàn toàn so với gene d quy định chín muộn. P: AabbDd x AaBbdd. Số loại kiểu hình ở đời con là bao nhiêu?",
                answer: "8"
            },
            // Thêm các câu hỏi SA Morgan level 2...
        ],
        level3: [
            {
                question: "TB-DTMG-L3-001. Một nhà khoa học muốn tạo ra giống lúa thuần chủng chịu hạn và kháng bệnh từ hai dòng thuần chủng: chịu hạn, không kháng bệnh (dòng 1) và không chịu hạn, kháng bệnh (dòng 2). Biết rằng allele A quy định chịu hạn trội hoàn toàn so với allele a quy định không chịu hạn. Allele B quy định kháng bệnh trội hoàn toàn so với allele b quy định không kháng bệnh. Hai gene này nằm trên cùng một NST, cách nhau 20 cM. Nhà khoa học này cho lai cây thuộc dòng 1 với cây thuộc dòng 2, thu được F1. Nếu cho cây F1 tự thụ phấn thì tỉ lệ các cây lúa thuần chủng chịu hạn và kháng bệnh ở F2 là bao nhiêu (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)?",
                answer: "47,5"
            },
            {
                question: "TB-DTMG-L3-002. Ở gà, allele A quy định vỏ trứng màu xanh trội hoàn toàn so với allele a quy định vỏ trứng màu trắng; allele B quy định mào hạt đậu trội hoàn toàn so với allele b quy định mào bình thường; hai cặp gene Aa và Bb nằm trên cặp NST thường và có khoảng cách là 5 cM. Giống gà Araucan có vỏ trứng màu xanh, mào hạt đậu. Giống gà Logo có vỏ trứng màu trắng, mào bình thường. Một nhà chọn giống tiến hành phép lai giữa hai giống gà trên nhằm tạo ra giống gà mới mang đặc điểm màu và vỏ trứng của gà Araucan, mào gà của giống gà Logo. Biết rằng không xảy ra đột biến, phép lai: ♀ Ab/aB x ♂ ab/ab tạo ra giống gà mới này có tỉ lệ là bao nhiêu %?",
                answer: "0,01"
            },
            {
                question: "TB-DTMG-L3-003. Các gene phân li độc lập, phép lai AaBbDdEE x AabbDdEe cho tỉ lệ kiểu hình gồm 1 trội và 3 lặn là bao nhiêu?",
                answer: "1/32."
            },
            {
                question: "TB-DTMG-L3-004. Các gene phân li độc lập, phép lai AaBbDdEE x AabbDdEe cho tỉ lệ kiểu hình gồm 3 trội và 1 lặn là bao nhiêu?",
                answer: "15/32."
            },
            {
                question: "TB-DTMG-L3-005. Các gene phân li độc lập, phép lai AaBbDdEE x AabbDdEe cho tỉ lệ kiểu hình trội ở tất cả các cặp tính trạng là bao nhiêu?",
                answer: "9/32."
            },
            {
                question: "TB-DTMG-L3-006. Các gene phân li độc lập, phép lai AaBbDdEE x AabbDdEe cho tỉ lệ kiểu hình gồm 2 trội và 2 lặn là bao nhiêu?",
                answer: "7/32."
            },
            {
                question: "TB-DTMG-L3-007. Trong phép lai: Bố AaBbCcDdEe x Mẹ aaBbccDdee. Các cặp gene quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau. Tỉ lệ đời con có kiểu hình trội về tất cả 5 tính trạng là bao nhiêu?",
                answer: "9/128."
            },
            {
                question: "TB-DTMG-L3-008. Trong phép lai: Bố AaBbCcDdEe x Mẹ aaBbccDdee. Các cặp gene quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau. Tỉ lệ đời con có Tỉ lệ đời con có kiểu hình giống mẹ là bao nhiêu?",
                answer: "9/128."
            },
            {
                question: "TB-DTMG-L3-009. Trong phép lai: Bố AaBbCcDdEe x Mẹ aaBbccDdee. Các cặp gene quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau. Tỉ lệ đời con có Tỉ lệ đời con có kiểu gene giống bố là bao nhiêu?",
                answer: "1/32."
            },
            {
                question: "TB-DTMG-L3-010. Ở cà chua, gene A quy định quả đỏ là trội hoàn toàn so với gene a quy định quả vàng. Khi cho cà chua quả đỏ dị hợp tử tự thụ phấn được F1. Xác suất chọn được ngẫu nhiên 3 quả cà chua màu đỏ, trong đó có 2 quả đỏ có kiểu gene đồng hợp và 1 quả đỏ có kiểu gene dị hợp từ số quả đỏ ở F1 là bao nhiêu?",
                answer: "2/9."
            },
            {
                question: "TB-DTMG-L3-011. Ở cà chua, gene A quy định quả đỏ là trội hoàn toàn so với gene a quy định quả vàng. Khi cho cà chua quả đỏ dị hợp tử tự thụ phấn được F1. Xác suất chọn được ngẫu nhiên 3 quả cà chua màu đỏ làm giống từ số quả đỏ ở F1 là bao nhiêu?",
                answer: "1/27."
            },
            {
                question: "TB-DTMG-L3-012. Xét 5 locus gene phân li độc lập trên NST thường, mỗi locus có hai allele. Tính số kiểu gene khác nhau trong quần thể có số kiểu gene đồng hợp 1 cặp gene là bao nhiêu?",
                answer: "2<sup>1</sup> . C<sub>5</sub><sup>1</sup> = 2 x 5 = 10."
            },
            {
                question: "TB-DTMG-L3-013. Xét 5 locus gene phân li độc lập trên NST thường, mỗi locus có hai allele. Tính số kiểu gene khác nhau trong quần thể có số kiểu gene đồng hợp 2 cặp gene là bao nhiêu?",
                answer: "2<sup>2</sup> . C<sub>5</sub><sup>2</sup> = 2 x 5 = 40."
            },
            {
                question: "TB-DTMG-L3-014. Xét 5 locus gene phân li độc lập trên NST thường, mỗi locus có hai allele. Tính số kiểu gene khác nhau trong quần thể có số kiểu gene đồng hợp 3 cặp gene là bao nhiêu?",
                answer: "2<sup>3</sup> . C<sub>5</sub><sup>3</sup> = 2 x 5 = 40."
            },
            {
                question: "TB-DTMG-L3-015. Xét 5 locus gene phân li độc lập trên NST thường, mỗi locus có hai allele. Tính số kiểu gene khác nhau trong quần thể có số kiểu gene đồng hợp 4 cặp gene là bao nhiêu?",
                answer: "2<sup>4</sup> . C<sub>5</sub><sup>4</sup> = 2 x 5 = 80."
            },
            {
                question: "TB-DTMG-L3-016. Xét 5 locus gene phân li độc lập trên NST thường, mỗi locus có hai allele. Tính số kiểu gene khác nhau trong quần thể có số kiểu gene đồng hợp 5 cặp gene là bao nhiêu?",
                answer: "2<sup>5</sup> . C<sub>5</sub><sup>5</sup> = 2 x 5 = 32."
            },
            {
                question: "TB-DTMG-L3-017. Trong cơ thể có 4 cặp gene nằm trên 4 cặp NST tương đồng, cơ thể bố có 3 cặp gene dị hợp, 1 cặp gene đồng hợp, còn mẹ thì ngược lại. Có bao nhiêu kiểu giao phối có thể xáy ra?",
                answer: "256."
            },
            {
                question: "TB-DTMG-L3-018. Cho lai giữa lúa cây cao hạt tròn với cây thấp hạt dài thu được F1 đồng loạt cây cao hạt tròn. Cho F1 giao phối với nhau thì F2 có 4 kiểu hình theo tỉ lệ: 592 cao, tròn: 158 cao, dài : 163 thấp, tròn : 89 thấp, dài. Biết mỗi gene quy định 1 tính trạng. Tìm quy luật di truyền và xác định tỉ lệ phân li kiểu gene và kiểu hình ở F2.",
                answer: "Hoán vị gene, 59% cao, tròn : 16% cao, dài : 16% thấp, tròn : 9% thấp, dài."
            },
            {
                question: "TB-DTMG-L3-019. Cho P thuần chủng khác nhau 2 cặp gene F1 xuất hiện cây chín sớm, quả trắng. Cho F1 tự thụ F2 thu được 4 kiểu hình với 4700 cây. Trong đó cây chín muộn, quả xanh có 375 cây. Tìm quy luật di truyền và xác định kiểu hình ở F2.",
                answer: "Hoán vị gene, 51% chín sớm, quả trắng : 24% chín sớm, quả xanh : 24% chính muộn, quả trắng : 1% chín muộn, quả xanh."
            },
            // Thêm các câu hỏi SA Morgan level 3...
        ]
    },
    saBSMD: {
        level1: [
            {
                question: "TB-BSMĐ-L1-001. Ở hoa mõm chó, kiểu gene AA quy định hoa đỏ, Aa quy định hoa hồng, aa quy định hoa trắng. Có bao nhiêu phép lai để đời con đồng tính?",
                answer: "3"
            },
            {
                question: "TB-BSMĐ-L1-002. Nêu khái niệm về quy luật tương tác gene.",
                answer: "Tương tác gene là sự tác động qua lại giũa các gene trong qua trình hình thành một kiểu hình (thực chất là tương tác giũa các sản phẩm của gene trong việc hình thành nên  kiểu hình)."
            },
            {
                question: "TB-BSMĐ-L1-003. Nêu ý nghĩa của quy luật tương tác gene.",
                answer: "Tương tác gene làm tăng xuất hiện biến dị tổ hợp, xuất hiện tính trạng mới chưa có ở bố mẹ. Mở ra khả năng tìm kiếm những tính trạng mới trong công tác lai tạo giống."
            },
            {
                question: "TB-BSMĐ-L1-004. Thế nào là quy luật tương tác bổ sung (bổ trợ)?",
                answer: "Tương tác bổ sung là sự tác động bổ sung cho nhau của sản phẩm các gene thuộc các locut khác nhau lên sự biểu hiện của một tính trạng. Ví dụ: Khi lai 2 dòng hoa thuần chủng đều có màu trắng được F1 toàn hoa đỏ. Cho F1 tự thụ phấn → F2 có tỉ lệ 9 cây hoa đỏ: 7 cây hoa trấng."
            },
            {
                question: "TB-BSMĐ-L1-005. Vẽ sơ đồ giải thích hiện tượng tương tác bổ sung.",
                answer: "Tiền chất P (chất không màu 1) → chất không màu 2: nhờ enzyme A được tổng hợp từ gene A; Chất không màu 2 → sắc tố đỏ: nhờ enzyme B được tổng hợp từ gene B. (Các allele A, B tổng hợp enzyme có hoạt tính; các allele a, b tổng hợp enzyme không có hoạt tính."
            },
            {
                question: "TB-BSMĐ-L1-006. Thế nào là quy luật tương tác cộng gộp?",
                answer: "Khi các allele trội thuộc hai hay nhiều locut gene tương tác với nhau theo kiểu mỗi allele trội (bất kể locus nào) đều làm gia tăng sự biểu hiện của kiểu hình lên một chút ít. Ví dụ: Khi đem lai hai thứ lúa mì thuần chủng hạt đỏ đậm và hạt trắng thì ở F2 thu được 15 hạt đỏ : 1 hạt trắng. Tính trạng càng do nhiều gene tương tác quy định, thì sự sai khác về kiểu hình giữa các kiểu gene càng nhỏ, và càng khó nhận biết được các kiểu hình đặc thù cho từng kiểu gene. Những tính trạng số lượng thường do nhiều gene quy định, chịu ảnh hưởng nhiều của môi trường như: sản lượng sữa, khối lượng gia súc gia cầm, số lượng trứng gà."
            },
            {
                question: "TB-BSMĐ-L1-007. Thế nào là hiện tượng gene đa hiệu?",
                answer: "Một gene có thể tác động đến sự biểu hiện của nhiều tính trạng khác nhau. Ví dụ: Gene HbA ở người quy định sự tổng hợp chuỗi β - hemoglobin bình thường gồm 146 amino acid. Gene đột biến HbS cũng quy định sự tổng hợp chuỗi β - hemoglobin bình thường gồm 146 amino acid, nhưng chỉ khác một amino acid ở vị trí số 6 (amino acic glutamic thay bằng valin), gây hậu quả làm biến đổi hồng cầu hình đĩa lõm thành hình lưỡi liềm làm xuất hiện hàng loạt rối loạn bệnh lí trong cơ thể."
            },
            {
                question: "TB-BSMĐ-L1-008. Thế nào là nhiễm sắc thể giới tính?",
                answer: "NST giới tính là  NST có chứa gene quy định giới tính (có thể chứa các gene khác)."
            },
            {
                question: "TB-BSMĐ-L1-009. Thế nào là vùng tương đồng trên NST giới tính?",
                answer: "Chứa các locus gene giống nhau; Gene tồn tại thành cặp allele; Biểu hiện thành kiểu hình như nhau ở cá thể cái và đực."
            },
            {
                question: "TB-BSMĐ-L1-010. Thế nào là vùng không tương đồng trên NST giới tính?",
                answer: "Chứa các locus gene khác nhau; Gene không tồn tại thành cặp allele; Biểu hiện thành KH khác nhau ở cá thể cái và đực."
            },
            {
                question: "TB-BSMĐ-L1-011. Thế nào là nhiễm sắc thể thường?",
                answer: "Nhiễm sắc thể thường là nhiễm sắc thể chứa các gene quy định các tính trạng thường."
            },
            {
                question: "TB-BSMĐ-L1-012. Cho biết cơ chế xác định giới tính ở một số loài sinh vật.",
                answer: "Con cái  XX, con đực XY: Động vật có vú, ruồi giấm, người; Con cái  XY, con đực XX: Chim, bướm, cá, ếch nhái, bò sát; Con cái XX, con đực XO: châu chấu, rệp, bọ xít; Con cái XO, con đực XX: Bọ nhậy. Nhận xét: Tỉ lệ đực cái trong quần thể luôn xấp xỉ 1 : 1; Tỉ lệ giới tính tạo sự cân bằng giới tính trong sinh giới và đảm bảo khả năng sinh sản của các loài trong tự nhiên."
            },
            {
                question: "TB-BSMĐ-L1-013. Cho biết đặc điểm di truyền của gene nằm trên NST X.",
                answer: "Di truyền chéo."
            },
            {
                question: "TB-BSMĐ-L1-013. Cho biết đặc điểm di truyền của gene nằm trên NST Y.",
                answer: "Di truyền thẳng."
            },
            {
                question: "TB-BSMĐ-L1-014. Thế nào là quy luật di truyền liên kết với giới tính?",
                answer: "Di truyền liên kết với giới tính là hiện tượng di truyền các tính trạng mà các gene xác định chúng nằm trên NST giới tính."
            },
            {
                question: "TB-BSMĐ-L1-015. Cho biết ý nghĩa quy luật di truyền liên kết với giới tính?",
                answer: "Điều khiển tỉ lệ đực cái theo ý muốn trong chăn nuôi trồng trọt; Nhận dạng được đực cái từ nhỏ đẻ phân loại tiện cho việc chăn nuôi; Phát hiện được bệnh do rối loạn cơ chế phân li, tổ hợp của cặo NST giới tính."
            },
            {
                question: "TB-BSMĐ-L1-016. Trình bày thí nghiệm của Coren về quy luật di truyền ngoài nhân.",
                answer: "Thí nghiệm của Coren 1909 với 2 phép lai thuận nghịch trên đối tượng cây hoa phấn <em>(Mirabilis jalapa)</em>. F1 luôn có KH giống mẹ."
            },
            {
                question: "TB-BSMĐ-L1-017. Giải thích quy luật di truyền ngoài nhân.",
                answer: "Khi thụ tinh, giao tử đực chỉ truyền nhân mà không truyền tế bào chất cho trứng, do vậy các gene nằm trong tế bào chất (trong ti thể hoặc lục lạp) chỉ được mẹ truyền cho qua tế bào chất của trứng."
            },
            {
                question: "TB-BSMĐ-L1-018. Trình bày đặc điểm của quy luật di truyền ngoài nhân.",
                answer: "Lai thuận lai nghịch kết quả khác nhau biểu hiện kiểu hình ở đời con theo dòng mẹ; Di truyền qua tế bào chất vai trò chủ yếu thuộc về tế bào chất của tế bào sinh dục cái; Các tính trạng di truyền qua tế bào chất không tuân theo các quy luật của thuyết di truyền NST vì tế bào chất không được phân đều cho các tế bào con như đối với NST; Các tính trạng di truyền qua tế bào chất được truyền theo dòng mẹ, nhưng không phải tất cả các tính trạng di truyền theo dòng mẹ đều liên quan với các gene trong tế bào chất; Tính trạng do gene gene trong tế bào chất quy định sẽ vẫn tồn tại khi thay nhân tế bào bằng nhân có cấu trúc di truyền khác."
            },
            {
                question: "TB-BSMĐ-L1-019. Làm thế nào để phát hiện quy luật di truyền ngoài nhân.",
                answer: "Dùng phép lai thuận nghịch. Di truyền liên kết với giới tính: kết qủa 2 phép lai thuận nghịch khác nhau và tính trạng phân bố không đồng đều ở 2 giới; Di truyền ngoài nhân: kết quả 2 phép lai thuận nghịch khác nhau và con luôn có kiểu hình giống mẹ. Di truyền phân li độc lập: kết quả 2 phép lai thuận nghịch giống nhau."
            },
            {
                question: "TB-BSMĐ-L1-020. Vẽ sơ đồ con đường từ gene đến tính trạng.",
                answer: "Gene (DNA) → mRNA  → Protein  →  tính trạng."
            },
            {
                question: "TB-BSMĐ-L1-021. Vẽ sơ đồ con đường từ gene đến tính trạng.",
                answer: "Gene (DNA) → mRNA  → Protein  →  tính trạng. Qúa trình biểu hiện của gene qua nhiều bước nên có thể bị nhiều yếu tố môi trường bên trong cũng như bên ngoài chi phối."
            },
            {
                question: "TB-BSMĐ-L1-022. Thế nào là mức phản ứng của kiểu gene?",
                answer: "Tập hợp các kiểu hình của cùng một kiểu gene tương ứng với các môi trường khác nhau gọi là mức phản ứng của một kiểu gene."
            },
            {
                question: "TB-BSMĐ-L1-023. Trình bày đặc điểm của mức phản ứng.",
                answer: "Mức phản ứng do gene quy định. Trong cùng một kiểu gene, mỗi gene có mức phản ứng riêng. Có hai loại mức phản ứng: mức phản ứng rộng và mức phản ứng hẹp, mức phản ứng càng rộng sinh vật càng dễ thích nghi. Mức phản ứng di truyền được vì do kiểu gene quy định và có hệ số di truyền thay đổi theo từng loại tính trạng."
            },
            {
                question: "TB-BSMĐ-L1-024. Làm sao để xác định mức phản ứng của kiểu gene?",
                answer: "Để xác định mức phản ứng của một kiểu gene, cần phải tạo ra các cá thể sinh vật có cùng một kiểu gene rồi cho chúng sống ở các điều kiện môi trường khác nhau. Với cây sinh sản sinh dưỡng, có thể xác định mức phản ứng bằng cách cắt đồng loạt cành của cùng một cây đem trồng ở các điều kiện khác nhau và theo dõi đặc điểm của chúng."
            },
            {
                question: "TB-BSMĐ-L1-025. Thế nào là sự mềm dẻo kiểu hình (thường biến)?",
                answer: "Hiện tượng một kiểu gene có thể thay đổi kiểu hình trước những điều kiện môi trường khác nhau gọi là sự mềm dẻo về kiểu hình (thường biến). Mức độ mềm dẻo của kiểu hình phụ thuộc vào kiểu gene. Mỗi kiểu gene chỉ có thể điều chỉnh kiểu hình của mình trong một phạm vi nhất định. Mềm dẻo kiểu hình do sự tự điều chỉnh về sinh lí giúp sinh vật thích nghi với những thay đổi của môi trường."
            },
            // Thêm các câu hỏi SA Bổ sung Mendel level 1 khác...
        ],
        level2: [
            {
                question: "TB-BSMĐ-L2-001. Ở ruồi giấm, gene y (thân vàng) và gene ras (mắt hình quả dâu) cùng nằm trên vùng không tương đồng của NST X và cách nhau 32 cM. Phép lai phân tích các ruồi giấm cái dị hợp tử các cặp gene thân vàng, mắt hình quả dâu thu được đời con có tỉ lệ kiểu hình tái tổ hợp ở con đực là bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy).",
                answer: "0,16"
            },
            {
                question: "TB-BSMĐ-L2-002. Ở lúa, tính trạng kích thước thân do ba cặp allele phân li độc lập Aa, Bb, Dd tác động qua lại cùng quy định. Cây lúa AABBDD cao nhất và có chiều cao là 90 cm.Mỗi allele lặn làm lúa thấp hơn 5 cm.Xét trong quần thể, cây có chiều cao 75 cm có bao nhiêu loại kiểu gene?",
                answer: "7"
            },
            {
                question: "TB-BSMĐ-L2-003. Ở chuột, màu lông được quy định bởi một gene có bốn allele nằm trên NST thường, allele trội là trội hoàn toàn. Số loại kiểu gene nhiều nhất của một loại kiểu hình là bao nhiêu ?",
                answer: "4"
            },
            {
                question: "TB-BSMĐ-L2-004. Bệnh mù màu (đỏ và xanh lục) ở người do đột biến gene lặn nằm trên NST giới tính X quy định. Allele  trội tương ứng quy định người bình thường. Mẹ bình thường có mang gene gây bệnh, bố bị mù màu thì xác suất sinh con trai của họ bị bệnh là bao nhiêu %?",
                answer: "25"
            },
            {
                question: "TB-BSMĐ-L2-005. Ở người, sự di truyền nhóm máu ABO do bao nhiêu allele quy định?",
                answer: "3"
            },
            {
                question: "TB-BSMĐ-L2-006. Giải thích tại sao ở thỏ Himalaya, vị trí đầu mút cơ thể (tai, bàn chân, đuôi, mõm) có lông màu đen còn ở những vị trí khác lông trắng muốt?",
                answer: "Tại các tế bào ở đầu mút cơ thể có nhiệt độ thấp hơn nên có khả năng tổng hợp được sắc tố melanin làm cho lông màu đen. Các vùng khác có nhiệt độ cao hơn không tổng hợp melanin nên lông màu trắng → làm giảm nhiệt độ thì vùng lông trắng sẽ chuyển sang màu đen. Kết luận: Môi trường có thể ảnh hưởng đến sự biểu hiện của kiểu gene."
            },
            // Thêm các câu hỏi SA Bổ sung Mendel level 2...
        ],
        level3: [
            {
                question: "TB-BSMĐ-L3-001. Ở bò, kiểu gene AA quy định tính trạng lông đen, kiểu gene Aa quy định tính trạng lông lang đen trắng, kiểu gene aa quy định tính trạng lông vàng; allele B quy định tính trạng không sừng trội hoàn toàn so với allele b quy định tính trạng có sừng; allele D quy định tính trạng chân cao trội hoàn toàn so với allele d quy định tính trạng chân thấp. Các gene nằm trên các NST thường khác nhau. Phép lai P: AaBbDD × AaBbdd, tạo ra F Theo lí thuyết, xác suất để sinh một con bò lông đen, không sừng, chân cao là cao gấp bao nhiêu lần một con bò lông vàng, có sừng, chân cao?",
                answer: "3"
            },
            {
                question: "TB-BSMĐ-L3-002. Ở ruồi giấm, allele A quy định mắt đỏ là trội hoàn toàn so với allele a quy định mắt trắng. Quần thể ruồi có 5 loại kiểu gene quy định tính trạng màu mắt. Theo lí thuyết, phép lai giữa tất cả ruồi giấm đực và tất cả các ruồi giấm cái có kiểu gene khác nhau thì tạo ra đời con có kiểu hình mắt đỏ chiếm tỉ lệ bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy).",
                answer: "0,63"
            },
            {
                question: "TB-BSMĐ-L3-003. Ở một loài thực vật lưỡng bội, tính trạng màu hoa do một gene có 4 allele quy định. Allele A1 quy định hoa đỏ trội hoàn toàn so với allele A2, A3, A4; A2 quy định hoa vàng trội hoàn toàn so với allele A3, A4; allele A3 quy định hoa hồng trội hoàn toàn so với allele A4 quy định hoa trắng. Biết không xảy ra đột biến. Cho cây hoa vàng lai với các cây hoa khác, có tối đa bao nhiêu sơ đồ lai mà F1 thu được 100% vàng?",
                answer: "6"
            },
            // Thêm các câu hỏi SA Bổ sung Mendel level 3...
        ]
    },
    saDBG: {
        level1: [
            {
                question: "...",
                answer: "6"
            },
            // Thêm các câu hỏi SA Morgan level 1 khác...
        ],
        level2: [
            {
                question: "TB-ĐBG-L1-001. Một đột biến điểm ở một gene làm thay đổi thành phần của chuỗi polypeptide được mô tả trong Hình 1. Sử dụng  bảng mã di truyền trong Hình 2 và cho biết có tối đa bao nhiêu trường hợp sau đây để tạo ra loại đột biến này?<br/>1. Thay thế A - T thành G - C.<br/>2. Thay thế G - C thành A - T.<br/>3. Thay thế A - T thành T - A.<br/>4. Thay thế G - C thành C - G.<br/>5. Mất một cặp A - T.<br/>6. Mất một cặp G - C.<br/>",
                image: "https://nhantri.top/media/Grade12/taodbg.png",
                answer: "1"
            },

            // Thêm các câu hỏi SA Morgan level 2...
        ],
        level3: [
            {
                question: "...",
                answer: "0,01"
            },
            // Thêm các câu hỏi SA Morgan level 3...
        ]
    },
    saDBNST: {
        level1: [
            {
                question: "TB-ĐBNST-L1-001. Ở cà độc dược (2n = 24), có tối đa bao nhiêu dạng thể ba tạo thành các dạng quả khác nhau về hình dạng, kích thước, phát triển gai?",
                answer: "12"
            },
            {
                question: "TB-ĐBNST-L1-002. Cừu có 2n = 54, dê có 2n = 60. Con lai của cặp cừu – dê được gọi là geep.Số NST trong mỗi tế bào sinh dưỡng của geep là bao nhiêu?",
                answer: "57"
            },
            {
                question: "TB-ĐBNST-L1-003. Một số loài có bộ NST như sau: lúa mì 6n = 42, khoai tây 4n = 48, chuối nhà 3n = 27, cà độc dược 2n + 1 = 25. Có tối đa bao nhiêu thể đa bội chẵn trong các ví dụ trên?",
                answer: "2"
            },

            // Thêm các câu hỏi SA Morgan level 1 khác...
        ],
        level2: [
            {
                question: "TB-ĐBNST-L2-001. Hình ảnh cho thấy các loại giao tử chứa NST 14, 21 và 14/21 có thể được tạo thành từ các tế bào sinh trứng ở một người phụ nữ bị đột biến chuyển đoạn Robertson (một phần của NST 21 gắn vào NST 14). Loại giao tử nào trong hình kết hợp với giao tử đực bình thường tạo thành hợp tử có các cặp NST 14 và 21 bình thường?",
                image: "https://nhantri.top/media/Grade12/Robertson.png",
                answer: "1"
            },
            {
                question: "TB-ĐBNST-L2-002. Hình ảnh mô tả một giai đoạn của hai tế bào cùng loài đang trong quá trình giảm phân. Giả sử tế bào sinh trứng có một cặp NST không phân li trong giảm phân I, giảm phân II diễn ra bình thường; tế bào sinh tinh giảm phân bình thường. Hợp tử được tạo thành do sự kết hợp giữa trứng (n + 1) và tinh trùng (n) sẽ có bao nhiêu NST?",
                image: "https://nhantri.top/media/Grade12/bonnst.png",
                answer: "5"
            },
            // Thêm các câu hỏi SA Morgan level 2...
        ],
        level3: [
            {
                question: "TB-ĐBNST-L3-001. Ở cà chua, gene A quy định quả đỏ trội hoàn toàn so với allele a quy định quả vàng. Cây tứ bội giảm phân cho giao tử 2n có khả năng thụ tinh bình thường. Theo lí thuyết, phép lai P: Aaaa (4n) × Aaaa tạo ra F1 có tỉ lệ kiểu gene đồng hợp tử chiếm bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy).",
                answer: "0,25"
            },
            // Thêm các câu hỏi SA Morgan level 3...
        ]
    },

    saDTHNUD: {
        level1: [
            {
                question: "TB-DTHN&UWD-L1-001. Nêu khái niệm biến dị tổ hợp.",
                answer: "Là biến dị xuất hiện do sự tổ hợp vật chất di truyền của bố mẹ trong quá trình sinh sản hữu tính."
            },
            {
                question: "TB-DTHN&UWD-L1-002. Trình bày quy trình tạo ra dòng thuần.",
                answer: "Bước 1: Tạo các dòng thuần chủng có kiểu gen khác nhau; Bước 2: Lai các dòng thuần chủng khác nhau → tạo con lai F1; Bước 3: Cho F1 tự thụ phấn hoặc giao phối cận huyết rồi chọn lọc những tổ hợp gene mong muốn. Sau đó tiếp tục cho tự thụ phấn hoặc giao phối cận huyết để tạo ra các dòng thuần chủng (giống thuần)."
            },
            {
                question: "TB-DTHN&UWD-L1-003. Cho biết những ưu điểm của việc tạo giống nhờ biến dị tổ hợp.",
                answer: "Kĩ thuật đơn giản, dễ thực hiện; Có thể dự đoán được kết quả dựa trên các quy luật di truyền."
            },
            {
                question: "TB-DTHN&UWD-L1-004. Cho biết những nhược điểm của việc tạo giống nhờ biến dị tổ hợp.",
                answer: "Mất nhiều thời gian và công sức để chọn lọc và đánh giá từng tổ hợp gene và duy trì giống thuần."
            },
            {
                question: "TB-DTHN&UWD-L1-005. Trình bày một số thành tựu của việc tạo giống nhờ biến dị tổ hợp.",
                answer: "Giống lúa VX83 là kết quả của phép lai giữa giống lúa X1 (NN75-10): năng suất cao, chống bệnh bạc lá, không kháng rầy, chất lượng gạo trung bình với giống lúa CN2 (IR 197446 – 11 – 33): năng suất trung bình, ngắn ngày, kháng rầy, chất lượng gạo cao → VX83: năng suất cao, ngắn ngày, kháng rầy, chống bệnh bạc lá, chất lượng gạo cao,…"
            },
            {
                question: "TB-DTHN&UWD-L1-006. Nêu khái niệm ưu thế lai.",
                answer: "Ưu thế lai là hiện tượng con lai có năng suất, phẩm chất, sức chống chịu, khả năng sinh trưởng và phát triển cao vượt trội so với các dạng bố mẹ."
            },
            {
                question: "TB-DTHN&UWD-L1-007. Giải thích sự xuất hiện ưu thế lai.",
                answer: "Giả thuyết siêu trội: ở trạng thái dị hợp tử về nhiều cặp gen khác nhau con lai có kiểu hình vượt trội về nhiều mặt so với các dạng bố mẹ thuần chủng. Có thể tóm tắt giả thuyết này như sau: AA < Aa > aa; Giả thuyết về trạng thái dị hợp theo nhiều gene: Cơ thể lai F1 thuộc thể dị hợp theo nhiều gene, trong đó gene lặn không được biểu hiện. AABBDD x aabbdd → AaBbDd. Trong các thế hệ sau, tỉ lệ thể dị hợp giảm dần nên ưu thế lai cũng giảm; Giả thuyết về tác động cộng gộp của các gene trội có lợi: Các allele trội thường có tác dụng có lợi nhiều hơn các allele lặn. Hiện tượng này biểu hiện rõ ở các tính trạng đa gene, như chiều cao cây phụ thuộc vào số lượng allele trội."
            },
            {
                question: "TB-DTHN&UWD-L1-008. Trình bày quy trình tạo giống có ưu thế lai cao.",
                answer: "Bước 1: Tạo dòng thuần chủng có kiểu gen khác nhau bằng cách cho tự thụ phấn hoặc giao phối gần qua 5 – 7 thế hệ; Bước 2: Cho lai các dòng thuần chủng khác nhau. Tùy theo mục đích người ta sử dụng phương pháp lai khác dòng hoặc lai thuận nghịch; Bước 3: Chọn các tổ hợp có ưu thế lai mong muốn."
            },
            {
                question: "TB-DTHN&UWD-L1-009. Trình bày đặc điểm của ưu thế lai.",
                answer: "Ưu thế lai thường biểu hiện cao nhất ở F1 sau đó giảm dần qua các thế hệ; Chỉ dùng con lai có ưu thế lai làm kinh tế (lấy thương phẩm), không dùng làm giống; Ưu thế lai biểu hiện cao nhất trong lai khác dòng."
            },
            {
                question: "TB-DTHN&UWD-L1-010. Làm thế nào để duy trì được ưu thế lai?",
                answer: "Ở thực vật: Cho lai sinh sản sinh dưỡng, sinh sản vô tính; Ở động vật: Sử dụng lai luân phiên (lai luân chuyển/lai cải tiến): cho con đực con lai ngược lại với cái mẹ hoặc đực đời bố lai với cái ở đời con."
            },
            {
                question: "TB-DTHN&UWD-L1-011. Cho biết những ưu điểm của việc tạo giống nhờ ưu thế lai.",
                answer: "Nhanh chóng chọn được dạng F1 cho ưu thế lai cao."
            },
            {
                question: "TB-DTHN&UWD-L1-012. Cho biết những nhược điểm của việc tạo giống nhờ ưu thế lai.",
                answer: "Tốn nhiều thời gian và công sức trong việc xác định tổ hợp cho ưu thế lai; ưu thế lai khó duy trì qua các thế hệ."
            },
            {
                question: "TB-DTHN&UWD-L1-013. Trình bày một số thành tựu của việc tạo giống nhờ ưu thế lai.",
                answer: "Vật nuôi: Lợn lai kinh tế, bò lai...; Cây trồng: Ngô lai Biosit, một số giống lúa, ..."
            },
            {
                question: "TB-DTHN&UWD-L1-014. Thế nào là tạo giống bằng phương pháp gây đột biến?",
                answer: "Tạo giống bằng phương pháp gây đột biến là phương pháp sử dụng các tác nhân vật lí và hóa học nhằm làm thay đổi vật liệu di truyền của sinh vật để phục vụ cho lợi ích con người."
            },
            {
                question: "TB-DTHN&UWD-L1-015. Trình bày quy trình tạo giống bằng phương pháp gây đột biến.",
                answer: "Bước 1: Xử lí mẫu vật bằng tác nhân gây đột biến thích hợp; Bước 2: Chọn lọc các thể đột biến có kiểu hình mong muốn; Bước 3: Tạo dòng thuần chủng."
            },
            {
                question: "TB-DTHN&UWD-L1-016. Những đối tượng nào có thể sử dụng để áp dụng phương pháp tạo giống bằng gây đột biến?",
                answer: "Vi sinh vật: Phương pháp tạo giống sinh vật bằng gây đột biến đặc biệt hiệu quả vì tốc độ sinh sản của chúng rất nhanh nên chúng nhanh chóng tạo ra các dòng đột biến; Thực vật: áp dụng đối với hạt khô, hạt nảy mầm, hoặc đỉnh sinh trưởng của thân, cành, hay hạt phấn, bầu nhụy của hoa …; Động vật: chỉ được sử dụng hạn chế ở một số nhóm động vật bậc thấp, khó áp dụng cho các nhóm động vật bậc cao vì cơ quan sinh sản của chúng nằm sâu trong cơ thể nên rất khó xử lí. Chúng phản ứng rất nhạy và dễ bị chết khi xử lý bằng các tác nhân lí hóa."
            },
            {
                question: "TB-DTHN&UWD-L1-017. Cho biết những ưu điểm của việc tạo giống bằng phương pháp gây đột biến.",
                answer: "Nhanh chóng tạo được sự đa dạng của các thể đột biến; Có hiệu quả cao đối với vi sinh vật."
            },
            {
                question: "TB-DTHN&UWD-L1-018. Cho biết những nhược điểm của việc tạo giống bằng phương pháp gây đột biến.",
                answer: "Đòi hỏi trang thiết bị hiện đại, trình độ kỹ thuật cao và sự bảo đảm an toàn, nghiêm ngặt đối với các tác động xấu lên môi trường; Khó dự đoán kết quả do đột biến vô hướng."
            },
            {
                question: "TB-DTHN&UWD-L1-019. Trình bày một số thành tựu của việc tạo giống bằng phương pháp gây đột biến.",
                answer: "Hướng tạo thể đa bội được chú trọng nhiều đối với các giống cây trồng thu hoạch chủ yếu về thân, lá, củ như cây lấy gỗ, cây lấy sợi, cây rau, .... Ví dụ: Rau muống 4n có lá và thân to, sản lượng 30 tạ / ha; dương liễu 3n lớn mạnh, cho gỗ tốt; dưa hấu, nho tam bội không hạt; dâu tằm tam bội để lấy lá …"
            },
            {
                question: "TB-DTHN&UWD-L1-020. Công nghệ tế bào là gì?",
                answer: "Công nghệ tế bào là ngành kĩ thuật áp dụng phương pháp nuôi cấy mô hoặc tế bào trong môi trường dinh dưỡng nhân tạo để tạo ra những mô, cơ quan hay cơ thể hoàn chỉnh."
            },
            {
                question: "TB-DTHN&UWD-L1-021. Trình bày cách tiến hành công nghệ nuôi cấy mô tế bào thực vật (invitro).",
                answer: "Mô tế bào thực vật → nuôi cấy trong ống nghiệm (invitro) → các cây hoàn chỉnh."
            },
            {
                question: "TB-DTHN&UWD-L1-022. Cho biết những ưu điểm của việc tạo giống bằng công nghệ nuôi cấy mô tế bào thực vật.",
                answer: "Nhân nhanh giống cây trồng quý hiếm; Tạo quần thể cây trồng đồng nhất về kiểu gene; Duy trì ưu thế lai."
            },
            {
                question: "TB-DTHN&UWD-L1-023. Trình bày một số thành tựu của việc tạo giống bằng công nghệ nuôi cấy mô tế bào thực vật.",
                answer: "Khoai tây; keo lá chàm; phong lan; ..."
            },
            {
                question: "TB-DTHN&UWD-L1-024. Trình bày cách tiến hành công nghệ lai tế bào sinh dưỡng (dung hợp tế bào trần).",
                answer: "Loại bỏ thành cellulose của các tế bào đem lai → tế bào trần. Nuôi các tế bào trần trong môi trường đặc biệt để dung hợp nhân với nhau tạo tế bào lai mang bộ NST lưỡng bội của 2 loài ban đầu (2nA + 2nB). Nuôi cấy tế bào lai trong môi trường thích hợp → Cây lai khác loài."
            },
            {
                question: "TB-DTHN&UWD-L1-025. Cho biết những ưu điểm của việc tạo giống bằng công nghệ lai tế bào sinh dưỡng (dung hợp tế bào trần).",
                answer: "Tạo giống mới mang đặc điểm của cả hai loài mà bằng phương pháp lai hữu tính không tạo ra được."
            },
            {
                question: "TB-DTHN&UWD-L1-026. Trình bày một số thành tựu của việc tạo giống bằng công nghệ lai tế bào sinh dưỡng (dung hợp tế bào trần).",
                answer: "Tạo cây tomato (cây lai giữa khoai tây và cà chua)"
            },
            {
                question: "TB-DTHN&UWD-L1-027. Trình bày cách tiến hành công nghệ nuôi cấy hạt phấn hoặc noãn.",
                answer: "Nuôi cấy hạt phấn hoặc noãn trong ống nghiệm → mô đơn bội (n); Dùng tác nhân gây đột biến đa bội (thường là conchicin) → mô lưỡng bội → nuôi cấy trong điều kiện thích hợp → tạo cây lưỡng bội."
            },
            {
                question: "TB-DTHN&UWD-L1-028. Cho biết những ưu điểm của việc tạo giống bằng công nghệ nuôi cấy hạt phấn hoặc noãn.",
                answer: "Chọn lọc được các dòng TB có bộ gen đơn bội khác nhau; Tạo giống mới có kiểu gene đồng hợp về tất cả các cặp gene."
            },
            {
                question: "TB-DTHN&UWD-L1-029. Trình bày một số thành tựu của việc tạo giống bằng công nghệ nuôi cấy hạt phấn hoặc noãn.",
                answer: "Tạo giống bằng công nghệ nuôi cấy hạt phấn hoặc noãn rất có hiệu quả ở lúa."
            },
            {
                question: "TB-DTHN&UWD-L1-030. Thế nào là công nghệ nhân bản vô tính ở động vật?",
                answer: "Nhân bản vô tính là quy trình chuyển nhân của tế bào soma từ động vật cho nhân vào tế bào trứng đã lấy mất nhân của động vật cho trứng rồi kích thích tế bào trứng đó phát triển thành phôi, cấy phôi vào tử cung của động vật làm mẹ sau đó sinh ra con bình thường."
            },
            {
                question: "TB-DTHN&UWD-L1-031. Cho biết ý nghĩa của công nghệ nhân bản vô tính ở động vật?",
                answer: "Nhân nhanh các giống vật nuôi quý hiếm đặc biệt là các động vật biến đổi gen → phục vụ lợi ích của con người; Nhân bản vô tính các mô, cơ quan mong muốn để phục vụ cho y học (thay thế các mô, cơ quan ở người bệnh)."
            },
            {
                question: "TB-DTHN&UWD-L1-032. Nêu một số thành tựu của công nghệ nhân bản vô tính ở động vật?",
                answer: "Cừu, chuột, lợn, bò, chó, …."
            },
            {
                question: "TB-DTHN&UWD-L1-033. Thế nào là công nghệ cấy truyền phôi?",
                answer: "Cấy truyền phôi là kĩ thuật chia cắt  phôi động thành nhiều phôi rồi cấy các phôi này vào tử cung của các con vật khác nhau. Các cá thể sinh ra có kiểu gene giống nhau."
            },
            {
                question: "TB-DTHN&UWD-L1-034. Cho biết ý nghĩa của công nghệ cấy truyền phôi.",
                answer: "Phát triển nhanh về số lượng và chất lượng đàn vật nuôi; Nhân nhanh các giống động vật quý hiếm."
            },
            {
                question: "TB-DTHN&UWD-L1-035. Nêu thành tựu của công nghệ cấy truyền phôi.",
                answer: "Cấy truyền phôi ở bò."
            },
            {
                question: "TB-DTHN&UWD-L1-036. Nêu khái niệm công nghệ gene.",
                answer: "Công nghệ gene là quy trình tạo ra những tế bào hoặc sinh vật có gene bị biến đổi hoặc có thêm gene mới."
            },
            {
                question: "TB-DTHN&UWD-L1-037. Kĩ thuật chuyển gene là gì?",
                answer: "Theo trung tâm của CNG, kĩ thuật chuyển gene là kĩ thuật tạo DNA tái tổ hợp để chuyển gene từ tế bào này sang tế bào khác."
            },
            {
                question: "TB-DTHN&UWD-L1-038. Thế nào là tế bào cho trong kĩ thuật chuyển gene?",
                answer: "Tế bào cho là những tế bào chứa gen cần chuyển (vi khuẩn, thực vật, động vật)."
            },
            {
                question: "TB-DTHN&UWD-L1-039. Thế nào là tế bào nhận trong kĩ thuật chuyển gene?",
                answer: "Tế bào nhận là các tế bào vi khuẩn, tế bào thực vật (tế bào chồi, mầm), tế bào động vật (như tế bào trứng, phôi)."
            },
            {
                question: "TB-DTHN&UWD-L1-040. Thế nào là thể truyền?",
                answer: "Thể truyền (vector chuyển gene) là một phân tử DNA nhỏ có khả năng tự nhân đôi độc lập với hệ gene của tế bào và mang gene từ tế bào này sang tế bào khác. Thể truyền có thể là các plasmid, virus hoặc NST nhân tạo."
            },
            {
                question: "TB-DTHN&UWD-L1-041. Trong kĩ thuật chuyển gene cần có sự tham gia của các loại enzyme nào?",
                answer: "Enzyme cắt giới hạn restrictase và enzyme nối ligase."
            },
            {
                question: "TB-DTHN&UWD-L1-042. Trình bày cách tiến hành công nghệ chuyển gene.",
                answer: "Bước 1: Tạo ADN tái tổ hợp: Tách chiết thể truyền và gen cần chuyển ra khỏi tế bào; Xử lí bằng một loại enzyme giới hạn (restrictase) để tạo ra cùng 1 loại đầu dính; Dùng enzyme nối ligase để gắn chúng tạo DNA tái tổ hợp. Bước 2: Đưa DNA tái tổ hợp vào tế bào nhận: Dùng muối CaCl<sub>2</sub> hoặc xung điện cao áp làm dãn màng sinh chất của tế bào để DNA tái tổ hợp dễ dàng đi qua màng. Bước 3: Phân lập dòng tế bào chứa ADN tái tổ hợp: Các nhà khoa học thường chọn thể truyền có gene đánh dấu để nhận biết các tế bào có DNA tái tổ hợp. Phân lập dòng tế bào chứa gene đánh dấu."
            },
            {
                question: "TB-DTHN&UWD-L1-043. Thế nào là sinh vật biến đổi gene?",
                answer: "Sinh vật biến đổi gene là sinh vật mà hệ gene của nó đã được con người làm biến đổi cho phù hợp với lợi ích của mình."
            },
            {
                question: "TB-DTHN&UWD-L1-044. Có những cách nào để làm biến đổi gene của một sinh vật?",
                answer: "Đưa thêm một gen lạ (thường là gen của một loài khác) vào hệ gene. Sinh vật có gene của loài khác bằng cách này được gọi là sinh vật chuyển gene; Làm biến đổi một gene có sẵn trong hệ gene; Loại bỏ hoặc làm bất hoạt một gene nào đó trong hệ gene."
            },
            {
                question: "TB-DTHN&UWD-L1-045. Trình bày một số thành tựu công nghệ chuyển gene ở động vật.",
                answer: "Chuyển gene protein huyết thanh của người vào cừu → biểu hiện ở tuyến sữa → cho sản phẩm với số lượng lớn → chế biến thành thuốc chống u xơ nang và bệnh về đường hô hấp ở người; Chuyển gene sản xuất r-protein của người → biểu hiện ở tuyến sữa → cho sản phẩm với số lượng lớn → sản xuất protein C chữa bệnh máu vón cục gây tắc mạch; Chuyển gene hormone sinh trưởng của chuột cống vào chuột nhắt → nên nó có khối lượng gần gấp đôi so với chuột cùng lứa; Cừu chuyển gene trong sữa có protein tơ nhện để sản xuất áo giáp chống đạn."
            },
            {
                question: "TB-DTHN&UWD-L1-046. Trình bày một số thành tựu công nghệ chuyển gene ở thực vật.",
                answer: "Tạo ra giống cà chua chuyển gene kéo dài thời gian chín; Tạo giống lúa gạo vàng có khả năng tổng hợp β - caroten trong hạt; Chuyển gene trừ sâu từ vi khuẩn  bông vải → giống bông kháng sâu hại."
            },
            {
                question: "TB-DTHN&UWD-L1-047. Trình bày một số thành tựu công nghệ chuyển gene ở vi sinh vật.",
                answer: "Tạo dòng vi khuẩn sản xuất kháng thể miễn dịch cúm; Tạo dòng vi khuẩn mang gen mã hoá insulin ở người → tạo ra lượng lớn insulin chữa bệnh tiểu đường thuốc có giá thành hạ gấp nhiều lần so với sản xuất hoá học; Tạo dòng vi khuẩn biến đổi gene phục vụ cho các mục đích khác nhau của con người như: phân hủy rác thải, dầu loang, …"
            },
            // Thêm các câu hỏi SA Di truyền học người và ứng dụng DTH level 1 khác...
        ],
        level2: [
            {
                question: "...",
                
                answer: "1"
            },

            // Thêm các câu hỏi SA Di truyền học người và ứng dụng DTH level 2...
        ],
        level3: [
            {
                question: "TB-DTHN&UDTH-L3-001. Các tế bào lai người - chuột được tạo ra bằng cách dung hợp các tế bào nuôi cấy của người và chuột. Khi tế bào lai phân chia, bộ NST của chuột thường được duy trì nguyên vẹn ở tế bào con, còn các NST của người bị mất đi ngẫu nhiên sau một số lần phân bào. Trong một nghiên cứu, nhằm xác định vị trí gene trên NST, ba dòng tế bào lai người - chuột là X, Y, Z được phân tích về NST và sự biểu hiện một số protein của người, kết quả được biểu hiện ở trong bảng. Biết rằng mỗi gene quy định một protein tương ứng M, N, P, Q, R. Hãy điền tên hai NST không mang gene nào trong số các gene đang xét (viết liền số NST theo thứ tự từ bé đến lớn).",
                image: "https://nhantri.top/media/Grade12/matmnpq.png",
                answer: "914"
            },
            // Thêm các câu hỏi SA Di truyền học người và ứng dụng DTH level 3...
        ]
    },
    saDTQT: {
        level1: [
            {
                question: "TB-DTQT-L1-001. Nêu khái niệm quần thể.",
                answer: "Quần thể là tập hợp các cá thể cùng loài, cùng chung sống trong một khoảng không gian xác định, tồn tại qua một thời gian nhất định, có khả năng sinh con cái để duy trì nòi giống. Về mặt di truyền học, có hai loại quần thể là quần thể giao phối và quần thể tự phối."
            },
            {
                question: "TB-DTQT-L1-002. Trình bày các đặc trưng di truyền của quần thể.",
                answer: "Mỗi quần thể được đặc trưng bởi 1 vốn gene nhất định. Vốn gene là toàn bộ các allele của  tất cả các gene trong quần thể. Vốn gene bao gồm các kiểu gene riêng biệt được biểu hiện thành những kiểu hình nhất định. Mỗi quần thể còn được đặc trưng bởi tần số allele, tần số kiểu gene (hay cấu trúc DT hat TPKG của QT). Tần số của một kiểu gene được xác định bằng tỉ số giữa cá thể có kiểu gene đó trên tổng số cá thể trong quần thể. Tần số của allele được tính bằng tỉ lệ giữa số allele được xét đến trên tổng số allele thuộc một locus trong quần thể hay bằng tỉ lệ % số giao tử mang allele đó trong quần thể."
            },
            {
                question: "TB-DTQT-L1-003. Trình bày đặc điểm của quần thể tự phối.",
                answer: "Cấu trúc di truyền của quần thể tự phối biến đổi qua các thể hệ theo hướng giảm dần tỉ lệ dị hợp tử và tăng dần tỉ lệ đồng hợp tử, nhưng không làm thay đổi tần số của các allele. Quần thể tự phối bao gồm các dòng thuần, như vậy nếu các kiểu gene đồng hợp tử không thích ứng thì sẽ bị loại khỏi quần thể với tốc độ rất nhanh. Quần thể tự phối sau nhiều thế hệ sẽ bị giảm dần sự đa dạng di truyền."
            },
            {
                question: "TB-DTQT-L1-004. Thế nào là hiện tượng giao phối gần (giao phối cận huyết)?",
                answer: "Giao phối gần là hiện tượng các cá thể có quan hệ huyết thống giao phối với nhau. Giao phối gần dẫn đến làm biến đổi cấu trúc di truyền của quần thể thay đổi theo chiều hướng tỉ lệ thể dị hợp giảm dần tỉ lệ thể đồng hợp tăng lên. Vận dụng để giải thích hiện tượng thoái hoá giống ở động vật, thực vật, cấm kết hôn gần ở người, …"
            },
            {
                question: "TB-DTQT-L1-005. Thế nào là quần thể ngẫu phối?",
                answer: "Quần thể ngẫu phối là các cá thể trong quần thể lựa chọn bạn tình để giao phối một cách hoàn toàn ngẫu nhiên. Quần thể được coi là ngẫu phối hay không tuỳ thuộc từng tính trạng."
            },
            {
                question: "TB-DTQT-L1-006. Trình bày đặc điểm của quần thể ngẫu phối.",
                answer: "Quần thể ngẫu phối các cá thể có kiểu gene khác nhau giao phối tự do và ngẫu nhiên với nhau sẽ tạo nên một nguồn biến dị di truyền rất lớn trong quần thể làm nguồn nguyên liệu cho tiến hóa và chọn giống. Quần thể ngẫu phối nổi lên mối quan hệ phụ thuộc lẫn nhau giữa các cá thể về mặt sinh sản (giữa đực và cái giữa bố mẹ và con). Quần thể được xem là đơn vị sinh sản đơn vị tồn tại của loài trong tự nhiên. Quần thể ngẫu phối đa dạng về kiểu gene, dẫn đến đa dạng về kiểu hình (tạo tính đa hình của quần thể). Quần thể ngẫu phối có thể duy trì tần số các kiểu gene khác nhau trong quần thể một cách không đổi trong những điều kiện nhất định (duy trì được sự đa dạng di truyền của quần thể)."
            },
            {
                question: "TB-DTQT-L1-007. Phát biểu nội dung định luật Hardy - Weinberg.",
                answer: "Trong một quần thể lớn, ngẫu phối, nếu không có các yếu tố làm thay đổi tần số allele thì thành phần kiểu gene của quần thể sẽ duy trì không đổi từ thê hệ này sang thế hệ khác theo đẳng thức: p<sup>2</sup> AA + 2pq Aa + q<sup>2</sup> aa = 1 hoặc = p<sup>2</sup>.q<sup>2</sup> = (2pq/2)<sup>2</sup>."
            },
            {
                question: "TB-DTQT-L1-008. Cho biết các điều kiện nghiệm đúng của định luật Hardy - Weinberg.",
                answer: "Quần thể phải có kích thước lớn; Các cá thể trong quần thể phải giao phối với nhau một cách ngẫu nhiên; Không có tác động của chọn lọc tự nhiên (các cá thể có kiểu gene khác nhau có sức sống và khả năng sinh sản như nhau); Không có đột biến (đột biến không xảy ra hoặc thì tần số đột biến thuận phải bằng tần số đột biến nghịch). Quần thể phải được cách li với các quần thể khác (không có di gene và nhập gene giữa các quần thể)."
            },
            {
                question: "TB-DTQT-L1-009. Nêu ý nghĩa của định luật Hardy - Weinberg.",
                answer: "Ý nghĩa về mặt lí luận: Phản ánh trạng thái cân bằng di truyền trong quần thể. Nó giải thích vì sao trong thiên nhiên có những quần thể tồn tại trong một thời gian dài; Ý nghĩa về mặt thực tiễn: Từ tần số tương đối của các allele suy ra được tỉ lệ kiểu gene kiểu hình quần thể. Biết tỉ lệ kiểu hình suy ra được tỉ lệ kiểu gene và tần số tương đối các allele."
            },
          
            // Thêm các câu hỏi SA Di truyền quần thể level 1 khác...
        ],
        level2: [
            {
                question: "TB-DTQT-L2-001. Ở một loài thực vật tự thụ phấn, xét hai cặp gene Aa và Bb. Trong đó, allele A quy định cây thân cao, allele a quy định cây thân thấp, allele B quy định quả đỏ, allele b quy định cây quả vàng, các gene phân li độc lập, các allele trội lặn hoàn toàn. Một quần thể (P) của loài có tỉ lệ các kiểu gene như sau: 0,4 AABb : 0,2 AaBb : 0,12 Aabb : 0,18 aaBb : 0,1 aabb. Biết rằng không xảy ra đột biến ở tất cả các cá thể trong quần thể, các cá thể tự thụ phấn nghiêm ngặt. Theo lí thuyết, cây thân cao, hoa đỏ ở F1 chiếm tỉ lệ bao nhiêu?",
                answer: "0,41"
            },

            // Thêm các câu hỏi SA Di truyền quần thể level 2...
        ],
        level3: [
            {
                question: "TB-DTQT-L3-001. Một học sinh tiến hành gieo hạt đậu tương và thống kê số lượng cây con với các kiểu hình khác nhau về màu lá sau 14 ngày gieo hạt, thu được kết quả 50 cây có lá màu xanh đậm, 112 cây có lá màu xanh nhạt và 58 cây có lá màu vàng. Biết rằng, màu lá đậu do một gene có 2 allele quy định, allele A quy định lá màu xanh đậm trội không hoàn toàn so với allele a quy định lá màu vàng, kiểu gene Aa quy định kiểu hình lá xanh nhạt. Hãy xác định tần số allele A trong quần thể này (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy).",
                answer: "0,48"
            },
            {
                question: "TB-DTQT-L3-002. Một quần thể thực vật có 1000 cây. Trong có có 500 cây AA, 300 cây Aa, 200 cây aa. Xác định tần số allele của quần thể.",
                answer: "p (A) = [500.2 + 300] / (1000.2) = 0,65; q (a)=1 - 0, 65 = 0, 35."
            },
            {
                question: "TB-DTQT-L3-003. Ở một loài gene A quy định lông đen là trội hoàn toàn so với a quy định lông trắng. Quần thể đang ở trạng thái cân bằng di truyền và có tỉ lệ lông đen là 64%. Tính tần số allele A?",
                answer: "Tỉ lệ lông trắng là: 1 – 0,64 = 0,36. Tần số allele a là: q (a) = 0, 6 → p (A) = 1 – 0, 6 = 0, 4."
            },
            {
                question: "TB-DTQT-L3-004. Trong quần thể người nhóm máu O chiếm 4%, nhóm máu B chiếm 21%. Biết cấu trúc di truyền ở trạng thái cân bằng, xác định tỉ lệ nhóm máu A của quần thể là bao nhiêu?",
                answer: "0,45."
            },
            {
                question: "TB-DTQT-L3-005. Màu sắc vỏ ốc sên do một gene có 3 allele kiểm soát: C1: nâu, C2: hồng, C3: vàng. Allele quy định màu nâu trội hoàn toàn so với 2 allele kia, allele quy định màu hồng trội hoàn toàn so với allele quy định màu vàng. Điều tra một quần thể ốc sên người ta thu được các số liệu sau: Màu nâu có 360 con; màu hồng có 550 con; màu vàng có 90 con. Xác định tần số các allele C1, C2, C3? Biết quần thể cân bằng di truyền.",
                answer: "Ta có tần số kiểu hình nâu : hồng : vàng tương ứng là 0,36 : 0,55 : 0,09. Ta có  r<sup>2</sup> (C3C3) = 0,09 → r (C3) = 0, 3. Ta có q<sup>2</sup> (C2C2) + 2qr (C2C3) = 0, 55 = q (C2) = 0, 5 → p (C1) = 0, 2."
            },
            {
                question: "TB-DTQT-L3-006. Ở ngô, gene A: hạt đỏ, gene a: hạt trắng. Trong quần thể ban đầu toàn cây Aa. Xác định tỉ lệ phân li kiểu hình ở thế hệ F3 tự thụ phấn?",
                answer: "56,25% hạt đỏ : 43,75% hạt trắng."
            },
            {
                question: "TB-DTQT-L3-007. Ở một vùng tỉ lệ người bị bệnh bạch tạng là 1/400. Xác định tỉ lệ kiểu gene của quần thể ở trạng tái cân bằng di truyền?",
                answer: "0,9025AA: 0,095Aa: 0,0025aa."
            },
            // Thêm các câu hỏi SA Di truyền quần thể level 3...
        ]
    },
    saBCCCTH: {
        level1: [
            {
                question: "...",
                answer: "6"
            },
            // Thêm các câu hỏi SA Morgan level 1 khác...
        ],
        level2: [
            {
                question: "...",
                answer: "6"
            },

            // Thêm các câu hỏi SA Morgan level 2...
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "4,47"
            },
            // Thêm các câu hỏi SA Morgan level 3...
        ]
    },
    
    saTHHD: {
        level1: [
            {
                question: "...",
                answer: "6"
            },
            // Thêm các câu hỏi SA Học thuyết tiến hóa tổng hợp hiện đại level 1 khác...
        ],
        level2: [
            {
                question: "TB-HTTHTHHĐ-L2-001. Khi nói về chọn lọc tự nhiên (CLTN) theo thuyết tiến hóa hiện đại, có bao nhiêu phát biểu nào sau đây là đúng?<br/>(1) CLTN chỉ diễn ra khi môi trường sống thay đổi.<br/>(2) CLTN tác động trực tiếp lên kiểu gene làm biến đổi tần số allele của quần thể.<br/>(3) CLTN quy định chiều hướng tiến hóa và nhịp điệu tiến hóa.<br/>(4) CLTN thực chất là quá trình phân hóa khả năng sống sót và sinh sản của các thể với các kiểu gene khác nhau.<br/>(5) CLTN chống lại allele lặn làm thay đổi tần số allele chậm hơn so với chống lại allele trội.",
               
                answer: "3"
            },

            // Thêm các câu hỏi SA Học thuyết tiến hóa tổng hợp hiện đại level 2...
        ],
        level3: [
            {
                question: "TB-HTTHTHHĐ-L3-001. Sơ đồ sau đây cho thấy quá trình hình thành hai loài sóc Kaibab <em>(Sciurus aberti kaibabensis)</em> và sóc Aberrt <em>(Sciurus abertiaberti)</em> từ loài sóc cây do sự hình thành hẻm núi Grand Canyon. Có bao nhiêu phát biểu dưới đây là đúng? <br/> (1) Quá trình trên là một ví dụ của quá trình hình thành loài khác khu. <br/>(2) Quá trình đột biến chắc chắn không xảy ra ở hai quần thể sóc cây ở bờ Bắc và bờ Nam. <br/> (3) Tác động của các yếu tố khí hậu và thảm thực vật góp phần thúc đẩy quá trình hình thành loài mới. <br/>(4) Sự hình thành hẻm núi Grand Canyon là nguyên nhân trực tiếp gây ra những biến đổi tương ứng trên cơ thể sinh vật, từ đó giúp hình thành loài mới.",
                image: "https://nhantri.top/media/Grade12/qtsoccay.png",
                answer: "2"
            },
            // Thêm các câu hỏi SA Học thuyết tiến hóa tổng hợp hiện đại level 3...
        ]
    },
    saSPSCL: {
        level1: [
            {
                question: "...",
                answer: "3"
            },
            // Thêm các câu hỏi SA Sự phát sinh chủng loại level 1 khác...
        ],
        level2: [
            {
                question: "...",
                answer: "6"
            },

            // Thêm các câu hỏi SA Sự phát sinh chủng loại level 2...
        ],
        level3: [
            {
                question: "...",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "4,47"
            },
            // Thêm các câu hỏi SA Sự phát sinh chủng loại level 3...
        ]
    },
    saSTHCT: {
        level1: [
            {
                question: "...",
                answer: "6"
            },
            // Thêm các câu hỏi SA Morgan level 1 khác...
        ],
        level2: [
            {
                question: "TB-STHCT-L2-001. Cho các thông tin sau: Khoảng giới hạn về nhiệt độ của loài chân bụng Hidrobia aponensis là từ +1°C đến +60°C, của đỉa phiến là từ +0,5°C đến +24°C. Loài chuột cát ở Đài nguyên thích hợp ở nhiệt độ từ -5°C đến +30°C. Cá chép ở nước ta thích nghi ở nhiệt độ là +2°C đến +44°C. Tính giới hạn sinh thái về nhiệt độ của chuột cát ở Đài nguyên.",
                answer: "35"
            },

            // Thêm các câu hỏi SA Morgan level 2...
        ],
        level3: [
            {
                question: "TB-STHCT-L3-001. Cho các ví dụ ứng dụng hiểu biết về quần thể trong thực tiễn như sau:</br> (1) Ao nuôi cá rô phi có diện tích 500 m<sup>2</sup> trở lên, độ sâu nước 1,5 - 2 m, ao nuôi tuyển chọn cá đực thả từ 3 - 5 con/m<sup>2</sup>. </br> (2) Bố trí số lượng lợn nái đẻ là 1 con/chuồng, lợn nái chờ phối 4 - 6 con/chuồng.</br> (3) Thanh long trồng khoảng 900 - 1100 trụ/ha với cây cách cây và hàng cách hàng là 3 - 3,5 m. </br> (4) Giống lúa thuần chủng VNR20 ở Bắc Trung Bộ trong vụ Xuân (tháng 1) thường được cấy khoảng 45 - 50 khóm/m<sup>2</sup> với 2 - 3 cây/khóm. </br>Hãy viết liền số thứ tự từ bé đến lớn của các ví dụ là ứng dụng hiểu biết về mật độ cá thể trong chăn nuôi, trồng trọt.",
                answer: "1234"
            },
            // Thêm các câu hỏi SA Morgan level 3...
        ]
    },
    saSTHQT: {
        level1: [
            {
                question: "TB-STHQT-L1-001. Trong số các đặc điểm: tỉ lệ giới tính, nhóm tuổi, độ đa dạng, mật độ, tăng trưởng, có bao nhiêu đặc điểm là đặc trưng của quần thể sinh vật?",
                answer: "4"
            },
            // Thêm các câu hỏi Sinh thái học quần thể level 1 khác...
        ],
        level2: [
            {
                question: "TB-STHQT-L2-001. Giả sử 4 quần thể của cùng một loài động vật có diện tích khu phân bố và mật độ cá thể được thống kê trong bảng. Cho biết diện tích khu phân bố của 4 quần thể đều không thay đổi, không có hiện tượng nhập cư và xuất cư. Hãy sắp xếp 4 quần thể theo thứ tự kích thước của quần thể từ nhỏ đến lớn.",
                image: "https://nhantri.top/media/Grade12/bangktqtss.png",
                answer: "1324"
            },
            {
                question: "TB-STHQT-L2-002. Tỉ lệ sinh sản và tỉ lệ tử vong của một quần thể chuột trong một thí nghiệm qua các năm được thể hiện trong bảng. Biết rằng đầu năm 1970, quần thể có 5000 cá thể, quần thể không có xuất cư và nhập cư. Theo lí thuyết, kết thúc năm 2020, quần thể có bao nhiêu cá thể?",
                image: "https://nhantri.top/media/Grade12/thaydoislct.png",
                answer: "6330"
            },
            // Thêm các câu hỏi Sinh thái học quần thể level 2...
        ],
        level3: [
            {
                question: "TB-STHQT-L3-001. Để duy trì và phát triển quần thể loài A cần có số lượng cá thể ít nhất là 25 cá thể/quần thể. Biết không có hiện tượng di – nhập cư. Người ta thống kê 6 quần thể của loài ở các môi trường ổn định khác nhau, thu được kết quả như bảng dưới đây. Có bao nhiêu quần thể có nguy cơ dẫn đến diệt vong?",
                image: "https://nhantri.top/media/Grade12/bangmdct.png",
                answer: "2"
            },
            // Thêm các câu hỏi SA Sinh thái học quần thể level 3...
        ]
    },
    saSTHQX: {
        level1: [
            {
                question: "TB-STHQX-L1-001. Trong một nghiên cứu về ảnh hưởng của loài Sa giông <em>Notophthalmus viridescens</em> đối với nguồn thức ăn là nòng nọc các loài ếch nhái <em>Bufo americanus</em>, <em>Hyla chrysoscelis</em>, <em>Rana sphenocephala</em> và <em>Scaphiopus holbrooki</em> trong một hố nước sau 100 ngày sinh trưởng được thể hiện trong hình bên, trong đó (I) không có sự hiện diện loài Sa giông và (II) có sự xuất hiện của 5 cá thể loài Sa giông. Tính độ phong phú của cá thể nòng nọc loài ưu thế trong quần xã sinh vật I (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)?",
                image: "https://nhantri.top/media/Grade12/consagiong.png",
                answer: "0,56"
            },
            // Thêm các câu hỏi SA Sinh thái học quần xã level 1 khác...
        ],
        level2: [
            {
                question: "...",
                answer: "6"
            },

            // Thêm các câu hỏi SA Sinh thái học quần xã level 2...
        ],
        level3: [
            {
                question: "TB-STHQX-L3-001. Hình dưới đây cho thấy số lượng cá thể của các loài trong một quần xã thực vật ở đồng cỏ, trong đó chỉ có một loài ưu thế. Độ phong phú của loài ưu thế gấp bao nhiêu lần giá trị trung bình của độ phong phú của tất cả các loài trong quần xã (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)?",
                image: "https://nhantri.top/media/Grade12/dophongphu.png",
                answer: "4,47"
            },
            {
                question: "TB-STHQX-L3-002. Con người đã ứng dụng những hiểu biết về ổ sinh thái vào bao nhiêu hoạt động sau đây?<br/>Trồng xen các loại cây ưa bóng và cây ưa sáng trong cùng một khu vườn.<br/>Khai thác vật nuôi ở độ tuổi càng cao để thu được năng suất càng cao.<br/>Trồng các loại cây đúng thời vụ.<br/>Nuôi ghép các loài cá ở các tầng nước khác nhau trong một ao nuôi.",
                
                answer: "3"
            },
            // Thêm các câu hỏi SA Sinh thái học quần xã level 3...
        ]
    },
    saHST: {
        level1: [
            {
                question: "TB-HST,SQ&BVMT-L1-001. Trong các ví dụ sau đây: Rừng nhiệt đới, Rừng ôn đới, Rừng lá kim phương nam, Vùng cực, hoang mạc. Có bao nhiêu ví dụ về khu sinh học?",
                answer: "4"
            },
            {
                question: "TB-HST,SQ&BVMT-L1-002. Trong các nhận định sau, có bao nhiêu nhận định nói về vai trò của sinh quyển: (1) Cung cấp các điều kiện cần thiết cho sự sống như không khí, nước, đất đai, thức ăn và nơi sinh sống; (2) Điều hòa khí hậu và bảo vệ môi trường; (3)	Là nguồn tài nguyên thiên nhiên quý giá cho con người; (4) Duy trì sự đa dạng sinh học trên Trái Đất.",
                answer: "4"
            },
            {
                question: "TB-HST,SQ&BVMT-L1-003. Trong các nhận định dưới đây, có bao nhiêu biện pháp bảo vệ sinh quyển? (1) Nâng cao ý thức bảo vệ môi trường cho cộng đồng; (2) Hạn chế khai thác tài nguyên thiên nhiên quá mức; (3) Bảo vệ rừng và các hệ sinh thái khác; (4) Sử dụng các phương pháp canh tác và chăn nuôi bền vững; (5) Ngăn chặn ô nhiễm môi trường.",
                answer: "5"
            },
            {
                question: "TB-HST,SQ&BVMT-L1-004. Trong các hoạt động sau, có bao nhiêu hoạt động của con người không gây tác động tiêu cực đến khu sinh học nước ngọt và khu sinh học nước mặn? (1) Xả rác thải sinh hoạt và công nghiệp xuống sông, biển; (2).Khai thác tài nguyên thiên nhiên; (3).Sử dụng hóa chất độc hại trong nông nghiệp; (4).Trồng rừng ven biển",
                answer: "1"
            },
            {
                question: "TB-HST,SQ&BVMT-L1-005. Có bao nhiêu biện pháp sau đây giúp giảm thiểu tác động tiêu cực của con người đến chu trình nitrogen? (1) Sử dụng phân bón hóa học một cách hợp lí; (2) Xử lý nước thải đúng cách; (3) Giảm thiểu việc sử dụng nhiên liệu hóa thạch; (4) Tiếp tục thăm dò và khai thác các dạng nhiên liệu hóa thạch mới.",
                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L1-006. Nêu khái niệm hệ sinh thái.",
                answer: "Hệ sinh thái bao gồm quần xã sinh vật và nơi sống của quần xã (sinh cảnh). Các sinh vật trong quần xã luôn tác động lẫn nhau và đồng thời tác động qua lại tới các thành phần vô sinh của sinh cảnh. Nhờ đó, hệ sinh thái là một hệ thống sinh học hoàn chỉnh và tương đối ổn định."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-007. Cho biết các thành phần cấu trúc của hệ sinh thái.",
                answer: "Thành phân vô sinh: Các chất vô cơ (H<sub>2</sub>O; CO<sub>2</sub>; O<sub>2</sub>; N; P); Các chất hữu cơ (carbohydrate, lipid, protein); Các yếu tố khí hậu (ánh sáng, nhiệt độ, độ ẩm, ...). Quần xã sinh vật: Sinh vật sản xuất (là những loài sinh vật có khả năng quang tổng hợp và hóa tổng hợp, tạo nên chất hữu cơ từ chất vô cơ và để nuôi các loài sinh vật dị dưỡng, gồm thực vật, tảo, một số vi sinh vật khác); Sinh vật tiêu thụ (là nhóm sinh vật có khả năng biến đổi hợp chất hữu cơ của loài khác thành chất hữu cơ của cơ thể, gồm các loài động vật ăn thực vật, động vật ăn thịt); Sinh vật phân hủy (nhóm này có khả năng chuyển hóa hữu cơ dạng mùn thành vô cơ, gồm các vi sinh vật sống dị dưỡng kiểu hoại sinh, một số loài động vật, đa số nấm."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-008. Mô tả các kiểu hệ sinh thái tự nhiên.",
                answer: "Các hệ sinh thái trên cạn: chủ yếu gồm hệ sinh thái rừng nhiệt đới, sa mạc, hoang mạc, sa van đồng cỏ, thảo nguyên, rừng lá rộng ôn đới, rừng thông phương Bắc, đồng rêu hàn đới, …; Các hệ sinh thái dưới nước: Các hệ sinh thái nước mặn (bao gồm cả vùng nước lợ), điển hình ở vùng ven biển là các vùng ngập mặn, cỏ biển, rạn san hô và hệ sinh thái vùng biển khơi. Các hệ sinh thái nước ngọt được chia ra thành các hệ sinh thái nước đứng (ao, hồ...) và hệ sinh thái nước chảy (sông, suối)."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-009. Mô tả các kiểu hệ sinh thái nhân tạo.",
                answer: "Các hệ sinh thái nhân tạo như đồng ruộng, hồ nước, rừng trồng, thành phố, ... đóng vai trò hết sức quan trọng trong cuộc sống của con người; Hệ sinh thái nông nghiệp cần bón thêm phân, tưới nước và diệt cỏ dại.Hệ sinh thái rừng cần các biện pháp tỉa thưa.Hệ sinh thái ao hồ nuôi tôm cá cần loại bỏ các loài tảo độc và cá dữ."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-010. Nêu khái niệm chuỗi thức ăn.",
                answer: "Chuỗi thức ăn là một dãy nhiều loài sinh vật có quan hệ dinh dưỡng với nhau.Trong đó mỗi loài là một mắt xích vừa có nguồn thức ăn là mắt xích phía trước, vừa là nguồn thức ăn của mắt xích phía sau. Chuỗi thức ăn của hệ sinh thái trên cạn thường không kéo dài quá 6 mắt xích. Có hai loại chuỗi thức ăn: Chuỗi thức ăn mở đầu bằng sinh vật tự dưỡng (cây xanh); Chuỗi thức ăn mở đầu bằng sinh vật ăn mùn bã hữu cơ."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-011. Nêu khái niệm lưới thức ăn.",
                answer: "Lưới thức ăn là tập hợp các chuỗi thức ăn có nhiều mắt xích chung. Quần xã sinh vật càng đa dạng về thành phần loài thì lưới thức ăn trong quần xã càng phức tạp."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-012. Bậc dinh dưỡng là gì?",
                answer: "Trong một lưới thức ăn, tất cả các loài sinh vật có cùng mức dinh dưỡng hợp thành một bậc dinh dưỡng. Trong một lưới thức ăn có nhiều bậc dinh dưỡng: Bậc dinh dưỡng cấp 1 = SV sản xuất; Bậc dinh dưỡng cấp 2 = SV tiêu thụ bậc 1; Bậc dinh dưỡng câp 3 = SV tiêu thụ bậc 2; Bậc dinh dưỡng câp n = SV tiêu thụ bậc n - 1."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-013. Nêu khái niệm tháp sinh thái.",
                answer: " Tháp sinh thái là hình tháp bao gồm nhiều hình chữ nhật xếp chồng lên nhau, các hình chữ nhật có chiều cao bằng nhau, còn chiều dài thì khác nhau biểu thị độ lớn của mỗi bậc dinh dưỡng. Dựa vào tháp sinh thái chúng ta có thể biết được mức độ dinh dưỡng ở từng bậc và toàn bộ quần xã."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-014. Có những loại tháp sinh thái nào?",
                answer: "Tháp số lượng là tháp được xây dựng dựa trên số lượng cá thể sinh vật ở mỗi bặc dinh dưỡng; Tháp sinh khối là tháp được xây dựng dựa trên khối lượng của tất cả các sinh vật trên một đơn vị diện tích hay thể tích ở mỗi bặc dinh dưỡng; Tháp năng lượng là tháp hoàn thiện nhất, được xây dựng dựa trên số năng lượng tích lũy trên một đơn vị diện tích hay thể tích, trong một đơn vị thời gian ở mỗi bặc dinh dưỡng. Tháp số lượng và tháp khối lượng dễ xây dựng hơn tháp năng lượng nhưng độ chính xác của tháp số lượng và tháp khối lượng thấp hơn tháp năng lượng. Tháp năng lượng luôn có dạng chuẩn, đáy lớn, đỉnh nhỏ. Tháp số lượng và tháp sinh khối có thể bị biến dạng, tháp trở nên mất cân đối."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-015. Nêu khái niệm chu trình sinh địa hóa.",
                answer: "Chu trình sinh địa hóa là chu trình trao đổi các chất trong tự nhiên. Một chu trình sinh địa hoá gồm có các thành phần: tổng hợp các chất, tuần hoàn chất trong tự nhiên, phân giải và lắng đọng một phần vật chất (trong đất, nước...). Chu trình sinh địa hóa có vai trò cân bằng vật chất trong sinh quyển."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-016. Sự phân bố năng lượng ánh sáng trên Trái Đất như thế nào?",
                answer: "Mặt trời là nguồn cung cấp năng lượng chủ yếu cho sự sống trên Trái Đất. Ánh sáng mặt trời phân bố không đều trên bề mặt Trái Đất: Càng lên cao lớp không khí càng mỏng nên ánh sáng càng mạnh. Vùng xích đạo có tia sáng chiếu thẳng góc nên ánh sáng mạnh hơn vùng ôn đới.Càng xa vùng xích đạo, ánh sáng càng yếu, ngày càng kéo dài; Ánh sáng còn thay đổi theo độ cao trong năm: Mùa hè ánh sáng mạnh và ngày kéo dài hơn, mùa đông ngược lại. Năng lượng ánh sáng phụ thuộc vào thành phần tia sáng: Tia sáng có bước sóng dài chủ yếu tạo nhiệt. Sinh vật sản xuất chỉ sử dụng được những tia sáng nhìn thấy (chiếm khoảng 50% tổng lượng bức xạ) cho quá trình quang hợp. Quang hợp chỉ sử dụng khoảng 0, 2 % - 0, 5 % tổng năng lượng bức xạ chiếu trên Trái Đất để tổng hợp các hợp chất hữu cơ."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-017. Dòng năng lượng trong hệ sinh thái dịch chuyển như thế nào?",
                answer: "Năng lượng được truyền từ bậc dinh dưỡng thấp lên bậc dinh dưỡng cao. Càng lên bậc dinh dưỡng cao hơn thì năng lượng càng giảm do phần lớn năng lượng bị thất thoát ở dạng nhiệt. Trong hệ sinh thái, năng lượng được truyền một chiều từ sinh vật sản xuất qua các bậc dinh dưỡng, tới môi trường; còn vật chất được trao đổi qua chu trình dinh dưỡng."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-018. Hiện suất sinh thái là gì?",
                answer: "Hiệu suất sinh thái là tỉ lệ phần trăm (%) chuyển hóa năng lượng giữa các bậc dinh dưỡng trong hệ sinh thái. Phần lớn năng lượng truyền trong hệ sinh thái bị tiêu hao qua hô hấp, sinh nhiệt của cơ thể, qua chất thải, các bộ phận rơi rụng của sinh vật (lá cây, lông, lột xác ở động vật…) chỉ có khoảng 10% năng lượng truyền lên bậc dinh dưỡng cao hơn → Hiệu suất sinh thái của bậc dinh dưỡng sau tích lũy được thường là 10 % so với bậc trước liền kề."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-019. Sinh quyển là gì?",
                answer: "Sinh quyển là khoảng không gian có sinh vật cư trú, bao phủ bề mặt trái đất: sâu tới vài chục mét → 100m trong thạch quyển, lên cao tới 6 – 7 m trong khí quyển, sâu tới 10 – 11km dưới biển (thuỷ quyển). Sinh quyển được chia thành nhiều khu sinh học khác nhau tuỳ thuộc vào đặc điểm địa lí, khí hậu và sinh vật sống trong mỗi khu sinh học: khu sinh học trên cạn; khu sinh học nước ngọt và khu sinh học nước mặn."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-020. Có những nhóm tài nguyên thiên nhiên nào?",
                answer: "Tài nguyên không tái sinh: khoáng sản nhiên liệu, nguyên liệu; Tài nguyên tái sinh: rừng và lâm nghiệp, đất và nông nghiệp, tài nguyên thuỷ sản."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-021. Ô nhiễm môi trường là gì?",
                answer: "Ô nhiễm môi trường là sự biến đổi không mong muốn tính chất vật lí, hoá học, sinh học ở không khí, đất, nước của môi trường sống gây nên những tác động nguy hại tức thời hoặc trong tương lai đến sức khoẻ và đời sống con người, làm ảnh hưởng đến quá trình sản xuất, đến tài sản văn hoá và làm tổn thất nguồn tài nguyên dự trữ của con người."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-022. Có những hình thức ô nhiễm môi trường nào?",
                answer: "Ô nhiễm không khí; Ô nhiễm âm thanh; Ô nhiễm ánh sáng; Ô nhiễm chất thải rắn; Ô nhiễm nguồn nước; Ô nhiễm hoá chất độc; Ô nhiễm do sinh vật gây bệnh."
            },
            {
                question: "TB-HST,SQ&BVMT-L1-023. Kể ra một số biện pháp để khắc phục tình trạng ô nhiễm môi trường.",
                answer: "Sử dụng bền vững nguồn tài nguyên đất; tài nguyên rừng; tài nguyên nước; tài nguyên biển và ven biển; duy trì đa dạng sinh học và Giáo dục tuyên truyền bảo vệ môi trường."
            },
            // Thêm các câu hỏi SA Hệ sinh thái level 1 khác...
        ],
        level2: [
            {
                question: "TB-HST,SQ&BVMT-L2-001. Giả sử trong một hồ tự nhiên, tảo là thức ăn của giáp xác; cá mương sử dụng giáp xác làm thức ăn đồng thời lại làm mồi cho cá quả. Cá quả tích lũy được 1152.10<sup>3</sup> kcal, tương đương 10% năng lượng tích lũy ở bậc dinh dưỡng thấp liền kề với nó. Cá mương tích lũy được một lượng năng lượng tương đương với 8% năng lượng tích lũy ở giáp xác. Tảo tích lũy được 12.10<sup>8</sup> kcal. Hiệu suất sinh thái giữa bậc dinh dưỡng cấp 2 và bậc dinh dưỡng cấp 1 là bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)",
                answer: "0,12"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-002. Hiệu suất sinh thái của sinh vật tiêu thụ bậc 3 so với sinh vật tiêu thụ bậc 2 trong chuỗi thức ăn sau là bao nhiêu (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)? Sinh vật sản xuất (2,1.10<sup>6</sup> calo) → sinh vật tiêu thụ bậc 1 (1,2.10<sup>4</sup> calo) → sinh vật tiêu thụ bậc 2 (1,1.10<sup>2</sup> calo) → sinh vật tiêu thụ bậc 3 (0,5.10<sup>2</sup> calo).",
                answer: "0,45"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-003. Trong các ý dưới đây, có bao nhiêu ý giải thích đúng sinh quyển được xem là một hệ thống tự điều chỉnh? (1) Sinh vật và sinh cảnh tương tác hai chiều với nhau, tạo nên một vòng tuần hoàn vật chất và năng lượng; (2)  Khi có sự thay đổi trong một bộ phận nào đó của sinh quyển, các bộ phận khác sẽ có những điều chỉnh để duy trì trạng thái cân bằng; (3) Có khả năng tự điều chỉnh trạng thái cân bằng động của mình thông qua các phản hồi ngược",
                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-004. Có bao nhiêu đặc điểm dưới đây nói về vùng khơi? (1) Nằm ở khu vực giao thoa giữa đất liền và đại dương; (2) Độ mặn của nước thay đổi theo thời gian và thủy triều; (3) Hệ sinh thái đa dạng và phong phú, bao gồm rừng ngập mặn, rạn san hô, hệ sinh thái cửa sông, ...; (4) Nằm ở khu vực xa bờ, ít chịu ảnh hưởng bởi các hoạt động của con người; (5) Độ mặn của nước tương đối ổn định.",
                answer: "2"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-005. Có bao nhiêu biện pháp sau đây giúp bảo vệ tài nguyên sinh vật ở khu sinh học nước ngọt? (1)	Khai thác hợp lí, có kiểm soát; (2)	Ngăn chặn và xử lí ô nhiễm môi trường nước; (3)	Bảo vệ và phát triển các khu rừng ven sông, hồ; (4)	Nuôi trồng thủy sản bền vững; Tăng cường tuyên truyền, giáo dục nâng cao ý thức bảo vệ môi trường nước.",
                answer: "5"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-006. Có bao nhiêu đánh giá đúng tác động của hoạt động khai thác và sử dụng nhiên liệu hóa thạch đến chu trình carbon? (1) Làm tăng lượng CO<sub>2</sub> trong khí quyển, dẫn đến hiệu ứng nhà kính; (2)  Giảm lượng O<sub>2</sub> trong khí quyển, ảnh hưởng đến hô hấp của sinh vật; (3) Thay đổi pH của đại dương, ảnh hưởng đến sinh vật biển; (4) Hoạt động này làm thay đổi tỉ lệ các dạng carbon trong chu trình; (5) Hoạt động này làm tăng lượng carbon lưu trữ trong các kho chứa tự nhiên.",
                answer: "4"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-007. Có bao nhiêu ý nói lên vai trò chính của vi sinh vật trong chu trình nitrogen? (1) Biến đổi nitrogen tự do (N<sub>2</sub>) trong khí quyển thành các hợp chất có nitrogen; (2) Phân hủy chất hữu cơ chứa nitrogen thành các dạng nitrogen vô cơ; (3) Chuyển đổi amonium thành nitrite và nitrite thành nitrate; (4) Chuyển đổi nitrate thành khí nitrogen tự do (N<sub>2</sub>).",
                answer: "4"
            },
            {
                question: "TB-HST,SQ&BVMT-L2-008. Khi nói đến chu trình sinh địa hoá, trong các quá trình dưới đây có bao nhiêu qúa trình làm carbon có thể trở lại môi trường vật lí? (1) Hô hấp của thực vật; (2) Hô hấp của động vật; (3) Quang hợp của cây xanh; (4) Phân giải chất hữu cơ của vi sinh vật; (5) Đốt nguyên liệu hoá thạch; (6) Động đất; (7) Sự phát triển của các ngành giao thông vận tải; (8) Hoạt động của núi lửa.",
                answer: "6"
            },
            // Thêm các câu hỏi SA Hệ sinh thái level 2...
        ],
        level3: [
            {
                question: "TB-HST,SQ&BVMT-L3-001. Hình dưới đây là lưới thức ăn ở một hệ sinh thái trên cạn. Biết rằng, sản lượng của thực vật là 210 kcal/m2/năm. Nếu hiệu suất sinh thái giữa phần sản lượng của sinh vật tiêu thụ với sản lượng của mỗi loài thức ăn tương ứng đều là 10%, thì sản lượng của cáo là bao nhiêu? (tính làm tròn đến 2 chữ số thập phân sau dấu phẩy)?",
                image: "https://nhantri.top/media/Grade12/tinhsanluongg.png",
                answer: "2,31"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-002. Trong các biện pháp dưới đây, có bao nhiêu biện pháp thuộc nhóm biện pháp giảm thiểu sự tác động có hại của con người đến môi trường? (1) Giảm tiêu thụ nguyên liệu (nước, gỗ, kim loại, ...), tiết kiệm và tái chế nguyên liệu; (2) Sử dụng hiệu quả năng lượng, tăng cường sử dụng năng lượng tái tạo(điện gió, điện mặt trời, ...); (3) Trồng rừng, bảo vệ đa dạng sinh vật; (4) Giảm phát thải khí nhà kính, phân loại và xử lí rác thải, giảm xả thải chất độc hại ra môi trường.",

                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-003. Có bao nhiêu vai trò của hợp tác quốc tế trong việc bảo vệ sinh quyền và khu sinh học? (1) Trao đổi thông tin, nghiên cứu khoa học và kinh nghiệm về bảo tồn sinh vật, sử dụng hợp lí nguồn tài nguyên. (2) Cùng thực hiện các công ước, nghị định thư, chương trình bảo vệ môi trường trên toàn thế giới. (3) Hỗ trợ các nước đang phát triển trong việc bảo vệ môi trường. (4) Giảm tiêu thụ nguyên liệu (nước, gỗ, kim loại,...), tiết kiệm và tái chế nguyên liệu.",

                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-004. Để các biện pháp bảo vệ sinh quyền và khu sinh học được thực hiện hiệu quả, cần bao nhiêu yếu tố nào dưới đây? (1) Tuyên truyền nâng cao ý thức bảo vệ môi trường cho cá nhân và cộng đồng. (2) Nhà nước cần có các chính sách, pháp luật chặt chẽ và thực thi nghiêm túc các luật về bảo vệ đa dạng sinh vật, khai thác tài nguyên, kiểm soát xả thải. (3) Thúc đẩy hợp tác chặt chẽ giữa các quốc gia, các tổ chức quốc tế như UNESCO, WWF.",

                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-005. Có bao nhiêu hoạt động nào sau đây góp phần bảo vệ sinh quyền và khu sinh học? (1)  Sử dụng xe đạp, phương tiện công cộng thay vì xe máy, ô tô. (2)  Sử dụng túi nilon, đồ nhựa dùng một lần. (3) Tiết kiệm điện, nước. (4) Trồng cây xanh. (5) Tuyên truyền, vận động mọi người cùng chung tay bảo vệ môi trường.",

                answer: "4"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-006. Cá nhân có thể góp phần bảo vệ sinh quyền và khu sinh học bằng cách nào sau đây? (1) Sử dụng các thiết bị tiết kiệm năng lượng. (2) Tham gia các hoạt động trồng cây xanh, bảo vệ môi trường. (3) Tắt vòi nước khi không sử dụng, sử dụng vòi hoa sen tiết kiệm nước. (4) Tắt đèn khi không sử dụng, sử dụng bóng đèn tiết kiệm điện. (5) Hạn chế sử dụng túi nilon, đồ nhựa dùng một lần. (6) Tuyên truyền, vận động mọi người cùng chung tay bảo vệ môi trường.",

                answer: "6"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-007. Câu 1. Có bao nhiêu hậu quả nào sau đây là do sự gián đoạn chu trình carbon gây ra? (1) Biến đổi khí hậu; (2) Acid hóa đại dương; (3) Ô nhiễm môi trường; (4) Tuyệt chủng hàng loạt.",

                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-008. Có bao nhiêu biện pháp có hiệu quả trong việc hạn chế tác động của con người đến chu trình carbon? (1) Giảm sử dụng nhiên liệu hóa thạch; (2) Sử dụng năng lượng tái tạo; (3) Khuyến khích sử dụng xe máy cá nhân; (4) Bảo vệ rừng.",

                answer: "3"
            },
            {
                question: "TB-HST,SQ&BVMT-L3-009. Một khu vực nông nghiệp đang sử dụng lượng phân bón hóa học quá mức. Có bao nhiêu hậu quả có thể xảy ra đối với khu vực này? (1) Năng suất cây trồng tăng cao, nhưng chất lượng đất bị suy giảm. (2) Eutrophication xảy ra ( hiện tượng phú dưỡng) ở các nguồn nước lân cận, dẫn đến sự phát triển quá mức của tảo và cá chết hàng loạt. (3) Nguồn nước ngầm bị ô nhiễm nitrate,  gây ra bệnh xanh da trời ở trẻ sơ sinh. (4)  Độ pH của nước tăng cao, tạo điều kiện cho tảo và các sinh vật thủy sinh phát triển mạnh. (5) Lượng O<sub>2</sub> trong nước tăng, dẫn đến sự phát triển của  các sinh vật thủy sinh. (6) Nước bị đục do tảo phát triển mạnh, cản trở ánh sáng mặt trời lọt xuống.",

                answer: "5"
            },
            // Thêm các câu hỏi SA Hệ sinh thái level 3...
        ]
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

    // Generate MCC1 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcc1-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcc1[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                                        <div class="mcc1-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcc1-option" data-index="${idx}">

                                                                    <div class="mcc1-option-text">${opt}</div>
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
    // Generate MC CCDTPT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcCCDTPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcCCDTPT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                                    <div class="question">
                                                        <div>
                                                            <span>Câu ${questionNumber}:</span> ${q.question}
                                                        </div>
                                                        ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                                        <div class="mcCCDTPT-options">
                                                            ${q.options.map((opt, idx) => `
                                                                <div class="mcCCDTPT-option" data-index="${idx}">

                                                                    <div class="mcCCDTPT-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcc2-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcc2[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                                          <div class="question">
                                              <div>
                                                  <span>Câu ${questionNumber}:</span> ${q.question}
                                              </div>
                                              ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                              <div class="mcc2-options">
                                                  ${q.options.map((opt, idx) => `
                                                      <div class="mcc2-option" data-index="${idx}">

                                                          <div class="mcc2-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcc3-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcc3[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcc3-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcc3-option" data-index="${idx}">

                                              <div class="mcc3-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcBSMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcBSMD[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcBSMD-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcBSMD-option" data-index="${idx}">

                                              <div class="mcBSMD-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcDBG-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDBG[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDBG-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDBG-option" data-index="${idx}">

                                              <div class="mcDBG-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcDBNST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDBNST[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDBNST-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDBNST-option" data-index="${idx}">

                                              <div class="mcDBNST-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcDTHNUD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDTHNUD[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDTHNUD-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDTHNUD-option" data-index="${idx}">

                                              <div class="mcDTHNUD-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcDTQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcDTQT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcDTQT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcDTQT-option" data-index="${idx}">

                                              <div class="mcDTQT-option-text">${opt}</div>
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
    // Generate MC Bằng chứng và cơ chế tiến hóa questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcBCCCTH-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcBCCCTH[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcBCCCTH-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcBCCCTH-option" data-index="${idx}">

                                              <div class="mcBCCCTH-option-text">${opt}</div>
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
    // Generate MC Sự phát sinh chủng loại questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcTHHD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcTHHD[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcTHHD-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcTHHD-option" data-index="${idx}">

                                              <div class="mcTHHD-option-text">${opt}</div>
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
    // Generate MC Sự phát sinh chủng loại questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSPSCL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSPSCL[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSPSCL-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSPSCL-option" data-index="${idx}">

                                              <div class="mcSPSCL-option-text">${opt}</div>
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
    // Generate MC Sinh thái học cá thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTHCT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTHCT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTHCT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTHCT-option" data-index="${idx}">

                                              <div class="mcSTHCT-option-text">${opt}</div>
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
    // Generate MC Sinh thái học quần thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTHQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTHQT[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTHQT-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTHQT-option" data-index="${idx}">

                                              <div class="mcSTHQT-option-text">${opt}</div>
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
    // Generate MC Sinh thái học quần xã questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`mcSTHQX-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcSTHQX[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcSTHQX-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcSTHQX-option" data-index="${idx}">

                                              <div class="mcSTHQX-option-text">${opt}</div>
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
        const count = parseInt(document.getElementById(`mcHST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.mcHST[`level${level}`], count);

        questions.forEach(q => {
            examHtml += `
                              <div class="question">
                                  <div>
                                      <span>Câu ${questionNumber}:</span> ${q.question}
                                  </div>
                                  ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; height: auto;">` : ""}
                                  <div class="mcHST-options">
                                      ${q.options.map((opt, idx) => `
                                          <div class="mcHST-option" data-index="${idx}">

                                              <div class="mcHST-option-text">${opt}</div>
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
    // Generate TFC1 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfc1-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfc1[`level${level}`], count);
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
    // Generate TF CCDTPT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfCCDTPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfCCDTPT[`level${level}`], count);
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
    // Generate TFC2 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfc2-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfc2[`level${level}`], count);
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
    // Generate TFC3 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfc3-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfc3[`level${level}`], count);
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
        const count = parseInt(document.getElementById(`tfBSMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfBSMD[`level${level}`], count);
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
        const count = parseInt(document.getElementById(`tfDBG-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDBG[`level${level}`], count);
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
        const count = parseInt(document.getElementById(`tfDBNST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDBNST[`level${level}`], count);
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
    // Generate TF Di truyền học người và ứng dụng di truyền học questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfDTHNUD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDTHNUD[`level${level}`], count);
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
        const count = parseInt(document.getElementById(`tfDTQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfDTQT[`level${level}`], count);
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
    // Generate TF Bằng chứng và cơ chế tiến hóa questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfBCCCTH-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfBCCCTH[`level${level}`], count);
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
    // Generate TF Sự phát sinh chủng loại questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfTHHD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfTHHD[`level${level}`], count);
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
    // Generate TF Sự phát sinh chủng loại questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSPSCL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSPSCL[`level${level}`], count);
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
    // Generate TF Sinh thái học cá thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTHCT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTHCT[`level${level}`], count);
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
    // Generate TF Sinh thái học quần thể questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTHQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTHQT[`level${level}`], count);
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
    // Generate TF Sinh thái học quần xã questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfSTHQX-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfSTHQX[`level${level}`], count);
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
    // Generate TF Hệ sinh thái, sinh quyển và BVMT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`tfHST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.tfHST[`level${level}`], count);
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
    // Generate SAC1 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`sac1-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.sac1[`level${level}`], count);

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
    // Generate SA CCDTPT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saCCDTPT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saCCDTPT[`level${level}`], count);

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
    // Generate SAC2 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`sac2-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.sac2[`level${level}`], count);

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
    // Generate SAC3 questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`sac3-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.sac3[`level${level}`], count);

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
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saBSMD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saBSMD[`level${level}`], count);

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
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saDBG-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDBG[`level${level}`], count);

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
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saDBNST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDBNST[`level${level}`], count);

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
    // Generate SA Di truyền học người và ứng dụng di truyền học questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saDTHNUD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDTHNUD[`level${level}`], count);

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
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saDTQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saDTQT[`level${level}`], count);

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

    // Generate SA bằng chứng và cơ chết tiến hóa questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saBCCCTH-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saBCCCTH[`level${level}`], count);

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
    // Generate SA Học thuyết tiến hóa tổng hợp hiện đại questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saTHHD-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saTHHD[`level${level}`], count);

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
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saSPSCL-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSPSCL[`level${level}`], count);

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
    // Generate SA STHCT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTHCT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTHCT[`level${level}`], count);

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
    // Generate SA STHQT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTHQT-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTHQT[`level${level}`], count);

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

    // Generate SA STHQX questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saSTHQX-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saSTHQX[`level${level}`], count);

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
    // Generate SA Hệ sinh thái, sinh quyển và BVMT questions
    ['1', '2', '3'].forEach(level => {
        const count = parseInt(document.getElementById(`saHST-l${level}`).value) || 0;
        const questions = getRandomQuestions(questionBank.saHST[`level${level}`], count);

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
