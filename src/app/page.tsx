import { Layout, Column } from "@/components/ui/layout";
import { ZoomControls } from "@/components/zoom-controls";
import { projects } from "@/lib/assets/projects";
import { generateGridItems } from "@/lib/utils";
import { MoveIcon } from "lucide-react";

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
    <>
      <Layout columns={COLUMNS}>
        {gridItems.map((columnImages, index) => (
          <Column
            key={index}
            images={columnImages.map((image) => image.asObject())}
            offset={(index % 4) * 4 + 2}
          />
        ))}
      </Layout>
      <div className="fixed bottom-4 right-4 flex gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MoveIcon />
          <p className="text-sm">Drag to explore</p>
        </div>
        <ZoomControls />
      </div>
    </>
  );
}
