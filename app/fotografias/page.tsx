import FolderGrid from "@/components/FolderGrid";
import { PHOTO_CATEGORIES } from "@/lib/categories";
import { countPhotoItems, getPhotoCategoryCovers } from "@/lib/media";

export default function FotografiasPage() {
  const counts = Object.fromEntries(
    PHOTO_CATEGORIES.map((c) => [c.slug, countPhotoItems(c.slug)])
  );
  const covers = getPhotoCategoryCovers();

  return (
    <div className="relative">
      <h1 className="pointer-events-none absolute right-0 -top-6 z-10 text-5xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:-top-10 md:text-7xl lg:-top-14 lg:text-8xl">
        Fotografías
      </h1>
      <FolderGrid basePath="/fotografias" categories={PHOTO_CATEGORIES} counts={counts} covers={covers} />
    </div>
  );
}
