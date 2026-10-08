import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  Landmark,
  LockKeyhole,
  Network,
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
import CommunityCarousel from "./CommunityCarousel";
import FaqAccordion from "./FaqAccordion";
import VideoIntroduction from "./VideoIntroduction";

const ICONS = {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
  CircleDollarSign,
  FileCheck2,
  Landmark,
  Network,
  BadgeCheck,
};

const getIcon = (iconName) => ICONS[iconName] || Building2;

const journeySteps = [
  {
    number: "01",
    title: "Écouter",
    description:
      "Comprendre votre projet, votre contexte et les enjeux qui conditionnent votre trajectoire.",
  },
  {
    number: "02",
    title: "Analyser",
    description:
      "Identifier les risques, les opportunités et les priorités avec une vision factuelle.",
  },
  {
    number: "03",
    title: "Conseiller",
    description:
      "Construire une stratégie claire, réaliste et alignée avec vos objectifs.",
  },
  {
    number: "04",
    title: "Accompagner",
    description:
      "Mettre en œuvre les solutions avec un suivi rigoureux et une responsabilité partagée.",
  },
  {
    number: "05",
    title: "Suivre",
    description:
      "Mesurer les résultats et accompagner la progression de votre activité.",
  },
];

const reasons = [
  {
    icon: Network,
    title: "Approche multidisciplinaire",
    description:
      "Finances, droit, fiscalité, RH et stratégie réunis autour d’une vision intégrée.",
  },
  {
    icon: Sparkles,
    title: "Conseil personnalisé",
    description:
      "Une analyse centrée sur votre taille, votre secteur et votre ambition.",
  },
  {
    icon: Globe2,
    title: "Expertise locale et vision internationale",
    description:
      "Une compréhension du contexte tunisien avec une perspective globale.",
  },
  {
    icon: LockKeyhole,
    title: "Confidentialité",
    description:
      "Un traitement discret et structuré des informations sensibles.",
  },
  {
    icon: BadgeCheck,
    title: "Réactivité",
    description:
      "Une organisation claire pour avancer avec précision et sans pertes de temps.",
  },
  {
    icon: UsersRound,
    title: "Accompagnement de proximité",
    description:
      "Un interlocuteur engagé, de la première décision à l’exécution.",
  },
];

const investorPoints = [
  "Analyse du projet et de sa rentabilité",
  "Étude de l’environnement tunisien",
  "Choix de la structure adaptée",
  "Création et implantation",
  "Structuration juridique et fiscale",
  "Accompagnement administratif",
  "Gestion financière",
  "Suivi et développement",
];

const financeAreas = [
  "Audit financier",
  "Analyse financière",
  "Reporting",
  "Comptabilité",
  "Contrôle interne",
  "Diagnostic financier",
  "Accompagnement du dirigeant",
];

const legalAreas = [
  "Structuration juridique",
  "Droit des affaires",
  "Contrats",
  "Gouvernance",
  "Conformité",
];

const taxAreas = [
  "Fiscalité des entreprises",
  "Optimisation fiscale",
  "Déclarations",
  "Contrôle fiscal",
  "Fiscalité internationale",
  "Prix de transfert",
];

const socialAreas = [
  "Gestion sociale",
  "RH",
  "Paie",
  "Obligations sociales",
  "Accompagnement employeur",
];

