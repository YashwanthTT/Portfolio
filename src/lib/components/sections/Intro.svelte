<section class="intro" aria-label="Introduction">
	<div class="intro-layout">
		<div class="intro-name">
			<h1>Yashwanth</h1>
		</div>

		<div class="intro-statement">
			<p>A thoughtful process of building automation that engages people, brings clarity, and sparks delight.</p>
		</div>

		<div class="hero-art" aria-hidden="true">
			<svg class="turntable-illustration" viewBox="0 0 640 400" role="presentation" focusable="false" shape-rendering="crispEdges">
				<rect x="28" y="38" width="584" height="312" rx="20" fill="#4f7376" />
				<rect x="28" y="28" width="584" height="304" rx="20" fill="#789b9d" />
				<path d="M48 30h544a18 18 0 0 1 18 18v6H30v-6a18 18 0 0 1 18-18Z" fill="#8aaeb0" opacity=".55" />
				<path d="M40 48h560M40 318h560" stroke="#a4c0c0" stroke-width="3" opacity=".38" />
				<path d="M44 64h18M578 64h18M44 292h18M578 292h18" stroke="#c4d2d1" stroke-width="4" stroke-linecap="square" opacity=".5" />
				<g class="record-spin">
					<circle cx="208" cy="180" r="136" fill="#17191a" />
					<circle cx="208" cy="180" r="126" fill="none" stroke="#87918f" stroke-width="3" opacity=".9" />
					<circle cx="208" cy="180" r="114" fill="none" stroke="#454b49" stroke-width="2" opacity=".65" />
					<circle cx="208" cy="180" r="104" fill="none" stroke="#68706d" stroke-width="2" opacity=".55" />
					<circle cx="208" cy="180" r="94" fill="none" stroke="#68706d" stroke-width="2" opacity=".42" />
					<circle cx="208" cy="180" r="84" fill="none" stroke="#68706d" stroke-width="2" opacity=".3" />
					<circle cx="208" cy="180" r="76" fill="none" stroke="#68706d" stroke-width="2" opacity=".26" />
					<circle cx="208" cy="180" r="68" fill="none" stroke="#68706d" stroke-width="2" opacity=".22" />
					<circle cx="208" cy="180" r="60" fill="none" stroke="#68706d" stroke-width="2" opacity=".18" />
					<circle cx="208" cy="180" r="44" fill="#d6a47b" />
					<circle cx="208" cy="180" r="11" fill="#5e625f" />
					<rect x="224" y="164" width="8" height="8" fill="#f1c89d" opacity=".8" />
				</g>
				<circle cx="430" cy="106" r="38" fill="#5b6465" />
				<circle cx="430" cy="106" r="24" fill="#202526" />
				<path d="M430 72v10M430 130v10M396 106h10M454 106h10" stroke="#aebdbc" stroke-width="3" opacity=".65" />
				<g class="tonearm-arm">
					<path d="M430 106 382 219 320 254" fill="none" stroke="#e5b989" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M430 106 382 219" fill="none" stroke="#f0d2a8" stroke-width="5" stroke-linecap="round" />
					<rect x="303" y="240" width="30" height="17" rx="5" fill="#edf1f0" transform="rotate(35 318 248)" />
					<path d="m311 257-7 10" stroke="#252a2a" stroke-width="4" stroke-linecap="round" />
					<circle cx="304" cy="267" r="4" fill="#17191a" />
				</g>
				<rect x="500" y="142" width="25" height="130" rx="6" fill="#e9e1c8" />
				<rect x="508" y="153" width="9" height="108" rx="4" fill="#252b2b" />
				<rect x="502" y="192" width="21" height="24" rx="5" fill="#171c1c" />
				<circle cx="470" cy="309" r="13" fill="#dce5e5" />
				<circle cx="516" cy="309" r="13" fill="#dce5e5" />
				<circle cx="470" cy="309" r="5" fill="#a8c0c0" />
				<circle cx="516" cy="309" r="5" fill="#a8c0c0" />
				<path d="M458 286h24M504 286h24" stroke="#b6c9c8" stroke-width="3" stroke-linecap="square" opacity=".65" />
				<path d="M52 38h536" stroke="#a4c0c0" stroke-width="3" opacity=".45" />
			</svg>
		</div>

		<div class="social-row" aria-label="Social links">
			<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
			<a href="https://x.com" target="_blank" rel="noreferrer">X</a>
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
			<a href="mailto:hello@example.com">Email</a>
		</div>

		<p class="scroll-cue" aria-hidden="true">Scroll <span>→</span></p>
	</div>
</section>

