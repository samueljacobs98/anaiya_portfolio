import { image, project } from "@/lib/utils";

const path = "/images/tata-zoya-beyond";

export const tataZoyaBeyond = project("Tata Zoya Beyond", (projectId) => [
  image(
    "Brand Campaign",
    "Brand Campaign",
    projectId,
    `${path}/brand-campaign.png`,
    "Tata Zoya Beyond Brand Campaign",
    {
      width: 1000,
      height: 1000,
    }
  ),
]);
