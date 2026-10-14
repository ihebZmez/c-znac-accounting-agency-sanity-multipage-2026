import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/siteConfig";

const Seo = ({
  title = "ZNAC | Conseil financier, juridique et stratégique",
  description = "",
  keywords = [],
  canonical = "/",
  noIndex = false,
  image,
  structuredData,
}) => {
  const canonicalUrl = new URL(canonical, siteConfig.siteUrl).toString();
  const imageUrl = image
    ? new URL(image, siteConfig.siteUrl).toString()
    : undefined;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta
        name="robots"
        content={
          noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large"
        }
      />
      <meta name="theme-color" content={siteConfig.accentColor} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:site_name" content="ZNAC" />
      <meta property="og:locale" content="fr_TN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
