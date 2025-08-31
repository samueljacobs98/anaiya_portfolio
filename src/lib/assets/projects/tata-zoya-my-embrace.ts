import { image, project } from "@/lib/utils";

const path = "/images/tata-zoya-my-embrace";

export const tataZoyaMyEmbrace = project(
  "Tata Zoya My Embrace",
  (projectId) => [
    image(
      "my-embrace",
      "Tata Zoya My Embrace",
      projectId,
      `${path}/my-embrace.png`,
      "Tata Zoya My Embrace",
      {
        width: 1000,
        height: 1000,
      },
      {
        priority: true,
      }
    ),
  ]
);
