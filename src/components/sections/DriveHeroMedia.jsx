import { useEffect, useMemo, useRef, useState } from "react";
import { Play } from "lucide-react";

const POSTER_DURATION = 4000;
const POSTER_IMAGE = "/images/Equipe/Tarek_Zouari.jpeg";

const DriveHeroMedia = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);
  const [failedIndices, setFailedIndices] = useState([]);
  const [allVideosFailed, setAllVideosFailed] = useState(false);
  const videoIds = useMemo(
    () =>
      [
        import.meta.env.VITE_HERO_VIDEO_ONE_FILE_ID,
        import.meta.env.VITE_HERO_VIDEO_TWO_FILE_ID,
      ].filter(Boolean),
    [],
  );
  const videoUrl = videoIds[videoIndex]
    ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(videoIds[videoIndex])}`
    : "";

  useEffect(() => {
    const timer = window.setTimeout(() => setShowVideo(true), POSTER_DURATION);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!showVideo || !videoUrl || !video) return;

    setReady(false);
    video.load();
    video.play().then(
      () => setPlaybackBlocked(false),
      () => setPlaybackBlocked(true),
    );
  }, [showVideo, videoUrl]);

  const advanceVideo = () => {
    const nextIndex = videoIds.findIndex(
      (_, index) => index !== videoIndex && !failedIndices.includes(index),
    );

    if (nextIndex === -1) {
      if (videoIds.length === 1 && !failedIndices.includes(videoIndex)) {
        videoRef.current?.play().catch(() => setPlaybackBlocked(true));
        return;
      }
      setAllVideosFailed(true);
      return;
    }

    setVideoIndex(nextIndex);
  };

  const handleVideoError = () => {
    const failed = [...new Set([...failedIndices, videoIndex])];
    setFailedIndices(failed);
    const nextIndex = videoIds.findIndex(
      (_, index) => index !== videoIndex && !failed.includes(index),
    );

    if (nextIndex === -1) {
      setAllVideosFailed(true);
      return;
    }

    setVideoIndex(nextIndex);
  };

  return (
    <div className="agency-hero-visual agency-reveal">
      <div className="agency-hero-image">
        <img
          src={POSTER_IMAGE}
          alt="Équipe dirigeante de ZNAC"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {videoUrl && !allVideosFailed && (
          <video
            ref={videoRef}
            key={videoUrl}
            muted
            playsInline
            preload="metadata"
            onCanPlay={() => setReady(true)}
            onEnded={advanceVideo}
            onError={handleVideoError}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ opacity: showVideo && ready ? 1 : 0 }}
            aria-label={`Vidéo de présentation ${videoIndex + 1}`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-navy/10" />
        {showVideo && playbackBlocked && videoUrl && !allVideosFailed && (
          <button
            type="button"
            onClick={() =>
              videoRef.current?.play().then(
                () => setPlaybackBlocked(false),
                () => setPlaybackBlocked(true),
              )
            }
            className="absolute bottom-5 right-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy"
            aria-label="Lire la vidéo de présentation"
          >
            <Play className="h-5 w-5 fill-current" />
          </button>
        )}
      </div>
      <div className="agency-floating-card top">
        <span aria-hidden="true">01</span>
        <div>
          <strong>Conseil intégré</strong>
          <span>Une vision à 360° de vos enjeux</span>
        </div>
      </div>
      <div className="agency-floating-card bottom">
        <span aria-hidden="true">TN</span>
        <div>
          <strong>Ancrage local</strong>
          <span>Expertise au service de la Tunisie</span>
        </div>
      </div>
    </div>
  );
};

export default DriveHeroMedia;
