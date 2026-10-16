/* Product catalogue. Plain data only: every string is shown with textContent, so no markup
   is needed (or allowed). The home page, the Products page and every product page are built
   from this one list, so a change here shows up everywhere.

   Product fields
     slug, name, kind, audience ("Personal" or "SME")
     status    "live" (on sale), "free", "soon" (announced, not on sale yet) or "off" (hidden everywhere)
     featured  true = shown under "Featured products" and tagged "Featured" in the list
     price     text such as "A$29.99"; was = the usual price, shown struck through on the product page
     short     one line for the "More products" cards
     tagline   lead sentence on the product page
     card      text on the featured card (tagline if missing)
     row       text on the Products list (tagline if missing)
     intro[] (paragraphs), sections[], facts[[label, value]]
     cta { label, rowLabel, url, note }, related[] (up to 3 slugs)
     soonNote  shown instead of a price when status is "soon"
     gumroad { permalink, name, hash }  bookkeeping for the daily Gumroad sync, never shown.
       permalink = the Gumroad short code. name = the full Gumroad product name (it can differ from
       name above). hash = first 12 hex characters of the SHA-256 of the listing text (the
       description with tags removed and whitespace collapsed). Products not on Gumroad have none.

   Section fields (all optional except h)
     h, p[] (paragraphs before the list), steps[] (numbered), pairs[[term, text]],
     items[] (products inside a bundle: { slug, name, blurb }; name, price and link come from the
     product with that slug), list[], notH + notList[] (a "not for" list), after (closing paragraph)

   Descriptions follow the Gumroad listings. If a listing changes, change it here too. */
