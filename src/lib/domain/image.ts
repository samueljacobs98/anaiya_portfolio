export class Image {
  public readonly type = "image";

  constructor(
    public readonly id: string,
    public readonly projectId: string,
    public readonly name: string,
    public readonly path: string,
    public readonly alt: string,
    public readonly width: number,
    public readonly height: number,
    public readonly side: "left" | "right" | "top" | "bottom",
    public readonly tags: Set<string>,
    public readonly dropShadow: boolean,
    public readonly priority: boolean
  ) {}

  asObject(): ImageObject {
    return {
      id: this.id,
      projectId: this.projectId,
      name: this.name,
      path: this.path,
      alt: this.alt,
      width: this.width,
      height: this.height,
      side: this.side,
      tags: Array.from(this.tags),
      dropShadow: this.dropShadow,
      priority: this.priority,
    };
  }

  static fromObject(obj: ImageObject): Image {
    return new Image(
      obj.id,
      obj.projectId,
      obj.name,
      obj.path,
      obj.alt,
      obj.width,
      obj.height,
      obj.side,
      new Set(obj.tags),
      obj.dropShadow,
      obj.priority
    );
  }
}

export type ImageObject = {
  id: string;
  projectId: string;
  name: string;
  path: string;
  alt: string;
  width: number;
  height: number;
  side: "left" | "right" | "top" | "bottom";
  tags: string[];
  dropShadow: boolean;
  priority: boolean;
};
