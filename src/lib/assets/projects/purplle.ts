import { image, project } from "@/lib/utils";

const path = "/images/purplle";

export const purplle = project("Purplle", (projectId) => [
  image("purplle", "Purplle", projectId, `${path}/purplle.png`, "Purplle", {
    width: 1000,
    height: 1000,
  }),
]);
