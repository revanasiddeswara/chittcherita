import { useEffect, useRef } from 'react';

const CraftLoader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let t = 0;

    const draw = () => {
      if (!ctx) return;

      ctx.fillStyle = 'rgba(10,10,10,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 6; i++) {
        const radius = 80 + i * 22;
        const angle = t * 0.6 + i;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(212,175,55,${0.12 + i * 0.04})`;
        ctx.lineWidth = 2.5;
        ctx.arc(
          centerX,
          centerY,
          radius,
          angle,
          angle + Math.PI * 1.2
        );
        ctx.stroke();
      }

      t += 0.008;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-background">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <p className="font-display text-2xl text-primary tracking-wide mb-2">
          Crafting in progress
        </p>
        <p className="text-sm text-muted-foreground italic">
          Every creation begins as motion…
        </p>
      </div>
    </div>
  );
};

export default CraftLoader;
