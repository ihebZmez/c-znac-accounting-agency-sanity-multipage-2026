import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { seoConfig } from "../config/seoConfig";
import { useExpertises } from "../hooks/useExpertises";
import { slugify } from "../lib/slugify";

const ExpertisePage = () => {
  const { data: expertises = [] } = useExpertises();

  return (
    <main className="bg-paper text-ink">
      <Seo {...seoConfig.expertise} />
      <section className="bg-navy px-4 py-36 text-white md:px-8">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="section-kicker">Nos expertises</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Une vision intégrée de vos enjeux.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Finance, audit, comptabilité, droit et fiscalité : des compétences
              complémentaires pour éclairer les décisions de votre entreprise.
            </p>
          </div>
          {expertises[0]?.image ? (
            <SanityImage
              source={expertises[0].image}
              alt={expertises[0].title}
              width={1000}
              height={700}
              className="aspect-4/3 w-full rounded-xl object-cover"
            />
          ) : (
            <img
              src="/images/Equipe/Tarek_Zouari.jpeg"
              alt="Équipe conseil de ZNAC"
              className="aspect-4/3 w-full rounded-xl object-cover object-top"
            />
          )}
        </div>
      </section>
      <section className="px-4 py-20 md:px-8">
        <div className="container grid gap-6 md:grid-cols-2">
          {expertises.map((expertise) => (
            <article key={expertise._id} className="agency-expertise-card">
              <div className="agency-expertise-image">
                {expertise.image ? (
                  <SanityImage
                    source={expertise.image}
                    alt={expertise.title}
                    width={800}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src="/images/Equipe/Tarek_Zouari.jpeg"
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                )}
              </div>
              <div>
                <span>Expertise ZNAC</span>
                <h2>{expertise.title}</h2>
                <p>{expertise.description}</p>
                <Link
                  to={`/expertises/${expertise.slug || slugify(expertise.title)}`}
                  className="agency-link"
                >
                  Découvrir l’expertise <ArrowRight className="h-4 w-4" />
                </Link>
                {expertise.link && (
                  <Link
                    to={
                      expertise.link.startsWith("/")
                        ? expertise.link
                        : "/services"
                    }
                    className="agency-link ml-5"
                  >
                    Services associés <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
          {!expertises.length && (
            <p className="agency-empty-state md:col-span-2">
              Les domaines d’expertise seront bientôt présentés ici.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ExpertisePage;
