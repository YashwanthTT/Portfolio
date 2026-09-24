<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (mediaQuery.matches) return;

		let frame = 0;
		let disposed = false;
		let lenis: import('lenis').default | undefined;

		import('lenis').then(({ default: Lenis }) => {
			lenis = new Lenis();
			if (disposed) {
				lenis.destroy();
				return;
			}

			const raf = (time: number) => {
				lenis?.raf(time);
				frame = requestAnimationFrame(raf);
			};

			frame = requestAnimationFrame(raf);
		});

		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			lenis?.destroy();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(html.lenis) {
		height: auto;
	}

	:global(.lenis.lenis-smooth) {
		scroll-behavior: auto !important;
	}

	:global(.lenis.lenis-stopped) {
		overflow: hidden;
	}
</style>
