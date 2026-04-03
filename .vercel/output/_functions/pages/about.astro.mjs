import '../chunks/page-ssr_1r5k1de_.mjs';
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_BveRwjYF.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex-1 pt-24 lg:pt-28"> <div class="bg-cream"> <section class="bg-white border-b-4 border-warm-gold py-20"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="flex items-baseline gap-4 mb-6"> <span class="text-6xl text-warm-gold">§</span> <h1 class="text-6xl lg:text-7xl font-bold text-forest-green">
About Dr Agyei
</h1> </div> <div class="w-32 h-1 bg-warm-gold"></div> </div> </section> <section class="py-20"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="grid lg:grid-cols-2 gap-16 mb-24"> <div> <div class="border-4 border-forest-green overflow-hidden"> <div class="aspect-[3/4] bg-[#D4C9B0]"> ${renderComponent($$result2, "ImageWithFallback", $$ImageWithFallback, { "src": "https://images.unsplash.com/photo-1686628332798-757c624c4b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4MDgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=800", "alt": "Dr Doreen Adoma Agyei", "class": "w-full h-full object-cover" })} </div> </div> </div> <div> <div class="mb-12"> <h2 class="text-4xl text-forest-green mb-6">
Bridging Law and Innovation
</h2> <div class="space-y-6 text-lg text-near-black leading-relaxed"> <p>
Dr Doreen Adoma Agyei is a leading intellectual property law expert specializing in the intersection of innovation, creativity, and legal protection in Ghana and across West Africa. With over a decade of experience in IP law, she has become a trusted voice for entrepreneurs, artists, and policymakers navigating the complexities of intellectual property rights.
</p> <p>
Her work focuses on democratizing access to IP knowledge, ensuring that Ghana's innovators—from tech startups to traditional artisans—understand how to protect and monetize their creative and commercial assets. Through Ghana IP Pulse, she provides practical education, legal analysis, and strategic guidance tailored to the African context.
</p> <p>
Dr Agyei holds a PhD in Intellectual Property Law from the University of Ghana, where her research examined the effectiveness of regional IP frameworks in fostering economic development. She is a member of the Ghana Bar Association and has advised numerous organizations, including the Ghana Intellectual Property Commission (GIPC) and the African Regional Intellectual Property Organization (ARIPO).
</p> <p>
Beyond her legal practice, Dr Agyei is a passionate educator. She regularly conducts workshops for creative professionals, lectures at universities, and publishes scholarly articles on copyright, trademark, and patent law. Her commitment is to ensure that intellectual property law serves as a tool for empowerment, not exclusion.
</p> </div> </div> <div class="border-l-4 border-warm-gold pl-8 py-6 bg-white"> <p class="text-3xl italic text-forest-green leading-relaxed">
"Intellectual property law should never be a barrier to innovation. It should be the foundation upon which Ghana's creative and entrepreneurial economy is built."
</p> <div class="mt-4 text-sm uppercase tracking-wider text-muted-text">
— Dr Doreen Adoma Agyei
</div> </div> </div> </div> <div class="mb-24"> <h2 class="text-4xl font-bold text-forest-green mb-8">
Credentials & Expertise
</h2> <div class="bg-white border-2 border-rule-border"> ${credentials.map((credential, index) => renderTemplate`<div${addAttribute(`grid md:grid-cols-3 gap-4 p-6 ${index !== credentials.length - 1 ? "border-b border-rule-border" : ""}`, "class")}> <div class="text-sm uppercase tracking-wider text-muted-text"> ${credential.label} </div> <div class="md:col-span-2 text-lg text-near-black"> ${credential.value} </div> </div>`)} </div> </div> <div> <div class="flex items-baseline gap-4 mb-8"> <span class="text-5xl text-warm-gold">§</span> <h2 class="text-4xl font-bold text-forest-green">
Why I Do This Work
</h2> </div> <div class="bg-white border-2 border-rule-border p-10 lg:p-16"> <div class="space-y-6 text-lg text-near-black leading-relaxed max-w-4xl"> <p>
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
