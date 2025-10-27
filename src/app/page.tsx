import ContentGrid from "@/components/card/ContentGrid";
import SectionTitle from "@/components/common/SectionTitle";
import { VIDEOS } from "@/data/data";

function HomePage() {
  return (
    <section className="app-container app-padding app-space section-space">
      <section>
        <SectionTitle label="Recently Uploaded" />
        <ContentGrid items={VIDEOS} itemType="video" />
      </section>
      <section>
        <SectionTitle label="Most Viewed" />
        <ContentGrid items={VIDEOS} itemType="video" />
      </section>
    </section>
  );
}

export default HomePage;
