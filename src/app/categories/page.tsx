import GridCard from "@/components/card/ContentGrid";
import SectionTitle from "@/components/common/SectionTitle";
import { CATEGORIES } from "@/data/data";

function HomePage() {
  return (
    <section className="app-container app-padding app-space section-space">
      <section>
        <SectionTitle label="Categories" />
        <GridCard items={CATEGORIES} itemType="category" />
      </section>
    </section>
  );
}

export default HomePage;
