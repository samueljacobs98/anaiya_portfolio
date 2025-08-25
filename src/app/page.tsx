import { Layout, Column } from "@/components/ui/layout";
import { projects } from "@/lib/assets/projects";
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
        <Column
          key={index}
          images={columnImages}
          offset={(index % 4) * 4 + 2}
        />
      ))}
    </Layout>
  );
}
