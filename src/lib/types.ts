export type Image = {
  id: string;
  projectId: string;
  name: string;
  path: string;
  alt: string;
  width: number;
  height: number;
  side: "left" | "right" | "top" | "bottom";
  tags: Set<string>;
  dropShadow: boolean;
  priority: boolean;
};

export type Project = {
  id: string;
  name: string;
  tags: Set<string>;
  images: Image[];
};
