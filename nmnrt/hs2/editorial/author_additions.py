"""Explicitly authored HS2 additions. No generated distractors or extracted-word questions."""
NEW=[]
def N(n,slug,lesson,prompt,correct,wrong,explanation,title,takeaway,refs,edit=''):
 assert len(wrong)==3
 NEW.append(dict(number=n,slug=slug,lesson=lesson,prompt=prompt,correct=correct,wrong=wrong,explanation=explanation,title=title,takeaway=takeaway,refs=refs.split(),edit=edit))
N(1,'metabolism-stops',1,'Nếu mọi quá trình trao đổi chất và chuyển hóa năng lượng của cơ thể ngừng hẳn, không phục hồi, điều gì xảy ra?',
 'Cơ thể không thể duy trì sự sống', ['Cơ thể tiếp tục sinh trưởng','Cơ thể sinh sản nhanh hơn','Cơ thể vẫn sống mà không cần năng lượng'],
 'Các hoạt động duy trì sự sống cần vật chất và năng lượng. Ngừng hẳn không giống trạng thái ngủ hay giảm chuyển hóa.',
 'Chuyển hóa duy trì sự sống','Cơ thể cần trao đổi chất và chuyển hóa năng lượng để tồn tại. Ngừng hẳn các quá trình này làm mất khả năng duy trì sự sống; ngủ hoặc ngủ đông không phải ngừng hoàn toàn.','metabolism',
 'Thêm “ngừng hẳn, không phục hồi” để không nhầm với ngủ, ngủ đông hay giảm chuyển hóa.')
N(4,'coupled-processes',1,'Quan hệ giữa trao đổi chất và chuyển hóa năng lượng được mô tả đúng như thế nào?',
 'Gắn liền: biến đổi chất đi kèm biến đổi năng lượng', ['Hoàn toàn độc lập với nhau','Chỉ liên quan khi cơ thể sinh sản','Chỉ thực vật mới có cả hai quá trình'],
 'Tổng hợp, phân giải và vận chuyển chất gắn với thu nhận, chuyển đổi hoặc sử dụng năng lượng.',
 'Vật chất và năng lượng','Trao đổi chất và chuyển hóa năng lượng gắn liền. Phân giải chất có thể cung cấp năng lượng, còn tổng hợp và vận chuyển chủ động cần năng lượng.','metabolism')
N(6,'sunlight',1,'Nguồn năng lượng ban đầu chủ yếu cho phần lớn hệ sinh thái trên Trái Đất là gì?',
 'Ánh sáng Mặt Trời',['ATP được đưa từ ngoài Trái Đất vào','Nhiệt do mọi động vật sinh ra','Năng lượng từ phân bón khoáng'],
 'Sinh vật quang tự dưỡng chuyển quang năng thành hóa năng. Vẫn có hệ sinh thái dựa vào hóa tự dưỡng.',
 'Nguồn năng lượng của sinh giới','Phần lớn hệ sinh thái nhận năng lượng ban đầu từ ánh sáng Mặt Trời. ATP là dạng trung gian sử dụng trong tế bào, không phải nguồn năng lượng đầu vào chủ yếu của sinh quyển.','photosynthesis',
 'Giữ ý nguồn chủ yếu, không khẳng định tất cả hệ sinh thái đều phụ thuộc trực tiếp vào ánh sáng.')
N(11,'heterotroph-roles',1,'Trong phân nhóm theo vai trò sinh thái, sinh vật dị dưỡng gồm hai nhóm chính nào?',
 'Sinh vật tiêu thụ và sinh vật phân giải',['Sinh vật quang tự dưỡng và hóa tự dưỡng','Sinh vật sản xuất và hóa tự dưỡng','Sinh vật sản xuất và quang tự dưỡng'],
 'Cả sinh vật tiêu thụ và phân giải đều sử dụng nguồn chất hữu cơ có sẵn.',
 'Dị dưỡng trong hệ sinh thái','Theo vai trò dinh dưỡng, sinh vật dị dưỡng thường được chia thành nhóm tiêu thụ và nhóm phân giải. Đây là cách phân nhóm sinh thái, không phải các giới phân loại.','ecology')
N(12,'open-system',1,'Vì sao cơ thể sống được xem là một hệ mở?',
 'Trao đổi vật chất và năng lượng với môi trường',['Không có ranh giới với môi trường','Chỉ nhận năng lượng, không nhận chất','Giữ nguyên toàn bộ vật chất suốt đời'],
 'Hệ mở có các dòng vật chất và năng lượng đi qua ranh giới; màng tế bào vẫn giúp điều tiết các dòng này.',
 'Cơ thể là hệ mở','Cơ thể trao đổi vật chất và năng lượng với môi trường. Có màng bao bọc không có nghĩa là hệ kín: màng điều tiết trao đổi chứ không loại bỏ trao đổi.','metabolism')
N(15,'transport-to-cells',1,'Ở thực vật có mạch và động vật có hệ tuần hoàn, chất dinh dưỡng được đưa đến tế bào chủ yếu nhờ hệ nào tương ứng?',
 'Hệ mạch và hệ tuần hoàn',['Hệ tuần hoàn và hệ mạch','Khí khổng và nhân tế bào','Lục lạp và ti thể'],
 'Hệ mạch dẫn chất trong cây; hệ tuần hoàn phân phối chất ở các động vật có hệ này.',
 'Phân phối chất trong cơ thể','Hệ mạch ở thực vật và hệ tuần hoàn ở nhiều động vật phân phối chất tới các bộ phận và tế bào. Không phải mọi động vật đều có một hệ tuần hoàn chuyên hóa.','transport',
 'Bổ sung phạm vi: thực vật có mạch và động vật có hệ tuần hoàn.')
N(20,'calcium-macro',2,'Trong Ca, Cl, Fe và Mo, nguyên tố nào thuộc nhóm dinh dưỡng đa lượng của thực vật?',
 'Ca',['Cl','Fe','Mo'],
 'Calcium được cây cần với lượng tương đối lớn; chlorine, iron và molybdenum thuộc nhóm vi lượng.',
 'Nguyên tố đa lượng và vi lượng','Ca là nguyên tố đa lượng của thực vật. Cl, Fe và Mo là vi lượng. “Vi lượng” chỉ nhu cầu lượng nhỏ, không có nghĩa vai trò kém quan trọng.','minerals')
