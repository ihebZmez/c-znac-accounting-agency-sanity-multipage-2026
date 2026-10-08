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
  LockKeyhole,
  MapPin,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import News from "./News";
import Button from "../ui/Button";

const services = [
  {
    icon: BarChart3,
    eyebrow: "01 / Finances",
    title: "Finance & Audit",
    description:
      "Audit financier, contrôles de conformité, analyse de performance et rédaction de rapports adaptés aux exigences de votre groupe.",
    points: [
      "Audit financier",
      "Contrôle de conformité",
      "Analyse de performance",
    ],
  },
  {
    icon: Scale,
    eyebrow: "02 / Conseil",
    title: "Fiscal, juridique & social",
    description:
      "Une vision intégrée pour piloter les enjeux fiscaux, juridiques et sociaux de votre entreprise.",
    points: ["Conseil fiscal", "Conseil juridique", "Conseil social"],
  },
  {
    icon: Globe2,
    eyebrow: "03 / International",
    title: "Investisseurs étrangers",
    description:
      "Accompagnement de l’entrée sur le marché tunisien à la structuration, la conformité et le développement durable.",
    points: ["Entrée sur marché", "Structuration", "Suivi international"],
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "04 / Stratégie",
    title: "Entreprises & stratégie",
    description:
      "Conseil stratégique et financier pour clarifier vos priorités, sécuriser votre trajectoire et accélérer la décision.",
    points: ["Stratégie de croissance", "Plan financier", "Mise en œuvre"],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Confidentialité",
    text: "Une prise en charge discrète, respectueuse des informations sensibles et des intérêts de votre entreprise.",
  },
  {
    icon: Sparkles,
    title: "Expertise personnalisée",
    text: "Des solutions adaptées à votre taille, votre secteur et votre ambition sans approches génériques.",
  },
  {
    icon: UsersRound,
    title: "Accompagnement continu",
    text: "Un interlocuteur engagé, de la définition du diagnostic jusqu’au suivi des décisions et de leur exécution.",
  },
  {
    icon: Globe2,
    title: "Perspectif international",
    text: "Une vision globale et locale pour anticiper les enjeux de marchés, de financement et de gouvernance.",
  },
];

const method = [
  {
    number: "01",
    title: "Analyse",
    text: "Cartographie des enjeux, données financières et besoins métier.",
  },
  {
    number: "02",
    title: "Diagnostic",
    text: "Clarté sur les risques, les opportunités et les priorités.",
  },
  {
    number: "03",
    title: "Recommandation",
    text: "Une stratégie concrète, réaliste et alignée avec vos objectifs.",
  },
  {
    number: "04",
    title: "Mise en œuvre",
    text: "Accompagnement opérationnel pour transformer la stratégie en action.",
  },
  {
    number: "05",
    title: "Suivi",
    text: "Pilotage continu, indicateurs et décisions adaptées en temps réel.",
  },
];

