import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Globe2 } from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { useServices } from "../hooks/useServices";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { data: services = [] } = useServices();
  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!service) {
    return (
      <div className="min-h-[70vh] bg-navy px-4 py-40 text-center text-white">
        <h1 className="font-serif text-5xl">Service non trouvé</h1>
        <Link
          to="/services"
          className="button button-secondary mt-8 inline-flex"
        >
          Retour aux services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-navy text-white">
      <Seo
        title={service.seoTitle || service.title}
        description={service.seoDescription || service.shortDescription}
        canonical={`/services/${slug}`}
        image={service.coverImage}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-36 md:px-8">
        <div className="agency-grid absolute inset-0" />
        <div className="container relative">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les services
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <p className="section-kicker">{service.category}</p>
              <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                {service.shortDescription}
              </p>
              <a
                href="#contenu"
                className="button button-primary mt-8 inline-flex"
              >
                Découvrir le service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {service.heroImage ? (
              <SanityImage
                source={service.heroImage}
                alt={service.title}
                width={1000}
                className="h-105 w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="h-105 rounded-2xl border border-white/10 bg-white/5" />
            )}
          </div>
        </div>
      </section>
      <section id="contenu" className="bg-paper px-4 py-24 text-ink md:px-8">
        <div className="container grid gap-14 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="section-kicker">Accompagnement complet</p>
            <h2 className="mt-4 font-serif text-5xl">
              Une prise en charge claire, ciblée et durable.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              {service.description}
            </p>
          </div>
          <div className="grid gap-4">
            {service.features?.map((feature) => (
              <div
                key={feature}
                className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="w-4 h-4" />
                </span>
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        {(service.benefits?.length || service.coverImage) > 0 && (
          <div className="container mt-20">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              {service.benefits?.length > 0 && (
                <>
                  <h3 className="font-serif text-3xl">Bénéfices attendus</h3>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-ink/70"
                      >
                        <Check className="w-4 h-4 text-gold" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </section>
      <section className="px-4 py-24 md:px-8">
        <div className="container flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-12 md:flex-row md:items-center">
          <div>
            <p className="section-kicker">Projet professionnel</p>
            <h2 className="mt-3 font-serif text-4xl">
              Nous pouvons lancer votre prochaine étape.
            </h2>
          </div>
          <Link to="/contact" className="button button-primary">
            Parlons de votre projet <Globe2 className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
