import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useServices } from "../../hooks/useServices";
import { useExpertises } from "../../hooks/useExpertises";
import { usePartners } from "../../hooks/usePartners";
import SanityImage from "../common/SanityImage";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import DriveHeroMedia from "./DriveHeroMedia";

const fallbackServices = [
  { title: "Finance & audit" },
  { title: "Conseil juridique" },
  { title: "Fiscalité" },
];

const FocusedAgencyHomepage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { data: settings } = useSiteSettings();
  const { data: services = [] } = useServices();
  const { data: expertises = [] } = useExpertises();
  const { data: partners = [] } = usePartners();
  const serviceItems = services.slice(0, 3);
  const expertiseItems = expertises.slice(0, 3);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray(".agency-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%" },
          },
        );
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <div ref={sectionRef} className="agency-homepage">
      <section className="agency-hero relative overflow-hidden">
        <div className="agency-grid absolute inset-0" />
        <div className="container relative grid min-h-[88vh] items-center gap-12 py-32 lg:grid-cols-[1.05fr_.95fr]">
          <div className="agency-reveal">
            <div className="agency-eyebrow">
              <span />
              Cabinet de conseil · Tunisie
            </div>
            <h1 className="agency-hero-title">
              La clarté nécessaire pour
              <span> décider et avancer.</span>
            </h1>
            <p className="agency-hero-copy">
              {settings?.shortDescription ||
                "Nous accompagnons les entreprises et les investisseurs en comptabilité, finance, audit, droit et fiscalité."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Parlons de votre projet <ArrowRight className="h-4 w-4" />
              </Button>
              <Link className="button button-secondary" to="/services">
                Découvrir nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <strong>Intégré</strong>
                <span>Multi-disciplinaire</span>
              </div>
              <div>
                <strong>Engagé</strong>
                <span>Conseil de proximité</span>
              </div>
              <div>
                <strong>Discret</strong>
                <span>Confidentialité</span>
              </div>
            </div>
          </div>
          <DriveHeroMedia />
        </div>
      </section>

      <section className="agency-section bg-paper text-ink">
        <div className="container">
          <div className="agency-section-heading agency-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              badge="Nos services"
              title="Des solutions au service"
              highlight="de votre entreprise"
              subtitle="Une prise en charge structurée pour vos enjeux comptables, financiers, juridiques et fiscaux."
              align="left"
            />
            <Link to="/services" className="agency-link">
              Tous les services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.length
              ? serviceItems.map((service) => (
                  <Link
                    key={service._id}
                    to={`/services/${service.slug}`}
                    className="agency-service-card agency-reveal"
                  >
                    {service.coverImage && (
                      <SanityImage
                        source={service.coverImage}
                        alt={service.title}
                        width={720}
                        height={420}
                        className="mb-5 aspect-video w-full rounded-lg object-cover"
                      />
                    )}
                    {!service.coverImage && (
                      <img
                        src="/images/Equipe/Tarek_Zouari.jpeg"
                        alt=""
                        loading="lazy"
                        className="mb-5 aspect-video w-full rounded-lg object-cover object-top"
                      />
                    )}
                    <div className="agency-service-top">
                      <span className="agency-service-icon">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <p>{service.category}</p>
                    <h3>{service.title}</h3>
                    <span>{service.shortDescription}</span>
                    <div className="agency-service-bottom">
                      <small>En savoir plus</small>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))
              : fallbackServices.map(({ title }) => (
                  <Link
                    key={title}
                    to="/services"
                    className="agency-service-card agency-reveal"
                  >
                    <div className="agency-service-top">
                      <span className="agency-service-icon">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <p>Accompagnement professionnel</p>
                    <h3>{title}</h3>
                    <span>
                      Une expertise rigoureuse, adaptée aux réalités de votre
                      activité.
                    </span>
                    <div className="agency-service-bottom">
                      <small>En savoir plus</small>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      <section id="expertises" className="agency-section bg-white text-ink">
        <div className="container">
          <div className="agency-reveal">
            <SectionTitle
              badge="Nos expertises"
              title="Une vision transversale"
              highlight="pour les décisions clés"
              subtitle="Des compétences complémentaires réunies autour des priorités de votre organisation."
              align="left"
            />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {expertiseItems.map((expertise) => (
              <article
                key={expertise._id}
                className="agency-expertise-card agency-reveal"
              >
                <div className="agency-expertise-image">
                  {expertise.image ? (
                    <SanityImage
                      source={expertise.image}
                      alt={expertise.title}
                      width={720}
                      height={500}
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
                  <h3>{expertise.title}</h3>
                  <p>{expertise.description}</p>
                  <Link to="/expertises" className="agency-link">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
            {!expertiseItems.length && (
              <article className="agency-empty-state lg:col-span-3">
                <p>
                  Nos expertises couvrent la finance, la comptabilité, le droit,
                  la fiscalité et le développement des entreprises.
                </p>
                <Link to="/expertises" className="agency-link">
                  Voir nos domaines <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            )}
          </div>
          <Link to="/expertises" className="agency-link mt-8">
            Toutes nos expertises <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="agency-why bg-paper text-ink">
        <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <img
            src="/images/Equipe/Tarek_Zouari.jpeg"
            alt="Tarek Zouari, dirigeant de ZNAC"
            loading="lazy"
            className="agency-reveal aspect-4/3 w-full rounded-xl object-cover object-top"
          />
          <div className="agency-reveal">
            <SectionTitle
              badge="Notre engagement"
              title="Un conseil rigoureux,"
              highlight="une relation durable"
              subtitle="Nous réunissons expertise, confidentialité et connaissance du contexte tunisien pour accompagner les dirigeants dans leurs décisions."
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Confidentialité
              </span>
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-gold" /> Proximité
              </span>
              <Link to="/a-propos" className="agency-link">
                À propos du cabinet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {partners.length > 0 && (
        <section className="agency-partners bg-white text-ink">
          <div className="container">
            <SectionTitle
              badge="Réseau professionnel"
              title="Des partenaires de confiance"
              align="left"
            />
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
              {partners.slice(0, 8).map((partner) => (
                <div key={partner._id} className="agency-partner">
                  <SanityImage
                    source={partner.logo}
                    alt={partner.name}
                    width={320}
                    height={160}
                    className="h-24 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="agency-final-cta bg-navy text-white">
        <div className="container agency-final-grid">
          <div className="agency-reveal">
            <p className="section-kicker">Votre prochaine étape</p>
            <h2>Parlons de vos objectifs.</h2>
            <p>
              Un premier échange pour clarifier vos besoins et identifier les
              bons leviers d’action.
            </p>
          </div>
          <Link to="/contact" className="button button-primary">
            Prendre contact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FocusedAgencyHomepage;
