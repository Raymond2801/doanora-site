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
