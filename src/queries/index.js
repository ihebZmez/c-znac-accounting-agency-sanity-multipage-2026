export const NEWS_QUERY = `*[_type == "news" && active == true] | order(publishedAt desc) {
  _id,
  title,
  description,
  image,
  category,
  date,
  link,
  featured,
  order,
  publishedAt
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && active == true] | order(order asc) {
  _id,
  name,
  role,
  content,
  rating,
  image,
  location
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  gymName,
  shortName,
  tagline,
  description,
  shortDescription,
  logo,
  phone,
  whatsapp,
  email,
  address,
  city,
  country,
  mapsUrl,
  social
}`;

export const FAQS_QUERY = `*[_type == "faq" && active == true] | order(order asc, featured desc) {
  _id,
  question,
  answer,
  category,
  active,
  featured,
  order
}`;

export const SERVICES_QUERY = `*[_type == "service" && active == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  description,
  icon,
  coverImage,
  heroImage,
  category,
  features,
  benefits,
  commentDemarrer,
  accompanimentOptions,
  ctaLabel,
  ctaLink,
  order
}`;

export const EXPERTISES_QUERY = `*[_type == "expertise" && active == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  targetAudience,
  documentsToPrepare,
  accompanimentSteps,
  icon,
  image,
  link,
  order
}`;

export const TEAM_QUERY = `*[_type == "teamMember" && active == true] | order(order asc) {
  _id,
  name,
  position,
  biography,
  photo,
  linkedin,
  email,
  expertise,
  order
}`;

export const PARTNERS_QUERY = `*[_type == "partner" && active == true] | order(order asc) {
  _id,
  name,
  logo,
  website,
  description,
  category,
  order
}`;
