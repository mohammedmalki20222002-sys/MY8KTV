/**
 * Post-build prerenderer.
 *
 * The site is a client-rendered Vite SPA. Search engines and social crawlers that
 * fetch a blog URL would otherwise receive the generic index.html shell (same title
 * for every route + a canonical pointing at the homepage), which makes the posts
 * un-indexable. This script emits a real static HTML file per route with its own
 * <title>, meta description, canonical, Open Graph / Twitter tags, Article JSON-LD
 * and the actual article text baked into the HTML, so every post is crawlable and
 * indexable as its own page. Runs after `vite build`.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_POSTS } from "../src/data/allPosts";
import { getPostText, getPostLang, type BlogPost } from "../src/data/blogPosts";
import type { LangCode } from "../src/i18n";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITE = "https://www.my-8ktv.com";
const BRAND = "MY.8KTV";

const template = readFileSync(resolve(DIST, "index.html"), "utf8");

const OG_LOCALE: Record<string, string> = {
  fr: "fr_FR", en: "en_US", fi: "fi_FI", de: "de_DE", es: "es_ES", it: "it_IT",
  nl: "nl_NL", sv: "sv_SE", no: "nb_NO", da: "da_DK", pl: "pl_PL", pt: "pt_PT",
  ro: "ro_RO", cs: "cs_CZ", tr: "tr_TR", ar: "ar_AR",
};

const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const stripMd = (s: string): string => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

const truncate = (s: string, n: number): string =>
  s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)).trimEnd() + "…";

/** Convert a body paragraph with [label](url) markdown links into safe HTML with real anchors. */
function paragraphToHtml(text: string): string {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let out = "";
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out += esc(text.slice(last, m.index));
    out += `<a href="${esc(m[2])}" rel="noopener">${esc(m[1])}</a>`;
    last = m.index + m[0].length;
  }
  if (last < text.length) out += esc(text.slice(last));
  return out;
}

interface PageOpts {
  lang: string;
  title: string;
  description: string;
  canonical: string;
  image?: string;
  ogType: "website" | "article";
  jsonLd: object[];
  bodyHtml: string;
}

function buildPage(o: PageOpts): string {
  const locale = OG_LOCALE[o.lang] ?? "en_US";
  const img = o.image ?? `${SITE}/favicon.png`;
  const head = [
    `<meta name="description" content="${esc(o.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<meta property="og:type" content="${o.ogType}" />`,
    `<meta property="og:site_name" content="${BRAND}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="og:title" content="${esc(o.title)}" />`,
    `<meta property="og:description" content="${esc(o.description)}" />`,
    `<meta property="og:url" content="${esc(o.canonical)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(o.title)}" />`,
    `<meta name="twitter:description" content="${esc(o.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
    ...o.jsonLd.map(
      (j) =>
        `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`
    ),
  ].join("\n    ");

  return template
    .replace('<html lang="en">', `<html lang="${o.lang}">`)
    .replace(
      '<link rel="canonical" href="https://www.my-8ktv.com/" />',
      `<link rel="canonical" href="${esc(o.canonical)}" />`
    )
    .replace(
      "<title>MY 8KTV — Premium IPTV Europe</title>",
      `<title>${esc(o.title)}</title>\n    ${head}`
    )
    .replace('<div id="root"></div>', `<div id="root">${o.bodyHtml}</div>`);
}

function postUrl(slug: string): string {
  return `${SITE}/blog/${slug}`;
}

// ---- per-post pages -------------------------------------------------------
let count = 0;
for (const post of ALL_POSTS) {
  const lang = getPostLang(post, "en") as LangCode;
  const t = getPostText(post, lang);
  const canonical = postUrl(post.slug);
  const description = truncate(stripMd(t.excerpt), 160);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: stripMd(t.excerpt),
    image: [post.image],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: lang,
    author: { "@type": "Organization", name: BRAND, url: SITE },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    articleSection: post.category,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: BRAND, item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: t.title, item: canonical },
    ],
  };

  const bodyHtml = [
    `<article>`,
    `<nav><a href="/">${BRAND}</a> › <a href="/blog">Blog</a></nav>`,
    `<p>${esc(post.category)} · ${post.dateISO} · ${post.minutes} min</p>`,
    `<h1>${esc(t.title)}</h1>`,
    `<p>${esc(stripMd(t.excerpt))}</p>`,
    `<img src="${esc(post.image)}" alt="${esc(t.title)}" width="1200" height="675" />`,
    ...t.body.map((p) => `<p>${paragraphToHtml(p)}</p>`),
    `</article>`,
  ].join("\n");

  const html = buildPage({
    lang,
    title: `${t.title} — ${BRAND}`,
    description,
    canonical,
    image: post.image,
    ogType: "article",
    jsonLd: [articleJsonLd, breadcrumbJsonLd],
    bodyHtml,
  });

  const outPath = resolve(DIST, "blog", `${post.slug}.html`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  count++;
}

// ---- /blog grid page ------------------------------------------------------
const sorted = [...ALL_POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
const gridItems = sorted
  .map((post: BlogPost) => {
    const lang = getPostLang(post, "en");
    const t = getPostText(post, lang);
    return [
      `<article>`,
      `<h2><a href="/blog/${post.slug}">${esc(t.title)}</a></h2>`,
      `<p>${esc(stripMd(t.excerpt))}</p>`,
      `<p>${esc(post.category)} · ${post.dateISO}</p>`,
      `</article>`,
    ].join("\n");
  })
  .join("\n");

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${BRAND} Blog`,
  url: `${SITE}/blog`,
  blogPost: sorted.slice(0, 50).map((post) => {
    const t = getPostText(post, getPostLang(post, "en"));
    return {
      "@type": "BlogPosting",
      headline: t.title,
      url: postUrl(post.slug),
      datePublished: post.dateISO,
    };
  }),
};

const blogHtml = buildPage({
  lang: "fr",
  title: `Blog IPTV — Guides, comparatifs & astuces | ${BRAND}`,
  description:
    "Guides IPTV, comparatifs d'applications, astuces de configuration et conseils pour choisir un abonnement IPTV fiable avec MY.8KTV.",
  canonical: `${SITE}/blog`,
  ogType: "website",
  jsonLd: [blogJsonLd],
  bodyHtml: `<h1>Blog ${BRAND}</h1>\n${gridItems}`,
});
writeFileSync(resolve(DIST, "blog.html"), blogHtml, "utf8");

// ---- homepage: add a real meta description --------------------------------
let home = readFileSync(resolve(DIST, "index.html"), "utf8");
if (!home.includes('name="description"')) {
  home = home.replace(
    "<title>MY 8KTV — Premium IPTV Europe</title>",
    `<title>MY 8KTV — Premium IPTV Europe</title>\n    <meta name="description" content="MY.8KTV : abonnement IPTV premium en Europe. Plus de 89 000 chaînes en direct et 200 000 titres en VOD jusqu'en 8K, sur Smart TV, Android, Fire TV et plus." />\n    <meta property="og:type" content="website" />\n    <meta property="og:title" content="MY 8KTV — Premium IPTV Europe" />\n    <meta property="og:url" content="${SITE}/" />\n    <meta property="og:image" content="${SITE}/favicon.png" />`
  );
  writeFileSync(resolve(DIST, "index.html"), home, "utf8");
}

console.log(`Prerendered ${count} post pages + /blog grid + homepage meta.`);
