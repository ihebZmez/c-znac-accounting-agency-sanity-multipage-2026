import Corporate from "../components/sections/Corporate";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Seo from "../components/seo/Seo";

export default function CorporatePage() {
  return (
    <div className="pt-24">
      <Seo
        title="Offres Corporate & Entreprises | Club Med Gym El Mourouj"
        description="Découvrez les offres sportives pour entreprises de Club Med Gym à El Mourouj 1, Ben Arous : fitness, coaching, bien-être et activités sportives pour vos équipes."
        canonical="/corporate"
      />
      <Corporate />
      <Testimonials />
      <CTA />
    </div>
  );
}
