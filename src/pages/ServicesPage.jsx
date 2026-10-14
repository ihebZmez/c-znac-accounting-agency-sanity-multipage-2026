import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CircleDollarSign,
  Scale,
  UsersRound,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { useServices } from "../hooks/useServices";
import { seoConfig } from "../config/seoConfig";

const iconMap = { BarChart3, Building2, CircleDollarSign, Scale, UsersRound };

const ServicesPage = () => {
  const { data: services = [] } = useServices();

  return (
    <div className="bg-navy text-white">
      <Seo {...seoConfig.services} />
      <section className="px-4 pb-24 pt-40 md:px-8">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="section-kicker">Nos services</p>
            <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
              Une expertise intégrée pour chaque enjeu.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Des solutions précises pour financer, structurer, piloter et faire
              progresser votre entreprise en Tunisie.
            </p>
          </div>
          <img
            src="/images/Equipe/Tarek_Zouari.jpeg"
            alt="Expert-comptable de ZNAC"
            fetchPriority="high"
            className="aspect-4/3 w-full rounded-xl object-cover object-top"
          />
        </div>
      </section>
      <section className="bg-paper px-4 pb-28 pt-8 text-ink md:px-8">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <article key={service._id} className="service-card reveal-item">
                {service.coverImage ? (
                  <SanityImage
                    source={service.coverImage}
                    alt={service.title}
                    width={800}
                    height={450}
                    className="mb-5 aspect-video w-full rounded-lg object-cover"
                  />
                ) : (
                  <img
                    src="/images/Equipe/Tarek_Zouari.jpeg"
                    alt=""
                    loading="lazy"
                    className="mb-5 aspect-video w-full rounded-lg object-cover object-top"
                  />
                )}
                <div className="service-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="service-eyebrow">{service.category}</p>
                <h2 className="mt-3 text-2xl font-bold">{service.title}</h2>
                <p className="mt-4 leading-7 text-ink/65">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-gold"
                >
                  Consulter le service <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