N(21,'earth-water',2,'Nước bao phủ xấp xỉ bao nhiêu phần trăm diện tích bề mặt Trái Đất?',
 'Khoảng 71%',['Khoảng 30%','Khoảng 50%','Khoảng 90%'],
 'USGS nêu khoảng 71%. Trong đề gốc làm tròn đến hàng chục, phương án 70% là phù hợp.',
 'Nước trên bề mặt Trái Đất','Khoảng 71% bề mặt Trái Đất được nước bao phủ. Đề gốc làm tròn thành 70%; đừng nhầm tỷ lệ diện tích với tỷ lệ nước ngọt.','earth',
 'Dùng số xấp xỉ 71% theo USGS; phương án C=70% của tài liệu là cách làm tròn.')
N(22,'xylem-cells',2,'Hai loại tế bào dẫn nước đặc trưng của mạch gỗ ở thực vật có mạch là gì?',
 'Quản bào và phần tử mạch ống',['Ống rây và tế bào kèm','Tế bào bảo vệ và lông hút','Tế bào mô giậu và mô xốp'],
 'Quản bào và phần tử mạch ống tạo đường dẫn của mạch gỗ; ống rây thuộc mạch rây.',
 'Tế bào dẫn của mạch gỗ','Quản bào và phần tử mạch ống là các tế bào dẫn nước của mạch gỗ. Quản bào có ở các nhóm thực vật có mạch; mạch ống phổ biến ở thực vật hạt kín.','stems')
N(24,'mature-xylem',2,'Khi trưởng thành và hoạt động dẫn nước, quản bào và phần tử mạch ống có đặc điểm nào?',
 'Đã chết, còn thành tế bào tạo đường dẫn',['Có tế bào chất dày đặc lấp lòng dẫn','Có nhân lớn để bơm từng phân tử nước','Là tế bào bảo vệ của khí khổng'],
 'Các phần tử dẫn trưởng thành mất chất nguyên sinh. Mạch gỗ xét toàn mô vẫn có tế bào nhu mô sống.',
 'Phần tử dẫn chết, không phải mọi tế bào mạch gỗ','Quản bào và phần tử mạch ống trưởng thành là tế bào chết, có thành bền tạo đường dẫn. Không được suy rộng rằng toàn bộ mô mạch gỗ chỉ gồm tế bào chết.','stems',
 'Thu hẹp từ toàn bộ “mạch gỗ” trong câu gốc sang hai loại phần tử dẫn để tránh khẳng định sai về nhu mô gỗ.')
N(25,'essential-element',2,'Một nguyên tố thiếu làm cây không hoàn thành chu trình sống và không thể thay thế bằng nguyên tố khác được gọi là gì?',
 'Nguyên tố dinh dưỡng thiết yếu',['Nguyên tố luôn cần với lượng lớn','Nguyên tố chỉ cần khi cây ra hoa','Nguyên tố không tham gia chuyển hóa'],
 'Tính thiết yếu liên quan đến vai trò không thể thay thế trong đời sống cây, không đồng nghĩa với đa lượng.',
 'Tính thiết yếu','Nguyên tố thiết yếu cần cho cây hoàn thành chu trình sống và có chức năng không thể được nguyên tố khác thay thế. Cả nguyên tố đa lượng và vi lượng đều có thể thiết yếu.','minerals')
N(26,'water-states',2,'Ở những điều kiện thích hợp trên Trái Đất, nước tồn tại ở những trạng thái vật lí nào?',
 'Rắn, lỏng và khí',['Chỉ rắn và lỏng','Chỉ lỏng và khí','Chỉ có thể lỏng'],
 'Băng là thể rắn, nước là thể lỏng và hơi nước là thể khí; trạng thái phụ thuộc nhiệt độ và áp suất.',
 'Ba trạng thái của nước','Nước có thể ở thể rắn, lỏng hoặc khí tùy nhiệt độ và áp suất. Bay hơi chuyển nước từ lỏng sang khí và cần hấp thụ nhiệt.','water')
N(29,'nitrogenase-oxygen',2,'Vì sao nitrogenase của vi sinh vật cố định N₂ cần được bảo vệ khỏi oxygen?',
 'Oxygen có thể làm bất hoạt enzyme này',['Oxygen luôn là cơ chất trực tiếp tạo NH₄⁺','Oxygen thay ATP trong phản ứng','Oxygen làm N₂ trở thành chất hữu cơ ngay'],
 'Nitrogenase nhạy với oxygen. Vi sinh vật có thể dùng cơ chế bảo vệ enzyme ngay cả khi sống trong môi trường có oxygen.',
 'Cố định nitrogen và oxygen','Cố định N₂ cần nitrogenase, năng lượng và lực khử. Nitrogenase nhạy với oxygen; môi trường có oxygen không tuyệt đối loại trừ cố định N₂ nếu enzyme được bảo vệ.','nitrogen',
 'Không biến câu gốc thành nhận định mọi vi sinh vật cố định nitrogen chỉ sống kị khí.')
N(31,'evaporative-cooling',2,'Thoát hơi nước giúp làm mát lá chủ yếu nhờ cơ chế nào?',
 'Nước bay hơi hấp thụ nhiệt từ lá',['Nước ngừng hòa tan ion trong lá','Lá tạo thêm nhiệt khi nước bay hơi','Nước ngăn mọi phản ứng chuyển hóa'],
 'Chuyển nước lỏng thành hơi cần nhiệt. Đây là cơ chế làm mát do bay hơi, không phải do tính dung môi.',
 'Làm mát do bay hơi','Nước bay hơi lấy nhiệt từ lá nên có thể làm mát lá. Tính dung môi giúp hòa tan và vận chuyển chất, là một vai trò khác.','water',
 'Câu 31 gốc không có phương án “không đúng” rõ ràng. Viết câu thay thế chỉ kiểm tra cơ chế làm mát, không dùng khóa B gốc.')
N(33,'passive-ions',2,'Ion khoáng đi thụ động qua một kênh màng phù hợp theo hướng nào?',
 'Xuôi gradient điện hóa của ion',['Luôn từ nồng độ thấp đến cao','Ngược gradient điện hóa mà không cần năng lượng','Luôn từ tế bào rễ ra đất'],
 'Vận chuyển ion phụ thuộc cả chênh lệch nồng độ lẫn điện thế màng; kênh thụ động không bơm ion ngược gradient.',
 'Hấp thụ ion thụ động','Ion qua kênh thụ động theo gradient điện hóa. Chênh lệch nồng độ là một thành phần của gradient; điện thế màng cũng ảnh hưởng hướng di chuyển của ion.','membrane',
 'Diễn đạt đầy đủ hơn đáp án “chênh lệch nồng độ ion” trong câu gốc.')
