import fs from "fs";
import path from "path";

const VIDEO_EXT = new Set([".mp4", ".mov", ".webm", ".m4v"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".heic"]);

export type MediaItem = {
  file: string;
  url: string;
  kind: "video" | "image";
};

function listFiles(dir: string, allowed: Set<string>): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}

export function getVideoItems(slug: string): MediaItem[] {
  const dir = path.join(process.cwd(), "public", "media", "videos", slug);
  return listFiles(dir, VIDEO_EXT).map((file) => ({
    file,
    url: `/media/videos/${slug}/${file}`,
    kind: "video",
  }));
}

export function getPhotoItems(slug: string): MediaItem[] {
  const dir = path.join(process.cwd(), "public", "media", "fotografias", slug);
  return listFiles(dir, IMAGE_EXT).map((file) => ({
    file,
    url: `/media/fotografias/${slug}/${file}`,
    kind: "image",
  }));
}

export function countVideoItems(slug: string): number {
  return getVideoItems(slug).length;
}

export function countPhotoItems(slug: string): number {
  return getPhotoItems(slug).length;
}

export function getPhotoCategoryCovers(): Record<string, string> {
  const base = path.join(process.cwd(), "public", "media", "fotografias");
  if (!fs.existsSync(base)) return {};
  const covers: Record<string, string> = {};
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const dir = path.join(base, slug);
    const first = listFiles(dir, IMAGE_EXT)[0];
    if (first) covers[slug] = `/media/fotografias/${slug}/${first}`;
  }
  return covers;
}

export function getVideoCategoryCovers(): Record<string, string> {
  const dir = path.join(process.cwd(), "public", "media", "videos", "_covers");
  if (!fs.existsSync(dir)) return {};
  const covers: Record<string, string> = {};
  for (const file of fs.readdirSync(dir)) {
    if (path.extname(file).toLowerCase() !== ".gif") continue;
    const slug = path.parse(file).name;
    covers[slug] = `/media/videos/_covers/${file}`;
  }
  return covers;
}

export type AboutAsset = { url: string; kind: "video" | "image" } | null;

function findByBaseName(dir: string, baseName: string): AboutAsset {
  if (!fs.existsSync(dir)) return null;
  const match = fs
    .readdirSync(dir)
    .find((f) => path.parse(f).name.toLowerCase() === baseName);
  if (!match) return null;
  const ext = path.extname(match).toLowerCase();
  if (VIDEO_EXT.has(ext)) return { url: `/media/about/${match}`, kind: "video" };
  if (IMAGE_EXT.has(ext)) return { url: `/media/about/${match}`, kind: "image" };
  return null;
}

export function getAboutAssets(): { vertical: AboutAsset; horizontal: AboutAsset } {
  const dir = path.join(process.cwd(), "public", "media", "about");
  return {
    vertical: findByBaseName(dir, "vertical"),
    horizontal: findByBaseName(dir, "horizontal"),
  };
}
