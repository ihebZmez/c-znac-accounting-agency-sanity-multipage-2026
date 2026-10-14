import FocusedAgencyHomepage from "../components/sections/FocusedAgencyHomepage";
import Seo from "../components/seo/Seo";
import { seoConfig } from "../config/seoConfig";

const Home = () => {
  return (
    <>
      <Seo {...seoConfig.home} />
      <FocusedAgencyHomepage />
    </>
  );
};

export default Home;
