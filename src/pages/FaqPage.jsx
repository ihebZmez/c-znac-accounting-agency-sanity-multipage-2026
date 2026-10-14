import Seo from "../components/seo/Seo";
import FaqAccordion from "../components/sections/FaqAccordion";
import SectionTitle from "../components/ui/SectionTitle";
import { seoConfig } from "../config/seoConfig";
import { useFaqs } from "../hooks/useFaqs";

const FaqPage = () => {
  const { data: faqs = [] } = useFaqs();

  return (
    <main className="min-h-[70vh] bg-paper px-4 pb-24 pt-36 text-ink md:px-8">
      <Seo {...seoConfig.faq} />
      <div className="container">
        <SectionTitle
          badge="Informations"
          title="Questions fréquentes"
          subtitle="Les réponses aux questions les plus courantes sur nos services."
          align="left"
          headingAs="h1"
        />
        {faqs.length ? (
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        ) : (
          <p className="mt-10 text-ink/60">
            Aucune question n’est publiée pour le moment.
          </p>
        )}
      </div>
    </main>
  );
};

export default FaqPage;