const ConsultingOverview = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
  }, []);

  const openContact = () => navigate("/contact");

  return (
    <section ref={sectionRef} className="consulting-overview">
      <section className="hero-consulting relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="container relative grid min-h-[88vh] items-center gap-14 py-32 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot" />
              Conseil de confiance · Tunisie · International
            </div>
            <h1 className="hero-title max-w-4xl">
              L’expertise qui transforme les enjeux en{" "}
              <span>décisions solides.</span>
            </h1>
            <p className="hero-subtitle mt-7 max-w-2xl">
              Accompagnement stratégique pour les entreprises et les
              investisseurs étrangers, de la analyse financière à la
              structuration juridique et fiscale.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" onClick={openContact}>
                Parlons de votre projet <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/actualites" className="button button-secondary">
                Découvrir nos expertises
              </Link>
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
              <img
                src="/images/clients/BNA-bank.jpg"
                alt="Bâtiment corporate et environnement de travail professionnel"
                className="h-full w-full object-cover"
              />
              <div className="hero-image-overlay" />
            </div>
            <div className="floating-card floating-card-top">
              <LockKeyhole className="w-5 h-5 text-gold" />
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

      <section id="expertises" className="section-shell bg-paper text-ink">
        <div className="container">
          <SectionTitle
            badge="Notre expertise"
            title="Une expertise multidirigée"
            highlight="pour les enjeux qui comptent"
            subtitle="De l’architecture de l’affaire à la décision finale, nous réunissons les compétences nécessaires pour avancer avec clarté."
            align="left"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="service-card reveal-item"
                >
                  <div className="service-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="service-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Check className="w-4 h-4" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-ink">
        <div className="container grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="reveal-item">
            <p className="section-kicker">Pourquoi nous choisir</p>
            <h2 className="section-heading">
              Une relation de travail fondée sur la <span>confiance</span>.
            </h2>
            <p className="section-copy">
              Nous aidons les dirigeants à comprendre, anticiper et résoudre les
              enjeux complexes avec une rigueur professionnelle et une approche
              humaine.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="principle-card">
                    <Icon className="w-5 h-5 text-gold" />
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reveal-item institution-panel">
            <div className="institution-mark">
              <Building2 className="w-8 h-8" />
            </div>
            <p className="section-kicker">L’équipe</p>
            <h2>Une vision intégrée, portée par deux dirigeants.</h2>
            <p>
              Le cabinet est dirigé par Tarek Zouari et Njah Issam, deux acteurs
              engagés dans la défense de la clarté, de la conformité et de la
              stratégie professionnelle.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="leadership-card">
                <div className="leadership-initials">TZ</div>
                <div>
                  <h3>Tarek Zouari</h3>
                  <p>Dirigeant · Gouvernance et stratégie</p>
                </div>
              </div>
              <div className="leadership-card">
                <div className="leadership-initials">NI</div>
                <div>
                  <h3>Njah Issam</h3>
                  <p>Dirigeant · Expertises financières et juridiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-navy text-white">
        <div className="container">
          <SectionTitle
            badge="Investisseurs étrangers"
            title="Votre entrée en Tunisie"
            highlight="sans ambiguïté"
            subtitle="Nous réunissons les compétences nécessaires pour vous accompagner, de votre première analyse à l’intégration durable de votre activité."
          />
          <div className="investor-grid mt-14">
            <div className="investor-copy reveal-item">
              <div className="investor-icon">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3>Un partenaire local, une vision internationale.</h3>
              <p>
                Nous vous aidons à comprendre le contexte tunisien, les
                exigences de structuration, la fiscalité, le droit du travail et
                l’environnement opérationnel de votre investissement.
              </p>
              <ul>
                <li>
                  <Check /> Analyse du marché et de l’écosystème local
                </li>
                <li>
                  <Check /> Structuration de l’activité et des relations
                </li>
                <li>
                  <Check /> Accompagnement fiscal, juridique et opérationnel
                </li>
                <li>
                  <Check /> Suivi continu pour une croissance durable
                </li>
              </ul>
              <Button variant="primary" size="lg" onClick={openContact}>
                Discuter de votre installation{" "}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="investor-visual reveal-item">
              <div className="map-orbit">
                <Globe2 className="w-10 h-10" />
              </div>
              <div className="location-pin">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="investor-stat">
                <strong>TN</strong>
                <span>Écosystème local</span>
              </div>
              <div className="investor-stat investor-stat-right">
                <strong>INT.</strong>
                <span>Vision globale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approche" className="section-shell bg-paper text-ink">
        <div className="container">
          <SectionTitle
            badge="Méthode"
            title="De l’analyse à l’action"
            highlight="avec contrôle"
            subtitle="Une méthode claire, rigoureuse et immédiatement exploitable."
            align="left"
          />
          <div className="method-grid mt-14">
            {method.map((step) => (
              <article key={step.number} className="method-card reveal-item">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-ink">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              badge="Actualités & insights"
              title="Éclairage sur les enjeux"
              highlight="professionnels"
              subtitle="Analyse de l’actualité, réflexion stratégique et information pertinente pour les entreprises tunisiennes et internationales."
              align="left"
            />
            <Link to="/actualites" className="button button-outline">
              Voir toutes les actualités <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <News />
        </div>
      </section>

      <section className="cta-consulting">
        <div className="container cta-content">
          <div className="reveal-item">
            <p className="section-kicker">Prendre rendez-vous</p>
            <h2>Bénéficiez d’un accompagnement adapté à vos enjeux.</h2>
            <p>
              Nous vous proposons une première échange pour comprendre votre
              contexte et définir le bon niveau d’accompagnement.
            </p>
          </div>
          <div className="cta-actions reveal-item">
            <Button variant="primary" size="lg" onClick={openContact}>
              Parlons de votre projet <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href="mailto:contact@zouari-njah.com"
              className="button button-secondary"
            >
              Écrire à l’équipe
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ConsultingOverview;
