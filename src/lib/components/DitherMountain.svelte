<script lang="ts">
	import { onMount } from 'svelte';

	let { seed = 1 }: { seed?: number } = $props();
	let canvas: HTMLCanvasElement | undefined = $state();

	const BAYER = [
		[0, 8, 2, 10],
		[12, 4, 14, 6],
		[3, 11, 1, 9],
		[15, 7, 13, 5]
	];

	function mulberry32(a: number) {
		return () => {
			a |= 0;
			a = (a + 0x6d2b79f5) | 0;
			let t = Math.imul(a ^ (a >>> 15), 1 | a);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	// ponytail: hash noise (not sequential rand) so every render is identical — no flicker
	function hash(x: number, y: number, s: number) {
		let h = (x * 374761393 + y * 668265263 + s * 974634211) | 0;
		h = Math.imul(h ^ (h >>> 13), 1274126177);
		return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
	}

	function draw() {
		if (!canvas) return;
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		const w = canvas.clientWidth;
		const h = canvas.clientHeight;
		if (!w || !h) return;
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.scale(dpr, dpr);

		const cols = 52;
		const rows = 30;
		const cw = w / cols;
		const ch = h / rows;
		const r = Math.min(cw, ch) * 0.34;
		const rand = mulberry32(seed * 1013 + 77);

		const px = 0.42 + rand() * 0.18;
		const peakH = 0.52 + rand() * 0.14;
		const spread = 0.32 + rand() * 0.1;
		const cx = 0.2 + rand() * 0.15;
		const cy = 0.16 + rand() * 0.12;
		const cw2 = 0.07 + rand() * 0.04;

		const ridge: number[] = [];
		let j = 0;
		for (let x = 0; x < cols; x++) {
			const fx = x / cols;
			j = j * 0.55 + (rand() - 0.5) * 0.45;
			const main = Math.max(0, 1 - Math.abs(fx - px) / spread);
			const second = Math.max(0, 1 - Math.abs(fx - (px + 0.24)) / 0.18) * 0.4;
			const height = Math.min(1, main * peakH + second * peakH + j * 0.06);
			ridge[x] = rows - 1 - height * rows * 0.82;
		}

		ctx.fillStyle = '#edf1f6';
		ctx.fillRect(0, 0, w, h);

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const fx = x / cols;
				const fy = y / rows;
				const t = (BAYER[y & 3][x & 3] + 0.5) / 16;
				const n = hash(x, y, seed);
				const dx = (fx - cx) / cw2;
				const dy = (fy - cy) / (cw2 * 0.45);
				const inCloud = dx * dx + dy * dy < 1;
				let dot = '#cbd5e1';
				if (y < ridge[x]) {
					if (inCloud) dot = n < t ? '#ffffff' : '#dbe4ee';
					else dot = n < t * 0.35 ? '#ffffff' : '#d3dce6';
				} else {
					const d = Math.min(1, (y - ridge[x]) / Math.max(1, rows - ridge[x]));
					const band = d < 0.34 ? '#1c1917' : d < 0.58 ? '#ea580c' : d < 0.78 ? '#a3e635' : '#fef9c3';
					dot = n < t ? band : '#e4e9f0';
				}
				ctx.fillStyle = dot;
				ctx.beginPath();
				ctx.arc(x * cw + cw / 2, y * ch + ch / 2, r, 0, Math.PI * 2);
				ctx.fill();
			}
		}
	}

	onMount(draw);
</script>

<div class="dither-fill" aria-hidden="true"><canvas bind:this={canvas}></canvas></div>

<style>
	.dither-fill {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}
	.dither-fill canvas {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
