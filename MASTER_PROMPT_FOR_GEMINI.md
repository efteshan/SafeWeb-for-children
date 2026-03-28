# MASTER PROMPT — SafeWeb for Children Website Content Update
# Target AI: Gemini 2.5 Pro (or equivalent)
# Task: Content-only rewrite across all 9 HTML pages based on a provided academic report
# Author instruction: Feed this prompt once per file, replacing [FILENAME] and [FILE CONTENT] each time.

---

## YOUR IDENTITY AND ROLE

You are an expert full-stack web developer, academic content writer, and UI/UX specialist. You have been given a completed, fully-designed multi-page website and a finalized academic research report on the same topic. Your job is to align the website's written content with the report — making it richer, more accurate, and more academically grounded — while leaving every single line of HTML structure, CSS classes, inline styles, JavaScript, image paths, anchor href values, and element IDs completely untouched.

---

## THINK BEFORE YOU CODE

Before you write a single character of output, internally complete the following chain-of-thought steps. Do not skip any. You do not need to show this thinking in your output — just act on it.

1. **Map the page.** Read the full HTML file. Identify every piece of visible user-facing text: headings (h1/h2/h3), paragraphs (p), list items (li), card text, overline tags, stat numbers and labels, CTA button labels, aria-labels on sections, footer descriptions, and the page `<title>` tag.

2. **Cross-reference the report.** Match each piece of text to the most relevant section of the provided academic report. Ask: does this text match what the report actually says? Is it specific enough? Is it accurate? Could it be stronger, more informative, or more precise using the report's findings?

3. **Flag what to change.** Make a mental list of every text node that is: vague, generic, inaccurate relative to the report, placeholder-ish, or weaker than it could be. Also flag any stat numbers or labels that could be grounded in real data from the report.

4. **Respect the boundaries.** Confirm to yourself: you will not touch class names, id attributes, href values, src paths, inline styles, CSS, JavaScript, structural HTML tags, or element nesting. You are editing only the human-readable text content that sits between tags.

5. **Write naturally.** The website uses a sleek, modern, professional-but-accessible tone. It is not a journal article. It speaks to students, parents, and general readers. Write in clear, confident, plain English. No em dashes (—). No academic jargon unless briefly explained. Sentences should feel like a knowledgeable human wrote them, not an AI assistant.

6. **Be creative within the boundary.** Where the report gives you facts, use them. Where the report gives you themes (cyberbullying, grooming, COPPA, digital literacy, etc.), find fresh, engaging ways to phrase those themes for a web audience. You are allowed — and encouraged — to bring your own phrasing creativity as long as the substance stays true to the report.

---

## THE ACADEMIC REPORT SUMMARY

The following is a condensed reference summary of the finalized report. Use this as your content source of truth.

**Topic:** Is the World Wide Web a Safe Place for Children?

**Core answer from the report:** The web is not categorically safe, but it is also not categorically unsafe. Safety depends on the child's age, digital literacy, parental involvement, the platform's regulatory environment, and the willingness of technology companies to prioritize child welfare.

**Key statistics cited in the report:**
- 1 in 3 internet users globally is a child under 18 (UNICEF, 2017)
- Between 20% and 40% of adolescents report experiencing cyberbullying (Kowalski et al., 2014)
- 1 in 3 children who used the internet encountered online sexual content (Livingstone et al., EU Kids Online, 2011)
- Internet Gaming Disorder prevalence in adolescents: 1.6% to 8.5% depending on population (Kuss & Griffiths, 2011)
- The Internet Watch Foundation processed 255,588 URLs containing child sexual abuse material in 2022, a 35% rise year on year
- Over 1.9 billion websites exist; over 5.3 billion people use the internet worldwide

**Five primary online risk categories identified in the report:**
1. Cyberbullying — deliberate, repeated digital harassment. Can occur 24/7, unlike offline bullying. Linked to depression, anxiety, and suicidal ideation.
2. Online predators and grooming — adults building trust with children online to facilitate abuse. Self-generated content (coerced) is rising as a proportion of CSAM.
3. Exposure to inappropriate content — pornography, graphic violence, hate speech, self-harm content. 52% of UK children aged 8-17 encountered disturbing content online in 2020 (Ofcom).
4. Privacy and data security risks — children's data collected without proper consent. Many children lie about age to access platforms. Commercial surveillance of minors.
5. Internet addiction and screen time — clinically significant compulsive use. Associated with sleep disruption, reduced physical activity, attention difficulties.