N(34,'micronutrients',2,'Vì sao một số nguyên tố vi lượng vẫn rất quan trọng dù cây cần ít?',
 'Chúng là thành phần hoặc yếu tố hỗ trợ hoạt động enzyme',['Chúng thay thế tất cả nguyên tố đa lượng','Chúng chiếm phần lớn sinh khối tươi','Chúng chỉ tồn tại trong hạt khô'],
 'Nhu cầu lượng nhỏ không làm mất vai trò thiết yếu; thiếu một yếu tố của enzyme có thể cản trở chuyển hóa.',
 'Vai trò vi lượng','Nhiều nguyên tố vi lượng tham gia cấu tạo hoặc hỗ trợ hoạt động enzyme. Cây cần ít về lượng nhưng thiếu vẫn có thể gây rối loạn chuyển hóa.','minerals')
N(37,'xerophyte-sunken-stomata',2,'Khí khổng nằm sâu trong các hốc của lá có thể giúp cây chịu hạn bằng cách nào?',
 'Giữ lớp không khí ẩm hơn gần lỗ khí, giảm mất nước',['Đẩy nước lỏng liên tục ra ngoài lá','Làm nước đất tự biến thành chất hữu cơ','Ngăn tuyệt đối mọi trao đổi khí của lá'],
 'Hốc khí khổng có thể hạn chế lưu thông không khí khô sát lỗ khí, giảm gradient và tốc độ mất hơi nước.',
 'Khí khổng chìm và chịu hạn','Ở nhiều cây chịu hạn, khí khổng chìm và lông ở hốc giúp giữ không khí ẩm sát khí khổng, giảm mất nước. Đây không phải cơ chế đóng kín hoàn toàn trao đổi khí.','transport',
 'Thay câu phủ định dễ khái quát quá mức bằng một cơ chế thích nghi cụ thể trong các phương án gốc.')
N(38,'cold-mulch',2,'Trong đợt rét, phủ rơm quanh gốc có tác dụng nào đối với bộ rễ?',
 'Giảm mất nhiệt của đất, hạn chế tác hại của lạnh',['Bảo đảm đất có nhiệt độ cao nhất có thể','Làm rễ ngừng hô hấp hoàn toàn','Thay thế nhu cầu nước và khoáng của rễ'],
 'Lớp phủ cách nhiệt giúp giảm dao động nhiệt đất. Hiệu quả còn phụ thuộc độ dày lớp phủ và điều kiện thực tế.',
 'Phủ gốc khi trời rét','Phủ rơm có thể cách nhiệt và giữ ẩm cho vùng rễ. Khi đề hỏi “ủ ấm gốc” trong rét, mục đích chính là hạn chế ảnh hưởng của nhiệt độ thấp.','mulch',
 'Nêu rõ đợt rét; phủ rơm cũng có thể giữ ẩm và giảm nóng nên không suy tác dụng chỉ từ ảnh.')
N(41,'two-tracers',2,'Nếu ngọn và rễ đều là nơi nhận đường, chất chỉ thị đỏ đi theo mạch rây có thể tới đâu?',
 'Cả ngọn và rễ',['Chỉ tới ngọn trong mọi trường hợp','Chỉ tới rễ trong mọi trường hợp','Không thể ra khỏi nơi tiêm'],
 'Mạch rây dẫn từ nguồn đến nơi nhận. Các ống rây khác nhau có thể chuyển chất lên hoặc xuống tùy nguồn–đích.',
 'Thuốc nhuộm và hướng dòng mạch rây','Nếu ngọn và rễ đều là cơ quan nhận chất hữu cơ, dòng mạch rây từ nguồn có thể tới cả hai. Không được coi mạch rây luôn chỉ chảy từ lá xuống rễ.','transport',
 'Gộp ý trùng câu 41/46; nêu rõ quan hệ nguồn–đích và chất chỉ thị thực sự đi theo dịch mạch rây.')
N(42,'calcium-wall',2,'Vai trò nào của calcium (Ca) ở thực vật phù hợp nhất?',
 'Góp phần ổn định thành, màng tế bào và truyền tín hiệu',['Là nguyên tử trung tâm của diệp lục','Là nguyên tố có trong mọi nhóm phosphate','Là nguồn carbon của chu trình Calvin'],
 'Ca tham gia cấu trúc và điều hòa tín hiệu; Mg mới là nguyên tử trung tâm của diệp lục.',
 'Vai trò của calcium','Calcium góp phần ổn định thành và màng tế bào, đồng thời tham gia truyền tín hiệu. Phân biệt Ca với Mg ở trung tâm diệp lục và P trong phosphate.','minerals',
 'Giữ ý vai trò Ca, thay danh sách enzyme quá cụ thể bằng các chức năng đã đối chiếu.')
N(45,'hypertonic-definition',2,'Hai dung dịch có cùng áp suất cơ học. Dịch tế bào có nhiều chất tan hơn dịch đất thì thế nước do chất tan thế nào?',
 'Thấp hơn dịch đất',['Cao hơn dịch đất','Luôn bằng dịch đất','Không phụ thuộc chất tan'],
 'Tăng chất tan làm thế chất tan âm hơn. Khi các thành phần khác tương đương, thế nước của dịch tế bào thấp hơn.',
 'Chất tan và thế nước','Nồng độ chất tan tăng làm thế chất tan giảm. Cần xét cả áp suất và các thành phần khác của thế nước; lực hút do thoát hơi nước không đồng nghĩa với nồng độ chất tan.','transport',
 'Câu 45 có các lựa chọn A/C chồng lấn. Câu mới kiểm tra quan hệ xác định khi giữ áp suất cơ học tương đương.')
N(48,'palisade',4,'Ở lá hai mặt điển hình, mô giậu ngay dưới biểu bì trên thường có đặc điểm nào?',
 'Tế bào xếp khá sát nhau, chứa nhiều lục lạp',['Tế bào luôn chết và không có bào quan','Chỉ gồm tế bào bảo vệ khí khổng','Không có lục lạp và chỉ dẫn nước'],
 'Mô giậu thuận lợi thu nhận ánh sáng để quang hợp. Không phải mọi kiểu lá đều có cấu trúc hai mặt như vậy.',
 'Mô giậu của lá','Trong lá hai mặt điển hình, mô giậu nằm dưới biểu bì trên, gồm tế bào xếp khá sát và giàu lục lạp. Mô xốp thường có nhiều khoảng gian bào hơn.','leaves',
 'Gộp câu 48/50, thêm phạm vi lá hai mặt để tránh áp dụng cho mọi loài.')
