"use client";

import { cn } from "@/lib/utils";
import { DraggableContainer } from "./draggable-container";
import { AnimatedImage } from "./animated-image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Image, type ImageObject } from "@/lib/domain/image";
import { useQueryState } from "nuqs";
import { ProjectSheet } from "../project-sheet";
import { getProjectById } from "@/lib/assets/projects";

function Item({ image, index }: { image: Image; index: number }) {
  const setProject = useQueryState("project")[1];
  const setDImage = useQueryState("d_image")[1];

  const project = getProjectById(image.projectId)!;

  const handleClick = () => {
    setProject(image.projectId);
    setDImage(image.id);
    window.history.pushState(
      {},
      "",
      `/?project=${image.projectId}&d_image=${image.id}`
    );
  };

  return (
    <Tooltip key={image.id}>
      <TooltipTrigger asChild>
        <button type="button" onClick={handleClick}>
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
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>{project.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function Column({
  className,
  offset,
  images: imageObjects,
}: {
  className?: string;
  offset?: number;
  images: ImageObject[];
}) {
  const images = imageObjects.map((image) => Image.fromObject(image));
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
    <>
      <ProjectSheet />

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
    </>
  );
}
