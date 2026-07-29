import FolderGrid from "@/components/FolderGrid";
import { VIDEO_CATEGORIES } from "@/lib/categories";
import { getVideoCategoryCovers } from "@/lib/media";
import { YOUTUBE_VIDEOS } from "@/lib/videos";

export default function VideosPage() {
  const counts = Object.fromEntries(
    VIDEO_CATEGORIES.map((c) => [c.slug, (YOUTUBE_VIDEOS[c.slug] ?? []).length])
  );
  const covers = getVideoCategoryCovers();

  return (
    <div className="relative">
      <h1 className="pointer-events-none absolute right-0 -top-6 z-10 text-5xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:-top-10 md:text-7xl lg:-top-14 lg:text-8xl">
        Videos
      </h1>
      <FolderGrid basePath="/videos" categories={VIDEO_CATEGORIES} counts={counts} covers={covers} />
    </div>
  );
}