N(52,'c4-examples',4,'Nhóm nào gồm các cây điển hình có con đường cố định CO₂ ban đầu kiểu C₄?',
 'Ngô, mía, cao lương',['Lúa, khoai tây, đậu','Dứa, xương rồng, thanh long','Lúa, dứa, ngô'],
 'Ngô, mía và cao lương là các cây C₄ thường gặp. Lúa thuộc C₃; dứa và nhiều xương rồng thuộc CAM.',
 'Ví dụ cây C₄','Ngô, mía, cao lương và nhiều loài rau dền thuộc nhóm C₄. C₄ và CAM không giống nhau: C₄ thường phân tách không gian, CAM phân tách thời gian cố định CO₂.','c4',
 'Đổi rau dền thành cao lương để dùng bộ ví dụ cũng xuất hiện ở câu 130; không đổi mục tiêu phân loại.')
N(53,'cam-examples',4,'Nhóm cây nào thường được dùng làm ví dụ cho kiểu quang hợp CAM?',
 'Dứa, xương rồng, thanh long',['Lúa, khoai tây, đậu','Ngô, mía, cao lương','Lúa, ngô, khoai tây'],
 'Các cây CAM điển hình thu nhận CO₂ chủ yếu ban đêm, giúp hạn chế mất nước. Không phải tất cả đều sống ở sa mạc.',
 'Ví dụ cây CAM','Dứa, nhiều xương rồng, thanh long và cây thuốc bỏng là những ví dụ CAM. CAM giúp tiết kiệm nước; mô tả tất cả cây CAM là cây sa mạc là quá hẹp.','c4',
 'Gộp mục tiêu phân loại của câu 47/53; không coi toàn bộ CAM chỉ sống ở sa mạc.')
N(56,'chlorophyll-group',4,'Ở thực vật xanh, hai sắc tố thuộc nhóm chlorophyll phổ biến là gì?',
 'Chlorophyll a và chlorophyll b',['Chlorophyll a và carotene','Chlorophyll b và xanthophyll','Carotene và xanthophyll'],
 'Diệp lục gồm các chlorophyll; carotene và xanthophyll thuộc carotenoid. Riêng trung tâm phản ứng có chlorophyll a.',
 'Nhóm diệp lục khác trung tâm phản ứng','Chlorophyll a và b đều thuộc nhóm diệp lục ở thực vật xanh. Khi hỏi sắc tố trung tâm phản ứng, đáp án là chlorophyll a chứ không phải cả a và b.','light',
 'Bỏ cách gọi “nhóm sắc tố chính” dễ lẫn với sắc tố trung tâm phản ứng.')
N(59,'pondweed-four-tubes',5,'Rong ở 4 ống: 1 sáng+NaHCO₃; 2 sáng+nước; 3 tối+NaHCO₃; 4 tối+nước. Khi CO₂ là yếu tố giới hạn ở ống 2, ống nào quang hợp mạnh nhất?',
 'Ống 1',['Ống 2','Ống 3','Ống 4'],
 'Ống 1 có ánh sáng và được bổ sung nguồn carbon vô cơ. Giữ lượng rong, nhiệt độ và các điều kiện khác tương đương.',
 'Thí nghiệm rong: ánh sáng và carbon vô cơ','Rong cần ánh sáng và nguồn carbon vô cơ cho quang hợp. NaHCO₃ có thể bổ sung carbon vô cơ; so sánh chỉ có ý nghĩa khi các điều kiện còn lại được kiểm soát.','light calvin',
 'Đưa thông tin hình vào đề chữ và nói rõ CO₂ giới hạn; không bỏ hình rồi hỏi số ống thiếu bối cảnh. Mã in trùng câu 49, ID dùng số câu.')
N(66,'dark-pga',4,'Ngay sau khi tắt sáng, vì sao 3-PGA (APG) có thể tích lũy tạm thời trong chu trình Calvin?',
 'Thiếu ATP và NADPH làm chậm bước khử 3-PGA',['Ánh sáng trực tiếp biến 3-PGA thành CO₂','RuBisCO ngay lập tức tạo glucose từ nước','Lục lạp bắt đầu sản xuất thêm NADPH nhờ bóng tối'],
 'Bước khử 3-PGA cần ATP và NADPH từ pha sáng. Nhận định là biến đổi ban đầu, không nói 3-PGA tăng mãi trong tối.',
 'Tắt sáng và chu trình Calvin','Khi ngừng chiếu sáng, nguồn ATP và NADPH giảm. Bước khử 3-PGA bị hạn chế nên 3-PGA có thể tăng tạm thời; về sau chu trình cũng chậm lại.','calvin',
 'Nêu rõ giai đoạn ngay sau tắt sáng, tránh khẳng định tăng liên tục.')
N(67,'photorespiration',6,'Trao đổi khí đặc trưng của hô hấp sáng là gì?',
 'Tiêu thụ O₂ và giải phóng CO₂ khi có ánh sáng',['Tiêu thụ CO₂ và giải phóng O₂ trong tối','Tiêu thụ CO₂ và giải phóng O₂ khi sáng','Chỉ tạo ATP, không có trao đổi khí'],
 'Hô hấp sáng gắn với hoạt tính oxygenase của RuBisCO. C₄ giảm quá trình này nhờ tập trung CO₂, không triệt tiêu tuyệt đối.',
 'Hô hấp sáng','Hô hấp sáng tiêu thụ O₂ và có bước giải phóng CO₂, làm giảm hiệu quả cố định carbon trong các điều kiện thích hợp. Cây C₄ vẫn có thể hô hấp sáng ở mức thấp.','photoresp',
 'Gộp câu 67/73; làm rõ câu 105d không thể dùng từ “chỉ” cho C₃.')
N(70,'photosynthesis-equation',4,'Phương trình tổng quát thường dùng cho quang hợp giải phóng oxygen, khi có ánh sáng, là phương trình nào?',
 '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O', ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O','6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂','6CO₂ → C₆H₁₂O₆ + 6O₂'],
 'Phương trình biểu diễn tổng quát tạo carbohydrate. CO₂ cung cấp carbon; O₂ giải phóng bắt nguồn từ nước.',
 'Phương trình tổng quát quang hợp','Có thể viết 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O khi có ánh sáng và hệ quang hợp. Glucose biểu diễn sản phẩm carbohydrate tổng quát, không phải sản phẩm đầu tiên của Calvin.','photosynthesis')
