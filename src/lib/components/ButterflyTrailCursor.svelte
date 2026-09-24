<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	// @ts-ignore - three addons lack bundled types without @types/three
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	// @ts-ignore - three addons lack bundled types without @types/three
	import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

	let canvas: HTMLCanvasElement;
	let container: HTMLDivElement;

	const BUTTERFLY_LIFETIME = 2;
	const FADE_DURATION = 0.5;
	const MAX_BUTTERFLIES = 40;
	const SPAWN_THROTTLE = 90;

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let raf = 0;
		let disposed = false;
		const scene = new THREE.Scene();
		scene.background = null;

		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
		camera.position.set(0, 0, 5);

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: false,
			powerPreference: 'high-performance'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setClearColor(0x000000, 0);

		const clock = new THREE.Clock();

		// fit renderer to container
		function resize() {
			if (!container) return;
			const w = container.clientWidth;
			const h = container.clientHeight;
			renderer.setSize(w, h, false);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			// viewport size in world units at z=0
			const vFov = THREE.MathUtils.degToRad(camera.fov);
			viewport.height = 2 * Math.tan(vFov / 2) * camera.position.z;
			viewport.width = viewport.height * camera.aspect;
		}
		const viewport = { width: 6, height: 6 };

		const poolGroup = new THREE.Group();
		scene.add(poolGroup);

		type BData = {
			active: boolean;
			direction: THREE.Vector3;
			createdAt: number;
			initialRotation: THREE.Euler;
			material: THREE.MeshMatcapMaterial;
			mixer?: THREE.AnimationMixer;
			action?: THREE.AnimationAction;
		};

		const pool: THREE.Group[] = [];
		const mixers: THREE.AnimationMixer[] = [];
		let matcapMaterial: THREE.MeshMatcapMaterial | null = null;
		let gltfScene: THREE.Group | null = null;
		let gltfAnims: THREE.AnimationClip[] = [];
		let ready = false;

		const loader = new GLTFLoader();
		const texLoader = new THREE.TextureLoader();

		// load matcap + model
		const matcapTex = texLoader.load(
			'https://www.obsidianui.dev/effects/butterfly-trail-cursor/butterfly-trail-cursor-matcap.webp'
		);
		matcapTex.colorSpace = THREE.SRGBColorSpace;

		loader.load(
			'https://www.obsidianui.dev/effects/butterfly-trail-cursor/butterfly3.glb',
			(gltf: any) => {
				if (disposed) return;
				gltfScene = gltf.scene as unknown as THREE.Group;
				gltfAnims = gltf.animations;

				matcapMaterial = new THREE.MeshMatcapMaterial({
					matcap: matcapTex,
					side: THREE.DoubleSide
				});

				for (let i = 0; i < MAX_BUTTERFLIES; i++) {
					const clone = SkeletonUtils.clone(gltfScene) as THREE.Group;
					const instMat = matcapMaterial.clone();
					instMat.transparent = true;
					instMat.opacity = 1;
					clone.traverse((child: any) => {
						if (child.isMesh || child.isSkinnedMesh) child.material = instMat;
					});
					clone.scale.setScalar(0.0014);
					clone.visible = false;
					(clone.userData as BData) = {
						active: false,
						direction: new THREE.Vector3(),
						createdAt: 0,
						initialRotation: new THREE.Euler(),
						material: instMat
					} as any;

					const mixer = new THREE.AnimationMixer(clone);
					if (gltfAnims.length > 0) {
						const action = mixer.clipAction(gltfAnims[0]);
						action.play();
						(clone.userData as any).mixer = mixer;
						(clone.userData as any).action = action;
					}
					mixers.push(mixer);
					pool.push(clone);
					poolGroup.add(clone);
				}
				ready = true;
			},
			undefined,
			() => {
				// fallback: if model fails, just don't render
				ready = false;
			}
		);

		resize();
		window.addEventListener('resize', resize);

		let lastSpawn = 0;
		// listen on container's parent (intro) or window but filter to container bounds
		function onMouseMove(e: MouseEvent) {
			if (!ready || !container) return;
			const now = Date.now();
			if (now - lastSpawn < SPAWN_THROTTLE) return;
			const rect = container.getBoundingClientRect();
			// only spawn when cursor inside intro
			if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
			lastSpawn = now;
			const x = ((e.clientX - rect.left) / rect.width - 0.5) * viewport.width;
			const y = (0.5 - (e.clientY - rect.top) / rect.height) * viewport.height;
			const count = 2 + Math.floor(Math.random() * 2);
			const createdAt = clock.getElapsedTime();
			let spawned = 0;
			for (const b of pool) {
				if (spawned >= count) break;
				const d = b.userData as unknown as BData;
				if (d.active) continue;
				const angle = Math.random() * Math.PI * 2;
				b.position.set(
					x + (Math.random() - 0.5) * 1.2,
					y + (Math.random() - 0.5) * 0.8,
					(Math.random() - 0.5) * 0.4
				);
				d.direction.set(
					Math.cos(angle) * 0.75,
					0.4 + Math.random() * 0.5,
					(Math.random() - 0.5) * 0.3
				);
				d.initialRotation.set(
					(Math.random() - 0.5) * 0.3,
					Math.random() * Math.PI * 2,
					(Math.random() - 0.5) * 0.2
				);
				b.rotation.copy(d.initialRotation);
				d.createdAt = createdAt;
				d.active = true;
				d.material.opacity = 1;
				b.visible = true;
				if (d.action) {
					d.action.timeScale = 1.6 + Math.random() * 0.8;
					d.action.time = Math.random() * 2;
				}
				spawned++;
			}
		}
		window.addEventListener('mousemove', onMouseMove);

		function animate() {
			raf = requestAnimationFrame(animate);
			const delta = clock.getDelta();
			const elapsed = clock.elapsedTime;
			if (ready) {
				for (const b of pool) {
					const d = b.userData as unknown as BData;
					if (!d.active) continue;
					const age = elapsed - d.createdAt;
					const fadeStart = BUTTERFLY_LIFETIME - FADE_DURATION;
					if (age > fadeStart) {
						const op = Math.max(0, 1 - (age - fadeStart) / FADE_DURATION);
						d.material.opacity = op;
						if (d.action) d.action.timeScale = (1.6 + Math.random() * 0.8) * op;
					}
					if (age > BUTTERFLY_LIFETIME) {
						b.visible = false;
						d.active = false;
						d.material.opacity = 1;
						continue;
					}
					b.position.x += d.direction.x * delta * 1.8;
					b.position.y += d.direction.y * delta * 1.8;
					b.position.z += d.direction.z * delta * 0.5;
					b.rotation.x = d.initialRotation.x + Math.sin(elapsed * 3 + b.position.x) * 0.1;
					d.mixer?.update(delta);
				}
			}
			renderer.render(scene, camera);
		}
		animate();

		return () => {
			disposed = true;
			cancelAnimationFrame(raf);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', resize);
			for (const m of mixers) { m.stopAllAction(); m.uncacheRoot(m.getRoot()); }
			for (const b of pool) (b.userData as any).material?.dispose();
			matcapMaterial?.dispose();
			matcapTex.dispose();
			renderer.dispose();
		};
	});
</script>

<div bind:this={container} class="trail-wrap" aria-hidden="true">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.trail-wrap {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 3;
		overflow: hidden;
	}
	.trail-wrap canvas {
		width: 100%;
		height: 100%;
		display: block;
	}
	@media (prefers-reduced-motion: reduce) {
		.trail-wrap { display: none; }
	}
</style>
