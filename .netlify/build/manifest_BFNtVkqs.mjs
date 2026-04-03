import 'piccolore';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DEKaHIU-.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/dezmymachine/work/ip_site/astro_version/","cacheDir":"file:///home/dezmymachine/work/ip_site/astro_version/node_modules/.astro/","outDir":"file:///home/dezmymachine/work/ip_site/astro_version/dist/","srcDir":"file:///home/dezmymachine/work/ip_site/astro_version/src/","publicDir":"file:///home/dezmymachine/work/ip_site/astro_version/public/","buildClientDir":"file:///home/dezmymachine/work/ip_site/astro_version/dist/","buildServerDir":"file:///home/dezmymachine/work/ip_site/astro_version/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"events/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":false,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.BwTzgi16.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/dezmymachine/work/ip_site/astro_version/src/pages/resources.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/resources@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BFNtVkqs.mjs","/home/dezmymachine/work/ip_site/astro_version/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/home/dezmymachine/work/ip_site/astro_version/src/pages/resources.astro?astro&type=script&index=0&lang.ts":"_astro/resources.astro_astro_type_script_index_0_lang.CNaV6ovC.js","/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.BnRgB1NM.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources2.js":"_astro/resources2.z2LjOoLF.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources6.js":"_astro/resources6.BHmPcXiL.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources5.js":"_astro/resources5._cj4DSCT.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources4.js":"_astro/resources4.CyoBEigJ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources.js":"_astro/resources.CllKy0f2.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources3.js":"_astro/resources3.TIj65zuI.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js":"_astro/ViteDevServerStopped.h092jFwZ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/refractor/lang/bash.js":"_astro/bash.CG6S6Dwl.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/refractor/lang/json.js":"_astro/json.unC8z3UW.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/refractor/lang/typescript.js":"_astro/typescript.TImZN0qJ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Dd2HB-M4.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.B0tQdbuF.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/index2.js":"_astro/index2.e78oCUm5.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/index3.js":"_astro/index3.0e8XS1hV.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources8.js":"_astro/resources8.BYBeJXDT.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.js":"_astro/BroadcastDisplayedDocument.CSySEXgj.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/resources7.js":"_astro/resources7.DaF0-XgN.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/visual-editing/dist/_chunks-es/LoaderComlink.js":"_astro/LoaderComlink.Bu-jy0Y3.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/QRCodeSVG.js":"_astro/QRCodeSVG.hmWmi7Vf.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.js":"_astro/PostMessageDocuments.BvzwTcNv.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.js":"_astro/PostMessageRefreshMutations.eohM-tjJ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.js":"_astro/PostMessagePerspective.E2v4hOnc.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessageSchema.js":"_astro/PostMessageSchema.ePFqehP4.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.js":"_astro/PostMessageTelemetry.GBaqB0aI.js","@astrojs/react/client.js":"_astro/client.8HIMv5In.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/refractor/lang/jsx.js":"_astro/jsx.B6rkBCHQ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/refractor/lang/javascript.js":"_astro/javascript.BJ-GTedN.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/index4.js":"_astro/index4.B36oVrk4.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.js":"_astro/PostMessagePreviewSnapshots.CWKPBlfS.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/urlpattern-polyfill/index.js":"_astro/index.DPyTNidZ.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/LiveQueries.js":"_astro/LiveQueries.DFpDcM_I.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/PresentationToolGrantsCheck.js":"_astro/PresentationToolGrantsCheck.BiPDu4SX.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/react-refractor/dist/index.js":"_astro/index.BOuKKNwm.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/sanity/lib/_chunks-es/VideoPlayer.js":"_astro/VideoPlayer.B2r9EYyb.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.DP3nwKwH.js","/home/dezmymachine/work/ip_site/astro_version/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.D3XFxKQ4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/dezmymachine/work/ip_site/astro_version/src/pages/resources.astro?astro&type=script&index=0&lang.ts","const o=document.querySelectorAll(\".faq-toggle\");o.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-index\"),n=document.querySelector(`.faq-answer[data-index=\"${t}\"]`),s=e.querySelector(\".plus-icon\"),c=e.querySelector(\".minus-icon\");n?.classList.toggle(\"hidden\"),s?.classList.toggle(\"hidden\"),c?.classList.toggle(\"hidden\")})});"],["/home/dezmymachine/work/ip_site/astro_version/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),n=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"menu-icon\"),o=document.getElementById(\"close-icon\");e?.addEventListener(\"click\",()=>{n?.classList.toggle(\"hidden\"),t?.classList.toggle(\"hidden\"),o?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/studio-route.BwTzgi16.css","/_astro/about.D5-mD4Ga.css","/_astro/_slug_.BZMfuIMH.css","/favicon.svg","/headshot.png","/_astro/BroadcastDisplayedDocument.CSySEXgj.js","/_astro/DisplayedDocumentBroadcaster.BWhqGTSj.js","/_astro/LiveQueries.DFpDcM_I.js","/_astro/LoaderComlink.Bu-jy0Y3.js","/_astro/PostMessageDocuments.BvzwTcNv.js","/_astro/PostMessagePerspective.E2v4hOnc.js","/_astro/PostMessagePreviewSnapshots.CWKPBlfS.js","/_astro/PostMessageRefreshMutations.eohM-tjJ.js","/_astro/PostMessageSchema.ePFqehP4.js","/_astro/PostMessageTelemetry.GBaqB0aI.js","/_astro/PresentationToolGrantsCheck.BiPDu4SX.js","/_astro/QRCodeSVG.hmWmi7Vf.js","/_astro/VideoPlayer.B2r9EYyb.js","/_astro/ViteDevServerStopped.h092jFwZ.js","/_astro/bash.CG6S6Dwl.js","/_astro/browser.Cb0XVXqD.js","/_astro/client.8HIMv5In.js","/_astro/client.Q0zJXbii.js","/_astro/index.BOuKKNwm.js","/_astro/index.CcishcJx.js","/_astro/index.CtgYFdqk.js","/_astro/index.DPyTNidZ.js","/_astro/index.DQnGDcRu.js","/_astro/index2.e78oCUm5.js","/_astro/index3.0e8XS1hV.js","/_astro/index4.B36oVrk4.js","/_astro/javascript.BJ-GTedN.js","/_astro/json.unC8z3UW.js","/_astro/jsx.B6rkBCHQ.js","/_astro/pane2.D-r7sqVr.js","/_astro/refractor.B0tQdbuF.js","/_astro/resources.CllKy0f2.js","/_astro/resources2.z2LjOoLF.js","/_astro/resources3.TIj65zuI.js","/_astro/resources4.CyoBEigJ.js","/_astro/resources5._cj4DSCT.js","/_astro/resources6.BHmPcXiL.js","/_astro/resources7.DaF0-XgN.js","/_astro/resources8.BYBeJXDT.js","/_astro/stegaEncodeSourceMap.Dd2HB-M4.js","/_astro/studio-component.D3XFxKQ4.js","/_astro/typescript.TImZN0qJ.js","/_astro/visual-editing-component.DP3nwKwH.js","/_astro/visual-editing-component.uYy-85Ah.js","/about/index.html","/blog/index.html","/contact/index.html","/events/index.html","/resources/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"n38yLdkWFw4/9eJ6nKfOE+5v7E+eK4lV1F3qDPcCT1Q=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
