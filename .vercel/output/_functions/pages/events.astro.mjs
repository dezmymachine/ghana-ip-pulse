import '../chunks/page-ssr_CZGsHcuX.mjs';
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_goDCtEOC.mjs';
import { l as loadQuery } from '../chunks/load-query_DcSwAUO7.mjs';
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const { data: events } = await loadQuery({
    query: `*[_type == "event"] | order(date asc)`
  });
  const formatDateParts = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.getFullYear().toString()
    };
  };
  const pastEvents = [
    { date: "March 2026", title: "IP Law and the Creative economy", attendees: "75 participants" },
    { date: "February 2026", title: "Trademark Fundamentals Workshop", attendees: "40 participants" },
    { date: "January 2026", title: "Annual IP Policy Forum", attendees: "120 participants" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex-1"> <div class="bg-[#F7F4EF]"> <section class="bg-white border-b-4 border-[#C8992A] py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="flex items-baseline gap-4 mb-6"> <span class="font-['Playfair_Display'] text-6xl text-[#C8992A]">§</span> <h1 class="font-['Playfair_Display'] text-6xl lg:text-7xl font-bold text-[#1A3C2E]">
Events
</h1> </div> <div class="w-32 h-1 bg-[#C8992A] mb-6"></div> <p class="font-['Source_Serif_4'] text-xl text-[#5A5A4A] max-w-3xl">
Join our workshops, seminars, and conferences designed to build your intellectual property knowledge and connect with Ghana's innovation community.
</p> </div> </section> <section class="py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <h2 class="font-['Playfair_Display'] text-4xl font-bold text-[#1A3C2E] mb-12">
Upcoming Events
</h2> <div class="space-y-6"> ${events?.map((event, index) => {
    const dateParts = formatDateParts(event.date);
    const isFeatured = index === 0;
    return renderTemplate`<article${addAttribute(`bg-white border-l-4 ${isFeatured ? "border-[#C8992A]" : "border-[#1A3C2E]"} border-r border-t border-b border-[#D4C9B0] hover:shadow-[6px_6px_0px_0px_rgba(26,60,46,0.1)] transition-all group`, "class")}> <div class="grid lg:grid-cols-[auto_1fr_auto] gap-8 p-8 lg:p-10"> <div class="flex flex-col items-center justify-center bg-[#1A3C2E] text-white px-8 py-6 min-w-[140px]"> <div class="font-['Playfair_Display'] text-5xl font-bold leading-none"> ${dateParts.day} </div> <div class="font-['Archivo_Narrow'] text-sm uppercase tracking-wider mt-1"> ${dateParts.month} </div> <div class="font-['Archivo_Narrow'] text-sm tracking-wider text-[#C8992A]"> ${dateParts.year} </div> </div> <div> ${isFeatured && renderTemplate`<div class="mb-3"> <span class="bg-[#C8992A] text-[#141414] px-3 py-1 font-['Archivo_Narrow'] text-xs uppercase tracking-wider">
Featured Event
</span> </div>`} <div class="mb-2"> <span class="font-['Archivo_Narrow'] text-xs uppercase tracking-wider text-[#5A5A4A]"> ${event.type} </span> </div> <h3 class="font-['DM_Serif_Display'] text-3xl text-[#141414] mb-4 group-hover:text-[#1A3C2E] transition-colors"> ${event.title} </h3> <p class="font-['Source_Serif_4'] text-base text-[#5A5A4A] leading-relaxed mb-6"> ${event.description ? event.description : ""} </p> <div class="flex flex-wrap gap-6 font-['Source_Serif_4'] text-sm text-[#5A5A4A]"> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#C8992A]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${event.location} </div> </div> </div> <div class="flex flex-col justify-center"> <div class="mb-4"> <span class="font-['Archivo_Narrow'] text-xs uppercase tracking-wider text-[#1A3C2E] bg-[#F7F4EF] px-3 py-2 border border-[#D4C9B0]">
Open for Registration
</span> </div> ${event.registrationLink && renderTemplate`<a${addAttribute(event.registrationLink, "href")} target="_blank" rel="noopener noreferrer" class="bg-[#1A3C2E] text-white px-6 py-4 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-[#C8992A] hover:text-[#141414] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap">
Register Now
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a>`} </div> </div> </article>`;
  })} </div> </div> </section> <section class="py-20 border-t-2 border-[#D4C9B0]"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <h2 class="font-['Playfair_Display'] text-4xl font-bold text-[#1A3C2E] mb-12">
Past Events
</h2> <div class="bg-white border-2 border-[#D4C9B0]"> ${pastEvents.map((event, index) => renderTemplate`<div${addAttribute(`grid md:grid-cols-3 gap-4 items-center p-6 ${index !== pastEvents.length - 1 ? "border-b-2 border-[#D4C9B0]" : ""}`, "class")}> <div class="font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#5A5A4A]"> ${event.date} </div> <div class="font-['DM_Serif_Display'] text-xl text-[#141414]"> ${event.title} </div> <div class="font-['Source_Serif_4'] text-base text-[#5A5A4A]"> ${event.attendees} </div> </div>`)} </div> </div> </section> <section class="py-20 bg-white border-t-4 border-[#C8992A]"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 text-center"> <div class="max-w-2xl mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#C8992A] mx-auto mb-6"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> <h2 class="font-['Playfair_Display'] text-4xl font-bold text-[#1A3C2E] mb-6">
Stay Updated on Upcoming Events
</h2> <p class="font-['Source_Serif_4'] text-lg text-[#5A5A4A] mb-8 leading-relaxed">
Subscribe to our newsletter to receive early registration access and exclusive event updates.
</p> <div class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"> <input type="email" placeholder="Your email address" class="flex-1 px-6 py-4 border-2 border-[#D4C9B0] bg-[#F7F4EF] font-['Source_Serif_4'] text-base focus:outline-none focus:border-[#1A3C2E]"> <button class="bg-[#1A3C2E] text-white px-8 py-4 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-[#C8992A] hover:text-[#141414] transition-all">
Subscribe
</button> </div> </div> </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/pages/events.astro", void 0);

const $$file = "/home/dezmymachine/work/ip_site/astro_version/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
