<script lang="ts">
	const name = 'Yashwanth';
	const role = 'Software Engineer';

	const socials = [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/' },
		{ label: 'Twitter', href: 'https://twitter.com/' },
		{ label: 'Email', href: 'mailto:hello@example.com' }
	];

	const experience = [
		{
			company: 'Acme Corp',
			role: 'Senior Software Engineer',
			period: '2024 — Present',
			location: 'Remote',
			points: [
				'Lead the design and build of a customer-facing analytics platform used by 10k+ users.',
				'Reduced p95 page load by 38% by rearchitecting the data-fetching layer.'
			]
		},
		{
			company: 'Northwind Labs',
			role: 'Software Engineer',
			period: '2022 — 2024',
			location: 'Bangalore, IN',
			points: [
				'Built and shipped the payments microservice handling $2M+ monthly volume.',
				'Migrated the legacy monolith to a typed, modular TypeScript codebase.'
			]
		},
		{
			company: 'Contoso',
			role: 'Frontend Engineer Intern',
			period: '2021 — 2022',
			location: 'Hybrid',
			points: [
				'Implemented the marketing site redesign with a focus on accessibility and Core Web Vitals.'
			]
		}
	];

	const projects = [
		{
			name: 'Lumen',
			tagline: 'A minimal, type-safe ORM for the edge.',
			stack: ['TypeScript', 'SQLite', 'WASM'],
			href: '#'
		},
		{
			name: 'Drift',
			tagline: 'Realtime collaborative whiteboard with CRDT sync.',
			stack: ['Rust', 'WebSockets', 'Svelte'],
			href: '#'
		},
		{
			name: 'Ink',
			tagline: 'Markdown-first writing app with local-first sync.',
			stack: ['Tauri', 'CRDT', 'Zustand'],
			href: '#'
		},
		{
			name: 'Halo',
			tagline: 'CLI for visualising deploys across environments.',
			stack: ['Go', 'Bubble Tea'],
			href: '#'
		}
	];
</script>

<svelte:head>
	<title>{name} — {role}</title>
</svelte:head>

