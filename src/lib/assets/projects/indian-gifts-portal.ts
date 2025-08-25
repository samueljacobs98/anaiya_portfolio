import { image, project } from "@/lib/utils";

const path = "/images/indian-gifts-portal";

export const indianGiftsPortal = project("Indian Gifts Portal", (projectId) => [
  image(
    "igp-logo",
    "Indian Gifts Portal",
    projectId,
    `${path}/igp-logo.png`,
    "Indian Gifts Portal Logo",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