N(71,'respiration-order',6,'Theo mô hình chia hô hấp hiếu khí thành ba giai đoạn lớn, thứ tự nào đúng?',
 'Đường phân → chu trình Krebs → chuỗi truyền electron',['Krebs → đường phân → chuỗi truyền electron','Đường phân → chuỗi truyền electron → Krebs','Chuỗi truyền electron → Krebs → đường phân'],
 'Sau đường phân, pyruvate được oxi hóa thành acetyl-CoA trước khi vào Krebs; electron sau đó cấp cho chuỗi hô hấp.',
 'Trật tự hô hấp hiếu khí','Đường phân tạo pyruvate; oxi hóa pyruvate tạo acetyl-CoA; acetyl-CoA vào chu trình Krebs; NADH và FADH₂ cung cấp electron cho chuỗi truyền electron.','glycolysis krebs oxidation',
 'Gộp câu 71/78; giải thích thêm bước nối tạo acetyl-CoA vốn bị lược khỏi ba giai đoạn của đề.')
N(72,'krebs-co2',6,'Hai phân tử acetyl-CoA hoàn thành hai lượt chu trình Krebs sẽ giải phóng bao nhiêu CO₂ trong riêng chu trình này?',
 '4 CO₂',['2 CO₂','3 CO₂','6 CO₂'],
 'Mỗi lượt giải phóng 2 CO₂, nên 2 × 2 = 4. Không cộng thêm CO₂ từ bước tạo acetyl-CoA.',
 'CO₂ trong chu trình Krebs','Mỗi acetyl-CoA đi qua một lượt Krebs giải phóng 2 CO₂. Hai lượt giải phóng 4 CO₂; đây không phải tổng CO₂ của toàn bộ phân giải một glucose.','krebs')
N(74,'ethanol-fermentation',6,'Sản phẩm hữu cơ đặc trưng của lên men rượu từ pyruvate là gì?',
 'Ethanol',['Lactate','Acetic acid','Nucleic acid'],
 'Lên men rượu tạo ethanol và CO₂, đồng thời tái tạo NAD⁺ để đường phân tiếp tục.',
 'Lên men rượu','Trong lên men rượu, pyruvate được chuyển thành ethanol và CO₂. Quá trình tái tạo NAD⁺; ATP thu ròng của đường phân vẫn chỉ là 2 trên mỗi glucose.','fermentation')
N(79,'shared-glycolysis',6,'Giai đoạn nào có trước cả lên men lactate và hô hấp hiếu khí khi tế bào sử dụng glucose?',
 'Đường phân',['Chu trình Krebs','Chuỗi truyền electron dùng O₂','Oxi hóa acetyl-CoA trong Krebs'],
 'Đường phân chuyển glucose thành pyruvate. Sau đó pyruvate có các hướng chuyển hóa khác nhau tùy điều kiện.',
 'Điểm chung của lên men và hô hấp hiếu khí','Khi dùng glucose, cả hai bắt đầu bằng đường phân. Lên men không tiếp tục bằng chu trình Krebs và chuỗi truyền electron dùng oxygen như hô hấp hiếu khí.','glycolysis fermentation',
 'Gộp câu 79/81; nêu glucose và lên men lactate để làm rõ phạm vi.')
N(80,'active-tissue',6,'Trong cùng điều kiện phù hợp, mô thực vật nào thường có cường độ hô hấp cao hơn do hoạt động sinh trưởng mạnh?',
 'Mô phân sinh đang phân chia',['Lớp bần đã chết','Phần tử mạch ống trưởng thành đã chết','Mô chết trong lõi thân rỗng'],
 'Tế bào đang phân chia và sinh trưởng cần nhiều ATP. Không thể xếp rễ luôn cao nhất trong mọi cây, mọi giai đoạn.',
 'Hô hấp mạnh ở mô hoạt động','Hạt nảy mầm, mô phân sinh và cơ quan đang sinh trưởng thường hô hấp mạnh. So sánh phải xét loại mô, tuổi, điều kiện và cách chuẩn hóa cường độ.','respiration',
 'Câu 80 gốc không đủ bối cảnh để xếp hạng rễ/thân/lá/quả. Câu thay thế nêu mô hoạt động so với mô đã chết.')
N(82,'etc-location',6,'Ở tế bào thực vật nhân thực, chuỗi truyền electron của hô hấp ti thể nằm chủ yếu ở đâu?',
 'Màng trong ti thể',['Màng ngoài ti thể','Màng thylakoid của lục lạp','Dịch tế bào chất'],
 'Các phức hệ hô hấp trên màng trong tạo gradient proton; ATP synthase sử dụng gradient để tổng hợp ATP.',
 'Vị trí chuỗi truyền electron hô hấp','Chuỗi truyền electron hô hấp ti thể ở màng trong ti thể. Đừng nhầm với chuỗi truyền electron quang hợp trên màng thylakoid.','oxidation')
N(85,'atp-explicit-total',6,'Theo mô hình 10 NADH × 2,5 ATP; 2 FADH₂ × 1,5 ATP; thêm 4 ATP mức cơ chất, tổng thu được là bao nhiêu?',
 '32 ATP',['28 ATP','34 ATP','38 ATP'],
 '10 × 2,5 + 2 × 1,5 + 4 = 32. Đây là mô hình tính đã nêu; hiệu suất thực và shuttle có thể làm số ATP khác đi.',
 'Đếm ATP phải nêu quy ước','Với NADH≈2,5 ATP và FADH₂≈1,5 ATP, 10 NADH + 2 FADH₂ + 4 ATP mức cơ chất cho 32 ATP lí thuyết. Khóa 36–38 của đề dùng quy ước cũ, không phải hằng số phổ quát.','atpyield oxidation',
 'Câu 85 gốc chọn 36–38 theo mô hình cũ. Câu mới công khai hệ số 2,5/1,5; giữ khóa cũ riêng trong sổ đối chiếu.')
N(88,'atp-explicit-oxidative',6,'Với 10 NADH và 2 FADH₂, quy đổi lần lượt 2,5 và 1,5 ATP, riêng phosphoryl hóa oxi hóa tạo bao nhiêu ATP lí thuyết?',
 '28 ATP',['4 ATP','32 ATP','34 ATP'],
 '10 × 2,5 + 2 × 1,5 = 28. Không cộng 4 ATP mức cơ chất vì câu chỉ hỏi phosphoryl hóa oxi hóa.',
 'ATP oxi hóa khác tổng ATP','Theo mô hình đã nêu, phosphoryl hóa oxi hóa cho 28 ATP. Cộng thêm 4 ATP mức cơ chất mới thành 32; các con số phải đi kèm giả thiết tính.','atpyield',
 'Khóa 34 ATP gốc tương ứng quy đổi cũ 3/2; câu mới nêu hệ số và không đồng nhất chuỗi electron với tổng ATP.')
