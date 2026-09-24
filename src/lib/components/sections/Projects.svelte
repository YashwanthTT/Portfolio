<script lang="ts">
	import DetailDrawer from '$lib/components/DetailDrawer.svelte';

	let projects = [
		{
			title: 'Documentation checker with Cerebras',
			desc: 'Crawl any docs site, discover its source repo, and verify documentation accuracy against the codebase.',
			tag: 'B',
			accent: '#F06B2A',
			preview: 'cerebras',
			stack: 'TypeScript · Cerebras · Web crawler',
			body: 'Point it at a docs URL and it crawls the site, finds the source repo, and cross-checks every claim against the code. Stale examples and renamed flags get flagged before your users hit them.',
			points: ['Full-site crawl with source-repo discovery', 'Claim-by-claim verification against code', 'Diff-style report of stale examples and flags']
		},
		{
			title: 'Extract & download images',
			desc: 'Give it a URL, get back every image on the page. Handles product photos, hero images, and galleries.',
			tag: '',
			accent: '#5A7CE0',
			preview: 'mountain',
			stack: 'TypeScript · Image pipeline · ZIP export',
			body: 'Paste a URL, get a tidy gallery of every image on the page — hero shots, product photos, lazy-loaded sets. One click downloads the lot as a zip.',
			points: ['Catches lazy-loaded and srcset variants', 'Dedupes and names files sensibly', 'Bulk ZIP download in one click']
		},
		{
			title: 'Download and parse receipts with Extend AI',
			desc: 'Automate downloading expense receipts from web portals and extract structured data using AI.',
			tag: 'B',
			accent: '#1a1a1a',
			preview: 'extend',
			stack: 'TypeScript · Extend AI · Expense portals',
			body: 'Logs into expense portals, pulls the receipts, and turns them into structured line items — vendor, date, totals, tax. No more screenshot folders at month end.',
			points: ['Automated portal download', 'AI-extracted line items and totals', 'CSV/JSON export for accounting']
		},
		{
			title: 'Extract trending keywords from Google Trends',
			desc: 'Extract trending search keywords from Google Trends for any country with structured JSON output.',
			tag: '',
			accent: '#7AA3F0',
			preview: 'trends',
			stack: 'TypeScript · Google Trends · JSON API',
			body: 'Pick a country, get the trending searches as clean JSON — topics, volumes, trajectories. Built for content and SEO workflows that need data, not dashboards.',
			points: ['Any country, any timeframe', 'Structured JSON output', 'Topic clustering included']
		},
		{
			title: 'Extract SEC filing data',
			desc: 'Search SEC EDGAR by company name, ticker, or CIK and extract recent filing metadata including filings.',
			tag: '',
			accent: '#1e3a5f',
			preview: 'sec',
			stack: 'TypeScript · SEC EDGAR · Filings parser',
			body: 'Search EDGAR by name, ticker, or CIK and pull recent filings with metadata — forms, dates, accession numbers — ready for analysis instead of scraping HTML tables.',
			points: ['Name, ticker, or CIK lookup', 'Recent-filings metadata extraction', 'Clean tables, no HTML scraping']
		},
		{
			title: 'PDF scraping and data extraction with Reducto',
			desc: 'Automate downloading PDFs from websites and extract structured data using AI-powered parsing.',
			tag: 'B',
			accent: '#7C3AED',
			preview: 'reducto',
			stack: 'TypeScript · Reducto · PDF pipeline',
			body: 'Finds the PDFs behind a site, downloads them, and extracts tables and fields with AI parsing. Built for the long tail of reports nobody wants to open by hand.',
			points: ['Bulk PDF discovery and download', 'AI table and field extraction', 'Schema-validated output']
		}
	];

	let selected = $state<number | null>(null);
	let active = $derived(selected === null ? null : projects[selected]);
</script>

