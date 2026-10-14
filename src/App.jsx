import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/animations/PageTransition";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import ExpertisePage from "./pages/ExpertisePage";
import ExpertiseDetail from "./pages/ExpertiseDetail";
import Company from "./pages/Company";
import FaqPage from "./pages/FaqPage";
import { isPackage1SiteVitrine } from "./config/packageMode";

function App() {
  const { i18n } = useTranslation();
  const package1SiteVitrine = isPackage1SiteVitrine();

  // Set RTL based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/expertises" element={<ExpertisePage />} />
            <Route path="/expertises/:slug" element={<ExpertiseDetail />} />
            <Route path="/a-propos" element={<Company />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/actualites" element={<NewsPage />} />
            {!package1SiteVitrine && (
              <Route path="/corporate" element={<Contact />} />
            )}
          </Routes>
        </main>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
