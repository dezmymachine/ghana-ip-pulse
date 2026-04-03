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
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"> <nav class="bg-white rounded-pill shadow-lg px-6 lg:px-12 py-3"> <div class="flex items-center justify-between"> <a href="/" class="flex items-center gap-2 group"> <div class="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center"> <span class="text-white font-heading font-bold text-sm">IP</span> </div> <span class="font-heading text-lg font-bold text-forest-green">Ghana IP Pulse</span> </a> <div class="hidden lg:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`font-body text-sm font-medium transition-colors ${isActive(link.path) ? "text-warm-gold" : "text-near-black hover:text-warm-gold"}`, "class")}> ${link.label} </a>`)} </div> <a href="/contact" class="hidden lg:flex items-center gap-2 bg-warm-gold text-white px-5 py-2.5 rounded-pill font-body text-sm font-semibold hover:bg-[#9A7209] transition-colors">
Get in Touch
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> <button id="mobile-menu-button" class="lg:hidden p-2 text-forest-green" aria-label="Toggle menu"> <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> <svg id="close-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div id="mobile-menu" class="hidden lg:hidden pt-4 mt-4 border-t border-rule-border"> <div class="flex flex-col gap-3"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`font-body text-sm font-medium py-2 px-3 rounded-pill transition-colors ${isActive(link.path) ? "bg-forest-green/10 text-forest-green" : "text-near-black hover:bg-cream"}`, "class")}> ${link.label} </a>`)} <a href="/contact" class="bg-warm-gold text-white px-5 py-2.5 rounded-pill font-body text-sm font-semibold text-center mt-2">
Get in Touch
</a> </div> </div> </nav> </div> ${renderScript($$result, "/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-forest-green text-white py-16"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <div> <div class="flex items-center gap-2 mb-3"> <div class="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center"> <span class="text-white font-heading font-bold text-sm">IP</span> </div> <span class="font-heading text-2xl font-bold text-white">Ghana IP Pulse</span> </div> <div class="font-body text-sm text-warm-gold mb-4">
Dr Doreen Adoma Agyei
</div> <p class="font-body text-sm leading-relaxed text-white/60">
Protecting Ghana's ideas, one conversation at a time.
</p> </div> <div> <h6 class="font-body text-sm font-semibold text-warm-gold mb-4">
Quick Links
</h6> <div class="flex flex-col gap-2"> <a href="/about" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">About</a> <a href="/blog" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">Blog</a> <a href="/resources" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">Resources</a> <a href="/events" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">Events</a> <a href="/contact" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">Contact</a> </div> </div> <div> <h6 class="font-body text-sm font-semibold text-warm-gold mb-4">
Connect
</h6> <div class="flex flex-col gap-2"> <a href="mailto:info@ghanaippulse.com" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">info@ghanaippulse.com</a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">LinkedIn</a> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="font-body text-sm text-white/70 hover:text-warm-gold transition-colors">Twitter</a> </div> </div> </div> <div class="border-t border-white/10 mt-12 pt-8 text-center"> <p class="font-body text-sm text-white/40">
© ${currentYear} Ghana IP Pulse. All rights reserved.
</p> </div> </div> </footer>`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Navigation as a, $$Footer as b };
