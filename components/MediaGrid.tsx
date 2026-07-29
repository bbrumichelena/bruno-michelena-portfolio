"use client";

import { useState } from "react";
import type { MediaItem } from "@/lib/media";
import PlayCover from "@/components/PlayCover";

export default function MediaGrid({
  items,
  natural = false,
  showTitles = false,
}: {
  items: MediaItem[];
  natural?: boolean;
  showTitles?: boolean;
}) {
  const [active, setActive] = useState<MediaItem | null>(null);

  const nameOf = (file: string) => file.replace(/\.[^/.]+$/, "");

  if (items.length === 0) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl border border-dashed border-line text-center">
        <p className="text-lg font-bold uppercase tracking-wide text-white/60">
          Próximamente
        </p>
        <p className="mt-2 max-w-sm text-sm text-white/30">
          Todavía no hay contenido cargado en esta categoría.
        </p>
      </div>
    );
  }

  if (natural) {
    return (
      <>
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {items.map((item) => (
            <button
              key={item.file}
              onClick={() => setActive(item)}
              className="group mb-4 block w-full overflow-hidden rounded-xl border border-line bg-panel"
            >
              {item.kind === "image" ? (
                <img
                  src={item.url}
                  alt={item.file}
                  className="w-full transition-transform group-hover:scale-[1.02]"
                />
              ) : (
                <div className="aspect-video w-full">
                  <PlayCover className="transition-transform group-hover:scale-[1.02]" />
                </div>
              )}
            </button>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActive(null)}
          >
            <div className="max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              {active.kind === "image" ? (
                <img src={active.url} alt={active.file} className="max-h-[90vh] w-auto rounded-lg object-contain" />
              ) : (
                <video src={active.url} controls autoPlay className="max-h-[90vh] w-auto rounded-lg" />
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.file}
            onClick={() => setActive(item)}
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-line bg-panel p-4 text-left"
          >
            {item.kind === "image" ? (
              <img
                src={item.url}
                alt={item.file}
                className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <PlayCover className="absolute inset-0 transition-transform group-hover:scale-105" />
            )}
            {showTitles && (
              <>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="relative text-sm font-black uppercase leading-tight tracking-tight line-clamp-2">
                  {nameOf(item.file)}
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setActive(null)}
        >
          <div className="max-h-[90vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {active.kind === "image" ? (
              <img src={active.url} alt={active.file} className="max-h-[90vh] w-full rounded-lg object-contain" />
            ) : (
              <video src={active.url} controls autoPlay className="max-h-[90vh] w-full rounded-lg" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
