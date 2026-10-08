import { Helmet } from "react-helmet-async";
import { gymConfig } from "../../config/gymConfig";

const Seo = ({
  title = "ZNAC",
  description = "",
  keywords = [],
  canonical = "/",
  noIndex = false,
  image,
}) => {
  const canonicalUrl = `${gymConfig.siteUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;
  const imageUrl = image?.asset?._ref
    ? image.asset._ref
    : image &&
      (image.startsWith("http")
        ? image
        : `${gymConfig.siteUrl}${image.startsWith("/") ? image : `/${image}`}`);

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
      <meta name="theme-color" content={gymConfig.accentColor} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="fr_TN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
};

export default Seo;
