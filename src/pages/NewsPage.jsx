import News from "../components/sections/News";
import CTA from "../components/sections/CTA";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";

export default function NewsPage() {
  return (
    <div className="pt-24 pb-20 bg-gym-bg">
      <Seo
        title="Actualités & Conseils Fitness | Club Med Gym El Mourouj"
        description="Retrouvez les actualités, conseils fitness, entraînement et bien-être de Club Med Gym à El Mourouj 1, Ben Arous."
        canonical="/actualites"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          badge="Actualités"
          title="Ce qui se passe au"
          highlight="Club"
          subtitle="Nouvelles activités, événements et annonces de nos coachs"
        />
      </div>
      <News />
      <CTA />
    </div>
  );
}
