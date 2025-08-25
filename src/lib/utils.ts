import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Image, Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateGridItems(
  projects: Record<string, Project>,
  columns: number = 12
): Image[][] {
  return Array.from({ length: columns }, () => generateColumn(projects));
}

function generateColumn(projects: Record<string, Project>): Image[] {
  const imageIdsSet = new Set<string>();
  const column: Image[] = [];

  const shuffledProjects = Object.values(projects).sort(
    () => Math.random() - 0.5
  );

  for (const project of shuffledProjects) {
    const randomImage = getRandomImage(project, imageIdsSet);
    if (randomImage) column.push(randomImage);
  }

  return column;
}

function getRandomImage(
  project: Project,
  imageIdsSet: Set<string>
): Image | null {
  if (!project.images || project.images.length === 0) {
    return null;
  }

  const randomImage =
    project.images[Math.floor(Math.random() * project.images.length)];
  if (imageIdsSet.has(randomImage.id))
    return getRandomImage(project, imageIdsSet);
  imageIdsSet.add(randomImage.id);
  return randomImage;
}

export const image = (
  name: string,
  projectId: string,
  path: string,
  alt: string,
  { width, height }: { width: number; height: number },
  side: "left" | "right" | "top" | "bottom" = "left",
  dropShadow: boolean = false
): Image => {
  return {
    id: `image-${name}`,
    projectId,
    name,
    path,
    alt,
    width,
    height,
    side,
    tags: new Set<string>(),
    dropShadow,
  };
};

export const project = (name: string, images: Image[] = []): Project => {
  return {
    id: `project-${name}`,
    name,
    images,
    tags: new Set<string>(),
  };
};
