<script lang="ts">
	let { name } = $props<{ name: string }>();
</script>

<header class="topbar">
	<a class="brand" href="/">
		<span class="dot"></span>
		<span>{name.toLowerCase()}.dev</span>
	</a>
</header>

<style>
	.topbar {
		display: flex;
		align-items: center;
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

	@media (max-width: 760px) {
		.topbar {
			padding-bottom: 48px;
		}
	}
</style>
