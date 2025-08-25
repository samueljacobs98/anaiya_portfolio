import { image, project } from "@/lib/utils";

const path = "/images/the-housekeeper";

export const theHousekeeper = project("The Housekeeper", (projectId) => [
  image(
    "artist-and-art",
    "Artist and Art",
    projectId,
    `${path}/artist-and-art.png`,
    "Artist and Art",
    {
      width: 647,
      height: 651,
    }
  ),
  image(
    "construction",
    "Construction",
    projectId,
    `${path}/construction.png`,
    "Construction",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "dollhouse",
    "Dollhouse",
    projectId,
    `${path}/dollhouse.png`,
    "Dollhouse",
    {
      width: 1000,
      height: 1000,
    },
    {
      priority: true,
    }
  ),
  image("grandpa", "Grandpa", projectId, `${path}/grandpa.png`, "Grandpa", {
    width: 1000,
    height: 1000,
  }),
  image("heart", "Heart", projectId, `${path}/heart.png`, "Heart", {
    width: 1000,
    height: 1000,
  }),
  image(
    "inside-the-dollhouse",
    "Inside the Dollhouse",
    projectId,
    `${path}/inside-the-dollhouse.png`,
    "Inside the Dollhouse",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "instructions",
    "Instructions",
    projectId,
    `${path}/instructions.png`,
    "Instructions",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "laser-cuttings",
    "Laser Cuttings",
    projectId,
    `${path}/laser-cuttings.png`,
    "Laser Cuttings",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "mechanical-designs",
    "Mechanical Designs",
    projectId,
    `${path}/mechanical-designs.png`,
    "Mechanical Designs",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "mechanism",
    "Mechanism",
    projectId,
    `${path}/mechanism.png`,
    "Mechanism",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "through-the-window",
    "Through the Window",
    projectId,
    `${path}/through-the-window.png`,
    "Through the Window",
    {
      width: 1000,
      height: 1000,
    }
  ),
  image(
    "workshops",
    "Workshops",
    projectId,
    `${path}/workshops.png`,
    "Workshops",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
