<script lang="ts">
	import DetailDrawer from '$lib/components/DetailDrawer.svelte';

	let posts = [
		{
			title: 'Browserbase and Okta: Cross App Access Ecosystem Brings Identity-Governed AI to browser agents',
			excerpt: 'Identity-governed automation for browser agents, built on the Cross App Access standard.',
			authors: 'Browserbase Team',
			date: 'September 22, 2026',
			tag: 'Engineering',
			cover: '#e2e8f0',
			dot: '#8fa3bd',
			icon: 'run' as const,
			body: [
				'Browser agents keep hitting the same wall: every app wants its own login, and sharing credentials between agents is a security nightmare. The Cross App Access ecosystem with Okta fixes that with identity-governed access — agents act with scoped, auditable permissions instead of borrowed passwords.',
				'In this post we walk through how it works in practice: how an agent requests access, how Okta enforces policy, and what changes for teams running fleets of browser agents in production.'
			]
		},
		{
			title: 'What is Jev?',
			excerpt: 'A quick primer on Jev and where it fits in the stack.',
			authors: 'Kyle Jeong',
			date: 'September 21, 2026',
			tag: 'Engineering',
			cover: '#dbe36a',
			dot: '#9aa63f',
			icon: 'computer' as const,
			body: [
				'Jev is the small, fast layer between your code and the browser — declare what you want, and it figures out the clicks, waits, and retries.',
				'This primer covers the mental model, a first script in under a minute, and when to reach for Jev versus driving the browser by hand.'
			]
		},
		{
			title: 'Evolving computer use with code',
			excerpt: 'From brittle scripts to agents that write their own automation.',
			authors: 'Kyle Jeong & Miguel Gonzalez',
			date: 'September 09, 2026',
			tag: 'Engineering',
			cover: '#a9f0c6',
			dot: '#5fae82',
			icon: 'computer' as const,
			body: [
				'Computer use started as record-and-replay macros. It broke on the first redesign. Code changed that — and now agents that write code at runtime are changing it again.',
				'We trace that evolution and show where generated code beats fixed scripts: self-healing selectors, adaptive waits, and fallbacks the original author never thought of.'
			]
		},
		{
			title: 'Introducing Stagehand v4: The SDK for browser agents.',
			excerpt: 'The fastest way to give your agents a browser that just works.',
			authors: 'Miguel Gonzalez, Sean McGuire, Sam Finton & Harsehaj Dhami',
			date: 'August 10, 2026',
			tag: 'Stagehand',
			cover: '#f2a9f5',
			dot: '#a86bad',
			icon: 'pliers' as const,
			body: [
				'Stagehand v4 is our biggest release yet: a cleaner API, faster actuation, and first-class support for the agent frameworks teams already use.',
				'Inside: what changed, migration notes from v3, and three example agents you can run today.'
			]
		}
	];

	let selected = $state<number | null>(null);
	let active = $derived(selected === null ? null : posts[selected]);
</script>

