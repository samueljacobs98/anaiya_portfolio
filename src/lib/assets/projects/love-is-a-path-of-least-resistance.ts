import { image, project } from "@/lib/utils";

const name = "love-is-a-path-of-least-resistance";

export const loveIsAPathOfLeastResistance = project(name, [
  image("curtains", name, `/images/${name}/curtains.png`, "Curtain 1", {
    width: 1000,
    height: 1000,
  }),
  image("in-the-sun", name, `/images/${name}/in-the-sun.png`, "In the Sun", {
    width: 1000,
    height: 1000,
  }),
  image(
    "love-is-a-path-of-least-resistance",
    name,
    `/images/${name}/love-is-a-path-of-least-resistance.png`,
    "Love is a Path of Least Resistance",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "out-the-window",
    name,
    `/images/${name}/out-the-window.png`,
    "Out the Window",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
