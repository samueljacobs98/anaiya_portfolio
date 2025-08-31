import { image, project } from "@/lib/utils";

const path = "/images/love-is-a-path-of-least-resistance";

export const loveIsAPathOfLeastResistance = project(
  "Love is a Path of Least Resistance",
  (projectId) => [
    image(
      "curtains",
      "Curtains",
      projectId,
      `${path}/curtains.png`,
      "Curtain 1",
      {
        width: 1000,
        height: 1000,
      }
    ),
    image(
      "in-the-sun",
      "In the Sun",
      projectId,
      `${path}/in-the-sun.png`,
      "In the Sun",
      {
        width: 1000,
        height: 1000,
      }
    ),
    image(
      "love-is-a-path-of-least-resistance",
      "Love is a Path of Least Resistance",
      projectId,
      `${path}/love-is-a-path-of-least-resistance.png`,
      "Love is a Path of Least Resistance",
      {
        width: 1000,
        height: 1000,
      }
    ),
    image(
      "out-the-window",
      "Out the Window",
      projectId,
      `${path}/out-the-window.png`,
      "Out the Window",
      {
        width: 1000,
        height: 1000,
      }
    ),
  ]
);
