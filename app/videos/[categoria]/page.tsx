import Link from "next/link";
import { notFound } from "next/navigation";
import YouTubeGrid from "@/components/YouTubeGrid";
import { VIDEO_CATEGORIES } from "@/lib/categories";
import { YOUTUBE_VIDEOS } from "@/lib/videos";

export function generateStaticParams() {
  return VIDEO_CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export default async function VideoCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = VIDEO_CATEGORIES.find((c) => c.slug === categoria);
  if (!category) notFound();

  const videos = YOUTUBE_VIDEOS[category.slug] ?? [];

  return (
    <div>
      <Link href="/videos" className="text-sm font-medium text-white/40 hover:text-white">
        ← Volver a Videos
      </Link>
      <h1 className="mb-8 mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        {category.label}
      </h1>
      <YouTubeGrid videos={videos} showTitles={category.slug === "redes-sociales"} />
    </div>
  );
}
