"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  /** Duration of the entrance animation in seconds (default 1.0) */
  animationDuration?: number;
  /** Delay before the entrance animation starts in seconds (default 0) */
  animationDelay?: number;
  /** Disable the entrance animation entirely (default false) */
  disableAnimation?: boolean;
  /** Disable proximity/hover scaling (default false) */
  disableHover?: boolean;
  /** Use drop-shadow instead of box-shadow for transparent images (default false) */
  dropShadow?: boolean;
  /** Max scale when the pointer is on the image (default 1.08) */
  hoverScale?: number;
  /** Pixel distance around the image within which scaling ramps up (default 100) */
  range?: number;
  /** Viewport intersection threshold: 0..1 or "some"/"all" (default 0.1) */
  intersectionAmount?: number | "some" | "all";
  /** Viewport root margin (default "50px") */
  rootMargin?: string;
}

const AnimatedImage = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  AnimatedImageProps
>(
  (
    {
      className,
      animationDuration = 1.0,
      animationDelay = 0,
      disableAnimation = false,
      disableHover = false,
      dropShadow = false,
      hoverScale = 1.08,
      range = 100,
      intersectionAmount = 0.1,
      rootMargin = "50px",
      alt,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    // Track image load (so we don't hand off proximity scaling until the real pixels are there)
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Has the entrance animation finished? (includes any delay)
    const [hasEntered, setHasEntered] = React.useState(disableAnimation);

    // --- Proximity (0..1) -> scale ---
    const proximity = useMotionValue(0);
    const proximityScale = useTransform(proximity, [0, 1], [1, hoverScale]);

    // Compute distance from pointer to the element's rect and update "proximity"
    const updateProximity = React.useCallback(
      (clientX: number, clientY: number) => {
        const el = containerRef.current;
        if (!el || disableHover || range <= 0) {
          proximity.set(0);
          return;
        }

        const rect = el.getBoundingClientRect();
        const dx = Math.max(rect.left - clientX, 0, clientX - rect.right);
        const dy = Math.max(rect.top - clientY, 0, clientY - rect.bottom);
        const distance = Math.hypot(dx, dy);
        const p = Math.max(0, Math.min(1, 1 - distance / range));
        proximity.set(p);
      },
      [disableHover, range, proximity]
    );

    // Global mouse tracking, but only after entrance has completed (and hover is enabled)
    React.useEffect(() => {
      if (disableHover || !hasEntered) {
        proximity.set(0);
        return;
      }

      let raf = 0;
      let lastX = 0,
        lastY = 0,
        pending = false;

      const onMove = (e: MouseEvent) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!pending) {
          pending = true;
          raf = requestAnimationFrame(() => {
            pending = false;
            updateProximity(lastX, lastY);
          });
        }
      };

      const onLeaveWindow = () => proximity.set(0);

      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeaveWindow);
      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeaveWindow);
        if (raf) cancelAnimationFrame(raf);
      };
    }, [disableHover, hasEntered, updateProximity, proximity]);

    // Entrance animation props (hidden until in-view; delay respected)
    const entranceProps = disableAnimation
      ? {}
      : {
          initial: { opacity: 0, scale: 0.9, visibility: "hidden" as const },
          whileInView: {
            opacity: 1,
            scale: [1.02, 1],
            visibility: "visible" as const,
            transition: {
              duration: animationDuration,
              delay: animationDelay, // 👈 delay before entrance starts
              scale: { times: [0, 1], ease: [0.25, 0.46, 0.45, 0.94] },
            },
          },
          viewport: {
            once: true,
            amount: intersectionAmount,
            margin: rootMargin,
          } as const, // whileInView/viewport API
          onAnimationComplete: () => setHasEntered(true),
        };

    return (
      <motion.div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node as any);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn(
          "relative overflow-hidden will-change-transform",
          !dropShadow && [
            "shadow-[4px_4px_12px_rgba(0,0,0,0.15),2px_2px_6px_rgba(0,0,0,0.1)]",
            !disableHover && [
              "hover:shadow-[6px_6px_20px_rgba(0,0,0,0.2),3px_3px_10px_rgba(0,0,0,0.15)]",
              "transition-shadow duration-200 ease-out",
            ],
          ],
          className
        )}
        style={{
          transformOrigin: "center center",
          // Hand over scaling to proximity ONLY after entrance finished AND image loaded
          scale:
            hasEntered && isLoaded && !disableHover
              ? (proximityScale as unknown as number)
              : undefined,
          isolation: "isolate",
        }}
        {...entranceProps}
      >
        <Image
          {...props}
          alt={alt}
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          onLoadingComplete={() => setIsLoaded(true)}
          className={cn(
            "object-cover w-full h-full",
            dropShadow && [
              "filter drop-shadow-[4px_4px_12px_rgba(0,0,0,0.15)] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.1)]",
              !disableHover && [
                "hover:drop-shadow-[6px_6px_20px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_3px_10px_rgba(0,0,0,0.15)]",
                "transition-[filter] duration-200 ease-out",
              ],
            ]
          )}
        />
      </motion.div>
    );
  }
);

AnimatedImage.displayName = "AnimatedImage";
export { AnimatedImage, type AnimatedImageProps };
