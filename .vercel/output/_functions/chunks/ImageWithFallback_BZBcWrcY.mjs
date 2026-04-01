import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$ImageWithFallback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageWithFallback;
  const { src, alt, class: className } = Astro2.props;
  const ERROR_IMG_SRC = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(className, "class")}${addAttribute(`this.onerror=null;this.src='${ERROR_IMG_SRC}';`, "onerror")}>`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/ImageWithFallback.astro", void 0);

export { $$ImageWithFallback as $ };
