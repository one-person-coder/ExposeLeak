import ContentGrid from "@/components/card/ContentGrid";
import SectionTitle from "@/components/common/SectionTitle";
import { VIDEOS } from "@/data/data";

interface SearchPropsType {
  params: Promise<{ query: string }>;
}

async function SearchPage({ params }: SearchPropsType) {
  const { query } = await params;
  return (
    <section className="app-container app-padding app-space section-space">
      <section>
        <SectionTitle label={`Search: ${query.replace("-", " ").toLowerCase()}`} />
        <ContentGrid items={VIDEOS} itemType="video" />
      </section>
    </section>
  );
}

export default SearchPage;
