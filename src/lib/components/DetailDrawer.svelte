<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		open,
		eyebrow,
		onClose,
		detail,
		detailKey
	}: {
		open: boolean;
		eyebrow: string;
		onClose: () => void;
		detail: Snippet;
		detailKey: unknown;
	} = $props();

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	function onKey(e: KeyboardEvent) {
		if (open && e.key === 'Escape') onClose();
	}
</script>

<svelte:window onkeydown={onKey} />

{#if open}
	<!-- ponytail: one shared modal, no lib, no portal -->
	<div class="backdrop" onclick={onClose} onkeydown={(e) => e.key === 'Enter' && onClose()} role="presentation" aria-hidden="true"></div>
	<div class="modal" role="dialog" aria-modal="true" aria-label={eyebrow}>
		<button class="close" onclick={onClose} aria-label="Close panel">✕</button>
		<div class="detail">{#key detailKey}{@render detail()}{/key}</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(15, 23, 42, 0.32);
		backdrop-filter: blur(10px) saturate(0.9);
		-webkit-backdrop-filter: blur(10px) saturate(0.9);
		z-index: 60;
		animation: fade 0.18s ease both;
	}
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: min(640px, 92vw);
		max-height: 86vh;
		background: var(--paper);
		border: 1px solid var(--card-line);
		border-radius: 4px;
		box-shadow: 0 32px 80px rgba(15, 23, 42, 0.28);
		z-index: 61;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		animation: pop 0.22s cubic-bezier(0.22, 1, 0.36, 1) backwards;
	}
	.close {
		position: absolute;
		top: 12px;
		right: 12px;
		width: 32px;
		height: 32px;
		display: grid;
		place-items: center;
		border: 1px solid var(--card-line);
		border-radius: 4px;
		background: #fff;
		cursor: pointer;
		font-size: 13px;
		color: #0f172a;
		z-index: 1;
	}
	.close:hover { border-color: var(--card-line-hover); background: var(--wash); }
	.detail { overflow-y: auto; padding: 32px 34px 44px; }
	@keyframes pop {
		from { transform: translate(-50%, -50%) scale(0.98); opacity: 0; }
		to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
	}
	@keyframes fade {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	@media (max-width: 720px) {
		.modal { width: 94vw; max-height: 90vh; }
		.detail { padding: 24px 20px 36px; }
	}
	@media (prefers-reduced-motion: reduce) {
		.backdrop, .modal { animation: none; }
	}
</style>
