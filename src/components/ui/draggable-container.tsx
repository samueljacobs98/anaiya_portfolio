import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";

type Constraints = { top: number; left: number; right: number; bottom: number };

export function DraggableContainer({ children }: { children: ReactNode }) {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hasCenteredRef = useRef(false);

  const computeConstraints = () => {
    const el = surfaceRef.current;
    if (!el) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const left = Math.min(0, vw - w);
    const top = Math.min(0, vh - h);
    const right = 0;
    const bottom = 0;

    setConstraints({ top, left, right, bottom });

    // Center only once on mount
    if (!hasCenteredRef.current) {
      x.set(-(w - vw) / 2);
      y.set(-(h - vh) / 2);
      hasCenteredRef.current = true;
    } else {
      // Clamp current position to new constraints (after resize, etc.)
      const clamp = (v: number, min: number, max: number) =>
        Math.max(min, Math.min(max, v));
      x.set(clamp(x.get(), left, right));
      y.set(clamp(y.get(), top, bottom));
    }
  };

  useLayoutEffect(() => {
    computeConstraints();

    const onResize = () => computeConstraints();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // Watch size changes of the surface (content changes) WITHOUT reacting to style transforms.
    let ro: ResizeObserver | undefined;
    if ("ResizeObserver" in window && surfaceRef.current) {
      ro = new ResizeObserver(() => computeConstraints());
      ro.observe(surfaceRef.current);
    }

    // ❌ No MutationObserver on attributes; that causes the snap-back.
    // If you still want to detect DOM content changes, you can keep MutationObserver
    // but DO NOT set attributes:true, and ideally just rely on ResizeObserver.

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ro?.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        touchAction: "none",
        cursor: "grab",
      }}
    >
      <motion.div
        ref={surfaceRef}
        drag
        dragConstraints={constraints}
        dragElastic={0}
        dragMomentum={false}
        initial={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "fit-content",
          // width: "calc(200vw + 2px)",
          userSelect: "none",
          WebkitUserSelect: "none",
          willChange: "transform",
          cursor: "grab",
          x,
          y,
        }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
