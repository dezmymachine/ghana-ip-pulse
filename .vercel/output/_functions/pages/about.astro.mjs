import '../chunks/page-ssr_CZGsHcuX.mjs';
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_goDCtEOC.mjs';
import { $ as $$ImageWithFallback } from '../chunks/ImageWithFallback_BZBcWrcY.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const credentials = [
    { label: "Education", value: "PhD in Intellectual Property Law, University of Ghana" },
    { label: "Bar Admission", value: "Ghana Bar Association, 2014" },
    { label: "Specialization", value: "Copyright, Trademark, and Patent Law" },
    { label: "Experience", value: "12+ years in IP law and education" },
    { label: "Affiliations", value: "African Regional Intellectual Property Organization (ARIPO)" },
    { label: "Publications", value: "15+ peer-reviewed articles on West African IP law" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex-1"> <div class="bg-[#F7F4EF]"> <section class="bg-white border-b-4 border-[#C8992A] py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="flex items-baseline gap-4 mb-6"> <span class="font-['Playfair_Display'] text-6xl text-[#C8992A]">§</span> <h1 class="font-['Playfair_Display'] text-6xl lg:text-7xl font-bold text-[#1A3C2E]">
About Dr Agyei
</h1> </div> <div class="w-32 h-1 bg-[#C8992A]"></div> </div> </section> <section class="py-20"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="grid lg:grid-cols-2 gap-16 mb-24"> <div> <div class="border-4 border-[#1A3C2E] overflow-hidden"> <div class="aspect-[3/4] bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": "https://images.unsplash.com/photo-1686628332798-757c624c4b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4MDgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=800", "alt": "Dr Doreen Adoma Agyei", "class": "w-full h-full object-cover" })} </div> </div> </div> <div> <div class="mb-12"> <h2 class="font-['DM_Serif_Display'] text-4xl text-[#1A3C2E] mb-6">
Bridging Law and Innovation
</h2> <div class="space-y-6 font-['Source_Serif_4'] text-lg text-[#141414] leading-relaxed"> <p>
Dr Doreen Adoma Agyei is a leading intellectual property law expert specializing in the intersection of innovation, creativity, and legal protection in Ghana and across West Africa. With over a decade of experience in IP law, she has become a trusted voice for entrepreneurs, artists, and policymakers navigating the complexities of intellectual property rights.
</p> <p>
Her work focuses on democratizing access to IP knowledge, ensuring that Ghana's innovators—from tech startups to traditional artisans—understand how to protect and monetize their creative and commercial assets. Through Ghana IP Pulse, she provides practical education, legal analysis, and strategic guidance tailored to the African context.
</p> <p>
Dr Agyei holds a PhD in Intellectual Property Law from the University of Ghana, where her research examined the effectiveness of regional IP frameworks in fostering economic development. She is a member of the Ghana Bar Association and has advised numerous organizations, including the Ghana Intellectual Property Commission (GIPC) and the African Regional Intellectual Property Organization (ARIPO).
</p> <p>
Beyond her legal practice, Dr Agyei is a passionate educator. She regularly conducts workshops for creative professionals, lectures at universities, and publishes scholarly articles on copyright, trademark, and patent law. Her commitment is to ensure that intellectual property law serves as a tool for empowerment, not exclusion.
</p> </div> </div> <div class="border-l-4 border-[#C8992A] pl-8 py-6 bg-white"> <p class="font-['DM_Serif_Display'] text-3xl italic text-[#1A3C2E] leading-relaxed">
"Intellectual property law should never be a barrier to innovation. It should be the foundation upon which Ghana's creative and entrepreneurial economy is built."
</p> <div class="mt-4 font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#5A5A4A]">
— Dr Doreen Adoma Agyei
</div> </div> </div> </div> <div class="mb-24"> <h2 class="font-['Playfair_Display'] text-4xl font-bold text-[#1A3C2E] mb-8">
Credentials & Expertise
</h2> <div class="bg-white border-2 border-[#D4C9B0]"> ${credentials.map((credential, index) => renderTemplate`<div${addAttribute(`grid md:grid-cols-3 gap-4 p-6 ${index !== credentials.length - 1 ? "border-b border-[#D4C9B0]" : ""}`, "class")}> <div class="font-['Archivo_Narrow'] text-sm uppercase tracking-wider text-[#5A5A4A]"> ${credential.label} </div> <div class="md:col-span-2 font-['Source_Serif_4'] text-lg text-[#141414]"> ${credential.value} </div> </div>`)} </div> </div> <div> <div class="flex items-baseline gap-4 mb-8"> <span class="font-['Playfair_Display'] text-5xl text-[#C8992A]">§</span> <h2 class="font-['Playfair_Display'] text-4xl font-bold text-[#1A3C2E]">
Why I Do This Work
</h2> </div> <div class="bg-white border-2 border-[#D4C9B0] p-10 lg:p-16"> <div class="space-y-6 font-['Source_Serif_4'] text-lg text-[#141414] leading-relaxed max-w-4xl"> <p>
Growing up in Ghana, I witnessed countless talented individuals—musicians, inventors, designers—lose control of their creations simply because they didn't understand their legal rights. Intellectual property law felt like an exclusive domain, accessible only to large corporations or those with expensive lawyers.
</p> <p>
That disconnect drove me to pursue a career in IP law with a mission: to make this field understandable, accessible, and actionable for everyday Ghanaians. Whether you're a solo entrepreneur protecting your brand, a musician securing your compositions, or a student researching innovation policy, you deserve clear, practical guidance.
</p> <p>
Ghana IP Pulse exists to bridge the gap between complex legal frameworks and real-world application. Through articles, workshops, and consultations, I aim to empower Ghana's creative and entrepreneurial community to protect what they build, enforce their rights when necessary, and navigate the IP landscape with confidence.
</p> <p>
This work is about more than law—it's about equity, economic empowerment, and ensuring that the next generation of Ghanaian innovators can thrive in a system that respects and protects their contributions.
</p> </div> </div> </div> </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/pages/about.astro", void 0);

const $$file = "/home/dezmymachine/work/ip_site/astro_version/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
