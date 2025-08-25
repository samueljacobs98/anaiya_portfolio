import { image, project } from "@/lib/utils";

const name = "indian-gifts-portal";

export const indianGiftsPortal = project(name, [
  image(
    "igp-logo",
    name,
    `/images/${name}/igp-logo.png`,
    "Indian Gifts Portal Logo",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
