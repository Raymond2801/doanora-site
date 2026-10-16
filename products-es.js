/* Spanish text for the product pages, one entry per product slug (neutral Spanish, "tú" form).
   Same shape as products-data.js: every list has the same number of entries as the English one,
   and sections match the English sections one for one. A list that does not match is ignored and the
   English shows instead, so a half-finished edit never shows wrong content.
   Product names, links, kind and audience are not here (names stay as on Gumroad).
   {price} and {was} stand for the product's current prices.
   Plain text only. No dashes in the copy, same as the English. */
window.I18N_PRODUCTS = window.I18N_PRODUCTS || {};
window.I18N_PRODUCTS.es = {
  "winston-build-guide": {
    short: "Crea tu propio asistente de IA en un Mac y úsalo desde tu iPhone.",
    tagline: "Crea tu propio asistente de IA en un Mac y úsalo desde tu iPhone. Una guía de 9 capítulos, todo el código y una lista de verificación de instalación.",
    card: "Una guía de 9 capítulos y todo el código para crear tu propio asistente de IA en un Mac. Envía un resumen matutino, gestiona tu correo y recibe órdenes desde tu iPhone, y mantenerlo en marcha cuesta unos $8 al mes.",
    row: "Crea tu propio asistente de IA en un Mac y úsalo desde tu iPhone: una guía de 9 capítulos, todo el código y una lista de verificación de instalación.",
    intro: [
      "Winston es el asistente de IA que construí para encargarse de mis propias tareas administrativas. Envía un resumen matutino, lee y responde correos, encuentra archivos en mi Mac y recibe órdenes desde mi iPhone, las 24 horas del día.",
      "Lo construí en unas dos semanas, a la vez que trabajaba a tiempo completo. Esta guía muestra exactamente cómo: cada paso, cada error con el que me topé y cada solución. Está escrita para personas que no son desarrolladoras."
    ],
    sections: [
      {
        h: "Qué incluye",
        list: [
          "Una guía de 9 capítulos (PDF) que te lleva de cero a un asistente en pleno funcionamiento. Cubre la instalación, la memoria, el correo, el control del Mac, los comandos de voz, la búsqueda de archivos y los resúmenes matutinos.",
          "Todo el código (ZIP): 6 archivos de Python listos para usar. Rellena tus tokens y ejecuta un solo comando.",
          "Una lista de verificación de instalación rápida, para confirmar que cada paso funciona antes de pasar al siguiente.",
          "La referencia de comandos de Winston: todos los comandos que entiende, en una sola página."
        ]
      },
      {
        h: "Qué puede hacer Winston",
        list: [
          "Envía un resumen matutino a las 7 de la mañana con el clima, el calendario y los titulares de noticias",
          "Lee, resume y responde tu Gmail",
          "Encuentra cualquier archivo en tu Mac o en una unidad externa",
          "Hace capturas de pantalla y las envía a tu iPhone",
          "Abre aplicaciones, busca en Google y envía iMessages",
          "Recuerda tus preferencias, tus hábitos y el contexto de tu trabajo",
          "Funciona 24/7 y se reinicia solo si falla"
        ]
      },
      {
        h: "Para quién es",
        list: [
          "Usuarios de Mac y iPhone",
          "Personas sin conocimientos de programación: no hace falta experiencia",
          "Cualquiera que quiera un asistente que de verdad haga cosas",
          "Personas dispuestas a dedicar unas cuantas tardes a la instalación"
        ],
        notH: "No es para",
        notList: [
          "Usuarios de Windows",
          "Cualquiera que busque un producto listo para usar, sin ninguna instalación"
        ]
      },
      {
        h: "Prepárate para algunos errores",
        p: [
          "En algún momento algo no funcionará. La guía recoge los errores más comunes y cómo solucionarlos exactamente, porque yo me topé con todos ellos."
        ]
      }
    ],
    facts: [
      ["Formato", "Guía en PDF y código de Python (ZIP)"],
      ["Funciona en", "Mac e iPhone"],
      ["Tiempo de instalación", "De 4 a 6 horas repartidas en 2 o 3 tardes"],
      ["Gasto de funcionamiento", "Unos $8 al mes (API de Claude)"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "deskmate": {
    short: "Un bot de Telegram que responde las preguntas del personal a partir de tus documentos de políticas.",
    tagline: "Un bot de Telegram que responde las preguntas del personal a partir de tus propios documentos de políticas y les dice qué documento usó.",
    card: "Un bot de Telegram que responde las preguntas del personal a partir de tus propios documentos de políticas. Despliegue con un clic en Railway, una instalación independiente para cada negocio y sin base de datos vectorial que configurar.",
    row: "Un bot de Telegram que responde las preguntas del personal a partir de tus propios documentos de políticas. Despliegue con un clic en Railway, una instalación independiente para cada negocio.",
    intro: [
      "Tu personal tiene dudas sobre vacaciones, descansos, reembolsos y turnos. Las respuestas están en tu manual, pero nadie lee el manual, así que te preguntan a ti.",
      "Deskmate es un bot de Telegram para una sola empresa. Subes tus documentos de políticas y tu equipo le hace preguntas por mensaje directo o en tu chat de grupo."
    ],
    sections: [
      {
        h: "Cómo es cada respuesta",
        p: ["Cada respuesta tiene siempre las mismas cuatro líneas."],
        pairs: [
          ["Respuesta", "La respuesta en sí. Empieza con Sí o No cuando la pregunta es de sí o no."],
          ["Fuente", "El documento y la sección de donde salió la respuesta."],
          ["Control de conflictos", "Si dos de tus documentos se contradicen, por ejemplo una política de reembolsos antigua y otra nueva."],
          ["Vigencia", "Desde cuándo está en vigor ese documento."]
        ],
        after: "Si la respuesta no está en tus documentos, Deskmate lo dice y le indica al personal que consulte a un responsable. No inventa."
      },
      {
        h: "Instalación sin programar",
        steps: [
          "Crea un bot de Telegram con @BotFather.",
          "Consigue una clave de API de Anthropic.",
          "Haz clic en el botón Deploy on Railway y pega cinco valores, entre ellos tu clave de licencia.",
          "Envía tus documentos al bot. Acepta archivos .md, .txt, .docx y .pdf de hasta 10 MB cada uno."
        ],
        after: "Incluye documentos de demostración para que lo pruebes antes de subir los tuyos. La guía de instalación está escrita para dueños de negocio que nunca han usado una terminal."
      },
      {
        h: "Dónde viven tus datos",
        p: [
          "Todo funciona en tu propio proyecto de Railway, con tu propia clave de API de Anthropic. Tus documentos se quedan en el almacenamiento de tu proyecto y no se me envían a mí.",
          "Para responder una pregunta, el bot la envía junto con tus documentos a la API de Anthropic, con tu propia clave."
        ]
      },
      {
        h: "Hecho para seguir funcionando",
        list: [
          "Se reinicia solo si pierde la conexión con Telegram durante unos minutos.",
          "Puedes conectar una comprobación gratuita de healthchecks.io para recibir una alerta si el bot se detiene.",
          "Solo tú puedes subir o eliminar documentos. Tras cada subida te dice qué tamaño tiene tu biblioteca y, más o menos, cuánto cuesta ahora cada pregunta.",
          "En un grupo, solo lee los mensajes que se le envían (/ask, o una respuesta a una de sus respuestas). El resto del chat del grupo nunca le llega."
        ]
      },
      {
        h: "Tu clave de licencia",
        p: [
          "Cada compra incluye una clave de licencia. La encontrarás en la página que ves justo después de comprar y en el correo del recibo. La pegas al desplegar el bot."
        ],
        list: [
          "Una clave sirve para hasta 3 instalaciones. Reiniciar o volver a desplegar el mismo bot no gasta ninguna.",
          "El bot comprueba tu clave con Gumroad al arrancar y más o menos una vez al día.",
          "Si una compra se reembolsa o se disputa, el bot deja de responder.",
          "Si no se puede contactar con Gumroad durante un rato, un bot que ya está en marcha sigue funcionando.",
          "Si necesitas más de 3 instalaciones, escribe al soporte por correo y se restablecerá el contador."
        ]
      },
      {
        h: "Cuánto cuesta mantenerlo",
        p: ["Pagas directamente a Railway y a Anthropic."],
        list: [
          "Plan Railway Hobby: US$5 al mes. Es obligatorio.",
          "Anthropic: cada pregunta envía tus documentos junto con ella, así que el gasto crece con la cantidad que subas. Con los documentos de demostración, una pregunta cuesta unos US$0.02. Con 50.000 palabras de documentos, unos US$0.30.",
          "Una pregunta hecha dentro de los cinco minutos siguientes a la anterior cuesta más o menos una décima parte."
        ]
      },
      {
        h: "Qué incluye",
        list: [
          "Un bot de políticas funcionando en tu propia cuenta de Railway, desplegado desde una plantilla de Railway con un clic",
          "Una guía de instalación paso a paso (PDF)",
          "Una guía para preparar tus documentos (PDF) y una plantilla de políticas lista para usar",
          "Tus guías en PDF llevan tu dirección de correo como marca. Pueden tardar unos minutos en estar listas y recibirás un enlace de descarga por correo",
          "8 documentos de políticas de demostración, para que lo pruebes antes de subir los tuyos",
          "Soporte por correo, con respuesta en un plazo de 2 días",
          "Reembolso completo en un plazo de 14 días si no logras desplegarlo después de contactar con el soporte"
        ],
        after: "El reembolso no afecta a tus derechos bajo la Ley del Consumidor de Australia (Australian Consumer Law)."
      }
    ],
    facts: [
      ["Entrega", "Un bot en tu propia cuenta de Railway"],
      ["Documentos", "Archivos .md, .txt, .docx y .pdf, de hasta 10 MB cada uno"],
      ["Instalación", "Sin programar. Pegas cinco valores"],
      ["Gasto de funcionamiento", "Railway US$5 al mes más el uso de Anthropic"],
      ["Soporte", "Correo, respuesta en un plazo de 2 días"],
      ["Reembolso", "14 días si no logras desplegarlo"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago. Tu clave de licencia aparece justo después de comprar."
    }
  },

  "sme-security-starter-kit": {
    short: "Cuatro plantillas de seguridad para pequeñas empresas, en un solo paquete.",
    tagline: "Cuatro plantillas de seguridad listas para usar para pequeñas empresas, en un solo paquete.",
    card: "Cuatro plantillas de seguridad prácticas en un solo paquete: un pack de pósteres de concienciación en seguridad, un runbook de respuesta a incidentes, una lista de verificación de TI para la incorporación y salida de empleados, y una matriz de evaluación de riesgos de proveedores. Cómpralas juntas y paga menos que comprándolas una por una.",
    row: "Cuatro plantillas en un solo paquete: un pack de pósteres de concienciación en seguridad, un runbook de respuesta a incidentes, una lista de verificación de TI para la incorporación y salida de empleados, y una matriz de evaluación de riesgos de proveedores. Cómpralas juntas y paga menos que comprándolas una por una.",
    intro: [
      "Cuatro plantillas listas para usar que cubren lo básico de la seguridad en una pequeña empresa: quién tiene acceso a qué, qué hacer cuando algo sale mal, qué tan seguros son tus proveedores y cómo mantener alerta a tu equipo.",
      "Cómpralas juntas y paga menos que comprándolas una por una."
    ],
    sections: [
      {
        h: "Qué hay dentro",
        items: [
          { blurb: "Una lista de verificación de respuesta a incidentes, una guía de consulta rápida para 5 tipos de incidentes comunes, una guía de gravedad, una lista de contactos clave, un registro de incidentes y tres formularios de registro complementarios (Word)." },
          { blurb: "Listas de verificación de incorporación y salida de empleados, una matriz de acceso por rol, un registro de conformidad y dos formularios de registro complementarios (Word)." },
          { blurb: "Un registro de proveedores, una matriz de evaluación de 30 preguntas, un panel con un mapa de calor de riesgos y una guía de puntuación, además de formularios de Word para cuestionarios, aprobaciones y baja de proveedores (Excel y Word)." },
          { blurb: "12 pósteres listos para imprimir en A4 y US Letter, archivos de PowerPoint editables, 12 imágenes PNG y una guía de implantación en Word con un plan de 12 meses (PDF, PowerPoint, PNG y Word)." }
        ],
        after: "Cada plantilla también se vende por separado."
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas, responsables de oficina y responsables de TI que quieren establecer lo básico de la seguridad sin contratar a un consultor."]
      },
      {
        h: "Formato",
        p: ["Archivos editables de Word (.docx), Excel (.xlsx) y PowerPoint (.pptx), además de PDF listos para imprimir e imágenes PNG. Funciona en Microsoft Office y LibreOffice. Sin macros, sin complementos y sin necesidad de cuenta."]
      }
    ],
    facts: [
      ["Incluye", "4 plantillas"],
      ["Comprado por separado", "{was}"],
      ["Formato", "Word, Excel, PowerPoint, PDF y PNG"],
      ["Funciona en", "Microsoft Office y LibreOffice"],
      ["Requisitos", "Sin macros, sin complementos, sin cuenta"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "sme-security-incident-response-runbook": {
    short: "Un plan listo para usar para gestionar un incidente de seguridad.",
    tagline: "Un proceso listo para usar para detectar, contener y recuperarse de un incidente de seguridad, junto con la documentación que demuestra que lo gestionaste correctamente.",
    row: "Un plan listo para usar para detectar, contener y recuperarse de un incidente de seguridad, junto con los formularios para registrarlo. Documento de Word editable.",
    intro: [
      "Cuando algo sale mal, lo último que quieres es improvisar la respuesta sobre la marcha. Esta plantilla te da los pasos a seguir y los registros que conviene guardar."
    ],
    sections: [
      {
        h: "Qué hay dentro",
        list: [
          "Una lista de verificación de respuesta a incidentes que abarca detectar y contener, erradicar y recuperar, y comunicar y revisar",
          "Una guía de consulta rápida con las primeras acciones para 5 tipos de incidentes comunes: phishing, ransomware, un dispositivo perdido o robado, una cuenta comprometida y una sospecha de filtración de datos",
          "Una guía de clasificación de gravedad para priorizar los incidentes con rapidez",
          "Una lista de contactos clave y de escalamiento que puedes completar antes de necesitarla",
          "Un registro de incidentes para seguir cada incidente con fechas y resultados",
          "Tres formularios de registro complementarios para tus archivos: un formulario de informe de incidente, un formulario de revisión posterior al incidente y una plantilla de correo de notificación"
        ]
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas y responsables de oficina que necesitan un plan claro de respuesta a incidentes sin contratar a un consultor de seguridad."]
      },
      {
        h: "Formato",
        p: ["Un documento de Word editable (.docx). Funciona en Microsoft Word, Google Docs y LibreOffice. No hace falta software especial ni una cuenta."]
      }
    ],
    facts: [
      ["Formato", "Documento de Word (.docx)"],
      ["Funciona en", "Word, Google Docs, LibreOffice"],
      ["Cubre", "Phishing, ransomware, dispositivos perdidos, cuentas comprometidas, filtraciones de datos"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "sme-it-onboarding-offboarding-checklist": {
    short: "Da acceso al personal nuevo de forma segura y retíralo sin dejar cabos sueltos cuando se vaya.",
    tagline: "Un proceso completo para incorporar al personal nuevo de forma segura y quitarle el acceso sin dejar cabos sueltos cuando se vaya.",
    row: "Da acceso al personal nuevo de forma segura y retíralo sin dejar cabos sueltos cuando se vaya. Incluye una matriz de acceso, un registro de conformidad y formularios de RR. HH. Documento de Word editable.",
    intro: [
      "Deja de perder la cuenta de quién sigue teniendo acceso después de que un empleado se va. Esta plantilla te da un proceso para imprimir o rellenar, para incorporar al personal nuevo de forma segura y retirarle el acceso cuando se marcha."
    ],
    sections: [
      {
        h: "Qué hay dentro",
        list: [
          "Una lista de verificación de incorporación que abarca antes del primer día, el primer día y la primera semana",
          "Una lista de verificación de salida que abarca antes del último día, el último día y después del último día",
          "Una matriz de acceso por rol que puedes adaptar a tu equipo",
          "Un registro de conformidad para seguir cada acción con fechas e iniciales",
          "Dos formularios de registro complementarios para tu expediente de RR. HH.: Configuración de TI para empleados nuevos y Salida de empleados"
        ]
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas y responsables de oficina que necesitan un sistema sencillo sin contratar a un consultor de TI."]
      },
      {
        h: "Formato",
        p: ["Un documento de Word editable (.docx). Funciona en Microsoft Word, Google Docs y LibreOffice. No hace falta software especial ni una cuenta."]
      }
    ],
    facts: [
      ["Formato", "Documento de Word (.docx)"],
      ["Funciona en", "Word, Google Docs, LibreOffice"],
      ["Ideal para", "Pequeñas empresas y responsables de oficina"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "sme-vendor-risk-assessment-matrix": {
    short: "Haz una lista de tus proveedores, puntúa el riesgo y decide qué hacer con cada uno.",
    tagline: "Una forma sencilla de listar a todos tus proveedores, puntuar el riesgo y decidir qué hacer con cada uno.",
    row: "Lista hasta 30 proveedores, puntúa el riesgo automáticamente y descubre en cuáles actuar primero. Libro de Excel y formularios de Word.",
    intro: [
      "Tu negocio depende de proveedores que quizá nunca hayas revisado: el software de contabilidad, la empresa de nóminas, la empresa de soporte de TI, el alojamiento web. Si uno de ellos sufre una brecha o una caída prolongada, se convierte en tu problema.",
      "Este pack te da una forma sencilla de listar a todos tus proveedores, puntuar el riesgo y decidir qué hacer con cada uno, sin contratar a un consultor de seguridad."
    ],
    sections: [
      {
        h: "Qué hay dentro",
        list: [
          "Un registro de proveedores para hasta 30 proveedores, con menús desplegables y un nivel de riesgo automático (Bajo, Medio, Alto o Crítico) para cada uno",
          "Una matriz de evaluación con 30 preguntas de seguridad en lenguaje sencillo por proveedor, puntuadas automáticamente (Sí, Parcial, No o N/A)",
          "Un panel con un mapa de calor de riesgos, una lista de los 10 proveedores en los que actuar primero y alertas de revisiones vencidas y de contratos que están por terminar",
          "Una guía de puntuación donde puedes cambiar los pesos, los niveles, los rangos de puntuación y los ciclos de revisión para adaptarlos a tu negocio",
          "Un archivo de ejemplo resuelto con 10 proveedores ficticios, para que veas cómo encaja todo",
          "Un cuestionario de seguridad de proveedores que puedes enviar a tus proveedores (Word)",
          "Un formulario de evaluación y aprobación de proveedores, una lista de verificación de contratos y protección de datos, una lista de verificación de baja de proveedores y un glosario en lenguaje sencillo (Word)"
        ]
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas, responsables de oficina y responsables de TI que necesitan una forma clara y repetible de revisar a sus proveedores."]
      },
      {
        h: "Formato",
        p: ["Un libro de Excel editable (.xlsx) y un documento de Word editable (.docx). Funciona en Microsoft Excel, Microsoft Word y LibreOffice. Solo fórmulas estándar: sin macros, sin complementos y sin necesidad de cuenta."]
      }
    ],
    facts: [
      ["Formato", "Libro de Excel (.xlsx) y documento de Word (.docx)"],
      ["Capacidad", "Hasta 30 proveedores"],
      ["Funciona en", "Excel, Word, LibreOffice"],
      ["Requisitos", "Sin macros, sin complementos, sin cuenta"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "sme-security-awareness-poster-pack": {
    short: "12 pósteres de seguridad listos para imprimir, uno para cada mes del año.",
    tagline: "12 pósteres de concienciación en seguridad listos para imprimir, uno para cada mes del año, escritos en lenguaje sencillo para equipos sin departamento de seguridad.",
    row: "12 pósteres de seguridad listos para imprimir, uno para cada mes del año, en lenguaje sencillo. Archivos PDF, PowerPoint y PNG más una guía de implantación en Word.",
    intro: [
      "La mayoría de los problemas de seguridad empiezan en un momento cualquiera: un clic con prisa, una contraseña reutilizada, un equipo portátil que se queda sin bloquear. Un póster en el lugar adecuado es un recordatorio barato y constante.",
      "Este pack te da 12 pósteres listos para imprimir, uno para cada mes del año, escritos en lenguaje sencillo para equipos que no tienen un departamento de seguridad."
    ],
    sections: [
      {
        h: "Qué hay dentro",
        list: [
          "12 pósteres sobre phishing, contraseñas, autenticación multifactor, bloqueo de pantalla, actualizaciones de software, fraude en pagos, herramientas de IA, manejo de datos, Wi-Fi y trabajo fuera de la oficina, dispositivos USB, seguridad en la oficina y cómo reportar un problema",
          "PDF listos para imprimir en papel A4 y US Letter, un póster por página",
          "Archivos de PowerPoint editables para A4 y US Letter, para que puedas añadir tus propios datos de contacto y tu logotipo, o cambiar cualquier texto",
          "12 imágenes PNG para el chat del personal, el correo o tu intranet",
          "Una guía de implantación (Word) con consejos de impresión, un plan de 12 meses, dónde colocar cada póster, una pregunta de dos minutos para tu equipo cada mes, una lista de verificación de lanzamiento y un registro de actividad que puedes mostrar a aseguradoras y auditores"
        ]
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas, responsables de oficina y responsables de TI que quieren una forma sencilla de mantener la seguridad presente en la mente de todos durante todo el año."]
      },
      {
        h: "Formato",
        p: ["PDF listos para imprimir (A4 y US Letter), archivos de PowerPoint editables (.pptx), imágenes PNG y una guía de Word (.docx). Los archivos editables funcionan en Microsoft PowerPoint, Keynote, Google Slides y LibreOffice."]
      }
    ],
    facts: [
      ["Pósteres", "12, uno para cada mes"],
      ["Tamaños de papel", "A4 y US Letter"],
      ["Formatos", "PDF, PowerPoint (.pptx), PNG y una guía de Word (.docx)"],
      ["Funciona en", "PowerPoint, Keynote, Google Slides, LibreOffice"],
      ["Ideal para", "Pequeñas empresas y responsables de oficina"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  },

  "math-kingdom": {
    short: "Un juego de defensa de torres con matemáticas que se juega en el navegador.",
    tagline: "Un juego de defensa de torres con matemáticas que se juega en tu navegador. Abre la página y juega.",
    row: "Un juego de defensa de torres con matemáticas que se juega en el navegador. Abre la página y juega.",
    intro: [
      "Math Kingdom se juega en el navegador, así que no hay nada que instalar ni cuenta que crear. Lo probó mi propio hijo."
    ],
    sections: [
      {
        h: "Cómo se juega",
        list: [
          "Elige un mundo y luego un nivel.",
          "Responde cada pregunta de matemáticas con el teclado numérico en pantalla.",
          "Tienes tres vidas, y un contador de racha y una puntuación te muestran cómo vas.",
          "Juega en inglés o en vietnamita."
        ]
      },
      {
        h: "Hecho con",
        p: ["Un solo archivo HTML con JavaScript puro y Canvas. Sin frameworks y sin dependencias. Está alojado en GitHub Pages."]
      }
    ],
    facts: [
      ["Precio", "Gratis"],
      ["Plataforma", "Cualquier navegador moderno"],
      ["Idiomas", "Inglés y vietnamita"],
      ["Instalación", "Ninguna"]
    ],
    cta: {
      label: "Jugar a Math Kingdom",
      rowLabel: "Jugar",
      note: "Abre el juego en una pestaña nueva."
    }
  },

  "kokos-quest": {
    short: "Un juego de plataformas de lectoescritura basado en el currículo NAPLAN.",
    tagline: "Un juego de plataformas de lectoescritura que se juega en tu navegador, basado en el currículo NAPLAN. Abre la página y juega.",
    row: "Un juego de plataformas de lectoescritura basado en el currículo NAPLAN. Abre la página y juega.",
    intro: [
      "Koko's Quest se juega en el navegador, así que no hay nada que instalar ni cuenta que crear. Guía al mono Koko por la selva, respondiendo preguntas de ortografía y gramática para abrir puertas y recoger plátanos por el camino."
    ],
    sections: [
      {
        h: "Cómo se juega",
        list: [
          "Elige un nivel de dificultad para edades de 6 a 8, 8 a 10, o 10 a 12 años.",
          "Responde preguntas de ortografía y gramática para abrir puertas y seguir avanzando.",
          "Recoge plátanos y esquiva los pinchos en el camino por cada mundo.",
          "Las preguntas siguen las pruebas de lectoescritura NAPLAN de Australia."
        ]
      },
      {
        h: "Hecho con",
        p: ["Un solo archivo HTML con JavaScript puro y Canvas. Sin frameworks y sin dependencias. Está alojado en GitHub Pages."]
      }
    ],
    facts: [
      ["Precio", "Gratis"],
      ["Plataforma", "Cualquier navegador moderno"],
      ["Idioma", "Inglés"],
      ["Instalación", "Ninguna"]
    ],
    cta: {
      label: "Jugar a Koko's Quest",
      rowLabel: "Jugar",
      note: "Abre el juego en una pestaña nueva."
    }
  },

  "sme-ai-usage-policy-tool-vetting-kit": {
    short: "Una política de uso de IA en lenguaje claro, una lista de verificación de herramientas de IA y los formularios para aplicarla.",
    tagline: "Una política de uso de IA en lenguaje claro, una forma de revisar cualquier herramienta de IA antes de aprobarla, y los formularios y textos para ponerlo todo en marcha.",
    row: "Una política de uso de IA en lenguaje claro, una lista de verificación de herramientas de IA y los formularios para aplicarla, lista en medio día. Archivos editables de Word y Excel.",
    intro: [
      "Es probable que tu equipo ya use herramientas de IA para escribir correos, resumir reuniones y redactar documentos. Sin una regla clara, es fácil pegar datos de clientes, contratos o contraseñas en una herramienta que nunca fue pensada para guardarlos.",
      "Este kit te da una política de uso de IA en lenguaje claro, una forma de revisar cualquier herramienta de IA antes de aprobarla, y los formularios y textos para ponerlo todo en marcha. Puedes dejarlo listo en medio día, sin contratar a un consultor.",
      "Una política por sí sola no basta. Tu equipo también necesita saber qué herramientas están aprobadas, cómo se aprueba una nueva y qué hacer cuando algo sale mal. Este kit cubre los tres puntos."
    ],
    sections: [
      {
        h: "Qué incluye",
        list: [
          "Política de uso de IA (Word): 27 reglas numeradas en lenguaje claro, una guía de colores (Verde, Ámbar, Rojo y Nunca) sobre qué se puede ingresar en una herramienta de IA, ejemplos del día a día y una guía rápida de una página para el equipo",
          "Lista de verificación de herramientas de IA (Word): 6 preguntas filtro y 35 verificaciones detalladas para decidir si una herramienta puede usarse, con señales de alerta a tener en cuenta, un registro de la decisión y un listado listo para imprimir",
          "Formularios y textos de IA (Word): formularios de Reconocimiento del personal, Solicitud de herramienta de IA e Informe de incidente de IA, una reunión de equipo de 20 minutos con 8 escenarios, y textos listos para usar con el personal, los clientes y los proveedores de IA",
          "Registro de herramientas de IA aprobadas (Excel): la lista de trabajo de herramientas aprobadas, con menús desplegables, fechas de revisión ya calculadas, resaltado para las que están por vencer o vencidas, y un registro de excepciones aprobadas",
          "Guía de inicio (Word): deja todo listo en cinco pasos, con las opciones que puedes cambiar reunidas en un solo lugar",
          "Ejemplo resuelto (Word), de regalo: una herramienta de IA inventada, llevada paso a paso desde la solicitud hasta el registro, con cada formulario, verificación y registro ya completado, para que veas cómo se ve el trabajo terminado"
        ]
      },
      {
        h: "Cómo funciona",
        steps: [
          "Completa el nombre de tu empresa, tu responsable de seguridad y tu propietario.",
          "Averigua qué herramientas de IA ya usa tu equipo.",
          "Revisa las herramientas más usadas con la lista de verificación, usando el ejemplo resuelto como guía, y añade las que aprueben al registro.",
          "Publica la política y realiza la reunión de equipo de 20 minutos.",
          "Coloca la guía rápida donde el equipo la vea, y fija dos recordatorios de revisión."
        ]
      },
      {
        h: "Para quién es",
        p: ["Dueños de pequeñas empresas, gerentes de oficina y líderes de IT que quieren una forma clara y repetible de usar la IA de manera segura en el trabajo. No está ligado a ningún producto de IA, así que sigue siendo útil aunque las herramientas cambien: el kit plantea preguntas en lugar de calificar productos, para que tú decidas qué es seguro para tu negocio."]
      },
      {
        h: "Formato",
        p: ["Cuatro documentos de Word (.docx) editables más un libro de Excel (.xlsx) editable, y un ejemplo resuelto (.docx) de regalo. Funciona en Microsoft Word, Microsoft Excel y LibreOffice. Solo fórmulas estándar: sin macros, sin complementos y sin necesidad de cuenta."]
      },
      {
        h: "Para tener en cuenta",
        p: ["Esto es orientación general, no asesoría legal. Las leyes de privacidad, empleo y grabación varían según el país, el estado y el sector, así que verifica lo que aplica donde operas. Para uso en tu propio negocio: por favor no revender ni compartir los archivos."]
      }
    ],
    facts: [
      ["Formato", "4 documentos Word (.docx) y 1 libro Excel (.xlsx)"],
      ["Funciona en", "Word, Excel, LibreOffice"],
      ["Tiempo de puesta en marcha", "Alrededor de medio día"],
      ["Configuración", "Sin macros, sin complementos, sin cuenta"]
    ],
    cta: {
      label: "Comprar en Gumroad",
      note: "Gumroad se encarga del pago y de la descarga."
    }
  }
};