<main>
	<div class="grid-bg" aria-hidden="true"></div>

	<div class="page">
		<header class="topbar">
			<a class="brand" href="/">
				<span class="dot"></span>
				<span>{name.toLowerCase()}.dev</span>
			</a>
			<nav class="nav">
				<a href="#about">About</a>
				<a href="#experience">Experience</a>
				<a href="#projects">Projects</a>
			</nav>
		</header>

		<!-- ABOUT + SOCIALS -->
		<section id="about" class="about">
			<div class="about-left">
				<p class="eyebrow">About</p>
				<h1>
					Hi, I'm {name} — a {role.toLowerCase()} building thoughtful, fast, well-crafted software for
					the web.
				</h1>
				<p class="lede">
					I care about the small details — typography, motion, performance, and the quiet craft of a
					clean interface. Most of my time goes into building tools, interfaces, and infrastructure
					that feel effortless to use.
				</p>
				<p class="lede muted">
					Currently exploring systems design, edge runtimes, and the intersection of local-first
					software with the modern web.
				</p>
			</div>

			<aside class="about-right">
				<p class="eyebrow">Elsewhere</p>
				<ul class="socials">
					{#each socials as s}
						<li>
							<a href={s.href} target="_blank" rel="noreferrer">
								<span>{s.label}</span>
								<span class="arrow" aria-hidden="true">↗</span>
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</section>

		<!-- EXPERIENCE -->
		<section id="experience" class="section">
			<header class="section-head">
				<p class="eyebrow">Experience</p>
				<h2>Where I've worked.</h2>
			</header>

			<ol class="timeline">
				{#each experience as job}
					<li class="job">
						<div class="job-meta">
							<span class="job-period">{job.period}</span>
							<span class="job-location">{job.location}</span>
						</div>
						<div class="job-body">
							<h3>
								{job.role}
								<span class="at">@</span>
								<span class="company">{job.company}</span>
							</h3>
							<ul>
								{#each job.points as p}
									<li>{p}</li>
								{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ol>
		</section>

		<!-- PROJECTS -->
		<section id="projects" class="section">
			<header class="section-head">
				<p class="eyebrow">Projects</p>
				<h2>Selected work.</h2>
			</header>

			<div class="projects">
				{#each projects as p}
					<a class="project" href={p.href} target="_blank" rel="noreferrer">
						<div class="project-top">
							<h3>{p.name}</h3>
							<span class="arrow" aria-hidden="true">↗</span>
						</div>
						<p>{p.tagline}</p>
						<ul class="stack">
							{#each p.stack as s}
								<li>{s}</li>
							{/each}
						</ul>
					</a>
				{/each}
			</div>
		</section>

		<footer class="footer">
			<span>© {new Date().getFullYear()} {name}</span>
			<span class="muted">Built with SvelteKit</span>
		</footer>
	</div>
</main>

<style>
	:global(:root) {
		--bg: #0a0a0a;
		--bg-elev: #111111;
		--line: rgba(255, 255, 255, 0.08);
		--line-strong: rgba(255, 255, 255, 0.14);
		--fg: #ededed;
		--fg-muted: #8a8a8a;
		--fg-dim: #5a5a5a;
		--accent: #c7f284;
		--radius: 14px;
		--max: 980px;
	}

	:global(html, body) {
		background: var(--bg);
		color: var(--fg);
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Helvetica,
			Arial,
			sans-serif;
		font-feature-settings: 'cv11', 'ss01', 'ss03';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(::selection) {
		background: var(--accent);
		color: #0a0a0a;
	}

	main {
		position: relative;
		min-height: 100vh;
		isolation: isolate;
	}

	/* GRID PATTERN BACKGROUND */
	.grid-bg {
		position: fixed;
		inset: 0;
		z-index: -1;
		background-color: var(--bg);
		background-image:
			linear-gradient(to right, var(--line) 1px, transparent 1px),
			linear-gradient(to bottom, var(--line) 1px, transparent 1px);
		background-size: 56px 56px;
		mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
		-webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
		pointer-events: none;
	}

	.page {
		max-width: var(--max);
		margin: 0 auto;
		padding: 28px 28px 80px;
	}

	/* TOPBAR */
	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 0 64px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
	}

	.brand .dot {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 0 4px rgba(199, 242, 132, 0.12);
	}

	.nav {
		display: flex;
		gap: 28px;
		font-size: 14px;
		color: var(--fg-muted);
	}

	.nav a {
		transition: color 0.15s ease;
	}

	.nav a:hover {
		color: var(--fg);
	}

	/* ABOUT */
	.about {
		display: grid;
		grid-template-columns: 1fr 220px;
		gap: 56px;
		padding-bottom: 96px;
		border-bottom: 1px solid var(--line);
	}

	.eyebrow {
		font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 12px;
		color: var(--fg-dim);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin: 0 0 20px;
	}

	.about h1 {
		font-size: clamp(28px, 4.2vw, 44px);
		line-height: 1.15;
		letter-spacing: -0.025em;
		font-weight: 500;
		margin: 0 0 24px;
		color: var(--fg);
	}

	.lede {
		font-size: 16px;
		line-height: 1.65;
		color: #c4c4c4;
		margin: 0 0 14px;
		max-width: 60ch;
	}

	.lede.muted {
		color: var(--fg-muted);
	}

	.about-right .eyebrow {
		color: var(--fg-dim);
	}

	.socials {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 12px;
		margin: 0 -12px;
		border-radius: 8px;
		font-size: 14px;
		color: var(--fg-muted);
		transition:
			color 0.15s ease,
			background 0.15s ease;
	}

	.socials a:hover {
		color: var(--fg);
		background: rgba(255, 255, 255, 0.03);
	}

	.arrow {
		font-size: 12px;
		color: var(--fg-dim);
		transition:
			transform 0.15s ease,
			color 0.15s ease;
	}

	.socials a:hover .arrow,
	.project:hover .arrow {
		transform: translate(2px, -2px);
		color: var(--accent);
	}

	/* SECTIONS */
	.section {
		padding: 80px 0;
		border-bottom: 1px solid var(--line);
	}

	.section:last-of-type {
		border-bottom: none;
	}

	.section-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 24px;
		margin-bottom: 40px;
	}

	.section-head h2 {
		font-size: clamp(22px, 2.6vw, 28px);
		font-weight: 500;
		letter-spacing: -0.02em;
		margin: 0;
	}

	/* EXPERIENCE */
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.job {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 32px;
		padding: 24px 0;
		border-top: 1px solid var(--line);
	}

	.job:first-child {
		border-top: none;
		padding-top: 0;
	}

	.job-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 12px;
		color: var(--fg-dim);
		letter-spacing: 0.02em;
		padding-top: 2px;
	}

	.job-period {
		color: var(--fg-muted);
	}

	.job-body h3 {
		font-size: 16px;
		font-weight: 500;
		margin: 0 0 12px;
		letter-spacing: -0.01em;
	}

	.job-body h3 .at {
		color: var(--fg-dim);
		font-weight: 400;
	}

	.job-body h3 .company {
		color: var(--fg);
	}

	.job-body ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.job-body li {
		position: relative;
		padding-left: 18px;
		font-size: 14px;
		line-height: 1.6;
		color: #c4c4c4;
		margin-bottom: 6px;
	}

	.job-body li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.7em;
		width: 6px;
		height: 1px;
		background: var(--fg-dim);
	}

	/* PROJECTS */
	.projects {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
	}

	.project {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;
		background: var(--bg);
		transition: background 0.15s ease;
		min-height: 160px;
	}

	.project:hover {
		background: var(--bg-elev);
	}

	.project-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.project h3 {
		margin: 0;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.project p {
		margin: 0;
		font-size: 14px;
		line-height: 1.55;
		color: var(--fg-muted);
		flex: 1;
	}

	.stack {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.stack li {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 11px;
		color: var(--fg-dim);
		padding: 4px 8px;
		border: 1px solid var(--line);
		border-radius: 999px;
	}

	/* FOOTER */
	.footer {
		display: flex;
		justify-content: space-between;
		padding-top: 56px;
		font-size: 12px;
		color: var(--fg-dim);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
	}

	.footer .muted {
		color: var(--fg-dim);
	}

	/* RESPONSIVE */
	@media (max-width: 760px) {
		.page {
			padding: 20px 20px 60px;
		}
		.topbar {
			padding-bottom: 48px;
		}
		.nav {
			gap: 18px;
		}
		.about {
			grid-template-columns: 1fr;
			gap: 40px;
			padding-bottom: 64px;
		}
		.section {
			padding: 56px 0;
		}
		.section-head {
			flex-direction: column;
			gap: 8px;
			margin-bottom: 28px;
		}
		.job {
			grid-template-columns: 1fr;
			gap: 12px;
		}
		.job-meta {
			flex-direction: row;
			gap: 12px;
		}
		.projects {
			grid-template-columns: 1fr;
		}
		.footer {
			flex-direction: column;
			gap: 4px;
		}
	}
</style>
