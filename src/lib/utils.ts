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
  const gridItems: Image[][] = [];

  for (let i = 0; i < columns; i++) {
    const previousColumn = gridItems[i - 1];
    const column = generateColumn(projects, previousColumn);
    gridItems.push(column);
  }

  return gridItems;
}

function generateColumn(
  projects: Record<string, Project>,
  previousColumn?: Image[]
): Image[] {
  const column: Image[] = [];
  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    attempts++;
    const shuffledProjects = fisherYatesShuffle(Object.values(projects));

    if (isValidArrangement(shuffledProjects, previousColumn)) {
      const imageIdsSet = new Set<string>();

      for (const project of shuffledProjects) {
        const randomImage = getRandomImage(project, imageIdsSet);
        if (randomImage) {
          column.push(randomImage);
        }
      }

      break;
    }
  }

  if (column.length === 0) {
    console.warn(
      `Could not find valid arrangement after ${maxAttempts} attempts, using fallback`
    );
    const imageIdsSet = new Set<string>();
    const shuffledProjects = fisherYatesShuffle(Object.values(projects));

    for (const project of shuffledProjects) {
      const randomImage = getRandomImage(project, imageIdsSet);
      if (randomImage) {
        column.push(randomImage);
      }
    }
  }

  return column;
}

function fisherYatesShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function isValidArrangement(
  currentProjects: Project[],
  previousColumn?: Image[]
): boolean {
  if (!previousColumn) {
    return true;
  }

  for (const [index, project] of currentProjects.entries()) {
    if (
      previousColumn[index]?.projectId === project.id ||
      previousColumn[index + 1]?.projectId === project.id ||
      previousColumn[index - 1]?.projectId === project.id
    ) {
      return false;
    }
  }

  return true;
}

function getRandomImage(
  project: Project,
  imageIdsSet: Set<string>
): Image | null {
  if (!project.images || project.images.length === 0) {
    return null;
  }

  const availableImages = project.images.filter(
    (img) => !imageIdsSet.has(img.id)
  );

  if (availableImages.length === 0) {
    const randomImage =
      project.images[Math.floor(Math.random() * project.images.length)];
    return randomImage;
  }

  const randomImage =
    availableImages[Math.floor(Math.random() * availableImages.length)];
  imageIdsSet.add(randomImage.id);
  return randomImage;
}

export const image = (
  name: string,
  projectId: string,
  path: string,
  alt: string,
  { width, height }: { width: number; height: number },
  {
    side = "left",
    dropShadow = false,
    priority = false,
  }: {
    side?: "left" | "right" | "top" | "bottom";
    dropShadow?: boolean;
    priority?: boolean;
  } = {
    side: "left",
    dropShadow: false,
    priority: false,
  }
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
    priority,
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
