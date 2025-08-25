import { image, project } from "@/lib/utils";

const name = "the-housekeeper";

export const theHousekeeper = project(name, [
  image(
    "artist-and-art",
    name,
    `/images/${name}/artist-and-art.png`,
    "Artist and Art",
    {
      width: 647,
      height: 651,
    }
  ),
  image(
    "construction",
    name,
    `/images/${name}/construction.png`,
    "Construction",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "dollhouse",
    name,
    `/images/${name}/dollhouse.png`,
    "Dollhouse",
    {
      width: 1000,
      height: 1000,
    },
    {
      priority: true,
    }
  ),
  image("grandpa", name, `/images/${name}/grandpa.png`, "Grandpa", {
    width: 1000,
    height: 1000,
  }),
  image("heart", name, `/images/${name}/heart.png`, "Heart", {
    width: 1000,
    height: 1000,
  }),
  image(
    "inside-the-dollhouse",
    name,
    `/images/${name}/inside-the-dollhouse.png`,
    "Inside the Dollhouse",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "instructions",
    name,
    `/images/${name}/instructions.png`,
    "Instructions",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "laser-cuttings",
    name,
    `/images/${name}/laser-cuttings.png`,
    "Laser Cuttings",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "mechanical-designs",
    name,
    `/images/${name}/mechanical-designs.png`,
    "Mechanical Designs",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image("mechanism", name, `/images/${name}/mechanism.png`, "Mechanism", {
    width: 1000,
    height: 1000,
  }),
  image(
    "through-the-window",
    name,
    `/images/${name}/through-the-window.png`,
    "Through the Window",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image("workshops", name, `/images/${name}/workshops.png`, "Workshops", {
    width: 1000,
    height: 1000,
  }),
]);
