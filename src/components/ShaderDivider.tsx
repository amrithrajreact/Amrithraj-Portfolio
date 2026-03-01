import { useEffect, useRef } from "react";

const ShaderDivider = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      const primaryHue = 38;
      const mouse = mouseRef.current;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const baseAlpha = isDark ? 0.15 - i * 0.04 : 0.12 - i * 0.03;
        const alpha = mouse.active ? baseAlpha * 1.8 : baseAlpha;
        ctx.strokeStyle = `hsla(${primaryHue}, 90%, ${isDark ? 55 : 45}%, ${alpha})`;
        ctx.lineWidth = mouse.active ? 2.5 : 2;

        for (let x = 0; x <= w; x += 2) {
          const nx = x / w;
          // Mouse influence: waves bend toward cursor
          const mousePull = mouse.active
            ? Math.sin((nx - mouse.x) * Math.PI) * (h * 0.25) * (1 - Math.abs(nx - mouse.x) * 1.5)
            : 0;

          const y =
            h / 2 +
            Math.sin(nx * Math.PI * 2 + time + i * 0.8) * (h * 0.3) +
            Math.sin(nx * Math.PI * 4 + time * 1.3 + i) * (h * 0.1) +
            mousePull;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Glow center line
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      const glowAlpha = isDark ? 0.3 : 0.2;
      const boostedGlow = mouse.active ? glowAlpha * 1.6 : glowAlpha;
      gradient.addColorStop(0, `hsla(${primaryHue}, 90%, ${isDark ? 55 : 45}%, 0)`);
      gradient.addColorStop(0.3, `hsla(${primaryHue}, 90%, ${isDark ? 55 : 45}%, ${boostedGlow})`);
      gradient.addColorStop(0.7, `hsla(${primaryHue}, 90%, ${isDark ? 55 : 45}%, ${boostedGlow})`);
      gradient.addColorStop(1, `hsla(${primaryHue}, 90%, ${isDark ? 55 : 45}%, 0)`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = mouse.active ? 2 : 1.5;
      for (let x = 0; x <= w; x += 2) {
        const nx = x / w;
        const mousePull = mouse.active
          ? Math.sin((nx - mouse.x) * Math.PI) * (h * 0.15) * (1 - Math.abs(nx - mouse.x) * 1.5)
          : 0;
        const y =
          h / 2 +
          Math.sin(nx * Math.PI * 3 + time * 0.7) * (h * 0.2) +
          mousePull;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default ShaderDivider;
