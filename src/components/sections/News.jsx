import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { useNews } from "../../hooks/useNews";
import SanityImage from "../common/SanityImage";
import LoadingSkeleton from "../common/LoadingSkeleton";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const sectionRef = useRef(null);
  const { data: newsItems = [], loading } = useNews();
  const safeNewsItems = Array.isArray(newsItems) ? newsItems : [];

  useEffect(() => {
    if (!loading && safeNewsItems.length > 0) {
      gsap.fromTo(
        ".news-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [loading, safeNewsItems]);

  if (loading) {
    return (
      <section className="py-16 px-4 md:px-8 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <LoadingSkeleton />
        </div>
      </section>
    );
  }

  if (!safeNewsItems.length) return null;

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">À la une</p>
          <h2 className="section-heading text-ink">Actualités et réflexion <span>professionnelle.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeNewsItems.map((item) => (
            <article
              key={item._id}
              className="news-card overflow-hidden rounded-2xl border border-navy/10 bg-paper transition-all duration-500 group hover:-translate-y-1 hover:border-gold/60"
            >
              <div className="relative h-56 overflow-hidden">
                <SanityImage
                  source={item.image}
                  alt={item.title}
                  width={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink group-hover:text-gold transition-colors">{item.title}</h3>
                {item.coachName && <p className="mt-1 text-sm font-semibold text-gold">Avec {item.coachName}</p>}
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
                <div className="mt-4 flex items-center gap-3 border-t border-navy/10 pt-4 text-xs text-ink/55">
                  {item.day && <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" />{item.day}</span>}
                  {item.time && <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" />{item.time}</span>}
                </div>
                {item.phone && (
                  <a href={`tel:${item.phone}`} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy">
                    {item.ctaLabel || "Nous contacter"}<ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
