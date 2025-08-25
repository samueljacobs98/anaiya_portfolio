import { image, project } from "./utils";

const name = "love-is-a-path-of-least-resistance";

export const loveIsAPathOfLeastResistance = project(name, [
  image("curtains", `/images/${name}/curtains.jpg`, "Curtain 1", {
    width: 1000,
    height: 1000,
  }),
  image("in-the-sun", `/images/${name}/in-the-sun.jpg`, "In the Sun", {
    width: 1000,
    height: 1000,
  }),
  image(
    "love-is-a-path-of-least-resistance",
    `/images/${name}/love-is-a-path-of-least-resistance.jpg`,
    "Love is a Path of Least Resistance",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "out-the-window",
    `/images/${name}/out-the-window.jpg`,
    "Out the Window",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
