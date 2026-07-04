"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let visible = true;

    // Pause animation when tab is hidden
    const onVisChange = () => { visible = !document.hidden; };
    document.addEventListener("visibilitychange", onVisChange);

    // Throttled mouse tracking — only process every 3rd event
    const mouse = { x: -999, y: -999, active: false };
    let mouseTick = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (mouseTick++ % 3 !== 0) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => { mouse.active = false; mouse.x = -999; mouse.y = -999; };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 18 : 38;   // fewer particles = less work
    const MAX_DIST_SQ = 100 * 100;       // squared avoids sqrt per pair
    const MOUSE_RADIUS = 90;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const initParticles = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.7,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Use ResizeObserver instead of window resize event
    const resizeObs = new ResizeObserver(resize);
    resizeObs.observe(document.documentElement);
    resize();

    let frame = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!visible) return;
      // On mobile, skip every other frame → ~30fps saves ~50% CPU
      if (isMobile && frame++ % 2 !== 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? "rgba(96,165,250,0.22)" : "rgba(37,99,235,0.10)";
      const lineAlphaBase = isDark ? 0.07 : 0.06;

      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx = -p.vx;
        if (p.y < 0 || p.y > h) p.vy = -p.vy;

        // Mouse repel (desktop only)
        if (!isMobile && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dSq = dx * dx + dy * dy;
          const rSq = MOUSE_RADIUS * MOUSE_RADIUS;
          if (dSq < rSq && dSq > 0) {
            const d = Math.sqrt(dSq);
            const f = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) * 1.1;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }

        // Draw particle dot
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Connecting lines (desktop only to save mobile GPU)
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const dSq = dx * dx + dy * dy;
            if (dSq < MAX_DIST_SQ) {
              const alpha = (1 - dSq / MAX_DIST_SQ) * lineAlphaBase;
              ctx.strokeStyle = isDark
                ? `rgba(96,165,250,${alpha})`
                : `rgba(37,99,235,${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObs.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ willChange: "transform" }}
    />
  );
}