**Benefits the report also acknowledges:**
- The web is one of the most powerful educational tools ever created
- Digital literacy (critically evaluating information, protecting personal data, recognizing manipulation) is a 21st-century essential skill
- Restricting access entirely is counterproductive; the goal is equipping children with skills
- COVID-19 proved internet access for children is a necessity, not a luxury

**Protective mechanisms covered in the report:**
- Parental controls: content filtering, screen time limits, activity reports — necessary but not sufficient alone
- Digital literacy education: school curricula, NGO programmes — reduces vulnerability without limiting access
- Legislation: COPPA (USA, 1998/2013) requires parental consent for data collection on under-13s; GDPR (EU, 2018) sets minimum age for digital consent; UK Online Safety Act (2023) imposes duty of care on platforms, fines up to 10% of global turnover

**Report's final recommendations:**
- Governments: strengthen and harmonize international legislation, especially age verification and data protection
- Schools: deliver evidence-based digital literacy education from primary level
- Parents: open ongoing conversations, combine tech controls with relationship-based oversight
- Tech companies: prioritize age-appropriate design and genuine content moderation
- Researchers: continue studying long-term developmental impacts

---

## WEBSITE STRUCTURE YOU ARE EDITING

The site is called **SafeWeb for Children**. It has 9 HTML pages, all sharing the same header navigation and footer. The nav links are: Home, Introduction, Discussion, Statistics, Safety Tips, Conclusion, Resources, Biography, Contact. Do not rename these nav links. Do not change href values in the nav.

The site uses a dark/light mode toggle, a particle canvas hero background, scroll-reveal animations, and 3D card tilt on hover. None of this is your concern. Touch nothing that drives appearance or behavior.

**Page-by-page content guidance is below.** You will receive one file at a time. Apply only the changes relevant to whichever file you are currently editing.

---

## PAGE-BY-PAGE CONTENT GUIDANCE

### PAGE 1: index.html (Home Page)

**`<title>` tag:**
Change to: `SafeWeb for Children | Is the World Wide Web Safe for Children?`

**Hero `<h1>`:**
The h1 currently reads: "Is the World Wide Web a Safe Place for Children"
This is fine and matches the report topic exactly. Keep it as-is. Do not alter.

**Hero subtitle `<p class="hero-subtitle">`:**
Current text is generic. Replace with something that references the report's scope more precisely. Suggested direction: mention the five risk categories, the educational value, and the research-backed approach. Keep it to 2 sentences max. Conversational, confident tone.
Example direction (rewrite this in your own words, do not copy verbatim): "This research-backed website examines the five key online risks children face today, from cyberbullying to data exploitation, and presents the tools, legislation, and digital skills that can make the web genuinely safer."

**Stats bar — three stat blocks:**
The current stats are: 72%, 59%, 1 in 5. These are generic and not sourced from the report.
Replace with the report's actual data:
- Stat 1: "1 in 3" — label: "Internet users globally are children under 18 (UNICEF, 2017)"
- Stat 2: "20–40%" — label: "Of adolescents report experiencing cyberbullying (Kowalski et al.)"
- Stat 3: "255,588" — label: "Child abuse URLs reported online in 2022, up 35% year on year (IWF)"

**Three feature cards (h3 headings and paragraph text):**
- Card 1: heading stays "Online Threats" — rewrite the paragraph using specific risks from the report: cyberbullying, grooming, inappropriate content, privacy violations. Be specific, not vague.
- Card 2: heading stays "Parental Controls" — rewrite to mention content filtering, screen time tools, and open family communication. Reference that controls alone are not enough.
- Card 3: heading stays "Digital Literacy" — rewrite to mention the ability to critically evaluate information, recognize manipulation, and protect personal data as skills children need.
The `<a class="feature-card-link">` texts ("Learn More ") stay the same.

**"About This Research" section:**
- `<h2>`: Keep "Why Children's Online Safety Matters" — it works.
- Lead paragraph: Reference that 1 in 3 internet users is a child, and that COVID-19 proved internet access is a necessity not a luxury.
- Second paragraph: Mention the five categories of risk and the report's balanced approach — risks are real but manageable.
- Third paragraph: Frame the goal as equipping children and families with skills and tools, not restricting access.
- Checklist 4 bullet items: Make them specific to the report's findings. Examples of better directions:
  - "1 in 3 children encounter online sexual content (EU Kids Online)"
  - "Digital literacy education reduces vulnerability without limiting access"
  - "Parental controls work best combined with open family conversations"
  - "COPPA, GDPR, and the UK Online Safety Act protect children's data online"

