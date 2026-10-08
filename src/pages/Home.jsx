import AgencyHomepage from "../components/sections/AgencyHomepage";
import Seo from "../components/seo/Seo";
import { useSiteSettings } from "../hooks/useSiteSettings";

const Home = () => {
  const { data: settings } = useSiteSettings();
  const seo = settings?.seo || {};

  return (
    <>
      <Seo
        title={
          seo.defaultTitle ||
          settings?.tagline ||
          "Votre partenaire stratégique"
        }
        description={seo.defaultDescription || settings?.description || ""}
        canonical={seo.siteUrl ? new URL(seo.siteUrl).pathname : "/"}
        image={seo.ogImage}
      />
      <AgencyHomepage />
    </>
  );
};

export default Home;
