import PersonalTraining from "../components/sections/PersonalTraining";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Seo from "../components/seo/Seo";

export default function PersonalTrainingPage() {
  return (
    <div className="pt-24">
      <Seo
        title="Coaching Personnel à El Mourouj 1 | Club Med Gym"
        description="Découvrez le coaching personnel au Club Med Gym à El Mourouj 1, Ben Arous : accompagnement personnalisé, entraînement adapté et suivi avec nos coachs."
        canonical="/coaching-personnel"
      />
      <PersonalTraining />
      <Testimonials />
      <CTA />
    </div>
  );
}