<style>
	.intro {
		position: relative;
		z-index: 3;
		flex: 0 0 100vw;
		width: 100vw;
		min-width: 100vw;
		height: 100%;
		min-height: 100svh;
		background: #242220;
		color: #f3eee8;
		overflow: hidden;
	}
	.intro-layout {
		position: relative;
		z-index: 1;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-template-rows: auto auto minmax(0, 1fr) auto;
		column-gap: clamp(20px, 2.5vw, 42px);
		padding: clamp(28px, 5vh, 64px) clamp(28px, 5vw, 80px) clamp(28px, 5vh, 56px) clamp(88px, 8vw, 128px);
	}
	.hero-art {
		position: relative;
		grid-column: 8 / -1;
		grid-row: 1 / 4;
		align-self: end;
		justify-self: end;
		z-index: 0;
		width: 100%;
		max-width: 520px;
		margin: 0 0 clamp(24px, 5vh, 64px);
		pointer-events: none;
		opacity: 0.66;
		mix-blend-mode: screen;
	}
	.turntable-illustration {
		display: block;
		width: 100%;
		height: auto;
		overflow: visible;
		shape-rendering: crispEdges;
		image-rendering: pixelated;
		filter: grayscale(1) contrast(1.12) brightness(0.9);
	}
	.record-spin {
		transform-box: view-box;
		transform-origin: 208px 180px;
		animation: record-spin 6s linear infinite;
	}
	.tonearm-arm {
		transform-box: view-box;
		transform-origin: 430px 106px;
		animation: tonearm-play 3.6s ease-in-out infinite alternate;
	}
	@keyframes record-spin {
		to { transform: rotate(360deg); }
	}
	@keyframes tonearm-play {
		from { transform: rotate(-1.4deg); }
		to { transform: rotate(1.2deg); }
	}
	.intro-name {
		grid-column: 1 / span 7;
		grid-row: 1;
		align-self: start;
		padding-top: clamp(16px, 3vh, 36px);
		min-width: 0;
		position: relative;
		z-index: 1;
	}
	.intro-name h1 {
		margin: 0;
		font-family: 'Bodoni Moda', 'Times New Roman', serif;
		font-size: clamp(64px, 9.5vw, 160px);
		font-weight: 600;
		line-height: 0.86;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		color: #f3eee8;
		white-space: nowrap;
	}
	.intro-statement {
		grid-column: 1 / -1;
		grid-row: 2;
		align-self: start;
		max-width: none;
		padding-top: clamp(20px, 2.5vh, 32px);
		position: relative;
		z-index: 1;
	}
	.intro-statement p {
		width: min(100%, 24em);
		margin: 0;
		font-family: 'Manrope', 'Inter', sans-serif;
		font-size: clamp(22px, 1.8vw, 31px);
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: -0.02em;
		text-wrap: balance;
		color: #f3eee8;
	}
	.social-row {
		grid-column: 1 / span 5;
		grid-row: 4;
		position: static;
		align-self: end;
		justify-self: start;
		display: flex;
		align-items: center;
		gap: clamp(16px, 1.6vw, 24px);
		margin-top: clamp(24px, 4vh, 44px);
		padding-top: 12px;
		border-top: 1px solid rgba(243, 238, 232, 0.32);
		z-index: 2;
	}
	.social-row a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #c8c0b7;
		font-family: 'DM Sans', 'Inter', sans-serif;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.15s ease;
	}
	.social-row a:hover { color: #f3eee8; }
	.scroll-cue {
		grid-column: 10 / -1;
		grid-row: 4;
		position: static;
		align-self: end;
		justify-self: end;
		margin: 0 0 0 clamp(24px, 4vh, 44px);
		font-family: 'Bodoni Moda', 'Times New Roman', serif;
		font-size: clamp(24px, 2.7vw, 42px);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: #f3eee8;
		z-index: 2;
	}
	.scroll-cue span { color: #c8c0b7; }
	@keyframes reveal {
		from { opacity: 0; transform: translateY(12px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.intro-name h1,
	.intro-statement,
	.social-row,
	.scroll-cue {
		animation: reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	.intro-statement { animation-delay: 0.08s; }
	.social-row { animation-delay: 0.12s; }
	.scroll-cue { animation-delay: 0.16s; }
	@media (max-width: 900px) {
		.intro-layout {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 28px 24px 32px 64px;
		}
		.intro-name {
			order: 1;
			padding-top: 0;
		}
		.intro-statement {
			order: 2;
			max-width: 40ch;
			padding-top: 22px;
			transform: none;
		}
		.hero-art {
			position: relative;
			order: 3;
			align-self: flex-end;
			width: min(58vw, 240px);
			margin: 8px 0 0;
			opacity: 0.66;
		}
		.intro-statement p { font-size: clamp(22px, 6vw, 30px); }
		.intro-name h1 { font-size: clamp(36px, 11.5vw, 68px); }
		.social-row {
			position: static;
			order: 4;
			width: 100%;
			justify-content: flex-start;
			flex-wrap: wrap;
			gap: 14px 18px;
			margin-top: 22px;
			transform: none;
		}
		.scroll-cue {
			position: static;
			order: 5;
			align-self: flex-end;
			margin-top: 18px;
		}
	}
	@media (max-width: 900px) and (max-height: 700px) {
		.intro-layout {
			justify-content: flex-start;
			padding-top: 24px;
		}
		.intro-statement { padding-top: 14px; }
		.hero-art { width: min(58vw, 220px); margin-top: 4px; }
		.social-row { margin-top: 16px; }
		.scroll-cue { margin-top: 12px; }
	}
	@media (prefers-reduced-motion: reduce) {
		.intro-name h1,
		.intro-statement,
		.scroll-cue,
		.social-row a,
		.record-spin,
		.tonearm-arm { animation: none !important; transition: none; }
	}
</style>
