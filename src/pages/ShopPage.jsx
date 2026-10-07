import ShopPartners from "../components/sections/ShopPartners";
import CTA from "../components/sections/CTA";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";

export default function ShopPage() {
  return (
    <div className="pt-24 pb-20 bg-gym-bg">
      <Seo
        title="Boutique Sport & Accessoires | Club Med Gym El Mourouj"
        description="Découvrez la boutique du Club Med Gym à El Mourouj 1, Ben Arous : vêtements, accessoires et produits dédiés au sport et à l'entraînement."
        canonical="/shop"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          badge="Shop & Partenaires"
          title="Recommandé par"
          highlight="nos coachs"
          subtitle="Produits testés et approuvés · Livraison via nos partenaires"
        />
      </div>
      <ShopPartners />
      <CTA />
    </div>
  );
}
