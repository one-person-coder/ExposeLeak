import ContentGrid from "@/components/card/ContentGrid";
import SectionTitle from "@/components/common/SectionTitle";
import { VIDEOS } from "@/data/data";
import React from "react";

interface CategorySlugPropsType {
  params: Promise<{ slug: string }>;
}

async function CategorySlugPage({ params }: CategorySlugPropsType) {
  const { slug } = await params;
  return (
    <section className="app-container app-padding app-space section-space">
      <section>
        <SectionTitle label={slug.replace("-", " ").toUpperCase()} />
        <ContentGrid items={VIDEOS} itemType="video" />
      </section>
    </section>
  );
}

export default CategorySlugPage;
