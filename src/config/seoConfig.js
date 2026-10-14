import { siteConfig } from "./siteConfig";

const siteName = "ZNAC | Conseil financier, juridique et stratégique";
const defaultImage = `${siteConfig.siteUrl}/images/Equipe/Tarek_Zouari.jpeg`;

export const seoConfig = {
  home: {
    title: siteName,
    description:
      "ZNAC accompagne les entreprises et investisseurs en Tunisie en comptabilité, finance, audit, fiscalité et conseil juridique.",
    canonical: "/",
    image: defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      name: "Zouari & Njah Accounting Consulting",
      url: siteConfig.siteUrl,
      image: defaultImage,
      email: "contact@zouari-njah.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
    },
  },
  services: {
    title: "Services de conseil financier, juridique et fiscal | ZNAC",
    description:
      "Découvrez les services de comptabilité, audit, finance, fiscalité, droit des affaires et accompagnement des entreprises proposés par ZNAC en Tunisie.",
    canonical: "/services",
    image: defaultImage,
  },
  serviceDetail: {
    description:
      "Un accompagnement professionnel en Tunisie pour structurer, sécuriser et développer votre activité.",
    image: defaultImage,
  },
  expertise: {
    title: "Expertises comptables, financières et juridiques | ZNAC",
    description:
      "Les domaines d’expertise de ZNAC couvrent la finance, l’audit, la comptabilité, le droit, la fiscalité et l’accompagnement des investisseurs en Tunisie.",
    canonical: "/expertises",
    image: defaultImage,
  },
  company: {
    title: "À propos de ZNAC | Cabinet de conseil en Tunisie",
    description:
      "Découvrez l’approche, l’équipe et les engagements du cabinet Zouari & Njah Accounting Consulting.",
    canonical: "/a-propos",
    image: defaultImage,
  },
  news: {
    title: "Actualités et analyses professionnelles | ZNAC",
    description:
      "Analyses et actualités sur la comptabilité, la finance, l’audit, le droit et la fiscalité des entreprises en Tunisie.",
    canonical: "/actualites",
    image: defaultImage,
  },
  faq: {
    title: "Questions fréquentes | ZNAC",
    description:
      "Réponses aux questions fréquentes sur les services comptables, financiers, juridiques et fiscaux de ZNAC.",
    canonical: "/faq",
    image: defaultImage,
  },
  contact: {
    title: "Contacter ZNAC | Conseil aux entreprises en Tunisie",
    description:
      "Contactez ZNAC pour parler de vos besoins en comptabilité, finance, audit, fiscalité ou conseil juridique en Tunisie.",
    canonical: "/contact",
    image: defaultImage,
  },
};
