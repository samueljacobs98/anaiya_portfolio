import { image, project } from "@/lib/utils";

const path = "/images/niyo";

export const niyo = project("Niyo", (projectId) => [
  image("niyo", "Niyo", projectId, `${path}/niyo.png`, "Niyo", {
    width: 1000,
    height: 1000,
  }),
]);
