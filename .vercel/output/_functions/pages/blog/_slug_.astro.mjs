import '../../chunks/page-ssr_1r5k1de_.mjs';
import { e as createComponent, m as maybeRenderHead, s as spreadAttributes, l as renderSlot, r as renderTemplate, k as renderComponent, h as createAstro, g as addAttribute, n as Fragment } from '../../chunks/astro/server_Ckj7vkEy.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation, b as $$Footer } from '../../chunks/Footer_BveRwjYF.mjs';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import { u as urlForImage } from '../../chunks/url-for-image_DcHeVIBa.mjs';
/* empty css                                     */
import { l as loadQuery } from '../../chunks/load-query_C0O5pCeF.mjs';
export { renderers } from '../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$8 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$7 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$6 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "/home/dezmymachine/work/ip_site/astro_version/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortableTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableTextImage;
  const { node } = Astro2.props;
  const { asset, alt, caption } = node;
  const imageUrl = urlForImage(asset).url();
  const webpUrl = urlForImage(asset).format("webp").url();
  return renderTemplate`${maybeRenderHead()}<figure class="portable-text-image" data-astro-cid-7qtuayrv> <picture data-astro-cid-7qtuayrv> <source${addAttribute(webpUrl, "srcset")} type="image/webp" data-astro-cid-7qtuayrv> <img${addAttribute(imageUrl, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async" data-astro-cid-7qtuayrv> </picture> ${caption && renderTemplate`<figcaption data-astro-cid-7qtuayrv>${caption}</figcaption>`} </figure> `;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/PortableTextImage.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { portableText } = Astro2.props;
  const components = {
    type: {
      image: $$PortableTextImage
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="prose-content"> ${renderComponent($$result, "PortableTextInternal", $$PortableText$1, { "value": portableText, "components": components })} </div>`;
}, "/home/dezmymachine/work/ip_site/astro_version/src/components/PortableText.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]{ slug }`
  });
  return posts.map(({ slug }) => {
    return {
      params: {
        slug: slug.current
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { params } = Astro2;
  const { data: post } = await loadQuery({
    query: `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    author->{ name },
    categories[]->{ title }
  }`,
    params
  });
  if (!post) {
    Astro2.redirect("/404");
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  const mainImageUrl = post?.mainImage ? urlForImage(post.mainImage).url() : null;
  const pageTitle = post?.title || "Blog Post";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main class="flex-1 pt-20" data-astro-cid-4sn4zg3r> <article class="min-h-screen" data-astro-cid-4sn4zg3r> <div class="lg:hidden" data-astro-cid-4sn4zg3r> <div class="bg-white px-6 py-8" data-astro-cid-4sn4zg3r> <div class="max-w-3xl mx-auto space-y-4" data-astro-cid-4sn4zg3r> ${post?.categories && post.categories.length > 0 && renderTemplate`<div class="inline-block bg-warm-gold/10 text-warm-gold px-3 py-1 rounded-pill text-xs font-body font-semibold uppercase tracking-wider" data-astro-cid-4sn4zg3r> ${post.categories[0].title} </div>`} <h1 class="font-heading text-3xl md:text-4xl font-bold text-forest-green leading-tight" data-astro-cid-4sn4zg3r> ${post?.title} </h1> ${post?.excerpt && renderTemplate`<p class="font-body text-lg text-muted-text leading-relaxed" data-astro-cid-4sn4zg3r> ${post.excerpt} </p>`} <div class="flex items-center gap-4 pt-2" data-astro-cid-4sn4zg3r> ${post?.author && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <div class="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center" data-astro-cid-4sn4zg3r> <span class="text-white font-body font-bold text-sm" data-astro-cid-4sn4zg3r> ${post.author.name.charAt(0)} </span> </div> <span class="font-body text-sm font-medium text-forest-green" data-astro-cid-4sn4zg3r> ${post.author.name} </span> </div>`} ${post?.publishedAt && renderTemplate`<time class="font-body text-sm text-muted-text"${addAttribute(post.publishedAt, "datetime")} data-astro-cid-4sn4zg3r> ${formatDate(post.publishedAt)} </time>`} </div> <div class="flex items-center gap-3 pt-4" data-astro-cid-4sn4zg3r> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green/5 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-astro-cid-4sn4zg3r></path> </svg> </button> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green/5 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-4sn4zg3r></path> </svg> </button> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green/5 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-astro-cid-4sn4zg3r></path> </svg> </button> </div> </div> </div> ${mainImageUrl && renderTemplate`<div class="w-full" data-astro-cid-4sn4zg3r> <img${addAttribute(mainImageUrl, "src")}${addAttribute(post?.title, "alt")} class="w-full h-auto object-cover" data-astro-cid-4sn4zg3r> </div>`} </div> <div class="hidden lg:block" data-astro-cid-4sn4zg3r> <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12" data-astro-cid-4sn4zg3r> <div class="flex gap-12" data-astro-cid-4sn4zg3r> <aside class="w-32 flex-shrink-0 sticky top-28 h-fit" data-astro-cid-4sn4zg3r> <div class="space-y-6" data-astro-cid-4sn4zg3r> ${post?.author && renderTemplate`<div class="space-y-2" data-astro-cid-4sn4zg3r> <div class="font-body text-xs text-muted-text uppercase tracking-wide" data-astro-cid-4sn4zg3r>Written by</div> <div class="flex flex-col items-start gap-2" data-astro-cid-4sn4zg3r> <div class="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center text-white font-heading font-bold text-lg" data-astro-cid-4sn4zg3r> ${post.author.name.charAt(0)} </div> <span class="font-body text-sm font-semibold text-forest-green" data-astro-cid-4sn4zg3r> ${post.author.name} </span> </div> </div>`} ${post?.publishedAt && renderTemplate`<div class="space-y-1" data-astro-cid-4sn4zg3r> <div class="font-body text-xs text-muted-text uppercase tracking-wide" data-astro-cid-4sn4zg3r>Published</div> <time class="font-body text-sm text-near-black"${addAttribute(post.publishedAt, "datetime")} data-astro-cid-4sn4zg3r> ${formatDate(post.publishedAt)} </time> </div>`} <div class="space-y-1" data-astro-cid-4sn4zg3r> <div class="font-body text-xs text-muted-text uppercase tracking-wide" data-astro-cid-4sn4zg3r>Share</div> <div class="flex flex-col gap-2" data-astro-cid-4sn4zg3r> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors group" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-astro-cid-4sn4zg3r></path> </svg> </button> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors group" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-4sn4zg3r></path> </svg> </button> <button class="w-10 h-10 rounded-full border-2 border-forest-green/20 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors group" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-forest-green group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-astro-cid-4sn4zg3r></path> </svg> </button> </div> </div> </div> </aside> <main class="flex-1 max-w-3xl" data-astro-cid-4sn4zg3r> ${post?.categories && post.categories.length > 0 && renderTemplate`<div class="mb-6" data-astro-cid-4sn4zg3r> <span class="inline-block bg-warm-gold/10 text-warm-gold px-3 py-1 rounded-pill text-xs font-body font-semibold uppercase tracking-wider" data-astro-cid-4sn4zg3r> ${post.categories[0].title} </span> </div>`} <h1 class="font-heading text-4xl lg:text-5xl font-bold text-forest-green leading-tight mb-6" data-astro-cid-4sn4zg3r> ${post?.title} </h1> ${post?.excerpt && renderTemplate`<p class="font-body text-xl text-muted-text leading-relaxed mb-8" data-astro-cid-4sn4zg3r> ${post.excerpt} </p>`} ${mainImageUrl && renderTemplate`<div class="mb-10 rounded-card overflow-hidden" data-astro-cid-4sn4zg3r> <img${addAttribute(mainImageUrl, "src")}${addAttribute(post?.title, "alt")} class="w-full h-auto object-cover" data-astro-cid-4sn4zg3r> </div>`} <div class="article-content font-body text-lg text-near-black leading-relaxed" data-astro-cid-4sn4zg3r> ${post?.body && renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body, "data-astro-cid-4sn4zg3r": true })}`} </div> </main> </div> </div> </div> <div class="lg:hidden px-6 py-8 bg-cream" data-astro-cid-4sn4zg3r> <div class="max-w-3xl mx-auto" data-astro-cid-4sn4zg3r> <div class="article-content font-body text-base text-near-black leading-relaxed" data-astro-cid-4sn4zg3r> ${post?.body && renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body, "data-astro-cid-4sn4zg3r": true })}`} </div> </div> </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} ` })} `;
}, "/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
