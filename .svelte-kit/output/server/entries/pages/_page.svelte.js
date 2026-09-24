import { a as derived, f as attr, i as attr_style, l as stringify, o as ensure_array_like, p as escape_html, r as attr_class, s as head } from "../../chunks/index-server.js";
//#region src/lib/components/sections/Intro.svelte
function Intro($$renderer) {
	$$renderer.push(`<section class="intro svelte-1cyg8wb" aria-label="Introduction"><div class="intro-layout svelte-1cyg8wb"><div class="intro-name svelte-1cyg8wb"><h1 class="svelte-1cyg8wb">Yashwanth</h1></div> <div class="intro-statement svelte-1cyg8wb"><p class="svelte-1cyg8wb">A thoughtful process of building automation that engages people, brings clarity, and sparks delight.</p></div> <div class="hero-art svelte-1cyg8wb" aria-hidden="true"><svg class="turntable-illustration svelte-1cyg8wb" viewBox="0 0 640 400" role="presentation" focusable="false" shape-rendering="crispEdges"><rect x="28" y="38" width="584" height="312" rx="20" fill="#4f7376"></rect><rect x="28" y="28" width="584" height="304" rx="20" fill="#789b9d"></rect><path d="M48 30h544a18 18 0 0 1 18 18v6H30v-6a18 18 0 0 1 18-18Z" fill="#8aaeb0" opacity=".55"></path><path d="M40 48h560M40 318h560" stroke="#a4c0c0" stroke-width="3" opacity=".38"></path><path d="M44 64h18M578 64h18M44 292h18M578 292h18" stroke="#c4d2d1" stroke-width="4" stroke-linecap="square" opacity=".5"></path><g class="record-spin svelte-1cyg8wb"><circle cx="208" cy="180" r="136" fill="#17191a"></circle><circle cx="208" cy="180" r="126" fill="none" stroke="#87918f" stroke-width="3" opacity=".9"></circle><circle cx="208" cy="180" r="114" fill="none" stroke="#454b49" stroke-width="2" opacity=".65"></circle><circle cx="208" cy="180" r="104" fill="none" stroke="#68706d" stroke-width="2" opacity=".55"></circle><circle cx="208" cy="180" r="94" fill="none" stroke="#68706d" stroke-width="2" opacity=".42"></circle><circle cx="208" cy="180" r="84" fill="none" stroke="#68706d" stroke-width="2" opacity=".3"></circle><circle cx="208" cy="180" r="76" fill="none" stroke="#68706d" stroke-width="2" opacity=".26"></circle><circle cx="208" cy="180" r="68" fill="none" stroke="#68706d" stroke-width="2" opacity=".22"></circle><circle cx="208" cy="180" r="60" fill="none" stroke="#68706d" stroke-width="2" opacity=".18"></circle><circle cx="208" cy="180" r="44" fill="#d6a47b"></circle><circle cx="208" cy="180" r="11" fill="#5e625f"></circle><rect x="224" y="164" width="8" height="8" fill="#f1c89d" opacity=".8"></rect></g><circle cx="430" cy="106" r="38" fill="#5b6465"></circle><circle cx="430" cy="106" r="24" fill="#202526"></circle><path d="M430 72v10M430 130v10M396 106h10M454 106h10" stroke="#aebdbc" stroke-width="3" opacity=".65"></path><g class="tonearm-arm svelte-1cyg8wb"><path d="M430 106 382 219 320 254" fill="none" stroke="#e5b989" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"></path><path d="M430 106 382 219" fill="none" stroke="#f0d2a8" stroke-width="5" stroke-linecap="round"></path><rect x="303" y="240" width="30" height="17" rx="5" fill="#edf1f0" transform="rotate(35 318 248)"></rect><path d="m311 257-7 10" stroke="#252a2a" stroke-width="4" stroke-linecap="round"></path><circle cx="304" cy="267" r="4" fill="#17191a"></circle></g><rect x="500" y="142" width="25" height="130" rx="6" fill="#e9e1c8"></rect><rect x="508" y="153" width="9" height="108" rx="4" fill="#252b2b"></rect><rect x="502" y="192" width="21" height="24" rx="5" fill="#171c1c"></rect><circle cx="470" cy="309" r="13" fill="#dce5e5"></circle><circle cx="516" cy="309" r="13" fill="#dce5e5"></circle><circle cx="470" cy="309" r="5" fill="#a8c0c0"></circle><circle cx="516" cy="309" r="5" fill="#a8c0c0"></circle><path d="M458 286h24M504 286h24" stroke="#b6c9c8" stroke-width="3" stroke-linecap="square" opacity=".65"></path><path d="M52 38h536" stroke="#a4c0c0" stroke-width="3" opacity=".45"></path></svg></div> <div class="social-row svelte-1cyg8wb" aria-label="Social links"><a href="https://github.com" target="_blank" rel="noreferrer" class="svelte-1cyg8wb">GitHub</a> <a href="https://x.com" target="_blank" rel="noreferrer" class="svelte-1cyg8wb">X</a> <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="svelte-1cyg8wb">LinkedIn</a> <a href="mailto:hello@example.com" class="svelte-1cyg8wb">Email</a></div> <p class="scroll-cue svelte-1cyg8wb" aria-hidden="true">Scroll <span class="svelte-1cyg8wb">→</span></p></div></section>`);
}
//#endregion
//#region src/lib/components/DetailDrawer.svelte
function DetailDrawer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open, eyebrow, onClose, detail, detailKey } = $$props;
		if (open) {
			$$renderer.push(`<!--[0--><div class="backdrop svelte-9ocgkg" role="presentation" aria-hidden="true"></div> <div class="modal svelte-9ocgkg" role="dialog" aria-modal="true"${attr("aria-label", eyebrow)}><button class="close svelte-9ocgkg" aria-label="Close panel">✕</button> <div class="detail svelte-9ocgkg"><!---->`);
			detail($$renderer);
			$$renderer.push(`<!---->`);
			$$renderer.push(`<!----></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/sections/Projects.svelte
function art($$renderer, preview) {
	$$renderer.push(`<div class="preview-grid svelte-1fgsibr" aria-hidden="true"></div> `);
	if (preview === "cerebras") $$renderer.push(`<!--[0--><div class="preview-logo svelte-1fgsibr"><span class="logo-c svelte-1fgsibr">◯</span> cerebras</div> <div class="preview-mount sm svelte-1fgsibr"></div>`);
	else if (preview === "mountain") $$renderer.push(`<!--[1--><div class="preview-mountain svelte-1fgsibr"></div> <div class="preview-cloud svelte-1fgsibr"></div>`);
	else if (preview === "extend") $$renderer.push(`<!--[2--><div class="preview-logo svelte-1fgsibr"><span class="logo-e svelte-1fgsibr">⬢</span> extend</div>`);
	else if (preview === "trends") $$renderer.push(`<!--[3--><div class="preview-split svelte-1fgsibr"><div class="code-panel svelte-1fgsibr"><span class="pixel-cloud tiny svelte-1fgsibr"></span></div> <div class="trends-panel svelte-1fgsibr"><span class="trends-chip mono svelte-1fgsibr">SAN FRANCISCO ✕</span> <p class="trends-head svelte-1fgsibr">…biggest trending in the world are</p> <div class="trends-row svelte-1fgsibr"><span class="trends-brand svelte-1fgsibr">ANTHROP\\C</span> <span class="trends-more mono svelte-1fgsibr">+ MORE</span></div> <div class="trends-bars svelte-1fgsibr" aria-hidden="true"><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i><i class="svelte-1fgsibr"></i></div></div></div>`);
	else if (preview === "sec") $$renderer.push(`<!--[4--><div class="preview-split svelte-1fgsibr"><div class="code-panel svelte-1fgsibr"></div> <div class="sec-panel svelte-1fgsibr"><span class="mono svelte-1fgsibr" style="font-size:6px">Company Search — EDGAR</span></div></div>`);
	else if (preview === "reducto") $$renderer.push(`<!--[5--><div class="preview-logo svelte-1fgsibr"><span>◰</span> reducto</div>`);
	else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
function Projects($$renderer) {
	let projects = [
		{
			title: "Documentation checker with Cerebras",
			desc: "Crawl any docs site, discover its source repo, and verify documentation accuracy against the codebase.",
			tag: "B",
			accent: "#F06B2A",
			preview: "cerebras",
			stack: "TypeScript · Cerebras · Web crawler",
			body: "Point it at a docs URL and it crawls the site, finds the source repo, and cross-checks every claim against the code. Stale examples and renamed flags get flagged before your users hit them.",
			points: [
				"Full-site crawl with source-repo discovery",
				"Claim-by-claim verification against code",
				"Diff-style report of stale examples and flags"
			]
		},
		{
			title: "Extract & download images",
			desc: "Give it a URL, get back every image on the page. Handles product photos, hero images, and galleries.",
			tag: "",
			accent: "#5A7CE0",
			preview: "mountain",
			stack: "TypeScript · Image pipeline · ZIP export",
			body: "Paste a URL, get a tidy gallery of every image on the page — hero shots, product photos, lazy-loaded sets. One click downloads the lot as a zip.",
			points: [
				"Catches lazy-loaded and srcset variants",
				"Dedupes and names files sensibly",
				"Bulk ZIP download in one click"
			]
		},
		{
			title: "Download and parse receipts with Extend AI",
			desc: "Automate downloading expense receipts from web portals and extract structured data using AI.",
			tag: "B",
			accent: "#1a1a1a",
			preview: "extend",
			stack: "TypeScript · Extend AI · Expense portals",
			body: "Logs into expense portals, pulls the receipts, and turns them into structured line items — vendor, date, totals, tax. No more screenshot folders at month end.",
			points: [
				"Automated portal download",
				"AI-extracted line items and totals",
				"CSV/JSON export for accounting"
			]
		},
		{
			title: "Extract trending keywords from Google Trends",
			desc: "Extract trending search keywords from Google Trends for any country with structured JSON output.",
			tag: "",
			accent: "#7AA3F0",
			preview: "trends",
			stack: "TypeScript · Google Trends · JSON API",
			body: "Pick a country, get the trending searches as clean JSON — topics, volumes, trajectories. Built for content and SEO workflows that need data, not dashboards.",
			points: [
				"Any country, any timeframe",
				"Structured JSON output",
				"Topic clustering included"
			]
		},
		{
			title: "Extract SEC filing data",
			desc: "Search SEC EDGAR by company name, ticker, or CIK and extract recent filing metadata including filings.",
			tag: "",
			accent: "#1e3a5f",
			preview: "sec",
			stack: "TypeScript · SEC EDGAR · Filings parser",
			body: "Search EDGAR by name, ticker, or CIK and pull recent filings with metadata — forms, dates, accession numbers — ready for analysis instead of scraping HTML tables.",
			points: [
				"Name, ticker, or CIK lookup",
				"Recent-filings metadata extraction",
				"Clean tables, no HTML scraping"
			]
		},
		{
			title: "PDF scraping and data extraction with Reducto",
			desc: "Automate downloading PDFs from websites and extract structured data using AI-powered parsing.",
			tag: "B",
			accent: "#7C3AED",
			preview: "reducto",
			stack: "TypeScript · Reducto · PDF pipeline",
			body: "Finds the PDFs behind a site, downloads them, and extracts tables and fields with AI parsing. Built for the long tail of reports nobody wants to open by hand.",
			points: [
				"Bulk PDF discovery and download",
				"AI table and field extraction",
				"Schema-validated output"
			]
		}
	];
	let selected = null;
	let active = derived(() => selected === null ? null : projects[selected]);
	$$renderer.push(`<section id="projects" class="section svelte-1fgsibr" aria-label="Projects"><div class="section-head svelte-1fgsibr"><h2 class="svelte-1fgsibr"><span class="num mono svelte-1fgsibr">01</span> Selected work</h2> <span class="mono head-hint svelte-1fgsibr">06 projects</span></div> <div class="projects-scroll-wrap svelte-1fgsibr"><div class="projects-grid svelte-1fgsibr"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let p = each_array[i];
		$$renderer.push(`<button class="card svelte-1fgsibr"${attr_style(`--accent:${stringify(p.accent)}`)} aria-haspopup="dialog"><h3 class="svelte-1fgsibr"><i class="card-dot svelte-1fgsibr"></i>${escape_html(p.title)}</h3> <p class="card-desc svelte-1fgsibr">${escape_html(p.desc)}</p> <div class="preview svelte-1fgsibr">`);
		art($$renderer, p.preview);
		$$renderer.push(`<!----> `);
		if (p.tag) $$renderer.push(`<!--[0--><div class="b-tag svelte-1fgsibr">${escape_html(p.tag)}</div> <div class="b-stem svelte-1fgsibr"></div>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></button>`);
	}
	$$renderer.push(`<!--]--></div></div></section> `);
	{
		function detail($$renderer) {
			if (active()) {
				$$renderer.push(`<!--[0--><p class="mono kicker svelte-1fgsibr">Project — ${escape_html(active().stack)}</p> <h2 class="d-title svelte-1fgsibr">${escape_html(active().title)}</h2> <p class="d-desc svelte-1fgsibr">${escape_html(active().body)}</p> <ul class="d-points svelte-1fgsibr"><!--[-->`);
				const each_array_1 = ensure_array_like(active().points);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let pt = each_array_1[$$index_1];
					$$renderer.push(`<li>${escape_html(pt)}</li>`);
				}
				$$renderer.push(`<!--]--></ul> <span class="mono d-link svelte-1fgsibr">Open project ↗</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		DetailDrawer($$renderer, {
			open: selected !== null,
			eyebrow: "Projects",
			onClose: () => selected = null,
			detailKey: selected,
			detail,
			$$slots: { detail: true }
		});
	}
	$$renderer.push(`<!---->`);
}
//#endregion
//#region src/lib/components/sections/OpenSource.svelte
function coverArt($$renderer, icon, color) {
	$$renderer.push(`<span class="glyph svelte-1tjdn0o"${attr_style(`color:${stringify(color)}`)} aria-hidden="true">`);
	if (icon === "computer") $$renderer.push(`<!--[0--><svg viewBox="0 0 64 48" width="96" height="72" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" aria-hidden="true"><rect x="14" y="4" width="36" height="26" rx="2"></rect><line x1="6" y1="38" x2="58" y2="38"></line><line x1="26" y1="30" x2="26" y2="38"></line><line x1="38" y1="30" x2="38" y2="38"></line><circle cx="20" cy="10" r="1.5" fill="currentColor" stroke="none"></circle></svg>`);
	else if (icon === "pliers") $$renderer.push(`<!--[1--><svg viewBox="0 0 48 64" width="64" height="88" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M32 4 L18 30"></path><path d="M16 4 L30 30"></path><path d="M18 30 L10 56"></path><path d="M30 30 L38 56"></path><circle cx="24" cy="30" r="2.5" fill="currentColor" stroke="none"></circle></svg>`);
	else $$renderer.push(`<!--[-1--><svg viewBox="0 0 64 48" width="110" height="82" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="20" cy="8" r="4"></circle><path d="M14 20 L28 24 L44 22"></path><path d="M28 24 L36 34 L52 36"></path><path d="M28 24 L22 34 L10 40"></path><path d="M14 20 L8 30 L6 40"></path></svg>`);
	$$renderer.push(`<!--]--></span>`);
}
function OpenSource($$renderer) {
	let posts = [
		{
			title: "Browserbase and Okta: Cross App Access Ecosystem Brings Identity-Governed AI to browser agents",
			excerpt: "Identity-governed automation for browser agents, built on the Cross App Access standard.",
			authors: "Browserbase Team",
			date: "September 22, 2026",
			tag: "Engineering",
			cover: "#e2e8f0",
			dot: "#8fa3bd",
			icon: "run",
			body: ["Browser agents keep hitting the same wall: every app wants its own login, and sharing credentials between agents is a security nightmare. The Cross App Access ecosystem with Okta fixes that with identity-governed access — agents act with scoped, auditable permissions instead of borrowed passwords.", "In this post we walk through how it works in practice: how an agent requests access, how Okta enforces policy, and what changes for teams running fleets of browser agents in production."]
		},
		{
			title: "What is Jev?",
			excerpt: "A quick primer on Jev and where it fits in the stack.",
			authors: "Kyle Jeong",
			date: "September 21, 2026",
			tag: "Engineering",
			cover: "#dbe36a",
			dot: "#9aa63f",
			icon: "computer",
			body: ["Jev is the small, fast layer between your code and the browser — declare what you want, and it figures out the clicks, waits, and retries.", "This primer covers the mental model, a first script in under a minute, and when to reach for Jev versus driving the browser by hand."]
		},
		{
			title: "Evolving computer use with code",
			excerpt: "From brittle scripts to agents that write their own automation.",
			authors: "Kyle Jeong & Miguel Gonzalez",
			date: "September 09, 2026",
			tag: "Engineering",
			cover: "#a9f0c6",
			dot: "#5fae82",
			icon: "computer",
			body: ["Computer use started as record-and-replay macros. It broke on the first redesign. Code changed that — and now agents that write code at runtime are changing it again.", "We trace that evolution and show where generated code beats fixed scripts: self-healing selectors, adaptive waits, and fallbacks the original author never thought of."]
		},
		{
			title: "Introducing Stagehand v4: The SDK for browser agents.",
			excerpt: "The fastest way to give your agents a browser that just works.",
			authors: "Miguel Gonzalez, Sean McGuire, Sam Finton & Harsehaj Dhami",
			date: "August 10, 2026",
			tag: "Stagehand",
			cover: "#f2a9f5",
			dot: "#a86bad",
			icon: "pliers",
			body: ["Stagehand v4 is our biggest release yet: a cleaner API, faster actuation, and first-class support for the agent frameworks teams already use.", "Inside: what changed, migration notes from v3, and three example agents you can run today."]
		}
	];
	let selected = null;
	let active = derived(() => selected === null ? null : posts[selected]);
	$$renderer.push(`<section id="blog" class="section svelte-1tjdn0o" aria-label="Blog"><div class="section-head svelte-1tjdn0o"><h2 class="svelte-1tjdn0o"><span class="num mono svelte-1tjdn0o">02</span> Blog</h2> <span class="mono head-hint svelte-1tjdn0o">— Notes &amp; essays</span></div> <div class="blog-grid svelte-1tjdn0o"><!--[-->`);
	const each_array = ensure_array_like(posts);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let p = each_array[i];
		$$renderer.push(`<button class="card svelte-1tjdn0o" aria-haspopup="dialog"><div class="cover svelte-1tjdn0o"${attr_style(`background:${stringify(p.cover)}`)}>`);
		coverArt($$renderer, p.icon, p.dot);
		$$renderer.push(`<!----></div> <h3 class="svelte-1tjdn0o">${escape_html(p.title)}</h3> <div class="foot svelte-1tjdn0o"><p class="authors svelte-1tjdn0o">${escape_html(p.authors)}</p> <p class="mono date svelte-1tjdn0o">${escape_html(p.date)}</p> <span class="mono tag svelte-1tjdn0o">${escape_html(p.tag)}</span></div></button>`);
	}
	$$renderer.push(`<!--]--></div></section> `);
	{
		function detail($$renderer) {
			if (active()) {
				$$renderer.push(`<!--[0--><div class="d-cover svelte-1tjdn0o"${attr_style(`background:${stringify(active().cover)}`)}><span class="mono d-tag svelte-1tjdn0o">${escape_html(active().tag)}</span></div> <h2 class="d-title svelte-1tjdn0o">${escape_html(active().title)}</h2> <p class="d-meta svelte-1tjdn0o">${escape_html(active().authors)} <span class="mono d-date svelte-1tjdn0o">— ${escape_html(active().date)}</span></p> <!--[-->`);
				const each_array_1 = ensure_array_like(active().body);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let para = each_array_1[$$index_1];
					$$renderer.push(`<p class="d-para svelte-1tjdn0o">${escape_html(para)}</p>`);
				}
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		DetailDrawer($$renderer, {
			open: selected !== null,
			eyebrow: "Blog",
			onClose: () => selected = null,
			detailKey: selected,
			detail,
			$$slots: { detail: true }
		});
	}
	$$renderer.push(`<!---->`);
}
//#endregion
//#region src/lib/components/sections/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="footer mono svelte-1kkgy02"><span>Built with SvelteKit — Box-line system</span> <span>© 2026 — <a href="mailto:hello@example.com" class="svelte-1kkgy02">hello@example.com</a></span></footer>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Portfolio — Minimal Box-Line</title>`);
			});
			$$renderer.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600&amp;family=Caveat:wght@500;600&amp;family=DM+Sans:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@400&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>`);
		});
		$$renderer.push(`<div class="page svelte-1uha8ag"><aside${attr_class("global-rail svelte-1uha8ag", void 0, {
			"theme-intro": true,
			"theme-projects": false,
			"theme-blog": false,
			"theme-footer": false
		})} aria-hidden="true"><span class="rail-name svelte-1uha8ag">Yashwanth</span> <span class="rail-year svelte-1uha8ag">© 2026</span></aside> <main class="rail svelte-1uha8ag" aria-label="Portfolio sections" data-lenis-prevent="">`);
		Intro($$renderer, {});
		$$renderer.push(`<!----> `);
		Projects($$renderer, {});
		$$renderer.push(`<!----> `);
		OpenSource($$renderer, {});
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!----></main></div>`);
	});
}
//#endregion
export { _page as default };
