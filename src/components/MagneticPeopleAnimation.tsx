"use client";

import { useEffect, useRef } from "react";

export default function MagneticPeopleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize center coordinates
    let centerX = 0;
    let centerY = 0;
    const magnetRadius = 5;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    };
    setCanvasSize();

    class Person {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;

      constructor() {
        // Spawn from random edge of screen
        const edge = Math.floor(Math.random() * 4);

        switch (edge) {
          case 0: // top
            this.x = Math.random() * (canvas?.width || window.innerWidth);
            this.y = -20;
            break;
          case 1: // right
            this.x = (canvas?.width || window.innerWidth) + 20;
            this.y = Math.random() * (canvas?.height || window.innerHeight);
            break;
          case 2: // bottom
            this.x = Math.random() * (canvas?.width || window.innerWidth);
            this.y = (canvas?.height || window.innerHeight) + 20;
            break;
          case 3: // left
            this.x = -20;
            this.y = Math.random() * (canvas?.height || window.innerHeight);
            break;
          default:
            this.x = 0;
            this.y = 0;
        }

        this.size = 8;
        this.speed = 0.5 + Math.random() * 1;
        this.opacity = 0.6 + Math.random() * 0.4;
      }

      update(): boolean {
        // Calculate direction to center
        const dx = centerX - this.x;
        const dy = centerY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalize and move towards center
        if (distance > magnetRadius) {
          this.x += (dx / distance) * this.speed;
          this.y += (dy / distance) * this.speed;
          return true;
        }
        return false; // Reached the magnet
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#fff";

        // Simple stick figure
        // Head
        ctx.beginPath();
        ctx.arc(this.x, this.y - this.size, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size * 0.6);
        ctx.lineTo(this.x, this.y + this.size * 0.2);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Arms
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 0.5, this.y - this.size * 0.2);
        ctx.lineTo(this.x, this.y - this.size * 0.3);
        ctx.lineTo(this.x + this.size * 0.5, this.y - this.size * 0.2);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size * 0.2);
        ctx.lineTo(this.x - this.size * 0.3, this.y + this.size);
        ctx.moveTo(this.x, this.y + this.size * 0.2);
        ctx.lineTo(this.x + this.size * 0.3, this.y + this.size);
        ctx.stroke();

        ctx.restore();
      }
    }

    let people: Person[] = [];
    let lastSpawnTime = 0;
    const spawnInterval = 150;
    let animationFrameId: number;

    function animate(timestamp: number) {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Spawn new person
      if (timestamp - lastSpawnTime > spawnInterval) {
        people.push(new Person());
        lastSpawnTime = timestamp;
      }

      // Update and draw people
      people = people.filter((person) => {
        const alive = person.update();
        person.draw();
        return alive;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

