import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, g as addAttribute, p as renderHead, l as renderSlot, m as maybeRenderHead, o as renderScript } from './astro/server_Ckj7vkEy.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$VisualEditing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VisualEditing;
  const { enabled, zIndex } = Astro2.props;
  return renderTemplate`${enabled ? renderTemplate`${renderComponent($$result, "VisualEditingComponent", null, { "client:only": "react", "zIndex": zIndex, "client:component-hydration": "only", "client:component-path": "/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component", "client:component-export": "VisualEditingComponent" })}` : null}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/astro/dist/visual-editing/visual-editing.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const pageTitle = title ? `${title} | Ghana IP Pulse` : "Ghana IP Pulse";
  const metaDescription = description || "Expert guidance on intellectual property law for entrepreneurs, creatives, and students navigating Ghana's innovation landscape.";
  const visualEditingEnabled = false;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(metaDescription, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "VisualEditing", $$VisualEditing, { "enabled": visualEditingEnabled })} </body></html>`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/resources", label: "Resources" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" }
  ];
  const currentPath = Astro2.url.pathname;
  const isActive = (path) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white border-b-2 border-[#D4C9B0] sticky top-0 z-50"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="flex items-center justify-between h-20"> <a href="/" class="flex items-center group"> <div> <div class="font-['Playfair_Display'] text-2xl font-bold text-[#1A3C2E] tracking-tight">
Ghana IP Pulse
</div> <div class="font-['Archivo_Narrow'] text-xs uppercase tracking-wider text-[#5A5A4A] mt-0.5">
Dr Doreen Adoma Agyei
</div> </div> </a> <div class="hidden lg:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")} class="relative font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#141414] hover:text-[#C8992A] transition-colors group"> ${link.label} <span${addAttribute(`absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#C8992A] transition-all ${isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, "class")}></span> </a>`)} <a href="/contact" class="bg-[#C8992A] text-[#141414] px-6 py-3 font-['Archivo_Narrow'] text-sm uppercase tracking-wider hover:bg-transparent hover:text-[#141414] border-2 border-[#C8992A] transition-all">
Get in Touch
</a> </div> <button id="mobile-menu-button" class="lg:hidden p-2 text-[#141414]" aria-label="Toggle menu"> <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> <svg id="close-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div id="mobile-menu" class="hidden lg:hidden border-t-2 border-[#D4C9B0] py-6"> <div class="flex flex-col gap-4"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`font-['Archivo_Narrow'] text-sm uppercase tracking-wider py-2 border-l-4 pl-4 transition-colors ${isActive(link.path) ? "border-[#C8992A] text-[#C8992A]" : "border-transparent text-[#141414] hover:border-[#D4C9B0] hover:text-[#C8992A]"}`, "class")}> ${link.label} </a>`)} <a href="/contact" class="bg-[#C8992A] text-[#141414] px-6 py-3 font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-center mt-4">
Get in Touch
</a> </div> </div> </div> </nav> ${renderScript($$result, "/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#1A3C2E] text-white border-t-4 border-[#C8992A] mt-24"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 py-16"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <div> <div class="font-['Playfair_Display'] text-3xl font-bold mb-2">
Ghana IP Pulse
</div> <div class="font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#C8992A] mb-4">
Dr Doreen Adoma Agyei
</div> <p class="font-['Source_Serif_4'] text-sm leading-relaxed text-gray-300">
Protecting Ghana's ideas, one conversation at a time.
</p> </div> <div> <h6 class="font-['Archivo_Narrow'] text-xs uppercase tracking-wider text-[#C8992A] mb-4">
Quick Links
</h6> <div class="flex flex-col gap-2"> <a href="/about" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">About</a> <a href="/blog" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">Blog</a> <a href="/resources" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">Resources</a> <a href="/events" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">Events</a> <a href="/contact" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">Contact</a> </div> </div> <div> <h6 class="font-['Archivo_Narrow'] text-xs uppercase tracking-wider text-[#C8992A] mb-4">
Connect
</h6> <div class="flex flex-col gap-2"> <a href="mailto:info@ghanaippulse.com" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">info@ghanaippulse.com</a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">LinkedIn</a> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="font-['Source_Serif_4'] text-sm text-gray-300 hover:text-[#C8992A] transition-colors">Twitter</a> </div> </div> </div> <div class="border-t border-[#C8992A] mt-12 pt-8 text-center"> <p class="font-['Source_Serif_4'] text-sm text-gray-400">
© ${currentYear} Ghana IP Pulse. All rights reserved.
</p> </div> </div> </footer>`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Navigation as a, $$Footer as b };
