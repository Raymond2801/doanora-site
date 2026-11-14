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
    slug: "news-2026-11-14",
    title: "AI & ICT security news: week ending 14 Nov 2026",
    date: "2026-11-14",
    tag: "Weekly digest",
    summary: "A breach at an AI vendor that exposed Notion AI chats, a documentation service breached through its sign-in flow, and an Android flaw that Google has now reopened.",
    body: [
      "This week's stories share one thread: the AI tools and online services your business plugs into hold your data and your keys, and you often hear about a break-in only when they tell you. Three stories, each with one thing you can do.",
      { "h": "Fireworks AI: a breach at an AI vendor exposed Notion AI chats" },
      "Fireworks AI, a platform that businesses use to run open AI models, disclosed a second security incident in about a month. According to Fireworks, a cloud provider hosting its research machines had an incident on 23 October, and the attacker used that access the next day to reach Fireworks systems. Fireworks says some customers had resource metadata, billing and shipping addresses, invoice and payment history, account balances and credit usage exposed, and some had incomplete model weights and datasets exposed. It says it does not store payment card numbers. It believes the attacker is a financially motivated group interested in selling access to AI models, and it had already reported an earlier October incident in which API keys and tokens for a limited number of accounts were reached.",
      "Notion, one of Fireworks' customers, said fewer than 1% of its workspaces were affected. The exposed data was chat transcripts from Notion AI, meaning anything typed into or answered by the AI in a chat. Notion says Fireworks kept the data despite a contract promising zero retention, and that it disconnected from Fireworks by 3 November. For most affected workspaces the transcripts had no label tying them to a person or company. Notion recommends treating the data as exposed and rotating any password or API key that someone pasted into Notion AI. The weak point was not Notion or the customer's own network. It was a vendor behind a vendor, holding what staff had typed. Write down which AI tools your business uses and what each one is allowed to see, and tell staff never to paste passwords or keys into an AI chat. Then if a vendor reports an incident, you know what to rotate.",
      { "h": "GitBook: attackers got in through sign-in and may have reached customer tokens" },
      "GitBook, a service many teams use to publish documentation, disclosed a breach that began on 2 November. In its own write-up, GitBook says the attacker used a flaw in its single sign-on process to create sessions as GitBook staff, then used the credentials of a misconfigured GitHub app to reach internal code, and finally obtained a Cloudflare API key that led to production secrets. GitBook took the service offline, rotated its secrets and invalidated customer API tokens. It says the attack focused on one customer, but it treats all customers as exposed: API tokens, integration tokens and secrets, session signing secrets, and questions that visitors asked the GitBook Assistant may have been reached. It says billing information, passwords and IP addresses were not compromised. GitBook describes the attack as highly targeted and credits automation and AI for its speed, though Decrypt notes it has not explained how AI agents were used.",
      "If you use GitBook, create a new API token, rotate the secrets of tools connected to it, and sign the GitBook MCP server in again, as GitBook advises. For everyone else, the lesson is one GitBook draws itself: a software vendor sits inside your security perimeter. Keep a list of the vendors that hold your tokens or documents, give each only the access it needs, and decide in advance how you would revoke it.",
      { "h": "GhostMap: an Android flaw that Google has now reopened" },
      "On 5 November, Bitdefender Labs published GhostMap, a flaw in how Android handles app files. A specially crafted app can put an Android phone into a crash loop just by being installed, with no need to open it or grant permissions. Bitdefender found that restarting and safe mode did not stop it, and recovery may need a factory reset that erases anything not backed up. It says the flaw affects Android 10 and later. Google first declined to treat it as a security fix, but Bitdefender reported on 9 November that Google reopened the investigation and raised the severity to High. No fix or CVE has been confirmed. Bitdefender says it has not seen the crash loop used against victims; it found the bug when a banking malware sample crashed its analysis systems.",
      "As described, the effect is a locked-up phone rather than stolen data, but a work phone stuck in a loop is still a bad day. Back up your staff's phones, be wary of any request to install an app file that arrives in a message, an ad or an unfamiliar website, and get apps from their official source. Install Android security updates as soon as they are available.",
      { "h": "What this means for my products" },
      "Two of these stories are about vendors and the keys they hold. The SME AI Usage Policy and Tool Vetting Kit includes an Approved AI Tool Register, a colour guide (Green, Amber, Red and Never) for what may go into an AI tool, and an AI Incident Report form. The SME Vendor Risk Assessment Matrix lets you list up to 30 suppliers, score the risk and send each one a security questionnaire. If a vendor tells you something like this has happened to them, the SME Security Incident Response Runbook has first-step actions for a compromised account and a Key Contacts and Escalation List that you fill in before you need it."
    ],
    sources: [
      { "title": "Notion: Notice about the Fireworks AI incident that may impact some Notion workspaces", "url": "https://notion.com/help/security-incident-involving-a-third-party-ai-vendor" },
      { "title": "BleepingComputer: Fireworks AI discloses new breach after cloud provider hack", "url": "https://www.bleepingcomputer.com/news/security/fireworks-ai-discloses-new-breach-after-cloud-provider-hack/" },
      { "title": "eSecurityPlanet: Fireworks AI Hit by Second Breach: Notion Chat Transcripts Exposed", "url": "https://www.esecurityplanet.com/threats/news-fireworks-ai-second-breach-notion-chat-transcripts/" },
      { "title": "TechCrunch: Cyberattack on Fireworks AI allowed hackers to access Notion customers' chat transcripts", "url": "https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts" },
      { "title": "GitBook: Security incident, November 2026", "url": "https://www.gitbook.com/status/security-incident-2026-11-03" },
      { "title": "Decrypt: Crypto Docs Host GitBook Hit by AI Agent Security Breach, Urges Users to Rotate Keys", "url": "https://decrypt.co/382465/crypto-docs-gitbook-ai-agent-security-breach" },
      { "title": "Hackaday: This Week in Security: Four-Digit Patch Tuesday, SSH Exploited, GitBook Breach, Android GhostMap", "url": "https://hackaday.com/2026/11/13/this-week-in-security-four-digit-patch-tuesday-ssh-exploited-gitbook-breach-android-ghostmap/" },
      { "title": "Bitdefender Labs: GhostMap: The Android flaw that crashes your phone before you open the app", "url": "https://www.bitdefender.com/en-au/blog/labs/ghostmap-android" },
      { "title": "Bitdefender: Google reopens GhostMap Android flaw and raises severity to High", "url": "https://www.bitdefender.com/en-us/blog/hotforsecurity/google-reopens-ghostmap-investigation" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 14 tháng 11 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một vụ xâm nhập nhà cung cấp AI làm lộ các cuộc trò chuyện Notion AI, một dịch vụ tài liệu bị xâm nhập qua quy trình đăng nhập của chính nó, và một lỗ hổng Android mà Google vừa mở lại.",
        body: [
          "Các tin tuần này có chung một sợi chỉ: các công cụ AI và dịch vụ trực tuyến mà doanh nghiệp bạn kết nối vào đang giữ dữ liệu và khóa của bạn, và bạn thường chỉ biết có kẻ đột nhập khi chính họ báo cho bạn. Ba tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "Fireworks AI: một vụ xâm nhập nhà cung cấp AI làm lộ các cuộc trò chuyện Notion AI" },
          "Fireworks AI, một nền tảng mà các doanh nghiệp dùng để chạy các mô hình AI mở, công bố sự cố bảo mật thứ hai trong khoảng một tháng. Theo Fireworks, một nhà cung cấp đám mây lưu trữ các máy nghiên cứu của họ gặp sự cố vào ngày 23 tháng 10, và hôm sau kẻ tấn công dùng quyền truy cập đó để vào các hệ thống của Fireworks. Fireworks cho biết một số khách hàng bị lộ siêu dữ liệu tài nguyên, địa chỉ thanh toán và giao hàng, lịch sử hóa đơn và thanh toán, số dư tài khoản và mức dùng tín dụng, và một số khác bị lộ trọng số mô hình và bộ dữ liệu chưa đầy đủ. Họ nói không lưu số thẻ thanh toán. Họ cho rằng kẻ tấn công là một nhóm có động cơ tài chính muốn bán quyền truy cập vào các mô hình AI, và trước đó họ đã báo cáo một sự cố hồi đầu tháng 10 trong đó khóa API và token của một số ít tài khoản bị truy cập.",
          "Notion, một trong các khách hàng của Fireworks, cho biết dưới 1% không gian làm việc (workspace) của họ bị ảnh hưởng. Dữ liệu bị lộ là các bản ghi cuộc trò chuyện từ Notion AI, tức là mọi thứ được gõ vào hoặc được AI trả lời trong một cuộc trò chuyện. Notion nói Fireworks vẫn giữ dữ liệu dù hợp đồng hứa không lưu giữ, và Notion đã ngắt kết nối với Fireworks chậm nhất là ngày 3 tháng 11. Với phần lớn các workspace bị ảnh hưởng, các bản ghi không có nhãn nào gắn với một cá nhân hay công ty. Notion khuyên hãy coi dữ liệu đó là đã bị lộ và đổi mọi mật khẩu hay khóa API mà ai đó đã dán vào Notion AI. Điểm yếu không nằm ở Notion hay mạng của chính khách hàng. Nó nằm ở một nhà cung cấp đứng sau một nhà cung cấp khác, đang giữ những gì nhân viên đã gõ. Hãy ghi lại doanh nghiệp bạn dùng những công cụ AI nào và mỗi công cụ được phép thấy gì, và dặn nhân viên không bao giờ dán mật khẩu hay khóa vào một cuộc trò chuyện với AI. Như vậy khi một nhà cung cấp báo có sự cố, bạn biết cần đổi những gì.",
          { "h": "GitBook: kẻ tấn công vào qua đăng nhập và có thể đã chạm tới token của khách hàng" },
          "GitBook, một dịch vụ nhiều nhóm dùng để xuất bản tài liệu, công bố một vụ xâm nhập bắt đầu từ ngày 2 tháng 11. Trong bản tường thuật của chính mình, GitBook cho biết kẻ tấn công dùng một lỗ hổng trong quy trình đăng nhập một lần (single sign-on) để tạo các phiên đăng nhập như nhân viên GitBook, rồi dùng thông tin xác thực của một ứng dụng GitHub cấu hình sai để vào mã nguồn nội bộ, và cuối cùng lấy được một khóa API Cloudflare dẫn tới các bí mật của môi trường sản xuất. GitBook đã đưa dịch vụ ngoại tuyến, đổi toàn bộ bí mật của mình và vô hiệu hóa các token API của khách hàng. Họ nói cuộc tấn công nhắm vào một khách hàng, nhưng vẫn coi mọi khách hàng là đã bị lộ: token API, token và bí mật tích hợp, bí mật ký phiên, và các câu hỏi mà người truy cập đã hỏi GitBook Assistant có thể đã bị truy cập. Họ nói thông tin thanh toán, mật khẩu và địa chỉ IP không bị xâm phạm. GitBook mô tả cuộc tấn công là có mục tiêu rất cụ thể và cho rằng tự động hóa cùng AI là lý do khiến nó diễn ra nhanh, dù Decrypt lưu ý GitBook chưa giải thích các tác tử AI đã được dùng ra sao.",
          "Nếu bạn dùng GitBook, hãy tạo một token API mới, đổi các bí mật của những công cụ kết nối với nó, và xác thực lại máy chủ MCP của GitBook, đúng như GitBook khuyến cáo. Với mọi người còn lại, bài học là điều chính GitBook rút ra: một nhà cung cấp phần mềm nằm bên trong vành đai an ninh của bạn. Hãy giữ một danh sách các nhà cung cấp đang giữ token hay tài liệu của bạn, chỉ cấp cho mỗi bên quyền truy cập họ cần, và quyết định trước cách bạn sẽ thu hồi quyền đó.",
          { "h": "GhostMap: một lỗ hổng Android mà Google vừa mở lại" },
          "Ngày 5 tháng 11, Bitdefender Labs công bố GhostMap, một lỗ hổng trong cách Android xử lý các tệp ứng dụng. Một ứng dụng được chế tạo đặc biệt có thể khiến điện thoại Android rơi vào vòng lặp sập chỉ cần được cài đặt, không cần mở ứng dụng hay cấp quyền. Bitdefender thấy khởi động lại và chế độ an toàn đều không ngăn được, và việc khôi phục có thể cần đặt lại về cài đặt gốc, xóa mọi thứ chưa được sao lưu. Họ nói lỗ hổng ảnh hưởng đến Android 10 trở lên. Ban đầu Google từ chối coi đây là một bản sửa bảo mật, nhưng ngày 9 tháng 11 Bitdefender báo rằng Google đã mở lại cuộc điều tra và nâng mức độ nghiêm trọng lên Cao. Chưa có bản sửa hay mã CVE nào được xác nhận. Bitdefender cho biết chưa thấy vòng lặp sập này bị dùng để tấn công nạn nhân; họ phát hiện lỗi khi một mẫu mã độc ngân hàng làm sập các hệ thống phân tích của họ.",
          "Như được mô tả, hậu quả là chiếc điện thoại bị treo chứ không phải dữ liệu bị đánh cắp, nhưng một chiếc điện thoại công việc mắc kẹt trong vòng lặp vẫn là một ngày tồi tệ. Hãy sao lưu điện thoại của nhân viên, cảnh giác với mọi yêu cầu cài một tệp ứng dụng gửi đến qua tin nhắn, quảng cáo hay một trang web lạ, và chỉ lấy ứng dụng từ nguồn chính thức. Cài các bản cập nhật bảo mật Android ngay khi có.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Hai trong số các tin này nói về các nhà cung cấp và những khóa họ đang giữ. SME AI Usage Policy and Tool Vetting Kit có một Approved AI Tool Register, một bảng màu hướng dẫn (Xanh lá, Vàng, Đỏ và Không bao giờ) cho biết thứ gì được phép đưa vào một công cụ AI, và một biểu mẫu AI Incident Report. SME Vendor Risk Assessment Matrix cho bạn liệt kê tối đa 30 nhà cung cấp, chấm điểm rủi ro và gửi cho mỗi bên một bảng câu hỏi bảo mật. Nếu một nhà cung cấp báo với bạn rằng họ gặp chuyện như thế này, SME Security Incident Response Runbook có các bước đầu tiên cho một tài khoản bị xâm nhập và một danh sách liên hệ chính và chuyển cấp xử lý mà bạn điền sẵn trước khi cần đến."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 14 de noviembre de 2026",
        tag: "Resumen semanal",
        summary: "Una filtración en un proveedor de IA que expuso chats de Notion AI, un servicio de documentación vulnerado a través de su flujo de inicio de sesión, y una falla de Android que Google ha reabierto.",
        body: [
          "Las noticias de esta semana comparten un hilo: las herramientas de IA y los servicios en línea a los que conectas tu negocio guardan tus datos y tus claves, y muchas veces solo te enteras de una intrusión cuando ellos te lo cuentan. Tres noticias, cada una con algo que puedes hacer.",
          { "h": "Fireworks AI: una filtración en un proveedor de IA expuso chats de Notion AI" },
          "Fireworks AI, una plataforma que las empresas usan para ejecutar modelos de IA abiertos, divulgó un segundo incidente de seguridad en alrededor de un mes. Según Fireworks, un proveedor de nube que alojaba sus máquinas de investigación tuvo un incidente el 23 de octubre, y al día siguiente el atacante usó ese acceso para llegar a los sistemas de Fireworks. Fireworks dice que a algunos clientes se les expusieron metadatos de recursos, direcciones de facturación y envío, historial de facturas y pagos, saldos de cuenta y uso de crédito, y a otros se les expusieron pesos de modelos y conjuntos de datos incompletos. Dice que no almacena números de tarjetas de pago. Cree que el atacante es un grupo con motivación económica interesado en vender acceso a modelos de IA, y ya había informado de un incidente anterior en octubre en el que se accedió a claves de API y tokens de un número limitado de cuentas.",
          "Notion, uno de los clientes de Fireworks, dijo que menos del 1% de sus espacios de trabajo se vieron afectados. Los datos expuestos fueron transcripciones de chats de Notion AI, es decir, todo lo que se escribió en un chat con la IA y todo lo que ella respondió. Notion dice que Fireworks conservó los datos pese a un contrato que prometía cero retención, y que se desconectó de Fireworks a más tardar el 3 de noviembre. En la mayoría de los espacios de trabajo afectados, las transcripciones no tenían ninguna etiqueta que las vinculara con una persona o empresa. Notion recomienda tratar los datos como expuestos y cambiar cualquier contraseña o clave de API que alguien haya pegado en Notion AI. El punto débil no fue Notion ni la red del propio cliente. Fue un proveedor detrás de otro proveedor, guardando lo que el personal había escrito. Anota qué herramientas de IA usa tu negocio y qué se le permite ver a cada una, y di a tu personal que nunca pegue contraseñas ni claves en un chat de IA. Así, si un proveedor informa de un incidente, sabes qué cambiar.",
          { "h": "GitBook: los atacantes entraron por el inicio de sesión y pueden haber llegado a los tokens de los clientes" },
          "GitBook, un servicio que muchos equipos usan para publicar documentación, divulgó una intrusión que comenzó el 2 de noviembre. En su propio informe, GitBook dice que el atacante usó una falla en su proceso de inicio de sesión único (single sign-on) para crear sesiones como personal de GitBook, luego usó las credenciales de una aplicación de GitHub mal configurada para llegar al código interno y, por último, obtuvo una clave de API de Cloudflare que llevó a secretos de producción. GitBook dejó el servicio fuera de línea, cambió sus secretos e invalidó los tokens de API de los clientes. Dice que el ataque se centró en un cliente, pero trata a todos los clientes como expuestos: pudieron verse alcanzados los tokens de API, los tokens y secretos de integraciones, los secretos de firma de sesión y las preguntas que los visitantes hicieron al GitBook Assistant. Dice que la información de facturación, las contraseñas y las direcciones IP no se vieron comprometidas. GitBook describe el ataque como muy dirigido y atribuye su velocidad a la automatización y la IA, aunque Decrypt señala que no ha explicado cómo se usaron los agentes de IA.",
          "Si usas GitBook, crea un nuevo token de API, cambia los secretos de las herramientas conectadas a él y vuelve a autenticar el servidor MCP de GitBook, como aconseja GitBook. Para todos los demás, la lección es una que el propio GitBook plantea: un proveedor de software está dentro de tu perímetro de seguridad. Mantén una lista de los proveedores que guardan tus tokens o documentos, da a cada uno solo el acceso que necesita y decide de antemano cómo lo revocarías.",
          { "h": "GhostMap: una falla de Android que Google ha reabierto" },
          "El 5 de noviembre, Bitdefender Labs publicó GhostMap, una falla en la forma en que Android maneja los archivos de las aplicaciones. Una aplicación manipulada de forma especial puede dejar un teléfono Android en un bucle de bloqueos con solo instalarla, sin necesidad de abrirla ni de otorgarle permisos. Bitdefender comprobó que reiniciar y el modo seguro no lo detenían, y que la recuperación puede requerir un restablecimiento de fábrica que borra todo lo que no tenga copia de seguridad. Dice que la falla afecta a Android 10 y posteriores. Google al principio se negó a tratarla como una corrección de seguridad, pero el 9 de noviembre Bitdefender informó de que Google reabrió la investigación y subió la gravedad a Alta. No se ha confirmado ninguna corrección ni CVE. Bitdefender dice que no ha visto que el bucle de bloqueos se use contra víctimas; encontró el error cuando una muestra de malware bancario bloqueó sus sistemas de análisis.",
          "Según lo descrito, el efecto es un teléfono bloqueado y no datos robados, pero un teléfono de trabajo atrapado en un bucle sigue siendo un mal día. Haz copias de seguridad de los teléfonos de tu personal, desconfía de cualquier petición de instalar un archivo de aplicación que llegue en un mensaje, un anuncio o un sitio web desconocido, y obtén las aplicaciones de su fuente oficial. Instala las actualizaciones de seguridad de Android en cuanto estén disponibles.",
          { "h": "Qué significa esto para mis productos" },
          "Dos de estas noticias tratan de proveedores y de las claves que guardan. El SME AI Usage Policy and Tool Vetting Kit incluye un Approved AI Tool Register, una guía de colores (Verde, Ámbar, Rojo y Nunca) sobre lo que puede entrar en una herramienta de IA, y un formulario AI Incident Report. El SME Vendor Risk Assessment Matrix te permite listar hasta 30 proveedores, puntuar el riesgo y enviar a cada uno un cuestionario de seguridad. Si un proveedor te cuenta que le ha pasado algo así, el SME Security Incident Response Runbook tiene acciones de primer paso para una cuenta comprometida y una lista de contactos clave y de escalamiento que rellenas antes de necesitarla."
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-11-11",
    title: "AI & ICT security news: week ending 11 Nov 2026",
    date: "2026-11-11",
    tag: "Weekly digest",
    summary: "A moderate-rated Outlook flaw that is already exploited, stolen AI keys that ran up bills of up to $1 million, and a Zyxel switch flaw that survived its first patch.",
    body: [
      "This week's stories are about the Outlook that most offices run every day, the API keys that now sit behind AI tools, and a network switch many small offices keep in a cupboard. Three stories, each with one thing you can do.",
      { "h": "Outlook: an exploited zero-day that can expose a login hash" },
      "Microsoft fixed CVE-2026-124194, a spoofing flaw in Outlook, in its November Patch Tuesday updates on 10 November, and says it was exploited in the wild as a zero-day. CISA added it to its Known Exploited Vulnerabilities catalog the same day. Microsoft scores it 6.5 out of 10 and rates it Moderate. An attacker has to get the target to open a crafted Outlook message file, and if that works the attacker can capture a login hash (NTLMv2) that can be used to impersonate that person in later attacks. Microsoft has not said who is behind the attacks or how many targets were hit. One report says US federal agencies have until 24 November to patch.",
      "A moderate score does not mean this can wait, because it is already being used. Install the November Office updates on every machine that runs Outlook, and if you use Microsoft 365 Apps, confirm that your update channel has delivered the fix rather than assuming it has. Remind staff not to open Outlook message files or other files they did not expect.",
      { "h": "LLMjacking: stolen AI keys that ran up bills of $100,000 a day" },
      "On 2 November, Google Threat Intelligence Group and Mandiant published a report on LLMjacking, where criminals steal the keys or cloud logins that let a company use AI models, then use or resell that access while the victim pays the bill. They said Mandiant handled several such cases in 2026, in finance, retail, technology and transport, across North America, South America and Asia Pacific. Some bills passed $100,000 in a single day, and in some cases reached up to $1 million before the attackers lost access. In one case, a reseller service called Jet Night, which sells an unlimited plan for about $60 a month against $100 to $250 for comparable legitimate plans, made more than 500,000 model calls in under eight hours on stolen keys and left the victim with nearly $1 million in costs.",
      "The reports describe how the access was taken: keys found in public GitHub code, stolen cloud logins, and a fake sign-up page that tricked people into pasting a live access token, which gets around passwords and two-factor checks. In several cases attackers also switched on AI services that the company had switched off. Mandiant's advice starts with watching for changes to AI accounts and services. If you run anything that calls an AI service, such as a chatbot, an assistant or a script, set a spending cap and a billing alert with the provider, keep keys out of code that is stored online, and rotate any key that may have leaked. Using a separate key for each tool also makes a leak easier to cut off.",
      { "h": "Zyxel: a switch flaw that survived the first patch" },
      "Zyxel published an advisory on 3 November for CVE-2026-107441, a flaw in the web management page of ten GS1900 network switch models. Zyxel scores it 8.8 out of 10. An attacker with network access can run operating system commands on the switch through a crafted web request, without logging in. The reason this matters is that the fix Zyxel shipped in June for a related bug (CVE-2026-7273) did not stop it. Binarly researchers found that the exploit still worked on switches with the June update and reported it to Zyxel on 29 September. GreyNoise reported that attackers had compromised 996 switches in 48 countries since around 17 August. Zyxel released new firmware, called Patch 3, in October.",
      "If you have a GS1900 switch, check its firmware version. Builds ending in .2C0 or earlier are vulnerable, and the fix is the model-specific firmware ending in .3C0, even if you already applied the June update. Do not leave the switch's web page reachable from the internet or other untrusted networks, and replace any default password. Patching closes the hole but does not undo a break-in that already happened, so ask your IT provider to compare the switch configuration with a known good copy.",
      { "h": "What this means for my products" },
      "All three stories come down to knowing what you run and acting fast when something is being exploited. The SME Essential Eight Quick-Start Kit puts the ASD Essential Eight, which includes patching, into plain English with a self-assessment and a 90-day plan, and it includes questions to ask your IT provider, such as whether updates like these were installed. The SME AI Usage Policy and Tool Vetting Kit includes an Approved AI Tool Register, which makes it easier to know which AI tools and accounts exist in your business. If something does go wrong, the SME Security Incident Response Runbook has first-step actions for a compromised account, among five common incident types."
    ],
    sources: [
      { "title": "CISA: CISA Adds Six Known Exploited Vulnerabilities to Catalog", "url": "https://www.cisa.gov/news-events/alerts/2026/11/10/cisa-adds-six-known-exploited-vulnerabilities-catalog" },
      { "title": "Tenable: November 2026 Microsoft Patch Tuesday addresses 1,093 CVEs", "url": "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194" },
      { "title": "SecurityWeek: Exploited Outlook Zero-Day Among 1,094 Flaws Patched by Microsoft", "url": "https://www.securityweek.com/exploited-outlook-zero-day-among-1094-flaws-patched-by-microsoft/" },
      { "title": "WindowsForum: CISA Flags Six Exploited Flaws: Patch Outlook, Chrome and Barracuda Appliances", "url": "https://windowsforum.com/news/cisa-flags-six-exploited-flaws-patch-outlook-chrome-and-barracuda-appliances.451723/" },
      { "title": "Google Cloud: The Rise of LLMJacking: How Threat Actors Monetize Compromised Cloud and Model Resources", "url": "https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models" },
      { "title": "Help Net Security: Stolen AI access leaves companies with cloud bills of up to $1 million", "url": "https://www.helpnetsecurity.com/?p=390073" },
      { "title": "CSO Online: Zyxel patches a zero-day hiding behind an old fix", "url": "https://www.csoonline.com/article/4245028/zyxel-patches-a-zero-day-hiding-behind-an-old-fix.html" },
      { "title": "eSecurityPlanet: Zyxel GS1900 Zero-Day: Why June's Patch Failed and Which Firmware Fixes It", "url": "https://www.esecurityplanet.com/cybersecurity-threats/news-zyxel-gs1900-zero-day-cve-2026-107441/" },
      { "title": "Help Net Security: Patched Zyxel GS1900 switches remained open to in-the-wild exploit (CVE-2026-107441)", "url": "https://www.helpnetsecurity.com/?p=390437" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 11 tháng 11 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một lỗ hổng Outlook được xếp mức trung bình nhưng đã bị khai thác, các khóa AI bị đánh cắp gây ra hóa đơn lên tới 1 triệu đô la, và một lỗ hổng switch của Zyxel vẫn sống sót sau bản vá đầu tiên.",
        body: [
          "Các tin tuần này nói về Outlook mà hầu hết văn phòng dùng mỗi ngày, các khóa API hiện nằm sau các công cụ AI, và một chiếc switch mạng mà nhiều văn phòng nhỏ để trong tủ. Ba tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "Outlook: một lỗ hổng zero-day đã bị khai thác có thể làm lộ mã băm đăng nhập" },
          "Microsoft đã sửa CVE-2026-124194, một lỗ hổng giả mạo (spoofing) trong Outlook, trong các bản cập nhật Patch Tuesday tháng 11 phát hành ngày 10 tháng 11, và cho biết lỗ hổng đã bị khai thác ngoài thực tế như một zero-day. CISA thêm nó vào danh mục các lỗ hổng đã bị khai thác (Known Exploited Vulnerabilities) ngay trong ngày đó. Microsoft chấm 6,5 trên 10 và xếp mức Trung bình (Moderate). Kẻ tấn công phải khiến mục tiêu mở một tệp thư Outlook được chế tạo riêng, và nếu thành công, kẻ tấn công có thể lấy được một mã băm đăng nhập (NTLMv2) dùng để mạo danh người đó trong các cuộc tấn công sau. Microsoft chưa nói ai đứng sau các cuộc tấn công hay có bao nhiêu mục tiêu bị ảnh hưởng. Một báo cáo cho biết các cơ quan liên bang Mỹ có hạn đến ngày 24 tháng 11 để vá.",
          "Điểm mức trung bình không có nghĩa là có thể chờ, vì lỗ hổng này đã bị lợi dụng. Hãy cài các bản cập nhật Office tháng 11 trên mọi máy chạy Outlook, và nếu bạn dùng Microsoft 365 Apps, hãy xác nhận kênh cập nhật của bạn đã đưa bản sửa về máy thay vì cho rằng nó đã có sẵn. Nhắc nhân viên không mở tệp thư Outlook hay các tệp khác mà họ không chờ đợi.",
          { "h": "LLMjacking: khóa AI bị đánh cắp gây ra hóa đơn 100.000 đô la mỗi ngày" },
          "Ngày 2 tháng 11, Google Threat Intelligence Group và Mandiant công bố một báo cáo về LLMjacking, trong đó tội phạm đánh cắp các khóa hoặc thông tin đăng nhập đám mây cho phép một công ty dùng các mô hình AI, rồi dùng hoặc bán lại quyền truy cập đó trong khi nạn nhân phải trả hóa đơn. Họ cho biết Mandiant đã xử lý một số vụ như vậy trong năm 2026, ở các ngành tài chính, bán lẻ, công nghệ và vận tải, trải khắp Bắc Mỹ, Nam Mỹ và châu Á Thái Bình Dương. Có hóa đơn vượt 100.000 đô la chỉ trong một ngày, và trong một số trường hợp lên tới 1 triệu đô la trước khi kẻ tấn công mất quyền truy cập. Trong một vụ, một dịch vụ bán lại tên Jet Night, bán gói không giới hạn với giá khoảng 60 đô la mỗi tháng so với 100 đến 250 đô la cho các gói hợp pháp tương đương, đã thực hiện hơn 500.000 lượt gọi mô hình trong chưa đầy tám giờ bằng các khóa bị đánh cắp và để lại cho nạn nhân khoản chi phí gần 1 triệu đô la.",
          "Các báo cáo mô tả cách quyền truy cập bị chiếm: các khóa nằm trong mã công khai trên GitHub, thông tin đăng nhập đám mây bị đánh cắp, và một trang đăng ký giả lừa mọi người dán vào một mã truy cập (access token) còn hiệu lực, thứ vượt qua được cả mật khẩu lẫn xác thực hai yếu tố. Trong một số trường hợp, kẻ tấn công còn bật các dịch vụ AI mà công ty đã tắt. Lời khuyên của Mandiant bắt đầu bằng việc theo dõi các thay đổi đối với tài khoản và dịch vụ AI. Nếu bạn chạy bất cứ thứ gì gọi một dịch vụ AI, như chatbot, trợ lý hay một tập lệnh, hãy đặt hạn mức chi tiêu và cảnh báo hóa đơn với nhà cung cấp, không để khóa trong mã được lưu trữ trực tuyến, và thay mới mọi khóa có thể đã bị lộ. Dùng một khóa riêng cho mỗi công cụ cũng giúp việc cắt một khóa bị lộ dễ hơn.",
          { "h": "Zyxel: lỗ hổng switch vẫn sống sót sau bản vá đầu tiên" },
          "Zyxel công bố một thông báo bảo mật ngày 3 tháng 11 cho CVE-2026-107441, một lỗ hổng ở trang quản trị web của mười mẫu switch mạng GS1900. Zyxel chấm 8,8 trên 10. Kẻ tấn công có quyền truy cập mạng có thể chạy các lệnh hệ điều hành trên switch qua một yêu cầu web được chế tạo riêng, mà không cần đăng nhập. Điều khiến chuyện này đáng chú ý là bản sửa Zyxel phát hành hồi tháng 6 cho một lỗi liên quan (CVE-2026-7273) đã không chặn được nó. Các nhà nghiên cứu của Binarly phát hiện mã khai thác (exploit) vẫn chạy được trên các switch đã cập nhật bản tháng 6 và báo cho Zyxel ngày 29 tháng 9. GreyNoise báo cáo rằng kẻ tấn công đã xâm nhập 996 switch ở 48 quốc gia từ khoảng ngày 17 tháng 8. Zyxel phát hành firmware mới, gọi là Patch 3, trong tháng 10.",
          "Nếu bạn có switch GS1900, hãy kiểm tra phiên bản firmware của nó. Các bản dựng kết thúc bằng .2C0 trở xuống là dễ bị tấn công, và bản sửa là firmware riêng cho từng mẫu kết thúc bằng .3C0, ngay cả khi bạn đã cài bản cập nhật tháng 6. Không để trang web của switch truy cập được từ internet hay các mạng không đáng tin, và thay mọi mật khẩu mặc định. Vá lỗi đóng được lỗ hổng nhưng không xóa được một vụ xâm nhập đã xảy ra, nên hãy nhờ nhà cung cấp IT so sánh cấu hình của switch với một bản cấu hình tốt đã biết.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Cả ba tin đều quy về việc biết mình đang chạy gì và hành động nhanh khi có thứ đang bị khai thác. SME Essential Eight Quick-Start Kit chuyển Essential Eight của ASD, trong đó có vá lỗi, thành ngôn ngữ dễ hiểu kèm bảng tự đánh giá và kế hoạch 90 ngày, và có các câu hỏi để hỏi nhà cung cấp IT của bạn, chẳng hạn các bản cập nhật như thế này đã được cài chưa. SME AI Usage Policy and Tool Vetting Kit có một Approved AI Tool Register, giúp bạn dễ biết doanh nghiệp mình có những công cụ và tài khoản AI nào. Nếu có sự cố, SME Security Incident Response Runbook có các bước đầu tiên cho một tài khoản bị xâm nhập, nằm trong năm loại sự cố phổ biến."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 11 de noviembre de 2026",
        tag: "Resumen semanal",
        summary: "Una falla de Outlook calificada como moderada que ya se explota, claves de IA robadas que generaron facturas de hasta 1 millón de dólares, y una falla en un switch de Zyxel que sobrevivió a su primer parche.",
        body: [
          "Las noticias de esta semana tratan del Outlook que la mayoría de las oficinas usa todos los días, las claves de API que ahora están detrás de las herramientas de IA, y un switch de red que muchas oficinas pequeñas guardan en un armario. Tres noticias, cada una con algo que puedes hacer.",
          { "h": "Outlook: un zero-day explotado que puede exponer un hash de inicio de sesión" },
          "Microsoft corrigió CVE-2026-124194, una falla de suplantación (spoofing) en Outlook, en las actualizaciones Patch Tuesday de noviembre, publicadas el 10 de noviembre, y dice que se explotó en el mundo real como zero-day. CISA lo añadió a su catálogo de vulnerabilidades explotadas conocidas (Known Exploited Vulnerabilities) ese mismo día. Microsoft le da 6.5 sobre 10 y lo califica como Moderado (Moderate). Un atacante tiene que conseguir que el objetivo abra un archivo de mensaje de Outlook manipulado, y si lo logra puede capturar un hash de inicio de sesión (NTLMv2) que sirve para hacerse pasar por esa persona en ataques posteriores. Microsoft no ha dicho quién está detrás de los ataques ni cuántos objetivos fueron alcanzados. Un informe dice que las agencias federales de EE. UU. tienen hasta el 24 de noviembre para parchear.",
          "Una puntuación moderada no significa que esto pueda esperar, porque ya se está usando. Instala las actualizaciones de Office de noviembre en cada equipo que ejecute Outlook, y si usas Microsoft 365 Apps, confirma que tu canal de actualización entregó la corrección en lugar de darlo por hecho. Recuerda al personal que no abra archivos de mensaje de Outlook ni otros archivos que no esperaba.",
          { "h": "LLMjacking: claves de IA robadas que generaron facturas de 100 000 dólares al día" },
          "El 2 de noviembre, Google Threat Intelligence Group y Mandiant publicaron un informe sobre el LLMjacking, en el que delincuentes roban las claves o los inicios de sesión en la nube que permiten a una empresa usar modelos de IA, y luego usan o revenden ese acceso mientras la víctima paga la factura. Dijeron que Mandiant atendió varios casos así en 2026, en finanzas, comercio minorista, tecnología y transporte, en Norteamérica, Sudamérica y Asia-Pacífico. Algunas facturas superaron los 100 000 dólares en un solo día y, en algunos casos, llegaron hasta 1 millón de dólares antes de que los atacantes perdieran el acceso. En un caso, un servicio de reventa llamado Jet Night, que vende un plan ilimitado por unos 60 dólares al mes frente a entre 100 y 250 dólares de los planes legítimos comparables, hizo más de 500 000 llamadas a modelos en menos de ocho horas con claves robadas y dejó a la víctima con costos de casi 1 millón de dólares.",
          "Los informes describen cómo se tomó el acceso: claves encontradas en código público de GitHub, inicios de sesión en la nube robados, y una página de registro falsa que engañó a la gente para que pegara un token de acceso vigente, algo que evita las contraseñas y las verificaciones en dos pasos. En varios casos los atacantes también activaron servicios de IA que la empresa había desactivado. El consejo de Mandiant empieza por vigilar los cambios en las cuentas y servicios de IA. Si ejecutas algo que llama a un servicio de IA, como un chatbot, un asistente o un script, fija un tope de gasto y una alerta de facturación con el proveedor, mantén las claves fuera del código que está almacenado en línea y rota cualquier clave que pueda haberse filtrado. Usar una clave distinta para cada herramienta también facilita cortar una filtración.",
          { "h": "Zyxel: una falla de un switch que sobrevivió al primer parche" },
          "Zyxel publicó un aviso el 3 de noviembre sobre CVE-2026-107441, una falla en la página de administración web de diez modelos de switch de red GS1900. Zyxel le da 8.8 sobre 10. Un atacante con acceso a la red puede ejecutar comandos del sistema operativo en el switch mediante una solicitud web manipulada, sin iniciar sesión. Lo que importa es que la corrección que Zyxel lanzó en junio para un error relacionado (CVE-2026-7273) no lo detuvo. Los investigadores de Binarly encontraron que el código de explotación (exploit) seguía funcionando en switches con la actualización de junio y se lo informaron a Zyxel el 29 de septiembre. GreyNoise informó que los atacantes habían comprometido 996 switches en 48 países desde aproximadamente el 17 de agosto. Zyxel publicó firmware nuevo, llamado Patch 3, en octubre.",
          "Si tienes un switch GS1900, revisa la versión de su firmware. Las compilaciones que terminan en .2C0 o anteriores son vulnerables, y la solución es el firmware específico de cada modelo que termina en .3C0, incluso si ya aplicaste la actualización de junio. No dejes la página web del switch accesible desde internet ni desde otras redes no confiables, y cambia cualquier contraseña predeterminada. Parchear cierra la falla, pero no deshace una intrusión que ya ocurrió, así que pide a tu proveedor de TI que compare la configuración del switch con una copia buena conocida.",
          { "h": "Qué significa esto para mis productos" },
          "Las tres noticias se reducen a saber qué usas y actuar rápido cuando algo se está explotando. El SME Essential Eight Quick-Start Kit pone el Essential Eight de la ASD, que incluye parchear, en lenguaje sencillo con una autoevaluación y un plan de 90 días, e incluye preguntas para hacerle a tu proveedor de TI, como si se instalaron actualizaciones como estas. El SME AI Usage Policy and Tool Vetting Kit incluye un Approved AI Tool Register, que facilita saber qué herramientas y cuentas de IA existen en tu negocio. Si algo sale mal, el SME Security Incident Response Runbook tiene acciones de primer paso para una cuenta comprometida, entre cinco tipos de incidentes comunes."
        ]
      }
    }
  },
  {
    type: "blog",
    slug: "search-cache-that-trusted-a-bad-answer",
    title: "My search cache trusted a bad answer, and served it back to me twice",
    date: "2026-11-07",
    tag: "Security lessons",
    summary: "A cache in Winston's file search saved a result nobody had checked and served it back, which is a small, harmless version of cache poisoning.",
    body: [
      "In September, Winston's file search gave me the wrong answer twice in a row. I asked it to find my CV. The first search came back with ten files, nearly all of them junk from other projects. I asked again and got a single file, also junk. Same question, two different wrong answers, and nothing in the replies said anything was off.",
      { "h": "What was actually happening" },
      "In plain words: a cache is a notebook where a program writes down an answer so it does not have to look it up again. Winston's notebook had a bad answer written in it, and from then on Winston trusted the notebook instead of looking again. Here is the technical version. Winston runs a Spotlight search on my Mac. The first search covered every folder it is allowed to look in, including a downloads folder full of other projects. The old code then saved that first result set under the keyword \"cv\" without checking that any of it matched. The second search found the saved entry and returned it. One mechanism explained both symptoms, and Claude Code traced it for me through the logs. Next to it sat a second bug: the search function accepted a location, but the calling code never passed one, so any folder I named in my request was silently ignored.",
      { "ol": [
        "**Search for \"cv\":** it looks in every folder, including old projects.",
        "**Ten results:** almost all junk, and none of them checked.",
        "**Saved as \"cv\":** stored with no check at all.",
        "**Search again:** it gets the saved junk back."
      ] },
      { "h": "Why I call this a security lesson" },
      "Picture a note on a stockroom door that says \"Cables are on shelf 3\". Whoever wrote it never checked. Every person who reads it afterwards walks to shelf 3, finds nothing, and does not think to doubt the note, because it is written down. That is what my cache did to me.",
      "Nothing here was an attack, but the shape is the same as one. OWASP describes cache poisoning as a harmful response that gets cached and then keeps being served until the entry is purged, and it notes that caching magnifies the impact. My cache did this with no attacker involved: an unchecked result was stored once and then trusted from then on, because a saved answer looks like a verified one. The small business version is any place your systems remember something so they do not have to look it up again: saved search results, a copied list of approved suppliers, a spreadsheet of known good email addresses. Whatever goes in gets checked once, or never, and everything after inherits it.",
      { "table": {
        "head": ["Step", "Before: saved without a check", "After: checked before saving"],
        "rows": [
          ["New answer", "Could be right or wrong", "Could be right or wrong"],
          ["Next", "Saved exactly as it came", "Checked: does it match the keyword?"],
          ["Then", "Reused every time, even when wrong", "Saved only if it passes, so bad answers never get in"]
        ]
      } },
      { "h": "What I changed" },
      "The fixes were about checking at the door. A result is now saved only if it passes a relevance check, which means the file name has to contain the keyword. I removed the loose matching on short keys, because one of my own tests showed a one-character query matching far too much, and I added a three-character minimum. I purged the bad entry by hand. And the folder I name in a request is now used: Winston scans it directly before falling back to the wider search.",
      { "ul": [
        "**Check before saving:** only files that match the keyword are kept.",
        "**Minimum length:** keywords need 3 or more characters.",
        "**Remove the bad entry:** I purged it by hand.",
        "**Use the named folder:** it is scanned first, then the wider search."
      ] },
      "Then I retested it the way I actually use it. Asking for my CV on the desktop now returns three files that really are resumes, and asking inside one named folder returns exactly the two resumes in it.",
      { "h": "The habit I am keeping" },
      "Validate on the way in, not only on the way out. If a result will be saved and reused, check it before it is saved, because the cheapest moment to catch a bad answer is before anything depends on it. Treat an option that does nothing as a bug too. The location setting that was accepted and ignored failed quietly, and quiet failures are worse than loud ones. I am moving into IT security, and this was a useful reminder that many failures start the way my bug did: something was trusted because it was already there."
    ],
    sources: [
      { "title": "OWASP: Cache Poisoning", "url": "https://wiki.owasp.org/index.php/Cache_Poisoning" }
    ],
    tr: {
      vi: {
        title: "Bộ nhớ đệm trong tìm kiếm của tôi tin một đáp án sai, và đưa nó lại cho tôi hai lần",
        tag: "Bài học bảo mật",
        summary: "Một bộ nhớ đệm trong tính năng tìm tệp của Winston đã lưu một kết quả chưa ai kiểm tra rồi đưa nó lại, đây là phiên bản nhỏ và vô hại của việc đầu độc bộ nhớ đệm.",
        body: [
          "Hồi tháng 9, tính năng tìm tệp của Winston đưa cho tôi đáp án sai hai lần liên tiếp. Tôi nhờ nó tìm CV của mình. Lần tìm đầu trả về mười tệp, gần như toàn tệp rác từ các dự án khác. Tôi hỏi lại và chỉ nhận được một tệp, cũng là tệp rác. Cùng một câu hỏi, hai đáp án sai khác nhau, và không câu trả lời nào cho thấy có gì bất thường.",
          { "h": "Chuyện thực sự đang xảy ra" },
          "Nói đơn giản: bộ nhớ đệm (cache) là một cuốn sổ tay nơi chương trình ghi lại một đáp án để khỏi phải tra lại. Cuốn sổ của Winston có một đáp án sai được ghi vào, và từ đó Winston tin cuốn sổ thay vì tìm lại. Đây là phiên bản kỹ thuật. Winston chạy tìm kiếm Spotlight trên máy Mac của tôi. Lần tìm đầu quét mọi thư mục nó được phép xem, kể cả một thư mục tải xuống đầy các dự án khác. Đoạn mã cũ sau đó lưu bộ kết quả đầu tiên dưới từ khóa \"cv\" mà không kiểm tra xem có tệp nào khớp hay không. Lần tìm thứ hai thấy mục đã lưu và trả nó về. Một cơ chế giải thích cả hai triệu chứng, và Claude Code đã lần ra nó cho tôi qua nhật ký. Ngay cạnh còn một lỗi nữa: hàm tìm kiếm nhận một vị trí, nhưng đoạn mã gọi nó không bao giờ truyền vị trí vào, nên mọi thư mục tôi nêu trong yêu cầu đều bị lặng lẽ bỏ qua.",
          { "ol": [
            "**Tìm \"cv\":** quét mọi thư mục, kể cả dự án cũ.",
            "**Mười kết quả:** gần như toàn rác, và không cái nào được kiểm tra.",
            "**Lưu thành \"cv\":** được lưu mà không kiểm tra gì.",
            "**Tìm lại:** nhận lại đúng đống rác đã lưu."
          ] },
          { "h": "Vì sao tôi gọi đây là một bài học bảo mật" },
          "Hãy hình dung một tờ giấy dán trên cửa kho ghi \"Cáp ở kệ số 3\". Người viết chưa hề kiểm tra. Ai đọc xong cũng đi tới kệ số 3, không thấy gì, và không nghĩ đến chuyện nghi ngờ tờ giấy, vì nó đã được viết ra. Bộ nhớ đệm của tôi đã làm đúng như vậy với tôi.",
          "Không có cuộc tấn công nào ở đây, nhưng hình dạng của nó giống một cuộc tấn công. OWASP mô tả việc đầu độc bộ nhớ đệm (cache poisoning) là một phản hồi có hại bị lưu vào bộ nhớ đệm rồi tiếp tục được phục vụ cho tới khi mục đó bị xóa, và lưu ý rằng bộ nhớ đệm khuếch đại tác động. Bộ nhớ đệm của tôi làm điều đó mà không cần kẻ tấn công nào: một kết quả chưa được kiểm tra được lưu một lần rồi được tin từ đó về sau, vì một đáp án đã lưu trông giống một đáp án đã được xác minh. Phiên bản cho doanh nghiệp nhỏ là bất cứ nơi nào hệ thống của bạn ghi nhớ điều gì đó để khỏi phải tra lại: kết quả tìm kiếm đã lưu, một danh sách nhà cung cấp được duyệt đã sao chép, một bảng tính các địa chỉ email \"đã biết là an toàn\". Thứ gì đi vào chỉ được kiểm tra một lần, hoặc không bao giờ, và mọi thứ sau đó thừa hưởng nó.",
          { "table": {
            "head": ["Bước", "Trước: lưu mà không kiểm tra", "Sau: kiểm tra trước khi lưu"],
            "rows": [
              ["Đáp án mới", "Có thể đúng hoặc sai", "Có thể đúng hoặc sai"],
              ["Tiếp theo", "Lưu nguyên như khi nhận", "Kiểm tra: có khớp từ khóa không?"],
              ["Sau đó", "Lần nào cũng được dùng lại, kể cả khi sai", "Chỉ lưu nếu qua, nên đáp án sai không lọt vào được"]
            ]
          } },
          { "h": "Tôi đã thay đổi gì" },
          "Các bản sửa đều nhằm vào việc kiểm tra ngay ở cửa vào. Một kết quả giờ chỉ được lưu nếu qua kiểm tra mức liên quan, nghĩa là tên tệp phải chứa từ khóa. Tôi bỏ kiểu khớp lỏng trên các từ khóa ngắn, vì một bài thử của chính tôi cho thấy truy vấn một ký tự khớp quá nhiều, và tôi thêm mức tối thiểu ba ký tự. Tôi xóa tay mục sai. Và thư mục tôi nêu trong yêu cầu giờ đã được dùng: Winston quét thẳng thư mục đó trước khi quay sang tìm kiếm rộng hơn.",
          { "ul": [
            "**Kiểm tra trước khi lưu:** chỉ giữ các tệp khớp từ khóa.",
            "**Độ dài tối thiểu:** từ khóa phải từ 3 ký tự.",
            "**Xóa mục sai:** tôi xóa tay.",
            "**Dùng thư mục được nêu:** quét trước, rồi mới tìm rộng."
          ] },
          "Rồi tôi thử lại đúng theo cách tôi thật sự dùng. Hỏi CV của tôi trên màn hình nền giờ trả về ba tệp đúng là hồ sơ xin việc, và hỏi bên trong một thư mục được nêu tên trả về đúng hai hồ sơ nằm trong đó.",
          { "h": "Thói quen tôi giữ lại" },
          "Hãy kiểm tra lúc đi vào, không chỉ lúc đi ra. Nếu một kết quả sẽ được lưu và dùng lại, hãy kiểm tra nó trước khi lưu, vì thời điểm rẻ nhất để bắt một đáp án sai là trước khi có gì đó phụ thuộc vào nó. Cũng hãy coi một tùy chọn không làm gì là một lỗi. Thiết lập vị trí được nhận rồi bị bỏ qua đã hỏng một cách lặng lẽ, và hỏng lặng lẽ tệ hơn hỏng ồn ào. Tôi đang chuyển sang IT security, và đây là lời nhắc hữu ích rằng nhiều sự cố bắt đầu giống lỗi của tôi: có thứ gì đó được tin chỉ vì nó đã nằm sẵn ở đó."
        ]
      },
      es: {
        title: "Mi caché de búsqueda confió en una respuesta mala y me la devolvió dos veces",
        tag: "Lecciones de seguridad",
        summary: "Una caché en la búsqueda de archivos de Winston guardó un resultado que nadie había revisado y lo devolvió, una versión pequeña e inofensiva del envenenamiento de caché.",
        body: [
          "En septiembre, la búsqueda de archivos de Winston me dio la respuesta equivocada dos veces seguidas. Le pedí que encontrara mi CV. La primera búsqueda devolvió diez archivos, casi todos basura de otros proyectos. Volví a preguntar y obtuve un solo archivo, también basura. La misma pregunta, dos respuestas equivocadas distintas, y nada en las respuestas indicaba que algo fallara.",
          { "h": "Qué estaba pasando en realidad" },
          "En palabras sencillas: una caché es un cuaderno donde un programa anota una respuesta para no tener que buscarla otra vez. En el cuaderno de Winston había anotada una respuesta mala, y desde entonces Winston confió en el cuaderno en lugar de volver a buscar. Esta es la versión técnica. Winston ejecuta una búsqueda de Spotlight en mi Mac. La primera búsqueda recorrió todas las carpetas que tiene permitido mirar, incluida una carpeta de descargas llena de otros proyectos. El código antiguo guardó entonces ese primer conjunto de resultados bajo la palabra clave \"cv\" sin comprobar que alguno coincidiera. La segunda búsqueda encontró la entrada guardada y la devolvió. Un solo mecanismo explicaba los dos síntomas, y Claude Code lo rastreó por mí a través de los registros. Junto a él había un segundo error: la función de búsqueda aceptaba una ubicación, pero el código que la llamaba nunca la pasaba, así que cualquier carpeta que yo nombrara en mi petición se ignoraba en silencio.",
          { "ol": [
            "**Buscar \"cv\":** mira en todas las carpetas, incluidos proyectos viejos.",
            "**Diez resultados:** casi todo basura, y ninguno revisado.",
            "**Guardado como \"cv\":** almacenado sin ninguna revisión.",
            "**Buscar otra vez:** devuelve la basura guardada."
          ] },
          { "h": "Por qué lo llamo una lección de seguridad" },
          "Imagina una nota en la puerta de un almacén que dice \"Los cables están en el estante 3\". Quien la escribió nunca lo comprobó. Todas las personas que la leen después van al estante 3, no encuentran nada y no se les ocurre dudar de la nota, porque está escrita. Eso fue lo que mi caché me hizo a mí.",
          "Aquí no hubo ningún ataque, pero la forma es la misma que la de uno. OWASP describe el envenenamiento de caché (cache poisoning) como una respuesta dañina que se guarda en la caché y sigue sirviéndose hasta que se elimina la entrada, y señala que la caché amplifica el impacto. Mi caché lo hizo sin ningún atacante de por medio: un resultado sin revisar se guardó una vez y desde entonces se confió en él, porque una respuesta guardada parece una respuesta verificada. La versión para un negocio pequeño es cualquier lugar donde tus sistemas recuerdan algo para no tener que buscarlo de nuevo: resultados de búsqueda guardados, una lista copiada de proveedores aprobados, una hoja de cálculo de direcciones de correo \"conocidas como seguras\". Lo que entra se revisa una vez, o nunca, y todo lo que viene después lo hereda.",
          { "table": {
            "head": ["Paso", "Antes: guardado sin revisar", "Después: revisado antes de guardar"],
            "rows": [
              ["Respuesta nueva", "Puede ser correcta o no", "Puede ser correcta o no"],
              ["Siguiente", "Guardada tal cual llegó", "Revisada: ¿coincide con la palabra clave?"],
              ["Luego", "Reutilizada siempre, aunque esté mal", "Guardada solo si pasa, así que las respuestas malas no entran"]
            ]
          } },
          { "h": "Qué cambié" },
          "Los arreglos consistieron en revisar en la puerta. Ahora un resultado se guarda solo si pasa una comprobación de relevancia, es decir, el nombre del archivo debe contener la palabra clave. Quité la coincidencia laxa con claves cortas, porque una de mis propias pruebas mostró que una consulta de un solo carácter coincidía con demasiado, y añadí un mínimo de tres caracteres. Eliminé a mano la entrada mala. Y ahora se usa la carpeta que nombro en una petición: Winston la revisa directamente antes de recurrir a la búsqueda más amplia.",
          { "ul": [
            "**Revisar antes de guardar:** solo se guardan los archivos que coinciden con la palabra clave.",
            "**Longitud mínima:** las palabras clave necesitan 3 o más caracteres.",
            "**Quitar la entrada mala:** la eliminé a mano.",
            "**Usar la carpeta indicada:** se revisa primero, luego la búsqueda más amplia."
          ] },
          "Luego lo probé de nuevo como lo uso de verdad. Pedir mi CV en el escritorio ahora devuelve tres archivos que de verdad son currículos, y pedirlo dentro de una carpeta nombrada devuelve exactamente los dos currículos que hay en ella.",
          { "h": "El hábito que me quedo" },
          "Valida al entrar, no solo al salir. Si un resultado se va a guardar y reutilizar, revísalo antes de guardarlo, porque el momento más barato para detectar una mala respuesta es antes de que algo dependa de ella. Trata también como un error una opción que no hace nada. El ajuste de ubicación que se aceptaba y se ignoraba falló en silencio, y los fallos silenciosos son peores que los ruidosos. Me estoy moviendo hacia la seguridad informática, y esto fue un buen recordatorio de que muchos fallos empiezan como mi error: se confió en algo solo porque ya estaba ahí."
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-11-07",
    title: "AI & ICT security news: week ending 7 Nov 2026",
    date: "2026-11-07",
    tag: "Weekly digest",
    summary: "An exploited SAML bypass in SonicWall's SSL-VPN, breaches blamed on AI-driven attackers at WorkOS and Chainalysis, and a database password left inside Applebee's Android app.",
    body: [
      "This week's stories are about a VPN that many small offices run on their firewall, two vendor breaches blamed on AI-driven attackers, and a restaurant app that shipped with a database password inside it. Three stories, each with one thing you can do.",
      { "h": "SonicWall: an exploited bypass of SAML login on the SSL-VPN" },
      "SonicWall has fixed CVE-2026-19868 in the SSL-VPN service of SonicOS, the software on its firewalls, and it is already being exploited. On 6 November CISA added it to its Known Exploited Vulnerabilities catalog, and one report says SonicWall's advisory (SNWLID-2026-0014) also confirms real-world abuse. The flaw only matters if SAML login is switched on for the SSL-VPN. A person who holds valid credentials for a different login method can get past the SAML checks, which may include the multi-factor authentication (MFA) rule enforced through SAML. It affects Gen7 firewalls on SonicOS 7.3.3-7015 and older and Gen8 firewalls on 8.2.2-8015 and older. The sources I read disagree on the severity score, so I leave the number out.",
      "If you run a SonicWall firewall with SAML on its VPN, update to SonicOS 7.3.4-7013 (Gen7) or 8.2.3-8015 (Gen8) or higher. SonicWall says there is no workaround, so patching is the fix. Reports say CISA set 20 November as the deadline for US federal agencies, which gives you a sense of how urgent it is. Patching does not undo a login that already happened, so ask your IT provider to check VPN logs for sessions with no matching sign-in at your identity provider, and consider resetting passwords for VPN accounts.",
      { "h": "WorkOS and Chainalysis: breaches blamed on AI-driven attackers" },
      "WorkOS, a company that provides login and single sign-on tools to software makers, said an attacker used an AI offensive security framework called ARTEX AI to get into its internal sales application and take customer data. The data included business contact details, customer account histories, product usage information, and summaries or excerpts of sales calls, support conversations and customer Slack conversations. WorkOS said no application data or production services were affected. A security researcher later came forward and said they had been testing ARTEX and that their agent escaped its test environment and hit WorkOS by accident. WorkOS says its own logs and an independent investigator back up that the researcher was responsible, but the accident part is the researcher's account. WorkOS also named its own weak spots: a legacy internal tool without newer protections, API endpoints reachable from the internet, a predictable development credential deployed in production, and no rate limiting.",
      "Separately, Chainalysis told customers on 30 October that an outside actor used what it called offensive agentic techniques to reach its systems and internal tools. It said the data accessed was non-sensitive: user IDs, full names, email addresses and organization role labels. It said passwords and other credentials were not compromised, and it has not said how many people are affected. The practical points: ask the software vendors you rely on how and how fast they would tell you about an incident, and use the WorkOS list as a checklist for your own systems. Keep default and development passwords out of production, put rate limits on anything that returns customer records, and take old internal tools off the internet. Staff names and emails can feed phishing, so Chainalysis's own advice applies: watch for unexpected sign-in prompts and password reset requests, and turn on MFA.",
      { "h": "Applebee's: a database password left inside the Android app" },
      "Security researcher Robert Wiggins found a database password hardcoded in Applebee's Android app, according to Malwarebytes and TechRadar, who followed TechCrunch's reporting. Anyone who pulled it out of the app could reach a customer database. The exposed fields included names, email addresses, dates of birth, phone numbers, ZIP codes, veteran status, login counts, account creation dates and the IP address of each customer's most recent login. Malwarebytes says payment card details and account passwords were not among them. Wiggins could not find a way to report the problem, so he asked TechCrunch to contact the company. Applebee's parent company, Dine Brands, has fixed the flaw and says it has found no evidence of unauthorized access. Its investigation is ongoing, and the number of people affected is not known.",
      "Small businesses make the same mistake in mobile apps, websites and scripts built by a contractor. Anything shipped to a customer's phone or browser can be read by the customer, so a password inside it is effectively public. Ask whoever built your app or site to confirm there are no passwords, API keys or database credentials in the code, and to replace any that were. Also publish a security contact, such as a page or an email address, so a researcher who finds a problem knows where to send it.",
      { "h": "What this means for my products" },
      "The SonicWall story is about patching and checking that MFA really applies to every way in. The SME Essential Eight Quick-Start Kit puts the ASD Essential Eight, which includes patching and MFA, into plain English with a self-assessment and a 90-day plan. The WorkOS and Chainalysis stories are about the vendors that hold your data: the SME Vendor Risk Assessment Matrix lets you list up to 30 suppliers and score the risk of each. For the day a leaked list of names and emails turns into a scam, the SME Security Incident Response Runbook has first-step actions for five common incident types, including phishing and a compromised account."
    ],
    sources: [
      { "title": "Security Online: Attackers Exploit SonicWall SonicOS SSLVPN Flaw CVE-2026-19868 in the Wild", "url": "https://securityonline.info/sonicwall-sonicos-sslvpn-cve-2026-19868-exploited/" },
      { "title": "WindowsForum: CVE-2026-19868, CISA Flags Exploited SonicWall SSLVPN SAML and MFA Bypass", "url": "https://windowsforum.com/news/cve-2026-19868-cisa-flags-exploited-sonicwall-sslvpn-saml-and-mfa-bypass.451256/" },
      { "title": "daily.dev (BleepingComputer): SonicWall warns of new SSL-VPN MFA bypass flaw exploited in attacks", "url": "https://daily.dev/posts/sonicwall-warns-of-new-ssl-vpn-mfa-bypass-flaw-exploited-in-attacks-2lnsxah93" },
      { "title": "BleepingComputer: Runaway AI hacking agent behind WorkOS breach after escaping sandbox", "url": "https://www.bleepingcomputer.com/news/security/runaway-ai-hacking-agent-behind-workos-breach-after-escaping-sandbox/" },
      { "title": "daily.dev (BleepingComputer): WorkOS says attacker used ARTEX AI to breach internal sales app", "url": "https://daily.dev/posts/workos-says-attacker-used-artex-ai-to-breach-internal-sales-app-dqtlwnyrw" },
      { "title": "SecurityWeek: Chainalysis Discloses Data Breach Following AI-Driven Cyberattack", "url": "https://www.securityweek.com/chainalysis-discloses-data-breach-following-ai-driven-cyberattack/" },
      { "title": "MIND: Chainalysis breach, what an agentic AI attack means for data", "url": "https://mind.io/blog/chainalysis-breach-non-sensitive-data-second-look" },
      { "title": "Malwarebytes: Applebee's customer data exposed by password left in app", "url": "https://www.malwarebytes.com/?p=483734" },
      { "title": "TechRadar: Applebee's forced to fix serious security issue which exposed customer data", "url": "https://techradar.com/pro/security/applebees-forced-to-fix-serious-security-issue-which-exposed-customer-data" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 7 tháng 11 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một lỗ hổng vượt qua đăng nhập SAML trên SSL-VPN của SonicWall đã bị khai thác, các vụ xâm nhập tại WorkOS và Chainalysis bị cho là do kẻ tấn công dùng AI, và một mật khẩu cơ sở dữ liệu bị để lại trong ứng dụng Android của Applebee's.",
        body: [
          "Các tin tuần này nói về một chiếc VPN mà nhiều văn phòng nhỏ chạy trên tường lửa, hai vụ xâm nhập nhà cung cấp bị cho là do kẻ tấn công dùng AI, và một ứng dụng nhà hàng được phát hành với mật khẩu cơ sở dữ liệu nằm bên trong. Ba tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "SonicWall: lỗ hổng vượt qua đăng nhập SAML trên SSL-VPN đã bị khai thác" },
          "SonicWall đã sửa CVE-2026-19868 trong dịch vụ SSL-VPN của SonicOS, phần mềm chạy trên tường lửa của hãng, và lỗ hổng này đã bị khai thác. Ngày 6 tháng 11, CISA thêm nó vào danh mục các lỗ hổng đã bị khai thác (Known Exploited Vulnerabilities), và một báo cáo cho biết thông báo bảo mật của SonicWall (SNWLID-2026-0014) cũng xác nhận việc bị lạm dụng ngoài thực tế. Lỗ hổng chỉ có ý nghĩa nếu đăng nhập SAML được bật cho SSL-VPN. Người có thông tin đăng nhập hợp lệ cho một phương thức đăng nhập khác có thể vượt qua các bước kiểm tra SAML, trong đó có thể có quy tắc xác thực đa yếu tố (MFA) được áp qua SAML. Lỗ hổng ảnh hưởng tường lửa Gen7 chạy SonicOS 7.3.3-7015 trở xuống và Gen8 chạy 8.2.2-8015 trở xuống. Các nguồn tôi đọc không thống nhất về điểm mức độ nghiêm trọng, nên tôi không nêu con số.",
          "Nếu bạn chạy tường lửa SonicWall có bật SAML cho VPN, hãy cập nhật lên SonicOS 7.3.4-7013 (Gen7) hoặc 8.2.3-8015 (Gen8) trở lên. SonicWall nói không có cách xử lý tạm thời, nên vá lỗi là cách sửa. Các báo cáo cho biết CISA đặt hạn 20 tháng 11 cho các cơ quan liên bang Mỹ, cho bạn một ý niệm về mức khẩn cấp. Việc vá không xóa được một lần đăng nhập đã xảy ra, nên hãy nhờ nhà cung cấp IT kiểm tra nhật ký VPN xem có phiên nào không có lần đăng nhập tương ứng tại nhà cung cấp danh tính của bạn không, và cân nhắc đặt lại mật khẩu cho các tài khoản VPN.",
          { "h": "WorkOS và Chainalysis: các vụ xâm nhập bị cho là do kẻ tấn công dùng AI" },
          "WorkOS, công ty cung cấp công cụ đăng nhập và đăng nhập một lần cho các hãng phần mềm, cho biết kẻ tấn công đã dùng một khung bảo mật tấn công dùng AI tên ARTEX AI để vào ứng dụng bán hàng nội bộ và lấy dữ liệu khách hàng. Dữ liệu gồm thông tin liên hệ doanh nghiệp, lịch sử tài khoản khách hàng, thông tin sử dụng sản phẩm, và bản tóm tắt hoặc trích đoạn các cuộc gọi bán hàng, trao đổi hỗ trợ và các cuộc trò chuyện Slack của khách hàng. WorkOS nói dữ liệu ứng dụng và dịch vụ vận hành không bị ảnh hưởng. Sau đó một nhà nghiên cứu bảo mật đã lên tiếng, nói họ đang thử nghiệm ARTEX và tác tử của họ thoát khỏi môi trường thử nghiệm rồi vô tình tác động lên WorkOS. WorkOS nói nhật ký của chính họ và một đơn vị điều tra độc lập củng cố việc nhà nghiên cứu này chịu trách nhiệm, nhưng phần \"vô tình\" là lời kể của nhà nghiên cứu. WorkOS cũng nêu các điểm yếu của chính họ: một công cụ nội bộ cũ thiếu các biện pháp bảo vệ mới, các điểm cuối API truy cập được từ internet, một thông tin xác thực phát triển dễ đoán bị đưa nhầm lên môi trường vận hành, và không giới hạn tốc độ truy cập.",
          "Riêng Chainalysis, ngày 30 tháng 10 công ty thông báo cho khách hàng rằng một bên bên ngoài đã dùng thứ họ gọi là các kỹ thuật tác tử tấn công (offensive agentic techniques) để vào hệ thống và công cụ nội bộ. Họ nói dữ liệu bị truy cập là loại không nhạy cảm: mã người dùng, họ tên, địa chỉ email và nhãn vai trò trong tổ chức. Họ nói mật khẩu và các thông tin xác thực khác không bị xâm phạm, và chưa nói bao nhiêu người bị ảnh hưởng. Các điểm thực tế: hãy hỏi những nhà cung cấp phần mềm bạn dựa vào rằng họ sẽ báo cho bạn về sự cố bằng cách nào và nhanh đến đâu, và dùng danh sách điểm yếu của WorkOS làm bảng kiểm cho hệ thống của bạn. Không để mật khẩu mặc định và mật khẩu phát triển trên môi trường vận hành, đặt giới hạn tốc độ cho mọi thứ trả về hồ sơ khách hàng, và gỡ các công cụ nội bộ cũ khỏi internet. Họ tên và email của nhân viên có thể bị dùng để lừa đảo, nên lời khuyên của chính Chainalysis cũng áp dụng cho bạn: để ý các yêu cầu đăng nhập bất ngờ và yêu cầu đặt lại mật khẩu, và bật MFA.",
          { "h": "Applebee's: mật khẩu cơ sở dữ liệu bị để lại trong ứng dụng Android" },
          "Nhà nghiên cứu bảo mật Robert Wiggins tìm thấy một mật khẩu cơ sở dữ liệu được ghi cứng trong ứng dụng Android của Applebee's, theo Malwarebytes và TechRadar, những nơi đưa tin theo báo cáo của TechCrunch. Ai lấy được mật khẩu ra khỏi ứng dụng đều có thể vào một cơ sở dữ liệu khách hàng. Các trường bị lộ gồm họ tên, địa chỉ email, ngày sinh, số điện thoại, mã ZIP, tình trạng cựu chiến binh, số lần đăng nhập, ngày tạo tài khoản và địa chỉ IP của lần đăng nhập gần nhất của mỗi khách. Malwarebytes cho biết thông tin thẻ thanh toán và mật khẩu tài khoản không nằm trong số đó. Wiggins không tìm được cách báo lỗi, nên nhờ TechCrunch liên hệ với công ty. Công ty mẹ của Applebee's là Dine Brands đã sửa lỗi và nói chưa thấy bằng chứng về truy cập trái phép. Cuộc điều tra vẫn đang diễn ra và chưa biết bao nhiêu người bị ảnh hưởng.",
          "Doanh nghiệp nhỏ cũng mắc lỗi tương tự trong ứng dụng di động, website và các tập lệnh do nhà thầu làm. Bất cứ thứ gì được gửi tới điện thoại hay trình duyệt của khách đều có thể bị khách đọc, nên mật khẩu nằm trong đó coi như công khai. Hãy nhờ người làm ứng dụng hoặc website xác nhận trong mã không có mật khẩu, khóa API hay thông tin xác thực cơ sở dữ liệu, và thay mới những cái đã nằm trong đó. Đồng thời hãy công bố một đầu mối bảo mật, như một trang hoặc một địa chỉ email, để nhà nghiên cứu phát hiện lỗi biết gửi báo cáo về đâu.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Tin SonicWall nói về việc vá lỗi và kiểm tra rằng MFA thật sự áp dụng cho mọi cửa vào. SME Essential Eight Quick-Start Kit chuyển Essential Eight của ASD, trong đó có vá lỗi và MFA, thành ngôn ngữ dễ hiểu kèm bảng tự đánh giá và kế hoạch 90 ngày. Các tin WorkOS và Chainalysis nói về những nhà cung cấp đang giữ dữ liệu của bạn: SME Vendor Risk Assessment Matrix cho bạn liệt kê tối đa 30 nhà cung cấp và chấm điểm rủi ro của từng nhà. Cho ngày một danh sách họ tên và email bị lộ trở thành một vụ lừa đảo, SME Security Incident Response Runbook có các bước đầu tiên cho năm loại sự cố phổ biến, gồm lừa đảo qua email và tài khoản bị xâm nhập."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 7 de noviembre de 2026",
        tag: "Resumen semanal",
        summary: "Una evasión de inicio de sesión SAML explotada en la SSL-VPN de SonicWall, brechas atribuidas a atacantes con IA en WorkOS y Chainalysis, y una contraseña de base de datos olvidada dentro de la app Android de Applebee's.",
        body: [
          "Las noticias de esta semana tratan de una VPN que muchas oficinas pequeñas ejecutan en su firewall, dos brechas de proveedores atribuidas a atacantes que usan IA, y una app de un restaurante publicada con una contraseña de base de datos dentro. Tres noticias, cada una con algo que puedes hacer.",
          { "h": "SonicWall: una evasión del inicio de sesión SAML en la SSL-VPN que ya se explota" },
          "SonicWall corrigió CVE-2026-19868 en el servicio SSL-VPN de SonicOS, el software de sus firewalls, y ya se está explotando. El 6 de noviembre CISA lo añadió a su catálogo de vulnerabilidades explotadas conocidas (Known Exploited Vulnerabilities), y un informe dice que el aviso de SonicWall (SNWLID-2026-0014) también confirma abuso en el mundo real. La falla solo importa si el inicio de sesión SAML está activado para la SSL-VPN. Una persona con credenciales válidas de otro método de inicio de sesión puede saltarse las comprobaciones de SAML, que pueden incluir la regla de autenticación multifactor (MFA) aplicada mediante SAML. Afecta a firewalls Gen7 con SonicOS 7.3.3-7015 y anteriores, y a Gen8 con 8.2.2-8015 y anteriores. Las fuentes que leí no coinciden en la puntuación de gravedad, así que no incluyo la cifra.",
          "Si usas un firewall SonicWall con SAML en su VPN, actualiza a SonicOS 7.3.4-7013 (Gen7) o 8.2.3-8015 (Gen8) o superior. SonicWall dice que no hay una solución alternativa, así que parchear es la solución. Los informes dicen que CISA fijó el 20 de noviembre como plazo para las agencias federales de EE. UU., lo que te da una idea de la urgencia. Parchear no deshace un inicio de sesión que ya ocurrió, así que pide a tu proveedor de TI que revise los registros de la VPN en busca de sesiones sin un inicio de sesión correspondiente en tu proveedor de identidad, y considera restablecer las contraseñas de las cuentas de VPN.",
          { "h": "WorkOS y Chainalysis: brechas atribuidas a atacantes que usan IA" },
          "WorkOS, una empresa que ofrece herramientas de inicio de sesión e inicio de sesión único a fabricantes de software, dijo que un atacante usó un marco de seguridad ofensiva con IA llamado ARTEX AI para entrar en su aplicación interna de ventas y llevarse datos de clientes. Los datos incluían datos de contacto empresarial, historiales de cuentas de clientes, información de uso del producto, y resúmenes o extractos de llamadas de ventas, conversaciones de soporte y conversaciones de Slack de clientes. WorkOS dijo que no se afectaron datos de aplicaciones ni servicios de producción. Más tarde un investigador de seguridad se presentó y dijo que estaba probando ARTEX y que su agente escapó de su entorno de pruebas y afectó a WorkOS por accidente. WorkOS dice que sus propios registros y un investigador independiente respaldan que el investigador fue el responsable, pero la parte del accidente es el relato del investigador. WorkOS también señaló sus propios puntos débiles: una herramienta interna antigua sin las protecciones más nuevas, puntos de acceso de API alcanzables desde internet, una credencial de desarrollo predecible desplegada en producción y ausencia de límites de velocidad.",
          "Por separado, Chainalysis informó a sus clientes el 30 de octubre de que un actor externo usó lo que llamó técnicas agénticas ofensivas (offensive agentic techniques) para llegar a sus sistemas y herramientas internas. Dijo que los datos a los que se accedió no eran sensibles: identificadores de usuario, nombres completos, direcciones de correo y etiquetas de rol en la organización. Dijo que las contraseñas y otras credenciales no se vieron comprometidas, y no ha dicho cuántas personas están afectadas. Los puntos prácticos: pregunta a los proveedores de software de los que dependes cómo y con qué rapidez te avisarían de un incidente, y usa la lista de WorkOS como lista de control para tus propios sistemas. Mantén fuera de producción las contraseñas predeterminadas y de desarrollo, pon límites de velocidad a todo lo que devuelva registros de clientes y saca las herramientas internas antiguas de internet. Los nombres y correos del personal pueden alimentar el phishing, así que el propio consejo de Chainalysis también te sirve: vigila las solicitudes de inicio de sesión inesperadas y las solicitudes de restablecimiento de contraseña, y activa la MFA.",
          { "h": "Applebee's: una contraseña de base de datos olvidada dentro de la app Android" },
          "El investigador de seguridad Robert Wiggins encontró una contraseña de base de datos escrita directamente en el código de la app Android de Applebee's, según Malwarebytes y TechRadar, que siguieron el reportaje de TechCrunch. Quien la sacara de la app podía llegar a una base de datos de clientes. Los campos expuestos incluían nombres, correos, fechas de nacimiento, teléfonos, códigos ZIP, condición de veterano, número de inicios de sesión, fechas de creación de la cuenta y la dirección IP del último inicio de sesión de cada cliente. Malwarebytes dice que los datos de tarjetas de pago y las contraseñas de las cuentas no estaban entre ellos. Wiggins no encontró cómo reportar el problema, así que pidió a TechCrunch que contactara a la empresa. La matriz de Applebee's, Dine Brands, corrigió la falla y dice que no ha encontrado evidencia de acceso no autorizado. La investigación sigue en curso y no se sabe cuántas personas están afectadas.",
          "Los negocios pequeños cometen el mismo error en apps móviles, sitios web y scripts hechos por un contratista. Todo lo que se envía al teléfono o al navegador de un cliente puede ser leído por ese cliente, así que una contraseña dentro es prácticamente pública. Pide a quien hizo tu app o tu sitio que confirme que en el código no hay contraseñas, claves de API ni credenciales de bases de datos, y que cambie las que hubiera. Publica también un contacto de seguridad, como una página o un correo, para que un investigador que encuentre un problema sepa adónde enviarlo.",
          { "h": "Qué significa esto para mis productos" },
          "La noticia de SonicWall trata de parchear y de comprobar que la MFA se aplica de verdad a todas las vías de entrada. El SME Essential Eight Quick-Start Kit pone el Essential Eight de la ASD, que incluye parchear y la MFA, en lenguaje sencillo con una autoevaluación y un plan de 90 días. Las noticias de WorkOS y Chainalysis tratan de los proveedores que guardan tus datos: el SME Vendor Risk Assessment Matrix te permite listar hasta 30 proveedores y puntuar el riesgo de cada uno. Para el día en que una lista filtrada de nombres y correos se convierta en una estafa, el SME Security Incident Response Runbook tiene acciones de primer paso para cinco tipos de incidentes comunes, incluidos el phishing y una cuenta comprometida."
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-11-04",
    title: "AI & ICT security news: week ending 4 Nov 2026",
    date: "2026-11-04",
    tag: "Weekly digest",
    summary: "A WordPress core flaw that CISA now lists as exploited, a tampered Claude Code extension on Cursor's marketplace, and ransomware hitting out-of-date Synology NAS devices.",
    body: [
      "This week's stories are about three things many small businesses rely on without thinking much about them: the WordPress site that takes orders and enquiries, the editor a developer uses to build things, and the NAS box in the back office that holds the files. Three stories, each with one thing you can do.",
      { "h": "WordPress core: CISA lists the update-time flaw as exploited" },
      "WordPress 7.1.4 was released on 28 October to fix a flaw in how core updates unpack files. It is tracked as CVE-2026-119977 and scored 8.1 out of 10 by Wordfence, which assigned the CVE. WordPress itself rates it Low. The problem is a race condition: while an update is being unpacked, an attacker who requests the right file at the right moment may be able to run code. On 3 November CISA added it to its Known Exploited Vulnerabilities catalog, citing evidence of active exploitation. Wordfence reported exploitation attempts, and the sources I read do not report confirmed compromises.",
      "Do not assume your site updated itself. Open the Updates screen in the WordPress dashboard and check that the version is 7.1.4 or the fixed release for your branch, such as 7.0.8 or 6.9.11. If a web agency or host looks after your site, ask them to confirm it in writing. Sites on WordPress 4.6 or older have no fix and need to move to a supported version.",
      { "h": "A tampered Claude Code extension on Cursor's marketplace" },
      "Cursor said that on 29 October a maliciously modified version of the Claude Code extension, labelled 2.1.313, was available on its extension marketplace, and that up to 5,000 users could have been affected. Cursor said Anthropic did not create it. According to the reports, the code collected details such as the computer name and public IP address and tried to give the attacker remote access over SSH. Cursor said that step would have failed on most machines because it needs administrator rights. Cursor removed the extension, shut down its marketplace, rebuilt it and said it would contact affected users. Socket notes that how the file first reached the marketplace is still disputed, so the exact route is not settled.",
      "This matters if you or a contractor build software with Cursor. Check whether anyone installed or updated that extension around 29 October. One report advises looking in the SSH authorized_keys file for an entry named svc-telemetry and running Cursor's official cleanup script, because uninstalling the extension alone may not remove everything. The wider lesson is to treat editor extensions like any other software you install: add only what you need and from publishers you can verify.",
      { "h": "Ransomware is hitting out-of-date Synology NAS devices" },
      "On 29 October Synology warned owners to update DiskStation Manager, its NAS operating system, after attackers used a vulnerability patched in December 2024 against outdated devices to encrypt data and demand a ransom. The security firm 360 separately described the ransomware, which it calls C3RB3R, and which renames encrypted files with a .L0CK3D ending. It links the attacks to two flaws, CVE-2026-13639 and CVE-2026-13684, that Synology fixed in September. The reports do not agree on which flaw was used in which attack, but both point to the same fix: update.",
      "If a Synology NAS holds your business files, update DSM to at least 7.4-90075, 7.3.2-86009-4, 7.2.2-72806-9 or 7.2.1-69057-12, depending on your version, and turn on automatic updates. Do not leave the DSM login page open to the internet; use a VPN for remote access instead. Keep at least one backup copy that is not on the same device, because a copy on the NAS can be encrypted along with everything else.",
      { "h": "What this means for my products" },
      "All three stories come down to patching, knowing what you run and having a plan for when something goes wrong. The SME Essential Eight Quick-Start Kit puts the ASD Essential Eight, which includes patching and backups, into plain English with a self-assessment and a 90-day plan. The SME Security Incident Response Runbook has first-step actions for five common incident types, including ransomware and a compromised account. The SME AI Usage Policy and Tool Vetting Kit gives you a way to check a tool, such as an editor extension, before you approve it."
    ],
    sources: [
      { "title": "The Hacker News: WordPress RCE flaw draws nearly 63,000 attacks", "url": "https://thehackernews.com/2026/10/wordpress-rce-flaw-draws-nearly-63000.html" },
      { "title": "Rescana: WordPress Core 7.1.4 upgrade staging race RCE", "url": "https://www.rescana.com/post/wordpress-core-7-1-4-upgrade-staging-race-rce" },
      { "title": "WindowsForum: CISA flags WordPress CVE-2026-119977 as actively exploited", "url": "https://windowsforum.com/news/cisa-flags-wordpress-cve-2026-119977-as-actively-exploited-update-to-block-upgrade-window-rce.450815/" },
      { "title": "Defcon Level: CISA adds one known exploited vulnerability to catalog (3 Nov 2026)", "url": "https://www.defconlevel.com/alert/2026-11-03-cisa-alerts-alerts-only-cisa-adds-one-known-exploited-vulnerability-to-catalog" },
      { "title": "Socket: Cursor removes malicious Claude Code 2.1.313 extension from its marketplace", "url": "https://socket.dev/blog/claude-code-extension-compromise" },
      { "title": "GDN Online: Cursor says up to 5,000 users affected by tampered Claude Code extension", "url": "https://www.gdnonline.com/Details/1411321/Cursor-says-up-to-5,000-users-affected-by-tampered-Claude-Code-extension" },
      { "title": "KuCoin News: Cursor extension store malware attack affects up to 5,000 users", "url": "https://www.kucoin.com/news/flash/cursor-extension-store-malware-attack-affects-up-to-5000-users" },
      { "title": "GridinSoft: Synology NAS ransomware locks files as sources disagree on entry", "url": "https://blog.gridinsoft.com/synology-c3rb3r-ransomware-nas-backups/" },
      { "title": "IT-Connect: C3RB3R ransomware is hitting Synology NAS devices, how to protect yours", "url": "https://www.it-connect.tech/c3rb3r-ransomware-is-hitting-synology-nas-devices-how-to-protect-yours/" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 4 tháng 11 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một lỗ hổng lõi WordPress mà CISA nay liệt kê là đã bị khai thác, một tiện ích Claude Code bị can thiệp trên chợ tiện ích của Cursor, và ransomware tấn công các thiết bị NAS Synology chưa cập nhật.",
        body: [
          "Các tin tuần này nói về ba thứ mà nhiều doanh nghiệp nhỏ dùng hằng ngày mà ít khi để ý: website WordPress nhận đơn hàng và yêu cầu của khách, trình soạn thảo mà lập trình viên dùng để xây sản phẩm, và chiếc hộp NAS ở văn phòng chứa các tệp. Ba tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "Lõi WordPress: CISA liệt kê lỗ hổng lúc cập nhật là đã bị khai thác" },
          "WordPress 7.1.4 được phát hành ngày 28 tháng 10 để sửa một lỗ hổng trong cách bản cập nhật lõi giải nén tệp. Lỗ hổng mang mã CVE-2026-119977 và được Wordfence, đơn vị cấp mã CVE, chấm 8,1 trên 10. Bản thân WordPress xếp nó ở mức Thấp. Vấn đề là một lỗi chạy đua (race condition): trong lúc bản cập nhật đang được giải nén, kẻ tấn công yêu cầu đúng tệp vào đúng thời điểm có thể chạy được mã. Ngày 3 tháng 11, CISA thêm nó vào danh mục các lỗ hổng đã bị khai thác (Known Exploited Vulnerabilities), dựa trên bằng chứng về việc khai thác thực tế. Wordfence ghi nhận các nỗ lực khai thác, và các nguồn tôi đã đọc không báo cáo trường hợp bị xâm nhập nào được xác nhận.",
          "Đừng cho rằng website của bạn đã tự cập nhật. Hãy mở màn hình Updates trong trang quản trị WordPress và kiểm tra phiên bản là 7.1.4 hoặc bản đã sửa cho nhánh của bạn, như 7.0.8 hoặc 6.9.11. Nếu một agency web hoặc nhà cung cấp hosting lo website cho bạn, hãy nhờ họ xác nhận bằng văn bản. Các website dùng WordPress 4.6 trở xuống không có bản sửa và cần chuyển lên phiên bản còn được hỗ trợ.",
          { "h": "Một tiện ích Claude Code bị can thiệp trên chợ tiện ích của Cursor" },
          "Cursor cho biết ngày 29 tháng 10 có một phiên bản tiện ích Claude Code bị sửa đổi độc hại, đánh nhãn 2.1.313, xuất hiện trên chợ tiện ích của họ, và có tới 5.000 người dùng có thể bị ảnh hưởng. Cursor nói Anthropic không tạo ra nó. Theo các báo cáo, mã này thu thập thông tin như tên máy và địa chỉ IP công khai, và cố tạo cho kẻ tấn công quyền truy cập từ xa qua SSH. Cursor nói bước đó sẽ thất bại trên hầu hết máy vì cần quyền quản trị. Cursor đã gỡ tiện ích, tạm đóng chợ tiện ích, dựng lại và cho biết sẽ liên hệ trực tiếp những người bị ảnh hưởng. Socket lưu ý rằng việc tệp này ban đầu đến chợ tiện ích bằng đường nào vẫn còn tranh cãi, nên con đường chính xác chưa được xác định.",
          "Điều này quan trọng nếu bạn hoặc một nhà thầu xây phần mềm bằng Cursor. Hãy kiểm tra xem có ai cài hoặc cập nhật tiện ích đó vào khoảng ngày 29 tháng 10 không. Một báo cáo khuyên xem trong tệp SSH authorized_keys có mục tên svc-telemetry hay không và chạy tập lệnh dọn dẹp chính thức của Cursor, vì chỉ gỡ tiện ích có thể chưa xóa hết. Bài học rộng hơn là hãy coi tiện ích của trình soạn thảo như mọi phần mềm khác bạn cài: chỉ thêm cái cần và từ nhà phát hành bạn xác minh được.",
          { "h": "Ransomware tấn công các thiết bị NAS Synology chưa cập nhật" },
          "Ngày 29 tháng 10, Synology cảnh báo chủ thiết bị cập nhật DiskStation Manager, hệ điều hành NAS của họ, sau khi kẻ tấn công dùng một lỗ hổng đã được vá từ tháng 12 năm 2024 nhắm vào các thiết bị cũ để mã hóa dữ liệu và đòi tiền chuộc. Hãng bảo mật 360 riêng rẽ mô tả loại ransomware này, mà họ gọi là C3RB3R, đổi đuôi tệp bị mã hóa thành .L0CK3D. Họ gắn các vụ tấn công với hai lỗ hổng, CVE-2026-13639 và CVE-2026-13684, mà Synology đã sửa hồi tháng 9. Các báo cáo không thống nhất lỗ hổng nào được dùng trong vụ nào, nhưng cùng chỉ về một cách sửa: cập nhật.",
          "Nếu một chiếc NAS Synology đang chứa tệp của doanh nghiệp bạn, hãy cập nhật DSM lên tối thiểu 7.4-90075, 7.3.2-86009-4, 7.2.2-72806-9 hoặc 7.2.1-69057-12 tùy phiên bản của bạn, và bật tự động cập nhật. Đừng để trang đăng nhập DSM mở ra internet; hãy dùng VPN để truy cập từ xa. Giữ ít nhất một bản sao lưu không nằm trên cùng thiết bị, vì bản sao nằm trên NAS có thể bị mã hóa cùng mọi thứ khác.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Cả ba tin đều quy về việc vá lỗi, biết mình đang chạy gì và có kế hoạch cho lúc có chuyện. SME Essential Eight Quick-Start Kit chuyển Essential Eight của ASD, trong đó có vá lỗi và sao lưu, thành ngôn ngữ dễ hiểu kèm bảng tự đánh giá và kế hoạch 90 ngày. SME Security Incident Response Runbook có các bước đầu tiên cho năm loại sự cố phổ biến, gồm ransomware và tài khoản bị xâm nhập. SME AI Usage Policy and Tool Vetting Kit cho bạn cách kiểm tra một công cụ, chẳng hạn một tiện ích của trình soạn thảo, trước khi bạn duyệt dùng."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 4 de noviembre de 2026",
        tag: "Resumen semanal",
        summary: "Una falla del núcleo de WordPress que CISA ya lista como explotada, una extensión de Claude Code alterada en el mercado de Cursor y ransomware contra dispositivos NAS Synology sin actualizar.",
        body: [
          "Las noticias de esta semana tratan de tres cosas de las que muchos negocios pequeños dependen sin pensarlo mucho: el sitio WordPress que recibe pedidos y consultas, el editor que un desarrollador usa para construir cosas y la caja NAS de la oficina que guarda los archivos. Tres noticias, cada una con algo que puedes hacer.",
          { "h": "Núcleo de WordPress: CISA lista como explotada la falla del momento de la actualización" },
          "WordPress 7.1.4 se lanzó el 28 de octubre para corregir una falla en la forma en que las actualizaciones del núcleo descomprimen archivos. Se registra como CVE-2026-119977 y Wordfence, que asignó el CVE, le dio 8,1 sobre 10. El propio WordPress la califica como Baja. El problema es una condición de carrera: mientras se descomprime una actualización, un atacante que pida el archivo correcto en el momento justo podría ejecutar código. El 3 de noviembre CISA la añadió a su catálogo de vulnerabilidades explotadas conocidas (Known Exploited Vulnerabilities), citando evidencia de explotación activa. Wordfence informó de intentos de explotación, y las fuentes que leí no informan de intrusiones confirmadas.",
          "No supongas que tu sitio se actualizó solo. Abre la pantalla Updates del panel de WordPress y comprueba que la versión sea la 7.1.4 o la versión corregida de tu rama, como la 7.0.8 o la 6.9.11. Si una agencia web o tu proveedor de hosting se ocupa de tu sitio, pídeles que lo confirmen por escrito. Los sitios con WordPress 4.6 o anterior no tienen corrección y deben pasar a una versión compatible.",
          { "h": "Una extensión de Claude Code alterada en el mercado de Cursor" },
          "Cursor dijo que el 29 de octubre una versión modificada de forma maliciosa de la extensión Claude Code, etiquetada 2.1.313, estuvo disponible en su mercado de extensiones, y que hasta 5.000 usuarios podrían haber sido afectados. Cursor dijo que Anthropic no la creó. Según los informes, el código recopilaba datos como el nombre del equipo y la dirección IP pública, e intentaba dar al atacante acceso remoto por SSH. Cursor dijo que ese paso habría fallado en la mayoría de los equipos porque requiere permisos de administrador. Cursor retiró la extensión, cerró su mercado, lo reconstruyó y dijo que contactaría a los usuarios afectados. Socket señala que cómo llegó el archivo al mercado por primera vez sigue en disputa, así que la ruta exacta no está establecida.",
          "Esto importa si tú o un contratista construyen software con Cursor. Comprueba si alguien instaló o actualizó esa extensión alrededor del 29 de octubre. Un informe aconseja buscar en el archivo SSH authorized_keys una entrada llamada svc-telemetry y ejecutar el script de limpieza oficial de Cursor, porque desinstalar la extensión por sí solo puede no eliminar todo. La lección más amplia es tratar las extensiones del editor como cualquier otro software que instalas: añade solo lo que necesitas y de editores que puedas verificar.",
          { "h": "El ransomware ataca dispositivos NAS Synology sin actualizar" },
          "El 29 de octubre Synology advirtió a los propietarios que actualizaran DiskStation Manager, el sistema operativo de sus NAS, después de que atacantes usaran contra dispositivos desactualizados una vulnerabilidad corregida en diciembre de 2024 para cifrar datos y exigir un rescate. La firma de seguridad 360 describió por separado el ransomware, al que llama C3RB3R, y que renombra los archivos cifrados con la terminación .L0CK3D. Vincula los ataques con dos fallas, CVE-2026-13639 y CVE-2026-13684, que Synology corrigió en septiembre. Los informes no coinciden en qué falla se usó en qué ataque, pero ambos apuntan a la misma solución: actualizar.",
          "Si un NAS Synology guarda los archivos de tu negocio, actualiza DSM al menos a 7.4-90075, 7.3.2-86009-4, 7.2.2-72806-9 o 7.2.1-69057-12, según tu versión, y activa las actualizaciones automáticas. No dejes la página de inicio de sesión de DSM abierta a internet; usa una VPN para el acceso remoto. Guarda al menos una copia de seguridad que no esté en el mismo dispositivo, porque una copia en el NAS puede cifrarse junto con todo lo demás.",
          { "h": "Qué significa esto para mis productos" },
          "Las tres noticias se reducen a parchear, saber qué tienes en marcha y tener un plan para cuando algo sale mal. El SME Essential Eight Quick-Start Kit pone el Essential Eight de la ASD, que incluye parchear y las copias de seguridad, en lenguaje sencillo con una autoevaluación y un plan de 90 días. El SME Security Incident Response Runbook tiene acciones de primer paso para cinco tipos de incidentes comunes, incluidos el ransomware y una cuenta comprometida. El SME AI Usage Policy and Tool Vetting Kit te da una forma de revisar una herramienta, como una extensión del editor, antes de aprobarla."
        ]
      }
    }
  },
  {
    type: "blog",
    slug: "audit-trail-for-an-ai-that-sends-email",
    title: "What an AI that sends my email taught me about audit trails",
    date: "2026-10-31",
    tag: "AI Security",
    summary: "After one of Winston's emails went out wrong, I added a pre-send check, a read-back and an append-only log, and learned that the checks need testing too.",
    body: [
      "Winston, the assistant I run for myself, can send email from my Gmail account. That makes it a privileged user, even though I wrote every part of it with Claude Code. In September one of its emails went out wrong, and fixing that taught me more about basic security controls than I expected.",
      {
        "fig": "img/audit-trail-1-assistant.svg", "size": [760, 244],
        "mob": "img/audit-trail-1-assistant-mobile.svg", "msize": [360, 400],
        "alt": "Winston can send email as me. Winston: My own AI assistant, built with Claude Code. Access: It is signed in to my Gmail account. Result: It can send email in my name, so it is a privileged user."
      },
      "The failure was boring. Winston packs an email command into plain text, and a subject line containing a certain character shifted the fields. The email went out with the wrong content and no attachment. Nobody attacked anything. But the shape of the bug worries me: an agent acted on its own reading of an instruction, and nothing stood between that reading and the send.",
      {
        "fig": "img/audit-trail-2-glitch.svg", "size": [760, 244],
        "mob": "img/audit-trail-2-glitch-mobile.svg", "msize": [360, 432],
        "alt": "How one email went out wrong. What I meant: A subject, a message and an attachment, each in its own place. What Winston read: A character in the subject split it in two, so every field moved one place. What went out: An email with the wrong content and no attachment."
      },
      "So I added three controls. A pre-send check refuses to send if the body is empty, and it has already stopped one bad email. A post-send check fetches the message back from Gmail and compares it with what I approved. Every send is also written to an append-only log, so I can reconstruct what the assistant did without relying on its own account of it.",
      {
        "fig": "img/audit-trail-3-controls.svg", "size": [760, 260],
        "mob": "img/audit-trail-3-controls-mobile.svg", "msize": [360, 516],
        "alt": "Three controls I added. 1. Before sending: Is the body empty? If yes, refuse to send. 2. Send: The email goes out through Gmail. 3. Read it back: Fetch it from Gmail and compare with what I approved. Always: Write every send in a log that is only added to."
      },
      "Then the controls turned out to have bugs of their own. The post-send check kept reporting an empty subject on emails that were fine, because my code compared a header name with different capitalisation from the one Gmail sends back. The email was correct and my verifier was wrong. I only knew because I opened the real inbox and looked. A control you have not tested against reality is a guess.",
      {
        "fig": "img/audit-trail-4-checker.svg", "size": [760, 260],
        "mob": "img/audit-trail-4-checker-mobile.svg", "msize": [360, 412],
        "alt": "The checker was wrong, not the email. My check said: The subject is empty. The real inbox showed: The subject was correct. Why: Capital letters did not match: my code compared 'Subject' with a label written 'subject'."
      },
      "In security terms, this is the difference between preventing, recording and verifying. The pre-send check prevents. The log is the evidence you investigate from afterwards. The read-back from Gmail is an outside view of the result, so you are not taking the system's word for what it did. People in SOC and GRC roles talk about audit trails and accountability. I am moving into that field, and I learned why those words matter by watching my own software misreport its own work.",
      {
        "fig": "img/audit-trail-5-roles.svg", "size": [760, 244],
        "mob": "img/audit-trail-5-roles-mobile.svg", "msize": [360, 416],
        "alt": "Prevent, record, verify. Prevent: Stop a bad action before it happens. Record: Keep evidence to investigate afterwards. Verify: Check the result from the outside, not on the system's word."
      },
      "If you let an AI tool send email, post to a customer channel or change files, ask three questions. What stops a bad action before it happens? What records it afterwards in a place that is only ever added to? Who checks the result from outside the tool? If you cannot answer all three, give the tool less access until you can.",
      {
        "fig": "img/audit-trail-6-questions.svg", "size": [760, 290],
        "mob": "img/audit-trail-6-questions-mobile.svg", "msize": [360, 486],
        "alt": "Three questions for any AI tool with access. Before: What stops a bad action before it happens?. After: What records it, in a place that is only added to?. Outside: Who checks the result from outside the tool?. Cannot answer all three? Give the tool less access."
      }
    ],
    tr: {
      vi: {
        title: "Một AI gửi email của tôi đã dạy tôi gì về dấu vết kiểm toán",
        tag: "An ninh AI",
        summary: "Sau khi một email của Winston gửi đi sai, tôi thêm bước kiểm tra trước khi gửi, bước đọc lại và một nhật ký chỉ ghi thêm, rồi học được rằng chính các biện pháp kiểm tra cũng cần được thử.",
        body: [
          "Winston, trợ lý tôi tự chạy cho mình, có thể gửi email từ tài khoản Gmail của tôi. Điều đó biến nó thành một người dùng có đặc quyền, dù toàn bộ do tôi viết cùng Claude Code. Hồi tháng 9, một email của nó gửi đi sai, và việc sửa lỗi đó dạy tôi về các biện pháp kiểm soát an ninh cơ bản nhiều hơn tôi tưởng.",
          {
            "fig": "img/audit-trail-1-assistant-vi.svg", "size": [760, 244],
            "mob": "img/audit-trail-1-assistant-mobile-vi.svg", "msize": [360, 416],
            "alt": "Winston có thể gửi email thay tôi. Winston: Trợ lý AI của riêng tôi, xây cùng Claude Code. Quyền truy cập: Nó đã đăng nhập vào tài khoản Gmail của tôi. Kết quả: Nó gửi được email nhân danh tôi, nên là người dùng có đặc quyền."
          },
          "Lỗi này rất tầm thường. Winston gói một lệnh gửi email thành văn bản thuần, và một dòng tiêu đề chứa một ký tự nhất định làm lệch các trường. Email đi ra với nội dung sai và không có tệp đính kèm. Không ai tấn công gì cả. Nhưng hình dạng của lỗi làm tôi lo: một agent đã hành động theo cách nó hiểu một chỉ thị, và không có gì đứng giữa cách hiểu đó và hành động gửi.",
          {
            "fig": "img/audit-trail-2-glitch-vi.svg", "size": [760, 244],
            "mob": "img/audit-trail-2-glitch-mobile-vi.svg", "msize": [360, 432],
            "alt": "Một email đã đi sai như thế nào. Điều tôi muốn: Một tiêu đề, một nội dung và một tệp đính kèm, mỗi thứ một chỗ. Điều Winston đọc được: Một ký tự trong tiêu đề tách nó làm đôi, nên mọi trường lệch đi một chỗ. Điều đã gửi đi: Một email nội dung sai và không có tệp đính kèm."
          },
          "Vì vậy tôi thêm ba biện pháp kiểm soát. Một bước kiểm tra trước khi gửi từ chối gửi nếu nội dung rỗng, và nó đã chặn một email hỏng. Một bước kiểm tra sau khi gửi lấy thư về từ Gmail rồi so với bản tôi đã duyệt. Mỗi lần gửi cũng được ghi vào một nhật ký chỉ ghi thêm, để tôi dựng lại trợ lý đã làm gì mà không phải dựa vào lời kể của chính nó.",
          {
            "fig": "img/audit-trail-3-controls-vi.svg", "size": [760, 244],
            "mob": "img/audit-trail-3-controls-mobile-vi.svg", "msize": [360, 506],
            "alt": "Ba biện pháp tôi đã thêm. 1. Trước khi gửi: Nội dung có rỗng không? Nếu có, từ chối gửi. 2. Gửi: Email đi ra qua Gmail. 3. Đọc lại: Lấy thư từ Gmail và so với bản tôi đã duyệt. Luôn luôn: Ghi mỗi lần gửi vào nhật ký chỉ ghi thêm."
          },
          "Rồi các biện pháp này hóa ra cũng có lỗi riêng. Bước kiểm tra sau khi gửi cứ báo tiêu đề rỗng với những email vẫn bình thường, vì mã của tôi so tên header với cách viết hoa khác với cách Gmail trả về. Email đúng, còn bộ kiểm tra của tôi sai. Tôi chỉ biết vì đã mở hộp thư thật ra xem. Một biện pháp kiểm soát chưa được thử với thực tế thì chỉ là phỏng đoán.",
          {
            "fig": "img/audit-trail-4-checker-vi.svg", "size": [760, 244],
            "mob": "img/audit-trail-4-checker-mobile-vi.svg", "msize": [360, 396],
            "alt": "Bộ kiểm tra sai, không phải email. Kiểm tra của tôi báo: Tiêu đề rỗng. Hộp thư thật cho thấy: Tiêu đề đúng. Vì sao: Chữ hoa không khớp: mã của tôi so 'Subject' với nhãn viết 'subject'."
          },
          "Theo ngôn ngữ an ninh, đây là sự khác nhau giữa ngăn chặn, ghi lại và xác minh. Bước kiểm tra trước khi gửi là ngăn chặn. Nhật ký là bằng chứng để điều tra về sau. Việc đọc lại từ Gmail là góc nhìn từ bên ngoài về kết quả, để bạn không phải tin lời hệ thống nói về việc nó đã làm. Những người làm SOC và GRC gọi đó là dấu vết kiểm toán và trách nhiệm giải trình. Tôi đang chuyển sang lĩnh vực này, và tôi hiểu vì sao những từ đó quan trọng khi nhìn phần mềm của chính mình báo cáo sai về công việc của nó.",
          {
            "fig": "img/audit-trail-5-roles-vi.svg", "size": [760, 244],
            "mob": "img/audit-trail-5-roles-mobile-vi.svg", "msize": [360, 400],
            "alt": "Ngăn chặn, ghi lại, xác minh. Ngăn chặn: Chặn hành động xấu trước khi nó xảy ra. Ghi lại: Giữ bằng chứng để điều tra về sau. Xác minh: Kiểm tra kết quả từ bên ngoài, không tin lời hệ thống."
          },
          "Nếu bạn để một công cụ AI gửi email, đăng lên kênh khách hàng hay thay đổi tệp, hãy hỏi ba câu. Cái gì chặn một hành động xấu trước khi nó xảy ra? Cái gì ghi lại nó sau đó, ở một nơi chỉ được thêm vào mà không sửa? Ai kiểm tra kết quả từ bên ngoài công cụ? Nếu chưa trả lời được cả ba, hãy cấp cho công cụ ít quyền hơn cho tới khi bạn trả lời được.",
          {
            "fig": "img/audit-trail-6-questions-vi.svg", "size": [760, 290],
            "mob": "img/audit-trail-6-questions-mobile-vi.svg", "msize": [360, 486],
            "alt": "Ba câu hỏi cho mọi công cụ AI có quyền truy cập. Trước: Cái gì chặn một hành động xấu trước khi nó xảy ra?. Sau: Cái gì ghi lại nó, ở nơi chỉ được thêm vào?. Bên ngoài: Ai kiểm tra kết quả từ bên ngoài công cụ?. Chưa trả lời được cả ba? Hãy cấp cho công cụ ít quyền hơn."
          }
        ]
      },
      es: {
        title: "Lo que me enseñó una IA que envía mi correo sobre las pistas de auditoría",
        tag: "Seguridad de IA",
        summary: "Después de que un correo de Winston saliera mal, agregué una comprobación previa, una relectura y un log de solo adición, y aprendí que las comprobaciones también necesitan pruebas.",
        body: [
          "Winston, el asistente que manejo para mí, puede enviar correos desde mi cuenta de Gmail. Eso lo convierte en un usuario con privilegios, aunque yo escribí todo con Claude Code. En septiembre uno de sus correos salió mal, y arreglarlo me enseñó sobre controles básicos de seguridad más de lo que esperaba.",
          {
            "fig": "img/audit-trail-1-assistant-es.svg", "size": [760, 244],
            "mob": "img/audit-trail-1-assistant-mobile-es.svg", "msize": [360, 432],
            "alt": "Winston puede enviar correos en mi nombre. Winston: Mi propio asistente de IA, hecho con Claude Code. Acceso: Tiene la sesión iniciada en mi cuenta de Gmail. Resultado: Puede enviar correos en mi nombre, así que es un usuario con privilegios."
          },
          "El fallo fue aburrido. Winston empaqueta un comando de correo como texto plano, y un asunto con cierto carácter desplazó los campos. El correo salió con contenido equivocado y sin adjunto. Nadie atacó nada. Pero la forma del error me preocupa: un agente actuó según su propia lectura de una instrucción, y nada se interponía entre esa lectura y el envío.",
          {
            "fig": "img/audit-trail-2-glitch-es.svg", "size": [760, 260],
            "mob": "img/audit-trail-2-glitch-mobile-es.svg", "msize": [360, 416],
            "alt": "Cómo salió mal un correo. Lo que yo quería: Un asunto, un mensaje y un adjunto, cada uno en su lugar. Lo que Winston leyó: Un carácter en el asunto lo partió en dos, así que cada campo se movió un lugar. Lo que salió: Un correo con contenido equivocado y sin adjunto."
          },
          "Así que agregué tres controles. Una comprobación previa al envío se niega a enviar si el cuerpo está vacío, y ya detuvo un correo defectuoso. Una comprobación posterior al envío vuelve a traer el mensaje desde Gmail y lo compara con lo que yo aprobé. Además, cada envío se registra en un log de solo adición, para poder reconstruir lo que hizo el asistente sin depender de su propio relato.",
          {
            "fig": "img/audit-trail-3-controls-es.svg", "size": [760, 244],
            "mob": "img/audit-trail-3-controls-mobile-es.svg", "msize": [360, 506],
            "alt": "Tres controles que agregué. 1. Antes de enviar: ¿El cuerpo está vacío? Si es así, se niega a enviar. 2. Enviar: El correo sale por Gmail. 3. Releer: Lo trae de Gmail y lo compara con lo que aprobé. Siempre: Anota cada envío en un log de solo adición."
          },
          "Después resultó que los controles también tenían errores propios. La comprobación posterior seguía informando un asunto vacío en correos que estaban bien, porque mi código comparaba el nombre de una cabecera con una capitalización distinta a la que devuelve Gmail. El correo estaba bien y mi verificador estaba mal. Solo lo supe porque abrí la bandeja de entrada real y miré. Un control que no has probado contra la realidad es una suposición.",
          {
            "fig": "img/audit-trail-4-checker-es.svg", "size": [760, 276],
            "mob": "img/audit-trail-4-checker-mobile-es.svg", "msize": [360, 428],
            "alt": "El verificador estaba mal, no el correo. Mi comprobación decía: El asunto está vacío. La bandeja real mostraba: El asunto era correcto. Por qué: Las mayúsculas no coincidían: mi código comparaba 'Subject' con una etiqueta escrita 'subject'."
          },
          "En términos de seguridad, esta es la diferencia entre prevenir, registrar y verificar. La comprobación previa previene. El log es la evidencia desde la que investigas después. La relectura desde Gmail es una vista externa del resultado, para no tomar la palabra del sistema sobre lo que hizo. Quienes trabajan en SOC y GRC hablan de pistas de auditoría y rendición de cuentas. Yo me estoy moviendo hacia ese campo, y aprendí por qué importan esas palabras viendo a mi propio software informar mal de su trabajo.",
          {
            "fig": "img/audit-trail-5-roles-es.svg", "size": [760, 244],
            "mob": "img/audit-trail-5-roles-mobile-es.svg", "msize": [360, 416],
            "alt": "Prevenir, registrar, verificar. Prevenir: Detener una mala acción antes de que ocurra. Registrar: Guardar evidencia para investigar después. Verificar: Comprobar el resultado desde fuera, sin fiarse de lo que dice el sistema."
          },
          "Si dejas que una herramienta de IA envíe correos, publique en un canal de clientes o cambie archivos, hazte tres preguntas. ¿Qué detiene una mala acción antes de que ocurra? ¿Qué la registra después, en un lugar al que solo se añade? ¿Quién comprueba el resultado desde fuera de la herramienta? Si no puedes responder las tres, dale menos acceso a la herramienta hasta que puedas.",
          {
            "fig": "img/audit-trail-6-questions-es.svg", "size": [760, 306],
            "mob": "img/audit-trail-6-questions-mobile-es.svg", "msize": [360, 486],
            "alt": "Tres preguntas para cualquier herramienta de IA con acceso. Antes: ¿Qué detiene una mala acción antes de que ocurra?. Después: ¿Qué la registra, en un lugar al que solo se añade?. Desde fuera: ¿Quién comprueba el resultado desde fuera de la herramienta?. ¿No puedes responder las tres? Dale menos acceso a la herramienta."
          }
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-10-31",
    title: "AI & ICT security news: week ending 31 Oct 2026",
    date: "2026-10-31",
    tag: "Weekly digest",
    summary: "A GitLab flaw that CISA says is now exploited (with a second one to patch), an exploited access bypass in Drupal Commerce, and flaws in the built-in browsers of five AI coding tools.",
    body: [
      "This week's stories are about software that small businesses run themselves: a code server, an online store and the AI coding tools a developer uses every day. Three stories, each with one thing you can do.",
      { "h": "GitLab: CISA says the maximum-severity flaw is now being exploited" },
      "CISA added a GitLab flaw, CVE-2026-97229, to its Known Exploited Vulnerabilities catalog on 29 October, based on evidence of active exploitation. It is rated 10.0 on the CVSS scale, and an unauthenticated attacker can run code on a GitLab server by sending a crafted regular expression in a CI/CD configuration. It affects self-managed Community and Enterprise Edition installations. GitLab released fixes on 12 October in versions 19.2.8, 19.3.5 and 19.4.2. The reports I read do not say who is attacking or how many servers were hit.",
      "Patching once is not enough here. A second GitLab flaw, CVE-2026-110264, was fixed on 21 October in newer releases, and BleepingComputer and eSecurity Planet both report that instances updated on 12 October are still affected by it. As of 22 October, Censys had found no confirmed exploitation of that second flaw. If you run your own GitLab, or a contractor does, update to the latest fixed release in your series, for example 19.4.3 or 19.5.1, and review the server's logs and recent SSH key changes. BleepingComputer reports that GitLab.com already runs the patched version.",
      { "h": "Drupal Commerce: an exploited flaw puts online store orders in question" },
      "Drupal has warned of a highly critical access bypass in Commerce Core, the e-commerce module for Drupal sites, and says it is being exploited in the wild. It is separate from Drupal core's own security releases. The public detail is thin. An access bypass means someone can reach data or actions without the checks that should stop them, and Drupal has told store owners to audit their orders.",
      "If you run a Drupal store, ask whoever maintains it to install the fixed Commerce Core release listed in Drupal's security advisory and to keep the web server, login and payment logs from before the update. Then compare recent orders, refunds and discounts with your payment provider's records and look for anything with no matching customer action. An odd order is a reason to investigate, not proof that you were breached.",
      { "h": "Built-in browsers in AI coding tools: five tools, two still unpatched" },
      "Researchers at Forever Security published flaws in the built-in browsers of five AI coding tools on 29 October: Cursor, GitHub Copilot, OpenAI Codex, VS Code and Claude Desktop. They call the class EMBRACE, because these embedded browsers are trusted as if they were real ones. In Cursor, a loaded page could push hidden instructions into the agent's command box, and Cursor patched it on 1 October. In Copilot, a page could fake the address bar, for example by showing a GitHub login address, and GitHub fixed it in version 1.1.29 on 13 October. In Codex and VS Code, local pages could read files outside the project folder, and both were unpatched when the research came out. Claude Desktop was listed with the same kind of file-access problem as VS Code, and the sources I read do not give a clear fix status for it.",
      "These are developer tools, so this matters most if you or a contractor build software. Update the tools, treat a preview of an untrusted page or file as untrusted code, and keep SSH keys, .env files and tokens out of project folders where you can. Read what an agent asks to run before you approve it. In the Cursor test reported by Hackread, the agent ran into a sandbox restriction, disabled it and tried again.",
      { "h": "What this means for my products" },
      "The GitLab and Drupal stories are about patching on a deadline and knowing what to do when a system may already be compromised. The SME Essential Eight Quick-Start Kit turns the ASD Essential Eight, which includes patching, into plain English with a 90-day plan, and the SME Security Incident Response Runbook gives you steps for the day a server or account looks compromised. The SME Vendor Risk Assessment Matrix helps you question the hosting and development partners who maintain these systems. For the AI coding tools story, the SME AI Usage Policy and Tool Vetting Kit gives you a way to check an AI tool before you approve it."
    ],
    sources: [
      { "title": "Cyber Security News: CISA Warns of GitLab Integer Overflow Vulnerability Exploited in Attacks", "url": "https://cybersecuritynews.com/gitlab-integer-overflow-vulnerability-exploited/" },
      { "title": "GBHackers: CISA Confirms Active Exploitation of GitLab Vulnerability CVE-2026-97229", "url": "https://gbhackers.com/cisa-gitlab-vulnerability-cve-2026-97229/" },
      { "title": "Daily Security Review: Public Exploit Released for CVSS 10.0 GitLab Flaw CVE-2026-97229", "url": "https://dailysecurityreview.com/?p=44542" },
      { "title": "BleepingComputer: GitLab warns of new max severity code execution vulnerability", "url": "https://www.bleepingcomputer.com/news/security/gitlab-warns-of-new-max-severity-code-execution-vulnerability/" },
      { "title": "eSecurity Planet: GitLab Patches Second 10.0 RCE Flaw in October, Forcing Another Security Update", "url": "https://www.esecurityplanet.com/news/news-gitlab-critical-rce-patch-october/" },
      { "title": "IT Security News: Drupal Commerce Core Vulnerability Exploited Against Online Stores", "url": "https://www.itsecuritynews.info/drupal-commerce-core-vulnerability-exploited-against-online-stores/" },
      { "title": "Bellator Cyber: Drupal Commerce Access Bypass: Store Audit Steps", "url": "https://bellatorcyber.com/blog/drupal-commerce-access-bypass-store-order-audit" },
      { "title": "Cyber Security News: Critical Drupal Commerce Vulnerability Could Let Hackers Buy Products for Just $0.01", "url": "https://cybersecuritynews.com/critical-drupal-commerce-vulnerability/" },
      { "title": "Cyber Security News: Researchers Hacked Cursor, GitHub Copilot, Codex, VS Code, and Claude Desktop Embedded Browsers", "url": "https://cybersecuritynews.com/popular-ai-embedded-browsers-hacked" },
      { "title": "Hackread: EMBRACE Flaws in 5 AI Coding Tools Enable Code Execution and File Theft", "url": "https://hackread.com/embrace-flaws-ai-coding-tools-code-execution-theft/" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 31 tháng 10 năm 2026",
        tag: "Bản tin tuần",
        summary: "Một lỗ hổng GitLab mà CISA nói nay đã bị khai thác (kèm một lỗ hổng thứ hai cần vá), một lỗ hổng vượt quyền truy cập đang bị khai thác trong Drupal Commerce, và các lỗ hổng trong trình duyệt tích hợp của năm công cụ lập trình AI.",
        body: [
          "Các tin tuần này nói về phần mềm mà doanh nghiệp nhỏ tự vận hành: một máy chủ mã nguồn, một cửa hàng trực tuyến và các công cụ lập trình AI mà lập trình viên dùng mỗi ngày. Ba tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "GitLab: CISA nói lỗ hổng mức nghiêm trọng tối đa nay đã bị khai thác" },
          "Ngày 29 tháng 10, CISA đã thêm một lỗ hổng của GitLab, CVE-2026-97229, vào danh mục các lỗ hổng đã bị khai thác (Known Exploited Vulnerabilities), dựa trên bằng chứng về việc khai thác thực tế. Lỗ hổng được chấm 10,0 trên thang CVSS, và kẻ tấn công chưa đăng nhập có thể chạy mã trên máy chủ GitLab bằng cách gửi một biểu thức chính quy được chế tạo trong cấu hình CI/CD. Nó ảnh hưởng tới các bản cài tự quản lý của Community Edition và Enterprise Edition. GitLab đã phát hành bản sửa vào ngày 12 tháng 10 trong các phiên bản 19.2.8, 19.3.5 và 19.4.2. Các báo cáo tôi đọc không nói ai đang tấn công hay có bao nhiêu máy chủ bị ảnh hưởng.",
          "Ở đây vá một lần là chưa đủ. Một lỗ hổng GitLab thứ hai, CVE-2026-110264, đã được sửa vào ngày 21 tháng 10 trong các bản mới hơn, và cả BleepingComputer lẫn eSecurity Planet đều cho biết các hệ thống đã cập nhật hôm 12 tháng 10 vẫn bị ảnh hưởng bởi lỗ hổng này. Tính đến ngày 22 tháng 10, Censys chưa tìm thấy việc khai thác nào được xác nhận với lỗ hổng thứ hai. Nếu bạn tự chạy GitLab, hoặc một nhà thầu chạy giúp bạn, hãy cập nhật lên bản sửa mới nhất trong dòng phiên bản của bạn, ví dụ 19.4.3 hoặc 19.5.1, và xem lại nhật ký máy chủ cùng các thay đổi khóa SSH gần đây. BleepingComputer cho biết GitLab.com đã chạy bản đã vá.",
          { "h": "Drupal Commerce: một lỗ hổng bị khai thác khiến các đơn hàng của cửa hàng trực tuyến đáng ngờ" },
          "Drupal đã cảnh báo về một lỗ hổng vượt quyền truy cập (access bypass) mức rất nghiêm trọng trong Commerce Core, module thương mại điện tử cho các website Drupal, và cho biết nó đang bị khai thác ngoài thực tế. Lỗ hổng này tách biệt với các bản phát hành bảo mật của chính Drupal core. Thông tin công khai còn ít. Vượt quyền truy cập nghĩa là ai đó có thể chạm vào dữ liệu hoặc thao tác mà lẽ ra các bước kiểm tra phải chặn lại, và Drupal đã đề nghị chủ cửa hàng rà soát đơn hàng của mình.",
          "Nếu bạn chạy một cửa hàng Drupal, hãy nhờ người bảo trì cài bản Commerce Core đã sửa được nêu trong thông báo bảo mật của Drupal và giữ lại nhật ký máy chủ web, đăng nhập và thanh toán từ trước lần cập nhật. Sau đó so sánh các đơn hàng, hoàn tiền và giảm giá gần đây với hồ sơ của nhà cung cấp thanh toán và tìm bất cứ thứ gì không có hành động khách hàng tương ứng. Một đơn hàng lạ là lý do để điều tra, không phải bằng chứng rằng bạn đã bị xâm nhập.",
          { "h": "Trình duyệt tích hợp trong công cụ lập trình AI: năm công cụ, hai công cụ chưa được vá" },
          "Ngày 29 tháng 10, các nhà nghiên cứu của Forever Security công bố lỗ hổng trong trình duyệt tích hợp của năm công cụ lập trình AI: Cursor, GitHub Copilot, OpenAI Codex, VS Code và Claude Desktop. Họ gọi nhóm lỗi này là EMBRACE, vì các trình duyệt tích hợp này được tin tưởng như trình duyệt thật. Ở Cursor, một trang được tải có thể đẩy chỉ thị ẩn vào ô lệnh của agent, và Cursor đã vá vào ngày 1 tháng 10. Ở Copilot, một trang có thể làm giả thanh địa chỉ, ví dụ hiện địa chỉ đăng nhập GitHub, và GitHub đã sửa trong phiên bản 1.1.29 vào ngày 13 tháng 10. Ở Codex và VS Code, các trang cục bộ có thể đọc tệp bên ngoài thư mục dự án, và cả hai chưa được vá khi nghiên cứu được công bố. Claude Desktop được liệt kê với cùng loại vấn đề truy cập tệp như VS Code, và các nguồn tôi đọc không nêu rõ tình trạng sửa lỗi của nó.",
          "Đây là công cụ dành cho lập trình viên, nên điều này quan trọng nhất nếu bạn hoặc một nhà thầu xây dựng phần mềm. Hãy cập nhật các công cụ, coi bản xem trước của một trang hoặc tệp không đáng tin là mã không đáng tin, và giữ khóa SSH, tệp .env và token ngoài thư mục dự án khi có thể. Hãy đọc kỹ những gì agent xin chạy trước khi bạn duyệt. Trong thử nghiệm với Cursor mà Hackread đưa tin, agent gặp một giới hạn sandbox, tắt nó đi và thử lại.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Các tin về GitLab và Drupal nói về vá lỗi theo thời hạn và biết phải làm gì khi một hệ thống có thể đã bị xâm nhập. SME Essential Eight Quick-Start Kit chuyển Essential Eight của ASD, trong đó có việc vá lỗi, sang ngôn ngữ dễ hiểu kèm kế hoạch 90 ngày, còn SME Security Incident Response Runbook cho bạn các bước cho ngày một máy chủ hay tài khoản có vẻ bị xâm nhập. SME Vendor Risk Assessment Matrix giúp bạn đặt câu hỏi cho các đối tác lưu trữ và phát triển đang bảo trì những hệ thống này. Với tin về công cụ lập trình AI, SME AI Usage Policy and Tool Vetting Kit cho bạn một cách kiểm tra một công cụ AI trước khi bạn duyệt nó."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 31 de octubre de 2026",
        tag: "Resumen semanal",
        summary: "Una falla de GitLab que CISA dice que ya se explota (con una segunda por parchear), una omisión de acceso explotada en Drupal Commerce y fallas en los navegadores integrados de cinco herramientas de programación con IA.",
        body: [
          "Las noticias de esta semana tratan del software que los negocios pequeños administran por su cuenta: un servidor de código, una tienda en línea y las herramientas de programación con IA que un desarrollador usa todos los días. Tres noticias, cada una con algo concreto que puedes hacer.",
          { "h": "GitLab: CISA dice que la falla de severidad máxima ya está siendo explotada" },
          "El 29 de octubre, CISA añadió una falla de GitLab, CVE-2026-97229, a su catálogo de vulnerabilidades explotadas conocidas (Known Exploited Vulnerabilities), con base en evidencia de explotación activa. Tiene una calificación de 10,0 en la escala CVSS, y un atacante sin autenticar puede ejecutar código en un servidor GitLab enviando una expresión regular manipulada en una configuración de CI/CD. Afecta a las instalaciones autogestionadas de Community Edition y Enterprise Edition. GitLab publicó correcciones el 12 de octubre en las versiones 19.2.8, 19.3.5 y 19.4.2. Los informes que leí no dicen quién está atacando ni cuántos servidores fueron afectados.",
          "Aquí no basta con parchear una vez. Una segunda falla de GitLab, CVE-2026-110264, se corrigió el 21 de octubre en versiones más nuevas, y tanto BleepingComputer como eSecurity Planet informan de que las instancias actualizadas el 12 de octubre siguen afectadas por ella. Hasta el 22 de octubre, Censys no había encontrado explotación confirmada de esa segunda falla. Si administras tu propio GitLab, o lo hace un contratista, actualiza a la última versión corregida de tu serie, por ejemplo 19.4.3 o 19.5.1, y revisa los registros del servidor y los cambios recientes de claves SSH. BleepingComputer informa de que GitLab.com ya ejecuta la versión parcheada.",
          { "h": "Drupal Commerce: una falla explotada pone en duda los pedidos de las tiendas en línea" },
          "Drupal ha advertido de una omisión de acceso (access bypass) altamente crítica en Commerce Core, el módulo de comercio electrónico para sitios Drupal, y dice que se está explotando en la práctica. Es independiente de las versiones de seguridad del propio Drupal core. El detalle público es escaso. Una omisión de acceso significa que alguien puede alcanzar datos o acciones sin las comprobaciones que deberían detenerlo, y Drupal ha pedido a los dueños de tiendas que auditen sus pedidos.",
          "Si tienes una tienda Drupal, pide a quien la mantiene que instale la versión corregida de Commerce Core indicada en el aviso de seguridad de Drupal y que conserve los registros del servidor web, de inicio de sesión y de pagos anteriores a la actualización. Luego compara los pedidos, reembolsos y descuentos recientes con los registros de tu proveedor de pagos y busca cualquier cosa sin una acción de cliente que la respalde. Un pedido extraño es motivo para investigar, no prueba de que te hayan vulnerado.",
          { "h": "Navegadores integrados en herramientas de programación con IA: cinco herramientas, dos aún sin parche" },
          "El 29 de octubre, investigadores de Forever Security publicaron fallas en los navegadores integrados de cinco herramientas de programación con IA: Cursor, GitHub Copilot, OpenAI Codex, VS Code y Claude Desktop. Llaman EMBRACE a esta clase de fallas, porque estos navegadores integrados se tratan como si fueran navegadores reales. En Cursor, una página cargada podía introducir instrucciones ocultas en el cuadro de comandos del agente, y Cursor lo parcheó el 1 de octubre. En Copilot, una página podía falsificar la barra de direcciones, por ejemplo mostrando una dirección de inicio de sesión de GitHub, y GitHub lo corrigió en la versión 1.1.29 el 13 de octubre. En Codex y VS Code, las páginas locales podían leer archivos fuera de la carpeta del proyecto, y ambos seguían sin parche cuando salió la investigación. Claude Desktop figuraba con el mismo tipo de problema de acceso a archivos que VS Code, y las fuentes que leí no dan un estado claro de corrección para él.",
          "Son herramientas para desarrolladores, así que esto importa más si tú o un contratista construyen software. Actualiza las herramientas, trata la vista previa de una página o archivo no confiable como código no confiable y mantén las claves SSH, los archivos .env y los tokens fuera de las carpetas de proyecto cuando puedas. Lee lo que un agente pide ejecutar antes de aprobarlo. En la prueba con Cursor que informó Hackread, el agente se topó con una restricción del sandbox, la desactivó y volvió a intentarlo.",
          { "h": "Qué significa esto para mis productos" },
          "Las noticias de GitLab y Drupal tratan de parchear con un plazo y de saber qué hacer cuando un sistema ya podría estar comprometido. El SME Essential Eight Quick-Start Kit convierte el Essential Eight de la ASD, que incluye parchear, en lenguaje sencillo con un plan de 90 días, y el SME Security Incident Response Runbook te da pasos para el día en que un servidor o una cuenta parezca comprometido. La SME Vendor Risk Assessment Matrix te ayuda a hacer preguntas a los socios de hosting y desarrollo que mantienen estos sistemas. Para la noticia de las herramientas de programación con IA, el SME AI Usage Policy and Tool Vetting Kit te da una forma de revisar una herramienta de IA antes de aprobarla."
        ]
      }
    }
  },
  {
    type: "news",
    slug: "news-2026-10-28",
    title: "AI & ICT security news: week ending 28 Oct 2026",
    date: "2026-10-28",
    tag: "Weekly digest",
    summary: "Two critical PHP flaws now confirmed as exploited, a Microsoft 365 campaign that steals sign-in sessions after MFA, a poisoned release of an AI developer library, and a survey that puts staff use of AI tools ahead of AI phishing as the worry.",
    body: [
      "This week's stories sit close to where small businesses actually work: the web server behind your website, the Microsoft 365 account your email lives in, the AI tools your team or your developer pulls in, and the way staff use them. Four stories, each with one thing you can do.",
      { "h": "PHP2Shell: two critical PHP flaws are now on the CISA exploited list" },
      "Two flaws in PHP, CVE-2026-109618 and CVE-2026-109619, let an attacker run code on a server without logging in. Both are rated 9.2 on the CVSS v4 scale. The PHP project released fixes in versions 8.5.12, 8.4.27, 8.3.36 and 8.2.35. The Canadian Cyber Centre noted a public proof of concept on 21 October, and on 26 October CISA added both flaws to its Known Exploited Vulnerabilities catalog. Some early vendor claims about specific intrusions were later withdrawn, so the confirmed picture is exploitation attempts and some successful attacks, not a full list of victims. The Register and BankInfoSecurity both report the CISA listing.",
      "Lots of small business websites run on PHP, often through a content management system. Ask whoever hosts or maintains your site which PHP version it runs and when it will be updated. PHP 8.1 and older no longer get fixes from the PHP project, so those sites need an upgrade or a vendor that backports fixes. PHP is also built into some other products, so ask your IT provider to check those too.",
      { "h": "Microsoft 365 accounts taken over without a password" },
      "Huntress reports a campaign that compromised Microsoft 365 email accounts at 79 organisations between 14 July and 22 September 2026. Victims were sent to fake sign-in pages that passed the real Microsoft login and MFA prompt through to the attacker, who kept the session token issued afterwards. Because that token is created after MFA, the attacker needed neither the password nor a second code. In some cases the attacker then removed existing MFA methods, registered new devices and created inbox rules to hide mail. Huntress and Help Net Security report the same headline numbers.",
      "A password reset alone does not undo this. If you suspect an account, revoke its sessions first, then remove any devices and sign-in methods you do not recognise and check for odd inbox rules. If you manage Microsoft 365, ask your IT provider to use Conditional Access policies and to restrict the device-code sign-in flow.",
      { "h": "A poisoned LiteLLM release steals cloud and AI keys" },
      "LiteLLM is an open-source Python library many teams use to talk to different AI providers. Version 1.107.0 was published with credential-stealing code after attackers used stolen GitHub tokens belonging to three of the project's engineers. According to Wiz and The Hacker News, the bad version was quarantined and the last safe version is 1.106.2. The code runs whenever Python starts and reportedly goes after cloud credentials, AI provider keys, SSH keys and browser data. Wiz's timeline puts the release on 21 October.",
      "If you or a contractor built anything on LiteLLM, check that no machine or container ever ran 1.107.0. If one did, treat every key on that machine as exposed and replace them from a clean environment. More generally, keep AI keys out of developer laptops where you can, and give each key only the access it needs.",
      { "h": "A survey says the bigger AI worry is your own staff" },
      "A survey of security professionals by O'Reilly, reported by Help Net Security, found that the top concerns were data leaking through commercial AI tools and staff trusting AI output without checking it. AI-written phishing ranked lower, even though more than half of respondents had met it. More than half said colleagues at least sometimes put sensitive data into unapproved AI tools, and that was reported as less common where a company has a comprehensive policy. For AI agents, the top worry was excessive permissions or no clear owner.",
      "This is one survey, so treat it as a signal, not a measurement. The practical step is cheap: write down which AI tools are approved, what may never be pasted into them, and who owns each tool or agent.",
      { "h": "What this means for my products" },
      "The PHP and Microsoft 365 stories are about patching, access and recovery. The SME Essential Eight Quick-Start Kit is the closest fit for the patching and MFA side, the SME Security Incident Response Runbook gives you a plan for the day an account or server is compromised, and the SME Vendor Risk Assessment Matrix helps you question your hosting and IT providers. The LiteLLM and survey stories are the reason the SME AI Usage Policy and Tool Vetting Kit exists: an approved tool register, a vetting checklist and an incident form."
    ],
    sources: [
      { "title": "The Register: CISA confirms PHP2Shell under attack as researchers clock successful exploits", "url": "https://theregister.com/cyber-crime/2026/10/27/cisa-confirms-php2shell-under-attack-as-researchers-clock-successful-exploits/5305681" },
      { "title": "BankInfoSecurity: PHP2Shell Actively Exploited, US Cybersecurity Agency Warns", "url": "https://bankinfosecurity.com/php2shell-actively-exploited-us-cybersecurity-agency-warns-a-33219" },
      { "title": "Canadian Centre for Cyber Security: Critical vulnerabilities impacting PHP (AL26-026)", "url": "https://cyber.gc.ca/en/alerts-advisories/al26-026-critical-vulnerabilities-impacting-php-cve-2026-109618-cve-2026-109619" },
      { "title": "Huntress: M365 Token Spray and Replay Campaign Compromises Business Email Accounts", "url": "https://www.huntress.com/blog/token-replay-spray" },
      { "title": "Help Net Security: Microsoft 365 accounts compromised at 79 organizations, no passwords needed", "url": "https://www.helpnetsecurity.com/2026/10/23/microsoft-365-accounts-stolen-sessions/" },
      { "title": "Wiz: LiteLLM Compromised, Steals Credentials", "url": "https://www.wiz.io/blog/litellm-compromised-steals-credentials" },
      { "title": "The Hacker News: LiteLLM Compromised in Supply Chain Attack", "url": "https://thehackernews.com/2026/10/litellm-compromised-in-supply-chain.html" },
      { "title": "Help Net Security: Security pros reckon the biggest AI risk comes with an employee badge", "url": "https://helpnetsecurity.com/2026/10/26/ai-tools-security-worry-survey" }
    ],
    tr: {
      vi: {
        title: "Bản tin AI & an ninh mạng: tuần kết thúc ngày 28 tháng 10 năm 2026",
        tag: "Bản tin tuần",
        summary: "Hai lỗ hổng PHP nghiêm trọng đã được xác nhận bị khai thác, một chiến dịch Microsoft 365 đánh cắp phiên đăng nhập sau bước MFA, một bản phát hành bị cài mã độc của thư viện cho lập trình viên AI, và một khảo sát cho thấy việc nhân viên dùng công cụ AI đáng lo hơn lừa đảo do AI.",
        body: [
          "Các tin tuần này nằm sát nơi doanh nghiệp nhỏ thật sự làm việc: máy chủ web phía sau website của bạn, tài khoản Microsoft 365 chứa email của bạn, các công cụ AI mà đội ngũ hoặc lập trình viên của bạn đưa vào, và cách nhân viên dùng chúng. Bốn tin, mỗi tin kèm một việc bạn có thể làm.",
          { "h": "PHP2Shell: hai lỗ hổng PHP nghiêm trọng đã nằm trong danh sách bị khai thác của CISA" },
          "Hai lỗ hổng trong PHP, CVE-2026-109618 và CVE-2026-109619, cho phép kẻ tấn công chạy mã trên máy chủ mà không cần đăng nhập. Cả hai được chấm 9,2 theo thang CVSS v4. Dự án PHP đã phát hành bản vá trong các phiên bản 8.5.12, 8.4.27, 8.3.36 và 8.2.35. Trung tâm An ninh mạng Canada ghi nhận một mã khai thác mẫu đã công khai vào ngày 21 tháng 10, và ngày 26 tháng 10 CISA đã đưa cả hai lỗ hổng vào danh mục Known Exploited Vulnerabilities. Một số tuyên bố ban đầu của các hãng về những vụ xâm nhập cụ thể sau đó đã bị rút lại, nên điều đã được xác nhận là có các nỗ lực khai thác và một số cuộc tấn công thành công, không phải một danh sách đầy đủ nạn nhân. The Register và BankInfoSecurity đều đưa tin việc CISA thêm vào danh mục.",
          "Rất nhiều website của doanh nghiệp nhỏ chạy trên PHP, thường qua một hệ quản trị nội dung. Hãy hỏi người lưu trữ hoặc bảo trì website của bạn xem nó đang chạy phiên bản PHP nào và khi nào sẽ được cập nhật. PHP 8.1 trở xuống không còn nhận bản sửa lỗi từ dự án PHP, nên các website đó cần nâng cấp hoặc dùng nhà cung cấp có vá ngược. PHP cũng được tích hợp sẵn trong một số sản phẩm khác, nên hãy nhờ nhà cung cấp IT kiểm tra cả những sản phẩm đó.",
          { "h": "Tài khoản Microsoft 365 bị chiếm mà không cần mật khẩu" },
          "Huntress báo cáo một chiến dịch đã xâm nhập tài khoản email Microsoft 365 tại 79 tổ chức từ ngày 14 tháng 7 đến ngày 22 tháng 9 năm 2026. Nạn nhân bị dẫn tới các trang đăng nhập giả chuyển tiếp trang đăng nhập và lời nhắc MFA thật của Microsoft cho kẻ tấn công, kẻ này giữ lại token phiên được cấp sau đó. Vì token đó được tạo sau MFA, kẻ tấn công không cần mật khẩu cũng không cần mã thứ hai. Trong một số trường hợp, kẻ tấn công còn xóa các phương thức MFA hiện có, đăng ký thiết bị mới và tạo quy tắc hộp thư để giấu thư. Huntress và Help Net Security nêu cùng các con số chính.",
          "Chỉ đặt lại mật khẩu thì không xóa được hậu quả. Nếu nghi ngờ một tài khoản, hãy thu hồi các phiên đăng nhập trước, rồi xóa mọi thiết bị và phương thức đăng nhập bạn không nhận ra và kiểm tra các quy tắc hộp thư lạ. Nếu bạn quản lý Microsoft 365, hãy nhờ nhà cung cấp IT dùng các chính sách Conditional Access và hạn chế luồng đăng nhập bằng device-code.",
          { "h": "Một bản LiteLLM bị cài mã độc đánh cắp khóa đám mây và khóa AI" },
          "LiteLLM là thư viện Python mã nguồn mở mà nhiều đội dùng để kết nối với các nhà cung cấp AI khác nhau. Phiên bản 1.107.0 đã được phát hành kèm mã đánh cắp thông tin đăng nhập sau khi kẻ tấn công dùng token GitHub bị đánh cắp của ba kỹ sư trong dự án. Theo Wiz và The Hacker News, phiên bản xấu đã bị cách ly và phiên bản an toàn gần nhất là 1.106.2. Mã này chạy mỗi khi Python khởi động và được cho là nhắm vào thông tin đăng nhập đám mây, khóa của nhà cung cấp AI, khóa SSH và dữ liệu trình duyệt. Dòng thời gian của Wiz đặt việc phát hành vào ngày 21 tháng 10.",
          "Nếu bạn hoặc một nhà thầu đã xây thứ gì đó trên LiteLLM, hãy kiểm tra xem có máy hay container nào từng chạy 1.107.0 không. Nếu có, hãy coi mọi khóa trên máy đó là đã lộ và thay chúng từ một môi trường sạch. Nói chung, hãy giữ khóa AI ngoài laptop của lập trình viên khi có thể, và chỉ cấp cho mỗi khóa quyền truy cập nó cần.",
          { "h": "Một khảo sát nói nỗi lo lớn hơn về AI là chính nhân viên của bạn" },
          "Một khảo sát của O'Reilly với các chuyên gia an ninh, do Help Net Security đưa tin, cho thấy các mối lo hàng đầu là dữ liệu rò rỉ qua công cụ AI thương mại và nhân viên tin kết quả AI mà không kiểm tra. Lừa đảo do AI viết xếp thấp hơn, dù hơn một nửa người trả lời đã gặp nó. Hơn một nửa nói rằng đồng nghiệp ít nhất thỉnh thoảng đưa dữ liệu nhạy cảm vào công cụ AI chưa được duyệt, và tình trạng đó được báo cáo là ít phổ biến hơn ở nơi công ty có chính sách đầy đủ. Với các agent AI, mối lo hàng đầu là quyền quá rộng hoặc không có người chịu trách nhiệm rõ ràng.",
          "Đây chỉ là một khảo sát, nên hãy coi nó là một tín hiệu, không phải một phép đo. Bước thực tế thì rẻ: ghi ra công cụ AI nào được duyệt, điều gì không bao giờ được dán vào đó, và ai chịu trách nhiệm cho từng công cụ hay agent.",
          { "h": "Điều này có nghĩa gì với các sản phẩm của tôi" },
          "Tin PHP và Microsoft 365 nói về vá lỗi, quyền truy cập và phục hồi. SME Essential Eight Quick-Start Kit khớp nhất với phần vá lỗi và MFA, SME Security Incident Response Runbook cho bạn một kế hoạch cho ngày một tài khoản hay máy chủ bị xâm nhập, và SME Vendor Risk Assessment Matrix giúp bạn đặt câu hỏi cho nhà cung cấp hosting và IT. Tin LiteLLM và khảo sát là lý do SME AI Usage Policy and Tool Vetting Kit tồn tại: một sổ đăng ký công cụ được duyệt, một checklist thẩm định và một biểu mẫu báo sự cố."
        ]
      },
      es: {
        title: "Noticias de IA y seguridad TIC: semana que termina el 28 de octubre de 2026",
        tag: "Resumen semanal",
        summary: "Dos fallas críticas de PHP confirmadas como explotadas, una campaña de Microsoft 365 que roba sesiones de inicio de sesión después del MFA, una versión envenenada de una biblioteca para desarrolladores de IA y una encuesta que sitúa el uso de herramientas de IA por parte del personal por encima del phishing con IA como preocupación.",
        body: [
          "Las noticias de esta semana están cerca de donde trabajan realmente los negocios pequeños: el servidor web detrás de tu sitio, la cuenta de Microsoft 365 donde vive tu correo, las herramientas de IA que tu equipo o tu desarrollador incorporan y la forma en que el personal las usa. Cuatro noticias, cada una con algo concreto que puedes hacer.",
          { "h": "PHP2Shell: dos fallas críticas de PHP ya están en la lista de explotadas de CISA" },
          "Dos fallas en PHP, CVE-2026-109618 y CVE-2026-109619, permiten a un atacante ejecutar código en un servidor sin iniciar sesión. Ambas tienen una calificación de 9,2 en la escala CVSS v4. El proyecto PHP publicó correcciones en las versiones 8.5.12, 8.4.27, 8.3.36 y 8.2.35. El Centro Canadiense de Ciberseguridad señaló que había una prueba de concepto pública el 21 de octubre, y el 26 de octubre CISA añadió ambas fallas a su catálogo de Vulnerabilidades Explotadas Conocidas. Algunas afirmaciones iniciales de proveedores sobre intrusiones concretas se retiraron después, así que lo confirmado son intentos de explotación y algunos ataques exitosos, no una lista completa de víctimas. The Register y BankInfoSecurity informan de la inclusión en el catálogo de CISA.",
          "Muchos sitios web de negocios pequeños funcionan con PHP, a menudo mediante un sistema de gestión de contenidos. Pregunta a quien aloja o mantiene tu sitio qué versión de PHP usa y cuándo la actualizará. PHP 8.1 y las anteriores ya no reciben correcciones del proyecto PHP, así que esos sitios necesitan una actualización o un proveedor que aplique las correcciones a versiones antiguas. PHP también viene integrado en otros productos, así que pide a tu proveedor de TI que revise esos también.",
          { "h": "Cuentas de Microsoft 365 tomadas sin necesidad de contraseña" },
          "Huntress informa de una campaña que comprometió cuentas de correo de Microsoft 365 en 79 organizaciones entre el 14 de julio y el 22 de septiembre de 2026. Las víctimas eran enviadas a páginas de inicio de sesión falsas que pasaban al atacante el inicio de sesión real de Microsoft y la solicitud de MFA, y el atacante se quedaba con el token de sesión emitido después. Como ese token se crea después del MFA, el atacante no necesitaba ni la contraseña ni un segundo código. En algunos casos, el atacante además eliminó los métodos de MFA existentes, registró dispositivos nuevos y creó reglas de bandeja de entrada para ocultar correos. Huntress y Help Net Security dan las mismas cifras principales.",
          "Restablecer la contraseña por sí solo no deshace esto. Si sospechas de una cuenta, primero revoca sus sesiones, luego elimina los dispositivos y métodos de inicio de sesión que no reconozcas y revisa si hay reglas de bandeja de entrada extrañas. Si administras Microsoft 365, pide a tu proveedor de TI que use políticas de Conditional Access y que restrinja el flujo de inicio de sesión por device-code.",
          { "h": "Una versión envenenada de LiteLLM roba claves de la nube y de IA" },
          "LiteLLM es una biblioteca de Python de código abierto que muchos equipos usan para conectarse a distintos proveedores de IA. La versión 1.107.0 se publicó con código que roba credenciales después de que los atacantes usaran tokens de GitHub robados de tres ingenieros del proyecto. Según Wiz y The Hacker News, la versión mala fue puesta en cuarentena y la última versión segura es la 1.106.2. El código se ejecuta cada vez que arranca Python y, según se informa, busca credenciales de la nube, claves de proveedores de IA, claves SSH y datos del navegador. La cronología de Wiz sitúa la publicación el 21 de octubre.",
          "Si tú o un contratista construyeron algo sobre LiteLLM, comprueba que ninguna máquina ni contenedor haya ejecutado nunca la 1.107.0. Si alguna lo hizo, trata todas las claves de esa máquina como expuestas y reemplázalas desde un entorno limpio. En general, mantén las claves de IA fuera de las laptops de los desarrolladores cuando puedas, y da a cada clave solo el acceso que necesita.",
          { "h": "Una encuesta dice que la mayor preocupación sobre la IA es tu propio personal" },
          "Una encuesta de O'Reilly a profesionales de seguridad, publicada por Help Net Security, encontró que las principales preocupaciones eran la filtración de datos a través de herramientas comerciales de IA y que el personal confíe en lo que produce la IA sin comprobarlo. El phishing escrito con IA quedó más abajo, aunque más de la mitad de los encuestados se había topado con él. Más de la mitad dijo que sus colegas al menos a veces ponen datos sensibles en herramientas de IA no aprobadas, y se informó de que eso era menos común donde la empresa tiene una política completa. Sobre los agentes de IA, la mayor preocupación fueron los permisos excesivos o la falta de un responsable claro.",
          "Esta es una sola encuesta, así que tómala como una señal, no como una medición. El paso práctico es barato: anota qué herramientas de IA están aprobadas, qué no se debe pegar nunca en ellas y quién es responsable de cada herramienta o agente.",
          { "h": "Qué significa esto para mis productos" },
          "Las noticias de PHP y Microsoft 365 tratan de parches, acceso y recuperación. El SME Essential Eight Quick-Start Kit es el que mejor encaja con la parte de parches y MFA, el SME Security Incident Response Runbook te da un plan para el día en que una cuenta o un servidor se vea comprometido, y la SME Vendor Risk Assessment Matrix te ayuda a hacer preguntas a tus proveedores de hosting y de TI. Las noticias de LiteLLM y la encuesta son la razón por la que existe el SME AI Usage Policy and Tool Vetting Kit: un registro de herramientas aprobadas, una lista de verificación para evaluarlas y un formulario de incidentes."
        ]
      }
    }
  },
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
