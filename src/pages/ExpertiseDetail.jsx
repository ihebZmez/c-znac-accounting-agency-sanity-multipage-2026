import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FolderOpen,
  Route,
  UsersRound,
} from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { seoConfig } from "../config/seoConfig";
import { useExpertises } from "../hooks/useExpertises";
import { slugify } from "../lib/slugify";

const defaultAudience =
  "Cette expertise s’adresse aux dirigeants, créateurs d’entreprise et équipes financières qui souhaitent fiabiliser leur gestion, sécuriser leurs obligations et prendre des décisions éclairées. L’accompagnement est adapté à votre activité, à votre taille et à vos priorités.";

const defaultDocuments = [
  "Les statuts de la société, son extrait du Registre national des entreprises et ses identifiants fiscaux.",
  "Les derniers états financiers, balances générales et grands livres disponibles.",
  "Les relevés bancaires, factures, contrats et justificatifs liés à la mission.",
  "Les déclarations fiscales et sociales récentes ainsi que les courriers reçus des administrations.",
  "Vos échéances, questions prioritaires et objectifs pour la mission.",
];

const defaultSteps = [
  "Un premier échange permet de comprendre votre activité, vos objectifs et vos échéances.",
  "Nous analysons les éléments transmis et vous demandons uniquement les compléments nécessaires.",
  "Nous définissons ensemble les priorités, les livrables, les interlocuteurs et le calendrier.",
  "Nous réalisons la mission, présentons nos conclusions et convenons des prochaines étapes.",
];

const ExpertiseDetail = () => {
  const { slug } = useParams();
  const { data: expertises = [], loading } = useExpertises();
  const expertise = expertises.find(
    (item) => (item.slug || slugify(item.title)) === slug,
  );

  if (!expertise) {
    return (
      <main className="min-h-[70vh] bg-navy px-4 py-40 text-center text-white">
        <h1 className="font-serif text-5xl">
          {loading ? "Chargement de l’expertise" : "Expertise non trouvée"}
        </h1>
        {!loading && (
          <Link
            to="/expertises"
            className="button button-secondary mt-8 inline-flex"
          >
            Retour aux expertises
          </Link>
        )}
      </main>
    );
  }

  const documents = expertise.documentsToPrepare?.length
    ? expertise.documentsToPrepare
    : defaultDocuments;
  const steps = expertise.accompanimentSteps?.length
    ? expertise.accompanimentSteps
    : defaultSteps;
  const associatedServices = expertise.link?.startsWith("/")
    ? expertise.link
    : "/services";
  const canonical = `/expertises/${expertise.slug || slugify(expertise.title)}`;

  return (
    <main className="bg-paper text-ink">
      <Seo
        title={`${expertise.title} | ZNAC`}
        description={expertise.description || seoConfig.expertise.description}
        canonical={canonical}
      />
      <section className="bg-navy px-4 pb-20 pt-36 text-white md:px-8">
        <div className="container">
          <Link
            to="/expertises"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les expertises
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <p className="section-kicker">Expertise ZNAC</p>
              <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
                {expertise.title}
              </h1>
              {expertise.description && (
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  {expertise.description}
                </p>
              )}
            </div>
            {expertise.image ? (
              <SanityImage
                source={expertise.image}
                alt={expertise.title}
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
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="container grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col gap-6 rounded-xl border border-ink/10 bg-white p-7 shadow-sm md:flex-row md:p-9 lg:col-span-2">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
              <UsersRound className="h-5 w-5" />
            </span>
            <div className="max-w-4xl">
              <h2 className="font-serif text-3xl md:text-4xl">
                À qui s’adresse ce service ?
              </h2>
              <p className="mt-4 text-base leading-8 text-ink/70">
                {expertise.targetAudience || defaultAudience}
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-ink/10 bg-white p-7 shadow-sm md:p-9">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <FolderOpen className="h-5 w-5" />
              </span>
              <h2 className="font-serif text-3xl">
                Quels documents préparer ?
              </h2>
            </div>
            <ul className="mt-6 divide-y divide-ink/10">
              {documents.map((document, index) => (
                <li
                  key={`${index}-${document}`}
                  className="flex gap-3 py-4 text-sm leading-6 text-ink/70"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  {document}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-6 text-ink/50">
              La liste est ajustée à votre situation ; vous n’avez pas besoin de
              réunir des pièces sans rapport avec la mission.
            </p>
          </article>

          <article className="rounded-xl border border-ink/10 bg-white p-7 shadow-sm md:p-9">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Route className="h-5 w-5" />
              </span>
              <h2 className="font-serif text-3xl">
                Comment se déroule l’accompagnement ?
              </h2>
            </div>
            <ol className="mt-6">
              {steps.map((step, index) => (
                <li
                  key={`${index}-${step}`}
                  className="flex gap-4 border-b border-ink/10 py-4 last:border-b-0"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-xs font-semibold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-ink/70">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-navy px-4 py-12 text-white md:px-8">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="section-kicker">Expertise ZNAC</p>
            <h2 className="mt-3 font-serif text-3xl">
              Un besoin complémentaire ?
            </h2>
          </div>
          <Link to={associatedServices} className="button button-primary">
            Voir les services associés <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ExpertiseDetail;