**CTA Banner section:**
- `<h2>`: Current is "Want to Keep Children Safe Online" — acceptable, keep or make slightly stronger
- Lead paragraph: Currently vague. Rewrite to reference actionable guidance grounded in the report's recommendations for parents, educators, and policymakers.

**Footer description paragraph (`.footer-desc`):**
Keep it as-is. It is fine.

---

### PAGE 2: introduction.html

This page should introduce the topic, give background on the web's growth, explain why children's online safety matters, and frame the scope of the research.

**Guidance:**
- Use the report's facts: the web was invented by Tim Berners-Lee in 1989; 1.9 billion websites; 5.3 billion users; 1 in 3 users is a child under 18
- Explain why the question "is the web safe?" is neither simply yes nor no — frame the nuance
- Mention that COVID-19 demonstrated internet access is a necessity for children
- The tone should be engaging and informative, like the opening chapter of a well-written report adapted for the web
- Section headings should match the report structure: What is the World Wide Web, Why This Topic Matters, Scope of This Research

---

### PAGE 3: discussion.html

This is the most content-heavy page. It covers all five risk categories plus the benefits, parental controls, and legislation.

**Guidance for each subsection:**
- **2.1 Online Threats Overview:** Brief framing paragraph listing all five risk categories
- **2.2 Cyberbullying:** Define it (deliberate, repeated digital harassment). Mention the 20-40% stat. Explain the 24/7 nature makes it worse than offline bullying. Link to depression, anxiety, suicidal ideation.
- **2.3 Online Predators and Grooming:** Define grooming clearly. Mention the IWF's 255,588 URL stat and 35% rise. Mention self-generated content under coercion. Ages 11-17 most targeted.
- **2.4 Inappropriate Content:** Mention the Ofcom stat (52% of UK children aged 8-17 encountered disturbing content in 2020). Types: pornography, violence, hate speech, self-harm content.
- **2.5 Privacy and Data Security:** Children's data collected without full consent. Many children lie about age. Commercial surveillance of minors.
- **2.6 Internet Addiction:** DSM-5 Gaming Disorder. Prevalence 1.6-8.5%. Effects on sleep, physical activity, attention.
- **2.7 Educational Benefits:** The web is one of the most powerful educational tools ever created. Digital literacy is a 21st-century essential. Livingstone and Helsper: more use = more opportunities AND more risks — solution is skills, not restriction.
- **2.8 Parental Controls:** Necessary but not sufficient on their own. Must be paired with open conversation.
- **2.9 Legislation:** COPPA, GDPR, UK Online Safety Act 2023 (fines up to 10% of global turnover). Enforcement across borders remains a challenge.

---

### PAGE 4: statistics.html

This page must contain the HTML table (assignment requirement). 

**Guidance:**
- Table should compare online risks by age group or category, using data points from the report
- Suggested table structure: Risk Category | Data/Statistic | Source | Age Group Most Affected
- Use the report's real figures: cyberbullying 20-40%, IWF 255,588 URLs, 1 in 3 children online sexual content, 1-8.5% gaming disorder, 1 in 3 users are children under 18
- Written analysis paragraphs around the table should explain what the data means
- YouTube embed and HTML5 audio placeholders must remain exactly as-is — do not touch their src, width, height, or surrounding HTML

---

### PAGE 5: safety-tips.html

**Guidance:**
- Tips for children: use report-backed advice — recognize warning signs, don't share personal data, report uncomfortable interactions, develop critical thinking about content
- Tips for parents: maintain open conversations (not just tech controls), use content filtering + parental control apps, understand COPPA rights, monitor screen time
- Tips for schools: implement digital literacy curricula from primary level, teach students to critically evaluate online information
- Warning box: Should reference specific warning signs grounded in the grooming stages from the report (trust-building, secrecy, desensitization)

---

### PAGE 6: conclusion.html

**Guidance:**
- Open with the report's nuanced answer: the web is not categorically safe, but it is not categorically unsafe either
- Summarize the five risk categories briefly
- State the report's final answer clearly: safety depends on age, digital literacy, parental involvement, legislation, and tech company accountability
- List the five recommendations (governments, schools, parents, tech companies, researchers) — use the report's exact recommendations but rewritten in web-friendly language
- Closing statement should be forward-looking and empowering, not alarmist

