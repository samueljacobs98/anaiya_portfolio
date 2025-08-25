import { image, project } from "./utils";

const name = "niyo";

export const niyo = project(name, [
  image("niyo", `/images/${name}/niyo.png`, "Niyo", {
    width: 1000,
    height: 1000,
  }),
]);
