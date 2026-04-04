"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

export default function TerrainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef({ vertices: 0, fps: 0 });
  const [stats, setStats] = useState({ vertices: 0, fps: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const setupScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030303);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "0";

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.018);

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 18, 30);
    camera.lookAt(0, 0, 0);

    // --- Geometry ---
    const segments = 150;
    const geometry = new THREE.PlaneGeometry(100, 100, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const vertexCount = geometry.attributes.position.count;
    statsRef.current.vertices = vertexCount;

    // Vertex colors
    const colors = new Float32Array(vertexCount * 3);
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Grid overlay (hidden initially, shown on scroll) ---
    const gridHelper = new THREE.GridHelper(100, 40, 0x222222, 0x111111);
    gridHelper.position.y = -0.5;
    gridHelper.material.transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0;
    scene.add(gridHelper);

    // --- Mouse ---
    const mouse = { x: 0 };

    function onMouseMove(e: MouseEvent) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    }

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    // --- Scroll ---
    let currentScrollProgress = 0;

    function onScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      currentScrollProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(currentScrollProgress);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // --- Resize ---
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onResize);

    // --- Animation ---
    let animationId: number;
    const clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = 0;

    const posAttr = geometry.attributes.position;
    const colAttr = geometry.attributes.color;

    // Store original x/z for noise calc
    const basePositions: { x: number; z: number }[] = [];
    for (let i = 0; i < vertexCount; i++) {
      basePositions.push({
        x: posAttr.getX(i),
        z: posAttr.getZ(i),
      });
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // FPS
      frameCount++;
      if (elapsed - lastFpsUpdate >= 0.5) {
        statsRef.current.fps = Math.round(
          frameCount / (elapsed - lastFpsUpdate)
        );
        frameCount = 0;
        lastFpsUpdate = elapsed;
        setStats({ ...statsRef.current });
      }

      // Vertex displacement — 3 octaves
      for (let i = 0; i < vertexCount; i++) {
        const { x, z } = basePositions[i];
        const height =
          Math.sin(x * 0.05 + elapsed) * 8 +
          Math.sin(z * 0.08 + elapsed * 0.7) * 4 +
          Math.sin(x * 0.15 + z * 0.1 + elapsed * 1.2) * 2;

        posAttr.setY(i, height);

        // Color by height — low=dark, high=bright
        const normalised = (height + 14) / 28; // range approx -14..14
        const brightness = Math.max(0, Math.min(1, normalised));
        colAttr.setXYZ(i, brightness, brightness, brightness);
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Camera auto-movement
      const scrollT = currentScrollProgress;

      // Base forward motion (auto)
      const autoZ = -elapsed * 0.3;

      // Scroll: camera pulls back and up to reveal landscape from above
      const pullBack = scrollT * 60;
      const pullUp = scrollT * 40;
      const lookDownAngle = scrollT * 0.8;

      camera.position.set(0, 18 + pullUp, 30 + autoZ + pullBack);

      // Mouse tilt (desktop only)
      const tiltAngle = isMobile
        ? Math.sin(elapsed * 0.2) * 0.05 // subtle auto-rotate on mobile
        : mouse.x * (10 * Math.PI) / 180;

      camera.rotation.set(
        -0.5 - lookDownAngle,
        tiltAngle,
        0
      );

      // Grid visibility on scroll
      const gridMat = gridHelper.material as THREE.Material;
      gridMat.opacity = Math.min(1, scrollT * 3) * 0.3;

      // Fog adjusts on scroll
      (scene.fog as THREE.FogExp2).density = 0.018 - scrollT * 0.012;

      renderer.render(scene, camera);
    }

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const cleanup = setupScene();
    return cleanup;
  }, [setupScene]);

  return (
    <div className="pt-16 pb-20">
      {/* Three.js canvas mount */}
      <div ref={containerRef} />

      {/* Hero section — full viewport */}
      <div className="relative h-screen" />

      {/* Text overlay — bottom-left, fixed */}
      <div
        className="fixed bottom-16 left-6 z-10 pointer-events-none"
        style={{ opacity: 1 - scrollProgress * 3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-none">
          TOPOGRAPHY
        </h1>
        <p className="text-[10px] text-white/20 mt-2 tracking-wide">
          Procedural terrain &middot; Perlin noise &middot; Three.js
        </p>
        <p className="text-[10px] text-white/10 mt-1 tracking-wide font-mono">
          Vertices: {stats.vertices.toLocaleString()} &middot; Frame rate:{" "}
          {stats.fps}fps
        </p>
      </div>

      {/* Scroll section — explanation cards */}
      <div className="relative z-10 min-h-[200vh]">
        <div className="max-w-2xl mx-auto px-6 space-y-32 py-32">
          <Card
            title="Layered Noise"
            description="Three octaves of sine and cosine functions combine at different frequencies and amplitudes to simulate the complexity of natural terrain. Each layer adds finer detail to the overall shape."
            progress={scrollProgress}
            threshold={0.1}
          />

          <Card
            title="Vertex Displacement"
            description="22,500 vertices on a 150x150 subdivision plane are displaced in real-time every frame. Height values drive both the Y position and the vertex color, creating a topographic heat map effect."
            progress={scrollProgress}
            threshold={0.3}
          />

          <Card
            title="Wireframe Rendering"
            description="The mesh uses a transparent wireframe material at 15% opacity, combined with exponential fog that fades geometry into the dark background. This creates depth without heavy GPU load."
            progress={scrollProgress}
            threshold={0.5}
          />

          <Card
            title="Procedural Generation"
            description="No textures, no pre-built assets. The entire landscape is generated mathematically at runtime. This approach scales infinitely and requires minimal memory, making it ideal for real-time applications."
            progress={scrollProgress}
            threshold={0.7}
          />
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  progress,
  threshold,
}: {
  title: string;
  description: string;
  progress: number;
  threshold: number;
}) {
  const visible = progress > threshold;
  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <div className="border border-white/[0.06] bg-black/40 backdrop-blur-sm rounded-lg p-8">
        <h3 className="text-sm font-semibold text-white/80 tracking-wide uppercase mb-3">
          {title}
        </h3>
        <p className="text-sm text-white/30 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
