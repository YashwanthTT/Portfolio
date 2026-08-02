<script lang="ts">
	let { experience } = $props<{
		experience: {
			company: string;
			role: string;
			period: string;
			location: string;
			points: string[];
		}[];
	}>();
</script>

<section id="experience" class="section">
	<header class="section-head">
		<p class="eyebrow">Experience</p>
	</header>

	<ol class="timeline">
		{#each experience as job (job.company)}
			<li class="job">
				<div class="job-meta">
					<span class="job-period">{job.period}</span>
					<span class="job-location">{job.location}</span>
				</div>
				<div class="job-body">
					<h3>{job.role} <span class="at">@</span> <span class="company">{job.company}</span></h3>
					<ul>
						{#each job.points as point (point)}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	.section {
		padding: 80px 0;
		border-bottom: 1px solid var(--line);
	}
	.eyebrow,
	.job-meta {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
	}
	.eyebrow {
		margin: 0 0 20px;
		color: var(--fg-dim);
		font-size: 13px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.section-head {
		margin-bottom: 40px;
	}
	.timeline {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.job {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 32px;
		padding: 24px 0;
		border-top: 1px solid var(--line);
	}
	.job:first-child {
		padding-top: 0;
		border-top: none;
	}
	.job-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 2px;
		color: var(--fg-dim);
		font-size: 12px;
		letter-spacing: 0.02em;
	}
	.job-period {
		color: var(--fg-muted);
	}
	.job-body h3 {
		margin: 0 0 12px;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	.at {
		color: var(--fg-dim);
		font-weight: 400;
	}
	.company {
		color: var(--fg);
	}
	.job-body ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.job-body li {
		position: relative;
		margin-bottom: 6px;
		padding-left: 18px;
		color: var(--fg-body);
		font-size: 14px;
		line-height: 1.6;
	}
	.job-body li::before {
		content: '';
		position: absolute;
		top: 0.7em;
		left: 0;
		width: 6px;
		height: 1px;
		background: var(--fg-dim);
	}
	@media (max-width: 760px) {
		.section {
			padding: 56px 0;
		}
		.section-head {
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
	}
</style>
