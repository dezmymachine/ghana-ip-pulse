import { urlForImage } from "./url-for-image";

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1625191824973-894292e94c96?w=800";

export function formatDate(dateString?: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getImageUrl(image: any, width = 800) {
  if (!image) return FALLBACK_IMAGE;
  try {
    return urlForImage(image).width(width).auto("format").url();
  } catch {
    return FALLBACK_IMAGE;
  }
}

export function readTime(minutes?: number | null) {
  if (!minutes || Number.isNaN(minutes)) return null;
  return `${Math.max(1, Math.round(minutes))} min read`;
}

// Some titles are stored in ALL CAPS in Sanity. Convert those to sentence case
// for display only; mixed-case titles are returned unchanged.
export function displayTitle(title?: string) {
  if (!title) return "";
  if (title !== title.toUpperCase() || title === title.toLowerCase()) return title;
  const lower = title.toLowerCase();
  return lower
    .replace(/^(\W*)([a-z])/, (_, p, c) => p + c.toUpperCase())
    .replace(/\b(ghana|ghanaian|ghanaians|cmos|cmo|ip|ai|ghamro)\b/g, (m) =>
      m.length <= 5 && !["ghana"].includes(m) ? m.toUpperCase() : m[0].toUpperCase() + m.slice(1)
    );
}

export function postMeta(post: any) {
  return [formatDate(post.publishedAt), readTime(post.readTime)]
    .filter(Boolean)
    .join(" · ");
}