const AgencyHomepage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { data: settings } = useSiteSettings();
  const { data: services = [] } = useServices();
  const { data: expertises = [] } = useExpertises();
  const { data: team = [] } = useTeam();
  const { data: testimonials = [] } = useTestimonials();
  const { data: partners = [] } = usePartners();
  const { data: news = [] } = useNews();

  const agencyName =
    settings?.gymName || settings?.shortName || "Votre cabinet de conseil";
  const companyDescription =
    settings?.shortDescription ||
    "Cabinet de conseil financier, juridique, fiscal et stratégique en Tunisie.";
  const hero = settings?.homepage?.find((item) => item.key === "hero") || {};
  const heroImage = hero.image || settings?.heroPoster;
  const homepageContent = settings?.homepageContent || {};
  const videoConfig = homepageContent.videoIntroduction || {};
  const communityConfig = homepageContent.community || {};
  const faqConfig = homepageContent.faq || {};

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray(".agency-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%" },
          },
        );
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  const goToContact = () => navigate("/contact");
  const ordered = (items) =>
    [...items].sort((a, b) => (a.order || 0) - (b.order || 0));
  const serviceList = ordered(Array.isArray(services) ? services : []);
  const expertiseList = ordered(Array.isArray(expertises) ? expertises : []);
  const teamList = ordered(Array.isArray(team) ? team : []);
  const testimonialList = ordered(
    Array.isArray(testimonials) ? testimonials : [],
  );
  const partnerList = ordered(Array.isArray(partners) ? partners : []);
  const newsList = ordered(Array.isArray(news) ? news : []);
  const communityPosts = ordered(
    Array.isArray(communityConfig.selectedPosts)
      ? communityConfig.selectedPosts
      : [],
  );
  const faqItems = ordered(
    Array.isArray(faqConfig.selectedFaqs) ? faqConfig.selectedFaqs : [],
  );

  return (
    <section ref={sectionRef} className="agency-homepage">
      <section className="agency-hero relative overflow-hidden">
        <div className="agency-grid absolute inset-0" />
        <div className="container relative grid min-h-[88vh] items-center gap-16 py-32 lg:grid-cols-[1.05fr_.95fr]">
          <div className="agency-reveal">
            <div className="agency-eyebrow">
              <span />
              {hero.eyebrow || companyDescription}
            </div>
            <h1 className="agency-hero-title">
              {hero.title ||
                "Votre partenaire stratégique pour vos projets d’investissement et la performance de votre entreprise."}
              <span>{hero.highlight || ""}</span>
            </h1>
            <p className="agency-hero-copy">
              {hero.description ||
                "Nous réunissons l’expertise financière, comptable, juridique, fiscale et sociale pour accompagner les entreprises et les investisseurs étrangers en Tunisie."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" onClick={goToContact}>
                Parlons de votre projet <ArrowRight className="w-4 h-4" />
              </Button>
              <a className="button button-secondary" href="#expertises">
                Découvrir nos expertises <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <strong>Intégré</strong>
                <span>Multi-disciplinaire</span>
              </div>
              <div>
                <strong>Confidentiel</strong>
                <span>Traitement sécurisé</span>
              </div>
              <div>
                <strong>Local</strong>
                <span>Vision tunisienne</span>
              </div>
            </div>
          </div>
          <div className="agency-hero-visual agency-reveal">
            <div className="agency-hero-image">
              {heroImage?.asset?._ref ? (
                <SanityImage
                  source={heroImage}
                  alt={hero.title || agencyName}
                  width={1100}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="agency-visual-placeholder">
                  <Building2 className="w-12 h-12" />
                  <span>Expertise professionnelle</span>
                </div>
              )}
            </div>
            <div className="agency-floating-card top">
              <ShieldCheck className="w-5 h-5" />
              <div>
                <strong>Confidentialité</strong>
                <span>Accompagnement discret</span>
              </div>
            </div>
            <div className="agency-floating-card bottom">
              <Globe2 className="w-5 h-5" />
              <div>
                <strong>Vision globale</strong>
                <span>Écosystème tunisien</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoIntroduction
        config={videoConfig}
        enabled={videoConfig.enabled !== false}
      />

      <section className="agency-intro bg-paper text-ink">
        <div className="container grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <div className="agency-reveal">
            <SectionTitle
              badge="À propos"
              title="Un partenaire intégré"
              highlight="pour les décisions critiques"
              subtitle="Nous aidons les entreprises, les entrepreneurs et les investisseurs étrangers à avancer avec clarté, contrôle et conviction."
              align="left"
            />
          </div>
          <div className="agency-reveal grid gap-5 sm:grid-cols-2">
            <article className="agency-principle">
              <span>01</span>
              <h3>Expertise</h3>
              <p>
                Des savoirs multipliés pour traiter les enjeux courts et longs
                terme.
              </p>
            </article>
            <article className="agency-principle">
              <span>02</span>
              <h3>Proximité</h3>
              <p>
                Un accompagnement direct, accessible et orienté aux résultats.
              </p>
            </article>
            <article className="agency-principle">
              <span>03</span>
              <h3>Confidentialité</h3>
              <p>
                Une organisation rigoureuse pour protéger les données sensibles.
              </p>
            </article>
            <article className="agency-principle">
              <span>04</span>
              <h3>Vision stratégique</h3>
              <p>
                Des décisions fondées sur les réalités financières et
                juridiques.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="expertises" className="agency-section bg-white text-ink">
        <div className="container">
          <div className="agency-section-heading agency-reveal">
            <SectionTitle
              badge="Nos expertises"
              title="Quatre pôles, une vision"
              highlight="intégrée"
              subtitle="Nous réunissons les compétences nécessaires pour accompagner votre entreprise à chaque étape."
              align="left"
            />
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {expertiseList.length > 0
              ? expertiseList.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <article
                      key={item._id}
                      className="agency-expertise-card agency-reveal"
                    >
                      <div className="agency-expertise-image">
                        {item.image ? (
                          <SanityImage
                            source={item.image}
                            alt={item.title}
                            width={900}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Icon className="w-10 h-10" />
                        )}
                      </div>
                      <div>
                        <span>{item.category || "Domaine d’expertise"}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {item.link && (
                          <Link
                            to={
                              item.link.startsWith("/")
                                ? item.link
                                : "/services"
                            }
                            className="agency-link"
                          >
                            Consulter ce domaine{" "}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </article>
                  );
                })
              : [
                  {
                    title: "Investisseurs étrangers",
                    description:
                      "Accompagnement complet pour entrer ou développer une activité en Tunisie.",
                    icon: "Globe2",
                  },
                  {
                    title: "Finance & Audit",
                    description:
                      "Analyse, comptabilité, reporting, audit et performance financière.",
                    icon: "BarChart3",
                  },
                  {
                    title: "Conseil juridique & fiscal",
                    description:
                      "Structuration, conformité, fiscalité, gouvernance et risque.",
                    icon: "Scale",
                  },
                  {
                    title: "Conseil social & entreprises",
                    description:
                      "RH, organisation, développement et accompagnement métier.",
                    icon: "UsersRound",
                  },
                ].map((item, index) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <article
                      key={item.title}
                      className="agency-expertise-card agency-reveal"
                    >
                      <div className="agency-expertise-image">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div>
                        <span>0{index + 1}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Link to="/services" className="agency-link">
                          Découvrir le service{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
          </div>
        </div>
      </section>

      <section
        id="investisseurs"
        className="agency-investor bg-navy text-white"
      >
        <div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="agency-reveal">
            <SectionTitle
              badge="Investissement en Tunisie"
              title="Un parcours complet"
              highlight="pour investir avec clarté"
              subtitle="Nous accompagne chaque étape, de la première analyse à la structuration et au développement durable."
              align="left"
            />
            <Button
              variant="primary"
              size="lg"
              onClick={goToContact}
              className="mt-8"
            >
              Investir en Tunisie <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="agency-reveal grid gap-3 sm:grid-cols-2">
            {investorPoints.map((point, index) => (
              <article key={point} className="agency-journey-item">
                <span>0{index + 1}</span>
                <p>{point}</p>
                <Check className="w-4 h-4" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="agency-section bg-paper text-ink">
        <div className="container">
          <div className="agency-section-heading agency-reveal">
            <SectionTitle
              badge="Services"
              title="La performance financière"
              highlight="et opérationnelle"
              subtitle="Une prise en charge structurée pour les enjeux comptables, financiers, juridiques, fiscaux et sociaux."
              align="left"
            />
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {serviceList.length > 0
              ? serviceList.map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Link
                      key={service._id}
                      to={`/services/${service.slug}`}
                      className="agency-service-card agency-reveal"
                    >
                      <div className="agency-service-top">
                        <span className="agency-service-icon">
                          <Icon className="w-5 h-5" />
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <p>{service.category}</p>
                      <h3>{service.title}</h3>
                      <span>{service.shortDescription}</span>
                      <div className="agency-service-bottom">
                        <small>Consulter le service</small>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })
              : [
                  {
                    title: "Finance & Audit",
                    icon: "BarChart3",
                    category: "Finance",
                    description:
                      "Rigueur et analyse de performance, reporting et contrôle.",
                  },
                  {
                    title: "Conseil juridique",
                    icon: "Scale",
                    category: "Droit",
                    description:
                      "Structuration, contrats, gouvernance et conformité.",
                  },
                  {
                    title: "Conseil fiscal",
                    icon: "CircleDollarSign",
                    category: "Fiscalité",
                    description:
                      "Optimisation, déclaration et contrôle fiscal.",
                  },
                  {
                    title: "Conseil social",
                    icon: "UsersRound",
                    category: "Social",
                    description:
                      "RH, paie, obligations et accompagnement employeur.",
                  },
                ].map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Link
                      key={service.title}
                      to="/services"
                      className="agency-service-card agency-reveal"
                    >
                      <div className="agency-service-top">
                        <span className="agency-service-icon">
                          <Icon className="w-5 h-5" />
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <p>{service.category}</p>
                      <h3>{service.title}</h3>
                      <span>{service.description}</span>
                      <div className="agency-service-bottom">
                        <small>Consulter le service</small>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </section>

      <section className="agency-finance bg-white text-ink">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="agency-reveal">
            <SectionTitle
              badge="Finance & Audit"
              title="Clarté sur les chiffres"
              highlight="et la décision"
              subtitle="Nous transformons les données financières en information exploitable pour renforcer la transparence et la performance."
              align="left"
            />
            <div className="agency-area-grid">
              {financeAreas.map((area) => (
                <span key={area}>
                  <Check className="w-4 h-4" />
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="agency-finance-visual agency-reveal">
            <div className="agency-chart">
              <div className="agency-chart-line" />
              <div className="agency-chart-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="agency-chart-label">
                <small>Performance</small>
                <strong>Suivi structuré</strong>
              </div>
            </div>
            <div className="agency-metric">
              <FileCheck2 className="w-7 h-7" />
              <div>
                <strong>Concision</strong>
                <span>Information fiable et auditable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agency-compliance bg-paper text-ink">
        <div className="container">
          <div className="agency-reveal">
            <SectionTitle
              badge="Juridique · Fiscal · Social"
              title="Une approche maîtrisée"
              highlight="sur les enjeux multiples"
              subtitle="Les dimensions juridiques, fiscales et sociales sont réunies pour mieux anticiper les risques et sécuriser les décisions."
              align="left"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <article className="agency-discipline agency-reveal">
              <div>
                <Scale className="w-6 h-6" />
              </div>
              <h3>Juridique</h3>
              <ul>
                {legalAreas.map((area) => (
                  <li key={area}>
                    <Check className="w-4 h-4" />
                    {area}
                  </li>
                ))}
              </ul>
            </article>
            <article className="agency-discipline agency-reveal">
              <div>
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <h3>Fiscal</h3>
              <ul>
                {taxAreas.map((area) => (
                  <li key={area}>
                    <Check className="w-4 h-4" />
                    {area}
                  </li>
                ))}
              </ul>
            </article>
            <article className="agency-discipline agency-reveal">
              <div>
                <UsersRound className="w-6 h-6" />
              </div>
              <h3>Social</h3>
              <ul>
                {socialAreas.map((area) => (
                  <li key={area}>
                    <Check className="w-4 h-4" />
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="methode" className="agency-method bg-navy text-white">
        <div className="container">
          <div className="agency-reveal">
            <SectionTitle
              badge="Notre méthode"
              title="De l’écoute à la"
              highlight="transformation"
              subtitle="Une méthode claire et collaborative pour transformer les enjeux en décisions opérationnelles."
            />
          </div>
          <div className="agency-method-grid mt-14">
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className="agency-method-card agency-reveal"
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agency-why bg-white text-ink">
        <div className="container">
          <div className="agency-reveal">
            <SectionTitle
              badge="Pourquoi nous choisir"
              title="Une différence fondée sur"
              highlight="la proximité et la qualité"
              subtitle="L’expertise est essentielle. La relation humaine est ce qui la rend réellement exploitable."
              align="left"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="agency-reason agency-reveal"
                >
                  <span className="agency-reason-icon">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                  <small>0{index + 1}</small>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="agency-team bg-paper text-ink">
        <div className="container">
          <div className="agency-reveal">
            <SectionTitle
              badge="Direction"
              title="L’expertise derrière"
              highlight="la vision"
              subtitle="Une direction engagée, réunissant comptabilité, conseil et compréhension des enjeux internationaux."
              align="left"
            />
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {teamList.length > 0 ? (
              teamList.map((member) => (
                <article
                  key={member._id}
                  className="agency-team-card agency-reveal"
                >
                  <div className="agency-team-photo">
                    {member.photo ? (
                      <SanityImage
                        source={member.photo}
                        alt={member.name}
                        width={500}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UsersRound className="w-12 h-12" />
                    )}
                  </div>
                  <div>
                    <p className="agency-team-role">{member.position}</p>
                    <h3>{member.name}</h3>
                    <p>{member.biography}</p>
                    {member.expertise && (
                      <div className="agency-tags">
                        {member.expertise.slice(0, 4).map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn <ArrowRight className="inline w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <div className="agency-empty-state">
                <UsersRound className="w-9 h-9" />
                <h3>Notre équipe</h3>
                <p>
                  Les profils de direction sont configurables depuis Sanity.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="insights" className="agency-insights bg-white text-ink">
        <div className="container">
          <div className="agency-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              badge="Insights"
              title="Éclairage sur les enjeux"
              highlight="professionnels"
              subtitle="Une sélection de réflexion sur la finance, le droit, la fiscalité et l’investissement."
              align="left"
            />
            <Link to="/actualites" className="agency-link">
              Voir tous les articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {newsList.length > 0
              ? newsList.slice(0, 3).map((item) => (
                  <article
                    key={item._id}
                    className="agency-news-card agency-reveal"
                  >
                    <div className="agency-news-image">
                      {item.image ? (
                        <SanityImage
                          source={item.image}
                          alt={item.title}
                          width={800}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Landmark className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="agency-news-meta">
                        {item.category || "Actualité"} · {item.day || ""}
                      </p>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link to="/actualites">
                        Lire la réflexion{" "}
                        <ArrowRight className="inline w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))
              : ["Finance", "Fiscalité", "Investissement en Tunisie"].map(
                  (category, index) => (
                    <article
                      key={category}
                      className="agency-news-card agency-reveal"
                    >
                      <div className="agency-news-image">
                        <Landmark className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="agency-news-meta">
                          {category} · {index + 1}
                        </p>
                        <h3>
                          Reflection professionnelle sur{" "}
                          {category.toLowerCase()}
                        </h3>
                        <p>
                          Contenu éditorial configurable dans Sanity Studio.
                        </p>
                        <Link to="/actualites">
                          Lire la réflexion{" "}
                          <ArrowRight className="inline w-4 h-4" />
                        </Link>
                      </div>
                    </article>
                  ),
                )}
          </div>
        </div>
      </section>

      {communityConfig.enabled !== false && (
        <CommunityCarousel
          posts={communityPosts}
          title={communityConfig.title}
          description={communityConfig.description}
        />
      )}

      <section className="agency-testimonials bg-paper text-ink">
        <div className="container">
          <SectionTitle
            badge="Témoignages"
            title="La confiance se construit"
            highlight="dans la durée"
            align="left"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {testimonialList.length > 0 ? (
              testimonialList.slice(0, 4).map((testimonial) => (
                <article
                  key={testimonial._id}
                  className="agency-testimonial agency-reveal"
                >
                  <p>“{testimonial.content}”</p>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>
                      {testimonial.role} ·{" "}
                      {testimonial.company || testimonial.location || ""}
                    </span>
                  </div>
                </article>
              ))
            ) : (
              <div className="agency-empty-state">
                <p>Les témoignages sont configurables depuis Sanity.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <FaqAccordion
        enabled={faqConfig.enabled !== false}
        title={faqConfig.title}
        description={faqConfig.description}
        items={faqItems}
      />

      <section className="agency-partners bg-white text-ink">
        <div className="container">
          <SectionTitle
            badge="Partenaires"
            title="Des réseaux de confiance"
            highlight="professionnels"
            align="left"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partnerList.length > 0 ? (
              partnerList.map((partner) => (
                <div key={partner._id} className="agency-partner">
                  <SanityImage
                    source={partner.logo}
                    alt={partner.name}
                    width={300}
                    className="h-24 w-full object-contain"
                  />
                </div>
              ))
            ) : (
              <div className="agency-empty-state col-span-2 md:col-span-4">
                <p>Les partenaires peuvent être ajouté dans Sanity.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="agency-final-cta bg-navy text-white">
        <div className="container agency-final-grid">
          <div className="agency-reveal">
            <p className="section-kicker">Une nouvelle étape</p>
            <h2>Construisons ensemble la prochaine étape de votre projet.</h2>
            <p>
              Notre équipe vous accompagne avec une approche intégrée,
              confidentielle et orientée résultats.
            </p>
          </div>
          <div className="agency-reveal">
            <Button variant="primary" size="lg" onClick={goToContact}>
              Prendre contact <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href={
                settings?.whatsapp
                  ? `https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, "")}`
                  : "https://wa.me/"
              }
              className="button button-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AgencyHomepage;
