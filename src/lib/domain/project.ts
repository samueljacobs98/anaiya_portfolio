import { Image } from "./image";

export class Project {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly tags: Set<string>,
    public readonly images: Image[]
  ) {}

  asObject(): {
    id: string;
    name: string;
    tags: string[];
    images: Image[];
  } {
    return {
      id: this.id,
      name: this.name,
      tags: Array.from(this.tags),
      images: this.images,
    };
  }

  static fromObject(obj: {
    id: string;
    name: string;
    tags: string[];
    images: Image[];
  }): Project {
    return new Project(obj.id, obj.name, new Set(obj.tags), obj.images);
  }
}
