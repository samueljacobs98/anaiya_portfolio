import { image, project } from "./utils";

const name = "tata-1mg";

export const tata1mg = project(name, [
  image("biology", `/images/${name}/biology.png`, "Biology", {
    width: 1000,
    height: 1000,
  }),
  image("family", `/images/${name}/family.png`, "Family", {
    width: 1000,
    height: 1000,
  }),
  image(
    "girl with flower",
    `/images/${name}/girl-with-flower.png`,
    "Girl with Flower",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "person dark green",
    `/images/${name}/person-dark-green.png`,
    "Person Dark Green",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "person light green",
    `/images/${name}/person-light-green.png`,
    "Person Light Green",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image("person pink", `/images/${name}/person-pink.png`, "Person Pink", {
    width: 1000,
    height: 1000,
  }),
  image("person red", `/images/${name}/person-red.png`, "Person Red", {
    width: 1000,
    height: 1000,
  }),
  image(
    "person turquoise",
    `/images/${name}/person-turquoise.png`,
    "Person Turquoise",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image("person yellow", `/images/${name}/person-yellow.png`, "Person Yellow", {
    width: 1000,
    height: 1000,
  }),
]);
