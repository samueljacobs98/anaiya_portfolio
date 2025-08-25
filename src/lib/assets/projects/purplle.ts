import { image, project } from "@/lib/utils";

const name = "purplle";

export const purplle = project(name, [
  image("purplle", name, `/images/${name}/purplle.png`, "Purplle", {
    width: 1000,
    height: 1000,
  }),
]);
