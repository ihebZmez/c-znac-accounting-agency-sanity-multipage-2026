import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, UsersRound } from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import SectionTitle from "../components/ui/SectionTitle";
import { seoConfig } from "../config/seoConfig";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useTeam } from "../hooks/useTeam";
import { useTestimonials } from "../hooks/useTestimonials";

const Company = () => {
  const { data: settings } = useSiteSettings();
  const { data: team = [] } = useTeam();
  const { data: testimonials = [] } = useTestimonials();

  return (
    <main className="bg-paper text-ink">
      <Seo {...seoConfig.company} />
      <section className="bg-navy px-4 pb-20 pt-36 text-white md:px-8">
        <div className="container grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="section-kicker">Le cabinet</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Le conseil commence par{" "}
              <span className="text-gold">l’écoute.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {settings?.description ||
                "Zouari & Njah Accounting Consulting accompagne les entreprises et investisseurs avec une approche intégrée, rigoureuse et confidentielle."}
            </p>
            <Link
              to="/contact"
              className="button button-primary mt-8 inline-flex"
            >
              Rencontrer notre équipe <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src="/images/Equipe/Tarek_Zouari.jpeg"
            alt="Tarek Zouari, dirigeant du cabinet"
            fetchPriority="high"
            className="aspect-4/3 w-full rounded-xl object-cover object-top"
          />
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="container grid gap-10 md:grid-cols-2">
          <article className="agency-principle">
            <ShieldCheck className="mb-5 h-7 w-7 text-gold" />
            <h2>Responsabilité et confidentialité</h2>
            <p>
              Des échanges discrets et un travail conduit avec méthode et
              exigence.
            </p>
          </article>
          <article className="agency-principle">
            <UsersRound className="mb-5 h-7 w-7 text-gold" />
            <h2>Une relation de proximité</h2>
            <p>
              Un accompagnement adapté à la réalité et aux objectifs de chaque
              organisation.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="container">
          <SectionTitle
            badge="L’équipe"
            title="Des compétences réunies"
            highlight="autour de vos enjeux"
            align="left"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member._id} className="agency-team-card">
                <div className="agency-team-photo">
                  {member.photo ? (
                    <SanityImage
                      source={member.photo}
                      alt={member.name}
                      width={500}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src="/images/Equipe/Tarek_Zouari.jpeg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="agency-team-role">{member.position}</p>
                  <h3>{member.name}</h3>
                  <p>{member.biography}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn <ArrowRight className="inline h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {testimonials.length > 0 && (
        <section className="px-4 py-20 md:px-8">
          <div className="container">
            <SectionTitle
              badge="Témoignages"
              title="La confiance se construit dans la durée"
              align="left"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {testimonials.slice(0, 4).map((item) => (
                <blockquote key={item._id} className="agency-testimonial">
                  <p>“{item.content}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>
                      {item.role}
                      {item.location ? ` · ${item.location}` : ""}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Company;
