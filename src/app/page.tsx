import { ArtHero } from "./_components/ArtHero";
import { NatureInterior } from "./_components/NatureInterior";
import { collectionHeading } from "./constants/fonts";
import { ScrollReveal } from "./_components/ScrollReveal";
import { SculpturalHarmony } from "./_components/SculpturalHarmony";
import { SpatialApplications } from "./_components/SpatialApplications";
import { ArtissimoCollection } from "./_components/ArtissimoCollection";
import { AtelierFooter } from "./_components/AtelierFooter";

export default function Home() {
  return (
    <div className={collectionHeading.variable}>
      <ScrollReveal>
        <main id="main-content">
          <ArtHero />
          <NatureInterior />
          <div className="bg-white text-[#242421]">
            <SculpturalHarmony />
            <SpatialApplications />
            <ArtissimoCollection />
          </div>
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
