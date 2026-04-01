import '../chunks/page-ssr_CZGsHcuX.mjs';
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_goDCtEOC.mjs';
import { $ as $$ImageWithFallback } from '../chunks/ImageWithFallback_BZBcWrcY.mjs';
import { l as loadQuery } from '../chunks/load-query_DcSwAUO7.mjs';
import { u as urlForImage } from '../chunks/url-for-image_DHZHYD7o.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: featuredArticles } = await loadQuery({
    query: `*[_type == "post"] | order(publishedAt desc)[0..2] {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex-1"> <div class="bg-[#F7F4EF]"> <section class="bg-white border-b-4 border-[#C8992A]"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32"> <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"> <div> <h1 class="font-['Playfair_Display'] text-5xl lg:text-7xl font-bold text-[#1A3C2E] leading-tight mb-6">
Protecting Ghana's Ideas, One Conversation at a Time
</h1> <div class="w-24 h-1 bg-[#C8992A] mb-8"></div> <p class="font-['Source_Serif_4'] text-xl text-[#5A5A4A] leading-relaxed mb-10">
Expert guidance on intellectual property law for entrepreneurs, creatives, and students navigating Ghana's innovation landscape.
</p> <div class="flex flex-wrap gap-4"> <a href="/blog" class="bg-[#C8992A] text-[#141414] px-8 py-4 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-transparent hover:text-[#141414] border-2 border-[#C8992A] transition-all inline-flex items-center gap-2">
Explore Articles
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> <a href="/about" class="bg-transparent text-[#1A3C2E] px-8 py-4 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-[#1A3C2E] hover:text-white border-2 border-[#1A3C2E] transition-all">
About Dr Agyei
</a> </div> </div> <div class="relative"> <div class="border-4 border-[#1A3C2E] overflow-hidden"> <div class="aspect-[3/4] bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": "https://images.unsplash.com/photo-1686628332798-757c624c4b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4MDgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=800", "alt": "Dr Doreen Adoma Agyei", "class": "w-full h-full object-cover" })} </div> </div> <div class="absolute -bottom-6 -right-6 bg-[#C8992A] text-[#141414] p-6 max-w-[280px] border-2 border-[#141414]"> <p class="font-['DM_Serif_Display'] text-lg italic leading-relaxed">
"Making IP law accessible to every Ghanaian innovator."
</p> </div> </div> </div> </div> </section> <section class="border-b-2 border-[#D4C9B0]"> <div class="max-w-[1440px] mx-auto grid md:grid-cols-3"> <a href="/blog" class="group bg-white hover:bg-[#1A3C2E] transition-colors p-10 border-r-2 last:border-r-0 border-[#D4C9B0]"> <div class="text-[#C8992A] mb-6 group-hover:text-[#C8992A] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg> </div> <h3 class="font-['DM_Serif_Display'] text-2xl text-[#141414] group-hover:text-white mb-4 transition-colors">
IP for Entrepreneurs
</h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] group-hover:text-gray-300 leading-relaxed transition-colors">
Trademark, patent, and trade secret protection for your business ventures.
</p> <div class="mt-6 flex items-center gap-2 text-[#C8992A] font-['Archivo_Narrow'] text-sm uppercase tracking-wider">
Learn More
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </div> </a> <a href="/blog" class="group bg-white hover:bg-[#1A3C2E] transition-colors p-10 border-r-2 last:border-r-0 border-[#D4C9B0]"> <div class="text-[#C8992A] mb-6 group-hover:text-[#C8992A] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path><path d="M6 6h.005v.005H6V6Z"></path></svg> </div> <h3 class="font-['DM_Serif_Display'] text-2xl text-[#141414] group-hover:text-white mb-4 transition-colors">
IP for Creatives
</h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] group-hover:text-gray-300 leading-relaxed transition-colors">
Copyright registration and enforcement for musicians, artists, and content creators.
</p> <div class="mt-6 flex items-center gap-2 text-[#C8992A] font-['Archivo_Narrow'] text-sm uppercase tracking-wider">
Learn More
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </div> </a> <a href="/resources" class="group bg-white hover:bg-[#1A3C2E] transition-colors p-10 border-r-2 last:border-r-0 border-[#D4C9B0]"> <div class="text-[#C8992A] mb-6 group-hover:text-[#C8992A] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> </div> <h3 class="font-['DM_Serif_Display'] text-2xl text-[#141414] group-hover:text-white mb-4 transition-colors">
IP for Students
</h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] group-hover:text-gray-300 leading-relaxed transition-colors">
Educational resources and research guidance for aspiring IP professionals.
</p> <div class="mt-6 flex items-center gap-2 text-[#C8992A] font-['Archivo_Narrow'] text-sm uppercase tracking-wider">
Learn More
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </div> </a> </div> </section> <section class="py-20 lg:py-32"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="mb-16"> <div class="flex items-baseline gap-4 mb-4"> <span class="font-['Playfair_Display'] text-5xl text-[#C8992A]">§</span> <h2 class="font-['Playfair_Display'] text-5xl font-bold text-[#1A3C2E]">
Latest Insights
</h2> </div> <div class="w-32 h-1 bg-[#C8992A]"></div> </div> <div class="grid md:grid-cols-3 gap-8"> ${featuredArticles?.map((article) => renderTemplate`<article class="bg-white border border-[#D4C9B0] hover:border-[#1A3C2E] transition-all group"> <div class="aspect-[16/9] overflow-hidden bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": getImageUrl(article.mainImage) || "https://images.unsplash.com/photo-1625191824973-894292e94c96?w=800", "alt": article.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })} </div> <div class="p-6"> <div class="mb-4"> <span class="bg-[#C8992A] text-[#141414] px-3 py-1 font-['Archivo_Narrow'] text-xs uppercase tracking-wider"> ${article.categories?.[0]?.title || "Article"} </span> </div> <h3 class="font-['DM_Serif_Display'] text-2xl text-[#141414] mb-3 group-hover:text-[#1A3C2E] transition-colors"> <a${addAttribute(`/blog/${article.slug.current}`, "href")}>${article.title}</a> </h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] leading-relaxed mb-4"> ${article.excerpt} </p> <div class="flex items-center justify-between text-sm font-['Archivo_Narrow'] text-[#5A5A4A] uppercase tracking-wider pt-4 border-t border-[#D4C9B0]"> <span>${article.publishedAt ? formatDate(article.publishedAt) : ""}</span> <a${addAttribute(`/blog/${article.slug.current}`, "href")} class="hover:text-[#C8992A] transition-colors">Read more</a> </div> </div> </article>`)} </div> <div class="text-center mt-12"> <a href="/blog" class="inline-flex items-center gap-2 text-[#1A3C2E] font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:text-[#C8992A] transition-colors group">
View All Articles
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> </div> </section> <section class="bg-[#1A3C2E] text-white py-20 border-t-4 border-[#C8992A]"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 text-center"> <h2 class="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold mb-6">
Have a Question About IP Law?
</h2> <p class="font-['Source_Serif_4'] text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
Schedule a consultation or reach out to discuss your intellectual property needs.
</p> <a href="/contact" class="bg-[#C8992A] text-[#141414] px-10 py-5 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-transparent hover:text-[#C8992A] border-2 border-[#C8992A] transition-all inline-flex items-center gap-2">
Get in Touch
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/pages/index.astro", void 0);

const $$file = "/home/dezmymachine/work/ip_site/astro_version/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
