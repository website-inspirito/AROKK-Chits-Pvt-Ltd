# AROKK Financial Services – Website preview

Static HTML preview. Designed by Inspirito Ventures Pvt Ltd.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services – overview of all three, with a compare table |
| `gold-loan.html` | Gold Loan – full product page |
| `microfinance.html` | Microfinance – full product page |
| `chit-fund.html` | Chit Fund – full product page |
| `about.html` | About us – story, promises, team |
| `branches.html` | Branches – map, branch details, timings |
| `contact.html` | Contact – enquiry form, head office, quick FAQ |
| `grievance.html` | Grievance redressal – escalation levels, complaint form |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms and conditions |
| `404.html` | Page not found (Cloudflare Pages serves this automatically) |

Assets:
- `assets/img/` – logo files (the emblem is also the favicon)
- `assets/js/jquery-3.7.1.min.js` – local copy, no CDN needed

## Deploy (GitHub Desktop → Cloudflare Pages) — live at https://www.arokk.in
1. **GitHub Desktop:** File → New repository → copy *all* files from this zip into the repo folder (including `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.ico`) → Commit → Publish repository.
2. **Cloudflare:** Workers & Pages → Create → Pages → Connect to Git → pick the repo.
   Build settings: Framework preset **None**, Build command **empty**, Build output directory **/**. Deploy.
3. **Custom domain:** in the Pages project → Custom domains → add **www.arokk.in**. If arokk.in's DNS is on Cloudflare this is automatic; otherwise add the CNAME it shows at your registrar.
4. **Bare domain → www:** add **arokk.in** too, then in the Cloudflare dashboard create a Redirect Rule (Rules → Redirect Rules) sending `arokk.in/*` to `https://www.arokk.in/${1}` with status 301. (`_redirects` cannot match hostnames, so this has to be a dashboard rule.)
5. **SSL/TLS:** set encryption mode to *Full* and turn on *Always Use HTTPS*.
6. **Google Search Console:** add the property `https://www.arokk.in` (or a Domain property for arokk.in via DNS TXT record), then Sitemaps → submit `https://www.arokk.in/sitemap.xml`. Also create a **Google Business Profile** for the Kumbakonam head office and each branch — that matters more than anything on the site for "near me" searches.
7. Every new commit pushed from GitHub Desktop redeploys automatically.

**Clean URLs:** links use `/about`, `/gold-loan` etc. Cloudflare Pages serves `about.html` at `/about` and redirects `/about.html` there, so the live site has no `.html` in its addresses. When the files are opened directly from a computer (double-click), `assets/js/local-links.js` switches the links back to `about.html` etc., so the local preview still navigates. It does nothing on the live site.

## Still to come from the client
- Chit schemes, gold rate per gram, interest rates, all charges and a worked APR example
- Gold loan charges: the empty charges table on the Services page was replaced by a "No hidden charges" panel (explained before signing, printed on the receipt, Call/WhatsApp buttons). Once the client gives the fee amounts, a filled-in table can go back in.
- Microfinance amounts, tenures, rate and age limit
- Registration details (CIN, chit Registrar number, lending registration) are **not shown anywhere on the website**, at the client's request. The "Law and registration" section was removed from the About page.
- Confirmation of the exact legal name: the site now says **AROKK Financial Services** throughout. If the registered entity carries a suffix such as "Pvt Ltd", it must be added on the legal pages and in the footer.
- Branch addresses and direct branch numbers (timings are set to 09:00 AM – 06:00 PM, Mon–Sat)
- Grievance officer name and complaint timelines (a dedicated grievance email, if they want one separate from the main address)
- Directors' names, designations and photos
- Real customer testimonials
- Social media page links

Everything awaiting client data is marked on the pages with an **orange striped highlight**.
The legal pages (privacy, terms, grievance) are **drafts for the client's legal review**.

## Branches
Kumbakonam (head office) · Thiruvidaimarudur · Nachiyar Koil · Eravanchery · Kuthalam

- **Eravanchery** replaces the earlier spelling "Iruvanjeri" — same branch (PIN 609501, Peralam area). The Tamil name இருவாஞ்சேரி is taken from the client's poster; confirm the Tamil spelling.
- **Kuthalam** (குத்தாலம்) replaces Nannilam. It is a different town, so its map pin was moved to the north-east, beyond Thiruvidaimarudur on the Mayiladuthurai road.

## Menu
Home · About us · Gold Loan · Microfinance · Chit Fund · Branches · Contact

The three product links open their own pages (`gold-loan.html`, `microfinance.html`, `chit-fund.html`). The footer, home-page service cards and 404 page link there too. `services.html` stays as an overview: it is reached from the breadcrumb on each product page and the footer's "All services" link, and each of its sections has a button to the full page.

## Product pages (gold loan, microfinance, chit fund)
Modelled on the references shared: Manappuram's gold loan landing page, Valar Aditi (microfinance, Madurai) and Mahesan Chit Fund (Pudukkottai). Each page has a hero with a **call-back form** (name, mobile, branch, one product question, consent tick-box → opens WhatsApp with the details), a summary strip, the product sections, its own FAQ, then the enquiry form.

- **Gold Loan:** six highlights, a two-mode calculator ("Gold in hand" or "Amount required", 3/6/9/12 months), sample schemes, 4-step process, documents, jewellery accepted, how jewellery is protected, a "move your gold loan to AROKK" banner, the "No hidden charges" panel and 8 FAQs.
- **Microfinance:** mission/method/area, an animated "five women, one promise" joint-liability-group diagram, loan products, group-lending steps, loan cycles that grow with on-time repayment, eligibility and instalment calculator, documents, group training topics, six fair-practice promises and 8 FAQs.
- **Chit Fund:** what a chit is, an animated "how a chit works" diagram, a chit calculator (one month's auction in rupees: what the winner gets, commission, dividend and what everyone pays), sample schemes, joining-to-payout timeline, "take it early or wait", benefits, documents and surety, legal safeguards, glossary and 8 FAQs.

**For the client to confirm (marked with the orange stripe where shown on the page):**
- Gold: the gold rate per gram and interest used in the calculator (sample: ₹7,000/g for 22K, 1% a month), the schemes, whether the stored jewellery is insured, and whether AROKK takes over gold loans from other lenders.
- Microfinance: loan amounts and tenures, age limit, the instalment rate (sample 22% reducing). The six fair-practice promises (loan card in Tamil, no prepayment penalty, income check, respectful collection, grievance timelines) follow RBI's microfinance norms; confirm they match AROKK's actual practice.
- Chit: the real list of chit groups (values, months, subscriptions), the commission AROKK charges (the calculator shows 5% as a sample), the surety options accepted, and the auction day for each group.
- **Legal correction made site-wide:** the foreman's commission cap is now shown as **7%** of the chit value (raised from 5% by the Chit Funds (Amendment) Act, 2019). It was 5% on the Services page and in a home-page FAQ.

## Forms → WhatsApp, with email as an alternative
Every form (enquiry forms on all pages, call-back forms on the product pages, grievance form) shows **"We redirect you to WhatsApp for a quick response."** and below it **"Prefer to send via email? Click here."**
- **Submit button:** validates, then opens WhatsApp chat with 89257 27728 with all details typed in. The visitor just presses send.
- **Click here (email):** runs the same checks, then opens the visitor's email app with a new message to **arokkfinance@gmail.com** — subject (e.g. "Call-back request (Gold loan page) - AROKK website") and all details already filled in. They just press Send.
- The thank-you panel matches the channel used, and after WhatsApp it offers "WhatsApp didn't open? Send by email instead".
- Logic lives in `assets/js/form-relay.js` (change the WhatsApp number or email there). No server, no third-party form service, nothing stored on the website.

## SEO set-up
- Unique title (≤ 60 characters) and description (≤ 160) on every page, canonical URL on `https://www.arokk.in/...`, `robots` meta.
- Open Graph and Twitter tags on every page, with a 1200×630 share image (`assets/img/og-arokk.jpg`, made from the branch-opening photo and logo) — this is the preview shown when a link is shared on WhatsApp, Facebook or LinkedIn.
- Structured data (JSON-LD): FinancialService (name, address, phone, email, hours, towns served, the three services), WebSite, WebPage, BreadcrumbList; Service + FAQPage on the three product pages; FAQPage on the home page. Check with Google's Rich Results Test after launch.
- `sitemap.xml` (11 pages), `robots.txt` (allows all, points to the sitemap), `site.webmanifest`, `favicon.ico`, Apple touch icon, PWA icons.
- `_headers`: security headers (nosniff, frame options, referrer policy, HSTS) and 30-day caching for `/assets/*`. `_redirects`: a few friendly short paths (`/gold`, `/chit`, `/home`…).
- The Tamil version is a toggle on the same URL, so Google indexes the English text. If Tamil search traffic becomes important, separate `/ta/` pages would be the next step.
- **When the client sends social media links**, add them to the footer and to `"sameAs"` in the JSON-LD (search the HTML for `"knowsLanguage"`; add `"sameAs":[...]` next to it).

## Contact details in use
- Phone / WhatsApp: **89257 27728** (`tel:+918925727728`, `wa.me/918925727728`)
- Email: **arokkfinance@gmail.com**

Both appear in the header bar, enquiry sidebars, contact cards, grievance officer block, footer and the mobile action bar. The WhatsApp links assume the same number as the phone line.

## Notes
- **Single entity.** The site previously split services between "AROKK Chits Pvt Ltd" (chits) and "AROKK Financial Services" (gold loan, microfinance). Everything now runs under **AROKK Financial Services**, and the sentences, badges and comparison row that contrasted the two entities have been removed.
- Search engines may index every page except the 404 page. The `*.pages.dev` preview address sends `X-Robots-Tag: noindex` (see `_headers`) so only www.arokk.in shows up in Google.
- Bilingual: the English/தமிழ் toggle in the top bar switches the whole page.
- Tested at 320–1920px in both languages, on every page.

## Branch opening gallery (home page)
- A "Branch openings" section sits directly below the About section on `index.html`: a mosaic of 7 photos plus a "View all 13 photos" lightbox (arrows, thumbnails, keyboard, swipe on phones).
- The 13 photos are the client's own, in `assets/img/openings/` (`opening-NN.jpg` full size, `opening-NN-sm.jpg` for the grid). They were resized and compressed, and location/camera data was stripped. The grid loads about 450 KB; the full photos load only when the lightbox opens.
- Captions are general ("Ribbon cutting", "Lighting the traditional lamp"…) because we don't know which branch each photo is from. Tell us the branch for each photo if you'd like it named.
- **Consent:** the photos show identifiable people, including a child in the ribbon-cutting photos. The client should confirm everyone shown is happy to appear on the website.

The circles drawn around the stat icons (home and About pages) have been removed.

## Photos (Unsplash licence, free for commercial use)
Loaded directly from images.unsplash.com. Every inner page now has a parallax photo in its header that fades into the white behind the text, and no photo repeats within a page.

| Photo | Photographer | Used on |
|---|---|---|
| Paddy fields with coconut palms (03JtNfCubFw) | Nandhu Kumar | Home band |
| Rupee coins and notes (KzUiI7ENbws) | rupixen | Home band |
| Gold necklace with pearls (xu_zM4np434) | PRAHANT STUDIO | Home band |
| Woman harvesting rice (5NGTf4oD8RA) | Nandhu Kumar | Home and Services bands |
| Temple, Thanjavur style (dGu_b4S7DXM) | Avin CP | Home band "From the temple town" |
| Clay lamps (EZ7S0jJt588) | Joshi Milestoner | Home band "A bright start" |
| Rolled rupee notes and coins (EsH_VBiZhVA) | rupixen | Services header |
| Gold bangles (wreS7kv_tLE) | Zayed Ahmed Zadu | Services gold loan band |
| Rice field with palms (SrKgSiAtRNE) | Chrysanthi Ha | Services band, 404 header |
| Temple tower against the sky (Uqb1SZ4L3nA) | Nakkeeran Raveendran | About header |
| Farmer in a paddy field (fg5k00uT0TU) | Nandhu Kumar | About band |
| Stone temple corridor (dxgIrClfpOc) | Nakkeeran Raveendran | About band "Built to last" |
| Coin on rupee notes (LGM0PPU9Q4U) | rupixen | About band |
| Painted gopuram (JaSI5XDzsL8) | David samraj | Branches header |
| Green fields and palms (-u7_Bu8hya8) | Milin John | Branches band |
| Kolam being drawn (8LbC2WRe-Bo) | Karthick Gislen | Contact header |
| Banana fields, Tamil Nadu (xHnJt9tIHdQ) | Kolappan N | Contact band |
| Temple under a cloudy sky (3f0edZWzQeE) | gaf clickz | Grievance header |
| Paddy saplings (lXVWulsnNQE) | Foto Murthy | Privacy header |
| Gopuram against the sky (sWqejizy18s) | Gokul R | Terms header |

Links are unsplash.com/photos/&lt;id&gt;. For launch, download these and serve them from `/assets/img` (resized to ~1600px WebP) for speed.
