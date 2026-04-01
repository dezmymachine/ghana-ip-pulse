import '../chunks/page-ssr_CZGsHcuX.mjs';
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_goDCtEOC.mjs';
import { $ as $$ImageWithFallback } from '../chunks/ImageWithFallback_BZBcWrcY.mjs';
import { l as loadQuery } from '../chunks/load-query_DcSwAUO7.mjs';
import { u as urlForImage } from '../chunks/url-for-image_DHZHYD7o.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: blogPosts } = await loadQuery({
    query: `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    categories[]->{ title }
  }`
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };
  const getImageUrl = (image) => {
    if (!image) return null;
    try {
      return urlForImage(image).width(800).url();
    } catch (e) {
      return null;
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex-1"> <div class="bg-[#F7F4EF]"> <section class="bg-white border-b-4 border-[#C8992A] py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <h1 class="font-['Playfair_Display'] text-7xl lg:text-8xl font-bold text-[#1A3C2E] mb-4">
Ghana IP Pulse
</h1> <p class="font-['DM_Serif_Display'] text-2xl text-[#5A5A4A] italic">
Insights on intellectual property law, innovation, and creative rights
</p> </div> </section> <section class="py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> ${blogPosts && blogPosts.length > 0 && renderTemplate`<article class="bg-white border-2 border-[#1A3C2E] mb-16 hover:shadow-[8px_8px_0px_0px_rgba(26,60,46,1)] transition-all group"> <div class="grid lg:grid-cols-2"> <div class="aspect-[4/3] overflow-hidden bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": getImageUrl(blogPosts[0].mainImage) || "https://images.unsplash.com/photo-1625191824973-894292e94c96?w=800", "alt": blogPosts[0].title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })} </div> <div class="p-10 lg:p-16 flex flex-col justify-center"> <div class="mb-4"> <span class="bg-[#C8992A] text-[#141414] px-4 py-2 font-['Archivo_Narrow'] text-xs uppercase tracking-wider">
Featured · ${blogPosts[0].categories?.[0]?.title || "Article"} </span> </div> <h2 class="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#1A3C2E] mb-6 group-hover:text-[#C8992A] transition-colors"> <a${addAttribute(`/blog/${blogPosts[0].slug.current}`, "href")}>${blogPosts[0].title}</a> </h2> <p class="font-['Source_Serif_4'] text-lg text-[#5A5A4A] leading-relaxed mb-6"> ${blogPosts[0].excerpt} </p> <div class="flex items-center gap-6 font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#5A5A4A]"> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> ${blogPosts[0].publishedAt ? formatDate(blogPosts[0].publishedAt) : ""} </div> <a${addAttribute(`/blog/${blogPosts[0].slug.current}`, "href")} class="flex items-center gap-2 hover:text-[#C8992A] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
Read article
</a> </div> </div> </div> </article>`} <div class="grid md:grid-cols-3 gap-8"> ${blogPosts?.slice(1)?.map((post) => renderTemplate`<article class="bg-white border border-[#D4C9B0] hover:border-[#1A3C2E] hover:shadow-[4px_4px_0px_0px_rgba(26,60,46,1)] transition-all group"> <div class="aspect-[16/9] overflow-hidden bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": getImageUrl(post.mainImage) || "https://images.unsplash.com/photo-1625191824973-894292e94c96?w=800", "alt": post.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })} </div> <div class="p-6"> <div class="mb-4"> <span class="bg-[#C8992A] text-[#141414] px-3 py-1 font-['Archivo_Narrow'] text-xs uppercase tracking-wider"> ${post.categories?.[0]?.title || "Article"} </span> </div> <h3 class="font-['DM_Serif_Display'] text-2xl text-[#141414] mb-3 group-hover:text-[#1A3C2E] transition-colors"> <a${addAttribute(`/blog/${post.slug.current}`, "href")}>${post.title}</a> </h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] leading-relaxed mb-4"> ${post.excerpt} </p> <div class="flex items-center gap-4 text-xs font-['Archivo_Narrow'] text-[#5A5A4A] uppercase tracking-wider pt-4 border-t border-[#D4C9B0]"> <div class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> ${post.publishedAt ? formatDate(post.publishedAt) : ""} </div> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="flex items-center gap-1 hover:text-[#C8992A] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
Read article
</a> </div> </div> </article>`)} </div> </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/index.astro", void 0);

const $$file = "/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
