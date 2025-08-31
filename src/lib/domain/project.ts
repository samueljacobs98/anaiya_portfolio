import { Image, ImageObject } from "./image";
import { Text } from "./text";

export class Project {
  private imageMap: Map<string, Image>;
  private textMap: Map<string, Text>;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly tags: Set<string>,
    public readonly content: (Text | Image)[]
  ) {
    this.imageMap = new Map(
      content
        .filter((c): c is Image => c.type === "image")
        .map((c) => [c.id, c])
    );
    this.textMap = new Map(
      content.filter((c): c is Text => c.type === "text").map((c) => [c.id, c])
    );
  }

  getImages(): Image[] {
    return Array.from(this.imageMap.values());
  }

  getTexts(): Text[] {
    return Array.from(this.textMap.values());
  }

  getImage(id: string): Image | undefined {
    return this.imageMap.get(id);
  }

  getText(id: string): Text | undefined {
    return this.textMap.get(id);
  }

  asObject(): {
    id: string;
    name: string;
    tags: string[];
    images: ImageObject[];
  } {
    return {
      id: this.id,
      name: this.name,
      tags: Array.from(this.tags),
      images: this.getImages().map((i) => i.asObject()),
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
