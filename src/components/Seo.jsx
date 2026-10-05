import { useEffect } from "react";

export const siteUrl = "https://dentizor.com";

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const [key, name] = attribute;
    element.setAttribute(key, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
};

const Seo = ({ title, description, path = "/", keywords = [], schema, noIndex = false }) => {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
    document.title = title;

    setMeta('meta[name="description"]', ["name", "description"], description);
    setMeta('meta[name="keywords"]', ["name", "keywords"], keywords.join(", "));
    setMeta('meta[name="robots"]', ["name", "robots"], noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', ["property", "og:title"], title);
    setMeta('meta[property="og:description"]', ["property", "og:description"], description);
    setMeta('meta[property="og:url"]', ["property", "og:url"], canonicalUrl);
    setMeta('meta[property="og:type"]', ["property", "og:type"], "website");
    setMeta('meta[property="og:site_name"]', ["property", "og:site_name"], "Dentizor");
    setMeta('meta[name="twitter:card"]', ["name", "twitter:card"], "summary");
    setMeta('meta[name="twitter:title"]', ["name", "twitter:title"], title);
    setMeta('meta[name="twitter:description"]', ["name", "twitter:description"], description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    let structuredData = document.getElementById("dentizor-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "dentizor-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(schema || {});
  }, [description, keywords, noIndex, path, schema, title]);

  return null;
};

export default Seo;
