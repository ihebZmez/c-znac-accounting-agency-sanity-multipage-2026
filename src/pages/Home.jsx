// src/pages/Home.jsx
import ConsultingOverview from "../components/sections/ConsultingOverview";
import Seo from "../components/seo/Seo";

const Home = () => (
  <>
    <Seo
      title="ZNAC | Conseil financier, juridique & stratégique en Tunisie"
      description="Cabinet de conseil financier, juridique, fiscal et stratégique pour les entreprises et les investisseurs étrangers en Tunisie."
      canonical="/"
    />
    <ConsultingOverview />
  </>
);

export default Home;
