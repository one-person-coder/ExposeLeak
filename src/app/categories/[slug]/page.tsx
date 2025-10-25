import React from "react";

interface CategorySlugPropsType {
  params: Promise<{ slug: string }>;
}

async function CategorySlugPage({ params }: CategorySlugPropsType) {
  const { slug } = await params;
  return (
    <div>
      <h1 className="font-semibold text-primary m-20 text-center dark:text-primary-light">{slug.replace("-", " ").toUpperCase()}</h1>
    </div>
  );
}

export default CategorySlugPage;