window.PRODUCTS = [
  {
    slug: "winston-build-guide",
    name: "Winston Build Guide",
    kind: "Guide",
    audience: "Personal",
    status: "live",
    featured: true,
    price: "A$29.99",
    short: "Build your own AI assistant on a Mac and run it from your iPhone.",
    tagline: "Build your own AI assistant on a Mac and run it from your iPhone. A 9-chapter guide, all the code and a setup checklist.",
    card: "A 9-chapter guide and all the code to build your own AI assistant on a Mac. It sends a morning briefing, handles your email and takes commands from your iPhone, for about $8 a month to run.",
    row: "Build your own AI assistant on a Mac and run it from your iPhone: a 9-chapter guide, all the code and a setup checklist.",
    intro: [
      "Winston is the AI assistant I built to run my own admin. It sends a morning briefing, reads and replies to email, finds files on my Mac and takes commands from my iPhone, around the clock.",
      "I built it in about two weeks around a full-time job. This guide shows exactly how: every step, every error I hit and every fix. It is written for people who are not developers."
    ],
    sections: [
      {
        h: "What you get",
        list: [
          "A 9-chapter guide (PDF) that takes you from zero to a fully running assistant. It covers setup, memory, email, Mac control, voice commands, file search and morning briefings.",
          "All the code (ZIP): 6 ready-to-use Python files. Fill in your tokens and run one command.",
          "A Quick Setup Checklist, so you can confirm each step works before you move on.",
          "The Winston Command Reference: every command Winston understands, on one page."
        ]
      },
      {
        h: "What Winston can do",
        list: [
          "Sends a morning briefing at 7am with weather, calendar and news headlines",
          "Reads, summarises and replies to your Gmail",
          "Finds any file on your Mac or an external drive",
          "Takes screenshots and sends them to your iPhone",
          "Opens apps, searches Google and sends iMessages",
          "Remembers your preferences, habits and work context",
          "Runs 24/7 and restarts itself if it crashes"
        ]
      },
      {
        h: "Who it is for",
        list: [
          "Mac and iPhone users",
          "Non-developers: no coding experience needed",
          "Anyone who wants an assistant that actually does things",
          "People happy to spend a few evenings on setup"
        ],
        notH: "Not for",
        notList: [
          "Windows users",
          "Anyone who wants a plug-and-play product with zero setup"
        ]
      },
      {
        h: "Expect some errors",
        p: [
          "At some point something will not work. The guide covers the most common errors and exactly how to fix them, because I hit every one of them."
        ]
      }
    ],
    facts: [
      ["Format", "PDF guide and Python code (ZIP)"],
      ["Works on", "Mac and iPhone"],
      ["Setup time", "4 to 6 hours over 2 or 3 evenings"],
      ["Running cost", "About $8 a month (Claude API)"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/build-your-own-winston",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["deskmate", "math-kingdom", "sme-security-starter-kit"],
    gumroad: {
      permalink: "mtsyu",
      name: "Build Your Own Winston \u2014 Personal AI Assistant for Mac",
      hash: "7439d89cbd4c"
    }
  },

  {
    slug: "deskmate",
    name: "Deskmate",
    kind: "Telegram bot",
    audience: "SME",
    status: "live",
    featured: true,
    price: "A$149",
    short: "A Telegram bot that answers staff questions from your policy documents.",
    tagline: "A Telegram bot that answers staff questions from your own policy documents, and tells them which document it used.",
    card: "A Telegram bot that answers staff questions from your own policy documents. One-click deploy on Railway, a separate deployment for each business, and no vector database to set up.",
    row: "A Telegram bot that answers staff questions from your own policy documents. One-click deploy on Railway, a separate deployment for each business.",
    intro: [
      "Your staff have questions about leave, breaks, refunds and rosters. The answers are in your handbook, but nobody reads the handbook, so they ask you instead.",
      "Deskmate is a Telegram bot for one company. You upload your policy documents, and your team asks it questions in a direct message or in your group chat."
    ],
    sections: [
      {
        h: "How every answer looks",
        p: ["Every answer comes in the same four lines."],
        pairs: [
          ["Answer", "The answer itself. It starts with Yes or No when the question is a yes or no one."],
          ["Source", "The document and section the answer came from."],
          ["Conflict check", "Whether two of your documents disagree, for example an old and a new refunds policy."],
          ["Currency", "When that document took effect."]
        ],
        after: "If the answer is not in your documents, Deskmate says so and tells staff to ask a manager. It does not guess."
      },
      {
        h: "Set up without coding",
        steps: [
          "Create a Telegram bot with @BotFather.",
          "Get an Anthropic API key.",
          "Click the Deploy on Railway button and paste in five values, including your license key.",
          "Send your documents to the bot. It accepts .md, .txt, .docx and .pdf files up to 10 MB each."
        ],
        after: "It ships with demo documents, so you can try it before you upload your own. The setup guide is written for owners who have never used a terminal."
      },
      {
        h: "Where your data lives",
        p: [
          "Everything runs in your own Railway project, using your own Anthropic API key. Your documents stay in your project's storage and are not sent to me.",
          "To answer a question, the bot sends it together with your documents to Anthropic's API under your own key."
        ]
      },
      {
        h: "Built to keep running",
        list: [
          "It restarts itself if it loses its connection to Telegram for a few minutes.",
          "You can connect a free healthchecks.io check to get an alert if the bot stops.",
          "Only you can upload or remove documents. After each upload it tells you how big your library is and roughly what each question now costs.",
          "In a group, it only reads messages sent to it (/ask, or a reply to one of its answers). The rest of the group chat never reaches it."
        ]
      },
      {
        h: "Your license key",
        p: [
          "Each purchase comes with a license key. You will find it on the page you see right after you buy, and in your receipt email. You paste it in when you deploy."
        ],
        list: [
          "One key works for up to 3 setups. Restarting or redeploying the same bot does not use one up.",
          "The bot checks your key with Gumroad when it starts and about once a day.",
          "If a purchase is refunded or disputed, the bot stops answering.",
          "If Gumroad cannot be reached for a while, a bot that is already running keeps working.",
          "If you need more than 3 setups, email support and the count will be reset."
        ]
      },
      {
        h: "What it costs to run",
        p: ["You pay Railway and Anthropic directly."],
        list: [
          "Railway Hobby plan: US$5 a month. This is required.",
          "Anthropic: every question sends your documents along with it, so the cost grows with how much you upload. With the demo documents a question costs about US$0.02. With 50,000 words of documents it is about US$0.30.",
          "A question asked within five minutes of the previous one costs roughly a tenth of that."
        ]
      },
      {
        h: "What you get",
        list: [
          "A working policy bot in your own Railway account, deployed from a one-click Railway template",
          "A step-by-step setup guide (PDF)",
          "A document prep guide (PDF) and a ready-to-use policy template",
          "Your PDF guides are stamped with your email address. They can take a few minutes to be ready, and you will get a download link by email",
          "8 demo policy documents, so you can test it before you upload your own",
          "Email support, with a reply within 2 days",
          "A full refund within 14 days if you cannot get it deployed after contacting support"
        ],
        after: "The refund does not affect your rights under the Australian Consumer Law."
      }
    ],
    facts: [
      ["Delivery", "A bot in your own Railway account"],
      ["Documents", ".md, .txt, .docx and .pdf, up to 10 MB each"],
      ["Setup", "No coding. Paste in five values"],
      ["Running cost", "Railway US$5 a month plus Anthropic usage"],
      ["Support", "Email, reply within 2 days"],
      ["Refund", "14 days if you cannot get it deployed"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/cuddwp",
      note: "Checkout is handled by Gumroad. Your license key is shown right after you buy."
    },
    related: ["sme-security-starter-kit", "sme-security-incident-response-runbook", "winston-build-guide"],
    gumroad: {
      permalink: "cuddwp",
      name: "Deskmate: a Telegram bot that answers staff policy questions from your own documents",
      hash: "ce1ec1513a89"
    }
  },

  {
    slug: "sme-security-starter-kit",
    name: "SME Security Starter Kit",
    kind: "Bundle",
    audience: "SME",
    status: "live",
    featured: true,
    price: "A$29.99",
    was: "A$45",
    short: "Four security templates for small businesses, in one pack.",
    tagline: "Four ready-to-use security templates for small businesses, in one pack.",
    card: "Four practical security templates in one pack: a security awareness poster pack, an incident response runbook, an onboarding and offboarding IT checklist, and a vendor risk assessment matrix. Buy them together and pay less than buying them one by one.",
    row: "Four templates in one pack: a security awareness poster pack, an incident response runbook, an onboarding and offboarding IT checklist, and a vendor risk assessment matrix. Buy them together and pay less than buying them one by one.",
    intro: [
      "Four ready-to-use templates that cover the security basics for a small business: who has access to what, what to do when something goes wrong, how safe your suppliers are, and how to keep your team alert.",
      "Buy them together and pay less than buying them one by one."
    ],
    sections: [
      {
        h: "What's inside",
        items: [
          {
            slug: "sme-security-incident-response-runbook",
            name: "SME Security Incident Response Runbook",
            blurb: "An incident response checklist, a quick-reference guide for 5 common incident types, a severity guide, a key contacts list, an incident log and three companion record forms (Word)."
          },
          {
            slug: "sme-it-onboarding-offboarding-checklist",
            name: "SME IT Onboarding & Offboarding Checklist",
            blurb: "Onboarding and offboarding checklists, a role-based access matrix, a sign-off log and two companion record forms (Word)."
          },
          {
            slug: "sme-vendor-risk-assessment-matrix",
            name: "SME Vendor Risk Assessment Matrix",
            blurb: "A vendor register, a 30-question assessment matrix, a dashboard with a risk heat map and a scoring guide, plus Word forms for questionnaires, approvals and offboarding (Excel and Word)."
          },
          {
            slug: "sme-security-awareness-poster-pack",
            name: "SME Security Awareness Poster Pack",
            blurb: "12 print-ready posters for A4 and US Letter, editable PowerPoint files, 12 PNG images and a Word rollout guide with a 12-month plan (PDF, PowerPoint, PNG and Word)."
          }
        ],
        after: "Each template is also sold on its own."
      },
      {
        h: "Who it is for",
        p: ["Small business owners, office managers and IT leads who want to get the security basics in place without hiring a consultant."]
      },
      {
        h: "Format",
        p: ["Editable Word (.docx), Excel (.xlsx) and PowerPoint (.pptx) files, plus print-ready PDFs and PNG images. Works in Microsoft Office and LibreOffice. No macros, no add-ins and no account needed."]
      }
    ],
    facts: [
      ["Includes", "4 templates"],
      ["Bought separately", "A$45"],
      ["Format", "Word, Excel, PowerPoint, PDF and PNG"],
      ["Works in", "Microsoft Office and LibreOffice"],
      ["Setup", "No macros, no add-ins, no account"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/twhxd",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["deskmate", "winston-build-guide"],
    gumroad: {
      permalink: "twhxd",
      name: "SME Security Starter Kit",
      hash: "84afb7f9be6c"
    }
  },

  {
    slug: "sme-security-incident-response-runbook",
    name: "SME Security Incident Response Runbook",
    kind: "Template",
    audience: "SME",
    status: "live",
    price: "A$9",
    short: "A ready-to-use plan for handling a security incident.",
    tagline: "A ready-to-use process for detecting, containing and recovering from a security incident, plus the paperwork to prove you handled it properly.",
    row: "A ready-to-use plan for detecting, containing and recovering from a security incident, plus the forms to record it. Editable Word document.",
    intro: [
      "When something goes wrong, the last thing you want is to work out your response as you go. This template gives you the steps to follow and the records to keep."
    ],
    sections: [
      {
        h: "What's inside",
        list: [
          "An Incident Response Checklist covering detect and contain, eradicate and recover, and communicate and review",
          "An Incident Quick-Reference Guide with first-step actions for 5 common incident types: phishing, ransomware, a lost or stolen device, a compromised account and a suspected data leak",
          "A Severity Classification Guide to triage incidents fast",
          "A Key Contacts and Escalation List you can fill in before you need it",
          "An Incident Log to track every incident with dates and outcomes",
          "Three companion record forms for your files: an Incident Report Form, a Post-Incident Review Form and a Notification Email Template"
        ]
      },
      {
        h: "Who it is for",
        p: ["Small business owners and office managers who need a clear incident response plan without hiring a security consultant."]
      },
      {
        h: "Format",
        p: ["An editable Word document (.docx). It works in Microsoft Word, Google Docs and LibreOffice. No special software or account needed."]
      }
    ],
    facts: [
      ["Format", "Word document (.docx)"],
      ["Works in", "Word, Google Docs, LibreOffice"],
      ["Covers", "Phishing, ransomware, lost devices, compromised accounts, data leaks"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/kfnex",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["sme-security-starter-kit", "sme-it-onboarding-offboarding-checklist", "sme-vendor-risk-assessment-matrix"],
    gumroad: {
      permalink: "kfnex",
      name: "SME Security Incident Response Runbook",
      hash: "d6f54cf42fe8"
    }
  },

  {
    slug: "sme-it-onboarding-offboarding-checklist",
    name: "SME IT Onboarding & Offboarding Checklist",
    kind: "Template",
    audience: "SME",
    status: "live",
    price: "A$9",
    short: "Give new staff access securely and remove it cleanly when they leave.",
    tagline: "A complete process for bringing new staff on securely and taking their access away cleanly when they go.",
    row: "Give new staff access securely and take it away cleanly when they leave. Includes an access matrix, a sign-off log and HR forms. Editable Word document.",
    intro: [
      "Stop losing track of who still has access after an employee leaves. This template gives you a print-or-fill process for onboarding new staff securely and for removing their access when they go."
    ],
    sections: [
      {
        h: "What's inside",
        list: [
          "An onboarding checklist covering before day 1, day 1 and week 1",
          "An offboarding checklist covering before the last day, the last day and after the last day",
          "A role-based access matrix you can customise for your team",
          "A sign-off log to track every action with dates and initials",
          "Two companion record forms for your HR file: New Employee IT Setup and Employee Offboarding"
        ]
      },
      {
        h: "Who it is for",
        p: ["Small business owners and office managers who need a simple system without hiring an IT consultant."]
      },
      {
        h: "Format",
        p: ["An editable Word document (.docx). It works in Microsoft Word, Google Docs and LibreOffice. No special software or account needed."]
      }
    ],
    facts: [
      ["Format", "Word document (.docx)"],
      ["Works in", "Word, Google Docs, LibreOffice"],
      ["Best for", "Small businesses and office managers"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/mcbch",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["sme-security-starter-kit", "sme-security-incident-response-runbook", "sme-vendor-risk-assessment-matrix"],
    gumroad: {
      permalink: "mcbch",
      name: "SME IT Onboarding & Offboarding Checklist",
      hash: "8a74bd0e329f"
    }
  },

  {
    slug: "sme-vendor-risk-assessment-matrix",
    name: "SME Vendor Risk Assessment Matrix",
    kind: "Template",
    audience: "SME",
    status: "live",
    price: "A$15",
    short: "List your suppliers, score the risk and decide what to do about each one.",
    tagline: "A simple way to list every vendor, score the risk and decide what to do about each one.",
    row: "List up to 30 suppliers, score the risk automatically and see which to act on first. Excel workbook plus Word forms.",
    intro: [
      "Your business depends on suppliers you may never have checked: the accounting software, the payroll provider, the IT support company, the web host. If one of them has a breach or a long outage, it becomes your problem.",
      "This pack gives you a simple way to list every vendor, score the risk and decide what to do about each one, without hiring a security consultant."
    ],
    sections: [
      {
        h: "What's inside",
        list: [
          "A Vendor Register for up to 30 vendors, with dropdowns and an automatic risk tier (Low, Medium, High or Critical) for each one",
          "An Assessment Matrix with 30 plain-English security questions per vendor, scored automatically (Yes, Partial, No or N/A)",
          "A Dashboard with a risk heat map, a top 10 list of vendors to act on first, and alerts for overdue reviews and contracts that are ending",
          "A Scoring Guide where you can change the weights, tiers, scoring bands and review cycles to suit your business",
          "A worked example file with 10 fictional vendors, so you can see how everything fits together",
          "A Vendor Security Questionnaire you can send to vendors (Word)",
          "A Vendor Assessment and Approval Form, a Contract and Data Protection Checklist, a Vendor Offboarding Checklist and a plain-English glossary (Word)"
        ]
      },
      {
        h: "Who it is for",
        p: ["Small business owners, office managers and IT leads who need a clear, repeatable way to check their suppliers."]
      },
      {
        h: "Format",
        p: ["An editable Excel workbook (.xlsx) plus an editable Word document (.docx). It works in Microsoft Excel, Microsoft Word and LibreOffice. Standard formulas only: no macros, no add-ins and no account needed."]
      }
    ],
    facts: [
      ["Format", "Excel workbook (.xlsx) and Word document (.docx)"],
      ["Capacity", "Up to 30 vendors"],
      ["Works in", "Excel, Word, LibreOffice"],
      ["Setup", "No macros, no add-ins, no account"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/flmour",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["sme-security-starter-kit", "sme-security-incident-response-runbook", "sme-it-onboarding-offboarding-checklist"],
    gumroad: {
      permalink: "flmour",
      name: "SME Vendor Risk Assessment Matrix",
      hash: "2efc43a1b0a6"
    }
  },

  {
    slug: "sme-security-awareness-poster-pack",
    name: "SME Security Awareness Poster Pack",
    kind: "Poster pack",
    audience: "SME",
    status: "live",
    price: "A$12",
    short: "12 print-ready security posters, one for each month of the year.",
    tagline: "12 print-ready security awareness posters, one for each month of the year, written in plain English for teams with no security department.",
    row: "12 print-ready security posters, one for each month of the year, in plain English. PDF, PowerPoint and PNG files plus a Word rollout guide.",
    intro: [
      "Most security problems start with an ordinary moment: a rushed click, a reused password, a laptop left unlocked. A poster in the right place is a cheap, steady reminder.",
      "This pack gives you 12 print-ready posters, one for each month of the year, written in plain English for teams that have no security department."
    ],
    sections: [
      {
        h: "What's inside",
        list: [
          "12 posters on phishing, passwords, multi-factor authentication, locking your screen, software updates, payment fraud, AI tools, handling data, Wi-Fi and working away, USB devices, office security and reporting a problem",
          "Print-ready PDFs for A4 and US Letter paper, one poster per page",
          "Editable PowerPoint files for A4 and US Letter, so you can add your own contact details and logo, or change any wording",
          "12 PNG images for staff chat, email or your intranet",
          "A Rollout Guide (Word) with print tips, a 12-month plan, where to put each poster, a two-minute question for your team each month, a launch checklist and an activity log you can show insurers and auditors"
        ]
      },
      {
        h: "Who it is for",
        p: ["Small business owners, office managers and IT leads who want a simple way to keep security on everyone's mind, all year."]
      },
      {
        h: "Format",
        p: ["Print-ready PDFs (A4 and US Letter), editable PowerPoint files (.pptx), PNG images and a Word guide (.docx). The editable files work in Microsoft PowerPoint, Keynote, Google Slides and LibreOffice."]
      }
    ],
    facts: [
      ["Posters", "12, one for each month"],
      ["Paper sizes", "A4 and US Letter"],
      ["Formats", "PDF, PowerPoint (.pptx), PNG and a Word guide (.docx)"],
      ["Works in", "PowerPoint, Keynote, Google Slides, LibreOffice"],
      ["Best for", "Small businesses and office managers"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/uoyiqtv",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["sme-security-starter-kit", "sme-security-incident-response-runbook", "sme-it-onboarding-offboarding-checklist"],
    gumroad: {
      permalink: "uoyiqtv",
      name: "SME Security Awareness Poster Pack",
      hash: "659a30ecf29f"
    }
  },

  {
    slug: "math-kingdom",
    name: "Math Kingdom",
    kind: "Browser game",
    audience: "Personal",
    status: "free",
    price: "Free",
    short: "A math tower-defense game that runs in the browser.",
    tagline: "A math tower-defense game that runs in your browser. Open the page and play.",
    row: "A math tower-defense game that runs in the browser. Open the page and play.",
    intro: [
      "Math Kingdom runs in the browser, so there is nothing to install and no account to make. My own son playtested it."
    ],
    sections: [
      {
        h: "How it plays",
        list: [
          "Choose a world, then a level.",
          "Answer each math question on the on-screen number pad.",
          "You have three lives, and a streak counter and a score track how you are doing.",
          "Play in English or in Vietnamese."
        ]
      },
      {
        h: "Built with",
        p: ["One HTML file with plain JavaScript and Canvas. No frameworks and no dependencies. It is hosted on GitHub Pages."]
      }
    ],
    facts: [
      ["Price", "Free"],
      ["Platform", "Any modern browser"],
      ["Languages", "English and Vietnamese"],
      ["Install", "None"]
    ],
    cta: {
      label: "Play Math Kingdom",
      rowLabel: "Play",
      url: "https://raymond2801.github.io/math-kingdom/",
      note: "Opens the game in a new tab."
    },
    related: ["winston-build-guide", "deskmate"]
  },

  {
    slug: "kokos-quest",
    name: "Koko's Quest",
    kind: "Browser game",
    audience: "Personal",
    status: "free",
    price: "Free",
    short: "A literacy platformer built around the NAPLAN curriculum.",
    tagline: "A literacy platformer that runs in your browser, built around the NAPLAN curriculum. Open the page and play.",
    row: "A literacy platformer built around the NAPLAN curriculum. Open the page and play.",
    intro: [
      "Koko's Quest runs in the browser, so there is nothing to install and no account to make. Guide Koko the monkey through the jungle, answering spelling and grammar questions to open doors and collect bananas along the way."
    ],
    sections: [
      {
        h: "How it plays",
        list: [
          "Choose a difficulty tier for ages 6 to 8, 8 to 10, or 10 to 12.",
          "Answer spelling and grammar questions to open doors and keep moving.",
          "Collect bananas and avoid spikes on the way through each world.",
          "Questions are aligned with Australia's NAPLAN literacy tests."
        ]
      },
      {
        h: "Built with",
        p: ["One HTML file with plain JavaScript and Canvas. No frameworks and no dependencies. It is hosted on GitHub Pages."]
      }
    ],
    facts: [
      ["Price", "Free"],
      ["Platform", "Any modern browser"],
      ["Language", "English"],
      ["Install", "None"]
    ],
    cta: {
      label: "Play Koko's Quest",
      rowLabel: "Play",
      url: "https://raymond2801.github.io/kokos-quest/",
      note: "Opens the game in a new tab."
    },
    related: ["math-kingdom", "winston-build-guide"]
  },

  {
    slug: "sme-ai-usage-policy-tool-vetting-kit",
    name: "SME AI Usage Policy and Tool Vetting Kit",
    kind: "Template",
    audience: "SME",
    status: "live",
    price: "A$19",
    short: "A plain-English AI usage policy, a tool vetting checklist and the forms to run it.",
    tagline: "A plain-English AI usage policy, a way to check any AI tool before you approve it, and the forms and wording to run it all.",
    row: "A plain-English AI usage policy, a tool vetting checklist and the forms to run it, set up in about half a day. Editable Word and Excel files.",
    intro: [
      "Your team is probably already using AI tools to write emails, summarise meetings and draft documents. Without a clear rule, it is easy to paste customer details, contracts or passwords into a tool that was never meant to hold them.",
      "This kit gives you a plain-English AI usage policy, a way to check any AI tool before you approve it, and the forms and wording to run it all. You can set it up in about half a day, without hiring a consultant.",
      "A policy on its own is not enough. People also need to know which tools are approved, how a new tool gets approved, and what to do when something goes wrong. This kit covers all three."
    ],
    sections: [
      {
        h: "What's inside",
        list: [
          "AI Usage Policy (Word): 27 numbered rules in plain English, a colour guide (Green, Amber, Red and Never) for what may go into an AI tool, everyday examples, and a one-page quick guide for staff",
          "AI Tool Vetting Checklist (Word): 6 gate questions and 35 detailed checks to decide whether a tool can be used, with red flags to watch for, a decision record and a printable register",
          "AI Forms and Wording (Word): Staff Acknowledgement, AI Tool Request and AI Incident Report forms, a 20-minute team briefing with 8 scenarios, and wording to copy for staff, customers and AI providers",
          "Approved AI Tool Register (Excel): the working list of approved tools, with dropdowns, re-check dates worked out for you, highlighting for tools that are due or overdue, and a log of approved exceptions",
          "Start Here guide (Word): set everything up in five steps, with the settings you can change listed in one place",
          "Worked Example (Word), a bonus: one made-up AI tool taken from the request to the Register, with every form, check and record filled in, so you can see what finished work looks like"
        ]
      },
      {
        h: "How it works",
        steps: [
          "Fill in your company, Security Lead and Owner names.",
          "Find out which AI tools your people already use.",
          "Check your most-used tools with the vetting checklist, using the worked example as a guide, and add the ones that pass to the Register.",
          "Issue the policy and run the 20-minute team briefing.",
          "Put the quick guide where people will see it, and set two review reminders."
        ]
      },
      {
        h: "Who it is for",
        p: ["Small business owners, office managers and IT leads who want a clear, repeatable way to use AI safely at work. Not tied to any AI product, so it stays useful as the tools change: the kit asks questions instead of rating products, so you decide what is safe for your business."]
      },
      {
        h: "Format",
        p: ["Four editable Word documents (.docx) plus an editable Excel workbook (.xlsx), and a bonus worked example (.docx). Works in Microsoft Word, Microsoft Excel and LibreOffice. Standard formulas only: no macros, no add-ins and no account needed."]
      },
      {
        h: "Good to know",
        p: ["General guidance, not legal advice. Privacy, employment and recording laws differ by country, state and industry, so check what applies where you operate. For use in your own business: please do not resell or share the files."]
      }
    ],
    facts: [
      ["Format", "4 Word documents (.docx) and 1 Excel workbook (.xlsx)"],
      ["Works in", "Word, Excel, LibreOffice"],
      ["Setup time", "About half a day"],
      ["Setup", "No macros, no add-ins, no account"]
    ],
    cta: {
      label: "Get it on Gumroad",
      url: "https://raymonddoan.gumroad.com/l/nihkc",
      note: "Checkout and download are handled by Gumroad."
    },
    related: ["sme-security-starter-kit", "sme-vendor-risk-assessment-matrix", "sme-security-incident-response-runbook"],
    gumroad: {
      permalink: "nihkc",
      name: "SME AI Usage Policy and Tool Vetting Kit",
      hash: "76e12398e156"
    }
  }
];
