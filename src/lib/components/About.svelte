<script lang="ts">
	let { name, role, about, socials } = $props<{
		name: string;
		role: string;
		about: { intro: string; paragraphs: string[] };
		socials: { label: string; href: string }[];
	}>();
</script>

<section id="about" class="about">
	<div class="about-content">
		<div class="about-copy">
			<p class="eyebrow">About me</p>
			<h1>Hi, I'm {name} <span class="dash">—</span> a {role.toLowerCase()} {about.intro}</h1>
			{#each about.paragraphs as paragraph, index (paragraph)}
				<p class:muted={index === 1} class="lede">{paragraph}</p>
			{/each}
		</div>

		<div class="socials-wrap">
			<ul class="socials">
				{#each socials as social (social.label)}
					<li>
						<a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
							{#if social.label === 'GitHub'}
								<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.85c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
									/></svg
								>
							{:else if social.label === 'LinkedIn'}
								<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.75h3v9.75H5V9.75Zm4.75 0h2.88v1.33h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.38h-3v-4.77c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52v4.85h-2.96V9.75Z"
									/></svg
								>
							{:else if social.label === 'Twitter'}
								<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.44 22H3.32l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.28 3.98H6.42L17.8 19.9Z"
									/></svg
								>
							{:else}
								<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.5-.75a.75.75 0 0 0-.75.75v.35L12 10.7l7.25-4.85V5.5a.75.75 0 0 0-.75-.75h-13ZM19.25 8.1 12.42 12.7a.75.75 0 0 1-.84 0L4.75 8.1v10.4c0 .41.34.75.75.75h13a.75.75 0 0 0 .75-.75V8.1Z"
									/></svg
								>
							{/if}
							<span>{social.label}</span>
							<span class="arrow" aria-hidden="true">↗</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.about {
		padding-bottom: 96px;
		border-bottom: 1px solid var(--line);
	}

	.about-content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 220px;
		align-items: center;
		gap: clamp(36px, 7vw, 80px);
		max-width: var(--max);
		margin: 0;
	}

	.about-copy {
		max-width: 680px;
	}

	.eyebrow {
		margin: 0 0 20px;
		color: var(--fg-muted);
		font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 28px;
		color: var(--fg);
		font-size: clamp(28px, 4vw, 40px);
		font-weight: 500;
		line-height: 1.18;
		letter-spacing: -0.025em;
	}

	.dash {
		color: var(--fg-dim);
	}

	.lede {
		max-width: 62ch;
		margin: 0 0 14px;
		color: var(--fg-body);
		font-size: 16px;
		line-height: 1.7;
	}

	.lede.muted {
		color: var(--fg-muted);
	}

	.socials-wrap {
		padding: 8px 0;
	}

	.socials {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 11px 0;
		color: var(--fg-body);
		font-size: 14px;
		transition:
			color 0.15s ease,
			background 0.15s ease;
	}

	.socials a:hover {
		color: var(--fg);
	}

	.social-icon {
		width: 30px;
		height: 30px;
		padding: 6px;
		border: 1px solid var(--line);
		border-radius: 8px;
		background: var(--icon-bg);
		fill: currentColor;
		flex: 0 0 auto;
		transition:
			border-color 0.15s ease,
			background 0.15s ease;
	}

	.arrow {
		color: var(--fg-dim);
		font-size: 12px;
		transition:
			transform 0.15s ease,
			color 0.15s ease;
	}

	.socials a:hover .arrow {
		transform: translate(2px, -2px);
		color: var(--accent);
	}

	.socials a:hover .social-icon {
		border-color: var(--line);
		background: rgba(199, 242, 132, 0.07);
	}

	@media (max-width: 760px) {
		.about {
			padding-bottom: 64px;
		}

		.about-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.socials-wrap {
			padding-top: 8px;
		}

		h1 {
			font-size: clamp(28px, 8vw, 34px);
		}
	}
</style>
