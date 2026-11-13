import type { MetadataRoute } from "next";
import { isIndexable } from "./constants/indexing";
import { siteUrl } from "./constants/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return isIndexable ? [{ url: siteUrl.href }] : [];
}
