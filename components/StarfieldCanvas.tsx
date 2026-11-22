// This client component creates an animated html5 starfield canvas background.
"use client";

import React, { useEffect, useRef } from "react";

// This interface defines individual star properties including position and twinkling state.
interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  deltaAlpha: number;
  speed: number;
}

// This component draws continuously drifting and twinkling stars across the dark backdrop.
export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // This effect initializes the canvas, star pool, and requestanimationframe rendering loop.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // This block builds the initial array of star objects with randomized coordinates.
    const starCount = Math.min(260, Math.floor((width * height) / 4500));
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        radius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        deltaAlpha: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        speed: Math.random() * 0.25 + 0.08,
      });
    }

    // This handler resizes canvas dimensions when the browser window dimensions change.
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // This render function updates star positions and paints them onto the canvas frame.
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Gently drift upward and slightly sideways
        star.y -= star.speed * star.z;
        star.x += (star.speed * star.z * 0.2);

        // Twinkle alpha modification
        star.alpha += star.deltaAlpha;
        if (star.alpha > 0.95 || star.alpha < 0.2) {
          star.deltaAlpha = -star.deltaAlpha;
        }

        // Wrap around boundaries
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        if (star.x > width) {
          star.x = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * star.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.shadowBlur = star.radius > 1 ? 4 : 0;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
