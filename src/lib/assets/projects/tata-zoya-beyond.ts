import { image, project } from "@/lib/utils";

const name = "tata-zoya-beyond";

export const tataZoyaBeyond = project(name, [
  image(
    "Brand Campaign",
    name,
    `/images/${name}/brand-campaign.png`,
    "Tata Zoya Beyond Brand Campaign",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
