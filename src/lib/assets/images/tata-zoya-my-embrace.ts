import { image, project } from "./utils";

const name = "tata-zoya-my-embrace";

export const tataZoyaMyEmbrace = project(name, [
  image(
    "my-embrace",
    `/images/${name}/my-embrace.png`,
    "Tata Zoya My Embrace",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
