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
  },

  "kokos-quest": {
    short: "Game nền tảng luyện đọc viết xây dựng theo chương trình NAPLAN.",
    tagline: "Game nền tảng luyện đọc viết chạy ngay trên trình duyệt của bạn, xây dựng theo chương trình NAPLAN. Mở trang và chơi.",
    row: "Game nền tảng luyện đọc viết xây dựng theo chương trình NAPLAN. Mở trang và chơi.",
    intro: [
      "Koko's Quest chạy ngay trên trình duyệt, nên không cần cài đặt gì và không cần tạo tài khoản. Dẫn chú khỉ Koko băng qua khu rừng, trả lời các câu hỏi chính tả và ngữ pháp để mở cửa và nhặt chuối trên đường đi."
    ],
    sections: [
      {
        h: "Cách chơi",
        list: [
          "Chọn một mức độ khó cho độ tuổi 6 đến 8, 8 đến 10, hoặc 10 đến 12.",
          "Trả lời các câu hỏi chính tả và ngữ pháp để mở cửa và tiếp tục di chuyển.",
          "Nhặt chuối và tránh gai nhọn trên đường qua từng thế giới.",
          "Câu hỏi bám sát bài kiểm tra đọc viết NAPLAN của Úc."
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
      ["Ngôn ngữ", "Tiếng Anh"],
      ["Cài đặt", "Không cần"]
    ],
    cta: {
      label: "Chơi Koko's Quest",
      rowLabel: "Chơi",
      note: "Mở game trong một tab mới."
    }
  },

  "sme-ai-usage-policy-tool-vetting-kit": {
    short: "Chính sách sử dụng AI bằng ngôn ngữ dễ hiểu, danh sách kiểm tra công cụ AI và các biểu mẫu để triển khai.",
    tagline: "Chính sách sử dụng AI bằng ngôn ngữ dễ hiểu, một cách kiểm tra mọi công cụ AI trước khi phê duyệt, cùng các biểu mẫu và câu chữ để triển khai toàn bộ.",
    row: "Chính sách sử dụng AI bằng ngôn ngữ dễ hiểu, danh sách kiểm tra công cụ AI và các biểu mẫu để triển khai, thiết lập trong khoảng nửa ngày. Tệp Word và Excel chỉnh sửa được.",
    intro: [
      "Đội của bạn có lẽ đã dùng công cụ AI để viết email, tóm tắt cuộc họp và soạn tài liệu. Khi chưa có quy định rõ ràng, rất dễ để ai đó dán thông tin khách hàng, hợp đồng hay mật khẩu vào một công cụ chưa bao giờ được thiết kế để giữ những thứ đó.",
      "Bộ này cho bạn một chính sách sử dụng AI bằng ngôn ngữ dễ hiểu, một cách kiểm tra mọi công cụ AI trước khi phê duyệt, cùng các biểu mẫu và câu chữ để triển khai toàn bộ. Bạn có thể thiết lập xong trong khoảng nửa ngày, không cần thuê tư vấn.",
      "Chỉ có chính sách thôi là chưa đủ. Mọi người còn cần biết công cụ nào đã được duyệt, một công cụ mới được duyệt ra sao, và phải làm gì khi có sự cố. Bộ này bao gồm cả ba phần đó."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "Chính sách sử dụng AI (Word): 27 quy tắc đánh số bằng ngôn ngữ dễ hiểu, bảng màu hướng dẫn (Xanh lá, Vàng, Đỏ và Không bao giờ) cho những gì được phép đưa vào công cụ AI, ví dụ thực tế hằng ngày, và một trang hướng dẫn nhanh cho nhân viên",
          "Danh sách kiểm tra công cụ AI (Word): 6 câu hỏi cổng và 35 mục kiểm tra chi tiết để quyết định một công cụ có được dùng hay không, kèm các dấu hiệu cảnh báo cần chú ý, một bản ghi quyết định và một sổ đăng ký có thể in",
          "Biểu mẫu và câu chữ AI (Word): biểu mẫu Xác nhận của nhân viên, Yêu cầu dùng công cụ AI và Báo cáo sự cố AI, một buổi họp nhóm 20 phút với 8 tình huống, cùng câu chữ có sẵn để dùng cho nhân viên, khách hàng và nhà cung cấp AI",
          "Sổ đăng ký công cụ AI đã duyệt (Excel): danh sách công cụ đã duyệt đang dùng, có danh sách thả xuống, ngày rà soát lại được tính sẵn, tô màu cho công cụ sắp đến hạn hoặc quá hạn, và nhật ký các trường hợp ngoại lệ đã duyệt",
          "Hướng dẫn bắt đầu (Word): thiết lập mọi thứ trong năm bước, kèm danh sách các mục có thể tùy chỉnh ở một chỗ",
          "Ví dụ hoàn chỉnh (Word), phần thưởng thêm: một công cụ AI giả định đi từ bước yêu cầu đến khi vào sổ đăng ký, với mọi biểu mẫu, mục kiểm tra và bản ghi đã điền sẵn, để bạn thấy thành quả hoàn chỉnh trông như thế nào"
        ]
      },
      {
        h: "Cách thực hiện",
        steps: [
          "Điền tên công ty, người phụ trách bảo mật và chủ doanh nghiệp của bạn.",
          "Tìm hiểu xem nhân viên của bạn đang dùng những công cụ AI nào.",
          "Kiểm tra các công cụ dùng nhiều nhất bằng danh sách kiểm tra, dùng ví dụ hoàn chỉnh làm mẫu, rồi thêm những công cụ đạt vào sổ đăng ký.",
          "Ban hành chính sách và tổ chức buổi họp nhóm 20 phút.",
          "Đặt hướng dẫn nhanh ở nơi mọi người dễ thấy, và đặt hai lời nhắc rà soát lại."
        ]
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ, quản lý văn phòng và người phụ trách IT muốn có một cách rõ ràng, lặp lại được để dùng AI an toàn tại nơi làm việc. Không gắn với bất kỳ sản phẩm AI nào, nên vẫn hữu ích khi công cụ thay đổi: bộ này đặt câu hỏi thay vì chấm điểm sản phẩm, để bạn tự quyết định điều gì an toàn cho doanh nghiệp của mình."]
      },
      {
        h: "Định dạng",
        p: ["Bốn tài liệu Word (.docx) chỉnh sửa được cùng một sổ tính Excel (.xlsx) chỉnh sửa được, và một ví dụ hoàn chỉnh (.docx) tặng kèm. Dùng được trong Microsoft Word, Microsoft Excel và LibreOffice. Chỉ dùng công thức chuẩn: không macro, không tiện ích bổ sung và không cần tài khoản."]
      },
      {
        h: "Cần biết thêm",
        p: ["Đây là hướng dẫn chung, không phải tư vấn pháp lý. Luật về quyền riêng tư, lao động và ghi âm khác nhau theo quốc gia, bang và ngành nghề, vì vậy hãy kiểm tra quy định áp dụng ở nơi bạn hoạt động. Dùng cho doanh nghiệp của riêng bạn: vui lòng không bán lại hay chia sẻ các tệp này."]
      }
    ],
    facts: [
      ["Định dạng", "4 tài liệu Word (.docx) và 1 sổ tính Excel (.xlsx)"],
      ["Dùng được trong", "Word, Excel, LibreOffice"],
      ["Thời gian thiết lập", "Khoảng nửa ngày"],
      ["Thiết lập", "Không macro, không tiện ích bổ sung, không cần tài khoản"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  },

  "sme-essential-eight-quick-start-kit": {
    short: "Essential Eight của ASD bằng ngôn ngữ dễ hiểu, kèm bảng tự đánh giá và kế hoạch 90 ngày.",
    tagline: "Essential Eight của Cơ quan Tín hiệu Úc (ASD) bằng ngôn ngữ dễ hiểu, kèm một sổ tính tự tính mức độ của bạn và kế hoạch 90 ngày để lấp các khoảng trống.",
    row: "Essential Eight bằng ngôn ngữ dễ hiểu cho Mức độ trưởng thành 1 và 2: sổ tính tự đánh giá, kế hoạch 90 ngày và câu chữ dành cho công ty bảo hiểm của bạn. Tệp Word và Excel chỉnh sửa được.",
    intro: [
      "Các công ty bảo hiểm an ninh mạng, khách hàng lớn và bên mua của chính phủ giờ đều hỏi doanh nghiệp nhỏ cùng một câu: bạn đang ở đâu so với Essential Eight? Hầu hết chủ doanh nghiệp chưa từng thấy danh sách này, và mô hình chính thức thì được viết cho chuyên gia.",
      "Bộ này chuyển Essential Eight của Cơ quan Tín hiệu Úc (mô hình tháng 11 năm 2023) sang ngôn ngữ dễ hiểu. Bạn có một sổ tính tự tính mức độ của bạn, một danh sách các khoảng trống theo thứ tự hợp lý, một kế hoạch 90 ngày, cùng câu chữ có sẵn cho công ty bảo hiểm, nhân viên và đơn vị hỗ trợ IT của bạn. Bạn có thể thiết lập xong trong khoảng nửa ngày, không cần thuê tư vấn.",
      "Bao gồm Mức độ trưởng thành 1 và Mức độ trưởng thành 2. Mức 1 là nơi ASD gợi ý doanh nghiệp nhỏ nên bắt đầu. Mức 2 là mức nhiều công ty bảo hiểm và khách hàng lớn yêu cầu. Mức 3 không nằm trong bộ này."
    ],
    sections: [
      {
        h: "Bên trong có gì",
        list: [
          "Hướng dẫn bắt đầu (Word): thiết lập mọi thứ trong năm bước, kèm danh sách các mục có thể tùy chỉnh ở một chỗ",
          "Hướng dẫn ngôn ngữ dễ hiểu (Word): cả tám biện pháp bảo vệ được giải thích ở Mức 1 và Mức 2, kèm lý do kẻ tấn công thích những khoảng trống này, các việc làm nhanh có hiệu quả, câu hỏi nên đặt cho đơn vị hỗ trợ IT, và bằng chứng cần lưu lại",
          "Sổ tính tự đánh giá (Excel): một bài Quét nhanh 10 câu hỏi, rồi 71 mục kiểm tra bằng ngôn ngữ dễ hiểu (39 cho Mức 1, 32 cho Mức 2). Sổ tự tính mức độ của bạn cho từng biện pháp và tổng thể, và liệt kê mọi khoảng trống theo thứ tự hợp lý",
          "Kế hoạch nâng cấp và bằng chứng (Word): kế hoạch 90 ngày, sổ ghi bằng chứng, vai trò, nhịp rà soát, biểu mẫu ngoại lệ và nhật ký đánh giá lại",
          "Câu chữ và câu hỏi (Word): chuẩn bị cho bảng câu hỏi của công ty bảo hiểm, câu hỏi cho đơn vị hỗ trợ IT, thông báo cho nhân viên, các dòng chính sách, câu chữ cho khách hàng và hồ sơ dự thầu, một thẻ sự cố một trang và một buổi họp nhóm 20 phút",
          "Ví dụ hoàn chỉnh (Word), phần thưởng thêm: một doanh nghiệp giả định đi từ những câu trả lời đầu tiên đến Mức 1 trong 90 ngày, với mọi biểu mẫu đã điền sẵn, để bạn thấy thành quả hoàn chỉnh trông như thế nào"
        ]
      },
      {
        h: "Cách thực hiện",
        steps: [
          "Điền tên công ty, người phụ trách bảo mật và chủ doanh nghiệp của bạn.",
          "Làm bài Quét nhanh 10 phút, rồi đọc hướng dẫn.",
          "Trả lời các mục kiểm tra cùng đơn vị hỗ trợ IT, dùng ví dụ hoàn chỉnh làm mẫu.",
          "Chép các khoảng trống đầu tiên vào kế hoạch 90 ngày và giao cho mỗi việc một người phụ trách và một ngày hoàn thành.",
          "Lưu bằng chứng cho mỗi câu trả lời Có, và chạy lại bài đánh giá mỗi quý."
        ],
        after: "Mức độ tổng thể của bạn là kết quả thấp nhất trong tám biện pháp bảo vệ, và sổ tính cho thấy điều này một cách trung thực, để bạn biết nên dồn sức vào đâu trước."
      },
      {
        h: "Dành cho ai",
        p: ["Chủ doanh nghiệp nhỏ, quản lý văn phòng và người phụ trách IT tại Úc muốn có một cách rõ ràng, lặp lại được để đạt và chứng minh Essential Eight Mức 1 hoặc Mức 2."]
      },
      {
        h: "Định dạng",
        p: ["Năm tài liệu Word (.docx) chỉnh sửa được và một sổ tính Excel (.xlsx) chỉnh sửa được. Dùng được trong Microsoft Word, Microsoft Excel và LibreOffice. Chỉ dùng công thức chuẩn: không macro, không tiện ích bổ sung và không cần tài khoản."]
      },
      {
        h: "Cần biết thêm",
        p: ["Đây là một hướng dẫn độc lập. Nó không liên kết với và không được Cơ quan Tín hiệu Úc hay Chính phủ Úc chứng nhận. Được viết theo mô hình mức độ trưởng thành Essential Eight tháng 11 năm 2023, vì vậy hãy xem cyber.gov.au nếu cần bản mới hơn. Tự đánh giá không phải là kiểm toán, và không có chứng chỉ Essential Eight. Đây là hướng dẫn chung, không phải tư vấn pháp lý. Dùng cho doanh nghiệp của riêng bạn: vui lòng không bán lại hay chia sẻ các tệp này."]
      }
    ],
    facts: [
      ["Định dạng", "5 tài liệu Word (.docx) và 1 sổ tính Excel (.xlsx)"],
      ["Dùng được trong", "Word, Excel, LibreOffice"],
      ["Bao gồm", "Essential Eight Mức độ trưởng thành 1 và 2"],
      ["Thời gian thiết lập", "Khoảng nửa ngày"],
      ["Thiết lập", "Không macro, không tiện ích bổ sung, không cần tài khoản"]
    ],
    cta: {
      label: "Mua trên Gumroad",
      note: "Gumroad xử lý thanh toán và tải xuống."
    }
  }
};
