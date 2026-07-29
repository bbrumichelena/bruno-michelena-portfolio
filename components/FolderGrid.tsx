import Link from "next/link";
import type { Category } from "@/lib/categories";

type FolderGridProps = {
  basePath: string;
  categories: Category[];
  counts: Record<string, number>;
  covers?: Record<string, string>;
};

export default function FolderGrid({ basePath, categories, counts, covers = {} }: FolderGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((cat) => {
        const count = counts[cat.slug] ?? 0;
        const cover = covers[cat.slug];
        return (
          <Link
            key={cat.slug}
            href={`${basePath}/${cat.slug}`}
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-line bg-panel p-4 transition-colors hover:border-white/40"
          >
            {cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            )}
            <span
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent ${
                cover ? "" : "opacity-0 transition-opacity group-hover:opacity-100"
              }`}
            />
            <span className="relative text-lg font-black uppercase leading-tight tracking-tight">
              {cat.label}
            </span>
            <span className="relative mt-1 text-xs font-medium uppercase tracking-wide text-white/40">
              {count > 0 ? `${count} ${count === 1 ? "archivo" : "archivos"}` : "Próximamente"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
