import type { YouTubeVideo } from "@/lib/videos";

type Props = {
  videos: YouTubeVideo[];
  showTitles?: boolean;
};

export default function YouTubeGrid({ videos, showTitles = false }: Props) {
  if (videos.length === 0) {
    return (
      <p className="text-white/40 mt-8">Próximamente...</p>
    );
  }

  return (
    <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
      {videos.map((v) => {
        const url = v.short
          ? `https://youtube.com/shorts/${v.id}`
          : `https://youtu.be/${v.id}`;
        const thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

        return (
          <a
            key={v.id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-3 block overflow-hidden rounded-lg"
          >
            <div className={`relative w-full overflow-hidden ${v.short ? "aspect-[9/16]" : "aspect-video"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                alt={v.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              {/* play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <svg viewBox="0 0 100 100" className="h-14 w-14 drop-shadow-lg" fill="white">
                  <polygon points="28,18 28,82 80,50" />
                </svg>
              </div>
            </div>
            {showTitles && (
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-6 text-xs font-semibold text-white/90">
                {v.title}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
