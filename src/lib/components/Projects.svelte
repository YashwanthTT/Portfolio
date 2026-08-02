<script lang="ts">
	let { projects } = $props<{
		projects: {
			name: string;
			tagline: string;
			stack: string[];
			href: string;
		}[];
	}>();
</script>

<section id="projects" class="section">
	<header class="section-head">
		<p class="eyebrow"><span class="section-dot"></span>Projects</p>
	</header>

	<div class="projects">
		{#each projects as project (project.name)}
			<article class="project">
				<div class="project-top">
					<h3>{project.name}</h3>
					<div class="project-actions">
						<a
							href={project.href}
							target="_blank"
							rel="noreferrer"
							aria-label={`${project.name} on GitHub`}
							title="View on GitHub"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true"
								><path
									d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.85c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
								/></svg
							>
							<span>Code</span>
						</a>
					</div>
				</div>
				<p>{project.tagline}</p>
				<ul class="stack">
					{#each project.stack as technology (technology)}<li>{technology}</li>{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>

<style>
	.section {
		padding: 80px 0;
	}
	.eyebrow {
		display: flex;
		align-items: center;
		gap: 12px;
		margin: 0 0 20px;
		color: var(--fg-muted);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.section-dot {
		width: 10px;
		height: 10px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--accent);
		opacity: 0.78;
	}
	.section-head {
		margin-bottom: 40px;
	}
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
		gap: 1px;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--line);
	}
	.project {
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-height: 160px;
		padding: 24px;
		background: var(--bg);
		transition: background 0.15s ease;
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
	}
	.project p {
		flex: 1;
		margin: 0;
		color: var(--fg-body);
		font-size: 15px;
		line-height: 1.6;
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.stack li {
		padding: 4px 8px;
		border: 1px solid var(--line);
		border-radius: 999px;
		color: var(--fg-dim);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 11px;
	}
	.project-actions {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.project-actions a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 8px;
		border: 1px solid var(--line);
		border-radius: 8px;
		color: var(--fg-dim);
		font-size: 11px;
		transition:
			color 0.15s ease,
			border-color 0.15s ease,
			background 0.15s ease;
	}
	.project-actions svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
	}
	.project-actions a:hover {
		border-color: var(--line-strong);
		background: var(--icon-bg);
		color: var(--fg);
	}
	@media (max-width: 760px) {
		.section {
			padding: 56px 0;
		}
		.section-head {
			margin-bottom: 28px;
		}
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
