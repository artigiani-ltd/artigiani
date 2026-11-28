import { OrganizationStructuredData } from "./_components/OrganizationStructuredData";
import { ArtHero } from "./_components/ArtHero";
import { AboutPreview } from "./_components/AboutPreview";
import { NatureInterpretation } from "./_components/NatureInterpretation";
import { NatureInterior } from "./_components/NatureInterior";
import { collectionHeading } from "./constants/fonts";
import { ScrollReveal } from "./_components/ScrollReveal";
import { DesignGallery } from "./_components/DesignGallery";
import { SpatialApplications } from "./_components/SpatialApplications";
import { ArtissimoCollection } from "./_components/ArtissimoCollection";
import { AtelierFooter } from "./_components/AtelierFooter";
import { CollectionIntro } from "./_components/CollectionIntro";

export default function Home() {
  return (
    <div
      className={`${collectionHeading.variable} bg-foreground text-background`}
    >
      <OrganizationStructuredData />
      <ScrollReveal>
        <main id="main-content">
          <div className="text-foreground">
            <ArtHero />
            <AboutPreview />
            <div className="bg-surface">
              <NatureInterpretation />
              <NatureInterior />
            </div>
          </div>
          <CollectionIntro />
          <DesignGallery />
          <ArtissimoCollection />
          <SpatialApplications />
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
