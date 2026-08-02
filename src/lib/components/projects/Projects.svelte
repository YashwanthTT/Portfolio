<script lang="ts">
	let { projects } = $props<{
		projects: { name: string; tagline: string; stack: string[]; href: string }[];
	}>();
</script>

<section id="projects" class="section">
	<header class="section-head">
		<p class="eyebrow"><span class="section-dot"></span>Projects</p>
	</header>

	<div class="projects">
		{#each projects as project (project.name)}
			<a class="project" href={project.href} target="_blank" rel="noreferrer">
				<div class="project-top">
					<h3>{project.name}</h3>
					<span class="arrow" aria-hidden="true">↗</span>
				</div>
				<p>{project.tagline}</p>
				<ul class="stack">
					{#each project.stack as technology (technology)}<li>{technology}</li>{/each}
				</ul>
			</a>
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
	.arrow {
		color: var(--fg-dim);
		font-size: 12px;
		transition:
			transform 0.15s ease,
			color 0.15s ease;
	}
	.project:hover .arrow {
		transform: translate(2px, -2px);
		color: var(--accent);
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
