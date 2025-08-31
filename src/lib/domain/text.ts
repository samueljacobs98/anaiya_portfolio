export class Text {
  public readonly type = "text";
  constructor(
    public readonly id: string,
    public readonly projectId: string,
    public readonly text: string
  ) {}
}
