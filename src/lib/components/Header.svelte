<script lang="ts">
	import { onMount } from 'svelte';

	let { name } = $props<{ name: string }>();
	let isLight = $state(false);

	function setTheme(light: boolean) {
		isLight = light;
		document.documentElement.dataset.theme = light ? 'light' : 'dark';
		localStorage.setItem('theme', light ? 'light' : 'dark');
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
		setTheme(savedTheme ? savedTheme === 'light' : prefersLight);
	});
</script>

<header class="topbar">
	<a class="brand" href="/">
		<span class="dot"></span>
		<span>{name.toLowerCase()}.dev</span>
	</a>

	<button
		class="theme-toggle"
		class:is-light={isLight}
		type="button"
		aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
		aria-pressed={isLight}
		onclick={() => setTheme(!isLight)}
	>
		<span class="theme-icon" aria-hidden="true">
			{#if isLight}
				<svg viewBox="0 0 24 24"
					><path
						d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.42-1.42M4.92 19.08l1.42-1.42m0-11.32L4.92 4.92m14.16 14.16-1.42-1.42M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
					/></svg
				>
			{:else}
				<svg viewBox="0 0 24 24"
					><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></svg
				>
			{/if}
		</span>
		<span class="theme-label">{isLight ? 'Light' : 'Dark'}</span>
	</button>
</header>

<style>
	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 0 64px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: -0.01em;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 0 4px rgba(199, 242, 132, 0.12);
	}

	.theme-toggle {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 10px 6px 7px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--control-bg);
		color: var(--fg-muted);
		font: inherit;
		font-size: 12px;
		cursor: pointer;
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			color 0.2s ease;
	}

	.theme-toggle:hover {
		border-color: var(--line-strong);
		background: var(--control-hover);
		color: var(--fg);
	}

	.theme-icon {
		display: grid;
		width: 24px;
		height: 24px;
		place-items: center;
		border-radius: 50%;
		background: var(--accent);
		color: #0a0a0a;
	}

	.theme-icon svg {
		width: 14px;
		height: 14px;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.7;
	}

	.theme-toggle.is-light .theme-icon {
		background: #ffcf5c;
	}

	@media (max-width: 760px) {
		.topbar {
			padding-bottom: 48px;
		}
	}
</style>
