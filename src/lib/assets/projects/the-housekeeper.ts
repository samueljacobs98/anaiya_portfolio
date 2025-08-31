import { image, project, text } from "@/lib/utils";

const path = "/images/the-housekeeper";

export const theHousekeeper = project("The Housekeeper", (projectId) => [
  text(
    "artist-and-art",
    projectId,
    "the housekeeper\ndollhouse automaton\n2025"
  ),
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
  text(
    "text-1",
    projectId,
    "what does it mean to keep a house that is never truly yours?"
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
  text(
    "text-2",
    projectId,
    "i built this house with material i hadn’t used before, going through rounds of trial and error. it started in 2D, my drawings emerging from a crash course in mechanical engineering, scribbles in a notebook that translated into a very heavy illustrator file :) i then laser cut and reworked the pieces over and over to make sure the mechanisms moved the way they should. the interactions had to be precise between each gear, the dimensions, the weight, the movement—until it finally came together in 3D. the process of making mirrored the repetitive, methodical, intensive nature of the topic itself."
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
  text(
    "text-3",
    projectId,
    "the method, mechanical, is inspired by my late grandfather, a horologist, WW2 veteran and lifelong migrant. he spent his life repairing intricate timepieces, work that demanded patience, empathy and skill. though the war robbed years from my grandfather, he seemed to bear the gift of studying, restoring and returning ‘time’.this automaton is something you must move yourself. turning the crank sets the house in motion, revealing the unseen labour of migrant domestic workers—repetitive, skilled, essential."
  ),
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
  text(
    "text-3",
    projectId,
    "by turning the crank, you go from an onlooker to a participant, your interaction raises a question about complicity. this house moves because you choose to set it in motion, the gears now turning — a system that preserves the unseen, invisible, essential."
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
  text(
    "text-3",
    projectId,
    "building on this, i turned the project into a participatory workshop called keeping house for my final rca exhibition in 2025. here, participants explored making, migration, emotion, and unseen labour through the act of assembling and “performing domestic tasks.” folding, cleaning, arranging, rocking — each small gesture became part of a shared reflection on the rhythms of care, labour, and belonging."
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