N(90,'specialised-organs',1,'Nhận định nào đúng về việc sinh vật thu nhận chất từ môi trường?',
 'Đơn bào có thể trao đổi qua màng, không cần cơ quan riêng',['Mọi sinh vật đều phải có hệ tiêu hóa','Mọi sinh vật đều phải có hệ tuần hoàn','Chỉ động vật có thể thu nhận chất'],
 'Cơ quan chuyên hóa có ở các cơ thể thích hợp; sinh vật đơn bào vẫn trao đổi chất dù không có cơ quan.',
 'Không phải mọi sinh vật đều có cơ quan','Sinh vật đơn bào trao đổi chất qua bề mặt tế bào. Không thể dùng nhận định “nhờ cơ quan chuyên biệt” như quy luật bắt buộc cho mọi sinh vật.','metabolism',
 'Làm rõ phạm vi câu 90a; Đ chỉ phù hợp khi nói về cơ thể có những cơ quan này.')
N(100,'potassium-stomata',2,'Ion nào thường tham gia thay đổi áp suất thẩm thấu của tế bào bảo vệ để điều chỉnh khí khổng?',
 'K⁺',['N₂ khí','Phân tử cellulose','Tinh bột ngoài tế bào'],
 'Biến đổi lượng K⁺ và các chất tan khác ảnh hưởng thế nước, sức trương và độ mở khí khổng.',
 'K⁺ và khí khổng','K⁺ là một ion tham gia điều hòa chất tan và sức trương của tế bào bảo vệ. Đừng gán vai trò trực tiếp này cho N₂ hay xem nitrogen là ion điều khiển duy nhất.','transport',
 'Tách ý dễ nhầm ở câu 100b; vẫn thừa nhận nhiều ion và chất tan phối hợp.')
N(102,'co2-controlled-test',5,'Ba bình rong giống nhau: 1 sáng+có NaHCO₃; 2 sáng+không NaHCO₃; 3 tối+có NaHCO₃. Cặp nào so sánh tác động bổ sung NaHCO₃?',
 'Bình 1 và 2',['Bình 1 và 3','Bình 2 và 3','Chỉ đo bình 3'],
 'Giữa 1 và 2 chỉ thay yếu tố bổ sung NaHCO₃. Trong mô hình đề, NaHCO₃ được dùng làm nguồn cung cấp carbon vô cơ.',
 'Chọn cặp đối chứng','Muốn xét một yếu tố, so sánh hai nhóm chỉ khác yếu tố ấy. Bình 1/2 xét bổ sung NaHCO₃; bình 1/3 xét chiếu sáng. Thực nghiệm chặt còn phải kiểm soát pH do NaHCO₃ ảnh hưởng.','photosynthesis',
 'Giữ bố trí câu 102; câu mới hỏi tác động bổ sung NaHCO₃ thay vì khẳng định đã cô lập tuyệt đối CO₂ bất chấp pH.')
N(106,'limewater-naoh',7,'Thay nước vôi trong bằng NaOH loãng rồi sục lượng CO₂ vừa đủ: có còn dấu hiệu vẩn đục CaCO₃ như cũ không?',
 'Không; dung dịch NaOH không cung cấp Ca²⁺',['Có; CO₂ tự biến thành calcium','Có; NaOH và Ca(OH)₂ là cùng chất','Không; NaOH hoàn toàn không phản ứng với CO₂'],
 'NaOH có thể hấp thụ CO₂ nhưng không tạo kết tủa CaCO₃ như nước vôi. Công thức đúng là NaOH, không phải Na(OH)₂.',
 'Hấp thụ khí khác chỉ thị vẩn đục','Nước vôi tạo CaCO₃ vẩn đục khi gặp lượng CO₂ thích hợp. NaOH cũng có thể hấp thụ CO₂ nhưng không cho cùng dấu hiệu; không được coi mọi chất hấp thụ CO₂ là cùng phép thử.','limewater',
 'Sửa công thức Na(OH)₂ thành NaOH và làm rõ “kết quả” là dấu hiệu vẩn đục trong thí nghiệm.')
N(108,'nitrogen-atmosphere',6,'Trong bình chứa N₂ tinh khiết, khi O₂ còn lại trong mô đã hết, tế bào khoai tây không thể tiếp tục quá trình nào?',
 'Chuỗi hô hấp hiếu khí dùng O₂ làm chất nhận electron cuối',['Đường phân còn cơ chất và NAD⁺ được tái tạo','Lên men trong mô còn sống có khả năng lên men','Các phản ứng chuyển hóa không sử dụng O₂'],
 'Khí N₂ không thay thế O₂ ở cuối chuỗi hô hấp hiếu khí. CO₂ giảm không chứng minh mô đang hô hấp hiếu khí bình thường.',
 'Môi trường N₂ không phải O₂','Trong N₂ tinh khiết, sau khi cạn oxygen còn lại, mô không thể duy trì chuỗi hô hấp dùng O₂. Sự sống còn và lên men tùy mô, cơ chất và thời gian thiếu oxygen.','oxidation fermentation',
 'Lấy ý chắc chắn của câu 108c; không suy cơ chế chi tiết chỉ từ đường CO₂.')
N(112,'soil-ph',2,'Đất quá chua hoặc quá kiềm có thể làm rễ hấp thụ nước và khoáng kém bằng cách nào?',
 'Làm tổn thương rễ và thay đổi khả năng cung cấp khoáng',['Luôn làm mọi khoáng dễ hấp thụ hơn','Biến nước thành chất hữu cơ ngay trong đất','Loại bỏ nhu cầu oxygen của rễ'],
 'pH ảnh hưởng hoạt động của rễ và tính sẵn có của nhiều ion. Khoảng phù hợp tùy loài cây và loại đất.',
 'pH đất và hấp thụ','pH quá lệch khỏi khoảng phù hợp có thể hại rễ và làm thiếu hoặc độc một số khoáng. Các yếu tố khác gồm thế nước đất, độ thoáng và nhiệt độ.','soil')
