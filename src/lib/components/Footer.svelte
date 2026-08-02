<script lang="ts">
	let { name } = $props<{ name: string }>();
</script>

<footer class="footer">
	<span>© {new Date().getFullYear()} {name}</span>
	<span class="muted">yashwanth.dev</span>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		padding-top: 56px;
		color: var(--fg-muted);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 12px;
	}
	.muted {
		color: var(--fg-dim);
	}
	@media (max-width: 760px) {
		.footer {
			flex-direction: column;
			gap: 4px;
		}
	}
</style>
