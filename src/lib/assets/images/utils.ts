import type { Image, Project } from "@/lib/types";

export const image = (
  name: string,
  path: string,
  alt: string,
  { width, height }: { width: number; height: number }
): Image => {
  return {
    id: `image-${name}`,
    name,
    path,
    alt,
    width,
    height,
  };
};

export const project = (name: string, images: Image[] = []): Project => {
  return {
    id: `project-${name}`,
    name,
    images,
  };
};
