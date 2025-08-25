import { image, project } from "./utils";

const name = "purplle";

export const purplle = project(name, [
  image("purplle", `/images/${name}/purplle.png`, "Purplle", {
    width: 1000,
    height: 1000,
  }),
]);
