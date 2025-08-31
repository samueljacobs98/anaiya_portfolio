import { Project } from "@/lib/domain/project";
import { indianGiftsPortal } from "./indian-gifts-portal";
import { loveIsAPathOfLeastResistance } from "./love-is-a-path-of-least-resistance";
import { niyo } from "./niyo";
import { purplle } from "./purplle";
import { tata1mg } from "./tata-1mg";
import { tataZoyaBeyond } from "./tata-zoya-beyond";
import { tataZoyaHerBecoming } from "./tata-zoya-her-becoming";
import { tataZoyaMyEmbrace } from "./tata-zoya-my-embrace";
import { theHousekeeper } from "./the-housekeeper";
import { whatIsYourSpiritAnimal } from "./what-is-your-spirit-animal";
import { whereCloudsMeet } from "./where-clouds-meet";
import { wheresHomeForYou } from "./wheres-home-for-you";

export const projects = {
  indianGiftsPortal,
  loveIsAPathOfLeastResistance,
  niyo,
  purplle,
  tata1mg,
  tataZoyaBeyond,
  tataZoyaHerBecoming,
  tataZoyaMyEmbrace,
  theHousekeeper,
  whatIsYourSpiritAnimal,
  whereCloudsMeet,
  wheresHomeForYou,
} as const;

const projectIdsMap = Object.entries(projects).reduce((map, [_, project]) => {
  map.set(project.id, project);
  return map;
}, new Map<string, Project>());

export const getProjectById = (id: string): Project | null => {
  if (!projectIdsMap.has(id)) {
    return null;
  }
  return projectIdsMap.get(id)!;
};
