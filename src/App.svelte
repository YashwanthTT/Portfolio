<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { portfolio } from '$lib/content/portfolio';

	const { name, role, about, socials, experience, projects } = portfolio;

	$effect(() => {
		document.title = `${name} — ${role}`;
	});
</script>

<main>
	<div class="grid-bg" aria-hidden="true"></div>

	<div class="page">
		<Header {name} />
		<About {name} {role} {about} {socials} />
		<Experience {experience} />
		<Projects {projects} />
		<Footer {name} />
	</div>
</main>

<style>
	:global(:root) {
		--bg: #0a0a0a;
		--bg-elev: #111111;
		--line: rgba(255, 255, 255, 0.08);
		--fg: #ededed;
		--fg-body: #d0d0d0;
		--fg-muted: #9b9b9b;
		--fg-dim: #737373;
		--control-bg: rgba(255, 255, 255, 0.035);
		--control-hover: rgba(255, 255, 255, 0.05);
		--icon-bg: rgba(255, 255, 255, 0.025);
		--accent: #c7f284;
		--selection-bg: #c7f284;
		--radius: 14px;
		--max: 980px;
	}

	:global(:root[data-theme='light']) {
		--bg: #f3f4ee;
		--bg-elev: #fffdf8;
		--line: rgba(31, 42, 31, 0.13);
		--line-strong: rgba(31, 42, 31, 0.24);
		--fg: #1d261d;
		--fg-body: #435043;
		--fg-muted: #687468;
		--fg-dim: #737e73;
		--accent: #71983c;
		--selection-bg: #ffcf5c;
		--control-bg: rgba(255, 255, 255, 0.55);
		--control-hover: rgba(29, 38, 29, 0.06);
		--icon-bg: rgba(255, 255, 255, 0.62);
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
		line-height: 1.5;
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
		background: var(--selection-bg);
		color: #0a0a0a;
	}

	main {
		position: relative;
		min-height: 100vh;
		isolation: isolate;
	}
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
	@media (max-width: 760px) {
		.page {
			padding: 20px 20px 60px;
		}
	}
</style>
