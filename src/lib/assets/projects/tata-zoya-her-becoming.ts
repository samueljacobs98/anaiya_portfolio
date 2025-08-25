import { image, project } from "@/lib/utils";

const path = "/images/tata-zoya-her-becoming";

export const tataZoyaHerBecoming = project(
  "Tata Zoya Her Becoming",
  (projectId) => [
    image(
      "her-becoming",
      "Tata Zoya Her Becoming",
      projectId,
      `${path}/her-becoming.png`,
      "Tata Zoya Her Becoming",
      {
        width: 1000,
        height: 1000,
      }
    ),
  ]
);
