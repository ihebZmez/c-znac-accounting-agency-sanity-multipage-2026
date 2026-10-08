import { useRef, useState } from "react";
import { Play, VolumeX } from "lucide-react";
import SanityImage from "../common/SanityImage";

const getAssetUrl = (video) => {
  if (!video?.asset?._ref) return null;
  const ref = video.asset._ref.replace(/^file\//, "");
  return `https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID}/${
    import.meta.env.VITE_SANITY_DATASET || "production"
  }/${ref}`;
};

const VideoIntroduction = ({ config = {}, enabled = true }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = getAssetUrl(config.video);
  const externalUrl = config.externalUrl;
  const source = videoUrl || externalUrl;

  if (!enabled || !source) return null;

  const videoProvider = externalUrl?.includes("youtube.com")
    ? "youtube"
    : externalUrl?.includes("vimeo.com")
      ? "vimeo"
      : "sanity";

  return (
    <section className="agency-video-introduction bg-navy text-white">
      <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="agency-reveal">
          <p className="section-kicker">Notre approche</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {config.title ||
              "Votre partenaire pour vos projets et votre performance"}
          </h2>
          <p className="mt-5 max-w-2xl text-white/60 leading-8">
            {config.description ||
              "Découvrez notre approche et la manière dont nous accompagnons les entreprises et les investisseurs."}
          </p>
          {config.ctaLabel && config.ctaLink && (
            <a
              href={config.ctaLink}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-gold-light"
            >
              {config.ctaLabel}
            </a>
          )}
        </div>
        <div className="agency-reveal">
          <div className="video-shell">
            {config.poster && (
              <SanityImage
                source={config.poster}
                alt="Aperçu de la vidéo de présentation"
                width={1280}
                className="video-poster"
              />
            )}
            {videoProvider === "youtube" && (
              <iframe
                className="video-frame"
                src={`${source.replace("watch?v=", "embed/")}`}
                title={config.title || "Présentation de l’agence"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {videoProvider === "vimeo" && (
              <iframe
                className="video-frame"
                src={`${source.replace("vimeo.com", "player.vimeo.com/video")}`}
                title={config.title || "Présentation de l’agence"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
            {videoProvider === "sanity" && (
              <video
                ref={videoRef}
                className="video-frame"
                controls={isPlaying}
                muted
                playsInline
                preload="metadata"
                aria-label={config.title || "Présentation de l’agence"}
              >
                <source src={source} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            )}
            {!isPlaying &&
              videoProvider !== "youtube" &&
              videoProvider !== "vimeo" && (
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(true);
                    videoRef.current?.play().catch(() => undefined);
                  }}
                  className="video-play-button"
                  aria-label={`Lire la vidéo : ${config.title || "présentation de l’agence"}`}
                >
                  <Play className="h-7 w-7 fill-current" />
                </button>
              )}
            {videoProvider === "sanity" && isPlaying && (
              <span className="sr-only">
                <VolumeX className="h-4 w-4" /> Son coupé
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
