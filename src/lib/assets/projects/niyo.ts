import { image, project } from "@/lib/utils";

const name = "niyo";

export const niyo = project(name, [
  image("niyo", name, `/images/${name}/niyo.png`, "Niyo", {
    width: 1000,
    height: 1000,
  }),
]);
