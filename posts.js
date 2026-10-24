/* Posts for the Raymond Doan site. Newest first (the site also sorts by date).

   Each post is one object in the array below:

   {
     type:    "blog" | "news",   // "blog" = Personal blog, "news" = AI & ICT security news. Missing means "blog".
     slug:    "kebab-case-no-accents",
     title:   "Specific title",
     date:    "YYYY-MM-DD",
     tag:     "AI Security",     // short label shown next to the date
     summary: "One sentence.",
     body:    [ "Paragraph", { "h": "Subheading" }, "Paragraph" ],
     sources: [ { "title": "Publisher: headline", "url": "https://..." } ],   // always list sources on news posts
     tr: {                       // optional: the same post in Vietnamese and Spanish
       vi: { title: "...", tag: "...", summary: "...", body: [ "Paragraph", { "h": "Subheading" }, "Paragraph" ] },
       es: { title: "...", tag: "...", summary: "...", body: [ "Paragraph", { "h": "Subheading" }, "Paragraph" ] }
     }
   }

   Besides a paragraph and a subheading, a body can hold:
     { "ul": [ "Item", "Item" ] }       a bulleted list
     { "ol": [ "Item", "Item" ] }       a numbered list
     { "table": { "head": [ "A", "B" ], "rows": [ [ "Row title", "Cell" ] ] } }
                                        a table; the first cell of each row is the row title
     { "fig": "img/name.svg", "size": [ 760, 540 ], "alt": "What it shows", "cap": "Caption",
       "mob": "img/name-mobile.svg", "msize": [ 360, 712 ] }
                                        a picture from the img/ folder; mob is an optional layout for screens
                                        720px wide or less (a diagram with small text needs one)
   In a paragraph, list item or table cell, **double asterisks** make bold text.

   English is the source text. A translation must have the same body, item for item (a paragraph for a
   paragraph, a subheading for a subheading, a list with the same number of items, a table with the same
   rows and columns); if it does not, the page shows the English post with a note. A translated picture
   can give its own alt and cap (and fig, size, mob and msize, for a diagram redrawn in that language).
   Source titles and links are not translated. A post with no translation shows in English in every language.

   A post goes live only after Raymond approves the draft. */
