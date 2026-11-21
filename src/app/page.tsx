import { OrganizationStructuredData } from "./_components/OrganizationStructuredData";
import { ArtHero } from "./_components/ArtHero";
import { NatureInterpretation } from "./_components/NatureInterpretation";
import { NatureInterior } from "./_components/NatureInterior";
import { collectionHeading } from "./constants/fonts";
import { ScrollReveal } from "./_components/ScrollReveal";
import { DesignGallery } from "./_components/DesignGallery";
import { SpatialApplications } from "./_components/SpatialApplications";
import { ArtissimoCollection } from "./_components/ArtissimoCollection";
import { AtelierFooter } from "./_components/AtelierFooter";

export default function Home() {
  return (
    <div className={collectionHeading.variable}>
      <OrganizationStructuredData />
      <ScrollReveal>
        <main id="main-content">
          <ArtHero />
          <div className="bg-[#f8f7f3] text-[#242421]">
            <NatureInterpretation />
            <NatureInterior />
            <DesignGallery />
            <SpatialApplications />
            <ArtissimoCollection />
          </div>
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
