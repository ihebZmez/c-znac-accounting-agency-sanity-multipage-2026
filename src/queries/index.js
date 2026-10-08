export const NEWS_QUERY = `*[_type == "news" && active == true] | order(publishedAt desc) {
  _id,
  title,
  coachName,
  description,
  image,
  icons,
  day,
  time,
  ctaLabel,
  phone,
  publishedAt
}`;

export const PRICING_QUERY = `*[_type == "pricingPlan" && active == true] | order(order asc) {
  _id,
  name,
  price,
  currency,
  period,
  features,
  popular,
  ctaLabel
}`;

export const ACTIVITIES_QUERY = `*[_type == "activity" && active == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  image,
  icon,
  category,
  level,
  duration
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
  foundedYear,
  logo,
  darkLogo,
  favicon,
  brandColors,
  typography,
  phone,
  whatsapp,
  email,
  address,
  city,
  country,
  mapsUrl,
  social,
  hours,
  header,
  footer,
  seo,
  homepage,
  homepageContent {
    videoIntroduction {
      enabled,
      title,
      description,
      video,
      poster,
      externalUrl,
      ctaLabel,
      ctaLink
    },
    community {
      enabled,
      title,
      description,
      selectedPosts[] -> {
        _id,
        title,
        description,
        image,
        date,
        category,
        link,
        featured,
        order
      }
    },
    faq {
      enabled,
      title,
      description,
      selectedFaqs[] -> {
        _id,
        question,
        answer,
        category,
        active,
        featured,
        order
      }
    }
  },
  heroPoster
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
  ctaLabel,
  ctaLink,
  seoTitle,
  seoDescription,
  order
}`;

export const EXPERTISES_QUERY = `*[_type == "expertise" && active == true] | order(order asc) {
  _id,
  title,
  description,
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

export const PAGES_QUERY = `*[_type == "page" && active == true] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  hero,
  sections,
  seoTitle,
  seoDescription,
  ogImage
}`;

export const PROMOTIONS_QUERY = `*[_type == "promotion" && active == true
  && (!defined(endDate) || endDate >= now())
] | order(highlight desc, order asc) {
  _id,
  title,
  subtitle,
  description,
  badgeText,
  discountText,
  image,
  ctaLabel,
  ctaLink,
  startDate,
  endDate,
  highlight,
  accent
}`;
