"use client";

import { useState, useRef } from "react";
import type { YouTubeVideo } from "@/lib/videos";

function VideoCard({ v, showTitle }: { v: YouTubeVideo; showTitle: boolean }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isLocal = !!v.src;
  const thumb = isLocal ? (v.poster ?? null) : `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const embedSrc = isLocal ? null : `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`;

  const handlePlay = () => {
    if (isLocal && videoRef.current) {
      // Mostrar y reproducir en el mismo tick del click → Safari lo permite
      videoRef.current.style.display = "block";
      videoRef.current.play().catch(() => {});
    }
    setPlaying(true);
  };

  return (
    <div className={`relative mb-3 overflow-hidden rounded-lg ${v.short ? "aspect-[9/16]" : "aspect-video"}`}>

      {/* Video local: en DOM pero oculto hasta que se hace click */}
      {isLocal && (
        <video
          ref={videoRef}
          src={v.src}
          poster={v.poster}
          style={{ display: "none" }}
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
        />
      )}

      {/* YouTube: iframe solo cuando está playing */}
      {!isLocal && playing && (
        <iframe
          src={embedSrc!}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {/* Overlay con thumbnail — cubre hasta que se hace click */}
      {!playing && (
        <button
          onClick={handlePlay}
          className="group absolute inset-0 z-10 block h-full w-full"
          aria-label={`Reproducir ${v.title}`}
        >
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt={v.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-panel" />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/40">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 100 100" className="h-6 w-6 translate-x-0.5" fill="#0a0a0a">
                <polygon points="28,18 28,82 80,50" />
              </svg>
            </div>
          </div>
          {showTitle && (
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-6 text-left text-xs font-semibold text-white/90">
              {v.title}
            </span>
          )}
        </button>
      )}

    </div>
  );
}

type Props = {
  videos: YouTubeVideo[];
  showTitles?: boolean;
};

export default function YouTubeGrid({ videos, showTitles = false }: Props) {
  if (videos.length === 0) {
    return <p className="mt-8 text-white/40">Próximamente...</p>;
  }

  return (
    <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
      {videos.map((v, i) => (
        <VideoCard key={v.id ?? v.src ?? i} v={v} showTitle={showTitles} />
      ))}
    </div>
  );
}
