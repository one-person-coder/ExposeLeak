import VideoGrid from "@/components/card/VideoGrid";
import SectionTitle from "@/components/common/SectionTitle";
import { VIDEOS } from "@/data/data";

function HomePage() {
  return (
    <section className="app-container app-padding app-space section-space">
      <section>
        <SectionTitle label="Recently Uploaded" />
        <VideoGrid videos={VIDEOS} />
      </section>
      <section>
        <SectionTitle label="Most Viewed" />
        <VideoGrid videos={VIDEOS} />
      </section>
    </section>
  );
}

export default HomePage;
