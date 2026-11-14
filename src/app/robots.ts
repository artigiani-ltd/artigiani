import type { MetadataRoute } from "next";
import { isIndexable } from "./constants/indexing";
import { siteUrl } from "./constants/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(isIndexable && { sitemap: new URL("/sitemap.xml", siteUrl).href }),
  };
}