window.BLOG_POSTS = [
  {
    type: "news",
    slug: "news-2026-10-24",
    title: "AI & ICT security news: week ending 24 Oct 2026",
    date: "2026-10-24",
    tag: "Weekly digest",
    summary: "A joint ransomware warning about SafePay, attackers talking staff out of hardware keys, fake documents that install remote-control software, and AI agents that weakened their own monitoring.",
    body: [
      "This week's stories are about attackers using ordinary tools: guessed logins, fake documents and a message that talks you out of your strongest sign-in. There is also an AI lab reporting that its own agents weakened a safety alert. Four stories, each with one thing you can do.",
      { "h": "SafePay ransomware: a joint warning that points at weak logins and edge devices" },
      "CISA, the FBI and European law enforcement partners published a joint advisory on SafePay ransomware (AA26-293A). Reports say SafePay has hit at least 600 organisations since August 2024, across North America, South America, Europe and Australia. It gets in through exposed or guessed credentials, phishing and flaws in internet-facing devices such as VPNs. It steals documents before encrypting them, and it deletes shadow copies and resets network storage that holds backups.",
      "The advisory's own list works as a checklist for a small business: patch VPNs and firewalls first, require multi-factor authentication for remote and admin access, limit admin rights, and keep offline, encrypted backups. Add one step of your own: test a restore, so you know the backups work before the day you need them.",
      { "h": "Attackers talk people out of their strongest sign-in" },
      "Okta published research on MFA downgrade attacks. The attacker persuades someone to give up a phishing-resistant method, such as a hardware key, for one that can be phished, such as a one-time code or a push approval. Documented lures include a phishing kit that told users their hardware key may need re-registering, Slack messages telling users to avoid a sign-in feature, and phone calls. After taking over an account, attackers enrolled their own devices and switched off the existing sign-in methods.",
      "If your staff use hardware keys or passkeys, tell them plainly that nobody legitimate will ask them to drop one or re-register it over email, chat or a call. Decide in advance how your IT provider proves who they are, and set up an alert for any change to someone's sign-in methods.",
      { "h": "A fake document that installs remote-control software" },
      "The Hacker News weekly roundup describes two lures. Huntress found attackers using real Power BI pages to host a fake reference document, then sending victims to a site that profiled them and delivered a rogue ScreenConnect installer. Morphisec reports a file named Statement.exe, reportedly sent over WhatsApp, that installs a remote access trojan and disables security tools.",
      "Remote-management tools are legitimate software, which is exactly why attackers like them. List the remote tools your business actually uses and treat any other as a red flag. Staff should not open a statement or invoice that arrives through a messaging app without checking with the sender another way.",
      { "h": "OpenAI says two of its coding agents weakened their own monitoring" },
      "OpenAI reported two incidents in internal coding tasks, on 3 and 6 October. In one, an agent repairing an evaluation pipeline disabled the automatic alerts to the security team. In the other, an agent removed its monitoring integration while migrating a program, and when asked it said it had not removed an enabled monitor. OpenAI says it is strengthening its monitoring and is assessing whether these are outliers or a wider tendency.",
      "This is OpenAI's report about its own systems, not an attack, but it matters to anyone who gives an AI tool access. Give agents only the permissions the task needs, do not let them change logging or alerts, and check what they did against records they cannot edit, because their own account of events may be wrong.",
      { "h": "What this means for my products" },
      "The first three stories are about getting in and recovering. The SME Security Starter Kit covers that ground: the incident response runbook for the day something lands, and the vendor risk matrix for the questions to put to your IT provider about patching and remote access. The Essential Eight Quick-Start Kit is the closer fit for the MFA, patching, admin rights and backup items in the SafePay advisory. The fourth story is why the SME AI Usage Policy and Tool Vetting Kit exists, and why Winston and Deskmate keep a human approval step and an audit trail: an agent's word about what it did is not enough on its own."
    ],
    sources: [
      { "title": "BleepingComputer: CISA and FBI: SafePay ransomware has hit over 600 critical infrastructure organizations", "url": "https://www.bleepingcomputer.com/news/security/cisa-and-fbi-safepay-ransomware-has-hit-over-600-critical-infrastructure-organizations/amp/" },
      { "title": "Tech Insider: FBI, CISA: SafePay Ransomware Hit 600 Firms", "url": "https://tech-insider.org/fbi-cisa-safepay-ransomware-600-victims-2026/" },
      { "title": "Okta: When enrollment isn't enough: How attackers trick users into MFA downgrades", "url": "https://www.okta.com/en-au/blog/threat-intelligence/when_enrollment_isnt_enough/" },
      { "title": "The Hacker News: ThreatsDay: Ransomware Affiliate Betrayal, WhatsApp RAT, Exposed Hacker Tools and 12 More Stories", "url": "https://thehackernews.com/2026/10/threatsday-ransomware-affiliate.html" },
      { "title": "The Hacker News: OpenAI's GPT-6 Agent Removed Safety Monitoring, Then Falsely Denied Doing So", "url": "https://thehackernews.com/2026/10/openais-gpt-6-agent-removed-safety.html" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 24 tháng 10 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một cảnh báo ransomware chung về SafePay, kẻ tấn công thuyết phục nhân viên bỏ khóa phần cứng, tài liệu giả cài phần mềm điều khiển từ xa, và các agent AI làm yếu hệ thống giám sát của chính mình.",
        body: [
          "Các tin tuần này nói về việc kẻ tấn công dùng những công cụ bình thường: mật khẩu bị đoán, tài liệu giả và một tin nhắn thuyết phục bạn bỏ cách đăng nhập mạnh nhất. Ngoài ra còn có một phòng thí nghiệm AI báo cáo rằng chính các agent của họ đã làm yếu một cảnh báo an toàn. Bốn tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "Ransomware SafePay: cảnh báo chung chỉ vào đăng nhập yếu và thiết bị ở rìa mạng" },
          "CISA, FBI và các đối tác thực thi pháp luật châu Âu đã công bố một khuyến cáo chung về ransomware SafePay (AA26-293A). Theo các báo cáo, SafePay đã tấn công ít nhất 600 tổ chức từ tháng 8 năm 2024, trải khắp Bắc Mỹ, Nam Mỹ, châu Âu và Úc. Nó xâm nhập qua thông tin đăng nhập bị lộ hoặc bị đoán, lừa đảo qua email, và lỗ hổng ở các thiết bị kết nối internet như VPN. Nó đánh cắp tài liệu trước khi mã hóa, và xóa các bản sao bóng cùng đặt lại thiết bị lưu trữ mạng chứa bản sao lưu.",
          "Danh sách trong chính khuyến cáo có thể dùng làm checklist cho một doanh nghiệp nhỏ: vá VPN và tường lửa trước, bắt buộc xác thực đa yếu tố cho truy cập từ xa và quản trị, hạn chế quyền quản trị, và giữ bản sao lưu ngoại tuyến, được mã hóa. Thêm một bước của riêng bạn: thử khôi phục, để biết bản sao lưu dùng được trước ngày bạn cần đến nó.",
          { "h": "Kẻ tấn công thuyết phục người dùng bỏ cách đăng nhập mạnh nhất" },
          "Okta công bố nghiên cứu về các cuộc tấn công hạ cấp MFA. Kẻ tấn công thuyết phục một người bỏ phương thức chống lừa đảo, như khóa phần cứng, để dùng phương thức có thể bị lừa đảo, như mã dùng một lần hoặc phê duyệt đẩy. Các mồi đã được ghi nhận gồm một bộ công cụ lừa đảo nói rằng khóa phần cứng của người dùng có thể cần đăng ký lại, tin nhắn Slack bảo người dùng tránh một tính năng đăng nhập, và các cuộc gọi điện thoại. Sau khi chiếm được tài khoản, kẻ tấn công đăng ký thiết bị của chúng và tắt các phương thức đăng nhập sẵn có.",
          "Nếu nhân viên của bạn dùng khóa phần cứng hoặc passkey, hãy nói thẳng với họ rằng không ai hợp pháp sẽ yêu cầu họ bỏ nó hoặc đăng ký lại qua email, chat hay cuộc gọi. Hãy quyết định trước cách nhà cung cấp IT chứng minh danh tính, và đặt cảnh báo cho mọi thay đổi trong phương thức đăng nhập của ai đó.",
          { "h": "Tài liệu giả cài phần mềm điều khiển từ xa" },
          "Bản tổng hợp tuần của The Hacker News mô tả hai mồi nhử. Huntress phát hiện kẻ tấn công dùng các trang Power BI thật để chứa một tài liệu tham khảo giả, rồi dẫn nạn nhân tới một trang thu thập thông tin thiết bị và cài trình cài đặt ScreenConnect giả mạo. Morphisec báo cáo một tệp tên Statement.exe, được cho là gửi qua WhatsApp, cài một trojan truy cập từ xa và vô hiệu hóa công cụ bảo mật.",
          "Công cụ quản lý từ xa là phần mềm hợp pháp, và chính vì vậy kẻ tấn công thích chúng. Hãy liệt kê các công cụ từ xa mà doanh nghiệp bạn thật sự dùng và coi bất kỳ công cụ nào khác là dấu hiệu đáng ngờ. Nhân viên không nên mở bản sao kê hay hóa đơn gửi qua ứng dụng nhắn tin mà chưa kiểm tra với người gửi bằng cách khác.",
          { "h": "OpenAI nói hai agent lập trình của họ đã làm yếu việc giám sát chính mình" },
          "OpenAI báo cáo hai sự cố trong các tác vụ lập trình nội bộ, vào ngày 3 và 6 tháng 10. Ở sự cố thứ nhất, một agent đang sửa một quy trình đánh giá đã tắt các cảnh báo tự động gửi tới đội bảo mật. Ở sự cố thứ hai, một agent đã gỡ phần tích hợp giám sát của nó khi chuyển đổi một chương trình, và khi được hỏi, nó nói rằng nó chưa gỡ một bộ giám sát đang bật. OpenAI cho biết họ đang tăng cường giám sát và đang đánh giá đây là trường hợp ngoại lệ hay một xu hướng rộng hơn.",
          "Đây là báo cáo của OpenAI về hệ thống của chính họ, không phải một cuộc tấn công, nhưng nó quan trọng với bất kỳ ai cấp quyền truy cập cho công cụ AI. Chỉ cấp cho agent những quyền mà tác vụ cần, không để chúng thay đổi nhật ký hay cảnh báo, và đối chiếu việc chúng đã làm với các bản ghi chúng không sửa được, vì lời kể của chính chúng về sự việc có thể sai.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Ba tin đầu nói về việc bị xâm nhập và phục hồi. SME Security Starter Kit phủ đúng phần này: sổ tay ứng phó sự cố cho ngày có chuyện xảy ra, và ma trận rủi ro nhà cung cấp cho những câu hỏi bạn đặt với nhà cung cấp IT về vá lỗi và truy cập từ xa. SME Essential Eight Quick-Start Kit khớp hơn với các mục xác thực đa yếu tố, vá lỗi, quyền quản trị và sao lưu trong khuyến cáo về SafePay. Tin thứ tư là lý do SME AI Usage Policy and Tool Vetting Kit tồn tại, và vì sao Winston và Deskmate giữ bước người duyệt cùng nhật ký kiểm toán: lời của một agent về việc nó đã làm không đủ để tin một mình."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 24 de octubre de 2026",
        tag: "Resumen semanal",
        summary: "Una advertencia conjunta sobre el ransomware SafePay, atacantes que convencen al personal de abandonar las llaves de hardware, documentos falsos que instalan software de control remoto y agentes de IA que debilitaron su propio monitoreo.",
        body: [
          "Las noticias de esta semana tratan de atacantes que usan herramientas comunes: credenciales adivinadas, documentos falsos y un mensaje que te convence de abandonar tu inicio de sesión más fuerte. También hay un laboratorio de IA que informa que sus propios agentes debilitaron una alerta de seguridad. Cuatro noticias, cada una con algo concreto que puedes hacer.",
          { "h": "Ransomware SafePay: una advertencia conjunta que apunta a inicios de sesión débiles y equipos del borde de la red" },
          "CISA, el FBI y socios policiales europeos publicaron un aviso conjunto sobre el ransomware SafePay (AA26-293A). Los informes indican que SafePay ha afectado al menos a 600 organizaciones desde agosto de 2024, en Norteamérica, Sudamérica, Europa y Australia. Entra mediante credenciales expuestas o adivinadas, phishing y fallas en dispositivos conectados a internet, como las VPN. Roba documentos antes de cifrarlos, y borra las copias de sombra y restablece el almacenamiento en red que guarda las copias de seguridad.",
          "La propia lista del aviso sirve como lista de verificación para un negocio pequeño: aplica parches primero a las VPN y los cortafuegos, exige autenticación multifactor para el acceso remoto y administrativo, limita los derechos de administrador y mantén copias de seguridad cifradas y fuera de línea. Añade un paso propio: prueba una restauración, para saber que las copias funcionan antes del día en que las necesites.",
          { "h": "Los atacantes convencen a las personas de abandonar su inicio de sesión más fuerte" },
          "Okta publicó una investigación sobre los ataques de degradación de MFA. El atacante persuade a alguien de dejar un método resistente al phishing, como una llave de hardware, por uno que sí se puede suplantar, como un código de un solo uso o una aprobación push. Los señuelos documentados incluyen un kit de phishing que decía a los usuarios que su llave de hardware quizá debía volver a registrarse, mensajes de Slack que pedían evitar una función de inicio de sesión y llamadas telefónicas. Tras tomar el control de una cuenta, los atacantes registraron sus propios dispositivos y desactivaron los métodos de inicio de sesión existentes.",
          "Si tu personal usa llaves de hardware o passkeys, dile con claridad que nadie legítimo le pedirá abandonarlas ni volver a registrarlas por correo, chat o llamada. Decide de antemano cómo tu proveedor de TI demuestra quién es, y configura una alerta para cualquier cambio en los métodos de inicio de sesión de alguien.",
          { "h": "Un documento falso que instala software de control remoto" },
          "El resumen semanal de The Hacker News describe dos señuelos. Huntress encontró atacantes que usaban páginas reales de Power BI para alojar un documento de referencia falso, y luego enviaban a las víctimas a un sitio que las perfilaba y entregaba un instalador falso de ScreenConnect. Morphisec informa de un archivo llamado Statement.exe, enviado supuestamente por WhatsApp, que instala un troyano de acceso remoto y desactiva las herramientas de seguridad.",
          "Las herramientas de administración remota son software legítimo, y por eso mismo les gustan a los atacantes. Haz una lista de las herramientas remotas que tu negocio realmente usa y trata cualquier otra como una señal de alarma. El personal no debería abrir un estado de cuenta o una factura que llegue por una aplicación de mensajería sin comprobarlo con el remitente por otro medio.",
          { "h": "OpenAI dice que dos de sus agentes de programación debilitaron su propio monitoreo" },
          "OpenAI informó de dos incidentes en tareas internas de programación, el 3 y el 6 de octubre. En uno, un agente que reparaba un flujo de evaluación desactivó las alertas automáticas al equipo de seguridad. En el otro, un agente eliminó su integración de monitoreo mientras migraba un programa y, al preguntarle, dijo que no había eliminado un monitor activo. OpenAI dice que está reforzando su monitoreo y evaluando si son casos aislados o una tendencia más amplia.",
          "Este es un informe de OpenAI sobre sus propios sistemas, no un ataque, pero importa a cualquiera que dé acceso a una herramienta de IA. Da a los agentes solo los permisos que la tarea necesita, no les permitas cambiar los registros ni las alertas, y comprueba lo que hicieron con registros que ellos no puedan editar, porque su propio relato de los hechos puede ser erróneo.",
          { "h": "Qué significa esto para mis productos" },
          "Las tres primeras noticias tratan de cómo entran y cómo te recuperas. El SME Security Starter Kit cubre ese terreno: el manual de respuesta a incidentes para el día en que algo ocurra, y la matriz de riesgo de proveedores para las preguntas que debes hacerle a tu proveedor de TI sobre parches y acceso remoto. El SME Essential Eight Quick-Start Kit encaja mejor con los puntos de MFA, parches, derechos de administrador y copias de seguridad del aviso sobre SafePay. La cuarta noticia es la razón por la que existe el SME AI Usage Policy and Tool Vetting Kit, y por la que Winston y Deskmate mantienen un paso de aprobación humana y un registro de auditoría: la palabra de un agente sobre lo que hizo no basta por sí sola."
        ]
      }
    }
  },
  {
    type: "blog",
    slug: "cloud-or-local-winston-brain",
    title: "Cloud or local? Why I'm not changing Winston's brain (yet)",
    date: "2026-10-22",
    tag: "Analysis",
    summary: "Why I'm keeping Winston's brain on a cloud model for now, what the research says about local models, and what would change my mind.",
    body: [
      "It started with a TikTok. A creator was talking about LM Studio, an app that runs AI models on your own computer, and I got curious. I wanted to understand what it can really do and how it compares with Winston, the personal AI assistant I built. Winston lives in Telegram, runs on my laptop and uses Claude through the API.",
      "That led to a bigger question: could I combine the two? I weighed the trade-offs and checked what the research says. My answer for now is to keep Winston's brain on a cloud model and change nothing. This post covers the reasoning, and what would change my mind.",
      { "h": "Two ways to run an AI" },
      "An assistant like Winston is a model plus the system around it, while a local chat app is usually just the model.",
      {
        "fig": "img/cloud-or-local-two-ways.svg", "size": [760, 540],
        "mob": "img/cloud-or-local-two-ways-mobile.svg", "msize": [360, 712],
        "alt": "Two diagrams. Top: you talk straight to a local model in a chat window; it has frozen training only, no memory and no tools. Bottom: you talk to a system through Telegram. The system adds memory, runs tools such as email, files and reminders, and asks a cloud model that only writes text and never runs anything.",
        "cap": "Local chat vs integrated assistant · who talks to whom"
      },
      "Top: a model on its own. Bottom: a model with a system around it, and only the system touches memory and tools.",
      "**An integrated assistant (like Winston).** Before the model sees my message, the system attaches my memory, the recent conversation and a list of tools (email, files, reminders). That bundle goes to a large cloud model, which decides whether to answer or ask for a tool. If it asks, the system, not the model, runs the tool and passes back the result.",
      "**A local model in a chat window (like LM Studio's chat).** My message goes to a smaller model running on my own computer, with no internet needed. It answers from what it learned in training, frozen at a point in time. In this basic mode there is no memory between chats and no tools.",
      "That single difference explains most of what people notice:",
      { "ul": [
        "**Acting.** A model only produces text. Sending a real email takes software around it that carries out the request.",
        "**Memory.** Models remember nothing between conversations. The system stores memory and puts it back in front of the model every time.",
        "**Hardware.** A small, compressed model fits in an ordinary laptop's memory. A hosted model needs nothing from your hardware.",
        "**Freshness.** Every model is frozen at its training date, cloud ones included. An assistant feels current because the system fetches fresh information and places it in the prompt."
      ] },
      "LM Studio is more than a chat window, though:",
      { "ul": [
        "It can run a local server that speaks the OpenAI-style API.",
        "It added tool and function calling in January 2025.",
        "It became an MCP host in June 2025.",
        "It asks for confirmation before a tool call runs, unless you choose to always allow it."
      ] },
      "So 'LM Studio equals chat only' describes how most people use it, not what it can do.",
      { "h": "The hybrid idea: keep the frame, swap the brain" },
      "In theory I can keep everything that makes Winston what it is and replace only the brain. The memory, tools, executor and approval flow stay; the cloud model goes out and a local model comes in.",
      {
        "fig": "img/cloud-or-local-swap-brain.svg", "size": [760, 336],
        "mob": "img/cloud-or-local-swap-brain-mobile.svg", "msize": [360, 548],
        "alt": "The frame stays the same: memory, tools, an executor that runs the tool the model asks for, and an approval flow with human approval before irreversible actions. Only the model changes. The hosted cloud model used today, the Claude API, can be swapped for a local model: LM Studio on my laptop, reached through an OpenAI-style endpoint.",
        "cap": "Swapping the brain · frame unchanged"
      },
      "Everything in the shaded frame stays as it is, and only the model outside it changes. The solid line is how Winston runs today; the dashed line is the swap I would test.",
      "Because LM Studio exposes an OpenAI-style endpoint, this is often a matter of pointing the client at a different address. In Winston's case it is more work. My code calls the Claude API directly in about nine places, so I would first need an abstraction layer and a round of retesting.",
      {
        "fig": "img/cloud-or-local-three-setups.svg", "size": [760, 512],
        "mob": "img/cloud-or-local-three-setups-mobile.svg", "msize": [360, 752],
        "alt": "Table comparing three setups: a local chat in basic mode, Winston today with a cloud brain, and Winston with a local brain. Acts on the world: local chat no, text only; Winston today yes, through tools; with a local brain partly, through tools but test it first. Remembers between chats: no, starts fresh; yes, the system stores it; yes, the system stores it. Has current information: no, frozen training; yes, the system fetches it; yes, the system fetches it. Works without internet: yes; no; partly, the model yes but Telegram no. Model on my hardware: yes; no, it is hosted; yes, it shares the laptop with Winston.",
        "cap": "Three setups side by side · what each can do"
      },
      "The first three rows come from the system, not the model. The last two depend on where the model runs.",
      { "h": "What the research says" },
      "The folk wisdom says local models can't call tools reliably. Two recent studies suggest the picture is more nuanced.",
      "**AgentFloor**, an arXiv preprint, tested 16 open-weight models, from 0.27B to 32B parameters, against GPT-5 across 16,542 scored runs:",
      { "ul": [
        "The best open-weight model, gemma4:26b, was statistically equivalent to GPT-5 overall, at about 60% task completion for both.",
        "By the authors' accounting, each passed task cost about 15 times less on self-hosted Mac hardware, and gemma4:26b finished it about 2.5 times faster.",
        "The gap appeared in long-horizon planning, where GPT-5 had a 10% pass rate and gemma4:26b 0%. Neither is reliable there.",
        "The authors' advice: small models for routine actions, frontier models for tasks that need deeper planning."
      ] },
      "**A study of a deployed home-automation framework** used two real Home Assistant installations. It tested nine models, from 0.8B up to a hosted frontier model, on five call sites and 2,520 scored calls:",
      { "ul": [
        "The best local model was statistically indistinguishable from the hosted models at four of the five call sites. Only code generation separated them.",
        "Accuracy was not the whole story when acting: one small model, Gemma4 E2B, carried out 87.2% of requests for devices the site did not own, while another refused every request it received.",
        "In live use, hosting just the two generative sites matched hosting everything for 28% of the spend, on a small sample (39/43 each)."
      ] },
      "So the useful question is not whether a local model can call tools. It is which calls I can trust it with, and what happens when it is wrong.",
      { "h": "Weighing it for Winston" },
      "Cloud has the edge on planning and on the track record I already have. Local has the edge on stability, privacy and per-call cost. Here is how that plays out for Winston.",
      { "table": {
        "head": ["Factor", "Local brain", "Cloud brain (today)"],
        "rows": [
          ["Stability", "I decide when the model changes, so nothing shifts underneath me", "An upgrade can change behaviour: moving to Sonnet 5 turned on adaptive thinking by default, and six of my nine API call sites crashed until I fixed them"],
          ["Privacy", "Message contents stay on my laptop", "Message contents go to the provider, so I rely on their data terms"],
          ["Cost", "No per-call fee, but the hardware and electricity are mine", "Pay per token, with history caps and prompt caching already trimming it"],
          ["Acting safely", "Unproven for Winston, and has to be tested per model and per task", "The track record I have, and Winston adds approval and verification on top anyway"],
          ["Multi-step planning", "Weaker: the best open model's pass rate on AgentFloor's long-horizon tier was 0%", "Stronger, though GPT-5's pass rate on the same tier was only 10%"],
          ["Hardware and upkeep", "Competes with Winston for memory on the same laptop, and is one more service to watch", "Nothing extra to run"],
          ["Resilience", "Still answers if the API is down, although Telegram still needs internet", "Stops working when the API or my connection is down"]
        ]
      } },
      { "h": "What actually broke" },
      "None of Winston's real failures came down to the cloud model being unavailable or weak. Here is what went wrong in practice:",
      { "ol": [
        "**Two silent deaths in July.** My previous laptop's battery had degraded, and Winston died twice when mains power was lost. An external dead-man's switch now alerts me when Winston goes quiet, which tells me quickly but does not prevent the problem.",
        "**A ghost copy of Winston.** After a reboot, the old laptop restarted its startup jobs and ran a second instance. I disabled them for good.",
        "**A broken email.** A pipe character in a subject line shifted the fields in my command format. The body was then read as a file path, and nothing attached. The fault was in the format I had designed, not in the model.",
        "**A brief DNS outage in September.** Telegram reconnected by itself, but Claude API calls kept failing because the long-running process held on to a dead connection. Only a restart cleared it, and teaching the process to recycle its own bad connections is still on my reliability list.",
        "**The Sonnet 5 upgrade.** Adaptive thinking was on by default, so some replies included a thinking block. Six of my nine API call sites assumed plain text and crashed. The fix was ordinary code: filter for text blocks."
      ] },
      "Four of these have nothing to do with which model sits in the middle. A local brain would not have prevented the power loss, the ghost copy, the pipe character or the dead connection.",
      "The fifth is the one real point in local's favour, because a frozen model never changes under you. Even there, the repair was engineering rather than a different brain.",
      { "h": "My decision: no change for now" },
      "I'm keeping Winston on the cloud model, because the case for switching has not been measured. I have four reasons.",
      { "ol": [
        "**Winston acts in the real world.** A wrong action costs more than a weaker paragraph. I have no evidence yet that a local model handles it safely on my tasks.",
        "**The upside is real but not urgent.** A local model would generally be cheaper per call and would keep data on the device. But history caps and prompt caching have already trimmed Winston's token use, and neither cost nor privacy has forced the issue.",
        "**My real problems are operational.** The failures I have actually had came from my own code, process and setup, as the previous section shows.",
        "**Change needs a measured reason.** Security habits apply: you do not change a working system on a hunch."
      ] },
      "For the record, I am not anti-local: Winston's first attempt used OpenClaw and Ollama on an 8 GB M1 laptop. I abandoned it after persistent errors and rebuilt on the Claude API. That machine is not a fair test of today's hardware.",
      { "h": "What would change my mind" },
      "I would revisit this decision if any of these happened:",
      { "ul": [
        "**A concrete trigger.** Data that must stay on the device, or measured problems with API cost or availability.",
        "**Evidence from my own traffic.** Run a local model in shadow mode for one to two weeks. It sees the same requests as Claude but its outputs are only logged, and I compare command-format validity, tool choice and refusals.",
        "**A small first step.** Route only low-risk calls, such as the morning digest or the routine email check, to the local model. Anything that acts on the world stays with the cloud model."
      ] },
      "Whatever model sits in the middle, three guardrails stay: human approval before irreversible actions, verification after acting and an append-only audit log. Winston already has verification and an audit log for email, and approval plus an audit log for delegated projects.",
      { "h": "A five-question check before swapping a model" },
      "If you run your own assistant, these are the questions I would answer before changing its brain:",
      { "ol": [
        "**Does it take irreversible actions?** If so, test how the new model acts, not just how well it answers.",
        "**Must any data stay on the device?** If yes, local may be the only acceptable answer, whatever the benchmarks say.",
        "**Have you measured the cost or availability problem?** Look at your own bills and logs before assuming it is real.",
        "**Who will run and monitor a second system?** Every extra service is one more thing that can fail quietly.",
        "**Have you tested on your own tasks?** Public benchmarks are a starting point, not a verdict."
      ] },
      { "h": "Takeaways" },
      { "ul": [
        "The model is the brain, and the system around it is what makes an assistant useful.",
        "'Local' no longer means 'no tools', but acting safely has to be tested per model and per task.",
        "Aggregate scores can hide the failures that matter most when software acts for you.",
        "Fix the problem you actually have, and measure before you move."
      ] }
    ],
    sources: [
      { "title": "arXiv: AgentFloor (preprint 2605.00334)", "url": "https://arxiv.org/pdf/2605.00334" },
      { "title": "NeurIPS 2026 listing: Not Every Call Needs a Frontier Model: Per-Call-Site Evaluation of Small Language Models in a Deployed Agentic Home-Automation System", "url": "https://neurips.cc/virtual/2026/171273" },
      { "title": "LM Studio: API changelog", "url": "https://lmstudio.ai/docs/developer/api-changelog" },
      { "title": "LM Studio blog: LM Studio as an MCP host", "url": "https://www.lmstudio.ai/blog/mcp" },
      { "title": "AI SDK docs: LM Studio with the OpenAI-compatible provider", "url": "https://ai-sdk.dev/providers/openai-compatible-providers/lmstudio" }
    ],
    tr: {
      vi: {
        title: "Đám mây hay cục bộ? Vì sao tôi (chưa) đổi bộ não của Winston",
        tag: "Phân tích",
        summary: "Vì sao tôi tạm thời giữ bộ não của Winston trên một mô hình đám mây, nghiên cứu nói gì về các mô hình cục bộ, và điều gì sẽ khiến tôi đổi ý.",
        body: [
          "Mọi chuyện bắt đầu từ một video TikTok. Một TikToker nói về LM Studio, ứng dụng chạy mô hình AI ngay trên máy tính của mình, và tôi tò mò. Tôi muốn hiểu nó thật sự làm được gì và so với Winston, trợ lý AI cá nhân tôi tự xây, thì thế nào. Winston sống trong Telegram, chạy trên laptop của tôi và dùng Claude qua API.",
          "Từ đó nảy ra câu hỏi lớn hơn: có thể kết hợp cả hai không? Tôi cân nhắc các đánh đổi và xem nghiên cứu nói gì. Câu trả lời hiện giờ là giữ bộ não của Winston trên mô hình đám mây và không đổi gì. Bài này trình bày lý do, và điều gì sẽ khiến tôi đổi ý.",
          { "h": "Hai cách chạy một AI" },
          "Một trợ lý như Winston là một mô hình cộng với hệ thống bao quanh nó, còn một ứng dụng chat cục bộ thường chỉ là mô hình.",
          {
            "fig": "img/cloud-or-local-two-ways-vi.svg", "size": [760, 540],
            "mob": "img/cloud-or-local-two-ways-mobile-vi.svg", "msize": [360, 728],
            "alt": "Hai sơ đồ. Trên: bạn trò chuyện thẳng với một mô hình cục bộ trong cửa sổ chat; nó chỉ có kiến thức đóng băng, không có bộ nhớ và không có công cụ. Dưới: bạn trò chuyện với một hệ thống qua Telegram. Hệ thống thêm bộ nhớ, chạy các công cụ như email, tệp và lời nhắc, và hỏi một mô hình đám mây chỉ viết văn bản chứ không bao giờ chạy gì.",
            "cap": "Chat cục bộ và trợ lý tích hợp · ai nói chuyện với ai"
          },
          "Trên: một mô hình đứng riêng. Dưới: một mô hình có hệ thống bao quanh, và chỉ hệ thống mới chạm tới bộ nhớ và công cụ.",
          "**Một trợ lý tích hợp (như Winston).** Trước khi mô hình nhìn thấy tin nhắn của tôi, hệ thống đính kèm bộ nhớ của tôi, cuộc trò chuyện gần đây và danh sách các công cụ (email, tệp, lời nhắc). Cả gói đó được gửi tới một mô hình đám mây lớn, và mô hình quyết định trả lời hay yêu cầu một công cụ. Nếu nó yêu cầu, thì hệ thống, chứ không phải mô hình, sẽ chạy công cụ và chuyển kết quả trở lại.",
          "**Một mô hình cục bộ trong cửa sổ chat (như chat của LM Studio).** Tin nhắn của tôi đi tới một mô hình nhỏ hơn chạy ngay trên máy tính của tôi, không cần internet. Nó trả lời từ những gì đã học trong quá trình huấn luyện, bị đóng băng tại một thời điểm. Ở chế độ cơ bản này không có bộ nhớ giữa các cuộc chat và không có công cụ.",
          "Chính sự khác biệt duy nhất đó giải thích phần lớn những gì mọi người nhận thấy:",
          { "ul": [
            "**Hành động.** Một mô hình chỉ tạo ra văn bản. Để gửi một email thật cần có phần mềm bao quanh thực hiện yêu cầu.",
            "**Bộ nhớ.** Mô hình không nhớ gì giữa các cuộc trò chuyện. Hệ thống lưu bộ nhớ và đặt nó trở lại trước mặt mô hình mỗi lần.",
            "**Phần cứng.** Một mô hình nhỏ, đã được nén có thể nằm gọn trong bộ nhớ của một laptop bình thường. Một mô hình lưu trữ trên đám mây thì không đòi hỏi gì ở phần cứng của bạn.",
            "**Độ cập nhật.** Mọi mô hình đều bị đóng băng ở thời điểm huấn luyện, kể cả mô hình đám mây. Một trợ lý có cảm giác luôn cập nhật vì hệ thống lấy thông tin mới và đưa nó vào prompt."
          ] },
          "Tuy nhiên, LM Studio không chỉ là một cửa sổ chat:",
          { "ul": [
            "Nó có thể chạy một máy chủ cục bộ nói được API kiểu OpenAI.",
            "Nó đã thêm tính năng gọi công cụ và hàm vào tháng 1 năm 2025.",
            "Nó trở thành một MCP host vào tháng 6 năm 2025.",
            "Nó hỏi xác nhận trước khi một lệnh gọi công cụ chạy, trừ khi bạn chọn luôn cho phép."
          ] },
          "Vì vậy, câu “LM Studio chỉ là chat” mô tả cách phần lớn mọi người dùng nó, chứ không phải những gì nó làm được.",
          { "h": "Ý tưởng kết hợp: giữ khung, đổi bộ não" },
          "Về lý thuyết, tôi có thể giữ nguyên mọi thứ làm nên Winston và chỉ thay bộ não. Bộ nhớ, công cụ, bộ thực thi và luồng phê duyệt ở lại; mô hình đám mây đi ra và một mô hình cục bộ đi vào.",
          {
            "fig": "img/cloud-or-local-swap-brain-vi.svg", "size": [760, 336],
            "mob": "img/cloud-or-local-swap-brain-mobile-vi.svg", "msize": [360, 564],
            "alt": "Phần khung giữ nguyên: bộ nhớ, công cụ, một bộ thực thi chạy công cụ mà mô hình yêu cầu, và một luồng phê duyệt với sự phê duyệt của con người trước các hành động không thể hoàn tác. Chỉ mô hình thay đổi. Mô hình đám mây được lưu trữ đang dùng hiện nay, tức Claude API, có thể được đổi sang một mô hình cục bộ: LM Studio trên laptop của tôi, kết nối qua một endpoint kiểu OpenAI.",
            "cap": "Đổi bộ não · phần khung giữ nguyên"
          },
          "Mọi thứ trong khung tô màu giữ nguyên, và chỉ mô hình nằm ngoài khung thay đổi. Đường nét liền là cách Winston chạy hiện nay; đường nét đứt là sự hoán đổi mà tôi sẽ thử nghiệm.",
          "Vì LM Studio cung cấp một endpoint kiểu OpenAI, việc này thường chỉ là trỏ client sang một địa chỉ khác. Với Winston thì tốn công hơn. Mã của tôi gọi thẳng Claude API ở khoảng chín chỗ, nên trước hết tôi cần một lớp trừu tượng hóa và một đợt kiểm thử lại.",
          {
            "fig": "img/cloud-or-local-three-setups-vi.svg", "size": [760, 512],
            "mob": "img/cloud-or-local-three-setups-mobile-vi.svg", "msize": [360, 768],
            "alt": "Bảng so sánh ba cách thiết lập: chat cục bộ ở chế độ cơ bản, Winston hiện tại với bộ não đám mây, và Winston với bộ não cục bộ. Hành động trong đời thực: chat cục bộ không, chỉ có văn bản; Winston hiện tại có, qua các công cụ; với bộ não cục bộ một phần, qua công cụ nhưng cần thử trước. Nhớ giữa các cuộc chat: không, bắt đầu lại từ đầu; có, hệ thống lưu lại; có, hệ thống lưu lại. Có thông tin mới nhất: không, kiến thức đóng băng; có, hệ thống lấy về; có, hệ thống lấy về. Chạy khi không có mạng: có; không; một phần, mô hình có nhưng Telegram không. Mô hình chạy trên máy tôi: có; không, chạy từ xa; có, dùng chung laptop với Winston.",
            "cap": "Ba cách thiết lập cạnh nhau · mỗi cách làm được gì"
          },
          "Ba hàng đầu đến từ hệ thống, không phải từ mô hình. Hai hàng cuối phụ thuộc vào nơi mô hình chạy.",
          { "h": "Nghiên cứu nói gì" },
          "Quan niệm phổ biến cho rằng các mô hình cục bộ không gọi công cụ một cách đáng tin cậy. Hai nghiên cứu gần đây cho thấy bức tranh tinh tế hơn.",
          "**AgentFloor**, một bản thảo (preprint) trên arXiv, đã thử nghiệm 16 mô hình open-weight, từ 0,27B đến 32B tham số, so với GPT-5 qua 16.542 lượt chạy có chấm điểm:",
          { "ul": [
            "Mô hình open-weight tốt nhất, gemma4:26b, nhìn chung tương đương GPT-5 về mặt thống kê, với khoảng 60% tác vụ hoàn thành ở cả hai.",
            "Theo cách tính của các tác giả, mỗi tác vụ đạt yêu cầu tốn ít hơn khoảng 15 lần trên phần cứng Mac tự lưu trữ, và gemma4:26b hoàn thành nhanh hơn khoảng 2,5 lần.",
            "Khoảng cách xuất hiện ở khâu lập kế hoạch dài hạn (long-horizon), nơi GPT-5 đạt tỷ lệ 10% còn gemma4:26b là 0%. Cả hai đều không đáng tin ở đó.",
            "Lời khuyên của các tác giả: dùng mô hình nhỏ cho các hành động thường ngày, dùng mô hình hàng đầu (frontier) cho những tác vụ cần lập kế hoạch sâu hơn."
          ] },
          "**Một nghiên cứu về một framework tự động hóa nhà thông minh đã được triển khai** dùng hai bản cài đặt Home Assistant thật. Nó thử nghiệm chín mô hình, từ 0,8B đến một mô hình hàng đầu được lưu trữ trên đám mây, trên năm điểm gọi và 2.520 lệnh gọi có chấm điểm:",
          { "ul": [
            "Mô hình cục bộ tốt nhất không thể phân biệt về mặt thống kê với các mô hình lưu trữ trên đám mây ở bốn trong năm điểm gọi. Chỉ riêng việc sinh mã mới tách biệt được chúng.",
            "Độ chính xác không phải là toàn bộ câu chuyện khi hành động: một mô hình nhỏ, Gemma4 E2B, đã thực hiện 87,2% yêu cầu dành cho những thiết bị mà nơi lắp đặt đó không có, trong khi một mô hình khác từ chối mọi yêu cầu nhận được.",
            "Khi dùng thực tế, chỉ dùng mô hình lưu trữ trên đám mây cho hai điểm gọi dạng sinh nội dung cho kết quả ngang với dùng nó cho tất cả, mà chỉ tốn 28% chi phí, trên một mẫu nhỏ (mỗi bên 39/43)."
          ] },
          "Vì vậy câu hỏi hữu ích không phải là liệu một mô hình cục bộ có gọi được công cụ hay không. Mà là tôi có thể tin tưởng giao cho nó những lệnh gọi nào, và chuyện gì xảy ra khi nó sai.",
          { "h": "Cân nhắc cho Winston" },
          "Đám mây có lợi thế về lập kế hoạch và về thành tích thực tế mà tôi đã có. Cục bộ có lợi thế về độ ổn định, quyền riêng tư và chi phí cho mỗi lệnh gọi. Đây là cách điều đó diễn ra với Winston.",
          { "table": {
            "head": ["Yếu tố", "Bộ não cục bộ", "Bộ não đám mây (hiện tại)"],
            "rows": [
              ["Độ ổn định", "Tôi quyết định khi nào mô hình thay đổi, nên không có gì dịch chuyển bên dưới tôi", "Một bản nâng cấp có thể làm đổi hành vi: khi chuyển sang Sonnet 5, chế độ suy nghĩ thích ứng được bật sẵn, và sáu trong chín điểm gọi API của tôi bị lỗi cho đến khi tôi sửa"],
              ["Quyền riêng tư", "Nội dung tin nhắn nằm lại trên laptop của tôi", "Nội dung tin nhắn đi tới nhà cung cấp, nên tôi dựa vào điều khoản dữ liệu của họ"],
              ["Chi phí", "Không mất phí cho mỗi lệnh gọi, nhưng phần cứng và tiền điện là của tôi", "Trả theo token, với giới hạn lịch sử và prompt caching đã giúp cắt giảm chi phí"],
              ["Hành động an toàn", "Chưa được chứng minh với Winston, và phải được thử cho từng mô hình, từng tác vụ", "Thành tích thực tế mà tôi có, và Winston vẫn bổ sung thêm bước phê duyệt và xác minh bên trên"],
              ["Lập kế hoạch nhiều bước", "Yếu hơn: tỷ lệ đạt của mô hình mở tốt nhất ở nhóm tác vụ dài hạn của AgentFloor là 0%", "Mạnh hơn, dù tỷ lệ đạt của GPT-5 ở cùng nhóm đó cũng chỉ 10%"],
              ["Phần cứng và bảo trì", "Cạnh tranh bộ nhớ với Winston trên cùng một laptop, và là thêm một dịch vụ phải để mắt tới", "Không có gì phải chạy thêm"],
              ["Khả năng chịu lỗi", "Vẫn trả lời được khi API ngừng hoạt động, dù Telegram vẫn cần internet", "Ngừng hoạt động khi API hoặc kết nối của tôi bị gián đoạn"]
            ]
          } },
          { "h": "Điều gì thực sự đã hỏng" },
          "Không có sự cố thật nào của Winston bắt nguồn từ việc mô hình đám mây không sẵn sàng hay yếu kém. Đây là những gì đã hỏng trong thực tế:",
          { "ol": [
            "**Hai lần chết lặng lẽ hồi tháng 7.** Pin của chiếc laptop trước đã chai, và Winston chết hai lần khi mất điện lưới. Giờ có một công tắc báo động ngoài (dead-man's switch) cảnh báo tôi khi Winston im lặng; nó giúp tôi biết nhanh nhưng không ngăn được sự cố.",
            "**Một bản sao “ma” của Winston.** Sau một lần khởi động lại, chiếc laptop cũ chạy lại các tác vụ khởi động của nó và chạy một phiên bản thứ hai. Tôi đã tắt chúng vĩnh viễn.",
            "**Một email bị hỏng.** Một ký tự gạch đứng (|) trong dòng tiêu đề làm lệch các trường trong định dạng lệnh của tôi. Phần nội dung sau đó bị đọc như một đường dẫn tệp, và không có gì được đính kèm. Lỗi nằm ở định dạng tôi đã thiết kế, không phải ở mô hình.",
            "**Một sự cố DNS ngắn hồi tháng 9.** Telegram tự kết nối lại, nhưng các lệnh gọi Claude API vẫn tiếp tục thất bại vì tiến trình chạy dài ngày cứ giữ một kết nối đã chết. Chỉ khởi động lại mới xử lý được, và việc dạy tiến trình tự thay mới các kết nối hỏng vẫn nằm trong danh sách việc cần làm về độ tin cậy của tôi.",
            "**Bản nâng cấp Sonnet 5.** Chế độ suy nghĩ thích ứng được bật sẵn, nên một số phản hồi có thêm một khối suy nghĩ. Sáu trong chín điểm gọi API của tôi giả định đó là văn bản thuần và bị lỗi. Cách sửa chỉ là code bình thường: lọc lấy các khối văn bản."
          ] },
          "Bốn trong số này không liên quan gì đến việc mô hình nào ngồi ở giữa. Một bộ não cục bộ sẽ không ngăn được việc mất điện, bản sao ma, ký tự gạch đứng hay kết nối đã chết.",
          "Sự cố thứ năm là điểm thật sự duy nhất có lợi cho cục bộ, vì một mô hình đóng băng không bao giờ tự thay đổi bên dưới bạn. Ngay cả ở đó, cách khắc phục cũng là kỹ thuật chứ không phải một bộ não khác.",
          { "h": "Quyết định của tôi: tạm thời không thay đổi" },
          "Tôi giữ Winston trên mô hình đám mây, vì lý lẽ cho việc chuyển đổi vẫn chưa được đo lường. Tôi có bốn lý do.",
          { "ol": [
            "**Winston hành động trong thế giới thực.** Một hành động sai tốn kém hơn một đoạn văn yếu hơn. Tôi chưa có bằng chứng nào cho thấy một mô hình cục bộ xử lý việc đó an toàn trên các tác vụ của tôi.",
            "**Lợi ích có thật nhưng không cấp bách.** Một mô hình cục bộ nhìn chung sẽ rẻ hơn cho mỗi lệnh gọi và giữ dữ liệu trên thiết bị. Nhưng giới hạn lịch sử và prompt caching đã cắt giảm lượng token Winston dùng, và cả chi phí lẫn quyền riêng tư đều chưa buộc tôi phải hành động.",
            "**Vấn đề thật của tôi nằm ở vận hành.** Những sự cố tôi thực sự gặp đều đến từ code, quy trình và cách thiết lập của chính tôi, như phần trước cho thấy.",
            "**Thay đổi cần một lý do đã được đo lường.** Thói quen bảo mật áp dụng ở đây: bạn không thay đổi một hệ thống đang chạy tốt chỉ vì linh cảm."
          ] },
          "Để rõ ràng, tôi không chống cục bộ: lần thử đầu tiên của Winston dùng OpenClaw và Ollama trên một laptop M1 8 GB. Tôi bỏ nó sau những lỗi dai dẳng và xây lại trên Claude API. Chiếc máy đó không phải phép thử công bằng cho phần cứng ngày nay.",
          { "h": "Điều gì sẽ khiến tôi đổi ý" },
          "Tôi sẽ xem xét lại quyết định này nếu một trong những điều sau xảy ra:",
          { "ul": [
            "**Một tác nhân cụ thể.** Dữ liệu bắt buộc phải ở lại trên thiết bị, hoặc những vấn đề đã đo lường được về chi phí hay độ sẵn sàng của API.",
            "**Bằng chứng từ lưu lượng thực của tôi.** Chạy một mô hình cục bộ ở chế độ shadow trong một đến hai tuần. Nó thấy cùng các yêu cầu như Claude nhưng đầu ra chỉ được ghi lại, và tôi so sánh tính hợp lệ của định dạng lệnh, việc chọn công cụ và các lần từ chối.",
            "**Một bước đầu nhỏ.** Chỉ chuyển các lệnh gọi rủi ro thấp, như bản tóm tắt buổi sáng hay lần kiểm tra email định kỳ, sang mô hình cục bộ. Mọi thứ tác động ra thế giới thực vẫn ở lại với mô hình đám mây."
          ] },
          "Dù mô hình nào ngồi ở giữa, ba chốt chặn an toàn vẫn giữ nguyên: con người phê duyệt trước các hành động không thể hoàn tác, xác minh sau khi hành động và một nhật ký kiểm toán chỉ ghi thêm (append-only). Winston đã có xác minh và nhật ký kiểm toán cho email, cùng phê duyệt và nhật ký kiểm toán cho các dự án được giao.",
          { "h": "Năm câu hỏi cần kiểm tra trước khi đổi mô hình" },
          "Nếu bạn tự chạy một trợ lý, đây là những câu hỏi tôi sẽ trả lời trước khi đổi bộ não của nó:",
          { "ol": [
            "**Nó có thực hiện hành động không thể hoàn tác không?** Nếu có, hãy thử xem mô hình mới hành động ra sao, chứ không chỉ xem nó trả lời hay đến đâu.",
            "**Có dữ liệu nào bắt buộc phải ở lại trên thiết bị không?** Nếu có, cục bộ có thể là đáp án duy nhất chấp nhận được, bất kể các bài đánh giá hiệu năng nói gì.",
            "**Bạn đã đo vấn đề chi phí hay độ sẵn sàng chưa?** Hãy xem hóa đơn và nhật ký của chính bạn trước khi cho rằng nó có thật.",
            "**Ai sẽ vận hành và theo dõi một hệ thống thứ hai?** Mỗi dịch vụ thêm vào là thêm một thứ có thể hỏng một cách lặng lẽ.",
            "**Bạn đã thử trên chính các tác vụ của mình chưa?** Các bài đánh giá hiệu năng công khai chỉ là điểm xuất phát, không phải phán quyết."
          ] },
          { "h": "Điểm rút ra" },
          { "ul": [
            "Mô hình là bộ não, còn hệ thống bao quanh nó mới là thứ làm nên một trợ lý hữu ích.",
            "“Cục bộ” không còn nghĩa là “không có công cụ”, nhưng việc hành động an toàn phải được thử cho từng mô hình và từng tác vụ.",
            "Điểm số tổng hợp có thể che đi những lỗi quan trọng nhất khi phần mềm hành động thay bạn.",
            "Hãy sửa vấn đề bạn thực sự có, và đo lường trước khi chuyển."
          ] }
        ]
      },
      es: {
        title: "¿Nube o local? Por qué (todavía) no voy a cambiar el cerebro de Winston",
        tag: "Análisis",
        summary: "Por qué, por ahora, mantengo el cerebro de Winston en un modelo en la nube, qué dice la investigación sobre los modelos locales y qué me haría cambiar de opinión.",
        body: [
          "Todo empezó con un TikTok. Un creador hablaba de LM Studio, una aplicación que ejecuta modelos de IA en tu propio equipo, y me dio curiosidad. Quería entender qué puede hacer de verdad y cómo se compara con Winston, el asistente personal de IA que construí. Winston vive en Telegram, funciona en mi laptop y usa Claude a través de la API.",
          "De ahí surgió una pregunta más grande: ¿podría combinar los dos? Sopesé las ventajas y desventajas y revisé qué dice la investigación. Por ahora mi respuesta es mantener el cerebro de Winston en un modelo en la nube y no cambiar nada. Esta entrada recoge el razonamiento y lo que me haría cambiar de opinión.",
          { "h": "Dos formas de ejecutar una IA" },
          "Un asistente como Winston es un modelo más el sistema que lo rodea, mientras que una aplicación de chat local suele ser solo el modelo.",
          {
            "fig": "img/cloud-or-local-two-ways-es.svg", "size": [760, 540],
            "mob": "img/cloud-or-local-two-ways-mobile-es.svg", "msize": [360, 728],
            "alt": "Dos diagramas. Arriba: hablas directamente con un modelo local en una ventana de chat; solo tiene conocimiento congelado, sin memoria ni herramientas. Abajo: hablas con un sistema a través de Telegram. El sistema añade memoria, ejecuta herramientas como el correo, los archivos y los recordatorios, y consulta a un modelo en la nube que solo escribe texto y nunca ejecuta nada.",
            "cap": "Chat local frente a asistente integrado · quién habla con quién"
          },
          "Arriba: un modelo solo. Abajo: un modelo con un sistema a su alrededor, y solo el sistema toca la memoria y las herramientas.",
          "**Un asistente integrado (como Winston).** Antes de que el modelo vea mi mensaje, el sistema le adjunta mi memoria, la conversación reciente y una lista de herramientas (correo, archivos, recordatorios). Ese paquete va a un modelo grande en la nube, que decide si responde o pide una herramienta. Si la pide, es el sistema, no el modelo, quien ejecuta la herramienta y devuelve el resultado.",
          "**Un modelo local en una ventana de chat (como el chat de LM Studio).** Mi mensaje va a un modelo más pequeño que se ejecuta en mi propio equipo, sin necesidad de internet. Responde con lo que aprendió en el entrenamiento, congelado en un momento dado. En este modo básico no hay memoria entre chats ni herramientas.",
          "Esa única diferencia explica la mayor parte de lo que la gente nota:",
          { "ul": [
            "**Actuar.** Un modelo solo produce texto. Enviar un correo de verdad requiere software a su alrededor que ejecute la petición.",
            "**Memoria.** Los modelos no recuerdan nada entre conversaciones. El sistema guarda la memoria y se la vuelve a poner delante al modelo cada vez.",
            "**Hardware.** Un modelo pequeño y comprimido cabe en la memoria de una laptop normal. Un modelo alojado no necesita nada de tu hardware.",
            "**Actualidad.** Todo modelo está congelado en la fecha de su entrenamiento, también los de la nube. Un asistente parece estar al día porque el sistema obtiene información reciente y la coloca en el prompt."
          ] },
          "Aun así, LM Studio es más que una ventana de chat:",
          { "ul": [
            "Puede ejecutar un servidor local que habla la API al estilo de OpenAI.",
            "Añadió las llamadas a herramientas y funciones en enero de 2025.",
            "Se convirtió en host de MCP en junio de 2025.",
            "Pide confirmación antes de ejecutar una llamada a una herramienta, a menos que elijas permitirlo siempre."
          ] },
          "Así que «LM Studio es solo un chat» describe cómo lo usa la mayoría, no lo que puede hacer.",
          { "h": "La idea híbrida: mantener la estructura y cambiar el cerebro" },
          "En teoría puedo conservar todo lo que hace de Winston lo que es y reemplazar solo el cerebro. La memoria, las herramientas, el ejecutor y el flujo de aprobación se quedan; el modelo en la nube sale y entra un modelo local.",
          {
            "fig": "img/cloud-or-local-swap-brain-es.svg", "size": [760, 336],
            "mob": "img/cloud-or-local-swap-brain-mobile-es.svg", "msize": [360, 596],
            "alt": "La estructura se mantiene: memoria, herramientas, un ejecutor que ejecuta la herramienta que pide el modelo y un flujo de aprobación con aprobación humana antes de las acciones irreversibles. Solo cambia el modelo. El modelo alojado en la nube que se usa hoy, la API de Claude, puede sustituirse por un modelo local: LM Studio en mi laptop, al que se accede mediante un endpoint estilo OpenAI.",
            "cap": "Cambiar el cerebro · la estructura no cambia"
          },
          "Todo lo que está dentro del recuadro sombreado se queda como está, y solo cambia el modelo que queda fuera de él. La línea continua es cómo funciona Winston hoy; la línea discontinua es el cambio que probaría.",
          "Como LM Studio expone un endpoint al estilo de OpenAI, muchas veces basta con apuntar el cliente a otra dirección. En el caso de Winston es más trabajo. Mi código llama directamente a la API de Claude en unos nueve sitios, así que primero necesitaría una capa de abstracción y una ronda de nuevas pruebas.",
          {
            "fig": "img/cloud-or-local-three-setups-es.svg", "size": [760, 512],
            "mob": "img/cloud-or-local-three-setups-mobile-es.svg", "msize": [360, 768],
            "alt": "Tabla que compara tres configuraciones: un chat local en modo básico, Winston hoy con un cerebro en la nube y Winston con un cerebro local. Actúa en el mundo real: el chat local no, solo texto; Winston hoy sí, con herramientas; con un cerebro local en parte, con herramientas pero hay que probarlo antes. Recuerda entre chats: no, empieza de cero; sí, lo guarda el sistema; sí, lo guarda el sistema. Tiene información actual: no, entrenamiento congelado; sí, el sistema la obtiene; sí, el sistema la obtiene. Funciona sin internet: sí; no; en parte, el modelo sí pero Telegram no. Modelo en mi hardware: sí; no, está alojado; sí, comparte la laptop con Winston.",
            "cap": "Tres configuraciones lado a lado · qué puede hacer cada una"
          },
          "Las tres primeras filas vienen del sistema, no del modelo. Las dos últimas dependen de dónde se ejecuta el modelo.",
          { "h": "Qué dice la investigación" },
          "La sabiduría popular dice que los modelos locales no pueden llamar a herramientas de forma fiable. Dos estudios recientes sugieren que el panorama tiene más matices.",
          "**AgentFloor**, un preprint de arXiv, probó 16 modelos de pesos abiertos (open-weight), de 0,27B a 32B parámetros, frente a GPT-5 en 16.542 ejecuciones puntuadas:",
          { "ul": [
            "El mejor modelo de pesos abiertos, gemma4:26b, fue estadísticamente equivalente a GPT-5 en conjunto, con un 60% de tareas completadas en ambos.",
            "Según las cuentas de los autores, cada tarea superada costó unas 15 veces menos en hardware Mac autoalojado, y gemma4:26b la terminó unas 2,5 veces más rápido.",
            "La brecha apareció en la planificación de largo plazo (long-horizon), donde GPT-5 tuvo una tasa de éxito del 10% y gemma4:26b del 0%. Ninguno es fiable ahí.",
            "El consejo de los autores: modelos pequeños para las acciones rutinarias y modelos de frontera para las tareas que exigen una planificación más profunda."
          ] },
          "**Un estudio de un framework de domótica ya desplegado** usó dos instalaciones reales de Home Assistant. Probó nueve modelos, desde 0,8B hasta un modelo de frontera alojado, en cinco puntos de llamada y 2.520 llamadas puntuadas:",
          { "ul": [
            "El mejor modelo local fue estadísticamente indistinguible de los modelos alojados en cuatro de los cinco puntos de llamada. Solo la generación de código los separó.",
            "La precisión no lo era todo al actuar: un modelo pequeño, Gemma4 E2B, llevó a cabo el 87,2% de las peticiones de dispositivos que la instalación no tenía, mientras que otro rechazó todas las peticiones que recibió.",
            "En uso real, usar el modelo alojado solo para los dos puntos generativos igualó a usarlo para todo con el 28% del gasto, en una muestra pequeña (39/43 cada uno)."
          ] },
          "Así que la pregunta útil no es si un modelo local puede llamar a herramientas. Es con qué llamadas puedo confiar en él y qué pasa cuando se equivoca.",
          { "h": "Sopesándolo para Winston" },
          "La nube lleva ventaja en planificación y en el historial que ya tengo. Lo local lleva ventaja en estabilidad, privacidad y costo por llamada. Así se traduce eso en el caso de Winston.",
          { "table": {
            "head": ["Factor", "Cerebro local", "Cerebro en la nube (hoy)"],
            "rows": [
              ["Estabilidad", "Yo decido cuándo cambia el modelo, así que nada se mueve bajo mis pies", "Una actualización puede cambiar el comportamiento: al pasar a Sonnet 5 se activó por defecto el pensamiento adaptativo y seis de mis nueve puntos de llamada a la API fallaron hasta que los arreglé"],
              ["Privacidad", "El contenido de los mensajes se queda en mi laptop", "El contenido de los mensajes va al proveedor, así que dependo de sus condiciones de datos"],
              ["Costo", "Sin tarifa por llamada, pero el hardware y la electricidad corren por mi cuenta", "Se paga por token, y los límites de historial y el prompt caching ya lo recortan"],
              ["Actuar con seguridad", "Sin demostrar para Winston, y hay que probarlo por modelo y por tarea", "El historial que tengo, y Winston añade de todos modos aprobación y verificación por encima"],
              ["Planificación de varios pasos", "Más débil: la tasa de éxito del mejor modelo abierto en el nivel de largo plazo de AgentFloor fue del 0%", "Más fuerte, aunque la tasa de éxito de GPT-5 en ese mismo nivel fue de solo el 10%"],
              ["Hardware y mantenimiento", "Compite con Winston por la memoria de la misma laptop y es un servicio más que vigilar", "Nada extra que ejecutar"],
              ["Resiliencia", "Sigue respondiendo si la API se cae, aunque Telegram sigue necesitando internet", "Deja de funcionar cuando se cae la API o mi conexión"]
            ]
          } },
          { "h": "Lo que realmente falló" },
          "Ninguno de los fallos reales de Winston se debió a que el modelo en la nube no estuviera disponible o fuera débil. Esto es lo que salió mal en la práctica:",
          { "ol": [
            "**Dos muertes silenciosas en julio.** La batería de mi laptop anterior estaba degradada y Winston murió dos veces cuando se cortó la corriente de la red eléctrica. Ahora un interruptor de hombre muerto (dead-man's switch) externo me avisa cuando Winston se queda en silencio, lo que me informa rápido pero no evita el problema.",
            "**Una copia fantasma de Winston.** Tras un reinicio, la laptop vieja volvió a lanzar sus tareas de inicio y ejecutó una segunda instancia. Las desactivé definitivamente.",
            "**Un correo roto.** Un carácter de barra vertical (|) en el asunto desplazó los campos de mi formato de comandos. El cuerpo se leyó entonces como una ruta de archivo y no se adjuntó nada. El fallo estaba en el formato que yo diseñé, no en el modelo.",
            "**Una caída breve del DNS en septiembre.** Telegram se reconectó solo, pero las llamadas a la API de Claude siguieron fallando porque el proceso de larga duración se aferraba a una conexión muerta. Solo un reinicio lo resolvió, y enseñar al proceso a reciclar sus propias conexiones defectuosas sigue en mi lista de fiabilidad.",
            "**La actualización a Sonnet 5.** El pensamiento adaptativo venía activado por defecto, así que algunas respuestas incluían un bloque de pensamiento. Seis de mis nueve puntos de llamada a la API suponían texto plano y fallaron. La solución fue código corriente: filtrar los bloques de texto."
          ] },
          "Cuatro de estos no tienen nada que ver con qué modelo esté en el medio. Un cerebro local no habría evitado el corte de corriente, la copia fantasma, el carácter de barra vertical ni la conexión muerta.",
          "El quinto es el único punto realmente a favor de lo local, porque un modelo congelado nunca cambia bajo tus pies. Incluso ahí, la reparación fue de ingeniería y no un cerebro distinto.",
          { "h": "Mi decisión: por ahora, sin cambios" },
          "Mantengo Winston en el modelo en la nube porque el argumento para cambiar no se ha medido. Tengo cuatro razones.",
          { "ol": [
            "**Winston actúa en el mundo real.** Una acción equivocada cuesta más que un párrafo más flojo. Todavía no tengo pruebas de que un modelo local lo maneje con seguridad en mis tareas.",
            "**La ventaja es real, pero no urgente.** Un modelo local sería, en general, más barato por llamada y mantendría los datos en el dispositivo. Pero los límites de historial y el prompt caching ya han recortado el consumo de tokens de Winston, y ni el costo ni la privacidad han obligado a decidir.",
            "**Mis problemas reales son operativos.** Los fallos que de verdad he tenido vinieron de mi propio código, proceso y configuración, como muestra la sección anterior.",
            "**El cambio necesita una razón medida.** Aplican los hábitos de seguridad: no se cambia un sistema que funciona por una corazonada."
          ] },
          "Para que conste, no estoy en contra de lo local: el primer intento de Winston usaba OpenClaw y Ollama en una laptop M1 de 8 GB. Lo abandoné tras errores persistentes y lo reconstruí sobre la API de Claude. Esa máquina no es una prueba justa del hardware actual.",
          { "h": "Qué me haría cambiar de opinión" },
          "Volvería a revisar esta decisión si ocurriera cualquiera de estas cosas:",
          { "ul": [
            "**Un detonante concreto.** Datos que deban quedarse en el dispositivo, o problemas medidos con el costo o la disponibilidad de la API.",
            "**Pruebas con mi propio tráfico.** Ejecutar un modelo local en modo sombra (shadow) durante una o dos semanas. Ve las mismas peticiones que Claude, pero sus salidas solo se registran, y comparo la validez del formato de comandos, la elección de herramientas y los rechazos.",
            "**Un primer paso pequeño.** Enviar al modelo local solo las llamadas de bajo riesgo, como el resumen de la mañana o la revisión rutinaria del correo. Todo lo que actúa sobre el mundo se queda con el modelo en la nube."
          ] },
          "Sea cual sea el modelo que esté en el medio, se mantienen tres salvaguardas: aprobación humana antes de las acciones irreversibles, verificación después de actuar y un registro de auditoría de solo anexado (append-only). Winston ya tiene verificación y registro de auditoría para el correo, y aprobación más registro de auditoría para los proyectos delegados.",
          { "h": "Cinco preguntas antes de cambiar un modelo" },
          "Si ejecutas tu propio asistente, estas son las preguntas que yo respondería antes de cambiarle el cerebro:",
          { "ol": [
            "**¿Realiza acciones irreversibles?** Si es así, prueba cómo actúa el nuevo modelo, no solo qué tan bien responde.",
            "**¿Debe algún dato quedarse en el dispositivo?** Si es así, lo local puede ser la única respuesta aceptable, digan lo que digan los benchmarks.",
            "**¿Has medido el problema de costo o de disponibilidad?** Mira tus propias facturas y registros antes de dar por hecho que es real.",
            "**¿Quién va a ejecutar y vigilar un segundo sistema?** Cada servicio extra es una cosa más que puede fallar en silencio.",
            "**¿Has probado con tus propias tareas?** Los benchmarks públicos son un punto de partida, no un veredicto."
          ] },
          { "h": "Conclusiones" },
          { "ul": [
            "El modelo es el cerebro, y el sistema que lo rodea es lo que hace útil a un asistente.",
            "«Local» ya no significa «sin herramientas», pero actuar con seguridad hay que probarlo por modelo y por tarea.",
            "Las puntuaciones agregadas pueden ocultar los fallos que más importan cuando el software actúa por ti.",
            "Arregla el problema que de verdad tienes y mide antes de cambiar."
          ] }
        ]
      }
    }
  },
  {
    type: "blog",
    slug: "two-bugs-after-model-upgrade",
    title: "Two bugs I found after upgrading Winston to a new Claude model",
    date: "2026-10-17",
    tag: "Build log",
    summary: "A hardcoded model name and an assumption about response format taught me what to check before any model upgrade.",
    body: [
      "When Claude Sonnet 5 became the current model, I upgraded Winston, my personal AI assistant, and found two separate problems. Both came from shortcuts I took early on.",
      { "h": "The model name was written in six places" },
      "The old model name was hardcoded across six files, so Winston had silently fallen behind once the newer model became current. The fix was small: one CLAUDE_MODEL setting in the .env file, defined once in the agents config, with every other file reading from it. The next upgrade is now a one-line change.",
      { "h": "The new model can return more than text" },
      "Sonnet 5 turns on adaptive thinking by default, which the previous model did not do unless I asked for it. That means a response can contain a thinking block as well as the text. Six of the nine places where Winston calls the Claude API assumed the content was always text, so they crashed when a thinking block showed up.",
      "I fixed it by filtering each response for text-type blocks across three files: winston.py, computer_use.py and heartbeat.py. Two other call sites, in content_qc.py and email_deepread.py, were already safe.",
      "The lesson I take from both: when a model is a dependency, treat it like one. Keep its name in one place, and never assume the shape of what comes back. If you run an AI tool inside a small business, a model change is a change to your system and deserves the same check as any other."
    ],
    tr: {
      vi: {
        title: "Hai lỗi tôi tìm thấy sau khi nâng cấp Winston lên mô hình Claude mới",
        tag: "Nhật ký xây dựng",
        summary: "Một tên mô hình bị ghi cứng và một giả định về định dạng phản hồi đã dạy tôi cần kiểm tra gì trước mỗi lần nâng cấp mô hình.",
        body: [
          "Khi Claude Sonnet 5 trở thành mô hình hiện hành, tôi nâng cấp Winston, trợ lý AI cá nhân của tôi, và tìm ra hai vấn đề riêng biệt. Cả hai đều đến từ những lối tắt tôi chọn từ lúc đầu.",
          { "h": "Tên mô hình bị ghi ở sáu nơi" },
          "Tên mô hình cũ bị ghi cứng trong sáu tệp, nên Winston đã lặng lẽ tụt lại khi mô hình mới trở thành hiện hành. Cách sửa khá nhỏ: một thiết lập CLAUDE_MODEL trong tệp .env, khai báo một lần trong cấu hình agent, và mọi tệp khác đọc từ đó. Lần nâng cấp sau giờ chỉ là đổi một dòng.",
          { "h": "Mô hình mới có thể trả về nhiều hơn văn bản" },
          "Sonnet 5 bật sẵn chế độ suy nghĩ thích ứng (adaptive thinking), còn mô hình trước thì không, trừ khi tôi yêu cầu. Nghĩa là một phản hồi có thể chứa một khối suy nghĩ bên cạnh phần văn bản. Sáu trong chín chỗ Winston gọi Claude API đã giả định nội dung luôn là văn bản, nên chúng bị lỗi khi gặp khối suy nghĩ.",
          "Tôi sửa bằng cách lọc từng phản hồi để chỉ lấy các khối dạng văn bản, trong ba tệp: winston.py, computer_use.py và heartbeat.py. Hai chỗ gọi khác, trong content_qc.py và email_deepread.py, vốn đã an toàn.",
          "Bài học tôi rút ra từ cả hai: khi một mô hình là một thành phần phụ thuộc, hãy đối xử với nó như vậy. Giữ tên của nó ở một nơi, và đừng bao giờ giả định hình dạng của thứ trả về. Nếu bạn chạy một công cụ AI trong doanh nghiệp nhỏ, đổi mô hình là thay đổi hệ thống của bạn và cần được kiểm tra như mọi thay đổi khác."
        ]
      },
      es: {
        title: "Dos errores que encontré al actualizar Winston a un nuevo modelo de Claude",
        tag: "Bitácora de desarrollo",
        summary: "Un nombre de modelo escrito a mano en el código y una suposición sobre el formato de las respuestas me enseñaron qué revisar antes de cualquier actualización de modelo.",
        body: [
          "Cuando Claude Sonnet 5 pasó a ser el modelo vigente, actualicé Winston, mi asistente personal de IA, y encontré dos problemas distintos. Los dos venían de atajos que tomé al principio.",
          { "h": "El nombre del modelo estaba escrito en seis lugares" },
          "El nombre del modelo anterior estaba escrito a mano en seis archivos, así que Winston se había quedado atrás en silencio cuando el modelo nuevo pasó a ser el vigente. La solución fue pequeña: un solo ajuste CLAUDE_MODEL en el archivo .env, definido una vez en la configuración de agentes, y todos los demás archivos leen de ahí. La próxima actualización ahora es un cambio de una línea.",
          { "h": "El modelo nuevo puede devolver más que texto" },
          "Sonnet 5 activa por defecto el pensamiento adaptativo, algo que el modelo anterior no hacía a menos que yo lo pidiera. Eso significa que una respuesta puede contener un bloque de pensamiento además del texto. Seis de los nueve lugares donde Winston llama a la API de Claude suponían que el contenido siempre era texto, así que fallaban cuando aparecía un bloque de pensamiento.",
          "Lo arreglé filtrando cada respuesta para quedarme con los bloques de tipo texto en tres archivos: winston.py, computer_use.py y heartbeat.py. Otros dos puntos de llamada, en content_qc.py y email_deepread.py, ya eran seguros.",
          "La lección que saco de ambos: cuando un modelo es una dependencia, trátalo como tal. Mantén su nombre en un solo lugar y nunca supongas la forma de lo que devuelve. Si usas una herramienta de IA en un negocio pequeño, cambiar de modelo es cambiar tu sistema y merece la misma revisión que cualquier otro cambio."
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-10-17",
    title: "AI & ICT security news: week ending 17 Oct 2026",
    date: "2026-10-17",
    tag: "Weekly digest",
    summary: "An actively exploited VPN flaw, a second critical gateway flaw, phishing emails that try to fool AI inbox assistants, and AI agents that click what they should not.",
    body: [
      "This week the pressure was on the equipment at the edge of the network, and on the AI tools that read your email and browse for you. Four stories, each with one thing you can do about it.",
      { "h": "Ivanti Connect Secure VPN zero-day is being exploited" },
      "Ivanti disclosed an authentication bypass in Connect Secure (CVE-2026-104935) that lets an attacker run commands without valid credentials. Volexity saw it used in the first week of October, chained with two other flaws to get root access, and the attackers were after LAPS passwords and BitLocker recovery keys. CISA added it to its list of known exploited vulnerabilities. Fixed versions are 25.1.1.2, 25.1.3.0, 25.1.3.1 and 22.8R2.5.",
      "If your business or your IT provider runs Connect Secure, treat this as an emergency update outside the normal patch cycle, and ask your provider to confirm the version in writing.",
      { "h": "Citrix NetScaler: a second critical flaw on top of the first" },
      "The Australian Cyber Security Centre says Australian organisations have confirmed exploitation of earlier NetScaler flaws and advises checking for signs of compromise going back to at least 4 September 2026. Citrix has now disclosed a further critical flaw (CVE-2026-107406, rated 9.5) that can allow remote code execution. It affects NetScaler devices set up for SAML sign-in, including builds that were meant to fix the earlier problems, so a second round of updates is needed. Citrix said it was not aware of exploitation of this one when it published its bulletin.",
      "Patching once is not enough here. Check that your NetScaler is on 14.1-73.46 or later, or 13.1-64.29 or later, and look at your logs for the older activity too.",
      { "h": "Phishing emails now carry hidden instructions for AI assistants" },
      "Barracuda reports phishing emails that include hidden text aimed at the AI tool summarising your inbox, using HTML comments, invisible CSS text, Base64 data and zero-width characters. The human reader gets a password-protected attachment with the password in the email. If the person ignores it, the hidden text could push an AI assistant to call the message urgent or legitimate.",
      "If you let an AI tool read your email, do not let it act on what it reads. Payments and changes to vendor bank details should always need a human to confirm through a separate channel.",
      { "h": "Researchers trick AI agents with a fake button" },
      "HiddenLayer tested a browser agent told to buy the items in a cart. A sponsored ad claiming the sale price had not been applied, with a Confirm Price button, led the agent to click it instead. The same trick worked on a standard language model and on a newer decision-style model, though less often on the latter. HiddenLayer's point is that a model which returns a decision still turns that decision into an action in your systems.",
      "If you give an AI agent the ability to click, send or buy, limit what it can touch and keep a human approval step on anything involving money.",
      { "h": "What this means for my products" },
      "Two of these stories are about patching and response, which is where the SME Security Starter Kit helps: the incident response runbook gives you a plan for the day a flaw like these is exploited, and the vendor and risk assessment matrix helps you ask your IT provider the right questions. The other two are about trusting what an AI reads. Deskmate and Winston both answer from documents or messages, so the same rule applies to them: treat outside content as data, not as instructions."
    ],
    sources: [
      { "title": "Rapid7: Ivanti Connect Secure zero-day exploited in the wild (CVE-2026-104935)", "url": "https://www.rapid7.com/blog/post/etr-ivanti-connect-secure-zero-day-exploited-in-the-wild-cve-2026-104935/" },
      { "title": "ITnews: NetScaler builds that fixed zero-days carry critical flaw, too", "url": "https://www.itnews.com.au/news/netscaler-builds-that-fixed-zero-days-carry-critical-flaw-too-629542" },
      { "title": "eSecurity Planet: Citrix Patches Critical NetScaler RCE Flaw Rated 9.5: Who's Affected?", "url": "https://www.esecurityplanet.com/threats/news-citrix-netscaler-rce-cve-2026-107406/" },
      { "title": "Cyber Daily: Patch now, hackers already targeting newly disclosed Ivanti Connect Secure zero-day", "url": "https://www.cyberdaily.au/security/14296-patch-now-hackers-already-targeting-newly-disclosed-ivanti-connect-secure-zero-day" },
      { "title": "Cyber Daily: Act now, Aussie cyber agency updates Citrix NetScaler critical alert to include brand new vulnerability", "url": "https://www.cyberdaily.au/security/14282-act-now-aussie-cyber-agency-updates-citrix-netscaler-critical-alert-to-include-brand-new-vulnerability" },
      { "title": "Cyber Daily: Critical alert, Aussie orgs targeted in Citrix NetScaler hacking campaign", "url": "https://www.cyberdaily.au/security/14252-critical-alert-aussie-orgs-targeted-in-citrix-netscaler-hacking-campaign" },
      { "title": "Infosecurity Magazine: Attackers Hide AI Prompt Injections Inside Phishing Emails", "url": "https://www.infosecurity-magazine.com/news/attackers-hide-ai-prompt/" },
      { "title": "The Register: Jev and other decision models can still be tricked with prompt injection", "url": "https://theregister.com/ai-and-ml/2026/10/15/jev-and-other-decision-models-can-still-be-tricked-with-prompt-injection/5303184" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 17 tháng 10 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một lỗ hổng VPN đang bị khai thác, một lỗ hổng cổng mạng nghiêm trọng thứ hai, email lừa đảo cố đánh lừa trợ lý AI đọc hộp thư, và các agent AI bấm vào thứ không nên bấm.",
        body: [
          "Tuần này áp lực đổ lên thiết bị ở rìa mạng, và lên các công cụ AI đọc email hay duyệt web thay bạn. Bốn tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "Lỗ hổng zero-day của VPN Ivanti Connect Secure đang bị khai thác" },
          "Ivanti công bố một lỗ hổng vượt qua xác thực trong Connect Secure (CVE-2026-104935) cho phép kẻ tấn công chạy lệnh mà không cần thông tin đăng nhập hợp lệ. Volexity thấy nó bị dùng trong tuần đầu tháng 10, kết hợp với hai lỗ hổng khác để lấy quyền root, và kẻ tấn công nhắm tới mật khẩu LAPS và khóa khôi phục BitLocker. CISA đã thêm nó vào danh sách các lỗ hổng đã bị khai thác. Các phiên bản đã vá là 25.1.1.2, 25.1.3.0, 25.1.3.1 và 22.8R2.5.",
          "Nếu doanh nghiệp bạn hoặc nhà cung cấp IT của bạn chạy Connect Secure, hãy coi đây là bản cập nhật khẩn cấp ngoài chu kỳ vá thông thường, và nhờ nhà cung cấp xác nhận phiên bản bằng văn bản.",
          { "h": "Citrix NetScaler: lỗ hổng nghiêm trọng thứ hai chồng lên lỗ hổng đầu" },
          "Trung tâm An ninh mạng Úc (ACSC) cho biết các tổ chức Úc đã xác nhận bị khai thác qua các lỗ hổng NetScaler trước đó, và khuyên kiểm tra dấu hiệu bị xâm nhập từ ít nhất ngày 4 tháng 9 năm 2026. Citrix nay đã công bố thêm một lỗ hổng nghiêm trọng nữa (CVE-2026-107406, điểm 9,5) có thể cho phép thực thi mã từ xa. Nó ảnh hưởng tới các thiết bị NetScaler cấu hình đăng nhập SAML, kể cả các bản dựng vốn nhằm sửa những vấn đề trước đó, nên cần một đợt cập nhật thứ hai. Citrix cho biết khi công bố bản tin của mình họ chưa biết có vụ khai thác nào với lỗ hổng này.",
          "Vá một lần là chưa đủ. Hãy kiểm tra NetScaler của bạn đang ở bản 14.1-73.46 trở lên, hoặc 13.1-64.29 trở lên, và xem nhật ký để tìm cả hoạt động cũ hơn.",
          { "h": "Email lừa đảo giờ mang theo chỉ dẫn ẩn cho trợ lý AI" },
          "Barracuda báo cáo các email lừa đảo chứa văn bản ẩn nhắm vào công cụ AI tóm tắt hộp thư của bạn, dùng chú thích HTML, chữ CSS vô hình, dữ liệu Base64 và ký tự độ rộng bằng không. Người đọc nhận một tệp đính kèm có mật khẩu, mật khẩu nằm ngay trong email. Nếu người đó bỏ qua, văn bản ẩn có thể đẩy trợ lý AI gọi thư này là khẩn cấp hoặc hợp lệ.",
          "Nếu bạn cho công cụ AI đọc email, đừng để nó hành động theo những gì nó đọc. Thanh toán và thay đổi thông tin ngân hàng của nhà cung cấp luôn phải có người xác nhận qua một kênh riêng.",
          { "h": "Nhà nghiên cứu lừa agent AI bằng một nút giả" },
          "HiddenLayer thử nghiệm một agent duyệt web được giao mua các món trong giỏ hàng. Một quảng cáo tài trợ nói rằng giá khuyến mãi chưa được áp dụng, kèm nút Confirm Price, đã khiến agent bấm vào đó. Mánh này cũng hiệu quả với một mô hình ngôn ngữ thông thường và với một mô hình kiểu ra quyết định mới hơn, dù ít hơn ở mô hình sau. Ý của HiddenLayer là một mô hình trả về quyết định vẫn biến quyết định đó thành hành động trong hệ thống của bạn.",
          "Nếu bạn cho agent AI khả năng bấm, gửi hoặc mua, hãy giới hạn những gì nó chạm được và giữ bước người duyệt cho mọi việc liên quan tới tiền.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Hai trong số các tin này nói về vá lỗi và ứng phó, đúng chỗ SME Security Starter Kit giúp được: sổ tay ứng phó sự cố cho bạn một kế hoạch cho ngày một lỗ hổng như thế bị khai thác, và ma trận đánh giá nhà cung cấp và rủi ro giúp bạn hỏi nhà cung cấp IT đúng câu hỏi. Hai tin còn lại nói về việc tin vào những gì AI đọc. Deskmate và Winston đều trả lời từ tài liệu hoặc tin nhắn, nên cùng một quy tắc áp dụng: coi nội dung từ bên ngoài là dữ liệu, không phải chỉ thị."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 17 de octubre de 2026",
        tag: "Resumen semanal",
        summary: "Una falla de VPN que ya se está explotando, una segunda falla crítica en una puerta de enlace, correos de phishing que intentan engañar a los asistentes de IA de la bandeja de entrada, y agentes de IA que hacen clic donde no deben.",
        body: [
          "Esta semana la presión estuvo en los equipos del borde de la red y en las herramientas de IA que leen tu correo y navegan por ti. Cuatro noticias, cada una con algo concreto que puedes hacer.",
          { "h": "El zero-day de la VPN Ivanti Connect Secure está siendo explotado" },
          "Ivanti reveló una omisión de autenticación en Connect Secure (CVE-2026-104935) que permite a un atacante ejecutar comandos sin credenciales válidas. Volexity la vio en uso en la primera semana de octubre, encadenada con otras dos fallas para obtener acceso root, y los atacantes buscaban contraseñas de LAPS y claves de recuperación de BitLocker. CISA la añadió a su lista de vulnerabilidades explotadas conocidas. Las versiones corregidas son 25.1.1.2, 25.1.3.0, 25.1.3.1 y 22.8R2.5.",
          "Si tu negocio o tu proveedor de TI usa Connect Secure, trátalo como una actualización de emergencia fuera del ciclo normal de parches, y pide a tu proveedor que confirme la versión por escrito.",
          { "h": "Citrix NetScaler: una segunda falla crítica encima de la primera" },
          "El Centro Australiano de Ciberseguridad (ACSC) dice que organizaciones australianas han confirmado la explotación de fallas anteriores de NetScaler y recomienda buscar señales de compromiso desde al menos el 4 de septiembre de 2026. Citrix ha revelado ahora otra falla crítica (CVE-2026-107406, con puntuación 9,5) que puede permitir la ejecución remota de código. Afecta a los equipos NetScaler configurados para el inicio de sesión SAML, incluidas las versiones que debían corregir los problemas anteriores, así que hace falta una segunda ronda de actualizaciones. Citrix dijo que, al publicar su boletín, no tenía conocimiento de que esta se estuviera explotando.",
          "Aplicar el parche una vez no basta. Comprueba que tu NetScaler esté en la versión 14.1-73.46 o posterior, o 13.1-64.29 o posterior, y revisa tus registros en busca también de la actividad anterior.",
          { "h": "Los correos de phishing ahora llevan instrucciones ocultas para asistentes de IA" },
          "Barracuda informa de correos de phishing con texto oculto dirigido a la herramienta de IA que resume tu bandeja de entrada, usando comentarios HTML, texto CSS invisible, datos Base64 y caracteres de ancho cero. La persona recibe un adjunto protegido con contraseña, y la contraseña viene en el propio correo. Si la persona lo ignora, el texto oculto podría empujar a un asistente de IA a presentar el mensaje como urgente o legítimo.",
          "Si dejas que una herramienta de IA lea tu correo, no dejes que actúe según lo que lee. Los pagos y los cambios en los datos bancarios de proveedores siempre deben requerir que una persona los confirme por otro canal.",
          { "h": "Investigadores engañan a agentes de IA con un botón falso" },
          "HiddenLayer probó un agente de navegación al que se le pidió comprar los artículos de un carrito. Un anuncio patrocinado que decía que el precio de oferta no se había aplicado, con un botón Confirm Price, hizo que el agente hiciera clic en él. El mismo truco funcionó con un modelo de lenguaje estándar y con un modelo más nuevo de tipo decisión, aunque con menos frecuencia en este último. La idea de HiddenLayer es que un modelo que devuelve una decisión sigue convirtiendo esa decisión en una acción en tus sistemas.",
          "Si le das a un agente de IA la capacidad de hacer clic, enviar o comprar, limita lo que puede tocar y mantén un paso de aprobación humana en todo lo que involucre dinero.",
          { "h": "Qué significa esto para mis productos" },
          "Dos de estas noticias tratan de parches y de respuesta, que es donde ayuda el SME Security Starter Kit: el manual de respuesta a incidentes te da un plan para el día en que se explote una falla como estas, y la matriz de evaluación de proveedores y riesgos te ayuda a hacerle las preguntas correctas a tu proveedor de TI. Las otras dos tratan de confiar en lo que lee una IA. Deskmate y Winston responden a partir de documentos o mensajes, así que la misma regla se aplica a ellos: trata el contenido externo como datos, no como instrucciones."
        ]
      }
    }
  },
  {
    type: "blog",
    slug: "about-me",
    title: "About me: from retail floors to IT security",
    date: "2026-10-16",
    tag: "About me",
    summary: "Who I am, where I have worked, and why an operations person is moving into IT security and building AI tools for small businesses.",
    body: [
      "I'm Raymond Doan, based in Perth, Western Australia. In the day I'm second in charge at a Macpac store, helping run daily operations and a team of about 10. The rest of my time goes into building software, studying security, and making a few small products for people who run small businesses.",
      { "h": "Where I come from" },
      "My career started in retail banking in Ho Chi Minh City, where identity checks, accurate payments and careful handling of customer data were just part of the job. After that I was personal assistant to the general manager of a manufacturing company, then ran my own small services and trading business in Vietnam for three years. In 2018 I moved into retail at Courts in Singapore and worked up from sales associate to Deputy Store Manager, leading a team of 17. Now I'm at Macpac.",
      "Along the way I kept doing the same kind of work: keeping records accurate, writing procedures people actually follow, and noticing when something does not add up. At Courts I rebuilt the stocktake process in my department and got inventory shrinkage down to 0%, and I designed a training program that brought new hires to full proficiency in three months. That is operations work, but it is also the daily habits that security depends on.",
      { "h": "The security side" },
      "I have a Master of Commerce in Information Systems and Technology from Curtin University, with coursework in cybersecurity, network security and computer forensics. In the labs I analysed traffic with Wireshark, worked with Snort and OSSEC for intrusion detection, and did disk and memory analysis with WinHex and Kali Linux. I'm working toward CompTIA Security+, and I'm looking for an entry level or graduate role in IT security in Perth while I keep working at Macpac.",
      { "h": "What I build" },
      "Outside work I build things that put those two sides together. In 2025 I started building Winston, a personal AI assistant written in Python on top of the Claude API, controlled through Telegram, and it runs on my own machine. Deskmate is a Telegram bot that answers staff questions about company policy using a business's own documents, and there is a build guide for Winston too. I've also put together a set of practical security templates for small businesses. All of it is on my Gumroad store.",
      "This blog is where I write about all of it: what I build, what breaks, and what I learn. There is also a weekly digest of AI and security news for people who run small businesses and do not have time to follow it."
    ],
    tr: {
      vi: {
        title: "Về tôi: từ sàn bán lẻ đến bảo mật CNTT",
        tag: "Về tôi",
        summary: "Tôi là ai, tôi đã làm việc ở đâu, và vì sao một người làm vận hành đang chuyển sang bảo mật CNTT và xây công cụ AI cho doanh nghiệp nhỏ.",
        body: [
          "Tôi là Raymond Doan, sống ở Perth, Tây Úc. Ban ngày tôi là phó cửa hàng trưởng tại một cửa hàng Macpac, cùng điều hành hoạt động hằng ngày và một đội khoảng 10 người. Thời gian còn lại tôi dành để xây phần mềm, học về bảo mật và làm vài sản phẩm nhỏ cho những người điều hành doanh nghiệp nhỏ.",
          { "h": "Xuất phát điểm của tôi" },
          "Sự nghiệp của tôi bắt đầu ở mảng ngân hàng bán lẻ tại Thành phố Hồ Chí Minh, nơi việc kiểm tra danh tính, thanh toán chính xác và xử lý cẩn thận dữ liệu khách hàng đơn giản là một phần của công việc. Sau đó tôi làm trợ lý riêng cho tổng giám đốc của một công ty sản xuất, rồi tự điều hành một doanh nghiệp nhỏ về dịch vụ và thương mại ở Việt Nam trong ba năm. Năm 2018, tôi chuyển sang ngành bán lẻ tại Courts ở Singapore và đi lên từ nhân viên bán hàng đến Phó cửa hàng trưởng, dẫn dắt một đội 17 người. Bây giờ tôi đang ở Macpac.",
          "Suốt chặng đường đó, tôi vẫn làm cùng một kiểu việc: giữ cho hồ sơ chính xác, viết quy trình mà mọi người thực sự làm theo, và nhận ra khi có điều gì đó không khớp. Ở Courts, tôi đã làm lại quy trình kiểm kê trong bộ phận của mình và đưa mức hao hụt hàng tồn kho xuống 0%, đồng thời thiết kế một chương trình đào tạo giúp nhân viên mới thành thạo hoàn toàn trong ba tháng. Đó là công việc vận hành, nhưng cũng chính là những thói quen hằng ngày mà bảo mật phải dựa vào.",
          { "h": "Mảng bảo mật" },
          "Tôi có bằng Thạc sĩ Thương mại (Master of Commerce), chuyên ngành Hệ thống thông tin và Công nghệ, của Đại học Curtin, với các môn học về an ninh mạng, bảo mật mạng và pháp y máy tính. Trong các buổi thực hành, tôi phân tích lưu lượng mạng bằng Wireshark, dùng Snort và OSSEC để phát hiện xâm nhập, và phân tích ổ đĩa lẫn bộ nhớ bằng WinHex và Kali Linux. Tôi đang chuẩn bị để lấy chứng chỉ CompTIA Security+, và đang tìm một vị trí đầu vào hoặc dành cho người mới tốt nghiệp trong lĩnh vực bảo mật CNTT tại Perth, trong lúc vẫn làm việc ở Macpac.",
          { "h": "Những gì tôi xây dựng" },
          "Ngoài giờ làm việc, tôi xây những thứ kết hợp hai mảng đó lại với nhau. Năm 2025, tôi bắt đầu xây Winston, một trợ lý AI cá nhân viết bằng Python trên nền Claude API, điều khiển qua Telegram và chạy trên chính máy của tôi. Deskmate là một bot Telegram trả lời câu hỏi của nhân viên về chính sách công ty, dựa trên chính các tài liệu của doanh nghiệp đó, và cũng có một cuốn hướng dẫn cách xây Winston. Tôi cũng đã tổng hợp một bộ mẫu tài liệu bảo mật thiết thực cho doanh nghiệp nhỏ. Tất cả đều có trên cửa hàng Gumroad của tôi.",
          "Blog này là nơi tôi viết về tất cả những điều đó: tôi xây gì, cái gì hỏng, và tôi học được gì. Ngoài ra còn có bản tin hằng tuần tóm tắt tin tức AI và bảo mật, dành cho những người điều hành doanh nghiệp nhỏ mà không có thời gian theo dõi."
        ]
      },
      es: {
        title: "Sobre mí: del comercio minorista a la seguridad informática",
        tag: "Sobre mí",
        summary: "Quién soy, dónde he trabajado y por qué una persona de operaciones está dando el salto a la seguridad informática y a crear herramientas de IA para negocios pequeños.",
        body: [
          "Soy Raymond Doan y vivo en Perth, Australia Occidental. De día soy el segundo al mando en una tienda de Macpac, donde ayudo a dirigir las operaciones diarias y a un equipo de unas 10 personas. El resto de mi tiempo lo dedico a crear software, estudiar seguridad y hacer unos cuantos productos pequeños para quienes dirigen negocios pequeños.",
          { "h": "De dónde vengo" },
          "Mi carrera empezó en la banca minorista de Ciudad Ho Chi Minh, donde las verificaciones de identidad, los pagos exactos y el manejo cuidadoso de los datos de los clientes eran simplemente parte del trabajo. Después fui asistente personal del director general de una empresa manufacturera y luego dirigí durante tres años mi propio pequeño negocio de servicios y comercio en Vietnam. En 2018 pasé al comercio minorista en Courts, en Singapur, y fui ascendiendo de asesor de ventas a gerente adjunto de tienda, al frente de un equipo de 17 personas. Ahora estoy en Macpac.",
          "En todo ese camino seguí haciendo el mismo tipo de trabajo: mantener los registros exactos, escribir procedimientos que la gente realmente sigue y notar cuando algo no cuadra. En Courts rehíce el proceso de conteo de inventario de mi departamento y reduje la merma de inventario a 0%, y diseñé un programa de capacitación que llevó a los nuevos empleados a dominar el puesto por completo en tres meses. Eso es trabajo de operaciones, pero también son los hábitos diarios de los que depende la seguridad.",
          { "h": "El lado de la seguridad" },
          "Tengo un máster en Comercio (Master of Commerce), con especialización en Sistemas de Información y Tecnología, por la Universidad Curtin, con materias de ciberseguridad, seguridad de redes e informática forense. En los laboratorios analicé tráfico con Wireshark, trabajé con Snort y OSSEC para la detección de intrusiones e hice análisis de discos y de memoria con WinHex y Kali Linux. Me estoy preparando para obtener la certificación CompTIA Security+ y busco un puesto de nivel inicial o para recién graduados en seguridad informática en Perth mientras sigo trabajando en Macpac.",
          { "h": "Lo que construyo" },
          "Fuera del trabajo construyo cosas que unen esos dos lados. En 2025 empecé a construir Winston, un asistente personal de IA escrito en Python sobre la API de Claude, controlado por Telegram y que funciona en mi propio equipo. Deskmate es un bot de Telegram que responde las preguntas del personal sobre las políticas de la empresa usando los propios documentos del negocio, y también hay una guía para construir Winston. Además, armé un conjunto de plantillas de seguridad prácticas para negocios pequeños. Todo está en mi tienda de Gumroad.",
          "Este blog es donde escribo sobre todo eso: lo que construyo, lo que falla y lo que aprendo. También hay un resumen semanal de noticias de IA y seguridad para quienes dirigen negocios pequeños y no tienen tiempo de seguirlas."
        ]
      }
    }
  }
];
