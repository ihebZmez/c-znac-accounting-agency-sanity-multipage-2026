import News from "../components/sections/News";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";
import { seoConfig } from "../config/seoConfig";

export default function NewsPage() {
  return (
    <div className="bg-navy pb-20 pt-24">
      <Seo {...seoConfig.news} />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          badge="Actualités"
          title="Actualités et analyses"
          highlight="professionnelles"
          subtitle="Réflexions et informations sur les enjeux des entreprises."
          headingAs="h1"
        />
      </div>
      <News />
    </div>
  );
}
