"use client";

import { useEffect, useRef, useState } from "react";

const SPEED = 6.4; // px per ~16.7ms frame while running
const CATCH_DISTANCE = 22; // stop closing in once this close to the cursor
const FRAME_MS = 120; // leg-swap interval while running

// Native drawing grid. The canvas element is rendered at exactly this size
// (no CSS up/downscale) so every shape stays crisp — shrinking a canvas
// below its native resolution is what causes pixel art to blur.
const GRID_W = 64;
const GRID_H = 44;

const GREY = "#9c9a95";
const DARK = "#57544f";
const WHITE = "#f4f1ea";
const EYE = "#6fa86a";
const PUPIL = "#191713";

type Pose = "rest" | "run-h" | "run-v";

function drawCat(ctx: CanvasRenderingContext2D, pose: Pose, frame: 0 | 1) {
  ctx.clearRect(0, 0, GRID_W, GRID_H);
  ctx.imageSmoothingEnabled = false;
  ctx.lineCap = "round";

  if (pose === "rest") {
    // tail, curled to one side, with stripe rings + white tip
    ctx.strokeStyle = GREY;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(38, 29);
    ctx.quadraticCurveTo(46, 32, 44, 38);
    ctx.quadraticCurveTo(43, 40, 39, 40);
    ctx.stroke();
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(43, 30);
    ctx.lineTo(41, 33);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(45, 34);
    ctx.lineTo(43, 37);
    ctx.stroke();
    ctx.fillStyle = WHITE;
    ctx.beginPath();
    ctx.ellipse(40, 40, 2.2, 1.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // body
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.ellipse(30, 28, 10, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(30, 28, 10, 12, 0, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = WHITE;
    ctx.beginPath();
    ctx.ellipse(30, 35, 6.5, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(21, 20);
    ctx.lineTo(25, 22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 25);
    ctx.lineTo(24, 27);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(39, 20);
    ctx.lineTo(35, 22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(40, 25);
    ctx.lineTo(36, 27);
    ctx.stroke();
    ctx.restore();

    // front paws
    ctx.fillStyle = WHITE;
    ctx.beginPath();
    ctx.ellipse(26, 39, 3, 2.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(34, 39, 3, 2.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // head, facing the viewer (symmetric — two eyes)
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.ellipse(30, 13, 7.5, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(30, 13, 7.5, 7, 0, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = WHITE;
    ctx.beginPath();
    ctx.ellipse(30, 17, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.moveTo(27, 7);
    ctx.lineTo(30, 10);
    ctx.lineTo(33, 7);
    ctx.stroke();
    ctx.fillStyle = DARK;
    ctx.beginPath();
    ctx.ellipse(30, 15.3, 0.9, 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    // slight smile — dips at the chin then curls the corners up
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 16.3);
    ctx.quadraticCurveTo(28.5, 17.5, 26.9, 16.1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(30, 16.3);
    ctx.quadraticCurveTo(31.5, 17.5, 33.1, 16.1);
    ctx.stroke();
    ctx.restore();

    // ears
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.moveTo(23, 9);
    ctx.lineTo(21, 1);
    ctx.lineTo(28, 7);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(37, 9);
    ctx.lineTo(39, 1);
    ctx.lineTo(32, 7);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = DARK;
    ctx.beginPath();
    ctx.ellipse(21.5, 2.5, 1.4, 1.6, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(38.5, 2.5, 1.4, 1.6, 0.4, 0, Math.PI * 2);
    ctx.fill();

    // eyes
    ctx.fillStyle = EYE;
    ctx.beginPath();
    ctx.ellipse(27, 13, 1.3, 1.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(33, 13, 1.3, 1.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PUPIL;
    ctx.beginPath();
    ctx.ellipse(27, 13.3, 0.5, 0.9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(33, 13.3, 0.5, 0.9, 0, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (pose === "run-v") {
    // back-facing run cycle, shared by both vertical directions — the
    // wrapper rotates this 180° for "running down" so it's the same art
    // flipped, rather than a separate front-facing pose.
    const bounce = frame === 1 ? -1.5 : 0;
    const swing = frame === 1 ? 1 : -1;

    // tail, raised, flicking as it runs off
    ctx.strokeStyle = GREY;
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(30, 19 + bounce);
    ctx.quadraticCurveTo(30 + swing * 6, 11 + bounce, 30 + swing * 4, 5 + bounce);
    ctx.stroke();
    ctx.fillStyle = WHITE;
    ctx.beginPath();
    ctx.ellipse(30 + swing * 4, 5 + bounce, 1.8, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // back legs
    ctx.strokeStyle = GREY;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(24, 35 + bounce);
    ctx.lineTo(23 - swing * 2, 41 + bounce);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(36, 35 + bounce);
    ctx.lineTo(37 + swing * 2, 41 + bounce);
    ctx.stroke();
    ctx.fillStyle = DARK;
    ctx.beginPath();
    ctx.ellipse(23 - swing * 2, 41 + bounce, 1.8, 1.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(37 + swing * 2, 41 + bounce, 1.8, 1.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // body, seen from behind — no belly patch, just the back with faint stripes
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.ellipse(30, 27 + bounce, 9.5, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(25, 19 + bounce);
    ctx.lineTo(25, 31 + bounce);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(30, 17 + bounce);
    ctx.lineTo(30, 33 + bounce);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(35, 19 + bounce);
    ctx.lineTo(35, 31 + bounce);
    ctx.stroke();

    // head, seen from behind — ears and a faint centre stripe, no face
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.ellipse(30, 12 + bounce, 7.3, 6.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = DARK;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 6 + bounce);
    ctx.lineTo(30, 17 + bounce);
    ctx.stroke();

    // ears
    ctx.fillStyle = GREY;
    ctx.beginPath();
    ctx.moveTo(23, 8 + bounce);
    ctx.lineTo(21, 1 + bounce);
    ctx.lineTo(27, 6 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(37, 8 + bounce);
    ctx.lineTo(39, 1 + bounce);
    ctx.lineTo(33, 6 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = DARK;
    ctx.beginPath();
    ctx.ellipse(21.5, 2.5 + bounce, 1.3, 1.5, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(38.5, 2.5 + bounce, 1.3, 1.5, 0.4, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // RUN-H pose — side profile, thin legs that actually swap position each
  // frame to fake a two-step gallop cycle, plus a 1.5px body/head bounce.
  const bounce = frame === 1 ? -1.5 : 0;

  ctx.strokeStyle = GREY;
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  ctx.moveTo(16, 22 + bounce);
  ctx.quadraticCurveTo(6, 18 + bounce, 4, 8 + bounce);
  ctx.stroke();
  ctx.strokeStyle = DARK;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(12, 19 + bounce);
  ctx.lineTo(13, 22 + bounce);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(8, 14 + bounce);
  ctx.lineTo(9, 17 + bounce);
  ctx.stroke();
  ctx.fillStyle = WHITE;
  ctx.beginPath();
  ctx.ellipse(4, 8 + bounce, 2, 1.8, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = GREY;
  ctx.lineWidth = 2.4;
  let backLegEnd: [number, number];
  let frontLegEnd: [number, number];
  if (frame === 0) {
    ctx.beginPath();
    ctx.moveTo(20, 30);
    ctx.lineTo(9, 39);
    ctx.stroke();
    backLegEnd = [9, 39];
    ctx.beginPath();
    ctx.moveTo(42, 30);
    ctx.lineTo(50, 39);
    ctx.stroke();
    frontLegEnd = [50, 39];
  } else {
    ctx.beginPath();
    ctx.moveTo(22, 30);
    ctx.lineTo(27, 38);
    ctx.stroke();
    backLegEnd = [27, 38];
    ctx.beginPath();
    ctx.moveTo(40, 30);
    ctx.lineTo(35, 38);
    ctx.stroke();
    frontLegEnd = [35, 38];
  }
  ctx.fillStyle = WHITE;
  ctx.beginPath();
  ctx.ellipse(backLegEnd[0], backLegEnd[1], 2, 1.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(frontLegEnd[0], frontLegEnd[1], 2, 1.6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = GREY;
  ctx.beginPath();
  ctx.ellipse(30, 26 + bounce, 15, 5.5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(30, 26 + bounce, 15, 5.5, 0, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle = WHITE;
  ctx.beginPath();
  ctx.ellipse(30, 32 + bounce, 13, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = DARK;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(20, 21 + bounce);
  ctx.lineTo(23, 25 + bounce);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(27, 20 + bounce);
  ctx.lineTo(30, 24 + bounce);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(34, 20 + bounce);
  ctx.lineTo(37, 24 + bounce);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = GREY;
  ctx.beginPath();
  ctx.ellipse(47, 18 + bounce, 6.5, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(47, 18 + bounce, 6.5, 6, 0, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle = WHITE;
  ctx.beginPath();
  ctx.ellipse(51, 21 + bounce, 4, 3.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = DARK;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(43, 13 + bounce);
  ctx.lineTo(46, 15 + bounce);
  ctx.stroke();
  ctx.fillStyle = DARK;
  ctx.beginPath();
  ctx.ellipse(54, 19.5 + bounce, 0.8, 0.7, 0, 0, Math.PI * 2);
  ctx.fill();
  // slight smile — dips then curls back up toward the cheek
  ctx.strokeStyle = DARK;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(54, 20.4 + bounce);
  ctx.quadraticCurveTo(52.9, 21.4, 50.7, 20.1 + bounce);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = GREY;
  ctx.beginPath();
  ctx.moveTo(42, 14 + bounce);
  ctx.lineTo(41, 6 + bounce);
  ctx.lineTo(46, 12 + bounce);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(52, 14 + bounce);
  ctx.lineTo(53, 6 + bounce);
  ctx.lineTo(48, 12 + bounce);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = DARK;
  ctx.beginPath();
  ctx.ellipse(41.5, 7.5 + bounce, 1.3, 1.5, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(52.5, 7.5 + bounce, 1.3, 1.5, 0.3, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = EYE;
  ctx.beginPath();
  ctx.ellipse(50, 18 + bounce, 1.3, 1.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = PUPIL;
  ctx.beginPath();
  ctx.ellipse(50, 18.3 + bounce, 0.5, 0.9, 0, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * A grey-and-white tabby pixel cat, drawn on a canvas (shapes, not a raster
 * image) so it stays crisp at its native size. Sits and breathes while the
 * cursor is idle. The moment it needs to move it swaps to a run cycle —
 * side profile (flipped left/right) when travel is mostly horizontal, or the
 * back-facing run when travel is mostly vertical (a scroll push): unrotated
 * for running up, rotated 180° for running down, so it's the same art for
 * both directions. Legs alternate every ~120ms.
 */
export default function PixelCat() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pose, setPose] = useState<Pose>("rest");
  const [frame, setFrame] = useState<0 | 1>(0);
  const [facing, setFacing] = useState<1 | -1>(1);
  const [vDir, setVDir] = useState<1 | -1>(-1);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canRun =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canRun) return;

    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.75 };
    const pos = { ...target };
    const mousePos = { ...target };
    const poseRef = { current: "rest" as Pose };
    const movingRef = { current: false };
    const arrivedRef = { current: true };
    let raf = 0;
    let last = performance.now();

    const handleMove = (event: MouseEvent) => {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;
      target.x = mousePos.x;
      target.y = mousePos.y;
      const dx = target.x - pos.x;
      const dy = target.y - 18 - pos.y;
      if (Math.hypot(dx, dy) > CATCH_DISTANCE) {
        arrivedRef.current = false;
      }
    };
    window.addEventListener("mousemove", handleMove);

    // Scrolling runs the cat regardless of whether the mouse is moving.
    // isScrollingRef stays true for as long as scroll events keep arriving
    // (each one resets the 180ms timeout), so it keeps running for the
    // whole gesture rather than reaching a point and stopping. It holds
    // near the mouse's last known position, offset a little in the scroll
    // direction, instead of wandering off across the screen.
    const isScrollingRef = { current: false };
    const scrollDirRef = { current: 1 as 1 | -1 };
    let scrollStopTimer = 0;
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      if (Math.abs(delta) < 2) return;

      scrollDirRef.current = delta > 0 ? 1 : -1;
      isScrollingRef.current = true;
      window.clearTimeout(scrollStopTimer);
      scrollStopTimer = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 180);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.7, 3);
      last = now;

      let nextPose: Pose;

      if (isScrollingRef.current) {
        // Scroll overrides the normal mouse-chase: run in the scroll
        // direction and hold just off the mouse's last position, however
        // still the mouse itself is. arrivedRef stays false so that once
        // scrolling stops, the usual chase logic below smoothly finishes
        // walking the rest of the way back to the actual cursor.
        const dir = scrollDirRef.current;
        const offsetX = mousePos.x;
        const offsetY =
          dir === 1
            ? Math.min(window.innerHeight - GRID_H / 2, mousePos.y + 60)
            : Math.max(GRID_H / 2, mousePos.y - 60);
        const dx2 = offsetX - pos.x;
        const dy2 = offsetY - 18 - pos.y;
        const dist2 = Math.hypot(dx2, dy2);
        if (dist2 > 4) {
          const step = SPEED * dt;
          pos.x += (dx2 / dist2) * step;
          pos.y += (dy2 / dist2) * step;
        }
        arrivedRef.current = false;
        nextPose = "run-v";
        setVDir(dir);
      } else {
        const dx = target.x - pos.x;
        const dy = target.y - 18 - pos.y; // aim just above the pointer tip
        const dist = Math.hypot(dx, dy);

        // Pose/movement is driven by "has the cat actually reached the
        // target", not a fixed timer since the last input — a timer cut the
        // run short on a long flick across the screen. arrivedRef only flips
        // on an explicit crossing (true once the gap closes, false again on
        // the next input that lands far away), so it can't flicker the way
        // re-checking distance every frame would.
        if (dist <= CATCH_DISTANCE) {
          arrivedRef.current = true;
        }

        nextPose = "rest";
        if (!arrivedRef.current) {
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);
          // Which pose depends on which axis dominates the remaining travel.
          // The +4 margin between axes is hysteresis so near-diagonal travel
          // doesn't flicker between the side run and the up/down run.
          if (absDy > absDx + 4) {
            nextPose = "run-v";
            setVDir(dy > 0 ? 1 : -1);
          } else {
            nextPose = "run-h";
            if (absDx > 3) setFacing(dx > 0 ? 1 : -1);
          }
        }

        if (!arrivedRef.current) {
          const step = SPEED * dt;
          pos.x += (dx / dist) * step;
          pos.y += (dy / dist) * step;
        }
      }

      movingRef.current = nextPose !== "rest";

      if (poseRef.current !== nextPose) {
        poseRef.current = nextPose;
        setPose(nextPose);
      }

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${pos.x - GRID_W / 2}px, ${
          pos.y - GRID_H / 2
        }px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const frameLoop = window.setInterval(() => {
      setFrame((f) => (movingRef.current ? (f === 0 ? 1 : 0) : 0));
    }, FRAME_MS);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollStopTimer);
      cancelAnimationFrame(raf);
      window.clearInterval(frameLoop);
    };
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) drawCat(ctx, pose, frame);
  }, [pose, frame]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] will-change-transform"
    >
      <div
        style={{
          transform:
            pose === "run-h"
              ? `scaleX(${facing})`
              : pose === "run-v"
              ? `rotate(${vDir === 1 ? 180 : 0}deg)`
              : undefined,
        }}
      >
        <div className={pose === "rest" ? "cat-breathe" : undefined}>
          <canvas
            ref={canvasRef}
            width={GRID_W}
            height={GRID_H}
            style={{ width: GRID_W, height: GRID_H, imageRendering: "pixelated" }}
          />
        </div>
      </div>
    </div>
  );
}
