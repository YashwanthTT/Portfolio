<script lang="ts">
	import { portfolio } from '$lib/data/portfolio';

	const { name, role, about, socials, experience, projects } = portfolio;
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
		</header>

		<!-- ABOUT + SOCIALS -->
		<section id="about" class="about">
			<div class="about-left">
				<p class="eyebrow">About</p>
				<h1>
					Hi, I'm {name} — a {role.toLowerCase()}
					{about.intro}
				</h1>
				{#each about.paragraphs as paragraph, index}
					<p class:muted={index === 1} class="lede">{paragraph}</p>
				{/each}

				<div class="socials-wrap">
					<p class="eyebrow">Find me online</p>
					<ul class="socials">
						{#each socials as s (s.label)}
							<li>
								<a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
									{#if s.label === 'GitHub'}
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path
												d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.85c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
											/>
										</svg>
									{:else if s.label === 'LinkedIn'}
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path
												d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.75h3v9.75H5V9.75Zm4.75 0h2.88v1.33h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.38h-3v-4.77c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52v4.85h-2.96V9.75Z"
											/>
										</svg>
									{:else if s.label === 'Twitter'}
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path
												d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.44 22H3.32l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.28 3.98H6.42L17.8 19.9Z"
											/>
										</svg>
									{:else}
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path
												d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.5-.75a.75.75 0 0 0-.75.75v.35L12 10.7l7.25-4.85V5.5a.75.75 0 0 0-.75-.75h-13ZM19.25 8.1 12.42 12.7a.75.75 0 0 1-.84 0L4.75 8.1v10.4c0 .41.34.75.75.75h13a.75.75 0 0 0 .75-.75V8.1Z"
											/>
										</svg>
									{/if}
									<span>{s.label}</span>
									<span class="arrow" aria-hidden="true">↗</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
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

	/* ABOUT */
	.about {
		padding-bottom: 96px;
		border-bottom: 1px solid var(--line);
	}

	.about-left {
		width: 100%;
		max-width: 760px;
		margin: 0 auto;
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

	.socials-wrap {
		margin-top: 36px;
	}

	.socials-wrap .eyebrow {
		margin-bottom: 12px;
	}

	.socials {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.socials a {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 9px 12px;
		border-radius: 8px;
		font-size: 14px;
		color: var(--fg-muted);
		transition:
			color 0.15s ease,
			background 0.15s ease;
	}

	.socials svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
		flex: 0 0 auto;
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
		.about {
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
