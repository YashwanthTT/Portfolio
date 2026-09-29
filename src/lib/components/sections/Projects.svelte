<script lang="ts">
	import DetailDrawer from '$lib/components/DetailDrawer.svelte';

	let projects = [
		{
			title: 'Docs verifier',
			desc: 'Crawl any docs site, discover its source repo, and verify documentation accuracy against the codebase.',
			accent: '#F06B2A',
			stack: 'TypeScript · Cerebras · Web crawler',
			body: 'Point it at a docs URL and it crawls the site, finds the source repo, and cross-checks every claim against the code. Stale examples and renamed flags get flagged before your users hit them.',
			points: ['Full-site crawl with source-repo discovery', 'Claim-by-claim verification against code', 'Diff-style report of stale examples and flags']
		},
		{
			title: 'Image harvester',
			desc: 'Give it a URL, get back every image on the page. Handles product photos, hero images, and galleries.',
			accent: '#5A7CE0',
			stack: 'TypeScript · Image pipeline · ZIP export',
			body: 'Paste a URL, get a tidy gallery of every image on the page — hero shots, product photos, lazy-loaded sets. One click downloads the lot as a zip.',
			points: ['Catches lazy-loaded and srcset variants', 'Dedupes and names files sensibly', 'Bulk ZIP download in one click']
		},
		{
			title: 'Receipt parser',
			desc: 'Automate downloading expense receipts from web portals and extract structured data using AI.',
			accent: '#1a1a1a',
			stack: 'TypeScript · Extend AI · Expense portals',
			body: 'Logs into expense portals, pulls the receipts, and turns them into structured line items — vendor, date, totals, tax. No more screenshot folders at month end.',
			points: ['Automated portal download', 'AI-extracted line items and totals', 'CSV/JSON export for accounting']
		},
		{
			title: 'Trends keywords',
			desc: 'Extract trending search keywords from Google Trends for any country with structured JSON output.',
			accent: '#7AA3F0',
			stack: 'TypeScript · Google Trends · JSON API',
			body: 'Pick a country, get the trending searches as clean JSON — topics, volumes, trajectories. Built for content and SEO workflows that need data, not dashboards.',
			points: ['Any country, any timeframe', 'Structured JSON output', 'Topic clustering included']
		},
		{
			title: 'EDGAR lookup',
			desc: 'Search SEC EDGAR by company name, ticker, or CIK and extract recent filing metadata including filings.',
			accent: '#1e3a5f',
			stack: 'TypeScript · SEC EDGAR · Filings parser',
			body: 'Search EDGAR by name, ticker, or CIK and pull recent filings with metadata — forms, dates, accession numbers — ready for analysis instead of scraping HTML tables.',
			points: ['Name, ticker, or CIK lookup', 'Recent-filings metadata extraction', 'Clean tables, no HTML scraping']
		},
		{
			title: 'PDF extractor',
			desc: 'Automate downloading PDFs from websites and extract structured data using AI-powered parsing.',
			accent: '#7C3AED',
			stack: 'TypeScript · Reducto · PDF pipeline',
			body: 'Finds the PDFs behind a site, downloads them, and extracts tables and fields with AI parsing. Built for the long tail of reports nobody wants to open by hand.',
			points: ['Bulk PDF discovery and download', 'AI table and field extraction', 'Schema-validated output']
		}
	];

	let selected = $state<number | null>(null);
	let active = $derived(selected === null ? null : projects[selected]);
</script>

<section id="projects" class="section" aria-label="Projects">
	<div class="section-head">
		<h2><span class="num mono">01</span> Selected work</h2>
		<span class="mono head-hint">06 projects</span>
	</div>
	<div class="projects-scroll-wrap">
		<div class="projects-grid">
			{#each projects as p, i}
				<button class="card" style="--accent:{p.accent}" onclick={() => (selected = i)} aria-haspopup="dialog">
					<div class="mono card-top"><span class="idx"><i class="card-dot"></i>{String(i + 1).padStart(2, '0')}</span><span class="go">↗</span></div>
					<h3>{p.title}</h3>
					<p class="card-desc">{p.desc}</p>
					<div class="foot">
						<p class="mono stack">{p.stack}</p>
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
		padding: 14px 16px 16px;
		background: white;
		display: flex;
		flex-direction: column;
		min-height: 260px;
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
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
		border-color: var(--card-line-hover);
	}
	.card:hover .go { transform: translate(1px, -1px); }
	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #64748b;
		font-size: 11px;
		margin-bottom: 14px;
	}
	.idx { display: inline-flex; align-items: center; gap: 8px; }
	.go { transition: transform 0.15s; }
	.card h3 {
		font-size: 17px;
		line-height: 1.3;
		letter-spacing: -0.01em;
		font-weight: 600;
		color: #0f172a;
		margin: 0;
		text-wrap: balance;
	}
	.card-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		flex-shrink: 0;
		background: var(--accent);
	}
	.card-desc {
		color: #64748b;
		font-size: 14px;
		line-height: 1.6;
		margin: 10px 0 0;
	}
	.foot { margin-top: auto; padding-top: 24px; }
	.stack {
		margin: 0;
		padding-top: 12px;
		border-top: 1px solid var(--line);
		font-size: 11px;
		letter-spacing: 0.02em;
		color: #6b7280;
	}
	.kicker { text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin: 0 0 10px; }
	.d-title { font-size: clamp(24px, 3.4vw, 34px); letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 12px; color: #0f172a; text-wrap: balance; }
	.d-desc { font-size: 15px; line-height: 1.7; color: #334155; margin: 0 0 18px; max-width: 56ch; }
	.d-points { margin: 0 0 22px; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; line-height: 1.6; color: #0f172a; }
	.d-link { display: inline-block; border: 1px solid var(--card-line); border-radius: 4px; background: #fff; padding: 8px 14px; color: #0f172a; }
	@media (prefers-reduced-motion: reduce) {
		.card, .go { transition: none; }
	}
</style>
