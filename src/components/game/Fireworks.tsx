import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; vx: number; vy: number;
  life: number; max: number; color: string; size: number;
};

const NEON = [
  "#ff00e6", "#00fff0", "#fff200", "#39ff14", "#ff6a00", "#7d00ff", "#ff0044",
];

const MAX_PARTICLES = 320;

export function Fireworks({ duration = 4200 }: { duration?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;
    let particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    resize();
    window.addEventListener("resize", resize);

    function burst(x: number, y: number, color: string) {
      if (particles.length > MAX_PARTICLES) return;
      const count = 28 + Math.floor(Math.random() * 14);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = (3 + Math.random() * 5) * dpr;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          max: 26 + Math.random() * 14,
          color,
          size: (1.6 + Math.random() * 2) * dpr,
        });
      }
    }

    function launch() {
      const x = window.innerWidth * (0.15 + Math.random() * 0.7) * dpr;
      const y = window.innerHeight * (0.18 + Math.random() * 0.4) * dpr;
      burst(x, y, NEON[Math.floor(Math.random() * NEON.length)]);
    }

    // initial salvo — bigger burst to match the chant
    for (let i = 0; i < 7; i++) setTimeout(launch, i * 60);
    const interval = window.setInterval(launch, 160);
    const stopTimer = window.setTimeout(() => {
      stopped = true;
      clearInterval(interval);
    }, duration);

    function tick() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0,0,0,0.32)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((p) => p.life < p.max);
      for (const p of particles) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.16 * dpr;
        p.vx *= 0.98;
        const t = 1 - p.life / p.max;
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = t;
        ctx.arc(p.x, p.y, p.size * (0.6 + t * 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!stopped || particles.length > 0) {
        raf = requestAnimationFrame(tick);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [duration]);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none z-40"
      aria-hidden
    />
  );
}