{#snippet coverArt(icon: string, color: string)}
	<span class="glyph" style="color:{color}" aria-hidden="true">
			{#if icon === 'computer'}
				<svg viewBox="0 0 64 48" width="96" height="72" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" aria-hidden="true"><rect x="14" y="4" width="36" height="26" rx="2"/><line x1="6" y1="38" x2="58" y2="38"/><line x1="26" y1="30" x2="26" y2="38"/><line x1="38" y1="30" x2="38" y2="38"/><circle cx="20" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>
			{:else if icon === 'pliers'}
				<svg viewBox="0 0 48 64" width="64" height="88" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M32 4 L18 30"/><path d="M16 4 L30 30"/><path d="M18 30 L10 56"/><path d="M30 30 L38 56"/><circle cx="24" cy="30" r="2.5" fill="currentColor" stroke="none"/></svg>
			{:else}
				<svg viewBox="0 0 64 48" width="110" height="82" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="20" cy="8" r="4"/><path d="M14 20 L28 24 L44 22"/><path d="M28 24 L36 34 L52 36"/><path d="M28 24 L22 34 L10 40"/><path d="M14 20 L8 30 L6 40"/></svg>
			{/if}
		</span>
	{/snippet}

<section id="blog" class="section" aria-label="Blog">
	<div class="section-head">
		<h2><span class="num mono">02</span> Blog</h2>
		<span class="mono head-hint">— Notes & essays</span>
	</div>
	<div class="blog-grid">
		{#each posts as p, i}
			<button class="card" onclick={() => (selected = i)} aria-haspopup="dialog">
				<div class="cover" style="background:{p.cover}">
					{@render coverArt(p.icon, p.dot)}
				</div>
				<h3>{p.title}</h3>
				<div class="foot">
					<p class="authors">{p.authors}</p>
					<p class="mono date">{p.date}</p>
					<span class="mono tag">{p.tag}</span>
				</div>
			</button>
		{/each}
	</div>
</section>

<DetailDrawer
	open={selected !== null}
	eyebrow="Blog"
	onClose={() => (selected = null)}
	detailKey={selected}
>
	{#snippet detail()}
		{#if active}
			<div class="d-cover" style="background:{active.cover}">
				<span class="mono d-tag">{active.tag}</span>
			</div>
			<h2 class="d-title">{active.title}</h2>
			<p class="d-meta">{active.authors} <span class="mono d-date">— {active.date}</span></p>
			{#each active.body as para}<p class="d-para">{para}</p>{/each}
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
		flex: 0 0 auto;
		width: max-content;
		min-width: 100vw;
		height: 100%;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 64px 48px 56px calc(var(--rail-width) + 48px);
		background: #dfe8e2;
		border-top: none;
	}
	.section-head {
		width: calc(100vw - 96px);
		max-width: 1120px;
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px 16px;
		margin-bottom: 24px;
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
		text-wrap: balance;
	}
	.num { color: #64748b; font-weight: 400; font-size: 11px; letter-spacing: 0.08em; }
	.head-hint {
		color: #64748b;
		font-size: 12px;
		letter-spacing: 0.02em;
		text-transform: none;
		font-weight: 400;
		white-space: nowrap;
	}
	.blog-grid {
		display: flex;
		gap: 20px;
		width: max-content;
	}
	.card {
		flex: 0 0 clamp(280px, 24vw, 360px);
		background: #fff;
		border: 1px solid var(--card-line);
		border-radius: 4px;
		padding: 12px 12px 16px;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		min-height: 440px;
		transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
	}
	@media (max-width: 860px) {
		.section { padding: 40px 20px 40px calc(var(--rail-width) + 20px); }
		.section-head { width: 100%; }
		.card { flex-basis: min(82vw, 360px); min-height: 380px; }
	}
	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
		border-color: var(--card-line-hover);
	}
	.cover {
		height: 150px;
		border-radius: 2px;
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	.glyph {
		display: grid;
		place-items: center;
		opacity: 0.85;
		/* ponytail: halftone fake — real pixel art if this style sticks */
		-webkit-mask-image: radial-gradient(circle 1.2px at 2.5px 2.5px, #000 1.2px, transparent 1.7px);
		mask-image: radial-gradient(circle 1.2px at 2.5px 2.5px, #000 1.2px, transparent 1.7px);
		-webkit-mask-size: 5px 5px;
		mask-size: 5px 5px;
		user-select: none;
	}
	.card h3 {
		font-size: 21px;
		line-height: 1.22;
		letter-spacing: -0.02em;
		font-weight: 700;
		color: #111;
		margin: 18px 4px 0;
		text-wrap: balance;
	}
	.foot { margin-top: auto; padding: 24px 4px 0; }
	.authors {
		font-size: 14px;
		font-weight: 500;
		line-height: 1.45;
		color: #111;
		margin: 0 0 4px;
	}
	.date {
		margin: 0;
		font-size: 12px;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: #6b7280;
	}
	.tag {
		display: inline-block;
		margin-top: 14px;
		font-size: 13px;
		color: #111;
		background: #f5f5f4;
		border-radius: 2px;
		padding: 6px 10px;
	}
	.d-cover {
		height: 190px;
		border-radius: 3px;
		margin-bottom: 20px;
		display: flex;
		align-items: flex-end;
		padding: 12px;
	}
	.d-tag { background: rgba(255, 255, 255, 0.9); border-radius: 2px; padding: 6px 10px; font-size: 12px; color: #111; }
	.d-title { font-size: clamp(24px, 3.4vw, 34px); letter-spacing: -0.02em; line-height: 1.18; margin: 0 0 10px; color: #111; text-wrap: balance; }
	.d-meta { font-size: 14px; font-weight: 500; color: #111; margin: 0 0 18px; }
	.d-date { color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; font-size: 11px; font-weight: 400; }
	.d-para { font-size: 15px; line-height: 1.75; color: #334155; margin: 0 0 14px; max-width: 62ch; }
	@media (max-width: 860px) {
		.section-head { flex-direction: column; align-items: flex-start; gap: 8px; }
		.head-hint { white-space: normal; }
	}
	@media (prefers-reduced-motion: reduce) {
		.card { transition: none; }
	}
</style>