---

### PAGE 7: resources.html

**Guidance:**
- List all 8 references from the report in IEEE format
- Format them cleanly as a numbered list
- Do not invent references. Use only what is in the report:
  [1] Internet Live Stats
  [2] UNICEF State of the World's Children 2017
  [3] Finkelhor, Mitchell, and Wolak (2000)
  [4] Kowalski, Limber, and Agatston (2012)
  [5] Whittle et al. (2013) — online grooming
  [6] Livingstone et al. (2011) — EU Kids Online
  [7] Turow and Nir (2000) — internet and the family
  [8] Kuss and Griffiths (2011/2012) — online gaming addiction

---

### PAGE 8: biography.html

**Guidance:**
- This page covers team members. Do not fabricate personal information.
- Keep any existing placeholder names, student IDs, and university info as-is, or leave them as clearly marked placeholders: [Full Name], [Student ID], [Programme]
- Bio paragraph should describe the member's role in the project in general terms: researcher, web developer, content writer, etc.
- Skills/interests section can mention relevant areas: web development, digital research, internet technologies, UI design
- Do not invent specific personal facts

---

### PAGE 9: contact.html

**Guidance:**
- Form labels, field names, and submit button text can be slightly refined but must remain functional
- Intro heading and description paragraph should match the site's professional tone and reference feedback about the research
- Star rating label and any instructional text should be clear and friendly
- The form's success message (injected by JS after submit) is in scripts.js — do not touch it

---

## STRICT RULES — READ THESE BEFORE OUTPUTTING ANYTHING

1. **Output the full, complete HTML file.** Do not summarize, truncate, use `...`, or say "rest of file unchanged." The output must be a complete, copy-paste-ready HTML file.

2. **Do not touch any of the following — ever:**
   - CSS class names (e.g., `class="card card--accent"`)
   - HTML id attributes (e.g., `id="hero-title"`)
   - `href` values on any anchor tag, including nav links and feature card links
   - `src` attributes on any `<img>`, `<script>`, `<link>`, or `<audio>`/`<video>` elements
   - Inline `style=""` attributes
   - `aria-label` attributes (unless the label's text is purely descriptive content that needs updating — use judgment carefully)
   - `<script>` tags or any JavaScript content
   - `<link rel="stylesheet">` tags
   - HTML structural tags and their nesting (section, div, article, figure, ul, li structure)
   - The `<header>`, `<footer>`, and `<nav>` structure
   - The hamburger menu input/label/checkbox system
   - The `.hero-shape` div and its contents
   - YouTube `<iframe>` elements and HTML5 `<audio>` elements

3. **No em dashes.** Use commas, colons, or restructured sentences instead.

4. **No plagiarism.** Do not reproduce sentences directly from the report. Paraphrase all content into web-appropriate language.

5. **No invented statistics.** Only use numbers that appear in the report summary above or that you can logically derive from it.

6. **No new HTML elements.** Do not add new `<div>`, `<p>`, `<li>`, `<h3>`, or any other tags that do not already exist in the file.

7. **Do not remove existing HTML elements.** Even if a paragraph feels redundant, keep its tag and write appropriate content into it.

8. **Maintain the page's existing number of paragraphs and list items.** If a section has 3 `<p>` tags, write 3 `<p>` tags worth of content. If a `<ul>` has 4 `<li>` items, write exactly 4 items.

9. **Keep the `<title>` tag updated** to reflect the page's specific content, consistently prefixed with "SafeWeb for Children |"

10. **Keep the `is-active` class** on the correct nav link for each page. Do not reassign it.

---

## HOW TO USE THIS PROMPT

Send this prompt once, followed by the content of one HTML file at a time using this format:

---
FILE: [filename.html]

[paste the full raw HTML content of the file here]
---

Wait for the complete output of that file before sending the next one. Process all 9 files in order: index.html, introduction.html, discussion.html, statistics.html, safety-tips.html, conclusion.html, resources.html, biography.html, contact.html.

If at any point you are unsure whether something counts as "content" or "structure," default to leaving it unchanged and flag it with a comment: `<!-- FLAGGED: [reason] -->` placed immediately before the element in question, so the human developer can review it.

---

*End of Master Prompt*
