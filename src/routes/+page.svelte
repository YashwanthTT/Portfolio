<script lang="ts">
	import { onMount } from 'svelte';
	import Intro from '$lib/components/sections/Intro.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import OpenSource from '$lib/components/sections/OpenSource.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	type Theme = 'intro' | 'projects' | 'blog' | 'footer';

	let rail: HTMLElement | undefined;
	let activeTheme = $state<Theme>('intro');

	function updateTheme() {
		if (!rail) return;

		const position = rail.scrollLeft;
		const sections = [...rail.querySelectorAll<HTMLElement>(':scope > section, :scope > footer')];
		let nextTheme: Theme = 'intro';

		for (const section of sections) {
			const start = section.offsetLeft;
			const end = start + section.offsetWidth;
			if (position < start || position >= end) continue;

			if (section.id === 'projects') nextTheme = 'projects';
			else if (section.id === 'blog') nextTheme = 'blog';
			else if (section.tagName === 'FOOTER') nextTheme = 'footer';
			break;
		}

		activeTheme = nextTheme;
	}

	onMount(() => {
		updateTheme();
	});

	function handleWheel(event: WheelEvent) {
		if (!rail || event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

		const maxScroll = rail.scrollWidth - rail.clientWidth;
		if (maxScroll <= 0) return;
		if (
			(event.deltaY < 0 && rail.scrollLeft <= 0) ||
			(event.deltaY > 0 && rail.scrollLeft >= maxScroll)
		)
			return;

		event.preventDefault();
		rail.scrollLeft += event.deltaY;
	}
</script>

<svelte:head>
	<title>Portfolio — Minimal Box-Line</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&family=Manrope:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page">
	<aside
		class="global-rail"
		class:theme-intro={activeTheme === 'intro'}
		class:theme-projects={activeTheme === 'projects'}
		class:theme-blog={activeTheme === 'blog'}
		class:theme-footer={activeTheme === 'footer'}
		aria-hidden="true"
	>
		<span class="rail-name">Yashwanth</span>
		<span class="rail-year">© 2026</span>
	</aside>
	<main
		class="rail"
		bind:this={rail}
		onwheel={handleWheel}
		onscroll={updateTheme}
		aria-label="Portfolio sections"
		data-lenis-prevent
	>
		<Intro />
		<Projects />
		<OpenSource />
		<Footer />
	</main>
</div>

<style>
	:root {
		--paper: #faf9f7;
		--wash: #f5f3ef;
		--line: #e9e2d8;
		--card-line: #e7e2d9;
		--card-line-hover: #d6cfc2;
		--ink: #0f172a;
		--muted: #64748b;
		--accent: #ea580c;
		--accent-ink: #c2410c;
	}
	:global(*) {
		box-sizing: border-box;
	}
	:global(body) {
		margin: 0;
		background: #242220;
		color: var(--ink);
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			sans-serif;
		-webkit-font-smoothing: antialiased;
	}
	.page {
		--rail-width: clamp(48px, 4.2vw, 64px);
		position: fixed;
		inset: 0;
		background: #242220;
		overflow: hidden;
	}
	.global-rail {
		--rail-bg: #242220;
		--rail-text: #c8c0b7;
		--rail-line: #5a524d;
		position: absolute;
		inset: 0 auto 0 0;
		width: var(--rail-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: clamp(18px, 3vh, 32px) 0;
		border-right: 1px solid var(--rail-line);
		background: var(--rail-bg);
		color: var(--rail-text);
		pointer-events: none;
		transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
		z-index: 20;
	}
	.global-rail.theme-projects {
		--rail-bg: #f4f0e8;
		--rail-text: #475569;
		--rail-line: #c9c0b4;
	}
	.global-rail.theme-blog {
		--rail-bg: #dfe8e2;
		--rail-text: #475569;
		--rail-line: #b7c9c0;
	}
	.global-rail.theme-footer {
		--rail-bg: #242220;
		--rail-text: #c8c0b7;
		--rail-line: #5a524d;
	}
	.rail-name,
	.rail-year {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 10px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}
	.rail-name {
		position: absolute;
		top: 50%;
		left: 50%;
		margin: 0;
		font-family: 'Bodoni Moda', 'Times New Roman', serif;
		font-size: 14px;
		letter-spacing: 0.02em;
		transform: translate(-50%, -50%) rotate(180deg);
		white-space: nowrap;
	}
	.rail-year { margin-top: auto; }
	@media (max-width: 900px) {
		.page { --rail-width: 48px; }
	}
	@media (prefers-reduced-motion: reduce) {
		.global-rail { transition: none; }
	}
	.rail {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		overscroll-behavior-x: contain;
		touch-action: pan-x;
		scrollbar-width: thin;
		scrollbar-color: var(--card-line-hover) transparent;
	}
	.rail:focus-visible {
		outline: 2px solid var(--accent-ink);
		outline-offset: -2px;
	}
	.rail::-webkit-scrollbar {
		height: 8px;
	}
	.rail::-webkit-scrollbar-track {
		background: transparent;
	}
	.rail::-webkit-scrollbar-thumb {
		background: var(--card-line-hover);
		border-radius: 99px;
	}
	:global(a:focus-visible) {
		outline: 2px solid var(--accent-ink);
		outline-offset: 2px;
		border-radius: 4px;
	}
</style>
