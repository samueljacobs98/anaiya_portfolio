import { AnimatedImage } from "@/components/ui/animated-image";
import { Layout, Column } from "@/components/ui/layout";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/assets/projects";
import type { Image } from "@/lib/types";
import { generateGridItems } from "@/lib/utils";

const COLUMNS = 14;

const getStaticProps = async () => {
  const gridItems = generateGridItems(projects, COLUMNS);

  return {
    props: {
      gridItems,
    },
  };
};

export default async function Home() {
  const {
    props: { gridItems },
  } = await getStaticProps();

  return (
    <Layout columns={COLUMNS}>
      {gridItems.map((columnImages, index) => (
        <Column key={index}>
          <Items images={columnImages} />
        </Column>
      ))}
    </Layout>
  );
}

enum Side {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

const sides = Object.values(Side);

const images = [
  {
    src: "/images/the-housekeeper/artist-and-art.png",
    alt: "Artist and Art",
    project: "the housekeeper",
    width: 647,
    height: 651,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/love-is-a-path-of-least-resistance/love-is-a-path-of-least-resistance.png",
    alt: "Love is a Path of Least Resistance",
    project: "love is a path of least resistance",
    width: 593,
    height: 503,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/what-is-your-spirit-animal/workshop.png",
    alt: "What is Your Spirit Animal",
    project: "what is your spirit animal",
    width: 593,
    height: 503,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/where-clouds-meet/grief-e-journal.png",
    alt: "Where Clouds Meet",
    project: "where clouds meet",
    width: 547,
    height: 547,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/wheres-home-for-you/exhibit.png",
    alt: "Where's Home for You",
    project: "where's home for you",
    width: 475,
    height: 546,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/tata-1mg/girl-with-flower.png",
    alt: "Girl with Flower",
    project: "tata 1mg",
    width: 494,
    height: 626,
    dropShadow: true,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/niyo/niyo.png",
    alt: "Niyo",
    project: "niyo",
    width: 579,
    height: 446,
    dropShadow: true,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/tata-zoya-beyond/brand-campaign.png",
    alt: "Beyond Brand Campaign",
    project: "tata zoya beyond",
    width: 453,
    height: 528,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/tata-zoya-my-embrace/my-embrace.png",
    alt: "My Embrace",
    project: "tata zoya my embrace",
    width: 389,
    height: 584,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/tata-zoya-her-becoming/her-becoming.png",
    alt: "Her Becoming",
    project: "tata zoya her becoming",
    width: 422,
    height: 597,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/purplle/purplle.png",
    alt: "Purplle Logo",
    project: "purplle",
    width: 526,
    height: 511,
    side: sides[Math.floor(Math.random() * 4)],
  },
  {
    src: "/images/indian-gifts-portal/igp-logo.png",
    alt: "IGP Logo",
    project: "indian gifts portal",
    width: 447,
    height: 525,
    side: sides[Math.floor(Math.random() * 4)],
  },
];

function Items({ images }: { images: Image[] }) {
  return (
    <>
      {images.map((image, index) => (
        <Tooltip key={image.id}>
          <TooltipTrigger>
            <AnimatedImage
              className="cursor-grab max-w-sm"
              src={image.path}
              alt={image.alt}
              width={image.width}
              height={image.height}
              dropShadow={image.dropShadow}
              range={200}
              animationDelay={0.3 * (2 % index)}
            />
          </TooltipTrigger>
          <TooltipContent sideOffset={10}>
            <p>{image.projectId}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
