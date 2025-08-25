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
  image("dollhouse", name, `/images/${name}/dollhouse.png`, "Dollhouse", {
    width: 1000,
    height: 1000,
  }),
  image("grandpa", name, `/images/${name}/grandpa.png`, "Grandpa", {
    width: 1000,
    height: 1000,
  }),
  image("heart", name, `/images/${name}/heart.png`, "Heart", {
    width: 1000,
    height: 1000,
  }),
]);
