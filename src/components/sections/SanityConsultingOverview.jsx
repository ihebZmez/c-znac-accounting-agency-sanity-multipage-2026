import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SanityImage from "../common/SanityImage";
import Button from "../ui/Button";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useServices } from "../../hooks/useServices";
import { useExpertises } from "../../hooks/useExpertises";
import { useTeam } from "../../hooks/useTeam";
import { useTestimonials } from "../../hooks/useTestimonials";
import { usePartners } from "../../hooks/usePartners";
import { useNews } from "../../hooks/useNews";

const ICONS = {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
};

const getIcon = (name) => ICONS[name] || Building2;

const SanityConsultingOverview = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { data: settings } = useSiteSettings();
  const { data: services = [] } = useServices();
  const { data: expertises = [] } = useExpertises();
  const { data: team = [] } = useTeam();
  const { data: testimonials = [] } = useTestimonials();
  const { data: partners = [] } = usePartners();
  const { data: news = [] } = useNews();
  const homepageSections = Array.isArray(settings?.homepage)
    ? settings.homepage
    : [];
  const hero = homepageSections.find((section) => section.key === "hero");
  const sectionEnabled = (key) =>
    homepageSections.find((section) => section.key === key)?.enabled !== false;
  const ordered = (items) =>
    [...items].sort((a, b) => (a.order || 0) - (b.order || 0));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray(".reveal-item").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%" },
          },
        );
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  const openContact = () => navigate("/contact");
  const serviceList = ordered(Array.isArray(services) ? services : []);
  const expertiseList = ordered(Array.isArray(expertises) ? expertises : []);
  const teamList = ordered(Array.isArray(team) ? team : []);
  const testimonialList = ordered(
    Array.isArray(testimonials) ? testimonials : [],
  );
  const partnerList = ordered(Array.isArray(partners) ? partners : []);
  const newsList = ordered(Array.isArray(news) ? news : []);

  return (
    <section ref={sectionRef} className="consulting-overview">
      {sectionEnabled("hero") && (
        <section className="hero-consulting relative overflow-hidden">
          <div className="hero-grid absolute inset-0" />
          <div className="container relative grid min-h-[88vh] items-center gap-14 py-32 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {hero?.eyebrow ||
                  settings?.shortDescription ||
                  "Conseil professionnel · Tunisie · International"}
              </div>
              <h1 className="hero-title max-w-4xl">
                {hero?.title ||
                  settings?.tagline ||
                  "L’expertise qui transforme les enjeux en décisions solides."}
                <span>{hero?.highlight || ""}</span>
              </h1>
              <p className="hero-subtitle mt-7 max-w-2xl">
                {hero?.description ||
                  settings?.description ||
                  "Accompagnement stratégique pour les entreprises et les investisseurs étrangers."}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="lg" onClick={openContact}>
                  {hero?.ctaLabel || "Parlons de votre projet"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                {hero?.ctaLink && (
                  <Link to={hero.ctaLink} className="button button-secondary">
                    Découvrir nos expertises
                  </Link>
                )}
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-white/55">
                <span className="flex items-center gap-2">
                  <Check className="text-gold" /> Analyse ciblée
                </span>
                <span className="flex items-center gap-2">
                  <Check className="text-gold" /> Conseil financier
                </span>
                <span className="flex items-center gap-2">
                  <Check className="text-gold" /> Support continu
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                {hero?.image ? (
                  <SanityImage
                    source={hero.image}
                    alt={hero.title || "Équipe de conseil"}
                    width={1100}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={
                      settings?.heroPoster?.asset?._ref
                        ? ""
                        : "/images/clients/BNA-bank.jpg"
                    }
                    alt="Bâtiment corporate"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="floating-card floating-card-top">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <div>
                  <strong>Confidentialité</strong>
                  <span>Traitement sécurisé des données</span>
                </div>
              </div>
              <div className="floating-card floating-card-bottom">
                <Globe2 className="w-5 h-5 text-gold" />
                <div>
                  <strong>Vision globale</strong>
                  <span>Localisation tunisienne</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("expertise") && expertiseList.length > 0 && (
        <section id="expertises" className="section-shell bg-paper text-ink">
          <div className="container">
            <SectionTitle
              badge="Notre expertise"
              title="Une expertise multidirigée"
              highlight="pour les enjeux qui comptent"
              subtitle="Des compétences réunies pour accompagner votre entreprise."
              align="left"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {expertiseList.map((item) => {
                const Icon = getIcon(item.icon || "Building2");
                return (
                  <article key={item._id} className="service-card reveal-item">
                    <div className="service-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="service-eyebrow">
                      {item.category || "Expertise"}
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        className="text-sm font-semibold text-gold"
                      >
                        En savoir plus <ArrowRight className="inline w-4 h-4" />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("services") && serviceList.length > 0 && (
        <section className="section-shell bg-white text-ink">
          <div className="container">
            <SectionTitle
              badge="Services"
              title="Des solutions adaptées"
              highlight="à votre stratégie"
              subtitle="Des services professionnels, structurés autour de vos enjeux métier."
              align="left"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <article
                    key={service._id}
                    className="service-card reveal-item"
                  >
                    <div className="service-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="service-eyebrow">{service.category}</p>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                    {service.features?.length > 0 && (
                      <ul>
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature}>
                            <Check className="w-4 h-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("leadership") && teamList.length > 0 && (
        <section className="section-shell bg-navy text-white">
          <div className="container">
            <SectionTitle
              badge="Équipe"
              title="Une vision intégrée"
              highlight="portée par des experts"
              subtitle="Des profils professionnels réunis pour accompagner votre entreprise."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {teamList.map((member) => (
                <article
                  key={member._id}
                  className="leadership-card reveal-item"
                >
                  <div className="leadership-initials">
                    {member.photo ? (
                      <SanityImage
                        source={member.photo}
                        alt={member.name}
                        width={180}
                        className="h-24 w-24 rounded-full object-cover"
                      />
                    ) : (
                      member.name.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                    <p>{member.biography}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("testimonials") && testimonialList.length > 0 && (
        <section className="section-shell bg-paper text-ink">
          <div className="container">
            <SectionTitle
              badge="Témoignages"
              title="Ils nous font confiance"
              highlight="dans leurs projets"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {testimonialList.slice(0, 4).map((testimonial) => (
                <article
                  key={testimonial._id}
                  className="testimonial-card reveal-item"
                >
                  <p>“{testimonial.content}”</p>
                  <div>
                    <SanityImage
                      source={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>
                        {testimonial.role} ·{" "}
                        {testimonial.company || testimonial.location || ""}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("partners") && partnerList.length > 0 && (
        <section className="section-shell bg-white text-ink">
          <div className="container">
            <SectionTitle
              badge="Partenaires"
              title="Une collaboration"
              highlight="professionnelle"
            />
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {partnerList.map((partner) => (
                <div key={partner._id} className="partner-card">
                  <SanityImage
                    source={partner.logo}
                    alt={partner.name}
                    width={280}
                    className="h-24 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("insights") && newsList.length > 0 && (
        <section className="section-shell bg-paper text-ink">
          <div className="container">
            <SectionTitle
              badge="Actualités"
              title="Éclairage professionnel"
              highlight="sur les enjeux actuels"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsList.slice(0, 3).map((item) => (
                <article
                  key={item._id}
                  className="news-card overflow-hidden rounded-2xl border border-navy/10 bg-white"
                >
                  <SanityImage
                    source={item.image}
                    alt={item.title}
                    width={800}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to="/actualites">
                      Lire la réflexion{" "}
                      <ArrowRight className="inline w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {sectionEnabled("contact") && (
        <section className="cta-consulting">
          <div className="container cta-content">
            <div className="reveal-item">
              <p className="section-kicker">Prendre rendez-vous</p>
              <h2>
                {settings?.footer?.ctaText ||
                  "Bénéficiez d’un accompagnement adapté à vos enjeux."}
              </h2>
              <p>
                {settings?.footer?.description ||
                  "Nous vous proposons une première échange pour comprendre votre contexte."}
              </p>
            </div>
            <div className="cta-actions reveal-item">
              <Button variant="primary" size="lg" onClick={openContact}>
                Parlons de votre projet <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href={
                  settings?.email
                    ? `mailto:${settings.email}`
                    : "mailto:contact@zouari-njah.com"
                }
                className="button button-secondary"
              >
                Écrire à l’équipe
              </a>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default SanityConsultingOverview;
