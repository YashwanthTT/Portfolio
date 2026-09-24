<footer class="footer mono">
	<span>Built with SvelteKit — Box-line system</span>
	<span>© 2026 — <a href="mailto:hello@example.com">hello@example.com</a></span>
</footer>

<style>
	.mono {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 11px;
		letter-spacing: 0.02em;
	}
	.footer {
		position: relative;
		z-index: 1;
		flex: 0 0 100vw;
		width: 100vw;
		min-width: 100vw;
		min-height: 100svh;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 12px;
		padding: 48px 48px 48px calc(var(--rail-width) + 48px);
		color: #c8c0b7;
		flex-wrap: wrap;
		background: #242220;
		border-top: 1px solid #5a524d;
	}
	.footer a {
		color: #f3eee8;
		text-decoration: none;
		border-bottom: 1px solid #8f877e;
	}
	.footer a:hover { color: #fffaf4; border-color: #fffaf4; }
	@media (max-width: 860px) {
		.footer { padding: 40px 20px 40px calc(var(--rail-width) + 20px); }
	}
</style>
