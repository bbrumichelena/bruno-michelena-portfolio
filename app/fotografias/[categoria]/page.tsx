import Link from "next/link";
import { notFound } from "next/navigation";
import MediaGrid from "@/components/MediaGrid";
import { PHOTO_CATEGORIES } from "@/lib/categories";
import { getPhotoItems } from "@/lib/media";

export function generateStaticParams() {
  return PHOTO_CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export default async function PhotoCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = PHOTO_CATEGORIES.find((c) => c.slug === categoria);
  if (!category) notFound();

  const items = getPhotoItems(category.slug);

  return (
    <div>
      <Link href="/fotografias" className="text-sm font-medium text-white/40 hover:text-white">
        ← Volver a Fotografías
      </Link>
      <h1 className="mb-8 mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        {category.label}
      </h1>
      <MediaGrid items={items} natural />
    </div>
  );
}
