import { useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import SanityImage from "../common/SanityImage";
import { Link } from "react-router-dom";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

const CommunityCarousel = ({ posts = [], title, description }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current?.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  if (!posts.length) return null;

  return (
    <section className="agency-community bg-paper text-ink">
      <div className="container">
        <div className="agency-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Communauté</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {title || "Join Our Online Community"}
            </h2>
            {description && (
              <p className="subtitle-text mt-4 max-w-2xl">{description}</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="community-carousel-control"
              aria-label="Afficher le contenu précédent"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="community-carousel-control"
              aria-label="Afficher le contenu suivant"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="community-carousel mt-12"
          role="region"
          aria-label="Contenu de la communauté"
        >
          {posts.map((post) => (
            <article key={post._id} className="community-card agency-reveal">
              <div className="community-card-image">
                {post.image ? (
                  <SanityImage
                    source={post.image}
                    alt={post.title}
                    width={800}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-navy/10 text-navy/40">
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Contenu
                    </span>
                  </div>
                )}
              </div>
              <div className="community-card-content">
                <div className="flex items-center justify-between gap-3">
                  {post.category && (
                    <span className="community-card-category">
                      {post.category}
                    </span>
                  )}
                  {post.date && (
                    <span className="flex items-center gap-1.5 text-xs text-ink/45">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                  )}
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                {post.link && (
                  <Link
                    to={post.link.startsWith("/") ? post.link : "/actualites"}
                    className="community-card-link"
                  >
                    Consulter le contenu <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCarousel;
