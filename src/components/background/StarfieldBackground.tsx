import { useEffect, useRef } from 'react';

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  phase: number;
  phaseSpeed: number;
  isSparkle: boolean;
  rotation: number;
  colorType: 'white' | 'primary' | 'accent';
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    isActive: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isDark = document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Observe theme attribute changes on <html>
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark';
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Particle[] = [];

    const initParticles = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Determine particle count based on screen area (smooth on mobile and ultra-wide)
      const count = Math.floor((width * height) / 12000);
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        // Distribute in subtle grid-like clusters with organic scatter
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isSparkle = Math.random() > 0.65;
        const size = isSparkle ? Math.random() * 6 + 5 : Math.random() * 2 + 1;
        const baseAlpha = Math.random() * 0.5 + 0.3;

        const colorRand = Math.random();
        const colorType: Particle['colorType'] =
          colorRand > 0.6 ? 'accent' : colorRand > 0.3 ? 'primary' : 'white';

        newParticles.push({
          originX: x,
          originY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          size,
          baseAlpha,
          alpha: baseAlpha,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.02 + 0.008,
          isSparkle,
          rotation: Math.random() * Math.PI,
          colorType,
        });
      }

      particles = newParticles;
    };

    initParticles();

    // 1. Resize Handling
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(initParticles, 150);
    };
    window.addEventListener('resize', handleResize);

    // 2. Passive Mouse Tracking (Zero React re-renders)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.targetX = -9999;
      mouseRef.current.targetY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // 3. Visibility and Intersection Observers to save CPU/battery
    const visibilityListener = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', visibilityListener);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    // 4. Sparkle Shape Drawing Utility
    const drawSparkle = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      rot: number
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rot);
      context.beginPath();
      const outer = size;
      const inner = size * 0.18;
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        const nextA = a + Math.PI / 4;
        if (i === 0) {
          context.moveTo(Math.cos(a) * outer, Math.sin(a) * outer);
        } else {
          context.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
        }
        context.lineTo(Math.cos(nextA) * inner, Math.sin(nextA) * inner);
      }
      context.closePath();
      context.fill();
      context.restore();
    };

    // 5. Animation Render Loop (60-120 FPS via RAF)
    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 1;
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse lerp
        if (mouseRef.current.isActive) {
          mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
          mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;
        } else {
          mouseRef.current.x += (-9999 - mouseRef.current.x) * 0.05;
          mouseRef.current.y += (-9999 - mouseRef.current.y) * 0.05;
        }

        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;
        const proximityRadius = 220;
        const proximityRadiusSq = proximityRadius * proximityRadius;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Twinkle pulse
          p.phase += p.phaseSpeed;
          const twinkle = Math.sin(p.phase) * 0.25;

          // Ambient subtle drift
          const ambientX = Math.sin(time * 0.005 + p.originX) * 4;
          const ambientY = Math.cos(time * 0.005 + p.originY) * 4;

          let targetX = p.originX + ambientX;
          let targetY = p.originY + ambientY;
          let extraAlpha = 0;

          // Interactive Cursor Attraction & Parallax
          if (!prefersReducedMotion && !isCoarsePointer && mouseRef.current.isActive) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < proximityRadiusSq && distSq > 1) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / proximityRadius);
              // Gentle pull toward cursor with spring limit
              const pullDistance = force * 24;
              targetX += (dx / dist) * pullDistance;
              targetY += (dy / dist) * pullDistance;
              extraAlpha = force * 0.5;
            }
          }

          // Physics Spring Hooke's Law
          const springK = 0.08;
          const damping = 0.82;
          p.vx = (p.vx + (targetX - p.x) * springK) * damping;
          p.vy = (p.vy + (targetY - p.y) * springK) * damping;

          p.x += p.vx;
          p.y += p.vy;

          const finalAlpha = Math.min(1, Math.max(0.1, p.baseAlpha + twinkle + extraAlpha));

          // Color palette according to theme
          let fillStyle: string;
          if (isDark) {
            if (p.colorType === 'accent') {
              fillStyle = `rgba(169, 220, 98, ${finalAlpha * 0.9})`; // #A9DC62 lime
            } else if (p.colorType === 'primary') {
              fillStyle = `rgba(147, 163, 229, ${finalAlpha * 0.9})`; // #93A3E5 primary/200
            } else {
              fillStyle = `rgba(255, 255, 255, ${finalAlpha})`; // White
            }
          } else {
            if (p.colorType === 'accent') {
              fillStyle = `rgba(39, 79, 173, ${finalAlpha * 0.9})`; // #274FAD primary/400
            } else if (p.colorType === 'primary') {
              fillStyle = `rgba(82, 118, 225, ${finalAlpha * 0.8})`; // #5276E1 primary/300
            } else {
              fillStyle = `rgba(82, 82, 91, ${finalAlpha * 0.5})`; // #52525B gray
            }
          }

          ctx.fillStyle = fillStyle;

          if (p.isSparkle) {
            drawSparkle(ctx, p.x, p.y, p.size, p.rotation);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', visibilityListener);
      intersectionObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
