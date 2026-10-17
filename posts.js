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

   English is the source text. A translation must have the same body, item for item (a paragraph for a
   paragraph, a subheading for a subheading); if it does not, the page shows the English post with a note.
   Source titles and links are not translated. A post with no translation shows in English in every language.

   A post goes live only after Raymond approves the draft. */
window.BLOG_POSTS = [
  {
    type: "blog",
    slug: "selftest-blog-2099-01-02",
    title: "Two bugs I found after upgrading Winston to a new Claude model",
    date: "2099-01-02",
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
    slug: "news-2099-01-02",
    title: "AI & ICT security news: week ending 2 Jan 2099",
    date: "2099-01-02",
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
    ]
  }
];
