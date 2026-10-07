import { Helmet } from "react-helmet-async";
import { gymConfig } from "../../config/gymConfig";

const Seo = ({
  title = "ZNAC | Conseil financier, juridique et stratégique",
  description = "Cabinet de conseil pour les entreprises et investisseurs étrangers, en Tunisie.",
  keywords = [
    "conseil financier Tunisie",
    "audit financier Tunisie",
    "conseil fiscal Tunisie",
    "conseil juridique Tunisie",
    "investisseurs étrangers Tunisie",
    "accompagnement entreprises Tunisie",
  ],
  canonical = "/",
  noIndex = false,
  image = "/images/clients/BNA-bank.jpg",
}) => {
  const canonicalUrl = `${gymConfig.siteUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${gymConfig.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Google does not use meta keywords for ranking.
          Kept only if your template needs it. */}
      <meta name="keywords" content={keywords.join(", ")} />

      <meta
        name="robots"
        content={
          noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large"
        }
      />

      <meta name="theme-color" content={gymConfig.accentColor} />

      <meta name="apple-mobile-web-app-title" content="Club Med Gym" />

      <link rel="canonical" href={canonicalUrl} />

      {/* French is the primary language */}
      <link rel="alternate" href={gymConfig.siteUrl} hreflang="fr" />

      <link rel="alternate" href={gymConfig.siteUrl} hreflang="x-default" />

      {/* Only keep this if /en/ actually exists */}
      <link rel="alternate" href={`${gymConfig.siteUrl}/en/`} hreflang="en" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Club Med Gym" />
      <meta property="og:locale" content="fr_TN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
