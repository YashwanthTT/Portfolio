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
			<h1>
				Hi, I'm {name} <span class="dash">—</span><br />
				a {role.toLowerCase()} {about.intro}
			</h1>
			{#each about.paragraphs as paragraph, index (paragraph)}
				<p class:muted={index === 1} class="lede">{paragraph}</p>
			{/each}
		</div>

		<div class="socials-wrap">
			<div class="socials-heading">
				<span class="socials-index">01</span>
				<p class="eyebrow">Find me online</p>
			</div>
			<ul class="socials">
				{#each socials as social (social.label)}
					<li>
						<a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
							{#if social.label === 'GitHub'}
								<svg viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.85c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
									/></svg
								>
							{:else if social.label === 'LinkedIn'}
								<svg viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.75h3v9.75H5V9.75Zm4.75 0h2.88v1.33h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.38h-3v-4.77c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52v4.85h-2.96V9.75Z"
									/></svg
								>
							{:else if social.label === 'Twitter'}
								<svg viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.44 22H3.32l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.28 3.98H6.42L17.8 19.9Z"
									/></svg
								>
							{:else}
								<svg viewBox="0 0 24 24" aria-hidden="true"
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
		align-items: start;
		gap: clamp(48px, 9vw, 112px);
		max-width: 900px;
		margin: 0 auto;
	}

	.about-copy {
		max-width: 680px;
	}

	.eyebrow {
		margin: 0 0 20px;
		color: var(--fg-dim);
		font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 28px;
		color: var(--fg);
		font-size: clamp(32px, 5vw, 52px);
		font-weight: 500;
		line-height: 1.1;
		letter-spacing: -0.035em;
	}

	.dash {
		color: var(--fg-dim);
	}

	.lede {
		max-width: 60ch;
		margin: 0 0 14px;
		color: #c4c4c4;
		font-size: 16px;
		line-height: 1.65;
	}

	.lede.muted {
		color: var(--fg-muted);
	}

	.socials-wrap {
		padding-left: 24px;
		border-left: 1px solid var(--line-strong);
	}

	.socials-heading {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.socials-wrap .eyebrow {
		margin-bottom: 16px;
	}

	.socials-index {
		align-self: flex-start;
		padding-top: 1px;
		color: var(--accent);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 11px;
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
		border-bottom: 1px solid var(--line);
		color: var(--fg-muted);
		font-size: 14px;
		transition:
			color 0.15s ease,
			background 0.15s ease;
	}

	.socials a:hover {
		color: var(--fg);
		border-color: var(--line-strong);
	}

	.socials svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
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

	@media (max-width: 760px) {
		.about {
			padding-bottom: 64px;
		}

		.about-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.socials-wrap {
			padding-top: 24px;
			padding-left: 0;
			border-top: 1px solid var(--line-strong);
			border-left: 0;
		}

		h1 {
			font-size: clamp(30px, 9vw, 42px);
		}
	}
</style>
