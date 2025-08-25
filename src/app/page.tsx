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
              priority={image.priority}
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
