"use client";

import { cn } from "@/lib/utils";
import { DraggableContainer } from "./draggable-container";
import { AnimatedImage } from "./animated-image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import type { Image } from "@/lib/types";

function Item({ image, index }: { image: Image; index: number }) {
  return (
    <Tooltip key={image.id}>
      <TooltipTrigger>
        <AnimatedImage
          className="cursor-grab max-w-sm"
          src={image.path}
          alt={image.alt}
          width={image.width}
          height={image.height}
          dropShadow={image.dropShadow}
          hoverScale={1.25}
          range={400}
          animationDelay={0.3 * (2 % index)}
          priority={image.priority}
        />
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>{image.projectId}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function Column({
  className,
  offset,
  images,
}: {
  className?: string;
  offset?: number;
  images: Image[];
}) {
  return (
    <div className={cn("flex flex-col gap-y-[12rem]", className)}>
      {offset && <div style={{ height: `${offset}rem` }}></div>}
      {images.map((image, index) => (
        <Item key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}

export function Layout({
  children,
  columns = 12,
}: {
  columns?: number;
  children: React.ReactNode;
}) {
  return (
    <DraggableContainer>
      <div
        className="grid gap-x-[12rem] px-12 py-6"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(20vw, 1fr))`,
        }}
      >
        {children}
      </div>
    </DraggableContainer>
  );
}
