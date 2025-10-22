"use client";

import { useEffect, useRef } from "react";

export default function MapAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration
    const personSize = 3;
    const numPeople = 50;
    const numPins = 15;
    const personSpeed = 0.5;

    // Initialize
    let animationBounds = { x: 0, y: 0, width: 0, height: 0 };
    let people: Person[] = [];
    let pins: Pin[] = [];
    let terrainLines: TerrainLine[] = [];
    let animationFrameId: number;

    // Track last canvas size to detect meaningful changes
    let lastWidth = 0;
    let lastHeight = 0;
    let resizeTimeout: NodeJS.Timeout | null = null;

    // Set canvas size
    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      // Only update if size changed meaningfully (more than 20px)
      const widthDiff = Math.abs(rect.width - lastWidth);
      const heightDiff = Math.abs(rect.height - lastHeight);

      if (widthDiff < 20 && heightDiff < 20 && lastWidth !== 0) {
        return false; // No meaningful change
      }

      canvas.width = rect.width;
      canvas.height = rect.height;
      lastWidth = rect.width;
      lastHeight = rect.height;

      animationBounds = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      };

      return true; // Size changed meaningfully
    };
    setCanvasSize();

    interface TerrainLine {
      points: { x: number; y: number }[];
      opacity: number;
    }

    // Create a distorted line between two points
    function createDistortedLine(x1: number, y1: number, x2: number, y2: number) {
      const points: { x: number; y: number }[] = [];
      const distance = Math.hypot(x2 - x1, y2 - y1);
      const numSegments = Math.max(8, Math.floor(distance / 50));

      points.push({ x: x1, y: y1 });

      for (let i = 1; i < numSegments; i++) {
        const t = i / numSegments;
        const baseX = x1 + (x2 - x1) * t;
        const baseY = y1 + (y2 - y1) * t;
        const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
        const distortion =
          Math.sin(t * Math.PI * 3 + Math.random() * 2) * 20 + Math.sin(t * Math.PI * 5) * 10;
        const x = baseX + Math.cos(angle) * distortion;
        const y = baseY + Math.sin(angle) * distortion;
        points.push({ x, y });
      }

      points.push({ x: x2, y: y2 });
      return points;
    }

    // Generate terrain lines
    function generateTerrainLines(): TerrainLine[] {
      const lines: TerrainLine[] = [];
      if (pins.length < 2) return lines;

      const connected = new Set<string>();

      // Connect corner pins
      const cornerConnections = [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0],
        [0, 3],
        [1, 2],
      ];

      for (const [i, j] of cornerConnections) {
        if (i < pins.length && j < pins.length) {
          const connectionKey = [Math.min(i, j), Math.max(i, j)].join("-");
          connected.add(connectionKey);
          const points = createDistortedLine(pins[i].x, pins[i].y, pins[j].x, pins[j].y);
          lines.push({ points, opacity: 0.4 });
        }
      }

      // Connect each pin to 2 nearest neighbors
      for (let i = 0; i < pins.length; i++) {
        const pin = pins[i];
        const distances = pins
          .map((p, idx) => ({ pin: p, idx, dist: Math.hypot(p.x - pin.x, p.y - pin.y) }))
          .filter((d) => d.idx !== i)
          .sort((a, b) => a.dist - b.dist);

        const connectionsToMake = Math.min(2, distances.length);

        for (let j = 0; j < connectionsToMake; j++) {
          const targetPin = distances[j].pin;
          const connectionKey = [Math.min(i, distances[j].idx), Math.max(i, distances[j].idx)].join("-");

          if (connected.has(connectionKey)) continue;
          connected.add(connectionKey);

          const points = createDistortedLine(pin.x, pin.y, targetPin.x, targetPin.y);
          lines.push({ points, opacity: 0.4 });
        }
      }

      return lines;
    }

    // Draw terrain lines
    function drawTerrain() {
      if (!ctx) return;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (const line of terrainLines) {
        if (line.points.length < 2) continue;

        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.beginPath();
        ctx.moveTo(line.points[0].x, line.points[0].y);

        for (let i = 1; i < line.points.length; i++) {
          ctx.lineTo(line.points[i].x, line.points[i].y);
        }

        ctx.stroke();
      }
    }

    // Pin class
    class Pin {
      x: number;
      y: number;
      size: number;
      pulse: number;
      isOpen: boolean;
      nextStateChange: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 8;
        this.pulse = Math.random() * Math.PI * 2;
        this.isOpen = Math.random() > 0.2;
        this.nextStateChange = Date.now() + 3000 + Math.random() * 7000;
      }

      update() {
        if (Date.now() > this.nextStateChange) {
          this.isOpen = Math.random() > 0.2;
          this.nextStateChange = Date.now() + 3000 + Math.random() * 7000;
        }
      }

      draw() {
        if (!ctx) return;
        this.pulse += 0.05;
        const pulseSize = 1 + Math.sin(this.pulse) * 0.2;

        const color = this.isOpen ? "#6fffe9" : "#ff6464";
        const glowColor = this.isOpen ? "rgba(111, 255, 233, 0.4)" : "rgba(255, 100, 100, 0.4)";
        const glowColorEnd = this.isOpen ? "rgba(111, 255, 233, 0)" : "rgba(255, 100, 100, 0)";

        // Pin glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, glowColorEnd);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Pin body
        ctx.fillStyle = color;
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y - this.size * pulseSize, this.size * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Pin point
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 0.3 * pulseSize, this.y - this.size * 0.3 * pulseSize);
        ctx.lineTo(this.x, this.y + this.size * pulseSize);
        ctx.lineTo(this.x + this.size * 0.3 * pulseSize, this.y - this.size * 0.3 * pulseSize);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
      }
    }

    // Person class
    class Person {
      x: number;
      y: number;
      size: number;
      opacity: number;
      targetPin: Pin | null;
      reachedPin: boolean;

      constructor() {
        this.x = animationBounds.x + Math.random() * animationBounds.width;
        this.y = animationBounds.y + Math.random() * animationBounds.height;
        this.size = personSize;
        this.opacity = 0.6 + Math.random() * 0.4;
        this.targetPin = null;
        this.reachedPin = false;
        this.assignNewTarget();
      }

      assignNewTarget() {
        if (pins.length === 0) return;

        const openPins = pins.filter((pin) => pin.isOpen);

        if (openPins.length > 0) {
          this.targetPin = openPins[Math.floor(Math.random() * openPins.length)];
          this.reachedPin = false;
        } else {
          this.targetPin = null;
        }
      }

      update() {
        if (!this.targetPin || !this.targetPin.isOpen) {
          this.assignNewTarget();
        }

        if (!this.targetPin || pins.length === 0) return;

        const dx = this.targetPin.x - this.x;
        const dy = this.targetPin.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          this.reachedPin = true;
          if (Math.random() < 0.02) {
            this.assignNewTarget();
          }
          return;
        }

        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * personSpeed;
        this.y += Math.sin(angle) * personSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;

        // Head
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size);
        ctx.lineTo(this.x, this.y + this.size * 3);
        ctx.stroke();

        // Arms
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 1.5, this.y + this.size * 1.5);
        ctx.lineTo(this.x + this.size * 1.5, this.y + this.size * 1.5);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size * 3);
        ctx.lineTo(this.x - this.size, this.y + this.size * 5);
        ctx.moveTo(this.x, this.y + this.size * 3);
        ctx.lineTo(this.x + this.size, this.y + this.size * 5);
        ctx.stroke();
      }
    }

    // Initialize
    function init() {
      const cornerMargin = 150;
      const cornerPadding = 50;

      pins = [];
      people = [];

      // Create corner pins
      const width = canvas?.width || window.innerWidth;
      const height = canvas?.height || window.innerHeight;
      
      pins.push(
        new Pin(cornerPadding + Math.random() * cornerMargin, cornerPadding + Math.random() * cornerMargin)
      );
      pins.push(
        new Pin(
          width - cornerMargin - cornerPadding + Math.random() * cornerMargin,
          cornerPadding + Math.random() * cornerMargin
        )
      );
      pins.push(
        new Pin(
          cornerPadding + Math.random() * cornerMargin,
          height - cornerMargin - cornerPadding + Math.random() * cornerMargin
        )
      );
      pins.push(
        new Pin(
          width - cornerMargin - cornerPadding + Math.random() * cornerMargin,
          height - cornerMargin - cornerPadding + Math.random() * cornerMargin
        )
      );

      // Create remaining pins
      for (let i = 4; i < numPins; i++) {
        const x = animationBounds.x + 50 + Math.random() * (animationBounds.width - 100);
        const y = animationBounds.y + 50 + Math.random() * (animationBounds.height - 100);
        pins.push(new Pin(x, y));
      }

      terrainLines = generateTerrainLines();

      // Create people
      for (let i = 0; i < numPeople; i++) {
        people.push(new Person());
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawTerrain();

      for (const pin of pins) {
        pin.update();
        pin.draw();
      }

      for (const person of people) {
        person.update();
        person.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Handle resize with debouncing
    const handleResize = () => {
      // Clear existing timeout
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      // Debounce: wait 300ms after last resize event
      resizeTimeout = setTimeout(() => {
        const sizeChanged = setCanvasSize();

        // Only re-initialize if size actually changed meaningfully
        if (sizeChanged) {
          init();
        }
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    // Start
    init();
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{
        minHeight: '100%',
        minWidth: '100%',
        touchAction: 'none'
      }}
    />
  );
}

