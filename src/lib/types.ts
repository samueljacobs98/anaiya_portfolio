export type Image = {
  id: string;
  name: string;
  path: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  images: Image[];
};