{#snippet art(preview: string)}
	<div class="preview-grid" aria-hidden="true"></div>
		{#if preview === 'cerebras'}
			<div class="preview-logo"><span class="logo-c">◯</span> cerebras</div>
			<div class="preview-mount sm"></div>
		{:else if preview === 'mountain'}
			<div class="preview-mountain"></div>
			<div class="preview-cloud"></div>
		{:else if preview === 'extend'}
			<div class="preview-logo"><span class="logo-e">⬢</span> extend</div>
		{:else if preview === 'trends'}
			<div class="preview-split">
				<div class="code-panel"><span class="pixel-cloud tiny"></span></div>
				<div class="trends-panel">
					<span class="trends-chip mono">SAN FRANCISCO ✕</span>
					<p class="trends-head">…biggest trending in the world are</p>
					<div class="trends-row">
						<span class="trends-brand">ANTHROP\C</span>
						<span class="trends-more mono">+ MORE</span>
					</div>
					<div class="trends-bars" aria-hidden="true">
						<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
					</div>
				</div>
			</div>
		{:else if preview === 'sec'}
			<div class="preview-split">
				<div class="code-panel"></div>
				<div class="sec-panel">
					<span class="mono" style="font-size:6px">Company Search — EDGAR</span>
				</div>
			</div>
		{:else if preview === 'reducto'}
			<div class="preview-logo"><span>◰</span> reducto</div>
		{/if}
	{/snippet}

<section id="projects" class="section" aria-label="Projects">
	<div class="section-head">
		<h2><span class="num mono">01</span> Selected work</h2>
		<span class="mono head-hint">06 projects</span>
	</div>
	<div class="projects-scroll-wrap">
		<div class="projects-grid">
			{#each projects as p, i}
				<button class="card" style="--accent:{p.accent}" onclick={() => (selected = i)} aria-haspopup="dialog">
					<h3><i class="card-dot"></i>{p.title}</h3>
					<p class="card-desc">{p.desc}</p>
					<div class="preview">
						{@render art(p.preview)}
						{#if p.tag}
							<div class="b-tag">{p.tag}</div>
							<div class="b-stem"></div>
						{/if}
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<DetailDrawer
	open={selected !== null}
	eyebrow="Projects"
	onClose={() => (selected = null)}
	detailKey={selected}
>
	{#snippet detail()}
		{#if active}
			<p class="mono kicker">Project — {active.stack}</p>
			<h2 class="d-title">{active.title}</h2>
			<p class="d-desc">{active.body}</p>
			<ul class="d-points">
				{#each active.points as pt}<li>{pt}</li>{/each}
			</ul>
			<span class="mono d-link">Open project ↗</span>
		{/if}
	{/snippet}
</DetailDrawer>

<style>
	.mono {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 11px;
		letter-spacing: 0.02em;
	}
	.section {
		position: relative;
		z-index: 1;
		flex: 0 0 100vw;
		width: 100vw;
		min-width: 100vw;
		height: 100%;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 64px 48px 56px calc(var(--rail-width) + 48px);
		background: #f4f0e8;
		border-top: none;
	}
	.section-head {
		width: 100%;
		max-width: 1200px;
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px 16px;
		margin: 0 auto 28px;
		flex-wrap: wrap;
	}
	.section-head h2 {
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.14em;
		line-height: 1.2;
		text-transform: uppercase;
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 10px;
		color: #0f172a;
	}
	.num { color: #64748b; font-weight: 400; font-size: 11px; letter-spacing: 0.08em; }
	.head-hint {
		color: #64748b;
		font-size: 12px;
		letter-spacing: 0.02em;
		font-weight: 400;
		white-space: nowrap;
	}
	@media (max-width: 860px) {
		.section { padding: 40px 20px 40px calc(var(--rail-width) + 20px); }
		.section-head { flex-direction: column; align-items: flex-start; gap: 8px; }
		.head-hint { white-space: normal; }
	}
	.projects-scroll-wrap {
		width: 100%;
		max-width: 1200px;
		min-width: 0;
		margin: 0 auto;
		background: transparent;
		border: none;
		padding: 0;
		overflow: visible;
	}
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
		width: 100%;
	}
	@media (max-width: 1000px) {
		.projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
	}
	@media (max-width: 600px) {
		.projects-scroll-wrap { overflow: hidden; }
		.projects-grid {
			display: flex;
			gap: 12px;
			overflow-x: auto;
			scrollbar-width: none;
		}
		.projects-grid::-webkit-scrollbar { display: none; }
	}
	.card {
		min-width: 0;
		border: 1px solid var(--card-line);
		border-radius: 4px;
		padding: 18px 16px 0;
		background: white;
		display: flex;
		flex-direction: column;
		min-height: 240px;
		transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
		font: inherit;
		text-align: left;
		cursor: pointer;
		color: inherit;
	}
	@media (max-width: 600px) {
		.card { flex: 0 0 min(82vw, 320px); }
	}
	.card:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 12px rgba(15, 23, 42, 0.05);
		border-color: var(--card-line-hover);
	}
	.card h3 {
		font-size: 14px;
		line-height: 1.4;
		margin: 0;
		letter-spacing: -0.01em;
		font-weight: 600;
		color: #0f172a;
		display: flex;
		align-items: flex-start;
		gap: 8px;
	}
	.card-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		margin-top: 5px;
		flex-shrink: 0;
		background: var(--accent);
	}
	.card-desc {
		color: #64748b;
		font-size: 13px;
		line-height: 1.6;
		margin: 8px 0 16px;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.preview {
		margin-top: auto;
		height: 120px;
		border: 1px solid var(--card-line);
		border-bottom: none;
		border-radius: 3px 3px 0 0;
		background: #fff;
		position: relative;
		overflow: hidden;
		display: grid;
		place-items: center;
	}
	.preview-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, var(--line) 1px, transparent 1px),
			linear-gradient(to bottom, var(--line) 1px, transparent 1px);
		background-size: 33% 50%;
		opacity: 0.45;
	}
	.preview-logo {
		position: relative;
		z-index: 1;
		font-weight: 700;
		letter-spacing: -0.02em;
		font-size: 15px;
		display: flex;
		align-items: center;
		gap: 6px;
		background: white;
		padding: 4px 10px;
		border: 1px solid var(--card-line);
	}
	.logo-c { color: var(--accent); font-size: 18px; }
	.logo-e { font-size: 14px; }
	.preview-mountain {
		position: absolute;
		inset: auto -10% -6px -10%;
		height: 72%;
		background: #cbd5e1;
		clip-path: polygon(18% 100%, 24% 64%, 36% 48%, 46% 26%, 58% 8%, 68% 22%, 78% 42%, 86% 66%, 90% 100%);
		opacity: 0.95;
	}
	.preview-mountain::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle 1px at 2px 2px, #334155 1px, transparent 1px);
		background-size: 5px 5px;
		opacity: 0.9;
		clip-path: inherit;
	}
	.preview-cloud {
		position: absolute;
		width: 46px;
		height: 12px;
		background: white;
		border-radius: 10px;
		top: 28px;
		left: 14px;
		z-index: 2;
		box-shadow: 12px 4px 0 white;
	}
	.preview-mount.sm {
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 34px;
		background: repeating-linear-gradient(90deg, #eadfc9 0 4px, transparent 4px 8px);
		opacity: 0.6;
	}
	.b-tag {
		position: absolute;
		bottom: 6px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--accent-ink);
		color: white;
		font-size: 9px;
		font-weight: 700;
		width: 14px;
		height: 14px;
		display: grid;
		place-items: center;
		z-index: 3;
		line-height: 1;
	}
	.b-stem {
		position: absolute;
		bottom: 20px;
		left: 50%;
		width: 1px;
		height: 14px;
		background: var(--accent-ink);
		transform: translateX(-50%);
	}
	.preview-split {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		height: 100%;
		gap: 0;
	}
	.code-panel { background: #0f172a; position: relative; }
	.code-panel::after {
		content: '•••';
		position: absolute;
		top: 4px;
		left: 6px;
		color: #475569;
		font-size: 6px;
		letter-spacing: 2px;
	}
	.trends-panel, .sec-panel {
		background: white;
		padding: 8px;
		border-left: 1px solid var(--card-line);
	}
	.trends-panel { display: flex; flex-direction: column; justify-content: center; gap: 5px; }
	.trends-chip {
		align-self: flex-start;
		font-size: 6px;
		letter-spacing: 0.06em;
		color: #475569;
		border: 1px solid var(--card-line);
		border-radius: 3px;
		padding: 2px 5px;
		background: var(--wash);
	}
	.trends-head {
		margin: 0;
		font-size: 8.5px;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: #0f172a;
		line-height: 1.25;
	}
	.trends-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 6px;
		padding-top: 4px;
		border-top: 1px solid var(--line);
	}
	.trends-brand { font-size: 7.5px; font-weight: 700; letter-spacing: 0.02em; color: #0f172a; }
	.trends-more { font-size: 6px; color: #64748b; }
	.trends-bars { display: flex; align-items: flex-end; gap: 2px; height: 14px; }
	.trends-bars i { flex: 1; background: var(--card-line); border-radius: 1px; height: 30%; }
	.trends-bars i:nth-child(2) { height: 45%; }
	.trends-bars i:nth-child(3) { height: 38%; }
	.trends-bars i:nth-child(4) { height: 62%; }
	.trends-bars i:nth-child(5) { height: 50%; }
	.trends-bars i:nth-child(6) { height: 78%; }
	.trends-bars i:nth-child(7) { height: 66%; }
	.trends-bars i:nth-child(8) { height: 100%; background: #0f172a; }
	.sec-panel { display: grid; place-items: center; }
	.pixel-cloud.tiny {
		position: absolute;
		width: 28px;
		height: 8px;
		background: white;
		border-radius: 8px;
		left: 10px;
		bottom: 14px;
	}
	.preview-logo, .preview-cloud, .preview-mountain, .preview-mount.sm, .b-tag, .b-stem, .preview-split > *, .pixel-cloud.tiny {
		transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
		will-change: transform;
	}
	.card:hover .preview-logo { transform: translateX(-7px); }
	.card:hover .preview-mount.sm { transform: translateX(7px); }
	.card:hover .preview-mountain { transform: translateX(6px); }
	.card:hover .preview-cloud { transform: translateX(-8px); }
	.card:hover .preview-split .code-panel { transform: translateX(-6px); }
	.card:hover .preview-split .trends-panel, .card:hover .preview-split .sec-panel { transform: translateX(6px); }
	.card:hover .b-tag { transform: translateX(-50%) translateX(-5px); }
	.card:hover .b-stem { transform: translateX(-50%) translateX(5px); }
	.card:hover .pixel-cloud.tiny { transform: translateX(-5px); }
	.kicker { text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin: 0 0 10px; }
	.d-title { font-size: clamp(24px, 3.4vw, 34px); letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 12px; color: #0f172a; text-wrap: balance; }
	.d-desc { font-size: 15px; line-height: 1.7; color: #334155; margin: 0 0 18px; max-width: 56ch; }
	.d-points { margin: 0 0 22px; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; line-height: 1.6; color: #0f172a; }
	.d-link { display: inline-block; border: 1px solid var(--card-line); border-radius: 4px; background: #fff; padding: 8px 14px; color: #0f172a; }
	@media (prefers-reduced-motion: reduce) {
		.card, .preview-logo, .preview-cloud, .preview-mountain, .preview-mount.sm, .b-tag, .b-stem, .preview-split > *, .pixel-cloud.tiny { transition: none; }
	}
</style>