N(113,'two-root-pathways',2,'Hai con đường thường được phân biệt khi nước đi qua vỏ rễ là gì?',
 'Gian bào (apoplast) và tế bào chất liên thông (symplast)',['Mạch rây và khí khổng','Ti thể và lục lạp','Tự dưỡng và dị dưỡng'],
 'Apoplast gồm thành tế bào và khoảng gian bào; symplast gồm tế bào chất nối qua cầu sinh chất. Còn có đường xuyên màng.',
 'Apoplast và symplast','Nước có thể đi qua thành tế bào/khoảng gian bào (apoplast) hoặc qua tế bào chất nối bằng cầu sinh chất (symplast). Đường xuyên màng là cách phân biệt bổ sung, không đồng nhất với symplast.','roots',
 'Giữ mô hình hai đường của đề, ghi chú đường xuyên màng để không coi danh sách là mọi cơ chế có thể.')
N(114,'casparian-strip',2,'Đai Caspari ở nội bì rễ tác động trực tiếp lên con đường nào?',
 'Chặn dòng gian bào, buộc chất đi qua màng để vào trụ giữa',['Chặn hoàn toàn mọi nước đi vào cây','Biến dòng mạch gỗ thành dòng mạch rây','Chỉ ngăn ánh sáng chiếu vào rễ'],
 'Hàng rào nội bì hạn chế lối apoplast, tạo cơ hội cho màng tế bào kiểm soát chất qua trước khi vào hệ dẫn.',
 'Đai Caspari là điểm kiểm soát','Đai Caspari chặn con đường gian bào tại nội bì. Nước và chất tan phải vượt màng theo lộ trình thích hợp, vì vậy không thể tự do đi theo thành tế bào suốt đường vào trụ giữa.','roots casparian',
 'Không dùng cách nói “lọc sạch/lọc không sạch” của câu 127; màng có tính chọn lọc, không phải bảo đảm sạch tuyệt đối.')
N(117,'tall-tree-water',2,'Ở cây gỗ rất cao, cơ chế chủ yếu giúp đưa nước tới tán lá là gì?',
 'Lực hút do thoát hơi nước và tính liên tục của cột nước',['Chỉ áp suất rễ đẩy tới mọi độ cao','Tế bào mạch gỗ sống bơm từng phân tử nước','Trọng lực kéo nước lên trên'],
 'Lực căng từ lá truyền qua cột nước nhờ liên kết giữa các phân tử nước; áp suất rễ không giải thích độ cao rất lớn.',
 'Nước lên cây cao','Mô hình liên kết–lực căng giải thích nước lên cây cao: thoát hơi ở lá tạo sức hút, lực liên kết giữ cột nước. Không coi áp suất rễ là động lực đủ hoặc bắt buộc ở những cây rất cao.','transport',
 'Không lặp số đo/kỉ lục “hiện nay” của Hyperion; sửa mức đóng góp bị phóng đại của áp suất rễ.')
N(118,'salt-tolerant-adjustment',2,'Một cơ chế giúp cây chịu mặn vẫn nhận được nước từ môi trường mặn là gì?',
 'Tích lũy chất tan phù hợp để hạ thế nước tế bào',['Loại bỏ mọi chất tan khỏi tế bào','Ngừng trao đổi nước qua màng','Làm thế nước tế bào luôn cao hơn đất'],
 'Điều chỉnh thẩm thấu giúp duy trì gradient nước vào. Cây chịu mặn còn phải hạn chế độc ion và bảo vệ tế bào.',
 'Điều chỉnh thẩm thấu ở cây chịu mặn','Cây chịu mặn có thể tích lũy chất tan, hạ thế nước tế bào để thu nhận nước. Khả năng sống còn còn phụ thuộc kiểm soát ion, ngăn độc muối và các thích nghi khác.','salinity-research',
 'Mở rộng lí do nồng độ dịch bào cao thành điều chỉnh thẩm thấu, không suy cây hút tùy ý mọi muối.')
N(119,'cut-under-water',2,'Cắt lại gốc cành hoa dưới nước có thể giúp duy trì hút nước chủ yếu vì sao?',
 'Hạn chế không khí lọt vào các mạch dẫn bị cắt',['Tạo thêm lục lạp trong mạch gỗ','Biến mạch rây thành rễ','Làm cành hoa không còn thoát hơi nước'],
 'Không khí có thể làm gián đoạn cột nước trong mạch gỗ. Giữ đầu cắt ướt hỗ trợ tiếp xúc liên tục với nước.',
 'Cắt cành và bọt khí','Khi cắt cành, không khí có thể xâm nhập mạch gỗ và cản dòng nước. Cắt dưới nước/đưa đầu cắt vào nước ngay giúp hạn chế nguy cơ này, nhưng không loại bỏ mọi nguyên nhân hoa héo.','cutflowers')
N(122,'salt-leaching',2,'Để giảm muối hòa tan trong vùng rễ, biện pháp nào có thể hiệu quả khi có đủ nước phù hợp và hệ thống thoát nước?',
 'Rửa mặn bằng nước ngọt, đưa nước chứa muối ra khỏi vùng rễ',['Bón thêm nhiều phân tan bất kể nhu cầu','Giữ nước mặn tù đọng lâu hơn','Chỉ tăng lượng muối trong đất'],
 'Nước hòa tan và mang muối ra khi thoát được. Mức phục hồi phụ thuộc tổn thương cây; không bảo đảm cứu được mọi cây.',
 'Rửa mặn cần thoát nước','Rửa mặn có thể hạ nồng độ muối khi nước ngọt mang muối ra khỏi vùng rễ và có đường thoát. Đổ thêm nước nhưng để tù đọng có thể gây úng, không phải giải pháp chắc chắn.','salt-extension',
 'Giữ giải pháp của Minh ở câu 122; bỏ bảo đảm mọi đất/cây đều phục hồi hoàn toàn.')
N(123,'root-pressure-exudation',2,'Dịch ứa từ mặt cắt của thân gần gốc khi rễ còn hoạt động có thể do lực nào?',
 'Áp suất rễ',['Lực hút do tán lá đã bị cắt bỏ','Áp suất do lá quang hợp ngay ở vết cắt','Trọng lực đẩy nước lên từ rễ'],
 'Rễ tích lũy ion vào hệ dẫn có thể kéo nước vào và tạo áp suất dương, đẩy dịch ra vết cắt.',
 'Ứa dịch ở vết cắt','Khi còn bộ rễ hoạt động, áp suất rễ có thể đẩy dịch mạch gỗ ra mặt cắt của thân. Hiện tượng tùy loài, điều kiện nước và hoạt động rễ.','transport',
 'Biến thể áp dụng từ ứa giọt đã có: không đồng nhất ứa dịch qua vết cắt với thoát hơi ở lá.')
