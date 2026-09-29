<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export type HoverImgProject = {
		title: string;
		label: string;
		accent: string;
		stack: string;
	};

	let {
		projects = [] as HoverImgProject[],
		isContained = false,
		disabled = false,
		onActivate = (_i: number) => {}
	}: {
		projects?: HoverImgProject[];
		isContained?: boolean;
		disabled?: boolean;
		onActivate?: (i: number) => void;
	} = $props();

	let container: HTMLElement | undefined = $state();
	let projectsEl: HTMLElement | undefined = $state();
	let thumbWrap: HTMLElement | undefined = $state();

	let xTo: ((v: number) => void) | null = null;
	let yTo: ((v: number) => void) | null = null;

	onMount(() => {
		const wrap = thumbWrap;
		const host = projectsEl;
		if (!wrap || !host) return;

		const cols = gsap.utils.toArray<HTMLElement>('.hi-col', host);
		const thumbs = gsap.utils.toArray<HTMLElement>('.hi-thumb', wrap);

		gsap.set(wrap, { scale: 0, xPercent: -50, yPercent: -50 });

		// signature smooth trailing follow — power3.out, long lag for a buttery drift
		xTo = gsap.quickTo(wrap, 'x', { duration: 0.6, ease: 'power3.out' });
		yTo = gsap.quickTo(wrap, 'y', { duration: 0.6, ease: 'power3.out' });

		const onMove = (e: MouseEvent) => {
			let x = e.clientX;
			let y = e.clientY;
			if (isContained && container) {
				const r = container.getBoundingClientRect();
				const hw = wrap.offsetWidth / 2;
				const hh = wrap.offsetHeight / 2;
				const inset = 16;
				x = Math.max(hw + inset, Math.min(r.width - hw - inset, e.clientX - r.left));
				y = Math.max(hh + inset, Math.min(r.height - hh - inset, e.clientY - r.top));
			}
			xTo?.(x);
			yTo?.(y);
		};

		const onLeave = () => {
			gsap.to(wrap, { scale: 0, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
		};

		const onEnter = (i: number) => () => {
			gsap.to(wrap, { scale: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
			gsap.to(thumbs, { yPercent: -100 * i, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
		};

		host.addEventListener('mousemove', onMove);
		host.addEventListener('mouseleave', onLeave);
		const cleanups: (() => void)[] = [];
		cols.forEach((col, i) => {
			const enter = onEnter(i);
			col.addEventListener('mouseenter', enter);
			cleanups.push(() => col.removeEventListener('mouseenter', enter));
		});

		return () => {
			host.removeEventListener('mousemove', onMove);
			host.removeEventListener('mouseleave', onLeave);
			cleanups.forEach((c) => c());
		};
	});

	// hide the floating preview when the host disables it (e.g. detail drawer open)
	$effect(() => {
		if (disabled && thumbWrap) {
			gsap.to(thumbWrap, { scale: 0, duration: 0.3, ease: 'power3.out', overwrite: 'auto' });
		}
	});

	function activate(i: number) {
		// dismiss the preview immediately so it never floats over the drawer
		if (thumbWrap) gsap.to(thumbWrap, { scale: 0, duration: 0.22, ease: 'power3.out', overwrite: 'auto' });
		onActivate(i);
	}
</script>

<div class="hi-container" class:hi-contained={isContained} bind:this={container}>
	<div class="hi-projects" bind:this={projectsEl}>
		{#each projects as p, i}
			<button
				class="hi-col"
				style="--accent:{p.accent}"
				onclick={() => activate(i)}
				aria-haspopup="dialog"
			>
				<span class="hi-top mono">
					<span class="hi-idx"><i class="hi-dot"></i>{String(i + 1).padStart(2, '0')}</span>
					<span class="hi-go" aria-hidden="true">↗</span>
				</span>
				<span class="hi-name">
					<h3 class="hi-title">{p.title}</h3>
					<span class="hi-rule" aria-hidden="true"></span>
				</span>
				<p class="hi-stack mono">{p.stack}</p>
			</button>
		{/each}
	</div>

	<div class="hi-thumb-wrap" bind:this={thumbWrap} aria-hidden="true">
		{#each projects as p, i}
			<div class="hi-thumb" style="--accent:{p.accent}">
				<div class="hi-thumb-top mono">
					<span class="hi-thumb-idx"><i class="hi-thumb-dot"></i>{String(i + 1).padStart(2, '0')}</span>
					<span class="hi-thumb-mark">Selected work</span>
				</div>
				<div class="hi-thumb-body">
					<h4 class="hi-thumb-title">{p.title}</h4>
					<span class="hi-thumb-rule" aria-hidden="true"></span>
					<p class="hi-thumb-desc">{p.label}</p>
				</div>
				<span class="hi-thumb-stack mono">{p.stack}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	/* warm editorial palette — matches the Intro page (warm near-black, cream, hairlines) */
	.hi-container {
		--p-ink: #242220;
		--p-muted: #8a8079;
		--p-line: #d9d0c2;
		--p-line-strong: #c9c0b4;
		--p-card: #efe7d8;
		position: relative;
		width: 100%;
	}
	.hi-contained .hi-thumb-wrap {
		position: absolute;
	}
	.mono {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	/* ---- tight hairline columns: concise, precise, horizontal ---- */
	.hi-projects {
		display: flex;
		width: 100%;
		border-top: 1px solid var(--p-line);
		border-bottom: 1px solid var(--p-line);
	}
	.hi-col {
		flex: 1 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 16px;
		padding: 18px 16px 16px;
		border-left: 1px solid var(--p-line);
		background: transparent;
		font: inherit;
		color: inherit;
		text-align: left;
		cursor: pointer;
		position: relative;
		min-height: 248px;
		transition:
			opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hi-col:first-child {
		border-left: none;
	}
	/* gently focus the active column by dimming its siblings */
	.hi-projects:hover .hi-col {
		opacity: 0.5;
	}
	.hi-projects:hover .hi-col:hover {
		opacity: 1;
		background: color-mix(in srgb, var(--accent) 5%, transparent);
	}

	.hi-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--p-muted);
	}
	.hi-idx {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: color 0.5s ease;
	}
	.hi-col:hover .hi-idx {
		color: var(--accent);
	}
	.hi-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hi-col:hover .hi-dot {
		transform: scale(1.5);
	}
	.hi-go {
		color: var(--accent);
		opacity: 0;
		transform: translate(-4px, 4px);
		transition:
			opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hi-col:hover .hi-go {
		opacity: 1;
		transform: translate(1px, -1px);
	}

	.hi-name {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.hi-title {
		font-family: 'Bodoni Moda', 'Times New Roman', serif;
		font-size: clamp(24px, 2.3vw, 32px);
		font-weight: 500;
		line-height: 1.04;
		letter-spacing: -0.015em;
		color: var(--p-ink);
		margin: 0;
		hyphens: none;
		text-wrap: balance;
		/* the “left” motion — subtle, precise */
		transform: translateX(0);
		transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hi-col:hover .hi-title {
		transform: translateX(-6px);
	}
	.hi-rule {
		display: block;
		height: 1px;
		width: 0;
		background: var(--accent);
		transition: width 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hi-col:hover .hi-rule {
		width: 100%;
	}

	.hi-stack {
		margin: 0;
		padding-top: 12px;
		border-top: 1px solid var(--p-line);
		color: var(--p-muted);
		font-family: 'DM Sans', 'Inter', sans-serif;
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		transition: color 0.5s ease;
	}
	.hi-col:hover .hi-stack {
		color: #6a6058;
	}

	/* ---- mouse-following gallery card (ported from ObsidianUI hover-img) ---- */
	.hi-thumb-wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 280px;
		height: 380px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		pointer-events: none;
		transform-origin: center center;
		z-index: 30;
		border-radius: 2px;
		background: var(--p-card);
		border: 1px solid var(--p-line-strong);
		box-shadow:
			0 32px 64px -24px rgba(36, 34, 32, 0.34),
			0 2px 8px rgba(36, 34, 32, 0.08);
		will-change: transform;
	}
	.hi-thumb {
		position: relative;
		width: 100%;
		height: 100%;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 24px 24px 22px;
		background: var(--p-card);
		color: var(--p-ink);
	}
	.hi-thumb-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--p-muted);
	}
	.hi-thumb-idx {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}
	.hi-thumb-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
	}
	.hi-thumb-mark {
		color: var(--p-muted);
	}
	.hi-thumb-body {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.hi-thumb-title {
		font-family: 'Bodoni Moda', 'Times New Roman', serif;
		font-size: clamp(28px, 2.6vw, 36px);
		font-weight: 500;
		line-height: 1.02;
		letter-spacing: -0.02em;
		margin: 0;
		text-wrap: balance;
		color: var(--p-ink);
	}
	.hi-thumb-rule {
		display: block;
		height: 1px;
		width: 40px;
		background: var(--accent);
	}
	.hi-thumb-desc {
		margin: 0;
		font-family: 'Manrope', 'Inter', sans-serif;
		font-size: 13px;
		font-weight: 400;
		line-height: 1.55;
		letter-spacing: -0.005em;
		color: #6a6058;
		text-wrap: pretty;
	}
	.hi-thumb-stack {
		border-top: 1px solid var(--p-line);
		padding-top: 14px;
		color: var(--p-muted);
		font-family: 'DM Sans', 'Inter', sans-serif;
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	@media (max-width: 860px) {
		.hi-projects {
			overflow-x: auto;
			scrollbar-width: none;
		}
		.hi-projects::-webkit-scrollbar {
			display: none;
		}
		.hi-col {
			flex: 0 0 78vw;
			max-width: 320px;
			min-height: 220px;
		}
		.hi-thumb-wrap {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hi-col,
		.hi-title,
		.hi-stack,
		.hi-rule,
		.hi-dot,
		.hi-go {
			transition: none;
		}
	}
</style>
