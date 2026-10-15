/* Vietnamese text for the product pages, one entry per product slug.
   Same shape as products-data.js: every list has the same number of entries as the English one,
   and sections match the English sections one for one. A list that does not match is ignored and the
   English shows instead, so a half-finished edit never shows wrong content.
   Product names, links, kind and audience are not here (names stay as on Gumroad).
   {price} and {was} stand for the product's current prices.
   Plain text only. No dashes in the copy, same as the English. */
window.I18N_PRODUCTS = window.I18N_PRODUCTS || {};
window.I18N_PRODUCTS.vi = {
  "winston-build-guide": {
    short: "Tự xây trợ lý AI trên máy Mac và điều khiển nó từ iPhone của bạn.",
    tagline: "Tự xây trợ lý AI trên máy Mac và điều khiển nó từ iPhone của bạn. Một cuốn hướng dẫn 9 chương, toàn bộ mã nguồn và danh sách kiểm tra thiết lập.",
    card: "Cuốn hướng dẫn 9 chương cùng toàn bộ mã nguồn để bạn tự xây trợ lý AI trên máy Mac. Nó gửi bản tin buổi sáng, xử lý email và nhận lệnh từ iPhone của bạn, chi phí vận hành khoảng $8 mỗi tháng.",
    row: "Tự xây trợ lý AI trên máy Mac và điều khiển nó từ iPhone của bạn: hướng dẫn 9 chương, toàn bộ mã nguồn và danh sách kiểm tra thiết lập.",
    intro: [
      "Winston là trợ lý AI mà tôi đã xây để lo công việc hành chính của chính mình. Nó gửi bản tin buổi sáng, đọc và trả lời email, tìm tệp trên máy Mac của tôi và nhận lệnh từ iPhone, suốt ngày đêm.",
      "Tôi xây nó trong khoảng hai tuần, song song với công việc toàn thời gian. Cuốn hướng dẫn này chỉ ra chính xác cách làm: từng bước, từng lỗi tôi gặp và từng cách sửa. Nội dung được viết cho những người không phải lập trình viên."
    ],
    sections: [
      {
        h: "Bạn nhận được gì",
        list: [
          "Cuốn hướng dẫn 9 chương (PDF) đưa bạn từ con số không đến một trợ lý chạy hoàn chỉnh. Nội dung gồm thiết lập, bộ nhớ, email, điều khiển máy Mac, lệnh bằng giọng nói, tìm tệp và bản tin buổi sáng.",
          "Toàn bộ mã nguồn (ZIP): 6 tệp Python dùng ngay. Điền token của bạn và chạy một lệnh.",
          "Danh sách kiểm tra thiết lập nhanh, để bạn xác nhận từng bước đã chạy ổn trước khi sang bước tiếp theo.",
          "Bảng tra lệnh Winston: mọi lệnh Winston hiểu, gói gọn trong một trang."
        ]
      },
      {
        h: "Winston làm được gì",
        list: [
          "Gửi bản tin buổi sáng lúc 7 giờ với thời tiết, lịch và các tiêu đề tin tức",
          "Đọc, tóm tắt và trả lời Gmail của bạn",
          "Tìm bất kỳ tệp nào trên máy Mac hoặc ổ đĩa ngoài",
          "Chụp màn hình và gửi về iPhone của bạn",
          "Mở ứng dụng, tìm kiếm Google và gửi iMessage",
          "Ghi nhớ sở thích, thói quen và bối cảnh công việc của bạn",
          "Chạy 24/7 và tự khởi động lại nếu bị treo"
        ]
      },
      {
        h: "Dành cho ai",
        list: [
          "Người dùng Mac và iPhone",
          "Người không phải lập trình viên: không cần kinh nghiệm viết code",
          "Bất kỳ ai muốn một trợ lý thực sự làm được việc",
          "Những người sẵn sàng dành vài buổi tối để thiết lập"
        ],
        notH: "Không dành cho",
        notList: [
          "Người dùng Windows",
          "Bất kỳ ai muốn một sản phẩm cắm là chạy, không cần thiết lập"
        ]
      },
      {
        h: "Hãy chuẩn bị gặp vài lỗi",
        p: [
          "Đến một lúc nào đó sẽ có thứ không chạy. Cuốn hướng dẫn nêu các lỗi phổ biến nhất và cách sửa chính xác, vì tôi đã gặp từng lỗi một trong số đó."
        ]
      }
    ],
    facts: [
      ["Định dạng", "Hướng dẫn PDF và mã Python (ZIP)"],
      ["Chạy trên", "Mac và iPhone"],
      ["Thời gian thiết lập", "4 đến 6 giờ, trải qua 2 hoặc 3 buổi tối"],
      ["Chi phí vận hành", "Khoảng $8 mỗi tháng (Claude API)"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "deskmate": {
    short: "Bot Telegram trả lời câu hỏi của nhân viên dựa trên tài liệu chính sách của bạn.",
    tagline: "Bot Telegram trả lời câu hỏi của nhân viên dựa trên chính tài liệu chính sách của bạn, và cho họ biết nó đã dùng tài liệu nào.",
    card: "Bot Telegram trả lời câu hỏi của nhân viên dựa trên chính tài liệu chính sách của bạn. Triển khai một cú nhấp trên Railway, mỗi doanh nghiệp một bản triển khai riêng, và không cần thiết lập cơ sở dữ liệu vector.",
    row: "Bot Telegram trả lời câu hỏi của nhân viên dựa trên chính tài liệu chính sách của bạn. Triển khai một cú nhấp trên Railway, mỗi doanh nghiệp một bản triển khai riêng.",
    intro: [
      "Nhân viên của bạn có những câu hỏi về nghỉ phép, giờ nghỉ, hoàn tiền và lịch làm việc. Câu trả lời nằm trong sổ tay nhân viên, nhưng chẳng ai đọc sổ tay, nên họ hỏi bạn.",
      "Deskmate là một bot Telegram dành cho một công ty. Bạn tải tài liệu chính sách lên, và đội của bạn đặt câu hỏi cho nó qua tin nhắn riêng hoặc trong nhóm chat của bạn."
    ],
    sections: [
      {
        h: "Mỗi câu trả lời trông như thế nào",
        p: ["Mỗi câu trả lời đều gồm bốn dòng giống nhau."],
        pairs: [
          ["Trả lời", "Chính câu trả lời. Nếu câu hỏi là dạng có hoặc không, câu trả lời bắt đầu bằng Có hoặc Không."],
          ["Nguồn", "Tài liệu và phần mà câu trả lời lấy từ đó."],
          ["Kiểm tra xung đột", "Có hai tài liệu nào của bạn mâu thuẫn nhau hay không, ví dụ chính sách hoàn tiền cũ và mới."],
          ["Hiệu lực", "Tài liệu đó có hiệu lực từ khi nào."]
        ],
        after: "Nếu câu trả lời không có trong tài liệu của bạn, Deskmate sẽ nói rõ và bảo nhân viên hỏi quản lý. Nó không đoán mò."
      },
      {
        h: "Thiết lập không cần viết code",
        steps: [
          "Tạo một bot Telegram bằng @BotFather.",
          "Lấy một khóa API của Anthropic.",
          "Nhấp nút Deploy on Railway và dán vào năm giá trị, trong đó có khóa bản quyền của bạn.",
          "Gửi tài liệu của bạn cho bot. Nó nhận các tệp .md, .txt, .docx và .pdf, mỗi tệp tối đa 10 MB."
        ],
        after: "Sản phẩm có sẵn tài liệu mẫu, nên bạn có thể thử trước khi tải tài liệu của mình lên. Hướng dẫn thiết lập được viết cho những chủ doanh nghiệp chưa từng dùng cửa sổ dòng lệnh."
      },
      {
        h: "Dữ liệu của bạn nằm ở đâu",
        p: [
          "Mọi thứ chạy trong dự án Railway của chính bạn, dùng khóa API Anthropic của chính bạn. Tài liệu của bạn nằm trong kho lưu trữ của dự án và không được gửi cho tôi.",
          "Để trả lời một câu hỏi, bot gửi câu hỏi đó cùng với tài liệu của bạn đến API của Anthropic, dưới khóa của chính bạn."
        ]
      },
      {
        h: "Được xây để chạy bền",
        list: [
          "Nó tự khởi động lại nếu mất kết nối với Telegram trong vài phút.",
          "Bạn có thể kết nối một lượt kiểm tra healthchecks.io miễn phí để nhận cảnh báo nếu bot dừng.",
          "Chỉ bạn mới có thể tải lên hoặc xóa tài liệu. Sau mỗi lần tải lên, nó cho bạn biết thư viện của bạn lớn cỡ nào và mỗi câu hỏi hiện tốn khoảng bao nhiêu.",
          "Trong nhóm, nó chỉ đọc những tin nhắn gửi cho nó (/ask, hoặc trả lời một câu trả lời của nó). Phần còn lại của cuộc trò chuyện nhóm không bao giờ đến được nó."
        ]
      },
      {
        h: "Khóa bản quyền của bạn",
        p: [
          "Mỗi lần mua đều đi kèm một khóa bản quyền. Bạn sẽ thấy nó ở trang hiện ra ngay sau khi mua, và trong email biên nhận. Bạn dán nó vào khi triển khai."
        ],
        list: [
          "Một khóa dùng được cho tối đa 3 lần thiết lập. Khởi động lại hoặc triển khai lại cùng một bot không tính là dùng thêm một lần.",
          "Bot kiểm tra khóa của bạn với Gumroad khi khởi động và khoảng một lần mỗi ngày.",
          "Nếu một giao dịch mua bị hoàn tiền hoặc bị khiếu nại, bot sẽ ngừng trả lời.",
          "Nếu không kết nối được với Gumroad trong một lúc, bot đang chạy vẫn tiếp tục hoạt động.",
          "Nếu bạn cần hơn 3 lần thiết lập, hãy gửi email cho bộ phận hỗ trợ và số lần sẽ được đặt lại."
        ]
      },
      {
        h: "Chi phí vận hành",
        p: ["Bạn trả trực tiếp cho Railway và Anthropic."],
        list: [
          "Gói Railway Hobby: US$5 mỗi tháng. Đây là khoản bắt buộc.",
          "Anthropic: mỗi câu hỏi đều gửi kèm tài liệu của bạn, nên chi phí tăng theo lượng tài liệu bạn tải lên. Với tài liệu mẫu, một câu hỏi tốn khoảng US$0.02. Với 50.000 từ tài liệu, con số này là khoảng US$0.30.",
          "Một câu hỏi được đặt trong vòng năm phút sau câu hỏi trước tốn khoảng một phần mười số đó."
        ]
      },
      {
        h: "Bạn nhận được gì",
        list: [
          "Một bot chính sách hoạt động ngay trong tài khoản Railway của bạn, triển khai từ mẫu Railway một cú nhấp",
          "Hướng dẫn thiết lập từng bước (PDF)",
          "Hướng dẫn chuẩn bị tài liệu (PDF) và một mẫu chính sách dùng ngay",
          "Các hướng dẫn PDF của bạn được đóng dấu địa chỉ email của bạn. Chúng có thể mất vài phút để hoàn tất, và bạn sẽ nhận liên kết tải xuống qua email",
          "8 tài liệu chính sách mẫu, để bạn thử trước khi tải tài liệu của mình lên",
          "Hỗ trợ qua email, phản hồi trong vòng 2 ngày",
          "Hoàn tiền đầy đủ trong 14 ngày nếu bạn không triển khai được sau khi liên hệ bộ phận hỗ trợ"
        ],
        after: "Việc hoàn tiền không ảnh hưởng đến quyền lợi của bạn theo Luật Người tiêu dùng Úc (Australian Consumer Law)."
      }
    ],
    facts: [
      ["Hình thức giao", "Một bot trong tài khoản Railway của chính bạn"],
      ["Tài liệu", "Tệp .md, .txt, .docx và .pdf, mỗi tệp tối đa 10 MB"],
      ["Thiết lập", "Không cần viết code. Dán vào năm giá trị"],
      ["Chi phí vận hành", "Railway US$5 mỗi tháng cộng chi phí sử dụng Anthropic"],
      ["Hỗ trợ", "Email, phản hồi trong vòng 2 ngày"],
      ["Hoàn tiền", "14 ngày nếu bạn không triển khai được"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán. Khóa bản quyền của bạn hiện ra ngay sau khi mua."
    }
  },

  "sme-security-starter-kit": {
    short: "Bốn mẫu tài liệu bảo mật cho doanh nghiệp nhỏ, gói trong một bộ.",
    tagline: "Bốn mẫu tài liệu bảo mật dùng ngay cho doanh nghiệp nhỏ, gói trong một bộ.",
    card: "Bốn mẫu tài liệu bảo mật thiết thực trong một bộ: bộ poster nâng cao nhận thức bảo mật, runbook ứng phó sự cố, danh sách kiểm tra IT khi nhân viên vào làm và khi nghỉ việc, và ma trận đánh giá rủi ro nhà cung cấp. Mua cùng nhau sẽ rẻ hơn mua lẻ từng cái.",
    row: "Bốn mẫu trong một bộ: bộ poster nâng cao nhận thức bảo mật, runbook ứng phó sự cố, danh sách kiểm tra IT khi nhân viên vào làm và khi nghỉ việc, và ma trận đánh giá rủi ro nhà cung cấp. Mua cùng nhau sẽ rẻ hơn mua lẻ từng cái.",
    intro: [
      "Bốn mẫu tài liệu dùng ngay, bao quát những điều cơ bản về bảo mật cho một doanh nghiệp nhỏ: ai được truy cập vào cái gì, phải làm gì khi có sự cố, các nhà cung cấp của bạn an toàn đến đâu, và làm sao giữ cho đội ngũ của bạn luôn cảnh giác.",
      "Mua cùng nhau sẽ rẻ hơn mua lẻ từng cái."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        items: [
          { blurb: "Danh sách kiểm tra ứng phó sự cố, hướng dẫn tra nhanh cho 5 loại sự cố thường gặp, hướng dẫn phân loại mức độ nghiêm trọng, danh sách liên hệ chính, nhật ký sự cố và ba biểu mẫu ghi chép đi kèm (Word)." },
          { blurb: "Danh sách kiểm tra khi nhân viên vào làm và khi nghỉ việc, ma trận quyền truy cập theo vai trò, nhật ký xác nhận hoàn tất và hai biểu mẫu ghi chép đi kèm (Word)." },
          { blurb: "Sổ đăng ký nhà cung cấp, ma trận đánh giá 30 câu hỏi, bảng điều khiển có bản đồ nhiệt rủi ro và hướng dẫn chấm điểm, cùng các biểu mẫu Word cho bảng câu hỏi, phê duyệt và chấm dứt hợp tác (Excel và Word)." },
          { blurb: "12 poster sẵn sàng để in cho khổ A4 và US Letter, tệp PowerPoint chỉnh sửa được, 12 ảnh PNG và hướng dẫn triển khai bằng Word kèm kế hoạch 12 tháng (PDF, PowerPoint, PNG và Word)." }
        ],
        after: "Mỗi mẫu cũng được bán riêng."
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ, quản lý văn phòng và người phụ trách IT muốn thiết lập những điều cơ bản về bảo mật mà không cần thuê chuyên gia tư vấn."]
      },
      {
        h: "Định dạng",
        p: ["Các tệp Word (.docx), Excel (.xlsx) và PowerPoint (.pptx) chỉnh sửa được, cùng PDF sẵn sàng để in và ảnh PNG. Dùng được trong Microsoft Office và LibreOffice. Không có macro, không cần tiện ích bổ sung và không cần tài khoản."]
      }
    ],
    facts: [
      ["Bao gồm", "4 mẫu"],
      ["Mua riêng lẻ", "{was}"],
      ["Định dạng", "Word, Excel, PowerPoint, PDF và PNG"],
      ["Dùng được trong", "Microsoft Office và LibreOffice"],
      ["Thiết lập", "Không macro, không tiện ích bổ sung, không cần tài khoản"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "sme-security-incident-response-runbook": {
    short: "Kế hoạch dùng ngay để xử lý một sự cố bảo mật.",
    tagline: "Một quy trình dùng ngay để phát hiện, ngăn chặn và khôi phục sau sự cố bảo mật, cùng giấy tờ chứng minh bạn đã xử lý đúng cách.",
    row: "Kế hoạch dùng ngay để phát hiện, ngăn chặn và khôi phục sau sự cố bảo mật, cùng các biểu mẫu để ghi lại. Tài liệu Word chỉnh sửa được.",
    intro: [
      "Khi có chuyện xảy ra, điều cuối cùng bạn muốn là vừa làm vừa nghĩ cách ứng phó. Mẫu này cung cấp các bước cần làm và các hồ sơ cần lưu."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "Danh sách kiểm tra ứng phó sự cố, gồm phát hiện và ngăn chặn, loại bỏ và khôi phục, thông báo và rà soát",
          "Hướng dẫn tra nhanh sự cố, với các hành động bước đầu cho 5 loại sự cố thường gặp: lừa đảo qua email (phishing), mã độc tống tiền (ransomware), thiết bị bị mất hoặc bị đánh cắp, tài khoản bị xâm nhập và nghi ngờ rò rỉ dữ liệu",
          "Hướng dẫn phân loại mức độ nghiêm trọng để phân loại sự cố nhanh",
          "Danh sách liên hệ chính và chuyển cấp xử lý mà bạn có thể điền sẵn trước khi cần đến",
          "Nhật ký sự cố để theo dõi từng sự cố với ngày tháng và kết quả",
          "Ba biểu mẫu ghi chép đi kèm cho hồ sơ của bạn: Biểu mẫu báo cáo sự cố, Biểu mẫu rà soát sau sự cố và Mẫu email thông báo"
        ]
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ và quản lý văn phòng cần một kế hoạch ứng phó sự cố rõ ràng mà không phải thuê chuyên gia tư vấn bảo mật."]
      },
      {
        h: "Định dạng",
        p: ["Một tài liệu Word (.docx) chỉnh sửa được. Dùng được trong Microsoft Word, Google Docs và LibreOffice. Không cần phần mềm đặc biệt hay tài khoản."]
      }
    ],
    facts: [
      ["Định dạng", "Tài liệu Word (.docx)"],
      ["Dùng được trong", "Word, Google Docs, LibreOffice"],
      ["Bao quát", "Lừa đảo qua email, mã độc tống tiền, thiết bị bị mất, tài khoản bị xâm nhập, rò rỉ dữ liệu"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "sme-it-onboarding-offboarding-checklist": {
    short: "Cấp quyền truy cập cho nhân viên mới một cách an toàn và thu hồi gọn gàng khi họ rời đi.",
    tagline: "Một quy trình đầy đủ để đưa nhân viên mới vào làm một cách an toàn và thu hồi sạch quyền truy cập khi họ nghỉ việc.",
    row: "Cấp quyền truy cập cho nhân viên mới một cách an toàn và thu hồi gọn gàng khi họ rời đi. Có ma trận quyền truy cập, nhật ký xác nhận hoàn tất và các biểu mẫu nhân sự. Tài liệu Word chỉnh sửa được.",
    intro: [
      "Đừng để mất dấu ai vẫn còn quyền truy cập sau khi một nhân viên rời đi. Mẫu này cho bạn một quy trình in ra hoặc điền trực tiếp, để đưa nhân viên mới vào làm một cách an toàn và thu hồi quyền truy cập khi họ nghỉ việc."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "Danh sách kiểm tra khi nhân viên vào làm, gồm trước ngày đầu tiên, ngày đầu tiên và tuần đầu tiên",
          "Danh sách kiểm tra khi nhân viên nghỉ việc, gồm trước ngày làm cuối, ngày làm cuối và sau ngày làm cuối",
          "Ma trận quyền truy cập theo vai trò mà bạn có thể tùy chỉnh cho đội ngũ của mình",
          "Nhật ký xác nhận hoàn tất để theo dõi từng hành động với ngày tháng và chữ ký tắt",
          "Hai biểu mẫu ghi chép đi kèm cho hồ sơ nhân sự của bạn: Thiết lập IT cho nhân viên mới và Nghỉ việc của nhân viên"
        ]
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ và quản lý văn phòng cần một hệ thống đơn giản mà không phải thuê chuyên gia tư vấn IT."]
      },
      {
        h: "Định dạng",
        p: ["Một tài liệu Word (.docx) chỉnh sửa được. Dùng được trong Microsoft Word, Google Docs và LibreOffice. Không cần phần mềm đặc biệt hay tài khoản."]
      }
    ],
    facts: [
      ["Định dạng", "Tài liệu Word (.docx)"],
      ["Dùng được trong", "Word, Google Docs, LibreOffice"],
      ["Phù hợp nhất với", "Doanh nghiệp nhỏ và quản lý văn phòng"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "sme-vendor-risk-assessment-matrix": {
    short: "Liệt kê nhà cung cấp, chấm điểm rủi ro và quyết định cần làm gì với từng nhà cung cấp.",
    tagline: "Một cách đơn giản để liệt kê mọi nhà cung cấp, chấm điểm rủi ro và quyết định cần làm gì với từng nhà cung cấp.",
    row: "Liệt kê tối đa 30 nhà cung cấp, tự động chấm điểm rủi ro và xem nhà cung cấp nào cần xử lý trước. Sổ tính Excel kèm các biểu mẫu Word.",
    intro: [
      "Doanh nghiệp của bạn phụ thuộc vào những nhà cung cấp mà có thể bạn chưa bao giờ kiểm tra: phần mềm kế toán, đơn vị trả lương, công ty hỗ trợ IT, nhà cung cấp lưu trữ web. Nếu một trong số họ bị xâm nhập hoặc gián đoạn kéo dài, vấn đề sẽ trở thành của bạn.",
      "Bộ này cho bạn một cách đơn giản để liệt kê mọi nhà cung cấp, chấm điểm rủi ro và quyết định cần làm gì với từng nhà cung cấp, mà không cần thuê chuyên gia tư vấn bảo mật."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "Sổ đăng ký nhà cung cấp cho tối đa 30 nhà cung cấp, có danh sách thả xuống và mức rủi ro tự động (Thấp, Trung bình, Cao hoặc Nghiêm trọng) cho từng nhà cung cấp",
          "Ma trận đánh giá với 30 câu hỏi bảo mật bằng ngôn ngữ dễ hiểu cho mỗi nhà cung cấp, tự động chấm điểm (Có, Một phần, Không hoặc Không áp dụng)",
          "Bảng điều khiển có bản đồ nhiệt rủi ro, danh sách top 10 nhà cung cấp cần xử lý trước, và cảnh báo cho các lần rà soát quá hạn và hợp đồng sắp hết hạn",
          "Hướng dẫn chấm điểm, nơi bạn có thể thay đổi trọng số, các mức, dải điểm và chu kỳ rà soát cho phù hợp với doanh nghiệp của mình",
          "Một tệp ví dụ hoàn chỉnh với 10 nhà cung cấp giả định, để bạn thấy mọi thứ khớp với nhau như thế nào",
          "Bảng câu hỏi bảo mật nhà cung cấp mà bạn có thể gửi cho các nhà cung cấp (Word)",
          "Biểu mẫu đánh giá và phê duyệt nhà cung cấp, danh sách kiểm tra hợp đồng và bảo vệ dữ liệu, danh sách kiểm tra khi chấm dứt hợp tác với nhà cung cấp và bảng thuật ngữ dễ hiểu (Word)"
        ]
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ, quản lý văn phòng và người phụ trách IT cần một cách rõ ràng, lặp lại được để kiểm tra các nhà cung cấp của mình."]
      },
      {
        h: "Định dạng",
        p: ["Một sổ tính Excel (.xlsx) chỉnh sửa được cùng một tài liệu Word (.docx) chỉnh sửa được. Dùng được trong Microsoft Excel, Microsoft Word và LibreOffice. Chỉ dùng công thức chuẩn: không macro, không tiện ích bổ sung và không cần tài khoản."]
      }
    ],
    facts: [
      ["Định dạng", "Sổ tính Excel (.xlsx) và tài liệu Word (.docx)"],
      ["Sức chứa", "Tối đa 30 nhà cung cấp"],
      ["Dùng được trong", "Excel, Word, LibreOffice"],
      ["Thiết lập", "Không macro, không tiện ích bổ sung, không cần tài khoản"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "sme-security-awareness-poster-pack": {
    short: "12 poster bảo mật sẵn sàng để in, mỗi tháng một poster trong năm.",
    tagline: "12 poster nâng cao nhận thức bảo mật sẵn sàng để in, mỗi tháng một poster trong năm, viết bằng ngôn ngữ dễ hiểu cho các nhóm không có bộ phận bảo mật.",
    row: "12 poster bảo mật sẵn sàng để in, mỗi tháng một poster trong năm, viết bằng ngôn ngữ dễ hiểu. Tệp PDF, PowerPoint và PNG kèm hướng dẫn triển khai bằng Word.",
    intro: [
      "Phần lớn vấn đề bảo mật bắt đầu từ một khoảnh khắc rất bình thường: một cú nhấp vội, một mật khẩu dùng lại, một chiếc laptop để quên không khóa. Một tấm poster đặt đúng chỗ là lời nhắc rẻ tiền và đều đặn.",
      "Bộ này cho bạn 12 poster sẵn sàng để in, mỗi tháng một poster trong năm, viết bằng ngôn ngữ dễ hiểu cho các nhóm không có bộ phận bảo mật."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "12 poster về lừa đảo qua email (phishing), mật khẩu, xác thực đa yếu tố, khóa màn hình, cập nhật phần mềm, gian lận thanh toán, công cụ AI, xử lý dữ liệu, Wi-Fi và làm việc ngoài văn phòng, thiết bị USB, an ninh văn phòng và báo cáo sự cố",
          "Tệp PDF sẵn sàng để in cho giấy A4 và US Letter, mỗi trang một poster",
          "Tệp PowerPoint chỉnh sửa được cho A4 và US Letter, để bạn thêm thông tin liên hệ và logo của riêng mình, hoặc đổi bất kỳ câu chữ nào",
          "12 ảnh PNG để gửi trong nhóm chat của nhân viên, email hoặc mạng nội bộ",
          "Hướng dẫn triển khai (Word) với mẹo in ấn, kế hoạch 12 tháng, nơi đặt từng poster, một câu hỏi hai phút cho đội của bạn mỗi tháng, danh sách kiểm tra khi khởi động và nhật ký hoạt động mà bạn có thể đưa cho công ty bảo hiểm và kiểm toán viên xem"
        ]
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ, quản lý văn phòng và người phụ trách IT muốn có một cách đơn giản để giữ bảo mật luôn trong tâm trí mọi người, suốt cả năm."]
      },
      {
        h: "Định dạng",
        p: ["Tệp PDF sẵn sàng để in (A4 và US Letter), tệp PowerPoint (.pptx) chỉnh sửa được, ảnh PNG và hướng dẫn Word (.docx). Các tệp chỉnh sửa được dùng được trong Microsoft PowerPoint, Keynote, Google Slides và LibreOffice."]
      }
    ],
    facts: [
      ["Poster", "12, mỗi tháng một poster"],
      ["Khổ giấy", "A4 và US Letter"],
      ["Định dạng", "PDF, PowerPoint (.pptx), PNG và hướng dẫn Word (.docx)"],
      ["Dùng được trong", "PowerPoint, Keynote, Google Slides, LibreOffice"],
      ["Phù hợp nhất với", "Doanh nghiệp nhỏ và quản lý văn phòng"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "math-kingdom": {
    short: "Game thủ thành bằng toán học chạy ngay trên trình duyệt.",
    tagline: "Game thủ thành bằng toán học chạy ngay trên trình duyệt của bạn. Mở trang và chơi.",
    row: "Game thủ thành bằng toán học chạy ngay trên trình duyệt. Mở trang và chơi.",
    intro: [
      "Math Kingdom chạy ngay trên trình duyệt, nên không cần cài đặt gì và không cần tạo tài khoản. Chính con trai tôi đã chơi thử nó."
    ],
    sections: [
      {
        h: "Cách chơi",
        list: [
          "Chọn một thế giới, rồi chọn một màn chơi.",
          "Trả lời từng câu hỏi toán trên bàn phím số hiển thị trên màn hình.",
          "Bạn có ba mạng, cùng bộ đếm chuỗi thắng và điểm số để theo dõi bạn đang chơi thế nào.",
          "Chơi bằng tiếng Anh hoặc tiếng Việt."
        ]
      },
      {
        h: "Được xây bằng",
        p: ["Một tệp HTML với JavaScript thuần và Canvas. Không dùng framework và không có thư viện phụ thuộc. Game được lưu trữ trên GitHub Pages."]
      }
    ],
    facts: [
      ["Giá", "Miễn phí"],
      ["Nền tảng", "Mọi trình duyệt hiện đại"],
      ["Ngôn ngữ", "Tiếng Anh và tiếng Việt"],
      ["Cài đặt", "Không cần"]
    ],
    cta: {
      label: "Chơi Math Kingdom",
      rowLabel: "Chơi",
      note: "Mở game trong một tab mới."
    }
  }
};