N(124,'root-restriction',2,'Vì sao cây trồng trong chậu quá nhỏ có thể chậm lớn hơn cây cùng loài được trồng ở đất phù hợp?',
 'Rễ bị hạn chế không gian và nguồn nước, dinh dưỡng',['Mọi loại chậu đều ngăn rễ hô hấp hoàn toàn','Cây trong chậu không thể quang hợp','Đất vườn luôn có dinh dưỡng vô hạn'],
 'Thể tích rễ và khả năng cung cấp nước, khoáng có thể giới hạn sinh trưởng. Chậu đủ lớn, chăm sóc tốt không nhất thiết kém.',
 'Trồng chậu không mặc nhiên làm cây yếu','Chậu quá nhỏ hạn chế phát triển rễ và dự trữ nước, dinh dưỡng. Cần so sánh trong điều kiện cụ thể; cây trồng chậu được chăm sóc phù hợp vẫn có thể phát triển tốt.','root-volume',
 'Câu 124 được điều kiện hóa bằng “chậu quá nhỏ”; không khẳng định mọi chậu kém đất vườn.')
N(125,'hollow-trunk',2,'Vì sao một cây thân rỗng vẫn có thể sống nếu lớp mô dẫn phía ngoài còn nguyên?',
 'Gỗ dác và mạch rây còn đảm nhiệm vận chuyển',['Khoang rỗng thay hoàn toàn chức năng của rễ','Mọi mô bên trong và bên ngoài đều đã chết','Cây không cần vận chuyển nước nữa'],
 'Phần gỗ lõi mất đi không nhất thiết cắt đứt đường dẫn ngoài. Thân rỗng vẫn có thể giảm độ bền cơ học.',
 'Thân rỗng và mô dẫn còn hoạt động','Gỗ dác ở phía ngoài vận chuyển nước, mạch rây phía ngoài gỗ vận chuyển chất hữu cơ. Mất phần lõi không nhất thiết làm cây chết ngay, nhưng làm tăng nguy cơ suy yếu cơ học.','stems',
 'Không dùng giải thích “gỗ chết vì thiếu oxygen” hay “lõi vô tác dụng”: lõi vẫn góp phần nâng đỡ.')
N(128,'girdling',2,'Bóc một vòng vỏ sâu làm đứt mạch rây quanh thân có thể khiến rễ thiếu chất nào từ lá?',
 'Đường và các chất hữu cơ được vận chuyển',['Oxygen được tạo trong đất','Nước mưa đi qua khoảng không','Ánh sáng đi thẳng xuống rễ'],
 'Mạch rây dẫn chất hữu cơ từ nguồn đến nơi nhận. Tổn thương vòng quanh thân có thể làm rễ thiếu nguồn nuôi và gây chết cây.',
 'Nguy hại của bóc vỏ','Vết bóc vỏ có thể tổn thương mạch rây, tầng sinh mạch và tạo cửa ngõ nhiễm bệnh. Bóc vòng quanh thân đặc biệt nguy hiểm; không nên tự khoét rộng hoặc bôi thuốc liền sẹo thường quy.','stems treecare',
 'Đối chiếu câu 128: không đưa thuốc liền sẹo thành khuyến cáo bắt buộc; vết thương lớn cần người chăm sóc cây có chuyên môn.')
N(130,'c3-count',4,'Trong lúa, cao lương, ngô, khoai tây, sắn, mía, xương rồng, dứa, đậu và thanh long: có bao nhiêu cây thuộc nhóm C₃?',
 '4',['3','5','6'],
 'Bốn cây C₃ là lúa, khoai tây, sắn, đậu. Ngô, cao lương, mía là C₄; các ví dụ còn lại thuộc CAM.',
 'Phân loại C₃, C₄, CAM','Trong danh sách đề cương: lúa, khoai tây, sắn, đậu thuộc C₃ (4); ngô, cao lương, mía thuộc C₄; xương rồng, dứa, thanh long là ví dụ CAM.','c4',
 'Đổi “khoai” không xác định loài thành khoai tây; giữ đáp án 4 và công khai thay đổi.')
# Second editorial pass: comparable, topic-specific distractors (not random bank terms).
_refine={
15: dict(wrong=['Hệ mạch và hệ tiêu hóa','Hệ hô hấp và hệ tuần hoàn','Hệ tuần hoàn và hệ hô hấp']),
24: dict(wrong=['Còn sống, giữ nguyên nhân và chất nguyên sinh','Là các ống rây được tế bào kèm hỗ trợ','Có vách ngăn kín ngăn hoàn toàn dòng nước']),
37: dict(wrong=['Làm tăng lưu thông không khí khô sát lỗ khí','Làm không khí sát lỗ khí khô hơn bên ngoài','Làm chênh lệch hơi nước ra ngoài lớn hơn']),
48: dict(wrong=['Tế bào xếp thưa, tạo nhiều khoảng khí hơn mô xốp','Tế bào xếp sát nhưng không có lục lạp','Chỉ gồm phần tử mạch ống đã mất chất nguyên sinh']),
100: dict(prompt='Ion nào thường tích lũy với lượng lớn trong tế bào bảo vệ, góp phần hút nước và mở khí khổng?',wrong=['Fe²⁺','Mg²⁺','Cu²⁺']),
119: dict(wrong=['Bịt kín miệng mạch gỗ để ngăn nước đi vào','Làm cành đã cắt tạo áp suất rễ lớn hơn','Ngăn hoàn toàn thoát hơi nước qua lá']),
124: dict(prompt='Khi chậu quá nhỏ và đã đầy rễ, giới hạn nào không được khắc phục chỉ bằng bón thêm phân?',correct='Không gian để bộ rễ phát triển',wrong=['Lượng nitrogen có thể bổ sung','Lượng potassium có thể bổ sung','Lượng phosphorus có thể bổ sung'],explanation='Phân bón bổ sung dinh dưỡng, không làm chậu rộng hơn. Rễ chật còn khiến việc quản lí nước và dinh dưỡng khó hơn.'),
128: dict(wrong=['Nước trong đất được rễ hút trực tiếp','Ion khoáng được rễ hấp thụ từ đất','CO₂ từ không khí khuếch tán vào lá'])}
for x in NEW:
 if x['number'] in _refine:x.update(_refine[x['number']])
